#!/usr/bin/env python3
"""Build canonical transparent Burst Bey catalog images and their provenance map."""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from difflib import SequenceMatcher
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import sys
import time
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import quote, urljoin
from urllib.request import Request, urlopen

import numpy as np
from PIL import Image, ImageFilter


VERSION = "20260822-burst-b35-storm-spriggan-generated-front"
CANVAS_SIZE = 448
TARGET_FOREGROUND_SIZE = 360
ALPHA_THRESHOLD = 3
LOCAL_SOURCE_ROOT = Path(r"D:\베이블레이드\1. 완구\자료\3. 베이블레이드 버스트")
RUNTIME_PATH = Path("data/runtime/series/burst.json")
CONFIG_PATH = Path("data/source/burst-bey-primary-images.json")
FANDOM_REVIEW_PATH = Path("data/source/burst-bey-fandom-front-sources.json")
OUTPUT_ROOT = Path("assets/images/burst/beys")
CACHE_ROOT = Path(".cache/burst-bey-sources")
OFFICIAL_PRODUCTS_PAGE = "https://beyblade.takaratomy.co.jp/burst/products.html"
OFFICIAL_IMAGE_ROOT = "https://beyblade.takaratomy.co.jp/burst/"
FANDOM_API = "https://beyblade.fandom.com/api.php"
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}
CACHE_IMAGE_EXTENSIONS = SUPPORTED_EXTENSIONS | {".img"}
USER_AGENT = "Mozilla/5.0 (compatible; BeystadiumBurstImageAudit/1.0)"

# These local groups have one reviewed, isolated image for every listed Bey.
# Suffix order matches the explicit lineup order in the source catalog.
LOCAL_MULTI_SUFFIXES = {
    "B-126": [2, 3],
    "B-151": list(range(2, 10)),
    "B-171": [2, 3, 4],
    "B-173": list(range(2, 10)),
    "B-176": list(range(2, 10)),
    "B-178": list(range(2, 10)),
    "B-181": list(range(2, 8)),
    "B-186": list(range(2, 8)),
    "B-194": list(range(2, 9)),
}

# The second local image for these products is a launcher, stadium, effect
# render, or multi-product composition rather than one isolated assembled Bey.
LOCAL_SINGLE_EXCLUSIONS = {
    "B-122",
    "B-169",
    "B-182",
    "B-188",
}


@dataclass(frozen=True)
class SourceCandidate:
    kind: str
    location: str
    cache_path: Path
    title: str = ""
    checked_at: str = "2026-08-19"
    source_sha256: str = ""
    original_path: Path | None = None
    metadata: dict[str, Any] | None = None


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--write", action="store_true")
    parser.add_argument("--probe-only", action="store_true")
    parser.add_argument("--workers", type=int, default=8)
    parser.add_argument("--ids", nargs="*")
    parser.add_argument("--refresh-unavailable", action="store_true")
    return parser.parse_args()


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def request_bytes(url: str) -> bytes:
    error: Exception | None = None
    for attempt in range(6):
        request = Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urlopen(request, timeout=45) as response:
                return response.read()
        except HTTPError as current:
            error = current
            if current.code not in {429, 500, 502, 503, 504}:
                raise
            retry_after = current.headers.get("Retry-After")
            delay = float(retry_after) if retry_after and retry_after.isdigit() else 1.5 * (attempt + 1)
            time.sleep(min(delay, 12))
        except (URLError, TimeoutError) as current:
            error = current
            time.sleep(1.5 * (attempt + 1))
    assert error is not None
    raise error


def json_request(params: dict[str, str]) -> dict[str, Any]:
    query = "&".join(f"{key}={quote(value)}" for key, value in params.items())
    return json.loads(request_bytes(f"{FANDOM_API}?{query}").decode("utf-8"))


def compact(value: str) -> str:
    return re.sub(r"[^a-z0-9]+", "", value.casefold())


def title_similarity(left: str, right: str) -> float:
    return SequenceMatcher(None, compact(left), compact(right)).ratio()


