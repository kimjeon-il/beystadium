import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { checkGeneratedData } from "../scripts/build-data-index.mjs";

test("generated data accepts Windows line endings through the actual comparison", async () => {
  let reads = 0;
  await checkGeneratedData({ read: async url => {
    reads += 1;
    return (await readFile(url, "utf8")).replace(/\r?\n/g, "\r\n");
  } });
  assert.ok(reads > 0, "the comparison must use the supplied reader");
});

test("generated data rejects a changed value instead of rebuilding it", async () => {
  await assert.rejects(checkGeneratedData({ read: async url => {
    const text = await readFile(url, "utf8");
    if (!url.pathname.endsWith("/anime.json")) return text;
    const data = JSON.parse(text);
    data.title = "unexpected title";
    return JSON.stringify(data) + "\n";
  } }), /Generated data is stale/);
});
