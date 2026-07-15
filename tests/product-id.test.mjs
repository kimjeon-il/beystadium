import assert from "node:assert/strict";
import test from "node:test";

import { productItems } from "../data/source/products.mjs";
import {
  expectedLimitedProductId,
  hasProductNamespace,
  limitedProductNumber,
  normalizeProductNumber,
  productIdIncludesNumber,
  productIdIssues,
  productReleaseNumbers
} from "../scripts/product-id.mjs";

test("product number normalization preserves established address variants", () => {
  assert.equal(normalizeProductNumber("BB-15(2)"), "BB-15");
  assert.equal(normalizeProductNumber("B-00α"), "B-00-ALPHA");
  assert.equal(normalizeProductNumber("B-00β"), "B-00-BETA");

  assert.equal(productIdIncludesNumber("PRODUCT-METAL-FIGHT-BB-15-KR-BLUE", "BB-15(2)"), true);
  assert.equal(productIdIncludesNumber("PRODUCT-BURST-B-00-AMATERIOS-AERO-ASSAULT", "B-00"), true);
  assert.equal(productIdIncludesNumber("PRODUCT-X-BX-00-NIGHT-SHIELD-3-80N-GOLD", "BX-00"), true);
});

test("product IDs use their series namespace and at least one regional release number", () => {
  const cases = [
    { id: "PRODUCT-METAL-FIGHT-BB-01", series: "metal fight", releases: { kr: { no: "BB-01" } } },
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

test("number 00 products replace region sequence qualifiers with descriptive slugs", () => {
  const limited = {
    id: "PRODUCT-X-BX-00-COBALT-DRAKE-4-60F",
    series: "x",
    addressSlug: "COBALT-DRAKE-4-60F",
    releases: { kr: { no: "BXH-01" }, jp: { no: "BX-00" } }
  };
  assert.equal(limitedProductNumber(limited), "BX-00");
  assert.equal(expectedLimitedProductId(limited), limited.id);
  assert.deepEqual(productIdIssues(limited), []);

  assert.deepEqual(productIdIssues({ ...limited, id: "PRODUCT-X-BX-00-JP-3" }), [
    "expected PRODUCT-X-BX-00-COBALT-DRAKE-4-60F"
  ]);
  assert.deepEqual(productIdIssues({ ...limited, addressSlug: "" }), [
    "missing limited product address slug"
  ]);
});

test("all product IDs follow the canonical rule", () => {
  const invalid = productItems.flatMap(item => productIdIssues(item)
    .map(issue => `${item.id}: ${issue}`));
  assert.deepEqual(invalid, []);
});