def local_files_by_product() -> dict[int, list[tuple[int, Path]]]:
    groups: dict[int, list[tuple[int, Path]]] = {}
    try:
        source_exists = LOCAL_SOURCE_ROOT.exists()
    except OSError:
        source_exists = False
    if not source_exists:
        return groups
    pattern = re.compile(r"^(\d+)(?:_(\d+))?\.(?:jpe?g|png|webp)$", re.I)
    for path in LOCAL_SOURCE_ROOT.iterdir():
        if path.suffix.casefold() not in SUPPORTED_EXTENSIONS:
            continue
        match = pattern.match(path.name)
        if not match:
            continue
        product_number = int(match.group(1))
        suffix = int(match.group(2) or 0)
        groups.setdefault(product_number, []).append((suffix, path))
    for values in groups.values():
        values.sort(key=lambda value: (value[0], value[1].name.casefold()))
    return groups


def preferred_suffix_file(values: list[tuple[int, Path]], suffix: int) -> Path | None:
    matches = [path for candidate_suffix, path in values if candidate_suffix == suffix]
    if not matches:
        return None
    ranked: list[tuple[int, int, Path]] = []
    for path in matches:
        try:
            with Image.open(path) as image:
                ranked.append((min(image.size), image.width * image.height, path))
        except OSError:
            continue
    return max(ranked, default=(0, 0, None), key=lambda value: (value[0], value[1]))[2]


def explicit_local_sources(items: list[dict[str, Any]]) -> dict[str, SourceCandidate]:
    by_product: dict[str, list[dict[str, Any]]] = {}
    for item in items:
        by_product.setdefault(item.get("productNo", ""), []).append(item)
    files = local_files_by_product()
    result: dict[str, SourceCandidate] = {}
    for product_no, product_items in by_product.items():
        match = re.fullmatch(r"B-(\d+)", product_no)
        if not match:
            continue
        values = files.get(int(match.group(1)), [])
        suffixes: list[int] | None = None
        if product_no in LOCAL_MULTI_SUFFIXES:
            suffixes = LOCAL_MULTI_SUFFIXES[product_no]
        elif len(product_items) == 1 and product_no not in LOCAL_SINGLE_EXCLUSIONS:
            suffixes = [2]
        if not suffixes or len(suffixes) != len(product_items):
            continue
        paths = [preferred_suffix_file(values, suffix) for suffix in suffixes]
        if any(path is None for path in paths):
            continue
        for item, path in zip(product_items, paths, strict=True):
            assert path is not None
            result[item["id"]] = SourceCandidate(
                kind="local",
                location=path.relative_to(LOCAL_SOURCE_ROOT).as_posix(),
                cache_path=path,
                title=path.name,
            )
    return result


def official_image_map() -> dict[str, str]:
    CACHE_ROOT.mkdir(parents=True, exist_ok=True)
    cache_path = CACHE_ROOT / "official-products.html"
    if not cache_path.exists():
        cache_path.write_bytes(request_bytes(OFFICIAL_PRODUCTS_PAGE))
    html = cache_path.read_text(encoding="utf-8", errors="ignore")
    matches = re.findall(
        r"public_html/category/img/products/([^\"'?]+\.(?:png|jpg|webp))",
        html,
        flags=re.I,
    )
    result: dict[str, str] = {}
    for name in matches:
        number_match = re.search(r"(?:^|_)B[-_](\d+)", name, re.I)
        if not number_match:
            number_match = re.match(r"B[-_](\d+)", name, re.I)
        if not number_match:
            continue
        product_no = f"B-{int(number_match.group(1)):02d}"
        result.setdefault(product_no, urljoin(OFFICIAL_IMAGE_ROOT, f"public_html/category/img/products/{name}"))
    return result


