import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import test from "node:test";
import { runInNewContext } from "node:vm";

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), "utf8");

test("production bootstrap no longer creates or imports preview theme controls", () => {
  for (const path of ["index.html", "src/bootstrap.js", "styles/sport-tech-preview.css", "styles/p1-layout.css"]) {
    assert.doesNotMatch(read(path), /sport-theme-switch|data-preview-mode|sport-tech-preview\.js/);
  }
  assert.equal(existsSync(new URL("../src/sport-tech-preview.js", import.meta.url)), false);
});

test("default and invalid theme URLs leave the OS color scheme in control", () => {
  const script = [...read("index.html").matchAll(/<script>([\s\S]*?)<\/script>/g)]
    .map(match => match[1]).find(source => source.includes("dataset.sportTheme"));
  assert.ok(script, "theme query bootstrap exists");
  for (const [search, expected] of [["", undefined], ["?theme=invalid", undefined], ["?theme=light", "light"], ["?theme=dark", "dark"]]) {
    const document = { documentElement: { dataset: {} } };
    runInNewContext(script, { document, window: { location: { search } }, URLSearchParams });
    assert.equal(document.documentElement.dataset.sportTheme, expected);
  }
  assert.match(read("styles/base.css"), /color-scheme:\s*light dark\s*;/);
  assert.match(read("styles/sport-tech-preview.css"), /--ui-bg:\s*light-dark\(/);
});
