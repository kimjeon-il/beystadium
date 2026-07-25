import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import {
  xPartPreviewMappings,
  xPartPreviewUnavailable
} from "../data/source/x-part-previews.mjs";

const xBeys = beyItems.filter(item => item.series === "x");
const partById = new Map(partItems.filter(item => item.series === "x").map(item => [item.id, item]));
const beyById = new Map(xBeys.map(item => [item.id, item]));
const contextKey = (beyId, partId) => `${beyId}::${partId}`;

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
assert.equal(xPartPreviewMappings.length, 244);
assert.equal(xPartPreviewUnavailable.length, 523);

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
    "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX13_03@1.png"
};
for (const [key, sourceUrl] of Object.entries(expectedOfficialSources)) {
  assert.equal(mappingByContext.get(key)?.sourceUrl, sourceUrl, `${key} uses the wrong official source`);
}

const contextualOutputPaths = xPartPreviewMappings
  .map(entry => entry.image)
  .filter(image => image.startsWith("assets/images/x/part-previews/"));
uniqueValues(contextualOutputPaths, "contextual part preview output paths");

for (const entry of xPartPreviewMappings) {
  const bey = beyById.get(entry.beyId);
  assert.ok(bey, `${entry.beyId} is not an X Bey`);
  assert.ok(partById.has(entry.partId), `${entry.partId} is not an X part`);
  assert.ok(
    [...(bey.parts || []), ...(bey.bundledParts || [])].includes(entry.partId),
    `${entry.partId} is not mounted on ${entry.beyId}`
  );
  assert.equal(bey.partPreviewImages?.[entry.partId], entry.image);
  assert.match(entry.sourceUrl, /^https:\/\/beyblade\.takaratomy\.co\.jp\/beyblade-x\/lineup\/_image\//);
  assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
  assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);

  const bytes = await readFile(path.resolve(entry.image));
  assert.equal(createHash("sha256").update(bytes).digest("hex"), entry.outputSha256);
  const info = webpInfo(bytes);
  assert.ok(info.width > 0 && info.height > 0, `${entry.image} has invalid dimensions`);
  assert.ok(info.hasAlpha, `${entry.image} does not advertise an alpha channel`);
}

for (const entry of xPartPreviewUnavailable) {
  const bey = beyById.get(entry.beyId);
  assert.ok(bey, `${entry.beyId} is not an X Bey`);
  assert.ok(partById.has(entry.partId), `${entry.partId} is not an X part`);
  assert.ok(entry.reason?.trim(), `${contextKey(entry.beyId, entry.partId)} needs a reason`);
  assert.equal(bey.partPreviewImages?.[entry.partId], undefined);
}

console.log(
  `X part previews: ${xPartPreviewMappings.length} mapped, `
  + `${xPartPreviewUnavailable.length} unavailable, ${contextualOutputPaths.length} contextual outputs`
);
