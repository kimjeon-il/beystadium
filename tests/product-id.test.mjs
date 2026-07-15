import assert from "node:assert/strict";
import test from "node:test";

import { productItems } from "../data/source/products.mjs";
import {
  hasProductNamespace,
  normalizeProductNumber,
  productIdIncludesNumber,
  productIdIssues,
  productReleaseNumbers
} from "../scripts/product-id.mjs";

test("product number normalization preserves established address variants", () => {
  assert.equal(normalizeProductNumber("BB-15(2)"), "BB-15");
  assert.equal(normalizeProductNumber("B-00α"), "B-00-ALPHA");
  assert.equal(normalizeProductNumber("B-00β"), "B-00-BETA");

  assert.equal(productIdIncludesNumber("PRODUCT-BB-15-KR-BLUE", "BB-15(2)"), true);
  assert.equal(productIdIncludesNumber("PRODUCT-BURST-B-00-ALPHA", "B-00α"), true);
  assert.equal(productIdIncludesNumber("PRODUCT-X-KR-BX-00-NIGHT-SHIELD-GOLD", "BX-00"), true);
});

test("product IDs use their series namespace and at least one regional release number", () => {
  const cases = [
    { id: "PRODUCT-BB-01", series: "metal fight", releases: { kr: { no: "BB-01" } } },
    { id: "PRODUCT-BURST-BA-03", series: "burst", releases: { kr: { no: "BA-03" } } },
    { id: "PRODUCT-X-BX-29", series: "x", releases: { kr: { no: "BX-30" }, jp: { no: "BX-29" } } }
  ];

  for (const item of cases) {
    assert.equal(hasProductNamespace(item), true);
    assert.deepEqual(productIdIssues(item), []);
  }

  assert.deepEqual(productReleaseNumbers(cases[2]), ["BX-30", "BX-29"]);
  assert.deepEqual(productIdIssues({
    id: "PRODUCT-BURST-BK-03",
    series: "burst",
    releases: { kr: { no: "BA-03" } }
  }), ["missing release number (BA-03)"]);
  assert.deepEqual(productIdIssues({
    id: "PRODUCT-X-BX-01",
    series: "burst",
    releases: { kr: { no: "BX-01" } }
  }), ["invalid burst namespace"]);
});

test("all product IDs follow the canonical rule and retain the corrected legacy address", () => {
  const invalid = productItems.flatMap(item => productIdIssues(item)
    .map(issue => `${item.id}: ${issue}`));
  assert.deepEqual(invalid, []);

  const corrected = productItems.find(item => item.id === "PRODUCT-BURST-BA-03");
  assert.ok(corrected);
  assert.deepEqual(corrected.legacyIds, ["PRODUCT-BURST-BK-03"]);
});
