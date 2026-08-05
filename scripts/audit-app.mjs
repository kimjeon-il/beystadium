import { Buffer } from "node:buffer";
import { access, readFile, readdir } from "node:fs/promises";
import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const fromRoot = file => resolve(root, file);
const HOME_TEXT_FILES = [
  "index.html",
  "styles/base.css",
  "styles/mobile.css",
  "favicon.svg",
  "src/bootstrap.js",
  "src/data-store.js",
  "data/runtime/index.json"
];
const HOME_TEXT_LIMIT = 140_000;
const BASE_CSS_LIMIT = 60_000;
const CSS_IMPORTANT_LIMIT = 80;
const SOURCE_LINE_LIMIT = 1_000;
const ROUTER_LINE_LIMIT = 600;
const FORBIDDEN_HIGHLIGHT_PATTERN = /--ui-selection-|#(?:0f6cbd|62abf5)\b/i;
const FORBIDDEN_MONOLITHS = [
  "src/app-runtime.js",
  "src/catalog-core.js",
  "src/route-core.js",
  "src/view-controller.js",
  "styles.css",
  "scripts/build-app-runtime.mjs"
];
const MOBILE_STYLE_VERSION = "20260804-mobile-modal-scrollbar-centering";
const MOBILE_OVERHAUL_IMPORT_VERSION = "20260731-mobile-highlight-fix";
const MOBILE_RELEASE_IMPORT_VERSION = "20260804-mobile-release-badge-adjacent-stable";
const MOBILE_SHELL_IMPORT_VERSION = "20260804-topbar-search-surface-parity";
const X_DATA_IMPORT_VERSION = "20260805-x-kr-august-releases";
const MOBILE_UPDATED_IMPORT_VERSIONS = {
  "#app/data-store": X_DATA_IMPORT_VERSION,
  "#app/style-loader": MOBILE_STYLE_VERSION,
  "#app/modal-controller": MOBILE_STYLE_VERSION,
  "#app/shell-controller": MOBILE_SHELL_IMPORT_VERSION,
  "#app/release-page": MOBILE_RELEASE_IMPORT_VERSION
};
const MOBILE_OVERHAUL_IMPORTS = {
  "#app/data-store": "src/data-store.js",
  "#app/ui-core": "src/ui-core.js",
  "#app/release-core": "src/release-core.js",
  "#app/search-engine": "src/search-engine.js",
  "#app/catalog-model": "src/catalog-model.js",
  "#app/collection-view": "src/collection-view.js",
  "#app/search-feature": "src/search-feature.js",
  "#app/image-preview": "src/image-preview.js",
  "#app/style-loader": "src/style-loader.js",
  "#app/modal-controller": "src/modal-controller.js",
  "#app/shell-controller": "src/shell-controller.js",
  "#app/release-page": "src/release-page.js",
  "#app/anime": "src/anime.js"
};

const byteSize = async file => Buffer.byteLength(
  (await readFile(fromRoot(file), "utf8")).replace(/\r\n/g, "\n")
);
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
if (!indexHtml.includes(`./styles/base.css?v=${MOBILE_STYLE_VERSION}`)) {
  throw new Error("Mobile overhaul cache version is missing: styles/base.css");
}
if (!indexHtml.includes(`./styles/mobile.css?v=${MOBILE_STYLE_VERSION}`)) {
  throw new Error("Mobile control fix cache version is missing: styles/mobile.css");
}
for (const [alias, file] of Object.entries(MOBILE_OVERHAUL_IMPORTS)) {
  const expectedVersion = MOBILE_UPDATED_IMPORT_VERSIONS[alias] || MOBILE_OVERHAUL_IMPORT_VERSION;
  if (importMap[alias] !== `./${file}?v=${expectedVersion}`) {
    throw new Error(`Mobile overhaul import cache version is missing: ${alias}`);
  }
}

const styleLoaderUrl = `${pathToFileURL(fromRoot("src/style-loader.js")).href}?audit=${Date.now()}`;
const { routeStyleManifest, styleFiles } = await import(styleLoaderUrl);
const styleLoaderSource = await readFile(fromRoot("src/style-loader.js"), "utf8");
if (!styleLoaderSource.includes(`const styleVersion = "${MOBILE_STYLE_VERSION}";`)) {
  throw new Error("Route stylesheet cache version is missing or inconsistent.");
}
const stylesheetFiles = ["styles/base.css", "styles/mobile.css", ...Object.values(styleFiles).map(projectPath)];
for (const file of stylesheetFiles) {
  if (!(await exists(file))) throw new Error(`Style manifest target is missing: ${file}`);
}
const styleKeys = new Set(Object.keys(styleFiles));
for (const [route, keys] of Object.entries(routeStyleManifest)) {
  for (const key of keys) {
    if (!styleKeys.has(key)) throw new Error(`Unknown style key in route manifest: ${route} -> ${key}`);
  }
}
const expectedLayerOrder = "@layer base, page, collection, table, release, anime, catalog, search, modal, mobile;";
const baseStylesheet = await readFile(fromRoot("styles/base.css"), "utf8");
if (!baseStylesheet.startsWith(expectedLayerOrder)) throw new Error("Global CSS layer order is missing or changed.");
for (const [key, target] of Object.entries(styleFiles)) {
  const stylesheet = await readFile(fromRoot(projectPath(target)), "utf8");
  if (!stylesheet.includes(`@layer ${key} {`)) throw new Error(`Stylesheet is missing its layer wrapper: ${key}`);
}
for (const file of stylesheetFiles) {
  const stylesheet = await readFile(fromRoot(file), "utf8");
  if (FORBIDDEN_HIGHLIGHT_PATTERN.test(stylesheet)) throw new Error(`Stylesheet contains a retired Fluent selection color or token: ${file}`);
}

