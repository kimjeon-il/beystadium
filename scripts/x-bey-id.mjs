const normalizeIdToken = value => String(value || "")
  .trim()
  .replace(/[^A-Za-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .toUpperCase();

const partIdToken = (part, prefix) => part?.id?.startsWith(prefix)
  ? normalizeIdToken(part.id.slice(prefix.length))
  : "";

const xBeyQualifier = item => {
  const prefix = `BEY-X-${item?.productNo || ""}`;
  if (!item?.id?.startsWith(prefix)) return "";
  const suffix = item.id.slice(prefix.length).replace(/^-/, "");
  return suffix.match(/^(?:JP-\d+|ASIA)(?:-|$)/)?.[0]?.replace(/-$/, "") || "";
};

const xBeyParts = (item, partsById) => (item?.parts || [])
  .map(id => partsById.get(id))
  .filter(Boolean);

const xBeyIdentity = (item, partsById) => {
  const blades = xBeyParts(item, partsById).filter(part => part.type === "blade");
  if (!blades.length) return "";
  if (!blades.some(part => part.xBladeRole)) {
    return blades.map(part => partIdToken(part, "PART-X-BLADE-")).filter(Boolean).join("-");
  }

  const rolePart = role => blades.find(part => part.xBladeRole === role);
  const lockChip = partIdToken(rolePart("lockChip"), "PART-X-BLADE-LOCK-CHIP-");
  const mainBlade = partIdToken(rolePart("mainBlade") || rolePart("metalBlade"), "PART-X-BLADE-MAIN-BLADE-");
  const bladeCodes = [rolePart("overBlade")?.name, rolePart("assistBlade")?.name]
    .map(normalizeIdToken)
    .filter(Boolean)
    .join("");
  return [lockChip, mainBlade, bladeCodes].filter(Boolean).join("-");
};

const xBeyCombo = (item, partsById) => {
  const parts = xBeyParts(item, partsById);
  const ratchet = normalizeIdToken(parts.find(part => part.type === "ratchet")?.name);
  const bit = normalizeIdToken(parts.find(part => part.type === "bit")?.name);
  return `${ratchet}${bit}`;
};

function expectedXBeyId(item, partsById) {
  const productNo = normalizeIdToken(item?.productNo);
  const identity = xBeyIdentity(item, partsById);
  const combo = xBeyCombo(item, partsById);
  return ["BEY-X", productNo, xBeyQualifier(item), identity, combo].filter(Boolean).join("-");
}

export {
  expectedXBeyId,
  normalizeIdToken,
  xBeyCombo,
  xBeyIdentity,
  xBeyQualifier
};