def cached_reviewed_source(entry: dict[str, Any]) -> Path:
    suffix = Path(entry["sourceUrl"].split("?", 1)[0]).suffix.casefold()
    if suffix not in SUPPORTED_EXTENSIONS:
        suffix = ".png" if entry.get("sourceMime") == "image/png" else ".jpg"
    path = CACHE_ROOT / "fandom-reviewed" / f'{entry["id"].casefold()}{suffix}'
    if not path.exists() or sha256(path) != entry["sourceSha256"]:
        path.parent.mkdir(parents=True, exist_ok=True)
        discovery = Path(".cache/burst-fandom-plan/discovery/candidates") / entry["id"].casefold()
        local_match = next(
            (
                candidate for candidate in discovery.glob("*")
                if candidate.is_file() and sha256(candidate) == entry["sourceSha256"]
            ),
            None,
        )
        if local_match:
            shutil.copy2(local_match, path)
        else:
            path.write_bytes(request_bytes(entry["sourceUrl"]))
    if sha256(path) != entry["sourceSha256"]:
        raise ValueError(f'{entry["id"]}: reviewed Fandom source hash mismatch')
    return path


def reviewed_fandom_sources() -> dict[str, SourceCandidate]:
    if not FANDOM_REVIEW_PATH.exists():
        return {}
    review = json.loads(FANDOM_REVIEW_PATH.read_text(encoding="utf-8"))
    if review.get("version") != VERSION:
        raise ValueError("reviewed Fandom source version mismatch")
    result: dict[str, SourceCandidate] = {}
    for entry in review.get("selected", []):
        original_path = cached_reviewed_source(entry)
        generated_path = entry.get("generatedSourcePath")
        if generated_path:
            cache_path = Path(generated_path)
            if not cache_path.exists() or sha256(cache_path) != entry["generatedSourceSha256"]:
                raise ValueError(f'{entry["id"]}: generated enhancement hash mismatch')
            kind = "generated-enhancement"
        else:
            cache_path = original_path
            kind = "verified-database"
        result[entry["id"]] = SourceCandidate(
            kind=kind,
            location=entry["sourceUrl"],
            cache_path=cache_path,
            title=entry["fileTitle"],
            source_sha256=entry["sourceSha256"],
            original_path=original_path,
            metadata=entry,
        )
    return result


def reviewed_fandom_unavailable() -> dict[str, str]:
    if not FANDOM_REVIEW_PATH.exists():
        return {}
    review = json.loads(FANDOM_REVIEW_PATH.read_text(encoding="utf-8"))
    return {
        entry["id"]: entry["reason"]
        for entry in review.get("unavailable", [])
    }


