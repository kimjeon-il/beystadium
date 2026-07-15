import assert from "node:assert/strict";
import test from "node:test";

import { productItems } from "../data/source/products.mjs";
import { toolsItems } from "../data/source/secondary.mjs";

const expectedProducts = new Map([
  ["PRODUCT-X-BX-10", ["익스트림스타디움", "TOOLS-X-XTREME-STADIUM"]],
  ["PRODUCT-X-BX-11", ["런처그립", "TOOLS-X-LAUNCHER-GRIP"]],
  ["PRODUCT-X-BX-12", ["배틀 덱 케이스", "TOOLS-X-BATTLE-DECK-CASE"]],
  ["PRODUCT-X-BX-00-XTREME-STADIUM-LIGHT-PACKAGE", ["익스트림스타디움", "TOOLS-X-XTREME-STADIUM"]],
  ["PRODUCT-X-BX-18", ["스트링런처", "TOOLS-X-STRING-LAUNCHER"]],
  ["PRODUCT-X-BX-25", ["기어케이스", "TOOLS-X-GEAR-CASE"]],
  ["PRODUCT-X-BX-28", ["스트링런처", "TOOLS-X-STRING-LAUNCHER"]],
  ["PRODUCT-X-BX-29", ["커스텀그립", "TOOLS-X-CUSTOM-GRIP"]],
  ["PRODUCT-X-BX-30", ["커스텀그립", "TOOLS-X-CUSTOM-GRIP"]],
  ["PRODUCT-X-BX-00-CUSTOM-GRIP-CLEAR-BLACK", ["커스텀그립", "TOOLS-X-CUSTOM-GRIP"]],
  ["PRODUCT-X-BX-32", ["와이드익스트림스타디움", "TOOLS-X-WIDE-XTREME-STADIUM"]]
]);
const productsById = new Map(productItems.map(item => [item.id, item]));
const toolsById = new Map(toolsItems.map(item => [item.id, item]));

test("requested X tool products contain exactly one matching tool in every release", () => {
  assert.equal(expectedProducts.size, 11);
  for (const [productId, [name, target]] of expectedProducts) {
    const product = productsById.get(productId);
    assert.ok(product, productId);
    for (const release of Object.values(product.releases)) {
      assert.deepEqual(release.composition, [{ name, quantity: "1개", target }]);
    }
    assert.ok(toolsById.has(target), `${productId} -> ${target}`);
  }
});

test("new X tools use shared base names without color variants", () => {
  const expectedTools = [
    ["TOOLS-X-BATTLE-DECK-CASE", "배틀 덱 케이스", "Battle Deck Case", "기타"],
    ["TOOLS-X-GEAR-CASE", "기어케이스", "Gear Case", "기타"],
    ["TOOLS-X-CUSTOM-GRIP", "커스텀그립", "Custom Grip", "그립"],
    ["TOOLS-X-WIDE-XTREME-STADIUM", "와이드익스트림스타디움", "Wide Xtreme Stadium", "스타디움"]
  ];
  for (const [id, name, en, category] of expectedTools) {
    const item = toolsById.get(id);
    assert.deepEqual(item && { name: item.name, en: item.en, category: item.category },
      { name, en, category });
  }

  for (const productId of [
    "PRODUCT-X-BX-28",
    "PRODUCT-X-BX-29",
    "PRODUCT-X-BX-30",
    "PRODUCT-X-BX-00-CUSTOM-GRIP-CLEAR-BLACK"
  ]) {
    const compositionText = Object.values(productsById.get(productId).releases)
      .flatMap(release => release.composition)
      .map(item => item.name)
      .join(" ");
    assert.doesNotMatch(compositionText, /화이트|레드|클리어블랙|Ver\./);
  }
});

test("X series uses Xtreme in English names and addresses", () => {
  const xTools = toolsItems.filter(item => item.series === "x");
  const xProducts = productItems.filter(item => item.series === "x");
  for (const item of xTools) assert.doesNotMatch(`${item.id} ${item.en || ""}`, /EXTREME|Extreme/);
  for (const item of xProducts) assert.doesNotMatch(`${item.id} ${item.addressSlug || ""}`, /EXTREME/);

  assert.equal(toolsById.get("TOOLS-X-XTREME-STADIUM")?.en, "Xtreme Stadium");
  assert.equal(toolsById.get("TOOLS-X-DOUBLE-XTREME-STADIUM")?.en, "Double Xtreme Stadium");
  assert.equal(toolsById.has("TOOLS-X-EXTREME-STADIUM"), false);
  assert.equal(productsById.has("PRODUCT-X-BX-00-EXTREME-STADIUM-LIGHT-PACKAGE"), false);
});
