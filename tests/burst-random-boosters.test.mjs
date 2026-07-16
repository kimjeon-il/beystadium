import assert from "node:assert/strict";
import test from "node:test";

import {
  beyItems,
  burstRandomBoosterLineups,
  partItems
} from "../data/source/catalog.mjs";
import { burstRandomBoosterRows } from "../data/source/burst-random-boosters.mjs";
import { productItems } from "../data/source/products.mjs";
import { buildRuntimeData } from "../scripts/build-data-index.mjs";

const expectedCounts = {
  "B-15": 8, "B-24": 8, "B-49": 8, "B-61": 8, "B-67": 8,
  "B-80": 8, "B-87": 8, "B-95": 8, "B-101": 8,
  "B-111": 8, "B-118": 8, "B-125": 8, "B-130": 8,
  "B-132": 8, "B-140": 8, "B-146": 8, "B-151": 8,
  "B-156": 8, "B-158": 8, "B-164": 8, "B-170": 8,
  "B-173": 8, "B-176": 8, "B-178": 8, "B-181": 6, "B-186": 6,
  "B-194": 7, "B-196": 5, "B-198": 6, "B-202": 5
};
const randomBeys = beyItems.filter(item => Object.hasOwn(expectedCounts, item.productNo)
  && /^BEY-BURST-B-\d+-\d{2}-/.test(item.id));