def fandom_source(item: dict[str, Any], refresh_unavailable: bool = False) -> SourceCandidate | None:
    metadata_path = CACHE_ROOT / "fandom" / f"{item['id'].casefold()}.json"
    if metadata_path.exists():
        metadata = json.loads(metadata_path.read_text(encoding="utf-8"))
        cache_path = Path(metadata["cachePath"])
        if cache_path.exists():
            return SourceCandidate(
                kind="verified-database",
                location=metadata["sourceUrl"],
                cache_path=cache_path,
                title=metadata.get("title", ""),
            )
    unavailable_path = CACHE_ROOT / "fandom" / f"{item['id'].casefold()}.unavailable.json"
    if unavailable_path.exists() and not refresh_unavailable:
        return None
    legacy_images = [
        path for path in (CACHE_ROOT / "fandom").glob(f"{item['id'].casefold()}.*")
        if path.suffix.casefold() in CACHE_IMAGE_EXTENSIONS
    ]
    if legacy_images:
        cache_path = legacy_images[0]
        page_title = item.get("en") or item.get("expandedQuery") or item["id"]
        page_url = f"https://beyblade.fandom.com/wiki/{quote(page_title.replace(' ', '_'))}"
        metadata_path.write_text(json.dumps({
            "sourceUrl": page_url,
            "title": page_title,
            "cachePath": str(cache_path),
        }), encoding="utf-8")
        return SourceCandidate(
            kind="verified-database",
            location=page_url,
            cache_path=cache_path,
            title=page_title,
        )
    queries = [item.get("en"), item.get("expandedQuery"), item.get("name")]
    queries = list(dict.fromkeys(query for query in queries if query))
    best: tuple[float, dict[str, Any]] | None = None
    for query in queries:
        search = json_request({
            "action": "query",
            "list": "search",
            "srnamespace": "0",
            "srlimit": "10",
            "srsearch": query,
            "format": "json",
            "origin": "*",
        })
        for row in search.get("query", {}).get("search", []):
            score = title_similarity(query, row.get("title", ""))
            if best is None or score > best[0]:
                best = (score, row)
        if best and best[0] >= 0.96:
            break
    if not best or best[0] < 0.72:
        return None
    page = best[1]
    detail = json_request({
        "action": "query",
        "pageids": str(page["pageid"]),
        "prop": "pageimages|images",
        "piprop": "original",
        "imlimit": "500",
        "format": "json",
        "origin": "*",
    })
    pages = detail.get("query", {}).get("pages", {})
    resolved = pages.get(str(page["pageid"]), {})
    image_titles = [row.get("title") for row in resolved.get("images", []) if row.get("title")]
    original = resolved.get("original") or {}
    candidates: list[dict[str, Any]] = []
    if original.get("source"):
        candidates.append({**original, "title": page.get("title", "")})
    for start in range(0, len(image_titles), 50):
        batch = image_titles[start:start + 50]
        image_info = json_request({
            "action": "query",
            "titles": "|".join(batch),
            "prop": "imageinfo",
            "iiprop": "url|size|sha1|mime",
            "format": "json",
            "origin": "*",
        })
        for image_page in image_info.get("query", {}).get("pages", {}).values():
            info = (image_page.get("imageinfo") or [{}])[0]
            if info.get("url"):
                candidates.append({**info, "source": info["url"], "title": image_page.get("title", "")})
    target = " ".join(filter(None, [item.get("en"), item.get("expandedQuery")]))
    ranked = []
    for image in candidates:
        url = image.get("source") or image.get("url")
        width = int(image.get("width") or 0)
        height = int(image.get("height") or 0)
        if not url or min(width, height) < 180 or max(width, height) / min(width, height) > 1.45:
            continue
        title = image.get("title", "")
        ranked.append((title_similarity(target, title), min(width, height), image))
    if not ranked:
        unavailable_path.parent.mkdir(parents=True, exist_ok=True)
        unavailable_path.write_text(json.dumps({"checkedAt": "2026-08-19", "galleryImagesChecked": len(candidates)}), encoding="utf-8")
        return None
    original = max(ranked, key=lambda value: (value[0], value[1]))[2]
    url = original.get("source") or original.get("url")
    suffix = Path(url.split("?", 1)[0]).suffix.casefold() or ".img"
    cache_path = CACHE_ROOT / "fandom" / f"{item['id'].casefold()}{suffix}"
    if not cache_path.exists():
        cache_path.parent.mkdir(parents=True, exist_ok=True)
        cache_path.write_bytes(request_bytes(url))
    try:
        with Image.open(cache_path) as image:
            image.verify()
    except OSError:
        cache_path.unlink(missing_ok=True)
        return None
    metadata_path.write_text(json.dumps({
        "sourceUrl": url,
        "title": original.get("title") or page.get("title", ""),
        "cachePath": str(cache_path),
        "galleryImagesChecked": len(candidates),
    }), encoding="utf-8")
    return SourceCandidate(
        kind="verified-database",
        location=url,
        cache_path=cache_path,
        title=original.get("title") or page.get("title", ""),
    )


def source_for_item(
    item: dict[str, Any],
    local_sources: dict[str, SourceCandidate],
    reviewed_sources: dict[str, SourceCandidate],
    reviewed_unavailable: dict[str, str],
    refresh_unavailable: bool = False,
) -> tuple[SourceCandidate | None, str | None]:
    if item["id"] in reviewed_unavailable:
        return None, reviewed_unavailable[item["id"]]
    reviewed = reviewed_sources.get(item["id"])
    if reviewed:
        return reviewed, None
    local = local_sources.get(item["id"])
    if local:
        return local, None
    try:
        source = fandom_source(item, refresh_unavailable=refresh_unavailable)
    except Exception as error:  # Network/source failures remain explicit unavailable entries.
        return None, f"verified database lookup failed: {type(error).__name__}"
    if source:
        return source, None
    return None, "no exact isolated top-view source found after official and verified database checks"


