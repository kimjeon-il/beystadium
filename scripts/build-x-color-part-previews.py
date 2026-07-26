#!/usr/bin/env python3
"""Build deterministic color variants for X part-preview contexts."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

import numpy as np
from PIL import Image


VERSION = "20260726-x-all-color-part-previews"
CANVAS_SIZE = 448
MIN_ALPHA = 4
IMAGE_CACHE: dict[str, tuple[np.ndarray, np.ndarray, np.ndarray]] = {}
PALETTE_CACHE: dict[tuple[str, str], list[str]] = {}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--plan",
        type=Path,
        default=Path(".cache/x-color-part-preview-plan.json"),
    )
    parser.add_argument(
        "--manifest",
        type=Path,
        default=Path("data/source/x-part-preview-color-derivations.json"),
    )
    parser.add_argument("--write", action="store_true")
    return parser.parse_args()


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def hex_rgb(value: str) -> np.ndarray:
    value = value.lstrip("#")
    return np.array([int(value[index:index + 2], 16) for index in (0, 2, 4)], dtype=float)


def rgb_hex(value: np.ndarray) -> str:
    channels = np.clip(np.rint(value), 0, 255).astype(np.uint8)
    return f"#{channels[0]:02x}{channels[1]:02x}{channels[2]:02x}"


def srgb_to_lab(rgb: np.ndarray) -> np.ndarray:
    normalized = rgb / 255.0
    linear = np.where(
        normalized <= 0.04045,
        normalized / 12.92,
        ((normalized + 0.055) / 1.055) ** 2.4,
    )
    xyz = linear @ np.array([
        [0.4124564, 0.2126729, 0.0193339],
        [0.3575761, 0.7151522, 0.1191920],
        [0.1804375, 0.0721750, 0.9503041],
    ])
    xyz /= np.array([0.95047, 1.0, 1.08883])
    transformed = np.where(
        xyz > 0.008856,
        np.cbrt(xyz),
        7.787 * xyz + 16 / 116,
    )
    return np.stack([
        116 * transformed[..., 1] - 16,
        500 * (transformed[..., 0] - transformed[..., 1]),
        200 * (transformed[..., 1] - transformed[..., 2]),
    ], axis=-1)


def lab_to_srgb(lab: np.ndarray) -> np.ndarray:
    fy = (lab[..., 0] + 16) / 116
    fx = fy + lab[..., 1] / 500
    fz = fy - lab[..., 2] / 200
    transformed = np.stack([fx, fy, fz], axis=-1)
    xyz = np.where(
        transformed ** 3 > 0.008856,
        transformed ** 3,
        (transformed - 16 / 116) / 7.787,
    )
    xyz *= np.array([0.95047, 1.0, 1.08883])
    linear = xyz @ np.linalg.inv(np.array([
        [0.4124564, 0.2126729, 0.0193339],
        [0.3575761, 0.7151522, 0.1191920],
        [0.1804375, 0.0721750, 0.9503041],
    ]))
    positive = np.maximum(linear, 0)
    srgb = np.where(
        linear <= 0.0031308,
        12.92 * linear,
        1.055 * positive ** (1 / 2.4) - 0.055,
    )
    return np.clip(srgb * 255, 0, 255)


def saturation(rgb: np.ndarray) -> np.ndarray:
    maximum = rgb.max(axis=-1)
    minimum = rgb.min(axis=-1)
    return np.divide(
        maximum - minimum,
        maximum,
        out=np.zeros_like(maximum),
        where=maximum > 0,
    )


def foreground_geometry(alpha: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    points = np.argwhere(alpha > MIN_ALPHA)
    if not len(points):
        raise ValueError("empty alpha foreground")
    top, left = points.min(axis=0)
    bottom, right = points.max(axis=0)
    center_x = (left + right) / 2
    center_y = (top + bottom) / 2
    radius_x = max((right - left + 1) / 2, 1)
    radius_y = max((bottom - top + 1) / 2, 1)
    yy, xx = np.indices(alpha.shape)
    radial = np.sqrt(((xx - center_x) / radius_x) ** 2 + ((yy - center_y) / radius_y) ** 2)
    return radial, points


def image_arrays(image_path: Path) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    key = image_path.as_posix()
    if key not in IMAGE_CACHE:
        rgba = np.asarray(Image.open(image_path).convert("RGBA"), dtype=np.uint8)
        rgb = rgba[..., :3].astype(float)
        IMAGE_CACHE[key] = (rgba, rgb, srgb_to_lab(rgb))
    return IMAGE_CACHE[key]


def kmeans(values: np.ndarray, clusters: int, iterations: int = 20) -> tuple[np.ndarray, np.ndarray]:
    if len(values) < clusters:
        clusters = max(1, len(values))
    order = np.argsort(values[:, 0])
    centers = values[order[np.linspace(0, len(values) - 1, clusters, dtype=int)]].copy()
    labels = np.zeros(len(values), dtype=np.int32)
    for _ in range(iterations):
        distances = ((values[:, None, :] - centers[None, :, :]) ** 2).sum(axis=2)
        next_labels = distances.argmin(axis=1)
        next_centers = centers.copy()
        for index in range(clusters):
            selected = values[next_labels == index]
            if len(selected):
                next_centers[index] = selected.mean(axis=0)
        if np.array_equal(next_labels, labels) and np.allclose(next_centers, centers):
            break
        labels = next_labels
        centers = next_centers
    return centers, labels


def role_zone(entry: dict, radial: np.ndarray) -> np.ndarray:
    role = entry["xBladeRole"]
    if role == "lockChip":
        return radial <= 0.38
    if role == "mainBlade":
        return (radial >= 0.25) & (radial <= 0.9)
    if role == "assistBlade":
        return (radial >= 0.35) & (radial <= 1.0)
    if role == "overBlade":
        return (radial >= 0.25) & (radial <= 0.78)
    return radial <= 1.05


def dominant_palette(image_path: Path, entry: dict, limit: int = 3) -> list[str]:
    cache_key = (image_path.as_posix(), entry["xBladeRole"] or entry["partType"])
    if cache_key in PALETTE_CACHE:
        return PALETTE_CACHE[cache_key]
    rgba, rgb, lab = image_arrays(image_path)
    alpha = rgba[..., 3]
    radial, _ = foreground_geometry(alpha)
    chroma = np.sqrt(lab[..., 1] ** 2 + lab[..., 2] ** 2)
    mask = (
        (alpha > 48)
        & role_zone(entry, radial)
        & (saturation(rgb) > 0.14)
        & (chroma > 12)
        & (lab[..., 0] > 8)
        & (lab[..., 0] < 96)
    )
    values = lab[mask]
    if len(values) < 32:
        mask = (alpha > 48) & role_zone(entry, radial) & (lab[..., 0] > 8) & (lab[..., 0] < 92)
        values = lab[mask]
    if len(values) > 24000:
        step = max(1, len(values) // 24000)
        values = values[::step]
    centers, labels = kmeans(values, min(7, max(1, len(values) // 32)))
    ranked = []
    for index, center in enumerate(centers):
        count = int(np.count_nonzero(labels == index))
        center_chroma = float(np.hypot(center[1], center[2]))
        score = count * (1 + min(center_chroma, 80) / 55)
        ranked.append((score, center, count, center_chroma))
    ranked.sort(key=lambda value: value[0], reverse=True)
    selected: list[np.ndarray] = []
    for _, center, _, center_chroma in ranked:
        if center_chroma < 8 and selected:
            continue
        if any(np.linalg.norm(center - previous) < 18 for previous in selected):
            continue
        selected.append(center)
        if len(selected) == limit:
            break
    if not selected:
        selected = [ranked[0][1]]
    palette = [rgb_hex(lab_to_srgb(center.reshape(1, 1, 3))[0, 0]) for center in selected]
    PALETTE_CACHE[cache_key] = palette
    return palette


def recolor_region(
    output_lab: np.ndarray,
    source_lab: np.ndarray,
    mask: np.ndarray,
    target_rgb: np.ndarray,
) -> dict:
    selected = source_lab[mask]
    if not len(selected):
        return {"pixels": 0}
    source_center = np.median(selected, axis=0)
    target_lab = srgb_to_lab(target_rgb.reshape(1, 1, 3))[0, 0]
    delta = target_lab - source_center
    output_lab[mask, 0] = np.clip(source_lab[mask, 0] + delta[0] * 0.72, 0, 100)
    output_lab[mask, 1] = source_lab[mask, 1] + delta[1]
    output_lab[mask, 2] = source_lab[mask, 2] + delta[2]
    return {
        "pixels": int(mask.sum()),
        "source": rgb_hex(lab_to_srgb(source_center.reshape(1, 1, 3))[0, 0]),
        "target": rgb_hex(target_rgb),
    }


def derive(entry: dict, write: bool) -> dict:
    shape_path = Path(entry["shapeImage"])
    rgba, rgb, source_lab = image_arrays(shape_path)
    if rgba.shape[:2] != (CANVAS_SIZE, CANVAS_SIZE):
        raise ValueError(f"{shape_path}: expected {CANVAS_SIZE}x{CANVAS_SIZE}")
    alpha = rgba[..., 3]
    output_lab = source_lab.copy()
    radial, _ = foreground_geometry(alpha)
    color_mask = (
        (alpha > MIN_ALPHA)
        & (saturation(rgb) > 0.075)
        & (source_lab[..., 0] > 5)
        & (source_lab[..., 0] < 98)
    )

    palette = entry["targetPaletteOverride"]
    if not palette:
        palette = dominant_palette(Path(entry["colorEvidenceImage"]), entry)
    targets = [hex_rgb(color) for color in palette]
    regions = []
    if entry["partType"] == "ratchet" and len(targets) > 1:
        regions.append(recolor_region(output_lab, source_lab, color_mask & (radial > 0.55), targets[0]))
        regions.append(recolor_region(output_lab, source_lab, color_mask & (radial <= 0.55), targets[1]))
    else:
        regions.append(recolor_region(output_lab, source_lab, color_mask, targets[0]))

    output_rgb = np.rint(lab_to_srgb(output_lab)).astype(np.uint8)
    output_rgba = np.dstack([output_rgb, alpha])
    unchanged = ~color_mask
    output_rgba[unchanged, :3] = rgba[unchanged, :3]
    output_path = Path(entry["outputImage"])
    if write:
        output_path.parent.mkdir(parents=True, exist_ok=True)
        Image.fromarray(output_rgba, "RGBA").save(
            output_path,
            format="WEBP",
            lossless=True,
            quality=100,
            method=4,
            exact=True,
        )
        with Image.open(output_path) as saved:
            saved_rgba = np.asarray(saved.convert("RGBA"), dtype=np.uint8)
        if not np.array_equal(saved_rgba[..., 3], alpha):
            raise ValueError(f"{output_path}: alpha mask changed")
        if not np.array_equal(saved_rgba[unchanged, :3], rgba[unchanged, :3]):
            raise ValueError(f"{output_path}: pixels outside the declared mask changed")
        output_sha = sha256(output_path)
    else:
        output_sha = hashlib.sha256(output_rgba.tobytes()).hexdigest()
    return {
        "beyId": entry["beyId"],
        "partId": entry["partId"],
        "outputImage": entry["outputImage"],
        "shapeImage": entry["shapeImage"],
        "shapeSourceUrl": entry["shapeSourceUrl"],
        "shapeSourcePath": entry["shapeSourcePath"],
        "shapeSourceSha256": entry["shapeSourceSha256"],
        "colorEvidenceUrl": entry["colorEvidenceUrl"],
        "colorEvidencePageUrl": entry["colorEvidencePageUrl"],
        "colorEvidenceSha256": entry["colorEvidenceSha256"],
        "evidenceRecordSha256": entry["evidenceRecordSha256"],
        "sourceKind": "color-derived",
        "mask": {
            "method": "lab-chroma-regions-v1",
            "alpha": "preserved-byte-for-byte",
            "minimumAlpha": MIN_ALPHA,
            "minimumSaturation": 0.075,
            "ratchetSplitRadius": 0.55 if entry["partType"] == "ratchet" else None,
        },
        "targetPalette": [rgb_hex(color) for color in targets],
        "regions": regions,
        "outputSha256": output_sha,
    }


def main() -> int:
    args = parse_args()
    plan = json.loads(args.plan.read_text(encoding="utf-8"))
    if plan["version"] != VERSION:
        raise ValueError(f"expected plan version {VERSION}")
    if len(plan["candidates"]) != 247:
        raise ValueError(f"expected 247 derivations, found {len(plan['candidates'])}")
    derivations = []
    for index, entry in enumerate(plan["candidates"], start=1):
        derivations.append(derive(entry, args.write))
        print(f"[{index}/247] {entry['beyId']} :: {entry['partId']}", flush=True)
    manifest = {
        "version": VERSION,
        "totals": {
            "derivations": len(derivations),
            "remainingUnavailable": len(plan["remainingUnavailable"]),
        },
        "derivations": derivations,
        "remainingUnavailable": plan["remainingUnavailable"],
    }
    if args.write:
        args.manifest.parent.mkdir(parents=True, exist_ok=True)
        args.manifest.write_text(
            f"{json.dumps(manifest, ensure_ascii=False, indent=2)}\n",
            encoding="utf-8",
        )
    print(json.dumps(manifest["totals"], ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
