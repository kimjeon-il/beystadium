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
const ALPHA_REVIEW_PATH = path.resolve("data/source/x-image-alpha-review.json");
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

uniqueValues(xBeyPrimaryImageConfig.selected.map(entry => entry.id), "official front IDs");
uniqueValues(xBeyPrimaryImageConfig.selected.map(entry => entry.image), "official front paths");
uniqueValues(xBeyAngleCorrectionConfig.entries.map(entry => entry.id), "angle correction IDs");
uniqueValues(xBeyAngleCorrectionConfig.entries.map(entry => entry.image), "angle correction paths");
uniqueValues(xBeyPrimaryImageConfig.verifiedMain.map(entry => entry.id), "verified main IDs");
uniqueValues(xBeyPrimaryImageConfig.verifiedMain.map(entry => entry.image), "verified main paths");
uniqueValues(xBeyPrimaryImageConfig.temporarySideImages.map(entry => entry.id), "temporary side IDs");
uniqueValues([
  ...officialFrontById.keys(),
  ...angleCorrectionById.keys(),
  ...verifiedMainById.keys(),
  ...temporarySideById.keys()
], "explicit primary image classifications");
assert.equal(xBeyPrimaryImageConfig.version, "20260807-x-phoenix-wing-generated-front");
assert.equal(xBeyAngleCorrectionConfig.version, xBeyPrimaryImageConfig.version);
assert.equal(xBeyAngleCorrectionConfig.method, "premultiplied-alpha-vertical-affine");
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
assert.equal(xBeyPrimaryImageConfig.selected.length, 110);
assert.equal(xBeyAngleCorrectionConfig.entries.length, 28);
assert.equal(xBeyPrimaryImageConfig.verifiedMain.length, 82);
assert.equal(
  new Set([
    ...xBeyPrimaryImageConfig.selected.map(entry => entry.image),
    ...xBeyPrimaryImageConfig.verifiedMain.map(entry => entry.image)
  ]).size,
  192,
  "front-view normalization paths must be unique"
);

