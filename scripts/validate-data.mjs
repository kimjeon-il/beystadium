import { readFile } from "node:fs/promises";
import vm from "node:vm";

const sourceFiles = [
  "data/catalog-data.js",
  "data/product-data.js",
  "data/rare-bey-get-data.js",
  "data/secondary-data.js",
  "data/anime-data.js"
];

let source = "";
for (const file of sourceFiles) source += `${await readFile(new URL(`../${file}`, import.meta.url), "utf8")}\n`;
source += "\nglobalThis.__data={beyItems,partItems,productItems,rareBeyGetItems,toolsItems,bookItems,gameItems,animeInfo};";

const context = {};
vm.createContext(context);
new vm.Script(source, { filename: "beystadium-data.js" }).runInContext(context);
const data = context.__data;
const collections = [
  data.beyItems,
  data.partItems,
  data.productItems,
  data.toolsItems,
  data.bookItems,
  data.gameItems
];
const allItems = collections.flat();
const ids = allItems.map(item => item.id).filter(Boolean);
const idSet = new Set(ids);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const missingParts = data.beyItems.flatMap(item => (item.parts || [])
  .filter(target => !idSet.has(target))
  .map(target => `${item.id} -> ${target}`));
const missingTargets = data.productItems.flatMap(item => Object.values(item.releases || {}).flatMap(release =>
  (release?.composition || [])
    .filter(entry => entry.target && !idSet.has(entry.target))
    .map(entry => `${item.id} -> ${entry.target}`)));
const missingPoolItems = data.productItems.flatMap(item => (item.beyPool || [])
  .filter(target => !idSet.has(target))
  .map(target => `${item.id} -> ${target}`));

const failures = [
  ["duplicate IDs", duplicateIds],
  ["missing parts", missingParts],
  ["missing composition targets", missingTargets],
  ["missing Bey pool targets", missingPoolItems]
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
