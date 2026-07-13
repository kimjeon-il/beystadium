import { mkdir, readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";
import { pathToFileURL } from "node:url";

const SERIES_SLUGS = {
  "metal fight": "metal-fight",
  burst: "burst",
  x: "x"
};
const SERIES_ORDER = ["metal fight", "burst", "x"];
const CHUNK_CODES = { "metal-fight": "m", burst: "b", x: "x", anime: "a", common: "o" };
const ANIME_EPISODE_PREFIXES = {
  topblade: "TOPBLADE-EPISODE",
  "topblade-v": "TOPBLADE-V-EPISODE",
  gblade: "GBLADE-EPISODE",
  "metal-fight": "METAL-FIGHT-EPISODE",
  "metal-fight-2": "METAL-FIGHT-2-EPISODE",
  "metal-fight-4d": "METAL-FIGHT-4D-EPISODE",
  "metal-fight-zerog": "METAL-FIGHT-ZEROG-EPISODE",
  burst: "BURST-EPISODE",
  "burst-god": "BURST-GOD-EPISODE",
  "beyblade-x": "BEYBLADE-X-EPISODE",
  "beyblade-x-2": "BEYBLADE-X-2-EPISODE"
};
const LEGACY_FILES = [
  "data/catalog-data.js",
  "data/product-data.js",
  "data/rare-bey-get-data.js",
  "data/secondary-data.js",
  "data/anime-data.js"
];

const jsonText = value => `${JSON.stringify(value)}\n`;
const unique = values => [...new Set(values.filter(Boolean))];
const released = release => release && release.status !== "unreleased" && Boolean(release.no || release.name || release.releaseDate || release.release);
const episodeIds = animeInfo => {
  const counts = new Map();
  return (animeInfo.episodes || []).map(episode => {
    const count = (counts.get(episode.season) || 0) + 1;
    counts.set(episode.season, count);
    const prefix = ANIME_EPISODE_PREFIXES[episode.season];
    return prefix ? `${prefix}-${count}` : "";
  });
};
const chunkCode = chunk => CHUNK_CODES[chunk] || chunk;
const compactRelease = release => release ? [
  release.status || "",
  release.no || "",
  release.name || "",
  release.sale || "",
  release.kind || "",
  release.releaseDate || release.release || "",
  release.price ?? ""
] : null;
const catalogSearchEntry = (item, chunk, order) => [
  "c", chunkCode(chunk), item.id, item.series || "", item.type || "", item.structure || "",
  item.name || "", item.jpName || "", item.en || "", item.sub || "", item.no || "",
  item.productNo || "", item.category || "", item.battleType || "", item.spin || "",
  item.heightClass || "", item.xLine || "", item.xBladeRole || "", item.searchTags || null, order
];
const toolsSearchEntry = (item, chunk, order) => [
  "t", chunkCode(chunk), item.id, item.series || "", item.type || "", item.name || "",
  item.jpName || "", item.en || "", item.no || "", item.productNo || "", item.category || "",
  item.desc || "", order
];
const catalogItemText = item => item
  ? [item.name, item.jpName, item.en, item.sub, item.no, item.productNo].filter(Boolean).join(" ")
  : "";
const productCompositionSearchText = (item, catalogById) => unique(
  Object.values(item.releases || {}).flatMap(release => (release?.composition || []).flatMap(entry => [
    entry.name,
    catalogItemText(catalogById.get(entry.target))
  ]))
).join(" ");
const productSearchEntry = (item, chunk, order, catalogById) => [
  "p", chunkCode(chunk), item.id, item.series || "", item.no || "", item.name || "", order,
  compactRelease(item.releases?.kr), compactRelease(item.releases?.jp),
  productCompositionSearchText(item, catalogById)
];
const animeSearchEntry = (episode, id, index) => [
  "a", id, index, episode.no || "", episode.season || "", episode.titles?.kr || "",
  episode.titles?.jp || "", episode.airDates?.kr || "", episode.airDates?.jp || "", episode.note || ""
];
const registryStub = (item, kind, chunk, order) => ({
  id: item.id,
  kind,
  chunk,
  series: item.series || "",
  type: item.type || "",
  name: item.name || "",
  sub: item.sub || "",
  _order: order
});

async function readLegacyData(rootDir) {
  let source = "";
  for (const file of LEGACY_FILES) source += `${await readFile(new URL(file, rootDir), "utf8")}\n`;
  source += "\nglobalThis.__legacyData={beyItems,partItems,productItems,rareBeyGetItems,toolsItems,bookItems,gameItems,animeInfo};";
  const context = {};
  vm.createContext(context);
  new vm.Script(source, { filename: "legacy-data.js" }).runInContext(context);
  return context.__legacyData;
}

function buildSeriesChunks(data) {
  const productSeriesById = new Map(data.productItems.map(item => [item.id, item.series]));
  return Object.fromEntries(SERIES_ORDER.map(series => {
    const rareBeyGetItems = data.rareBeyGetItems.filter(entry => {
      const ids = unique([entry.productId, ...(entry.productIds || [])]);
      return ids.some(id => productSeriesById.get(id) === series);
    });
    return [series, {
      series,
      beyItems: data.beyItems.filter(item => item.series === series),
      partItems: data.partItems.filter(item => item.series === series),
      productItems: data.productItems.filter(item => item.series === series),
      toolsItems: data.toolsItems.filter(item => item.series === series),
      rareBeyGetItems
    }];
  }));
}

function buildIndex(chunks, data) {
  const registry = [];
  const search = [];
  const catalogById = new Map(SERIES_ORDER.flatMap(series => [
    ...chunks[series].beyItems,
    ...chunks[series].partItems,
    ...chunks[series].toolsItems
  ]).map(item => [item.id, item]));
  for (const series of SERIES_ORDER) {
    const chunk = SERIES_SLUGS[series];
    const payload = chunks[series];
    payload.beyItems.forEach((item, order) => {
      search.push(catalogSearchEntry(item, chunk, order));
    });
    payload.partItems.forEach((item, order) => {
      const sourceOrder = payload.beyItems.length + order;
      search.push(catalogSearchEntry(item, chunk, sourceOrder));
    });
    payload.productItems.forEach((item, order) => {
      if (item.lineupOnly) registry.push(registryStub(item, "product", chunk, order));
      else search.push(productSearchEntry(item, chunk, order, catalogById));
    });
    payload.toolsItems.forEach((item, order) => {
      search.push(toolsSearchEntry(item, chunk, order));
    });
  }
  data.bookItems.forEach((item, order) => {
    search.push(["k", item.id, item.name || "", item.en || "", item.category || "", item.desc || "", order]);
  });
  data.gameItems.forEach((item, order) => {
    search.push(["g", item.id, item.name || "", item.en || "", item.category || "", item.desc || "", order]);
  });
  episodeIds(data.animeInfo).forEach((id, index) => {
    if (!id) return;
    search.push(animeSearchEntry(data.animeInfo.episodes[index], id, index));
  });
  const availableReleaseSeries = Object.fromEntries(["kr", "jp"].map(region => [
    region,
    SERIES_ORDER.filter(series => chunks[series].productItems.some(item => released(item.releases?.[region])))
  ]));
  return {
    version: "20260713-lazy-data-v2",
    series: SERIES_ORDER.map(series => SERIES_SLUGS[series]),
    chunks: Object.fromEntries(SERIES_ORDER.map(series => [SERIES_SLUGS[series], `./data/series/${SERIES_SLUGS[series]}.json?v=20260713-lazy-data-v2`])),
    animeChunk: "./data/anime.json?v=20260713-lazy-data-v2",
    availableReleaseSeries,
    registry,
    search
  };
}

export async function migrateLegacyData() {
  const rootDir = new URL("../", import.meta.url);
  const data = await readLegacyData(rootDir);
  const chunks = buildSeriesChunks(data);
  await mkdir(new URL("../data/series/", import.meta.url), { recursive: true });
  for (const [series, payload] of Object.entries(chunks)) {
    await writeFile(new URL(`../data/series/${SERIES_SLUGS[series]}.json`, import.meta.url), jsonText(payload));
  }
  await writeFile(new URL("../data/anime.json", import.meta.url), jsonText(data.animeInfo));
  await writeFile(new URL("../data/index.json", import.meta.url), jsonText(buildIndex(chunks, data)));
  return { chunks, data };
}

export async function rebuildIndex() {
  const chunks = {};
  for (const series of SERIES_ORDER) {
    chunks[series] = JSON.parse(await readFile(new URL(`../data/series/${SERIES_SLUGS[series]}.json`, import.meta.url), "utf8"));
  }
  const data = {
    bookItems: [],
    gameItems: [],
    animeInfo: JSON.parse(await readFile(new URL("../data/anime.json", import.meta.url), "utf8"))
  };
  const existingIndex = JSON.parse(await readFile(new URL("../data/index.json", import.meta.url), "utf8"));
  data.bookItems = existingIndex.search.filter(entry => entry[0] === "k").map(entry => ({ id: entry[1], name: entry[2], en: entry[3], category: entry[4], desc: entry[5] }));
  data.gameItems = existingIndex.search.filter(entry => entry[0] === "g").map(entry => ({ id: entry[1], name: entry[2], en: entry[3], category: entry[4], desc: entry[5] }));
  await writeFile(new URL("../data/index.json", import.meta.url), jsonText(buildIndex(chunks, data)));
}

export async function checkGeneratedData() {
  const rootDir = new URL("../", import.meta.url);
  const data = await readLegacyData(rootDir);
  const chunks = buildSeriesChunks(data);
  const mismatches = [];
  for (const [series, payload] of Object.entries(chunks)) {
    const generated = JSON.parse(await readFile(new URL(`../data/series/${SERIES_SLUGS[series]}.json`, import.meta.url), "utf8"));
    if (JSON.stringify(generated) !== JSON.stringify(payload)) mismatches.push(`data/series/${SERIES_SLUGS[series]}.json`);
  }
  const generatedAnime = JSON.parse(await readFile(new URL("../data/anime.json", import.meta.url), "utf8"));
  if (JSON.stringify(generatedAnime) !== JSON.stringify(data.animeInfo)) mismatches.push("data/anime.json");
  const generatedIndex = JSON.parse(await readFile(new URL("../data/index.json", import.meta.url), "utf8"));
  if (JSON.stringify(generatedIndex) !== JSON.stringify(buildIndex(chunks, data))) mismatches.push("data/index.json");
  if (mismatches.length) throw new Error(`Generated data is stale: ${mismatches.join(", ")}`);
  return true;
}

const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isDirectRun) {
  const command = process.argv[2] || "--check";
  if (command === "--build") {
    await migrateLegacyData();
    console.log("Runtime data rebuilt.");
  } else if (command === "--check") {
    await checkGeneratedData();
    console.log("Generated data is current.");
  } else if (command === "--rebuild-index") {
    await rebuildIndex();
    console.log("Search index rebuilt.");
  } else {
    throw new Error(`Unknown command: ${command}`);
  }
}
