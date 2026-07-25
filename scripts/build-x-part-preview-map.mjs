import { Buffer } from "node:buffer";
import { createHash } from "node:crypto";
import { mkdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { xImageMappings } from "../data/source/x-images.mjs";

const args = new Set(process.argv.slice(2));
const WRITE = args.has("--write");
const EMIT_SOURCE = args.has("--emit-source");
const SOURCE_REPORT_PATH = path.resolve(".cache/x-image-map-candidates.json");
const OUTPUT_REPORT_PATH = path.resolve(".cache/x-part-preview-map.json");
const SOURCE_CACHE_ROOT = path.resolve(".cache/x-part-preview-sources");
const SOURCE_OUTPUT_PATH = path.resolve("data/source/x-part-previews.mjs");
const OFFICIAL_LINEUP_ROOT = "https://beyblade.takaratomy.co.jp/beyblade-x/lineup";
const OFFICIAL_IMAGE_ROOT = `${OFFICIAL_LINEUP_ROOT}/_image`;
const downloadConcurrency = 8;
const UNVERIFIED_PART_SEQUENCE_BEY_IDS = new Set([
  "BEY-X-BX-00-DRAN-DAGGER-2-80GP",
  "BEY-X-BX-00-STORM-SPRIGGAN-2-70M",
  "BEY-X-BX-07-DRAN-SWORD-3-60F",
  "BEY-X-BX-22-DRAN-SWORD-3-60F",
  "BEY-X-BX-37-BEAR-SCRATCH-5-60F",
  "BEY-X-CX-00-EVA-ARC-B-0-70E",
  "BEY-X-CX-00-EVA-BRAVE-A-1-70V",
  "BEY-X-CX-00-EVA-BRUSH-T-2-70A",
  "BEY-X-CX-00-TIGA-RAGE-FT-3-60T",
  "BEY-X-CX-09-SOL-ECLIPSE-D-5-70TK",
  "BEY-X-CX-11-EMPEROR-MIGHT-H-OP",
  "BEY-X-CX-11-GOLEM-ROCK-M-85HN",
  "BEY-X-CX-11-SHARK-GILL-5-60FB",
  "BEY-X-UX-00-DRAN-BUSTER-1-60A",
  "BEY-X-UX-00-DRAN-BUSTER-3-70N",
  "BEY-X-UX-00-DRAN-SWORD-4-80DB",
  "BEY-X-UX-00-HELLS-HAMMER-3-70H",
  "BEY-X-UX-10-KNIGHT-MAIL-3-85BS"
]);
const UNVERIFIED_PART_CONTEXTS = new Set([
  "BEY-X-UX-19-BULLET-GRIFFON-H::PART-X-BIT-H"
]);

const xBeys = beyItems.filter(item => item.series === "x");
const xParts = partItems.filter(item => item.series === "x");
const itemById = new Map([...xBeys, ...xParts].map(item => [item.id, item]));
const imageMappingById = new Map(xImageMappings.map(entry => [entry.id, entry]));

const sha256 = bytes => createHash("sha256").update(bytes).digest("hex");
const sourceFileName = entry => {
  const source = entry?.sourcePath || entry?.sourceUrl || "";
  const pathname = source.startsWith("http") ? new URL(source).pathname : source;
  return path.posix.basename(pathname).replace(/^\d+_/, "");
};
const sourceFolderName = entry => {
  if (!entry?.sourcePath) return "";
  return path.posix.basename(path.posix.dirname(entry.sourcePath));
};
const contextKey = (beyId, partId) => `${beyId}::${partId}`;
const outputPath = (beyId, partId) =>
  `assets/images/x/part-previews/${beyId.toLowerCase()}/${partId.toLowerCase()}.webp`;
const hasCustomBladeParts = bey => (bey.parts || []).some(partId => itemById.get(partId)?.xBladeRole);
const officialPageUrl = slug => `${OFFICIAL_LINEUP_ROOT}/${slug}.html`;
const officialImageUrl = fileName => `${OFFICIAL_IMAGE_ROOT}/${fileName}`;

function fullResolutionImageNames(html) {
  const names = [];
  const seen = new Set();
  const pattern = /src=["']_image\/([^"']+@1\.png)["']/gi;
  for (const match of html.matchAll(pattern)) {
    const name = match[1];
    if (seen.has(name)) continue;
    seen.add(name);
    names.push(name);
  }
  return names;
}

async function fetchBytes(url) {
  const response = await fetch(url, {
    headers: {
      "User-Agent": "beystadium-image-audit/1.0"
    }
  });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return Buffer.from(await response.arrayBuffer());
}

async function downloadSource(url) {
  const urlKey = sha256(Buffer.from(url)).slice(0, 16);
  const destination = path.join(SOURCE_CACHE_ROOT, `${urlKey}-${path.basename(new URL(url).pathname)}`);
  try {
    const bytes = await readFile(destination);
    return { sourceFile: destination, sourceSha256: sha256(bytes) };
  } catch {
    const bytes = await fetchBytes(url);
    await mkdir(SOURCE_CACHE_ROOT, { recursive: true });
    await writeFile(destination, bytes);
    return { sourceFile: destination, sourceSha256: sha256(bytes) };
  }
}

async function mapConcurrent(values, worker, concurrency = downloadConcurrency) {
  const results = new Array(values.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: Math.min(concurrency, values.length) }, async () => {
    while (cursor < values.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await worker(values[index], index);
    }
  }));
  return results;
}

