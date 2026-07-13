import { access, readFile, readdir } from "node:fs/promises";
import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const fromRoot = file => resolve(root, file);
const HOME_TEXT_FILES = [
  "index.html",
  "styles/base.css",
  "favicon.svg",
  "src/bootstrap.js",
  "src/data-store.js",
  "data/runtime/index.json"
];
const HOME_TEXT_LIMIT = 120_000;
const CSS_IMPORTANT_LIMIT = 80;
const SOURCE_LINE_LIMIT = 1_000;
const ROUTER_LINE_LIMIT = 600;
const FORBIDDEN_MONOLITHS = [
  "src/app-runtime.js",
  "src/catalog-core.js",
  "src/route-core.js",
  "styles.css",
  "scripts/build-app-runtime.mjs"
];

const byteSize = async file => (await readFile(fromRoot(file))).byteLength;
const exists = async file => {
  try {
    await access(fromRoot(file));
    return true;
  } catch {
    return false;
  }
};
const sourceLines = text => text.split(/\r?\n/).length;
const stripQuery = value => String(value || "").split("?")[0].split("#")[0];
const projectPath = value => stripQuery(value).replace(/^\.\//, "");

const indexHtml = await readFile(fromRoot("index.html"), "utf8");
const importMapMatch = indexHtml.match(/<script\s+type="importmap">([\s\S]*?)<\/script>/i);
if (!importMapMatch) throw new Error("index.html import map is missing.");
const importMap = JSON.parse(importMapMatch[1]).imports || {};
for (const [alias, target] of Object.entries(importMap)) {
  const file = projectPath(target);
  if (!(await exists(file))) throw new Error(`Import-map target is missing: ${alias} -> ${file}`);
}

const styleLoaderUrl = `${pathToFileURL(fromRoot("src/style-loader.js")).href}?audit=${Date.now()}`;
const { routeStyleManifest, styleFiles } = await import(styleLoaderUrl);
const stylesheetFiles = ["styles/base.css", ...Object.values(styleFiles).map(projectPath)];
for (const file of stylesheetFiles) {
  if (!(await exists(file))) throw new Error(`Style manifest target is missing: ${file}`);
}
const styleKeys = new Set(Object.keys(styleFiles));
for (const [route, keys] of Object.entries(routeStyleManifest)) {
  for (const key of keys) {
    if (!styleKeys.has(key)) throw new Error(`Unknown style key in route manifest: ${route} -> ${key}`);
  }
}
const expectedLayerOrder = "@layer base, collection, table, release, anime, catalog, search, modal;";
const baseStylesheet = await readFile(fromRoot("styles/base.css"), "utf8");
if (!baseStylesheet.startsWith(expectedLayerOrder)) throw new Error("Global CSS layer order is missing or changed.");
for (const [key, target] of Object.entries(styleFiles)) {
  const stylesheet = await readFile(fromRoot(projectPath(target)), "utf8");
  if (!stylesheet.includes(`@layer ${key} {`)) throw new Error(`Stylesheet is missing its layer wrapper: ${key}`);
}

const sizes = await Promise.all(HOME_TEXT_FILES.map(async file => [file, await byteSize(file)]));
const total = sizes.reduce((sum, [, size]) => sum + size, 0);
if (total > HOME_TEXT_LIMIT) {
  throw new Error(`Home text payload is ${total} bytes; expected <= ${HOME_TEXT_LIMIT}.`);
}

let importantCount = 0;
for (const file of stylesheetFiles) {
  const stylesheet = await readFile(fromRoot(file), "utf8");
  importantCount += stylesheet.match(/!important\b/g)?.length ?? 0;
}
if (importantCount > CSS_IMPORTANT_LIMIT) {
  throw new Error(`Stylesheets contain ${importantCount} !important declarations; expected <= ${CSS_IMPORTANT_LIMIT}.`);
}

const sourceFiles = (await readdir(fromRoot("src"), { withFileTypes: true }))
  .filter(entry => entry.isFile() && extname(entry.name) === ".js")
  .map(entry => `src/${entry.name}`);
for (const file of sourceFiles) {
  const lineCount = sourceLines(await readFile(fromRoot(file), "utf8"));
  const limit = file === "src/router.js" ? ROUTER_LINE_LIMIT : SOURCE_LINE_LIMIT;
  if (lineCount > limit) throw new Error(`${file} has ${lineCount} lines; expected <= ${limit}.`);
}
const routeParserSource = await readFile(fromRoot("src/route-parser.js"), "utf8");
if (/^\s*import\s/m.test(routeParserSource)) {
  throw new Error("src/route-parser.js must remain a pure module without imports.");
}

const importPattern = /\bimport\s+(?:[^"']*?\s+from\s+)?["']([^"']+)["']/g;
const sourceSet = new Set(sourceFiles.map(file => fromRoot(file)));
const resolveImport = (specifier, importer) => {
  const mapped = importMap[specifier];
  if (mapped) return fromRoot(projectPath(mapped));
  if (!specifier.startsWith(".")) return null;
  return resolve(dirname(importer), stripQuery(specifier));
};
const graph = new Map();
for (const file of sourceFiles) {
  const absolute = fromRoot(file);
  const source = await readFile(absolute, "utf8");
  const dependencies = [];
  for (const match of source.matchAll(importPattern)) {
    const dependency = resolveImport(match[1], absolute);
    if (dependency && sourceSet.has(dependency)) dependencies.push(dependency);
  }
  graph.set(absolute, dependencies);
}
const visiting = new Set();
const visited = new Set();
const visit = (file, stack = []) => {
  if (visiting.has(file)) {
    const start = stack.indexOf(file);
    const cycle = [...stack.slice(start), file].map(entry => relative(root, entry)).join(" -> ");
    throw new Error(`Static import cycle detected: ${cycle}`);
  }
  if (visited.has(file)) return;
  visiting.add(file);
  for (const dependency of graph.get(file) || []) visit(dependency, [...stack, file]);
  visiting.delete(file);
  visited.add(file);
};
for (const file of graph.keys()) visit(file);

for (const file of FORBIDDEN_MONOLITHS) {
  if (await exists(file)) throw new Error(`Forbidden monolith must not exist: ${file}`);
}

console.log(
  `App audit OK: ${total} initial text bytes across ${sizes.length} files; `
  + `${sourceFiles.length} source modules; 0 static import cycles; `
  + `${importantCount} !important declarations.`
);
