import assert from "node:assert/strict";
import test from "node:test";

import { animeInfo } from "../data/source/anime.mjs";
import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { relatedBeyCharacters, relatedBeyProducts } from "../src/bey-relations.js";
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

test("existing X free-text usage never attributes a user to a retail Bey", () => {
  for (const item of beyItems.filter(item => item.series === "x")) {
    assert.deepEqual(relatedBeyCharacters(item, animeInfo.characters, catalogById), [], item.id);
  }
});

test("an exact X usage ID links only its registered retail Bey without requiring a text name", () => {
  const item = catalogById.get("BEY-X-BX-01-DRAN-SWORD-3-60F");
  const character = { id: "EXACT-X", season: "beyblade-x", beyIds: [item.id] };
  assert.deepEqual(relatedBeyCharacters(item, [character], catalogById), [character]);
  for (const id of ["BEY-X-BX-14-03-DRAN-SWORD-3-80B", "BEY-X-BX-00-DRAN-SWORD-3-60F", "BEY-X-BX-00-DRAN-SWORD-VERSION-2-0-3-60F"]) {
    assert.deepEqual(relatedBeyCharacters(catalogById.get(id), [character], catalogById), [], id);
  }
});

test("Storm Pegasis attributes Kang Ta only to the exact BB-28 starter", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  assert.deepEqual(relatedBeyCharacters(storm, animeInfo.characters, catalogById).map(character => character.name), ["강타"]);
  const variants = beyItems.filter(item => item.id.includes("STORM-PEGASIS") && item.id !== storm.id);
  assert.ok(variants.some(item => item.id === "BEY-METAL-FIGHT-BB-32-STORM-PEGASIS-105RF"));
  assert.ok(variants.some(item => item.id === "BEY-METAL-FIGHT-BB-44-STORM-PEGASIS-100RF"));
  for (const item of variants) {
    assert.deepEqual(relatedBeyCharacters(item, animeInfo.characters, catalogById), [], item.id);
  }
});

test("exact character IDs require a matching series-season and an array of usage IDs", () => {
  const items = [
    [catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF"), ["metal-fight", "metal-fight-2", "metal-fight-4d", "metal-fight-zerog"], ["beyblade-x", "burst", "metal-fight-other", ""]],
    [catalogById.get("BEY-X-BX-01-DRAN-SWORD-3-60F"), ["beyblade-x", "beyblade-x-2", "beyblade-x-3"], ["metal-fight", "burst", "beyblade-x-other", ""]]
  ];
  for (const [item, validSeasons, invalidSeasons] of items) {
    for (const season of validSeasons) {
      const character = { id: `VALID-${season}`, season, beyIds: [item.id] };
      assert.deepEqual(relatedBeyCharacters(item, [character], catalogById), [character], season);
    }
    const invalid = invalidSeasons.map(season => ({ id: `INVALID-${season}`, season, beyIds: [item.id] }));
    invalid.push(
      { id: "NAME-ONLY", season: validSeasons[0], beys: [item.name] },
      { id: "UNKNOWN-ID", season: validSeasons[0], beyIds: ["UNKNOWN"] },
      { id: "STRING-IDS", season: validSeasons[0], beyIds: item.id },
      { season: validSeasons[0], beyIds: [item.id] },
      null
    );
    assert.deepEqual(relatedBeyCharacters(item, invalid, catalogById), []);
  }
});

test("repeated usage IDs and canonical character records emit each character once in input order", () => {
  const item = catalogById.get("BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS");
  const dan = { id: "DAN", season: "metal-fight", beyIds: [item.id, item.id] };
  const lake = { id: "LAKE", season: "metal-fight", beyIds: [item.id] };
  const characters = [dan, lake, dan, { ...dan }];
  const before = JSON.stringify(characters);
  assert.deepEqual(relatedBeyCharacters(item, characters, catalogById), [dan, lake]);
  assert.equal(JSON.stringify(characters), before);
});

test("aggregate canonical IDs retain reverse lookup across a character's season-tagged usages", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const galaxy = beyItems.find(item => item.series === "metal fight" && item.name === "갤럭시 페가시스");
  assert.ok(galaxy);
  const character = {
    id: "CROSS-SEASON", season: "metal-fight",
    usages: [{ season: "metal-fight", beyIds: [storm.id], beys: [storm.name] }, { season: "metal-fight-2", beyIds: [galaxy.id], beys: [galaxy.name] }],
    beyIds: [storm.id, galaxy.id], beys: [storm.name, galaxy.name]
  };
  for (const item of [storm, galaxy]) assert.deepEqual(relatedBeyCharacters(item, [character], catalogById), [character]);
});

test("season-tagged usage groups resolve without top-level season or aggregate IDs", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const galaxy = catalogById.get("BEY-METAL-FIGHT-BB-70-GALAXY-PEGASIS-W105R2F");
  const character = {
    id: "GROUPED-ONLY",
    usages: [{ season: "metal-fight", beyIds: [storm.id] }, { season: "metal-fight-2", beyIds: [galaxy.id, galaxy.id] }]
  };
  for (const item of [storm, galaxy]) assert.deepEqual(relatedBeyCharacters(item, [character], catalogById), [character]);
});

