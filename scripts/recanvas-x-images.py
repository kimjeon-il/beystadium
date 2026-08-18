from __future__ import annotations

import argparse
import hashlib
import os
import shutil
import stat
import tempfile
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from pathlib import Path

from PIL import Image


CANVAS_SIZE = 448
MIN_MARGIN = 6
MAX_FOREGROUND_SIZE = CANVAS_SIZE - MIN_MARGIN * 2


@dataclass(frozen=True)
class Migration:
    source: Path
    destination: Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Reorganize X images and center their unchanged foreground on 448px canvases."
    )
    parser.add_argument("--write", action="store_true", help="replace the current X image layout")
    parser.add_argument(
        "--root",
        type=Path,
        default=Path("assets/images/x"),
        help="X image root relative to the current working directory",
    )
    return parser.parse_args()


def destination_for_part(root: Path, source: Path) -> Path:
    stem = source.stem
    for part_type in ("blade", "ratchet", "bit"):
        if stem.startswith(f"part-x-{part_type}-"):
            return root / "parts" / part_type / f"{stem}.webp"
    raise ValueError(f"unsupported X part filename: {source}")


def discover_migrations(root: Path) -> list[Migration]:
    migrations = [
        Migration(source, root / "beys" / source.stem / f"{source.stem}.webp")
        for source in sorted((root / "beys").glob("*.webp"))
    ]
    migrations.extend(
        Migration(source, destination_for_part(root, source))
        for source in sorted((root / "parts").glob("*.webp"))
    )
    preview_root = root / "part-previews"
    if preview_root.exists():
        migrations.extend(
            Migration(
                source,
                root / "beys" / source.parent.name / "parts" / source.name,
            )
            for source in sorted(preview_root.glob("*/*.webp"))
        )
    destinations = [migration.destination for migration in migrations]
    if len(destinations) != len(set(destinations)):
        raise ValueError("duplicate X image migration destinations")
    return migrations


def foreground_crop(image: Image.Image) -> Image.Image:
    rgba = image.convert("RGBA")
    bbox = rgba.getchannel("A").getbbox()
    if bbox is None:
        raise ValueError("empty foreground mask")
    foreground = rgba.crop(bbox)
    if foreground.width > MAX_FOREGROUND_SIZE or foreground.height > MAX_FOREGROUND_SIZE:
        raise ValueError(
            f"foreground {foreground.width}x{foreground.height} exceeds "
            f"{MAX_FOREGROUND_SIZE}px"
        )
    return foreground


def foreground_digest(image: Image.Image) -> str:
    foreground = foreground_crop(image)
    header = f"{foreground.width}x{foreground.height}:".encode()
    return hashlib.sha256(header + foreground.tobytes()).hexdigest()


def center_foreground(source: Path, destination: Path) -> None:
    with Image.open(source) as image:
        before_digest = foreground_digest(image)
        foreground = foreground_crop(image)
    canvas = Image.new("RGBA", (CANVAS_SIZE, CANVAS_SIZE), (0, 0, 0, 0))
    offset = (
        (CANVAS_SIZE - foreground.width) // 2,
        (CANVAS_SIZE - foreground.height) // 2,
    )
    canvas.paste(foreground, offset)
    destination.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(
        destination,
        format="WEBP",
        lossless=True,
        quality=100,
        method=4,
        exact=True,
    )
    with Image.open(destination) as result:
        if result.size != (CANVAS_SIZE, CANVAS_SIZE):
            raise ValueError(f"{source}: output canvas is not {CANVAS_SIZE}px")
        if foreground_digest(result) != before_digest:
            raise ValueError(f"{source}: foreground pixels changed")
        bbox = result.convert("RGBA").getchannel("A").getbbox()
    if bbox is None:
        raise ValueError(f"{source}: output foreground is empty")
    left, top, right, bottom = bbox
    margins = (left, top, CANVAS_SIZE - right, CANVAS_SIZE - bottom)
    if min(margins) < MIN_MARGIN:
        raise ValueError(f"{source}: output margin is too small {margins}")
    if abs(margins[0] - margins[2]) > 1 or abs(margins[1] - margins[3]) > 1:
        raise ValueError(f"{source}: output foreground is not centered {margins}")


