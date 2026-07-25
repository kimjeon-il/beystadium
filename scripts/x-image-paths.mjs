const xCatalogImagePath = item => {
  const itemId = item.id.toLowerCase();
  if (item.type === "bey") {
    return `assets/images/x/beys/${itemId}/main.webp`;
  }
  if (!["blade", "ratchet", "bit"].includes(item.type)) {
    throw new Error(`${item.id}: unsupported X image item type ${item.type}`);
  }
  return `assets/images/x/parts/${item.type}/${itemId}.webp`;
};

const xPartPreviewImagePath = (beyId, partId) =>
  `assets/images/x/beys/${beyId.toLowerCase()}/parts/${partId.toLowerCase()}.webp`;

export { xCatalogImagePath, xPartPreviewImagePath };
