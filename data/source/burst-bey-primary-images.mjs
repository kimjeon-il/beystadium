import burstBeyPrimaryImageConfig from "./burst-bey-primary-images.json" with { type: "json" };

const selectedById = new Map(
  burstBeyPrimaryImageConfig.selected.map(entry => [entry.id, entry])
);
const unavailableIds = new Set(
  burstBeyPrimaryImageConfig.unavailable.map(entry => entry.id)
);

function applyBurstBeyPrimaryImages(items) {
  const burstBeys = items.filter(item => item.series === "burst" && item.type === "bey");
  for (const item of burstBeys) {
    const selected = selectedById.get(item.id);
    const unavailable = unavailableIds.has(item.id);
    if (Number(Boolean(selected)) + Number(unavailable) !== 1) {
      throw new Error(`${item.id}: Burst primary image needs exactly one classification`);
    }
    if (selected) item.image = selected.image;
    else delete item.image;
  }
}

export {
  applyBurstBeyPrimaryImages,
  burstBeyPrimaryImageConfig
};
