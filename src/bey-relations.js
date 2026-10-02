import { characterUsageGroups } from "./character-usage.js";
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

const characterSeasonPatterns = {
  "metal fight": /^metal-fight(?:-(?:2|4d|zerog))?$/,
  x: /^beyblade-x(?:-\d+)?$/
};

/** Only explicit usage IDs attribute a canonical character to this exact catalog Bey. */
export const relatedBeyCharacters = (bey, characters = [], catalogById) => {
  if (bey?.type !== "bey" || typeof bey.id !== "string" || !bey.id
    || typeof catalogById?.get !== "function" || !Array.isArray(characters)) return [];
  const catalogBey = catalogById.get(bey.id);
  const seasonPattern = characterSeasonPatterns[bey.series];
  if (catalogBey?.type !== "bey" || catalogBey.id !== bey.id
    || catalogBey.series !== bey.series || typeof seasonPattern?.test !== "function") return [];
  const seen = new Set();
  return characters.filter(character => {
    if (typeof character?.id !== "string" || !character.id || seen.has(character.id)) return false;
    const compatibleGroups = characterUsageGroups(character).filter(group =>
      typeof group?.season === "string" && seasonPattern.test(group.season)
    );
    const hasUsage = compatibleGroups.some(group => Array.isArray(group.beyIds) && group.beyIds.includes(bey.id))
      || (compatibleGroups.length > 0 && Array.isArray(character.additionalUsage?.beyIds)
        && character.additionalUsage.beyIds.includes(bey.id));
    if (!hasUsage) return false;
    seen.add(character.id);
    return true;
  });
};
