import { readFile } from "node:fs/promises";
import { htmlResources, readImportMap } from "../../scripts/app-audit-model.mjs";

const html = await readFile(new URL("../../index.html", import.meta.url), "utf8");
const imports = readImportMap(html);
const resources = htmlResources(html);
const runtime = JSON.parse(await readFile(new URL("../../data/runtime/index.json", import.meta.url), "utf8"));
const pathname = value => {
  if (!value) throw new Error("Required resource missing from manifest");
  return new URL(value, "https://resource.invalid/").pathname;
};
const styleLoaderFile = new URL(`../../${pathname(imports["#app/style-loader"]).slice(1)}`, import.meta.url);
const { styleFiles, routeStyleManifest } = await import(styleLoaderFile.href);

export const modulePath = alias => pathname(imports[alias]);
export const stylePath = key => pathname(styleFiles[key] || resources.find(entry => entry["data-style-key"] === key)?.href);
export const homeModulePaths = resources.filter(entry => entry.type === "module").map(entry => pathname(entry.src));
export const homeStylePaths = resources.filter(entry => entry.rel === "stylesheet").map(entry => pathname(entry.href));
export const routeStylePaths = route => {
  if (!routeStyleManifest[route]) throw new Error(`Unknown route style policy: ${route}`);
  return routeStyleManifest[route].map(stylePath);
};
export const seriesPath = series => pathname(runtime.chunks[series]);
export const seriesPaths = Object.values(runtime.chunks).map(pathname);
export const searchPaths = Object.values(runtime.searchChunks).map(pathname);
export const animeDataPath = pathname(runtime.animeChunk);
export const registryDataPath = pathname(runtime.registryChunk);
export const resourcePattern = path => `**${path}*`;
