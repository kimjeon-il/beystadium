import { Buffer } from "node:buffer";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, writeFile } from "node:fs/promises";
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
const VERIFIED_PART_SOURCE_GROUPS = [
  ["BEY-X-BX-00-STORM-SPRIGGAN-2-70M", "bx00-ss", [1, 2, 3]],
  ["BEY-X-BX-07-DRAN-SWORD-3-60F", "bx07", [3, 4, 5]],
  ["BEY-X-BX-22-DRAN-SWORD-3-60F", "bx22", [2, 3, 4]],
  ["BEY-X-BX-37-BEAR-SCRATCH-5-60F", "bx37", [4, 5, 6]],
  ["BEY-X-BX-14-01-SHARK-EDGE-3-60LF", "bx14", [7, 8, 9]],
  ["BEY-X-BX-16-01-VIPER-TAIL-5-80O", "bx16", [5, 6, 7]],
  ["BEY-X-BX-24-01-WYVERN-GALE-5-80GB", "bx24", [7, null, 8]],
  ["BEY-X-BX-27-01-SPHINX-COWL-9-80GN", "bx27", [5, 6, 7]],
  ["BEY-X-BX-31-01-TYRANNO-BEAT-4-70Q", "bx31", [7, 8, 9]],
  ["BEY-X-UX-05-01-NINJA-SHADOW-1-80MN", "ux05", [5, 6, 7]],
  ["BEY-X-BX-35-01-BLACK-TURTLE-4-60D", "bx35", [8, null, 9]],
  ["BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F", "bx00-ld", [5, 7, 8]],
  ["BEY-X-BX-00-02-LIGHTNING-L-DRAGO-BARRAGE-1-60F", "bx00-ld", [6, 7, 8]],
  ["BEY-X-BX-36-01-WHALE-WAVE-5-80E", "bx36", [5, 6, 7]],
  ["BEY-X-UX-12-01-GHOST-CIRCLE-0-80GB", "ux12", [8, 9, 10]],
  ["BEY-X-BX-39-01-SHELTER-DRAKE-7-80GP", "bx39", [5, 6, 7]],
  ["BEY-X-BX-46-GORE-TACKLE-7-70T", "bx46", [5, 7, 9]],
  ["BEY-X-BX-46-COBALT-DRAKE-9-60R", "bx46", [6, 8, 10]],
  ["BEY-X-UX-16-01-CLOCK-MIRAGE-9-65B", "ux16", [5, 6, 8]],
  ["BEY-X-UX-18-01-MUMMY-CURSE-7-55W", "ux18", [8, 9, 10]],
  ["BEY-X-UX-13-GOLEM-ROCK-1-60UN", "ux13", [2, 3, 4]],
  ["BEY-X-UX-19-BULLET-GRIFFON-H", "ux19", [null, 5]],
  ["BEY-X-BX-50-01-HEAVENS-RING-0-80DS", "bx50", [8, 9, 10]],

  ["BEY-X-UX-00-DRAN-BUSTER-1-60A", "bx00-cc", [null, 4, 10]],
  ["BEY-X-UX-00-HELLS-HAMMER-3-70H", "ux00-hs_bc", [3, 4, 5]],
  ["BEY-X-UX-00-DRAN-SWORD-4-80DB", "bxa02", [2, 3, 4]],
  ["BEY-X-UX-00-DRAN-DAGGER-9-60LF", "bxa02", [6, 7, 8]],
  ["BEY-X-UX-00-DRAN-BUSTER-3-70N", "bxa02", [10, 11, 12]],
  ["BEY-X-UX-10-KNIGHT-MAIL-3-85BS", "ux10", [3, 4, 5]],

  ["BEY-X-BX-00-DRAGOON-STORM-4-60RA", "bx00-25set", [1, null, null]],
  ["BEY-X-BX-00-STORM-PEGASIS-3-70RA", "bx00-25set", [3, null, null]],
  ["BEY-X-BX-00-VICTORY-VALKYRIE-2-60RA", "bx00-25set", [5, null, null]],
  ["BEY-X-BX-00-DRAN-SWORD-3-60F", "bx00-25set", [7, null, null]],

  ["BEY-X-BX-00-IRON-MAN-4-80B", "bx00-mit", [3, 4, 5]],
  ["BEY-X-BX-00-THANOS-4-60P", "bx00-mit", [6, 7, 8]],
  ["BEY-X-BX-00-SPIDER-MAN-3-60F", "bx00-msv", [3, 4, 5]],
  ["BEY-X-BX-00-VENOM-3-80N", "bx00-msv", [6, 7, 8]],
  ["BEY-X-BX-00-LUKE-SKYWALKER-4-80B", "bx00-sld", [3, 4, 5]],
  ["BEY-X-BX-00-DARTH-VADER-4-60P", "bx00-sld", [6, 7, 8]],
  ["BEY-X-BX-00-THE-MANDALORIAN-3-60F", "bx00-smm", [3, 4, 5]],
  ["BEY-X-BX-00-MOFF-GIDEON-3-80N", "bx00-smm", [6, 7, 8]],
  ["BEY-X-BX-00-OPTIMUS-PRIME-4-60P", "bx00-tom", [3, 4, 5]],
  ["BEY-X-BX-00-MEGATRON-4-80B", "bx00-tom", [6, 7, 8]],
  ["BEY-X-BX-00-OPTIMUS-PRIMAL-3-60F", "bx00-tos", [3, 4, 5]],
  ["BEY-X-BX-00-STARSCREAM-3-80N", "bx00-tos", [6, 7, 8]],
  ["BEY-X-BX-00-T-REX-1-80GB", "bx00-jtm", [3, 4, 5]],
  ["BEY-X-BX-00-MOSASAURUS-9-60U", "bx00-jtm", [6, 7, 8]],
  ["BEY-X-BX-00-SPINOSAURUS-3-85A", "bx00-jsq", [3, 4, 5]],
  ["BEY-X-BX-00-QUETZALCOATLUS-4-55D", "bx00-jsq", [6, 7, 8]],

  ["BEY-X-CX-05-01-HELLS-REAPER-T-4-70K", "cx05", [9, 10, 11, 13, 12]],
  ["BEY-X-CX-06-01-FOX-BRUSH-J-9-70GR", "cx06", [6, 7, 8, 9, 10]],
  ["BEY-X-CX-08-01-KERBEROS-FLAME-W-5-80WB", "cx08", [9, 10, 11, 13, 12]],
  ["BEY-X-CX-11-EMPEROR-MIGHT-H-OP", "cx11", [4, 5, 6, 7]],
  ["BEY-X-CX-11-SHARK-GILL-5-60FB", "cx11", [8, 10, 11]],
  ["BEY-X-CX-11-GOLEM-ROCK-M-85HN", "cx11", [13, 14, 15]],
  ["BEY-X-CX-09-SOL-ECLIPSE-D-5-70TK", "cx09", [6, 7, 8, 10, 11]],
  ["BEY-X-CX-00-TIGA-RAGE-FT-3-60T", "cx00-tiga", [3, null, 7, 6, 10, 11]],
  ["BEY-X-CX-17-01-UNICORN-DELTA-PO-3-60GU", "cx17", [9, 10, 11, 12, null, 13]],
  ["BEY-X-CX-18-01-BRACHIO-WHIP-OW-5-70NR", "cx18", [6, 7, 8, 9, 10, 11]],

  ["BEY-X-CX-00-EVA-ARC-B-0-70E", "cx00-eva", [3, 4, 5, 6, 7]],
  ["BEY-X-CX-00-EVA-BRAVE-A-1-70V", "cx00-eva", [10, 11, 12, 13, 14]],
  ["BEY-X-CX-00-EVA-BRUSH-T-2-70A", "cx00-eva", [17, 18, 19, 20, 21]]
];

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
const relativeSourcePath = (sourceRoot, sourceFile) =>
  path.relative(sourceRoot, sourceFile).split(path.sep).join("/");

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
  const pageBySlug = new Map(pages.map(page => [page.slug, page]));
  const pageByBeyId = new Map(
    pages.flatMap(page => (page.beyIds || []).map(beyId => [beyId, page]))
  );
  const localSourceCache = new Map();
  const localSourceAt = async (slug, sourceIndex) => {
    const key = `${slug}:${sourceIndex}`;
    if (!localSourceCache.has(key)) {
      localSourceCache.set(key, (async () => {
        const page = pageBySlug.get(slug);
        if (!page?.sourceFolder) throw new Error(`${slug}: source folder is unavailable`);
        const sourceFolder = path.join(
          sourceReport.sourceRoot,
          "02_product_components",
          page.sourceFolder
        );
        const prefix = `${String(sourceIndex).padStart(2, "0")}_`;
        const fileName = (await readdir(sourceFolder)).find(name => name.startsWith(prefix));
        if (!fileName) throw new Error(`${slug}: official source ${sourceIndex} is unavailable`);
        const sourceFile = path.join(sourceFolder, fileName);
        const bytes = await readFile(sourceFile);
        const officialName = fileName.replace(/^\d+_/, "");
        return {
          sourceUrl: officialImageUrl(officialName),
          sourcePath: relativeSourcePath(sourceReport.sourceRoot, sourceFile),
          sourceFile,
          sourceSha256: sha256(bytes)
        };
      })());
    }
    return localSourceCache.get(key);
  };
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

  const mappingByKey = new Map();
  const addMapping = entry => {
    const representative = imageMappingById.get(entry.partId);
    const reuseRepresentative = representative?.sourceSha256 === entry.sourceSha256;
    const reuseExistingImage = Boolean(entry.existingImage);
    const mapping = {
      beyId: entry.beyId,
      partId: entry.partId,
      image: reuseRepresentative
        ? representative.image
        : entry.existingImage || outputPath(entry.beyId, entry.partId),
      sourceKind: entry.sourceKind || "official-individual",
      sourceUrl: entry.sourceUrl,
      sourcePath: entry.sourcePath || "",
      sourceFile: entry.sourceFile || "",
      sourceSha256: entry.sourceSha256,
      shapeSource: entry.shapeSource || entry.sourceUrl,
      shapeSourceSha256: entry.shapeSourceSha256 || entry.sourceSha256,
      colorEvidence: entry.colorEvidence || entry.sourceUrl,
      colorEvidenceSha256: entry.colorEvidenceSha256 || entry.sourceSha256,
      transform: entry.transform || "none",
      reuseRepresentative,
      reuseExistingImage
    };
    mappingByKey.set(contextKey(entry.beyId, entry.partId), mapping);
  };

  for (const entry of downloaded) {
    if (entry.reason) {
      unavailable.push(entry);
      continue;
    }
    addMapping({
      ...entry,
      sourceKind: "official-individual"
    });
  }

  for (const [beyId, slug, sourceIndexes] of VERIFIED_PART_SOURCE_GROUPS) {
    const bey = itemById.get(beyId);
    if (!bey) throw new Error(`${beyId}: verified preview Bey is unavailable`);
    if (sourceIndexes.length !== (bey.parts || []).length) {
      throw new Error(`${beyId}: verified source count does not match its parts`);
    }
    for (const [partIndex, sourceIndex] of sourceIndexes.entries()) {
      if (!sourceIndex) continue;
      const partId = bey.parts[partIndex];
      addMapping({
        beyId,
        partId,
        ...await localSourceAt(slug, sourceIndex),
        sourceKind: "official-individual"
      });
    }
  }

  // For Basic/Unique/remake blades, the reviewed official assembled top view
  // already exposes the complete blade face in its exact release color.
  // Reuse that transparent render instead of substituting a catalog color.
  for (const bey of xBeys) {
    const beyImage = imageMappingById.get(bey.id);
    if (!beyImage?.image || !beyImage.sourceSha256) continue;
    for (const partId of bey.parts || []) {
      const part = itemById.get(partId);
      const key = contextKey(bey.id, partId);
      if (mappingByKey.has(key) || part?.type !== "blade" || part.xBladeRole) continue;
      const sourceUrl = beyImage.sourceUrl || officialImageUrl(sourceFileName(beyImage));
      addMapping({
        beyId: bey.id,
        partId,
        existingImage: beyImage.image,
        sourceKind: "official-assembled-bey-view",
        sourceUrl,
        sourcePath: beyImage.sourcePath || "",
        sourceSha256: beyImage.sourceSha256,
        shapeSource: sourceUrl,
        shapeSourceSha256: beyImage.sourceSha256,
        colorEvidence: sourceUrl,
        colorEvidenceSha256: beyImage.sourceSha256
      });
    }
  }

  const mappedKeys = new Set(mappingByKey.keys());
  const normalizeUnavailable = entry => {
    const part = itemById.get(entry.partId);
    let reason = entry.reason;
    if (reason === "official-multi-bey-page-has-no-verified-part-blocks") {
      reason = part?.xBladeRole
        ? "official-assembled-view-cannot-isolate-split-blade-part"
        : "official-assembled-view-does-not-show-isolated-part";
    }
    const page = pageByBeyId.get(entry.beyId);
    return {
      ...entry,
      sourceKind: "unavailable",
      reason,
      evidenceUrl: page ? officialPageUrl(page.slug) : ""
    };
  };
  const unavailableByKey = new Map(
    unavailable
      .filter(entry => !mappedKeys.has(contextKey(entry.beyId, entry.partId)))
      .map(entry => [contextKey(entry.beyId, entry.partId), normalizeUnavailable(entry)])
  );
  const contexts = xBeys.flatMap(bey => [
    ...(bey.parts || []),
    ...(bey.bundledParts || [])
  ].map(partId => ({ beyId: bey.id, partId })));
  for (const context of contexts) {
    const key = contextKey(context.beyId, context.partId);
    if (!mappedKeys.has(key) && !unavailableByKey.has(key)) {
      unavailableByKey.set(key, normalizeUnavailable({
        ...context,
        reason: "official-individual-part-image-unavailable"
      }));
    }
  }

  const mappings = [...mappingByKey.values()];
  const sortedMappings = mappings.sort((left, right) =>
    contextKey(left.beyId, left.partId).localeCompare(contextKey(right.beyId, right.partId)));
  const sortedUnavailable = [...unavailableByKey.values()].sort((left, right) =>
    contextKey(left.beyId, left.partId).localeCompare(contextKey(right.beyId, right.partId)));
  const bySourceKind = Object.fromEntries(
    [...new Set(sortedMappings.map(entry => entry.sourceKind))]
      .sort()
      .map(sourceKind => [
        sourceKind,
        sortedMappings.filter(entry => entry.sourceKind === sourceKind).length
      ])
  );
  const unavailableByReason = Object.fromEntries(
    [...new Set(sortedUnavailable.map(entry => entry.reason))]
      .sort()
      .map(reason => [
        reason,
        sortedUnavailable.filter(entry => entry.reason === reason).length
      ])
  );
  const report = {
    sourceRoot: sourceReport.sourceRoot,
    totals: {
      beys: xBeys.length,
      contexts: contexts.length,
      mapped: sortedMappings.length,
      newOutputs: sortedMappings.filter(entry =>
        !entry.reuseRepresentative && !entry.reuseExistingImage).length,
      reusedRepresentative: sortedMappings.filter(entry => entry.reuseRepresentative).length,
      reusedBeyView: sortedMappings.filter(entry =>
        entry.sourceKind === "official-assembled-bey-view").length,
      unavailable: sortedUnavailable.length,
      bySourceKind,
      unavailableByReason
    },
    mappings: sortedMappings,
    selected: sortedMappings
      .filter(entry => !entry.reuseRepresentative && !entry.reuseExistingImage)
      .map(entry => ({
        id: contextKey(entry.beyId, entry.partId),
        image: entry.image,
        source: entry.sourcePath || entry.sourceUrl,
        sourceFile: entry.sourceFile,
        sourceSha256: entry.sourceSha256,
        sourceKind: entry.sourceKind
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
      sourceKind: entry.sourceKind,
      sourceUrl: entry.sourceUrl,
      sourcePath: entry.sourcePath,
      sourceSha256: entry.sourceSha256,
      shapeSource: entry.shapeSource,
      shapeSourceSha256: entry.shapeSourceSha256,
      colorEvidence: entry.colorEvidence,
      colorEvidenceSha256: entry.colorEvidenceSha256,
      transform: entry.transform,
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
