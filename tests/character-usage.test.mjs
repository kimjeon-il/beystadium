import assert from "node:assert/strict";
import test from "node:test";
import * as usage from "../src/character-usage.js";

test("character display uses model names while preserving full combinations and exact editions", async () => {
  const { animeInfo } = await import("../data/source/anime.mjs");
  const before = JSON.stringify(animeInfo.characters);
  const kang = animeInfo.characters.find(c => c.name === "강타");
  assert.deepEqual(usage.characterBeyNames(kang), ["스톰 페가시스", "갤럭시 페가시스", "빅뱅 페가시스"]);
  assert.deepEqual(usage.characterBeyNames(usage.characterForSeason(kang, "metal-fight")), ["스톰 페가시스"]);
  assert.deepEqual(usage.characterBeyNames({ beys: ["그랜드 케토스 WD145RS", "그랜드 케토스 T125RS", "팬텀 오리온 B:D", "Ray Cancer M145Q", "프로토타입 네메시스"] }), ["그랜드 케토스", "팬텀 오리온", "레이 캔서", "프로토타입 네메시스"]);
  assert.deepEqual(usage.characterBeyNames({ beys: ["빅토리 발키리.B.V", "드랜소드 3-60F", "드래곤 V2"] }), ["빅토리 발키리", "드랜소드", "드래곤 V2"]);
  assert.deepEqual(usage.characterBeyNames({ beys: ["Rock Orso D125B (red)", "머큐리 아누비우스 85XF 레전드 Ver.", "드랜소드"] }), ["로크 오르소", "머큐리 아누비우스", "드랜소드"]);
  assert.equal(JSON.stringify(animeInfo.characters), before);
});

test("English media usage labels are Korean only at display time, retaining source names, IDs and provenance", async () => {
  const { animeInfo } = await import("../data/source/anime.mjs");
  const { metalFightMediaBeys } = await import("../data/source/metal-fight-media-beys.mjs");
  const before = JSON.stringify({ characters: animeInfo.characters, media: metalFightMediaBeys });
  const labels = new Map([
    ["Virgo", "비르고"], ["Poison Virgo", "포이즌 비르고"], ["Burn Wolf", "번 울프"],
    ["Grand Capricorne", "그랜드 카프리콘"], ["Ray Cancer", "레이 캔서"],
    ["Rock Escolpio", "로크 에스콜피오"], ["Rock Orso", "로크 오르소"], ["Cyber Aquario", "사이버 아쿠아리오"]
  ]);
  for (const item of metalFightMediaBeys) {
    assert.equal(usage.characterBeyDisplayName(`${item.name} ${item.combination}`), `${labels.get(item.name)} ${item.combination}`);
    for (const id of item.characterIds) {
      assert.ok(usage.characterBeyNames(animeInfo.characters.find(c => c.id === id)).includes(labels.get(item.name)));
    }
  }
  const englishNames = animeInfo.characters.flatMap(c => c.beys).filter(name => /^[A-Za-z]/.test(name));
  assert.equal(englishNames.length, 9);
  assert.ok(usage.characterBeyNames({ beys: englishNames }).every(name => /^[가-힣]/.test(name)));
  assert.equal(usage.characterBeyDisplayName("Rock Orso D125B (red)"), "로크 오르소 D125B (red)");
  assert.equal(usage.characterBeyDisplayName("Unknown Bey 145WD"), "Unknown Bey 145WD");
  assert.equal(JSON.stringify({ characters: animeInfo.characters, media: metalFightMediaBeys }), before);
});

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

test("additional usage appends one seasonless group without changing recorded season groups", () => {
  const additionalUsage = { beys: ["Big Bang"], beyIds: ["B"] };
  const supplemented = { ...character, beys: [...character.beys, "Big Bang"], beyIds: [...character.beyIds, "B"], additionalUsage };
  const before = JSON.stringify(supplemented);
  assert.deepEqual(usage.characterUsageGroups(supplemented), [...character.usages, { ...additionalUsage, season: "" }]);
  assert.equal(usage.characterForSeason(supplemented, "all"), supplemented);
  assert.deepEqual(usage.characterForSeason(supplemented, "metal-fight").beyIds, ["S"]);
  assert.deepEqual(usage.characterForSeason(supplemented, "metal-fight-2").beys, ["Galaxy"]);
  assert.equal(usage.characterForSeason(supplemented, "metal-fight-4d"), null);
  assert.equal(usage.characterForSeason(supplemented, "metal-fight-zerog"), null);
  assert.equal(JSON.stringify(supplemented), before);
});

test("text-only additional usage remains visible without a season or invented exact IDs", () => {
  const additionalUsage = { beys: ["Spiral Fox"], beyIds: [], unmappedBeys: ["Spiral Fox"] };
  const supplemented = { ...character, additionalUsage };
  assert.deepEqual(usage.characterUsageGroups(supplemented), [...character.usages, { ...additionalUsage, season: "" }]);
  assert.deepEqual(usage.characterForSeason(supplemented, "metal-fight-2").beyIds, ["G"]);
  assert.equal(usage.characterForSeason(supplemented, "metal-fight-4d"), null);
});

