import { animeInfo } from "../data/source/anime.mjs";
import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { rareBeyGetItems } from "../data/source/rare-bey-get.mjs";
import { bookItems, gameItems, toolsItems } from "../data/source/secondary.mjs";

const collections = [beyItems, partItems, productItems, toolsItems, bookItems, gameItems];
const allItems = collections.flat();
const ids = allItems.map(item => item.id).filter(Boolean);
const idSet = new Set(ids);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const missingParts = beyItems.flatMap(item => (item.parts || [])
  .filter(target => !idSet.has(target))
  .map(target => `${item.id} -> ${target}`));
const missingTargets = productItems.flatMap(item => Object.values(item.releases || {}).flatMap(release =>
  (release?.composition || [])
    .filter(entry => entry.target && !idSet.has(entry.target))
    .map(entry => `${item.id} -> ${entry.target}`)));
const missingPoolItems = productItems.flatMap(item => (item.beyPool || [])
  .filter(target => !idSet.has(target))
  .map(target => `${item.id} -> ${target}`));
const missingRareProducts = rareBeyGetItems.flatMap(entry => [entry.productId, ...(entry.productIds || [])]
  .filter(Boolean)
  .filter(target => !idSet.has(target))
  .map(target => `${entry.name || "rare entry"} -> ${target}`));
const invalidEpisodes = (animeInfo.episodes || []).flatMap((episode, index) =>
  episode?.season && episode?.titles ? [] : [`episode index ${index}`]);

const failures = [
  ["duplicate IDs", duplicateIds],
  ["missing parts", missingParts],
  ["missing composition targets", missingTargets],
  ["missing Bey pool targets", missingPoolItems],
  ["missing rare product targets", missingRareProducts],
  ["invalid anime episodes", invalidEpisodes]
].filter(([, values]) => values.length);

if (failures.length) {
  for (const [label, values] of failures) {
    console.error(`${label}: ${values.length}`);
    values.slice(0, 20).forEach(value => console.error(`  ${value}`));
  }
  process.exitCode = 1;
} else {
  console.log(`Data integrity OK: ${idSet.size} unique items, 0 missing references.`);
}
