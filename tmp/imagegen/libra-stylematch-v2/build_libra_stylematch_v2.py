from __future__ import annotations

import hashlib
import json
import math
import sys
from pathlib import Path
from typing import Iterable

import numpy as np
from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[3]
WORK = Path(__file__).resolve().parent
BEYS = ROOT / "assets" / "images" / "beys"
PYDEPS = ROOT / "tmp" / "imagegen" / "libra-experiment" / "pydeps"

SOURCE_PATH = BEYS / "dkcjn91-632bfe50-9e4e-4e8d-a06f-a5b1494d71e7.png"
V1_FINAL = BEYS / "libra-stylematch-preview.png"
V1_LAYERS = BEYS / "libra-stylematch.layers"
V1_PARTS = BEYS / "libra-stylematch.parts"
STYLE_REFERENCE = BEYS / "flame-libra.png"
CLEAR_REFERENCE = BEYS / "참고-리브라휠.png"
METAL_REFERENCE = BEYS / "참고-플레임휠.jpg"
V1_MASKS = ROOT / "tmp" / "imagegen" / "libra-stylematch" / "masks"

CANDIDATE_DIR = WORK / "candidates"
MASK_DIR = WORK / "masks"
INPUT_DIR = WORK / "inputs"
LAYERS_DIR = BEYS / "libra-stylematch-v2.layers"
PARTS_DIR = BEYS / "libra-stylematch-v2.parts"

STAGE1_PSD = BEYS / "libra-stylematch-v2-01-masks.psd"
STAGE1_PREVIEW = BEYS / "libra-stylematch-v2-01-masks-preview.png"
STAGE2_PSD = BEYS / "libra-stylematch-v2-02-linework.psd"
STAGE2_PREVIEW = BEYS / "libra-stylematch-v2-02-linework-preview.png"
STAGE3_PSD = BEYS / "libra-stylematch-v2-03-materials.psd"
STAGE3_PREVIEW = BEYS / "libra-stylematch-v2-03-materials-preview.png"
MASTER_PSD = BEYS / "libra-stylematch-v2-master.psd"
FINAL_PREVIEW = BEYS / "libra-stylematch-v2-preview.png"
PARTS_PSD = PARTS_DIR / "libra-stylematch-v2-parts.psd"

VALIDATION_PATH = WORK / "validation.json"
GEOMETRY_REPORT_PATH = WORK / "geometry-alignment.json"
GEOMETRY_COMPARISON_PATH = WORK / "geometry-comparison.png"
GEOMETRY_DIFFERENCE_PATH = WORK / "geometry-difference.png"

EXPECTED_SIZE = (1452, 1440)
EXPECTED_ALPHA_BBOX = (36, 31, 1416, 1416)
CENTER = (726.0, 723.5)

PART_ORDER = ("TRACK", "METAL_WHEEL", "CLEAR_WHEEL", "FACE_AND_STICKER")
PART_FILES = {
    "TRACK": "01_TRACK.png",
    "METAL_WHEEL": "02_METAL_WHEEL.png",
    "CLEAR_WHEEL": "03_CLEAR_WHEEL.png",
    "FACE_AND_STICKER": "04_FACE_AND_STICKER.png",
}

CLEAR_CANDIDATE = CANDIDATE_DIR / "clear-external-geometry-candidate.png"
METAL_CANDIDATE = CANDIDATE_DIR / "metal-visible-internal-geometry-candidate.png"


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for block in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def tree_snapshot(path: Path) -> dict[str, object]:
    files = sorted(item for item in path.rglob("*") if item.is_file())
    hashes = {item.relative_to(path).as_posix(): sha256(item) for item in files}
    joined = "\n".join(f"{name}:{digest}" for name, digest in hashes.items())
    return {
        "file_count": len(hashes),
        "aggregate_sha256": hashlib.sha256(joined.encode("utf-8")).hexdigest(),
        "files": hashes,
    }


def load_rgba(path: Path, *, expected_size: tuple[int, int] | None = None) -> np.ndarray:
    image = Image.open(path).convert("RGBA")
    if expected_size is not None and image.size != expected_size:
        raise AssertionError(f"Unexpected size for {path}: {image.size}")
    return np.asarray(image).copy()


def load_mask(path: Path) -> np.ndarray:
    image = Image.open(path).convert("L")
    if image.size != EXPECTED_SIZE:
        raise AssertionError(f"Unexpected mask size for {path}: {image.size}")
    return np.asarray(image) >= 128


def bbox(mask: np.ndarray) -> tuple[int, int, int, int] | None:
    ys, xs = np.nonzero(mask)
    if not len(xs):
        return None
    return int(xs.min()), int(ys.min()), int(xs.max() + 1), int(ys.max() + 1)


def mask_image(mask: np.ndarray) -> Image.Image:
    return Image.fromarray(mask.astype(np.uint8) * 255, "L")


def dilate(mask: np.ndarray, radius: int) -> np.ndarray:
    if radius <= 0:
        return mask.copy()
    return np.asarray(mask_image(mask).filter(ImageFilter.MaxFilter(radius * 2 + 1))) > 0


