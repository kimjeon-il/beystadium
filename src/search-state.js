import {
  globalSearch,
  globalSearchScopeValue,
  mobileDrawerSearch,
  mobileDrawerSearchScopeValue,
  overviewSearch,
  overviewSearchScopeValue,
  searchResultsSearch,
  searchResultsSearchScopeValue,
  setGlobalSearchScope,
  setMobileDrawerSearchScope,
  setOverviewSearchScope,
  setSearchInputValue,
  setSearchResultsSearchScope
} from "#app/ui-elements";

const globalSearchInputs = () => [globalSearch, mobileDrawerSearch, overviewSearch, searchResultsSearch].filter(Boolean);
const searchScopeForInput = input => {
  if (input === overviewSearch) return overviewSearchScopeValue();
  if (input === mobileDrawerSearch) return mobileDrawerSearchScopeValue();
  if (input === searchResultsSearch) return searchResultsSearchScopeValue();
  return globalSearchScopeValue();
};
const setGlobalSearchScopePeers = scope => {
  setGlobalSearchScope(scope);
  setMobileDrawerSearchScope(scope);
  setOverviewSearchScope(scope);
  setSearchResultsSearchScope(scope);
};
const setGlobalSearchState = (query = "", scope = "all") => {
  globalSearchInputs().forEach(input => setSearchInputValue(input, query));
  setGlobalSearchScopePeers(scope);
};
const syncGlobalSearchStateFromInput = sourceInput => {
  const query = sourceInput?.value || "";
  globalSearchInputs().forEach(input => {
    if (input !== sourceInput) setSearchInputValue(input, query);
  });
  setGlobalSearchScopePeers(searchScopeForInput(sourceInput));
};

export {
  searchScopeForInput,
  setGlobalSearchScopePeers,
  setGlobalSearchState,
  syncGlobalSearchStateFromInput
};
