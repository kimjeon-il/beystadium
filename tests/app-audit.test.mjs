import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";

const audit = await import("../scripts/app-audit-model.mjs").catch(() => ({}));

test("import discovery follows syntax instead of comments, quotes or formatting", () => {
  assert.equal(typeof audit.moduleImports, "function", "syntax-based discovery is missing");
  assert.deepEqual(audit.moduleImports(`
    // import './retired.js';
    const text = "import './also-retired.js'";
    import { value } from './nested/current.js';
    export { other } from "#app/other";
    const load = () => import(\`./lazy.js\`);
  `), { static: ["./nested/current.js", "#app/other"], dynamic: ["./lazy.js"] });
});

test("HTML resource discovery accepts reordered attributes and ignores retired markup", () => {
  assert.equal(typeof audit.htmlResources, "function", "HTML discovery is missing");
  const resources = audit.htmlResources(`<!-- <script src='old.js'></script> -->
    <script src='src/new.js?v=next' type = 'module'></script>
    <link data-style-key='base' href='styles/renamed.css?v=next' rel='stylesheet'>`);
  assert.deepEqual(resources.map(entry => entry.src || entry.href), ["src/new.js?v=next", "styles/renamed.css?v=next"]);
});

test("import-map discovery accepts attribute and quote changes while ignoring commented maps", () => {
  assert.equal(typeof audit.readImportMap, "function", "format-independent import-map reader is missing");
  const html = `<!-- <script type="importmap">{"imports":{"retired":"old.js"}}</script> -->
    <script data-current='yes' type = 'importmap'>{"imports":{"#app/current":"./new.js?v=next"}}</script>`;
  assert.deepEqual(audit.readImportMap(html), { "#app/current": "./new.js?v=next" });
  assert.throws(() => audit.readImportMap("<script>const value = 1;</script>"), /Import map is missing/);
});

test("source discovery includes nested modules and rejects missing imported files", async () => {
  assert.equal(typeof audit.sourceModules, "function", "recursive discovery is missing");
  const directory = await mkdtemp(join(tmpdir(), "beystadium-audit-"));
  try {
    await mkdir(join(directory, "nested"));
    await writeFile(join(directory, "entry.js"), "import './nested/child.js';");
    await writeFile(join(directory, "nested/child.js"), "export const value = 1;");
    assert.equal((await audit.sourceModules(directory)).length, 2);
    await assert.rejects(audit.requireModuleFile(join(directory, "missing.js")), /Missing module/);
    await audit.requireModuleFile(join(directory, "nested/child.js"));
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