def erode(mask: np.ndarray, radius: int) -> np.ndarray:
    if radius <= 0:
        return mask.copy()
    return np.asarray(mask_image(mask).filter(ImageFilter.MinFilter(radius * 2 + 1))) > 0


def inner_edge(mask: np.ndarray, width: int = 1) -> np.ndarray:
    return mask & ~erode(mask, width)


def full_edge(mask: np.ndarray, width: int = 1) -> np.ndarray:
    return dilate(mask, width) ^ erode(mask, width)


def color_rgba(mask: np.ndarray, color: tuple[int, int, int], alpha: np.ndarray) -> np.ndarray:
    out = np.zeros((mask.shape[0], mask.shape[1], 4), dtype=np.uint8)
    out[mask, :3] = color
    out[mask, 3] = alpha[mask]
    return out


def masked_rgba(source: np.ndarray, mask: np.ndarray) -> np.ndarray:
    out = np.zeros_like(source)
    out[mask] = source[mask]
    return out


def alpha_composite(layers: Iterable[np.ndarray]) -> np.ndarray:
    canvas = Image.new("RGBA", EXPECTED_SIZE, (0, 0, 0, 0))
    for layer in layers:
        canvas = Image.alpha_composite(canvas, Image.fromarray(layer, "RGBA"))
    return np.asarray(canvas).copy()


def save_mask(path: Path, mask: np.ndarray) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    mask_image(mask).save(path)


def fit_affine(source: np.ndarray, target: np.ndarray) -> tuple[np.ndarray, float]:
    design = np.column_stack((source, np.ones(len(source))))
    x_params, *_ = np.linalg.lstsq(design, target[:, 0], rcond=None)
    y_params, *_ = np.linalg.lstsq(design, target[:, 1], rcond=None)
    matrix = np.vstack((x_params, y_params, (0.0, 0.0, 1.0)))
    predicted = design @ np.column_stack((x_params, y_params))
    rms = float(np.sqrt(np.mean(np.sum((predicted - target) ** 2, axis=1))))
    return matrix, rms


def warp_reference(
    image: Image.Image, matrix: np.ndarray, *, resample: Image.Resampling
) -> Image.Image:
    inverse = np.linalg.inv(matrix)
    coeffs = (
        inverse[0, 0],
        inverse[0, 1],
        inverse[0, 2],
        inverse[1, 0],
        inverse[1, 1],
        inverse[1, 2],
    )
    return image.transform(EXPECTED_SIZE, Image.Transform.AFFINE, coeffs, resample=resample)


def reference_alignment(base_clear: np.ndarray) -> tuple[np.ndarray, np.ndarray, dict[str, object]]:
    clear_image = Image.open(CLEAR_REFERENCE).convert("RGBA")
    clear_rgb = np.asarray(clear_image)[..., :3]
    clear_seg = (
        (clear_rgb[..., 1].astype(np.int16) - clear_rgb[..., 0].astype(np.int16) > 16)
        & (clear_rgb[..., 1].astype(np.int16) - clear_rgb[..., 2].astype(np.int16) > 7)
    )
    reference_points = np.asarray(
        ((121.0, 119.0), (392.0, 119.0), (392.0, 399.0), (121.0, 399.0))
    )
    target_points = np.asarray(
        ((441.0, 342.0), (1011.0, 342.0), (1011.0, 1098.0), (441.0, 1098.0))
    )
    clear_matrix, clear_rms = fit_affine(reference_points, target_points)
    aligned_clear = warp_reference(clear_image, clear_matrix, resample=Image.Resampling.BICUBIC)
    aligned_clear_mask = np.asarray(
        warp_reference(mask_image(clear_seg), clear_matrix, resample=Image.Resampling.NEAREST)
    ) > 0
    aligned_clear_mask = erode(dilate(aligned_clear_mask, 2), 2)

    metal_image = Image.open(METAL_REFERENCE).convert("RGB")
    metal_points = np.asarray(
        ((1512.0, 920.0), (2862.0, 2300.0), (1512.0, 3680.0), (162.0, 2300.0))
    )
    target_metal_points = np.asarray(
        ((726.0, 31.0), (1416.0, 723.5), (726.0, 1416.0), (36.0, 723.5))
    )
    metal_matrix, metal_rms = fit_affine(metal_points, target_metal_points)
    aligned_metal = warp_reference(metal_image, metal_matrix, resample=Image.Resampling.BICUBIC)

    INPUT_DIR.mkdir(parents=True, exist_ok=True)
    aligned_clear.save(INPUT_DIR / "aligned-clear-external-reference.png")
    aligned_metal.save(INPUT_DIR / "aligned-metal-structure-reference.png")
    save_mask(INPUT_DIR / "aligned-clear-reference-mask.png", aligned_clear_mask)

    report = {
        "clear_reference": {
            "file": CLEAR_REFERENCE.name,
            "role": "external_geometry_only",
            "reference_anchors": reference_points.tolist(),
            "target_anchors": target_points.tolist(),
            "affine_reference_to_target": np.round(clear_matrix, 9).tolist(),
            "anchor_rms_px": round(clear_rms, 6),
            "aligned_mask_bbox": list(bbox(aligned_clear_mask) or ()),
        },
        "metal_reference": {
            "file": METAL_REFERENCE.name,
            "role": "outer_and_visible_internal_geometry",
            "reference_anchors": metal_points.tolist(),
            "target_anchors": target_metal_points.tolist(),
            "affine_reference_to_target": np.round(metal_matrix, 9).tolist(),
            "anchor_rms_px": round(metal_rms, 6),
            "rear_to_front_policy": "topology_only_no_text_or_surface_transfer",
        },
    }
    return np.asarray(aligned_clear).copy(), aligned_clear_mask, report