def load_rembg():
    sys.path.insert(0, str(Path(".cache/codex-rembg").resolve()))
    os.environ.setdefault("U2NET_HOME", str(Path(".cache/rembg-models").resolve()))
    from rembg import new_session, remove

    return new_session("u2netp"), remove


def connected_light_alpha(image: Image.Image) -> np.ndarray:
    from scipy import ndimage

    rgb = np.asarray(image.convert("RGB"))
    minimum = rgb.min(axis=2)
    chroma = rgb.max(axis=2) - minimum
    foreground_seed = ((minimum < 245) | (chroma > 14)).astype(np.uint8)
    foreground_seed = ndimage.binary_opening(foreground_seed, structure=np.ones((3, 3)))
    foreground_seed = ndimage.binary_closing(foreground_seed, structure=np.ones((5, 5)))
    labels, count = ndimage.label(foreground_seed, structure=np.ones((3, 3)))
    if count < 1:
        raise ValueError("light-background extraction found no foreground")
    sizes = np.bincount(labels.ravel())
    sizes[0] = 0
    largest = int(np.argmax(sizes))
    mask = ndimage.binary_fill_holes(labels == largest).astype(np.uint8)
    return (mask * 255).astype(np.uint8)


def border_is_light(image: Image.Image) -> bool:
    rgb = np.asarray(image.convert("RGB"))
    border = np.concatenate((rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]), axis=0)
    minimum = border.min(axis=1)
    chroma = border.max(axis=1) - minimum
    return float(np.quantile(minimum, 0.25)) >= 235 and float(np.quantile(chroma, 0.75)) <= 18


def keep_largest_alpha_component(rgba: np.ndarray) -> np.ndarray:
    from scipy import ndimage

    alpha = rgba[:, :, 3]
    labels, count = ndimage.label(alpha > 8, structure=np.ones((3, 3)))
    if count < 1:
        raise ValueError("source contains no foreground")
    sizes = np.bincount(labels.ravel())
    sizes[0] = 0
    largest = int(np.argmax(sizes))
    keep = ndimage.binary_dilation(labels == largest, structure=np.ones((5, 5))).astype(np.uint8)
    result = rgba.copy()
    result[:, :, 3] = np.where(keep, alpha, 0).astype(np.uint8)
    result[result[:, :, 3] == 0, :3] = 0
    return result


def resize_premultiplied(image: Image.Image, size: tuple[int, int]) -> Image.Image:
    rgba = np.asarray(image.convert("RGBA"), dtype=np.float32)
    alpha = rgba[:, :, 3:4] / 255.0
    premultiplied = np.concatenate((rgba[:, :, :3] * alpha, rgba[:, :, 3:4]), axis=2)
    encoded = Image.fromarray(np.rint(premultiplied).clip(0, 255).astype(np.uint8), "RGBA")
    resized = np.asarray(encoded.resize(size, Image.Resampling.LANCZOS), dtype=np.float32)
    resized_alpha = resized[:, :, 3:4]
    rgb = np.zeros_like(resized[:, :, :3])
    np.divide(resized[:, :, :3] * 255.0, resized_alpha, out=rgb, where=resized_alpha > 0)
    return Image.fromarray(
        np.rint(np.concatenate((rgb, resized_alpha), axis=2)).clip(0, 255).astype(np.uint8),
        "RGBA",
    )


def foreground_box(image: Image.Image) -> tuple[int, int, int, int]:
    box = image.getchannel("A").point(lambda value: 255 if value > ALPHA_THRESHOLD else 0).getbbox()
    if box is None:
        raise ValueError("empty foreground")
    return box


