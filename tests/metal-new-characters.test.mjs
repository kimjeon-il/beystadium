import assert from "node:assert/strict";
import test from "node:test";
import { animeInfo } from "../data/source/anime.mjs";
import { beyItems, partItems } from "../data/source/catalog.mjs";
import { relatedBeyCharacters } from "../src/bey-relations.js";
import { characterForSeason, characterUsageGroups } from "../src/character-usage.js";

const newCharacters = () => animeInfo.characters.filter(character => character.series === "metal fight" && !character.season);
const expectedNames = ["혜성", "아그마", "킹", "듀나미스", "크리스", "티티", "라고", "플루토", "요하네스", "바오", "하셸", "케이저", "큐크너스", "토비", "직소", "류토"];
const catalog = new Map([...beyItems, ...partItems].map(item => [item.id, item]));
test("exactly the 16 requested new identities are unscoped and do not create seasonal appearances", () => {
  const characters = newCharacters();
  assert.deepEqual(characters.map(character => character.name), expectedNames);
  assert.equal(animeInfo.characters.length, 80);
  assert.equal(new Set(animeInfo.characters.map(character => character.id)).size, 80);
  for (const character of characters) {
    assert.equal("season" in character, false);
    assert.equal("usages" in character, false);
    assert.equal("season" in character.additionalUsage, false);
    assert.equal(characterUsageGroups(character).length, 1);
    assert.equal(characterForSeason(character, "all"), character);
    assert.equal(characterForSeason(character, "metal-fight-4d"), null);
    assert.deepEqual(character.beyIds, character.additionalUsage.beyIds);
    assert.deepEqual(character.beys, character.additionalUsage.beys);
    for (const field of ["desc", "image", "portrait", "stats"]) assert.equal(field in character, false);
  }
});
test("new exact editions derive user links and catalog labels without family expansion", () => {
  assert.equal(newCharacters().length, 16);
  for (const character of newCharacters()) {
    for (const id of character.beyIds) {
      const bey = catalog.get(id);
      assert.ok(bey, id);
      assert.equal(bey.series, "metal fight");
      assert.ok(character.beys.includes([bey.name, bey.sub].filter(Boolean).join(" ")));
      assert.deepEqual(relatedBeyCharacters(bey, animeInfo.characters, catalog).map(user => user.id), [character.id], id);
    }
  }
  assert.deepEqual(relatedBeyCharacters(catalog.get("BEY-METAL-FIGHT-MERCURY-ANUBIUS-85XF-BRAVE"), animeInfo.characters, catalog), []);
  assert.deepEqual(relatedBeyCharacters(catalog.get("BEY-METAL-FIGHT-BB-116-FORBIDDEN-EONIS-130D"), animeInfo.characters, catalog), []);
});
test("Toby and Faust remain separate names and usage records without a Horogium relation for Toby", () => {
  const toby = animeInfo.characters.find(character => character.name === "토비");
  const faust = animeInfo.characters.find(character => character.name === "파우스트");
  assert.ok(toby);
  assert.ok(faust);
  assert.notEqual(toby.id, faust.id);
  assert.equal(toby.aliases, undefined);
  assert.equal(faust.aliases, undefined);
  assert.deepEqual(toby.beyIds, ["BEY-METAL-FIGHT-BB-116-SCREW-LYRA-ED145MF"]);
  assert.deepEqual(faust.beyIds, ["BEY-METAL-FIGHT-BB-104-BASALT-HOROGIUM-145WD"]);
});

test("Skeleton Orion never redirects to Chris's original BB-118 edition", async () => {
  const { productItems } = await import("../data/source/products.mjs");
  const { relatedBeyProducts } = await import("../src/bey-relations.js");
  const skeletonId = "PRODUCT-METAL-FIGHT-PHANTOM-ORION-BD-SKELETON";
  const skeleton = productItems.find(product => product.id === skeletonId);
  const entry = skeleton.releases.jp.composition.find(entry => entry.name.includes("스켈레톤"));
  assert.ok(entry);
  assert.equal(entry.quantity, "1개");
  assert.equal(entry.target, undefined);
  assert.equal(relatedBeyProducts(catalog.get("BEY-METAL-FIGHT-BB-118-PHANTOM-ORION-BD"), productItems, "jp").some(row => row.product.id === skeletonId), false);
});

test("Kaiser's verified original BB-123 edition remains distinct from unverified collector color claims", () => {
  const keyser = animeInfo.characters.find(character => character.name === "케이저");
  assert.deepEqual(keyser.beyIds, ["BEY-METAL-FIGHT-BB-123-BAKUSHIN-BEELZEB-T125XF"]);
});

test("approved Jigsaw and Ryuto originals link without admitting the alternate Ionis combination", () => {
  const jigsaw = animeInfo.characters.find(character => character.name === "직소");
  const ryuto = animeInfo.characters.find(character => character.name === "류토");
  assert.deepEqual(jigsaw.beyIds, ["BEY-METAL-FIGHT-BB-116-FORBIDDEN-EONIS-ED145FB"]);
  assert.deepEqual(ryuto.beyIds, ["BEY-METAL-FIGHT-OMEGA-DRAGONIS-85XF"]);
  assert.equal(jigsaw.additionalUsage.unmappedBeys, undefined);
  assert.equal(ryuto.additionalUsage.unmappedBeys, undefined);
  assert.deepEqual(relatedBeyCharacters(catalog.get("BEY-METAL-FIGHT-BB-116-FORBIDDEN-EONIS-130D"), animeInfo.characters, catalog), []);
});
