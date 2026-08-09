import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { xImageMappings } from "../data/source/x-images.mjs";

const OUTPUT_PATH = path.resolve("data/source/x-image-review.mjs");

async function sha256(filePath) {
  return createHash("sha256").update(await readFile(filePath)).digest("hex");
}

const xImageReview = [];
for (const entry of xImageMappings) {
  xImageReview.push({
    id: entry.id,
    image: entry.image,
    ...(entry.sourcePath
      ? { sourcePath: entry.sourcePath }
      : { sourceUrl: entry.sourceUrl }),
    sourceSha256: entry.sourceSha256,
    outputSha256: await sha256(path.resolve(entry.image)),
    ...(entry.sourceCrop ? { sourceCrop: entry.sourceCrop } : {}),
    ...(entry.sourceExcludeRects ? { sourceExcludeRects: entry.sourceExcludeRects } : {}),
    ...(entry.sourceClearPoints ? { sourceClearPoints: entry.sourceClearPoints } : {}),
    ...(entry.keepLargestComponent ? { keepLargestComponent: true } : {}),
    ...(entry.sourceKind ? { sourceKind: entry.sourceKind } : {}),
    ...(entry.backgroundRemoval ? { backgroundRemoval: entry.backgroundRemoval } : {}),
    ...(entry.backgroundThreshold ? { backgroundThreshold: entry.backgroundThreshold } : {}),
    ...(entry.backgroundChroma ? { backgroundChroma: entry.backgroundChroma } : {}),
    ...(entry.foregroundErode ? { foregroundErode: entry.foregroundErode } : {}),
    ...(entry.targetForegroundSize ? { targetForegroundSize: entry.targetForegroundSize } : {}),
    ...(entry.normalizationInput ? { normalizationInput: entry.normalizationInput } : {}),
    ...(entry.preserveSourcePixels ? { preserveSourcePixels: true } : {})
  });
}

const moduleSource = `const xImageReview = ${JSON.stringify(xImageReview, null, 2)};\n\n`
  + "export { xImageReview };\n";
await writeFile(OUTPUT_PATH, moduleSource);
console.log(`Recorded ${xImageReview.length} reviewed X image mappings`);