const beysById = new Map(randomBeys.map(item => [item.id, item]));
const partIds = new Set(partItems.map(item => item.id));
const productsByNo = new Map(productItems.flatMap(item => {
  const no = item.id.match(/^PRODUCT-BURST-(B-\d+)$/)?.[1];
  return no ? [[no, item]] : [];
}));
const bakutenRemakeLayers = [
  ["PART-BURST-LAYER-DRAGOON-STORM", "드래곤 스톰", "드라군 스톰", "Dragoon Storm"],
  ["PART-BURST-LAYER-DRANZER-SPIRAL", "드랜져 스파이럴", "드랜저 스파이럴", "Dranzer Spiral"],
  ["PART-BURST-LAYER-DRIGER-SLASH", "드래이거 슬래시", "드라이거 슬래시", "Driger Slash"],
  ["PART-BURST-LAYER-DRACIEL-SHIELD", "드래셀 실드", "드라시엘 실드", "Draciel Shield"],
  ["PART-BURST-LAYER-DRAGOON-PHANTOM", "드래곤 팬텀", "드라군 팬텀", "Dragoon Phantom"],
  ["PART-BURST-LAYER-DRANZER-FLAME", "윙 팔콘", "드랜저 플레임", "Dranzer Flame"],
  ["PART-BURST-LAYER-WOLBORG", "하운드 도그", "울보그", "Wolborg"],
  ["PART-BURST-LAYER-DRIGER-FANG", "클로 타이거", "드라이거 팽", "Driger Fang"],
  ["PART-BURST-LAYER-GAIA-DRAGOON", "나이프 리저드", "가이아 드라군", "Gaia Dragoon"],
  ["PART-BURST-LAYER-DRACIEL-FORTRESS", "드래셀 포트리스", "드라시엘 포트리스", "Draciel Fortress"],
  ["PART-BURST-LAYER-DRAGOON-VICTORY", "파이어 리저드", "드라군 빅토리", "Dragoon Victory"],
  ["PART-BURST-LAYER-DRANZER-VOLCANO", "드랜져 볼케이노", "드랜저 볼케이노", "Dranzer Volcano"],
  ["PART-BURST-LAYER-DRIGER-VULCAN", "팽 타이거", "드라이거 발칸", "Driger Vulcan"],
  ["PART-BURST-LAYER-DRACIEL-VIPER", "프로텍션 터틀", "드라시엘 바이퍼", "Draciel Viper"],
  ["PART-BURST-LAYER-GAIA-DRAGOON-BURST", "가이아 드래곤 버스트", "가이아 드라군 버스트", "Gaia Dragoon Burst"],
  ["PART-BURST-LAYER-DRAGOON-V2", "마그마 리저드", "드라군 V2", "Dragoon V2"],
  ["PART-BURST-LAYER-DRANZER-V2", "스카이 팔콘", "드랜저 V2", "Dranzer V2"],
  ["PART-BURST-LAYER-DRIGER-V2", "스톰 타이거", "드라이거 V2", "Driger V2"],
  ["PART-BURST-LAYER-DRACIEL-V2", "드래셀 V2", "드라시엘 V2", "Draciel V2"]
];
const metalFightRemakeLayers = [
  ["PART-BURST-LAYER-STORM-PEGASIS", "플래시 슬레이프닐", "스톰 페가시스", "Storm Pegasis", "attack", "right", [4,0,0,2,3,2]],
  ["PART-BURST-LAYER-LIGHTNING-L-DRAGO", "아쿠아 레비아단", "라이트닝 엘드라고", "Lightning L-Drago", "attack", "left", [4,0,0,2,2,3]],
  ["PART-BURST-LAYER-ROCK-LEONE", "로크 레온", "록 레오네", "Rock Leone", "defense", "right", [2,4,0,3,1,1]],
  ["PART-BURST-LAYER-FLAME-SAGITTARIO", "플레임 사지타리오", "플레임 사지타리오", "Flame Sagittario", "stamina", "right", [1,1,4,2,1,2]],
  ["PART-BURST-LAYER-EARTH-AQUILA", "어스 아쿠이라", "어스 아쿠이라", "Earth Aquila", "defense", "right", [2,2,0,2,3,2]],
  ["PART-BURST-LAYER-BURN-PHOENIX", "번 피닉스", "번 피닉스", "Burn Phoenix", "stamina", "right", [1,1,5,2,2,0]],
  ["PART-BURST-LAYER-GALAXY-PEGASIS", "스파크 슬레이프닐", "갤럭시 페가시스", "Galaxy Pegasis", "attack", "right", [5,0,0,2,3,2]],
  ["PART-BURST-LAYER-RAY-UNICORNO", "레이 유니콘", "레이 유니코르노", "Ray Unicorno", "attack", "right", [4,1,1,2,2,2]],
  ["PART-BURST-LAYER-GRAVITY-PERSEUS", "그라비티 페르세우스", "그라비티 페르세우스", "Gravity Perseus", "defense", "dual", [2,5,0,3,1,1]],
  ["PART-BURST-LAYER-METEO-L-DRAGO", "메테오 엘드라고", "메테오 엘드라고", "Meteo L-Drago", "attack", "left", [5,0,0,2,2,3]],
  ["PART-BURST-LAYER-HELL-KERBECS", "다크 케르베로스", "헬 케르벡스", "Hell Kerbecs", "stamina", "right", [2,1,5,3,0,1]]
];

test("Burst random booster source contains the requested 227 slots", () => {
  assert.equal(burstRandomBoosterRows.length, 227);
  assert.equal(randomBeys.length, 227);
  assert.equal(new Set(randomBeys.map(item => item.id)).size, 227);
  assert.deepEqual(Object.fromEntries(Object.entries(burstRandomBoosterLineups)
    .map(([no, ids]) => [no, ids.length])), expectedCounts);
});

test("Burst random booster IDs, Korean names, and part references are canonical", () => {
  for (const [productNo, ids] of Object.entries(burstRandomBoosterLineups)) {
    ids.forEach((id, index) => {
      const item = beysById.get(id);
      assert.ok(item, `Missing ${id}`);
      assert.equal(item.productNo, productNo);
      assert.match(id, new RegExp(`^BEY-BURST-${productNo}-${String(index + 1).padStart(2, "0")}-`));
      assert.match(item.name, /[가-힣]/);
      assert.match(item.jpName, /[가-힣]/);
      assert.doesNotMatch(`${item.name} ${item.en} ${item.desc} ${item.tags.join(" ")}`, /[()]/);
      item.parts.forEach(partId => assert.ok(partIds.has(partId), `${id} -> ${partId}`));
      (item.bundledParts || []).forEach(partId => assert.ok(partIds.has(partId), `${id} bundled -> ${partId}`));
    });
  }
});

