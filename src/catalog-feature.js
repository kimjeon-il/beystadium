import { appState } from "#app/state";
import {
  activeCatalogSortOption,
  catalogRenderKey,
  catalogSortOptions,
  catalogVisibleItemsCache,
  prepareCatalogSortMetadata
} from "#app/catalog-model";
import { renderCatalogItems, scrollCatalogGridIntoView, syncCatalogScopeState } from "#app/catalog-view";
import { navigateToRoute } from "#app/navigation";
import { defaultCatalogSort, normalizeCatalogRouteSort, normalizeRoute } from "#app/route-parser";
import {
  normalizeCatalogSeries,
  sortDropdownMarkup
} from "#app/release-core";
import {
  catalogQueryChips,
  catalogSearchQuery,
  normalizeCatalogSearchInput,
  removeCatalogQueryChip
} from "#app/search-engine";
import { closeSearchHelpPopovers, initializeSearchHelpController } from "#app/search-help-controller";
import {
  activatePrimarySection,
  bindSearchInput,
  closeCatalogDropdown,
  setDropdownOption
} from "#app/shell-controller";
import {
  activeAppPanel,
  catalogSearch,
  catalogSearchScope,
  catalogSeriesFilter,
  queryChipMarkup,
  setCatalogSearchScope,
  setCatalogSeriesFilter,
  setGlobalSearchScope,
  setMobileDrawerSearchScope,
  setOverviewSearchScope,
  setSearchInputValue
} from "#app/ui-core";

const SEARCH_RENDER_DELAY = 100;
let initialized = false;
let catalogRenderTimer = 0;
let catalogRenderFrame = 0;

const activeAppPanelName = () => activeAppPanel()?.dataset.appPanel || "";
const syncGlobalSearchScopePeers = scope => {
  setGlobalSearchScope(scope);
  setMobileDrawerSearchScope(scope);
  setOverviewSearchScope(scope);
};
const refreshCatalogResults = () => {
  renderCatalogItems();
  syncCatalogScopeState({ updateCount: false });
};
const refreshCatalogState = () => {
  refreshCatalogResults();
  renderCatalogFilterChips();
};
const cancelCatalogRender = () => {
  if (catalogRenderTimer) clearTimeout(catalogRenderTimer);
  if (catalogRenderFrame) cancelAnimationFrame(catalogRenderFrame);
  catalogRenderTimer = 0;
  catalogRenderFrame = 0;
};
const scheduleCatalogRender = () => {
  cancelCatalogRender();
  catalogRenderTimer = setTimeout(() => {
    catalogRenderTimer = 0;
    catalogRenderFrame = requestAnimationFrame(() => {
      catalogRenderFrame = 0;
      refreshCatalogState();
    });
  }, SEARCH_RENDER_DELAY);
};
const setCatalogSeries = (series, { refresh = true } = {}) => {
  appState.selectedCatalogSeries = normalizeCatalogSeries(series);
  setCatalogSeriesFilter(appState.selectedCatalogSeries);
  if (refresh) refreshCatalogState();
};
const setCatalogScope = (scope, { refresh = true } = {}) => {
  appState.selectedCatalogKind = ["bey", "parts", "tools"].includes(scope) ? scope : "";
  setCatalogSearchScope(appState.selectedCatalogKind || "all");
  if (refresh) refreshCatalogState();
};
const catalogRouteFromState = (overrides = {}) => normalizeRoute({
  type: "catalog",
  scope: appState.selectedCatalogKind || "all",
  series: appState.selectedCatalogSeries || "all",
  sort: appState.activeCatalogSort,
  page: appState.currentCatalogPage,
  query: catalogSearchQuery(),
  ...overrides
});
const syncCatalogRouteHash = ({ replace = true, force = false, overrides = {} } = {}) => {
  if (!force && (appState.applyingRoute || activeAppPanelName() !== "catalog")) return;
  navigateToRoute(catalogRouteFromState(overrides), {
    replace,
    apply: false,
    preserveScroll: true,
    preserveSearch: true
  });
};
const applyCatalogRouteState = route => {
  const catalogRoute = normalizeRoute({ type: "catalog", ...route });
  setCatalogSeries(catalogRoute.series, { refresh: false });
  setCatalogScope(catalogRoute.scope, { refresh: false });
  appState.activeCatalogSort = catalogRoute.sort;
  setSearchInputValue(catalogSearch, catalogRoute.query);
  appState.currentCatalogPage = catalogRoute.page;
  appState.currentCatalogRenderKey = catalogRenderKey();
  catalogVisibleItemsCache.clear();
  syncGlobalSearchScopePeers(["bey", "tools"].includes(catalogRoute.scope) ? catalogRoute.scope : "all");
  refreshCatalogState();
};
const openCategoryCatalog = ({ scope = "all", series = "all", sort = defaultCatalogSort(), page = 1, query = "", updateHash = true, replace = false, preserveSearch = false } = {}) => {
  const route = normalizeRoute({ type: "catalog", scope, series, sort, page, query });
  if (updateHash && !appState.applyingRoute) {
    navigateToRoute(route, { replace });
    return;
  }
  activatePrimarySection("catalog", { preserveSearch });
  applyCatalogRouteState(route);
};

