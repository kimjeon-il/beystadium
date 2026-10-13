import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { animeInfo } from "../data/source/anime.mjs";
import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { bookItems, gameItems, toolsItems } from "../data/source/secondary.mjs";
import { assertCoverage } from "../scripts/validation-contracts.mjs";

test("runtime registry covers every current source identity and episode without historical totals", async () => {
  const expected = [...beyItems, ...partItems, ...productItems, ...toolsItems, ...bookItems, ...gameItems, ...animeInfo.characters].map(item => item.id);
  const expectedIds = new Set(expected);
  const registry = JSON.parse(await readFile(new URL("../data/runtime/registry.json", import.meta.url), "utf8"));
  const actual = registry.items.map(([id]) => id);
  assert.equal(new Set(actual).size, actual.length, "duplicate runtime registry IDs");
  assertCoverage(expected, actual.filter(id => expectedIds.has(id)), [], "runtime source identities");
  const episodes = actual.filter(id => !expectedIds.has(id));
  assert.equal(episodes.length, animeInfo.episodes.length);
  assert.ok(episodes.every(id => /-EPISODE-\d+$/.test(id)), "unexpected non-episode registry entries");
});
