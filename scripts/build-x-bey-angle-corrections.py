#!/usr/bin/env python3
"""Build deterministic front-view corrections for official X Bey renders."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path

import numpy as np
from PIL import Image


CANVAS_SIZE = 448
MIN_MARGIN = 6
SCALE_Y = 1.08
METHOD = "premultiplied-alpha-vertical-affine"
DEFAULT_CONFIG = Path("data/source/x-bey-angle-corrections.json")
HEAVENS_RING_ID = "BEY-X-BX-50-01-HEAVENS-RING-0-80DS"
SUPPLIED_FRONT_IDS = {
    "BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F",
    "BEY-X-BX-00-02-LIGHTNING-L-DRAGO-BARRAGE-1-60F",
    "BEY-X-BX-00-COBALT-DRAGOON-2-60C",
    "BEY-X-BX-00-COBALT-DRAGOON-9-60F",
    "BEY-X-BX-00-COBALT-DRAKE-4-60F",
    "BEY-X-BX-00-HELLS-CHAIN-5-60HT",
    "BEY-X-BX-00-LEON-CLAW-5-60P",
    "BEY-X-BX-00-SHARK-EDGE-5-60GF",
    "BEY-X-BX-01-DRAN-SWORD-3-60F",
    "BEY-X-BX-02-HELLS-SCYTHE-4-60T",
    "BEY-X-BX-03-WIZARD-ARROW-4-80B",
    "BEY-X-BX-04-KNIGHT-SHIELD-3-80N",
    "BEY-X-BX-05-WIZARD-ARROW-4-80B",
    "BEY-X-BX-06-KNIGHT-SHIELD-3-80N",
    "BEY-X-BX-07-DRAN-SWORD-3-60F",
    "BEY-X-BX-08-HELLS-SCYTHE-3-80B",
    "BEY-X-BX-08-KNIGHT-SHIELD-4-80T",
    "BEY-X-BX-08-WIZARD-ARROW-4-60N",
    "BEY-X-BX-00-HELLS-SCYTHE-4-60T",
    "BEY-X-BX-13-KNIGHT-LANCE-4-80HN",
    "BEY-X-BX-14-01-SHARK-EDGE-3-60LF",
    "BEY-X-BX-15-LEON-CLAW-5-60P",
    "BEY-X-BX-16-01-VIPER-TAIL-5-80O",
    "BEY-X-BX-16-02-VIPER-TAIL-4-60F",
    "BEY-X-BX-16-03-VIPER-TAIL-3-80HN",
    "BEY-X-BX-17-WIZARD-ARROW-4-80B",
    "BEY-X-BX-19-RHINO-HORN-3-80S",
    "BEY-X-BX-21-HELLS-CHAIN-5-60HT",
    "BEY-X-BX-21-KNIGHT-LANCE-3-60LF",
    "BEY-X-BX-21-WIZARD-ARROW-4-80N",
    "BEY-X-BX-22-DRAN-SWORD-3-60F",
    "BEY-X-BX-23-PHOENIX-SOAR-9-60GF",
    "BEY-X-BX-24-01-WYVERN-GALE-5-80GB",
    "BEY-X-BX-26-UNICORN-STING-5-60GF",
    "BEY-X-BX-27-01-SPHINX-COWL-9-80GN",
    "BEY-X-BX-31-01-TYRANNO-BEAT-4-70Q",
    "BEY-X-BX-33-PEARL-TIGER-3-60U",
    "BEY-X-BX-34-COBALT-DRAGOON-2-60C",
    "BEY-X-BX-35-01-BLACK-TURTLE-4-60D",
    "BEY-X-BX-36-01-WHALE-WAVE-5-80E",
    "BEY-X-BX-37-BEAR-SCRATCH-5-60F",
    "BEY-X-BX-38-CRIMSON-GARUDA-4-70TP",
    "BEY-X-BX-44-TRICERA-PRESS-M-85BS",
    "BEY-X-BX-45-WARRIOR-CALIBUR-6-70M",
    "BEY-X-BX-49-DRAN-STRIKE-4-50FF",
    "BEY-X-UX-00-SCORPIO-SPEAR-0-70Z",
    "BEY-X-UX-00-WARRIOR-SABER-5-60K",
    "BEY-X-UX-00-AERO-PEGASUS-3-70A",
    "BEY-X-UX-00-DRAN-BUSTER-1-60A",
    "BEY-X-UX-00-DRAN-BUSTER-3-70N",
    "BEY-X-UX-00-DRAN-DAGGER-9-60LF",
    "BEY-X-UX-01-DRAN-BUSTER-1-60A",
    "BEY-X-UX-02-HELLS-HAMMER-3-70H",
    "BEY-X-UX-03-WIZARD-ROD-5-70DB",
    "BEY-X-UX-04-WIZARD-ROD-5-70DB",
    "BEY-X-UX-05-01-NINJA-SHADOW-1-80MN",
    "BEY-X-UX-06-LEON-CREST-7-60GN",
    "BEY-X-UX-07-PHOENIX-RUDDER-9-70G",
    "BEY-X-UX-07-SPHINX-COWL-1-80GF",
    "BEY-X-UX-07-WYVERN-GALE-2-60S",
    "BEY-X-UX-08-SILVER-WOLF-3-80FB",
    "BEY-X-UX-09-WARRIOR-SABER-2-70L",
    "BEY-X-UX-10-KNIGHT-MAIL-3-85BS",
    "BEY-X-BX-00-DRAGOON-STORM-4-60RA",
    "BEY-X-BX-00-DRAN-SWORD-3-60F",
    "BEY-X-BX-00-DRAN-SWORD-1-60V",
    "BEY-X-BX-00-MAMMOTH-TUSK-2-80E",
    "BEY-X-BX-00-PHOENIX-SOAR-9-60GF",
    "BEY-X-BX-00-ROCK-LEONE-6-80GN",
    "BEY-X-BX-00-STORM-PEGASIS-3-70RA",
    "BEY-X-BX-00-VICTORY-VALKYRIE-2-60RA",
    "BEY-X-UX-00-KNIGHT-MAIL-3-85BS",
    "BEY-X-BX-39-01-SHELTER-DRAKE-7-80GP",
    "BEY-X-BX-39-02-SHELTER-DRAKE-5-70O",
    "BEY-X-BX-39-03-SHELTER-DRAKE-3-60D",
    "BEY-X-CX-01-DRAN-BRAVE-S-6-60V",
    "BEY-X-CX-02-WIZARD-ARC-R-4-55LO",
    "BEY-X-CX-03-PERSEUS-DARK-B-6-80W",
    "BEY-X-CX-04-DRAN-BRAVE-S-6-60V",
    "BEY-X-CX-04-PERSEUS-DARK-B-6-80W",
    "BEY-X-UX-00-HELLS-HAMMER-3-70H",
    "BEY-X-UX-11-IMPACT-DRAKE-9-60LR",
    "BEY-X-UX-12-01-GHOST-CIRCLE-0-80GB",
    "BEY-X-UX-13-GOLEM-ROCK-1-60UN",
    "BEY-X-UX-14-SCORPIO-SPEAR-0-70Z",
    "BEY-X-UX-15-SHARK-SCALE-4-50UF",
    "BEY-X-BX-46-GORE-TACKLE-7-70T",
    "BEY-X-BX-46-COBALT-DRAKE-9-60R",
    "BEY-X-CX-11-SHARK-GILL-5-60FB",
    "BEY-X-CX-11-GOLEM-ROCK-M-85HN",
    "BEY-X-UX-16-01-CLOCK-MIRAGE-9-65B",
    "BEY-X-UX-17-METEO-DRAGOON-3-70J",
    "BEY-X-UX-18-01-MUMMY-CURSE-7-55W",
    "BEY-X-UX-19-BULLET-GRIFFON-H",
    "BEY-X-UX-20-GLORY-VALKYRIE-LF",
}
CONFIG_VERSION = "20260813-x-warrior-saber-gloss-balance"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG)
    parser.add_argument("--initialize-from-audit", type=Path)
    parser.add_argument("--write-metadata", action="store_true")
    return parser.parse_args()


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def alpha_bbox(rgba: np.ndarray) -> tuple[int, int, int, int]:
    points = np.argwhere(rgba[:, :, 3] > 3)
    if points.size == 0:
        raise ValueError("empty foreground")
    top, left = points.min(axis=0)
    bottom, right = points.max(axis=0) + 1
    return int(left), int(top), int(right), int(bottom)


def transform_premultiplied(rgba: np.ndarray, pivot_y: float, scale_y: float) -> np.ndarray:
    source = rgba.astype(np.float32)
    alpha = source[:, :, 3:4] / 255.0
    premultiplied = np.concatenate((source[:, :, :3] * alpha, source[:, :, 3:4]), axis=2)
    image = Image.fromarray(np.clip(np.rint(premultiplied), 0, 255).astype(np.uint8), "RGBA")
    inverse_scale = 1.0 / scale_y
    transformed = image.transform(
        image.size,
        Image.Transform.AFFINE,
        (1.0, 0.0, 0.0, 0.0, inverse_scale, pivot_y * (1.0 - inverse_scale)),
        resample=Image.Resampling.BICUBIC,
        fillcolor=(0, 0, 0, 0),
    )
    result = np.asarray(transformed).astype(np.float32)
    result_alpha = result[:, :, 3:4]
    safe_alpha = np.maximum(result_alpha / 255.0, 1.0 / 255.0)
    result[:, :, :3] = np.where(
        result_alpha > 0,
        result[:, :, :3] / safe_alpha,
        0,
    )
    return np.clip(np.rint(result), 0, 255).astype(np.uint8)


def build_entry(entry: dict) -> dict:
    source_path = Path(entry["sourceImage"])
    output_path = Path(entry["image"])
    if sha256(source_path) != entry["sourceOutputSha256"]:
        raise ValueError(f"{entry['id']}: source WebP hash changed")

    with Image.open(source_path) as image:
        rgba = np.asarray(image.convert("RGBA"))
    if rgba.shape != (CANVAS_SIZE, CANVAS_SIZE, 4):
        raise ValueError(f"{entry['id']}: source is not {CANVAS_SIZE}x{CANVAS_SIZE}")
    _, top, _, bottom = alpha_bbox(rgba)
    pivot_y = round((top + bottom - 1) / 2, 3)
    if "pivotY" in entry and entry["pivotY"] != pivot_y:
        raise ValueError(f"{entry['id']}: stored pivot changed")

    corrected = transform_premultiplied(rgba, pivot_y, entry["scaleY"])
    left, top, right, bottom = alpha_bbox(corrected)
    margins = [left, top, CANVAS_SIZE - right, CANVAS_SIZE - bottom]
    if min(margins) < MIN_MARGIN:
        raise ValueError(f"{entry['id']}: corrected output clips the canvas: {margins}")

    output_path.parent.mkdir(parents=True, exist_ok=True)
    Image.fromarray(corrected, "RGBA").save(
        output_path,
        format="WEBP",
        lossless=True,
        quality=100,
        method=4,
        exact=True,
    )
    entry["pivotY"] = pivot_y
    digest = sha256(output_path)
    if "outputSha256" in entry and entry["outputSha256"] != digest:
        raise ValueError(f"{entry['id']}: corrected output hash changed")
    entry["outputSha256"] = digest
    return entry


def initialize_config(audit_path: Path) -> dict:
    audit = json.loads(audit_path.read_text(encoding="utf-8"))
    entries = []
    for item in audit["items"]:
        if (
            item["classification"] != "official-mounted-blade-top"
            or item["id"] == HEAVENS_RING_ID
            or item["id"] in SUPPLIED_FRONT_IDS
        ):
            continue
        entries.append({
            "id": item["id"],
            "sourceImage": item["image"],
            "image": f"assets/images/x/beys/{item['id'].lower()}/front.webp",
            "sourceKind": "official-angle-corrected",
            "sourceUrl": item["sourceUrl"],
            "sourceSha256": item["sourceSha256"],
            "sourceOutputSha256": item["outputSha256"],
            "method": METHOD,
            "scaleY": SCALE_Y,
        })
    if len(entries) != 36:
        raise ValueError(f"expected 36 angle corrections, found {len(entries)}")
    return {
        "version": CONFIG_VERSION,
        "method": METHOD,
        "entries": entries,
    }


def main() -> int:
    args = parse_args()
    config = (
        initialize_config(args.initialize_from_audit)
        if args.initialize_from_audit
        else json.loads(args.config.read_text(encoding="utf-8"))
    )
    if config["version"] != CONFIG_VERSION:
        raise ValueError("unexpected correction config version")
    if config["method"] != METHOD:
        raise ValueError("unexpected correction method")

    config["entries"] = [build_entry(entry) for entry in config["entries"]]
    if args.initialize_from_audit or args.write_metadata:
        args.config.parent.mkdir(parents=True, exist_ok=True)
        args.config.write_text(
            f"{json.dumps(config, ensure_ascii=False, indent=2)}\n",
            encoding="utf-8",
        )
    print(f"Built {len(config['entries'])} deterministic X Bey angle corrections")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
