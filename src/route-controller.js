import { appState } from "#app/state";
import {
  BeystadiumDataStore,
  bookItemsById,
  catalogCoreItemsById,
  gameItemsById,
  productItemsById,
  toolsItemsById
} from "#app/data-store";
import {
  loadAnimeFeature,
  loadCatalogFeature,
  loadDetailFeature,
  loadReleaseFeature,
  loadSearchFeature,
  openAnimeEpisodeDetail,
  preparePrimaryRoute
} from "#app/feature-loaders";
import {
  isDetailRoute,
  isPrimaryRoute,
  normalizeRoute,
  parseRouteFromHash,
  routeSnapshot,
  serializeRoute
} from "#app/route-parser";
import {
  appliedRouteKey,
  currentPathWithSearch,
  navigateToRoute,
  rememberPrimaryRoute,
  routeIfNeeded,
  stabilizePrimaryRouteScroll,
  syncModalOriginRoute
} from "#app/navigation";
import { registerAppServices } from "#app/services";
import {
  activatePrimarySection,
  bindSearchInput,
  closeOpenCatalogDropdowns,
  closeSearchHelpPopovers,
  setDropdownOption,
  setMobileDrawerOpen
} from "#app/shell-controller";
import { ensureStyles, routeStyleManifest } from "#app/style-loader";

const routeApplyOptions = (route = {}) => ({ ...(route.options || {}), updateHash: false });
const isAnimeEpisodeDetailHash = id => /(?:^|-)EPISODE-\d+$/.test(String(id || ""));
const catalogDetailFallbackScope = id => catalogCoreItemsById.get(id)?.type === "bey" ? "bey" : "parts";
const searchFallbackRouteForItem = item => ({ type: "search", query: item?.name || "", scope: "all" });

function detailFallbackOriginRoute(id = "") {
  if (productItemsById.has(id)) return { type: "category-release" };
  if (toolsItemsById.has(id)) return { type: "catalog", scope: "tools" };
  if (catalogCoreItemsById.has(id)) return { type: "catalog", scope: catalogDetailFallbackScope(id) };
  if (isAnimeEpisodeDetailHash(id)) return { type: "category-anime-episodes" };
  if (bookItemsById.has(id)) return searchFallbackRouteForItem(bookItemsById.get(id));
  if (gameItemsById.has(id)) return searchFallbackRouteForItem(gameItemsById.get(id));
  return null;
}
function detailRouteExists(id = "") {
  return Boolean(
    BeystadiumDataStore.hasItem(id)
    || productItemsById.has(id)
    || catalogCoreItemsById.has(id)
    || toolsItemsById.has(id)
    || bookItemsById.has(id)
    || gameItemsById.has(id)
  );
}
function routeWithKnownDetailFallback(route = {}) {
  const normalized = normalizeRoute(route || { type: "overview" });
  if (!isDetailRoute(normalized) || !normalized.id) return normalized;
  if (detailRouteExists(normalized.id)) return normalized;
  return detailFallbackOriginRoute(normalized.id) || { type: "overview" };
}

const detailBackgroundStyleKeys = id => {
  if (productItemsById.has(id)) return routeStyleManifest["category-release"];
  if (isAnimeEpisodeDetailHash(id)) return routeStyleManifest["category-anime-episodes"];
  if (bookItemsById.has(id) || gameItemsById.has(id)) return routeStyleManifest.search;
  if (catalogCoreItemsById.has(id) || toolsItemsById.has(id)) return routeStyleManifest.catalog;
  return [];
};
const routeStyleKeys = (route, detailFeature) => {
  if (!isDetailRoute(route)) return routeStyleManifest[route.type] || [];
  const restoredOrigin = routeSnapshot(detailFeature?.restoredModalContext(route.id)?.originRoute);
  const backgroundStyles = restoredOrigin && isPrimaryRoute(restoredOrigin)
    ? routeStyleManifest[restoredOrigin.type] || []
    : detailBackgroundStyleKeys(route.id);
  return [...backgroundStyles, "modal"];
};

