import { access, readFile } from "node:fs/promises";

const HOME_TEXT_FILES = [
  "index.html",
  "styles.css",
  "favicon.svg",
  "src/bootstrap.js",
  "src/data-store.js",
  "data/runtime/index.json"
];
const HOME_TEXT_LIMIT = 250_000;
const CSS_IMPORTANT_LIMIT = 80;
const FORBIDDEN_GENERATED_RUNTIME = [
  "src/app-runtime.js",
  "scripts/build-app-runtime.mjs"
];

const byteSize = async file => (await readFile(file)).byteLength;
const sizes = await Promise.all(HOME_TEXT_FILES.map(async file => [file, await byteSize(file)]));
const total = sizes.reduce((sum, [, size]) => sum + size, 0);

if (total > HOME_TEXT_LIMIT) {
  throw new Error(`Home text payload is ${total} bytes; expected <= ${HOME_TEXT_LIMIT}.`);
}

const stylesheet = await readFile("styles.css", "utf8");
const importantCount = stylesheet.match(/!important\b/g)?.length ?? 0;
if (importantCount > CSS_IMPORTANT_LIMIT) {
  throw new Error(`styles.css contains ${importantCount} !important declarations; expected <= ${CSS_IMPORTANT_LIMIT}.`);
}

for (const file of FORBIDDEN_GENERATED_RUNTIME) {
  try {
    await access(file);
    throw new Error(`Generated runtime must not exist: ${file}`);
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
}

console.log(
  `App audit OK: ${total} initial text bytes across ${sizes.length} files; `
  + `${importantCount} !important declarations.`
);
