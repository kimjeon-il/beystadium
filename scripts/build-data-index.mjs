import { mkdir, readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

import { animeInfo } from "../data/source/anime.mjs";
import { beyItems, partItems } from "../data/source/catalog.mjs";
import { productItems } from "../data/source/products.mjs";
import { rareBeyGetItems } from "../data/source/rare-bey-get.mjs";
import { bookItems, gameItems, toolsItems } from "../data/source/secondary.mjs";

const VERSION = "20260715-x-set-products";
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

const sourceData = {
  animeInfo,
  beyItems,
  bookItems,
  gameItems,
  partItems,
  productItems,
  rareBeyGetItems,
  toolsItems
};
const jsonText = value => `${JSON.stringify(value)}\n`;
const unique = values => [...new Set(values.filter(Boolean))];
const runtimeItem = item => {
  const { addressSlug: _addressSlug, ...value } = item;
  return value;
};
const released = release => release && release.status !== "unreleased" && Boolean(
  release.no || release.name || release.releaseDate || release.release
);
const episodeIds = info => {
  const counts = new Map();
  return (info.episodes || []).map(episode => {
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

function buildSeriesChunks(data) {
  const productSeriesById = new Map(data.productItems.map(item => [item.id, item.series]));
  return Object.fromEntries(SERIES_ORDER.map(series => {
    const seriesRareItems = data.rareBeyGetItems.filter(entry => {
      const ids = unique([entry.productId, ...(entry.productIds || [])]);
      return ids.some(id => productSeriesById.get(id) === series);
    });
    return [series, {
      series,
      beyItems: data.beyItems.filter(item => item.series === series).map(runtimeItem),
      partItems: data.partItems.filter(item => item.series === series).map(runtimeItem),
      productItems: data.productItems.filter(item => item.series === series).map(runtimeItem),
      toolsItems: data.toolsItems.filter(item => item.series === series).map(runtimeItem),
      rareBeyGetItems: seriesRareItems
    }];
  }));
}

function buildSearchChunks(chunks, data) {
  const catalogById = new Map([
    ...data.beyItems,
    ...data.partItems,
    ...data.toolsItems
  ].map(item => [item.id, item]));
  const searchChunks = {};

  for (const series of SERIES_ORDER) {
    const chunk = SERIES_SLUGS[series];
    const payload = chunks[series];
    const search = [];
    payload.beyItems.forEach((item, order) => search.push(catalogSearchEntry(item, chunk, order)));
    payload.partItems.forEach((item, order) => {
      search.push(catalogSearchEntry(item, chunk, payload.beyItems.length + order));
    });
    payload.productItems.forEach((item, order) => {
      if (!item.lineupOnly) search.push(productSearchEntry(item, chunk, order, catalogById));
    });
    payload.toolsItems.forEach((item, order) => search.push(toolsSearchEntry(item, chunk, order)));
    searchChunks[chunk] = { search };
  }

  searchChunks.common = {
    search: [
      ...data.bookItems.map((item, order) => [
        "k", item.id, item.name || "", item.en || "", item.category || "", item.desc || "", order
      ]),
      ...data.gameItems.map((item, order) => [
        "g", item.id, item.name || "", item.en || "", item.category || "", item.desc || "", order
      ])
    ]
  };
  searchChunks.anime = {
    search: episodeIds(data.animeInfo).flatMap((id, index) => id
      ? [animeSearchEntry(data.animeInfo.episodes[index], id, index)]
      : [])
  };
  return searchChunks;
}

function buildRegistry(chunks, data) {
  const items = [];
  for (const series of SERIES_ORDER) {
    const slug = SERIES_SLUGS[series];
    const code = chunkCode(slug);
    const payload = chunks[series];
    [payload.beyItems, payload.partItems, payload.productItems, payload.toolsItems]
      .flat()
      .forEach(item => items.push([item.id, code]));
  }
  data.bookItems.forEach(item => items.push([item.id, chunkCode("common")]));
  data.gameItems.forEach(item => items.push([item.id, chunkCode("common")]));
  episodeIds(data.animeInfo).filter(Boolean).forEach(id => items.push([id, chunkCode("anime")]));
  return { items };
}

function buildManifest(chunks) {
  return {
    version: VERSION,
    series: SERIES_ORDER.map(series => SERIES_SLUGS[series]),
    chunks: Object.fromEntries(SERIES_ORDER.map(series => {
      const slug = SERIES_SLUGS[series];
      return [slug, `./data/runtime/series/${slug}.json?v=${VERSION}`];
    })),
    searchChunks: {
      "metal-fight": `./data/runtime/search/metal-fight.json?v=${VERSION}`,
      burst: `./data/runtime/search/burst.json?v=${VERSION}`,
      x: `./data/runtime/search/x.json?v=${VERSION}`,
      common: `./data/runtime/search/common.json?v=${VERSION}`,
      anime: `./data/runtime/search/anime.json?v=${VERSION}`
    },
    registryChunk: `./data/runtime/registry.json?v=${VERSION}`,
    animeChunk: `./data/runtime/anime.json?v=${VERSION}`,
    availableReleaseSeries: Object.fromEntries(["kr", "jp"].map(region => [
      region,
      SERIES_ORDER.filter(series => chunks[series].productItems.some(item => released(item.releases?.[region])))
    ]))
  };
}

export function buildRuntimeData(data = sourceData) {
  const chunks = buildSeriesChunks(data);
  return {
    anime: data.animeInfo,
    chunks,
    manifest: buildManifest(chunks),
    registry: buildRegistry(chunks, data),
    searchChunks: buildSearchChunks(chunks, data)
  };
}

function generatedFiles(runtime) {
  const files = new Map([
    ["data/runtime/index.json", runtime.manifest],
    ["data/runtime/registry.json", runtime.registry],
    ["data/runtime/anime.json", runtime.anime]
  ]);
  for (const [series, payload] of Object.entries(runtime.chunks)) {
    files.set(`data/runtime/series/${SERIES_SLUGS[series]}.json`, payload);
  }
  for (const [chunk, payload] of Object.entries(runtime.searchChunks)) {
    files.set(`data/runtime/search/${chunk}.json`, payload);
  }
  return files;
}

export async function buildGeneratedData() {
  const runtime = buildRuntimeData();
  await mkdir(new URL("../data/runtime/series/", import.meta.url), { recursive: true });
  await mkdir(new URL("../data/runtime/search/", import.meta.url), { recursive: true });
  for (const [path, payload] of generatedFiles(runtime)) {
    await writeFile(new URL(`../${path}`, import.meta.url), jsonText(payload));
  }
  return runtime;
}

export async function checkGeneratedData() {
  const mismatches = [];
  for (const [path, payload] of generatedFiles(buildRuntimeData())) {
    try {
      const current = await readFile(new URL(`../${path}`, import.meta.url), "utf8");
      if (current !== jsonText(payload)) mismatches.push(path);
    } catch {
      mismatches.push(path);
    }
  }
  if (mismatches.length) throw new Error(`Generated data is stale: ${mismatches.join(", ")}`);
  return true;
}

const isDirectRun = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isDirectRun) {
  const command = process.argv[2] || "--check";
  if (command === "--build") {
    await buildGeneratedData();
    console.log("Runtime data rebuilt.");
  } else if (command === "--check") {
    await checkGeneratedData();
    console.log("Generated data is current.");
  } else {
    throw new Error(`Unknown command: ${command}`);
  }
}
