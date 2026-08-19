import xBeyPrimaryImageConfig from "./x-bey-primary-images.json" with { type: "json" };

const selectedFrontById = new Map(
  xBeyPrimaryImageConfig.selected.map(entry => [entry.id, entry])
);
const temporarySideIds = new Set(
  xBeyPrimaryImageConfig.temporarySideImages.map(entry => entry.id)
);
const bladePartIds = item => item.parts?.filter(partId => partId.startsWith("PART-X-BLADE-")) || [];

function applyXBeyPrimaryImages(items) {
  for (const item of items) {
    if (item.series !== "x" || item.type !== "bey" || !item.image) continue;
    const bladeIds = bladePartIds(item);
    const selectedFront = selectedFrontById.get(item.id);
    const classifications = [
      Boolean(selectedFront),
      temporarySideIds.has(item.id)
    ].filter(Boolean).length;
    if (classifications > 1) {
      throw new Error(`${item.id}: primary image has conflicting viewpoint classifications`);
    }
    if (selectedFront) {
      item.image = selectedFront.image;
      continue;
    }
    if (temporarySideIds.has(item.id)) continue;
    throw new Error(`${item.id}: primary image needs one explicit viewpoint classification (${bladeIds.length} blade parts)`);
  }
}

export {
  applyXBeyPrimaryImages,
  bladePartIds,
  xBeyPrimaryImageConfig
};
