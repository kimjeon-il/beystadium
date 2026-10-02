import assert from "node:assert/strict";
import test from "node:test";

import { animeInfo } from "../data/source/anime.mjs";
import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { beyModelNames, relatedBeyCharacters, relatedBeyProducts } from "../src/bey-relations.js";
import { resolveProductComposition, resolveProductDisplayName, resolveProductDisplayRegion, resolveProductRelease } from "../src/product-relations-core.js";

const catalogById = new Map([...beyItems, ...partItems].map(item => [item.id, item]));
const bey = { id: "BEY-X-EXAMPLE", series: "x", type: "bey" };
const composition = target => [{ name: "베이", target, quantity: "1개" }];
const released = (no, name, target = bey.id) => ({ no, name, composition: composition(target) });

test("product relations include every exact containing product once, preserving number and name", () => {
  const products = [
    { id: "PRODUCT-A", series: "x", releases: { kr: released("BX-01", "스타터") } },
    { id: "PRODUCT-B", series: "x", releases: { kr: released("BX-07", "세트") } },
    { id: "PRODUCT-NO", series: "x", releases: { kr: released("BX-99", "다른 상품", "OTHER-BEY") } }
  ];
  const before = JSON.stringify(products);
  const results = relatedBeyProducts(bey, [...products, products[0]], "kr");
  assert.deepEqual(results.map(row => [row.product.id, row.region, row.release.no, row.release.name, row.isRandom]), [
    ["PRODUCT-A", "kr", "BX-01", "스타터", false],
    ["PRODUCT-B", "kr", "BX-07", "세트", false]
  ]);
  assert.equal(JSON.stringify(products), before);
});

test("product relations use selected-region composition, and fallback only for an unavailable release", () => {
  const products = [
    { id: "REGIONAL", releases: { kr: released("KR-1", "한국 상품", "OTHER-BEY"), jp: released("JP-1", "일본 상품") } },
    { id: "JP-ONLY", releases: { kr: { status: "unreleased" }, jp: released("JP-2", "일본 전용") } },
    { id: "UNAVAILABLE", releases: { kr: { status: "unreleased" }, jp: { status: "unreleased" } }, composition: composition(bey.id) }
  ];
  assert.deepEqual(relatedBeyProducts(bey, products, "kr").map(row => [row.product.id, row.region]), [["JP-ONLY", "jp"]]);
  assert.deepEqual(relatedBeyProducts(bey, products, "jp").map(row => [row.product.id, row.region]), [["REGIONAL", "jp"], ["JP-ONLY", "jp"]]);
});

test("random lineup reverse lookup covers every possible Bey, including its representative composition target", () => {
  const product = {
    id: "RANDOM", lineupPool: [bey.id, "BEY-X-OTHER"],
    releases: { kr: { no: "BX-14", name: "랜덤부스터", composition: [{ name: "무작위 베이", target: bey.id }] } }
  };
  assert.equal(relatedBeyProducts(bey, [product], "kr")[0]?.isRandom, true);
  assert.equal(relatedBeyProducts({ ...bey, id: "BEY-X-OTHER" }, [product], "kr")[0]?.isRandom, true);
});

test("a guaranteed regional release does not inherit the other region's random possibilities", () => {
  const product = {
    id: "REGIONAL-RANDOM", lineupPool: [bey.id, "BEY-X-OTHER"],
    releases: {
      kr: released("KR-1", "확정 베이"),
      jp: { no: "JP-1", name: "랜덤부스터", composition: [{ name: "무작위 베이", target: bey.id }] }
    }
  };
  assert.equal(relatedBeyProducts(bey, [product], "kr")[0]?.isRandom, false);
  assert.deepEqual(relatedBeyProducts({ ...bey, id: "BEY-X-OTHER" }, [product], "kr"), []);
  assert.equal(relatedBeyProducts({ ...bey, id: "BEY-X-OTHER" }, [product], "jp")[0]?.isRandom, true);
});

