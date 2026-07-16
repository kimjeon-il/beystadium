import assert from "node:assert/strict";
import test from "node:test";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import {
  burstRemakeSetBeyItems,
  burstRemakeSetProductCompositions
} from "../data/source/burst-remake-sets.mjs";
import { productItems } from "../data/source/products.mjs";
import { toolsItems } from "../data/source/secondary.mjs";
import { buildRuntimeData } from "../scripts/build-data-index.mjs";

const expectedSets = {
  "PRODUCT-BURST-B-00-DRAGOON-STORM-W-X": {
    name: "드라군 스톰.W.X", sale: "wbba. 스토어 한정", kind: "부스터", releaseDate: "2017-03-04", price: "972",
    targets: ["BEY-BURST-B-00-DRAGOON-STORM-W-X"]
  },
  "PRODUCT-BURST-B-00-DRAGOON-STORM-W-X-GOLD": {
    name: "드라군 스톰.W.X 골드 Ver.", sale: "코로코로 아니키 제7호 응모자 전원 서비스", kind: "부스터", releaseDate: "2016-12-28", price: "1050",
    targets: ["BEY-BURST-B-00-DRAGOON-STORM-W-X-GOLD"]
  },
  "PRODUCT-BURST-B-00-DRANZER-SPIRAL-S-T": {
    name: "드랜저 스파이럴.S.T", kind: "부스터", releaseDate: "2016-11-25", price: "972",
    targets: ["BEY-BURST-B-00-DRANZER-SPIRAL-S-T"]
  },
  "PRODUCT-BURST-B-00-LEGEND-STAR-BEY-SET": {
    name: "레전드 스타 베이 세트", kind: "세트", releaseDate: "2019-07-12", price: "7560",
    targets: [
      "BEY-BURST-B-00-ACE-DRAGON-0-G-Z-DASH-TEN", "BEY-BURST-B-00-CHO-Z-ACHILLES-4-B-YR",
      "BEY-BURST-B-00-DRAGOON-PHANTOM-00-S-PW", "BEY-BURST-B-00-SLASH-VALKYRIE-8-DASH-C-R-RETSU",
      "BEY-BURST-B-00-STORM-PEGASIS-HR-L-DASH", "TOOLS-BURST-LONG-LIGHT-LAUNCHER-LR", "TOOLS-BURST-LAUNCHER-GRIP"
    ]
  },
  "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-20TH-ANNIVERSARY-SET": {
    name: "폭전슛 베이블레이드 20주년 기념 세트", releaseDate: "2019-07-20", price: "8964",
    targets: [
      "BEY-BURST-B-00-DRAGOON-STORM-W-X", "BEY-BURST-B-00-DRANZER-SPIRAL-S-T",
      "BEY-BURST-B-00-DRIGER-SLASH-H-F", "BEY-BURST-B-00-DRACIEL-SHIELD-C-P",
      "BEY-BURST-B-00-WOLBORG-8-BR", "BEY-BURST-B-00-DRAGOON-PHANTOM-G-V",
      "BEY-BURST-B-00-DRANZER-FLAME-Y-ZT", "BEY-BURST-B-00-DRIGER-FANG-0-XT",
      "BEY-BURST-B-00-DRACIEL-FORTRESS-10-PL"
    ]
  },
  "PRODUCT-BURST-B-00-METAL-FIGHT-BEYBLADE-ANIME-10TH-ANNIVERSARY-SET": {
    name: "메탈파이트 베이블레이드 애니메이션 10주년 기념 세트", releaseDate: "2019-12-31", price: "8100",
    targets: [
      "BEY-BURST-B-00-STORM-PEGASIS-10-G-QC-DASH", "BEY-BURST-B-00-LIGHTNING-L-DRAGO-10-R-Z-DASH",
      "BEY-BURST-B-00-FLAME-SAGITTARIO-8-DASH-C", "BEY-BURST-B-00-ROCK-LEONE-0-M",
      "BEY-BURST-B-00-EARTH-AQUILA-2-Y", "TOOLS-BURST-LONG-BEYLAUNCHER", "TOOLS-BURST-LONG-BEYLAUNCHER-L"
    ]
  },
  "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2020-V-SET": {
    name: "폭전슛 베이블레이드 2020 V 세트", releaseDate: "2020-08-31", price: "8250",
    targets: [
      "BEY-BURST-B-00-DRAGOON-VICTORY-ST-EV", "BEY-BURST-B-00-DRANZER-VOLCANO-HR-DM",
      "BEY-BURST-B-00-DRIGER-VULCAN-10-R-W", "BEY-BURST-B-00-DRACIEL-VIPER-AR-OM",
      "BEY-BURST-B-00-GAIA-DRAGOON-BURST-10-E-I", "TOOLS-BURST-LIGHT-LAUNCHER-LR", "TOOLS-BURST-LAUNCHER-GRIP"
    ]
  },
  "PRODUCT-BURST-B-00-METAL-FIGHT-BEYBLADE-2020-BAKU-SET": {
    name: "메탈파이트 베이블레이드 2020 폭 세트", releaseDate: "2020-12-30", price: "8250",
    targets: [
      "BEY-BURST-B-00-GALAXY-PEGASIS-5-G-JL-DASH", "BEY-BURST-B-00-RAY-UNICORNO-1-DASH-P-U-DASH",
      "BEY-BURST-B-00-GRAVITY-PERSEUS-00-B-Y", "BEY-BURST-B-00-METEO-L-DRAGO-7-V-SP-DASH",
      "BEY-BURST-B-00-HELL-KERBECS-0-L-MB", "TOOLS-BURST-LONG-BEYLAUNCHER-L", "TOOLS-BURST-LONG-BEYLAUNCHER-LR"
    ]
  },
  "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2023-V2-SET": {
    name: "폭전슛 베이블레이드 2023 V2 세트", releaseDate: "2023-02-15", price: "8800",
    targets: [
      "BEY-BURST-B-00-DRAGOON-V2-WH-XP-DASH", "BEY-BURST-B-00-DRANZER-V2-0-C-RB-DASH",
      "BEY-BURST-B-00-DRIGER-V2-IL-WD-DASH", "BEY-BURST-B-00-DRACIEL-V2-10-T-PL-DASH",
      "TOOLS-BURST-LIGHT-LAUNCHER-LR", "TOOLS-BURST-LAUNCHER-GRIP"
    ],
    quantities: ["1개", "1개", "1개", "1개", "2개", "2개"]
  }
};

