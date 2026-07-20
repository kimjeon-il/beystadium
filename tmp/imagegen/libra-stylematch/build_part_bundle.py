from __future__ import annotations

import hashlib
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[3]
WORK = Path(__file__).resolve().parent
BEYS = ROOT / "assets" / "images" / "beys"
FINAL_PATH = BEYS / "libra-stylematch-preview.png"
OLD_LAYERS_DIR = BEYS / "libra-stylematch.layers"
MASK_DIR = WORK / "masks"
OUTPUT_DIR = BEYS / "libra-stylematch.parts"
PSD_PATH = OUTPUT_DIR / "libra-stylematch-parts.psd"
MANIFEST_PATH = OUTPUT_DIR / "manifest.json"
PYDEPS = ROOT / "tmp" / "imagegen" / "libra-experiment" / "pydeps"

EXPECTED_SIZE = (1452, 1440)
PARTS = (
    ("TRACK", "01_TRACK.png"),
    ("METAL_WHEEL", "02_METAL_WHEEL.png"),
    ("CLEAR_WHEEL", "03_CLEAR_WHEEL.png"),
    ("FACE_AND_STICKER", "04_FACE_AND_STICKER.png"),
)
TIE_PRIORITY = ("FACE_AND_STICKER", "CLEAR_WHEEL", "METAL_WHEEL", "TRACK")


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def tree_snapshot(path: Path) -> dict[str, object]:
    files = sorted(item for item in path.iterdir() if item.is_file())
    hashes = {item.name: sha256(item) for item in files}
    joined = "\n".join(f"{name}:{digest}" for name, digest in hashes.items())
    return {
        "file_count": len(hashes),
        "aggregate_sha256": hashlib.sha256(joined.encode("utf-8")).hexdigest(),
        "files": hashes,
    }


def load_rgba(path: Path) -> np.ndarray:
    image = Image.open(path).convert("RGBA")
    if image.size != EXPECTED_SIZE:
        raise ValueError(f"Unexpected canvas for {path}: {image.size}")
    return np.asarray(image).copy()


def load_mask(name: str) -> np.ndarray:
    path = MASK_DIR / f"mask_{name}.png"
    image = Image.open(path).convert("L")
    if image.size != EXPECTED_SIZE:
        raise ValueError(f"Unexpected mask canvas for {path}: {image.size}")
    return np.asarray(image) >= 128


def dilate_1px(mask: np.ndarray) -> np.ndarray:
    image = Image.fromarray(mask.astype(np.uint8) * 255, "L")
    return np.asarray(image.filter(ImageFilter.MaxFilter(3))) > 0


def assign_preserved(
    base_masks: dict[str, np.ndarray], preserved: np.ndarray
) -> tuple[dict[str, np.ndarray], dict[str, int], int]:
    """Assign residual pixels by 8-connected distance, resolving ties by priority."""
    regions = {name: mask.copy() for name, mask in base_masks.items()}
    assigned = {name: np.zeros_like(preserved) for name in base_masks}
    pending = preserved.copy()
    iterations = 0

    while np.any(pending):
        candidates = {
            name: dilate_1px(regions[name]) & pending for name in base_masks
        }
        progressed = False
        for name in TIE_PRIORITY:
            take = candidates[name] & pending
            if np.any(take):
                assigned[name][take] = True
                regions[name][take] = True
                pending[take] = False
                progressed = True
        iterations += 1
        if not progressed:
            raise RuntimeError(
                f"Residual assignment stalled with {int(pending.sum())} pixels"
            )

    merged = {name: base_masks[name] | assigned[name] for name in base_masks}
    counts = {name: int(mask.sum()) for name, mask in assigned.items()}
    return merged, counts, iterations


def alpha_composite(layers: list[np.ndarray]) -> np.ndarray:
    canvas = Image.new("RGBA", EXPECTED_SIZE, (0, 0, 0, 0))
    for layer in layers:
        canvas = Image.alpha_composite(canvas, Image.fromarray(layer, "RGBA"))
    return np.asarray(canvas).copy()


def save_psd(path: Path, layers: list[tuple[str, np.ndarray]]) -> None:
    sys.path.insert(0, str(PYDEPS))
    from psd_tools import PSDImage
    from psd_tools.api.layers import PixelLayer

    psd = PSDImage.new("RGB", EXPECTED_SIZE, color=(0, 0, 0))
    for name, rgba in layers:
        layer = PixelLayer.frompil(Image.fromarray(rgba, "RGBA"), psd, name=name)
        layer.visible = True
    psd.save(path)


