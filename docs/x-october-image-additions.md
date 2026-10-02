# BX-52 / BX-53 catalog images

Eight official images added on 2026-10-02. Product pages:
- https://beyblade.takaratomy.co.jp/beyblade-x/lineup/bx52.html
- https://beyblade.takaratomy.co.jp/beyblade-x/lineup/bx53.html

The exact official URLs and original SHA-256 values are recorded in `x-images.mjs`.
Four whole-Bey top views are explicitly classified in `x-bey-primary-images.json`.

Processing uses `process-x-images.py`, rembg's `u2netp` model, alpha matting disabled,
largest-component cleanup, and original source RGB preservation. Outputs are lossless
448×448 transparent WebPs. Whole-Bey foregrounds are normalized to 360px using the
existing premultiplied-alpha normalizer; parts retain their source scale.

Verified physical openings on the Wizard Arrow and Knight Shield whole-Bey photos
use the existing `sourceClearPoints` correction. The angled Wizard Arrow blade's
reflective metal was partly removed by segmentation; `sourceRestorePoints` restores
only the source-connected bright metal regions to opaque alpha. This does not paint
or regenerate RGB. Other reflective/translucent areas were retained conservatively.

All eight outputs were compared with originals on white, dark, and checker backgrounds.
Source URLs/hashes, processing settings, output hashes, and alpha statistics remain
in the source registries and review records. No previously registered asset changed.

For reproduction, pass the eight mapping entries as a `selected` report to
`process-x-images.py`; retain their processing settings, including mask correction
points. Then use `normalized_image` from `normalize-x-bey-front-images.py` for the
four whole-Bey outputs and update their pre/post-normalization hashes and boxes.
The full map builder additionally requires its original downloader manifest/tree.

Checks: `pnpm test:x-images`, `pnpm test:x-bey-primary-images`,
`node --test tests/x-october-images.test.mjs`, and
`python tests/x-image-mask.test.py` (Pillow and NumPy required).

The twelve Bey-specific part-preview contexts are now covered as well. Four reuse
identical-source catalog cutouts (Luster blade, LC, Wizard V2 blade, Knight V2 blade).
Eight new contextual images use the exact BX-52/BX-53 edition's individual photos,
including the blue/cyan Aero blade, each ratchet color, and cyan/yellow/green bits.
All are `official-individual`; no recoloring or assembled-view fallback is used.

Reproduce those eight new contextual files with:
`python scripts/process-x-images.py --report data/source/x-october-part-preview-sources.json`
The report retains source hashes, mask corrections and source foreground boxes.
Run the same command with `--validate-only` to audit native-scale visible RGB
against the downloaded official originals. All eight passed exact RGB comparison.

The Luster ratchet's bright outer-ring patch and a small reflective Aero blade
patch use reviewed restore points. Ratchet clear points remove only the visible
through-opening, preserving its inner wall and translucent plastic.

Part-preview coverage is now 755 mappings plus 55 existing unavailable contexts,
accounting for all 810 contexts. There are 475 dedicated contextual paths and
940 total X WebP assets. Existing assets and unavailable reasons are unchanged.