def build_geometry(
    source: np.ndarray,
    v1_parts: dict[str, np.ndarray],
    aligned_clear_mask: np.ndarray,
) -> tuple[dict[str, np.ndarray], dict[str, np.ndarray], dict[str, object]]:
    alpha = source[..., 3]
    visible = alpha > 0
    base_support = {name: rgba[..., 3] > 0 for name, rgba in v1_parts.items()}
    base_clear = base_support["CLEAR_WHEEL"]
    base_metal = base_support["METAL_WHEEL"]
    face = base_support["FACE_AND_STICKER"]
    track = base_support["TRACK"]

    yy, xx = np.indices((EXPECTED_SIZE[1], EXPECTED_SIZE[0]), dtype=np.float32)
    dx = xx - CENTER[0]
    dy = yy - CENTER[1]
    radial = np.hypot(dx, dy)
    external_zone = (radial >= 355.0) & (radial <= 590.0)
    current_boundary = full_edge(base_clear, 1)
    boundary_band = dilate(current_boundary, 3)
    protected = face | track
    editable_union = (base_clear | base_metal) & visible & ~protected

    reference_edge = full_edge(aligned_clear_mask, 1)
    approved_reference_edge = (
        reference_edge
        & external_zone
        & dilate(current_boundary, 4)
        & editable_union
    )
    correction_zone = dilate(approved_reference_edge, 2) & boundary_band & external_zone & editable_union
    clear_corrected = base_clear.copy()
    clear_corrected[correction_zone] = aligned_clear_mask[correction_zone]
    clear_corrected &= visible & ~protected
    changed_boundary = clear_corrected ^ base_clear

    plate = (radial >= 280.0) & (radial <= 395.0)
    cutouts = np.zeros_like(plate)
    for angle_degrees in (45.0, 135.0, 225.0, 315.0):
        angle = math.radians(angle_degrees)
        along = dx * math.cos(angle) + dy * math.sin(angle)
        across = -dx * math.sin(angle) + dy * math.cos(angle)
        cutouts |= ((along - 335.0) / 88.0) ** 2 + (across / 58.0) ** 2 <= 1.0
    metal_topology = plate & ~cutouts
    face_guard = dilate(face, 7)
    track_guard = dilate(track, 3)
    internal_allowed = clear_corrected & visible & ~face_guard & ~track_guard & (alpha == 255)
    metal_internal = metal_topology & internal_allowed
    removed_clear = base_clear & ~clear_corrected & editable_union
    added_clear = clear_corrected & ~base_clear & editable_union
    metal_support = base_metal | metal_internal | removed_clear
    clear_support = clear_corrected

    metal_major = inner_edge((radial <= 395.0) & (radial >= 280.0), 4) & metal_internal
    metal_structure = inner_edge(metal_topology, 3) & metal_internal & ~metal_major
    clear_reference_line = np.zeros_like(clear_corrected)

    final_clear_edge = full_edge(clear_corrected, 1)
    clear_coverage = (
        float((approved_reference_edge & dilate(final_clear_edge, 4)).sum())
        / max(int(approved_reference_edge.sum()), 1)
    )
    metal_trace = full_edge(metal_topology, 1) & internal_allowed
    final_metal_trace = metal_major | metal_structure
    metal_coverage = (
        float((metal_trace & dilate(final_metal_trace, 4)).sum())
        / max(int(metal_trace.sum()), 1)
    )

    masks = {
        "TRACK": track,
        "METAL_WHEEL": metal_support,
        "CLEAR_WHEEL": clear_support,
        "FACE_AND_STICKER": face,
        "METAL_CLEAR_OVERLAP": metal_support & clear_support,
        "METAL_INTERNAL_VISIBLE": metal_internal,
        "METAL_INTERNAL_MAJOR_4PX": metal_major,
        "METAL_INTERNAL_STRUCTURE_3PX": metal_structure,
        "CLEAR_REFERENCE_EDGE": approved_reference_edge,
        "CLEAR_REFERENCE_LINE_3PX": clear_reference_line,
        "CLEAR_BOUNDARY_CHANGED": changed_boundary,
        "CLEAR_ADDED": added_clear,
        "CLEAR_REMOVED": removed_clear,
        "EDITABLE_GEOMETRY_ROI": editable_union,
        "PROTECTED": protected,
        "VISIBLE": visible,
    }
    report = {
        "clear_external": {
            "approved_reference_edge_pixels": int(approved_reference_edge.sum()),
            "changed_boundary_pixels": int(changed_boundary.sum()),
            "added_clear_pixels": int(added_clear.sum()),
            "removed_clear_pixels": int(removed_clear.sum()),
            "edge_coverage_within_4px": round(clear_coverage, 6),
        },
        "metal_visible_internal": {
            "physical_mask_pixels": int(metal_internal.sum()),
            "trace_edge_pixels": int(metal_trace.sum()),
            "major_4px_pixels": int(metal_major.sum()),
            "structure_3px_pixels": int(metal_structure.sum()),
            "edge_coverage_within_4px": round(metal_coverage, 6),
            "topology": "annular_plate_four_radial_supports_four_diagonal_rounded_cutouts",
        },
        "overlap": {
            "metal_clear_pixels": int((metal_support & clear_support).sum()),
            "policy": "intentional_physical_stack",
        },
    }
    return masks, base_support, report


