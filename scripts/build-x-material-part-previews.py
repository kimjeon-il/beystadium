from __future__ import annotations

import argparse
import hashlib
import json
import urllib.request
from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "data" / "source" / "x-part-preview-color-derivations.json"
TARGET_CACHE = ROOT / ".cache" / "x-material-part-targets"
CANVAS = 448


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        while block := stream.read(1024 * 1024):
            digest.update(block)
    return digest.hexdigest()


def load_rgba(path: Path) -> np.ndarray:
    return np.asarray(Image.open(path).convert("RGBA"), dtype=np.uint8)


def alpha_bbox(alpha: np.ndarray) -> tuple[int, int, int, int]:
    yy, xx = np.where(alpha > 4)
    if not len(xx):
        raise ValueError("empty alpha foreground")
    return int(xx.min()), int(yy.min()), int(xx.max()) + 1, int(yy.max()) + 1


def foreground(rgba: np.ndarray) -> np.ndarray:
    return rgba[..., 3] > 4


def srgb_to_lab(rgb: np.ndarray) -> np.ndarray:
    value = rgb.astype(np.float64) / 255.0
    value = np.where(value <= 0.04045, value / 12.92, ((value + 0.055) / 1.055) ** 2.4)
    matrix = np.array(
        [
            [0.4124564, 0.3575761, 0.1804375],
            [0.2126729, 0.7151522, 0.0721750],
            [0.0193339, 0.1191920, 0.9503041],
        ]
    )
    xyz = value @ matrix.T
    xyz /= np.array([0.95047, 1.0, 1.08883])
    epsilon = 216 / 24389
    kappa = 24389 / 27
    fxyz = np.where(xyz > epsilon, np.cbrt(xyz), (kappa * xyz + 16) / 116)
    return np.stack(
        [
            116 * fxyz[..., 1] - 16,
            500 * (fxyz[..., 0] - fxyz[..., 1]),
            200 * (fxyz[..., 1] - fxyz[..., 2]),
        ],
        axis=-1,
    )


def lab_to_srgb(lab: np.ndarray) -> np.ndarray:
    fy = (lab[..., 0] + 16) / 116
    fx = fy + lab[..., 1] / 500
    fz = fy - lab[..., 2] / 200
    epsilon = 216 / 24389
    kappa = 24389 / 27
    stacked = np.stack([fx, fy, fz], axis=-1)
    xyz = np.where(stacked**3 > epsilon, stacked**3, (116 * stacked - 16) / kappa)
    xyz *= np.array([0.95047, 1.0, 1.08883])
    inverse = np.array(
        [
            [3.2404542, -1.5371385, -0.4985314],
            [-0.9692660, 1.8760108, 0.0415560],
            [0.0556434, -0.2040259, 1.0572252],
        ]
    )
    linear = xyz @ inverse.T
    srgb = np.where(
        linear <= 0.0031308,
        12.92 * linear,
        1.055 * np.maximum(linear, 0) ** (1 / 2.4) - 0.055,
    )
    return np.clip(np.round(srgb * 255), 0, 255).astype(np.uint8)


