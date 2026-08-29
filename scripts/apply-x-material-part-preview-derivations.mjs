import { readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  xPartPreviewMappings,
  xPartPreviewUnavailable
} from "../data/source/x-part-previews.mjs";

const VERSION = "20260726-x-material-previews";
const MANIFEST_PATH = path.resolve("data/source/x-part-preview-color-derivations.json");
const OUTPUT_PATH = path.resolve("data/source/x-part-previews.mjs");
const contextKey = (beyId, partId) => `${beyId}::${partId}`;
const derivedKinds = new Set(["official-direct", "official-color-derived"]);

const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
if (manifest.version !== VERSION) throw new Error(`expected derivation version ${VERSION}`);
if (manifest.derivations.length !== 241) {
  throw new Error(`expected 241 derivations, found ${manifest.derivations.length}`);
}
if (manifest.unavailable.length !== 6) {
  throw new Error(`expected 6 unresolved candidates, found ${manifest.unavailable.length}`);
}

const baseMappings = xPartPreviewMappings.filter(entry => !derivedKinds.has(entry.sourceKind));
const existingDerivedMappings = xPartPreviewMappings.filter(entry => derivedKinds.has(entry.sourceKind));
if (baseMappings.length !== 502) {
  throw new Error(`expected 502 base mappings, found ${baseMappings.length}`);
}
if (![0, 241].includes(existingDerivedMappings.length)) {
  throw new Error(`expected 0 or 241 existing derivations, found ${existingDerivedMappings.length}`);
}
if (![55, 296].includes(xPartPreviewUnavailable.length)) {
  throw new Error(`expected 55 or 296 gaps, found ${xPartPreviewUnavailable.length}`);
}

const derivationByKey = new Map(
  manifest.derivations.map(entry => [contextKey(entry.beyId, entry.partId), entry])
);
if (derivationByKey.size !== manifest.derivations.length) {
  throw new Error("duplicate material-derived preview context");
}
const unresolvedByKey = new Map(
  manifest.unavailable.map(entry => [contextKey(entry.beyId, entry.partId), entry])
);

const derivedMappings = [];
for (const entry of manifest.derivations) {
  await stat(path.resolve(entry.outputImage));
  const direct = entry.sourceKind === "official-direct";
  derivedMappings.push({
    beyId: entry.beyId,
    partId: entry.partId,
    image: entry.outputImage,
    sourceKind: direct ? "official-direct" : "official-color-derived",
    sourceUrl: direct ? entry.targetUrl : entry.shapeSourceUrl,
    sourcePath: direct ? "" : entry.shapeSourcePath,
    sourceSha256: direct ? entry.targetSha256 : entry.shapeSourceSha256,
    shapeSource: direct ? entry.targetUrl : entry.shapeSourceUrl,
    shapeSourceSha256: direct ? entry.targetSha256 : entry.shapeSourceSha256,
    colorEvidence: entry.targetUrl,
    colorEvidenceSha256: entry.targetSha256,
    targetAssetId: entry.targetAssetId,
    materialMask: entry.materialMask,
    materialMaskSha256: entry.materialMaskSha256,
    outputSha256: entry.outputSha256
  });
}

const mappings = [...baseMappings, ...derivedMappings].sort((left, right) =>
  contextKey(left.beyId, left.partId).localeCompare(contextKey(right.beyId, right.partId)));
const unavailable = (xPartPreviewUnavailable.length === 55
  ? xPartPreviewUnavailable
  : xPartPreviewUnavailable.filter(entry =>
    !derivationByKey.has(contextKey(entry.beyId, entry.partId))))
  .map(entry => {
    const unresolved = unresolvedByKey.get(contextKey(entry.beyId, entry.partId));
    return {
      ...entry,
      reason: unresolved?.reason || entry.reason
    };
  })
  .sort((left, right) =>
    contextKey(left.beyId, left.partId).localeCompare(contextKey(right.beyId, right.partId)));

if (mappings.length !== 743) throw new Error(`expected 743 mappings, found ${mappings.length}`);
if (unavailable.length !== 55) throw new Error(`expected 55 remaining gaps, found ${unavailable.length}`);

const moduleSource = `const xPartPreviewMappings = ${JSON.stringify(mappings, null, 2)};\n\n`
  + `const xPartPreviewUnavailable = ${JSON.stringify(unavailable, null, 2)};\n\n`
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

await writeFile(OUTPUT_PATH, moduleSource);
console.log(JSON.stringify({
  version: VERSION,
  mappings: mappings.length,
  unavailable: unavailable.length
}, null, 2));
