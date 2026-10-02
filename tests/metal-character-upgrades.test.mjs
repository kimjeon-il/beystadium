import assert from "node:assert/strict";
import test from "node:test";
import { metalFightCharacters } from "../data/source/metal-fight-characters.mjs";
import { beyItems } from "../data/source/catalog.mjs";

const expected = [
  ["KANG-TA", "BEY-METAL-FIGHT-BB-105-BIG-BANG-PEGASIS-FD"],
  ["TAE-SAJA", "BEY-METAL-FIGHT-BB-106-FANG-LEONE-130W2D"],
  ["NOA", "BEY-METAL-FIGHT-BB-126-FLASH-SAGITTARIO-230WD"],
  ["DRAGON", "BEY-METAL-FIGHT-BB-108-L-DRAGO-DESTROY-FS"],
  ["JANGGUN", "BEY-METAL-FIGHT-BB-117-BLITZ-UNICORNO-100RSF"],
  ["ZEO", "BEY-METAL-FIGHT-BB-116-SCREW-FOX-TR145W2D"]
];
test("only the six requested existing characters gain unscoped new usage", () => {
  assert.equal(metalFightCharacters.filter(character => character.usages).length, 45);
  assert.deepEqual(metalFightCharacters.filter(character => character.usages && character.additionalUsage).map(character => character.id).sort(), [
    ...expected.map(([suffix]) => `CHARACTER-METAL-FIGHT-${suffix}`)
  ].sort());
  for (const character of metalFightCharacters.filter(character => character.usages)) {
    assert.equal(character.usages.some(group => !["metal-fight", "metal-fight-2"].includes(group.season)), false);
    if (character.additionalUsage) assert.equal("season" in character.additionalUsage, false);
    assert.equal(new Set(character.beyIds).size, character.beyIds.length);
    assert.equal(new Set(character.beys).size, character.beys.length);
  }
});
test("verified upgrades use exact original IDs and canonical catalog labels", () => {
  for (const [suffix, id] of expected) {
    const character = metalFightCharacters.find(character => character.id === `CHARACTER-METAL-FIGHT-${suffix}`);
    const bey = beyItems.find(bey => bey.id === id);
    assert.ok(bey, id);
    assert.deepEqual(character.additionalUsage?.beyIds, [id]);
    assert.deepEqual(character.additionalUsage?.beys, [[bey.name, bey.sub].filter(Boolean).join(" ")]);
    assert.ok(character.beyIds.includes(id));
    assert.ok(character.beys.includes(character.additionalUsage.beys[0]));
  }
});
test("the explicit Screw Fox exception adds only BB-116 while preserving its earlier usage", () => {
  const zeo = metalFightCharacters.find(character => character.id === "CHARACTER-METAL-FIGHT-ZEO");
  assert.deepEqual(zeo.additionalUsage?.beyIds, ["BEY-METAL-FIGHT-BB-116-SCREW-FOX-TR145W2D"]);
  assert.deepEqual(zeo.additionalUsage?.beys, ["스크류 폭스 TR145W²D"]);
  assert.deepEqual(zeo.usages[0].beyIds, ["BEY-METAL-FIGHT-BB-95-FLAME-BYXIS-230WD"]);
});

test("all six new exact editions resolve once and unrelated variants remain unlinked", async () => {
  const { partItems } = await import("../data/source/catalog.mjs");
  const { relatedBeyCharacters } = await import("../src/bey-relations.js");
  const catalog = new Map([...beyItems, ...partItems].map(item => [item.id, item]));
  for (const [suffix, id] of expected) {
    assert.deepEqual(relatedBeyCharacters(catalog.get(id), metalFightCharacters, catalog).map(character => character.id), [`CHARACTER-METAL-FIGHT-${suffix}`]);
  }
  for (const id of [
    "BEY-METAL-FIGHT-BB-107-BIG-BANG-PEGASIS-FD",
    "BEY-METAL-FIGHT-FANG-LEONE-W105R2F",
    "BEY-METAL-FIGHT-L-DRAGO-DESTROY-LW105LRF",
    "BEY-METAL-FIGHT-BBC-01-SUPER-CONTROL-BIG-BANG-PEGASIS",
    "BEY-METAL-FIGHT-BBC-02-SUPER-CONTROL-L-DRAGO-DESTROY"
  ]) {
    assert.ok(catalog.has(id), id);
    assert.deepEqual(relatedBeyCharacters(catalog.get(id), metalFightCharacters, catalog), [], id);
  }
});
