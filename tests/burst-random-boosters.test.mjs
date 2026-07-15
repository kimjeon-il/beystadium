import assert from "node:assert/strict";
import test from "node:test";

import {
  beyItems,
  burstRandomBoosterLineups,
  partItems
} from "../data/source/catalog.mjs";
import { burstRandomBoosterRows } from "../data/source/burst-random-boosters.mjs";
import { productItems } from "../data/source/products.mjs";

const expectedCounts = {
  "B-15": 8, "B-24": 8, "B-49": 8, "B-67": 8,
  "B-80": 8, "B-87": 8, "B-95": 8, "B-101": 8,
  "B-111": 8, "B-118": 8, "B-125": 8, "B-130": 8,
  "B-132": 8, "B-140": 8, "B-146": 8, "B-151": 8,
  "B-156": 8, "B-158": 8, "B-164": 8, "B-170": 8,
  "B-173": 8, "B-176": 8, "B-178": 8, "B-186": 6,
  "B-194": 7, "B-196": 5, "B-198": 6, "B-202": 5
};
const randomBeys = beyItems.filter(item => Object.hasOwn(expectedCounts, item.productNo)
  && /^BEY-BURST-B-\d+-\d{2}-/.test(item.id));
const beysById = new Map(randomBeys.map(item => [item.id, item]));
const partIds = new Set(partItems.map(item => item.id));
const productsByNo = new Map(productItems.flatMap(item => {
  const no = item.id.match(/^PRODUCT-BURST-(B-\d+)$/)?.[1];
  return no ? [[no, item]] : [];
}));

test("Burst random booster source contains the requested 213 slots", () => {
  assert.equal(burstRandomBoosterRows.length, 213);
  assert.equal(randomBeys.length, 213);
  assert.equal(new Set(randomBeys.map(item => item.id)).size, 213);
  assert.deepEqual(Object.fromEntries(Object.entries(burstRandomBoosterLineups)
    .map(([no, ids]) => [no, ids.length])), expectedCounts);
});

test("Burst random booster IDs, Korean names, and part references are canonical", () => {
  for (const [productNo, ids] of Object.entries(burstRandomBoosterLineups)) {
    ids.forEach((id, index) => {
      const item = beysById.get(id);
      assert.ok(item, `Missing ${id}`);
      assert.equal(item.productNo, productNo);
      assert.match(id, new RegExp(`^BEY-BURST-${productNo}-${String(index + 1).padStart(2, "0")}-`));
      assert.match(item.name, /[가-힣]/);
      assert.doesNotMatch(`${item.name} ${item.en} ${item.desc} ${item.tags.join(" ")}`, /[()]/);
      item.parts.forEach(partId => assert.ok(partIds.has(partId), `${id} -> ${partId}`));
    });
  }
});

test("released products expose the ordered lineup through a random Bey entry", () => {
  for (const [productNo, ids] of Object.entries(burstRandomBoosterLineups)) {
    const product = productsByNo.get(productNo);
    assert.ok(product, `Missing product ${productNo}`);
    assert.deepEqual(product.lineupPool, ids);
    for (const release of Object.values(product.releases)) {
      if (release.status === "unreleased") {
        assert.equal(release.composition, undefined);
        continue;
      }
      assert.deepEqual(release.composition, [
        { name: "무작위 베이", quantity: "1개", target: ids[0] }
      ]);
    }
  }
});

test("representative generations and corrected remake parts keep exact combinations", () => {
  const cases = [
    ["BEY-BURST-B-15-01-TRIDENT-H-C", "트라이던트.H.C", [
      "PART-BURST-LAYER-TRIDENT", "PART-BURST-DISK-HEAVY", "PART-BURST-DRIVER-CLAW"
    ]],
    ["BEY-BURST-B-156-01-NAKED-SPRIGGAN-PR-OM-TEN", "네이키드 스프리건.Pr.Om 천", [
      "PART-BURST-GACHIBASE-NAKED", "PART-BURST-GACHICHIP-SPRIGGAN",
      "PART-BURST-GACHIWEIGHT-TEN", "PART-BURST-DISK-PARADOX",
      "PART-BURST-DRIVER-ORBIT-METAL"
    ]],
    ["BEY-BURST-B-202-01-WIND-KNIGHT-MN-BN-6", "윈드 나이트.Mn.Bn-6", [
      "PART-BURST-DBBLADE-WIND", "PART-BURST-DBCORE-KNIGHT",
      "PART-BURST-DBDISK-MOON", "PART-BURST-DRIVER-BOUNCE", "PART-BURST-DBARMOR-6"
    ]]
  ];
  for (const [id, name, parts] of cases) {
    assert.equal(beysById.get(id)?.name, name);
    assert.deepEqual(beysById.get(id)?.parts, parts);
  }

  const axe = partItems.find(item => item.id === "PART-BURST-FRAME-AXE");
  assert.deepEqual({ name: axe?.name, en: axe?.en, sub: axe?.sub },
    { name: "A", en: "Axe", sub: "액스" });
  assert.equal(partItems.some(item => item.id === "PART-BURST-FRAME-X"), false);
  assert.equal(partItems.some(item => item.id === "PART-BURST-LAYER-DRAIGER-FANG"), false);
});
