#!/usr/bin/env python3
"""Compare contextual X part silhouettes with their catalog representatives."""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys

TOOLS_PATH = Path(".cache/x-image-tools").resolve()
if TOOLS_PATH.exists():
    sys.path.insert(0, str(TOOLS_PATH))
import numpy as np
from PIL import Image


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--report",
        type=Path,
        default=Path(".cache/x-part-preview-map.json"),
    )
    parser.add_argument(
        "--output",
        type=Path,
        default=Path(".cache/x-part-preview-similarity.json"),
    )
    parser.add_argument("--threshold", type=float, default=0.45)
    parser.add_argument("--max-aspect-ratio", type=float, default=1.65)
    return parser.parse_args()


def normalized_mask(image_path: Path, size: int = 256) -> tuple[np.ndarray, float]:
    with Image.open(image_path) as image:
        alpha = np.asarray(image.convert("RGBA").getchannel("A"))
    points = np.argwhere(alpha > 8)
    if points.size == 0:
        raise ValueError(f"{image_path}: empty alpha mask")
    y_min, x_min = points.min(axis=0)
    y_max, x_max = points.max(axis=0)
    cropped = Image.fromarray((alpha[y_min : y_max + 1, x_min : x_max + 1] > 8).astype(np.uint8) * 255)
    scale = min((size - 16) / cropped.width, (size - 16) / cropped.height)
    resized = cropped.resize(
        (max(1, round(cropped.width * scale)), max(1, round(cropped.height * scale))),
        Image.Resampling.NEAREST,
    )
    canvas = Image.new("L", (size, size), 0)
    canvas.paste(resized, ((size - resized.width) // 2, (size - resized.height) // 2))
    return np.asarray(canvas) > 0, cropped.width / cropped.height


def mask_iou(left: np.ndarray, right: np.ndarray) -> float:
    union = np.logical_or(left, right).sum()
    return float(np.logical_and(left, right).sum() / union) if union else 0.0


def main() -> int:
    args = parse_args()
    report = json.loads(args.report.read_text(encoding="utf-8"))
    part_images = {}
    source = Path("data/source/x-images.mjs").read_text(encoding="utf-8")
    for entry in report["mappings"]:
        part_id = entry["partId"]
        if part_id in part_images:
            continue
        marker = f'"id": "{part_id}"'
        position = source.find(marker)
        if position < 0:
            continue
        image_marker = '"image": "'
        image_start = source.find(image_marker, position) + len(image_marker)
        image_end = source.find('"', image_start)
        part_images[part_id] = source[image_start:image_end]

    results = []
    for entry in report["mappings"]:
        if entry["reuseRepresentative"]:
            score = 1.0
        else:
            representative = part_images.get(entry["partId"])
            if not representative:
                continue
            contextual_mask, contextual_aspect = normalized_mask(Path(entry["image"]))
            representative_mask, representative_aspect = normalized_mask(Path(representative))
            score = mask_iou(contextual_mask, representative_mask)
            aspect_ratio = max(
                contextual_aspect / representative_aspect,
                representative_aspect / contextual_aspect,
            )
        if entry["reuseRepresentative"]:
            aspect_ratio = 1.0
        results.append({
            "beyId": entry["beyId"],
            "partId": entry["partId"],
            "image": entry["image"],
            "score": round(score, 5),
            "aspectRatio": round(aspect_ratio, 5),
        })

    results.sort(key=lambda entry: (entry["score"], -entry["aspectRatio"]))
    outliers = [
        entry
        for entry in results
        if entry["score"] < args.threshold or entry["aspectRatio"] > args.max_aspect_ratio
    ]
    payload = {
        "threshold": args.threshold,
        "maxAspectRatio": args.max_aspect_ratio,
        "total": len(results),
        "outliers": outliers,
        "results": results,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(
        f"Compared {len(results)} contextual previews; "
        f"{len(payload['outliers'])} outside IoU/aspect thresholds"
    )
    for entry in payload["outliers"][:30]:
        print(
            f"{entry['score']:.5f} aspect={entry['aspectRatio']:.3f} "
            f"{entry['beyId']} {entry['partId']}"
        )
    return 1 if payload["outliers"] else 0


if __name__ == "__main__":
    raise SystemExit(main())
