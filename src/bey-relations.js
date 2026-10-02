import {
  isProductLineupEntry,
  resolveProductComposition,
  resolveProductDisplayRegion,
  resolveProductRelease
} from "./product-relations-core.js";

/** All actual containing releases, in catalog order. A lineup member is possible, not guaranteed. */
export const relatedBeyProducts = (bey, products = [], region = "kr") => {
  if (bey?.type !== "bey" || !bey.id) return [];
  const seen = new Set();
  const related = [];
  for (const product of products) {
    if (!product?.id || seen.has(product.id)) continue;
    const displayRegion = resolveProductDisplayRegion(product, region);
    const release = resolveProductRelease(product, displayRegion);
    if (release.status === "unreleased") continue;
    const entries = resolveProductComposition(product, displayRegion, release);
    const directEntries = entries.filter(entry => entry.target === bey.id);
    const hasLineup = !entries.length || entries.some(entry => isProductLineupEntry(product, entry));
    const inLineup = hasLineup && Array.isArray(product.lineupPool) && product.lineupPool.includes(bey.id);
    if (!directEntries.length && !inLineup) continue;
    const guaranteed = directEntries.some(entry => !isProductLineupEntry(product, entry));
    related.push({ product, region: displayRegion, release, isRandom: !guaranteed });
    seen.add(product.id);
  }
  return related;
};

const normalizeModelName = name => String(name || "").normalize("NFKC").replace(/\s+/gu, "").toLowerCase();
const nameFields = ["name", "jpName", "en"];
const modelPartFamily = (part, catalogById) => {
  // Revision suffixes only collapse when the unversioned part actually exists.
  const baseId = part.id.replace(/-VERSION-\d+(?:-\d+)*$/, "");
  const base = catalogById.get(baseId);
  return base?.series === part.series && base.type === part.type ? base : part;
};

/** Exact model-family names, derived from authoritative parts rather than retail-title substrings. */
export const beyModelNames = (bey, catalogById) => {
  if (bey?.type !== "bey" || bey.series !== "x" || !catalogById?.get) return [];
  const parts = [...new Set(bey.parts || [])].map(id => catalogById.get(id));
  if (parts.some(part => !part)) return [];
  const blades = parts.filter(part => part.series === bey.series && part.type === "blade");
  const fullBlades = blades.filter(part => !part.xBladeRole);
  let names;
  if (fullBlades.length === 1 && blades.length === 1) {
    const family = modelPartFamily(fullBlades[0], catalogById);
    names = nameFields.map(field => family[field]);
  } else if (!fullBlades.length) {
    const chips = blades.filter(part => part.xBladeRole === "lockChip");
    const mainBlades = blades.filter(part => ["mainBlade", "metalBlade"].includes(part.xBladeRole));
    if (chips.length !== 1 || mainBlades.length !== 1) return [];
    names = nameFields.map(field => {
      const chipName = chips[0][field] || chips[0].name;
      const bladeName = mainBlades[0][field] || mainBlades[0].name;
      return chipName && bladeName ? `${chipName} ${bladeName}` : "";
    });
  } else {
    return [];
  }
  return [...new Set(names.map(normalizeModelName).filter(Boolean))];
};

/** Family-level anime usage, not a claim that the character used a retail recolor or combination. */
export const relatedBeyCharacters = (bey, characters = [], catalogById) => {
  const names = new Set(beyModelNames(bey, catalogById));
  if (!names.size) return [];
  return characters.filter(character =>
    /^beyblade-x(?:-\d+)?$/.test(character?.season || "")
    && Array.isArray(character.beys)
    && character.beys.some(name => names.has(normalizeModelName(name)))
  );
};
