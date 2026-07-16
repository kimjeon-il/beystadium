import assert from "node:assert/strict";
import test from "node:test";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { toolsItems } from "../data/source/secondary.mjs";
import { addressIdIssues, addressIdPrefix } from "../scripts/address-id.mjs";

const collections = [
  ["bey", beyItems],
  ["part", partItems],
  ["product", productItems],
  ["tools", toolsItems]
];
const allItems = collections.flatMap(([, items]) => items);

test("all catalog addresses use kind then series namespaces", () => {
  const invalid = collections.flatMap(([kind, items]) => items.flatMap(item => addressIdIssues(kind, item)
    .map(issue => `${item.id}: ${issue}`)));
  assert.deepEqual(invalid, []);
  assert.equal(allItems.length, 2807);
  assert.equal(addressIdPrefix("part", "metal fight"), "PART-METAL-FIGHT-");
  assert.equal(addressIdPrefix("part", "burst"), "PART-BURST-");
  assert.equal(addressIdPrefix("part", "x"), "PART-X-");
});

test("catalog source has no legacy address metadata", () => {
  assert.equal(allItems.some(item => Object.hasOwn(item, "legacyIds")), false);
});
