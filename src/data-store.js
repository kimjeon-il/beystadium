const beyItems = [];
const partItems = [];
const catalogCoreItems = [];
const productItems = [];
const rareBeyGetItems = [];
const toolsItems = [];
const bookItems = [];
const gameItems = [];
const animeInfo = { title: "", overview: [], characters: [], episodes: [] };
const searchIndexItems = [];

const catalogCoreItemsById = new Map();
const productItemsById = new Map();
const toolsItemsById = new Map();
const bookItemsById = new Map();
const gameItemsById = new Map();
const catalogCoreItemOrder = new Map();
const toolsItemOrder = new Map();

const BeystadiumDataStore = (() => {
  const SERIES_KEYS = new Set(["metal-fight", "burst", "x"]);
  const PRIMARY_HASH_IDS = new Set([
    "toy-catalog",
    "toy-release",
    "anime-character",
    "anime-episode",
    "search",
    "rare-bey-get-list"
  ]);
  const chunkPromises = new Map();
  const searchChunkPromises = new Map();
  const loadedChunks = new Set();
  const loadedSearchChunks = new Set();
  const itemChunks = new Map();
  const searchEntryKeys = new Set();
  let indexData = null;
  let registryPromise = null;
  let registryLoaded = false;
  let loadingCount = 0;
  const seriesOrder = { "metal-fight": 0, burst: 1, x: 2 };

  const chunkNames = { m: "metal-fight", b: "burst", x: "x", a: "anime", o: "common" };
  const compactValue = value => value === "" || value === null ? undefined : value;
  const compactRelease = values => values ? {
    status: compactValue(values[0]),
    no: compactValue(values[1]),
    name: compactValue(values[2]),
    sale: compactValue(values[3]),
    kind: compactValue(values[4]),
    releaseDate: compactValue(values[5]),
    price: values[6] ?? ""
  } : undefined;
  const cleanObject = value => Object.fromEntries(Object.entries(value).filter(([, entry]) => entry !== undefined));
  const decodeSearchEntry = values => {
    if (!Array.isArray(values)) return values;
    const kind = values[0];
    if (kind === "c") return {
      kind: "catalog-item",
      chunk: chunkNames[values[1]] || values[1],
      item: cleanObject({
        id: values[2], series: values[3], type: values[4], structure: compactValue(values[5]),
        name: values[6], jpName: compactValue(values[7]), en: compactValue(values[8]), sub: compactValue(values[9]),
        no: compactValue(values[10]), productNo: compactValue(values[11]), category: compactValue(values[12]),
        battleType: compactValue(values[13]), spin: compactValue(values[14]), heightClass: compactValue(values[15]),
        xLine: compactValue(values[16]), xBladeRole: compactValue(values[17]), searchTags: compactValue(values[18]), _order: values[19]
      })
    };
    if (kind === "t") return {
      kind: "tools",
      chunk: chunkNames[values[1]] || values[1],
      item: cleanObject({
        id: values[2], series: values[3], type: compactValue(values[4]), name: values[5], jpName: compactValue(values[6]),
        en: compactValue(values[7]), no: compactValue(values[8]), productNo: compactValue(values[9]),
        category: compactValue(values[10]), desc: compactValue(values[11]), _order: values[12]
      })
    };
    if (kind === "p") return {
      kind: "product",
      chunk: chunkNames[values[1]] || values[1],
      item: cleanObject({
        id: values[2], series: values[3], no: compactValue(values[4]), name: compactValue(values[5]), _order: values[6],
        releases: cleanObject({ kr: compactRelease(values[7]), jp: compactRelease(values[8]) }),
        _compositionSearchText: compactValue(values[9])
      })
    };
    if (kind === "a") return {
      id: values[1], kind: "anime", chunk: "anime", index: values[2],
      item: {
        no: values[3], season: values[4], titles: { kr: values[5], jp: values[6] },
        airDates: { kr: values[7], jp: values[8] }, note: values[9]
      }
    };
    if (kind === "k" || kind === "g") return {
      kind: kind === "k" ? "book" : "game",
      chunk: "common",
      item: { id: values[1], name: values[2], en: values[3], category: values[4], desc: values[5], _order: values[6] }
    };
    return null;
  };

  const statusRoot = () => document.querySelector("#dataLoadStatus");
  const setLoading = loading => {
    loadingCount = Math.max(0, loadingCount + (loading ? 1 : -1));
    const active = loadingCount > 0;
    document.documentElement.classList.toggle("data-loading", active);
    document.body?.setAttribute("aria-busy", active ? "true" : "false");
    const root = statusRoot();
    if (root && active && !root.classList.contains("is-error")) root.hidden = false;
    if (root && !active && !root.classList.contains("is-error")) root.hidden = true;
  };
  const showError = error => {
    const root = statusRoot();
    if (!root) return;
    root.hidden = false;
    root.classList.add("is-error");
    const message = root.querySelector("[data-load-message]");
    if (message) message.textContent = "데이터를 불러오지 못했습니다.";
    root.querySelector("[data-load-retry]")?.removeAttribute("hidden");
    console.error(error);
  };
  const clearError = () => {
    const root = statusRoot();
    if (!root) return;
    root.classList.remove("is-error");
    const message = root.querySelector("[data-load-message]");
    if (message) message.textContent = "데이터를 불러오는 중입니다.";
    root.querySelector("[data-load-retry]")?.setAttribute("hidden", "");
  };
  const fetchJson = async url => {
    setLoading(true);
    try {
      const response = await fetch(url, { cache: "default" });
      if (!response.ok) throw new Error(`Data request failed (${response.status}): ${url}`);
      return await response.json();
    } finally {
      setLoading(false);
    }
  };
  const hydrate = (map, item) => {
    const current = map.get(item.id) || {};
    Object.assign(current, item);
    map.set(item.id, current);
    return current;
  };
  const pushUnique = (items, item) => {
    if (!items.includes(item)) items.push(item);
  };
  const sortBySourceOrder = items => items.sort((a, b) => (a._order ?? Number.MAX_SAFE_INTEGER) - (b._order ?? Number.MAX_SAFE_INTEGER));
  const rememberChunkItems = (items, key) => items.forEach(item => item?.id && itemChunks.set(item.id, key));
  const registerChunk = (key, payload) => {
    const seriesOffset = (seriesOrder[key] ?? 0) * 3000;
    rememberChunkItems(payload.beyItems || [], key);
    rememberChunkItems(payload.partItems || [], key);
    rememberChunkItems(payload.productItems || [], key);
    rememberChunkItems(payload.toolsItems || [], key);
    (payload.beyItems || []).forEach((item, order) => {
      const current = hydrate(catalogCoreItemsById, item);
      current._order = seriesOffset + order;
      pushUnique(beyItems, current);
      pushUnique(catalogCoreItems, current);
      catalogCoreItemOrder.set(current, current._order);
    });
    (payload.partItems || []).forEach((item, order) => {
      const current = hydrate(catalogCoreItemsById, item);
      current._order = 10000 + seriesOffset + order;
      pushUnique(partItems, current);
      pushUnique(catalogCoreItems, current);
      catalogCoreItemOrder.set(current, current._order);
    });
    (payload.productItems || []).forEach((item, order) => {
      const current = hydrate(productItemsById, item);
      current._order = seriesOffset + order;
      pushUnique(productItems, current);
    });
    (payload.toolsItems || []).forEach((item, order) => {
      const current = hydrate(toolsItemsById, item);
      current._order = seriesOffset + order;
      pushUnique(toolsItems, current);
      toolsItemOrder.set(current, current._order);
    });
    (payload.rareBeyGetItems || []).forEach(item => {
      if (!rareBeyGetItems.some(entry => JSON.stringify(entry) === JSON.stringify(item))) rareBeyGetItems.push(item);
    });
    [beyItems, partItems, catalogCoreItems, productItems, toolsItems].forEach(sortBySourceOrder);
    loadedChunks.add(key);
    window.dispatchEvent(new CustomEvent("beystadium:data-loaded", { detail: { kind: "series", key } }));
  };
  const registerSearchChunk = (key, payload) => {
    (payload.search || []).map(decodeSearchEntry).filter(Boolean).forEach(entry => {
      let item = entry.item;
      const id = entry.id || item?.id;
      const entryKey = `${entry.kind}:${id || entry.index}`;
      if (searchEntryKeys.has(entryKey)) return;
      searchEntryKeys.add(entryKey);
      if (id) itemChunks.set(id, entry.chunk);
      const map = entry.kind === "catalog-item" ? catalogCoreItemsById
        : entry.kind === "product" ? productItemsById
          : entry.kind === "tools" ? toolsItemsById
            : entry.kind === "book" ? bookItemsById
              : entry.kind === "game" ? gameItemsById
                : null;
      if (map) item = hydrate(map, entry.item);
      searchIndexItems.push({ ...entry, item });
      if (entry.kind === "book") pushUnique(bookItems, item);
      if (entry.kind === "game") pushUnique(gameItems, item);
    });
    loadedSearchChunks.add(key);
    window.dispatchEvent(new CustomEvent("beystadium:data-loaded", { detail: { kind: "search", key } }));
  };
  const registerRegistry = payload => {
    (payload.items || []).forEach(([id, chunk]) => itemChunks.set(id, chunkNames[chunk] || chunk));
    registryLoaded = true;
  };
  const detailHashOnBoot = () => {
    const raw = window.location.hash.replace(/^#/, "");
    const id = decodeURIComponent(raw.split("?")[0] || "");
    return Boolean(id && !PRIMARY_HASH_IDS.has(id));
  };
  const initialize = async () => {
    clearError();
    try {
      indexData = await fetchJson("./data/runtime/index.json?v=20260714-flame-libra-image");
      if (detailHashOnBoot()) await ensureRegistry();
      document.querySelector("[data-load-retry]")?.addEventListener("click", () => window.location.reload());
      return true;
    } catch (error) {
      showError(error);
      throw error;
    }
  };
  const ensureRegistry = () => {
    if (registryLoaded) return Promise.resolve(true);
    if (registryPromise) return registryPromise;
    if (!indexData?.registryChunk) return Promise.resolve(false);
    clearError();
    registryPromise = fetchJson(indexData.registryChunk)
      .then(payload => {
        registerRegistry(payload);
        return true;
      })
      .catch(error => {
        registryPromise = null;
        showError(error);
        return false;
      });
    return registryPromise;
  };
  const ensureSearchChunk = key => {
    if (loadedSearchChunks.has(key)) return Promise.resolve(true);
    if (searchChunkPromises.has(key)) return searchChunkPromises.get(key);
    const url = indexData?.searchChunks?.[key];
    if (!url) return Promise.resolve(false);
    clearError();
    const promise = fetchJson(url)
      .then(payload => {
        registerSearchChunk(key, payload);
        return true;
      })
      .catch(error => {
        searchChunkPromises.delete(key);
        showError(error);
        return false;
      });
    searchChunkPromises.set(key, promise);
    return promise;
  };
  const ensureChunk = key => {
    if (key === "common") return ensureSearchChunk("common");
    if (loadedChunks.has(key)) return Promise.resolve(true);
    if (chunkPromises.has(key)) return chunkPromises.get(key);
    const url = key === "anime" ? indexData?.animeChunk : indexData?.chunks?.[key];
    if (!url) return Promise.resolve(false);
    clearError();
    const promise = fetchJson(url)
      .then(payload => {
        if (key === "anime") {
          animeInfo.title = payload.title || "";
          animeInfo.overview = Array.isArray(payload.overview) ? payload.overview : [];
          animeInfo.characters = Array.isArray(payload.characters) ? payload.characters : [];
          animeInfo.episodes = Array.isArray(payload.episodes) ? payload.episodes : [];
          loadedChunks.add(key);
          window.dispatchEvent(new CustomEvent("beystadium:data-loaded", { detail: { kind: "anime", key } }));
        } else {
          registerChunk(key, payload);
        }
        return true;
      })
      .catch(error => {
        chunkPromises.delete(key);
        showError(error);
        return false;
      });
    chunkPromises.set(key, promise);
    return promise;
  };
  const ensureSeries = series => {
    const key = String(series || "").replace(/\s+/g, "-");
    return SERIES_KEYS.has(key) ? ensureChunk(key) : Promise.resolve(false);
  };
  const ensureAllSeries = async () => (await Promise.all([...SERIES_KEYS].map(ensureChunk))).every(Boolean);
  const ensureSearch = async scope => {
    const key = String(scope || "all").toLowerCase();
    if (key === "anime") return ensureSearchChunk("anime");
    if (key === "manga" || key === "game" || key === "common") return ensureSearchChunk("common");
    const seriesReady = await Promise.all([...SERIES_KEYS].map(ensureSearchChunk));
    if (key !== "all") return seriesReady.every(Boolean);
    const extraReady = await Promise.all([ensureSearchChunk("common"), ensureSearchChunk("anime")]);
    return [...seriesReady, ...extraReady].every(Boolean);
  };
  const ensureItem = async id => {
    if (!itemChunks.has(id)) await ensureRegistry();
    const chunk = itemChunks.get(id);
    if (!chunk) return false;
    if (chunk === "common") return ensureSearchChunk("common");
    return ensureChunk(chunk);
  };
  const defaultReleaseSeries = region => {
    const values = indexData?.availableReleaseSeries?.[region] || [];
    return values[values.length - 1] || "metal fight";
  };
  const ensureRoute = async route => {
    if (!route) return true;
    if (route.type === "catalog") return route.series && route.series !== "all" ? ensureSeries(route.series) : ensureAllSeries();
    if (route.type === "search") return ensureSearch(route.scope || "all");
    if (route.type === "category-release") return ensureSeries(route.options?.series || defaultReleaseSeries(route.options?.region || "kr"));
    if (route.type === "category-anime" || route.type === "category-anime-episodes") return ensureChunk("anime");
    if (route.type === "rare-bey-get-list") return ensureSeries(route.options?.series || "x");
    if (route.type === "detail") return ensureItem(route.id);
    return true;
  };
  const isSeriesLoaded = series => loadedChunks.has(String(series || "").replace(/\s+/g, "-"));
  const hasItem = id => itemChunks.has(id)
    || catalogCoreItemsById.has(id)
    || productItemsById.has(id)
    || toolsItemsById.has(id)
    || bookItemsById.has(id)
    || gameItemsById.has(id);

  return {
    defaultReleaseSeries,
    ensureAllSeries,
    ensureItem,
    ensureRoute,
    ensureSearch,
    ensureSeries,
    hasItem,
    initialize,
    isSeriesLoaded
  };
})();

export {
  animeInfo,
  beyItems,
  bookItems,
  bookItemsById,
  catalogCoreItemOrder,
  catalogCoreItems,
  catalogCoreItemsById,
  gameItems,
  gameItemsById,
  partItems,
  productItems,
  productItemsById,
  rareBeyGetItems,
  searchIndexItems,
  toolsItemOrder,
  toolsItems,
  toolsItemsById,
  BeystadiumDataStore
};
