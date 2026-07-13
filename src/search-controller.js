import { appState } from "#app/state";
import { navigateToRoute } from "#app/navigation";
import {
  SEARCH_HASH_UPDATE_DELAY,
  SEARCH_RENDER_DELAY,
  bindSearchPreview,
  closeAllSearchPreviews,
  handleSearchPreviewKeydown,
  refreshSearchPreview,
  renderGlobalCards,
  searchPreviewScopeValue
} from "#app/search-feature";
import { globalSearchQuery } from "#app/search-engine";
import { activatePrimarySection, bindSearchInput, setMobileDrawerOpen } from "#app/shell-controller";
import {
  activeAppPanel,
  globalSearch,
  globalSearchScope,
  globalSearchScopeValue,
  mobileDrawerSearch,
  mobileDrawerSearchScope,
  mobileDrawerSearchScopeValue,
  overviewSearch,
  overviewSearchScope,
  overviewSearchScopeValue,
  searchResultsSearch,
  searchResultsSearchScope,
  searchResultsSearchScopeValue,
  setGlobalSearchScope,
  setMobileDrawerSearchScope,
  setOverviewSearchScope,
  setSearchResultsSearchScope,
  setSearchInputValue
} from "#app/ui-core";

let initialized = false;
let searchHashUpdateTimer = 0;
let searchRenderTimer = 0;
let searchRenderFrame = 0;
let focusResultsSearchOnOpen = false;

const globalSearchInputs = () => [globalSearch, mobileDrawerSearch, overviewSearch, searchResultsSearch].filter(Boolean);