const suppliedFronts = new Map([
  ["BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG_07_02@1.png",
    sourceSha256: "a2cfa4089b00e64bb529fd752d7e2d1a584d2c9c0dc2635ec99b1dfb3c1bdd7b"
  }],
  ["BEY-X-BX-00-02-LIGHTNING-L-DRAGO-BARRAGE-1-60F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG_07_04@1.png",
    sourceSha256: "d21ec3547c7a06807b071b5219a8b9d812e1e155e21833b4ab98230b3fd921a7"
  }],
  ["BEY-X-BX-00-COBALT-DRAGOON-2-60C", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG14_01@1.png",
    sourceSha256: "8cb4f189f0d833799b13abeaf213dd2597acc4fe0798356e5dabd86cab619956"
  }],
  ["BEY-X-BX-00-COBALT-DRAKE-4-60F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/news/news240930.html",
    sourceFile: "data/source/x-bey-front-sources/bey-x-bx-00-cobalt-drake-4-60f.png",
    sourceSha256: "9f78a5863b0539f0da650a992b76ef9cfde117322aa1078eebd65de4acc64401",
    sourceScale: 0.36
  }],
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
  ["BEY-X-BX-06-KNIGHT-SHIELD-3-80N", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX06_01@1.png",
    sourceSha256: "02399f77e33e4952716cf3be1beca55dc16e14c798fb20820952c628b42c239f",
    sourceForegroundBox: [122, 182, 463, 524]
  }],
  ["BEY-X-BX-07-DRAN-SWORD-3-60F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX07_01@1.png",
    sourceSha256: "d19097c0e1c428f511b1fd2a1a45e86a745da9bbda23efaa43b3165e5ebbe27a",
    sourceForegroundBox: [118, 179, 466, 537]
  }],
  ["BEY-X-BX-08-HELLS-SCYTHE-3-80B", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX08_y_01@1.png",
    sourceSha256: "964f1d57883b1053cd33af6653d151f49dc573f03f270fcd92b564acb9e686b7",
    sourceForegroundBox: [122, 183, 464, 526]
  }],
  ["BEY-X-BX-08-WIZARD-ARROW-4-60N", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX08_g_01@1.png",
    sourceSha256: "7d8d23c84bc2cdcfe2d236e7a127a56c99182283e62dc9858398ae4ad6bea3d8",
    sourceForegroundBox: [122, 189, 464, 521]
  }],
  ["BEY-X-BX-08-KNIGHT-SHIELD-4-80T", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX08_r_01@1.png",
    sourceSha256: "02b2945537fcccb1ead2aaa2804f3a661d2b05292841163956a23084d9372fb8",
    sourceForegroundBox: [123, 185, 463, 525]
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
  }],
  ["BEY-X-BX-13-KNIGHT-LANCE-4-80HN", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX13_01@1.png",
    sourceSha256: "48814bf0c91b0e355a2d0ce6abb44739a1fe70b000f00ea47c26ecef101a05ac",
    sourceForegroundBox: [118, 177, 473, 523]
  }],
  ["BEY-X-BX-14-01-SHARK-EDGE-3-60LF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX14_01@1.png",
    sourceSha256: "5ba06e3dcc451e98420cbaf541263c4a501354ec30959f205c8062c032e72549",
    sourceForegroundBox: [117, 174, 469, 539]
  }],
  ["BEY-X-BX-00-HELLS-SCYTHE-4-60T", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG03_01@1.png",
    sourceSha256: "3177f2ed2a7fd6ae07dc948f80c4b6fdf9b36590bb69f2d02bc740adcaba9318",
    sourceForegroundBox: [117, 176, 471, 532]
  }],
  ["BEY-X-BX-15-LEON-CLAW-5-60P", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX15_01@1.png",
    sourceSha256: "63e981509c33180c7304dd3ed856a7c0af35c6a8b3719c740149dad0d593fe2c",
    sourceForegroundBox: [116, 184, 476, 543]
  }],
  ["BEY-X-BX-16-01-VIPER-TAIL-5-80O", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX16_02@1.png",
    sourceSha256: "f830dce98b1724c15c82d3244e4bd0f145903965401a3b8393111908e87b2545",
    sourceForegroundBox: [115, 184, 473, 545]
  }],
  ["BEY-X-BX-16-02-VIPER-TAIL-4-60F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX16_03@1.png",
    sourceSha256: "d7619acd70609fb6eb8a5bc1bb06bb9f8cc1fa8be99f385799a88d45809288ea",
    sourceForegroundBox: [113, 184, 470, 543]
  }],
  ["BEY-X-BX-16-03-VIPER-TAIL-3-80HN", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX16_04@1.png",
    sourceSha256: "e8b0cf46f6d9b908c72e3ab60d84ab31c4c626ba50ad91970c5d8c41801d2e5a",
    sourceForegroundBox: [113, 184, 470, 543]
  }],
  ["BEY-X-BX-17-WIZARD-ARROW-4-80B", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX17_04@1.png",
    sourceSha256: "8033a9a10dbc4c3b5a959249920014c8ce82135652dcf1563d9e151fbbd4c6c5",
    sourceForegroundBox: [105, 168, 484, 536]
  }],
  ["BEY-X-BX-19-RHINO-HORN-3-80S", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX19_01@1.png",
    sourceSha256: "eeecf04e8d6f564b7b5f191065e364d9f52cc9c5027341e974be27c253628eb9",
    sourceForegroundBox: [125, 185, 462, 523]
  }],
  ["BEY-X-BX-20-DRAN-DAGGER-4-60R", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX20_b_01@1.png",
    sourceSha256: "831b58ddb219011cff57de4d70eee102e5c6d6bbd315990af54e54df16c47078",
    sourceForegroundBox: [119, 176, 459, 533]
  }],
  ["BEY-X-BX-20-KNIGHT-SHIELD-5-80T", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX20_p_01@1.png",
    sourceSha256: "8df350c13e115774e79e00d80e1f574ff485d2495833c7e7061a2145d0195e00",
    sourceForegroundBox: [117, 181, 468, 534]
  }],
  ["BEY-X-BX-20-SHARK-EDGE-3-80F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX20_g_01@1.png",
    sourceSha256: "46015ec92c41462254e62bde982222726b67afa2c5ae150a208351f88ffed6f2",
    sourceForegroundBox: [117, 174, 464, 534]
  }],
  ["BEY-X-BX-21-HELLS-CHAIN-5-60HT", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX21_p_01@1.png",
    sourceSha256: "fadb4ffaf1cba95434cbb310d848fb3acb0eaa41ce00414a5b635febd8857c9c",
    sourceForegroundBox: [119, 187, 472, 536]
  }],
  ["BEY-X-BX-21-KNIGHT-LANCE-3-60LF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX21_y_01@1.png",
    sourceSha256: "efbe5bfd488eeafb9d22443138053b65d8ff5a149d636c3b26fed41a325e5c0a",
    sourceForegroundBox: [120, 184, 468, 525]
  }],
  ["BEY-X-BX-21-WIZARD-ARROW-4-80N", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX21_o_01@1.png",
    sourceSha256: "6db2cd478b3a8c0b4787bb26673221837084c1b58b2f5e155bdda301649fcdd5",
    sourceForegroundBox: [126, 194, 460, 519]
  }],
  ["BEY-X-BX-22-DRAN-SWORD-3-60F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX22_01@1.png",
    sourceSha256: "b079edd0d2ef52a2c9af4c26a4d589c3293e3ce8954579eb00f67c919c65e3e0",
    sourceForegroundBox: [117, 175, 462, 530]
  }],
  ["BEY-X-BX-23-PHOENIX-SOAR-9-60GF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX23_01@1.png",
    sourceSha256: "65ae2fadab830d7deaecb30a18f0720d00e8f43b3df7de613ecbc082b7b208ff",
    sourceForegroundBox: [114, 175, 472, 535]
  }],
  ["BEY-X-BX-24-01-WYVERN-GALE-5-80GB", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX24_01@1.png",
    sourceSha256: "1fb5e01d5d74de3caa267c85ff924edaff53aa504b9391101fc1f021565c929e",
    sourceForegroundBox: [123, 184, 464, 526]
  }],
  ["BEY-X-BX-26-UNICORN-STING-5-60GF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX26_01@1.png",
    sourceSha256: "dadb15876bda475a9b0407c6c1acf9cc4ba0b9e7995d0990259804d3aa1e6de7",
    sourceForegroundBox: [124, 188, 461, 520]
  }],
  ["BEY-X-BX-27-01-SPHINX-COWL-9-80GN", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX27_02@1.png",
    sourceSha256: "f1761fed5c29cc5497a55eca9a2e2ef4abd5c14a97a682578714381a3a602ac8",
    sourceForegroundBox: [121, 178, 465, 532]
  }],
  ["BEY-X-BX-00-LEON-CLAW-5-60P", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG05_01@1.png",
    sourceSha256: "c748f374831977e37244762fc8cef603780e3a47ea789a16ed908ff5671ce02c",
    sourceForegroundBox: [117, 176, 474, 532]
  }],
  ["BEY-X-BX-00-SHARK-EDGE-5-60GF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG06_01@1.png",
    sourceSha256: "21cd3a6501da1f9418c442424ab1a3bf81b142ebe1b68ecb0af7491d0fbcf01f",
    sourceForegroundBox: [116, 173, 468, 538]
  }],
  ["BEY-X-UX-01-DRAN-BUSTER-1-60A", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX01_01@1.png",
    sourceSha256: "8facf3c1200b79d73f811c43594681028cf5031e4d6c1255f1add82091006792",
    sourceForegroundBox: [119, 171, 470, 536]
  }],
  ["BEY-X-UX-02-HELLS-HAMMER-3-70H", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX02_01@1.png",
    sourceSha256: "22d131b4034ede2d037d69aaccc323a7c91677e1b37af6788f2e47b81b281f8d",
    sourceForegroundBox: [115, 178, 470, 530]
  }],
  ["BEY-X-UX-03-WIZARD-ROD-5-70DB", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX03_01@1.png",
    sourceSha256: "cad73cd518db90ead3fbd8d5d37c0d261bd78a235d35d9ed2c9648462519db6a",
    sourceForegroundBox: [116, 175, 471, 534]
  }],
  ["BEY-X-UX-04-WIZARD-ROD-5-70DB", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX04_04@1.png",
    sourceSha256: "3252eec1bcb692d6c9fb77d553d7ba4370547ef3af75787b0d18fb9cd1e6af2c",
    sourceForegroundBox: [115, 175, 469, 534]
  }],
  ["BEY-X-BX-31-01-TYRANNO-BEAT-4-70Q", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX31_01@1.png",
    sourceSha256: "7d20ed7c4fe22c061b19670620d9bd523a3e95b35f49d00e714f6e1b47f25a84",
    sourceForegroundBox: [126, 188, 460, 522]
  }],
  ["BEY-X-BX-00-HELLS-CHAIN-5-60HT", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG08_01@1.png",
    sourceSha256: "47ee3ad302529fccadd72be012598dea1b822ebe7e1a2389c4633de21c995200",
    sourceForegroundBox: [116, 178, 469, 530]
  }],
  ["BEY-X-UX-05-01-NINJA-SHADOW-1-80MN", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX05_02@1.png",
    sourceSha256: "608ecbf5748abd8f5aeef41769fe20315da84dd81f9e3d144a62a161a6acc29b",
    sourceForegroundBox: [130, 183, 464, 525]
  }],
  ["BEY-X-BX-33-PEARL-TIGER-3-60U", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX33_01@1.png",
    sourceSha256: "20d79eafa547a2cae1145970e4a53684d43e395d65a9152fe4e4fcbfe2c319de",
    sourceForegroundBox: [115, 177, 471, 532]
  }],
  ["BEY-X-BX-34-COBALT-DRAGOON-2-60C", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX34_01@1.png",
    sourceSha256: "21ab6c3c9cdcc498c70a3a0bebcd19f4b4f0ba5cc10e751b137d084f4a6eedf4",
    sourceForegroundBox: [115, 175, 471, 532]
  }],
  ["BEY-X-BX-35-01-BLACK-TURTLE-4-60D", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX35_02@1.png",
    sourceSha256: "8a1ebcbeaaa79bca5746642cd394fecefeb062e9b67abb6ea96379d3b8b200d7",
    sourceForegroundBox: [129, 189, 458, 517]
  }],
  ["BEY-X-BX-36-01-WHALE-WAVE-5-80E", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX36_02@1.png",
    sourceSha256: "803c37992149e6d44a3426b705bddd64a68455496c93cc90886c9c549a29f6cd"
  }],
  ["BEY-X-BX-37-BEAR-SCRATCH-5-60F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX37_03@1.png",
    sourceSha256: "49ec86ddf6ac21a2ee693b9dd3378ffcfda4945f7de33d53ffe885b4767b473d"
  }],
  ["BEY-X-UX-00-AERO-PEGASUS-3-70A", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/news/news240712_2.html",
    sourceFile: "data/source/x-bey-front-sources/bey-x-ux-00-aero-pegasus-3-70a.jpg",
    sourceSha256: "ffa793c10759e698ab68cbfa82103eae0b4c83929704c4b2d538517e62ffc80f"
  }],
  ["BEY-X-UX-06-LEON-CREST-7-60GN", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX06_01@1.png",
    sourceSha256: "072739dbfd97d8e0b17b180629d4b75ae9fe9b99015247256953ba6c9f63dec2"
  }],
  ["BEY-X-UX-07-PHOENIX-RUDDER-9-70G", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX07_r_01@1.png",
    sourceSha256: "770d52ea2b8082beb864caf541d127480d99e140e9f8cd4dd6b40abbef21a7ab"
  }],
  ["BEY-X-UX-07-SPHINX-COWL-1-80GF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX07_b_01@1.png",
    sourceSha256: "d21d64964869304285b5442dfb0fa79c4e5afc90178d8bde7ff03df6b1dfa90f"
  }],
  ["BEY-X-UX-07-WYVERN-GALE-2-60S", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX07_g_01@1.png",
    sourceSha256: "daecb55fba3fbda1cfe623975141fe6890cfc3a32e05dc7e110549d49b7c3850"
  }],
  ["BEY-X-UX-08-SILVER-WOLF-3-80FB", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX08_01@1.png",
    sourceSha256: "2b13fe9a4a7e69ecea37341c51049b8a0193ba448d1f737cf10519eca6722f38"
  }],
  ["BEY-X-BX-38-CRIMSON-GARUDA-4-70TP", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX38_01@1.png",
    sourceSha256: "592f76c72cac1bd2f071d0ee67095be1529764d30a302dc16ad62c01db65b52a"
  }],
  ["BEY-X-UX-09-WARRIOR-SABER-2-70L", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX09_01@1.png",
    sourceSha256: "4abfed8bc336de9de72ab0525c7d55bb4fab7f61aad83d57aa92dde407df038a"
  }],
  ["BEY-X-UX-10-KNIGHT-MAIL-3-85BS", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX10_02@1.png",
    sourceSha256: "eeecd3166e9692224ecab1f75ee2657efa2b377632fe77289d130b1f78b36e01"
  }],
  ["BEY-X-UX-00-DRAN-DAGGER-9-60LF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXA02_05@1.png",
    sourceSha256: "9ef9ce0ba69faa5b95373e1b7f5d0827fc1ad41e572c668b6dba0861bd077726"
  }],
  ["BEY-X-UX-00-DRAN-BUSTER-3-70N", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXA02_09@1.png",
    sourceSha256: "378f19ec51d04465545bf9d341fbfd83adaf97ec6617cf765a8fd155949a51d3"
  }],
  ["BEY-X-UX-00-DRAN-BUSTER-1-60A", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG31_01@1.png",
    sourceSha256: "c8abdbe7246faf747e6347b57696c9f7a1e48d55110299f2870d886fe5c38c8c"
  }],
  ["BEY-X-BX-00-DRAGOON-STORM-4-60RA", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG00_01@1.png",
    sourceSha256: "296cc54364a78d1f8a709a4a847dde52fb968832ce673484db3ace54c806baf7"
  }],
  ["BEY-X-BX-00-DRAN-SWORD-3-60F", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG00_07@1.png",
    sourceSha256: "883969dfd3773c5197ca810b982616d98b5e4bfc516dac6cf2650ad5c0894218"
  }],
  ["BEY-X-BX-00-MAMMOTH-TUSK-2-80E", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG32_01@1.png",
    sourceSha256: "29de3c39c56bc2a985b8dbb8dd5f4527cdd23acefa52ccd7f318fa8f88805cf3"
  }],
  ["BEY-X-BX-00-PHOENIX-SOAR-9-60GF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG35_01@1.png",
    sourceSha256: "14d7dd7c9889e7a8c79501a8ed0cb14ffee2e60a4c09d95391f322d2c77a07fe"
  }],
  ["BEY-X-BX-00-STORM-PEGASIS-3-70RA", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG00_03@1.png",
    sourceSha256: "eab3be32fb4cc62f6158840cfea16720e97e336fcb3acd55ce031a2e42883c9c"
  }],
  ["BEY-X-BX-00-VICTORY-VALKYRIE-2-60RA", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG00_05@1.png",
    sourceSha256: "21a86b0a5ce145bc7649193f8ccc89629199639bfa30982628fa8418fcec72b6"
  }],
  ["BEY-X-BX-39-01-SHELTER-DRAKE-7-80GP", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX39_02@1.png",
    sourceSha256: "79d884b52546da1eeb7fdf45e46283602f3e9ae3df18aeededf712ce3851238d"
  }],
  ["BEY-X-BX-39-02-SHELTER-DRAKE-5-70O", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX39_03@1.png",
    sourceSha256: "9c146d9309cf674697d06a74e72ab640b1a62ede999164d40b0feef711e247a9"
  }],
  ["BEY-X-BX-39-03-SHELTER-DRAKE-3-60D", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX39_04@1.png",
    sourceSha256: "3797571b7b287d6708e17fa300ac194ba25e47c4ba462326439dd7b2abbb3476"
  }],
  ["BEY-X-CX-01-DRAN-BRAVE-S-6-60V", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX01_01@1.png",
    sourceSha256: "4f30ab3fd9b2d43bddfdb889b10770126c990d0926de4325fcc5fd1e993d5a4d"
  }],
  ["BEY-X-CX-02-WIZARD-ARC-R-4-55LO", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX02_01@1.png",
    sourceSha256: "abf3e07cfc6ac02b893b80def1c8790e2ced30ba23a6a4be9517ee8305b898c8"
  }],
  ["BEY-X-CX-03-PERSEUS-DARK-B-6-80W", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX03_01@1.png",
    sourceSha256: "6c5c9f1fc0c3601529b511649fcc888fc33c3ca1ba4f88977b9ad7b63fdd015e"
  }],
  ["BEY-X-CX-04-DRAN-BRAVE-S-6-60V", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX04_01@1.png",
    sourceSha256: "1a76cda10cf047ef1fa62c63ac8ed452193c7813f5da29751ed978abfcf4e835"
  }],
  ["BEY-X-CX-04-PERSEUS-DARK-B-6-80W", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX04_02@1.png",
    sourceSha256: "f6728b3ee85ea99e5ee1597eca05ff976ccd990c9098c5a5c52356d097e8ea82"
  }],
  ["BEY-X-UX-00-HELLS-HAMMER-3-70H", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BXG19_02@1.png",
    sourceSha256: "f5d72d3e24018c79f9b8e93a7b0bd712447e78a0ab4b17e76b55b0fe6c0f66bf"
  }],
  ["BEY-X-UX-11-IMPACT-DRAKE-9-60LR", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX11_01@1.png",
    sourceSha256: "2e7f1d54e13d1f8c9d979f73c24bbd20be6246dbfc26b900a397cabd9ddb2ec9"
  }],
  ["BEY-X-UX-12-01-GHOST-CIRCLE-0-80GB", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX12_02@1.png",
    sourceSha256: "89da29cd3241509c5db43292506b4d11d7747de440418bae56afd3187747ccc4"
  }],
  ["BEY-X-UX-13-GOLEM-ROCK-1-60UN", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX13_01@1.png",
    sourceSha256: "259ac937e826666811c8bf8d0233ad1a0de8e3614d61a5f610506a60b950df9b"
  }],
  ["BEY-X-UX-15-SHARK-SCALE-4-50UF", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX15_02@1.png",
    sourceSha256: "79ff56e3ab08a4cebbcd0c22432fc2f4e490e5efaf51a1df81d7f898ad95adb7"
  }],
  ["BEY-X-BX-46-COBALT-DRAKE-9-60R", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX46_03@1.png",
    sourceSha256: "fc396f27d8e51859c1c635874f64ae16ce94f67503b3971f4bedbb4521143355"
  }],
  ["BEY-X-BX-46-GORE-TACKLE-7-70T", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/BX46_04@1.png",
    sourceSha256: "99ec82afa6db14a7af6822b34d2e07097706f2067641195ba8c5cf0265431fe5"
  }],
  ["BEY-X-UX-16-01-CLOCK-MIRAGE-9-65B", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/UX16_02@1.png",
    sourceSha256: "9ff73dc56f0f7e33e1378031c61ab2d191bc4ee52e253835c0fc88295a269df3"
  }],
  ["BEY-X-CX-11-SHARK-GILL-5-60FB", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX11_08@1.png",
    sourceSha256: "2c72f2d009d80b41d0eceac876e40b21b0ab66ee049aac50aff097f1834f1fd2"
  }],
  ["BEY-X-CX-11-GOLEM-ROCK-M-85HN", {
    sourceUrl: "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/CX11_12@1.png",
    sourceSha256: "a8693861a6085ad8bf2749004d5ca16bc3984a3bad4431f3a92286aa10fe89ee"
  }]
]);
assert.equal(suppliedFronts.size, 90);

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
  await outputAudit(officialFrontById.get("BEY-X-BX-17-WIZARD-ARROW-4-80B").image),
  officialFrontById.get("BEY-X-BX-17-WIZARD-ARROW-4-80B").outputSha256
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
  const classificationIsPreserved = expected.classification === "official-assembled-front"
    ? officialFrontById.has(id)
    : verifiedMainById.has(id);
  assert.ok(classificationIsPreserved, `${id}: preserved front classification changed`);
  const mapping = xImageById.get(id);
  assert.ok(mapping, `${id}: preserved source mapping is missing`);
  assert.equal(mapping.sourcePath, expected.sourcePath);
  assert.equal(mapping.sourceSha256, expected.sourceSha256);
  const normalized = officialFrontById.get(id) || verifiedMainById.get(id);
  assert.equal(await outputAudit(normalized.image), normalized.outputSha256);
}