test("B-61 and B-181 keep exact names, combinations, types, spins, and bundled parts", () => {
  const cases = [
    ["BEY-BURST-B-61-01-QUAD-QUETZALCOATL-J-P", "쿼드 케찰콰틀.J.P", "defense", "right", ["PART-BURST-DUALLAYER-QUAD-QUETZALCOATL", "PART-BURST-DISK-JERK", "PART-BURST-DRIVER-PRESS"]],
    ["BEY-BURST-B-61-02-WILD-WYVERN-J-G", "와일드 와이번.J.G", "defense", "right", ["PART-BURST-DUALLAYER-WILD-WYVERN", "PART-BURST-DISK-JERK", "PART-BURST-DRIVER-GYRO"]],
    ["BEY-BURST-B-61-03-DARK-DEATHSCYTHER-J-O", "다크 데스사이저.J.O", "attack", "right", ["PART-BURST-DUALLAYER-DARK-DEATHSCYTHER", "PART-BURST-DISK-JERK", "PART-BURST-DRIVER-ORBIT"]],
    ["BEY-BURST-B-61-04-HOLY-HORUSOOD-V-J", "홀리 호루스드.V.J", "stamina", "right", ["PART-BURST-DUALLAYER-HOLY-HORUSOOD", "PART-BURST-DISK-VERTICAL", "PART-BURST-DRIVER-JAGGY"]],
    ["BEY-BURST-B-61-05-OBELISK-ODIN-U-J", "오벨리스크 오딘.U.J", "attack", "right", ["PART-BURST-DUALLAYER-OBELISK-ODIN", "PART-BURST-DISK-UPPER", "PART-BURST-DRIVER-JAGGY"]],
    ["BEY-BURST-B-61-06-HOLY-HORUSOOD-T-O", "홀리 호루스드.T.O", "stamina", "right", ["PART-BURST-DUALLAYER-HOLY-HORUSOOD", "PART-BURST-DISK-TRIPLE", "PART-BURST-DRIVER-ORBIT"]],
    ["BEY-BURST-B-61-07-DARK-DEATHSCYTHER-V-G", "다크 데스사이저.V.G", "attack", "right", ["PART-BURST-DUALLAYER-DARK-DEATHSCYTHER", "PART-BURST-DISK-VERTICAL", "PART-BURST-DRIVER-GYRO"]],
    ["BEY-BURST-B-61-08-DRIGER-SLASH-H-F", "드래이거 슬래시.H.F", "balance", "right", ["PART-BURST-LAYER-DRIGER-SLASH", "PART-BURST-DISK-HEAVY", "PART-BURST-DRIVER-FUSION"]],
    ["BEY-BURST-B-181-01-CYCLONE-RAGNARUK-GG-NV-6", "사이클론 라그나로크.Gg.Nv-6", "stamina", "right", ["PART-BURST-DBBLADE-CYCLONE", "PART-BURST-DBCORE-RAGNARUK", "PART-BURST-DBDISK-GIGA", "PART-BURST-DRIVER-NEVER", "PART-BURST-DBARMOR-6"]],
    ["BEY-BURST-B-181-02-CYCLONE-RAGNARUK-NX-RS-2", "사이클론 라그나로크.Nx.Rs-2", "stamina", "right", ["PART-BURST-DBBLADE-CYCLONE", "PART-BURST-DBCORE-RAGNARUK", "PART-BURST-DBDISK-NEXUS", "PART-BURST-DRIVER-RISE", "PART-BURST-DBARMOR-2"]],
    ["BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH", "마그마 리저드.Wh.Xc'", "attack", "left", ["PART-BURST-LAYER-DRAGOON-V2", "PART-BURST-DISK-WHEEL", "PART-BURST-DRIVER-XCEED-DASH"], ["PART-BURST-DBARMOR-6"]],
    ["BEY-BURST-B-181-04-HELL-KERBECS-GG-WV", "다크 케르베로스.Gg.Wv", "stamina", "right", ["PART-BURST-LAYER-HELL-KERBECS", "PART-BURST-DBDISK-GIGA", "PART-BURST-DRIVER-WAVE"]],
    ["BEY-BURST-B-181-05-INFINITE-DEATHSCYTHER-UN-1A", "인피니트 데스사이저.Un 1A", "balance", "right", ["PART-BURST-SUPERKINGRING-INFINITE", "PART-BURST-SUPERKINGCHIP-DEATHSCYTHER", "PART-BURST-DRIVER-UNIVERSE", "PART-BURST-SUPERKINGCHASSIS-1A"]],
    ["BEY-BURST-B-181-06-BRAVE-WYVERN-10-NV-4A", "브레이브 와이번.10.Nv 4A", "attack", "right", ["PART-BURST-SUPERKINGRING-BRAVE", "PART-BURST-SUPERKINGCHIP-WYVERN", "PART-BURST-COREDISK-10", "PART-BURST-DRIVER-NEVER", "PART-BURST-SUPERKINGCHASSIS-4A"]]
  ];
  for (const [id, name, battleType, spin, parts, bundledParts] of cases) {
    const item = beysById.get(id);
    assert.deepEqual({ name: item?.name, battleType: item?.battleType, spin: item?.spin, parts: item?.parts }, { name, battleType, spin, parts });
    assert.deepEqual(item?.bundledParts, bundledParts);
  }

  assert.equal(beysById.get("BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH")?.jpName, "드라군 V2.Wh.Xc'");
  assert.equal(beysById.get("BEY-BURST-B-181-04-HELL-KERBECS-GG-WV")?.jpName, "헬 케르벡스.Gg.Wv");

  const hellKerbecs = partItems.find(item => item.id === "PART-BURST-LAYER-HELL-KERBECS");
  assert.deepEqual(hellKerbecs, {
    id: "PART-BURST-LAYER-HELL-KERBECS", series: "burst", type: "layer",
    name: "다크 케르베로스", jpName: "헬 케르벡스", en: "Hell Kerbecs",
    battleType: "stamina", spin: "right", tags: [], desc: "", stats: [2,1,5,3,0,1]
  });
});

