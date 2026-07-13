import { appState } from "#app/state";
import { isPrimaryRoute, routeSnapshot } from "#app/route-parser";
import { animeSearch, catalogSearch, globalSearch, globalSearchScopeValue, mobileDrawerSearch } from "#app/ui-core";

const modalContextStorageKey = "beyArchiveModalContext";
const inputQuery = input => input?.value?.trim() || "";
const globalSearchQuery = () => inputQuery(globalSearch) || inputQuery(mobileDrawerSearch);
const catalogSearchQuery = () => inputQuery(catalogSearch);
const animeSearchQuery = () => inputQuery(animeSearch);
const currentPageScrollY = () => window.scrollY || document.documentElement.scrollTop || 0;
const validScrollY = value => {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? Math.round(numeric) : 0;
};
const restorePageScroll = value => {
  const targetY = validScrollY(value);
  const rootStyle = document.documentElement.style;
  const previousScrollBehavior = rootStyle.scrollBehavior;
  rootStyle.scrollBehavior = "auto";
  window.scrollTo(0, targetY);
  requestAnimationFrame(() => {
    window.scrollTo(0, targetY);
    if (previousScrollBehavior) rootStyle.scrollBehavior = previousScrollBehavior;
    else rootStyle.removeProperty("scroll-behavior");
  });
};
const modalOriginRouteSnapshot = () => {
  const origin = routeSnapshot(appState.modalOriginRoute) || routeSnapshot(appState.lastPrimaryRoute);
  return origin && isPrimaryRoute(origin) ? origin : null;
};
const modalOriginStateGetters = {
  catalog: () => ({
    catalogQuery: catalogSearchQuery(),
    catalogSeries: appState.selectedCatalogSeries,
    catalogSort: appState.activeCatalogSort,
    catalogPage: appState.currentCatalogPage
  }),
  search: () => ({
    globalQuery: globalSearchQuery(),
    globalScope: globalSearchScopeValue()
  }),
  "category-release": () => ({
    releaseQuery: appState.activeReleaseQuery,
    releaseRegion: appState.activeReleaseRegion,
    releaseSeries: appState.activeReleaseSeries,
    releaseSort: { ...appState.activeReleaseSort }
  }),
  "category-anime": () => ({
    animeSeason: typeof appState.activeAnimeCharacterSeason === "string" ? appState.activeAnimeCharacterSeason : "all",
    animeQuery: animeSearchQuery(),
    animePage: appState.currentAnimePage
  }),
  "category-anime-episodes": () => ({
    animeSeason: appState.activeAnimeSeason,
    animeQuery: appState.activeAnimeEpisodeQuery
  })
};
const modalOriginState = originRoute => ({
  scrollY: currentPageScrollY(),
  ...(modalOriginStateGetters[originRoute?.type]?.() || {})
});
const modalContextOptionKeys = [
  "backId",
  "backProductId",
  "region",
  "series",
  "releaseQuery",
  "animeSeason",
  "animeQuery",
  "rareBeyGetListRegion",
  "rareBeyGetListSeries",
  "rareBeyGetListBackProductId"
];
const modalContextOptions = options => {
  const context = Object.fromEntries(modalContextOptionKeys
    .map(key => [key, options?.[key]])
    .filter(([, value]) => value));
  if (options?.backRelease) context.backRelease = true;
  if (options?.backRareBeyGetList) context.backRareBeyGetList = true;
  if (options?.rareBeyGetListBackRelease) context.rareBeyGetListBackRelease = true;
  if (options?.fromAnimeList) context.fromAnimeList = true;
  if (options?.releaseSort?.key && options?.releaseSort?.direction) context.releaseSort = options.releaseSort;
  return context;
};

const rememberActiveDetailModalContext = context => {
  if (context?.kind === "category-release" || context?.kind === "category-anime-episodes") return;
  appState.activeDetailModalContext = context;
};
const clearActiveDetailModalContext = () => {
  appState.activeDetailModalContext = null;
};
function rememberModalContext(kind, id, options = {}) {
  const originRoute = modalOriginRouteSnapshot();
  const context = { kind, id, options: modalContextOptions(options) };
  if (originRoute) {
    context.originRoute = originRoute;
    context.originState = modalOriginState(originRoute);
    if (appState.modalOriginRouteExplicit) context.originExplicit = true;
  }
  rememberActiveDetailModalContext(context);
  try {
    sessionStorage.setItem(modalContextStorageKey, JSON.stringify(context));
  } catch {
    // Browsers can disable sessionStorage; the modal still works without refresh restoration.
  }
}
function restoredModalContext(id) {
  try {
    const context = JSON.parse(sessionStorage.getItem(modalContextStorageKey) || "null");
    return context?.id === id ? context : null;
  } catch {
    return null;
  }
}
function clearModalContext() {
  try {
    sessionStorage.removeItem(modalContextStorageKey);
  } catch {
    // Ignore storage restrictions.
  }
}

export {
  clearActiveDetailModalContext,
  clearModalContext,
  currentPageScrollY,
  modalOriginState,
  rememberModalContext,
  restorePageScroll,
  restoredModalContext,
  validScrollY
};
