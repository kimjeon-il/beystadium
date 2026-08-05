import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { beyItems } from "../data/source/catalog.mjs";
import {
  bladePartIds,
  xBeyAngleCorrectionConfig,
  xBeyPrimaryImageConfig
} from "../data/source/x-bey-primary-images.mjs";
import { xImageMappings } from "../data/source/x-images.mjs";

const REPORT_ARG = process.argv.find(argument => argument.startsWith("--report="));
const REPORT_PATH = REPORT_ARG?.slice("--report=".length) || "";
const OFFICIAL_IMAGE_ROOT = "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image";
const xImageById = new Map(xImageMappings.map(entry => [entry.id, entry]));
const officialFrontById = new Map(
  xBeyPrimaryImageConfig.selected.map(entry => [entry.id, entry])
);
const angleCorrectionById = new Map(
  xBeyAngleCorrectionConfig.entries.map(entry => [entry.id, entry])
);
const verifiedMainById = new Map(
  xBeyPrimaryImageConfig.verifiedMain.map(entry => [entry.id, entry])
);
const temporarySideById = new Map(
  xBeyPrimaryImageConfig.temporarySideImages.map(entry => [entry.id, entry])
);

function uniqueValues(values, label) {
  assert.equal(new Set(values).size, values.length, `${label} contains duplicates`);
}

function sourceUrl(entry) {
  if (entry.sourceUrl) return entry.sourceUrl;
  const fileName = path.posix.basename(entry.sourcePath || "").replace(/^\d+_/, "");
  assert.ok(fileName, `${entry.id || entry.beyId}: source URL cannot be resolved`);
  return `${OFFICIAL_IMAGE_ROOT}/${fileName}`;
}

function webpInfo(bytes) {
  assert.equal(bytes.subarray(0, 4).toString("ascii"), "RIFF", "missing RIFF header");
  assert.equal(bytes.subarray(8, 12).toString("ascii"), "WEBP", "missing WEBP header");
  let offset = 12;
  let width = 0;
  let height = 0;
  let hasAlpha = false;
  while (offset + 8 <= bytes.length) {
    const type = bytes.subarray(offset, offset + 4).toString("ascii");
    const size = bytes.readUInt32LE(offset + 4);
    const dataOffset = offset + 8;
    if (type === "VP8X" && size >= 10) {
      hasAlpha ||= Boolean(bytes[dataOffset] & 0x10);
      width = 1 + bytes.readUIntLE(dataOffset + 4, 3);
      height = 1 + bytes.readUIntLE(dataOffset + 7, 3);
    } else if (type === "VP8L" && size >= 5) {
      assert.equal(bytes[dataOffset], 0x2f, "invalid VP8L signature");
      const bits = bytes.readUInt32LE(dataOffset + 1);
      width = 1 + (bits & 0x3fff);
      height = 1 + ((bits >>> 14) & 0x3fff);
      hasAlpha ||= Boolean(bits & 0x10000000);
    }
    offset = dataOffset + size + (size % 2);
  }
  return { width, height, hasAlpha };
}

async function outputAudit(image) {
  const bytes = await readFile(path.resolve(image));
  assert.ok(bytes.length > 500, `${image} is unexpectedly small`);
  assert.deepEqual(
    webpInfo(bytes),
    { width: 448, height: 448, hasAlpha: true },
    `${image} is not a 448x448 alpha WebP`
  );
  return createHash("sha256").update(bytes).digest("hex");
}

uniqueValues(xBeyPrimaryImageConfig.selected.map(entry => entry.id), "official front IDs");
uniqueValues(xBeyPrimaryImageConfig.selected.map(entry => entry.image), "official front paths");
uniqueValues(xBeyAngleCorrectionConfig.entries.map(entry => entry.id), "angle correction IDs");
uniqueValues(xBeyAngleCorrectionConfig.entries.map(entry => entry.image), "angle correction paths");
uniqueValues(xBeyPrimaryImageConfig.verifiedMain.map(entry => entry.id), "verified main IDs");
uniqueValues(xBeyPrimaryImageConfig.temporarySideImages.map(entry => entry.id), "temporary side IDs");
uniqueValues([
  ...officialFrontById.keys(),
  ...angleCorrectionById.keys(),
  ...verifiedMainById.keys(),
  ...temporarySideById.keys()
], "explicit primary image classifications");
assert.equal(xBeyPrimaryImageConfig.version, "20260805-x-bey-front-angle-correction");
assert.equal(xBeyAngleCorrectionConfig.version, xBeyPrimaryImageConfig.version);
assert.equal(xBeyAngleCorrectionConfig.method, "premultiplied-alpha-vertical-affine");
assert.equal(xBeyPrimaryImageConfig.selected.length, 18);
assert.equal(xBeyAngleCorrectionConfig.entries.length, 106);
assert.equal(xBeyPrimaryImageConfig.verifiedMain.length, 95);

