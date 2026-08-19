import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { beyItems } from "../data/source/catalog.mjs";
import {
  bladePartIds,
  xBeyPrimaryImageConfig
} from "../data/source/x-bey-primary-images.mjs";
import { xImageMappings } from "../data/source/x-images.mjs";
import { suppliedFronts } from "./fixtures/x-bey-supplied-fronts.mjs";

const REPORT_ARG = process.argv.find(argument => argument.startsWith("--report="));
const REPORT_PATH = REPORT_ARG?.slice("--report=".length) || "";
const OFFICIAL_IMAGE_ROOT = "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image";
const ALPHA_REVIEW_PATH = path.resolve("data/source/x-image-alpha-review.json");
const xImageById = new Map(xImageMappings.map(entry => [entry.id, entry]));
const selectedFrontById = new Map(
  xBeyPrimaryImageConfig.selected.map(entry => [entry.id, entry])
);
const temporarySideById = new Map(
  xBeyPrimaryImageConfig.temporarySideImages.map(entry => [entry.id, entry])
);

function uniqueValues(values, label) {
  assert.equal(new Set(values).size, values.length, `${label} contains duplicates`);
}

function sourceUrl(entry) {
  if (entry.sourceUrl) return entry.sourceUrl;
  if (entry.sourceFile?.startsWith("data/source/")) return entry.sourceFile;
  if (entry.sourcePath?.startsWith("data/source/")) return entry.sourcePath;
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

uniqueValues(xBeyPrimaryImageConfig.selected.map(entry => entry.id), "selected front IDs");
uniqueValues(xBeyPrimaryImageConfig.selected.map(entry => entry.image), "selected front paths");
uniqueValues(xBeyPrimaryImageConfig.temporarySideImages.map(entry => entry.id), "temporary side IDs");
uniqueValues([
  ...selectedFrontById.keys(),
  ...temporarySideById.keys()
], "explicit primary image classifications");
assert.equal(xBeyPrimaryImageConfig.version, "20260819-x-bey-canonical-image-paths");
assert.deepEqual(xBeyPrimaryImageConfig.normalization, {
  method: "premultiplied-alpha-uniform-long-edge",
  canvasSize: 448,
  targetForegroundSize: 360,
  alphaThreshold: 3,
  resample: "lanczos",
  eligibleSourceKinds: [
    "official-assembled-front",
    "user-approved-generated-front",
    "verified-existing-front"
  ]
});
assert.equal(xBeyPrimaryImageConfig.selected.length, 224);
assert.equal(
  new Set(xBeyPrimaryImageConfig.selected.map(entry => entry.image)).size,
  224,
  "front-view normalization paths must be unique"
);

assert.equal(suppliedFronts.size, 98);

const correctedWizardMapping = xImageById.get("BEY-X-BX-17-WIZARD-ARROW-4-80B");
assert.ok(correctedWizardMapping, "BX-17 Wizard Arrow source mapping is missing");
assert.equal(
  correctedWizardMapping.sourcePath,
  "02_product_components/020_bx17/04_BX17_04@1.png"
);
assert.equal(
  correctedWizardMapping.sourceSha256,
  "8033a9a10dbc4c3b5a959249920014c8ce82135652dcf1563d9e151fbbd4c6c5"
);
assert.equal(
  await outputAudit(selectedFrontById.get("BEY-X-BX-17-WIZARD-ARROW-4-80B").image),
  selectedFrontById.get("BEY-X-BX-17-WIZARD-ARROW-4-80B").outputSha256
);

for (const [id, sourcePath, sourceSha256] of [
  ["BEY-X-BX-20-DRAN-DAGGER-4-60R", "02_product_components/023_bx20/02_BX20_b_01@1.png", "831b58ddb219011cff57de4d70eee102e5c6d6bbd315990af54e54df16c47078"],
  ["BEY-X-BX-20-KNIGHT-SHIELD-5-80T", "02_product_components/023_bx20/10_BX20_p_01@1.png", "8df350c13e115774e79e00d80e1f574ff485d2495833c7e7061a2145d0195e00"],
  ["BEY-X-BX-20-SHARK-EDGE-3-80F", "02_product_components/023_bx20/06_BX20_g_01@1.png", "46015ec92c41462254e62bde982222726b67afa2c5ae150a208351f88ffed6f2"],
  ["BEY-X-UX-04-WIZARD-ROD-5-70DB", "02_product_components/039_ux04/04_UX04_04@1.png", "3252eec1bcb692d6c9fb77d553d7ba4370547ef3af75787b0d18fb9cd1e6af2c"],
  ["BEY-X-UX-05-01-NINJA-SHADOW-1-80MN", "02_product_components/043_ux05/02_UX05_02@1.png", "608ecbf5748abd8f5aeef41769fe20315da84dd81f9e3d144a62a161a6acc29b"],
  ["BEY-X-BX-35-01-BLACK-TURTLE-4-60D", "02_product_components/048_bx35/02_BX35_02@1.png", "8a1ebcbeaaa79bca5746642cd394fecefeb062e9b67abb6ea96379d3b8b200d7"],
  ["BEY-X-BX-35-04-WIZARD-ROD-1-60R", "02_product_components/048_bx35/07_BX35_07@1.png", "5cf281d4eb7bde8f99d8b6f5677ba74c505cd6ea44d564960a6fb0f6b70d1334"],
  ["BEY-X-BX-35-06-VIPER-TAIL-5-70D", "02_product_components/048_bx35/05_BX35_05@1.png", "e6bb3975bce67d40b7a3d6a53fa757c2c88e3192b08598fe57ef7a3d46002540"]
]) {
  const mapping = xImageById.get(id);
  assert.ok(mapping, `${id}: source mapping is missing`);
  assert.equal(mapping.sourcePath, sourcePath);
  assert.equal(mapping.sourceSha256, sourceSha256);
}

const preservedExistingFronts = new Map([
  ["BEY-X-BX-17-DRAN-SWORD-3-60F", {
    classification: "official-assembled-front",
    sourcePath: "02_product_components/020_bx17/01_BX17_01@1.png",
    sourceSha256: "cbb0830baadb1386ba59a71777336767fb9bae049ad7eb05af38d28783fca8a5"
  }],
  ["BEY-X-BX-27-02-SPHINX-COWL-4-80HT", {
    classification: "verified-existing-front",
    sourcePath: "02_product_components/030_bx27/03_BX27_03@1.png",
    sourceSha256: "997f458f29cfa66f6169f58fb7e7c33a8f64c3064e61720169a4579e7794b5d4"
  }],
  ["BEY-X-BX-27-03-SPHINX-COWL-5-60O", {
    classification: "verified-existing-front",
    sourcePath: "02_product_components/030_bx27/04_BX27_04@1.png",
    sourceSha256: "432ae33d3179f05557ea7e20d8beb0346aa0b2a5aaf59d6c9ee90704f0ce97a0"
  }]
]);
for (const [id, expected] of preservedExistingFronts) {
  const selected = selectedFrontById.get(id);
  assert.ok(selected, `${id}: preserved front classification is missing`);
  assert.equal(selected.sourceKind, expected.classification, `${id}: preserved front classification changed`);
  const mapping = xImageById.get(id);
  assert.ok(mapping, `${id}: preserved source mapping is missing`);
  assert.equal(mapping.sourcePath, expected.sourcePath);
  assert.equal(mapping.sourceSha256, expected.sourceSha256);
  assert.equal(await outputAudit(selected.image), selected.outputSha256);
}

const randomBoosterSelectGroups = [
  ["BX16", [
    "BEY-X-BX-16-01-VIPER-TAIL-5-80O",
    "BEY-X-BX-16-02-VIPER-TAIL-4-60F",
    "BEY-X-BX-16-03-VIPER-TAIL-3-80HN"
  ]],
  ["BX27", [
    "BEY-X-BX-27-01-SPHINX-COWL-9-80GN",
    "BEY-X-BX-27-02-SPHINX-COWL-4-80HT",
    "BEY-X-BX-27-03-SPHINX-COWL-5-60O"
  ]],
  ["UX05", [
    "BEY-X-UX-05-01-NINJA-SHADOW-1-80MN",
    "BEY-X-UX-05-02-NINJA-SHADOW-9-60LF",
    "BEY-X-UX-05-03-NINJA-SHADOW-3-70GP"
  ]],
  ["BX36", [
    "BEY-X-BX-36-01-WHALE-WAVE-5-80E",
    "BEY-X-BX-36-02-WHALE-WAVE-4-70HN",
    "BEY-X-BX-36-03-WHALE-WAVE-3-80GB"
  ]],
  ["BX39", [
    "BEY-X-BX-39-01-SHELTER-DRAKE-7-80GP",
    "BEY-X-BX-39-02-SHELTER-DRAKE-5-70O",
    "BEY-X-BX-39-03-SHELTER-DRAKE-3-60D"
  ]],
  ["CX06", [
    "BEY-X-CX-06-01-FOX-BRUSH-J-9-70GR",
    "BEY-X-CX-06-02-FOX-BRUSH-J-0-80DB",
    "BEY-X-CX-06-03-FOX-BRUSH-J-2-60U"
  ]],
  ["UX16", [
    "BEY-X-UX-16-01-CLOCK-MIRAGE-9-65B",
    "BEY-X-UX-16-02-CLOCK-MIRAGE-9-65B",
    "BEY-X-UX-16-03-CLOCK-MIRAGE-9-65B"
  ]],
  ["CX18", [
    "BEY-X-CX-18-01-BRACHIO-WHIP-OW-5-70NR",
    "BEY-X-CX-18-02-BRACHIO-WHIP-OW-5-70NR",
    "BEY-X-CX-18-03-BRACHIO-WHIP-OW-5-70NR"
  ]]
];
assert.equal(randomBoosterSelectGroups.flatMap(([, ids]) => ids).length, 24);
for (const [productCode, ids] of randomBoosterSelectGroups) {
  ids.forEach((id, index) => {
    const expectedFileName = `${productCode}_${String(index + 2).padStart(2, "0")}@1.png`;
    const selected = selectedFrontById.get(id);
    assert.ok(selected, `${id}: Select primary image classification is missing`);
    if (selected.sourceUrl) {
      assert.equal(
        path.posix.basename(new URL(selected.sourceUrl).pathname),
        expectedFileName,
        `${id}: Select front source order changed`
      );
      return;
    }
    assert.equal(
      path.posix.basename(selected.sourcePath).replace(/^\d+_/, ""),
      expectedFileName,
      `${id}: Select source order changed`
    );
  });
}

const approvedGeneratedFronts = new Map([
  ["BEY-X-BX-00-IRON-MAN-4-80B", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-iron-man-4-80b-generated.png",
    sourceSha256: "66c8a74562b04c42ab58c104283390b50d1b83a831a86a1df3610697503adcc2",
    processingMethod: "deterministic-cgi-material-and-sticker-composite",
    geometryAuthoritySha256: "22aede842139042a0281ea82a076ba7bed4c2a8cac5deb075a00f7d8ea908e3d",
    rawReferenceSha256: "05c3ab0d5158f1062c39bbaf569d2e3846973bdb39b679549b000ed5e8b1698d",
    styleAuthoritySha256: "0f8222b43ec4e280d261a8cf0a0ac334fad46a5efdea869a4c4ff0a9d05c8c2c",
    imageGenerationUsed: false
  }],
  ["BEY-X-BX-00-THANOS-4-60P", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-thanos-4-60p-generated.png",
    sourceSha256: "128bff090ac184ea257b85ae00499dec8538e383a0c10aee4b21049000dea1ca",
    processingMethod: "deterministic-cgi-material-and-sticker-composite",
    geometryAuthoritySha256: "cdbe6b02806a4285ad5b34b36903fe7d2a9323a8561263fa590039852cc438e4",
    rawReferenceSha256: "a860a1c1b4de0635574fd8df4a023defb6e67e2bed87c0b743ab837b434bd288",
    styleAuthoritySha256: "19eb4313c8dd2e06f59b78d55e3bdda75c0aa11d6059cbff2c3fae7d1bdd8f40",
    imageGenerationUsed: false
  }],
  ["BEY-X-BX-00-DRAN-SWORD-1-60V", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-dran-sword-1-60v-generated.png",
    sourceSha256: "37070fde1767ad6b9b38e51a1b4bf3bbcc0905c1b544edc1207ee4c2b8f6e21c",
    processingMethod: "imagegen-chroma-key-protected-center-composite",
    geometryAuthoritySha256: "21a1f3ec92cc0ccca2c3767324199c22862aff7501c9d5ee23638836f393fcba",
    rawReferenceSha256: "607998e1d3c80d5d3d5051e88b874c3912a8475021ddd86e923291290724c87a",
    styleAuthoritySha256: "9bc5bd6d3372c026575df168aa258d8fae68dea7c6c72df92d0785b24772edd3",
    bladeAuthoritySha256: "6661a70e0ab10b639b58dd40a328a83358ef5a8ba9b514cdc314a55d10245dbf",
    ratchetAuthoritySha256: "23ba25a3e7a64d15725dddb1abe07573ea8c74f9558ecae84acfc375aac5c1de",
    bitAuthoritySha256: "559cb40e5807b73e4881030cf4d29467e8b318b75ff8777e98e9feb53a30096e",
    generationPromptSha256: "91687090458e80eac8a44b3fbeeb3173d17eb37952e8c0c6968e91198dae5c89",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-COBALT-DRAGOON-9-60F", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-cobalt-dragoon-9-60f-generated.png",
    sourceSha256: "a963b81463618f008883ea188f818be98500c1513c16bda8c7d2814cd50e166b",
    processingMethod: "imagegen-chroma-key-protected-center-composite",
    geometryAuthoritySha256: "9161f0460172fdd4175afbe124b7eab8d60e1f3967c7de9fbfb3a2e45b46a173",
    rawReferenceSha256: "39068f71a95caf19e301179f8aa9327931592179eef54772539d40487ba80a8a",
    styleAuthoritySha256: "1d50a3bce9fc15244c87cf587dfeef93e776f32cd81efd53354bc142b0fc0097",
    bladeAuthoritySha256: "ed114c1beaa434d6152e7175e4236f2eb5c4801101212d2f99f95375699464eb",
    ratchetAuthoritySha256: "6a07de386eb81d8a70885a86fd0e3f4e537de10b86207a1ce51b108209d73492",
    bitAuthoritySha256: "76ada5e602bcf13c8eb3b2a7611317a0dd55222d39d78230a211b619ea7a13b6",
    generationPromptSha256: "b9fb94d54763e1f7dc9fda3dea7e3ea7ec74465e66b6537854a7d66f5c05f67f",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-DRACIEL-SHIELD-7-60D", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-draciel-shield-7-60d-generated.png",
    sourceSha256: "5bceef35154d9d546045c6b0779d215afa67dc21768f39272771389bb84f0267",
    processingMethod: "imagegen-orthographic-angle-correction-plus-official-center-reprojection",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-draciel-shield-angle.json",
    geometryAuthoritySha256: "d0e6acb83417fcab8467f8a8e2afcc85028eec4eefc94aea71f2066dbf5bc669",
    rawReferenceSha256: "0343a6d1050e61a25b276392e440568836dafb3bc4cf6798ecb52cf16d1c3a8d",
    styleAuthoritySha256: "d0e6acb83417fcab8467f8a8e2afcc85028eec4eefc94aea71f2066dbf5bc669",
    angleReferenceSha256: "0ed2f3a1405021ade8ebe57358f82bf879ff5771b40bf9f5f161ddd22b517672",
    centralArtworkSourceSha256: "98d85a58e1284af9792390d72c55836e28694dd407d74a898f1f8407f69a508b",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-SPIDER-MAN-3-60F", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-spider-man-3-60f-generated.png",
    sourceSha256: "576251729af9cf23672fc99b17b58a047caf88b8baf63d4e048a8316f7b696a6",
    processingMethod: "imagegen-variant-front-plus-deterministic-character-restoration",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-spider-optimus-generated-fronts.json",
    geometryAuthoritySha256: "b6c3e462da90ceeb02c8b1959c536e89bf1c899ce89b3f51b9ccfe6d52cfb9bf",
    rawReferenceSha256: "bb17995eba3ba224ae8aefe7101d88f589b8b31c98a149ab463399234a6aa1a8",
    styleAuthoritySha256: "ff75e0d1ec6eff87136775933e2de73406c45fa20d5af050fafab707c2ee359e",
    characterSourceSha256: "5fac71ff00fe19bb56be89b2ad99d84a0d693e7a1e4f98e7290b45958e75f6f1",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-OPTIMUS-PRIMAL-3-60F", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-optimus-primal-3-60f-generated.png",
    sourceSha256: "8b7cb5e0f41ec5a3b28d5cc20b3399cc9e6042bd8c535785119f4c30710c0136",
    processingMethod: "imagegen-character-composite-plus-deterministic-gear-chip-hook-lock",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-spider-optimus-generated-fronts.json",
    geometryAuthoritySha256: "add68e47d710f7788c34e3c894d2a3dc0126afad80710b6ffcbea108b00adf40",
    rawReferenceSha256: "c67da5a16b0f07c92ea3ce75ef5d4d1a41c536cf97aa7990c4d479c0920d937a",
    styleAuthoritySha256: "add68e47d710f7788c34e3c894d2a3dc0126afad80710b6ffcbea108b00adf40",
    gearChipTemplateSha256: "91c76f7ab92bf5049d7af98d1168bde60adb7c3f8e95f5c8960d160e83e2078c",
    hookStructureMismatchPixels: 0,
    imageGenerationUsed: true
  }],
  ["BEY-X-UX-15-TYRANNO-ROAR-1-70L", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-ux-15-tyranno-roar-1-70l-generated.png",
    sourceSha256: "851a05a2b868c330801b2a7798537f4804548ceb838e78de4a431be8001610e6",
    processingMethod: "imagegen-web-reference-front-with-source-sticker-restoration",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-tyranno-quetzal-generated-fronts.json",
    geometryAuthoritySha256: "dade6965bc54b1d253fad33fd76fc16b6945c0882f479b78bd8f34eca58ff12a",
    rawReferenceSha256: "f5ed58351e5962ccbef88fab9989ae56fa62987f98315dea59645fae0ffda4d4",
    styleAuthoritySha256: "bd86e7dc4f7a41fcb28786a0e14d7c3cf9ac109f401eb0b34c352414dbaa687a",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-QUETZALCOATLUS-4-55D", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-quetzalcoatlus-4-55d-generated.png",
    sourceSha256: "ba5e46a2ed7216866d17ad0cdd74e08c74e65524ad90dacd4ec9f04a7495bd49",
    processingMethod: "imagegen-web-reference-front-with-deterministic-sticker-and-metal-refinement",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-tyranno-quetzal-generated-fronts.json",
    geometryAuthoritySha256: "c59cf66a88643082b3f14b32afccd4e23ad98c66760ec33c25c4e6cf63f1dfb4",
    rawReferenceSha256: "5776d2bb9ead336816b4ea47ca9467b0bf0e06f622c67110feca1ac489c6ac49",
    styleAuthoritySha256: "da067758ef8958b73029c67f2a761b3f522f396885c4a7378edce6d3e2351fc9",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-MOFF-GIDEON-3-80N", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-moff-gideon-3-80n-generated.png",
    sourceSha256: "5f20e5ae975044a893ea6a727bc629d636d06597de1d98271450d840ad6f9ea8",
    processingMethod: "imagegen-low-frequency-color-transfer-plus-deterministic-pure-black-ring",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-moff-gideon-gear-chip-vivid.json",
    geometryAuthoritySha256: "80a5fb3677bb0ddecd84b381a01359b6bc882c9d48f559e0559cd5621634304b",
    rawReferenceSha256: "6bdffb0ac4b57eedd4ec4e662d010ba50c7798b7d056cb5c41e556a0eeced16c",
    styleAuthoritySha256: "b0142adf2c73a42ffc0799242aa0549ff7bdceed812c8fb31272042b2f6f0763",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-OPTIMUS-PRIME-4-60P", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-optimus-prime-4-60p-generated.png",
    sourceSha256: "cf3ce974da6b4511c21fa198f33207e9473f5e45ffb7dc0bdd867b2fa67e74cf",
    processingMethod: "imagegen-full-bey-chroma-key-plus-deterministic-normalization",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-variant-generated-fronts-4.json",
    geometryAuthoritySha256: "cf3ce974da6b4511c21fa198f33207e9473f5e45ffb7dc0bdd867b2fa67e74cf",
    rawReferenceSha256: "3ec15bb1462ca62ef11b7f74cb20dd2e2a1157ea67f3f592e808d4135c67016d",
    styleAuthoritySha256: "b0142adf2c73a42ffc0799242aa0549ff7bdceed812c8fb31272042b2f6f0763",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-MEGATRON-4-80B", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-megatron-4-80b-generated.png",
    sourceSha256: "11eb7bc0aa4b341f91ecd528ede8022e8f0b560908c5515acfca549661e6ce2b",
    processingMethod: "imagegen-full-bey-chroma-key-plus-deterministic-normalization",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-variant-generated-fronts-4.json",
    geometryAuthoritySha256: "11eb7bc0aa4b341f91ecd528ede8022e8f0b560908c5515acfca549661e6ce2b",
    rawReferenceSha256: "ff8028e6ec5945350b6398f73b9ddc121177c898c3ef10feddc085857a8bf5cd",
    styleAuthoritySha256: "b0142adf2c73a42ffc0799242aa0549ff7bdceed812c8fb31272042b2f6f0763",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-STARSCREAM-3-80N", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-starscream-3-80n-generated.png",
    sourceSha256: "78858b427b6e08726ca3358bcb966f70a745a06d7515a2d409ca379bdd457477",
    processingMethod: "imagegen-full-bey-chroma-key-plus-deterministic-normalization",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-variant-generated-fronts-4.json",
    geometryAuthoritySha256: "78858b427b6e08726ca3358bcb966f70a745a06d7515a2d409ca379bdd457477",
    rawReferenceSha256: "125e0a7b87e735a2a6eaa83b4d818dd9ad0505d047c45ad8591dab7a9d1f9e03",
    styleAuthoritySha256: "b0142adf2c73a42ffc0799242aa0549ff7bdceed812c8fb31272042b2f6f0763",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-DRIGER-SLASH-4-80P", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-driger-slash-4-80p-gear-chip-black-vivid.png",
    sourceSha256: "f5eb0cd5ee09220e9e4e2d15c6d84af310af0dc46ab346c77551f1803859708a",
    processingMethod: "imagegen-base-plus-deterministic-gear-chip-black-vivid",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-nonfront-6-gear-chip-black-vivid.json",
    geometryAuthoritySha256: "74c66925c1b30eb653f94c439b2453c337d0311d2df61b000b94442cf1b6a9c2",
    rawReferenceSha256: "ea041b16c03a5070dd96b6b5f6a7fd930299eff09cd69c55e62c379fb071f8e8",
    styleAuthoritySha256: "9b592570a9f4cc7d2222a5128610e6b09a38434532621c561a25f088805f03bc",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-VENOM-3-80N", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-venom-3-80n-gear-chip-black-vivid.png",
    sourceSha256: "621cb8f9a11bbb6b3acecae74d0a09b9bf45fe93ca72fea322539dd68b745413",
    processingMethod: "imagegen-base-plus-deterministic-gear-chip-black-vivid",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-nonfront-6-gear-chip-black-vivid.json",
    geometryAuthoritySha256: "8b2e13bdf4fede78f2a81adbeb22fa9aad93d62edf4f827a491309378148bfaf",
    rawReferenceSha256: "d468b2d9fc4dcf6fff2b74f8b931f7ec68ff3647959d04d6d4f2b5279b9def05",
    styleAuthoritySha256: "8eb4f0562ce4f436e639eef2dc64b5e5668eda605599929d7251a63be29ba308",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-LUKE-SKYWALKER-4-80B", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-luke-skywalker-4-80b-gear-chip-black-vivid.png",
    sourceSha256: "88939ca5cca6693ffbbf10f068c0502bf16520626946cb2701f60f556e130a5a",
    processingMethod: "imagegen-base-plus-deterministic-gear-chip-black-vivid",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-nonfront-6-gear-chip-black-vivid.json",
    geometryAuthoritySha256: "902e28f9b042fe929afa0790bc82705fa21adae0a9273f77bceb7e924203d6bd",
    rawReferenceSha256: "0f07f64e907c81d471abdc4963bad225241f9aca2e97a9141da5b11dde9282a3",
    styleAuthoritySha256: "173211dc38db5e4829ddeac6913030988df70f166e6201b25a4821bf1c7a63aa",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-DARTH-VADER-4-60P", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-darth-vader-4-60p-gear-chip-black-vivid.png",
    sourceSha256: "c909fb44343bc83c70b2c57e8b5f1bc099ce9055b45a196cbd037c8499bcdf48",
    processingMethod: "imagegen-base-plus-deterministic-gear-chip-black-vivid",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-nonfront-6-gear-chip-black-vivid.json",
    geometryAuthoritySha256: "2fe76b1ffa4064f32d2134272519a3ddccccad0a029c66634aaa8154ef667dab",
    rawReferenceSha256: "f9a8b72de0c39b5bdf9eb9008b1705f148d57d8b176490b56104b023a205e071",
    styleAuthoritySha256: "2fa0990fc1f4f9fddd7352d8dcdbfd9003f07caa5524cba8a46a27ec85f7a85e",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-THE-MANDALORIAN-3-60F", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-the-mandalorian-3-60f-gear-chip-black-vivid.png",
    sourceSha256: "0c38651f6247b56c5a3e4457a9ea41ea7020da9c282b56e4b7ae6cb600441745",
    processingMethod: "imagegen-base-plus-deterministic-gear-chip-black-vivid",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-nonfront-6-gear-chip-black-vivid.json",
    geometryAuthoritySha256: "c7e62a53cffa2187f3a6624e7fec3676e0067de2021f644d2041574171e5bf38",
    rawReferenceSha256: "24e143c8eb7d8b82b522b510d74695ab66d70dc5e63085d88dfbee386a32b411",
    styleAuthoritySha256: "c70f97a620a26df4476ccd49e015748aa155bc4e0e861d90841ca31732c602b3",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-SPINOSAURUS-3-85A", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-spinosaurus-3-85a-gear-chip-black-vivid.png",
    sourceSha256: "a044aaa129c4b633e8bc27f4642bc23d2d445be463e6721f7274afee1810826c",
    processingMethod: "imagegen-base-plus-deterministic-gear-chip-black-vivid",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-nonfront-6-gear-chip-black-vivid.json",
    geometryAuthoritySha256: "03ede1f2a3a794b26d32b33dd422fb534def00174b0d93baa8693aa130a562a8",
    rawReferenceSha256: "b00e0ce20ff9a8f8a2337541778fc77c4953ff8955200b09054b6ff443b136e0",
    styleAuthoritySha256: "1656c31d82bf7b556f04a63447a4131259ba5eecd0e70744da7ca922b561ebf1",
    imageGenerationUsed: true
  }],
  ["BEY-X-UX-00-WARRIOR-SABER-2-70L", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-ux-00-warrior-saber-2-70l-highlight-transition.png",
    sourceSha256: "10c414a415ab6c45af5d078adf7e426447f137be869eaaf6bcc85cc06934378e",
    processingMethod: "imagegen-base-plus-deterministic-oklab-distance-field-highlight-transition",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-warrior-saber-generated-front.json",
    postProcessingProvenanceFile: "data/source/x-bey-front-sources/x-warrior-saber-highlight-transition.json",
    geometryAuthoritySha256: "b2f452912bc9acac7882bab6c40e2fac2a8464883f671aa47dda0510d3d26a40",
    rawReferenceSha256: "b2f452912bc9acac7882bab6c40e2fac2a8464883f671aa47dda0510d3d26a40",
    styleAuthoritySha256: "80c41f941c7e114aba004edeaafd25b89da008dd834b22d94526aeb24ec1ebd3",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-STORM-SPRIGGAN-2-70M", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-storm-spriggan-2-70m-generated.png",
    sourceSha256: "465805f8466457b63ce0be6f52393abd7001ae14c64214a75541143cdf64bd52",
    processingMethod: "existing-imagegen-output-chroma-key-removal-plus-premultiplied-normalization",
    generationProvenanceFile: "data/source/x-bey-front-sources/x-storm-spriggan-generated-front.json",
    geometryAuthoritySha256: "4ef0942495a424833c408e15ecf03320483f590104cef4842d4f6518a91bca6a",
    rawReferenceSha256: "4ef0942495a424833c408e15ecf03320483f590104cef4842d4f6518a91bca6a",
    styleAuthoritySha256: "e742920505b3df100420796cc6447d666b3052688f19bd62e59c758859ddb063",
    imageGenerationUsed: true
  }],
  ["BEY-X-BX-00-HELLS-SCYTHE-3-80F", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-hells-scythe-3-80f-simple-recolor-stickers-v4.png",
    sourceSha256: "f721cae7845aeb83a8464d8f5bc7414982df99901934cbe9fa7538b9cd967764",
    processingMethod: "deterministic-official-front-ratchet-recolor-and-original-sticker-pixel-composite",
    postProcessingProvenanceFile: "data/source/x-bey-front-sources/x-hells-scythe-3-80f-simple-recolor-stickers-v4.json",
    geometryAuthoritySha256: "de3bdb2b1396ab3ab9d1e52788335aa6738ce0515eee4b3072651f2eaf7803ec",
    rawReferenceSha256: "c73ddcdcd32a673eba82e408b6b653dc72120542c0a2e60f1edc3a8df6e64f3d",
    styleAuthoritySha256: "de3bdb2b1396ab3ab9d1e52788335aa6738ce0515eee4b3072651f2eaf7803ec",
    imageGenerationUsed: false
  }]
]);
const generatedFrontProvenanceByFile = new Map();
for (const provenanceFile of [
  "data/source/x-bey-front-sources/x-dran-cobalt-generated-fronts.json",
  "data/source/x-bey-front-sources/x-spider-optimus-generated-fronts.json",
  "data/source/x-bey-front-sources/x-tyranno-quetzal-generated-fronts.json",
  "data/source/x-bey-front-sources/x-variant-generated-fronts-4.json",
  "data/source/x-bey-front-sources/x-moff-gideon-gear-chip-vivid.json",
  "data/source/x-bey-front-sources/x-draciel-shield-angle.json",
  "data/source/x-bey-front-sources/x-nonfront-6-gear-chip-harmony.json",
  "data/source/x-bey-front-sources/x-nonfront-6-gear-chip-black-vivid.json",
  "data/source/x-bey-front-sources/x-warrior-saber-generated-front.json",
  "data/source/x-bey-front-sources/x-storm-spriggan-generated-front.json",
  "data/source/x-bey-front-sources/x-hells-scythe-3-80f-generated-front.json"
]) {
  const provenance = JSON.parse(await readFile(path.resolve(provenanceFile), "utf8"));
  generatedFrontProvenanceByFile.set(
    provenanceFile,
    {
      provenance,
      jobsById: new Map(provenance.jobs.map(entry => [entry.id, entry]))
    }
  );
}
const verifiedSuppliedFronts = new Map([
  ["BEY-X-BX-00-CROCO-CRUNCH-2-60Q", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-croco-crunch-2-60q-verified-color-matched.png",
    sourceSha256: "636902a7aef7f2a6e4e279811f943f5eda71ddd58bd53270547952b4791702ad",
    rawReferenceFile: "data/source/x-bey-front-sources/bey-x-bx-00-croco-crunch-2-60q-color-match-input.png",
    rawReferenceSha256: "07e9615fdf8921898f6cc14823291c5099c5f04d474a41ffc1da0d7167685a21",
    colorReferenceFile: "data/source/x-bey-front-sources/bey-x-bx-00-croco-crunch-2-60q-color-reference.png",
    colorReferenceSha256: "7bf10543a86daf742fccea40a495b5b6eb3706a80a7ad50c54dc55fc52a9db37",
    processingMethod: "material-separated-hsv-quantile-color-match-with-gear-chip-black-white-preservation",
    provenanceFile: "data/source/x-bey-front-sources/x-croco-crunch-front.json"
  }],
  ["BEY-X-BX-00-NINJA-KNIFE-4-60LF", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-ninja-knife-4-60lf-verified.png",
    sourceSha256: "a6d9d6437f40a0bc278c87c2028becbf30bec5a3a1ce52e8420ffec7932fd94d",
    rawReferenceFile: "data/source/x-bey-front-sources/bey-x-bx-00-ninja-knife-4-60lf-user-raw.webp",
    rawReferenceSha256: "763c8374dd41724b1ee47485eb00bbef8f9d02c961345e622b260e055e162c40",
    processingMethod: "largest-connected-alpha-component-plus-premultiplied-normalization",
    provenanceFile: "data/source/x-bey-front-sources/x-ninja-knife-front.json"
  }],
  ["BEY-X-BX-00-T-REX-1-80GB", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-t-rex-1-80gb-verified.png",
    sourceSha256: "a9c014fa1a30750801d5e3cc046b9f162eb2a588ea3b55e2d1293ca52f6092a4",
    rawReferenceSha256: "b180e53744897f8bdf264fc7131c6507c5512340017adf06e2334a0ad9174e27"
  }],
  ["BEY-X-BX-00-MOSASAURUS-9-60U", {
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-mosasaurus-9-60u-verified.png",
    sourceSha256: "691bef673e992ec24b68387cfdbae9c3c09847be1a1b967a2e23ffbf9541ef1f",
    rawReferenceSha256: "b0142adf2c73a42ffc0799242aa0549ff7bdceed812c8fb31272042b2f6f0763"
  }]
]);

