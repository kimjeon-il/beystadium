import assert from "node:assert/strict";
import test from "node:test";

import {
  compareScoredSearchResults,
  createSearchField,
  createSearchRecord,
  matchSearchRecord,
  matchesSearchText,
  prepareCatalogSearchQuery,
  prepareSearchQuery
} from "../src/search-core.js";
import { decodeSearchEntry } from "../src/search-data-decoder.js";

const advancedIndexProperties = [
  "initialWordStarts",
  "initials",
  "wordInitials",
  "compactChars",
  "imeJamoKey",
  "initialImeJamoKey",
  "imeWordKeys",
  "initialImeWordKeys"
];

const hasOwn = (value, property) => Object.hasOwn(value, property);

test("compact catalog search entries preserve every field and the searchable description", () => {
  const entry = decodeSearchEntry([
    "c", "x", "PART-X-BLADE-LOCK-CHIP-DRAN", "x", "blade", "",
    "드랜", "드란", "Dran", "", "", "CX-01", "", "attack", "right",
    "custom", "lockChip", ["크로스오버"], "CX 블레이드를 고정한다.", 7
  ]);

  assert.equal(entry.kind, "catalog-item");
  assert.equal(entry.chunk, "x");
  assert.deepEqual(entry.item, {
    id: "PART-X-BLADE-LOCK-CHIP-DRAN",
    series: "x",
    type: "blade",
    name: "드랜",
    jpName: "드란",
    en: "Dran",
    productNo: "CX-01",
    battleType: "attack",
    spin: "right",
    xLine: "custom",
    xBladeRole: "lockChip",
    searchTags: ["크로스오버"],
    desc: "CX 블레이드를 고정한다.",
    _order: 7
  });
});

test("search fields create only the indexes required by their role", () => {
  for (const role of ["primaryName", "alias"]) {
    const field = createSearchField(role, "스톰 페가시스");
    for (const property of advancedIndexProperties) assert.equal(hasOwn(field.index, property), true, `${role}.${property}`);
  }

  const category = createSearchField("category", "베이");
  for (const property of ["initialWordStarts", "initials", "wordInitials"]) {
    assert.equal(hasOwn(category.index, property), true, `category.${property}`);
  }
  for (const property of ["compactChars", "imeJamoKey", "initialImeJamoKey", "imeWordKeys", "initialImeWordKeys"]) {
    assert.equal(hasOwn(category.index, property), false, `category.${property}`);
  }

  for (const role of ["code", "attributes", "composition", "description"]) {
    const field = createSearchField(role, "BB-28 공격형 스톰 페가시스");
    for (const property of advancedIndexProperties) assert.equal(hasOwn(field.index, property), false, `${role}.${property}`);
    assert.deepEqual(Object.keys(field.index).toSorted(), ["compactLower", "isSearchTextIndex", "lower"]);
    assert.equal(field.index.compactLower, "bb28공격형스톰페가시스");
  }
});

test("search matching preserves exact, prefix, substring, spacing, hyphen, initial, jamo, and IME behavior", () => {
  const record = createSearchRecord("catalog-item", { id: "storm-pegasis" }, [
    createSearchField("primaryName", "스톰 페가시스 105RF"),
    createSearchField("alias", "Storm Pegasis"),
    createSearchField("code", "BB-28"),
    createSearchField("category", "베이"),
    createSearchField("attributes", "공격형")
  ]);

  for (const query of [
    "스톰 페가시스",
    "스톰페가시스",
    "Storm",
    "bb28",
    "ㅅㅌㅍㄱㅅㅅ",
    "스톰 페가ㅅ",
    "스톰 페가싯"
  ]) {
    assert.equal(matchSearchRecord(record, query).matched, true, query);
  }

  assert.equal(matchesSearchText("스톰 페가시스 105RF", "스톰페가시스105rf"), true);
  assert.equal(matchesSearchText("BX-01 드랜소드", "bx01"), true);
  assert.equal(matchesSearchText("스톰 페가시스", "없는 이름"), false);
});

test("comma-separated conditions must all match a record", () => {
  const record = createSearchRecord("catalog-item", { id: "storm-pegasis" }, [
    createSearchField("primaryName", "스톰 페가시스 105RF"),
    createSearchField("code", "BB-28")
  ]);

  assert.equal(matchSearchRecord(record, "스톰, BB-28").matched, true);
  assert.equal(matchSearchRecord(record, "스톰, BB-29").matched, false);
});

test("score ordering remains exact, prefix, then substring with source order as the tie breaker", () => {
  const records = [
    createSearchRecord("catalog-item", { id: "substring" }, [createSearchField("primaryName", "레드 드랜소드")], 2),
    createSearchRecord("catalog-item", { id: "prefix-later" }, [createSearchField("primaryName", "드랜소드 4-60R")], 3),
    createSearchRecord("catalog-item", { id: "exact" }, [createSearchField("primaryName", "드랜소드")], 1),
    createSearchRecord("catalog-item", { id: "prefix-earlier" }, [createSearchField("primaryName", "드랜소드 3-60F")], 0)
  ];
  const results = records
    .map(record => ({ record, ...matchSearchRecord(record, "드랜소드") }))
    .filter(result => result.matched)
    .sort(compareScoredSearchResults);

  assert.deepEqual(results.map(result => result.record.item.id), ["exact", "prefix-earlier", "prefix-later", "substring"]);
  assert.ok(results[0].score > results[1].score);
  assert.equal(results[1].score, results[2].score);
  assert.ok(results[2].score > results[3].score);
});

test("prepared query cache keys merge equivalent case but preserve ranking and condition boundaries", () => {
  const original = prepareSearchQuery("Storm");
  const equivalent = prepareSearchQuery("storm");
  assert.equal(original.raw, "Storm");
  assert.equal(equivalent.raw, "storm");
  assert.equal(original.cacheKey, equivalent.cacheKey);
  assert.equal(prepareSearchQuery("  Storm  ").cacheKey, original.cacheKey);

  assert.notEqual(prepareSearchQuery("스톰 페가시스").cacheKey, prepareSearchQuery("스톰페가시스").cacheKey);
  assert.notEqual(prepareSearchQuery("BX-01").cacheKey, prepareSearchQuery("BX01").cacheKey);
  assert.notEqual(prepareSearchQuery("스톰, 페가시스").cacheKey, prepareSearchQuery("스톰 페가시스").cacheKey);
  assert.notEqual(prepareSearchQuery("a b,c").cacheKey, prepareSearchQuery("a,b c").cacheKey);

  const catalogQuery = prepareCatalogSearchQuery("스톰 페가시스");
  assert.deepEqual(catalogQuery.terms.map(term => term.raw), ["스톰", "페가시스"]);
});