test("usage groups override conflicting aggregate membership and validate each group's series-season", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const galaxy = catalogById.get("BEY-METAL-FIGHT-BB-70-GALAXY-PEGASIS-W105R2F");
  const legacy = { id: "GROUPED", season: "metal-fight", beyIds: [storm.id] };
  for (const usages of [
    [],
    [{ season: "metal-fight-2", beyIds: [galaxy.id] }],
    [{ season: "beyblade-x", beyIds: [storm.id] }],
    [{ season: "metal-fight-other", beyIds: [storm.id] }],
    [{ season: "metal-fight", beys: [storm.name] }],
    [null, {}, { season: "metal-fight", beyIds: storm.id }]
  ]) {
    assert.deepEqual(relatedBeyCharacters(storm, [{ ...legacy, usages }], catalogById), []);
  }
  const character = {
    ...legacy, season: "beyblade-x", beyIds: [galaxy.id],
    usages: [null, { season: "beyblade-x", beyIds: [galaxy.id] }, { season: "metal-fight-2", beyIds: [storm.id] }]
  };
  assert.deepEqual(relatedBeyCharacters(storm, [character], catalogById), [character]);
  assert.deepEqual(relatedBeyCharacters(galaxy, [character], catalogById), []);
});

test("additional exact usage links once without attributing same-family editions", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const galaxy = catalogById.get("BEY-METAL-FIGHT-BB-70-GALAXY-PEGASIS-W105R2F");
  const character = {
    id: "ADDITIONAL", season: "metal-fight", beyIds: [storm.id, galaxy.id],
    usages: [{ season: "metal-fight", beyIds: [storm.id] }],
    additionalUsage: { beyIds: [galaxy.id, galaxy.id], beys: [galaxy.name] }
  };
  const before = JSON.stringify(character);
  assert.deepEqual(relatedBeyCharacters(galaxy, [character, character, { ...character }], catalogById), [character]);
  assert.deepEqual(relatedBeyCharacters(storm, [character], catalogById), [character]);
  for (const id of [
    "BEY-METAL-FIGHT-BB-75-GALAXY-PEGASIS-W105R2F",
    "BEY-METAL-FIGHT-BB-76-GALAXY-PEGASIS-W105R2F",
    "BEY-METAL-FIGHT-BB-92-GALAXY-PEGASIS-W105R2F"
  ]) assert.deepEqual(relatedBeyCharacters(catalogById.get(id), [character], catalogById), [], id);
  assert.equal(JSON.stringify(character), before);
});

test("additional usage derives compatible series from authoritative season groups", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const character = { id: "ADDITIONAL", additionalUsage: { beyIds: [storm.id] } };
  const grouped = { ...character, usages: [{ season: "metal-fight-2", beyIds: [] }] };
  const legacy = { ...character, season: "metal-fight" };
  assert.deepEqual(relatedBeyCharacters(storm, [grouped], catalogById), [grouped]);
  assert.deepEqual(relatedBeyCharacters(storm, [legacy], catalogById), [legacy]);
  for (const usages of [[], [null, {}], [{ season: "beyblade-x" }], [{ season: "metal-fight-other" }], [{ season: "" }]]) {
    assert.deepEqual(relatedBeyCharacters(storm, [{ ...legacy, usages }], catalogById), []);
  }
  const x = catalogById.get("BEY-X-BX-01-DRAN-SWORD-3-60F");
  assert.deepEqual(relatedBeyCharacters(x, [{ ...grouped, additionalUsage: { beyIds: [x.id] } }], catalogById), []);
  assert.deepEqual(relatedBeyCharacters(storm, [{ ...character, season: "beyblade-x" }], catalogById), []);
});

test("additional usage never enables stale aggregate membership or text-only relations", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const galaxy = catalogById.get("BEY-METAL-FIGHT-BB-70-GALAXY-PEGASIS-W105R2F");
  const character = {
    id: "ADDITIONAL", season: "metal-fight", beyIds: [storm.id, galaxy.id],
    usages: [{ season: "metal-fight", beyIds: [] }],
    additionalUsage: { beyIds: [galaxy.id] }
  };
  assert.deepEqual(relatedBeyCharacters(galaxy, [character], catalogById), [character]);
  assert.deepEqual(relatedBeyCharacters(storm, [character], catalogById), []);
  for (const additionalUsage of [
    { beys: [storm.name], beyIds: [], unmappedBeys: [storm.name] },
    { beys: [storm.name] },
    { beyIds: storm.id },
    { beyIds: ["UNKNOWN"] },
    null
  ]) assert.deepEqual(relatedBeyCharacters(storm, [{ ...character, additionalUsage }], catalogById), []);
});

test("new unscoped characters resolve exact additional IDs through their explicit series", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const variant = catalogById.get("BEY-METAL-FIGHT-BB-32-STORM-PEGASIS-105RF");
  const character = {
    id: "UNSCOPED", name: "New Character", series: "metal fight", role: "",
    additionalUsage: { beyIds: [storm.id, storm.id], beys: [storm.name] },
    beyIds: [storm.id], beys: [storm.name]
  };
  const before = JSON.stringify(character);
  assert.deepEqual(relatedBeyCharacters(storm, [character, character, { ...character }], catalogById), [character]);
  assert.deepEqual(relatedBeyCharacters(variant, [character], catalogById), []);
  assert.equal(JSON.stringify(character), before);
});