const expectedParts = {
  "BEY-BURST-B-00-DRAGOON-STORM-W-X": ["PART-BURST-LAYER-DRAGOON-STORM", "PART-BURST-DISK-WING", "PART-BURST-DRIVER-XTREME"],
  "BEY-BURST-B-00-DRAGOON-STORM-W-X-GOLD": ["PART-BURST-LAYER-DRAGOON-STORM", "PART-BURST-DISK-WING", "PART-BURST-DRIVER-XTREME"],
  "BEY-BURST-B-00-DRANZER-SPIRAL-S-T": ["PART-BURST-LAYER-DRANZER-SPIRAL", "PART-BURST-DISK-SPREAD", "PART-BURST-DRIVER-TRANS"],
  "BEY-BURST-B-00-DRIGER-SLASH-H-F": ["PART-BURST-LAYER-DRIGER-SLASH", "PART-BURST-DISK-HEAVY", "PART-BURST-DRIVER-FUSION"],
  "BEY-BURST-B-00-DRACIEL-SHIELD-C-P": ["PART-BURST-LAYER-DRACIEL-SHIELD", "PART-BURST-DISK-CENTRAL", "PART-BURST-DRIVER-PRESS"],
  "BEY-BURST-B-00-WOLBORG-8-BR": ["PART-BURST-LAYER-WOLBORG", "PART-BURST-COREDISK-8", "PART-BURST-DRIVER-BEARING"],
  "BEY-BURST-B-00-DRAGOON-PHANTOM-G-V": ["PART-BURST-LAYER-DRAGOON-PHANTOM", "PART-BURST-DISK-GRAVITY", "PART-BURST-DRIVER-VARIABLE"],
  "BEY-BURST-B-00-DRANZER-FLAME-Y-ZT": ["PART-BURST-LAYER-DRANZER-FLAME", "PART-BURST-DISK-YELL", "PART-BURST-DRIVER-ZETA"],
  "BEY-BURST-B-00-DRIGER-FANG-0-XT": ["PART-BURST-LAYER-DRIGER-FANG", "PART-BURST-COREDISK-0", "PART-BURST-DRIVER-XTEND"],
  "BEY-BURST-B-00-DRACIEL-FORTRESS-10-PL": ["PART-BURST-LAYER-DRACIEL-FORTRESS", "PART-BURST-COREDISK-10", "PART-BURST-DRIVER-PLANET"],
  "BEY-BURST-B-00-ACE-DRAGON-0-G-Z-DASH-TEN": ["PART-BURST-GACHIBASE-ACE", "PART-BURST-GACHICHIP-DRAGON", "PART-BURST-GACHIWEIGHT-TEN", "PART-BURST-COREDISK-0", "PART-BURST-FRAME-GLAIVE", "PART-BURST-DRIVER-ZEPHYR-DASH"],
  "BEY-BURST-B-00-CHO-Z-ACHILLES-4-B-YR": ["PART-BURST-CHOZLAYER-CHO-Z-ACHILLES", "PART-BURST-COREDISK-4", "PART-BURST-FRAME-BUMP", "PART-BURST-DRIVER-YARD"],
  "BEY-BURST-B-00-DRAGOON-PHANTOM-00-S-PW": ["PART-BURST-LAYER-DRAGOON-PHANTOM", "PART-BURST-COREDISK-00", "PART-BURST-FRAME-STAR", "PART-BURST-DRIVER-POWER"],
  "BEY-BURST-B-00-SLASH-VALKYRIE-8-DASH-C-R-RETSU": ["PART-BURST-GACHIBASE-SLASH", "PART-BURST-GACHICHIP-VALKYRIE", "PART-BURST-GACHIWEIGHT-RETSU", "PART-BURST-COREDISK-8-DASH", "PART-BURST-FRAME-CROSS", "PART-BURST-DRIVER-REVOLVE"],
  "BEY-BURST-B-00-STORM-PEGASIS-HR-L-DASH": ["PART-BURST-LAYER-STORM-PEGASIS", "PART-BURST-DISK-HURRICANE", "PART-BURST-DRIVER-LINER-DASH"],
  "BEY-BURST-B-00-STORM-PEGASIS-10-G-QC-DASH": ["PART-BURST-LAYER-STORM-PEGASIS", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-GLAIVE", "PART-BURST-DRIVER-QUICK-DASH"],
  "BEY-BURST-B-00-LIGHTNING-L-DRAGO-10-R-Z-DASH": ["PART-BURST-LAYER-LIGHTNING-L-DRAGO", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-REACH", "PART-BURST-DRIVER-ZEPHYR-DASH"],
  "BEY-BURST-B-00-FLAME-SAGITTARIO-8-DASH-C": ["PART-BURST-LAYER-FLAME-SAGITTARIO", "PART-BURST-COREDISK-8-DASH", "PART-BURST-DRIVER-CLAW"],
  "BEY-BURST-B-00-ROCK-LEONE-0-M": ["PART-BURST-LAYER-ROCK-LEONE", "PART-BURST-COREDISK-0", "PART-BURST-DRIVER-MASSIVE"],
  "BEY-BURST-B-00-EARTH-AQUILA-2-Y": ["PART-BURST-LAYER-EARTH-AQUILA", "PART-BURST-COREDISK-2", "PART-BURST-DRIVER-YIELDING"],
  "BEY-BURST-B-00-DRAGOON-VICTORY-ST-EV": ["PART-BURST-LAYER-DRAGOON-VICTORY", "PART-BURST-DISK-STING", "PART-BURST-DRIVER-EVOLUTION"],
  "BEY-BURST-B-00-DRANZER-VOLCANO-HR-DM": ["PART-BURST-LAYER-DRANZER-VOLCANO", "PART-BURST-DISK-HURRICANE", "PART-BURST-DRIVER-DIMENSION"],
  "BEY-BURST-B-00-DRIGER-VULCAN-10-R-W": ["PART-BURST-LAYER-DRIGER-VULCAN", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-REACH", "PART-BURST-DRIVER-WEIGHT"],
  "BEY-BURST-B-00-DRACIEL-VIPER-AR-OM": ["PART-BURST-LAYER-DRACIEL-VIPER", "PART-BURST-DISK-AROUND", "PART-BURST-DRIVER-ORBIT-METAL"],
  "BEY-BURST-B-00-GAIA-DRAGOON-BURST-10-E-I": ["PART-BURST-LAYER-GAIA-DRAGOON-BURST", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-EXPAND", "PART-BURST-DRIVER-IRON"],
  "BEY-BURST-B-00-GALAXY-PEGASIS-5-G-JL-DASH": ["PART-BURST-LAYER-GALAXY-PEGASIS", "PART-BURST-COREDISK-5", "PART-BURST-FRAME-GLAIVE", "PART-BURST-DRIVER-JOLT-DASH"],
  "BEY-BURST-B-00-RAY-UNICORNO-1-DASH-P-U-DASH": ["PART-BURST-LAYER-RAY-UNICORNO", "PART-BURST-COREDISK-1-DASH", "PART-BURST-FRAME-PROOF", "PART-BURST-DRIVER-UNITE-DASH"],
  "BEY-BURST-B-00-GRAVITY-PERSEUS-00-B-Y": ["PART-BURST-LAYER-GRAVITY-PERSEUS", "PART-BURST-COREDISK-00", "PART-BURST-FRAME-BUMP", "PART-BURST-DRIVER-YIELDING"],
  "BEY-BURST-B-00-METEO-L-DRAGO-7-V-SP-DASH": ["PART-BURST-LAYER-METEO-L-DRAGO", "PART-BURST-COREDISK-7", "PART-BURST-FRAME-VORTEX", "PART-BURST-DRIVER-SPIRAL-DASH"],
  "BEY-BURST-B-00-HELL-KERBECS-0-L-MB": ["PART-BURST-LAYER-HELL-KERBECS", "PART-BURST-COREDISK-0", "PART-BURST-FRAME-LIFT", "PART-BURST-DRIVER-MOBIUS"],
  "BEY-BURST-B-00-DRAGOON-V2-WH-XP-DASH": ["PART-BURST-LAYER-DRAGOON-V2", "PART-BURST-DISK-WHEEL", "PART-BURST-DRIVER-XPLOSION-DASH"],
  "BEY-BURST-B-00-DRANZER-V2-0-C-RB-DASH": ["PART-BURST-LAYER-DRANZER-V2", "PART-BURST-COREDISK-0", "PART-BURST-FRAME-CROSS", "PART-BURST-DRIVER-REBOOT-DASH"],
  "BEY-BURST-B-00-DRIGER-V2-IL-WD-DASH": ["PART-BURST-LAYER-DRIGER-V2", "PART-BURST-DBDISK-ILLEGAL", "PART-BURST-DRIVER-WEDGE-DASH"],
  "BEY-BURST-B-00-DRACIEL-V2-10-T-PL-DASH": ["PART-BURST-LAYER-DRACIEL-V2", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-TURN", "PART-BURST-DRIVER-PLANET-DASH"]
};

test("nine Japanese-only remake products keep exact release metadata and compositions", () => {
  const productsById = new Map(productItems.map(product => [product.id, product]));
  assert.equal(Object.keys(burstRemakeSetProductCompositions).length, 9);

  for (const [id, expected] of Object.entries(expectedSets)) {
    const product = productsById.get(id);
    assert.deepEqual(product?.releases.kr, { status: "unreleased" });
    assert.deepEqual(
      { no: product?.releases.jp.no, name: product?.releases.jp.name, kind: product?.releases.jp.kind, releaseDate: product?.releases.jp.releaseDate, price: product?.releases.jp.price },
      { no: "B-00", name: expected.name, kind: expected.kind || "세트", releaseDate: expected.releaseDate, price: expected.price }
    );
    assert.deepEqual(product?.releases.jp.composition.map(entry => entry.target), expected.targets);
    assert.deepEqual(product?.releases.jp.composition.map(entry => entry.quantity), expected.quantities || expected.targets.map(() => "1개"));
  }

  assert.equal(productsById.get("PRODUCT-BURST-B-00-DRAGOON-STORM-W-X")?.releases.jp.sale, expectedSets["PRODUCT-BURST-B-00-DRAGOON-STORM-W-X"].sale);
  assert.equal(productsById.get("PRODUCT-BURST-B-00-DRAGOON-STORM-W-X-GOLD")?.releases.jp.sale, expectedSets["PRODUCT-BURST-B-00-DRAGOON-STORM-W-X-GOLD"].sale);
});

test("all 34 remake-product Beys use B-00 Japanese identities and exact existing parts", () => {
  const beysById = new Map(beyItems.map(item => [item.id, item]));
  const partIds = new Set(partItems.map(item => item.id));
  const toolIds = new Set(toolsItems.map(item => item.id));
  assert.equal(burstRemakeSetBeyItems.length, 34);
  assert.equal(Object.keys(expectedParts).length, 34);

  for (const [id, parts] of Object.entries(expectedParts)) {
    const bey = beysById.get(id);
    assert.ok(bey, `Missing ${id}`);
    assert.equal(bey.productNo, "B-00");
    assert.deepEqual(bey.parts, parts);
    assert.match(bey.name, /[가-힣]/);
    assert.match(bey.jpName, /[가-힣]/);
    parts.forEach(partId => assert.ok(partIds.has(partId), `${id} -> ${partId}`));
  }

  const allTargets = Object.values(expectedSets).flatMap(set => set.targets);
  allTargets.forEach(target => assert.ok(beysById.has(target) || toolIds.has(target), target));
  assert.deepEqual(burstRemakeSetBeyItems.filter(item => /(?:FLASH-SLEIPNIR|AQUA-LEVIATHAN|SPARK-SLEIPNIR|MAGMA-LIZARD|SKY-FALCON|STORM-TIGER)/.test(item.id)), []);
});

test("remake-set search data exposes products and both regional Bey names", () => {
  const searchById = new Map(buildRuntimeData().searchChunks.burst.search.map(entry => [entry[2], entry]));
  for (const id of Object.keys(expectedSets)) assert.ok(searchById.has(id), id);

  const cases = [
    ["BEY-BURST-B-00-ACE-DRAGON-0-G-Z-DASH-TEN", "에이스 드래곤.0G.Z' 천", "에이스 드래곤.0G.Z' 天"],
    ["BEY-BURST-B-00-DRAGOON-PHANTOM-00-S-PW", "드래곤 팬텀.00S.Pw", "드라군 팬텀.00S.Pw"],
    ["BEY-BURST-B-00-DRAGOON-PHANTOM-G-V", "드래곤 팬텀.G.V", "드라군 팬텀.G.V"],
    ["BEY-BURST-B-00-STORM-PEGASIS-10-G-QC-DASH", "플래시 슬레이프닐.10G.Qc'", "스톰 페가시스.10G.Qc'"],
    ["BEY-BURST-B-00-DRAGOON-V2-WH-XP-DASH", "마그마 리저드.Wh.Xp'", "드라군 V2.Wh.Xp'"]
  ];
  for (const [id, name, jpName] of cases) {
    const entry = searchById.get(id);
    assert.equal(entry?.[6], name);
    assert.equal(entry?.[7], jpName);
  }
});
