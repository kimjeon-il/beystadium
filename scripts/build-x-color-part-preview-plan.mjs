import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { xImageMappings } from "../data/source/x-images.mjs";
import {
  xPartPreviewMappings,
  xPartPreviewUnavailable
} from "../data/source/x-part-previews.mjs";
import { xPartPreviewImagePath } from "./x-image-paths.mjs";

const OUTPUT_PATH = path.resolve(".cache/x-color-part-preview-plan.json");
const OFFICIAL_IMAGE_ROOT = "https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image";
const contextKey = (beyId, partId) => `${beyId}::${partId}`;
const sha256Text = value => createHash("sha256").update(value).digest("hex");
const sourceFileName = mapping => {
  const source = mapping?.sourcePath || mapping?.sourceUrl || "";
  const pathname = source.startsWith("http") ? new URL(source).pathname : source;
  return path.posix.basename(pathname).replace(/^\d+_/, "");
};
const officialSourceUrl = mapping =>
  mapping?.sourceUrl || `${OFFICIAL_IMAGE_ROOT}/${sourceFileName(mapping)}`;

const manualEvidence = {
  "BEY-X-BX-00-CROCO-CRUNCH-2-60Q": {
    pageUrl: "https://beysandbricks.com/takara-tomy-croc-crunch-2-60q-emerald-beyblade-x-booster-bx-00/",
    imageUrl: "https://cdn11.bigcommerce.com/s-iodt3qca/products/3835/images/41185/latest__10441.1743140889.500.750.jpg?c=2",
    imageSha256: "2af3fae99565ffde3b9837ca18e3c1fadb9b8455cbbb57d8066dd6be8a17e625",
    palettes: {
      "PART-X-BIT-Q": ["#f28a1b"],
      "PART-X-RATCHET-2-60": ["#d8cb2b", "#f28a1b"]
    }
  },
  "BEY-X-BX-00-HELLS-SCYTHE-3-80F": {
    pageUrl: "https://beysandbricks.com/takara-tomy-hells-scythe-3-80f-sp-x-beyblade-booster-bx-00/",
    imageUrl: "https://cdn11.bigcommerce.com/s-iodt3qca/products/2717/images/21099/latest__86625.1707615995.500.750.jpg?c=2",
    imageSha256: "26a9bbbf6c063e238fe2149cec0d32f1684499bd47111c6591c56c5f7a0c9997",
    palettes: {
      "PART-X-BIT-F": ["#17202d", "#287fc0"],
      "PART-X-BLADE-HELLS-SCYTHE": ["#168fc6", "#17202d", "#d6222c"],
      "PART-X-RATCHET-3-80": ["#2b8fc7", "#17202d"]
    }
  },
  "BEY-X-BX-00-NINJA-KNIFE-4-60LF": {
    pageUrl: "https://spincityimports.com/products/takara-tomy-beyblade-x-xone-shinobi-knife-4-60lf-metal-coat-game",
    imageUrl: "https://cdn.shopify.com/s/files/1/0532/8555/2318/files/ef074ca30dad6ee0a7d5142217c6dd0b39ddb22c_original.jpg?v=1736960865",
    imageSha256: "4b8a3f1f5e711f9effe323f7ca30ed7d75dbe310d6e3af02bcb6eabc1075c1cb",
    palettes: {
      "PART-X-BIT-LF": ["#17191f", "#1f65a8"],
      "PART-X-RATCHET-4-60": ["#b33178", "#17191f"]
    }
  },
  "BEY-X-BX-00-PHOENIX-SOAR-9-80DB": {
    pageUrl: "https://beysandbricks.com/takara-tomy-phoenix-wing-9-80db-beyblade-x-booster-bx-00/",
    imageUrl: "https://cdn11.bigcommerce.com/s-iodt3qca/products/3779/images/40889/latest_cb_20240912175246__72400.1734663202.500.750.jpg?c=2",
    imageSha256: "91cf3c78604c4cba6497caeaca6de452f557297c05c999f022af2b48456bb013",
    palettes: {
      "PART-X-BIT-DB": ["#d5df38"],
      "PART-X-BLADE-PHOENIX-SOAR": ["#1d376d", "#72d34f"],
      "PART-X-RATCHET-9-80": ["#65b8c9", "#d5df38"]
    }
  },
  "BEY-X-UX-00-WARRIOR-SABER-2-70L": {
    pageUrl: "https://beysandbricks.com/takara-tomy-samurai-saber-2-70l-beyblade-x-ux-00-corocoro-comics-metal-coat-orange-version/",
    imageUrl: "https://cdn11.bigcommerce.com/s-iodt3qca/products/4864/images/56242/s-l1600__07049.1771632202.500.750.jpg?c=2",
    imageSha256: "d89c429d50e01f7ede18a2cedd0cc62a83d2b3e741ab19868d5be1413073042d",
    palettes: {
      "PART-X-BIT-L": ["#ef5a29"],
      "PART-X-BLADE-WARRIOR-SABER": ["#ef5a29", "#2f9d8c", "#eceae4"],
      "PART-X-RATCHET-2-70": ["#2f9d8c", "#eceae4"]
    }
  },
  "BEY-X-BX-14-03-DRAN-SWORD-3-80B": {
    pageUrl: "https://beysandbricks.com/takara-tomy-beyblade-x-dran-sword-3-80b-bx-14-03/",
    imageUrl: "",
    imageSha256: "",
    palettes: {
      "PART-X-BIT-B": ["#20272c"],
      "PART-X-RATCHET-3-80": ["#20272c", "#59656a"]
    }
  }
};

