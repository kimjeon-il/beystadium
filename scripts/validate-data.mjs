import { animeInfo } from "../data/source/anime.mjs";
import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { rareBeyGetItems } from "../data/source/rare-bey-get.mjs";
import { bookItems, gameItems, toolsItems } from "../data/source/secondary.mjs";
import { expectedXBeyId, xBeyQualifier } from "./x-bey-id.mjs";

const collections = [beyItems, partItems, productItems, toolsItems, bookItems, gameItems];
const allItems = collections.flat();
const ids = allItems.map(item => item.id).filter(Boolean);
const idSet = new Set(ids);
const partsById = new Map(partItems.map(item => [item.id, item]));
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const invalidXBeyIds = beyItems
  .filter(item => item.series === "x")
  .filter(item => item.id !== expectedXBeyId(item, partsById))
  .map(item => `${item.id} -> ${expectedXBeyId(item, partsById)}`);
const invalidXBeyQualifiers = beyItems
  .filter(item => item.series === "x" && xBeyQualifier(item) && !item.productNo?.endsWith("-00"))
  .map(item => `${item.id} (${item.productNo})`);
const legacyEntries = allItems.flatMap(item => (item.legacyIds || []).map(legacyId => [legacyId, item.id]));
const legacyIds = legacyEntries.map(([legacyId]) => legacyId);
const legacyIdSet = new Set(legacyIds);
const duplicateLegacyIds = [...new Set(legacyIds.filter((id, index) => legacyIds.indexOf(id) !== index))];
const conflictingLegacyIds = legacyEntries
  .filter(([legacyId]) => idSet.has(legacyId))
  .map(([legacyId, target]) => `${legacyId} -> ${target}`);
const invalidLegacyTargets = legacyEntries
  .filter(([, target]) => !idSet.has(target) || legacyIdSet.has(target))
  .map(([legacyId, target]) => `${legacyId} -> ${target}`);
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
const staleLegacyReferences = [
  ...beyItems.flatMap(item => item.parts || []),
  ...productItems.flatMap(item => Object.values(item.releases || {}).flatMap(release =>
    (release?.composition || []).map(entry => entry.target).filter(Boolean))),
  ...productItems.flatMap(item => item.beyPool || [])
].filter(target => legacyIdSet.has(target));

const failures = [
  ["duplicate IDs", duplicateIds],
  ["invalid X Bey IDs", invalidXBeyIds],
  ["invalid X Bey qualifiers", invalidXBeyQualifiers],
  ["duplicate legacy IDs", duplicateLegacyIds],
  ["legacy IDs conflicting with current IDs", conflictingLegacyIds],
  ["invalid legacy alias targets", invalidLegacyTargets],
  ["references still using legacy IDs", staleLegacyReferences],
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