def render_parts(
    source: np.ndarray,
    v1_parts: dict[str, np.ndarray],
    masks: dict[str, np.ndarray],
) -> tuple[dict[str, np.ndarray], dict[str, np.ndarray]]:
    alpha = source[..., 3]
    track = v1_parts["TRACK"].copy()
    face = v1_parts["FACE_AND_STICKER"].copy()
    base_metal = v1_parts["METAL_WHEEL"]
    base_clear = v1_parts["CLEAR_WHEEL"]
    metal_support = masks["METAL_WHEEL"]
    clear_support = masks["CLEAR_WHEEL"]
    internal = masks["METAL_INTERNAL_VISIBLE"] | masks["CLEAR_REMOVED"]
    overlap = masks["METAL_CLEAR_OVERLAP"]

    yy, xx = np.indices((EXPECTED_SIZE[1], EXPECTED_SIZE[0]), dtype=np.float32)
    theta = np.arctan2(yy - CENTER[1], xx - CENTER[0])
    score = np.cos(theta * 4.0)

    metal = np.zeros_like(source)
    base_metal_mask = base_metal[..., 3] > 0
    metal[base_metal_mask] = base_metal[base_metal_mask]
    new_metal = metal_support & ~base_metal_mask
    metal[new_metal, :3] = (164, 163, 164)
    metal[new_metal & (score < -0.25), :3] = (126, 124, 126)
    metal[new_metal & (score > 0.55), :3] = (194, 193, 195)
    metal[new_metal, 3] = alpha[new_metal]
    metal[masks["METAL_INTERNAL_MAJOR_4PX"], :3] = (72, 71, 72)
    metal[masks["METAL_INTERNAL_STRUCTURE_3PX"], :3] = (89, 88, 89)
    metal[masks["METAL_INTERNAL_MAJOR_4PX"] | masks["METAL_INTERNAL_STRUCTURE_3PX"], 3] = 255

    # At antialiased part boundaries, two non-zero alphas would increase the
    # assembled alpha. Let the clear wheel own those fractional-alpha pixels;
    # physical overlap remains enabled across fully opaque interior pixels.
    fractional_overlap = overlap & (alpha < 255)
    metal[fractional_overlap] = 0

    clear = np.zeros_like(source)
    base_clear_mask = base_clear[..., 3] > 0
    retained = clear_support & base_clear_mask
    clear[retained] = base_clear[retained]
    added = masks["CLEAR_ADDED"]
    clear[added, :3] = (166, 190, 47)
    clear[added, 3] = alpha[added]

    transmission = overlap & clear_support & (alpha == 255)
    original_rgb = clear[..., :3].astype(np.float32)
    tint = np.asarray((164, 186, 51), dtype=np.float32)
    blended = np.clip(original_rgb * 0.30 + tint * 0.70, 0, 255).astype(np.uint8)
    clear[transmission, :3] = blended[transmission]
    clear[transmission, 3] = 220
    clear[masks["CLEAR_REFERENCE_LINE_3PX"], :3] = (51, 62, 22)
    clear[masks["CLEAR_REFERENCE_LINE_3PX"], 3] = alpha[masks["CLEAR_REFERENCE_LINE_3PX"]]

    parts = {
        "TRACK": track,
        "METAL_WHEEL": metal,
        "CLEAR_WHEEL": clear,
        "FACE_AND_STICKER": face,
    }

    metal_line = masks["METAL_INTERNAL_MAJOR_4PX"] | masks["METAL_INTERNAL_STRUCTURE_3PX"]
    metal_shadow = internal & (score < -0.25) & ~metal_line
    metal_highlight = internal & (score > 0.55) & ~metal_line
    metal_mid = internal & ~metal_shadow & ~metal_highlight & ~metal_line
    metal_existing = metal_support & ~internal & ~metal_line
    clear_line = masks["CLEAR_REFERENCE_LINE_3PX"]
    clear_transmission = transmission & ~clear_line
    clear_base = clear_support & ~clear_transmission & ~clear_line

    effects = {
        "00_TRACK__10_SOURCE_EXACT": masked_rgba(track, track[..., 3] > 0),
        "10_METAL_WHEEL__10_EXISTING_OUTER": masked_rgba(metal, metal_existing),
        "10_METAL_WHEEL__20_INTERNAL_SHADOW": masked_rgba(metal, metal_shadow),
        "10_METAL_WHEEL__30_INTERNAL_MIDTONE": masked_rgba(metal, metal_mid),
        "10_METAL_WHEEL__40_INTERNAL_HIGHLIGHT": masked_rgba(metal, metal_highlight),
        "10_METAL_WHEEL__70_MAJOR_AND_STRUCTURE_LINES": masked_rgba(metal, metal_line),
        "20_CLEAR_WHEEL__10_VISIBLE_BASE": masked_rgba(clear, clear_base),
        "20_CLEAR_WHEEL__30_TINTED_TRANSMISSION": masked_rgba(clear, clear_transmission),
        "20_CLEAR_WHEEL__70_REFERENCE_STRUCTURE_LINE": masked_rgba(clear, clear_line),
        "30_FACE_AND_STICKER__10_SOURCE_EXACT": masked_rgba(face, face[..., 3] > 0),
    }
    return parts, effects


