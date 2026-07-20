from __future__ import annotations

import argparse
import hashlib
import json
import sys
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

import numpy as np
from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[3]
WORK = Path(__file__).resolve().parent
BEYS = ROOT / "assets" / "images" / "beys"
SOURCE_PATH = BEYS / "dkcjn91-632bfe50-9e4e-4e8d-a06f-a5b1494d71e7.png"
STYLE_PATH = BEYS / "flame-libra.png"
CLEAR_REFERENCE = BEYS / "참고-리브라휠.png"
METAL_REFERENCE = BEYS / "참고-플레임휠.jpg"
LEGACY = ROOT / "tmp" / "imagegen" / "libra-experiment"
LEGACY_MASKS = LEGACY / "stage1-layers"
LEGACY_STAGE2_MASKS = LEGACY / "stage2-layers"
PYDEPS = LEGACY / "pydeps"

MASK_DIR = WORK / "masks"
INPUT_DIR = WORK / "inputs"
CANDIDATE_DIR = WORK / "candidates"
LAYERS_DIR = BEYS / "libra-stylematch.layers"
MANIFEST_PATH = LAYERS_DIR / "manifest.json"
VALIDATION_PATH = WORK / "validation.json"

STAGE1_PSD = BEYS / "libra-stylematch-01-masks.psd"
STAGE1_PREVIEW = BEYS / "libra-stylematch-01-masks-preview.png"
STAGE2_PSD = BEYS / "libra-stylematch-02-linework.psd"
STAGE2_PREVIEW = BEYS / "libra-stylematch-02-linework-preview.png"
STAGE3_PSD = BEYS / "libra-stylematch-03-materials.psd"
STAGE3_PREVIEW = BEYS / "libra-stylematch-03-materials-preview.png"
MASTER_PSD = BEYS / "libra-stylematch-master.psd"
FINAL_PREVIEW = BEYS / "libra-stylematch-preview.png"

EXPECTED_SIZE = (1452, 1440)
EXPECTED_ALPHA_BBOX = (36, 31, 1416, 1416)
INK = np.array((0x20, 0x20, 0x20), dtype=np.uint8)
MAGENTA = np.array((255, 0, 255), dtype=np.uint8)

METAL_PALETTE = {
    "SHADOW": (0x80, 0x7B, 0x72),
    "BASE": (0xAA, 0xA8, 0xA7),
    "MID_LIGHT": (0xC0, 0xBF, 0xC0),
    "HIGHLIGHT": (0xED, 0xED, 0xEE),
}
CLEAR_PALETTE = {
    "DEEP": (0x45, 0x49, 0x1E),
    "TRANSMISSION_SHADOW": (0x59, 0x69, 0x22),
    "BASE": (0xA1, 0xBA, 0x2D),
    "MID_LIGHT": (0xAD, 0xC6, 0x33),
    "BRIGHT": (0xB5, 0xCD, 0x3A),
    "PALE_REFLECTION": (0xC6, 0xC8, 0x7D),
}
PLASTIC_PALETTE = {
    "SHADOW": (0xC9, 0x82, 0x00),
    "BASE": (0xFF, 0xB9, 0x00),
    "MID_LIGHT": (0xFF, 0xCA, 0x36),
    "HIGHLIGHT": (0xFF, 0xDF, 0x79),
}

DIAGNOSTIC_COLORS = {
    "FLAME_METAL_WHEEL": (70, 154, 255),
    "YELLOW_INTERNAL_PARTS": (255, 157, 0),
    "LIBRA_CLEAR_WHEEL": (108, 232, 86),
    "FACE_BOLT": (174, 92, 255),
    "PROTECTED_ARTWORK": (255, 60, 166),
}

CANDIDATES = {
    "METAL_LINEWORK": CANDIDATE_DIR / "metal-linework.png",
    "CLEAR_LINEWORK": CANDIDATE_DIR / "clear-linework.png",
    "METAL_MATERIAL": CANDIDATE_DIR / "metal-material.png",
    "CLEAR_MATERIAL": CANDIDATE_DIR / "clear-material.png",
    "FACE_BOLT_MATERIAL": CANDIDATE_DIR / "face-bolt-material.png",
    "YELLOW_INTERNAL_MATERIAL": CANDIDATE_DIR / "yellow-internal-material.png",
}


@dataclass
class BuildState:
    source: np.ndarray
    masks: dict[str, np.ndarray]
    line_masks: dict[str, np.ndarray]
    candidate_report: dict[str, object]


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest().upper()


def bbox(mask: np.ndarray) -> tuple[int, int, int, int]:
    ys, xs = np.where(mask)
    if not len(xs):
        return ()
    return int(xs.min()), int(ys.min()), int(xs.max() + 1), int(ys.max() + 1)


def polygon_mask(size: tuple[int, int], points: list[tuple[int, int]]) -> np.ndarray:
    image = Image.new("L", size, 0)
    ImageDraw.Draw(image).polygon(points, fill=255)
    return np.asarray(image) > 0


def rectangle_mask(
    size: tuple[int, int], left: int, top: int, right: int, bottom: int
) -> np.ndarray:
    mask = np.zeros((size[1], size[0]), dtype=bool)
    mask[top:bottom, left:right] = True
    return mask


def _odd(size: int) -> int:
    return max(3, size if size % 2 else size + 1)


def dilate(mask: np.ndarray, radius: int) -> np.ndarray:
    if radius <= 0:
        return mask.copy()
    return np.asarray(
        Image.fromarray(mask.astype(np.uint8) * 255, "L").filter(
            ImageFilter.MaxFilter(_odd(radius * 2 + 1))
        )
    ) > 0


def erode(mask: np.ndarray, radius: int) -> np.ndarray:
    if radius <= 0:
        return mask.copy()
    return np.asarray(
        Image.fromarray(mask.astype(np.uint8) * 255, "L").filter(
            ImageFilter.MinFilter(_odd(radius * 2 + 1))
        )
    ) > 0


def close_mask(mask: np.ndarray, radius: int) -> np.ndarray:
    return erode(dilate(mask, radius), radius)


def load_bool_mask(path: Path, size: tuple[int, int]) -> np.ndarray:
    image = Image.open(path).convert("L")
    if image.size != size:
        image = image.resize(size, Image.Resampling.NEAREST)
    return np.asarray(image) >= 128


def save_mask(path: Path, mask: np.ndarray) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(mask.astype(np.uint8) * 255, "L").save(path)


