import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import {
  xPartPreviewMappings,
  xPartPreviewUnavailable
} from "../data/source/x-part-previews.mjs";
import { xImageMappings } from "../data/source/x-images.mjs";
import { xPartPreviewImagePath } from "./x-image-paths.mjs";

const xBeys = beyItems.filter(item => item.series === "x");
const partById = new Map(partItems.filter(item => item.series === "x").map(item => [item.id, item]));
const beyById = new Map(xBeys.map(item => [item.id, item]));
const originalBeyImageById = new Map(xImageMappings.map(entry => [entry.id, entry.image]));
const contextKey = (beyId, partId) => `${beyId}::${partId}`;
const derivationManifest = JSON.parse(
  await readFile(path.resolve("data/source/x-part-preview-color-derivations.json"), "utf8")
);

function uniqueValues(values, label) {
  assert.equal(values.length, new Set(values).size, `duplicate ${label}`);
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

const contexts = xBeys.flatMap(bey => [
  ...(bey.parts || []),
  ...(bey.bundledParts || [])
].map(partId => ({ beyId: bey.id, partId })));
const contextKeys = contexts.map(entry => contextKey(entry.beyId, entry.partId));
const mappedKeys = xPartPreviewMappings.map(entry => contextKey(entry.beyId, entry.partId));
const unavailableKeys = xPartPreviewUnavailable.map(entry => contextKey(entry.beyId, entry.partId));

uniqueValues(contextKeys, "X Bey part contexts");
uniqueValues(mappedKeys, "X part preview mappings");
uniqueValues(unavailableKeys, "X unavailable part previews");
uniqueValues([...mappedKeys, ...unavailableKeys], "accounted X part preview contexts");
assert.deepEqual(new Set([...mappedKeys, ...unavailableKeys]), new Set(contextKeys));
assert.equal(contexts.length, 767);
assert.equal(xPartPreviewMappings.length, 743);
assert.equal(xPartPreviewUnavailable.length, 24);
assert.deepEqual(
  Object.fromEntries([...new Set(xPartPreviewMappings.map(entry => entry.sourceKind))]
    .sort()
    .map(sourceKind => [
      sourceKind,
      xPartPreviewMappings.filter(entry => entry.sourceKind === sourceKind).length
    ])),
  {
    "official-color-derived": 238,
    "official-direct": 3,
    "official-assembled-bey-view": 66,
    "official-individual": 436
  }
);

assert.equal(derivationManifest.version, "20260726-x-material-previews");
assert.equal(derivationManifest.derivations.length, 241);
assert.equal(derivationManifest.unavailable.length, 6);
assert.equal(derivationManifest.totals.uniqueMaterialMasks, 97);
assert.equal(derivationManifest.totals.officialDirect, 3);
assert.equal(derivationManifest.totals.materialDerived, 238);
uniqueValues(
  derivationManifest.derivations.map(entry => contextKey(entry.beyId, entry.partId)),
  "X material-derived preview contexts"
);
assert.deepEqual(
  new Set(derivationManifest.derivations.map(entry => contextKey(entry.beyId, entry.partId))),
  new Set(xPartPreviewMappings
    .filter(entry => ["official-color-derived", "official-direct"].includes(entry.sourceKind))
    .map(entry => contextKey(entry.beyId, entry.partId)))
);
for (const entry of derivationManifest.unavailable) {
  assert.ok(
    unavailableKeys.includes(contextKey(entry.beyId, entry.partId)),
    `${contextKey(entry.beyId, entry.partId)} is not retained as unavailable`
  );
}

const mappingByContext = new Map(
  xPartPreviewMappings.map(entry => [contextKey(entry.beyId, entry.partId), entry])
);
const expectedOfficialSources = {
  [contextKey("BEY-X-BX-08-KNIGHT-SHIELD-4-80T", "PART-X-BIT-T")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX08_r_04@1.png",
  [contextKey("BEY-X-BX-20-DRAN-DAGGER-4-60R", "PART-X-BLADE-DRAN-DAGGER")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX20_b_02@1.png",
  [contextKey("BEY-X-BX-21-WIZARD-ARROW-4-80N", "PART-X-BIT-N")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX21_o_04@1.png",
  [contextKey("BEY-X-UX-15-SHARK-SCALE-4-50UF", "PART-X-BIT-UF")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX15_05@1.png",
  [contextKey("BEY-X-CX-13-BAHAMUT-BLITZ-BK-1-50I", "PART-X-BLADE-LOCK-CHIP-BAHAMUT")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX13_03@1.png",
  [contextKey("BEY-X-BX-14-01-SHARK-EDGE-3-60LF", "PART-X-BIT-LF")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX14_09@1.png",
  [contextKey("BEY-X-CX-00-EVA-BRUSH-T-2-70A", "PART-X-BIT-A")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG57_21@1.png",
  [contextKey("BEY-X-BX-00-STORM-SPRIGGAN-2-70M", "PART-X-BIT-M")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG21_03@1.png",
  [contextKey("BEY-X-BX-37-BEAR-SCRATCH-5-60F", "PART-X-BIT-F")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX37_06@1.png",
  [contextKey("BEY-X-UX-19-BULLET-GRIFFON-H", "PART-X-BIT-H")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX19_05@1.png",
  [contextKey("BEY-X-CX-09-SOL-ECLIPSE-D-5-70TK", "PART-X-BLADE-LOCK-CHIP-SOL")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX09_06@1.png",
  [contextKey("BEY-X-CX-00-TIGA-RAGE-FT-3-60T", "PART-X-BLADE-OVER-BLADE-FLOW")]:
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG70_07@1.png"
};
for (const [key, sourceUrl] of Object.entries(expectedOfficialSources)) {
  assert.equal(mappingByContext.get(key)?.sourceUrl, sourceUrl, `${key} uses the wrong official source`);
}

const contextualOutputPaths = xPartPreviewMappings
  .filter(entry => entry.image === xPartPreviewImagePath(entry.beyId, entry.partId))
  .map(entry => entry.image);
uniqueValues(contextualOutputPaths, "contextual part preview output paths");
assert.equal(contextualOutputPaths.length, 467);

for (const entry of xPartPreviewMappings) {
  const bey = beyById.get(entry.beyId);
  assert.ok(bey, `${entry.beyId} is not an X Bey`);
  assert.ok(partById.has(entry.partId), `${entry.partId} is not an X part`);
  assert.ok(
    [...(bey.parts || []), ...(bey.bundledParts || [])].includes(entry.partId),
    `${entry.partId} is not mounted on ${entry.beyId}`
  );
  assert.equal(bey.partPreviewImages?.[entry.partId], entry.image);
  assert.ok(
    [
      "official-individual",
      "official-assembled-bey-view",
      "official-color-derived",
      "official-direct"
    ]
      .includes(entry.sourceKind),
    `${contextKey(entry.beyId, entry.partId)} has an invalid source kind`
  );
  const expectedImagePaths = new Set([
    xPartPreviewImagePath(entry.beyId, entry.partId),
    bey.image,
    partById.get(entry.partId)?.image
  ]);
  if (entry.sourceKind === "official-assembled-bey-view") {
    expectedImagePaths.add(originalBeyImageById.get(entry.beyId));
  }
  assert.ok(
    expectedImagePaths.has(entry.image),
    `${contextKey(entry.beyId, entry.partId)} uses an unexpected image path`
  );
  assert.match(
    entry.sourceUrl,
    /^https:\/\/(?:beyblade\.takaratomy\.co\.jp|www\.takaratomyasia\.com|beyblade\.phstudy\.org)\//
  );
  if (entry.sourcePath) {
    assert.match(
      entry.sourcePath,
      /^(?:02_product_components\/|data\/source\/x-bey-front-sources\/)/
    );
  }
  assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
  assert.ok(entry.shapeSource?.trim());
  assert.match(entry.shapeSourceSha256, /^[a-f0-9]{64}$/);
  assert.ok(entry.colorEvidence?.trim());
  assert.match(entry.colorEvidenceSha256, /^[a-f0-9]{64}$/);
  assert.equal("transform" in entry, false);
  assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);

  if (["official-color-derived", "official-direct"].includes(entry.sourceKind)) {
    const derivation = derivationManifest.derivations.find(candidate =>
      candidate.beyId === entry.beyId && candidate.partId === entry.partId
    );
    assert.ok(derivation, `${contextKey(entry.beyId, entry.partId)} lacks derivation provenance`);
    assert.equal(derivation.outputImage, entry.image);
    assert.equal(derivation.targetSha256, entry.colorEvidenceSha256);
    assert.equal(derivation.outputSha256, entry.outputSha256);
    assert.equal(derivation.materialMask, entry.materialMask);
    assert.equal(derivation.materialMaskSha256, entry.materialMaskSha256);
    assert.equal(derivation.alphaPreserved, entry.sourceKind === "official-color-derived");
    assert.equal(
      derivation.outsideMaskRgbPreserved,
      entry.sourceKind === "official-color-derived"
    );
    const maskBytes = await readFile(path.resolve(entry.materialMask));
    assert.equal(
      createHash("sha256").update(maskBytes).digest("hex"),
      entry.materialMaskSha256
    );
    const shapeBytes = await readFile(path.resolve(derivation.shapeImage));
    assert.equal(
      createHash("sha256").update(shapeBytes).digest("hex"),
      derivation.shapeImageSha256
    );
  }

  const bytes = await readFile(path.resolve(entry.image));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), entry.outputSha256);
  const info = webpInfo(bytes);
  assert.deepEqual(
    [info.width, info.height],
    [448, 448],
    `${entry.image} does not use the fixed X image canvas`
  );
  assert.ok(info.hasAlpha, `${entry.image} does not advertise an alpha channel`);
}

for (const entry of xPartPreviewUnavailable) {
  const bey = beyById.get(entry.beyId);
  assert.ok(bey, `${entry.beyId} is not an X Bey`);
  assert.ok(partById.has(entry.partId), `${entry.partId} is not an X part`);
  assert.equal(entry.sourceKind, "unavailable");
  assert.ok(entry.reason?.trim(), `${contextKey(entry.beyId, entry.partId)} needs a reason`);
  if (entry.evidenceUrl) {
    assert.match(entry.evidenceUrl, /^https:\/\/beyblade\.takaratomy\.co\.jp\//);
  }
  assert.equal(bey.partPreviewImages?.[entry.partId], undefined);
}

const mammothBlade = mappingByContext.get(contextKey(
  "BEY-X-BX-48-03-MAMMOTH-TUSK-7-60S",
  "PART-X-BLADE-MAMMOTH-TUSK"
));
assert.equal(mammothBlade?.sourceKind, "official-assembled-bey-view");
assert.equal(
  mammothBlade?.image,
  "assets/images/x/beys/bey-x-bx-48-03-mammoth-tusk-7-60s/main.webp"
);

console.log(
  `X part previews: ${xPartPreviewMappings.length} mapped, `
  + `${xPartPreviewUnavailable.length} unavailable, ${contextualOutputPaths.length} contextual outputs`
);
