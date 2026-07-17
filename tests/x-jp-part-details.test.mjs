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

test("생성된 X 검색 레코드에 새 한국어 설명을 포함한다", () => {
  const { search } = JSON.parse(readFileSync(new URL("../data/runtime/search/x.json", import.meta.url), "utf8"));
  const compactEntry = search.find((entry) => entry[2] === "PART-X-BLADE-ROCK-LEONE");
  const decoded = decodeSearchEntry(compactEntry);

  assert.equal(decoded.item.desc, "사다리꼴 형태의 6개 날로 상대의 공격을 흘려보내면서 카운터를 가한다.");
});