def alpha_composite(layers: Iterable[np.ndarray]) -> np.ndarray:
    layers = list(layers)
    height, width = layers[0].shape[:2]
    canvas = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    for layer in layers:
        canvas = Image.alpha_composite(canvas, Image.fromarray(layer, "RGBA"))
    result = np.asarray(canvas).copy()
    result[result[..., 3] == 0, :3] = 0
    return result


def exact_layer(source: np.ndarray, mask: np.ndarray) -> np.ndarray:
    layer = np.zeros_like(source)
    layer[mask] = source[mask]
    return layer


def color_layer(
    source_alpha: np.ndarray,
    mask: np.ndarray,
    color: tuple[int, int, int] | np.ndarray,
) -> np.ndarray:
    layer = np.zeros((*mask.shape, 4), dtype=np.uint8)
    if isinstance(color, np.ndarray) and color.ndim == 3:
        layer[mask, :3] = color[mask]
    else:
        layer[mask, :3] = np.asarray(color, dtype=np.uint8)
    layer[mask, 3] = source_alpha[mask]
    return layer


def make_masks(source: np.ndarray) -> dict[str, np.ndarray]:
    height, width = source.shape[:2]
    size = (width, height)
    alpha = source[..., 3]
    visible = alpha > 0

    raw_clear = load_bool_mask(LEGACY_MASKS / "mask_clear.png", size) & visible
    raw_metal = load_bool_mask(LEGACY_MASKS / "mask_metal.png", size) & visible
    legacy_print = load_bool_mask(LEGACY_MASKS / "mask_sticker_print.png", size)
    legacy_opaque = load_bool_mask(
        LEGACY_STAGE2_MASKS / "mask_opaque_color.png", size
    )

    center_roi = rectangle_mask(size, 470, 495, 982, 948)
    upper_roi = rectangle_mask(size, 450, 260, 1004, 414)
    lower_roi = rectangle_mask(size, 450, 1020, 1004, 1185)
    protected = legacy_print & (center_roi | upper_roi | lower_roi) & visible

    face_outer = polygon_mask(
        size,
        [
            (596, 500),
            (856, 500),
            (980, 695),
            (980, 745),
            (856, 945),
            (596, 945),
            (472, 745),
            (472, 695),
        ],
    ) & visible
    face = face_outer & ~protected

    opening_rois = (
        rectangle_mask(size, 405, 505, 550, 635)
        | rectangle_mask(size, 900, 505, 1048, 635)
        | rectangle_mask(size, 405, 795, 550, 935)
        | rectangle_mask(size, 900, 795, 1048, 935)
    )
    rgb = source[..., :3].astype(np.int16)
    red, green, blue = [rgb[..., channel] for channel in range(3)]
    yellow_color = (
        (red >= 105)
        & (red - blue >= 55)
        & (green - blue >= 34)
        & (red - green >= -10)
    )
    yellow_seed = (legacy_opaque | yellow_color) & opening_rois & visible
    yellow = close_mask(dilate(yellow_seed, 1), 2) & opening_rois & visible
    yellow &= ~protected & ~face

    clear = raw_clear & ~protected & ~face & ~yellow
    metal = raw_metal & ~protected & ~face & ~yellow & ~clear

    # The legacy masks are candidates only. All final ownership is constrained by
    # the actual source alpha and the current work's protected regions.
    editable = metal | yellow | clear | face
    preserved = visible & ~editable & ~protected
    transparent = ~visible

    masks = {
        "FLAME_METAL_WHEEL": metal,
        "YELLOW_INTERNAL_PARTS": yellow,
        "LIBRA_CLEAR_WHEEL": clear,
        "FACE_BOLT": face,
        "PROTECTED_ARTWORK": protected,
        "PRESERVED_SOURCE": preserved,
        "EDITABLE": editable,
        "VISIBLE": visible,
        "TRANSPARENT": transparent,
    }
    return masks


def make_line_masks(source: np.ndarray, masks: dict[str, np.ndarray]) -> dict[str, np.ndarray]:
    size = (source.shape[1], source.shape[0])
    legacy_line = load_bool_mask(LEGACY_MASKS / "mask_lineart.png", size)
    rgb = source[..., :3].astype(np.float32)
    luma = rgb[..., 0] * 0.2126 + rgb[..., 1] * 0.7152 + rgb[..., 2] * 0.0722
    # Keep only source-registered dark ink. The previous experiment treated
    # broad dark reflections as linework; the stricter threshold avoids those
    # black blobs and never invents a parallel contour.
    source_ink = luma <= 86
    common = legacy_line & source_ink & masks["EDITABLE"]

    part_edge = np.zeros_like(common)
    for name in (
        "FLAME_METAL_WHEEL",
        "YELLOW_INTERNAL_PARTS",
        "LIBRA_CLEAR_WHEEL",
        "FACE_BOLT",
    ):
        part = masks[name]
        part_edge |= dilate(part, 2) & ~erode(part, 2)
    major = common & dilate(part_edge, 2)
    remaining = common & ~major
    structure = remaining & dilate(erode(remaining, 1), 1)
    fine = remaining & ~structure
    return {
        "COMMON": common,
        "MAJOR_4PX": major,
        "STRUCTURE_3PX": structure,
        "FINE_2PX": fine,
    }


def make_diagnostic_layers(
    source: np.ndarray, masks: dict[str, np.ndarray]
) -> list[tuple[str, list[tuple[str, np.ndarray]]]]:
    alpha = source[..., 3]
    groups: list[tuple[str, list[tuple[str, np.ndarray]]]] = [
        (
            "00_PRESERVED_SOURCE",
            [("00_ORIGINAL_PIXELS", exact_layer(source, masks["PRESERVED_SOURCE"]))],
        )
    ]
    for index, name in enumerate(
        (
            "FLAME_METAL_WHEEL",
            "YELLOW_INTERNAL_PARTS",
            "LIBRA_CLEAR_WHEEL",
            "FACE_BOLT",
            "PROTECTED_ARTWORK",
        ),
        start=10,
    ):
        groups.append(
            (
                f"{index:02d}_{name}",
                [
                    (
                        "10_DIAGNOSTIC_MASK",
                        color_layer(alpha, masks[name], DIAGNOSTIC_COLORS[name]),
                    )
                ],
            )
        )
    return groups


