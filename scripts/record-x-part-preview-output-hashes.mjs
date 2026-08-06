import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  xPartPreviewMappings,
  xPartPreviewUnavailable
} from "../data/source/x-part-previews.mjs";

const SOURCE_PATH = path.resolve("data/source/x-part-previews.mjs");
const sha256 = bytes => createHash("sha256").update(bytes).digest("hex");
let changed = 0;

for (const entry of xPartPreviewMappings) {
  const outputSha256 = sha256(await readFile(path.resolve(entry.image)));
  if (outputSha256 === entry.outputSha256) continue;
  entry.outputSha256 = outputSha256;
  changed += 1;
}

const source = await readFile(SOURCE_PATH, "utf8");
const functionMarker = "function applyXPartPreviewImages(items) {";
const functionIndex = source.indexOf(functionMarker);
if (functionIndex < 0) throw new Error("X part preview apply function was not found");
const functionSource = source.slice(functionIndex);
const nextSource = [
  "const xPartPreviewMappings = " + JSON.stringify(xPartPreviewMappings, null, 2) + ";",
  "",
  "const xPartPreviewUnavailable = " + JSON.stringify(xPartPreviewUnavailable, null, 2) + ";",
  "",
  functionSource
].join("\n");

await writeFile(SOURCE_PATH, nextSource);
console.log("Refreshed " + changed + " X part preview output hashes");
