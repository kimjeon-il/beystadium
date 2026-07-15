import assert from "node:assert/strict";
import test from "node:test";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { expectedXBeyId, xBeyCombo, xBeyIdentity, xBeyQualifier } from "../scripts/x-bey-id.mjs";

const partsById = new Map(partItems.map(item => [item.id, item]));
const xBeys = beyItems.filter(item => item.series === "x");
const byLegacyId = new Map(xBeys.flatMap(item => (item.legacyIds || []).map(id => [id, item])));

test("X Bey IDs include product number, mounted identity, and combination", () => {
  const cases = [
    ["BEY-X-BX-01", "BEY-X-BX-01-DRAN-SWORD-3-60F"],
    ["BEY-X-CX-01", "BEY-X-CX-01-DRAN-BRAVE-S-6-60V"],
    ["BEY-X-CX-14", "BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN"],
    ["BEY-X-UX-19", "BEY-X-UX-19-BULLET-GRIFFON-H"],
    ["BEY-X-BX-00-JP-2", "BEY-X-BX-00-JP-2-DRANZER-SPIRAL-3-80T"]
  ];

  for (const [legacyId, expectedId] of cases) {
    const item = byLegacyId.get(legacyId);
    assert.ok(item, `Missing migrated item for ${legacyId}`);
    assert.equal(expectedXBeyId(item, partsById), expectedId);
    assert.equal(item.id, expectedId);
  }
});

test("X Bey ID component helpers preserve custom-line and qualifier rules", () => {
  const custom = byLegacyId.get("BEY-X-CX-14");
  assert.equal(xBeyIdentity(custom, partsById), "KNIGHT-FORTRESS-GV");
  assert.equal(xBeyCombo(custom, partsById), "8-70UN");

  const limited = byLegacyId.get("BEY-X-BX-00-JP-2");
  assert.equal(xBeyQualifier(limited), "JP-2");

  const asia = xBeys.find(item => item.id.startsWith("BEY-X-UX-00-ASIA-DRAN-SWORD"));
  assert.ok(asia);
  assert.equal(xBeyQualifier(asia), "ASIA");
  assert.equal(expectedXBeyId(asia, partsById), asia.id);
});

test("all X Bey IDs follow the canonical rule without collisions", () => {
  const expectedIds = xBeys.map(item => expectedXBeyId(item, partsById));
  assert.deepEqual(xBeys.map(item => item.id), expectedIds);
  assert.equal(new Set(expectedIds).size, xBeys.length);
  assert.equal(xBeys.flatMap(item => item.legacyIds || []).length, 152);
});
