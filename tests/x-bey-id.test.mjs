import assert from "node:assert/strict";
import test from "node:test";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { expectedXBeyId, xBeyCombo, xBeyIdentity } from "../scripts/x-bey-id.mjs";

const partsById = new Map(partItems.map(item => [item.id, item]));
const xBeys = beyItems.filter(item => item.series === "x");
const byId = new Map(xBeys.map(item => [item.id, item]));

test("X Bey IDs include product number, mounted identity, and combination", () => {
  const cases = [
    "BEY-X-BX-01-DRAN-SWORD-3-60F",
    "BEY-X-CX-01-DRAN-BRAVE-S-6-60V",
    "BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN",
    "BEY-X-UX-19-BULLET-GRIFFON-H",
    "BEY-X-BX-00-DRANZER-SPIRAL-3-80T"
  ];

  for (const id of cases) {
    const item = byId.get(id);
    assert.ok(item, `Missing ${id}`);
    assert.equal(expectedXBeyId(item, partsById), id);
  }
});

test("X Bey ID component helpers preserve custom-line and English-name rules", () => {
  const custom = byId.get("BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN");
  assert.equal(xBeyIdentity(custom, partsById), "KNIGHT-FORTRESS-GV");
  assert.equal(xBeyCombo(custom, partsById), "8-70UN");

  const limited = byId.get("BEY-X-BX-00-DRANZER-SPIRAL-3-80T");
  assert.equal(xBeyIdentity(limited, partsById), "DRANZER-SPIRAL");
  assert.equal(expectedXBeyId(limited, partsById), limited.id);

  const international = byId.get("BEY-X-UX-00-DRAN-SWORD-4-80DB");
  assert.ok(international);
  assert.equal(expectedXBeyId(international, partsById), international.id);
});

test("all X Bey IDs follow the canonical rule without collisions", () => {
  const expectedIds = xBeys.map(item => expectedXBeyId(item, partsById));
  assert.deepEqual(xBeys.map(item => item.id), expectedIds);
  assert.equal(new Set(expectedIds).size, xBeys.length);
  assert.equal(xBeys.some(item => /-(?:JP-\d+|ASIA)-/.test(item.id)), false);
});

test("X Bey names separate a directly mounted Bit from the Blade name", () => {
  const directBitBeys = xBeys.filter((item) => {
    const parts = item.parts.map((partId) => partsById.get(partId));
    return parts.some((part) => part?.type === "bit")
      && !parts.some((part) => part?.type === "ratchet");
  });

  for (const bey of directBitBeys) {
    const bit = bey.parts.map((partId) => partsById.get(partId)).find((part) => part?.type === "bit");
    for (const name of [bey.name, bey.jpName].filter(Boolean)) {
      assert.ok(name.endsWith(` ${bit.name}`), `${bey.id}: ${name}`);
    }
  }

  assert.equal(byId.get("BEY-X-UX-19-BULLET-GRIFFON-H").name, "불릿그리폰 H");
  assert.deepEqual(
    [
      byId.get("BEY-X-UX-20-GLORY-VALKYRIE-LF").name,
      byId.get("BEY-X-UX-20-GLORY-VALKYRIE-LF").jpName
    ],
    ["글로리발키리 LF", "글로리왈큐레 LF"]
  );
});
