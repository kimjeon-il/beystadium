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
const routeIfNeeded = route => {
  if (appState.applyingRoute) return false;
  navigateToRoute(route);
  return true;
};
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

async function restoreDetailOriginPanel(context, detailFeature) {
  const originRoute = routeSnapshot(context?.originRoute);
  if (!originRoute || !isPrimaryRoute(originRoute)) return false;
  const originState = context?.originState || {};
  appState.modalOriginRoute = routeSnapshot(originRoute);
  appState.modalOriginRouteExplicit = context?.originExplicit === true;
  rememberPrimaryRoute(originRoute);

  if (originRoute.type === "catalog") {
    const catalog = await loadCatalogFeature();
    catalog.openCategoryCatalog({ ...originRoute, updateHash: false, preserveSearch: true });
    catalog.restoreStoredCatalogOrigin(originState);
  } else if (originRoute.type === "search") {
    const search = await loadSearchFeature();
    const scope = originState.globalScope || originRoute.scope || "all";
    const query = typeof originState.globalQuery === "string" ? originState.globalQuery : originRoute.query || "";
    search.setGlobalSearchState(query, scope);
    search.openSearchResults({ replace: true, updateHash: false });
  } else if (originRoute.type === "category-release") {
    const release = await loadReleaseFeature();
    await release.openCategoryReleaseDetail({
      ...(originRoute.options || {}),
      region: originState.releaseRegion || originRoute.options?.region,
      series: originState.releaseSeries || originRoute.options?.series,
      releaseQuery: typeof originState.releaseQuery === "string" ? originState.releaseQuery : originRoute.options?.releaseQuery,
      releaseSort: originState.releaseSort || originRoute.options?.releaseSort,
      updateHash: false,
      preserveSearch: true
    });
  } else if (originRoute.type === "category-anime") {
    const anime = await loadAnimeFeature();
    anime.openCategoryAnimePage({
      ...originRoute,
      season: originState.animeSeason || originRoute.season,
      query: typeof originState.animeQuery === "string" ? originState.animeQuery : originRoute.query,
      page: originState.animePage || originRoute.page,
      updateHash: false,
      preserveSearch: true
    });
    anime.restoreStoredAnimeOrigin(originState);
  } else if (originRoute.type === "category-anime-episodes") {
    const anime = await loadAnimeFeature();
    await anime.openCategoryAnimeEpisodesDetail({
      ...(originRoute.options || {}),
      animeSeason: originState.animeSeason || originRoute.options?.animeSeason,
      animeQuery: typeof originState.animeQuery === "string" ? originState.animeQuery : originRoute.options?.animeQuery,
      updateHash: false,
      preserveSearch: true
    });
  } else {
    activatePrimarySection("overview", { preserveSearch: true });
  }

  detailFeature.modalController.scrollY = detailFeature.validScrollY(originState.scrollY);
  detailFeature.modalController.pendingScrollY = detailFeature.modalController.scrollY;
  detailFeature.restorePageScroll(detailFeature.modalController.scrollY);
  return true;
}
async function restoreDetailFallbackOriginIfNeeded(restoredContext, fallbackOriginRoute, detailFeature) {
  const restoredOriginRoute = routeSnapshot(restoredContext?.originRoute);
  if (restoredOriginRoute && isPrimaryRoute(restoredOriginRoute)
    && (restoredOriginRoute.type !== "overview" || restoredContext?.originExplicit === true)) {
    return restoreDetailOriginPanel(restoredContext, detailFeature);
  }
  if (appState.modalOriginRouteExplicit && appState.modalOriginRoute && isPrimaryRoute(appState.modalOriginRoute)) {
    return restoreDetailOriginPanel({
      originRoute: appState.modalOriginRoute,
      originState: detailFeature.modalOriginState(appState.modalOriginRoute),
      originExplicit: true
    }, detailFeature);
  }
  if (fallbackOriginRoute && (!appState.modalOriginRoute || appState.modalOriginRoute.type === "overview")) {
    return restoreDetailOriginPanel({ originRoute: fallbackOriginRoute, originState: {} }, detailFeature);
  }
  return false;
}

