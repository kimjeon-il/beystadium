import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { partItems } from "../data/source/catalog.mjs";
import {
  xJapanPartDetails,
  xJapanPartDetailExcludedIds,
  xJapanPartDetailFullIds,
  xJapanPartDetailSplitIds
} from "../data/source/x-jp-part-details.mjs";
import { decodeSearchEntry } from "../src/search-data-decoder.js";

const partsById = new Map(partItems.map((part) => [part.id, part]));

const correctedDescriptions = Object.freeze({
  "PART-X-BLADE-MAIN-BLADE-BLITZ": "반발 성능이 높은 중량급 5개 날에 무게중심을 한쪽으로 치우치게 하는 대형 날을 더해 중량 성능을 높인다.",
  "PART-X-BLADE-MAIN-BLADE-FORTRESS": "높낮이가 있는 돌출 형태로 상대의 공격을 분산하고 입체적인 날로 카운터를 가한다.",
  "PART-X-BLADE-MAIN-BLADE-MIGHT": "측면에 여러 개의 예각 면을 둔 중량급 8개 날로 상대의 회전력을 깎는다. 메탈 코팅으로 성능을 높였다.",
  "PART-X-BLADE-ASSIST-BLADE-VERTICAL": "상하 방향으로 뻗은 12개의 중량급 날로 래칫을 향한 공격을 막고 버스트 내성을 높인다.",
  "PART-X-BIT-Y": "대형 구형 축 끝의 지구력과 네 방향으로 돌출된 무게추의 자세 제어 성능을 양립한다.",
  "PART-X-BIT-GU": "끝까지 기어가 배치된 구형 축 끝에 평평한 접지면과 중앙 돌기를 두어 공격·방어·지구력에 특화된 움직임을 겸비한다.",
  "PART-X-BIT-NR": "가느다란 축 끝으로 오래 회전하고, 10개 톱니의 기어로 익스트림 대시 속도를 억제해 스태미나 손실을 줄인다."
});

const collaborationDescriptionSources = Object.freeze({
  "PART-X-BLADE-IRON-MAN": "PART-X-BLADE-KNIGHT-SHIELD",
  "PART-X-BLADE-THANOS": "PART-X-BLADE-KNIGHT-LANCE",
  "PART-X-BLADE-SPIDER-MAN": "PART-X-BLADE-VIPER-TAIL",
  "PART-X-BLADE-VENOM": "PART-X-BLADE-DRAN-SWORD",
  "PART-X-BLADE-LUKE-SKYWALKER": "PART-X-BLADE-KNIGHT-SHIELD",
  "PART-X-BLADE-DARTH-VADER": "PART-X-BLADE-KNIGHT-LANCE",
  "PART-X-BLADE-THE-MANDALORIAN": "PART-X-BLADE-LEON-CLAW",
  "PART-X-BLADE-MOFF-GIDEON": "PART-X-BLADE-HELLS-SCYTHE",
  "PART-X-BLADE-OPTIMUS-PRIME": "PART-X-BLADE-KNIGHT-SHIELD",
  "PART-X-BLADE-MEGATRON": "PART-X-BLADE-HELLS-SCYTHE",
  "PART-X-BLADE-OPTIMUS-PRIMAL": "PART-X-BLADE-SHARK-EDGE",
  "PART-X-BLADE-STARSCREAM": "PART-X-BLADE-WIZARD-ARROW"
});

const styleAlignedDescriptions = Object.freeze({
  "PART-X-RATCHET-1-50": "베이를 낮게 세팅하는 파츠. 공격 성능에 특화된 1개의 날을 사용한다.",
  "PART-X-RATCHET-7-55": "베이를 낮게 세팅하는 파츠. 비트에 따라 버스트 내성이 변하지 않는 단순한 구조로 흔들림이 적고, 두껍고 방어 성능이 높은 7개의 날을 사용한다.",
  "PART-X-RATCHET-0-60": "베이를 낮게 세팅하는 파츠. 수평 방향의 공격을 견디기 쉬운 무날 구조를 사용한다.",
  "PART-X-RATCHET-9-65": "베이를 낮게 세팅하는 파츠. 비트에 따라 버스트 내성이 변하지 않는 단순한 구조로 흔들림이 적고, 연타에 뛰어난 9개의 날을 사용한다.",
  "PART-X-RATCHET-8-70": "베이를 중간 높이로 세팅하는 파츠. 지름이 크고 원심력 강화에 뛰어난 8개의 날을 사용한다.",
  "PART-X-BIT-FF": "래칫과 별개로 자유 회전하는 비트. 조금 가늘고 평평한 축 끝으로 스태미나 손실을 줄이면서 대시 속도를 높인다.",
  "PART-X-BIT-OP": "공격을 흘려보내는 4개 날과 가는 축 끝으로 공격을 버티는 방어 모드와 공력 구조의 2개 날과 굵은 축 끝으로 움직이는 공격 모드 중 하나를 선택해 세팅한다.",
  "PART-X-BIT-DS": "방어 성능이 높은 뾰족한 축 끝에 원반형 움직임을 더하고, 버스트 내성과 맞바꿔 자세 제어 성능을 높인다."
});

