import { Buffer } from "node:buffer";
import { access, readFile } from "node:fs/promises";
import { dirname, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { htmlResources, moduleImports, readImportMap, requireModuleFile, sourceModules } from "./app-audit-model.mjs";
import { searchScopeValues } from "../src/search-scopes.js";
import { HOME_TEXT_LIMIT, BASE_CSS_LIMIT, CSS_IMPORTANT_LIMIT, SOURCE_LINE_LIMIT } from "./validation-budgets.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const fromRoot = file => resolve(root, file);
const FORBIDDEN_HIGHLIGHT_PATTERN = /--ui-selection-|#(?:0f6cbd|62abf5)\b/i;

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
const importMap = readImportMap(indexHtml);
const resources = htmlResources(indexHtml);
const moduleEntries = resources.filter(entry => entry.tag === "script" && entry.type === "module");
if (!moduleEntries.length) throw new Error("No module entry point in index.html");
const baseStyle = resources.find(entry => entry["data-style-key"] === "base");
if (!baseStyle) throw new Error("Base stylesheet resource is missing");
// Preserve the existing core-text budget scope; discover its paths from declared roles.
const homeTextFiles = [...new Set([
  "index.html",
  ...resources.filter(entry => ["base", "mobile"].includes(entry["data-style-key"]) || entry.rel === "icon").map(entry => projectPath(entry.href)),
  ...moduleEntries.map(entry => projectPath(entry.src)),
  projectPath(importMap["#app/data-store"]),
  "data/runtime/index.json"
])];
for (const [alias, target] of Object.entries(importMap)) {
  const file = projectPath(target);
  if (!(await exists(file))) throw new Error(`Import-map target is missing: ${alias} -> ${file}`);
  if (!/[?&]v=[^&]+/.test(target)) throw new Error(`Import-map target has no cache version: ${alias}`);
}

const styleLoaderUrl = `${pathToFileURL(fromRoot(projectPath(importMap["#app/style-loader"]))).href}?audit=${Date.now()}`;
const { routeStyleManifest, styleFiles, styleVersion, styleLayerOrder } = await import(styleLoaderUrl);
if (!styleVersion) throw new Error("Route stylesheet cache version is missing.");
for (const entry of resources.filter(entry => ["base", "mobile"].includes(entry["data-style-key"]))) {
  if (new URL(entry.href, "https://audit.invalid/").searchParams.get("v") !== styleVersion) throw new Error(`Stylesheet cache version is inconsistent: ${entry.href}`);
}
for (const attribute of ["global-search-scope", "mobile-drawer-search-scope", "overview-search-scope"]) {
  const values = [...indexHtml.matchAll(new RegExp(`data-${attribute}="([^"]+)"`, "g"))].map(match => match[1]);
  if (JSON.stringify(values) !== JSON.stringify(searchScopeValues)) {
    throw new Error(`Search scope options are inconsistent: data-${attribute}`);
  }
}
const stylesheetFiles = [...new Set([...resources.filter(entry => entry.rel === "stylesheet").map(entry => projectPath(entry.href)), ...Object.values(styleFiles).map(projectPath)])];
for (const file of stylesheetFiles) {
  if (!(await exists(file))) throw new Error(`Style manifest target is missing: ${file}`);
}
const styleKeys = new Set(Object.keys(styleFiles));
for (const [route, keys] of Object.entries(routeStyleManifest)) {
  for (const key of keys) {
    if (!styleKeys.has(key)) throw new Error(`Unknown style key in route manifest: ${route} -> ${key}`);
  }
}
const baseStylesheet = await readFile(fromRoot(projectPath(baseStyle.href)), "utf8");
const declaredLayers = baseStylesheet.replace(/\/\*[\s\S]*?\*\//g, "").match(/@layer\s+([^;{]+);/)?.[1].split(",").map(layer => layer.trim());
if (JSON.stringify(declaredLayers) !== JSON.stringify(styleLayerOrder)) throw new Error("Global CSS layer order does not match the style manifest.");
for (const [key, target] of Object.entries(styleFiles)) {
  const stylesheet = await readFile(fromRoot(projectPath(target)), "utf8");
  if (!new RegExp(`@layer\\s+${key}\\s*\\{`).test(stylesheet)) throw new Error(`Stylesheet is missing its layer wrapper: ${key}`);
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

const sizes = await Promise.all(homeTextFiles.map(async file => [file, await byteSize(file)]));
const total = sizes.reduce((sum, [, size]) => sum + size, 0);
if (total > HOME_TEXT_LIMIT) {
  throw new Error(`Home text payload is ${total} bytes; expected <= ${HOME_TEXT_LIMIT}.`);
}
const baseCssSize = await byteSize(projectPath(baseStyle.href));
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

const sourceFiles = (await sourceModules(fromRoot("src"))).map(file => relative(root, file));
for (const file of sourceFiles) {
  const lineCount = sourceLines(await readFile(fromRoot(file), "utf8"));
  if (lineCount > SOURCE_LINE_LIMIT) throw new Error(`${file} has ${lineCount} lines; expected <= ${SOURCE_LINE_LIMIT}.`);
}
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
  const imports = moduleImports(source);
  const dependencies = [];
  for (const specifier of imports.static) {
    if (specifier.startsWith("#") && !importMap[specifier]) throw new Error(`Unmapped module: ${specifier}`);
    if (importMap[specifier]) usedImportAliases.add(specifier);
    const dependency = resolveImport(specifier, absolute);
    if (dependency) await requireModuleFile(dependency);
    if (dependency && sourceSet.has(dependency)) dependencies.push(dependency);
  }
  graph.set(absolute, dependencies);
  const runtimeDependencies = [...dependencies];
  for (const specifier of imports.dynamic) {
    if (specifier.startsWith("#") && !importMap[specifier]) throw new Error(`Unmapped module: ${specifier}`);
    if (importMap[specifier]) usedImportAliases.add(specifier);
    const dependency = resolveImport(specifier, absolute);
    if (dependency) await requireModuleFile(dependency);
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

const reachable = new Set();
const pending = moduleEntries.map(entry => fromRoot(projectPath(entry.src)));
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

console.log(
  `App audit OK: ${total} core text bytes across ${sizes.length} files; `
  + `${sourceFiles.length} reachable source modules; 0 static import cycles; `
  + `${importantCount} !important declarations.`
);
