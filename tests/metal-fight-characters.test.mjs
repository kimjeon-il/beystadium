import assert from "node:assert/strict";
import test from "node:test";

import { animeInfo } from "../data/source/anime.mjs";
import { beyItems } from "../data/source/catalog.mjs";

import { characterForSeason } from "../src/character-usage.js";

const characters = animeInfo.characters.map(character => characterForSeason(character, "metal-fight")).filter(Boolean);
const byName = new Map(characters.map(character => [character.name, character]));
const beyById = new Map(beyItems.map(bey => [bey.id, bey]));
const expectedRoster = [
  ["KANG-TA", "강타", ["BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF"]],
  ["TAE-SAJA", "태사자", ["BEY-METAL-FIGHT-BB-30-ROCK-LEONE-145WB"]],
  ["NOA", "노아", ["BEY-METAL-FIGHT-BB-35-FLAME-SAGITTARIO-C145S"]],
  ["BAEK-DUSAN", "백두산", ["BEY-METAL-FIGHT-BB-40-DARK-BULL-H145SD"]],
  ["BANDI", "반디", ["BEY-METAL-FIGHT-BB-37-WIND-AQUARIO-100HF-S"]],
  ["DONGSAN-DORYEONG", "동산도령", ["BEY-METAL-FIGHT-BB-45-CLAY-ARIES-ED145B"]],
  ["GYEONU", "견우", ["BEY-METAL-FIGHT-BB-47-EARTH-AQUILA-145WD"]],
  ["JINI", "지니", ["BEY-METAL-FIGHT-BB-48-FLAME-LIBRA-T125ES"]],
  ["DRAGON", "드래곤", ["BEY-METAL-FIGHT-BB-43-LIGHTNING-L-DRAGO-100HF"]],
  ["DARK-MOON", "다크문", ["BEY-METAL-FIGHT-BB-29-DARK-WOLF-DF145FS"]],
  ["REIJI", "레이지", ["BEY-METAL-FIGHT-BB-69-POISON-SERPENT-SW145SD"]],
  ["CRAB-KING", "크랩킹", ["BEY-METAL-FIGHT-BB-31-MAD-CANCER-CH120FS", "BEY-METAL-FIGHT-BB-55-DARK-CANCER-CH120SF"]],
  ["PHOENIX", "피닉스", ["BEY-METAL-FIGHT-BB-59-BURN-PHOENIX-135MS"]],
  ["HANEUL", "하늘", ["BEY-METAL-FIGHT-CYBER-PEGASIS-100HF"]],
  ["DEATH-CAPRI", "데스카프리", ["BEY-METAL-FIGHT-BB-50-STORM-CAPRICORNE-M145Q"]],
  ["TARO", "타로", ["BEY-METAL-FIGHT-BB-57-THERMAL-PISCES-T125ES"]],
  ["LUMIE", "루미에", ["BEY-METAL-FIGHT-BB-60-EARTH-VIRGO-GB145BS"]],
  ["DAN", "단", ["BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS"]],
  ["LAKE", "레이크", ["BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS"]],
  ["NAM-DAEUNG", "남대웅", ["BEY-METAL-FIGHT-BB-51-ROCK-ORSO-D125B"]],
  ["DOKGO-CHUNG", "독고충", ["BEY-METAL-FIGHT-BB-65-ROCK-ESCOLPIO-T125JB"]]
];

test("Metal Fight season one has exactly the 21 authorized canonical characters and stable IDs", () => {
  assert.equal(characters.length, 21);
  assert.deepEqual(characters.map(character => [character.id, character.name]), expectedRoster.map(([suffix, name]) => [`CHARACTER-METAL-FIGHT-${suffix}`, name]));
  assert.equal(new Set(animeInfo.characters.map(character => character.id)).size, animeInfo.characters.length);
});

test("every Metal Fight usage references its exact existing representative catalog Bey", () => {
  assert.equal(characters.length, expectedRoster.length);
  for (const [, name, beyIds] of expectedRoster) {
    assert.deepEqual(byName.get(name)?.beyIds, beyIds, name);
    for (const id of beyIds) {
      const bey = beyById.get(id);
      assert.ok(bey, `${name}: ${id}`);
      assert.equal(bey.type, "bey", id);
      assert.equal(bey.series, "metal fight", id);
    }
  }
});

test("Metal Fight display labels follow catalog names and combinations without renaming them", () => {
  assert.equal(characters.length, 21);
  for (const character of characters) {
    assert.deepEqual(character.beys, character.beyIds.map(id => {
      const bey = beyById.get(id);
      return [bey.name, bey.sub].filter(Boolean).join(" ");
    }), character.name);
  }
  assert.deepEqual(byName.get("태사자")?.beys, ["로크 레온 145WB"]);
  assert.deepEqual(byName.get("단")?.beys, ["키라 제미오스 DF145FS"]);
  assert.deepEqual(byName.get("독고충")?.beys, ["로크 에스콜피오 T125JB"]);
});

test("Phoenix and Kang Yuseong share one canonical identity and only the approved alias is present", () => {
  const phoenix = byName.get("피닉스");
  assert.ok(phoenix);
  assert.deepEqual(phoenix.aliases, ["강유성"]);
  assert.equal(characters.filter(character => character.name === "피닉스" || character.name === "강유성" || character.aliases?.includes("강유성")).length, 1);
  assert.deepEqual(characters.flatMap(character => character.aliases || []), ["강유성"]);
});