test("일본 공식 상세 보강 대상과 입력 필드 수를 고정한다", () => {
  assert.equal(Object.keys(xJapanPartDetails).length, 84);
  assert.equal(Object.values(xJapanPartDetails).filter((details) => Object.hasOwn(details, "desc")).length, 83);
  assert.equal(Object.values(xJapanPartDetails).filter((details) => Object.hasOwn(details, "stats")).length, 36);
  assert.equal(xJapanPartDetailFullIds.length, 40);
  assert.equal(xJapanPartDetailSplitIds.length, 44);
  assert.equal(new Set([...xJapanPartDetailFullIds, ...xJapanPartDetailSplitIds]).size, 84);
});

test("기본·유니크·복각·컬래버 블레이드와 래칫·비트 40종은 설명과 스탯이 완성된다", () => {
  for (const id of xJapanPartDetailFullIds) {
    const part = partsById.get(id);
    assert.ok(part, `${id}가 존재해야 합니다.`);
    assert.ok(part.desc?.endsWith("."), `${id} 설명은 마침표로 끝나야 합니다.`);
    assert.ok(Array.isArray(part.stats) && part.stats.length === 3, `${id} 스탯 3개가 필요합니다.`);
  }

  assert.deepEqual(partsById.get("PART-X-BLADE-ROCK-LEONE").stats, [30, 55, 15]);
  assert.deepEqual(partsById.get("PART-X-RATCHET-7-55").stats, [6, 14, 10]);
  assert.deepEqual(partsById.get("PART-X-BIT-OP").modes.map((mode) => mode.stats), [
    [20, 50, 50],
    [50, 35, 10]
  ]);
});

test("CX 분할 부품 44종은 공식 설명만 기록하고 개별 스탯을 만들지 않는다", () => {
  for (const id of xJapanPartDetailSplitIds) {
    const part = partsById.get(id);
    assert.ok(part, `${id}가 존재해야 합니다.`);
    assert.ok(part.desc?.endsWith("."), `${id} 설명은 마침표로 끝나야 합니다.`);
    assert.deepEqual(part.stats, [], `${id}에 조립 블레이드 스탯을 배분하면 안 됩니다.`);
  }

  assert.match(partsById.get("PART-X-BLADE-LOCK-CHIP-VALKYRIE").desc, /메탈/);
  assert.match(partsById.get("PART-X-BLADE-OVER-BLADE-GUARD").desc, /카운터/);
});

test("공식 제품 상세 연결이 없는 3종은 보강 대상에서 제외한다", () => {
  for (const id of xJapanPartDetailExcludedIds) {
    assert.equal(Object.hasOwn(xJapanPartDetails, id), false);
    const part = partsById.get(id);
    assert.ok(part, `${id}가 존재해야 합니다.`);
    assert.equal(part.desc, "");
    assert.deepEqual(part.stats, []);
  }
});

test("일본 공식 설명에서 오역되거나 누락된 7개 문구를 바로잡는다", () => {
  for (const [id, desc] of Object.entries(correctedDescriptions)) {
    assert.equal(partsById.get(id)?.desc, desc, `${id} 번역이 공식 상세 의미와 일치해야 합니다.`);
  }

  const serializedDetails = JSON.stringify(xJapanPartDetails);
  for (const staleText of ["세로 모서리", "연동 날", "10개 기어", "끝에서 기어를 제어", "12개의 수직 날"]) {
    assert.equal(serializedDetails.includes(staleText), false, `${staleText} 오역이 남으면 안 됩니다.`);
  }
});

test("동일 형상의 컬래버 블레이드 12개는 기존 한국 공식 설명을 공유한다", () => {
  for (const [collaborationId, sourceId] of Object.entries(collaborationDescriptionSources)) {
    assert.equal(
      partsById.get(collaborationId)?.desc,
      partsById.get(sourceId)?.desc,
      `${collaborationId} 설명은 ${sourceId} 문구와 일치해야 합니다.`
    );
  }
});

test("신규 래칫과 비트 8개의 한국어 용어와 문체를 통일한다", () => {
  for (const [id, desc] of Object.entries(styleAlignedDescriptions)) {
    assert.equal(partsById.get(id)?.desc, desc, `${id} 문체가 기존 한국어 설명과 일치해야 합니다.`);
  }

  for (const id of ["PART-X-RATCHET-1-50", "PART-X-RATCHET-7-55", "PART-X-RATCHET-0-60", "PART-X-RATCHET-9-65", "PART-X-RATCHET-8-70"]) {
    assert.doesNotMatch(partsById.get(id).desc, /설정|버스트 저항/);
  }
  assert.doesNotMatch(partsById.get("PART-X-BIT-DS").desc, /버스트 저항/);
  assert.equal(partsById.get("PART-X-BIT-DS").extraStats.some((stat) => stat.name === "버스트 저항"), true);
});

test("생성된 X 검색 레코드에 새 한국어 설명을 포함한다", () => {
  const { search } = JSON.parse(readFileSync(new URL("../data/runtime/search/x.json", import.meta.url), "utf8"));
  const compactEntry = search.find((entry) => entry[2] === "PART-X-BLADE-ROCK-LEONE");
  const decoded = decodeSearchEntry(compactEntry);

  assert.equal(decoded.item.desc, "사다리꼴 형태의 6개 날로 상대의 공격을 흘려보내면서 카운터를 가한다.");
});