for (const entry of xBeyPrimaryImageConfig.selected) {
  assert.equal(entry.sourceKind, "official-assembled-front");
  assert.match(entry.sourceUrl, /^https:\/\/beyblade\.takaratomy\.co\.jp\//);
  assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
  assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);
  if (entry.sourceCrop) {
    assert.equal(entry.sourceCrop.length, 4);
    assert.ok(entry.sourceCrop.every(Number.isInteger));
  }
  if (entry.sourceScale) assert.ok(entry.sourceScale > 0);
}
for (const entry of xBeyAngleCorrectionConfig.entries) {
  assert.equal(entry.sourceKind, "official-angle-corrected");
  assert.equal(entry.method, xBeyAngleCorrectionConfig.method);
  assert.equal(entry.scaleY, 1.08);
  assert.ok(Number.isFinite(entry.pivotY));
  assert.match(entry.sourceUrl, /^https:\/\/beyblade\.takaratomy\.co\.jp\//);
  assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
  assert.match(entry.sourceOutputSha256, /^[a-f0-9]{64}$/);
  assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);
  assert.notEqual(entry.sourceImage, entry.image);
  assert.equal(
    createHash("sha256").update(await readFile(path.resolve(entry.sourceImage))).digest("hex"),
    entry.sourceOutputSha256,
    `${entry.id}: correction source output hash changed`
  );
}
for (const entry of xBeyPrimaryImageConfig.verifiedMain) {
  assert.equal(entry.view, "front-top");
  assert.equal(entry.sourceRef, "x-images");
}
for (const entry of xBeyPrimaryImageConfig.temporarySideImages) {
  assert.ok(entry.reason?.trim(), `${entry.id}: temporary side view needs a reason`);
  assert.match(entry.evidenceUrl, /^https?:\/\//);
}

const audit = [];
const counts = {
  officialAngleCorrected: 0,
  officialAssembledFront: 0,
  verifiedExistingFront: 0,
  temporarySide: 0
};
const xBeys = beyItems.filter(item => item.series === "x" && item.image);
assert.equal(xBeys.length, 219);

for (const item of xBeys) {
  const bladeIds = bladePartIds(item);
  let classification;
  let provenance;
  let exceptionReason = "";
  if (officialFrontById.has(item.id)) {
    classification = "official-assembled-front";
    provenance = officialFrontById.get(item.id);
    assert.equal(item.image, provenance.image, `${item.id}: official assembled front is not primary`);
    counts.officialAssembledFront += 1;
  } else if (angleCorrectionById.has(item.id)) {
    classification = "official-angle-corrected";
    provenance = angleCorrectionById.get(item.id);
    assert.equal(item.image, provenance.image, `${item.id}: corrected front is not primary`);
    counts.officialAngleCorrected += 1;
  } else if (verifiedMainById.has(item.id)) {
    classification = "verified-existing-front";
    provenance = xImageById.get(item.id);
    assert.ok(provenance, `${item.id}: existing main provenance is missing`);
    assert.equal(item.image, provenance.image, `${item.id}: verified main path changed`);
    counts.verifiedExistingFront += 1;
  } else if (temporarySideById.has(item.id)) {
    classification = "temporary-side";
    const exception = temporarySideById.get(item.id);
    provenance = xImageById.get(item.id);
    assert.ok(provenance, `${item.id}: temporary side provenance is missing`);
    assert.equal(item.image, provenance.image, `${item.id}: temporary side path changed`);
    exceptionReason = exception.reason;
    counts.temporarySide += 1;
  } else {
    assert.fail(`${item.id}: primary viewpoint is not explicitly classified (${bladeIds.length} blade parts)`);
  }

  const outputSha256 = await outputAudit(item.image);
  if (classification === "official-assembled-front" || classification === "official-angle-corrected") {
    assert.equal(outputSha256, provenance.outputSha256, `${item.id}: front output hash changed`);
  }
  audit.push({
    id: item.id,
    classification,
    image: item.image,
    sourceUrl: sourceUrl(provenance),
    sourceSha256: provenance.sourceSha256,
    outputSha256,
    exceptionReason
  });
}

assert.deepEqual(counts, {
  officialAngleCorrected: 106,
  officialAssembledFront: 18,
  verifiedExistingFront: 95,
  temporarySide: 0
});

if (REPORT_PATH) {
  const reportPath = path.resolve(REPORT_PATH);
  await mkdir(path.dirname(reportPath), { recursive: true });
  await writeFile(reportPath, `${JSON.stringify({
    version: xBeyPrimaryImageConfig.version,
    counts,
    items: audit
  }, null, 2)}\n`);
}

console.log(`X Bey primary images: ${JSON.stringify(counts)}`);