for (const entry of xBeyPrimaryImageConfig.selected) {
  if (entry.sourceKind === "user-approved-generated-front") {
    if (entry.id !== "BEY-X-BX-00-PHOENIX-SOAR-9-80DB") {
      const expected = approvedGeneratedFronts.get(entry.id);
      assert.ok(expected, `${entry.id}: generated front is not approved`);
      assert.equal(entry.sourceFile, expected.sourceFile);
      assert.equal(entry.sourceSha256, expected.sourceSha256);
      assert.equal(
        createHash("sha256").update(await readFile(path.resolve(entry.sourceFile))).digest("hex"),
        entry.sourceSha256,
        `${entry.id}: approved source hash changed`
      );
      assert.equal(entry.normalizationInput, "source-file");
      assert.equal(entry.preserveSourcePixels, true);
      assert.equal(entry.processingMethod, expected.processingMethod);
      assert.equal(entry.geometryAuthoritySha256, expected.geometryAuthoritySha256);
      assert.equal(entry.rawReferenceSha256, expected.rawReferenceSha256);
      assert.equal(entry.styleAuthoritySha256, expected.styleAuthoritySha256);
      assert.equal(entry.imageGenerationUsed, expected.imageGenerationUsed);
      for (const field of [
        "characterSourceSha256",
        "gearChipTemplateSha256",
        "hookStructureMismatchPixels",
        "angleReferenceSha256",
        "centralArtworkSourceSha256",
        "postProcessingProvenanceFile",
        "colorMatchProvenanceFile"
      ]) {
        if (Object.hasOwn(expected, field)) assert.equal(entry[field], expected[field]);
      }
      if (expected.imageGenerationUsed) {
        const provenanceFile = expected.generationProvenanceFile
          || "data/source/x-bey-front-sources/x-dran-cobalt-generated-fronts.json";
        assert.equal(entry.generationProvenanceFile, provenanceFile);
        for (const field of [
          "generationPromptSha256",
          "bladeAuthoritySha256",
          "ratchetAuthoritySha256",
          "bitAuthoritySha256"
        ]) {
          if (Object.hasOwn(expected, field)) assert.equal(entry[field], expected[field]);
        }
        if (Object.hasOwn(expected, "generationPromptSha256")) {
          assert.equal(entry.protectedCenterInnerRadius, 78);
          assert.equal(entry.protectedCenterFeatherEndRadius, 86);
          assert.equal(entry.greenResidualPixels, 0);
          assert.equal(entry.protectedMismatchPixels, 0);
        }
        const provenanceSet = generatedFrontProvenanceByFile.get(provenanceFile);
        assert.ok(provenanceSet, `${entry.id}: generated provenance file is not approved`);
        const provenance = provenanceSet.jobsById.get(entry.id);
        assert.ok(provenance, `${entry.id}: generated provenance is missing`);
        assert.equal(provenance.sourceFile, entry.sourceFile);
        assert.equal(provenance.sourceSha256, entry.sourceSha256);
        assert.equal(provenance.finalOutputSha256, entry.outputSha256);
        assert.deepEqual(
          provenance.normalizedForegroundBox || provenance.validation?.bbox,
          entry.normalizedForegroundBox
        );
        if (Object.hasOwn(expected, "generationPromptSha256")) {
          assert.equal(provenance.promptSha256, entry.generationPromptSha256);
          assert.equal(provenance.rawGeneratedSha256, entry.rawReferenceSha256);
          const reconstructedPrompt = provenanceSet.provenance.promptTemplate
            .replaceAll("{targetName}", provenance.targetName)
            .replaceAll("{baseName}", provenance.baseName);
          assert.equal(
            createHash("sha256").update(reconstructedPrompt).digest("hex"),
            provenance.promptSha256,
            `${entry.id}: recorded prompt changed`
          );
        }
        assert.equal(provenance.validation.greenResidualPixels, 0);
        if (expected.postProcessingProvenanceFile) {
          const postProcessing = JSON.parse(
            await readFile(path.resolve(expected.postProcessingProvenanceFile), "utf8")
          );
          assert.equal(postProcessing.version, xBeyPrimaryImageConfig.version);
          assert.equal(postProcessing.id, entry.id);
          assert.equal(postProcessing.imageGenerationUsedForRevision, false);
          assert.equal(postProcessing.balancedSource.file, entry.sourceFile);
          assert.equal(postProcessing.balancedSource.sha256, entry.sourceSha256);
          assert.equal(postProcessing.validation.alphaMismatchPixels, 0);
          assert.equal(postProcessing.validation.outsideMaterialRgbaMismatchPixels, 0);
          assert.equal(postProcessing.validation.centerRgbaMismatchPixels, 0);
          assert.equal(postProcessing.validation.screwRgbaMismatchPixels, 0);
          assert.equal(postProcessing.validation.outputSha256, entry.outputSha256);
          assert.deepEqual(
            postProcessing.validation.normalizedForegroundBox,
            entry.normalizedForegroundBox
          );
        }
        if (expected.colorMatchProvenanceFile) {
          const colorMatch = JSON.parse(
            await readFile(path.resolve(expected.colorMatchProvenanceFile), "utf8")
          );
          assert.equal(colorMatch.version, xBeyPrimaryImageConfig.version);
          assert.equal(colorMatch.id, entry.id);
          assert.equal(colorMatch.imageGenerationUsedForRevision, false);
          assert.equal(colorMatch.output.sourceFile, entry.sourceFile);
          assert.equal(colorMatch.output.sourceSha256, entry.sourceSha256);
          assert.equal(colorMatch.output.finalSha256, entry.outputSha256);
          assert.equal(colorMatch.validation.alphaMismatchPixels, 0);
          assert.equal(colorMatch.validation.outsideMaskRgbaMismatchPixels, 0);
          assert.deepEqual(
            colorMatch.validation.normalizedForegroundBox,
            entry.normalizedForegroundBox
          );
        }
        if (Object.hasOwn(provenance.validation, "protectedMismatchPixels")) {
          assert.equal(provenance.validation.protectedMismatchPixels, 0);
        }
        if (Object.hasOwn(provenance.validation, "componentCount")) {
          assert.equal(provenance.validation.componentCount, 1);
        }
      }
      assert.equal(entry.preNormalizationSha256, entry.sourceSha256);
      assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);
      assert.equal(entry.normalizedForegroundBox.length, 4);
      continue;
    }
    assert.equal(entry.sourceFile, "data/source/x-bey-front-sources/bey-x-bx-00-phoenix-soar-9-80db-generated.png");
    assert.equal(entry.sourceSha256, "5869ebe48c1ae08a595de7ff3ef6a552e51e0ea8a5c859de39f21b7f8fd7b7fe");
    assert.equal(
      createHash("sha256").update(await readFile(path.resolve(entry.sourceFile))).digest("hex"),
      entry.sourceSha256,
      `${entry.id}: approved source hash changed`
    );
    assert.equal(entry.backgroundRemoval, "connected-light-background");
    assert.equal(entry.backgroundThreshold, 245);
    assert.equal(entry.backgroundChroma, 12);
    assert.equal(entry.foregroundErode, 2);
    assert.equal(entry.targetForegroundSize, 360);
    assert.equal(entry.preserveSourcePixels, true);
    assert.equal(entry.preNormalizationSha256, "8921c200df26d3068603f0f8aea452711f0d09f37b2ed3a792d660436f6b5489");
    assert.equal(entry.outputSha256, "8921c200df26d3068603f0f8aea452711f0d09f37b2ed3a792d660436f6b5489");
    assert.deepEqual(entry.normalizedForegroundBox, [44, 44, 403, 404]);
    continue;
  }
  if (entry.sourceKind === "verified-existing-front") {
    if (entry.sourceRef === "x-images") {
      const mapping = xImageById.get(entry.id);
      assert.ok(mapping, `${entry.id}: verified X image provenance is missing`);
      assert.equal(entry.view, "front-top");
      assert.equal(entry.sourcePath, mapping.sourcePath);
      assert.equal(entry.sourceUrl, mapping.sourceUrl);
      assert.equal(entry.sourceSha256, mapping.sourceSha256);
      assert.match(entry.preNormalizationSha256, /^[a-f0-9]{64}$/);
      assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);
      assert.equal(entry.normalizedForegroundBox.length, 4);
      continue;
    }
    const expected = verifiedSuppliedFronts.get(entry.id);
    assert.ok(expected, `${entry.id}: verified front is not approved`);
    assert.equal(entry.sourceFile, expected.sourceFile);
    assert.equal(entry.sourceSha256, expected.sourceSha256);
    assert.equal(
      createHash("sha256").update(await readFile(path.resolve(entry.sourceFile))).digest("hex"),
      entry.sourceSha256,
      `${entry.id}: verified source hash changed`
    );
    assert.equal(entry.normalizationInput, "source-file");
    assert.equal(entry.preserveSourcePixels, true);
    assert.equal(entry.rawReferenceSha256, expected.rawReferenceSha256);
    for (const field of [
      "sourceUrl",
      "rawReferenceFile",
      "colorReferenceFile",
      "compositionReferenceSha256",
      "alphaReferenceSha256",
      "processingMethod",
      "provenanceFile"
    ]) {
      if (Object.hasOwn(expected, field)) assert.equal(entry[field], expected[field]);
    }
    if (expected.rawReferenceFile) {
      assert.equal(
        createHash("sha256").update(await readFile(path.resolve(expected.rawReferenceFile))).digest("hex"),
        expected.rawReferenceSha256,
        `${entry.id}: raw reference hash changed`
      );
    }
    if (expected.colorReferenceFile) {
      assert.equal(entry.colorReferenceSha256, expected.colorReferenceSha256);
      assert.equal(
        createHash("sha256").update(await readFile(path.resolve(expected.colorReferenceFile))).digest("hex"),
        expected.colorReferenceSha256,
        `${entry.id}: color reference hash changed`
      );
    }
    if (expected.provenanceFile) {
      const provenance = JSON.parse(await readFile(path.resolve(expected.provenanceFile), "utf8"));
      assert.equal(provenance.version, xBeyPrimaryImageConfig.version);
      assert.equal(provenance.id, entry.id);
      assert.equal(provenance.imageGenerationUsed, false);
      assert.equal(provenance.rawSource.sha256, expected.rawReferenceSha256);
      if (expected.colorReferenceFile) {
        assert.equal(provenance.colorReference.file, expected.colorReferenceFile);
        assert.equal(provenance.colorReference.sha256, expected.colorReferenceSha256);
        assert.equal(provenance.validation.alphaMismatchPixels, 0);
        assert.equal(provenance.validation.blackGearChipMismatchPixels, 0);
        assert.equal(provenance.validation.whiteGearChipMismatchPixels, 0);
        assert.equal(provenance.validation.newChannelClippingPixels, 0);
      }
      assert.equal(provenance.transparentSource.sha256, entry.sourceSha256);
      assert.equal(provenance.finalOutput.sha256, entry.outputSha256);
      assert.deepEqual(provenance.finalOutput.normalizedForegroundBox, entry.normalizedForegroundBox);
    }
    assert.equal(entry.imageGenerationUsed, false);
    assert.equal(entry.preNormalizationSha256, entry.sourceSha256);
    assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);
    assert.equal(entry.normalizedForegroundBox.length, 4);
    continue;
  }
  assert.equal(entry.sourceKind, "official-assembled-front");
  assert.match(
    entry.sourceUrl,
    /^https:\/\/(?:beyblade\.takaratomy\.co\.jp|www\.takaratomyasia\.com)\//
  );
  assert.match(entry.sourceSha256, /^[a-f0-9]{64}$/);
  assert.match(entry.preNormalizationSha256, /^[a-f0-9]{64}$/);
  assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);
  assert.equal(entry.normalizedForegroundBox.length, 4);
  if (entry.sourceCrop) {
    assert.equal(entry.sourceCrop.length, 4);
    assert.ok(entry.sourceCrop.every(Number.isInteger));
  }
  if (entry.sourceScale) assert.ok(entry.sourceScale > 0);
}
for (const [id, expected] of suppliedFronts) {
  const entry = selectedFrontById.get(id);
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
  if ("sourceScale" in expected) assert.equal(entry.sourceScale, expected.sourceScale);
}
for (const entry of xBeyPrimaryImageConfig.temporarySideImages) {
  assert.ok(entry.reason?.trim(), `${entry.id}: temporary side view needs a reason`);
  assert.match(entry.evidenceUrl, /^https?:\/\//);
}

const alphaReview = JSON.parse(await readFile(ALPHA_REVIEW_PATH, "utf8"));
assert.equal(alphaReview.version, "20260819-x-bey-canonical-image-paths");
const alphaReviewByImage = new Map(alphaReview.files.map(entry => [entry.image, entry]));
const normalizedEntries = xBeyPrimaryImageConfig.selected;
assert.equal(normalizedEntries.length, 224);
for (const entry of normalizedEntries) {
  const itemSlug = entry.id.toLowerCase();
  assert.equal(
    entry.image,
    `assets/images/x/beys/${itemSlug}/${itemSlug}.webp`,
    `${entry.id}: primary image does not use the canonical path`
  );
  const review = alphaReviewByImage.get(entry.image);
  assert.ok(review, `${entry.id}: normalized image is missing from the alpha review`);
  assert.equal(review.outputSha256, entry.outputSha256, `${entry.id}: normalized output hash changed`);
  assert.deepEqual(review.bbox, entry.normalizedForegroundBox, `${entry.id}: normalized box changed`);
  const [left, top, right, bottom] = review.bbox;
  assert.equal(
    Math.max(right - left, bottom - top),
    xBeyPrimaryImageConfig.normalization.targetForegroundSize,
    `${entry.id}: normalized foreground is not 360px`
  );
  assert.ok(Math.abs(left - (448 - right)) <= 1, `${entry.id}: normalized image is not horizontally centered`);
  assert.ok(Math.abs(top - (448 - bottom)) <= 1, `${entry.id}: normalized image is not vertically centered`);
}

const audit = [];
const counts = {
  officialAssembledFront: 0,
  userApprovedGeneratedFront: 0,
  verifiedExistingFront: 0,
  temporarySide: 0
};
const xBeys = beyItems.filter(item => item.series === "x" && item.image);
assert.equal(xBeys.length, 224);

for (const item of xBeys) {
  const bladeIds = bladePartIds(item);
  let classification;
  let provenance;
  let exceptionReason = "";
  if (selectedFrontById.has(item.id)) {
    provenance = selectedFrontById.get(item.id);
    classification = provenance.sourceKind;
    assert.equal(item.image, provenance.image, `${item.id}: selected front is not primary`);
    if (classification === "official-assembled-front") {
      counts.officialAssembledFront += 1;
    } else if (classification === "user-approved-generated-front") {
      counts.userApprovedGeneratedFront += 1;
    } else {
      assert.equal(classification, "verified-existing-front");
      counts.verifiedExistingFront += 1;
    }
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
  if (
    classification === "official-assembled-front"
    || classification === "user-approved-generated-front"
  ) {
    assert.equal(outputSha256, provenance.outputSha256, `${item.id}: front output hash changed`);
  } else if (classification === "verified-existing-front") {
    assert.equal(outputSha256, provenance.outputSha256, `${item.id}: verified front output hash changed`);
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
  officialAssembledFront: 116,
  userApprovedGeneratedFront: 23,
  verifiedExistingFront: 85,
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
