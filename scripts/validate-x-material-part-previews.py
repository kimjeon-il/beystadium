from __future__ import annotations

import hashlib
import json
from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "data" / "source" / "x-part-preview-color-derivations.json"
VERSION = "20260726-x-material-previews"


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def load_rgba(path: Path) -> np.ndarray:
    return np.asarray(Image.open(path).convert("RGBA"), dtype=np.uint8)


def main() -> None:
    report = json.loads(MANIFEST.read_text(encoding="utf-8"))
    if report["version"] != VERSION:
        raise ValueError(f"expected {VERSION}, found {report['version']}")
    if report["totals"]["generated"] != 241:
        raise ValueError(report["totals"])
    if report["totals"]["unavailable"] != 6:
        raise ValueError(report["totals"])
    if report["totals"]["uniqueMaterialMasks"] != 97:
        raise ValueError(report["totals"])

    contexts = set()
    masks = {}
    for record in report["derivations"]:
        context = (record["beyId"], record["partId"])
        if context in contexts:
            raise ValueError(f"duplicate derivation context: {context}")
        contexts.add(context)

        source_path = ROOT / record["shapeImage"]
        output_path = ROOT / record["outputImage"]
        mask_path = ROOT / record["materialMask"]
        if sha256(source_path) != record["shapeImageSha256"]:
            raise ValueError(f"{record['shapeImage']}: source pixels changed")
        if sha256(output_path) != record["outputSha256"]:
            raise ValueError(f"{record['outputImage']}: output hash changed")
        if sha256(mask_path) != record["materialMaskSha256"]:
            raise ValueError(f"{record['materialMask']}: mask hash changed")
        masks[record["materialMask"]] = record["materialMaskSha256"]

        source = load_rgba(source_path)
        output = load_rgba(output_path)
        labels = np.asarray(Image.open(mask_path).convert("L"), dtype=np.uint8)
        if source.shape != (448, 448, 4) or output.shape != (448, 448, 4):
            raise ValueError(f"{context}: invalid 448px canvas")
        if labels.shape != (448, 448):
            raise ValueError(f"{context}: invalid material mask canvas")
        if not set(np.unique(labels)).issubset(set(range(7))):
            raise ValueError(f"{context}: unknown material label")

        if record["sourceKind"] == "material-derived":
            if not np.array_equal(source[..., 3], output[..., 3]):
                raise ValueError(f"{context}: source alpha changed")
            unchanged = labels == 0
            if not np.array_equal(source[..., :3][unchanged], output[..., :3][unchanged]):
                raise ValueError(f"{context}: RGB outside material labels changed")
            if not record["alphaPreserved"] or not record["outsideMaskRgbPreserved"]:
                raise ValueError(f"{context}: preservation flags are missing")
        elif record["sourceKind"] == "official-direct":
            if np.count_nonzero(output[..., 3] > 4) == 0:
                raise ValueError(f"{context}: empty official direct output")
        else:
            raise ValueError(f"{context}: unknown source kind {record['sourceKind']}")

    if len(masks) != 97:
        raise ValueError(f"expected 97 unique material masks, found {len(masks)}")
    print(
        f"X material previews: {len(contexts)} generated, "
        f"{len(masks)} masks, {len(report['unavailable'])} unresolved candidates"
    )


if __name__ == "__main__":
    main()
