import assert from "node:assert/strict";
import { Buffer } from "node:buffer";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";

const MANIFEST_PATH = path.resolve("data/source/x-part-preview-color-derivations.json");
const VERSION = "20260726-x-material-previews";

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
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

function pngInfo(bytes) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  assert.ok(bytes.subarray(0, 8).equals(signature), "invalid PNG signature");
  assert.equal(bytes.subarray(12, 16).toString("ascii"), "IHDR", "missing PNG IHDR");
  return {
    width: bytes.readUInt32BE(16),
    height: bytes.readUInt32BE(20),
    bitDepth: bytes[24],
    colorType: bytes[25]
  };
}

const report = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
assert.equal(report.version, VERSION);
assert.deepEqual(
  {
    generated: report.totals.generated,
    unavailable: report.totals.unavailable,
    uniqueMaterialMasks: report.totals.uniqueMaterialMasks,
    officialDirect: report.totals.officialDirect,
    materialDerived: report.totals.materialDerived
  },
  {
    generated: 241,
    unavailable: 6,
    uniqueMaterialMasks: 97,
    officialDirect: 3,
    materialDerived: 238
  }
);

const contexts = new Set();
const masks = new Map();
for (const record of report.derivations) {
  const context = `${record.beyId}\0${record.partId}`;
  assert.ok(!contexts.has(context), `duplicate derivation context: ${context}`);
  contexts.add(context);

  const sourceBytes = await readFile(path.resolve(record.shapeImage));
  const outputBytes = await readFile(path.resolve(record.outputImage));
  const maskBytes = await readFile(path.resolve(record.materialMask));
  assert.equal(sha256(sourceBytes), record.shapeImageSha256, `${context}: source pixels changed`);
  assert.equal(sha256(outputBytes), record.outputSha256, `${context}: output hash changed`);
  assert.equal(sha256(maskBytes), record.materialMaskSha256, `${context}: mask hash changed`);

  const sourceInfo = webpInfo(sourceBytes);
  const outputInfo = webpInfo(outputBytes);
  assert.deepEqual(
    { width: sourceInfo.width, height: sourceInfo.height },
    { width: 448, height: 448 },
    `${context}: invalid source canvas`
  );
  assert.deepEqual(
    { width: outputInfo.width, height: outputInfo.height },
    { width: 448, height: 448 },
    `${context}: invalid output canvas`
  );
  assert.ok(sourceInfo.hasAlpha && outputInfo.hasAlpha, `${context}: alpha channel missing`);

  const maskInfo = pngInfo(maskBytes);
  assert.deepEqual(
    maskInfo,
    { width: 448, height: 448, bitDepth: 8, colorType: 0 },
    `${context}: invalid material mask`
  );
  masks.set(record.materialMask, record.materialMaskSha256);

  if (record.sourceKind === "material-derived") {
    assert.equal(record.alphaPreserved, true, `${context}: alpha preservation flag missing`);
    assert.equal(
      record.outsideMaskRgbPreserved,
      true,
      `${context}: outside-mask preservation flag missing`
    );
  } else {
    assert.equal(record.sourceKind, "official-direct", `${context}: unknown source kind`);
  }
}

assert.equal(contexts.size, 241);
assert.equal(masks.size, 97);
assert.equal(report.unavailable.length, 6);
console.log(
  `X material previews: ${contexts.size} generated, ${masks.size} masks, ` +
    `${report.unavailable.length} unresolved candidates`
);
