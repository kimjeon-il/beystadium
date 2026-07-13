import { normalizeAnimeCharacterSeason } from "#app/anime-core";
import { appState } from "#app/state";
import { BeystadiumDataStore } from "#app/data-store";
import { activeCatalogSortOption, catalogRenderKey, catalogSortOptions, catalogVisibleItemsCache } from "#app/catalog-model";
import { animeRenderKey, renderCatalogItems, scrollAnimeGridIntoView, scrollCatalogGridIntoView, syncCatalogScopeState } from "#app/collection-view";
import { loadAnimeFeature, renderAnimePage } from "#app/feature-loaders";
import { cancelModalViewportSync, clearModalLockStyles, closeModalSession, modal } from "#app/modal-controller";
import { defaultCatalogSort, navigateToRoute, normalizeCatalogRouteSort, normalizeRoute } from "#app/route-core";
import { defaultCatalogSeries, defaultReleaseSeries, escapeAttributeValue, escapeHtml, normalizeCatalogSeries, setSortDropdownLabel, sortDropdownMarkup } from "#app/release-core";
import { animeSearchQuery, catalogAttributeChipForTerm, catalogFilterChipLabelForTerm, catalogFilterQueryTerms, catalogSearchQuery, globalSearchQuery, normalizeCatalogSearchInput } from "#app/search-engine";
import { SEARCH_HASH_UPDATE_DELAY, SEARCH_RENDER_DELAY, bindSearchPreview, closeAllSearchPreviews, handleSearchPreviewKeydown, refreshSearchPreview, renderGlobalCards, searchPreviewScopeValue } from "#app/search-feature";
import { activeAppPanel, animeSearch, animeSearchHelpButton, animeSearchHelpPopover, catalogSearch, catalogSearchHelpButton, catalogSearchHelpPopover, catalogSearchScope, catalogSeriesFilter, clearSearchInputs, dropdownSummaryText, getNavigationRoots, globalSearch, globalSearchScope, globalSearchScopeValue, isNavigationButtonCurrent, menuButton, mobileDrawer, mobileDrawerSearch, mobileDrawerSearchScope, mobileDrawerSearchScopeValue, normalizeSidebarSection, overviewSearch, overviewSearchScope, overviewSearchScopeValue, playEnterAnimation, setCatalogSearchScope, setCatalogSeriesFilter, setGlobalSearchScope, setMobileDrawerSearchScope, setOverviewSearchScope, setSearchInputValue, setSidebarButtonCurrent, sidebarCurrentButtonSelector, syncSearchInputState, toTop } from "#app/ui-core";

const categoryReleaseMenuRoute = () => {
  const region = "kr";
  return { type: "category-release", options: { region, series: defaultReleaseSeries(region) } };
};
const openCategoryCatalog = ({ scope = "all", series = "all", sort = defaultCatalogSort(), page = 1, query = "", updateHash = true, replace = false, preserveSearch = false } = {}) => {
  const catalogRoute = normalizeRoute({ type: "catalog", scope, series, sort, page, query });
  const normalizedScope = catalogRoute.scope;
  if (updateHash && !appState.applyingRoute) {
    navigateToRoute(catalogRoute, { replace });
    return;
  }
  activatePrimarySection(normalizedScope === "all" ? "catalog" : normalizedScope, { preserveSearch });
  applyCatalogRouteState(catalogRoute);
};
const openCategoryAnimePage = async (options = {}) => {
  const { updateHash = true, replace = false, preserveSearch = false } = options;
  const animeRoute = normalizeRoute({ type: "category-anime", ...options });
  if (updateHash && !appState.applyingRoute) {
    navigateToRoute(animeRoute, { replace });
    return;
  }
  await loadAnimeFeature();
  activatePrimarySection("anime", { preserveSearch });
  applyAnimeRouteState(animeRoute, {
    preserveSearch,
    hasQuery: Object.prototype.hasOwnProperty.call(options, "query") || Object.prototype.hasOwnProperty.call(options, "q")
  });
};
const categoryRouteTriggers = [
  { selector: "[data-category-release-open]", route: categoryReleaseMenuRoute },
  { selector: "[data-category-anime-episodes-open]", route: { type: "category-anime-episodes" } },
  { selector: "[data-category-anime-open]", route: { type: "category-anime" } },
  { selector: "[data-category-catalog-open]", route: { type: "catalog", scope: "all" } }
];
const categoryRouteFromTrigger = target => {
  if (!target?.closest) return null;
  for (const { selector, route } of categoryRouteTriggers) {
    const trigger = target.closest(selector);
    if (!trigger) continue;
    return {
      trigger,
      route: typeof route === "function" ? route(trigger) : route
    };
  }
  return null;
};
const handleCategoryRouteClick = (event, { closeSearchHelp = false, closeMobileMenu = true } = {}) => {
  const match = categoryRouteFromTrigger(event.target);
  if (!match) return false;
  if (event.currentTarget?.contains && !event.currentTarget.contains(match.trigger)) return false;
  event.preventDefault();
  if (closeSearchHelp) closeSearchHelpPopovers();
  navigateToRoute(match.route);
  if (closeMobileMenu) setMobileDrawerOpen(false);
  return true;
};

