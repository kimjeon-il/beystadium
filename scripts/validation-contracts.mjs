import assert from "node:assert/strict";

// Counts may grow. The partition must still cover every required key exactly once.
export function assertCoverage(expected, mapped, unavailable = [], label = "coverage") {
  assert.ok(expected.length > 0, `${label}: expected entries must not be empty`);
  for (const [name, keys] of [["expected", expected], ["mapped", mapped], ["unavailable", unavailable]]) {
    assert.ok(keys.every(key => typeof key === "string" && key.trim()), `${label}: invalid ${name} key`);
    assert.equal(new Set(keys).size, keys.length, `${label}: duplicate ${name} keys`);
  }
  const accounted = [...mapped, ...unavailable];
  assert.equal(new Set(accounted).size, accounted.length, `${label}: mapped/unavailable overlap`);
  assert.deepEqual(new Set(accounted), new Set(expected), `${label}: missing or unexpected entries`);
}
