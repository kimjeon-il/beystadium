import xBeyPrimaryImageConfig from "./x-bey-primary-images.json" with { type: "json" };
import { xPartPreviewMappings } from "./x-part-previews.mjs";

const officialFrontById = new Map(
  xBeyPrimaryImageConfig.selected.map(entry => [entry.id, entry])
);
const verifiedMainIds = new Set(
  xBeyPrimaryImageConfig.verifiedMain.map(entry => entry.id)
);
const temporarySideIds = new Set(
  xBeyPrimaryImageConfig.temporarySideImages.map(entry => entry.id)
);
const partPreviewByKey = new Map(
  xPartPreviewMappings.map(entry => [`${entry.beyId}::${entry.partId}`, entry])
);

const bladePartIds = item => item.parts?.filter(partId => partId.startsWith("PART-X-BLADE-")) || [];

function applyXBeyPrimaryImages(items) {
  for (const item of items) {
    if (item.series !== "x" || item.type !== "bey" || !item.image) continue;
    const bladeIds = bladePartIds(item);
    const officialFront = officialFrontById.get(item.id);
    const classifications = [
      Boolean(officialFront),
      verifiedMainIds.has(item.id),
      temporarySideIds.has(item.id)
    ].filter(Boolean).length;
    if (classifications > 1) {
      throw new Error(`${item.id}: primary image has conflicting viewpoint classifications`);
    }
    if (officialFront) {
      item.image = officialFront.image;
      continue;
    }
    if (verifiedMainIds.has(item.id) || temporarySideIds.has(item.id)) continue;

    if (bladeIds.length === 1) {
      const mountedBladeImage = item.partPreviewImages?.[bladeIds[0]];
      if (!mountedBladeImage) {
        throw new Error(`${item.id}: official mounted blade top view is missing`);
      }
      const provenance = partPreviewByKey.get(`${item.id}::${bladeIds[0]}`);
      if (provenance?.sourceKind !== "official-individual") {
        throw new Error(`${item.id}: assembled blade image needs an explicit viewpoint classification`);
      }
      item.image = mountedBladeImage;
      continue;
    }
    throw new Error(`${item.id}: primary image needs one explicit viewpoint classification`);
  }
}

export { applyXBeyPrimaryImages, bladePartIds, xBeyPrimaryImageConfig };