const unscopedHoverSelectors = [];
for (const file of stylesheetFiles) {
  const stylesheet = (await readFile(fromRoot(file), "utf8")).replace(/\/\*[\s\S]*?\*\//g, "");
  const stack = [];
  let cursor = 0;
  for (let index = 0; index < stylesheet.length; index += 1) {
    const character = stylesheet[index];
    if (character === "{") {
      const header = stylesheet.slice(cursor, index).trim();
      const parentAllowsHover = stack.at(-1)?.allowsHover ?? false;
      const allowsHover = parentAllowsHover || (
        header.startsWith("@media")
        && header.includes("(hover: hover)")
        && header.includes("(pointer: fine)")
      );
      const isExemptBrowserPseudo = header.includes("::-webkit-scrollbar-thumb:hover")
        || header.includes(":-webkit-autofill:hover");
      if (header.includes(":hover") && !allowsHover && !isExemptBrowserPseudo) {
        unscopedHoverSelectors.push(`${file}: ${header.replace(/\s+/g, " ")}`);
      }
      stack.push({ allowsHover });
      cursor = index + 1;
    } else if (character === "}") {
      stack.pop();
      cursor = index + 1;
    }
  }
}
if (unscopedHoverSelectors.length) {
  throw new Error(`Touch-visible hover selectors must be fine-pointer scoped:\n${unscopedHoverSelectors.join("\n")}`);
}

const sizes = await Promise.all(HOME_TEXT_FILES.map(async file => [file, await byteSize(file)]));
const total = sizes.reduce((sum, [, size]) => sum + size, 0);
if (total > HOME_TEXT_LIMIT) {
  throw new Error(`Home text payload is ${total} bytes; expected <= ${HOME_TEXT_LIMIT}.`);
}
const baseCssSize = await byteSize("styles/base.css");
if (baseCssSize > BASE_CSS_LIMIT) {
  throw new Error(`Base stylesheet is ${baseCssSize} bytes; expected <= ${BASE_CSS_LIMIT}.`);
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

const importPattern = /\b(?:import|export)\s+(?:[^"']*?\s+from\s+)?["']([^"']+)["']/g;
const dynamicImportPattern = /\bimport\s*\(\s*["']([^"']+)["']\s*\)/g;
const sourceSet = new Set(sourceFiles.map(file => fromRoot(file)));
const resolveImport = (specifier, importer) => {
  const mapped = importMap[specifier];
  if (mapped) return fromRoot(projectPath(mapped));
  if (!specifier.startsWith(".")) return null;
  return resolve(dirname(importer), stripQuery(specifier));
};
const graph = new Map();
const runtimeGraph = new Map();
const usedImportAliases = new Set();
for (const file of sourceFiles) {
  const absolute = fromRoot(file);
  const source = await readFile(absolute, "utf8");
  const dependencies = [];
  for (const match of source.matchAll(importPattern)) {
    if (importMap[match[1]]) usedImportAliases.add(match[1]);
    const dependency = resolveImport(match[1], absolute);
    if (dependency && sourceSet.has(dependency)) dependencies.push(dependency);
  }
  graph.set(absolute, dependencies);
  const runtimeDependencies = [...dependencies];
  for (const match of source.matchAll(dynamicImportPattern)) {
    if (importMap[match[1]]) usedImportAliases.add(match[1]);
    const dependency = resolveImport(match[1], absolute);
    if (dependency && sourceSet.has(dependency)) runtimeDependencies.push(dependency);
  }
  runtimeGraph.set(absolute, [...new Set(runtimeDependencies)]);
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

const runtimeEntry = fromRoot("src/bootstrap.js");
const reachable = new Set();
const pending = [runtimeEntry];
while (pending.length) {
  const file = pending.pop();
  if (reachable.has(file)) continue;
  reachable.add(file);
  pending.push(...(runtimeGraph.get(file) || []));
}
const unreachable = sourceFiles.filter(file => !reachable.has(fromRoot(file)));
if (unreachable.length) throw new Error(`Unreachable source modules: ${unreachable.join(", ")}`);
const unusedAliases = Object.keys(importMap).filter(alias => !usedImportAliases.has(alias));
if (unusedAliases.length) throw new Error(`Unused import-map aliases: ${unusedAliases.join(", ")}`);

for (const file of FORBIDDEN_MONOLITHS) {
  if (await exists(file)) throw new Error(`Forbidden monolith must not exist: ${file}`);
}

console.log(
  `App audit OK: ${total} initial text bytes across ${sizes.length} files; `
  + `${sourceFiles.length} reachable source modules; 0 static import cycles; `
  + `${importantCount} !important declarations.`
);