test("an explicit lineup marker and a pool without composition remain discoverable", () => {
  const products = [
    { id: "EXPLICIT", lineupPool: [bey.id], releases: { kr: { composition: [{ name: "등장 베이", target: bey.id, lineup: true }] } } },
    { id: "POOL-ONLY", lineupPool: [bey.id], releases: { kr: { composition: [] } } }
  ];
  assert.deepEqual(relatedBeyProducts(bey, products).map(row => [row.product.id, row.isRandom]), [["EXPLICIT", true], ["POOL-ONLY", true]]);
});

test("release extraction preserves legacy Korean base fields and regional composition fallbacks", () => {
  const product = { id: "LEGACY", no: "BASE-1", name: "기본", kind: "기타", composition: composition(bey.id) };
  assert.equal(resolveProductRelease(product, "kr").name, "기본");
  assert.equal(resolveProductRelease(product, "kr").kind, "");
  assert.equal(resolveProductRelease(product, "jp").status, "unreleased");
  assert.equal(resolveProductDisplayRegion(product, "jp"), "kr");
  const regional = { ...product, releases: { jp: { name: "일본" } }, compositionJp: composition("JP-BEY") };
  assert.deepEqual(resolveProductComposition(regional, "jp"), composition("JP-BEY"));
  assert.deepEqual(resolveProductComposition({ releases: { kr: { composition: composition("KR-BEY") }, jp: {} } }, "jp"), composition("KR-BEY"));
  assert.equal(relatedBeyProducts(bey, [product], "jp")[0]?.region, "kr");
});

test("product names retain regional, other-region, base-name and number fallbacks", () => {
  assert.equal(resolveProductDisplayName({ releases: { kr: { name: "한국" }, jp: { name: "일본" } } }, "jp"), "일본");
  assert.equal(resolveProductDisplayName({ releases: { kr: { name: "한국" }, jp: { no: "JP-1" } } }, "jp"), "한국");
  assert.equal(resolveProductDisplayName({ name: "기본", releases: { kr: { status: "unreleased" }, jp: { no: "JP-1" } } }, "jp"), "기본");
  assert.equal(resolveProductDisplayName({ releases: { kr: { status: "unreleased" }, jp: { no: "JP-1" } } }, "kr"), "JP-1");
  assert.equal(resolveProductDisplayName({ no: "BASE-1", releases: { kr: { status: "unreleased" }, jp: { status: "unreleased" } } }, "jp"), "BASE-1");
});

test("real X starter, set and random products are found by authoritative targets", () => {
  const examples = [
    ["BEY-X-BX-01-DRAN-SWORD-3-60F", "PRODUCT-X-BX-01", false],
    ["BEY-X-UX-10-KNIGHT-MAIL-3-85BS", "PRODUCT-X-UX-10", false],
    ["BEY-X-BX-14-01-SHARK-EDGE-3-60LF", "PRODUCT-X-BX-14", true],
    ["BEY-X-BX-14-03-DRAN-SWORD-3-80B", "PRODUCT-X-BX-14", true]
  ];
  for (const [beyId, productId, isRandom] of examples) {
    const rows = relatedBeyProducts(catalogById.get(beyId), productItems, "kr");
    assert.ok(rows.some(row => row.product.id === productId && row.isRandom === isRandom), beyId);
  }
});

test("character reverse lookup follows canonical blade aliases across retail combinations", () => {
  for (const beyId of ["BEY-X-BX-01-DRAN-SWORD-3-60F", "BEY-X-BX-14-03-DRAN-SWORD-3-80B", "BEY-X-BX-00-DRAN-SWORD-3-60F"]) {
    assert.deepEqual(relatedBeyCharacters(catalogById.get(beyId), animeInfo.characters, catalogById).map(character => character.name), ["구이수"], beyId);
  }
  assert.ok(beyModelNames(catalogById.get("BEY-X-BX-01-DRAN-SWORD-3-60F"), catalogById).includes("드란소드"));
});