function pageForMapping(mapping, pages, pageByFolder) {
  const folder = sourceFolderName(mapping);
  if (folder && pageByFolder.has(folder)) return pageByFolder.get(folder);
  return pages.find(page => page.beyIds?.includes(mapping.id)) || null;
}

function unavailableEntries(bey, reason) {
  return (bey.parts || []).map(partId => ({
    beyId: bey.id,
    partId,
    reason
  }));
}

async function discover() {
  const sourceReport = JSON.parse(await readFile(SOURCE_REPORT_PATH, "utf8"));
  const pages = sourceReport.pages || [];
  const pageByFolder = new Map(pages.filter(page => page.sourceFolder).map(page => [page.sourceFolder, page]));
  const pageCache = new Map();
  const pageInfo = async page => {
    if (!page) return null;
    if (!pageCache.has(page.slug)) {
      pageCache.set(page.slug, (async () => {
        const response = await fetch(officialPageUrl(page.slug), {
          headers: { "User-Agent": "beystadium-image-audit/1.0" }
        });
        if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
        return {
          page,
          imageNames: fullResolutionImageNames(await response.text()),
          supportsMultiBeyPartGroups: null
        };
      })());
    }
    return pageCache.get(page.slug);
  };

  const planned = [];
  const unavailable = [];
  for (const bey of xBeys) {
    if (UNVERIFIED_PART_SEQUENCE_BEY_IDS.has(bey.id)) {
      unavailable.push(...unavailableEntries(bey, "official-part-sequence-is-not-one-to-one-with-catalog-components"));
      continue;
    }
    const mapping = imageMappingById.get(bey.id);
    if (!mapping) {
      unavailable.push(...unavailableEntries(bey, "official-bey-image-unavailable"));
      continue;
    }
    const page = pageForMapping({ ...mapping, id: bey.id }, pages, pageByFolder);
    if (!page) {
      unavailable.push(...unavailableEntries(bey, "official-product-page-unresolved"));
      continue;
    }

    let info;
    try {
      info = await pageInfo(page);
    } catch {
      unavailable.push(...unavailableEntries(bey, "official-product-page-unavailable"));
      continue;
    }
    const assembledName = sourceFileName(mapping);
    const assembledIndex = info.imageNames.indexOf(assembledName);
    if (assembledIndex < 0) {
      unavailable.push(...unavailableEntries(bey, "reviewed-bey-source-not-on-product-page"));
      continue;
    }

    if ((page.beyIds || []).length > 1 && info.supportsMultiBeyPartGroups === null) {
      const reviewedBeys = page.beyIds
        .map(id => ({ bey: itemById.get(id), mapping: imageMappingById.get(id) }))
        .filter(entry => entry.bey?.type === "bey" && entry.mapping)
        .map(entry => ({
          ...entry,
          index: info.imageNames.indexOf(sourceFileName(entry.mapping))
        }))
        .filter(entry => entry.index >= 0)
        .sort((left, right) => left.index - right.index);
      info.supportsMultiBeyPartGroups = reviewedBeys.slice(0, -1).some((entry, index) => {
        const next = reviewedBeys[index + 1];
        const requiredImages = (entry.bey.parts || []).length + (hasCustomBladeParts(entry.bey) ? 1 : 0);
        return next.index - entry.index - 1 >= requiredImages;
      });
    }
    if ((page.beyIds || []).length > 1 && !info.supportsMultiBeyPartGroups) {
      unavailable.push(...unavailableEntries(bey, "official-multi-bey-page-has-no-verified-part-blocks"));
      continue;
    }

    const otherBeyIndexes = page.beyIds
      .filter(id => id !== bey.id)
      .map(id => info.imageNames.indexOf(sourceFileName(imageMappingById.get(id))))
      .filter(index => index > assembledIndex);
    const boundary = otherBeyIndexes.length ? Math.min(...otherBeyIndexes) : info.imageNames.length;
    const partCount = (bey.parts || []).length;
    // CX pages insert one assembled-blade render before the split parts.
    // Ordinary multi-Bey sets can do the same for a group's first Bey, so use
    // the reviewed Bey boundaries to skip that group's extra leading render.
    let offset = hasCustomBladeParts(bey) ? 2 : 1;
    if (!hasCustomBladeParts(bey) && (page.beyIds || []).length > 1) {
      const assembledStem = assembledName.replace(/@1\.png$/i, "");
      const groupPrefix = assembledStem.replace(/_\d{2}$/, "");
      const groupedImages = info.imageNames
        .slice(assembledIndex + 1, boundary)
        .filter(name => new RegExp(`^${groupPrefix.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}_\\d{2}@1\\.png$`, "i").test(name));
      offset += Math.max(0, groupedImages.length - partCount);
    }
    const candidateNames = info.imageNames.slice(
      assembledIndex + offset,
      assembledIndex + offset + partCount
    );
    if (candidateNames.length !== partCount
      || assembledIndex + offset + candidateNames.length > boundary) {
      unavailable.push(...unavailableEntries(bey, "official-individual-part-images-unavailable"));
      continue;
    }

    for (const [index, partId] of bey.parts.entries()) {
      if (UNVERIFIED_PART_CONTEXTS.has(contextKey(bey.id, partId))) {
        unavailable.push({
          beyId: bey.id,
          partId,
          reason: "official-part-sequence-is-not-one-to-one-with-catalog-components"
        });
        continue;
      }
      planned.push({
        beyId: bey.id,
        partId,
        sourceUrl: officialImageUrl(candidateNames[index])
      });
    }
  }

  const downloaded = await mapConcurrent(planned, async entry => {
    try {
      return { ...entry, ...await downloadSource(entry.sourceUrl) };
    } catch {
      return {
        beyId: entry.beyId,
        partId: entry.partId,
        reason: "official-individual-part-image-download-failed"
      };
    }
  });

  const mappings = [];
  for (const entry of downloaded) {
    if (entry.reason) {
      unavailable.push(entry);
      continue;
    }
    const representative = imageMappingById.get(entry.partId);
    const reuseRepresentative = representative?.sourceSha256 === entry.sourceSha256;
    mappings.push({
      beyId: entry.beyId,
      partId: entry.partId,
      image: reuseRepresentative ? representative.image : outputPath(entry.beyId, entry.partId),
      sourceUrl: entry.sourceUrl,
      sourceFile: entry.sourceFile,
      sourceSha256: entry.sourceSha256,
      reuseRepresentative
    });
  }

  const mappedKeys = new Set(mappings.map(entry => contextKey(entry.beyId, entry.partId)));
  const unavailableByKey = new Map(unavailable.map(entry => [contextKey(entry.beyId, entry.partId), entry]));
  const contexts = xBeys.flatMap(bey => [
    ...(bey.parts || []),
    ...(bey.bundledParts || [])
  ].map(partId => ({ beyId: bey.id, partId })));
  for (const context of contexts) {
    const key = contextKey(context.beyId, context.partId);
    if (!mappedKeys.has(key) && !unavailableByKey.has(key)) {
      unavailableByKey.set(key, { ...context, reason: "official-individual-part-image-unavailable" });
    }
  }

  const sortedMappings = mappings.sort((left, right) =>
    contextKey(left.beyId, left.partId).localeCompare(contextKey(right.beyId, right.partId)));
  const sortedUnavailable = [...unavailableByKey.values()].sort((left, right) =>
    contextKey(left.beyId, left.partId).localeCompare(contextKey(right.beyId, right.partId)));
  const report = {
    sourceRoot: "",
    totals: {
      beys: xBeys.length,
      contexts: contexts.length,
      mapped: sortedMappings.length,
      newOutputs: sortedMappings.filter(entry => !entry.reuseRepresentative).length,
      reusedRepresentative: sortedMappings.filter(entry => entry.reuseRepresentative).length,
      unavailable: sortedUnavailable.length
    },
    mappings: sortedMappings,
    selected: sortedMappings
      .filter(entry => !entry.reuseRepresentative)
      .map(entry => ({
        id: contextKey(entry.beyId, entry.partId),
        image: entry.image,
        source: entry.sourceUrl,
        sourceFile: entry.sourceFile,
        sourceSha256: entry.sourceSha256
      })),
    unavailable: sortedUnavailable
  };
  if (WRITE) {
    await mkdir(path.dirname(OUTPUT_REPORT_PATH), { recursive: true });
    await writeFile(OUTPUT_REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  }
  return report;
}

async function emitSource() {
  const report = JSON.parse(await readFile(OUTPUT_REPORT_PATH, "utf8"));
  const mappings = [];
  for (const entry of report.mappings) {
    const output = path.resolve(entry.image);
    await stat(output);
    const outputSha256 = sha256(await readFile(output));
    mappings.push({
      beyId: entry.beyId,
      partId: entry.partId,
      image: entry.image,
      sourceUrl: entry.sourceUrl,
      sourceSha256: entry.sourceSha256,
      outputSha256
    });
  }
  const moduleSource = `const xPartPreviewMappings = ${JSON.stringify(mappings, null, 2)};\n\n`
    + `const xPartPreviewUnavailable = ${JSON.stringify(report.unavailable, null, 2)};\n\n`
    + `function applyXPartPreviewImages(items) {\n`
    + `  const previewsByBeyId = new Map();\n`
    + `  for (const entry of xPartPreviewMappings) {\n`
    + `    if (!previewsByBeyId.has(entry.beyId)) previewsByBeyId.set(entry.beyId, {});\n`
    + `    previewsByBeyId.get(entry.beyId)[entry.partId] = entry.image;\n`
    + `  }\n`
    + `  for (const item of items) {\n`
    + `    const previews = previewsByBeyId.get(item.id);\n`
    + `    if (previews) item.partPreviewImages = previews;\n`
    + `  }\n`
    + `}\n\n`
    + `export { xPartPreviewMappings, xPartPreviewUnavailable, applyXPartPreviewImages };\n`;
  await writeFile(SOURCE_OUTPUT_PATH, moduleSource);
  return {
    ...report.totals,
    reviewed: mappings.length
  };
}

const result = EMIT_SOURCE ? await emitSource() : await discover();
process.stdout.write(`${JSON.stringify(result.totals || result, null, 2)}\n`);
if (!WRITE && !EMIT_SOURCE) {
  process.stdout.write(`Use --write to save ${OUTPUT_REPORT_PATH}\n`);
}
