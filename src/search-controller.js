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
  setGlobalSearchScope,
  setMobileDrawerSearchScope,
  setOverviewSearchScope,
  setSearchInputValue
} from "#app/ui-core";

let initialized = false;
let searchHashUpdateTimer = 0;
let searchRenderTimer = 0;
let searchRenderFrame = 0;

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
  [globalSearch, mobileDrawerSearch, overviewSearch].forEach(input => setSearchInputValue(input, query));
  setGlobalSearchScope(scope);
  setMobileDrawerSearchScope(scope);
  setOverviewSearchScope(scope);
};
const syncGlobalSearchInputPeers = sourceInput => {
  const query = sourceInput?.value || "";
  [globalSearch, mobileDrawerSearch, overviewSearch].forEach(input => {
    if (input && input !== sourceInput) setSearchInputValue(input, query);
  });
};
const syncGlobalSearchScopePeers = scope => {
  setGlobalSearchScope(scope);
  setMobileDrawerSearchScope(scope);
  setOverviewSearchScope(scope);
};
const inputScope = input => {
  if (input === overviewSearch) return overviewSearchScopeValue();
  if (input === mobileDrawerSearch) return mobileDrawerSearchScopeValue();
  return globalSearchScopeValue();
};
const syncInputToPeers = input => {
  syncGlobalSearchInputPeers(input);
  syncGlobalSearchScopePeers(inputScope(input));
};
const openSearchResults = ({ replace = false, updateHash = true } = {}) => {
  if (updateHash && !appState.applyingRoute) {
    navigateToRoute({ type: "search", query: globalSearchQuery(), scope: globalSearchScopeValue() }, { replace });
    return;
  }
  closeAllSearchPreviews();
  activatePrimarySection("all", { preserveSearch: true });
  renderGlobalCards();
  setMobileDrawerOpen(false);
};
const bindSearchScopeControl = (dropdown, dataAttr, input) => {
  if (!dropdown || dropdown.dataset.globalSearchScopeBound) return;
  dropdown.dataset.globalSearchScopeBound = "true";
  dropdown.addEventListener("click", event => {
    const button = event.target.closest(`button[${dataAttr}]`);
    if (!button || !dropdown.contains(button)) return;
    event.preventDefault();
    syncGlobalSearchScopePeers(button.getAttribute(dataAttr) || "all");
    refreshSearchPreview(input, { resetActive: true });
    if (activeAppPanelName() === "all") openSearchResults({ replace: true });
  });
};
const bindGlobalSearchInput = (input, container) => {
  bindSearchInput(input, container, {
    ensureSearchScope: searchPreviewScopeValue,
    onKeydown: event => handleSearchPreviewKeydown(input, event),
    onInput: () => {
      syncInputToPeers(input);
      refreshSearchPreview(input, { resetActive: true });
      if (activeAppPanelName() === "all") scheduleGlobalSearchResultsRefresh();
    },
    onSubmit: () => {
      syncInputToPeers(input);
      openSearchResults();
    }
  });
  bindSearchPreview(input, container);
};
const initializeSearchFeature = () => {
  if (initialized) return;
  initialized = true;
  bindGlobalSearchInput(globalSearch, ".search-box");
  bindGlobalSearchInput(overviewSearch, ".overview-search");
  bindGlobalSearchInput(mobileDrawerSearch, ".mobile-drawer-search");
  bindSearchScopeControl(globalSearchScope, "data-global-search-scope", globalSearch);
  bindSearchScopeControl(overviewSearchScope, "data-overview-search-scope", overviewSearch);
  bindSearchScopeControl(mobileDrawerSearchScope, "data-mobile-drawer-search-scope", mobileDrawerSearch);
  [globalSearch, overviewSearch, mobileDrawerSearch].forEach(input => {
    if (input?.matches(":focus") && input.value.trim()) refreshSearchPreview(input, { resetActive: true });
  });
};

export {
  initializeSearchFeature,
  openSearchResults,
  setGlobalSearchState
};
