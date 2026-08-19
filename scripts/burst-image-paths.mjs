const burstBeyImagePath = itemOrId => {
  const id = typeof itemOrId === "string" ? itemOrId : itemOrId.id;
  const slug = id.toLowerCase();
  return `assets/images/burst/beys/${slug}/${slug}.webp`;
};

export { burstBeyImagePath };
