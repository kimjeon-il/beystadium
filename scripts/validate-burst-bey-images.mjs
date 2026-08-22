import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { beyItems } from "../data/source/catalog.mjs";
import { burstBeyPrimaryImageConfig } from "../data/source/burst-bey-primary-images.mjs";
import burstBeyFrontViewAudit from "../data/source/burst-bey-front-view-audit.json" with { type: "json" };
import burstBeyFandomFrontSources from "../data/source/burst-bey-fandom-front-sources.json" with { type: "json" };
import { burstBeyImagePath } from "./burst-image-paths.mjs";

const VERSION = "20260822-burst-b35-storm-spriggan-generated-front";
const burstBeys = beyItems.filter(item => item.series === "burst" && item.type === "bey");
const byId = new Map(burstBeys.map(item => [item.id, item]));
const selected = burstBeyPrimaryImageConfig.selected;
const unavailable = burstBeyPrimaryImageConfig.unavailable;
const selectedById = new Map(selected.map(entry => [entry.id, entry]));
const unavailableById = new Map(unavailable.map(entry => [entry.id, entry]));

function unique(values, label) {
  assert.equal(new Set(values).size, values.length, `${label} contains duplicates`);
}

function assertOrthographicReview(review, id) {
  assert.ok(review && typeof review === "object", `${id}: structured orthographic review is missing`);
  assert.equal(review.classification, "orthographic-top", `${id}: image is not approved as orthographic top view`);
  assert.equal(review.cameraAxis, "vertical", `${id}: camera axis is not vertical`);
  assert.equal(review.perspectiveVisible, false, `${id}: perspective must not be visible`);
  assert.equal(review.sideThicknessVisible, false, `${id}: side thickness must not be visible`);
  assert.equal(review.exactCombination, true, `${id}: exact combination review failed`);
  assert.equal(review.singleAssembledProduct, true, `${id}: image must contain one assembled Bey`);
  assert.ok(["2026-08-19", "2026-08-22"].includes(review.reviewedAt), `${id}: review date mismatch`);
  assert.equal(review.evidence?.type, "manual-pixel-review", `${id}: pixel review evidence is missing`);
  const batch = review.evidence?.batch;
  const sheet = review.evidence?.contactSheet || "";
  const cell = review.evidence?.cell;
  if (batch === "burst-orthographic-top-reaudit") {
    assert.match(sheet, /^selected-\d{2}\.jpg$/, `${id}: review sheet evidence is missing`);
    assert.ok(Number.isInteger(cell) && cell >= 1 && cell <= 12, `${id}: invalid review cell`);
  } else if (batch === "burst-user-sources-b07-b21") {
    assert.equal(batch, "burst-user-sources-b07-b21", `${id}: review batch mismatch`);
    assert.equal(sheet, "user-sources-b07-b21.jpg", `${id}: review sheet evidence is missing`);
    assert.ok(Number.isInteger(cell) && cell >= 1 && cell <= 2, `${id}: invalid review cell`);
  } else {
    assert.equal(batch, "burst-user-approved-b35-v3", `${id}: review batch mismatch`);
    assert.equal(
      sheet,
      "data/source/burst-bey-generated-fronts/bey-burst-b-35-storm-spriggan-k-u-comparison-board.png",
      `${id}: review sheet evidence is missing`
    );
    assert.equal(existsSync(sheet), true, `${id}: review sheet file is missing`);
    assert.equal(cell, 1, `${id}: invalid review cell`);
  }
  assert.deepEqual(review.evidence?.reviewedScales, [448, 112], `${id}: required review scales are missing`);
}

