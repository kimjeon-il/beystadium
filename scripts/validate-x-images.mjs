import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { xImageMappings, xImageUnavailable } from "../data/source/x-images.mjs";

const REPORT_ARG = process.argv.find(argument => argument.startsWith("--report="));
const REPORT_PATH = REPORT_ARG?.slice("--report=".length) || "";
const xItems = [...beyItems, ...partItems].filter(item => item.series === "x");
const xIds = new Set(xItems.map(item => item.id));

function uniqueValues(values, label) {
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

async function validateOutputs() {
  uniqueValues(xImageMappings.map(entry => entry.id), "mapping IDs");
  uniqueValues(xImageMappings.map(entry => entry.image), "mapping output paths");
  uniqueValues(xImageUnavailable.map(entry => entry.id), "unavailable IDs");

  const accountedIds = [
    ...xImageMappings.map(entry => entry.id),
    ...xImageUnavailable.map(entry => entry.id)
  ];
  uniqueValues(accountedIds, "accounted X item IDs");
  assert.deepEqual(new Set(accountedIds), xIds, "every X Bey and part must be mapped or unavailable");
  assert.equal(xImageMappings.length, 441);
  assert.equal(xImageUnavailable.length, 24);

  for (const entry of xImageUnavailable) {
    assert.ok(entry.reason?.trim(), `${entry.id} needs an unavailable reason`);
  }

  for (const entry of xImageMappings) {
    assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(entry.sourcePath || entry.sourceUrl, `${entry.id} needs source provenance`);
    assert.equal(xItems.find(item => item.id === entry.id)?.image, entry.image);
    const bytes = await readFile(path.resolve(entry.image));
    assert.ok(bytes.length > 500, `${entry.id} output is unexpectedly small`);
    const info = webpInfo(bytes);
    assert.ok(info.width > 0 && info.height > 0, `${entry.id} has invalid dimensions`);
    assert.ok(info.hasAlpha, `${entry.id} does not advertise an alpha channel`);
  }
}

async function validateSourceHashes() {
  if (!REPORT_PATH) return;
  const report = JSON.parse(await readFile(path.resolve(REPORT_PATH), "utf8"));
  const selectedById = new Map(report.selected.map(entry => [entry.id, entry]));
  for (const mapping of xImageMappings) {
    const selected = selectedById.get(mapping.id);
    assert.ok(selected, `${mapping.id} is missing from the local mapping report`);
    const source = selected.sourceFile
      ? path.resolve(selected.sourceFile)
      : path.join(report.sourceRoot, ...selected.source.split("/"));
    await stat(source);
    const digest = createHash("sha256").update(await readFile(source)).digest("hex");
    assert.equal(digest, mapping.sourceSha256, `${mapping.id} source hash changed`);
  }
}

await validateOutputs();
await validateSourceHashes();
console.log(`X images: ${xImageMappings.length} mapped, ${xImageUnavailable.length} unavailable`);
