#!/usr/bin/env python3
"""Build geometry-locked X Bey color composites from reviewed masks."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

import numpy as np
from PIL import Image


CONFIG_PATH = Path("data/source/x-bey-color-composites.json")


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="write the reviewed composite")
    parser.add_argument("--color-reference", type=Path, help="optionally verify the external color reference")
    parser.add_argument("--geometry-source", type=Path, help="optionally verify the official geometry source")
    return parser.parse_args()


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def rgb_to_hsv(rgb: np.ndarray) -> tuple[np.ndarray, np.ndarray, np.ndarray]:
    r, g, b = np.moveaxis(rgb, -1, 0)
    maximum = np.max(rgb, axis=-1)
    minimum = np.min(rgb, axis=-1)
    delta = maximum - minimum
    hue = np.zeros_like(maximum)
    nonzero = delta > 1e-7
    red = nonzero & (maximum == r)
    green = nonzero & (maximum == g)
    blue = nonzero & (maximum == b)
    hue[red] = ((g[red] - b[red]) / delta[red]) % 6
    hue[green] = ((b[green] - r[green]) / delta[green]) + 2
    hue[blue] = ((r[blue] - g[blue]) / delta[blue]) + 4
    hue /= 6
    saturation = np.zeros_like(maximum)
    nonblack = maximum > 1e-7
    saturation[nonblack] = delta[nonblack] / maximum[nonblack]
    return hue, saturation, maximum


def hsv_to_rgb(hue: np.ndarray, saturation: np.ndarray, value: np.ndarray) -> np.ndarray:
    scaled = (hue % 1.0) * 6
    sector = np.floor(scaled).astype(np.int32)
    fraction = scaled - sector
    p = value * (1 - saturation)
    q = value * (1 - saturation * fraction)
    t = value * (1 - saturation * (1 - fraction))
    output = np.empty((*hue.shape, 3), dtype=np.float32)
    choices = (
        (value, t, p),
        (q, value, p),
        (p, value, t),
        (p, q, value),
        (t, p, value),
        (value, p, q),
    )
    for index, channels in enumerate(choices):
        selected = (sector % 6) == index
        for channel, values in enumerate(channels):
            output[..., channel][selected] = values[selected]
    return output


def foreground_box(alpha: np.ndarray, threshold: int) -> tuple[int, int, int, int]:
    ys, xs = np.where(alpha > threshold)
    if not len(xs):
        raise ValueError("empty alpha foreground")
    return int(xs.min()), int(ys.min()), int(xs.max() + 1), int(ys.max() + 1)


def apply_region(
    result: np.ndarray,
    mask: np.ndarray,
    hue: np.ndarray,
    saturation: np.ndarray,
    value: np.ndarray,
    settings: dict,
    *,
    preserve_value: bool = False,
) -> None:
    adjusted_hue = hue.copy()
    adjusted_saturation = saturation.copy()
    adjusted_value = value.copy()
    adjusted_hue[mask] = settings["hueDegrees"] / 360
    adjusted_saturation[mask] = np.clip(
        settings["saturationOffset"] + settings["saturationScale"] * saturation[mask],
        0,
        settings["saturationMaximum"],
    )
    if not preserve_value:
        adjusted_value[mask] = np.clip(
            settings["valueOffset"] + settings["valueScale"] * value[mask],
            0,
            1,
        )
    converted = np.rint(hsv_to_rgb(adjusted_hue, adjusted_saturation, adjusted_value) * 255).clip(0, 255)
    result[mask] = converted[mask].astype(np.uint8)


def build(entry: dict) -> tuple[Image.Image, dict[str, np.ndarray]]:
    base_path = Path(entry["geometryBase"]["image"])
    if sha256(base_path) != entry["geometryBase"]["sha256"]:
        raise ValueError(f"{entry['id']}: geometry base hash changed")
    with Image.open(base_path) as image:
        base = np.asarray(image.convert("RGBA"), dtype=np.uint8)
    canvas_size = entry["canvasSize"]
    if base.shape != (canvas_size, canvas_size, 4):
        raise ValueError(f"{entry['id']}: unexpected geometry canvas {base.shape}")

    rgb = base[..., :3].astype(np.float32) / 255
    alpha = base[..., 3]
    hue, saturation, value = rgb_to_hsv(rgb)
    mask_settings = entry["mask"]
    center_x, center_y = mask_settings["center"]
    yy, xx = np.indices(alpha.shape)
    radius = np.hypot(xx - center_x, yy - center_y)
    visible = alpha > entry["alphaThreshold"]
    red = visible & (
        ((hue < mask_settings["redHueUpper"]) | (hue > mask_settings["redHueLower"]))
        & (saturation > mask_settings["redMinimumSaturation"])
    )
    warm = visible & (
        (hue >= mask_settings["warmHueLower"])
        & (hue < mask_settings["warmHueUpper"])
        & (saturation > mask_settings["warmMinimumSaturation"])
    ) & ~red
    emblem_blue = red & (radius < mask_settings["emblemMaximumRadius"])
    outer_navy = red & ~emblem_blue
    inner_teal = warm & (
        (radius >= mask_settings["innerTealMinimumRadius"])
        & (radius < mask_settings["innerTealMaximumRadius"])
    )
    outer_lime = warm & (radius >= mask_settings["outerLimeMinimumRadius"])
    masks = {
        "outerNavy": outer_navy,
        "innerTeal": inner_teal,
        "outerLime": outer_lime,
        "emblemBlue": emblem_blue,
    }
    mask_sum = sum(mask.astype(np.uint8) for mask in masks.values())
    if np.any(mask_sum > 1):
        raise ValueError(f"{entry['id']}: material masks overlap")

    result = base[..., :3].copy()
    apply_region(result, outer_navy, hue, saturation, value, entry["regions"]["outerNavy"])
    apply_region(result, inner_teal, hue, saturation, value, entry["regions"]["innerTeal"])
    apply_region(result, outer_lime, hue, saturation, value, entry["regions"]["outerLime"])
    apply_region(
        result,
        emblem_blue,
        hue,
        saturation,
        value,
        entry["regions"]["emblemBlue"],
        preserve_value=True,
    )
    output = np.dstack((result, alpha))
    return Image.fromarray(output, "RGBA"), masks


def verify_output(entry: dict, expected: Image.Image, masks: dict[str, np.ndarray]) -> None:
    output_path = Path(entry["output"])
    if not output_path.exists():
        raise ValueError(f"{entry['id']}: output is missing")
    with Image.open(output_path) as image:
        actual = np.asarray(image.convert("RGBA"), dtype=np.uint8)
    expected_pixels = np.asarray(expected, dtype=np.uint8)
    base_path = Path(entry["geometryBase"]["image"])
    with Image.open(base_path) as image:
        base = np.asarray(image.convert("RGBA"), dtype=np.uint8)
    changed = np.logical_or.reduce(tuple(masks.values()))
    if not np.array_equal(actual[..., 3], base[..., 3]):
        raise ValueError(f"{entry['id']}: alpha changed from the geometry base")
    if not np.array_equal(actual[~changed, :3], base[~changed, :3]):
        raise ValueError(f"{entry['id']}: pixels outside declared material masks changed")
    if not np.array_equal(actual, expected_pixels):
        raise ValueError(f"{entry['id']}: encoded output differs from the deterministic composite")
    base_box = foreground_box(base[..., 3], entry["alphaThreshold"])
    output_box = foreground_box(actual[..., 3], entry["alphaThreshold"])
    if output_box != base_box:
        raise ValueError(f"{entry['id']}: foreground box changed from {base_box} to {output_box}")
    if max(output_box[2] - output_box[0], output_box[3] - output_box[1]) != entry["targetForegroundSize"]:
        raise ValueError(f"{entry['id']}: foreground is not {entry['targetForegroundSize']}px")
    output_hash = sha256(output_path)
    if entry["outputSha256"] and output_hash != entry["outputSha256"]:
        raise ValueError(f"{entry['id']}: output hash changed")
    counts = {name: int(mask.sum()) for name, mask in masks.items()}
    print(f"{entry['id']}: {output_hash} {output_box} {counts}")


def main() -> int:
    args = parse_args()
    config = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    for entry in config["items"]:
        if args.color_reference and sha256(args.color_reference) != entry["colorReference"]["sha256"]:
            raise ValueError(f"{entry['id']}: color reference hash changed")
        if args.geometry_source and sha256(args.geometry_source) != entry["geometrySource"]["sha256"]:
            raise ValueError(f"{entry['id']}: official geometry source hash changed")
        image, masks = build(entry)
        if args.write:
            output_path = Path(entry["output"])
            output_path.parent.mkdir(parents=True, exist_ok=True)
            image.save(output_path, "WEBP", lossless=True, method=6, exact=True)
        verify_output(entry, image, masks)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
