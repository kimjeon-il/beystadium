import xBeyPrimaryImageConfig from "./x-bey-primary-images.json" with { type: "json" };

const officialFrontById = new Map(
  xBeyPrimaryImageConfig.selected.map(entry => [entry.id, entry])
);
const verifiedMainIds = new Set(
  xBeyPrimaryImageConfig.verifiedMain.map(entry => entry.id)
);
const temporarySideIds = new Set(
  xBeyPrimaryImageConfig.temporarySideImages.map(entry => entry.id)
);

const bladePartIds = item => item.parts?.filter(partId => partId.startsWith("PART-X-BLADE-")) || [];

function applyXBeyPrimaryImages(items) {
  for (const item of items) {
    if (item.series !== "x" || item.type !== "bey" || !item.image) continue;
    const bladeIds = bladePartIds(item);
    if (bladeIds.length === 1) {
      const mountedBladeImage = item.partPreviewImages?.[bladeIds[0]];
      if (!mountedBladeImage) {
        throw new Error(`${item.id}: official mounted blade top view is missing`);
      }
      item.image = mountedBladeImage;
      continue;
    }

    const officialFront = officialFrontById.get(item.id);
    const classifications = [
      Boolean(officialFront),
      verifiedMainIds.has(item.id),
      temporarySideIds.has(item.id)
    ].filter(Boolean).length;
    if (classifications !== 1) {
      throw new Error(`${item.id}: split blade primary image needs one explicit viewpoint classification`);
    }
    if (officialFront) item.image = officialFront.image;
  }
}

export { applyXBeyPrimaryImages, bladePartIds, xBeyPrimaryImageConfig };