let routeApplyGeneration = 0;
async function applyRoute(route = parseRouteFromHash(window.location.hash), { preserveScroll = false, preserveSearch = false } = {}) {
  let normalizedRoute = normalizeRoute(route || { type: "overview" });
  const generation = ++routeApplyGeneration;
  const primaryRoute = isPrimaryRoute(normalizedRoute);
  const ready = primaryRoute
    ? await preparePrimaryRoute(normalizedRoute)
    : await BeystadiumDataStore.ensureRoute(normalizedRoute);
  if (!ready || generation !== routeApplyGeneration) return false;
  const modalOpen = Boolean(document.querySelector("#detailModal")?.open);
  const needsDetail = isDetailRoute(normalizedRoute) || normalizedRoute.type === "rare-bey-get-list" || modalOpen;
  const detailFeature = needsDetail ? await loadDetailFeature() : null;
  if (!primaryRoute) await ensureStyles(routeStyleKeys(normalizedRoute, detailFeature));
  if (generation !== routeApplyGeneration) return false;

  let normalizedRouteKey = appliedRouteKey(normalizedRoute);
  const preservePrimaryReturn = Boolean(isPrimaryRoute(normalizedRoute) && (modalOpen || appState.modalOriginRoute));
  const shouldPreserveScroll = preserveScroll || preservePrimaryReturn;
  const shouldPreserveSearch = preserveSearch || preservePrimaryReturn;
  appState.applyingRoute = true;
  try {
    if (isPrimaryRoute(normalizedRoute)) {
      rememberPrimaryRoute(normalizedRoute);
      detailFeature?.closeModalSession();
    } else if (isDetailRoute(normalizedRoute)) {
      syncModalOriginRoute(normalizedRoute);
    }

    if (normalizedRoute.type === "overview") {
      activatePrimarySection("overview", { preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "search") {
      const search = await loadSearchFeature();
      search.setGlobalSearchState(normalizedRoute.query || "", normalizedRoute.scope || "all");
      search.openSearchResults({ replace: true, updateHash: false });
    } else if (normalizedRoute.type === "catalog") {
      const catalog = await loadCatalogFeature();
      catalog.openCategoryCatalog({ ...normalizedRoute, updateHash: false, preserveSearch: shouldPreserveSearch });
      catalog.syncCatalogRouteHash({ replace: true, force: true });
      normalizedRouteKey = appliedRouteKey(catalog.catalogRouteFromState());
    } else if (normalizedRoute.type === "category-release") {
      const release = await loadReleaseFeature();
      await release.openCategoryReleaseDetail({ ...routeApplyOptions(normalizedRoute), preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "category-anime") {
      const anime = await loadAnimeFeature();
      anime.openCategoryAnimePage({ ...normalizedRoute, updateHash: false, preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "category-anime-episodes") {
      const anime = await loadAnimeFeature();
      await anime.openCategoryAnimeEpisodesDetail({ ...routeApplyOptions(normalizedRoute), preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "rare-bey-get-list") {
      const restoredContext = detailFeature.restoredModalContext("rare-bey-get-list");
      const options = { ...(restoredContext?.options || {}), ...routeApplyOptions(normalizedRoute) };
      await restoreDetailFallbackOriginIfNeeded(restoredContext, {
        type: "category-release",
        options: { region: options.region, series: options.series }
      }, detailFeature);
      detailFeature.openRareBeyGetListDetail(options);
    } else if (isDetailRoute(normalizedRoute) && normalizedRoute.id) {
      const restoredContext = detailFeature.restoredModalContext(normalizedRoute.id);
      await restoreDetailFallbackOriginIfNeeded(restoredContext, detailFallbackOriginRoute(normalizedRoute.id), detailFeature);
      const options = { ...(restoredContext?.options || {}), ...routeApplyOptions(normalizedRoute) };
      await detailFeature.openDetailByKind(restoredContext?.kind || "", normalizedRoute.id, options);
    }
  } finally {
    appState.applyingRoute = false;
    appState.lastAppliedRouteKey = normalizedRouteKey;
  }

  if (isPrimaryRoute(normalizedRoute)) {
    if (shouldPreserveScroll && detailFeature) detailFeature.restorePageScroll(detailFeature.modalController.scrollY);
    else stabilizePrimaryRouteScroll();
  }
  return true;
}

const loadDetailCall = method => (...args) => loadDetailFeature().then(module => module[method](...args));
registerAppServices({
  activatePrimarySection,
  applyRoute,
  bindSearchInput,
  cleanupModelViewer: () => {},
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
    if (canonicalRouteKey === appState.lastAppliedRouteKey) return;
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

export { applyCurrentHashRoute, applyRoute, routerReady };
