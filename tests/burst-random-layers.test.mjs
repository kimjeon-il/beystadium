import assert from "node:assert/strict";
import test from "node:test";

import {
  beyItems,
  burstRandomLayerLineups,
  partItems
} from "../data/source/catalog.mjs";
import { burstRandomLayerParts } from "../data/source/burst-random-layers.mjs";
import { productItems } from "../data/source/products.mjs";

const expectedLineups = {
  "B-143": [
    "PART-BURST-GACHILAYER-DREAD-BAHAMUT-TEN",
    "PART-BURST-GACHILAYER-ACE-VALKYRIE-SEN",
    "PART-BURST-CHOZLAYER-AIR-KNIGHT",
    "PART-BURST-CHOZLAYER-DEAD-PHOENIX"
  ],
  "B-147": [
    "PART-BURST-GACHILAYER-POISON-HYDRA-ZAN",
    "PART-BURST-GACHILAYER-BUSHIN-HYDRA-RETSU",
    "PART-BURST-GACHILAYER-ROCK-VALKYRIE-SEN",
    "PART-BURST-GACHILAYER-ACE-JOKER-TEN"
  ],
  "B-152": [
    "PART-BURST-GACHILAYER-KNOCKOUT-ODIN-GEN",
    "PART-BURST-GACHILAYER-GRAND-PEGASUS-SEN",
    "PART-BURST-GACHILAYER-JUDGEMENT-ASHURA-METSU",
    "PART-BURST-GACHILAYER-VENOM-HYDRA-ZAN"
  ]
};
const productsByNo = new Map(productItems.flatMap(item => {
  const no = item.id.match(/^PRODUCT-BURST-(B-\d+)$/)?.[1];
  return no ? [[no, item]] : [];
}));
const partsById = new Map(partItems.map(item => [item.id, item]));

test("Burst random layer products keep the requested 12 entries in source order", () => {
  assert.deepEqual(burstRandomLayerLineups, expectedLineups);
  assert.equal(Object.values(burstRandomLayerLineups).flat().length, 12);
  assert.equal(burstRandomLayerParts.length, 10);
  assert.equal(burstRandomLayerParts.some(item => item.id === "PART-BURST-CHOZLAYER-AIR-KNIGHT"), false);
  assert.equal(burstRandomLayerParts.some(item => item.id === "PART-BURST-CHOZLAYER-DEAD-PHOENIX"), false);
  Object.values(burstRandomLayerLineups).flat().forEach(id => assert.ok(partsById.has(id), id));
});

test("new random layers use Korean display names and cleaned English source names", () => {
  for (const item of burstRandomLayerParts) {
    assert.equal(item.type, "gachilayer");
    assert.match(item.name, /[가-힣]/);
    assert.doesNotMatch(`${item.name} ${item.en}`, /[()]/);
    assert.deepEqual(item.tags, []);
    assert.deepEqual(item.stats, []);
  }
});

test("released random layer products expose an ordered layer lineup", () => {
  for (const [productNo, ids] of Object.entries(expectedLineups)) {
    const product = productsByNo.get(productNo);
    assert.ok(product, `Missing product ${productNo}`);
    assert.equal(product.lineupTitle, "등장 레이어");
    assert.deepEqual(product.lineupPool, ids);
    for (const release of Object.values(product.releases)) {
      assert.deepEqual(release.composition, [
        { name: "무작위 레이어", quantity: "1개", target: ids[0] }
      ]);
    }
  }
});

test("Judgement is canonical in Burst English names and addresses", () => {
  const burstCatalog = [...beyItems, ...partItems].filter(item => item.series === "burst");
  for (const item of burstCatalog) {
    assert.doesNotMatch(`${item.id} ${item.en || ""}`, /JUDGMENT|Judgment/);
  }

  assert.equal(partsById.get("PART-BURST-GACHIBASE-JUDGEMENT")?.en, "Judgement");
  assert.equal(partsById.get("PART-BURST-GACHILAYER-JUDGEMENT-ASHURA-METSU")?.en,
    "Judgement Ashura Metsu");
  assert.equal(beyItems.some(item => item.id === "BEY-BURST-B-142-JUDGEMENT-JOKER-00T-TR-ZAN"), true);
  assert.equal(beyItems.some(item => item.id === "BEY-BURST-B-151-08-JUDGEMENT-PEGASUS-8-DASH-G-KP-DASH-METSU"), true);
  assert.equal(productItems.find(item => item.id === "PRODUCT-BURST-B-142")?.releases.kr.composition[0].target,
    "BEY-BURST-B-142-JUDGEMENT-JOKER-00T-TR-ZAN");
});