const primaryRouteOpeners = {
  overview: async (_route, { preserveSearch }) => {
    activatePrimarySection("overview", { preserveSearch });
  },
  search: async (route, { originState }) => {
    const search = await loadSearchFeature();
    const scope = originState?.globalScope || route.scope || "all";
    const query = typeof originState?.globalQuery === "string" ? originState.globalQuery : route.query || "";
    search.setGlobalSearchState(query, scope);
    search.openSearchResults({ replace: true, updateHash: false });
  },
  catalog: async (route, { originState, preserveSearch, syncRoute }) => {
    const catalog = await loadCatalogFeature();
    catalog.openCategoryCatalog({ ...route, updateHash: false, preserveSearch });
    if (originState) catalog.restoreStoredCatalogOrigin(originState);
    if (!syncRoute) return route;
    catalog.syncCatalogRouteHash({ replace: true, force: true });
    return catalog.catalogRouteFromState();
  },
  "category-release": async (route, { originState, preserveSearch }) => {
    const release = await loadReleaseFeature();
    const options = originState ? {
      ...(route.options || {}),
      region: originState.releaseRegion || route.options?.region,
      series: originState.releaseSeries || route.options?.series,
      releaseQuery: typeof originState.releaseQuery === "string" ? originState.releaseQuery : route.options?.releaseQuery,
      releaseSort: originState.releaseSort || route.options?.releaseSort,
      updateHash: false,
      preserveSearch
    } : { ...routeApplyOptions(route), preserveSearch };
    await release.openCategoryReleaseDetail(options);
  },
  "category-anime": async (route, { originState, preserveSearch }) => {
    const anime = await loadAnimeFeature();
    anime.openCategoryAnimePage({
      ...route,
      ...(originState ? {
        season: originState.animeSeason || route.season,
        query: typeof originState.animeQuery === "string" ? originState.animeQuery : route.query,
        page: originState.animePage || route.page
      } : {}),
      updateHash: false,
      preserveSearch
    });
    if (originState) anime.restoreStoredAnimeOrigin(originState);
  },
  "category-anime-episodes": async (route, { originState, preserveSearch }) => {
    const anime = await loadAnimeFeature();
    const options = originState ? {
      ...(route.options || {}),
      animeSeason: originState.animeSeason || route.options?.animeSeason,
      animeQuery: typeof originState.animeQuery === "string" ? originState.animeQuery : route.options?.animeQuery,
      updateHash: false,
      preserveSearch
    } : { ...routeApplyOptions(route), preserveSearch };
    await anime.openCategoryAnimeEpisodesDetail(options);
  }
};

const openPrimaryRoute = async (route, options = {}) => {
  const open = primaryRouteOpeners[route.type];
  if (!open) throw new Error(`Unsupported primary route: ${route.type}`);
  return open(route, options);
};

async function restoreDetailOriginPanel(context, detailFeature) {
  const originRoute = routeSnapshot(context?.originRoute);
  if (!originRoute || !isPrimaryRoute(originRoute)) return false;
  const originState = context?.originState || {};
  appState.modal.originRoute = routeSnapshot(originRoute);
  appState.modal.originExplicit = context?.originExplicit === true;
  rememberPrimaryRoute(originRoute);

  await openPrimaryRoute(originRoute, { originState, preserveSearch: true, syncRoute: false });

  detailFeature.modalController.scrollY = detailFeature.validScrollY(originState.scrollY);
  detailFeature.modalController.pendingScrollY = detailFeature.modalController.scrollY;
  detailFeature.restorePageScroll(detailFeature.modalController.scrollY);
  return true;
}
const restorableStoredOriginContext = context => {
  const originRoute = routeSnapshot(context?.originRoute);
  if (!originRoute || !isPrimaryRoute(originRoute)) return null;
  if (originRoute.type === "overview" && context?.originExplicit !== true) return null;
  return context;
};
const explicitModalOriginContext = detailFeature => {
  if (!appState.modal.originExplicit || !appState.modal.originRoute || !isPrimaryRoute(appState.modal.originRoute)) return null;
  return {
    originRoute: appState.modal.originRoute,
    originState: detailFeature.modalOriginState(appState.modal.originRoute),
    originExplicit: true
  };
};
const fallbackDetailOriginContext = fallbackOriginRoute => {
  if (!fallbackOriginRoute || (appState.modal.originRoute && appState.modal.originRoute.type !== "overview")) return null;
  return { originRoute: fallbackOriginRoute, originState: {} };
};
async function restoreDetailFallbackOriginIfNeeded(restoredContext, fallbackOriginRoute, detailFeature) {
  const originContext = restorableStoredOriginContext(restoredContext)
    || explicitModalOriginContext(detailFeature)
    || fallbackDetailOriginContext(fallbackOriginRoute);
  return originContext ? restoreDetailOriginPanel(originContext, detailFeature) : false;
}

