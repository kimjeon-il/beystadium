import assert from "node:assert/strict";
import test from "node:test";
const runner = await import("../scripts/run-checks.mjs").catch(() => ({}));

test("check runner reports every independent check after an earlier failure", async () => {
  assert.equal(typeof runner.runCheckGroups, "function", "aggregate check runner is missing");
  const visited = [];
  const result = await runner.runCheckGroups({ structure: ["first", "second"], data: ["third"] }, {
    run: async name => { visited.push(name); return name === "first" ? 1 : 0; }, report: () => {}
  });
  assert.deepEqual(visited, ["first", "second", "third"]);
  assert.equal(result.failed, true);
});

test("visual review warnings remain visible while required failures still fail", async () => {
  assert.equal(typeof runner.runCheckGroups, "function", "aggregate check runner is missing");
  const result = await runner.runCheckGroups({ behavior: ["core"], visual: ["design"] }, {
    run: async name => name === "design" ? 1 : 0, report: () => {}, advisory: ["visual"]
  });
  assert.equal(result.failed, false);
  assert.equal(result.results.find(entry => entry.group === "visual").code, 1);
  const failure = await runner.runCheckGroups({ behavior: ["core"] }, { run: async () => 1, report: () => {}, advisory: ["visual"] });
  assert.equal(failure.failed, true);
});
