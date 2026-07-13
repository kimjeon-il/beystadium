import { normalizeAnimeCharacterSeason } from "#app/anime-core";
import { appState } from "#app/state";
import { appServices } from "#app/services";
import { catalogCoreItemsById, toolsItemsById } from "#app/data-store";
import { catalogSortOptions } from "#app/catalog-model";
import { globalSearchQuery, normalizeSearchScope } from "#app/search-engine";
import {
  normalizeCatalogSeries,
  releaseRegionLabels,
  releaseSeriesLabels
} from "#app/release-core";
import { globalSearchScopeValue } from "#app/ui-core";

const searchHash = (query = globalSearchQuery(), scope = globalSearchScopeValue()) => {
  const params = new URLSearchParams();
  params.set("q", query);
  params.set("scope", normalizeSearchScope(scope || "all"));
  return `#search?${params.toString()}`;
};
const catalogRouteScopes = new Set(["all", "bey", "parts", "tools"]);
const normalizeCatalogRouteScope = scope => catalogRouteScopes.has(scope) ? scope : "all";
const defaultCatalogSort = () => catalogSortOptions[2]?.value || "latest";
const normalizeCatalogRouteSort = sort =>
  catalogSortOptions.some(option => option.value === sort) ? sort : defaultCatalogSort();
const normalizeCatalogRoutePage = page => {
  const numeric = Number.parseInt(page, 10);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : 1;
};
const normalizeCatalogRouteQuery = query => String(query || "").trim();
const normalizeAnimeCharacterRouteSeason = season =>
  typeof normalizeAnimeCharacterSeason === "function" ? normalizeAnimeCharacterSeason(season) : "all";
