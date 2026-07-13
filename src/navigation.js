import { appState } from "#app/state";
import { appServices } from "#app/services";
import { catalogCoreItemsById, toolsItemsById } from "#app/data-store";
import {
  isDetailRoute,
  isPrimaryRoute,
  normalizeRoute,
  parseRouteFromHash,
  routeSnapshot,
  serializeRoute
} from "#app/route-parser";

const currentPathWithSearch = () => `${window.location.pathname}${window.location.search}`;
const rememberPrimaryRoute = route => {
  if (isPrimaryRoute(route)) appState.lastPrimaryRoute = routeSnapshot(route) || { type: "overview" };
};
function syncModalOriginRoute(route = {}, { explicit = false } = {}) {
  if (isDetailRoute(route)) {
    if (!appState.modalOriginRoute) {
      const currentRoute = parseRouteFromHash(window.location.hash);
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
const getModalCloseRoute = () => routeSnapshot(appState.modalOriginRoute)
  || detailModalFallbackCloseRoute(appState.activeDetailModalContext);
const clearModalOriginRoute = () => {
  appState.modalOriginRoute = null;
  appState.modalOriginRouteExplicit = false;
};
const stabilizePrimaryRouteScroll = () => requestAnimationFrame(() => {
  if (!appServices.modal?.open) window.scrollTo(0, 0);
});
const appliedRouteKey = route => `${currentPathWithSearch()}${serializeRoute(route)}`;
function navigateToRoute(route, { replace = false, apply = true, preserveScroll = false, preserveSearch = false } = {}) {
  const normalizedRoute = normalizeRoute(route);
  syncModalOriginRoute(normalizedRoute, { explicit: isDetailRoute(normalizedRoute) });
  const nextUrl = `${currentPathWithSearch()}${serializeRoute(normalizedRoute)}`;
  if (`${currentPathWithSearch()}${window.location.hash}` !== nextUrl) {
    try {
      history[replace ? "replaceState" : "pushState"](null, "", nextUrl);
    } catch {
      // Embedded browsers can deny history writes; route application remains authoritative.
    }
  }
  if (!apply) return Promise.resolve(true);
  const result = appServices.applyRoute(normalizedRoute, { preserveScroll, preserveSearch });
  result?.catch?.(error => console.error(error));
  return result;
}

export {
  appliedRouteKey,
  clearModalOriginRoute,
  currentPathWithSearch,
  getModalCloseRoute,
  navigateToRoute,
  rememberPrimaryRoute,
  stabilizePrimaryRouteScroll,
  syncModalOriginRoute
};