test("Dan and Lake remain distinct canonical characters sharing Killer Gemios", () => {
  const dan = byName.get("단");
  const lake = byName.get("레이크");
  assert.ok(dan);
  assert.ok(lake);
  assert.notEqual(dan.id, lake.id);
  assert.deepEqual(dan.beyIds, ["BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS"]);
  assert.deepEqual(lake.beyIds, dan.beyIds);
});

test("Crab King retains both Mad Cancer and Dark Cancer usage", () => {
  assert.deepEqual(byName.get("크랩킹")?.beyIds, [
    "BEY-METAL-FIGHT-BB-31-MAD-CANCER-CH120FS",
    "BEY-METAL-FIGHT-BB-55-DARK-CANCER-CH120SF"
  ]);
  assert.deepEqual(byName.get("크랩킹")?.beys, ["매드 캔서 CH120FS", "다크 캔서 CH120SF"]);
});

test("Metal Fight characters contain no invented biographies, roles or assets", () => {
  assert.equal(characters.length, 21);
  for (const character of characters) {
    assert.equal(character.role, "", character.name);
    assert.deepEqual(Object.keys(character).sort(), (character.name === "피닉스"
      ? ["id", "name", "season", "role", "beyIds", "beys", "usages", "aliases"]
      : ["id", "name", "season", "role", "beyIds", "beys", "usages"]).sort(), character.name);
  }
});

test("the 19 existing Beyblade X character records are preserved unchanged", () => {
  assert.deepEqual(animeInfo.characters.filter(character => character.season === "beyblade-x"), [
    { id: "CHARACTER-X-GU-ISU", name: "구이수", season: "beyblade-x", role: "팀 페르소나", beys: ["드랜소드", "드랜대거", "드랜버스터", "드랜브레이브"] },
    { id: "CHARACTER-X-KANG-BARAM", name: "강바람", season: "beyblade-x", role: "팀 페르소나", beys: ["스트라이크호크", "헬즈사이드", "헬즈체인", "헬즈해머", "헬즈리퍼"] },
    { id: "CHARACTER-X-NA-DAUN", name: "나다운", season: "beyblade-x", role: "팀 페르소나", beys: ["위저드애로우", "위저드로드", "위저드아크", "위저드마이트", "나이트실드", "나이트랜스", "나이트메일", "나이트포트리스"] },
    { id: "CHARACTER-X-CHEON-EUNSEONG", name: "천은성", season: "beyblade-x", role: "팀 페르소나", beys: ["워리어세이버", "워리어칼리버"] },
    { id: "CHARACTER-X-GU-NAIN", name: "구나인", season: "beyblade-x", role: "팀 페르소나", beys: ["왈큐레볼트", "라그나레이지"] },
    { id: "CHARACTER-X-TAE-SAJANG", name: "태 사장", season: "beyblade-x", role: "", beys: ["튜나엣지"] },
    { id: "CHARACTER-X-IM-MEI", name: "임메이", season: "beyblade-x", role: "", beys: ["샤크엣지", "샤크스케일", "웨일웨이브"] },
    { id: "CHARACTER-X-RYU-CHROME", name: "류크롬", season: "beyblade-x", role: "팀 펜드래곤", beys: ["코발트드레이크", "코발트드래군", "임팩트드레이크", "메테오드래군"] },
    { id: "CHARACTER-X-NA-SIU", name: "나시우", season: "beyblade-x", role: "팀 펜드래곤", beys: ["펄타이거", "울프헌트"] },
    { id: "CHARACTER-X-SHIN-HANEUL", name: "신하늘", season: "beyblade-x", role: "팀 펜드래곤", beys: ["블랙터틀", "쉘터드레이크"] },
    { id: "CHARACTER-X-KIM-MANHO", name: "김만호", season: "beyblade-x", role: "팀 쥬가닉", beys: ["레온클로우", "레온크레스트"] },
    { id: "CHARACTER-X-OH-SAHYEON", name: "오사현", season: "beyblade-x", role: "팀 쥬가닉", beys: ["바이퍼테일"] },
    { id: "CHARACTER-X-JO-NARI", name: "조나리", season: "beyblade-x", role: "팀 쥬가닉", beys: ["라이노혼"] },
    { id: "CHARACTER-X-HONG-BULSAE", name: "홍불새", season: "beyblade-x", role: "팀 이그드라실", beys: ["피닉스페더", "피닉스소어", "피닉스러더", "피닉스플레어"] },
    { id: "CHARACTER-X-NAM-YUNI", name: "남유니", season: "beyblade-x", role: "팀 이그드라실", beys: ["유니콘스팅"] },
    { id: "CHARACTER-X-JO-NAMO", name: "조나모", season: "beyblade-x", role: "팀 이그드라실", beys: ["스핑크스카울"] },
    { id: "CHARACTER-X-LEE-SEOKSAN", name: "이석산", season: "beyblade-x", role: "팀 팔랑크스", beys: ["스톤몽블랑"] },
    { id: "CHARACTER-X-YU-WONRI", name: "유원리", season: "beyblade-x", role: "팀 팔랑크스", beys: ["아이언포레스트"] },
    { id: "CHARACTER-X-JIN-SEUNGJIN", name: "진승진", season: "beyblade-x", role: "팀 팔랑크스", beys: ["다이아몬드너츠"] }
  ]);
});
