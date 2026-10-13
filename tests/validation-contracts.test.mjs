import assert from "node:assert/strict";
import test from "node:test";

const contracts = await import("../scripts/validation-contracts.mjs").catch(() => ({}));

test("coverage accepts new mapped or explicitly unavailable entries without fixed totals", () => {
  assert.equal(typeof contracts.assertCoverage, "function", "coverage contract is missing");
  contracts.assertCoverage(["old", "new", "pending"], ["old", "new"], ["pending"], "images");
});

test("coverage rejects empty, missing, duplicate, overlapping and unexpected entries", () => {
  assert.equal(typeof contracts.assertCoverage, "function", "coverage contract is missing");
  for (const [expected, mapped, unavailable] of [
    [[], [], []], [["a"], [], []], [["a", "a"], ["a"], []],
    [["a"], ["a", "a"], []], [["a"], ["a"], ["a"]],
    [["a"], ["a", "extra"], []], [[""], [""], []]
  ]) assert.throws(() => contracts.assertCoverage(expected, mapped, unavailable, "images"));
});
