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
const ALPHA_REVIEW_VERSION = "20260811-x-warrior-saber-imagegen-direct";
const generatedMainImageIds = new Set([
  "BEY-X-BX-00-DRACIEL-SHIELD-7-60D"
]);
const xItems = [...beyItems, ...partItems].filter(item => item.series === "x");
const xIds = new Set(xItems.map(item => item.id));
const expectedCorrectedSources = {
  "BEY-X-UX-12-03-LEON-CLAW-0-80E": "02_product_components/070_ux12/05_UX12_05@1.png",
  "BEY-X-UX-12-04-PHOENIX-FEATHER-2-60N": "02_product_components/070_ux12/06_UX12_06@1.png",
  "BEY-X-UX-12-05-NINJA-SHADOW-3-80F": "02_product_components/070_ux12/04_UX12_04@1.png",
  "BEY-X-BX-20-DRAN-DAGGER-4-60R": "02_product_components/023_bx20/02_BX20_b_01@1.png",
  "BEY-X-BX-20-KNIGHT-SHIELD-5-80T": "02_product_components/023_bx20/10_BX20_p_01@1.png",
  "BEY-X-BX-20-SHARK-EDGE-3-80F": "02_product_components/023_bx20/06_BX20_g_01@1.png",
  "BEY-X-BX-35-04-WIZARD-ROD-1-60R": "02_product_components/048_bx35/07_BX35_07@1.png",
  "BEY-X-BX-35-06-VIPER-TAIL-5-70D": "02_product_components/048_bx35/05_BX35_05@1.png",
  "BEY-X-BX-31-03-HELLS-CHAIN-9-80O": "02_product_components/041_bx31/04_BX31_04@1.png",
  "BEY-X-BX-31-04-DRAN-DAGGER-4-70P": "02_product_components/041_bx31/03_BX31_03@1.png",
  "BEY-X-BX-37-BEAR-SCRATCH-5-60F": "02_product_components/061_bx37/03_BX37_03@1.png",
  "PART-X-BLADE-BEAR-SCRATCH": "02_product_components/061_bx37/04_BX37_04@1.png",
  "BEY-X-BX-48-02-SHARK-EDGE-4-70E": "02_product_components/119_bx48/04_BX48_04@1.png",
  "BEY-X-BX-48-03-MAMMOTH-TUSK-7-60S": "02_product_components/119_bx48/03_BX48_03@1.png",
  "BEY-X-BX-48-04-HELLS-SCYTHE-3-85GB": "02_product_components/119_bx48/05_BX48_05@1.png",
  "BEY-X-BX-48-05-DRAN-BUSTER-2-80Q": "02_product_components/119_bx48/06_BX48_06@1.png",
  "BEY-X-CX-05-01-HELLS-REAPER-T-4-70K": "02_product_components/087_cx05/02_CX05_02@1.png",
  "BEY-X-UX-15-SHARK-SCALE-4-50UF": "02_product_components/106_ux15/02_UX15_02@1.png",
  "BEY-X-BX-46-GORE-TACKLE-7-70T": "02_product_components/108_bx46/04_BX46_04@1.png",
  "BEY-X-BX-46-COBALT-DRAKE-9-60R": "02_product_components/108_bx46/03_BX46_03@1.png",
  "BEY-X-UX-16-01-CLOCK-MIRAGE-9-65B": "02_product_components/110_ux16/02_UX16_02@1.png",
  "BEY-X-CX-11-SHARK-GILL-5-60FB": "02_product_components/112_cx11/08_CX11_08@1.png",
  "BEY-X-CX-11-GOLEM-ROCK-M-85HN": "02_product_components/112_cx11/12_CX11_12@1.png"
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
  assert.equal(xImageMappings.length, 443);
  assert.equal(xImageUnavailable.length, 22);
  assert.equal(xImageReview.length, xImageMappings.length);
  const mappingById = new Map(xImageMappings.map(entry => [entry.id, entry]));
  const phoenixComposite = mappingById.get("BEY-X-BX-00-PHOENIX-SOAR-9-80DB");
  assert.deepEqual(phoenixComposite, {
    id: "BEY-X-BX-00-PHOENIX-SOAR-9-80DB",
    image: "assets/images/x/beys/bey-x-bx-00-phoenix-soar-9-80db/front.webp",
    sourcePath: "data/source/x-bey-front-sources/bey-x-bx-00-phoenix-soar-9-80db-generated.png",
    sourceSha256: "5869ebe48c1ae08a595de7ff3ef6a552e51e0ea8a5c859de39f21b7f8fd7b7fe",
    sourceKind: "user-approved-generated-front",
    backgroundRemoval: "connected-light-background",
    backgroundThreshold: 245,
    backgroundChroma: 12,
    foregroundErode: 2,
    targetForegroundSize: 360,
    preserveSourcePixels: true
  });
  for (const [id, expected] of new Map([
    ["BEY-X-BX-00-COBALT-DRAGOON-9-60F", {
      image: "assets/images/x/beys/bey-x-bx-00-cobalt-dragoon-9-60f/front.webp",
      sourcePath: "data/source/x-bey-front-sources/bey-x-bx-00-cobalt-dragoon-9-60f-generated.png",
      sourceSha256: "a963b81463618f008883ea188f818be98500c1513c16bda8c7d2814cd50e166b"
    }],
    ["BEY-X-BX-00-DRACIEL-SHIELD-7-60D", {
      image: "assets/images/x/beys/bey-x-bx-00-draciel-shield-7-60d/main.webp",
      sourcePath: "data/source/x-bey-front-sources/bey-x-bx-00-draciel-shield-7-60d-generated.png",
      sourceSha256: "5bceef35154d9d546045c6b0779d215afa67dc21768f39272771389bb84f0267"
    }],
    ["BEY-X-BX-00-DRAN-SWORD-1-60V", {
      image: "assets/images/x/beys/bey-x-bx-00-dran-sword-1-60v/front.webp",
      sourcePath: "data/source/x-bey-front-sources/bey-x-bx-00-dran-sword-1-60v-generated.png",
      sourceSha256: "37070fde1767ad6b9b38e51a1b4bf3bbcc0905c1b544edc1207ee4c2b8f6e21c"
    }],
    ["BEY-X-BX-00-IRON-MAN-4-80B", {
      image: "assets/images/x/beys/bey-x-bx-00-iron-man-4-80b/front.webp",
      sourcePath: "data/source/x-bey-front-sources/bey-x-bx-00-iron-man-4-80b-generated.png",
      sourceSha256: "66c8a74562b04c42ab58c104283390b50d1b83a831a86a1df3610697503adcc2"
    }],
    ["BEY-X-BX-00-THANOS-4-60P", {
      image: "assets/images/x/beys/bey-x-bx-00-thanos-4-60p/front.webp",
      sourcePath: "data/source/x-bey-front-sources/bey-x-bx-00-thanos-4-60p-generated.png",
      sourceSha256: "128bff090ac184ea257b85ae00499dec8538e383a0c10aee4b21049000dea1ca"
    }],
    ["BEY-X-BX-00-SPIDER-MAN-3-60F", {
      image: "assets/images/x/beys/bey-x-bx-00-spider-man-3-60f/front.webp",
      sourcePath: "data/source/x-bey-front-sources/bey-x-bx-00-spider-man-3-60f-generated.png",
      sourceSha256: "576251729af9cf23672fc99b17b58a047caf88b8baf63d4e048a8316f7b696a6"
    }],
    ["BEY-X-BX-00-OPTIMUS-PRIMAL-3-60F", {
      image: "assets/images/x/beys/bey-x-bx-00-optimus-primal-3-60f/front.webp",
      sourcePath: "data/source/x-bey-front-sources/bey-x-bx-00-optimus-primal-3-60f-generated.png",
      sourceSha256: "8b7cb5e0f41ec5a3b28d5cc20b3399cc9e6042bd8c535785119f4c30710c0136"
    }],
    ["BEY-X-UX-15-TYRANNO-ROAR-1-70L", {
      image: "assets/images/x/beys/bey-x-ux-15-tyranno-roar-1-70l/front.webp",
      sourcePath: "data/source/x-bey-front-sources/bey-x-ux-15-tyranno-roar-1-70l-generated.png",
      sourceSha256: "851a05a2b868c330801b2a7798537f4804548ceb838e78de4a431be8001610e6"
    }],
    ["BEY-X-BX-00-QUETZALCOATLUS-4-55D", {
      image: "assets/images/x/beys/bey-x-bx-00-quetzalcoatlus-4-55d/front.webp",
      sourcePath: "data/source/x-bey-front-sources/bey-x-bx-00-quetzalcoatlus-4-55d-generated.png",
      sourceSha256: "ba5e46a2ed7216866d17ad0cdd74e08c74e65524ad90dacd4ec9f04a7495bd49"
    }]
  ])) {
    const entry = mappingById.get(id);
    assert.ok(entry, `${id}: generated front mapping is missing`);
    assert.equal(entry.image, expected.image);
    assert.equal(entry.sourcePath, expected.sourcePath);
    assert.equal(entry.sourceSha256, expected.sourceSha256);
    assert.equal(entry.sourceKind, "user-approved-generated-front");
    assert.equal(entry.normalizationInput, "source-file");
    assert.equal(entry.preserveSourcePixels, true);
  }
  for (const [id, sourcePath] of Object.entries(expectedCorrectedSources)) {
    assert.equal(mappingById.get(id)?.sourcePath, sourcePath, `${id} uses the wrong official image`);
  }

  for (const entry of xImageUnavailable) {
    assert.ok(entry.reason?.trim(), `${entry.id} needs an unavailable reason`);
  }

  const reviewById = new Map(xImageReview.map(entry => [entry.id, entry]));
  for (const entry of xImageMappings) {
    const item = xItems.find(candidate => candidate.id === entry.id);
    const expectedImage = ["user-approved-generated-front", "verified-existing-front"].includes(entry.sourceKind)
      && !generatedMainImageIds.has(entry.id)
      ? `assets/images/x/beys/${entry.id.toLowerCase()}/front.webp`
      : xCatalogImagePath(item);
    assert.equal(entry.image, expectedImage, `${entry.id} uses the wrong image layout`);
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
    assert.equal(review.sourceKind, entry.sourceKind, `${entry.id} reviewed source kind changed`);
    for (const field of [
      "backgroundRemoval",
      "backgroundThreshold",
      "backgroundChroma",
      "foregroundErode",
      "targetForegroundSize",
      "preserveSourcePixels",
      "normalizationInput"
    ]) {
      assert.equal(review[field], entry[field], `${entry.id} reviewed ${field} changed`);
    }
    const outputSha256 = createHash("sha256").update(bytes).digest("hex");
    assert.equal(outputSha256, review.outputSha256, `${entry.id} output no longer matches its review`);
  }

  const files = await webpFiles(path.resolve("assets/images/x"));
  assert.equal(files.length, 1046, "X image file count changed");
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
      : selected.source.startsWith("data/source/")
        ? path.resolve(selected.source)
        : path.join(report.sourceRoot, ...selected.source.split("/"));
    await stat(source);
    const digest = createHash("sha256").update(await readFile(source)).digest("hex");
    assert.equal(digest, mapping.sourceSha256, `${mapping.id} source hash changed`);
  }
}

await validateOutputs();
await validateSourceHashes();
console.log(`X images: ${xImageMappings.length} mapped, ${xImageUnavailable.length} unavailable`);
