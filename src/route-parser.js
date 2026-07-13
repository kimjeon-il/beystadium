const searchScopes = new Set(["all", "bey", "tools", "product", "manga", "anime"]);
const catalogRouteScopes = new Set(["all", "bey", "parts", "tools"]);
const catalogSeries = new Set(["all", "topblade", "metal fight", "burst", "x"]);
const catalogSorts = new Set(["no-asc", "no-desc", "latest", "oldest"]);
const animeCharacterSeasons = new Set([
  "all",
  "topblade",
  "topblade-v",
  "gblade",
  "metal-fight",
  "metal-fight-2",
  "metal-fight-4d",
  "metal-fight-zerog",
  "burst",
  "burst-god",
  "burst-cho-z",
  "burst-gachi",
  "burst-superking",
  "burst-db",
  "beyblade-x",
  "beyblade-x-2",
  "beyblade-x-3"
]);
const releaseRegions = new Set(["kr", "jp"]);
const releaseSeries = new Set(["topblade", "metal fight", "burst", "x"]);

const normalizeSearchScope = scope => searchScopes.has(scope) ? scope : "all";
const normalizeCatalogRouteScope = scope => catalogRouteScopes.has(scope) ? scope : "all";
const normalizeCatalogSeries = series => catalogSeries.has(series) ? series : "all";
const defaultCatalogSort = () => "latest";
const normalizeCatalogRouteSort = sort => catalogSorts.has(sort) ? sort : defaultCatalogSort();
const normalizeCatalogRoutePage = page => {
  const numeric = Number.parseInt(page, 10);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : 1;
};
const normalizeCatalogRouteQuery = query => String(query || "").trim();
const normalizeAnimeCharacterRouteSeason = season => animeCharacterSeasons.has(season) ? season : "all";
const normalizeReleaseRouteRegion = region => releaseRegions.has(region) ? region : "jp";
const normalizeReleaseRouteSeries = series => releaseSeries.has(series) ? series : "x";
const normalizeRareBeyGetListRouteOptions = options => {
  const region = normalizeReleaseRouteRegion(options?.region);
  return {
    region,
    series: normalizeReleaseRouteSeries(options?.series),
    ...(options?.backProductId ? { backProductId: String(options.backProductId) } : {}),
    ...(options?.backRelease ? { backRelease: true } : {})
  };
};
const routeHashParts = (hash = "") => {
  const raw = String(hash || "").replace(/^#/, "");
  const queryIndex = raw.indexOf("?");
  return {
    id: queryIndex >= 0 ? raw.slice(0, queryIndex) : raw,
    params: new URLSearchParams(queryIndex >= 0 ? raw.slice(queryIndex + 1) : "")
  };
};
const searchHash = (query = "", scope = "all") => {
  const params = new URLSearchParams();
  params.set("q", query);
  params.set("scope", normalizeSearchScope(scope));
  return `#search?${params.toString()}`;
};

function normalizeRoute(route = {}) {
  if (!route || !route.type && !route.id) return { type: "overview" };
  if (route.type === "search") return {
    type: "search",
    query: route.query || "",
    scope: normalizeSearchScope(route.scope || "all")
  };
  if (route.type === "catalog") return {
    type: "catalog",
    scope: normalizeCatalogRouteScope(route.scope),
    series: normalizeCatalogSeries(route.series || "all"),
    sort: normalizeCatalogRouteSort(route.sort),
    page: normalizeCatalogRoutePage(route.page),
    query: normalizeCatalogRouteQuery(route.query ?? route.q)
  };
  if (route.type === "category-release") return { type: "category-release", options: { ...(route.options || {}) } };
  if (route.type === "category-anime") return {
    type: "category-anime",
    season: normalizeAnimeCharacterRouteSeason(route.season ?? route.options?.season),
    page: normalizeCatalogRoutePage(route.page ?? route.options?.page),
    query: normalizeCatalogRouteQuery(route.query ?? route.q ?? route.options?.query ?? route.options?.q)
  };
  if (route.type === "category-anime-episodes") {
    return { type: "category-anime-episodes", options: { ...(route.options || {}) } };
  }
  if (route.type === "rare-bey-get-list") return {
    type: "rare-bey-get-list",
    options: normalizeRareBeyGetListRouteOptions({ ...(route.options || {}), ...route })
  };
  if (route.type === "detail" || route.id) {
    const id = String(route.id || "");
    return id ? { type: "detail", id, options: { ...(route.options || {}) } } : { type: "overview" };
  }
  return { type: "overview" };
}

function parseRouteFromHash(hash = "") {
  const { id, params } = routeHashParts(hash);
  if (!id) return { type: "overview" };
  if (id === "search") return normalizeRoute({
    type: "search",
    query: params.get("q") || "",
    scope: params.get("scope") || "all"
  });
  if (id === "toy-catalog") return normalizeRoute({
    type: "catalog",
    scope: params.get("scope"),
    series: params.get("series") || "all",
    sort: params.get("sort"),
    page: params.get("page"),
    query: params.get("q") || ""
  });
  if (id === "toy-release") return { type: "category-release" };
  if (id === "anime-character") return normalizeRoute({
    type: "category-anime",
    season: params.get("season") || "all",
    page: params.get("page"),
    query: params.get("q") || ""
  });
  if (id === "anime-episode") return { type: "category-anime-episodes" };
  if (id === "rare-bey-get-list") return normalizeRoute({
    type: "rare-bey-get-list",
    region: params.get("region") || "",
    series: params.get("series") || "",
    backProductId: params.get("backProductId") || "",
    backRelease: params.get("backRelease") === "1"
  });
  return normalizeRoute({ type: "detail", id });
}

function serializeRoute(route = {}) {
  const normalizedRoute = normalizeRoute(route);
  if (normalizedRoute.type === "overview") return "";
  if (normalizedRoute.type === "search") return searchHash(normalizedRoute.query, normalizedRoute.scope);
  if (normalizedRoute.type === "catalog") {
    const params = new URLSearchParams();
    params.set("scope", normalizedRoute.scope);
    params.set("series", normalizedRoute.series);
    params.set("sort", normalizedRoute.sort);
    params.set("page", String(normalizedRoute.page));
    if (normalizedRoute.query) params.set("q", normalizedRoute.query);
    return `#toy-catalog?${params.toString()}`;
  }
  if (normalizedRoute.type === "category-release") return "#toy-release";
  if (normalizedRoute.type === "category-anime") {
    const params = new URLSearchParams();
    if (normalizedRoute.season !== "all") params.set("season", normalizedRoute.season);
    if (normalizedRoute.query) params.set("q", normalizedRoute.query);
    if (normalizedRoute.page > 1) params.set("page", String(normalizedRoute.page));
    return params.size ? `#anime-character?${params.toString()}` : "#anime-character";
  }
  if (normalizedRoute.type === "category-anime-episodes") return "#anime-episode";
  if (normalizedRoute.type === "rare-bey-get-list") {
    const params = new URLSearchParams();
    const options = normalizedRoute.options;
    params.set("region", options.region);
    params.set("series", options.series);
    if (options.backProductId) params.set("backProductId", options.backProductId);
    if (options.backRelease) params.set("backRelease", "1");
    return `#rare-bey-get-list?${params.toString()}`;
  }
  return normalizedRoute.id ? `#${normalizedRoute.id}` : "";
}

const isPrimaryRoute = route => [
  "overview",
  "catalog",
  "search",
  "category-release",
  "category-anime",
  "category-anime-episodes"
].includes(route?.type);
const isDetailRoute = route => route?.type === "detail";
const routeSnapshot = route => route ? normalizeRoute(route) : null;

export {
  defaultCatalogSort,
  isDetailRoute,
  isPrimaryRoute,
  normalizeCatalogRouteSort,
  normalizeRoute,
  parseRouteFromHash,
  routeSnapshot,
  serializeRoute
};