const normalizeReleaseRouteRegion = region => releaseRegionLabels[region] ? region : "jp";
const normalizeReleaseRouteSeries = series => releaseSeriesLabels[series] ? series : "x";
const normalizeRareBeyGetListRouteOptions = options => {
  const region = normalizeReleaseRouteRegion(options?.region);
  return {
    region,
    series: normalizeReleaseRouteSeries(options?.series),
    ...(options?.backProductId ? { backProductId: String(options.backProductId) } : {}),
    ...(options?.backRelease ? { backRelease: true } : {})
  };
};
const currentPathWithSearch = () => `${window.location.pathname}${window.location.search}`;
const routeHashParts = (hash = window.location.hash) => {
  const raw = (hash || "").replace(/^#/, "");
  const queryIndex = raw.indexOf("?");
  return {
    id: queryIndex >= 0 ? raw.slice(0, queryIndex) : raw,
    params: new URLSearchParams(queryIndex >= 0 ? raw.slice(queryIndex + 1) : "")
  };
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
  if (route.type === "category-release") return {
    type: "category-release",
    options: { ...(route.options || {}) }
  };
  if (route.type === "category-anime") return {
    type: "category-anime",
    season: normalizeAnimeCharacterRouteSeason(route.season ?? route.options?.season),
    page: normalizeCatalogRoutePage(route.page ?? route.options?.page),
    query: normalizeCatalogRouteQuery(route.query ?? route.q ?? route.options?.query ?? route.options?.q)
  };
  if (route.type === "category-anime-episodes") return {
    type: "category-anime-episodes",
    options: { ...(route.options || {}) }
  };
  if (route.type === "rare-bey-get-list") {
    return {
      type: "rare-bey-get-list",
      options: normalizeRareBeyGetListRouteOptions({ ...(route.options || {}), ...route })
    };
  }
  if (route.type === "detail" || route.id) {
    const id = String(route.id || "");
    return id ? {
      type: "detail",
      id,
      options: { ...(route.options || {}) }
    } : { type: "overview" };
  }
  return { type: "overview" };
}
function parseRouteFromHash(hash = window.location.hash) {
  const { id, params } = routeHashParts(hash);
  if (!id) return { type: "overview" };
  if (id === "search") return {
    type: "search",
    query: params.get("q") || "",
    scope: normalizeSearchScope(params.get("scope") || "all")
  };
  if (id === "toy-catalog") return {
    type: "catalog",
    scope: normalizeCatalogRouteScope(params.get("scope")),
    series: normalizeCatalogSeries(params.get("series") || "all"),
    sort: normalizeCatalogRouteSort(params.get("sort")),
    page: normalizeCatalogRoutePage(params.get("page")),
    query: normalizeCatalogRouteQuery(params.get("q") || "")
  };
  if (id === "toy-release") return { type: "category-release" };
  if (id === "anime-character") return {
    type: "category-anime",
    season: normalizeAnimeCharacterRouteSeason(params.get("season") || "all"),
    page: normalizeCatalogRoutePage(params.get("page")),
    query: normalizeCatalogRouteQuery(params.get("q") || "")
  };
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
  if (normalizedRoute.type === "search") return searchHash(normalizedRoute.query || "", normalizedRoute.scope || "all");
  if (normalizedRoute.type === "catalog") {
    const params = new URLSearchParams();
    params.set("scope", normalizeCatalogRouteScope(normalizedRoute.scope));
    params.set("series", normalizeCatalogSeries(normalizedRoute.series || "all"));
    params.set("sort", normalizeCatalogRouteSort(normalizedRoute.sort));
    params.set("page", String(normalizeCatalogRoutePage(normalizedRoute.page)));
    if (normalizedRoute.query) params.set("q", normalizeCatalogRouteQuery(normalizedRoute.query));
    return `#toy-catalog?${params.toString()}`;
  }
  if (normalizedRoute.type === "category-release") return "#toy-release";
  if (normalizedRoute.type === "category-anime") {
    const params = new URLSearchParams();
    if (normalizedRoute.season && normalizedRoute.season !== "all") params.set("season", normalizedRoute.season);
    if (normalizedRoute.query) params.set("q", normalizeCatalogRouteQuery(normalizedRoute.query));
    if (normalizeCatalogRoutePage(normalizedRoute.page) > 1) params.set("page", String(normalizeCatalogRoutePage(normalizedRoute.page)));
    const queryString = params.toString();
    return queryString ? `#anime-character?${queryString}` : "#anime-character";
  }
  if (normalizedRoute.type === "category-anime-episodes") return "#anime-episode";
  if (normalizedRoute.type === "rare-bey-get-list") {
    const params = new URLSearchParams();
    const options = normalizeRareBeyGetListRouteOptions(normalizedRoute.options || {});
    params.set("region", options.region);
    params.set("series", options.series);
    if (options.backProductId) params.set("backProductId", options.backProductId);
    if (options.backRelease) params.set("backRelease", "1");
    return `#rare-bey-get-list?${params.toString()}`;
  }
  if (normalizedRoute.id) return `#${normalizedRoute.id}`;
  return "";
}
function isPrimaryRoute(route = {}) {
  if (!route) return false;
  return route.type === "overview" || route.type === "catalog" || route.type === "search" || route.type === "category-release" || route.type === "category-anime" || route.type === "category-anime-episodes";
}
function isDetailRoute(route = {}) {
  if (!route) return false;
  return route.type === "detail";
}
const routeSnapshot = route => route ? normalizeRoute(route) : null;
function rememberPrimaryRoute(route = {}) {
  if (isPrimaryRoute(route)) appState.lastPrimaryRoute = routeSnapshot(route) || { type: "overview" };
}
function syncModalOriginRoute(route = {}, { explicit = false } = {}) {
  if (isDetailRoute(route)) {
    if (!appState.modalOriginRoute) {
      const currentRoute = parseRouteFromHash();
      appState.modalOriginRoute = isPrimaryRoute(currentRoute) ? routeSnapshot(currentRoute) : routeSnapshot(appState.lastPrimaryRoute);
      appState.modalOriginRouteExplicit = Boolean(explicit && appState.modalOriginRoute);
    } else if (explicit) {
      appState.modalOriginRouteExplicit = true;
    }
    return;
  }
  if (isPrimaryRoute(route)) {
    rememberPrimaryRoute(route);
    appState.modalOriginRoute = null;
    appState.modalOriginRouteExplicit = false;
  }
}
function getModalCloseRoute() {
  return routeSnapshot(appState.modalOriginRoute) || detailModalFallbackCloseRoute(appState.activeDetailModalContext);
}
function clearModalOriginRoute() {
  appState.modalOriginRoute = null;
  appState.modalOriginRouteExplicit = false;
}
function stabilizePrimaryRouteScroll() {
  requestAnimationFrame(() => {
    if (!appServices.modal?.open) window.scrollTo(0, 0);
  });
}
const appliedRouteKey = route => `${currentPathWithSearch()}${serializeRoute(route)}`;
function navigateToRoute(route, { replace = false, apply = true, preserveScroll = false, preserveSearch = false } = {}) {
  const normalizedRoute = normalizeRoute(route);
  syncModalOriginRoute(normalizedRoute, { explicit: isDetailRoute(normalizedRoute) });
  const nextHash = serializeRoute(normalizedRoute);
  const nextUrl = `${currentPathWithSearch()}${nextHash}`;
  if (`${currentPathWithSearch()}${window.location.hash}` !== nextUrl) {
    try {
      history[replace ? "replaceState" : "pushState"](null, "", nextUrl);
    } catch {
      // URL writes can be denied in embedded browsers; still apply the route state.
    }
  }
  if (!apply) return Promise.resolve(true);
  const result = appServices.applyRoute(normalizedRoute, { preserveScroll, preserveSearch });
  result?.catch?.(error => console.error(error));
  return result;
}

const detailModalRouteOptions = (options = {}, keys = []) => Object.fromEntries(keys
  .map(key => [key, options[key]])
  .filter(([, value]) => value));
const detailModalFallbackCloseRoute = (context = appState.activeDetailModalContext) => {
  const options = context?.options || {};
  if (options.backRelease) return {
    type: "category-release",
    options: detailModalRouteOptions(options, ["region", "series", "releaseQuery", "releaseSort"])
  };
  if (options.fromAnimeList) return {
    type: "category-anime-episodes",
    options: detailModalRouteOptions(options, ["animeSeason", "animeQuery"])
  };
  const id = context?.id || "";
  if (catalogCoreItemsById.has(id) || toolsItemsById.has(id)) return { type: "catalog", scope: "all" };
  return { type: "overview" };
};

export {
  appliedRouteKey,
  clearModalOriginRoute,
  currentPathWithSearch,
  defaultCatalogSort,
  getModalCloseRoute,
  isDetailRoute,
  isPrimaryRoute,
  navigateToRoute,
  normalizeCatalogRouteSort,
  normalizeRoute,
  parseRouteFromHash,
  rememberPrimaryRoute,
  routeSnapshot,
  serializeRoute,
  stabilizePrimaryRouteScroll,
  syncModalOriginRoute
};
