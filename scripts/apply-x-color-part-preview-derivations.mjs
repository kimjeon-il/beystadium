import { readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  xPartPreviewMappings,
  xPartPreviewUnavailable
} from "../data/source/x-part-previews.mjs";

const VERSION = "20260726-x-all-color-part-previews";
const MANIFEST_PATH = path.resolve("data/source/x-part-preview-color-derivations.json");
const OUTPUT_PATH = path.resolve("data/source/x-part-previews.mjs");
const contextKey = (beyId, partId) => `${beyId}::${partId}`;

const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
if (manifest.version !== VERSION) throw new Error(`expected derivation version ${VERSION}`);
if (manifest.derivations.length !== 247) {
  throw new Error(`expected 247 derivations, found ${manifest.derivations.length}`);
}
const baseMappings = xPartPreviewMappings.filter(entry => entry.sourceKind !== "color-derived");
const existingDerivedMappings = xPartPreviewMappings
  .filter(entry => entry.sourceKind === "color-derived");
if (baseMappings.length !== 502) {
  throw new Error(`expected 502 base mappings, found ${baseMappings.length}`);
}
if (![0, 247].includes(existingDerivedMappings.length)) {
  throw new Error(`expected 0 or 247 existing derivations, found ${existingDerivedMappings.length}`);
}
if (![18, 265].includes(xPartPreviewUnavailable.length)) {
  throw new Error(`expected 18 or 265 gaps, found ${xPartPreviewUnavailable.length}`);
}

const derivationByKey = new Map(
  manifest.derivations.map(entry => [contextKey(entry.beyId, entry.partId), entry])
);
if (derivationByKey.size !== manifest.derivations.length) {
  throw new Error("duplicate color-derived preview context");
}

const derivedMappings = [];
for (const entry of manifest.derivations) {
  await stat(path.resolve(entry.outputImage));
  derivedMappings.push({
    beyId: entry.beyId,
    partId: entry.partId,
    image: entry.outputImage,
    sourceKind: "color-derived",
    sourceUrl: entry.shapeSourceUrl,
    sourcePath: entry.shapeSourcePath,
    sourceSha256: entry.shapeSourceSha256,
    shapeSource: entry.shapeSourceUrl,
    shapeSourceSha256: entry.shapeSourceSha256,
    colorEvidence: entry.colorEvidenceUrl,
    colorEvidenceSha256: entry.colorEvidenceSha256,
    outputSha256: entry.outputSha256
  });
}

const mappings = [...baseMappings, ...derivedMappings].sort((left, right) =>
  contextKey(left.beyId, left.partId).localeCompare(contextKey(right.beyId, right.partId)));
const unavailable = (xPartPreviewUnavailable.length === 18
  ? xPartPreviewUnavailable
  : xPartPreviewUnavailable.filter(entry =>
    !derivationByKey.has(contextKey(entry.beyId, entry.partId))))
  .map(entry => ({
    ...entry,
    reason: "official-isolated-shape-source-unavailable"
  }))
  .sort((left, right) =>
    contextKey(left.beyId, left.partId).localeCompare(contextKey(right.beyId, right.partId)));

if (mappings.length !== 749) throw new Error(`expected 749 mappings, found ${mappings.length}`);
if (unavailable.length !== 18) throw new Error(`expected 18 remaining gaps, found ${unavailable.length}`);

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