def normalize(image: Image.Image) -> tuple[Image.Image, list[int]]:
    crop = image.convert("RGBA").crop(foreground_box(image.convert("RGBA")))
    for _ in range(4):
        scale = TARGET_FOREGROUND_SIZE / max(crop.size)
        crop = resize_premultiplied(
            crop,
            (max(1, round(crop.width * scale)), max(1, round(crop.height * scale))),
        )
        crop = crop.crop(foreground_box(crop))
        if max(crop.size) == TARGET_FOREGROUND_SIZE:
            break
    if max(crop.size) != TARGET_FOREGROUND_SIZE:
        raise ValueError(f"normalization failed: {crop.size}")
    left = (CANVAS_SIZE - crop.width) // 2
    top = (CANVAS_SIZE - crop.height) // 2
    canvas = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    canvas.alpha_composite(crop, (left, top))
    return canvas, list(foreground_box(canvas))


def source_rgba(candidate: SourceCandidate, rembg_session, rembg_remove) -> tuple[Image.Image, str]:
    with Image.open(candidate.cache_path) as source:
        source.load()
        if source.mode in {"RGBA", "LA"} and source.getchannel("A").getextrema()[0] < 250:
            rgba = np.asarray(source.convert("RGBA")).copy()
            method = "source-alpha"
        elif border_is_light(source):
            rgb = np.asarray(source.convert("RGB"))
            alpha = connected_light_alpha(source)
            rgba = np.dstack((rgb, alpha)).astype(np.uint8)
            method = "connected-light-background"
        else:
            removed = rembg_remove(
                source.convert("RGB"),
                session=rembg_session,
                alpha_matting=False,
                post_process_mask=True,
            ).convert("RGBA")
            alpha = np.asarray(removed.getchannel("A").filter(ImageFilter.GaussianBlur(0.55)))
            rgba = np.asarray(removed).copy()
            rgba[:, :, 3] = alpha
            method = "u2netp-no-matting"
    rgba = keep_largest_alpha_component(rgba)
    return Image.fromarray(rgba, "RGBA"), method


def generated_rgba_with_original_alpha(
    candidate: SourceCandidate,
    rembg_session,
    rembg_remove,
) -> tuple[Image.Image, str]:
    if candidate.original_path is None:
        raise ValueError("generated enhancement is missing its original alpha source")
    generated, _ = source_rgba(candidate, rembg_session, rembg_remove)
    original_candidate = SourceCandidate(
        kind="verified-database",
        location=candidate.location,
        cache_path=candidate.original_path,
        title=candidate.title,
    )
    original, original_method = source_rgba(original_candidate, rembg_session, rembg_remove)
    original_crop = original.crop(foreground_box(original))
    generated_crop = generated.crop(foreground_box(generated))
    generated_crop = resize_premultiplied(generated_crop, original_crop.size)
    generated_array = np.asarray(generated_crop.convert("RGBA")).copy()
    original_alpha = np.asarray(original_crop.getchannel("A"))
    generated_array[:, :, 3] = original_alpha
    generated_array[original_alpha == 0, :3] = 0
    return Image.fromarray(generated_array, "RGBA"), f"imagegen-detail-enhancement+{original_method}-alpha"


def output_path(item_id: str) -> Path:
    slug = item_id.casefold()
    return OUTPUT_ROOT / slug / f"{slug}.webp"


