import { normalizeSearchScope } from "./search-scopes.js";

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

const routeCodecs = {
  overview: {
    normalize: () => ({ type: "overview" }),
    serialize: () => ""
  },
  search: {
    hashId: "search",
    normalize: route => ({
      type: "search",
      query: route.query || "",
      scope: normalizeSearchScope(route.scope || "all")
    }),
    parse: params => ({ query: params.get("q") || "", scope: params.get("scope") || "all" }),
    serialize: route => searchHash(route.query, route.scope)
  },
  catalog: {
    hashId: "toy-catalog",
    normalize: route => ({
      type: "catalog",
      scope: normalizeCatalogRouteScope(route.scope),
      series: normalizeCatalogSeries(route.series || "all"),
      sort: normalizeCatalogRouteSort(route.sort),
      page: normalizeCatalogRoutePage(route.page),
      query: normalizeCatalogRouteQuery(route.query ?? route.q)
    }),
    parse: params => ({
      scope: params.get("scope"),
      series: params.get("series") || "all",
      sort: params.get("sort"),
      page: params.get("page"),
      query: params.get("q") || ""
    }),
    serialize: route => {
      const params = new URLSearchParams();
      params.set("scope", route.scope);
      params.set("series", route.series);
      params.set("sort", route.sort);
      params.set("page", String(route.page));
      if (route.query) params.set("q", route.query);
      return `#toy-catalog?${params.toString()}`;
    }
  },
  "category-release": {
    hashId: "toy-release",
    normalize: route => ({ type: "category-release", options: { ...(route.options || {}) } }),
    serialize: () => "#toy-release"
  },
  "category-anime": {
    hashId: "anime-character",
    normalize: route => ({
      type: "category-anime",
      season: normalizeAnimeCharacterRouteSeason(route.season ?? route.options?.season),
      page: normalizeCatalogRoutePage(route.page ?? route.options?.page),
      query: normalizeCatalogRouteQuery(route.query ?? route.q ?? route.options?.query ?? route.options?.q)
    }),
    parse: params => ({
      season: params.get("season") || "all",
      page: params.get("page"),
      query: params.get("q") || ""
    }),
    serialize: route => {
      const params = new URLSearchParams();
      if (route.season !== "all") params.set("season", route.season);
      if (route.query) params.set("q", route.query);
      if (route.page > 1) params.set("page", String(route.page));
      return params.size ? `#anime-character?${params.toString()}` : "#anime-character";
    }
  },
  "category-anime-episodes": {
    hashId: "anime-episode",
    normalize: route => ({ type: "category-anime-episodes", options: { ...(route.options || {}) } }),
    serialize: () => "#anime-episode"
  },
  "rare-bey-get-list": {
    hashId: "rare-bey-get-list",
    normalize: route => ({
      type: "rare-bey-get-list",
      options: normalizeRareBeyGetListRouteOptions({ ...(route.options || {}), ...route })
    }),
    parse: params => ({
      region: params.get("region") || "",
      series: params.get("series") || "",
      backProductId: params.get("backProductId") || "",
      backRelease: params.get("backRelease") === "1"
    }),
    serialize: route => {
      const params = new URLSearchParams();
      params.set("region", route.options.region);
      params.set("series", route.options.series);
      if (route.options.backProductId) params.set("backProductId", route.options.backProductId);
      if (route.options.backRelease) params.set("backRelease", "1");
      return `#rare-bey-get-list?${params.toString()}`;
    }
  },
  detail: {
    normalize: route => {
      const id = String(route.id || "");
      return id ? { type: "detail", id, options: { ...(route.options || {}) } } : { type: "overview" };
    },
    serialize: route => route.id ? `#${route.id}` : ""
  }
};
const routeTypeByHashId = new Map(
  Object.entries(routeCodecs).filter(([, codec]) => codec.hashId).map(([type, codec]) => [codec.hashId, type])
);

function normalizeRoute(route = {}) {
  const type = route?.type || (route?.id ? "detail" : "overview");
  return (routeCodecs[type] || routeCodecs.overview).normalize(route || {});
}

function parseRouteFromHash(hash = "") {
  const { id, params } = routeHashParts(hash);
  if (!id) return routeCodecs.overview.normalize();
  const type = routeTypeByHashId.get(id) || "detail";
  const codec = routeCodecs[type];
  return normalizeRoute({ type, id, ...(codec.parse?.(params) || {}) });
}

function serializeRoute(route = {}) {
  const normalizedRoute = normalizeRoute(route);
  return routeCodecs[normalizedRoute.type].serialize(normalizedRoute);
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