document.querySelector(".overview-panel")?.addEventListener("click", event => {
  handleCategoryRouteClick(event);
});
const activeAppPanelName = () => activeAppPanel()?.dataset.appPanel || "";
let searchHashUpdateTimer = 0;
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
const createSearchRenderTask = render => ({ render, timer: 0, frame: 0 });
const searchRenderTasks = {
  global: createSearchRenderTask(() => refreshGlobalSearchResults()),
  catalog: createSearchRenderTask(() => {
    renderCatalogItems();
    syncCatalogScopeState({ updateCount: false });
    renderCatalogFilterChips();
  }),
  anime: createSearchRenderTask(() => renderAnimePage())
};
const cancelSearchRenderTask = task => {
  if (task.timer) clearTimeout(task.timer);
  if (task.frame) cancelAnimationFrame(task.frame);
  task.timer = 0;
  task.frame = 0;
};
const cancelPendingSearchRenderTasks = () => {
  Object.values(searchRenderTasks).forEach(cancelSearchRenderTask);
  if (searchHashUpdateTimer) clearTimeout(searchHashUpdateTimer);
  searchHashUpdateTimer = 0;
};
const scheduleSearchRender = task => {
  cancelSearchRenderTask(task);
  task.timer = setTimeout(() => {
    task.timer = 0;
    task.frame = requestAnimationFrame(() => {
      task.frame = 0;
      task.render();
    });
  }, SEARCH_RENDER_DELAY);
};
const scheduleGlobalSearchResultsRefresh = () => scheduleSearchRender(searchRenderTasks.global);
const scheduleCatalogSearchResultsRefresh = () => scheduleSearchRender(searchRenderTasks.catalog);
const scheduleAnimeSearchResultsRefresh = () => scheduleSearchRender(searchRenderTasks.anime);
const openSearchResults = ({ replace = false, updateHash = true } = {}) => {
  if (updateHash && !appState.applyingRoute) {
    navigateToRoute({ type: "search", query: globalSearchQuery(), scope: globalSearchScopeValue() }, { replace });
    return;
  }
  cancelPendingSearchRenderTasks();
  closeAllSearchPreviews();
  activateAppPanel("all");
  syncSidebarActiveState("all");
  renderGlobalCards();
  setMobileDrawerOpen(false);
};
const bindSearchInput = (input, containerSelector, { onInput, onSubmit = onInput } = {}) => {
  if (!input) return;
  const root = input.closest(containerSelector);
  let clearButton = root?.querySelector(".search-clear");
  const usesGlobalSearchIndex = input === globalSearch || input === overviewSearch || input === mobileDrawerSearch;
  const runSearch = async handler => {
    syncSearchInputState(input);
    if (usesGlobalSearchIndex) {
      await BeystadiumDataStore?.ensureSearch(searchPreviewScopeValue(input));
    }
    handler?.(input);
  };
  if (root && !clearButton) {
    clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.className = "search-clear";
    clearButton.hidden = true;
    clearButton.setAttribute("aria-label", "검색어 지우기");
    input.insertAdjacentElement("afterend", clearButton);
    clearButton.addEventListener("click", () => {
      setSearchInputValue(input, "");
      input.focus();
      void runSearch(onInput);
      refreshSearchPreview(input, { resetActive: true });
    });
  }
  input.addEventListener("input", () => {
    void runSearch(onInput);
    refreshSearchPreview(input, { resetActive: true });
  });
  input.addEventListener("keydown", event => {
    if (handleSearchPreviewKeydown(input, event)) return;
    if (event.key !== "Enter") return;
    event.preventDefault();
    void runSearch(onSubmit);
  });
  root?.querySelector(".search-icon")?.addEventListener("click", () => void runSearch(onSubmit));
  syncSearchInputState(input);
};
const setGlobalSearchState = (query = "", scope = "all") => {
  setSearchInputValue(globalSearch, query);
  setSearchInputValue(mobileDrawerSearch, query);
  setSearchInputValue(overviewSearch, query);
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
const refreshActiveGlobalSearch = () => {
  if (activeAppPanelName() === "all") scheduleGlobalSearchResultsRefresh();
};
const syncTopbarSearchToPeers = () => {
  syncGlobalSearchInputPeers(globalSearch);
  syncGlobalSearchScopePeers(globalSearchScopeValue());
};
const syncOverviewSearchToGlobal = () => {
  syncGlobalSearchInputPeers(overviewSearch);
  syncGlobalSearchScopePeers(overviewSearchScopeValue());
};
const syncMobileDrawerSearchToGlobal = () => {
  syncGlobalSearchInputPeers(mobileDrawerSearch);
  syncGlobalSearchScopePeers(mobileDrawerSearchScopeValue());
};
const refreshSearchPanel = () => {
  const panel = activeAppPanelName();
  if (panel === "all") {
    scheduleGlobalSearchResultsRefresh();
    return;
  }
  if (panel === "catalog") {
    scheduleCatalogSearchResultsRefresh();
    return;
  }
  if (panel === "anime") {
    scheduleAnimeSearchResultsRefresh();
  }
};
[
  {
    input: globalSearch,
    container: ".search-box",
    sync: syncTopbarSearchToPeers,
    refresh: refreshActiveGlobalSearch
  },
  {
    input: overviewSearch,
    container: ".overview-search",
    sync: syncOverviewSearchToGlobal,
    refresh: refreshSearchPanel
  },
  {
    input: mobileDrawerSearch,
    container: ".mobile-drawer-search",
    sync: syncMobileDrawerSearchToGlobal,
    refresh: refreshActiveGlobalSearch
  }
].forEach(({ input, container, sync, refresh }) => {
  bindSearchInput(input, container, {
    onInput: () => {
      sync();
      refresh();
    },
    onSubmit: () => {
      sync();
      openSearchResults();
    }
  });
  bindSearchPreview(input, container);
});
[
  {
    input: catalogSearch,
    container: ".catalog-search-box",
    refresh: input => {
      normalizeCatalogSearchInput(input);
      appState.currentCatalogPage = 1;
      scheduleCatalogSearchResultsRefresh();
      syncCatalogRouteHash({ overrides: { page: 1 } });
    }
  },
  {
    input: animeSearch,
    container: ".anime-search-box",
    refresh: () => {
      appState.currentAnimePage = 1;
      scheduleAnimeSearchResultsRefresh();
      syncAnimeRouteHash({ overrides: { page: 1 } });
    }
  }
].forEach(({ input, container, refresh }) => {
  bindSearchInput(input, container, {
    onInput: refresh,
    onSubmit: refresh
  });
});
const bindSearchScopeControls = ({ dropdown, dataAttr, setScope = () => {}, afterChange }) => {
  dropdown?.addEventListener("click", event => {
    const button = event.target.closest(`button[${dataAttr}]`);
    if (!button || !dropdown.contains(button)) return;
    event.preventDefault();
    setScope(button.getAttribute(dataAttr) || "all");
    afterChange?.(button);
  });
};
[
  {
    dropdown: overviewSearchScope,
    dataAttr: "data-overview-search-scope",
    setScope: setOverviewSearchScope,
    input: overviewSearch,
    afterChange: () => {
      if (activeAppPanelName() === "all") {
        syncOverviewSearchToGlobal();
        openSearchResults({ replace: true });
      }
    }
  },
  {
    dropdown: globalSearchScope,
    dataAttr: "data-global-search-scope",
    setScope: setGlobalSearchScope,
    input: globalSearch,
    afterChange: () => {
      syncTopbarSearchToPeers();
      if (activeAppPanelName() === "all") openSearchResults({ replace: true });
      else refreshActiveGlobalSearch();
    }
  },
  {
    dropdown: mobileDrawerSearchScope,
    dataAttr: "data-mobile-drawer-search-scope",
    setScope: setMobileDrawerSearchScope,
    input: mobileDrawerSearch,
    afterChange: () => {
      syncMobileDrawerSearchToGlobal();
      refreshActiveGlobalSearch();
    }
  }
].forEach(({ input, afterChange, ...options }) => {
  bindSearchScopeControls({
    ...options,
    afterChange: button => {
      afterChange?.(button);
      refreshSearchPreview(input, { resetActive: true });
    }
  });
});
bindSearchScopeControls({
  dropdown: catalogSeriesFilter,
  dataAttr: "data-catalog-series",
  setScope: series => setCatalogSeries(series, { refresh: false }),
  afterChange: () => {
    closeSearchHelpPopovers();
    navigateToRoute(catalogRouteFromState({ page: 1 }), {
      replace: true,
      preserveSearch: true,
      preserveScroll: true
    });
  }
});
bindSearchScopeControls({
  dropdown: catalogSearchScope,
  dataAttr: "data-catalog-search-scope",
  afterChange: button => {
    const nextScope = button.getAttribute("data-catalog-search-scope") || "all";
    closeSearchHelpPopovers();
    navigateToRoute(
      catalogRouteFromState({ scope: nextScope, page: 1 }),
      { replace: true, preserveSearch: true, preserveScroll: true }
    );
  }
});
const setDropdownOption = button => {
  const attr = filterButtonAttr(button);
  if (!attr) return;
  const dropdown = button.closest(".catalog-dropdown");
  if (!dropdown) return;
  dropdown.querySelectorAll(`button[${attr}]`).forEach(option => {
    option.classList.toggle("active", option === button);
  });
  const label = dropdown.querySelector(".catalog-dropdown-value");
  if (label) {
    const summaryText = dropdownSummaryText(button);
    if (dropdown.classList.contains("list-sort-dropdown")) {
      setSortDropdownLabel(label, summaryText);
    } else {
      label.textContent = summaryText;
    }
  }
  closeCatalogDropdown(dropdown);
};
const filterButtonAttrs = ["data-release-series", "data-anime-season", "data-catalog-sort", "data-release-sort-option"];
const filterButtonAttr = button => filterButtonAttrs.find(attr => button.hasAttribute(attr));
const refreshCatalogResults = () => {
  renderCatalogItems();
  syncCatalogScopeState({ updateCount: false });
};
const refreshCatalogState = () => {
  refreshCatalogResults();
  renderCatalogFilterChips();
};
const resetCatalogFilters = () => {
  appState.selectedCatalogKind = "";
};
const setCatalogSeries = (series, { refresh = true } = {}) => {
  appState.selectedCatalogSeries = normalizeCatalogSeries(series);
  setCatalogSeriesFilter(appState.selectedCatalogSeries);
  if (refresh) refreshCatalogState();
};
const setCatalogScope = (scope, { refresh = true } = {}) => {
  if (scope === "bey" || scope === "parts" || scope === "tools") {
    appState.selectedCatalogKind = scope;
  } else {
    appState.selectedCatalogKind = "";
  }
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
const animeRouteFromState = (overrides = {}) => normalizeRoute({
  type: "category-anime",
  season: appState.activeAnimeCharacterSeason || "all",
  page: appState.currentAnimePage,
  query: animeSearchQuery(),
  ...overrides
});
const syncAnimeRouteHash = ({ replace = true, force = false, overrides = {} } = {}) => {
  if (!force && (appState.applyingRoute || activeAppPanelName() !== "anime")) return;
  navigateToRoute(animeRouteFromState(overrides), {
    replace,
    apply: false,
    preserveScroll: true,
    preserveSearch: true
  });
};
function applyCatalogRouteState(route = {}) {
  const catalogRoute = normalizeRoute({ type: "catalog", ...route });
  setCatalogSeries(catalogRoute.series, { refresh: false });
  setCatalogScope(catalogRoute.scope, { refresh: false });
  appState.activeCatalogSort = catalogRoute.sort;
  setSearchInputValue(catalogSearch, catalogRoute.query);
  appState.currentCatalogPage = catalogRoute.page;
  appState.currentCatalogRenderKey = catalogRenderKey();
  catalogVisibleItemsCache.clear();
  syncGlobalSearchScopePeers(catalogRoute.scope === "bey" || catalogRoute.scope === "tools" ? catalogRoute.scope : "all");
  refreshCatalogState();
};
function applyAnimeRouteState(route = {}, { preserveSearch = false, hasQuery = false } = {}) {
  const animeRoute = normalizeRoute({ type: "category-anime", ...route });
  appState.activeAnimeCharacterSeason = normalizeAnimeCharacterSeason(animeRoute.season);
  if (hasQuery || !preserveSearch) setSearchInputValue(animeSearch, animeRoute.query);
  appState.currentAnimePage = animeRoute.page;
  appState.currentAnimeRenderKey = animeRenderKey();
  renderAnimePage();
}
const resetCatalogFilter = (scope, key) => {
  if (scope !== "catalog" || !catalogSearch) return;
  let removed = false;
  const nextTerms = catalogFilterQueryTerms(catalogSearchQuery()).filter(term => {
    if (!removed && term === key) {
      removed = true;
      return false;
    }
    return true;
  });
  setSearchInputValue(catalogSearch, nextTerms.join(" "));
  appState.currentCatalogPage = 1;
  refreshCatalogState();
  syncCatalogRouteHash();
};
const activeFilterChips = scope => {
  if (scope !== "catalog") return [];
  const seen = new Set();
  return catalogFilterQueryTerms(catalogSearchQuery())
    .map(term => {
      const candidate = catalogAttributeChipForTerm(term);
      if (!candidate || seen.has(candidate.key)) return null;
      seen.add(candidate.key);
      return { scope, key: term, label: catalogFilterChipLabelForTerm(candidate, term) };
    })
    .filter(Boolean);
};
const catalogFilterChipMarkup = chip =>
  `<button type="button" class="ui-chip-button catalog-filter-chip" data-filter-chip-scope="${escapeAttributeValue(chip.scope)}" data-filter-chip-key="${escapeAttributeValue(chip.key)}">${escapeHtml(chip.label)}<span aria-hidden="true">×</span></button>`;
const catalogFilterResetMarkup = scope =>
  `<button type="button" class="ui-chip-button catalog-filter-reset" data-filter-reset-scope="${escapeAttributeValue(scope)}">초기화</button>`;
const catalogScopeStateLabel = () => ({
  bey: "베이",
  parts: "부품",
  tools: "장비"
})[appState.selectedCatalogKind] || "전체";
const catalogFilterStateMarkup = () =>
  `<span class="catalog-state-chip">${escapeHtml(catalogScopeStateLabel())}</span>`;
const catalogSortDropdownMarkup = () => sortDropdownMarkup({
  className: "catalog-sort-dropdown",
  label: "도감 정렬",
  value: activeCatalogSortOption().value,
  options: catalogSortOptions,
  dataAttr: "data-catalog-sort"
});
const renderCatalogSortControl = () => {
  document.querySelectorAll("[data-catalog-sort-control]").forEach(root => {
    root.innerHTML = catalogSortDropdownMarkup();
  });
};
const renderCatalogFilterChips = () => {
  ["catalog"].forEach(scope => {
    const root = document.querySelector(`[data-catalog-filter-chips="${scope}"]`);
    if (!root) return;
    const chips = activeFilterChips(scope);
    root.hidden = false;
    root.classList.remove("is-empty");
    root.removeAttribute("aria-hidden");
    root.innerHTML = chips.length ? `
      ${chips.map(catalogFilterChipMarkup).join("")}
      ${catalogFilterResetMarkup(scope)}
    ` : catalogFilterStateMarkup();
  });
  renderCatalogSortControl();
};
const rootPixelValue = (name, fallback) => {
  const value = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isFinite(value) ? value : fallback;
};
const catalogDropdownMenu = dropdown => dropdown?.querySelector?.(":scope > .catalog-dropdown-menu") || null;
const clearCatalogDropdownScrollbarCompensation = dropdown => {
  const menu = catalogDropdownMenu(dropdown);
  if (!menu) return;
  menu.classList.remove("is-scrollbar-visible");
  menu.style.removeProperty("--dropdown-scrollbar-compensation");
};
const syncCatalogDropdownScrollbarCompensation = dropdown => {
  const menu = catalogDropdownMenu(dropdown);
  if (!menu || !dropdown?.open || dropdown.classList.contains("search-scope")) return;
  const hasVerticalScrollbar = menu.scrollHeight > menu.clientHeight + 1;
  const scrollbarWidth = Math.max(0, menu.offsetWidth - menu.clientWidth);
  if (!hasVerticalScrollbar || scrollbarWidth <= 0) {
    clearCatalogDropdownScrollbarCompensation(dropdown);
    return;
  }
  menu.style.setProperty("--dropdown-scrollbar-compensation", `${scrollbarWidth}px`);
  menu.classList.add("is-scrollbar-visible");
};
const scheduleCatalogDropdownScrollbarCompensation = dropdown => {
  if (!dropdown || dropdown.classList.contains("search-scope")) return;
  requestAnimationFrame(() => syncCatalogDropdownScrollbarCompensation(dropdown));
};
function closeCatalogDropdown(dropdown) {
  if (!dropdown) return;
  dropdown.classList.remove("is-dropdown-entering");
  clearCatalogDropdownScrollbarCompensation(dropdown);
  dropdown.removeAttribute("open");
}
function closeOpenCatalogDropdowns(exceptDropdown = null) {
  document.querySelectorAll(".catalog-dropdown[open]").forEach(dropdown => {
    if (dropdown === exceptDropdown) return;
    closeCatalogDropdown(dropdown);
  });
}
function openCatalogDropdown(dropdown) {
  if (!dropdown || dropdown.open) return;
  closeOpenCatalogDropdowns(dropdown);
  closeAllSearchPreviews();
  closeSearchHelpPopovers();
  playEnterAnimation(dropdown, "is-dropdown-entering");
  dropdown.setAttribute("open", "");
  scheduleCatalogDropdownScrollbarCompensation(dropdown);
}
function toggleCatalogDropdown(dropdown) {
  if (!dropdown) return;
  if (dropdown.open) closeCatalogDropdown(dropdown);
  else openCatalogDropdown(dropdown);
}
function catalogDropdownFromSummaryEvent(event) {
  const summary = event.target?.closest?.("summary");
  const dropdown = summary?.parentElement;
  return dropdown?.classList?.contains("catalog-dropdown") ? dropdown : null;
}
const positionSearchHelpPopover = (button, popover) => {
  if (!button || !popover || popover.hidden) return;
  const margin = rootPixelValue("--floating-layer-edge", 12);
  const gap = rootPixelValue("--floating-layer-gap", 8);
  const isCompact = window.matchMedia?.("(max-width: 63.999rem)")?.matches;
  const viewport = window.visualViewport;
  const viewportLeft = viewport?.offsetLeft || 0;
  const viewportTop = viewport?.offsetTop || 0;
  const viewportWidth = viewport?.width || window.innerWidth;
  const viewportHeight = viewport?.height || window.innerHeight;
  const topbarRect = document.querySelector(".topbar")?.getBoundingClientRect();
  const topbarBottom = topbarRect && topbarRect.height > 0 ? topbarRect.bottom : viewportTop;
  const minLeft = viewportLeft + margin;
  const maxLeft = viewportLeft + viewportWidth - margin;
  const minTop = Math.max(viewportTop + margin, topbarBottom + margin);
  const maxTop = viewportTop + viewportHeight - margin;
  const buttonRect = button.getBoundingClientRect();
  popover.style.width = "";
  popover.style.maxHeight = "";
  if (isCompact) {
    const controlBar = button.closest(".catalog-control-bar");
    const anchorRow = button.closest(".catalog-search-controls, .catalog-toolbar") || button;
    const contentRect = (controlBar || anchorRow).getBoundingClientRect();
    const anchorRect = anchorRow.getBoundingClientRect();
    const availableLeft = Math.max(minLeft, contentRect.left);
    const availableRight = Math.min(maxLeft, contentRect.right || maxLeft);
    const availableWidth = Math.max(0, availableRight - availableLeft);
    const width = Math.min(360, Math.max(160, availableWidth), Math.max(0, maxLeft - minLeft));
    let left = Math.min(Math.max(availableLeft, minLeft), maxLeft - width);
    let top = Math.max(anchorRect.bottom + gap, minTop);
    let availableHeight = maxTop - top;
    const viewportAvailableHeight = Math.max(0, maxTop - minTop);
    const minReadableHeight = Math.min(140, viewportAvailableHeight);
    if (availableHeight < minReadableHeight) {
      top = Math.max(minTop, maxTop - minReadableHeight);
      availableHeight = maxTop - top;
    }
    popover.style.width = `${Math.floor(Math.min(width, maxLeft - left))}px`;
    popover.style.maxHeight = `${Math.floor(Math.max(80, Math.min(availableHeight, viewportAvailableHeight)))}px`;
    popover.style.left = `${Math.floor(left)}px`;
    popover.style.top = `${Math.floor(top)}px`;
    return;
  }
  const popoverRect = popover.getBoundingClientRect();
  let left = buttonRect.left;
  let top = buttonRect.bottom + gap;
  const rightmostLeft = Math.max(minLeft, maxLeft - popoverRect.width);
  const lowestTop = Math.max(minTop, maxTop - popoverRect.height);
  if (top + popoverRect.height > maxTop) {
    const flippedTop = buttonRect.top - popoverRect.height - gap;
    top = flippedTop >= minTop ? flippedTop : minTop;
  }
  left = Math.min(Math.max(left, minLeft), rightmostLeft);
  top = Math.min(Math.max(top, minTop), lowestTop);
  popover.style.left = `${left}px`;
  popover.style.top = `${top}px`;
};
class FloatingPopoverController {
  constructor({ button, popover }) {
    this.button = button;
    this.popover = popover;
    this.button?.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      this.toggle();
    });
    this.popover?.addEventListener("click", event => {
      event.stopPropagation();
    });
  }

  isOpen() {
    return Boolean(this.popover && !this.popover.hidden);
  }

  position() {
    positionSearchHelpPopover(this.button, this.popover);
  }

  close() {
    if (!this.popover) return;
    this.popover.hidden = true;
    this.popover.style.width = "";
    this.popover.style.maxHeight = "";
    this.button?.setAttribute("aria-expanded", "false");
  }

  open() {
    if (!this.popover) return;
    closeAllSearchPreviews();
    closeOpenCatalogDropdowns();
    closeSearchHelpPopovers(this);
    if (this.popover.parentNode !== document.body) {
      document.body.appendChild(this.popover);
    }
    this.popover.hidden = false;
    this.button?.setAttribute("aria-expanded", "true");
    this.position();
  }

  toggle() {
    if (this.isOpen()) this.close();
    else this.open();
  }

  containsEventTarget(event) {
    const target = event?.target;
    return Boolean(
      target instanceof Node
      && (this.button?.contains(target) || this.popover?.contains(target))
    );
  }
}
const searchHelpPopovers = [
  new FloatingPopoverController({ button: catalogSearchHelpButton, popover: catalogSearchHelpPopover }),
  new FloatingPopoverController({ button: animeSearchHelpButton, popover: animeSearchHelpPopover })
];
const anySearchHelpPopoverIsOpen = () => searchHelpPopovers.some(controller => controller.isOpen());
const closeSearchHelpPopovers = exceptController => searchHelpPopovers.forEach(controller => {
  if (controller !== exceptController) controller.close();
});
const positionSearchHelpPopovers = () => searchHelpPopovers.forEach(controller => controller.position());
const closeSearchHelpPopoversOnScroll = () => {
  if (anySearchHelpPopoverIsOpen()) closeSearchHelpPopovers();
};
document.querySelectorAll(".catalog-filter-chips").forEach(root => root.addEventListener("click", event => {
  const chip = event.target.closest("[data-filter-chip-scope][data-filter-chip-key]");
  const reset = event.target.closest("[data-filter-reset-scope]");
  if (chip) {
    resetCatalogFilter(chip.dataset.filterChipScope, chip.dataset.filterChipKey);
    return;
  }
  if (reset) {
    if (reset.dataset.filterResetScope === "catalog") {
      setSearchInputValue(catalogSearch, "");
      appState.currentCatalogPage = 1;
    }
    refreshCatalogState();
    syncCatalogRouteHash();
  }
}));
document.addEventListener("click", event => {
  const catalogSortButton = event.target.closest("button[data-catalog-sort]");
  if (!catalogSortButton) return;
  event.preventDefault();
  const sortValue = catalogSortButton.dataset.catalogSort;
  if (!catalogSortOptions.some(option => option.value === sortValue)) return;
  appState.activeCatalogSort = sortValue;
  setDropdownOption(catalogSortButton);
  catalogVisibleItemsCache.clear();
  appState.currentCatalogPage = 1;
  refreshCatalogResults();
  renderCatalogFilterChips();
  syncCatalogRouteHash();
});
const bindPaginationControls = ({ rootSelector, dataAttr, setPage, render, scroll }) => {
  document.querySelector(rootSelector)?.addEventListener("click", event => {
    const pageButton = event.target.closest(`[${dataAttr}]`);
    if (!pageButton || pageButton.disabled) return;
    event.preventDefault();
    setPage(Number(pageButton.getAttribute(dataAttr)) || 1);
    render();
    if (rootSelector === "#catalogPagination") syncCatalogRouteHash();
    scroll();
  });
};
bindPaginationControls({
  rootSelector: "#catalogPagination",
  dataAttr: "data-catalog-page",
  setPage: page => { appState.currentCatalogPage = page; },
  render: renderCatalogItems,
  scroll: scrollCatalogGridIntoView
});
bindPaginationControls({
  rootSelector: "#animePagination",
  dataAttr: "data-anime-page",
  setPage: page => { appState.currentAnimePage = page; },
  render: renderAnimePage,
  scroll: scrollAnimeGridIntoView
});
document.querySelector("#animePagination")?.addEventListener("click", event => {
  const pageButton = event.target.closest("[data-anime-page]");
  if (!pageButton || pageButton.disabled) return;
  syncAnimeRouteHash();
});
document.addEventListener("click", event => {
  if (event.defaultPrevented || event.button !== 0) return;
  const dropdown = catalogDropdownFromSummaryEvent(event);
  if (!dropdown) return;
  event.preventDefault();
  toggleCatalogDropdown(dropdown);
});
document.addEventListener("keydown", event => {
  if (event.key !== "Enter" && event.key !== " " && event.key !== "Spacebar") return;
  const dropdown = catalogDropdownFromSummaryEvent(event);
  if (!dropdown) return;
  event.preventDefault();
  toggleCatalogDropdown(dropdown);
});
document.addEventListener("toggle", event => {
  const dropdown = event.target.closest?.(".catalog-dropdown");
  if (!dropdown) return;
  if (!dropdown.open) {
    dropdown.classList.remove("is-dropdown-entering");
    clearCatalogDropdownScrollbarCompensation(dropdown);
    return;
  }
  closeOpenCatalogDropdowns(dropdown);
  closeAllSearchPreviews();
  closeSearchHelpPopovers();
  scheduleCatalogDropdownScrollbarCompensation(dropdown);
}, true);
window.addEventListener("resize", () => {
  document.querySelectorAll(".catalog-dropdown[open]").forEach(scheduleCatalogDropdownScrollbarCompensation);
}, { passive: true });
document.addEventListener("click", event => {
  if (!event.target.closest(".search-box") && !event.target.closest(".overview-search")) closeAllSearchPreviews();
  if (!event.target.closest(".catalog-dropdown")) closeOpenCatalogDropdowns();
});
const updateToTop = () => {
  if (!toTop) return;
  toTop.classList.toggle("show", window.scrollY > 420);
};
window.addEventListener("scroll", () => {
  updateToTop();
  closeSearchHelpPopoversOnScroll();
}, { passive: true });
toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
updateToTop();


