#!/usr/bin/env python3
"""Normalize reviewed front-view X Bey images to one visible size."""

from __future__ import annotations

import argparse
import hashlib
import io
import json
from pathlib import Path
import subprocess

import numpy as np
from PIL import Image


CONFIG_PATH = Path("data/source/x-bey-primary-images.json")
ANGLE_CONFIG_PATH = Path("data/source/x-bey-angle-corrections.json")
CONFIG_VERSION = "20260813-x-warrior-saber-gloss-balance"
CANVAS_SIZE = 448
TARGET_FOREGROUND_SIZE = 360
ALPHA_THRESHOLD = 3
ELIGIBLE_SOURCE_KINDS = {
    "official-assembled-front",
    "user-approved-generated-front",
    "verified-existing-front",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true", help="rewrite image files and metadata")
    return parser.parse_args()


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def head_bytes(path: Path) -> bytes:
    result = subprocess.run(
        ["git", "show", f"HEAD:{path.as_posix()}"],
        check=True,
        capture_output=True,
    )
    return result.stdout


def foreground_box(image: Image.Image) -> tuple[int, int, int, int]:
    alpha = image.getchannel("A")
    box = alpha.point(lambda value: 255 if value > ALPHA_THRESHOLD else 0).getbbox()
    if box is None:
        raise ValueError("empty alpha foreground")
    return box


def resize_premultiplied(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    rgba = np.asarray(image.convert("RGBA"), dtype=np.float32)
    alpha = rgba[..., 3:4] / 255.0
    premultiplied = np.concatenate((rgba[..., :3] * alpha, rgba[..., 3:4]), axis=2)
    encoded = Image.fromarray(np.rint(premultiplied).clip(0, 255).astype(np.uint8), "RGBA")
    resized = np.asarray(encoded.resize(size, Image.Resampling.LANCZOS), dtype=np.float32)
    resized_alpha = resized[..., 3:4]
    rgb = np.zeros_like(resized[..., :3])
    np.divide(
        resized[..., :3] * 255.0,
        resized_alpha,
        out=rgb,
        where=resized_alpha > 0,
    )
    straight = np.concatenate((rgb, resized_alpha), axis=2)
    return Image.fromarray(np.rint(straight).clip(0, 255).astype(np.uint8), "RGBA")


def normalized_image(source: Image.Image) -> tuple[Image.Image, list[int]]:
    rgba = source.convert("RGBA")
    crop = rgba.crop(foreground_box(rgba))
    for _ in range(4):
        width, height = crop.size
        scale = TARGET_FOREGROUND_SIZE / max(width, height)
        resized = resize_premultiplied(
            crop,
            (max(1, round(width * scale)), max(1, round(height * scale))),
        )
        crop = resized.crop(foreground_box(resized))
        if max(crop.size) == TARGET_FOREGROUND_SIZE:
            break
    if max(crop.size) != TARGET_FOREGROUND_SIZE:
        raise ValueError(f"could not reach {TARGET_FOREGROUND_SIZE}px foreground: {crop.size}")

    left = (CANVAS_SIZE - crop.width) // 2
    top = (CANVAS_SIZE - crop.height) // 2
    canvas = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    canvas.alpha_composite(crop, (left, top))
    box = foreground_box(canvas)
    if max(box[2] - box[0], box[3] - box[1]) != TARGET_FOREGROUND_SIZE:
        raise ValueError(f"normalized foreground changed after placement: {box}")
    if abs(box[0] - (CANVAS_SIZE - box[2])) > 1 or abs(box[1] - (CANVAS_SIZE - box[3])) > 1:
        raise ValueError(f"normalized foreground is not centered: {box}")
    return canvas, list(box)


def config_entries(config: dict) -> list[dict]:
    entries: list[dict] = []
    for entry in config["selected"]:
        if entry.get("sourceKind") not in {
            "official-assembled-front",
            "user-approved-generated-front",
            "verified-existing-front",
        }:
            raise ValueError(f"{entry['id']}: unexpected selected source kind")
        entries.append(entry)
    for entry in config["verifiedMain"]:
        entry.setdefault("sourceKind", "verified-existing-front")
        entry.setdefault(
            "image",
            f"assets/images/x/beys/{entry['id'].lower()}/main.webp",
        )
        entries.append(entry)
    return entries


def validate_policy(config: dict) -> None:
    expected = {
        "method": "premultiplied-alpha-uniform-long-edge",
        "canvasSize": CANVAS_SIZE,
        "targetForegroundSize": TARGET_FOREGROUND_SIZE,
        "alphaThreshold": ALPHA_THRESHOLD,
        "resample": "lanczos",
        "eligibleSourceKinds": sorted(ELIGIBLE_SOURCE_KINDS),
    }
    if config.get("normalization") != expected:
        raise ValueError("X Bey normalization policy does not match the processor")


def write_lossless_webp(image: Image.Image, path: Path) -> None:
    image.save(path, "WEBP", lossless=True, method=6, exact=True)


def main() -> int:
    args = parse_args()
    config = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
    if args.write and "normalization" not in config:
        config["normalization"] = {
            "method": "premultiplied-alpha-uniform-long-edge",
            "canvasSize": CANVAS_SIZE,
            "targetForegroundSize": TARGET_FOREGROUND_SIZE,
            "alphaThreshold": ALPHA_THRESHOLD,
            "resample": "lanczos",
            "eligibleSourceKinds": sorted(ELIGIBLE_SOURCE_KINDS),
        }
    validate_policy(config)

    entries = config_entries(config)
    if len(entries) != 223:
        raise ValueError(f"expected 223 front-view Beys, found {len(entries)}")
    ids = [entry["id"] for entry in entries]
    paths = [entry["image"] for entry in entries]
    if len(set(ids)) != len(ids) or len(set(paths)) != len(paths):
        raise ValueError("front-view normalization IDs and paths must be unique")

    angle_config = json.loads(ANGLE_CONFIG_PATH.read_text(encoding="utf-8"))
    angle_ids = {entry["id"] for entry in angle_config["entries"]}
    if angle_ids.intersection(ids):
        raise ValueError("angle-corrected Beys must be excluded from size normalization")

    changed = 0
    for entry in entries:
        image_path = Path(entry["image"])
        current_hash = sha256(image_path)
        pre_hash = entry.get("preNormalizationSha256")
        output_hash = entry.get("outputSha256")

        if pre_hash and current_hash == output_hash:
            with Image.open(image_path) as image:
                box = foreground_box(image.convert("RGBA"))
            if max(box[2] - box[0], box[3] - box[1]) != TARGET_FOREGROUND_SIZE:
                raise ValueError(f"{entry['id']}: recorded normalized image has the wrong size")
            entry["normalizedForegroundBox"] = list(box)
            continue
        if pre_hash and current_hash != pre_hash:
            raise ValueError(f"{entry['id']}: image hash matches neither pre- nor post-normalization data")
        if not args.write:
            raise ValueError(f"{entry['id']}: normalization metadata is missing; run with --write")

        if entry.get("normalizationInput") == "source-file":
            source_file = entry.get("sourceFile")
            if not source_file:
                raise ValueError(f"{entry['id']}: source-file normalization needs sourceFile")
            baseline_bytes = Path(source_file).read_bytes()
        else:
            baseline_bytes = head_bytes(image_path)
        entry["preNormalizationSha256"] = hashlib.sha256(baseline_bytes).hexdigest()
        with Image.open(io.BytesIO(baseline_bytes)) as image:
            result, box = normalized_image(image)
        write_lossless_webp(result, image_path)
        entry["outputSha256"] = sha256(image_path)
        entry["normalizedForegroundBox"] = box
        changed += 1

    if args.write:
        config["version"] = CONFIG_VERSION
        angle_config["version"] = CONFIG_VERSION
        CONFIG_PATH.write_text(
            f"{json.dumps(config, ensure_ascii=False, indent=2)}\n",
            encoding="utf-8",
        )
        ANGLE_CONFIG_PATH.write_text(
            f"{json.dumps(angle_config, ensure_ascii=False, indent=2)}\n",
            encoding="utf-8",
        )

    print(f"X front-view Bey sizes: {len(entries)} verified, {changed} rewritten, {len(angle_ids)} angle views excluded")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
