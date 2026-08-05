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
assert.equal(xBeyPrimaryImageConfig.version, "20260805-x-bey-supplied-front-images-expanded");
assert.equal(xBeyAngleCorrectionConfig.version, xBeyPrimaryImageConfig.version);
assert.equal(xBeyAngleCorrectionConfig.method, "premultiplied-alpha-vertical-affine");
assert.equal(xBeyPrimaryImageConfig.selected.length, 29);
assert.equal(xBeyAngleCorrectionConfig.entries.length, 96);
assert.equal(xBeyPrimaryImageConfig.verifiedMain.length, 94);

const suppliedFronts = new Map([
  ["BEY-X-BX-00-DRANZER-SPIRAL-3-80T", {
    sourceUrl: "https://www.takaratomyasia.com/en/toys/beyblade-x/x-over-project/bx-00-booster-dranzerspiral-3-80t",
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-dranzer-spiral-3-80t.png",
    sourceSha256: "9735358d4b0719abc98935c03a68a7677498ceb581045055e98fb62e39c4413c",
    sourceForegroundBox: [128, 187, 460, 521]
  }],
  ["BEY-X-BX-01-DRAN-SWORD-3-60F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX01_01@1.png",
    sourceSha256: "82aaa884854fe2c381798c35d91caaf768e141951f870833c9a278eda653ed0f",
    sourceForegroundBox: [118, 177, 467, 536]
  }],
  ["BEY-X-BX-02-HELLS-SCYTHE-4-60T", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX02_01@1.png",
    sourceSha256: "9f5120004f7793286cee2532028d5fcea17ee5f3978febe122cc4821e358fd02",
    sourceForegroundBox: [120, 182, 465, 528]
  }],
  ["BEY-X-BX-03-WIZARD-ARROW-4-80B", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX03_01@1.png",
    sourceSha256: "3889aa28bdfe23a1ce75e3feb452223e075da03948ac5307937909e60a49290f",
    sourceForegroundBox: [122, 189, 463, 519]
  }],
  ["BEY-X-BX-04-KNIGHT-SHIELD-3-80N", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX04_01@1.png",
    sourceSha256: "89d90ff31b74af37aa6e8020a16e7462ff8123db72b7fae4f402ad9642d16d0b",
    sourceForegroundBox: [120, 184, 462, 526]
  }],
  ["BEY-X-BX-05-WIZARD-ARROW-4-80B", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX05_01@1.png",
    sourceSha256: "742f51399f2808e4c99d2a0bbecb68fd87550c6e769f19d3d6b658e94a0d3c73",
    sourceForegroundBox: [123, 186, 464, 517]
  }],
  ["BEY-X-BX-49-DRAN-STRIKE-4-50FF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX49_01@1.png",
    sourceSha256: "390cedff58474dad8b2f0190cbabd25fdaaef9a6c7803861a1f7621945e3fc2d",
    sourceForegroundBox: [115, 179, 471, 530]
  }],
  ["BEY-X-UX-20-GLORY-VALKYRIE-LF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX20_01@1.png",
    sourceSha256: "be1e0b2bacecc0a1a5dd4e96aaada15de3f3d0fcce087979d7262219b7d85cc6",
    sourceForegroundBox: [116, 168, 471, 542]
  }],
  ["BEY-X-UX-19-BULLET-GRIFFON-H", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX19_01@1.png",
    sourceSha256: "ba2ce482b3e334aa62777ea7857b0550f8c4488ec39d01c37227c040c272e7d8",
    sourceForegroundBox: [115, 177, 471, 531]
  }],
  ["BEY-X-UX-00-SCORPIO-SPEAR-0-70Z", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG61_01@1.png",
    sourceSha256: "ada44b9a1889c292a9cba5abf4f2d705bcc58c138b5f1ec93f2e74ad0a5aab64",
    sourceForegroundBox: [117, 180, 471, 529]
  }],
  ["BEY-X-UX-00-WARRIOR-SABER-5-60K", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG54_01@1.png",
    sourceSha256: "24f8bb1987440612b1bd17aa9cfbc57860d31f7e1543fcae24d130217e6770a9",
    sourceForegroundBox: [115, 173, 471, 537]
  }]
]);
assert.equal(suppliedFronts.size, 11);

for (const entry of xBeyPrimaryImageConfig.selected) {
  assert.equal(entry.sourceKind, "official-assembled-front");
  assert.match(
    entry.sourceUrl,
    /^https:\/\/(?:beyblade\.takaratomy\.co\.jp|www\.takaratomyasia\.com)\//
  );
  assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
  assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);
  if (entry.sourceCrop) {
    assert.equal(entry.sourceCrop.length, 4);
    assert.ok(entry.sourceCrop.every(Number.isInteger));
  }
  if (entry.sourceScale) assert.ok(entry.sourceScale > 0);
}
for (const [id, expected] of suppliedFronts) {
  const entry = officialFrontById.get(id);
  assert.ok(entry, `${id}: supplied official front is missing`);
  assert.equal(entry.sourceKind, "official-assembled-front");
  assert.equal(entry.sourceUrl, expected.sourceUrl);
  assert.equal(entry.sourceSha256, expected.sourceSha256);
  if (expected.sourceFile) {
    assert.equal(entry.sourceFile, expected.sourceFile);
    assert.equal(
      createHash("sha256").update(await readFile(path.resolve(entry.sourceFile))).digest("hex"),
      expected.sourceSha256,
      `${id}: supplied source file hash changed`
    );
  }
  assert.equal(entry.segmentationModel, "u2netp");
  assert.equal(entry.alphaMatting, false);
  assert.equal(entry.keepLargestComponent, true);
  assert.equal(entry.preserveSourcePixels, true);
  assert.deepEqual(entry.sourceForegroundBox, expected.sourceForegroundBox);
  assert.ok(!angleCorrectionById.has(id), `${id}: still classified as angle-corrected`);
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
  officialAngleCorrected: 96,
  officialAssembledFront: 29,
  verifiedExistingFront: 94,
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