def diagnostic_layers(source: np.ndarray, masks: dict[str, np.ndarray]) -> list[tuple[str, np.ndarray]]:
    colors = {
        "TRACK": (255, 166, 0),
        "METAL_WHEEL": (80, 160, 255),
        "CLEAR_WHEEL": (115, 235, 85),
        "FACE_AND_STICKER": (255, 70, 170),
    }
    layers = []
    for name in PART_ORDER:
        rgba = color_rgba(masks[name], colors[name], source[..., 3])
        layers.append((name, rgba))
    return layers


def linework_preview(v1: np.ndarray, masks: dict[str, np.ndarray]) -> np.ndarray:
    preview = v1.copy()
    metal_lines = masks["METAL_INTERNAL_MAJOR_4PX"] | masks["METAL_INTERNAL_STRUCTURE_3PX"]
    clear_lines = masks["CLEAR_REFERENCE_LINE_3PX"]
    preview[metal_lines, :3] = (50, 50, 51)
    preview[clear_lines, :3] = (51, 62, 22)
    return preview


def save_psd_groups(
    path: Path,
    groups: list[tuple[str, list[tuple[str, np.ndarray]]]],
    hidden_masks: dict[str, np.ndarray] | None = None,
) -> None:
    sys.path.insert(0, str(PYDEPS))
    from psd_tools import PSDImage
    from psd_tools.api.layers import Group, PixelLayer

    psd = PSDImage.new("RGB", EXPECTED_SIZE, color=(0, 0, 0))
    for group_name, layers in groups:
        group = Group.new(psd, name=group_name, open_folder=True)
        for layer_name, rgba in layers:
            PixelLayer.frompil(Image.fromarray(rgba, "RGBA"), group, name=layer_name)
    if hidden_masks:
        mask_group = Group.new(psd, name="90_MASKS", open_folder=False)
        mask_group.visible = False
        alpha = np.full((EXPECTED_SIZE[1], EXPECTED_SIZE[0]), 255, dtype=np.uint8)
        for name, mask in hidden_masks.items():
            PixelLayer.frompil(
                Image.fromarray(color_rgba(mask, (255, 255, 255), alpha), "RGBA"),
                mask_group,
                name=f"MASK_{name}",
            )
    path.parent.mkdir(parents=True, exist_ok=True)
    psd.save(path)


def save_parts_psd(path: Path, parts: dict[str, np.ndarray]) -> None:
    sys.path.insert(0, str(PYDEPS))
    from psd_tools import PSDImage
    from psd_tools.api.layers import PixelLayer

    psd = PSDImage.new("RGB", EXPECTED_SIZE, color=(0, 0, 0))
    for name in PART_ORDER:
        PixelLayer.frompil(Image.fromarray(parts[name], "RGBA"), psd, name=name)
    path.parent.mkdir(parents=True, exist_ok=True)
    psd.save(path)


def psd_report(path: Path, expected: np.ndarray, *, expected_layers: int | None = None) -> dict[str, object]:
    sys.path.insert(0, str(PYDEPS))
    from psd_tools import PSDImage

    psd = PSDImage.open(path)
    rendered = np.asarray(
        psd.composite(ignore_preview=True, force=True, alpha=0.0).convert("RGBA")
    ).copy()
    rendered[rendered[..., 3] == 0, :3] = 0
    delta = np.abs(rendered.astype(np.int16) - expected.astype(np.int16))
    pixels = [layer for layer in psd.descendants() if not layer.is_group() and layer.visible]
    root_names = [layer.name for layer in psd]
    return {
        "file": path.name,
        "sha256": sha256(path),
        "size": list(psd.size),
        "root_layer_names_bottom_to_top": root_names,
        "visible_pixel_layers": len(pixels),
        "expected_visible_pixel_layers": expected_layers,
        "all_names_ascii": all(layer.name.isascii() for layer in psd.descendants()),
        "max_channel_delta": int(delta.max()),
        "channels_over_1": int((delta > 1).sum()),
        "alpha_exact": bool(np.array_equal(rendered[..., 3], expected[..., 3])),
    }