function assertUnavailableReview(review, id) {
  assert.ok(review && typeof review === "object", `${id}: unavailable review evidence is missing`);
  assert.ok(
    ["unavailable", "rejected-oblique-or-perspective"].includes(review.classification),
    `${id}: invalid unavailable review classification`
  );
  assert.equal(review.reviewedAt, "2026-08-19", `${id}: review date mismatch`);
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
assert.equal(burstBeyFandomFrontSources.version, VERSION);
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
  priorStrictFrontBaseline: 285,
  fandomReviewed: 148,
  preReauditSelected: 369,
  reauditedSelected: 369,
  orthographicTopKept: 340,
  orthographicTopReplacements: 0,
  newlyRejectedObliqueOrPerspective: 29,
  newlyRegisteredOrthographicTop: 2,
  finalSelected: 342,
  finalUnavailable: 91
});
assert.deepEqual(burstBeyFandomFrontSources.summary, {
  reviewed: 148,
  approved: 59,
  direct: 47,
  lowResolution: 12,
  unavailable: 89
});
assert.equal(
  burstBeyFandomFrontSources.selected.length + burstBeyFandomFrontSources.unavailable.length,
  148,
  "Fandom review must cover every previously unavailable Burst Bey"
);
unique(
  [...burstBeyFandomFrontSources.selected, ...burstBeyFandomFrontSources.unavailable].map(entry => entry.id),
  "Fandom review entries"
);
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
  assert.ok([
    "local",
    "verified-database",
    "generated-enhancement",
    "user-approved-generated-front",
    "official",
    "shop"
  ].includes(entry.sourceKind));
  if (["local", "user-approved-generated-front"].includes(entry.sourceKind)) {
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
  assert.doesNotMatch(entry.sourceTitle || "", /angled\s+view/i, `${entry.id}: angled-view source cannot be selected`);
  const auditEntry = burstBeyFrontViewAudit.entries.find(value => value.id === entry.id);
  assert.equal(auditEntry.finalClassification, "orthographic-top");
  assert.equal(auditEntry.finalImage, entry.image);
  assert.equal(auditEntry.finalOutputSha256, entry.outputSha256);
  assertOrthographicReview(auditEntry.orthographicReview, entry.id);

  const bytes = await readFile(entry.image);
  assert.deepEqual(webpInfo(bytes), { width: 448, height: 448, hasAlpha: true });
  assert.equal(createHash("sha256").update(bytes).digest("hex"), entry.outputSha256);
  if (entry.sourceKind === "generated-enhancement") {
    assert.equal(entry.processingClass, "low-resolution-imagegen");
    assert.equal(entry.generatedEnhancement, true);
    assert.equal(entry.originalAlphaReapplied, true);
    assert.equal(entry.generationMode, "imagegen-edit");
    assert.match(entry.generatedSourceSha256, /^[0-9a-f]{64}$/);
    assert.equal(existsSync(entry.generatedSourcePath), true);
    const generatedBytes = await readFile(entry.generatedSourcePath);
    assert.equal(createHash("sha256").update(generatedBytes).digest("hex"), entry.generatedSourceSha256);
  } else if (entry.sourceKind === "user-approved-generated-front") {
    assert.equal(entry.processingClass, "user-approved-imagegen-composite");
    assert.equal(entry.generatedEnhancement, true);
    assert.equal(entry.originalAlphaReapplied, true);
    assert.equal(entry.generationMode, "imagegen-edit");
    assert.ok(entry.generationPrompt);
    assert.match(entry.generatedSourceSha256, /^[0-9a-f]{64}$/);
    assert.match(entry.normalizedSourceSha256, /^[0-9a-f]{64}$/);
    assert.equal(existsSync(entry.sourceRelativePath), true);
    assert.equal(existsSync(entry.generatedSourcePath), true);
    assert.equal(existsSync(entry.normalizedSourcePath), true);
    assert.equal(existsSync(entry.provenanceFile), true);
    const sourceBytes = await readFile(entry.sourceRelativePath);
    const generatedBytes = await readFile(entry.generatedSourcePath);
    const normalizedBytes = await readFile(entry.normalizedSourcePath);
    assert.equal(createHash("sha256").update(sourceBytes).digest("hex"), entry.sourceSha256);
    assert.equal(createHash("sha256").update(generatedBytes).digest("hex"), entry.generatedSourceSha256);
    assert.equal(createHash("sha256").update(normalizedBytes).digest("hex"), entry.normalizedSourceSha256);
    const provenance = JSON.parse(await readFile(entry.provenanceFile, "utf8"));
    assert.equal(provenance.id, entry.id);
    assert.equal(provenance.sourceKind, entry.sourceKind);
    assert.equal(provenance.output.sha256, entry.outputSha256);
    for (const resource of [
      provenance.targetReference,
      provenance.screwReference,
      provenance.rawImagegenOutput,
      provenance.generatedSource,
      provenance.normalizedSource,
      provenance.comparisonBoard
    ]) {
      assert.equal(existsSync(resource.file), true, `${entry.id}: provenance source is missing`);
      const resourceBytes = await readFile(resource.file);
      assert.equal(createHash("sha256").update(resourceBytes).digest("hex"), resource.sha256);
    }
  }
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
  assertUnavailableReview(auditEntry.orthographicReview, entry.id);
}

for (const source of burstBeyFandomFrontSources.selected) {
  assertOrthographicReview(source.orthographicReview, source.id);
  assert.doesNotMatch(source.fileTitle || "", /angled\s+view/i, `${source.id}: angled-view Fandom source cannot be selected`);
  assert.match(source.mediawikiSha1, /^[0-9a-f]{40}$/);
  assert.match(source.sourceSha256, /^[0-9a-f]{64}$/);
  assert.match(source.sourceUrl, /^https:\/\/static\.wikia\.nocookie\.net\//);
  assert.equal(selectedById.has(source.id), true, `${source.id}: approved Fandom source is not selected`);
  if (source.processingClass === "low-resolution-imagegen") {
    assert.equal(source.generatedEnhancement, true);
    assert.equal(source.originalAlphaReapplied, true);
    assert.match(source.generatedSourceSha256, /^[0-9a-f]{64}$/);
  } else {
    assert.equal(source.processingClass, "direct");
    assert.equal(source.generatedEnhancement, false);
  }
}

for (const source of burstBeyFandomFrontSources.unavailable) {
  assert.equal(unavailableById.has(source.id), true, `${source.id}: rejected Fandom source must remain unavailable`);
  assert.ok(source.reason);
  const auditEntry = burstBeyFrontViewAudit.entries.find(value => value.id === source.id);
  assertUnavailableReview(auditEntry?.orthographicReview, source.id);
}

console.log(`Burst Bey images OK: ${selected.length} selected, ${unavailable.length} unavailable.`);
