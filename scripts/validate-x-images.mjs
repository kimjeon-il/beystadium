import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { xImageMappings, xImageUnavailable } from "../data/source/x-images.mjs";
import { xImageReview } from "../data/source/x-image-review.mjs";
import { xCatalogImagePath } from "./x-image-paths.mjs";

const REPORT_ARG = process.argv.find(argument => argument.startsWith("--report="));
const REPORT_PATH = REPORT_ARG?.slice("--report=".length) || "";
const ALPHA_REVIEW_PATH = path.resolve("data/source/x-image-alpha-review.json");
const ALPHA_REVIEW_VERSION = "20260805-x-bey-supplied-front-images-ux01-bx35";
const xItems = [...beyItems, ...partItems].filter(item => item.series === "x");
const xIds = new Set(xItems.map(item => item.id));
const expectedCorrectedSources = {
  "BEY-X-BX-37-BEAR-SCRATCH-5-60F": "02_product_components/061_bx37/03_BX37_03@1.png",
  "PART-X-BLADE-BEAR-SCRATCH": "02_product_components/061_bx37/04_BX37_04@1.png",
  "BEY-X-BX-48-02-SHARK-EDGE-4-70E": "02_product_components/119_bx48/04_BX48_04@1.png",
  "BEY-X-BX-48-03-MAMMOTH-TUSK-7-60S": "02_product_components/119_bx48/03_BX48_03@1.png",
  "BEY-X-BX-48-04-HELLS-SCYTHE-3-85GB": "02_product_components/119_bx48/06_BX48_06@1.png",
  "BEY-X-BX-48-05-DRAN-BUSTER-2-80Q": "02_product_components/119_bx48/05_BX48_05@1.png"
};

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

async function webpFiles(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await webpFiles(entryPath));
    } else if (entry.isFile() && entry.name.endsWith(".webp")) {
      files.push(entryPath);
    }
  }
  return files;
}

async function validateOutputs() {
  uniqueValues(xImageMappings.map(entry => entry.id), "mapping IDs");
  uniqueValues(xImageMappings.map(entry => entry.image), "mapping output paths");
  uniqueValues(xImageUnavailable.map(entry => entry.id), "unavailable IDs");
  uniqueValues(xImageReview.map(entry => entry.id), "reviewed mapping IDs");

  const accountedIds = [
    ...xImageMappings.map(entry => entry.id),
    ...xImageUnavailable.map(entry => entry.id)
  ];
  uniqueValues(accountedIds, "accounted X item IDs");
  assert.deepEqual(new Set(accountedIds), xIds, "every X Bey and part must be mapped or unavailable");
  assert.equal(xImageMappings.length, 441);
  assert.equal(xImageUnavailable.length, 24);
  assert.equal(xImageReview.length, xImageMappings.length);
  const mappingById = new Map(xImageMappings.map(entry => [entry.id, entry]));
  for (const [id, sourcePath] of Object.entries(expectedCorrectedSources)) {
    assert.equal(mappingById.get(id)?.sourcePath, sourcePath, `${id} uses the wrong official image`);
  }

  for (const entry of xImageUnavailable) {
    assert.ok(entry.reason?.trim(), `${entry.id} needs an unavailable reason`);
  }

  const reviewById = new Map(xImageReview.map(entry => [entry.id, entry]));
  for (const entry of xImageMappings) {
    const item = xItems.find(candidate => candidate.id === entry.id);
    assert.equal(entry.image, xCatalogImagePath(item), `${entry.id} uses the wrong image layout`);
    assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
    assert.ok(entry.sourcePath || entry.sourceUrl, `${entry.id} needs source provenance`);
    if (item?.type !== "bey") assert.equal(item?.image, entry.image);
    const bytes = await readFile(path.resolve(entry.image));
    assert.ok(bytes.length > 500, `${entry.id} output is unexpectedly small`);
    const info = webpInfo(bytes);
    assert.deepEqual(
      [info.width, info.height],
      [448, 448],
      `${entry.id} does not use the fixed X image canvas`
    );
    assert.ok(info.hasAlpha, `${entry.id} does not advertise an alpha channel`);

    const review = reviewById.get(entry.id);
    assert.ok(review, `${entry.id} has not been visually reviewed`);
    assert.equal(review.image, entry.image, `${entry.id} reviewed output path changed`);
    assert.equal(
      review.sourcePath || review.sourceUrl,
      entry.sourcePath || entry.sourceUrl,
      `${entry.id} reviewed source changed`
    );
    assert.equal(review.sourceSha256, entry.sourceSha256, `${entry.id} reviewed source hash changed`);
    const outputSha256 = createHash("sha256").update(bytes).digest("hex");
    assert.equal(outputSha256, review.outputSha256, `${entry.id} output no longer matches its review`);
  }

  const files = await webpFiles(path.resolve("assets/images/x"));
  assert.equal(files.length, 1036, "X image file count changed");
  assert.equal(
    files.some(file => file.includes(`${path.sep}part-previews${path.sep}`)),
    false,
    "legacy X part preview directory remains"
  );

  const alphaReview = JSON.parse(await readFile(ALPHA_REVIEW_PATH, "utf8"));
  assert.equal(alphaReview.version, ALPHA_REVIEW_VERSION);
  assert.equal(alphaReview.canvasSize, 448);
  assert.equal(alphaReview.files.length, files.length);
  uniqueValues(alphaReview.files.map(entry => entry.image), "alpha review image paths");
  const filePaths = files
    .map(file => path.relative(process.cwd(), file).split(path.sep).join("/"))
    .sort();
  assert.deepEqual(
    alphaReview.files.map(entry => entry.image).sort(),
    filePaths,
    "alpha review does not cover the current X image set"
  );
  for (const entry of alphaReview.files) {
    assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);
    assert.ok(entry.alphaLevels >= 16, `${entry.image} has a quantized alpha edge`);
    assert.ok(entry.partialPixels > 0, `${entry.image} has a binary alpha edge`);
    assert.ok(entry.foregroundPixels > entry.partialPixels, `${entry.image} has no solid foreground`);
    assert.equal(entry.bbox.length, 4);
    assert.equal(entry.margins.length, 4);
    assert.ok(Math.min(...entry.margins) >= 6, `${entry.image} has insufficient padding`);
    assert.ok(entry.bbox[2] - entry.bbox[0] <= 436, `${entry.image} is too wide`);
    assert.ok(entry.bbox[3] - entry.bbox[1] <= 436, `${entry.image} is too tall`);
    const bytes = await readFile(path.resolve(entry.image));
    assert.equal(
      createHash("sha256").update(bytes).digest("hex"),
      entry.outputSha256,
      `${entry.image} no longer matches its alpha review`
    );
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
