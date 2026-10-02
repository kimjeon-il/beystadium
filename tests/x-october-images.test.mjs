import assert from "node:assert/strict";
import test from "node:test";
import { xImageMappings } from "../data/source/x-images.mjs";
import { xImageReview } from "../data/source/x-image-review.mjs";
import { xBeyPrimaryImageConfig } from "../data/source/x-bey-primary-images.mjs";

const sources = [
  ["BEY-X-BX-52-LUSTER-DRAGOON-6-60LC", "BX52_01@1.png"],
  ["BEY-X-BX-53-AERO-PEGASUS-3-70A", "BX53_04@1.png"],
  ["BEY-X-BX-53-WIZARD-ARROW-VERSION-2-0-4-80B", "BX53_05@1.png"],
  ["BEY-X-BX-53-KNIGHT-SHIELD-VERSION-2-0-3-80N", "BX53_06@1.png"],
  ["PART-X-BLADE-LUSTER-DRAGOON", "BX52_02@1.png"],
  ["PART-X-BIT-LC", "BX52_04@1.png"],
  ["PART-X-BLADE-WIZARD-ARROW-VERSION-2-0", "BX53_08@1.png"],
  ["PART-X-BLADE-KNIGHT-SHIELD-VERSION-2-0", "BX53_09@1.png"]
];
test("eight October X images retain exact official sources and reviewed processing", () => {
  for (const [id, filename] of sources) {
    const entry = xImageMappings.find(item => item.id === id);
    const review = xImageReview.find(item => item.id === id);
    assert.equal(entry.sourceUrl, `https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/${filename}`);
    assert.equal(entry.preserveSourcePixels, true);
    assert.equal(entry.segmentationModel, "u2netp");
    assert.equal(entry.alphaMatting, false);
    for (const key of ["sourceSha256", "sourceClearPoints", "sourceRestorePoints", "segmentationModel", "alphaMatting"]) {
      assert.deepEqual(review[key], entry[key]);
    }
    if (id.startsWith("BEY-")) {
      const primary = xBeyPrimaryImageConfig.selected.find(item => item.id === id);
      assert.equal(primary.sourceKind, "official-assembled-front");
      assert.equal(primary.sourceUrl, entry.sourceUrl);
      assert.equal(primary.outputSha256, review.outputSha256);
    }
  }
});
test("mask corrections retain reflective metal and clear verified physical openings only", () => {
  const byId = new Map(xImageMappings.map(entry => [entry.id, entry]));
  assert.deepEqual(byId.get(sources[2][0]).sourceClearPoints, [[290, 213], [293, 496]]);
  assert.deepEqual(byId.get(sources[3][0]).sourceClearPoints, [[299, 211], [161, 419], [414, 431]]);
  assert.deepEqual(byId.get(sources[6][0]).sourceRestorePoints, [[401, 450], [442, 400], [420, 426]]);
  assert.equal(byId.get(sources[7][0]).sourceClearPoints, undefined);
});

test("all twelve October contexts use exact individual sources, including release colors", async () => {
  const { xPartPreviewMappings } = await import("../data/source/x-part-previews.mjs");
  const { beyItems } = await import("../data/source/catalog.mjs");
  const groups = [
    [sources[0][0], ["PART-X-BLADE-LUSTER-DRAGOON", "PART-X-RATCHET-6-60", "PART-X-BIT-LC"], ["BX52_02@1.png", "BX52_03@1.png", "BX52_04@1.png"]],
    [sources[1][0], ["PART-X-BLADE-AERO-PEGASUS", "PART-X-RATCHET-3-70", "PART-X-BIT-A"], ["BX53_07@1.png", "BX53_10@1.png", "BX53_13@1.png"]],
    [sources[2][0], ["PART-X-BLADE-WIZARD-ARROW-VERSION-2-0", "PART-X-RATCHET-4-80", "PART-X-BIT-B"], ["BX53_08@1.png", "BX53_11@1.png", "BX53_14@1.png"]],
    [sources[3][0], ["PART-X-BLADE-KNIGHT-SHIELD-VERSION-2-0", "PART-X-RATCHET-3-80", "PART-X-BIT-N"], ["BX53_09@1.png", "BX53_12@1.png", "BX53_15@1.png"]]
  ];
  let reused = 0;
  for (const [beyId, partIds, filenames] of groups) {
    const bey = beyItems.find(item => item.id === beyId);
    for (const [index, partId] of partIds.entries()) {
      const entries = xPartPreviewMappings.filter(entry => entry.beyId === beyId && entry.partId === partId);
      assert.equal(entries.length, 1);
      const entry = entries[0];
      assert.equal(entry.sourceUrl, `https://beyblade.takaratomy.co.jp/beyblade-x/lineup/_image/${filenames[index]}`);
      assert.equal(entry.sourceKind, "official-individual");
      assert.equal(entry.shapeSourceSha256, entry.sourceSha256);
      assert.equal(entry.colorEvidenceSha256, entry.sourceSha256);
      assert.equal(bey.partPreviewImages[partId], entry.image);
      const representative = xImageMappings.find(item => item.id === partId);
      if (entry.image === representative.image) {
        reused += 1;
        assert.equal(entry.sourceSha256, representative.sourceSha256);
      }
    }
  }
  assert.equal(reused, 4);
  const aero = xPartPreviewMappings.find(entry => entry.beyId === sources[1][0] && entry.partId === "PART-X-BLADE-AERO-PEGASUS");
  assert.notEqual(aero.image, xImageMappings.find(entry => entry.id === aero.partId).image);
});
