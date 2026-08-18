#!/usr/bin/env python3
"""Record alpha-edge statistics for the reviewed X image set."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

from PIL import Image


CANVAS_SIZE = 448
MIN_MARGIN = 6
MAX_FOREGROUND_SIZE = CANVAS_SIZE - MIN_MARGIN * 2
REVIEW_VERSION = "20260818-x-hells-scythe-3-80f-color-match"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--root",
        type=Path,
        default=Path("assets/images/x"),
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path("data/source/x-image-alpha-review.json"),
    )
    return parser.parse_args()


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def alpha_stats(path: Path) -> dict:
    with Image.open(path) as image:
        rgba = image.convert("RGBA")
        if rgba.size != (CANVAS_SIZE, CANVAS_SIZE):
            raise ValueError(f"{path}: expected {CANVAS_SIZE}x{CANVAS_SIZE}")
        alpha = rgba.getchannel("A")
        histogram = alpha.histogram()
        foreground_mask = alpha.point(lambda value: 255 if value > 3 else 0)
        bbox = foreground_mask.getbbox()
    if bbox is None:
        raise ValueError(f"{path}: empty foreground")
    left, top, right, bottom = bbox
    width = right - left
    height = bottom - top
    margins = [left, top, CANVAS_SIZE - right, CANVAS_SIZE - bottom]
    alpha_levels = sum(count > 0 for count in histogram)
    partial_pixels = sum(histogram[1:255])
    if min(margins) < MIN_MARGIN:
        raise ValueError(f"{path}: insufficient transparent margin {margins}")
    if width > MAX_FOREGROUND_SIZE or height > MAX_FOREGROUND_SIZE:
        raise ValueError(f"{path}: foreground {width}x{height} is too large")
    if alpha_levels < 16 or partial_pixels == 0:
        raise ValueError(f"{path}: alpha edge is still binary or over-quantized")
    return {
        "image": path.as_posix(),
        "outputSha256": sha256(path),
        "alphaLevels": alpha_levels,
        "partialPixels": partial_pixels,
        "foregroundPixels": sum(histogram[4:]),
        "bbox": [left, top, right, bottom],
        "margins": margins,
    }


def main() -> int:
    args = parse_args()
    files = sorted(args.root.rglob("*.webp"))
    if len(files) != 1049:
        raise ValueError(f"expected 1049 X images, found {len(files)}")
    review = {
        "version": REVIEW_VERSION,
        "canvasSize": CANVAS_SIZE,
        "files": [alpha_stats(path) for path in files],
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(
        f"{json.dumps(review, ensure_ascii=False, indent=2)}\n",
        encoding="utf-8",
    )
    print(f"Recorded alpha review for {len(files)} X images")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