for (const entry of xBeyPrimaryImageConfig.selected) {
  if (entry.sourceKind === "user-approved-generated-front") {
    assert.equal(entry.id, "BEY-X-BX-00-PHOENIX-SOAR-9-80DB");
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
  if ("sourceScale" in expected) assert.equal(entry.sourceScale, expected.sourceScale);
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
  assert.equal(entry.sourceKind, "verified-existing-front");
  assert.match(entry.image, /^assets\/images\/x\/beys\/.+\/main\.webp$/);
  assert.match(entry.preNormalizationSha256, /^[a-f0-9]{64}$/);
  assert.match(entry.outputSha256, /^[a-f0-9]{64}$/);
  assert.equal(entry.normalizedForegroundBox.length, 4);
}
for (const entry of xBeyPrimaryImageConfig.temporarySideImages) {
  assert.ok(entry.reason?.trim(), `${entry.id}: temporary side view needs a reason`);
  assert.match(entry.evidenceUrl, /^https?:\/\//);
}

const alphaReview = JSON.parse(await readFile(ALPHA_REVIEW_PATH, "utf8"));
assert.equal(alphaReview.version, "20260807-x-phoenix-wing-generated-front");
const alphaReviewByImage = new Map(alphaReview.files.map(entry => [entry.image, entry]));
const normalizedEntries = [
  ...xBeyPrimaryImageConfig.selected,
  ...xBeyPrimaryImageConfig.verifiedMain
];
assert.equal(normalizedEntries.length, 192);
for (const entry of normalizedEntries) {
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
  assert.ok(!angleCorrectionById.has(entry.id), `${entry.id}: angle view entered size normalization`);
}

const audit = [];
const counts = {
  officialAngleCorrected: 0,
  officialAssembledFront: 0,
  userApprovedGeneratedFront: 0,
  verifiedExistingFront: 0,
  temporarySide: 0
};
const xBeys = beyItems.filter(item => item.series === "x" && item.image);
assert.equal(xBeys.length, 220);

for (const item of xBeys) {
  const bladeIds = bladePartIds(item);
  let classification;
  let provenance;
  let exceptionReason = "";
  if (officialFrontById.has(item.id)) {
    provenance = officialFrontById.get(item.id);
    classification = provenance.sourceKind;
    assert.equal(item.image, provenance.image, `${item.id}: selected front is not primary`);
    if (classification === "official-assembled-front") {
      counts.officialAssembledFront += 1;
    } else {
      assert.equal(classification, "user-approved-generated-front");
      counts.userApprovedGeneratedFront += 1;
    }
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
  if (
    classification === "official-assembled-front"
    || classification === "official-angle-corrected"
    || classification === "user-approved-generated-front"
  ) {
    assert.equal(outputSha256, provenance.outputSha256, `${item.id}: front output hash changed`);
  } else if (classification === "verified-existing-front") {
    assert.equal(
      outputSha256,
      verifiedMainById.get(item.id).outputSha256,
      `${item.id}: verified front output hash changed`
    );
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
  officialAngleCorrected: 28,
  officialAssembledFront: 109,
  userApprovedGeneratedFront: 1,
  verifiedExistingFront: 82,
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
