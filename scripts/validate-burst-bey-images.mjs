import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { beyItems } from "../data/source/catalog.mjs";
import { burstBeyPrimaryImageConfig } from "../data/source/burst-bey-primary-images.mjs";
import burstBeyFrontViewAudit from "../data/source/burst-bey-front-view-audit.json" with { type: "json" };
import { burstBeyImagePath } from "./burst-image-paths.mjs";

const VERSION = "20260819-burst-strict-front-images";
const burstBeys = beyItems.filter(item => item.series === "burst" && item.type === "bey");
const byId = new Map(burstBeys.map(item => [item.id, item]));
const selected = burstBeyPrimaryImageConfig.selected;
const unavailable = burstBeyPrimaryImageConfig.unavailable;
const selectedById = new Map(selected.map(entry => [entry.id, entry]));
const unavailableById = new Map(unavailable.map(entry => [entry.id, entry]));

function unique(values, label) {
  assert.equal(new Set(values).size, values.length, `${label} contains duplicates`);
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

assert.equal(burstBeyPrimaryImageConfig.version, VERSION);
assert.equal(burstBeyFrontViewAudit.version, VERSION);
assert.equal(burstBeys.length, 433);
assert.equal(selected.length + unavailable.length, 433);
assert.equal(burstBeyFrontViewAudit.entries.length, 433);
unique([...selected.map(entry => entry.id), ...unavailable.map(entry => entry.id)], "classifications");
unique(burstBeyFrontViewAudit.entries.map(entry => entry.id), "front-view audit entries");
unique(selected.map(entry => entry.image), "selected image paths");
assert.deepEqual(
  new Set([...selectedById.keys(), ...unavailableById.keys()]),
  new Set(byId.keys()),
  "Burst image classifications must cover every Bey"
);
assert.deepEqual(
  new Set(burstBeyFrontViewAudit.entries.map(entry => entry.id)),
  new Set(byId.keys()),
  "Burst front-view audit must cover every Bey"
);
assert.deepEqual(burstBeyFrontViewAudit.summary, {
  total: 433,
  initialSelected: 401,
  initialUnavailable: 32,
  initialStrictFront: 278,
  initialObliqueOrPerspective: 121,
  initialDiagramOrMultiSubject: 2,
  replaced: 7,
  removedInvalidImage: 116,
  keptStrictFront: 278,
  keptUnavailable: 32,
  finalSelected: 285,
  finalUnavailable: 148
});
assert.deepEqual(burstBeyPrimaryImageConfig.normalization, {
  method: "premultiplied-alpha-uniform-long-edge",
  canvasSize: 448,
  targetForegroundSize: 360,
  center: [223.5, 223.5],
  alphaThreshold: 3,
  resample: "lanczos",
  outputFormat: "lossless-webp"
});

for (const entry of selected) {
  const item = byId.get(entry.id);
  assert.ok(item, `${entry.id}: selected item is missing`);
  assert.equal(entry.image, burstBeyImagePath(entry.id), `${entry.id}: non-canonical image path`);
  assert.equal(item.image, entry.image, `${entry.id}: catalog image does not use selected path`);
  assert.match(entry.sourceSha256, /^[0-9a-f]{64}$/);
  assert.match(entry.outputSha256, /^[0-9a-f]{64}$/);
  assert.ok(["local", "verified-database", "official", "shop"].includes(entry.sourceKind));
  if (entry.sourceKind === "local") {
    assert.ok(entry.sourceRelativePath && !path.isAbsolute(entry.sourceRelativePath));
    assert.ok(!entry.sourceUrl, `${entry.id}: local source should not claim a web URL`);
  } else {
    assert.match(entry.sourceUrl, /^https:\/\//);
    assert.equal(entry.checkedAt, "2026-08-19");
  }
  const bounds = entry.normalizedForegroundBox;
  assert.equal(bounds.length, 4);
  const width = bounds[2] - bounds[0];
  const height = bounds[3] - bounds[1];
  assert.equal(Math.max(width, height), 360, `${entry.id}: foreground is not 360px`);
  assert.ok(Math.abs(bounds[0] - (448 - bounds[2])) <= 1, `${entry.id}: horizontal centering drift`);
  assert.ok(Math.abs(bounds[1] - (448 - bounds[3])) <= 1, `${entry.id}: vertical centering drift`);
  assert.equal(entry.alphaReview.transparentCorners, true);
  assert.equal(entry.alphaReview.singleConnectedSubject, true);
  const auditEntry = burstBeyFrontViewAudit.entries.find(value => value.id === entry.id);
  assert.equal(auditEntry.finalClassification, "strict-front");
  assert.equal(auditEntry.finalImage, entry.image);
  assert.equal(auditEntry.finalOutputSha256, entry.outputSha256);

  const bytes = await readFile(entry.image);
  assert.deepEqual(webpInfo(bytes), { width: 448, height: 448, hasAlpha: true });
  assert.equal(createHash("sha256").update(bytes).digest("hex"), entry.outputSha256);
}

for (const entry of unavailable) {
  const item = byId.get(entry.id);
  assert.ok(item, `${entry.id}: unavailable item is missing`);
  assert.equal(item.image, undefined, `${entry.id}: unavailable item must not expose a broken image`);
  assert.equal(existsSync(burstBeyImagePath(entry.id)), false, `${entry.id}: unavailable canonical image must be removed`);
  assert.ok(entry.reason);
  assert.equal(entry.searchAudit.checkedAt, "2026-08-19");
  const auditEntry = burstBeyFrontViewAudit.entries.find(value => value.id === entry.id);
  assert.equal(auditEntry.finalClassification, "unavailable");
}

console.log(`Burst Bey images OK: ${selected.length} selected, ${unavailable.length} unavailable.`);
