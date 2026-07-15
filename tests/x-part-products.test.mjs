import assert from "node:assert/strict";
import test from "node:test";

import { partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";

const productsById = new Map(productItems.map(item => [item.id, item]));
const partsById = new Map(partItems.map(item => [item.id, item]));
const singlePartProducts = new Map([
  ["PRODUCT-X-BX-00-NIGHT-SHIELD-GOLD", ["NIGHT-SHIELD-GOLD", "나이트실드 골드 Ver.", "나이트실드", "PART-X-BLADE-KNIGHT-SHIELD"]],
  ["PRODUCT-X-BX-00-3-80-GOLD", ["3-80-GOLD", "3-80 골드 Ver.", "3-80", "PART-X-RATCHET-3-80"]],
  ["PRODUCT-X-BX-00-N-GOLD", ["N-GOLD", "N 골드 Ver.", "N", "PART-X-BIT-N"]]
]);
const bitSetComposition = [
  { name: "F", quantity: "1개", target: "PART-X-BIT-F" },
  { name: "T", quantity: "1개", target: "PART-X-BIT-T" },
  { name: "B", quantity: "1개", target: "PART-X-BIT-B" },
  { name: "N", quantity: "1개", target: "PART-X-BIT-N" }
];

test("gold Knight Shield parts are separate Korean-only products", () => {
  assert.equal(productsById.has("PRODUCT-X-BX-00-NIGHT-SHIELD-3-80N-GOLD"), false);
  assert.equal(singlePartProducts.size, 3);

  for (const [id, [addressSlug, name, partName, target]] of singlePartProducts) {
    const product = productsById.get(id);
    assert.ok(product, id);
    assert.equal(product.addressSlug, addressSlug);
    assert.deepEqual(product.releases.kr, {
      no: "BX-00",
      name,
      sale: "",
      kind: "부스터",
      releaseDate: "2023-11-04",
      price: "",
      composition: [{ name: partName, quantity: "1개", target }]
    });
    assert.deepEqual(product.releases.jp, { status: "unreleased" });
    assert.ok(partsById.has(target), `${id} -> ${target}`);
  }
});

test("gold-black and silver-white bit sets contain the four base bits", () => {
  const goldBlack = productsById.get("PRODUCT-X-BX-00-F-T-B-N-BIT-SET-GOLD-BLACK");
  const silverWhite = productsById.get("PRODUCT-X-BX-00-F-T-B-N-BIT-SET-SILVER-WHITE");

  assert.equal(goldBlack.releases.kr.no, "BXG-17");
  assert.equal(goldBlack.releases.jp.no, "BX-00");
  assert.deepEqual(goldBlack.releases.kr.composition, bitSetComposition);
  assert.deepEqual(goldBlack.releases.jp.composition, bitSetComposition);
  assert.deepEqual(silverWhite.releases.kr, { status: "unreleased" });
  assert.deepEqual(silverWhite.releases.jp.composition, bitSetComposition);

  for (const entry of bitSetComposition) assert.ok(partsById.has(entry.target), entry.target);
});

test("part product compositions omit colors and version labels without adding variant parts", () => {
  const productIds = [
    ...singlePartProducts.keys(),
    "PRODUCT-X-BX-00-F-T-B-N-BIT-SET-GOLD-BLACK",
    "PRODUCT-X-BX-00-F-T-B-N-BIT-SET-SILVER-WHITE"
  ];
  const compositionNames = productIds.flatMap(id => Object.values(productsById.get(id).releases)
    .flatMap(release => release.composition || [])
    .map(entry => entry.name));

  assert.doesNotMatch(compositionNames.join(" "), /골드|블랙|실버|화이트|Ver\./);
  assert.equal(partItems.some(item => /^(?:PART-X-BLADE-KNIGHT-SHIELD|PART-X-RATCHET-3-80|PART-X-BIT-(?:F|T|B|N))-(?:GOLD|BLACK|SILVER|WHITE)/.test(item.id)), false);
});