let routeApplyGeneration = 0;
async function openRareBeyGetRoute(route, detailFeature) {
  const restoredContext = detailFeature.restoredModalContext("rare-bey-get-list");
  const options = { ...(restoredContext?.options || {}), ...routeApplyOptions(route) };
  await restoreDetailFallbackOriginIfNeeded(restoredContext, {
    type: "category-release",
    options: { region: options.region, series: options.series }
  }, detailFeature);
  detailFeature.openRareBeyGetListDetail(options);
}
async function openDetailRoute(route, detailFeature) {
  const restoredContext = detailFeature.restoredModalContext(route.id);
  await restoreDetailFallbackOriginIfNeeded(restoredContext, detailFallbackOriginRoute(route.id), detailFeature);
  const options = { ...(restoredContext?.options || {}), ...routeApplyOptions(route) };
  await detailFeature.openDetailByKind(restoredContext?.kind || "", route.id, options);
}
async function prepareRouteApplication(route) {
  const generation = ++routeApplyGeneration;
  const primaryRoute = isPrimaryRoute(route);
  const ready = primaryRoute
    ? await preparePrimaryRoute(route)
    : await BeystadiumDataStore.ensureRoute(route);
  if (!ready || generation !== routeApplyGeneration) return null;

  const modalOpen = Boolean(document.querySelector("#detailModal")?.open);
  const needsDetail = isDetailRoute(route) || route.type === "rare-bey-get-list" || modalOpen;
  const detailFeature = needsDetail ? await loadDetailFeature() : null;
  if (!primaryRoute) await ensureStyles(routeStyleKeys(route, detailFeature));
  if (generation !== routeApplyGeneration) return null;
  return { route, primaryRoute, modalOpen, detailFeature };
}
const beginRouteApplication = ({ route, primaryRoute, detailFeature }) => {
  if (primaryRoute) {
    rememberPrimaryRoute(route);
    detailFeature?.closeModalSession();
    return;
  }
  if (isDetailRoute(route)) syncModalOriginRoute(route);
};
async function openPreparedRoute(context, preserveSearch) {
  const { route, primaryRoute, detailFeature } = context;
  if (primaryRoute) {
    return openPrimaryRoute(route, {
      preserveSearch,
      syncRoute: route.type === "catalog"
    });
  }
  if (route.type === "rare-bey-get-list") return openRareBeyGetRoute(route, detailFeature);
  if (isDetailRoute(route) && route.id) return openDetailRoute(route, detailFeature);
  return null;
}
const restoreAppliedPrimaryScroll = (context, preserveScroll) => {
  if (!context.primaryRoute) return;
  if (preserveScroll) {
    context.detailFeature?.restorePageScroll(context.detailFeature.modalController.scrollY);
    return;
  }
  stabilizePrimaryRouteScroll();
};
async function applyRoute(route = parseRouteFromHash(window.location.hash), { preserveScroll = false, preserveSearch = false } = {}) {
  const normalizedRoute = normalizeRoute(route || { type: "overview" });
  const context = await prepareRouteApplication(normalizedRoute);
  if (!context) return false;

  let normalizedRouteKey = appliedRouteKey(normalizedRoute);
  const preservePrimaryReturn = Boolean(context.primaryRoute && (context.modalOpen || appState.modal.originRoute));
  const shouldPreserveScroll = preserveScroll || preservePrimaryReturn;
  const shouldPreserveSearch = preserveSearch || preservePrimaryReturn;
  appState.routing.applying = true;
  try {
    beginRouteApplication(context);
    const appliedRoute = await openPreparedRoute(context, shouldPreserveSearch);
    if (appliedRoute) normalizedRouteKey = appliedRouteKey(appliedRoute);
  } finally {
    appState.routing.applying = false;
    appState.routing.lastAppliedKey = normalizedRouteKey;
  }

  restoreAppliedPrimaryScroll(context, shouldPreserveScroll);
  return true;
}

const loadDetailCall = method => (...args) => loadDetailFeature().then(module => module[method](...args));
registerAppServices({
  activatePrimarySection,
  applyRoute,
  bindSearchInput,
  closeOpenCatalogDropdowns,
  closeSearchHelpPopovers,
  openAnimeEpisodeDetail,
  openCategoryAnimeEpisodesDetail: (...args) => loadAnimeFeature().then(module => module.openCategoryAnimeEpisodesDetail(...args)),
  openBookDetail: loadDetailCall("openBookDetail"),
  openDetail: loadDetailCall("openDetail"),
  openGameDetail: loadDetailCall("openGameDetail"),
  openProductEntry: loadDetailCall("openProductEntry"),
  openSearchResults: (...args) => loadSearchFeature().then(module => module.openSearchResults(...args)),
  openToolsDetail: loadDetailCall("openToolsDetail"),
  queueModalTransition: loadDetailCall("queueModalTransition"),
  routeIfNeeded,
  setDropdownOption,
  setMobileDrawerOpen,
  syncAnimeRouteHash: (...args) => loadAnimeFeature().then(module => module.syncAnimeRouteHash(...args))
});

const applyCurrentHashRoute = async () => {
  const route = routeWithKnownDetailFallback(parseRouteFromHash(window.location.hash));
  const canonicalHash = serializeRoute(route);
  const canonicalRouteKey = `${currentPathWithSearch()}${canonicalHash}`;
  try {
    if (canonicalRouteKey === appState.routing.lastAppliedKey) return;
    if (window.location.hash !== canonicalHash) {
      try {
        history.replaceState(null, "", canonicalRouteKey);
      } catch {
        // URL canonicalization is best-effort; route application is authoritative.
      }
    }
    const applied = await applyRoute(route);
    if (!applied) return;
    if (isDetailRoute(route) && !document.querySelector("#detailModal")?.open) {
      navigateToRoute(detailFallbackOriginRoute(route.id) || { type: "overview" }, {
        replace: true,
        preserveSearch: true
      });
    }
  } finally {
    document.documentElement.classList.remove("route-booting");
  }
};

try {
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
} catch {
  // Embedded browsers can deny history mutations; routing still works.
}
const routerReady = applyCurrentHashRoute();
window.addEventListener("hashchange", () => void applyCurrentHashRoute());
window.addEventListener("popstate", () => void applyCurrentHashRoute());

export { routerReady };