test("all 19 Bakuten remake layers keep exact Korean, Japanese, and English identities", () => {
  const partsById = new Map(partItems.map(item => [item.id, item]));
  assert.equal(bakutenRemakeLayers.length, 19);

  for (const [id, name, jpName, en] of bakutenRemakeLayers) {
    const part = partsById.get(id);
    assert.deepEqual(
      { id: part?.id, name: part?.name, jpName: part?.jpName, en: part?.en },
      { id, name, jpName, en }
    );
    assert.equal(id, `PART-BURST-LAYER-${en.toUpperCase().replace(/[^A-Z0-9]+/g, "-")}`);
  }

  assert.equal(partItems.some(item => item.id === "PART-BURST-LAYER-GAIA-DRAGOON-SPIKE"), false);
});

test("remake Bey names localize by region while addresses retain Japanese identities", () => {
  const partsById = new Map(bakutenRemakeLayers.map(([id, name, jpName]) => [id, { name, jpName }]));
  const remakeBeys = beyItems.filter(item => item.parts?.some(id => partsById.has(id)));
  const koreanAddressTokens = /(?:MAGMA-LIZARD|SKY-FALCON|STORM-TIGER|PROTECTION-TURTLE|FIRE-LIZARD|CLAW-TIGER|KNIFE-LIZARD|WING-FALCON|HOUND-DOG)/;

  assert.equal(remakeBeys.length, 22);
  for (const item of remakeBeys) {
    const layerId = item.parts.find(id => partsById.has(id));
    const layer = partsById.get(layerId);
    assert.ok(item.name.startsWith(layer.name), `${item.id} Korean name`);
    assert.ok(item.jpName.startsWith(layer.jpName), `${item.id} Japanese name`);
    assert.ok(item.id.includes(`-${layerId.replace("PART-BURST-LAYER-", "")}-`), `${item.id} canonical identity`);
  }

  const invalidAddresses = [...partItems, ...beyItems]
    .filter(item => item.series === "burst" && koreanAddressTokens.test(item.id))
    .map(item => item.id);
  assert.deepEqual(invalidAddresses, []);
});