test("new unscoped characters display only their additional usage without duplicating aggregate fields", () => {
  const additionalUsage = { beys: ["Spiral Lyra", "Unmapped Bey"], beyIds: ["L"], unmappedBeys: ["Unmapped Bey"] };
  const unscoped = {
    id: "NEW", name: "New Character", series: "metal fight", role: "",
    additionalUsage, beys: [...additionalUsage.beys], beyIds: [...additionalUsage.beyIds]
  };
  const before = JSON.stringify(unscoped);
  assert.deepEqual(usage.characterUsageGroups(unscoped), [{ ...additionalUsage, season: "" }]);
  assert.equal(usage.characterForSeason(unscoped, "all"), unscoped);
  for (const season of ["metal-fight", "metal-fight-2", "metal-fight-4d", "metal-fight-zerog", "beyblade-x"]) {
    assert.equal(usage.characterForSeason(unscoped, season), null, season);
  }
  assert.equal(JSON.stringify(unscoped), before);
});

test("legacy single-season records keep their original group when additional usage is present", () => {
  const legacy = {
    season: "metal-fight", beys: ["Storm"], beyIds: ["S"],
    additionalUsage: { beys: ["Galaxy"], beyIds: ["G"] }
  };
  assert.deepEqual(usage.characterUsageGroups(legacy), [
    { season: "metal-fight", beys: ["Storm"], beyIds: ["S"] },
    { season: "", beys: ["Galaxy"], beyIds: ["G"] }
  ]);
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
  assert.equal(all.length, 80);
  assert.equal(second.length, 38);
  assert.deepEqual(all.filter(c => c.season === "metal-fight-2").map(c => c.name), [
    "장군", "왕대상", "리치윤", "메이메이", "챠우싱", "알렉세이", "도라", "노와구마",
    "시저", "웨일즈", "소피", "게오르그", "나일", "다무레", "아르고", "아이언",
    "셀린", "엔조", "파우스트", "제오", "데미안", "잭", "지구라트 박사", "Marcus"
  ]);
  assert.equal(new Set(all.map(c => c.id)).size, all.length);
  const byName = new Map(second.map(c => [c.name, c]));
  assert.deepEqual(byName.get("메이메이").beyIds, ["BEY-METAL-FIGHT-BB-72-AQUARIO-105F"]);
  assert.deepEqual(byName.get("웨일즈").beyIds, ["BEY-METAL-FIGHT-BB-82-GRAND-KETOS-WD145RS"]);
  assert.deepEqual(byName.get("소피").beyIds, ["BEY-METAL-FIGHT-BB-82-GRAND-KETOS-T125RS"]);
  assert.equal(byName.get("파우스트").id, "CHARACTER-METAL-FIGHT-TOBY");
  assert.equal(byName.get("파우스트").aliases, undefined);
  assert.equal(second.some(c => c.name.includes("토비") || c.aliases?.some(alias => /토비|Toby/i.test(alias))), false);
  assert.equal(byName.get("지구라트 박사").id, "CHARACTER-METAL-FIGHT-DR-ZIGGURAT");
  assert.equal(byName.get("시저").id, "CHARACTER-METAL-FIGHT-JULIUS-CAESAR");
  assert.equal(byName.get("리치윤").id, "CHARACTER-METAL-FIGHT-LI-CHIYUN");
  assert.deepEqual(byName.get("시저").aliases, ["줄리어스 시저"]);
  assert.equal(second.filter(c => c.name === "토비" || c.name === "파우스트").length, 1);
  const toby = all.find(c => c.name === "토비");
  assert.equal(toby?.id, "CHARACTER-METAL-FIGHT-TOBY-LYRA");
  assert.equal(toby.series, "metal fight");
  assert.equal(Object.hasOwn(toby, "season"), false);
  assert.equal(Object.hasOwn(toby, "usages"), false);
  assert.notEqual(toby.id, byName.get("파우스트").id);
  assert.equal(usage.characterForSeason(toby, "metal-fight-2"), null);
  for (const name of ["챠우싱", "알렉세이", "도라", "노와구마", "게오르그", "셀린", "엔조", "Marcus"]) {
    assert.deepEqual(byName.get(name).beyIds, [], name);
    assert.ok(byName.get(name).beys.length, name);
  }
  assert.deepEqual(byName.get("드래곤").beyIds, ["BEY-METAL-FIGHT-BB-88-METEO-L-DRAGO-LW105LF"]);
  assert.equal(all.some(c => c.usages?.some(g => /4d|zerog/.test(g.season))), false);
  assert.equal(second.some(c => /SPIRAL-(FOX|LYRE)|BLITZ-UNICORNO/.test(c.beyIds.join(" "))), false);
});

test("corrected names and approved alias remain searchable with Toby distinct from Faust", async () => {
  const { animeInfo } = await import("../data/source/anime.mjs");
  const { createSearchField, createSearchRecord, matchSearchRecord, prepareCatalogSearchQuery } = await import("../src/search-core.js");
  const records = animeInfo.characters.map(character => createSearchRecord("anime-character", character, [
    createSearchField("primaryName", character.name),
    ...(character.aliases || []).map(alias => createSearchField("alias", alias)),
    createSearchField("composition", character.beys.join(" "))
  ]));
  const found = text => records.filter(record => matchSearchRecord(record, prepareCatalogSearchQuery(text)).matched).map(record => record.item.name);
  assert.deepEqual(found("파우스트"), ["파우스트"]);
  assert.deepEqual(found("토비"), ["토비"]);
  assert.deepEqual(found("Toby"), []);
  assert.deepEqual(found("지구라트 박사"), ["지구라트 박사"]);
  assert.deepEqual(found("줄리어스 시저"), ["시저"]);
  assert.deepEqual(found("리치윤"), ["리치윤"]);
});
