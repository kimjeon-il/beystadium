#!/usr/bin/env python3
"""Create transparent, lossless WebP catalog images from official X renders."""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import hashlib
import json
import os
from pathlib import Path
import re
import sys
from urllib.parse import urlparse
from urllib.request import Request, urlopen

import numpy as np
from PIL import Image, ImageDraw, ImageFilter


CANVAS_SIZE = 448
MIN_MARGIN = 6
MAX_FOREGROUND_SIZE = CANVAS_SIZE - MIN_MARGIN * 2
OFFICIAL_IMAGE_ROOT = "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image"


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
    parser.add_argument(
        "--prefetch-only",
        action="store_true",
        help="download and verify official sources without processing images",
    )
    parser.add_argument(
        "--current-layout",
        action="store_true",
        help="write to the current Bey-centered X image layout",
    )
    parser.add_argument(
        "--source-cache",
        type=Path,
        default=Path(".cache/x-alpha-sources"),
        help="download cache used when the original local source is unavailable",
    )
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


def resize_premultiplied(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    rgba = np.asarray(image.convert("RGBA"), dtype=np.float32)
    alpha = rgba[:, :, 3:4] / 255.0
    premultiplied = np.concatenate((rgba[:, :, :3] * alpha, rgba[:, :, 3:4]), axis=2)
    encoded = Image.fromarray(
        np.rint(premultiplied).clip(0, 255).astype(np.uint8),
        "RGBA",
    )
    resized = np.asarray(encoded.resize(size, Image.Resampling.LANCZOS), dtype=np.float32)
    resized_alpha = resized[:, :, 3:4]
    rgb = np.zeros_like(resized[:, :, :3])
    np.divide(
        resized[:, :, :3] * 255.0,
        resized_alpha,
        out=rgb,
        where=resized_alpha > 0,
    )
    straight = np.concatenate((rgb, resized_alpha), axis=2)
    return Image.fromarray(
        np.rint(straight).clip(0, 255).astype(np.uint8),
        "RGBA",
    )


def center_on_fixed_canvas(
    image: Image.Image,
    alpha: np.ndarray,
    target_foreground_size: int | None = None,
) -> Image.Image:
    nonempty = np.argwhere(alpha > 3)
    if nonempty.size == 0:
        raise ValueError("empty foreground mask")
    y_min, x_min = nonempty.min(axis=0)
    y_max, x_max = nonempty.max(axis=0)
    width = int(x_max - x_min + 1)
    height = int(y_max - y_min + 1)
    if not target_foreground_size and (
        width > MAX_FOREGROUND_SIZE or height > MAX_FOREGROUND_SIZE
    ):
        raise ValueError(
            f"foreground {width}x{height} exceeds {MAX_FOREGROUND_SIZE}px"
        )
    foreground = image.crop((
        int(x_min),
        int(y_min),
        int(x_max) + 1,
        int(y_max) + 1,
    ))
    if target_foreground_size:
        scale = target_foreground_size / max(foreground.size)
        foreground = resize_premultiplied(
            foreground,
            (
                max(1, round(foreground.width * scale)),
                max(1, round(foreground.height * scale)),
            ),
        )
    if foreground.width > MAX_FOREGROUND_SIZE or foreground.height > MAX_FOREGROUND_SIZE:
        raise ValueError(
            f"foreground {foreground.width}x{foreground.height} exceeds {MAX_FOREGROUND_SIZE}px"
        )
    result = Image.new(
        "RGBA",
        (CANVAS_SIZE, CANVAS_SIZE),
        (0, 0, 0, 0),
    )
    result.paste(
        foreground,
        (
            (CANVAS_SIZE - foreground.width) // 2,
            (CANVAS_SIZE - foreground.height) // 2,
        ),
    )
    return result


def connected_light_background_alpha(
    image: Image.Image,
    threshold: int,
    chroma_threshold: int,
    erode_size: int,
) -> np.ndarray:
    import cv2

    rgb = np.asarray(image.convert("RGB"))
    minimum = rgb.min(axis=2)
    chroma = rgb.max(axis=2) - minimum
    foreground_seed = (
        (minimum < threshold) | (chroma > chroma_threshold)
    ).astype(np.uint8)
    foreground_seed = cv2.morphologyEx(
        foreground_seed,
        cv2.MORPH_OPEN,
        np.ones((3, 3), np.uint8),
    )
    foreground_seed = cv2.morphologyEx(
        foreground_seed,
        cv2.MORPH_CLOSE,
        np.ones((5, 5), np.uint8),
    )
    component_count, labels, stats, _ = cv2.connectedComponentsWithStats(
        foreground_seed,
        connectivity=8,
    )
    if component_count < 2:
        raise ValueError("connected-light extraction found no foreground")
    largest_label = 1 + int(np.argmax(stats[1:, cv2.CC_STAT_AREA]))
    mask = (labels == largest_label).astype(np.uint8)

    # Preserve enclosed white highlights and translucent internal details. Only
    # the bright field connected to the canvas boundary is treated as background.
    flood = mask.copy()
    flood_mask = np.zeros((mask.shape[0] + 2, mask.shape[1] + 2), np.uint8)
    cv2.floodFill(flood, flood_mask, (0, 0), 1)
    mask = np.maximum(mask, (flood == 0).astype(np.uint8))
    if erode_size:
        kernel_size = erode_size * 2 + 1
        mask = cv2.erode(mask, np.ones((kernel_size, kernel_size), np.uint8))
    return (mask * 255).astype(np.uint8)


def process_image(
    source: Path,
    destination: Path,
    session,
    remove,
    source_crop: list[int] | None = None,
    source_exclude_rects: list[list[int]] | None = None,
    source_clear_points: list[list[int]] | None = None,
    keep_largest_component: bool = False,
    source_scale: float = 1.0,
    alpha_matting: bool = True,
    preserve_source_pixels: bool = False,
    background_removal: str = "rembg",
    background_threshold: int = 245,
    background_chroma: int = 12,
    foreground_erode: int = 0,
    target_foreground_size: int | None = None,
) -> None:
    original = Image.open(source).convert("RGB")
    if source_crop:
        original = original.crop(tuple(source_crop))
    if source_scale != 1.0:
        original = original.resize(
            (
                round(original.width * source_scale),
                round(original.height * source_scale),
            ),
            Image.Resampling.LANCZOS,
        )
    if background_removal == "connected-light-background":
        alpha = connected_light_background_alpha(
            original,
            background_threshold,
            background_chroma,
            foreground_erode,
        )
        rgba = np.dstack((np.asarray(original), alpha))
    elif not alpha_matting:
        removed = remove(
            original,
            session=session,
            alpha_matting=False,
            post_process_mask=True,
        ).convert("RGBA")
    else:
        try:
            removed = remove(
                original,
                session=session,
                alpha_matting=True,
                alpha_matting_foreground_threshold=235,
                alpha_matting_background_threshold=12,
                alpha_matting_erode_size=8,
                post_process_mask=True,
            ).convert("RGBA")
        except MemoryError:
            # A few soft, transparent bits create an excessively large unknown
            # region for closed-form matting. Narrow only that region while keeping
            # the same segmentation model and original source pixels.
            removed = remove(
                original,
                session=session,
                alpha_matting=True,
                alpha_matting_foreground_threshold=220,
                alpha_matting_background_threshold=35,
                alpha_matting_erode_size=4,
                post_process_mask=True,
            ).convert("RGBA")
    if background_removal != "connected-light-background":
        rgba = np.asarray(removed).copy()
        alpha = rgba[:, :, 3].copy()
        if not alpha_matting:
            softened = np.asarray(
                Image.fromarray(alpha).filter(ImageFilter.GaussianBlur(radius=0.65))
            )
            alpha = np.minimum(alpha, softened)
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
    alpha[alpha <= 8] = 0
    if preserve_source_pixels:
        rgba = np.dstack((np.asarray(original), alpha))
    else:
        rgba[:, :, 3] = alpha
    result = center_on_fixed_canvas(
        Image.fromarray(rgba, "RGBA"),
        alpha,
        target_foreground_size,
    )
    destination.parent.mkdir(parents=True, exist_ok=True)
    result.save(
        destination,
        format="WEBP",
        lossless=True,
        quality=100,
        method=4,
        exact=True,
    )


def source_url(entry: dict) -> str:
    source = entry.get("sourceUrl") or entry.get("source") or ""
    if source.startswith(("http://", "https://")):
        return source
    file_name = re.sub(r"^\d+_", "", Path(source).name)
    if not file_name:
        raise ValueError(f"{entry['id']}: source URL cannot be resolved")
    return f"{OFFICIAL_IMAGE_ROOT}/{file_name}"


def source_path(
    report: dict,
    entry: dict,
    source_cache: Path,
) -> Path:
    local_candidates = []
    if entry.get("sourceFile"):
        local_candidates.append(Path(entry["sourceFile"]))
    source = entry.get("source") or ""
    if source and not source.startswith(("http://", "https://")):
        local_candidates.append(Path(source))
        local_candidates.append(Path(report["sourceRoot"]) / Path(source))
    for candidate in local_candidates:
        if candidate.exists():
            return candidate

    url = source_url(entry)
    parsed_name = Path(urlparse(url).path).name
    cache_name = f"{entry['sourceSha256'][:16]}-{parsed_name}"
    cached = source_cache / cache_name
    if cached.exists():
        digest = hashlib.sha256(cached.read_bytes()).hexdigest()
        if digest == entry["sourceSha256"]:
            return cached
        cached.unlink()
    request = Request(url, headers={"User-Agent": "beystadium-image-alpha-refinement/1.0"})
    with urlopen(request, timeout=30) as response:
        source_bytes = response.read()
    digest = hashlib.sha256(source_bytes).hexdigest()
    if digest != entry["sourceSha256"]:
        raise ValueError(f"{entry['id']}: downloaded source SHA-256 changed")
    source_cache.mkdir(parents=True, exist_ok=True)
    temporary = cached.with_name(f"{cached.name}.{os.getpid()}.tmp")
    temporary.write_bytes(source_bytes)
    os.replace(temporary, cached)
    return cached


def current_image_path(entry: dict) -> Path:
    item_id = entry["id"]
    if "::" in item_id:
        bey_id, part_id = item_id.split("::", 1)
        return (
            Path("assets/images/x/beys")
            / bey_id.lower()
            / "parts"
            / f"{part_id.lower()}.webp"
        )
    if item_id.startswith("BEY-X-"):
        return Path("assets/images/x/beys") / item_id.lower() / "main.webp"
    if item_id.startswith("PART-X-"):
        for part_type in ("blade", "ratchet", "bit"):
            if item_id.startswith(f"PART-X-{part_type.upper()}-"):
                return (
                    Path("assets/images/x/parts")
                    / part_type
                    / f"{item_id.lower()}.webp"
                )
    raise ValueError(f"{item_id}: current X image path cannot be resolved")


def destination_path(entry: dict, output_root: Path, current_layout: bool) -> Path:
    relative_path = current_image_path(entry) if current_layout else Path(entry["image"])
    return output_root / relative_path


def validate_entries(
    report: dict,
    entries: list[dict],
    output_root: Path,
    source_cache: Path,
    current_layout: bool,
) -> int:
    ids = [entry["id"] for entry in entries]
    outputs = [entry["image"] for entry in entries]
    if len(ids) != len(set(ids)):
        raise ValueError("duplicate mapping IDs")
    if len(outputs) != len(set(outputs)):
        raise ValueError("duplicate output paths")
    for index, entry in enumerate(entries, start=1):
        source = source_path(report, entry, source_cache)
        digest = hashlib.sha256(source.read_bytes()).hexdigest()
        if digest != entry["sourceSha256"]:
            raise ValueError(f"{entry['id']}: source SHA-256 changed")
        destination = destination_path(entry, output_root, current_layout)
        with Image.open(destination) as image:
            rgba = image.convert("RGBA")
            alpha = np.asarray(rgba.getchannel("A"))
            if rgba.size != (CANVAS_SIZE, CANVAS_SIZE):
                raise ValueError(
                    f"{entry['id']}: expected {CANVAS_SIZE}x{CANVAS_SIZE}, got {rgba.size}"
                )
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
        if min(margins) < MIN_MARGIN:
            raise ValueError(f"{entry['id']}: insufficient transparent padding {margins}")
        if abs(margins[0] - margins[2]) > 1 or abs(margins[1] - margins[3]) > 1:
            raise ValueError(f"{entry['id']}: foreground is not centered {margins}")
        if entry.get("sourceForegroundBox"):
            if entry.get("sourceCrop") or entry.get("sourceScale", 1.0) != 1.0:
                raise ValueError(
                    f"{entry['id']}: source pixel audit requires an uncropped 1:1 source"
                )
            source_left, source_top, source_right, source_bottom = entry[
                "sourceForegroundBox"
            ]
            with Image.open(source) as source_image:
                source_rgb = np.asarray(source_image.convert("RGB"))[
                    source_top:source_bottom,
                    source_left:source_right,
                ]
            output_rgba = np.asarray(rgba)
            output_crop = output_rgba[y_min:y_max + 1, x_min:x_max + 1]
            if output_crop.shape[:2] != source_rgb.shape[:2]:
                raise ValueError(
                    f"{entry['id']}: source foreground box no longer matches output"
                )
            visible = output_crop[:, :, 3] > 3
            if not np.array_equal(output_crop[:, :, :3][visible], source_rgb[visible]):
                raise ValueError(f"{entry['id']}: source foreground RGB changed")
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

    args.source_cache = args.source_cache.resolve()
    if args.prefetch_only:
        failures = []
        with ThreadPoolExecutor(max_workers=8) as executor:
            future_by_entry = {
                executor.submit(source_path, report, entry, args.source_cache): entry
                for entry in entries
            }
            for index, future in enumerate(as_completed(future_by_entry), start=1):
                entry = future_by_entry[future]
                try:
                    future.result()
                    print(f"[{index}/{len(entries)}] cached {entry['id']}", flush=True)
                except Exception as error:
                    failures.append((entry["id"], str(error)))
                    print(f"[{index}/{len(entries)}] failed {entry['id']}: {error}", flush=True)
        if failures:
            for item_id, message in failures:
                print(f"{item_id}: {message}", file=sys.stderr)
            return 1
        return 0
    if args.validate_only:
        return validate_entries(
            report,
            entries,
            args.output_root,
            args.source_cache,
            args.current_layout,
        )

    os.environ.setdefault("U2NET_HOME", str(Path(".cache/rembg-models").resolve()))
    model_sessions = {}
    failures: list[tuple[str, str]] = []
    for index, entry in enumerate(entries, start=1):
        source = source_path(report, entry, args.source_cache)
        destination = destination_path(entry, args.output_root, args.current_layout)
        if destination.exists() and not args.overwrite:
            print(f"[{index}/{len(entries)}] skip {entry['id']}", flush=True)
            continue
        try:
            background_removal = entry.get("backgroundRemoval", "rembg")
            session = None
            remove = None
            if background_removal == "rembg":
                model_name = entry.get("segmentationModel", args.model)
                if model_name not in model_sessions:
                    model_sessions[model_name] = load_rembg(model_name)
                session, remove = model_sessions[model_name]
            process_image(
                source,
                destination,
                session,
                remove,
                entry.get("sourceCrop"),
                entry.get("sourceExcludeRects"),
                entry.get("sourceClearPoints"),
                entry.get("keepLargestComponent", False),
                entry.get("sourceScale", 1.0),
                entry.get("alphaMatting", True),
                entry.get("preserveSourcePixels", False),
                background_removal,
                entry.get("backgroundThreshold", 245),
                entry.get("backgroundChroma", 12),
                entry.get("foregroundErode", 0),
                entry.get("targetForegroundSize"),
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