def selected_entry(
    item: dict[str, Any],
    candidate: SourceCandidate,
    destination: Path,
    bounds: list[int],
    removal_method: str,
    official_url: str | None,
) -> dict[str, Any]:
    entry: dict[str, Any] = {
        "id": item["id"],
        "image": destination.as_posix(),
        "sourceKind": candidate.kind,
        "sourceSha256": candidate.source_sha256 or sha256(candidate.cache_path),
        "outputSha256": sha256(destination),
        "sourceTitle": candidate.title,
        "productNo": item.get("productNo", ""),
        "combination": item.get("en", ""),
        "backgroundRemoval": removal_method,
        "normalizedForegroundBox": bounds,
        "alphaReview": {
            "canvasSize": [CANVAS_SIZE, CANVAS_SIZE],
            "targetForegroundSize": TARGET_FOREGROUND_SIZE,
            "transparentCorners": True,
            "singleConnectedSubject": True,
            "reviewedAt": "2026-08-19",
        },
    }
    if candidate.kind == "local":
        entry["sourceRoot"] = "D:/베이블레이드/1. 완구/자료/3. 베이블레이드 버스트"
        entry["sourceRelativePath"] = candidate.location
    else:
        entry["sourceUrl"] = candidate.location
        entry["checkedAt"] = candidate.checked_at
    if candidate.metadata:
        metadata = candidate.metadata
        entry["fandomPageUrl"] = metadata["fandomPageUrl"]
        entry["fandomFilePageUrl"] = metadata["filePageUrl"]
        entry["mediawikiSha1"] = metadata["mediawikiSha1"]
        entry["sourceDimensions"] = [metadata["sourceWidth"], metadata["sourceHeight"]]
        entry["strictFrontReviewed"] = metadata["strictFrontReviewed"]
        entry["exactCombinationReviewed"] = metadata["exactCombinationReviewed"]
        entry["assembledProductReviewed"] = metadata["assembledProductReviewed"]
        entry["processingClass"] = metadata["processingClass"]
        if candidate.kind == "generated-enhancement":
            entry["generatedEnhancement"] = True
            entry["generatedSourcePath"] = metadata["generatedSourcePath"]
            entry["generatedSourceSha256"] = metadata["generatedSourceSha256"]
            entry["generationMode"] = metadata["generationMode"]
            entry["generationPrompt"] = metadata["generationPrompt"]
            entry["originalAlphaReapplied"] = metadata["originalAlphaReapplied"]
            entry["generationReviewedAt"] = metadata["generationReviewedAt"]
    entry["searchAudit"] = {
        "officialProductsPage": OFFICIAL_PRODUCTS_PAGE,
        "officialProductImage": official_url,
        "officialOutcome": "checked; no safer isolated exact-combination source selected"
        if candidate.kind != "local"
        else "local exact-combination source selected before web fallback",
        "databaseOutcome": "exact title and assembled top-view gallery image selected"
        if candidate.kind in {"verified-database", "generated-enhancement"}
        else "not needed",
        "shopOutcome": "not needed",
    }
    return entry


def unavailable_entry(item: dict[str, Any], reason: str, official_url: str | None) -> dict[str, Any]:
    return {
        "id": item["id"],
        "productNo": item.get("productNo", ""),
        "combination": item.get("en", ""),
        "reason": reason,
        "searchAudit": {
            "officialProductsPage": OFFICIAL_PRODUCTS_PAGE,
            "officialProductImage": official_url,
            "officialOutcome": "checked; no safe isolated exact-combination source",
            "databaseOutcome": "no exact verified assembled top-view source",
            "shopOutcome": "no verified watermark-free exact source retained",
            "checkedAt": "2026-08-19",
        },
    }