def inspect_psd(path: Path, expected: np.ndarray) -> dict[str, object]:
    sys.path.insert(0, str(PYDEPS))
    from psd_tools import PSDImage

    psd = PSDImage.open(path)
    root_layers = list(psd)
    pixel_layers = [layer for layer in psd.descendants() if not layer.is_group()]
    rendered = np.asarray(
        psd.composite(ignore_preview=True, force=True, alpha=0.0).convert("RGBA")
    ).copy()
    rendered[rendered[..., 3] == 0, :3] = 0
    delta = np.abs(rendered.astype(np.int16) - expected.astype(np.int16))
    names = [layer.name for layer in root_layers]
    return {
        "file": path.name,
        "sha256": sha256(path),
        "canvas": {"width": psd.width, "height": psd.height},
        "root_layer_names_bottom_to_top": names,
        "pixel_layer_count": len(pixel_layers),
        "group_count": sum(layer.is_group() for layer in psd.descendants()),
        "all_layer_names_ascii": all(layer.name.isascii() for layer in pixel_layers),
        "max_channel_delta": int(delta.max()),
        "channels_over_1": int((delta > 1).sum()),
        "alpha_exact": bool(np.array_equal(rendered[..., 3], expected[..., 3])),
    }


def pairwise_overlaps(masks: dict[str, np.ndarray]) -> dict[str, int]:
    names = [name for name, _ in PARTS]
    return {
        f"{left}__{right}": int((masks[left] & masks[right]).sum())
        for index, left in enumerate(names)
        for right in names[index + 1 :]
    }