test("CX model identity combines lock chip and main or metal blade, without assist codes", () => {
  const examples = [
    ["BEY-X-CX-01-DRAN-BRAVE-S-6-60V", "구이수"],
    ["BEY-X-CX-02-WIZARD-ARC-R-4-55LO", "나다운"],
    ["BEY-X-CX-00-VALKYRIE-BOLT-S-4-70V", "구나인"]
  ];
  for (const [beyId, name] of examples) {
    assert.deepEqual(relatedBeyCharacters(catalogById.get(beyId), animeInfo.characters, catalogById).map(character => character.name), [name], beyId);
  }
  const knight = beyItems.find(item => item.parts?.includes("PART-X-BLADE-MAIN-BLADE-FORTRESS"));
  assert.ok(knight, "The catalog includes a Knight Fortress model");
  assert.deepEqual(relatedBeyCharacters(knight, animeInfo.characters, catalogById).map(character => character.name), ["나다운"]);
});

test("versioned blades resolve an existing catalog model family without matching arbitrary name suffixes", () => {
  const versioned = catalogById.get("BEY-X-BX-00-DRAN-SWORD-VERSION-2-0-3-60F");
  assert.deepEqual(relatedBeyCharacters(versioned, animeInfo.characters, catalogById).map(character => character.name), ["구이수"]);
  const shadow = { id: "PART-X-BLADE-SWORD-SHADOW", series: "x", type: "blade", name: "드랜소드 섀도우" };
  const byId = new Map([...catalogById, [shadow.id, shadow]]);
  assert.deepEqual(relatedBeyCharacters({ ...bey, parts: [shadow.id] }, animeInfo.characters, byId), []);
});

test("unknown, incomplete and ambiguous model structures never invent users", () => {
  const unknown = { ...bey, name: "드랜소드 3-60F", parts: ["MISSING-BLADE"] };
  const incomplete = { ...bey, parts: ["PART-X-BLADE-LOCK-CHIP-DRAN"] };
  const ambiguous = { ...bey, parts: ["PART-X-BLADE-DRAN-SWORD", "PART-X-BLADE-HELLS-SCYTHE"] };
  const crossSeries = { ...bey, series: "burst", parts: ["PART-X-BLADE-DRAN-SWORD"] };
  for (const item of [unknown, incomplete, ambiguous, crossSeries, null]) {
    assert.deepEqual(relatedBeyCharacters(item, animeInfo.characters, catalogById), []);
  }
});

test("character matching is exact, series-scoped, normalized and emits each canonical record once", () => {
  const item = catalogById.get("BEY-X-BX-01-DRAN-SWORD-3-60F");
  const characters = [
    { id: "EXACT", name: "일치", season: "beyblade-x", beys: [" 드랜 소드 ", "드란소드"] },
    { id: "PARTIAL", name: "부분", season: "beyblade-x", beys: ["드랜", "소드", "슈퍼드랜소드"] },
    { id: "WRONG-SERIES", name: "다른 시리즈", season: "burst", beys: ["드랜소드"] },
    { id: "EMPTY", name: "미등록", season: "beyblade-x" }
  ];
  assert.deepEqual(relatedBeyCharacters(item, characters, catalogById), [characters[0]]);
});

test("existing canonical characters have stable unique IDs without adding usage records", () => {
  assert.equal(animeInfo.characters.length, 19);
  assert.equal(new Set(animeInfo.characters.map(character => character.id)).size, 19);
  for (const character of animeInfo.characters) assert.match(character.id, /^CHARACTER-X-[A-Z0-9]+(?:-[A-Z0-9]+)*$/);
  assert.deepEqual(animeInfo.characters.find(character => character.name === "구이수").beys, ["드랜소드", "드랜대거", "드랜버스터", "드랜브레이브"]);
});

test("missing and non-Bey input returns empty relationships", () => {
  assert.deepEqual(relatedBeyProducts(null, productItems), []);
  assert.deepEqual(relatedBeyProducts({ ...bey, type: "blade" }, productItems), []);
  assert.deepEqual(relatedBeyCharacters({ ...bey, type: "blade", parts: ["PART-X-BLADE-DRAN-SWORD"] }, animeInfo.characters, catalogById), []);
});