const activateAppPanel = section => {
  document.querySelectorAll(".app-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.appPanel === section));
  document.body.dataset.activePanel = section;
  document.body.classList.toggle("is-overview", section === "overview");
  closeAllSearchPreviews();
};
const syncSidebarActiveState = section => {
  const currentSection = normalizeSidebarSection(section);
  getNavigationRoots().forEach(root => {
    root.querySelectorAll(sidebarCurrentButtonSelector).forEach(button => {
      setSidebarButtonCurrent(button, isNavigationButtonCurrent(button, currentSection));
    });
  });
};
const mobileDrawerMediaQuery = window.matchMedia("(max-width: 63.999rem)");
const mobileDrawerIsOpen = () => document.body.classList.contains("menu-open");
const isMobileDrawerMode = () => mobileDrawerMediaQuery.matches;
const syncMenuButtonMode = () => {
  if (!menuButton) return;
  const open = mobileDrawerIsOpen();
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-controls", "mobileDrawer");
  menuButton.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
};
const setMobileDrawerOpen = open => {
  const nextOpen = Boolean(open && isMobileDrawerMode());
  document.body.classList.toggle("menu-open", nextOpen);
  mobileDrawer?.setAttribute("aria-hidden", String(!nextOpen));
  if (nextOpen) {
    const panel = activeAppPanel()?.dataset.appPanel || "overview";
    syncSidebarActiveState(panel);
  }
  syncMenuButtonMode();
};
const currentMenuTrigger = () => menuButton;
const clearPrimaryViewLocks = () => {
  if (document.body.classList.contains("menu-open")) setMobileDrawerOpen(false);
  if (modal?.open) return;
  cancelModalViewportSync();
  clearModalLockStyles();
};
const activatePrimarySection = (section, { preserveSearch = false } = {}) => {
  cancelPendingSearchRenderTasks();
  clearPrimaryViewLocks();
  if (section === "product") section = "overview";
  const isCatalogSection = ["catalog", "bey", "parts", "tools"].includes(section);
  const catalogScope = section === "catalog" ? "all" : section;
  const panelSection = isCatalogSection ? "catalog" : section;
  if (!preserveSearch) clearSearchInputs();
  syncSidebarActiveState(panelSection);
  activateAppPanel(panelSection);
  if (section === "overview") syncGlobalSearchScopePeers("all");
  if (isCatalogSection) {
    resetCatalogFilters();
    if (!preserveSearch) setCatalogSeries(defaultCatalogSeries(), { refresh: false });
    setCatalogScope(catalogScope);
    syncGlobalSearchScopePeers(catalogScope === "bey" || catalogScope === "tools" ? catalogScope : "all");
  }
  if (panelSection === "anime") renderAnimePage();

  setMobileDrawerOpen(false);
};
function closeDetailModalForPrimaryRoute() {
  closeModalSession();
}
function routeApplyOptions(route = {}) {
  return { ...(route.options || {}), updateHash: false };
}
const restorePagedSearchOrigin = ({ originState, queryKey, pageKey, input, setPage, render, refresh = render }) => {
  if (typeof originState?.[queryKey] === "string") setSearchInputValue(input, originState[queryKey]);
  refresh();
  const page = Number(originState?.[pageKey]);
  if (Number.isFinite(page) && page > 1) {
    setPage(Math.floor(page));
    render();
  }
};
const restoreStoredCatalogOrigin = originState => {
  setCatalogSeries(originState?.catalogSeries || "all", { refresh: false });
  appState.activeCatalogSort = normalizeCatalogRouteSort(originState?.catalogSort || appState.activeCatalogSort);
  restorePagedSearchOrigin({
    originState,
    queryKey: "catalogQuery",
    pageKey: "catalogPage",
    input: catalogSearch,
    setPage: page => { appState.currentCatalogPage = page; },
    render: renderCatalogItems,
    refresh: refreshCatalogState
  });
};
const restoreStoredAnimeOrigin = originState => {
  if (originState?.animeSeason) appState.activeAnimeCharacterSeason = normalizeAnimeCharacterSeason(originState.animeSeason);
  restorePagedSearchOrigin({
    originState,
    queryKey: "animeQuery",
    pageKey: "animePage",
    input: animeSearch,
    setPage: page => { appState.currentAnimePage = page; },
    render: renderAnimePage
  });
};

export {
  activatePrimarySection,
  anySearchHelpPopoverIsOpen,
  bindSearchInput,
  catalogRouteFromState,
  closeDetailModalForPrimaryRoute,
  closeOpenCatalogDropdowns,
  closeSearchHelpPopovers,
  closeSearchHelpPopoversOnScroll,
  currentMenuTrigger,
  handleCategoryRouteClick,
  isMobileDrawerMode,
  mobileDrawerIsOpen,
  openCategoryAnimePage,
  openCategoryCatalog,
  openSearchResults,
  positionSearchHelpPopovers,
  refreshCatalogState,
  renderCatalogFilterChips,
  restoreStoredAnimeOrigin,
  restoreStoredCatalogOrigin,
  routeApplyOptions,
  searchHelpPopovers,
  setDropdownOption,
  setGlobalSearchState,
  setMobileDrawerOpen,
  syncAnimeRouteHash,
  syncCatalogRouteHash,
  syncMenuButtonMode
};