def main() -> None:
    old_before = tree_snapshot(OLD_LAYERS_DIR)
    final = load_rgba(FINAL_PATH)
    final_alpha = final[..., 3] > 0

    source_masks = {
        "TRACK": load_mask("YELLOW_INTERNAL_PARTS"),
        "METAL_WHEEL": load_mask("FLAME_METAL_WHEEL"),
        "CLEAR_WHEEL": load_mask("LIBRA_CLEAR_WHEEL"),
        "FACE_BOLT": load_mask("FACE_BOLT"),
        "PROTECTED_ARTWORK": load_mask("PROTECTED_ARTWORK"),
        "PRESERVED_SOURCE": load_mask("PRESERVED_SOURCE"),
        "VISIBLE": load_mask("VISIBLE"),
    }
    base_masks = {
        "TRACK": source_masks["TRACK"],
        "METAL_WHEEL": source_masks["METAL_WHEEL"],
        "CLEAR_WHEEL": source_masks["CLEAR_WHEEL"],
        "FACE_AND_STICKER": (
            source_masks["FACE_BOLT"] | source_masks["PROTECTED_ARTWORK"]
        ),
    }

    base_overlap = pairwise_overlaps(base_masks)
    if any(base_overlap.values()):
        raise ValueError(f"Base masks overlap: {base_overlap}")
    base_union = np.logical_or.reduce(list(base_masks.values()))
    preserved = source_masks["PRESERVED_SOURCE"]
    if np.any(base_union & preserved):
        raise ValueError("PRESERVED_SOURCE overlaps a base physical-part mask")
    if not np.array_equal(base_union | preserved, source_masks["VISIBLE"]):
        raise ValueError("Base physical parts plus PRESERVED_SOURCE do not equal VISIBLE")
    if not np.array_equal(source_masks["VISIBLE"], final_alpha):
        raise ValueError("VISIBLE mask does not equal the current final alpha support")

    masks, residual_counts, residual_iterations = assign_preserved(
        base_masks, preserved
    )
    overlap = pairwise_overlaps(masks)
    union = np.logical_or.reduce(list(masks.values()))

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    expected_png_names = {filename for _, filename in PARTS}
    for stale in OUTPUT_DIR.glob("*.png"):
        if stale.name not in expected_png_names:
            stale.unlink()

    layers: list[tuple[str, np.ndarray]] = []
    part_records: list[dict[str, object]] = []
    for order, (name, filename) in enumerate(PARTS):
        rgba = np.zeros_like(final)
        rgba[masks[name]] = final[masks[name]]
        output_path = OUTPUT_DIR / filename
        Image.fromarray(rgba, "RGBA").save(output_path)
        layers.append((name, rgba))
        part_records.append(
            {
                "order_bottom_to_top": order,
                "name": name,
                "file": filename,
                "canvas": {"width": EXPECTED_SIZE[0], "height": EXPECTED_SIZE[1]},
                "mode": "RGBA",
                "blend_mode": "normal",
                "base_mask_pixels": int(base_masks[name].sum()),
                "preserved_source_pixels_assigned": residual_counts[name],
                "final_mask_pixels": int(masks[name].sum()),
                "sha256": sha256(output_path),
            }
        )

    composited = alpha_composite([rgba for _, rgba in layers])
    composite_delta = np.abs(
        composited.astype(np.int16) - final.astype(np.int16)
    )
    save_psd(PSD_PATH, layers)
    psd = inspect_psd(PSD_PATH, final)
    old_after = tree_snapshot(OLD_LAYERS_DIR)
    png_files = sorted(item.name for item in OUTPUT_DIR.glob("*.png"))

    validation = {
        "png_count": len(png_files),
        "png_files_exact": png_files == sorted(expected_png_names),
        "all_png_rgba_1452x1440": all(
            Image.open(OUTPUT_DIR / filename).mode == "RGBA"
            and Image.open(OUTPUT_DIR / filename).size == EXPECTED_SIZE
            for filename in png_files
        ),
        "pairwise_overlap_pixels": overlap,
        "pairwise_disjoint": not any(overlap.values()),
        "union_equals_final_alpha": bool(np.array_equal(union, final_alpha)),
        "recomposition_max_channel_delta": int(composite_delta.max()),
        "recomposition_changed_channels": int((composite_delta != 0).sum()),
        "psd_pixel_layer_count": psd["pixel_layer_count"],
        "psd_group_count": psd["group_count"],
        "psd_names_ascii": psd["all_layer_names_ascii"],
        "psd_max_channel_delta": psd["max_channel_delta"],
        "existing_layers_unchanged": old_before == old_after,
    }
    validation["status"] = (
        "pass"
        if (
            validation["png_count"] == 4
            and validation["png_files_exact"]
            and validation["all_png_rgba_1452x1440"]
            and validation["pairwise_disjoint"]
            and validation["union_equals_final_alpha"]
            and validation["recomposition_max_channel_delta"] == 0
            and validation["psd_pixel_layer_count"] == 4
            and validation["psd_group_count"] == 0
            and validation["psd_names_ascii"]
            and validation["psd_max_channel_delta"] <= 1
            and validation["existing_layers_unchanged"]
        )
        else "fail"
    )

    manifest = {
        "schema_version": 1,
        "bundle": "libra_stylematch_physical_parts",
        "canvas": {"width": EXPECTED_SIZE[0], "height": EXPECTED_SIZE[1]},
        "exchange_format": "full_canvas_rgba_png",
        "source_final": {
            "file": str(FINAL_PATH.relative_to(ROOT)).replace("\\", "/"),
            "sha256": sha256(FINAL_PATH),
            "pixel_policy": "exact_current_final_pixels",
        },
        "layer_order": "bottom_to_top",
        "parts": part_records,
        "residual_assignment": {
            "source_mask": "PRESERVED_SOURCE",
            "method": "iterative_1px_8_connected_nearest",
            "tie_priority": list(TIE_PRIORITY),
            "iterations": residual_iterations,
            "total_pixels": int(preserved.sum()),
            "assigned_pixels_by_part": residual_counts,
        },
        "psd": psd,
        "existing_layers_snapshot": {
            "path": str(OLD_LAYERS_DIR.relative_to(ROOT)).replace("\\", "/"),
            "before": old_before,
            "after": old_after,
            "unchanged": old_before == old_after,
        },
        "validation": validation,
    }
    MANIFEST_PATH.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    print(
        json.dumps(
            {
                "status": validation["status"],
                "output_dir": str(OUTPUT_DIR),
                "residual_assignment": residual_counts,
                "recomposition_max_channel_delta": validation[
                    "recomposition_max_channel_delta"
                ],
                "psd_max_channel_delta": validation["psd_max_channel_delta"],
                "existing_layers_sha256": old_after["aggregate_sha256"],
            },
            ensure_ascii=False,
            indent=2,
        )
    )
    if validation["status"] != "pass":
        raise SystemExit(1)


if __name__ == "__main__":
    main()
