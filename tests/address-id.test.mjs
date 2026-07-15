import assert from "node:assert/strict";
import test from "node:test";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { toolsItems } from "../data/source/secondary.mjs";
import { addressIdIssues, addressIdPrefix } from "../scripts/address-id.mjs";
import { limitedProductNumber } from "../scripts/product-id.mjs";

const collections = [
  ["bey", beyItems],
  ["part", partItems],
  ["product", productItems],
  ["tools", toolsItems]
];
const allItems = collections.flatMap(([, items]) => items);
const byId = new Map(allItems.map(item => [item.id, item]));

test("all catalog addresses use kind then series namespaces", () => {
  const invalid = collections.flatMap(([kind, items]) => items.flatMap(item => addressIdIssues(kind, item)
    .map(issue => `${item.id}: ${issue}`)));
  assert.deepEqual(invalid, []);
  assert.equal(allItems.length, 2421);
  assert.equal(addressIdPrefix("part", "metal fight"), "PART-METAL-FIGHT-");
  assert.equal(addressIdPrefix("part", "burst"), "PART-BURST-");
  assert.equal(addressIdPrefix("part", "x"), "PART-X-");
});

test("representative migrated addresses retain their previous canonical address", () => {
  const cases = [
    ["BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF", "BEY-BB-28-STORM-PEGASIS-105RF"],
    ["PART-METAL-FIGHT-FACE-PEGASIS", "FACE-PEGASIS"],
    ["PART-BURST-LAYER-VALKYRIE", "LAYER-VALKYRIE"],
    ["PART-X-BLADE-DRAN-SWORD", "X-BLADE-DRAN-SWORD"],
    ["PRODUCT-METAL-FIGHT-BB-28", "PRODUCT-BB-28"],
    ["PRODUCT-X-BX-00-COBALT-DRAKE-4-60F", "PRODUCT-X-BX-00-JP-3"],
    ["TOOLS-METAL-FIGHT-LIGHT-LAUNCHER", "TOOLS-LIGHT-LAUNCHER"]
  ];

  for (const [id, legacyId] of cases) {
    const item = byId.get(id);
    assert.ok(item, `Missing ${id}`);
    assert.ok(item.legacyIds?.includes(legacyId), `Missing alias ${legacyId}`);
  }
});

test("all 1696 migrated items have unique direct legacy aliases", () => {
  const migratedItems = [
    ...beyItems.filter(item => item.series === "metal fight"),
    ...partItems,
    ...productItems.filter(item => item.series === "metal fight" || limitedProductNumber(item)),
    ...toolsItems.filter(item => item.series === "metal fight")
  ];
  assert.equal(migratedItems.length, 1696);
  migratedItems.forEach(item => assert.equal(item.legacyIds?.length, 1, item.id));

  const aliases = allItems.flatMap(item => item.legacyIds || []);
  assert.equal(aliases.length, 1849);
  assert.equal(new Set(aliases).size, aliases.length);
  assert.equal(aliases.some(id => byId.has(id)), false);
});
