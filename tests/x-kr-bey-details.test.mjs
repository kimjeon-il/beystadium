import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

import { beyItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { xKoreaBeyDescriptions } from "../data/source/x-kr-bey-details.mjs";
import { decodeSearchEntry } from "../src/search-data-decoder.js";

const beysById = new Map(beyItems.map((bey) => [bey.id, bey]));
const productsById = new Map(productItems.map((product) => [product.id, product]));
const released = (release) => release && release.status !== "unreleased" && Boolean(
  release.no || release.name || release.releaseDate || release.release
);

const koreanReleaseProducts = Object.freeze({
  "PRODUCT-X-UX-16": ["UX-16", "랜덤부스터 클락미라지 셀렉트", "랜덤부스터"],
  "PRODUCT-X-CX-10": ["CX-10", "울프 헌트F 0-60DB", "부스터"],
  "PRODUCT-X-CX-11": ["CX-11", "엠퍼러 마이트 덱 세트", "세트"],
  "PRODUCT-X-UX-17": ["UX-17", "메테오 드래군 3-70J", "스타터"],
  "PRODUCT-X-UX-18": ["UX-18", "랜덤 부스터 Vol.08", "랜덤부스터"],
  "PRODUCT-X-CX-12": ["CX-12", "피닉스 플레어Z 9-80WW", "부스터"],
  "PRODUCT-X-CX-13": ["CX-13", "바하무트 블리츠BK 1-50I", "스타터"],
  "PRODUCT-X-CX-14": ["CX-14", "나이트 포트리스GV 8-70UN", "스타터"],
  "PRODUCT-X-CX-15": ["CX-15", "라그나 레이지FE 4-55Y", "부스터"],
  "PRODUCT-X-CX-16": ["CX-16", "스타트 대시 세트 C", "세트"],
  "PRODUCT-X-BX-00-STORM-SPRIGGAN-2-70M": ["BX-00", "스톰 스프리건 2-70M", "스타터"]
});

const koreanProductPrices = Object.freeze({
  "PRODUCT-X-UX-16": "15900",
  "PRODUCT-X-CX-12": "15900",
  "PRODUCT-X-CX-13": "19900",
  "PRODUCT-X-CX-15": "15900"
});

test("한국 공식 성능 설명 12건을 정확한 X 베이에 적용한다", () => {
  assert.equal(Object.keys(xKoreaBeyDescriptions).length, 12);

  for (const [id, desc] of Object.entries(xKoreaBeyDescriptions)) {
    assert.equal(beysById.get(id)?.desc, desc, `${id} 설명이 공식 한국 문구와 일치해야 합니다.`);
    assert.match(desc, /[.!?]$/, `${id} 설명에 종결부호가 필요합니다.`);
    assert.doesNotMatch(desc, /#|GO SHOOT|출시|판매/, `${id} 설명에 홍보 문구가 포함되면 안 됩니다.`);
  }

  assert.equal(
    beysById.get("BEY-X-CX-13-BAHAMUT-BLITZ-BK-1-50I").desc,
    beysById.get("BEY-X-CX-16-BAHAMUT-BLITZ-BK-1-50I").desc
  );
});

test("국내 출시 제품 11건은 확인된 가격과 일본판 구성 순서를 유지한다", () => {
  assert.equal(Object.keys(koreanReleaseProducts).length, 11);

  for (const [id, [no, name, kind]] of Object.entries(koreanReleaseProducts)) {
    const product = productsById.get(id);
    assert.ok(product, `${id}가 존재해야 합니다.`);
    const { kr, jp } = product.releases;
    assert.equal(released(kr), true, `${id}가 한국 발매 제품이어야 합니다.`);
    assert.deepEqual([kr.no, kr.name, kr.kind], [no, name, kind]);
    assert.equal(kr.sale, "일반 판매");
    assert.equal(kr.releaseDate, "");
    assert.equal(kr.price, koreanProductPrices[id] || "");
    assert.deepEqual(
      kr.composition.map(({ target, quantity }) => [target, quantity]),
      jp.composition.map(({ target, quantity }) => [target, quantity]),
      `${id} 한국판 구성 대상·수량·순서는 일본판과 같아야 합니다.`
    );
  }

  assert.deepEqual(
    productsById.get("PRODUCT-X-CX-11").releases.kr.composition.map((entry) => entry.target),
    [
      "BEY-X-CX-11-EMPEROR-MIGHT-H-OP",
      "BEY-X-CX-11-SHARK-GILL-5-60FB",
      "BEY-X-CX-11-GOLEM-ROCK-M-85HN"
    ]
  );
});

test("국내 발매 X 베이 중 공식 설명이 없는 항목은 빈 설명을 유지한다", () => {
  const releasedProducts = productItems.filter((product) => product.series === "x" && released(product.releases?.kr));
  const releasedBeyIds = new Set(releasedProducts.flatMap((product) => [
    ...(product.releases.kr.composition || []).map((entry) => entry.target),
    ...(product.lineupPool || [])
  ].filter((id) => id.startsWith("BEY-X-"))));
  const describedIds = [...releasedBeyIds].filter((id) => beysById.get(id)?.desc);

  assert.equal(releasedProducts.length, 94);
  assert.equal(releasedBeyIds.size, 138);
  assert.deepEqual(describedIds.sort(), Object.keys(xKoreaBeyDescriptions).sort());

  for (const slot of ["02", "03", "04", "05", "06"]) {
    const id = productsById.get("PRODUCT-X-UX-18").lineupPool.find((candidate) => candidate.includes(`UX-18-${slot}-`));
    assert.equal(beysById.get(id)?.desc, "", `${id} 설명을 추정해 채우면 안 됩니다.`);
  }
});

test("7월 21일 출시 예정 제품은 현재 한국 미출시 상태를 유지한다", () => {
  for (const id of ["PRODUCT-X-CX-17", "PRODUCT-X-UX-19", "PRODUCT-X-BX-49"]) {
    assert.deepEqual(productsById.get(id)?.releases.kr, { status: "unreleased" }, `${id}가 조기 출시 처리되면 안 됩니다.`);
  }
});

test("생성된 X 검색 레코드에 한국 공식 베이 설명을 포함한다", () => {
  const { search } = JSON.parse(readFileSync(new URL("../data/runtime/search/x.json", import.meta.url), "utf8"));
  const compactEntry = search.find((entry) => entry[2] === "BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN");
  const decoded = decodeSearchEntry(compactEntry);

  assert.equal(decoded.item.desc, xKoreaBeyDescriptions["BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN"]);
});