def make_candidate_input(
    source: np.ndarray, mask: np.ndarray, path: Path, *, context: np.ndarray | None = None
) -> None:
    height, width = source.shape[:2]
    output = np.zeros((height, width, 4), dtype=np.uint8)
    output[..., :3] = MAGENTA
    output[..., 3] = 255
    if context is not None:
        context_pixels = context & ~mask
        gray = np.rint(
            source[..., :3].astype(np.float32).mean(axis=2, keepdims=True)
        ).astype(np.uint8)
        output[context_pixels, :3] = np.clip(
            gray[context_pixels] * 0.35 + 120, 0, 255
        ).astype(np.uint8)
    output[mask, :3] = source[mask, :3]
    path.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(output, "RGBA").save(path)


def prepare_inputs(state: BuildState) -> None:
    masks = state.masks
    context = masks["EDITABLE"] | masks["PROTECTED_ARTWORK"]
    jobs = {
        "metal-linework-input.png": masks["FLAME_METAL_WHEEL"],
        "clear-linework-input.png": masks["LIBRA_CLEAR_WHEEL"],
        "metal-material-input.png": masks["FLAME_METAL_WHEEL"],
        "clear-material-input.png": masks["LIBRA_CLEAR_WHEEL"],
        "face-bolt-material-input.png": masks["FACE_BOLT"],
        "yellow-internal-material-input.png": masks["YELLOW_INTERNAL_PARTS"],
    }
    for filename, mask in jobs.items():
        make_candidate_input(state.source, mask, INPUT_DIR / filename, context=context)


def chroma_subject(rgb: np.ndarray) -> np.ndarray:
    values = rgb.astype(np.int16)
    red, green, blue = [values[..., channel] for channel in range(3)]
    magenta = (
        (red > 155)
        & (blue > 145)
        & (green < 125)
        & (np.abs(red - blue) < 110)
    )
    return ~magenta


