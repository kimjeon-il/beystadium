import assert from "node:assert/strict";
import test from "node:test";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { toolsItems } from "../data/source/secondary.mjs";
import { xSetProductCompositions } from "../data/source/x-set-products.mjs";

const productsById = new Map(productItems.map(product => [product.id, product]));
const allTargetIds = new Set([...beyItems, ...partItems, ...toolsItems].map(item => item.id));

test("23 requested X products expose the exact regional compositions", () => {
  assert.equal(Object.keys(xSetProductCompositions).length, 23);

  for (const [productId, regionalCompositions] of Object.entries(xSetProductCompositions)) {
    const product = productsById.get(productId);
    assert.ok(product, `Missing ${productId}`);
    for (const [region, expected] of Object.entries(regionalCompositions)) {
      assert.deepEqual(product.releases[region].composition, expected, `${productId} ${region}`);
      for (const entry of expected) assert.ok(allTargetIds.has(entry.target), `${productId} -> ${entry.target}`);
    }
  }
});

test("set quantities and mixed Bey-part compositions stay exact", () => {
  const ux10 = productsById.get("PRODUCT-X-UX-10");
  assert.deepEqual(ux10.releases.kr.composition.map(entry => entry.target), [
    "BEY-X-UX-10-KNIGHT-MAIL-3-85BS",
    "PART-X-BLADE-PTERA-SWING",
    "PART-X-BLADE-HELLS-HAMMER",
    "PART-X-BLADE-TYRANNO-BEAT",
    "PART-X-RATCHET-1-60",
    "PART-X-RATCHET-7-70",
    "PART-X-BIT-B",
    "PART-X-BIT-MN",
    "PART-X-BIT-P",
    "PART-X-BIT-RA",
    "PART-X-BIT-R"
  ]);

  const anniversary = productsById.get("PRODUCT-X-BX-00-BEYBLADE-25TH-ANNIVERSARY-SET");
  assert.deepEqual(anniversary.releases.jp.composition.map(entry => [entry.target, entry.quantity]), [
    ["BEY-X-BX-00-DRAGOON-STORM-4-60RA", "1개"],
    ["BEY-X-BX-00-STORM-PEGASIS-3-70RA", "1개"],
    ["BEY-X-BX-00-VICTORY-VALKYRIE-2-60RA", "1개"],
    ["BEY-X-BX-01-DRAN-SWORD-3-60F", "1개"],
    ["TOOLS-X-WINDER-LAUNCHER", "1개"],
    ["TOOLS-X-WINDER-LAUNCHER-L", "1개"],
    ["TOOLS-X-STRING-LAUNCHER", "2개"]
  ]);

  for (const productId of [
    "PRODUCT-X-BX-00-IRON-MAN-4-80B-THANOS-4-60P",
    "PRODUCT-X-BX-00-SPIDER-MAN-3-60F-VENOM-3-80N",
    "PRODUCT-X-BX-00-LUKE-SKYWALKER-4-80B-DARTH-VADER-4-60P",
    "PRODUCT-X-BX-00-MANDALORIAN-3-60F-MOFF-GIDEON-3-80N",
    "PRODUCT-X-BX-00-OPTIMUS-PRIME-4-60P-MEGATRON-4-80B",
    "PRODUCT-X-BX-00-OPTIMUS-PRIMAL-3-60F-STARSCREAM-3-80N"
  ]) {
    assert.equal(productsById.get(productId).releases.jp.composition.at(-1).quantity, "2개");
  }
});

test("limited X Bey addresses use English names without regional sequence qualifiers", () => {
  const xBeys = beyItems.filter(item => item.series === "x");
  assert.equal(xBeys.some(item => /-(?:JP-\d+|ASIA)-/.test(item.id)), false);
  assert.equal(xBeys.filter(item => item.id === "BEY-X-BX-00-DRANZER-SPIRAL-3-80T").length, 1);
  assert.equal(xBeys.filter(item => item.id === "BEY-X-BX-00-COBALT-DRAKE-4-60F").length, 1);
  assert.equal(xBeys.filter(item => item.id === "BEY-X-UX-00-DRAN-BUSTER-1-60A").length, 1);
  assert.equal(xBeys.filter(item => item.id === "BEY-X-UX-00-AERO-PEGASUS-3-70A").length, 1);
  assert.ok(xBeys.some(item => item.id === "BEY-X-BX-00-IRON-MAN-4-80B"));
  assert.ok(xBeys.some(item => item.id === "BEY-X-BX-00-THE-MANDALORIAN-3-60F"));
  assert.ok(xBeys.some(item => item.id === "BEY-X-BX-00-T-REX-1-80GB"));
});

test("logger labels and Spider-Man correction are region-safe", () => {
  const logger = toolsItems.find(item => item.id === "TOOLS-X-BEY-BATTLE-LOGGER");
  assert.deepEqual([logger.name, logger.jpName, logger.en], ["베이 배틀 로거", "베이 배틀 패스", "Bey Battle Pass"]);

  const spider = productsById.get("PRODUCT-X-BX-00-SPIDER-MAN-3-60F-VENOM-3-80N");
  assert.equal(spider.addressSlug, "SPIDER-MAN-3-60F-VENOM-3-80N");
  assert.match(spider.releases.jp.name, /3-60F/);
  assert.equal(productItems.some(item => /SPIDER-MAN-3-30F/.test(item.id)), false);
});