const activeAppPanelName = () => activeAppPanel()?.dataset.appPanel || "";
const updateGlobalSearchHash = () => {
  if (searchHashUpdateTimer) clearTimeout(searchHashUpdateTimer);
  searchHashUpdateTimer = 0;
  if (activeAppPanelName() !== "all") return;
  navigateToRoute({ type: "search", query: globalSearchQuery(), scope: globalSearchScopeValue() }, { replace: true, apply: false });
};
const scheduleGlobalSearchHashUpdate = () => {
  if (searchHashUpdateTimer) clearTimeout(searchHashUpdateTimer);
  searchHashUpdateTimer = setTimeout(updateGlobalSearchHash, SEARCH_HASH_UPDATE_DELAY);
};
const refreshGlobalSearchResults = ({ deferHash = true } = {}) => {
  renderGlobalCards();
  if (deferHash) scheduleGlobalSearchHashUpdate();
  else updateGlobalSearchHash();
};
const scheduleGlobalSearchResultsRefresh = () => {
  if (searchRenderTimer) clearTimeout(searchRenderTimer);
  if (searchRenderFrame) cancelAnimationFrame(searchRenderFrame);
  searchRenderTimer = setTimeout(() => {
    searchRenderTimer = 0;
    searchRenderFrame = requestAnimationFrame(() => {
      searchRenderFrame = 0;
      refreshGlobalSearchResults();
    });
  }, SEARCH_RENDER_DELAY);
};
const setGlobalSearchState = (query = "", scope = "all") => {
  globalSearchInputs().forEach(input => setSearchInputValue(input, query));
  setGlobalSearchScope(scope);
  setMobileDrawerSearchScope(scope);
  setOverviewSearchScope(scope);
  setSearchResultsSearchScope(scope);
};
const syncGlobalSearchInputPeers = sourceInput => {
  const query = sourceInput?.value || "";
  globalSearchInputs().forEach(input => {
    if (input && input !== sourceInput) setSearchInputValue(input, query);
  });
};
const syncGlobalSearchScopePeers = scope => {
  setGlobalSearchScope(scope);
  setMobileDrawerSearchScope(scope);
  setOverviewSearchScope(scope);
  setSearchResultsSearchScope(scope);
};
const inputScope = input => {
  if (input === overviewSearch) return overviewSearchScopeValue();
  if (input === mobileDrawerSearch) return mobileDrawerSearchScopeValue();
  if (input === searchResultsSearch) return searchResultsSearchScopeValue();
  return globalSearchScopeValue();
};
const syncInputToPeers = input => {
  syncGlobalSearchInputPeers(input);
  syncGlobalSearchScopePeers(inputScope(input));
};
const ensureSearchResultsScopeOptions = () => {
  const menu = searchResultsSearchScope?.querySelector(".catalog-dropdown-menu");
  if (!menu || menu.children.length) return;
  globalSearchScope?.querySelectorAll("[data-global-search-scope]").forEach(source => {
    const option = source.cloneNode(true);
    option.removeAttribute("data-global-search-scope");
    option.setAttribute("data-search-results-search-scope", source.dataset.globalSearchScope || "all");
    menu.append(option);
  });
  setSearchResultsSearchScope(searchResultsSearchScopeValue());
};
const openSearchResults = ({ replace = false, updateHash = true, focusSearch = false } = {}) => {
  if (focusSearch) focusResultsSearchOnOpen = true;
  if (updateHash && !appState.applyingRoute) {
    navigateToRoute({ type: "search", query: globalSearchQuery(), scope: globalSearchScopeValue() }, { replace });
    return;
  }
  const shouldFocusSearch = focusResultsSearchOnOpen;
  focusResultsSearchOnOpen = false;
  closeAllSearchPreviews();
  activatePrimarySection("all", { preserveSearch: true });
  renderGlobalCards();
  setMobileDrawerOpen(false);
  if (shouldFocusSearch) requestAnimationFrame(() => searchResultsSearch?.focus({ preventScroll: true }));
};
const bindSearchScopeControl = (dropdown, dataAttr, input, { preview = true } = {}) => {
  if (!dropdown || dropdown.dataset.globalSearchScopeBound) return;
  dropdown.dataset.globalSearchScopeBound = "true";
  dropdown.addEventListener("click", event => {
    const button = event.target.closest(`button[${dataAttr}]`);
    if (!button || !dropdown.contains(button)) return;
    event.preventDefault();
    syncGlobalSearchScopePeers(button.getAttribute(dataAttr) || "all");
    if (preview) refreshSearchPreview(input, { resetActive: true });
    if (activeAppPanelName() === "all") openSearchResults({ replace: true });
  });
};
const bindGlobalSearchInput = (input, container, { preview = true } = {}) => {
  bindSearchInput(input, container, {
    ensureSearchScope: searchPreviewScopeValue,
    onKeydown: preview ? event => handleSearchPreviewKeydown(input, event) : undefined,
    onInput: () => {
      syncInputToPeers(input);
      if (preview) refreshSearchPreview(input, { resetActive: true });
      if (activeAppPanelName() === "all") scheduleGlobalSearchResultsRefresh();
    },
    onSubmit: () => {
      syncInputToPeers(input);
      openSearchResults({ focusSearch: input !== searchResultsSearch });
    }
  });
  if (preview) bindSearchPreview(input, container);
};
const initializeSearchFeature = () => {
  if (initialized) return;
  initialized = true;
  ensureSearchResultsScopeOptions();
  bindGlobalSearchInput(globalSearch, ".search-box");
  bindGlobalSearchInput(overviewSearch, ".overview-search");
  bindGlobalSearchInput(mobileDrawerSearch, ".mobile-drawer-search");
  bindGlobalSearchInput(searchResultsSearch, ".search-results-search-box", { preview: false });
  bindSearchScopeControl(globalSearchScope, "data-global-search-scope", globalSearch);
  bindSearchScopeControl(overviewSearchScope, "data-overview-search-scope", overviewSearch);
  bindSearchScopeControl(mobileDrawerSearchScope, "data-mobile-drawer-search-scope", mobileDrawerSearch);
  bindSearchScopeControl(searchResultsSearchScope, "data-search-results-search-scope", searchResultsSearch, { preview: false });
  [globalSearch, overviewSearch, mobileDrawerSearch].forEach(input => {
    if (input?.matches(":focus") && input.value.trim()) refreshSearchPreview(input, { resetActive: true });
  });
};

export {
  initializeSearchFeature,
  openSearchResults,
  setGlobalSearchState
};
