#!/usr/bin/env python3
"""Create transparent, lossless WebP catalog images from official X renders."""

from __future__ import annotations

import argparse
import hashlib
import json
import math
import os
from pathlib import Path
import sys

import numpy as np
from PIL import Image, ImageDraw


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--report",
        type=Path,
        default=Path(".cache/x-image-map-candidates.json"),
    )
    parser.add_argument("--output-root", type=Path, default=Path("."))
    parser.add_argument("--model", default="u2netp")
    parser.add_argument("--ids", nargs="*")
    parser.add_argument("--shard-index", type=int, default=0)
    parser.add_argument("--shard-count", type=int, default=1)
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--validate-only", action="store_true")
    return parser.parse_args()


def load_rembg(model_name: str):
    try:
        from rembg import new_session, remove
    except ModuleNotFoundError as error:
        raise SystemExit(
            "rembg is missing. Install it into an isolated path and add that path "
            "to PYTHONPATH before running this script."
        ) from error
    return new_session(model_name), remove


def decontaminate_fringe(rgb: np.ndarray, alpha: np.ndarray) -> np.ndarray:
    """Remove pale source-background bleed only from partially transparent pixels."""
    height, width = rgb.shape[:2]
    border = max(4, min(height, width) // 24)
    samples = np.concatenate(
        (
            rgb[:border].reshape(-1, 3),
            rgb[-border:].reshape(-1, 3),
            rgb[:, :border].reshape(-1, 3),
            rgb[:, -border:].reshape(-1, 3),
        ),
        axis=0,
    )
    background = np.median(samples.astype(np.float32), axis=0)
    normalized_alpha = alpha.astype(np.float32) / 255.0
    fringe = (normalized_alpha > 0.05) & (normalized_alpha < 0.92)
    safe_alpha = np.maximum(normalized_alpha[..., None], 0.08)
    foreground = (
        rgb.astype(np.float32)
        - (1.0 - normalized_alpha[..., None]) * background
    ) / safe_alpha
    corrected = rgb.astype(np.float32)
    corrected[fringe] = foreground[fringe]
    return np.clip(corrected, 0, 255).astype(np.uint8)


def crop_with_padding(image: Image.Image, alpha: np.ndarray) -> Image.Image:
    nonempty = np.argwhere(alpha > 3)
    if nonempty.size == 0:
        raise ValueError("empty foreground mask")
    y_min, x_min = nonempty.min(axis=0)
    y_max, x_max = nonempty.max(axis=0)
    width = int(x_max - x_min + 1)
    height = int(y_max - y_min + 1)
    padding = max(2, math.ceil(max(width, height) * 0.06))
    foreground = image.crop((
        int(x_min),
        int(y_min),
        int(x_max) + 1,
        int(y_max) + 1,
    ))
    result = Image.new(
        "RGBA",
        (foreground.width + padding * 2, foreground.height + padding * 2),
        (0, 0, 0, 0),
    )
    result.alpha_composite(foreground, (padding, padding))
    return result


def process_image(
    source: Path,
    destination: Path,
    session,
    remove,
    source_crop: list[int] | None = None,
    source_exclude_rects: list[list[int]] | None = None,
    source_clear_points: list[list[int]] | None = None,
    keep_largest_component: bool = False,
) -> None:
    original = Image.open(source).convert("RGB")
    if source_crop:
        original = original.crop(tuple(source_crop))
    mask_image = remove(
        original,
        session=session,
        only_mask=True,
        alpha_matting=True,
        alpha_matting_foreground_threshold=235,
        alpha_matting_background_threshold=12,
        alpha_matting_erode_size=8,
        post_process_mask=True,
    ).convert("L")
    alpha = np.asarray(mask_image).copy()
    for left, top, right, bottom in source_exclude_rects or ():
        alpha[top:bottom, left:right] = 0
    for x, y in source_clear_points or ():
        probe = original.copy()
        fill_color = (255, 0, 255)
        ImageDraw.floodfill(probe, (x, y), fill_color, thresh=24)
        cleared = np.all(np.asarray(probe) == fill_color, axis=2)
        alpha[cleared] = 0
    if keep_largest_component:
        import cv2

        component_count, labels, stats, _ = cv2.connectedComponentsWithStats(
            (alpha > 8).astype(np.uint8),
            connectivity=8,
        )
        if component_count < 2:
            raise ValueError("no foreground component")
        largest_label = 1 + int(np.argmax(stats[1:, cv2.CC_STAT_AREA]))
        keep = (labels == largest_label).astype(np.uint8)
        keep = cv2.dilate(keep, np.ones((9, 9), np.uint8), iterations=1)
        alpha = np.where(keep, alpha, 0).astype(np.uint8)
    rgb = np.asarray(original)
    corrected_rgb = decontaminate_fringe(rgb, alpha)
    rgba = np.dstack((corrected_rgb, alpha))
    result = crop_with_padding(Image.fromarray(rgba, "RGBA"), alpha)
    destination.parent.mkdir(parents=True, exist_ok=True)
    result.save(
        destination,
        format="WEBP",
        lossless=True,
        quality=100,
        method=6,
        exact=True,
    )


def source_path(report: dict, entry: dict) -> Path:
    return (
        Path(entry["sourceFile"])
        if entry.get("sourceFile")
        else Path(report["sourceRoot"]) / Path(entry["source"])
    )


def validate_entries(report: dict, entries: list[dict], output_root: Path) -> int:
    ids = [entry["id"] for entry in entries]
    outputs = [entry["image"] for entry in entries]
    if len(ids) != len(set(ids)):
        raise ValueError("duplicate mapping IDs")
    if len(outputs) != len(set(outputs)):
        raise ValueError("duplicate output paths")
    for index, entry in enumerate(entries, start=1):
        source = source_path(report, entry)
        digest = hashlib.sha256(source.read_bytes()).hexdigest()
        if digest != entry["sourceSha256"]:
            raise ValueError(f"{entry['id']}: source SHA-256 changed")
        destination = output_root / Path(entry["image"])
        with Image.open(destination) as image:
            rgba = image.convert("RGBA")
            alpha = np.asarray(rgba.getchannel("A"))
        if alpha.max() == 0:
            raise ValueError(f"{entry['id']}: empty foreground mask")
        if any(alpha[y, x] != 0 for x, y in (
            (0, 0),
            (alpha.shape[1] - 1, 0),
            (0, alpha.shape[0] - 1),
            (alpha.shape[1] - 1, alpha.shape[0] - 1),
        )):
            raise ValueError(f"{entry['id']}: a corner is not transparent")
        foreground = np.argwhere(alpha > 3)
        y_min, x_min = foreground.min(axis=0)
        y_max, x_max = foreground.max(axis=0)
        margins = (
            int(x_min),
            int(y_min),
            int(alpha.shape[1] - x_max - 1),
            int(alpha.shape[0] - y_max - 1),
        )
        if min(margins) < 2:
            raise ValueError(f"{entry['id']}: insufficient transparent padding {margins}")
        print(f"[{index}/{len(entries)}] valid {entry['id']}", flush=True)
    print(f"validated {len(entries)} transparent X images")
    return 0


def main() -> int:
    args = parse_args()
    report = json.loads(args.report.read_text(encoding="utf-8"))
    selected_ids = set(args.ids or ())
    entries = [
        entry
        for entry in report["selected"]
        if not selected_ids or entry["id"] in selected_ids
    ]
    if args.shard_count < 1 or not 0 <= args.shard_index < args.shard_count:
        raise SystemExit("shard index must be between 0 and shard count - 1")
    entries = [
        entry
        for index, entry in enumerate(entries)
        if index % args.shard_count == args.shard_index
    ]
    missing_ids = selected_ids - {entry["id"] for entry in entries}
    if missing_ids:
        raise SystemExit(f"IDs not present in mapping report: {sorted(missing_ids)}")

    if args.validate_only:
        return validate_entries(report, entries, args.output_root)

    os.environ.setdefault("U2NET_HOME", str(Path(".cache/rembg-models").resolve()))
    session, remove = load_rembg(args.model)
    failures: list[tuple[str, str]] = []
    for index, entry in enumerate(entries, start=1):
        source = source_path(report, entry)
        destination = args.output_root / Path(entry["image"])
        if destination.exists() and not args.overwrite:
            print(f"[{index}/{len(entries)}] skip {entry['id']}", flush=True)
            continue
        try:
            process_image(
                source,
                destination,
                session,
                remove,
                entry.get("sourceCrop"),
                entry.get("sourceExcludeRects"),
                entry.get("sourceClearPoints"),
                entry.get("keepLargestComponent", False),
            )
            print(f"[{index}/{len(entries)}] wrote {entry['id']}", flush=True)
        except Exception as error:  # keep the batch auditable
            failures.append((entry["id"], str(error)))
            print(f"[{index}/{len(entries)}] failed {entry['id']}: {error}", flush=True)

    if failures:
        for item_id, message in failures:
            print(f"{item_id}: {message}", file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