def recanvas_official(target: np.ndarray) -> np.ndarray:
    left, top, right, bottom = alpha_bbox(target[..., 3])
    crop = Image.fromarray(target, "RGBA").crop((left, top, right, bottom))
    scale = min(436 / crop.width, 436 / crop.height)
    size = (max(1, round(crop.width * scale)), max(1, round(crop.height * scale)))
    if size != crop.size:
        crop = crop.resize(size, Image.Resampling.LANCZOS)
    result = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    result.alpha_composite(crop, ((CANVAS - crop.width) // 2, (CANVAS - crop.height) // 2))
    return np.asarray(result, dtype=np.uint8)


def align_target(source: np.ndarray, target: np.ndarray) -> np.ndarray:
    source_left, source_top, source_right, source_bottom = alpha_bbox(source[..., 3])
    target_left, target_top, target_right, target_bottom = alpha_bbox(target[..., 3])
    crop = Image.fromarray(target, "RGBA").crop(
        (target_left, target_top, target_right, target_bottom)
    )
    crop = crop.resize(
        (source_right - source_left, source_bottom - source_top),
        Image.Resampling.LANCZOS,
    )
    aligned = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    aligned.alpha_composite(crop, (source_left, source_top))
    return np.asarray(aligned, dtype=np.uint8)


def prepare_target(target: np.ndarray) -> np.ndarray:
    if max(target.shape[:2]) <= 512:
        return target
    result = target.copy()
    result[..., 3][result[..., 3] <= 250] = 0
    return result


def derive_material_variant(
    source: np.ndarray,
    target: np.ndarray,
    labels: np.ndarray,
) -> tuple[np.ndarray, np.ndarray]:
    high_detail_target = max(target.shape[:2]) > 512
    target = prepare_target(target)
    aligned = align_target(source, target)
    source_lab = srgb_to_lab(source[..., :3])
    target_lab = srgb_to_lab(aligned[..., :3])
    result = source.copy()
    changed = np.zeros(labels.shape, dtype=bool)
    material_settings = {
        1: (0.84, 0.05),
        2: (0.82, 0.04),
        3: (0.86, 0.05),
        4: (0.92, 0.02),
        5: (0.82, 0.04),
    }
    target_opaque = aligned[..., 3] > 48
    target_maximum = aligned[..., :3].max(axis=2)
    target_minimum = aligned[..., :3].min(axis=2)
    target_saturation = np.divide(
        target_maximum - target_minimum,
        target_maximum,
        out=np.zeros_like(target_maximum, dtype=float),
        where=target_maximum > 0,
    )
    for label, (lightness_scale, chroma_detail) in material_settings.items():
        selection = (
            (labels == label)
            & (source[..., 3] > 12)
        )
        if not np.any(selection):
            continue
        target_selection = (labels == label) & target_opaque
        if label == 3 and not high_detail_target:
            target_selection &= target_saturation > 0.15
        elif label == 4:
            target_selection &= target_saturation < 0.20
        elif label == 5:
            target_selection &= target_saturation > 0.24
        if np.count_nonzero(target_selection) < 64:
            if label in {3, 5}:
                continue
            target_selection = target_opaque
        source_center = np.median(source_lab[selection], axis=0)
        target_center = np.median(target_lab[target_selection], axis=0)
        transformed = source_lab.copy()
        transformed[..., 0] = target_center[0] + (
            source_lab[..., 0] - source_center[0]
        ) * lightness_scale
        transformed[..., 1] = target_center[1] + (
            source_lab[..., 1] - source_center[1]
        ) * chroma_detail
        transformed[..., 2] = target_center[2] + (
            source_lab[..., 2] - source_center[2]
        ) * chroma_detail
        recolored = lab_to_srgb(transformed)
        result[..., :3][selection] = recolored[selection]
        changed |= selection
    if not np.any(changed):
        raise ValueError("empty material mask")
    result[..., 3] = source[..., 3]
    if not np.array_equal(source[..., :3][~changed], result[..., :3][~changed]):
        raise ValueError("pixels outside material mask changed")
    return result, changed


def fetch_target(record: dict) -> Path:
    target = TARGET_CACHE / f"{record['targetSha256']}.png"
    if not target.exists():
        target.parent.mkdir(parents=True, exist_ok=True)
        request = urllib.request.Request(
            record["targetUrl"],
            headers={"User-Agent": "Mozilla/5.0"},
        )
        with urllib.request.urlopen(request, timeout=60) as response:
            target.write_bytes(response.read())
    if sha256(target) != record["targetSha256"]:
        raise ValueError(f"{record['targetAssetId']}: target asset hash changed")
    return target


def save_webp(array: np.ndarray, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(array, "RGBA").save(
        path,
        "WEBP",
        lossless=True,
        quality=100,
        method=6,
        exact=True,
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--check",
        action="store_true",
        help="Rebuild into memory and compare with the committed output.",
    )
    arguments = parser.parse_args()
    report = json.loads(MANIFEST.read_text(encoding="utf-8"))
    for index, record in enumerate(report["derivations"], start=1):
        source_path = ROOT / record["shapeImage"]
        mask_path = ROOT / record["materialMask"]
        if sha256(source_path) != record["shapeImageSha256"]:
            raise ValueError(f"{record['shapeImage']}: shape source hash changed")
        if sha256(mask_path) != record["materialMaskSha256"]:
            raise ValueError(f"{record['materialMask']}: material mask hash changed")
        source = load_rgba(source_path)
        target = load_rgba(fetch_target(record))
        labels = np.asarray(
            Image.open(mask_path).convert("L"),
            dtype=np.uint8,
        )
        if record["sourceKind"] == "official-direct":
            result = recanvas_official(target)
        else:
            result, _ = derive_material_variant(source, target, labels)
            if not np.array_equal(source[..., 3], result[..., 3]):
                raise ValueError(f"{record['beyId']} {record['partId']}: alpha changed")

        output = ROOT / record["outputImage"]
        if arguments.check:
            committed = load_rgba(output)
            if not np.array_equal(committed, result):
                raise ValueError(f"{record['outputImage']}: pixels differ from the manifest build")
        else:
            save_webp(result, output)
            if not np.array_equal(load_rgba(output), result):
                raise ValueError(f"{record['outputImage']}: lossless WebP round-trip failed")
        if sha256(output) != record["outputSha256"]:
            raise ValueError(f"{record['outputImage']}: output hash differs from the manifest")
        print(f"[{index}/{len(report['derivations'])}] {record['beyId']} :: {record['partId']}")


if __name__ == "__main__":
    main()
