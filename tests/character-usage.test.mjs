import assert from "node:assert/strict";
import test from "node:test";
import * as usage from "../src/character-usage.js";

const character = { id: "C", season: "metal-fight", beys: ["Storm", "Galaxy"], beyIds: ["S", "G"], usages: [
  { season: "metal-fight", beys: ["Storm"], beyIds: ["S"] },
  { season: "metal-fight-2", beys: ["Galaxy"], beyIds: ["G"] }
] };
test("season projection shows only that season's usage without duplicating identity or mutating source", () => {
  assert.equal(typeof usage.characterForSeason, "function");
  const first = usage.characterForSeason(character, "metal-fight");
  const second = usage.characterForSeason(character, "metal-fight-2");
  assert.deepEqual(first.beys, ["Storm"]);
  assert.deepEqual(second.beyIds, ["G"]);
  assert.equal(first.id, second.id);
  assert.equal(usage.characterForSeason(character, "all"), character);
  assert.equal(usage.characterForSeason(character, "metal-fight-4d"), null);
  assert.deepEqual(character.beys, ["Storm", "Galaxy"]);
});
test("legacy single-season characters retain their names without inventing exact toy IDs", () => {
  assert.equal(typeof usage.characterUsageGroups, "function");
  const x = { season: "beyblade-x", beys: ["드랜소드"] };
  assert.deepEqual(usage.characterUsageGroups(x), [{ season: "beyblade-x", beys: ["드랜소드"], beyIds: [] }]);
  assert.equal(usage.characterForSeason(x, "beyblade-x"), x);
  assert.equal(usage.characterForSeason(x, "metal-fight-2"), null);
});

test("Metal season two preserves the existing identity and season-one usages while adding upgrades", async () => {
  const { animeInfo } = await import("../data/source/anime.mjs");
  const kang = animeInfo.characters.find(c => c.name === "강타");
  assert.ok(Array.isArray(kang.usages));
  assert.equal(animeInfo.characters.filter(c => c.name === "강타").length, 1);
  assert.deepEqual(usage.characterForSeason(kang, "metal-fight").beyIds, ["BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF"]);
  assert.deepEqual(usage.characterForSeason(kang, "metal-fight-2").beyIds, ["BEY-METAL-FIGHT-BB-70-GALAXY-PEGASIS-W105R2F"]);
});

test("season-two roster preserves exact editions and leaves unsupported combinations unlinked", async () => {
  const { animeInfo } = await import("../data/source/anime.mjs");
  const all = animeInfo.characters;
  const second = all.map(c => usage.characterForSeason(c, "metal-fight-2")).filter(Boolean);
  assert.equal(all.length, 64);
  assert.equal(second.length, 38);
  assert.deepEqual(all.filter(c => c.season === "metal-fight-2").map(c => c.name), [
    "장군", "왕대상", "리 치윤", "메이메이", "챠우싱", "알렉세이", "도라", "노와구마",
    "줄리어스 시저", "웨일즈", "소피", "게오르그", "나일", "다무레", "아르고", "아이언",
    "셀린", "엔조", "토비", "제오", "데미안", "잭", "닥터 지구라트", "Marcus"
  ]);
  assert.equal(new Set(all.map(c => c.id)).size, all.length);
  const byName = new Map(second.map(c => [c.name, c]));
  assert.deepEqual(byName.get("메이메이").beyIds, ["BEY-METAL-FIGHT-BB-72-AQUARIO-105F"]);
  assert.deepEqual(byName.get("웨일즈").beyIds, ["BEY-METAL-FIGHT-BB-82-GRAND-KETOS-WD145RS"]);
  assert.deepEqual(byName.get("소피").beyIds, ["BEY-METAL-FIGHT-BB-82-GRAND-KETOS-T125RS"]);
  assert.deepEqual(byName.get("토비").aliases, ["파우스트"]);
  assert.equal(all.filter(c => c.name === "토비" || c.name === "파우스트").length, 1);
  for (const name of ["챠우싱", "알렉세이", "도라", "노와구마", "게오르그", "셀린", "엔조", "Marcus"]) {
    assert.deepEqual(byName.get(name).beyIds, [], name);
    assert.ok(byName.get(name).beys.length, name);
  }
  assert.deepEqual(byName.get("드래곤").beyIds, ["BEY-METAL-FIGHT-BB-88-METEO-L-DRAGO-LW105LF"]);
  assert.equal(all.some(c => c.usages?.some(g => /4d|zerog/.test(g.season))), false);
  assert.equal(second.some(c => /SPIRAL-(FOX|LYRE)|BLITZ-UNICORNO/.test(c.beyIds.join(" "))), false);
});