def groups_from_effects(effects: dict[str, np.ndarray]) -> list[tuple[str, list[tuple[str, np.ndarray]]]]:
    grouped: dict[str, list[tuple[str, np.ndarray]]] = {}
    for full_name, rgba in effects.items():
        group_name, layer_name = full_name.split("__", 1)
        grouped.setdefault(group_name, []).append((layer_name, rgba))
    return list(grouped.items())


def save_effect_layers(effects: dict[str, np.ndarray]) -> list[dict[str, object]]:
    LAYERS_DIR.mkdir(parents=True, exist_ok=True)
    for stale in LAYERS_DIR.glob("*.png"):
        stale.unlink()
    records = []
    for order, (name, rgba) in enumerate(effects.items()):
        filename = f"{order:02d}_{name}.png"
        path = LAYERS_DIR / filename
        Image.fromarray(rgba, "RGBA").save(path)
        records.append(
            {
                "order_bottom_to_top": order,
                "name": name,
                "file": filename,
                "sha256": sha256(path),
                "pixels": int((rgba[..., 3] > 0).sum()),
            }
        )
    return records


def save_parts(parts: dict[str, np.ndarray]) -> list[dict[str, object]]:
    PARTS_DIR.mkdir(parents=True, exist_ok=True)
    for stale in PARTS_DIR.glob("*.png"):
        stale.unlink()
    records = []
    for order, name in enumerate(PART_ORDER):
        path = PARTS_DIR / PART_FILES[name]
        Image.fromarray(parts[name], "RGBA").save(path)
        records.append(
            {
                "order_bottom_to_top": order,
                "name": name,
                "file": path.name,
                "sha256": sha256(path),
                "pixels": int((parts[name][..., 3] > 0).sum()),
            }
        )
    return records


def comparison_sheet(
    v1: np.ndarray,
    final: np.ndarray,
    aligned_clear: np.ndarray,
    masks: dict[str, np.ndarray],
) -> None:
    thumb = (363, 360)
    panels: list[tuple[str, Image.Image]] = [
        ("V1 SOURCE", Image.fromarray(v1, "RGBA")),
        ("CLEAR REFERENCE ALIGNED", Image.fromarray(aligned_clear, "RGBA")),
    ]
    metal_trace = v1.copy()
    trace = masks["METAL_INTERNAL_MAJOR_4PX"] | masks["METAL_INTERNAL_STRUCTURE_3PX"]
    metal_trace[trace, :3] = (255, 40, 180)
    panels.append(("METAL REFERENCE TRACE", Image.fromarray(metal_trace, "RGBA")))
    panels.append(("V2 FINAL", Image.fromarray(final, "RGBA")))
    if CLEAR_CANDIDATE.exists():
        panels.append(("CLEAR CANDIDATE", Image.open(CLEAR_CANDIDATE).convert("RGBA")))
    if METAL_CANDIDATE.exists():
        panels.append(("METAL CANDIDATE REJECTED", Image.open(METAL_CANDIDATE).convert("RGBA")))
    sheet = Image.new("RGBA", (thumb[0] * len(panels), thumb[1]), (20, 20, 20, 255))
    for index, (label, panel) in enumerate(panels):
        fitted = panel.resize(thumb, Image.Resampling.LANCZOS)
        sheet.alpha_composite(fitted, (index * thumb[0], 0))
        draw = ImageDraw.Draw(sheet)
        draw.rectangle((index * thumb[0], 0, (index + 1) * thumb[0], 24), fill=(0, 0, 0, 210))
        draw.text((index * thumb[0] + 6, 7), label, fill=(255, 255, 255, 255))
    sheet.convert("RGB").save(GEOMETRY_COMPARISON_PATH)

    diff = np.abs(final.astype(np.int16) - v1.astype(np.int16)).astype(np.uint8)
    heat = np.zeros_like(final)
    heat[..., 0] = np.max(diff[..., :3], axis=2)
    heat[..., 1] = diff[..., 3]
    heat[..., 3] = np.where(np.any(diff != 0, axis=2), 255, 0).astype(np.uint8)
    Image.fromarray(heat, "RGBA").save(GEOMETRY_DIFFERENCE_PATH)


