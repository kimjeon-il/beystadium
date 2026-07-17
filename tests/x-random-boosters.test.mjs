import assert from "node:assert/strict";
import test from "node:test";

import { beyItems, partItems, xRandomBoosterLineups } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import {
  xRandomBoosterBeyItems,
  xRandomBoosterPartItems
} from "../data/source/x-random-boosters.mjs";

const expectedLineups = {
  "PRODUCT-X-BX-48": [
    "BEY-X-BX-48-01-COBALT-DRAGOON-9-80F",
    "BEY-X-BX-48-02-SHARK-EDGE-4-70E",
    "BEY-X-BX-48-03-MAMMOTH-TUSK-7-60S",
    "BEY-X-BX-48-04-HELLS-SCYTHE-3-85GB",
    "BEY-X-BX-48-05-DRAN-BUSTER-2-80Q"
  ],
  "PRODUCT-X-CX-17": [
    "BEY-X-CX-17-01-UNICORN-DELTA-PO-3-60GU",
    "BEY-X-CX-17-02-UNICORN-DELTA-PO-1-80GR",
    "BEY-X-CX-17-03-WARRIOR-SABER-9-65LO",
    "BEY-X-CX-17-04-HELLS-HAMMER-3-85GU",
    "BEY-X-CX-17-05-TYRANNO-BEAT-3-60N",
    "BEY-X-CX-17-06-CRIMSON-GARUDA-7-80GU"
  ],
  "PRODUCT-X-CX-18": [
    "BEY-X-CX-18-01-BRACHIO-WHIP-OW-5-70NR",
    "BEY-X-CX-18-02-BRACHIO-WHIP-OW-5-70NR",
    "BEY-X-CX-18-03-BRACHIO-WHIP-OW-5-70NR"
  ],
  "PRODUCT-X-BX-50": [
    "BEY-X-BX-50-01-HEAVENS-RING-0-80DS",
    "BEY-X-BX-50-02-HEAVENS-RING-6-60TP",
    "BEY-X-BX-50-03-IMPACT-DRAKE-7-55FB",
    "BEY-X-BX-50-04-GHOST-CIRCLE-M-85DS",
    "BEY-X-BX-50-05-WOLF-FLAME-D-9-65L",
    "BEY-X-BX-50-06-KERBEROS-REAPER-B-0-80WB"
  ],
  "PRODUCT-X-BX-00-LIGHTNING-L-DRAGO-1-60F": [
    "BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F",
    "BEY-X-BX-00-02-LIGHTNING-L-DRAGO-BARRAGE-1-60F"
  ]
};
const productsById = new Map(productItems.map(item => [item.id, item]));
const beysById = new Map(beyItems.map(item => [item.id, item]));
const partsById = new Map(partItems.map(item => [item.id, item]));

test("X random booster products expose exact regional lineups", () => {
  assert.deepEqual(xRandomBoosterLineups, expectedLineups);
  assert.equal(xRandomBoosterBeyItems.length, 22);

  for (const [productId, lineup] of Object.entries(expectedLineups)) {
    const product = productsById.get(productId);
    assert.ok(product, productId);
    assert.deepEqual(product.releases.jp.composition, [
      { name: "무작위 베이", quantity: "1개", target: lineup[0] }
    ], `${productId} jp composition`);
    if (productId === "PRODUCT-X-CX-17") {
      assert.deepEqual(product.releases.kr.composition, [
        { name: "무작위 베이", quantity: "1개", target: lineup[0] }
      ], `${productId} kr composition`);
    } else {
      assert.deepEqual(product.releases.kr, { status: "unreleased" }, `${productId} kr`);
    }
    assert.deepEqual(product.lineupPool, lineup, `${productId} lineup`);
    for (const target of lineup) assert.ok(beysById.has(target), `${productId} -> ${target}`);
  }
});