test("all 11 Metal Fight remake layers keep exact regional names and Japanese identity addresses", () => {
  const partsById = new Map(partItems.map(item => [item.id, item]));
  assert.equal(metalFightRemakeLayers.length, 11);

  for (const [id, name, jpName, en, battleType, spin, stats] of metalFightRemakeLayers) {
    const part = partsById.get(id);
    assert.deepEqual(
      { id: part?.id, name: part?.name, jpName: part?.jpName, en: part?.en, battleType: part?.battleType, spin: part?.spin, stats: part?.stats },
      { id, name, jpName, en, battleType, spin, stats }
    );
    assert.equal(id, `PART-BURST-LAYER-${en.toUpperCase().replace(/[^A-Z0-9]+/g, "-")}`);
  }

  const koreanAddressTokens = /(?:FLASH-SLEIPNIR|AQUA-LEVIATHAN|SPARK-SLEIPNIR|DARK-CERBERUS|ROCK-LEON|RAY-UNICORN)(?:-|$)/;
  const invalidAddresses = [...partItems, ...beyItems]
    .filter(item => item.series === "burst" && koreanAddressTokens.test(item.id))
    .map(item => item.id);
  assert.deepEqual(invalidAddresses, []);
});

test("Metal Fight remake Bey names use Korean releases and Japanese originals by region", () => {
  const cases = [
    ["BEY-BURST-B-140-02-STORM-PEGASIS-10-G-QC-DASH", "플래시 슬레이프닐.10G.Qc'", "스톰 페가시스.10G.Qc'"],
    ["BEY-BURST-B-151-02-LIGHTNING-L-DRAGO-10-R-Z-DASH", "아쿠아 레비아단.10R.Z'", "라이트닝 엘드라고.10R.Z'"],
    ["BEY-BURST-B-151-05-STORM-PEGASIS-HR-AT", "플래시 슬레이프닐.Hr.At", "스톰 페가시스.Hr.At"],
    ["BEY-BURST-B-176-07-STORM-PEGASIS-DR-HS", "플래시 슬레이프닐.Dr.HS", "스톰 페가시스.Dr.HS"],
    ["BEY-BURST-B-181-04-HELL-KERBECS-GG-WV", "다크 케르베로스.Gg.Wv", "헬 케르벡스.Gg.Wv"],
    ["BEY-BURST-B-194-06-GALAXY-PEGASIS-LG-X-DASH", "스파크 슬레이프닐.Lg.X'", "갤럭시 페가시스.Lg.X'"]
  ];
  for (const [id, name, jpName] of cases) {
    const item = beysById.get(id);
    assert.deepEqual({ name: item?.name, jpName: item?.jpName }, { name, jpName });
  }
});

test("Burst search data exposes both regional Dragoon V2 names", () => {
  const entry = buildRuntimeData().searchChunks.burst.search
    .find(item => item[2] === "BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH");
  assert.equal(entry?.[6], "마그마 리저드.Wh.Xc'");
  assert.equal(entry?.[7], "드라군 V2.Wh.Xc'");
});

