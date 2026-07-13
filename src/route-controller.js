import { episodeIndexFromHash, isAnimeEpisodeHash } from "#app/anime-core";
import { appState } from "#app/state";
import { BeystadiumDataStore, bookItemsById, catalogCoreItemsById, gameItemsById, productItemsById, toolsItemsById } from "#app/data-store";
import { syncCatalogScopeState } from "#app/collection-view";
import { itemDisplayName, openBookDetail, openDetail, openDetailByKind, openGameDetail, openProductEntry, openRareBeyGetListDetail, openToolsDetail } from "#app/detail-controller";
import { closeModalTagPopover, positionModalTagPopover } from "#app/detail-view";
import { openAnimeEpisodeDetail, openCategoryAnimeEpisodesDetail, openCategoryReleaseDetail } from "#app/feature-loaders";
import { finishModalOpen, modal, modalBackButtonMarkup, modalController, queueModalTransition, routeIfNeeded, scheduleModalViewportSync, setModalContent } from "#app/modal-controller";
import { modalOriginState, restorePageScroll, restoredModalContext, validScrollY } from "#app/modal-context";
import { appliedRouteKey, currentPathWithSearch, isDetailRoute, isPrimaryRoute, navigateToRoute, normalizeRoute, parseRouteFromHash, rememberPrimaryRoute, routeSnapshot, serializeRoute, stabilizePrimaryRouteScroll, syncModalOriginRoute } from "#app/route-core";
import { registerAppServices } from "#app/services";
import { closeAllSearchPreviews } from "#app/search-feature";
import { menuButton, mobileDrawer, mobileDrawerClose } from "#app/ui-core";
import { activatePrimarySection, anySearchHelpPopoverIsOpen, bindSearchInput, catalogRouteFromState, closeDetailModalForPrimaryRoute, closeOpenCatalogDropdowns, closeSearchHelpPopovers, closeSearchHelpPopoversOnScroll, currentMenuTrigger, handleCategoryRouteClick, isMobileDrawerMode, mobileDrawerIsOpen, openCategoryAnimePage, openCategoryCatalog, openSearchResults, positionSearchHelpPopovers, renderCatalogFilterChips, restoreStoredAnimeOrigin, restoreStoredCatalogOrigin, routeApplyOptions, searchHelpPopovers, setDropdownOption, setGlobalSearchState, setMobileDrawerOpen, syncAnimeRouteHash, syncCatalogRouteHash, syncMenuButtonMode } from "#app/view-controller";

async function restoreDetailOriginPanel(context) {
  const originRoute = routeSnapshot(context?.originRoute);
  if (!originRoute || !isPrimaryRoute(originRoute)) return false;
  const originState = context?.originState || {};
  appState.modalOriginRoute = routeSnapshot(originRoute);
  appState.modalOriginRouteExplicit = context?.originExplicit === true;
  rememberPrimaryRoute(originRoute);
  if (originRoute.type === "catalog") {
    openCategoryCatalog({ ...originRoute, updateHash: false, preserveSearch: true });
    restoreStoredCatalogOrigin(originState);
  } else if (originRoute.type === "search") {
    const scope = originState.globalScope || originRoute.scope || "all";
    const query = typeof originState.globalQuery === "string" ? originState.globalQuery : originRoute.query || "";
    setGlobalSearchState(query, scope);
    openSearchResults({ replace: true, updateHash: false });
  } else if (originRoute.type === "category-release") {
    await openCategoryReleaseDetail({
      ...(originRoute.options || {}),
      region: originState.releaseRegion || originRoute.options?.region,
      series: originState.releaseSeries || originRoute.options?.series,
      releaseQuery: typeof originState.releaseQuery === "string" ? originState.releaseQuery : originRoute.options?.releaseQuery,
      releaseSort: originState.releaseSort || originRoute.options?.releaseSort,
      updateHash: false,
      preserveSearch: true
    });
  } else if (originRoute.type === "category-anime") {
    await openCategoryAnimePage({
      ...originRoute,
      season: originState.animeSeason || originRoute.season,
      query: typeof originState.animeQuery === "string" ? originState.animeQuery : originRoute.query,
      page: originState.animePage || originRoute.page,
      updateHash: false,
      preserveSearch: true
    });
    restoreStoredAnimeOrigin(originState);
  } else if (originRoute.type === "category-anime-episodes") {
    await openCategoryAnimeEpisodesDetail({
      ...(originRoute.options || {}),
      animeSeason: originState.animeSeason || originRoute.options?.animeSeason,
      animeQuery: typeof originState.animeQuery === "string" ? originState.animeQuery : originRoute.options?.animeQuery,
      updateHash: false,
      preserveSearch: true
    });
  } else {
    activatePrimarySection("overview", { preserveSearch: true });
  }
  modalController.scrollY = validScrollY(originState.scrollY);
  modalController.pendingScrollY = modalController.scrollY;
  restorePageScroll(modalController.scrollY);
  return true;
}
const isValidAnimeEpisodeDetailId = id =>
  typeof episodeIndexFromHash === "function" && episodeIndexFromHash(id) >= 0;