test("X random booster Beys keep canonical product numbers, types, and spins", () => {
  const expectedTypes = [
    "attack", "balance", "defense", "stamina", "attack",
    "balance", "attack", "stamina", "balance", "defense", "balance",
    "stamina", "stamina", "stamina",
    "defense", "balance", "stamina", "defense", "attack", "stamina",
    "attack", "attack"
  ];

  assert.deepEqual(xRandomBoosterBeyItems.map(item => item.battleType), expectedTypes);
  assert.deepEqual(xRandomBoosterBeyItems.filter(item => item.spin === "left").map(item => item.id), [
    "BEY-X-BX-48-01-COBALT-DRAGOON-9-80F",
    "BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F",
    "BEY-X-BX-00-02-LIGHTNING-L-DRAGO-BARRAGE-1-60F"
  ]);
  assert.equal(xRandomBoosterBeyItems.filter(item => item.spin === "right").length, 19);

  for (const [productId, lineup] of Object.entries(expectedLineups)) {
    const productNo = productId.match(/^PRODUCT-X-((?:BX|CX)-\d+)/)?.[1];
    for (const [index, id] of lineup.entries()) {
      const bey = beysById.get(id);
      assert.equal(bey.productNo, `${productNo}-${String(index + 1).padStart(2, "0")}`);
      for (const partId of bey.parts) assert.ok(partsById.has(partId), `${id} -> ${partId}`);
    }
  }
});

test("new X parts preserve official names, roles, and stats", () => {
  assert.equal(xRandomBoosterPartItems.length, 11);
  assert.deepEqual(partsById.get("PART-X-BLADE-OVER-BLADE-PEAK") && {
    name: partsById.get("PART-X-BLADE-OVER-BLADE-PEAK").name,
    en: partsById.get("PART-X-BLADE-OVER-BLADE-PEAK").en,
    role: partsById.get("PART-X-BLADE-OVER-BLADE-PEAK").xBladeRole
  }, { name: "P", en: "Peak", role: "overBlade" });
  assert.deepEqual(partsById.get("PART-X-BLADE-ASSIST-BLADE-ODD") && {
    name: partsById.get("PART-X-BLADE-ASSIST-BLADE-ODD").name,
    en: partsById.get("PART-X-BLADE-ASSIST-BLADE-ODD").en,
    role: partsById.get("PART-X-BLADE-ASSIST-BLADE-ODD").xBladeRole
  }, { name: "O", en: "Odd", role: "assistBlade" });
  assert.deepEqual(partsById.get("PART-X-BLADE-OVER-BLADE-OUTER") && {
    name: partsById.get("PART-X-BLADE-OVER-BLADE-OUTER").name,
    en: partsById.get("PART-X-BLADE-OVER-BLADE-OUTER").en,
    role: partsById.get("PART-X-BLADE-OVER-BLADE-OUTER").xBladeRole
  }, { name: "O", en: "Outer", role: "overBlade" });

  assert.deepEqual(partsById.get("PART-X-BLADE-HEAVENS-RING")?.stats, [10, 60, 30]);
  assert.deepEqual(partsById.get("PART-X-BIT-GU")?.stats, [30, 20, 20]);
  assert.deepEqual(partsById.get("PART-X-BIT-NR")?.stats, [15, 20, 60]);
  assert.deepEqual(partsById.get("PART-X-BIT-DS")?.stats, [5, 55, 40]);
});

test("Brachio Whip color variants remain distinct slot entries", () => {
  const variants = expectedLineups["PRODUCT-X-CX-18"].map(id => beysById.get(id));
  assert.equal(new Set(variants.map(item => item.id)).size, 3);
  assert.equal(new Set(variants.map(item => item.productNo)).size, 3);
  assert.equal(new Set(variants.map(item => item.name)).size, 1);
  assert.equal(new Set(variants.map(item => item.parts.join("|"))).size, 1);
});

test("Lightning L-Drago keeps the official Upper and Barrage modes", () => {
  const product = productsById.get("PRODUCT-X-BX-00-LIGHTNING-L-DRAGO-1-60F");
  assert.equal(product.releases.jp.name, "랜덤부스터 라이트닝엘드라고 1-60F");
  assert.equal(product.releases.jp.kind, "랜덤부스터");

  const [upper, barrage] = expectedLineups["PRODUCT-X-BX-00-LIGHTNING-L-DRAGO-1-60F"]
    .map(id => beysById.get(id));
  assert.deepEqual([upper.jpName, barrage.jpName], [
    "라이트닝엘드라고 1-60F (어퍼형)",
    "라이트닝엘드라고 1-60F (연타형)"
  ]);
  assert.deepEqual([upper.parts[0], barrage.parts[0]], [
    "PART-X-BLADE-LIGHTNING-L-DRAGO-UPPER",
    "PART-X-BLADE-LIGHTNING-L-DRAGO-BARRAGE"
  ]);
});