test("Burst search data exposes both regional Metal Fight remake names", () => {
  const searchById = new Map(buildRuntimeData().searchChunks.burst.search.map(entry => [entry[2], entry]));
  const cases = [
    ["BEY-BURST-B-151-02-LIGHTNING-L-DRAGO-10-R-Z-DASH", "아쿠아 레비아단.10R.Z'", "라이트닝 엘드라고.10R.Z'"],
    ["BEY-BURST-B-181-04-HELL-KERBECS-GG-WV", "다크 케르베로스.Gg.Wv", "헬 케르벡스.Gg.Wv"],
    ["BEY-BURST-B-194-06-GALAXY-PEGASIS-LG-X-DASH", "스파크 슬레이프닐.Lg.X'", "갤럭시 페가시스.Lg.X'"]
  ];
  for (const [id, name, jpName] of cases) {
    const entry = searchById.get(id);
    assert.equal(entry?.[6], name);
    assert.equal(entry?.[7], jpName);
  }
});

test("only the X Bey Emblem Sticker remains empty after adding both lineups", () => {
  const emptyReleased = productItems.flatMap(product => Object.entries(product.releases || {}).flatMap(([region, release]) =>
    release?.status !== "unreleased" && (!Array.isArray(release?.composition) || release.composition.length === 0)
      ? [`${product.id}:${region}`]
      : []));
  assert.deepEqual(emptyReleased, ["PRODUCT-X-BX-00-BEY-EMBLEM-STICKER-01:jp"]);
});

test("released products expose the ordered lineup through a random Bey entry", () => {
  for (const [productNo, ids] of Object.entries(burstRandomBoosterLineups)) {
    const product = productsByNo.get(productNo);
    assert.ok(product, `Missing product ${productNo}`);
    assert.deepEqual(product.lineupPool, ids);
    for (const release of Object.values(product.releases)) {
      if (release.status === "unreleased") {
        assert.equal(release.composition, undefined);
        continue;
      }
      assert.deepEqual(release.composition, [
        { name: "무작위 베이", quantity: "1개", target: ids[0] }
      ]);
    }
  }
});

test("representative generations and corrected remake parts keep exact combinations", () => {
  const cases = [
    ["BEY-BURST-B-15-01-TRIDENT-H-C", "트라이던트.H.C", [
      "PART-BURST-LAYER-TRIDENT", "PART-BURST-DISK-HEAVY", "PART-BURST-DRIVER-CLAW"
    ]],
    ["BEY-BURST-B-156-01-NAKED-SPRIGGAN-PR-OM-TEN", "네이키드 스프리건.Pr.Om 천", [
      "PART-BURST-GACHIBASE-NAKED", "PART-BURST-GACHICHIP-SPRIGGAN",
      "PART-BURST-GACHIWEIGHT-TEN", "PART-BURST-DISK-PARADOX",
      "PART-BURST-DRIVER-ORBIT-METAL"
    ]],
    ["BEY-BURST-B-202-01-WIND-KNIGHT-MN-BN-6", "윈드 나이트.Mn.Bn-6", [
      "PART-BURST-DBBLADE-WIND", "PART-BURST-DBCORE-KNIGHT",
      "PART-BURST-DBDISK-MOON", "PART-BURST-DRIVER-BOUNCE", "PART-BURST-DBARMOR-6"
    ]]
  ];
  for (const [id, name, parts] of cases) {
    assert.equal(beysById.get(id)?.name, name);
    assert.deepEqual(beysById.get(id)?.parts, parts);
  }

  const axe = partItems.find(item => item.id === "PART-BURST-FRAME-AXE");
  assert.deepEqual({ name: axe?.name, en: axe?.en, sub: axe?.sub },
    { name: "A", en: "Axe", sub: "액스" });
  assert.equal(partItems.some(item => item.id === "PART-BURST-FRAME-X"), false);
  assert.equal(partItems.some(item => item.id === "PART-BURST-LAYER-DRAIGER-FANG"), false);
});

test("High Accel dash uses the canonical Korean spelling", () => {
  const highAccel = partItems.find(item => item.id === "PART-BURST-DRIVER-HIGH-ACCEL-DASH");
  assert.deepEqual(
    { en: highAccel?.en, sub: highAccel?.sub },
    { en: "High Accel'", sub: "하이 액셀 대시" }
  );
});