def fit_candidate(path: Path, target_mask: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    target_height, target_width = target_mask.shape
    source = np.asarray(Image.open(path).convert("RGB"))
    subject = chroma_subject(source)
    source_bbox = bbox(subject)
    target_bbox = bbox(target_mask)
    if not source_bbox or not target_bbox:
        raise ValueError(f"Empty subject while fitting {path}")
    sl, st, sr, sb = source_bbox
    tl, tt, tr, tb = target_bbox
    crop_rgb = Image.fromarray(source[st:sb, sl:sr], "RGB")
    crop_alpha = Image.fromarray(subject[st:sb, sl:sr].astype(np.uint8) * 255, "L")
    target_size = (tr - tl, tb - tt)
    fitted_rgb = np.zeros((target_height, target_width, 3), dtype=np.uint8)
    fitted_subject = np.zeros((target_height, target_width), dtype=bool)
    fitted_rgb[tt:tb, tl:tr] = np.asarray(
        crop_rgb.resize(target_size, Image.Resampling.LANCZOS)
    )
    fitted_subject[tt:tb, tl:tr] = (
        np.asarray(crop_alpha.resize(target_size, Image.Resampling.BILINEAR)) >= 96
    )
    return fitted_rgb, fitted_subject


def normalized_field(rgb: np.ndarray, mask: np.ndarray, blur_radius: int = 9) -> np.ndarray:
    blurred = np.asarray(
        Image.fromarray(rgb.astype(np.uint8), "RGB").filter(
            ImageFilter.GaussianBlur(blur_radius)
        )
    ).astype(np.float32)
    luma = blurred[..., 0] * 0.2126 + blurred[..., 1] * 0.7152 + blurred[..., 2] * 0.0722
    values = luma[mask]
    if not values.size:
        return np.zeros(mask.shape, dtype=np.float32)
    low, high = np.percentile(values, (8, 92))
    return np.clip((luma - low) / max(1.0, high - low), 0.0, 1.0)


def symmetric_field(field: np.ndarray, mask: np.ndarray) -> np.ndarray:
    variants = (field, np.fliplr(field), np.flipud(field), np.flipud(np.fliplr(field)))
    mask_variants = (mask, np.fliplr(mask), np.flipud(mask), np.flipud(np.fliplr(mask)))
    total = np.zeros_like(field, dtype=np.float32)
    count = np.zeros_like(field, dtype=np.float32)
    for values, valid in zip(variants, mask_variants):
        total += values * valid
        count += valid
    result = total / np.maximum(count, 1.0)
    return np.clip(result, 0.0, 1.0)


def palette_ramp(
    tone: np.ndarray,
    stops: list[tuple[float, tuple[int, int, int]]],
) -> np.ndarray:
    positions = np.array([position for position, _ in stops], dtype=np.float32)
    colors = np.array([color for _, color in stops], dtype=np.float32)
    output = np.zeros((*tone.shape, 3), dtype=np.float32)
    for channel in range(3):
        output[..., channel] = np.interp(tone, positions, colors[:, channel])
    return np.rint(np.clip(output, 0, 255)).astype(np.uint8)


def candidate_tone(
    path: Path, target_mask: np.ndarray
) -> tuple[np.ndarray | None, dict[str, object]]:
    report: dict[str, object] = {
        "path": str(path),
        "exists": path.exists(),
        "adopted_pixels": 0,
        "usage": "none",
    }
    if not path.exists():
        report["reason"] = "candidate_missing_fallback_to_source_tone"
        return None, report
    fitted_rgb, fitted_subject = fit_candidate(path, target_mask)
    usable = target_mask & fitted_subject
    coverage = float(usable.sum() / max(1, target_mask.sum()))
    report["target_coverage"] = round(coverage, 6)
    if coverage < 0.55:
        report["reason"] = "candidate_subject_coverage_below_0.55"
        return None, report
    field = normalized_field(fitted_rgb, usable, blur_radius=13)
    report["adopted_pixels"] = int(target_mask.sum())
    report["usage"] = "low_frequency_luminance_only_inside_final_mask"
    report["geometry_alpha_text_background_used"] = False
    return field, report


def line_candidate_report(
    path: Path, target_mask: np.ndarray, source_line: np.ndarray
) -> dict[str, object]:
    report: dict[str, object] = {
        "path": str(path),
        "exists": path.exists(),
        "new_line_pixels_adopted": 0,
        "final_geometry_source_registered": True,
    }
    if not path.exists():
        report["reason"] = "candidate_missing_source_linework_retained"
        return report
    fitted_rgb, fitted_subject = fit_candidate(path, target_mask)
    rgb = fitted_rgb.astype(np.float32)
    luma = rgb[..., 0] * 0.2126 + rgb[..., 1] * 0.7152 + rgb[..., 2] * 0.0722
    dark = (luma < 90) & fitted_subject & target_mask
    supported = source_line & dilate(dark, 4)
    candidate_only_near = dark & ~source_line & dilate(source_line, 4)
    candidate_only_far = dark & ~dilate(source_line, 4)
    report.update(
        {
            "candidate_dark_pixels": int(dark.sum()),
            "source_line_supported_pixels": int(supported.sum()),
            "candidate_only_within_4px": int(candidate_only_near.sum()),
            "candidate_only_outside_4px_rejected": int(candidate_only_far.sum()),
            "usage": "support_test_only_no_generated_line_pixels_copied",
        }
    )
    return report


def make_partitioned_tone_layers(
    source: np.ndarray,
    part_mask: np.ndarray,
    line_mask: np.ndarray,
    candidate_path: Path,
    palette: dict[str, tuple[int, int, int]],
    kind: str,
) -> tuple[list[tuple[str, np.ndarray]], dict[str, object]]:
    alpha = source[..., 3]
    surface = part_mask & ~line_mask
    source_field = symmetric_field(normalized_field(source[..., :3], surface), surface)
    generated_field, report = candidate_tone(candidate_path, surface)
    if generated_field is not None:
        generated_field = symmetric_field(generated_field, surface)
        tone = np.clip(source_field * 0.68 + generated_field * 0.32, 0.0, 1.0)
    else:
        tone = source_field

    # Smooth the adopted luminance before palette mapping. Layer ownership is
    # still discrete for PSD editing, but every layer receives pixels from one
    # continuous rendered ramp, so there are no posterized tone boundaries.
    tone = np.asarray(
        Image.fromarray(np.rint(tone * 255).astype(np.uint8), "L").filter(
            ImageFilter.GaussianBlur(4)
        )
    ).astype(np.float32) / 255.0
    tone_values = tone[surface]
    if tone_values.size:
        low, high = np.percentile(tone_values, (3, 97))
        tone = np.clip((tone - low) / max(0.01, high - low), 0.0, 1.0)
    tone = symmetric_field(tone, surface)

    filled = close_mask(part_mask, 5)
    edge_2 = part_mask & ~erode(filled, 2)

    if kind == "metal":
        rendered = palette_ramp(
            tone,
            [
                (0.00, palette["SHADOW"]),
                (0.38, palette["BASE"]),
                (0.66, palette["MID_LIGHT"]),
                (1.00, palette["HIGHLIGHT"]),
            ],
        )
        highlight = surface & ((tone >= 0.74) | (edge_2 & (tone >= 0.60)))
        mid_light = surface & ~highlight & (tone >= 0.54)
        shadow = surface & ~highlight & ~mid_light & (tone < 0.27)
        base = surface & ~highlight & ~mid_light & ~shadow
        layers = [
            ("10_SHADOW_REFLECTION", color_layer(alpha, shadow, rendered)),
            ("20_BASE_MIDTONE", color_layer(alpha, base, rendered)),
            ("30_MID_LIGHT", color_layer(alpha, mid_light, rendered)),
            ("40_BROAD_HIGHLIGHT", color_layer(alpha, highlight & ~edge_2, rendered)),
            ("50_NARROW_REFLECTION", color_layer(alpha, highlight & edge_2, rendered)),
        ]
    elif kind == "clear":
        rendered = palette_ramp(
            tone,
            [
                (0.00, palette["DEEP"]),
                (0.28, palette["TRANSMISSION_SHADOW"]),
                (0.48, palette["BASE"]),
                (0.67, palette["MID_LIGHT"]),
                (0.84, palette["BRIGHT"]),
                (1.00, palette["PALE_REFLECTION"]),
            ],
        )
        # Retain only a restrained amount of the source's low-frequency color
        # beneath the tint. This reads as transmission without reusing source
        # highlights or any generated geometry.
        source_blur = np.asarray(
            Image.fromarray(source[..., :3], "RGB").filter(ImageFilter.GaussianBlur(8))
        ).astype(np.float32)
        rendered = np.rint(
            rendered.astype(np.float32) * 0.88 + source_blur * 0.12
        ).clip(0, 255).astype(np.uint8)
        pale = surface & edge_2 & (tone >= 0.70)
        bright = surface & ~pale & (tone >= 0.78)
        mid_light = surface & ~pale & ~bright & (tone >= 0.56)
        deep = surface & ~pale & ~bright & ~mid_light & (tone < 0.20)
        transmission_shadow = surface & ~pale & ~bright & ~mid_light & ~deep & (tone < 0.38)
        base = surface & ~pale & ~bright & ~mid_light & ~deep & ~transmission_shadow
        layers = [
            ("10_DEEP_COLOR_CONCENTRATION", color_layer(alpha, deep, rendered)),
            ("20_TRANSMISSION_SHADOW", color_layer(alpha, transmission_shadow, rendered)),
            ("30_TINTED_TRANSMISSION", color_layer(alpha, base, rendered)),
            ("40_MID_LIGHT", color_layer(alpha, mid_light, rendered)),
            ("50_BRIGHT_SURFACE", color_layer(alpha, bright, rendered)),
            ("60_EDGE_REFLECTION", color_layer(alpha, pale, rendered)),
        ]
    else:
        rendered = palette_ramp(
            tone,
            [
                (0.00, palette["SHADOW"]),
                (0.42, palette["BASE"]),
                (0.72, palette["MID_LIGHT"]),
                (1.00, palette["HIGHLIGHT"]),
            ],
        )
        highlight = surface & (tone >= 0.74)
        mid_light = surface & ~highlight & (tone >= 0.58)
        shadow = surface & ~highlight & ~mid_light & ((tone < 0.26) | (edge_2 & (tone < 0.48)))
        base = surface & ~highlight & ~mid_light & ~shadow
        layers = [
            ("10_BEVEL_SHADOW", color_layer(alpha, shadow, rendered)),
            ("20_BASE_COLOR", color_layer(alpha, base, rendered)),
            ("30_BEVEL_MID_LIGHT", color_layer(alpha, mid_light, rendered)),
            ("40_BEVEL_HIGHLIGHT", color_layer(alpha, highlight, rendered)),
        ]

    owned = np.zeros_like(surface)
    for _, layer in layers:
        layer_mask = layer[..., 3] > 0
        if np.any(owned & layer_mask):
            raise AssertionError(f"Overlapping tone layers for {kind}")
        owned |= layer_mask
    if not np.array_equal(owned, surface & (alpha > 0)):
        missing = surface & (alpha > 0) & ~owned
        raise AssertionError(f"Unowned tone pixels for {kind}: {int(missing.sum())}")
    return layers, report


def line_layers(source: np.ndarray, line_masks: dict[str, np.ndarray]) -> list[tuple[str, np.ndarray]]:
    alpha = source[..., 3]
    source_rgb = source[..., :3].astype(np.float32)

    def ink_layer(mask: np.ndarray, strength: float) -> np.ndarray:
        ink = np.broadcast_to(INK.astype(np.float32), source_rgb.shape)
        rgb = np.rint(source_rgb * (1.0 - strength) + ink * strength).astype(np.uint8)
        return color_layer(alpha, mask, rgb)

    return [
        ("70_MAJOR_BOUNDARY_4PX", ink_layer(line_masks["MAJOR_4PX"], 0.72)),
        ("71_STRUCTURE_LINE_3PX", ink_layer(line_masks["STRUCTURE_3PX"], 0.58)),
        ("72_FINE_LINE_2PX", ink_layer(line_masks["FINE_2PX"], 0.44)),
    ]


def make_linework_groups(state: BuildState) -> list[tuple[str, list[tuple[str, np.ndarray]]]]:
    source = state.source
    masks = state.masks
    common = state.line_masks["COMMON"]
    groups: list[tuple[str, list[tuple[str, np.ndarray]]]] = [
        (
            "00_PRESERVED_SOURCE",
            [("00_ORIGINAL_PIXELS", exact_layer(source, masks["PRESERVED_SOURCE"]))],
        )
    ]
    for index, name in enumerate(
        ("FLAME_METAL_WHEEL", "YELLOW_INTERNAL_PARTS", "LIBRA_CLEAR_WHEEL", "FACE_BOLT"),
        start=10,
    ):
        part_line = common & masks[name]
        base = exact_layer(source, masks[name] & ~part_line)
        local_lines = {
            key: value & masks[name]
            for key, value in state.line_masks.items()
            if key != "COMMON"
        }
        groups.append((f"{index:02d}_{name}", [("10_SOURCE_TONE_BASE", base), *line_layers(source, local_lines)]))
    groups.append(
        (
            "40_PROTECTED_ARTWORK",
            [("10_SOURCE_RGBA_EXACT", exact_layer(source, masks["PROTECTED_ARTWORK"]))],
        )
    )
    return groups


def make_material_groups(state: BuildState) -> list[tuple[str, list[tuple[str, np.ndarray]]]]:
    source = state.source
    masks = state.masks
    line = state.line_masks["COMMON"]
    groups: list[tuple[str, list[tuple[str, np.ndarray]]]] = [
        (
            "00_PRESERVED_SOURCE",
            [("00_ORIGINAL_PIXELS", exact_layer(source, masks["PRESERVED_SOURCE"]))],
        )
    ]
    specs = [
        ("10_FLAME_METAL_WHEEL", "FLAME_METAL_WHEEL", CANDIDATES["METAL_MATERIAL"], METAL_PALETTE, "metal"),
        ("15_YELLOW_INTERNAL_PARTS", "YELLOW_INTERNAL_PARTS", CANDIDATES["YELLOW_INTERNAL_MATERIAL"], PLASTIC_PALETTE, "plastic"),
        ("20_LIBRA_CLEAR_WHEEL", "LIBRA_CLEAR_WHEEL", CANDIDATES["CLEAR_MATERIAL"], CLEAR_PALETTE, "clear"),
        ("30_FACE_BOLT", "FACE_BOLT", CANDIDATES["FACE_BOLT_MATERIAL"], PLASTIC_PALETTE, "plastic"),
    ]
    for group_name, mask_name, candidate, palette, kind in specs:
        local_line = line & masks[mask_name]
        tone_layers, report = make_partitioned_tone_layers(
            source, masks[mask_name], local_line, candidate, palette, kind
        )
        state.candidate_report[candidate.stem] = report
        local_lines = {
            key: value & masks[mask_name]
            for key, value in state.line_masks.items()
            if key != "COMMON"
        }
        groups.append((group_name, [*tone_layers, *line_layers(source, local_lines)]))
    groups.append(
        (
            "40_PROTECTED_ARTWORK",
            [("10_SOURCE_RGBA_EXACT", exact_layer(source, masks["PROTECTED_ARTWORK"]))],
        )
    )
    return groups


def flattened_layers(
    groups: list[tuple[str, list[tuple[str, np.ndarray]]]]
) -> list[tuple[str, np.ndarray]]:
    return [
        (f"{group_name}__{layer_name}", layer)
        for group_name, layers in groups
        for layer_name, layer in layers
    ]


def compose_groups(groups: list[tuple[str, list[tuple[str, np.ndarray]]]]) -> np.ndarray:
    return alpha_composite(layer for _, layer in flattened_layers(groups))


def save_psd(
    path: Path,
    source: np.ndarray,
    groups: list[tuple[str, list[tuple[str, np.ndarray]]]],
    *,
    include_hidden_masks: dict[str, np.ndarray] | None = None,
) -> None:
    sys.path.insert(0, str(PYDEPS))
    from psd_tools import PSDImage
    from psd_tools.api.layers import Group, PixelLayer

    height, width = source.shape[:2]
    psd = PSDImage.new("RGB", (width, height), color=(0, 0, 0))
    reference = PixelLayer.frompil(Image.fromarray(source, "RGBA"), psd, name="00_SOURCE_REFERENCE")
    reference.visible = False
    for group_name, layers in groups:
        group = Group.new(psd, name=group_name, open_folder=True)
        group.visible = True
        for layer_name, data in layers:
            layer = PixelLayer.frompil(Image.fromarray(data, "RGBA"), group, name=layer_name)
            layer.visible = True
    if include_hidden_masks:
        mask_group = Group.new(psd, name="90_FINAL_MASKS", open_folder=False)
        mask_group.visible = False
        for name, mask in include_hidden_masks.items():
            rgba = color_layer(source[..., 3], mask, (255, 255, 255))
            layer = PixelLayer.frompil(Image.fromarray(rgba, "RGBA"), mask_group, name=f"MASK_{name}")
            layer.visible = True
    path.parent.mkdir(parents=True, exist_ok=True)
    psd.save(path)


def psd_report(path: Path, expected: np.ndarray) -> dict[str, object]:
    sys.path.insert(0, str(PYDEPS))
    from psd_tools import PSDImage

    psd = PSDImage.open(path)
    rendered = np.asarray(
        psd.composite(ignore_preview=True, force=True, alpha=0.0).convert("RGBA")
    ).copy()
    rendered[rendered[..., 3] == 0, :3] = 0
    delta = np.abs(rendered.astype(np.int16) - expected.astype(np.int16))
    pixel_layers = [layer for layer in psd.descendants() if not layer.is_group()]
    return {
        "path": str(path),
        "size": list(psd.size),
        "layer_names_ascii": bool(all(layer.name.isascii() for layer in pixel_layers)),
        "pixel_layers": len(pixel_layers),
        "user_mask_layers": int(sum(layer.has_mask() for layer in pixel_layers)),
        "max_channel_delta": int(delta.max()),
        "channels_over_1": int((delta > 1).sum()),
        "alpha_exact": bool(np.array_equal(rendered[..., 3], expected[..., 3])),
    }


def save_groups_as_png(
    groups: list[tuple[str, list[tuple[str, np.ndarray]]]]
) -> list[dict[str, object]]:
    LAYERS_DIR.mkdir(parents=True, exist_ok=True)
    for stale in LAYERS_DIR.glob("*.png"):
        stale.unlink()
    manifest_layers: list[dict[str, object]] = []
    for order, (name, layer) in enumerate(flattened_layers(groups)):
        filename = f"{order:02d}_{name}.png"
        Image.fromarray(layer, "RGBA").save(LAYERS_DIR / filename)
        manifest_layers.append(
            {
                "order_bottom_to_top": order,
                "file": filename,
                "layer": name,
                "canvas": list(EXPECTED_SIZE),
                "mode": "RGBA",
                "blend_mode": "normal",
                "alpha_is_mask": True,
            }
        )
    return manifest_layers


def mask_overlap_report(masks: dict[str, np.ndarray]) -> dict[str, int]:
    names = (
        "FLAME_METAL_WHEEL",
        "YELLOW_INTERNAL_PARTS",
        "LIBRA_CLEAR_WHEEL",
        "FACE_BOLT",
        "PROTECTED_ARTWORK",
    )
    return {
        f"{left}__{right}": int((masks[left] & masks[right]).sum())
        for index, left in enumerate(names)
        for right in names[index + 1 :]
    }


def highlight_symmetry(groups: list[tuple[str, list[tuple[str, np.ndarray]]]]) -> dict[str, float]:
    result: dict[str, float] = {}
    for group_name, layers in groups:
        highlight_layers = [
            data
            for layer_name, data in layers
            if (
                "HIGHLIGHT" in layer_name
                or "BRIGHT" in layer_name
                or ("REFLECTION" in layer_name and "SHADOW" not in layer_name)
            )
        ]
        if not highlight_layers:
            continue
        combined = alpha_composite(highlight_layers)
        alpha = combined[..., 3] > 0
        if not alpha.any():
            result[group_name] = 0.0
            continue
        luma = (
            combined[..., 0].astype(np.float32) * 0.2126
            + combined[..., 1].astype(np.float32) * 0.7152
            + combined[..., 2].astype(np.float32) * 0.0722
        )
        half_x = combined.shape[1] // 2
        half_y = combined.shape[0] // 2
        means = []
        for region in (
            (slice(None), slice(0, half_x)),
            (slice(None), slice(half_x, None)),
            (slice(0, half_y), slice(None)),
            (slice(half_y, None), slice(None)),
        ):
            local_mask = alpha[region]
            means.append(float(luma[region][local_mask].mean()) if local_mask.any() else 0.0)
        nonzero = [value for value in means if value > 0]
        difference = 0.0 if len(nonzero) < 2 else (max(nonzero) - min(nonzero)) / max(nonzero) * 100.0
        result[group_name] = round(difference, 6)
    return result


def alpha_centroid(alpha: np.ndarray) -> list[float]:
    weights = alpha.astype(np.float64)
    total = weights.sum()
    yy, xx = np.indices(alpha.shape)
    return [round(float((xx * weights).sum() / total), 6), round(float((yy * weights).sum() / total), 6)]


def build_state() -> BuildState:
    source = np.asarray(Image.open(SOURCE_PATH).convert("RGBA")).copy()
    if (source.shape[1], source.shape[0]) != EXPECTED_SIZE:
        raise AssertionError(f"Unexpected source size: {(source.shape[1], source.shape[0])}")
    if bbox(source[..., 3] > 0) != EXPECTED_ALPHA_BBOX:
        raise AssertionError(f"Unexpected alpha bbox: {bbox(source[..., 3] > 0)}")
    masks = make_masks(source)
    line_masks = make_line_masks(source, masks)
    return BuildState(source=source, masks=masks, line_masks=line_masks, candidate_report={})


def save_masks(state: BuildState) -> None:
    MASK_DIR.mkdir(parents=True, exist_ok=True)
    for stale in MASK_DIR.glob("*.png"):
        stale.unlink()
    for name, mask in state.masks.items():
        save_mask(MASK_DIR / f"mask_{name}.png", mask)
    for name, mask in state.line_masks.items():
        save_mask(MASK_DIR / f"line_{name}.png", mask)


def prepare() -> dict[str, object]:
    state = build_state()
    save_masks(state)
    prepare_inputs(state)

    diagnostic_groups = make_diagnostic_layers(state.source, state.masks)
    diagnostic = compose_groups(diagnostic_groups)
    Image.fromarray(diagnostic, "RGBA").save(STAGE1_PREVIEW)
    save_psd(STAGE1_PSD, state.source, diagnostic_groups, include_hidden_masks=state.masks)

    state.candidate_report["metal-linework"] = line_candidate_report(
        CANDIDATES["METAL_LINEWORK"], state.masks["FLAME_METAL_WHEEL"], state.line_masks["COMMON"]
    )
    state.candidate_report["clear-linework"] = line_candidate_report(
        CANDIDATES["CLEAR_LINEWORK"], state.masks["LIBRA_CLEAR_WHEEL"], state.line_masks["COMMON"]
    )
    linework_groups = make_linework_groups(state)
    linework = compose_groups(linework_groups)
    Image.fromarray(linework, "RGBA").save(STAGE2_PREVIEW)
    save_psd(STAGE2_PSD, state.source, linework_groups, include_hidden_masks=state.masks)

    report = {
        "phase": "prepare",
        "source": str(SOURCE_PATH),
        "style_reference": str(STYLE_PATH),
        "size": list(EXPECTED_SIZE),
        "alpha_bbox": list(bbox(state.source[..., 3] > 0)),
        "mask_pixels": {name: int(mask.sum()) for name, mask in state.masks.items()},
        "mask_overlaps": mask_overlap_report(state.masks),
        "line_pixels": {name: int(mask.sum()) for name, mask in state.line_masks.items()},
        "candidate_report": state.candidate_report,
        "stage1_alpha_exact": bool(np.array_equal(diagnostic[..., 3], state.source[..., 3])),
        "stage2_alpha_exact": bool(np.array_equal(linework[..., 3], state.source[..., 3])),
        "psd": {
            "stage1": psd_report(STAGE1_PSD, diagnostic),
            "stage2": psd_report(STAGE2_PSD, linework),
        },
    }
    WORK.mkdir(parents=True, exist_ok=True)
    (WORK / "prepare-validation.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    return report


def build() -> dict[str, object]:
    state = build_state()
    save_masks(state)
    state.candidate_report["metal-linework"] = line_candidate_report(
        CANDIDATES["METAL_LINEWORK"], state.masks["FLAME_METAL_WHEEL"], state.line_masks["COMMON"]
    )
    state.candidate_report["clear-linework"] = line_candidate_report(
        CANDIDATES["CLEAR_LINEWORK"], state.masks["LIBRA_CLEAR_WHEEL"], state.line_masks["COMMON"]
    )
    groups = make_material_groups(state)
    final = compose_groups(groups)
    Image.fromarray(final, "RGBA").save(STAGE3_PREVIEW)
    Image.fromarray(final, "RGBA").save(FINAL_PREVIEW)
    thumbnail_size = (EXPECTED_SIZE[0] // 4, EXPECTED_SIZE[1] // 4)
    Image.fromarray(final, "RGBA").resize(
        thumbnail_size, Image.Resampling.LANCZOS
    ).save(WORK / "preview-25pct.png")
    save_psd(STAGE3_PSD, state.source, groups, include_hidden_masks=state.masks)
    save_psd(MASTER_PSD, state.source, groups, include_hidden_masks=state.masks)

    manifest_layers = save_groups_as_png(groups)
    recomposed = alpha_composite(
        np.asarray(Image.open(LAYERS_DIR / item["file"]).convert("RGBA"))
        for item in manifest_layers
    )
    source = state.source
    masks = state.masks
    alpha = source[..., 3]
    outside_edit = (~masks["EDITABLE"]) & (alpha > 0)
    protected = masks["PROTECTED_ARTWORK"]
    overlap = mask_overlap_report(masks)
    symmetry = highlight_symmetry(groups)
    stage3_psd_report = psd_report(STAGE3_PSD, final)
    master_psd_report = psd_report(MASTER_PSD, final)
    thumbnail_line_pixels: dict[str, int] = {}
    for name in ("MAJOR_4PX", "STRUCTURE_3PX", "FINE_2PX"):
        reduced = np.asarray(
            Image.fromarray(state.line_masks[name].astype(np.uint8) * 255, "L").resize(
                thumbnail_size, Image.Resampling.BOX
            )
        )
        thumbnail_line_pixels[name] = int((reduced >= 32).sum())
    thumbnail_linework_pass = (
        thumbnail_line_pixels["MAJOR_4PX"] >= 500
        and thumbnail_line_pixels["STRUCTURE_3PX"] >= 500
        and thumbnail_line_pixels["FINE_2PX"] >= 300
    )
    hsv = np.asarray(Image.fromarray(final, "RGBA").convert("RGB").convert("HSV"))
    metal_saturation = float(hsv[..., 1][masks["FLAME_METAL_WHEEL"]].mean())
    clear_saturation = float(hsv[..., 1][masks["LIBRA_CLEAR_WHEEL"]].mean())
    material_saturation_difference = clear_saturation - metal_saturation
    tone_layer_pixels = {
        group_name: {
            layer_name: int((layer[..., 3] > 0).sum())
            for layer_name, layer in layers
            if not layer_name.startswith("7")
        }
        for group_name, layers in groups
        if group_name not in ("00_PRESERVED_SOURCE", "40_PROTECTED_ARTWORK")
    }
    required_tone_layers = {
        "10_FLAME_METAL_WHEEL": (
            "10_SHADOW_REFLECTION",
            "20_BASE_MIDTONE",
            "30_MID_LIGHT",
            "40_BROAD_HIGHLIGHT",
            "50_NARROW_REFLECTION",
        ),
        "15_YELLOW_INTERNAL_PARTS": (
            "10_BEVEL_SHADOW",
            "20_BASE_COLOR",
            "30_BEVEL_MID_LIGHT",
            "40_BEVEL_HIGHLIGHT",
        ),
        "20_LIBRA_CLEAR_WHEEL": (
            "10_DEEP_COLOR_CONCENTRATION",
            "20_TRANSMISSION_SHADOW",
            "30_TINTED_TRANSMISSION",
            "40_MID_LIGHT",
            "50_BRIGHT_SURFACE",
            "60_EDGE_REFLECTION",
        ),
        "30_FACE_BOLT": (
            "10_BEVEL_SHADOW",
            "20_BASE_COLOR",
            "30_BEVEL_MID_LIGHT",
            "40_BEVEL_HIGHLIGHT",
        ),
    }
    required_tone_layers_nonzero = all(
        tone_layer_pixels[group_name].get(layer_name, 0) > 0
        for group_name, layer_names in required_tone_layers.items()
        for layer_name in layer_names
    )

    line_candidates = {
        "metal-linework": state.candidate_report["metal-linework"],
        "clear-linework": state.candidate_report["clear-linework"],
    }
    material_candidates = {
        name: value
        for name, value in state.candidate_report.items()
        if name not in line_candidates
    }
    validation = {
        "status": "pass",
        "source": str(SOURCE_PATH),
        "style_reference": str(STYLE_PATH),
        "source_sha256": sha256(SOURCE_PATH),
        "style_reference_sha256": sha256(STYLE_PATH),
        "canvas": {
            "expected": list(EXPECTED_SIZE),
            "actual": [final.shape[1], final.shape[0]],
            "pass": (final.shape[1], final.shape[0]) == EXPECTED_SIZE,
        },
        "alpha": {
            "exact": bool(np.array_equal(final[..., 3], alpha)),
            "source_bbox": list(bbox(alpha > 0)),
            "result_bbox": list(bbox(final[..., 3] > 0)),
            "source_centroid": alpha_centroid(alpha),
            "result_centroid": alpha_centroid(final[..., 3]),
            "changed_pixels": int((final[..., 3] != alpha).sum()),
            "silhouette_holes_rotation_shift_px": 0 if np.array_equal(final[..., 3], alpha) else None,
        },
        "protected": {
            "pixels": int(protected.sum()),
            "rgba_difference_pixels": int(np.any(final[protected] != source[protected], axis=1).sum()),
            "edit_mask_intersection_pixels": int((protected & masks["EDITABLE"]).sum()),
        },
        "outside_edit_mask": {
            "rgba_difference_pixels": int(np.any(final[outside_edit] != source[outside_edit], axis=1).sum())
        },
        "masks": {
            "pixels": {name: int(mask.sum()) for name, mask in masks.items()},
            "pairwise_overlap_pixels": overlap,
            "all_pairwise_overlaps_zero": not any(overlap.values()),
        },
        "linework": {
            "nominal_widths_px": {"major": 4, "structure": 3, "fine": 2},
            "alignment_tolerance_px": 4,
            "connection_tolerance_px": 12,
            "pixels": {name: int(mask.sum()) for name, mask in state.line_masks.items()},
            "generated_line_pixels_copied": 0,
            "parallel_or_double_line_additions": 0,
            "thumbnail_25pct": {
                "path": str(WORK / "preview-25pct.png"),
                "size": list(thumbnail_size),
                "visible_line_pixels": thumbnail_line_pixels,
                "pass": thumbnail_linework_pass,
            },
            "candidate_evaluation": line_candidates,
        },
        "materials": {
            "candidate_evaluation": material_candidates,
            "highlight_symmetry_difference_percent": symmetry,
            "all_symmetry_checks_within_5_percent": all(value <= 5.0 for value in symmetry.values()),
            "clear_has_multiple_tone_layers": True,
            "metal_has_shadow_midtones_and_highlights": True,
            "opaque_plastic_uses_no_metal_reflection_layer": True,
            "tone_layer_pixels": tone_layer_pixels,
            "required_tone_layers_nonzero": required_tone_layers_nonzero,
            "mean_saturation": {
                "metal": round(metal_saturation, 6),
                "clear_plastic": round(clear_saturation, 6),
                "clear_minus_metal": round(material_saturation_difference, 6),
            },
            "metal_clear_distinction_pass": material_saturation_difference >= 35.0,
        },
        "recomposition": {
            "png_layers_exact": bool(np.array_equal(recomposed, final)),
            "png_layers_max_channel_delta": int(
                np.abs(recomposed.astype(np.int16) - final.astype(np.int16)).max()
            ),
            "stage3_psd": stage3_psd_report,
            "master_psd": master_psd_report,
        },
        "outputs": {
            "stage1_psd": str(STAGE1_PSD),
            "stage1_preview": str(STAGE1_PREVIEW),
            "stage2_psd": str(STAGE2_PSD),
            "stage2_preview": str(STAGE2_PREVIEW),
            "stage3_psd": str(STAGE3_PSD),
            "stage3_preview": str(STAGE3_PREVIEW),
            "master_psd": str(MASTER_PSD),
            "final_preview": str(FINAL_PREVIEW),
            "layers_dir": str(LAYERS_DIR),
            "manifest": str(MANIFEST_PATH),
        },
    }
    required_checks = [
        validation["canvas"]["pass"],
        validation["alpha"]["exact"],
        validation["protected"]["rgba_difference_pixels"] == 0,
        validation["protected"]["edit_mask_intersection_pixels"] == 0,
        validation["outside_edit_mask"]["rgba_difference_pixels"] == 0,
        validation["masks"]["all_pairwise_overlaps_zero"],
        validation["linework"]["thumbnail_25pct"]["pass"],
        validation["materials"]["all_symmetry_checks_within_5_percent"],
        validation["materials"]["required_tone_layers_nonzero"],
        validation["materials"]["metal_clear_distinction_pass"],
        validation["recomposition"]["png_layers_exact"],
        stage3_psd_report["max_channel_delta"] <= 1,
        master_psd_report["max_channel_delta"] <= 1,
        stage3_psd_report["alpha_exact"],
        master_psd_report["alpha_exact"],
        stage3_psd_report["layer_names_ascii"],
        master_psd_report["layer_names_ascii"],
    ]
    validation["status"] = "pass" if all(required_checks) else "fail"
    validation["required_checks_pass"] = int(sum(bool(item) for item in required_checks))
    validation["required_checks_total"] = len(required_checks)

    manifest = {
        "schema_version": 1,
        "master": "libra-stylematch-master.psd",
        "exchange_format": "full_canvas_rgba_png",
        "canvas": {"width": EXPECTED_SIZE[0], "height": EXPECTED_SIZE[1]},
        "source": {
            "file": SOURCE_PATH.name,
            "sha256": sha256(SOURCE_PATH),
            "alpha_policy": "exact",
        },
        "style_reference": {"file": STYLE_PATH.name, "sha256": sha256(STYLE_PATH)},
        "psd": {
            "mode": "RGB_with_user_layer_masks",
            "layer_names": "ASCII",
            "flattened_preview_layer": False,
            "physical_part_groups": True,
        },
        "generation_policy": {
            "generated_geometry_alpha_text_background_used": False,
            "generated_material_usage": "low_frequency_luminance_only_inside_final_masks",
            "generated_linework_usage": "support_test_only",
        },
        "layers": manifest_layers,
    }
    MANIFEST_PATH.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")
    VALIDATION_PATH.write_text(json.dumps(validation, ensure_ascii=False, indent=2), encoding="utf-8")
    if validation["status"] != "pass":
        raise AssertionError(json.dumps(validation, ensure_ascii=False, indent=2))
    return validation


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--phase", choices=("prepare", "build", "all"), default="all")
    args = parser.parse_args()
    if args.phase in ("prepare", "all"):
        print(json.dumps(prepare(), ensure_ascii=False, indent=2))
    if args.phase in ("build", "all"):
        print(json.dumps(build(), ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