def main() -> None:
    WORK.mkdir(parents=True, exist_ok=True)
    before = {
        "v1_layers": tree_snapshot(V1_LAYERS),
        "v1_parts": tree_snapshot(V1_PARTS),
        "v1_final": sha256(V1_FINAL),
        "style_reference": sha256(STYLE_REFERENCE),
        "clear_reference": sha256(CLEAR_REFERENCE),
        "metal_reference": sha256(METAL_REFERENCE),
    }
    source = load_rgba(SOURCE_PATH, expected_size=EXPECTED_SIZE)
    v1 = load_rgba(V1_FINAL, expected_size=EXPECTED_SIZE)
    if bbox(source[..., 3] > 0) != EXPECTED_ALPHA_BBOX:
        raise AssertionError("Source alpha bbox changed")

    v1_parts = {
        name: load_rgba(V1_PARTS / PART_FILES[name], expected_size=EXPECTED_SIZE)
        for name in PART_ORDER
    }
    if not np.array_equal(alpha_composite(v1_parts.values()), v1):
        raise AssertionError("V1 physical part bundle no longer recomposes to V1 final")

    aligned_clear, aligned_clear_mask, alignment = reference_alignment(
        v1_parts["CLEAR_WHEEL"][..., 3] > 0
    )
    masks, base_support, geometry = build_geometry(source, v1_parts, aligned_clear_mask)
    parts, effects = render_parts(source, v1_parts, masks)
    final = alpha_composite(parts[name] for name in PART_ORDER)
    effect_composite = alpha_composite(effects.values())

    MASK_DIR.mkdir(parents=True, exist_ok=True)
    for stale in MASK_DIR.glob("*.png"):
        stale.unlink()
    for name, mask in masks.items():
        save_mask(MASK_DIR / f"mask_{name}.png", mask)

    diagnostic = alpha_composite(rgba for _, rgba in diagnostic_layers(source, masks))
    linework = linework_preview(v1, masks)
    Image.fromarray(diagnostic, "RGBA").save(STAGE1_PREVIEW)
    Image.fromarray(linework, "RGBA").save(STAGE2_PREVIEW)
    Image.fromarray(final, "RGBA").save(STAGE3_PREVIEW)
    Image.fromarray(final, "RGBA").save(FINAL_PREVIEW)
    Image.fromarray(final, "RGBA").resize(
        (EXPECTED_SIZE[0] // 4, EXPECTED_SIZE[1] // 4), Image.Resampling.LANCZOS
    ).save(WORK / "preview-25pct.png")

    diagnostic_groups = [(name, [("10_MASK", rgba)]) for name, rgba in diagnostic_layers(source, masks)]
    groups = groups_from_effects(effects)
    save_psd_groups(STAGE1_PSD, diagnostic_groups, hidden_masks=masks)
    save_psd_groups(STAGE2_PSD, groups, hidden_masks=masks)
    save_psd_groups(STAGE3_PSD, groups, hidden_masks=masks)
    save_psd_groups(MASTER_PSD, groups, hidden_masks=masks)

    effect_records = save_effect_layers(effects)
    part_records = save_parts(parts)
    save_parts_psd(PARTS_PSD, parts)
    comparison_sheet(v1, final, aligned_clear, masks)

    protected = load_mask(V1_MASKS / "mask_PROTECTED_ARTWORK.png")
    track_support = base_support["TRACK"]
    face_support = base_support["FACE_AND_STICKER"]
    alpha_exact = np.array_equal(final[..., 3], source[..., 3])
    protected_delta = np.abs(final[protected].astype(np.int16) - source[protected].astype(np.int16))
    track_delta = np.abs(final[track_support].astype(np.int16) - v1[track_support].astype(np.int16))
    face_delta = np.abs(final[face_support].astype(np.int16) - v1[face_support].astype(np.int16))
    effects_delta = np.abs(effect_composite.astype(np.int16) - final.astype(np.int16))

    after = {
        "v1_layers": tree_snapshot(V1_LAYERS),
        "v1_parts": tree_snapshot(V1_PARTS),
        "v1_final": sha256(V1_FINAL),
        "style_reference": sha256(STYLE_REFERENCE),
        "clear_reference": sha256(CLEAR_REFERENCE),
        "metal_reference": sha256(METAL_REFERENCE),
    }
    old_unchanged = before == after
    parts_psd_report = psd_report(PARTS_PSD, final, expected_layers=4)
    master_psd_report = psd_report(MASTER_PSD, final)

    part_pngs = sorted(path.name for path in PARTS_DIR.glob("*.png"))
    declared_overlap = masks["METAL_WHEEL"] & masks["CLEAR_WHEEL"]
    forbidden_overlaps = {
        "TRACK__METAL": int((masks["TRACK"] & masks["METAL_WHEEL"]).sum()),
        "TRACK__CLEAR": int((masks["TRACK"] & masks["CLEAR_WHEEL"]).sum()),
        "TRACK__FACE": int((masks["TRACK"] & masks["FACE_AND_STICKER"]).sum()),
        "METAL__FACE": int((masks["METAL_WHEEL"] & masks["FACE_AND_STICKER"]).sum()),
        "CLEAR__FACE": int((masks["CLEAR_WHEEL"] & masks["FACE_AND_STICKER"]).sum()),
    }
    validation = {
        "status": "pending",
        "canvas": list(EXPECTED_SIZE),
        "source_alpha_bbox": list(bbox(source[..., 3] > 0) or ()),
        "final_alpha_bbox": list(bbox(final[..., 3] > 0) or ()),
        "alpha_exact": bool(alpha_exact),
        "protected_rgba_max_delta": int(protected_delta.max()) if protected_delta.size else 0,
        "protected_rgba_changed_channels": int((protected_delta != 0).sum()),
        "track_rgba_max_delta": int(track_delta.max()) if track_delta.size else 0,
        "face_and_sticker_rgba_max_delta": int(face_delta.max()) if face_delta.size else 0,
        "clear_anchor_rms_px": alignment["clear_reference"]["anchor_rms_px"],
        "metal_anchor_rms_px": alignment["metal_reference"]["anchor_rms_px"],
        "clear_external_edge_coverage_within_4px": geometry["clear_external"]["edge_coverage_within_4px"],
        "metal_internal_edge_coverage_within_4px": geometry["metal_visible_internal"]["edge_coverage_within_4px"],
        "clear_boundary_changed_pixels": geometry["clear_external"]["changed_boundary_pixels"],
        "metal_internal_visible_pixels": geometry["metal_visible_internal"]["physical_mask_pixels"],
        "declared_metal_clear_overlap_pixels": int(declared_overlap.sum()),
        "forbidden_overlap_pixels": forbidden_overlaps,
        "parts_png_count": len(part_pngs),
        "parts_png_files": part_pngs,
        "parts_recomposition_max_channel_delta": int(
            np.abs(alpha_composite(parts[name] for name in PART_ORDER).astype(np.int16) - final.astype(np.int16)).max()
        ),
        "effect_layers_recomposition_max_channel_delta": int(effects_delta.max()),
        "parts_psd": parts_psd_report,
        "master_psd": master_psd_report,
        "v1_and_references_unchanged": old_unchanged,
        "candidate_policy": {
            "clear_candidate": "comparison_only_not_adopted_global_geometry_and_protected_pixels_changed",
            "metal_candidate": "comparison_only_rejected_eight_slot_topology_and_generated_background",
        },
    }
    passed = (
        validation["alpha_exact"]
        and validation["protected_rgba_max_delta"] == 0
        and validation["track_rgba_max_delta"] == 0
        and validation["face_and_sticker_rgba_max_delta"] == 0
        and validation["clear_anchor_rms_px"] <= 4
        and validation["metal_anchor_rms_px"] <= 4
        and validation["clear_external_edge_coverage_within_4px"] >= 0.90
        and validation["metal_internal_edge_coverage_within_4px"] >= 0.85
        and validation["clear_boundary_changed_pixels"] > 0
        and validation["metal_internal_visible_pixels"] > 0
        and validation["declared_metal_clear_overlap_pixels"] > 0
        and not any(forbidden_overlaps.values())
        and validation["parts_png_count"] == 4
        and validation["parts_recomposition_max_channel_delta"] == 0
        and validation["effect_layers_recomposition_max_channel_delta"] == 0
        and parts_psd_report["visible_pixel_layers"] == 4
        and parts_psd_report["all_names_ascii"]
        and parts_psd_report["max_channel_delta"] <= 1
        and master_psd_report["max_channel_delta"] <= 1
        and old_unchanged
    )
    validation["status"] = "pass" if passed else "fail"

    common_manifest = {
        "schema_version": 2,
        "bey_id": "LIBRA_STYLEMATCH_02",
        "canvas": {"width": EXPECTED_SIZE[0], "height": EXPECTED_SIZE[1]},
        "source": {"file": SOURCE_PATH.name, "sha256": sha256(SOURCE_PATH)},
        "style_reference": {"file": STYLE_REFERENCE.name, "sha256": sha256(STYLE_REFERENCE)},
        "geometry_references": alignment,
        "geometry_metrics": geometry,
        "stacking_model": {
            "type": "physical_stack_with_declared_overlap",
            "order_bottom_to_top": list(PART_ORDER),
            "allowed_overlap": ["METAL_WHEEL__CLEAR_WHEEL"],
        },
        "candidate_usage": validation["candidate_policy"],
        "validation": validation,
    }
    layer_manifest = {
        **common_manifest,
        "exchange_format": "full_canvas_rgba_effect_png",
        "master_psd": MASTER_PSD.name,
        "layers": effect_records,
    }
    part_manifest = {
        **common_manifest,
        "exchange_format": "full_canvas_rgba_physical_part_png",
        "parts_psd": PARTS_PSD.name,
        "parts": part_records,
    }
    (LAYERS_DIR / "manifest.json").write_text(
        json.dumps(layer_manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    (PARTS_DIR / "manifest.json").write_text(
        json.dumps(part_manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    GEOMETRY_REPORT_PATH.write_text(
        json.dumps({"alignment": alignment, "geometry": geometry}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    VALIDATION_PATH.write_text(
        json.dumps(validation, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )

    print(
        json.dumps(
            {
                "status": validation["status"],
                "final": str(FINAL_PREVIEW),
                "clear_boundary_changed_pixels": validation["clear_boundary_changed_pixels"],
                "metal_internal_visible_pixels": validation["metal_internal_visible_pixels"],
                "metal_clear_overlap_pixels": validation["declared_metal_clear_overlap_pixels"],
                "parts_psd_max_delta": parts_psd_report["max_channel_delta"],
                "v1_unchanged": old_unchanged,
            },
            ensure_ascii=False,
            indent=2,
        )
    )
    if not passed:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