test("explicit series cannot bypass incompatible legacy seasons or authoritative usage groups", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const character = { id: "UNSCOPED", series: "metal fight", additionalUsage: { beyIds: [storm.id] } };
  for (const legacy of [
    { season: "beyblade-x" }, { season: "metal-fight-other" }, { season: "" }, { season: null }, { season: undefined },
    { usages: [] }, { usages: null }, { usages: undefined },
    { usages: [{ season: "beyblade-x", beyIds: [storm.id] }] },
    { season: "metal-fight", usages: [] }
  ]) assert.deepEqual(relatedBeyCharacters(storm, [{ ...character, ...legacy }], catalogById), []);
});

test("unscoped additional usage requires exact IDs and a matching explicit series", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const character = {
    id: "UNSCOPED", series: "metal fight", beyIds: [storm.id], beys: [storm.name],
    additionalUsage: { beyIds: [storm.id] }
  };
  for (const series of [undefined, "x", "burst", "metal-fight", "", "constructor", "__proto__"]) {
    assert.deepEqual(relatedBeyCharacters(storm, [{ ...character, series }], catalogById), []);
  }
  for (const additionalUsage of [
    { beyIds: [] }, { beyIds: storm.id }, { beyIds: ["UNKNOWN"] },
    { beys: [storm.name], unmappedBeys: [storm.name] }, null
  ]) assert.deepEqual(relatedBeyCharacters(storm, [{ ...character, additionalUsage }], catalogById), []);
});

test("missing, malformed, unregistered and non-Bey inputs cannot establish a usage relation", () => {
  const storm = catalogById.get("BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const part = catalogById.get(storm.parts[0]);
  const user = { id: "USER", season: "metal-fight", beyIds: [storm.id, "UNKNOWN", part.id] };
  for (const item of [null, undefined, {}, { ...storm, id: "" }, { ...storm, id: "UNKNOWN" }, { ...storm, type: "metalwheel" }, { ...storm, series: "x" }, { ...part, type: "bey" }]) {
    assert.deepEqual(relatedBeyCharacters(item, [user], catalogById), []);
  }
  for (const catalog of [undefined, null, {}, new Map(), new Map([[storm.id, { ...storm, type: "metalwheel" }]])]) {
    assert.deepEqual(relatedBeyCharacters(storm, [user], catalog), []);
  }
  for (const series of ["burst", "unknown", "constructor", "__proto__"]) {
    const unsupported = { ...storm, series };
    assert.deepEqual(relatedBeyCharacters(unsupported, [user], new Map([[storm.id, unsupported]])), []);
  }
  for (const characters of [undefined, null, {}]) assert.deepEqual(relatedBeyCharacters(storm, characters, catalogById), []);
  assert.deepEqual(relatedBeyProducts(null, productItems), []);
  assert.deepEqual(relatedBeyProducts({ ...bey, type: "blade" }, productItems), []);
});

test("existing canonical X characters retain their stable IDs and free-text usage records", () => {
  const xCharacters = animeInfo.characters.filter(character => character.season === "beyblade-x");
  assert.equal(xCharacters.length, 19);
  assert.equal(new Set(xCharacters.map(character => character.id)).size, 19);
  for (const character of xCharacters) assert.match(character.id, /^CHARACTER-X-[A-Z0-9]+(?:-[A-Z0-9]+)*$/);
  assert.deepEqual(animeInfo.characters.find(character => character.name === "구이수").beys, ["드랜소드", "드랜대거", "드랜버스터", "드랜브레이브"]);
});

test("every approved Metal season-one character's aggregate usage resolves without per-Bey reverse lists", () => {
  const characters = animeInfo.characters.filter(character => character.season === "metal-fight");
  assert.equal(characters.length, 21);
  for (const character of characters) {
    for (const id of character.beyIds) {
      assert.ok(relatedBeyCharacters(catalogById.get(id), animeInfo.characters, catalogById).some(user => user.id === character.id), `${character.name}: ${id}`);
    }
  }
  const gemios = catalogById.get("BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS");
  assert.deepEqual(relatedBeyCharacters(gemios, animeInfo.characters, catalogById).map(user => user.name), ["단", "레이크"]);
  const phoenix = catalogById.get("BEY-METAL-FIGHT-BB-59-BURN-PHOENIX-135MS");
  assert.deepEqual(relatedBeyCharacters(phoenix, animeInfo.characters, catalogById).map(user => user.name), ["피닉스"]);
  for (const id of ["BEY-METAL-FIGHT-BB-31-MAD-CANCER-CH120FS", "BEY-METAL-FIGHT-BB-55-DARK-CANCER-CH120SF"]) {
    assert.deepEqual(relatedBeyCharacters(catalogById.get(id), animeInfo.characters, catalogById).map(user => user.name), ["크랩킹"]);
  }
});