const isAnimeEpisodeDetailHash = id =>
  typeof isAnimeEpisodeHash === "function" && isAnimeEpisodeHash(id);
const catalogDetailFallbackScope = id => {
  const item = catalogCoreItemsById.get(id);
  return item?.type === "bey" ? "bey" : "parts";
};
const searchFallbackRouteForItem = item => ({
  type: "search",
  query: item?.name || "",
  scope: "all"
});
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
    BeystadiumDataStore?.hasItem(id) ||
    productItemsById.has(id) ||
    catalogCoreItemsById.has(id) ||
    toolsItemsById.has(id) ||
    bookItemsById.has(id) ||
    gameItemsById.has(id) ||
    isValidAnimeEpisodeDetailId(id)
  );
}
function routeWithKnownDetailFallback(route = {}) {
  const normalizedRoute = normalizeRoute(route || { type: "overview" });
  if (!isDetailRoute(normalizedRoute) || !normalizedRoute.id || detailRouteExists(normalizedRoute.id)) return normalizedRoute;
  return detailFallbackOriginRoute(normalizedRoute.id) || { type: "overview" };
}
async function restoreDetailFallbackOriginIfNeeded(restoredContext, fallbackOriginRoute) {
  const restoredOriginRoute = routeSnapshot(restoredContext?.originRoute);
  if (restoredOriginRoute && isPrimaryRoute(restoredOriginRoute) && (restoredOriginRoute.type !== "overview" || restoredContext?.originExplicit === true)) {
    return await restoreDetailOriginPanel(restoredContext);
  }
  if (appState.modalOriginRouteExplicit && appState.modalOriginRoute && isPrimaryRoute(appState.modalOriginRoute)) {
    return await restoreDetailOriginPanel({
      originRoute: appState.modalOriginRoute,
      originState: modalOriginState(appState.modalOriginRoute),
      originExplicit: true
    });
  }
  if (fallbackOriginRoute && (!appState.modalOriginRoute || appState.modalOriginRoute.type === "overview")) {
    return await restoreDetailOriginPanel({ originRoute: fallbackOriginRoute, originState: {} });
  }
  return false;
}
let routeApplyGeneration = 0;
async function applyRoute(route = parseRouteFromHash(), { preserveScroll = false, preserveSearch = false } = {}) {
  const normalizedRoute = normalizeRoute(route || { type: "overview" });
  const generation = ++routeApplyGeneration;
  const ready = await BeystadiumDataStore.ensureRoute(normalizedRoute);
  if (!ready || generation !== routeApplyGeneration) return false;
  let normalizedRouteKey = appliedRouteKey(normalizedRoute);
  const preservePrimaryReturn = Boolean(isPrimaryRoute(normalizedRoute) && (modal?.open || appState.modalOriginRoute));
  const shouldPreserveScroll = preserveScroll || preservePrimaryReturn;
  const shouldPreserveSearch = preserveSearch || preservePrimaryReturn;
  appState.applyingRoute = true;
  try {
    if (isPrimaryRoute(normalizedRoute)) {
      rememberPrimaryRoute(normalizedRoute);
      closeDetailModalForPrimaryRoute();
    } else if (isDetailRoute(normalizedRoute)) {
      syncModalOriginRoute(normalizedRoute);
    }
    if (normalizedRoute.type === "overview") {
      activatePrimarySection("overview", { preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "search") {
      setGlobalSearchState(normalizedRoute.query || "", normalizedRoute.scope || "all");
      openSearchResults({ replace: true, updateHash: false });
    } else if (normalizedRoute.type === "catalog") {
      openCategoryCatalog({ ...normalizedRoute, updateHash: false, preserveSearch: shouldPreserveSearch });
      syncCatalogRouteHash({ replace: true, force: true });
      normalizedRouteKey = appliedRouteKey(catalogRouteFromState());
    } else if (normalizedRoute.type === "category-release") {
      await openCategoryReleaseDetail({ ...routeApplyOptions(normalizedRoute), preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "category-anime") {
      await openCategoryAnimePage({ ...normalizedRoute, updateHash: false, preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "category-anime-episodes") {
      await openCategoryAnimeEpisodesDetail({ ...routeApplyOptions(normalizedRoute), preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "rare-bey-get-list") {
      const restoredContext = restoredModalContext("rare-bey-get-list");
      const rareBeyGetListOptions = { ...(restoredContext?.options || {}), ...routeApplyOptions(normalizedRoute) };
      await restoreDetailFallbackOriginIfNeeded(restoredContext, {
        type: "category-release",
        options: {
          region: rareBeyGetListOptions.region,
          series: rareBeyGetListOptions.series
        }
      });
      openRareBeyGetListDetail(rareBeyGetListOptions);
    } else if (normalizedRoute.type === "detail" && normalizedRoute.id) {
      const hashId = normalizedRoute.id;
      const restoredContext = restoredModalContext(hashId);
      const fallbackOriginRoute = detailFallbackOriginRoute(hashId);
      await restoreDetailFallbackOriginIfNeeded(restoredContext, fallbackOriginRoute);
      const restoredOptions = { ...(restoredContext?.options || {}), ...routeApplyOptions(normalizedRoute) };
      await openDetailByKind(restoredContext?.kind || "", hashId, restoredOptions);
    }
  } finally {
    appState.applyingRoute = false;
    appState.lastAppliedRouteKey = normalizedRouteKey;
  }
  if (isPrimaryRoute(normalizedRoute)) {
    if (shouldPreserveScroll) restorePageScroll(modalController.scrollY);
    else stabilizePrimaryRouteScroll();
  }
  return true;
}
document.querySelectorAll(".topbar > .brand, [data-sidebar-home]").forEach(brand => brand.addEventListener("click", event => {
  event.preventDefault();
  navigateToRoute({ type: "overview" }, { replace: true });
  setMobileDrawerOpen(false);
}));
document.querySelector(".topbar")?.addEventListener("click", event => {
  handleCategoryRouteClick(event);
});
menuButton?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();
  if (isMobileDrawerMode()) setMobileDrawerOpen(!mobileDrawerIsOpen());
});
mobileDrawerClose?.addEventListener("click", event => {
  event.preventDefault();
  setMobileDrawerOpen(false);
  currentMenuTrigger()?.focus();
});
mobileDrawer?.addEventListener("click", event => {
  handleCategoryRouteClick(event);
});
const syncNavigationMode = () => {
  if (!isMobileDrawerMode()) setMobileDrawerOpen(false);
  syncMenuButtonMode();
};
window.addEventListener("resize", () => {
  syncNavigationMode();
  positionSearchHelpPopovers();
  if (modal?.open) scheduleModalViewportSync();
  if (!appState.activeModalTagButton) return;
  if (!modal?.open || !document.body.contains(appState.activeModalTagButton)) {
    closeModalTagPopover();
    return;
  }
  positionModalTagPopover(appState.activeModalTagButton);
});
window.visualViewport?.addEventListener("resize", scheduleModalViewportSync);
window.visualViewport?.addEventListener("scroll", scheduleModalViewportSync);
window.visualViewport?.addEventListener("resize", positionSearchHelpPopovers);
window.visualViewport?.addEventListener("scroll", closeSearchHelpPopoversOnScroll, { passive: true });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && appState.activeSearchPreview) {
    closeAllSearchPreviews();
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && anySearchHelpPopoverIsOpen()) {
    closeSearchHelpPopovers();
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && appState.activeModalTagButton) {
    closeModalTagPopover();
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) setMobileDrawerOpen(false);
});
document.addEventListener("click", event => {
  searchHelpPopovers.forEach(controller => {
    if (controller.isOpen() && !controller.containsEventTarget(event)) controller.close();
  });
  if (appState.activeModalTagButton && !event.target.closest(".modal-tag-info") && !event.target.closest(".modal-tag-popover")) closeModalTagPopover();
  if (!event.target.closest(".topbar") && !event.target.closest(".mobile-drawer")) setMobileDrawerOpen(false);
});

registerAppServices({
  activatePrimarySection,
  applyRoute,
  bindSearchInput,
  closeOpenCatalogDropdowns,
  closeSearchHelpPopovers,
  finishModalOpen,
  itemDisplayName,
  modal,
  modalBackButtonMarkup,
  openAnimeEpisodeDetail,
  openBookDetail,
  openDetail,
  openGameDetail,
  openProductEntry,
  openSearchResults,
  openToolsDetail,
  queueModalTransition,
  routeIfNeeded,
  setDropdownOption,
  setMobileDrawerOpen,
  setModalContent,
  syncAnimeRouteHash
});

syncNavigationMode();
syncCatalogScopeState();
renderCatalogFilterChips();
const applyCurrentHashRoute = async () => {
  const route = routeWithKnownDetailFallback(parseRouteFromHash());
  const canonicalHash = serializeRoute(route);
  const canonicalRouteKey = `${currentPathWithSearch()}${canonicalHash}`;
  try {
    if (canonicalRouteKey === appState.lastAppliedRouteKey) return;
    if (window.location.hash !== canonicalHash) {
      try {
        history.replaceState(null, "", canonicalRouteKey);
      } catch {
        // URL canonicalization is best-effort; route application is the source of truth here.
      }
    }
    const applied = await applyRoute(route);
    if (!applied) return;
    if (isDetailRoute(route) && !modal?.open) {
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
  // Some embedded browsers can deny history mutations; routing still works.
}
void applyCurrentHashRoute();
window.addEventListener("hashchange", () => void applyCurrentHashRoute());
window.addEventListener("popstate", () => void applyCurrentHashRoute());

export {
  applyRoute,
  applyCurrentHashRoute
};
