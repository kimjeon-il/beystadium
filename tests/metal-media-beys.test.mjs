import assert from "node:assert/strict";
import test from "node:test";
import { metalFightMediaBeys } from "../data/source/metal-fight-media-beys.mjs";
import { animeInfo } from "../data/source/anime.mjs";
import { beyItems } from "../data/source/catalog.mjs";

test("scoped Metal season-two media appearances retain provenance without becoming toy records", () => {
  assert.equal(metalFightMediaBeys.length, 6);
  assert.equal(new Set(metalFightMediaBeys.map(item => item.id)).size, 6);
  const characters = new Map(animeInfo.characters.map(character => [character.id, character]));
  for (const item of metalFightMediaBeys) {
    assert.equal(item.id, `MEDIA-BEY-${item.name.toUpperCase().replaceAll(" ", "-")}-${item.combination}`);
    assert.equal(item.season, "metal-fight-2");
    assert.equal(item.medium, "anime");
    assert.ok(item.name && item.combination);
    assert.ok(item.sources.length);
    assert.ok(item.sources.every(url => /^https:\/\//.test(url)));
    assert.ok(item.characterIds.length);
    for (const id of item.characterIds) {
      const character = characters.get(id);
      assert.ok(character, id);
      assert.ok(character.usages.some(group => group.season === item.season && group.unmappedBeys?.includes(`${item.name} ${item.combination}`)), item.id);
    }
    assert.ok(["released-unmapped", "unreleased"].includes(item.retailStatus));
    assert.equal(beyItems.some(bey => bey.id === item.id), false);
    for (const field of ["parts", "stats", "image", "productId", "beyId"]) assert.equal(field in item, false);
  }
});

test("known Hasbro releases are not mistaken for media-only Beys and unresolved retail variants stay excluded", () => {
  const byName = new Map(metalFightMediaBeys.map(item => [item.name, item]));
  for (const name of ["Poison Virgo", "Burn Wolf", "Grand Capricorne"]) assert.equal(byName.get(name)?.retailStatus, "released-unmapped");
  assert.equal(metalFightMediaBeys.some(item => /MARCUS|DORA|NOWAGUMA/.test(item.characterIds.join(" "))), false);
});