def resolved_within(path: Path, parent: Path) -> bool:
    try:
        path.resolve().relative_to(parent.resolve())
        return True
    except ValueError:
        return False


def remove_empty_legacy_preview_root(root: Path) -> None:
    preview_root = root / "part-previews"
    if not preview_root.exists():
        return
    if not resolved_within(preview_root, root):
        raise ValueError(f"refusing to remove directory outside X image root: {preview_root}")
    legacy_files = [path for path in preview_root.rglob("*") if path.is_file()]
    if legacy_files:
        raise ValueError(f"legacy preview directory still contains {len(legacy_files)} files")

    def remove_readonly(function, file_path, _error) -> None:
        os.chmod(file_path, stat.S_IWRITE)
        function(file_path)

    shutil.rmtree(preview_root, onexc=remove_readonly)


def replace_layout(root: Path, migrations: list[Migration], staging_root: Path) -> None:
    for migration in migrations:
        if not resolved_within(migration.source, root):
            raise ValueError(f"refusing to remove file outside X image root: {migration.source}")
        staged = staging_root / migration.destination.relative_to(root)
        migration.destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(staged, migration.destination)
    for migration in migrations:
        migration.source.unlink()
    remove_empty_legacy_preview_root(root)


def validate_current_layout(root: Path) -> int:
    files = sorted(root.rglob("*.webp"))
    for file_path in files:
        with Image.open(file_path) as image:
            if image.size != (CANVAS_SIZE, CANVAS_SIZE):
                raise ValueError(f"{file_path}: expected {CANVAS_SIZE}x{CANVAS_SIZE}")
            foreground = foreground_crop(image)
            bbox = image.convert("RGBA").getchannel("A").getbbox()
        if bbox is None:
            raise ValueError(f"{file_path}: empty foreground mask")
        left, top, right, bottom = bbox
        margins = (left, top, CANVAS_SIZE - right, CANVAS_SIZE - bottom)
        if min(margins) < MIN_MARGIN:
            raise ValueError(f"{file_path}: insufficient transparent margin {margins}")
        if abs(margins[0] - margins[2]) > 1 or abs(margins[1] - margins[3]) > 1:
            raise ValueError(f"{file_path}: foreground is not centered {margins}")
        if foreground.width > MAX_FOREGROUND_SIZE or foreground.height > MAX_FOREGROUND_SIZE:
            raise ValueError(f"{file_path}: foreground exceeds the fixed canvas policy")
    print(f"validated {len(files)} fixed-canvas X images")
    return len(files)


def main() -> int:
    args = parse_args()
    root = args.root.resolve()
    migrations = discover_migrations(root)
    if not migrations:
        count = validate_current_layout(root)
        if count != 908:
            raise ValueError(f"expected 908 X images, found {count}")
        if args.write:
            remove_empty_legacy_preview_root(root)
        return 0
    if len(migrations) != 908:
        raise ValueError(f"expected 908 legacy X images, found {len(migrations)}")
    with tempfile.TemporaryDirectory(prefix="beystadium-x-images-") as temp_directory:
        staging_root = Path(temp_directory)
        def prepare(migration: Migration) -> Migration:
            staged = staging_root / migration.destination.relative_to(root)
            center_foreground(migration.source, staged)
            return migration

        completed = 0
        with ThreadPoolExecutor(max_workers=8) as executor:
            futures = [executor.submit(prepare, migration) for migration in migrations]
            for future in as_completed(futures):
                migration = future.result()
                completed += 1
                print(
                    f"[{completed}/{len(migrations)}] prepared {migration.destination}",
                    flush=True,
                )
        if args.write:
            replace_layout(root, migrations, staging_root)
            validate_current_layout(root)
            print("replaced legacy X image layout")
        else:
            print("dry run complete; use --write to replace the legacy layout")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