def main() -> int:
    args = parse_args()
    runtime = json.loads(RUNTIME_PATH.read_text(encoding="utf-8"))
    parts_by_id = {part["id"]: part for part in runtime["partItems"]}
    items = []
    for source_item in runtime["beyItems"]:
        item = dict(source_item)
        part_names = [
            parts_by_id[part_id].get("en", "")
            for part_id in item.get("parts", [])
            if part_id in parts_by_id
        ]
        item["expandedQuery"] = " ".join(name for name in part_names if name)
        items.append(item)
    if len(items) != 433:
        raise ValueError(f"expected 433 Burst Beys, found {len(items)}")
    requested = set(args.ids or ())
    if requested:
        items = [item for item in items if item["id"] in requested]
    local_sources = explicit_local_sources(items)
    reviewed_sources = reviewed_fandom_sources()
    reviewed_unavailable = reviewed_fandom_unavailable()
    official = official_image_map()

    resolved: dict[str, tuple[SourceCandidate | None, str | None]] = {}
    with ThreadPoolExecutor(max_workers=max(1, args.workers)) as executor:
        futures = {
            executor.submit(
                source_for_item,
                item,
                local_sources,
                reviewed_sources,
                reviewed_unavailable,
                args.refresh_unavailable,
            ): item
            for item in items
        }
        for index, future in enumerate(as_completed(futures), 1):
            item = futures[future]
            resolved[item["id"]] = future.result()
            if index % 25 == 0 or index == len(futures):
                print(f"source lookup {index}/{len(futures)}", flush=True)

    if args.probe_only:
        counts: dict[str, int] = {}
        unavailable = []
        for item in items:
            candidate, reason = resolved[item["id"]]
            key = candidate.kind if candidate else "unavailable"
            counts[key] = counts.get(key, 0) + 1
            if not candidate:
                unavailable.append((item["id"], reason))
        print(json.dumps({"counts": counts, "unavailable": unavailable}, ensure_ascii=False, indent=2))
        return 0

    if not args.write:
        raise SystemExit("Use --probe-only or --write")

    rembg_session, rembg_remove = load_rembg()
    selected: list[dict[str, Any]] = []
    unavailable: list[dict[str, Any]] = []
    for index, item in enumerate(items, 1):
        candidate, reason = resolved[item["id"]]
        product_no = item.get("productNo", "")
        official_url = official.get(product_no)
        if candidate is None:
            output_path(item["id"]).unlink(missing_ok=True)
            unavailable.append(unavailable_entry(item, reason or "no source", official_url))
            continue
        destination = output_path(item["id"])
        try:
            if candidate.kind == "generated-enhancement":
                rgba, method = generated_rgba_with_original_alpha(candidate, rembg_session, rembg_remove)
            else:
                rgba, method = source_rgba(candidate, rembg_session, rembg_remove)
            normalized, bounds = normalize(rgba)
            destination.parent.mkdir(parents=True, exist_ok=True)
            normalized.save(destination, "WEBP", lossless=True, method=6, exact=True)
            selected.append(selected_entry(
                item,
                candidate,
                destination,
                bounds,
                method,
                official_url,
            ))
        except Exception as error:
            destination.unlink(missing_ok=True)
            unavailable.append(unavailable_entry(
                item,
                f"source processing rejected: {type(error).__name__}: {error}",
                official_url,
            ))
        if index % 20 == 0 or index == len(items):
            print(f"image processing {index}/{len(items)}", flush=True)

    selected.sort(key=lambda entry: entry["id"])
    unavailable.sort(key=lambda entry: entry["id"])
    if requested and CONFIG_PATH.exists():
        existing = json.loads(CONFIG_PATH.read_text(encoding="utf-8"))
        selected = [
            entry for entry in existing.get("selected", [])
            if entry["id"] not in requested
        ] + selected
        unavailable = [
            entry for entry in existing.get("unavailable", [])
            if entry["id"] not in requested
        ] + unavailable
        selected.sort(key=lambda entry: entry["id"])
        unavailable.sort(key=lambda entry: entry["id"])
    manifest = {
        "version": VERSION,
        "normalization": {
            "method": "premultiplied-alpha-uniform-long-edge",
            "canvasSize": CANVAS_SIZE,
            "targetForegroundSize": TARGET_FOREGROUND_SIZE,
            "center": [223.5, 223.5],
            "alphaThreshold": ALPHA_THRESHOLD,
            "resample": "lanczos",
            "outputFormat": "lossless-webp",
        },
        "sourcePolicy": {
            "localFirst": True,
            "localRoot": "D:/베이블레이드/1. 완구/자료/3. 베이블레이드 버스트",
            "webOrder": ["official", "verified-database", "shop"],
            "generatedImagesAllowed": True,
            "generatedImagePolicy": "low-resolution exact strict-front sources only; original alpha reapplied",
            "unsafeSourcesRemainUnavailable": True,
            "strictFrontDefinition": "orthographic vertical top view with no visible side thickness or perspective",
            "manualPixelEvidenceRequired": True,
        },
        "selected": selected,
        "unavailable": unavailable,
    }
    expected_total = 433 if requested else len(items)
    if len(selected) + len(unavailable) != expected_total:
        raise ValueError("manifest classification is incomplete")
    CONFIG_PATH.write_text(f"{json.dumps(manifest, ensure_ascii=False, indent=2)}\n", encoding="utf-8")
    print(f"wrote {len(selected)} selected / {len(unavailable)} unavailable")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
