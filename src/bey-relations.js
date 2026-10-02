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

// Hybrid Metal models are defined by the exact clear wheel + attack wheel.
// Track/bottom and retail colors are variants; replacing either model wheel is not.
const metalBeyModelKey = (bey, catalogById) => {
  if (bey?.type !== "bey" || bey.series !== "metal fight" || !catalogById?.get) return "";
  const parts = [...new Set(bey.parts || [])].map(id => catalogById.get(id));
  if (parts.some(part => !part || part.series !== bey.series || typeof part.type !== "string")) return "";
  const wheels = parts.filter(part => part.type.endsWith("wheel"));
  const clear = wheels.filter(part => part.type === "clearwheel");
  const attack = wheels.filter(part => ["metalwheel", "lightwheel"].includes(part.type));
  if (wheels.length !== 2 || clear.length !== 1 || attack.length !== 1) return "";
  return `${bey.series}:${attack[0].id}:${clear[0].id}`;
};

/** Family-level anime usage, not a claim that the character used a retail recolor or combination. */
export const relatedBeyCharacters = (bey, characters = [], catalogById) => {
  if (bey?.series === "metal fight") {
    const modelKey = metalBeyModelKey(bey, catalogById);
    if (!modelKey) return [];
    return characters.filter(character =>
      /^metal-fight(?:-(?:2|4d|zerog))?$/.test(character?.season || "")
      && Array.isArray(character.beyIds)
      && character.beyIds.some(id => metalBeyModelKey(catalogById.get(id), catalogById) === modelKey)
    );
  }
  const names = new Set(beyModelNames(bey, catalogById));
  if (!names.size) return [];
  return characters.filter(character =>
    /^beyblade-x(?:-\d+)?$/.test(character?.season || "")
    && Array.isArray(character.beys)
    && character.beys.some(name => names.has(normalizeModelName(name)))
  );
};