const catalogSortDropdownMarkup = () => sortDropdownMarkup({
  className: "catalog-sort-dropdown",
  label: "도감 정렬",
  value: activeCatalogSortOption().value,
  options: catalogSortOptions,
  dataAttr: "data-catalog-sort"
});
const renderCatalogFilterChips = () => {
  const root = document.querySelector('[data-catalog-filter-chips="catalog"]');
  if (root) {
    const markup = queryChipMarkup(catalogQueryChips(catalogSearchQuery()));
    root.innerHTML = markup;
    root.hidden = !markup;
    root.classList.toggle("is-empty", !markup);
    root.setAttribute("aria-hidden", String(!markup));
  }
  document.querySelectorAll("[data-catalog-sort-control]").forEach(control => {
    control.innerHTML = catalogSortDropdownMarkup();
  });
};
const bindScopeControl = (dropdown, dataAttr, handler) => {
  if (!dropdown || dropdown.dataset.catalogScopeBound) return;
  dropdown.dataset.catalogScopeBound = "true";
  dropdown.addEventListener("click", event => {
    const button = event.target.closest(`button[${dataAttr}]`);
    if (!button || !dropdown.contains(button)) return;
    event.preventDefault();
    closeCatalogDropdown(dropdown);
    handler(button);
  });
};
const restoreStoredCatalogOrigin = originState => {
  setCatalogSeries(originState?.catalogSeries || "all", { refresh: false });
  appState.activeCatalogSort = normalizeCatalogRouteSort(originState?.catalogSort || appState.activeCatalogSort);
  if (typeof originState?.catalogQuery === "string") setSearchInputValue(catalogSearch, originState.catalogQuery);
  refreshCatalogState();
  const page = Number(originState?.catalogPage);
  if (Number.isFinite(page) && page > 1) {
    appState.currentCatalogPage = Math.floor(page);
    renderCatalogItems();
  }
};

const initializeCatalogFeature = () => {
  if (initialized) return;
  initialized = true;
  initializeSearchHelpController();
  bindSearchInput(catalogSearch, ".catalog-search-box", {
    onInput: input => {
      normalizeCatalogSearchInput(input);
      appState.currentCatalogPage = 1;
      scheduleCatalogRender();
      syncCatalogRouteHash({ overrides: { page: 1 } });
    }
  });
  bindScopeControl(catalogSeriesFilter, "data-catalog-series", button => {
    closeSearchHelpPopovers();
    setCatalogSeries(button.dataset.catalogSeries, { refresh: false });
    navigateToRoute(catalogRouteFromState({ page: 1 }), { replace: true, preserveSearch: true, preserveScroll: true });
  });
  bindScopeControl(catalogSearchScope, "data-catalog-search-scope", button => {
    closeSearchHelpPopovers();
    navigateToRoute(catalogRouteFromState({ scope: button.dataset.catalogSearchScope || "all", page: 1 }), {
      replace: true,
      preserveSearch: true,
      preserveScroll: true
    });
  });
  const queryChips = document.querySelector('[data-catalog-filter-chips="catalog"]');
  queryChips?.addEventListener("click", event => {
    const chip = event.target.closest("[data-query-chip-key]");
    if (!chip) return;
    setSearchInputValue(catalogSearch, removeCatalogQueryChip(catalogSearchQuery(), chip.dataset.queryChipKey));
    appState.currentCatalogPage = 1;
    refreshCatalogState();
    syncCatalogRouteHash({ overrides: { page: 1 } });
    catalogSearch?.focus();
  });
  document.addEventListener("click", event => {
    const button = event.target.closest("button[data-catalog-sort]");
    if (!button) return;
    event.preventDefault();
    if (!catalogSortOptions.some(option => option.value === button.dataset.catalogSort)) return;
    appState.activeCatalogSort = button.dataset.catalogSort;
    setDropdownOption(button);
    catalogVisibleItemsCache.clear();
    appState.currentCatalogPage = 1;
    refreshCatalogState();
    syncCatalogRouteHash();
  });
  document.querySelector("#catalogPagination")?.addEventListener("click", event => {
    const button = event.target.closest("[data-catalog-page]");
    if (!button || button.disabled) return;
    event.preventDefault();
    appState.currentCatalogPage = Number(button.dataset.catalogPage) || 1;
    renderCatalogItems();
    syncCatalogRouteHash();
    scrollCatalogGridIntoView();
  });
};

export {
  catalogRouteFromState,
  initializeCatalogFeature,
  openCategoryCatalog,
  prepareCatalogSortMetadata,
  refreshCatalogState,
  renderCatalogFilterChips,
  restoreStoredCatalogOrigin,
  syncCatalogRouteHash
};