const xBeys = beyItems.filter(item => item.series === "x");
const xParts = partItems.filter(item => item.series === "x");
const itemById = new Map([...xBeys, ...xParts].map(item => [item.id, item]));
const imageById = new Map(xImageMappings.map(entry => [entry.id, entry]));
const baseMappings = xPartPreviewMappings.filter(entry => entry.sourceKind !== "color-derived");
const currentDerivations = xPartPreviewMappings.filter(entry => entry.sourceKind === "color-derived");
const mappedKeys = new Set(baseMappings.map(entry => contextKey(entry.beyId, entry.partId)));

const buildCandidate = (entry, previousDerivation = null) => {
    const bey = itemById.get(entry.beyId);
    const part = itemById.get(entry.partId);
    const shape = imageById.get(entry.partId);
    const evidence = imageById.get(entry.beyId);
    const manual = manualEvidence[entry.beyId];
    const manualPalette = manual?.palettes?.[entry.partId] || previousDerivation?.targetPalette;
    if (!evidence && !manualPalette) {
      throw new Error(`${contextKey(entry.beyId, entry.partId)} needs manual color evidence`);
    }
    return {
      beyId: entry.beyId,
      beyName: bey?.name || entry.beyId,
      partId: entry.partId,
      partName: part?.name || entry.partId,
      partType: part?.type || "",
      xBladeRole: part?.xBladeRole || "",
      outputImage: xPartPreviewImagePath(entry.beyId, entry.partId),
      shapeImage: shape.image,
      shapeSourceUrl: officialSourceUrl(shape),
      shapeSourcePath: shape.sourcePath || "",
      shapeSourceSha256: shape.sourceSha256,
      colorEvidenceImage: evidence?.image || "",
      colorEvidenceUrl: manual?.imageUrl || officialSourceUrl(evidence),
      colorEvidencePageUrl: manual?.pageUrl || entry.evidenceUrl || "",
      colorEvidenceSha256: manual?.imageSha256 || evidence?.sourceSha256 || "",
      targetPaletteOverride: manualPalette || null,
      evidenceRecordSha256: sha256Text(JSON.stringify({
        image: previousDerivation?.colorEvidenceUrl || manual?.imageUrl || officialSourceUrl(evidence),
        page: previousDerivation?.colorEvidencePageUrl || manual?.pageUrl || entry.evidenceUrl || "",
        sha256: previousDerivation?.colorEvidenceSha256
          || manual?.imageSha256
          || evidence?.sourceSha256
          || ""
      }))
    };
  };

let candidates;
let remainingUnavailable;
if (currentDerivations.length === 247 && xPartPreviewUnavailable.length === 18) {
  const manifest = JSON.parse(
    await readFile(path.resolve("data/source/x-part-preview-color-derivations.json"), "utf8")
  );
  candidates = manifest.derivations.map(entry => buildCandidate(entry, entry));
  remainingUnavailable = xPartPreviewUnavailable;
} else {
  candidates = xPartPreviewUnavailable
    .filter(entry => imageById.has(entry.partId))
    .map(entry => buildCandidate(entry));
  remainingUnavailable = xPartPreviewUnavailable.filter(entry => !imageById.has(entry.partId));
}
candidates = candidates
  .sort((left, right) =>
    contextKey(left.beyId, left.partId).localeCompare(contextKey(right.beyId, right.partId)));

if (mappedKeys.size !== 502) throw new Error(`expected 502 current mappings, found ${mappedKeys.size}`);
if (candidates.length !== 247) throw new Error(`expected 247 derivation candidates, found ${candidates.length}`);
if (remainingUnavailable.length !== 18) {
  throw new Error(`expected 18 shape-source gaps, found ${remainingUnavailable.length}`);
}

const report = {
  version: "20260726-x-all-color-part-previews",
  totals: {
    currentMappings: mappedKeys.size,
    derivations: candidates.length,
    remainingUnavailable: remainingUnavailable.length
  },
  candidates,
  remainingUnavailable
};

await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
await writeFile(OUTPUT_PATH, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report.totals, null, 2));
