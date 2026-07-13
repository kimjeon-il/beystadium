const categoryReleaseMenuRoute = () => {
  const region = "kr";
  return { type: "category-release", options: { region, series: defaultReleaseSeries(region) } };
};
const openCategoryCatalog = ({ scope = "all", series = "all", sort = defaultCatalogSort(), page = 1, query = "", updateHash = true, replace = false, preserveSearch = false } = {}) => {
  const catalogRoute = normalizeRoute({ type: "catalog", scope, series, sort, page, query });
  const normalizedScope = catalogRoute.scope;
  if (updateHash && !applyingRoute) {
    navigateToRoute(catalogRoute, { replace });
    return;
  }
  activatePrimarySection(normalizedScope === "all" ? "catalog" : normalizedScope, { preserveSearch });
  applyCatalogRouteState(catalogRoute);
};
const openCategoryAnimePage = (options = {}) => {
  const { updateHash = true, replace = false, preserveSearch = false } = options;
  const animeRoute = normalizeRoute({ type: "category-anime", ...options });
  if (updateHash && !applyingRoute) {
    navigateToRoute(animeRoute, { replace });
    return;
  }
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
  if (updateHash && !applyingRoute) {
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
  const runSearch = handler => {
    syncSearchInputState(input);
    handler?.(input);
  };
  if (root && !clearButton) {
    clearButton = document.createElement("button");
    clearButton.type = "button";
    clearButton.className = "search-clear";
    clearButton.hidden = true;
    clearButton.setAttribute("aria-label", "검색어 지우기");
    if (!root.closest(".mobile-drawer")) clearButton.setAttribute("title", "검색어 지우기");
    input.insertAdjacentElement("afterend", clearButton);
    clearButton.addEventListener("click", () => {
      setSearchInputValue(input, "");
      input.focus();
      runSearch(onInput);
      refreshSearchPreview(input, { resetActive: true });
    });
  }
  input.addEventListener("input", () => {
    runSearch(onInput);
    refreshSearchPreview(input, { resetActive: true });
  });
  input.addEventListener("keydown", event => {
    if (handleSearchPreviewKeydown(input, event)) return;
    if (event.key !== "Enter") return;
    event.preventDefault();
    runSearch(onSubmit);
  });
  root?.querySelector(".search-icon")?.addEventListener("click", () => runSearch(onSubmit));
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
      currentCatalogPage = 1;
      scheduleCatalogSearchResultsRefresh();
      syncCatalogRouteHash({ overrides: { page: 1 } });
    }
  },
  {
    input: animeSearch,
    container: ".anime-search-box",
    refresh: () => {
      currentAnimePage = 1;
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
  selectedCatalogKind = "";
};
const setCatalogSeries = (series, { refresh = true } = {}) => {
  selectedCatalogSeries = normalizeCatalogSeries(series);
  setCatalogSeriesFilter(selectedCatalogSeries);
  if (refresh) refreshCatalogState();
};
const setCatalogScope = (scope, { refresh = true } = {}) => {
  if (scope === "bey" || scope === "parts" || scope === "tools") {
    selectedCatalogKind = scope;
  } else {
    selectedCatalogKind = "";
  }
  setCatalogSearchScope(selectedCatalogKind || "all");
  if (refresh) refreshCatalogState();
};
const catalogRouteFromState = (overrides = {}) => normalizeRoute({
  type: "catalog",
  scope: selectedCatalogKind || "all",
  series: selectedCatalogSeries || "all",
  sort: activeCatalogSort,
  page: currentCatalogPage,
  query: catalogSearchQuery(),
  ...overrides
});
const syncCatalogRouteHash = ({ replace = true, force = false, overrides = {} } = {}) => {
  if (!force && (applyingRoute || activeAppPanelName() !== "catalog")) return;
  navigateToRoute(catalogRouteFromState(overrides), {
    replace,
    apply: false,
    preserveScroll: true,
    preserveSearch: true
  });
};
const animeRouteFromState = (overrides = {}) => normalizeRoute({
  type: "category-anime",
  season: activeAnimeCharacterSeason || "all",
  page: currentAnimePage,
  query: animeSearchQuery(),
  ...overrides
});
const syncAnimeRouteHash = ({ replace = true, force = false, overrides = {} } = {}) => {
  if (!force && (applyingRoute || activeAppPanelName() !== "anime")) return;
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
  activeCatalogSort = catalogRoute.sort;
  setSearchInputValue(catalogSearch, catalogRoute.query);
  currentCatalogPage = catalogRoute.page;
  currentCatalogRenderKey = catalogRenderKey();
  catalogVisibleItemsCache.clear();
  syncGlobalSearchScopePeers(catalogRoute.scope === "bey" || catalogRoute.scope === "tools" ? catalogRoute.scope : "all");
  refreshCatalogState();
};
function applyAnimeRouteState(route = {}, { preserveSearch = false, hasQuery = false } = {}) {
  const animeRoute = normalizeRoute({ type: "category-anime", ...route });
  activeAnimeCharacterSeason = normalizeAnimeCharacterSeason(animeRoute.season);
  if (hasQuery || !preserveSearch) setSearchInputValue(animeSearch, animeRoute.query);
  currentAnimePage = animeRoute.page;
  currentAnimeRenderKey = animeRenderKey();
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
  currentCatalogPage = 1;
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
})[selectedCatalogKind] || "전체";
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
      currentCatalogPage = 1;
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
  activeCatalogSort = sortValue;
  setDropdownOption(catalogSortButton);
  catalogVisibleItemsCache.clear();
  currentCatalogPage = 1;
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
  setPage: page => { currentCatalogPage = page; },
  render: renderCatalogItems,
  scroll: scrollCatalogGridIntoView
});
bindPaginationControls({
  rootSelector: "#animePagination",
  dataAttr: "data-anime-page",
  setPage: page => { currentAnimePage = page; },
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

const modal = document.querySelector("#detailModal");
const modalTransitionKinds = new Set(["list", "drill", "composition", "back", "route", "step-prev", "step-next"]);
const modalStageMotionKinds = new Set(["list", "drill", "route"]);
let pendingModalTransition = "";
let pendingModalTransitionOrigin = null;
const modalTransitionOrigin = element => {
  const rect = element?.getBoundingClientRect?.();
  if (!rect || (!rect.width && !rect.height)) return null;
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2
  };
};
function queueModalTransition(kind, { sourceElement = null } = {}) {
  pendingModalTransition = modalTransitionKinds.has(kind) ? kind : "";
  pendingModalTransitionOrigin = pendingModalTransition && sourceElement ? modalTransitionOrigin(sourceElement) : null;
}
function queueModalStepDirection(direction) {
  queueModalTransition(direction === "prev" || direction === "next" ? `step-${direction}` : "");
}
function takeModalTransition() {
  const transition = pendingModalTransition || "route";
  const origin = pendingModalTransitionOrigin;
  pendingModalTransition = "";
  pendingModalTransitionOrigin = null;
  return { transition, origin };
}
function modalTransitionClass(transition) {
  return transition.startsWith("step-") ? `modal-inner--${transition}` : `modal-inner--enter-${transition}`;
}
class ModalController {
  constructor(modalElement) {
    this.modal = modalElement;
    this.scrollY = 0;
    this.pendingScrollY = null;
    this.viewportSyncFrame = 0;
    this.descriptionMeasureFrame = 0;
  }

  get contentRoot() {
    return document.querySelector("#modalContent");
  }

  get stage() {
    return this.modal?.querySelector(".modal-stage") || null;
  }

  getViewportSize() {
    const visualViewport = window.visualViewport;
    const width = Math.round(visualViewport?.width || window.innerWidth || document.documentElement.clientWidth || 0);
    const height = Math.round(visualViewport?.height || window.innerHeight || document.documentElement.clientHeight || 0);
    return { width, height };
  }

  getLockWidth() {
    const clientWidth = document.documentElement.clientWidth || 0;
    const innerWidth = window.innerWidth || 0;
    return Math.round(clientWidth || innerWidth || this.getViewportSize().width || 0);
  }

  cancelViewportSync() {
    if (!this.viewportSyncFrame) return;
    cancelAnimationFrame(this.viewportSyncFrame);
    this.viewportSyncFrame = 0;
  }

  cancelDescriptionMeasure() {
    if (!this.descriptionMeasureFrame) return;
    cancelAnimationFrame(this.descriptionMeasureFrame);
    this.descriptionMeasureFrame = 0;
  }

  setDescriptionExpanded(slot, expanded) {
    const button = slot?.querySelector(".modal-description-toggle");
    if (!slot || !button) return;
    slot.classList.toggle("is-expanded", expanded);
    button.textContent = expanded ? "접기" : "더보기";
    button.setAttribute("aria-expanded", expanded ? "true" : "false");
  }

  refreshDescriptionExpanders(root = document) {
    if (!this.modal?.open) return;
    const slots = Array.from(root.querySelectorAll?.(".part-modal-info .modal-info-slot") || []);
    slots.forEach(slot => {
      const description = slot.querySelector(".modal-description");
      const button = slot.querySelector(".modal-description-toggle");
      if (!description || !button) return;
      const hasDescription = description.textContent.trim().length > 0;
      const wasExpanded = slot.classList.contains("is-expanded");
      slot.classList.remove("is-expanded", "is-expandable");
      button.hidden = true;
      button.textContent = "더보기";
      button.setAttribute("aria-expanded", "false");
      if (!hasDescription) return;
      const collapsedHeight = description.getBoundingClientRect().height;
      slot.classList.add("is-measuring-description");
      const fullHeight = description.getBoundingClientRect().height;
      slot.classList.remove("is-measuring-description");
      const expandable = fullHeight > collapsedHeight + 1;
      slot.classList.toggle("is-expandable", expandable);
      button.hidden = !expandable;
      if (expandable && wasExpanded) this.setDescriptionExpanded(slot, true);
    });
  }

  scheduleDescriptionMeasure(root = document) {
    this.cancelDescriptionMeasure();
    this.descriptionMeasureFrame = requestAnimationFrame(() => {
      this.descriptionMeasureFrame = 0;
      this.refreshDescriptionExpanders(root);
    });
  }

  bindDescriptionExpanders(root = document) {
    root.querySelectorAll?.(".part-modal-info .modal-description-toggle").forEach(button => {
      button.addEventListener("click", () => {
        const slot = button.closest(".modal-info-slot");
        this.setDescriptionExpanded(slot, !slot?.classList.contains("is-expanded"));
      });
    });
  }

  clearLockStyles() {
    document.documentElement.classList.remove("is-modal-open");
    document.body.classList.remove("is-modal-open");
    document.body.style.removeProperty("--modal-lock-left");
    document.body.style.removeProperty("--modal-lock-width");
    document.body.style.removeProperty("--modal-viewport-width");
    document.body.style.removeProperty("--modal-viewport-height");
    document.body.style.removeProperty("--modal-scroll-lock-top");
  }

  syncViewportMetrics() {
    if (!this.modal?.open) return;
    const { width, height } = this.getViewportSize();
    document.body.style.setProperty("--modal-viewport-width", `${width}px`);
    document.body.style.setProperty("--modal-viewport-height", `${height}px`);
    document.body.style.setProperty("--modal-lock-width", `${this.getLockWidth()}px`);
  }

  scheduleViewportSync() {
    if (!this.modal?.open) return;
    this.syncViewportMetrics();
    this.cancelViewportSync();
    this.viewportSyncFrame = requestAnimationFrame(() => {
      this.viewportSyncFrame = 0;
      this.syncViewportMetrics();
      this.scheduleDescriptionMeasure(this.contentRoot || document);
    });
  }

  open() {
    if (!this.modal || this.modal.open) return;
    if (this.pendingScrollY !== null) {
      this.scrollY = validScrollY(this.pendingScrollY);
      this.pendingScrollY = null;
    } else {
      this.scrollY = currentPageScrollY();
    }
    const bodyRect = document.body.getBoundingClientRect();
    document.body.style.setProperty("--modal-lock-left", `${bodyRect.left}px`);
    document.body.style.setProperty("--modal-lock-width", `${this.getLockWidth()}px`);
    document.body.style.setProperty("--modal-scroll-lock-top", `${this.scrollY * -1}px`);
    document.documentElement.classList.add("is-modal-open");
    document.body.classList.add("is-modal-open");
    this.modal.showModal();
    this.syncViewportMetrics();
  }

  close() {
    const targetScrollY = validScrollY(this.scrollY);
    this.cancelDescriptionMeasure();
    if (this.modal?.open) this.modal.close();
    this.cancelViewportSync();
    this.modal?.removeAttribute("data-modal-transition");
    restorePageScroll(targetScrollY);
    this.clearLockStyles();
    restorePageScroll(targetScrollY);
  }

  setTransitionOrigin(origin, modalInner) {
    if (!this.modal) return;
    if (!origin) {
      this.modal.style.setProperty("--modal-origin-shift-x", "0px");
      this.modal.style.setProperty("--modal-origin-shift-y", "0px");
      return;
    }
    const viewport = this.getViewportSize();
    const rect = modalInner?.getBoundingClientRect?.();
    const centerX = rect?.width ? rect.left + rect.width / 2 : viewport.width / 2;
    const centerY = rect?.height ? rect.top + rect.height / 2 : viewport.height / 2;
    const clamp = (value, max) => Math.max(max * -1, Math.min(max, value));
    const shiftX = clamp((origin.x - centerX) * 0.035, 8);
    const shiftY = clamp((origin.y - centerY) * 0.035, 6);
    this.modal.style.setProperty("--modal-origin-shift-x", `${shiftX.toFixed(1)}px`);
    this.modal.style.setProperty("--modal-origin-shift-y", `${shiftY.toFixed(1)}px`);
  }

  playStageMotion(transition) {
    const stage = this.stage;
    if (!stage) return;
    stage.classList.remove("is-modal-stage-entering");
    if (modalStageMotionKinds.has(transition)) {
      playEnterAnimation(stage, "is-modal-stage-entering");
    }
  }

  setContent(html) {
    const root = this.contentRoot;
    if (!root) {
      takeModalTransition();
      return root;
    }
    root.innerHTML = html;
    const { transition, origin } = takeModalTransition();
    const modalInner = root.querySelector(".modal-inner");
    if (this.modal) this.modal.dataset.modalTransition = transition;
    this.setTransitionOrigin(origin, modalInner);
    modalInner?.classList.add(modalTransitionClass(transition));
    this.playStageMotion(transition);
    return root;
  }

  finishOpen({ contextKind, contextId, contextOptions = {}, root = document } = {}) {
    if (contextKind && contextId) rememberModalContext(contextKind, contextId, contextOptions);
    this.open();
    return root;
  }
}
const modalController = new ModalController(modal);
const cancelModalViewportSync = () => modalController.cancelViewportSync();
function scheduleModalDescriptionMeasure(root = document) {
  modalController.scheduleDescriptionMeasure(root);
}
function bindModalDescriptionExpanders(root = document) {
  modalController.bindDescriptionExpanders(root);
}
const clearModalLockStyles = () => modalController.clearLockStyles();
function scheduleModalViewportSync() {
  modalController.scheduleViewportSync();
}
function closeModal() {
  modalController.close();
}
function closeModalSession({ clearContext = true, clearOrigin = true } = {}) {
  closeModalTagPopover();
  cleanupModelViewer();
  if (clearContext) {
    clearModalContext();
    clearActiveDetailModalContext();
  }
  const shouldRestoreModalScroll = Boolean(modalOriginRoute);
  if (clearOrigin) clearModalOriginRoute();
  if (modal?.open) closeModal();
  else if (shouldRestoreModalScroll) restorePageScroll(modalController.scrollY);
}
function routeIfNeeded(route) {
  if (applyingRoute) return false;
  navigateToRoute(route);
  return true;
}
function setModalContent(html) {
  return modalController.setContent(html);
}
function finishModalOpen({ contextKind, contextId, contextOptions = {}, root = document } = {}) {
  return modalController.finishOpen({ contextKind, contextId, contextOptions, root });
}
const statProfiles = {
  "metal fight": {
    stats: [
      { key: "attack", label: "공격력" },
      { key: "defense", label: "방어력" },
      { key: "stamina", label: "지구력" }
    ],
    normalize: value => normalizedMetalFightStat(value),
    fillPercent: value => Math.min(100, value * 20)
  },
  burst: {
    stats: [
      { key: "attack", label: "공격력" },
      { key: "defense", label: "방어력" },
      { key: "stamina", label: "지구력" },
      { key: "weight", label: "중량" },
      { key: "speed", label: "기동력" },
      { key: "burst", label: "버스트력" }
    ],
    fillPercent: value => Math.min(100, value * (100 / 6))
  },
  x: {
    stats: [
      { key: "attack", label: "공격력" },
      { key: "defense", label: "방어력" },
      { key: "stamina", label: "지구력" }
    ],
    fillPercent: value => Math.max(0, Math.min(100, value))
  }
};
function statProfileFor(item) {
  return statProfiles[item.statProfile] || statProfiles[item.series] || null;
}
function normalizedMetalFightStat(value) {
  if (value <= 0) return 0;
  return Math.min(7, Math.max(0.5, Math.round(value / 5) / 2));
}
function statValue(stats, entry, index) {
  if (Array.isArray(stats)) return stats[index];
  return stats?.[entry.key];
}
function normalizedStat(rawValue, profile) {
  const value = Number(rawValue);
  if (!Number.isFinite(value)) return 0;
  return profile.normalize ? profile.normalize(value) : value;
}
function statFillPercent(value, profile) {
  if (profile.fillPercent) return profile.fillPercent(value);
  return Math.max(0, Math.min(100, value));
}
function statRow(name, rawValue, profile) {
  const value = normalizedStat(rawValue, profile);
  return `
    <div class="stat-row"><span>${name}</span><div class="stat-track"><div class="stat-fill" style="width:${statFillPercent(value, profile)}%"></div></div><b>${value}</b></div>`;
}
function statRows(item, stats, extraStats = []) {
  const profile = statProfileFor(item);
  if (!profile) return "";
  const baseStats = (profile.stats || [])
    .map((entry, index) => {
      const value = statValue(stats, entry, index);
      return value == null ? "" : statRow(entry.label, value, profile);
    })
    .filter(Boolean);
  const additionalStats = (extraStats || []).map(stat => statRow(stat.name, stat.value, profile));
  return [...baseStats, ...additionalStats].join("");
}
function trackHeightType(item) {
  if (item.id === "TRACK-CHANGE-HEIGHT-120") return "보통 / 높음";
  const height = Number(item.name.match(/\d+$/)?.[0] || 0);
  if (height >= 170 && height <= 230) return "매우높음";
  if (height >= 130 && height <= 165) return "높음";
  if (height >= 120 && height <= 125) return "보통";
  if (height >= 100 && height <= 105) return "낮음";
  if (height >= 80 && height <= 90) return "매우낮음";
  return "";
}
function trackHeightLevel(item) {
  const type = trackHeightType(item);
  if (type === "매우높음") return 5;
  if (type === "높음") return 4;
  if (type === "보통 / 높음") return 3.5;
  if (type === "보통") return 3;
  if (type === "낮음") return 2;
  if (type === "매우낮음") return 1;
  return 0;
}
function heightFillPercent(level) {
  return Math.max(0, Math.min(100, (level - 1) / 4 * 100));
}
function trackHeightModeRow(type, level) {
  return `<div class="track-height-row"><span>높이</span><div class="stat-track"><div class="stat-fill" style="width:${heightFillPercent(level)}%"></div></div><b>${type}</b></div>`;
}
function isZeroGStadiumBottom(item) {
  if (!["bottom", "4dbottom"].includes(item.type)) return false;
  const startIndex = zeroGBottomStartIndex();
  return startIndex >= 0 && partItems.indexOf(item) >= startIndex;
}
function zeroGStadiumNote(item) {
  return isZeroGStadiumBottom(item) ? `<p class="stat-note">방어력과 지구력은 제로G 스타디움 기준이며, 일반 스타디움에서는 두 값이 서로 바뀝니다.</p>` : "";
}
function statBlockMarkup(content) {
  const body = String(content || "").trim();
  return body ? `<section class="stat-block"><p class="stat-block-title">능력치</p><div class="stat-block-content">${body}</div></section>` : "";
}
function partStats(item) {
  if (item.type === "track") {
    if (item.id === "TRACK-CHANGE-HEIGHT-120") {
      return statBlockMarkup(`<div class="mode-stats"><section><p class="mode-title">120 모드</p>${trackHeightModeRow("보통", 3)}</section><section><p class="mode-title">145 모드</p>${trackHeightModeRow("높음", 4)}</section></div>`);
    }
    const level = trackHeightLevel(item);
    return statBlockMarkup(trackHeightModeRow(trackHeightType(item), level));
  }
  const note = zeroGStadiumNote(item);
  if (!item.modes) {
    const rows = statRows(item, item.stats, item.extraStats);
    return rows ? statBlockMarkup(`${rows}${note}`) : "";
  }
  const modeStats = item.modes
    .map(mode => {
      const rows = statRows(item, mode.stats, mode.extraStats);
      return rows ? `<section><p class="mode-title">${mode.name}</p>${rows}</section>` : "";
    })
    .filter(Boolean)
    .join("");
  return modeStats ? statBlockMarkup(`<div class="mode-stats">${modeStats}</div>${note}`) : "";
}
const modalBackButtonMarkup = ({ backId = "", backProductId = "", backRelease = false, backRareBeyGetList = false, region = "", series = "", label = "돌아가기", animeEpisodes = false } = {}) => {
  const releaseBackAttr = backRelease ? ` data-back-release="true"` : "";
  const rareBeyGetListAttr = backRareBeyGetList ? ` data-back-rare-bey-get-list="true"` : "";
  const regionBackAttr = region ? ` data-back-region="${escapeAttributeValue(region)}"` : "";
  const seriesBackAttr = series ? ` data-back-series="${escapeAttributeValue(series)}"` : "";
  const backIdAttr = backId ? ` data-back-id="${escapeAttributeValue(backId)}"` : "";
  const productAttr = backProductId ? ` data-back-product-id="${escapeAttributeValue(backProductId)}"` : "";
  const animeBackAttr = animeEpisodes ? " data-back-anime-episodes" : "";
  return `<button class="ui-icon-button modal-back icon-back-button" type="button"${backIdAttr}${productAttr}${releaseBackAttr}${rareBeyGetListAttr}${regionBackAttr}${seriesBackAttr}${animeBackAttr} aria-label="${escapeAttributeValue(label)}">←</button>`;
};
const detailBackButton = (backId, backProductId, backRelease, backRegion) => {
  if (backId) {
    return modalBackButtonMarkup({ backId, backProductId, backRelease, region: backRegion, label: "베이로 돌아가기" });
  }
  return productBackButton({ backProductId, backRelease, region: backRegion });
};
const productBackButton = ({ backProductId, backRelease = false, region = "" } = {}) => {
  if (!backProductId) return "";
  return modalBackButtonMarkup({ backProductId, backRelease, region, label: "제품으로 돌아가기" });
};
const rareBeyGetListBackButton = ({ region = "", series = "", backProductId = "", backRelease = false } = {}) =>
  modalBackButtonMarkup({ backRareBeyGetList: true, backProductId, backRelease, region, series, label: "레어 베이 겟 목록으로 돌아가기" });
const productModalBackButton = (item, options = {}, region = activeReleaseRegion) => {
  if (options.backRareBeyGetList) return rareBeyGetListBackButton({
    region: options.rareBeyGetListRegion || region,
    series: options.rareBeyGetListSeries || item?.series || activeReleaseSeries,
    backProductId: options.rareBeyGetListBackProductId || "",
    backRelease: options.rareBeyGetListBackRelease === true
  });
  if (options.backProductId) return productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region });
  if (options.backRelease) return modalBackButtonMarkup({ backRelease: true, region, label: "발매목록으로 돌아가기" });
  return "";
};
const modalBackOptions = (button, fallbackRegion = "") => ({
  ...(button.dataset.backRelease ? { backRelease: true } : {}),
  ...(button.dataset.backSeries ? { series: button.dataset.backSeries } : {}),
  ...((button.dataset.backRegion || fallbackRegion) ? { region: button.dataset.backRegion || fallbackRegion } : {})
});
function bindCatalogModalBack(scope = document, { fallbackRegion = "" } = {}) {
  scope.querySelector(".modal-back")?.addEventListener("click", event => {
    event.preventDefault();
    const backButton = event.currentTarget;
    const backOptions = modalBackOptions(backButton, fallbackRegion);
    if (backButton.dataset.backRareBeyGetList) {
      queueModalTransition("back");
      openRareBeyGetListDetail({
        region: backOptions.region || activeReleaseRegion,
        series: backOptions.series || activeReleaseSeries,
        backProductId: backButton.dataset.backProductId || "",
        backRelease: backOptions.backRelease === true
      });
      return;
    }
    if (backButton.dataset.backId) {
      if (backButton.dataset.backProductId) backOptions.backProductId = backButton.dataset.backProductId;
      queueModalTransition("back");
      openDetail(backButton.dataset.backId, backOptions);
      return;
    }
    if (backButton.dataset.backProductId) {
      queueModalTransition("back");
      openProductEntry(backButton.dataset.backProductId, backOptions);
      return;
    }
    if (backButton.dataset.backRelease) openCategoryReleaseDetail({ region: backOptions.region || activeReleaseRegion });
  });
}
const modalStepButtonMarkup = ({ direction, targetId, kind, label }) =>
  `<button class="ui-icon-button modal-step modal-step-${direction}" type="button" data-modal-kind="${escapeAttributeValue(kind)}" data-modal-target="${escapeAttributeValue(targetId)}" aria-label="${escapeAttributeValue(label)}"></button>`;
function modalStepButtons(list, currentId, kind) {
  const index = list.findIndex(entry => entry.id === currentId);
  if (index < 0 || list.length < 2) return "";
  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  return [
    modalStepButtonMarkup({ direction: "prev", targetId: prev.id, kind, label: "전 항목" }),
    modalStepButtonMarkup({ direction: "next", targetId: next.id, kind, label: "후 항목" })
  ].join("");
}
function bindModalStepButtons(options = {}) {
  document.querySelectorAll(".modal-step").forEach(button => button.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    const targetId = button.dataset.modalTarget;
    if (!targetId) return;
    const kind = button.dataset.modalKind || "item";
    queueModalStepDirection(button.classList.contains("modal-step-prev") ? "prev" : "next");
    openDetailByKind(kind, targetId, options[kind] || (kind === "item" ? options.item : {}) || {});
  }));
}
function openDetailByKind(kind, targetId, options = {}) {
  if (!targetId) return;
  if (isAnimeEpisodeHash(targetId)) openAnimeEpisodeDetail(targetId, options);
  else if (kind === "product-lineup") openProductLineupDetail(targetId, options);
  else if (kind === "product" || targetId.startsWith("PRODUCT-")) openProductEntry(targetId, options);
  else if (kind === "tools" || targetId.startsWith("TOOLS-")) openToolsDetail(targetId, options);
  else if (kind === "book" || targetId.startsWith("BOOK-")) openBookDetail(targetId, options);
  else if (kind === "game" || targetId.startsWith("GAME-")) openGameDetail(targetId, options);
  else openDetail(targetId, options);
}
function modalTitle(text, extraClass = "") {
  const className = extraClass ? `modal-name ${extraClass}` : "modal-name";
  return `<h3 class="${className}">${text}</h3>`;
}
function detailHeading(item, options = {}) {
  if (codedPartNameTypes.includes(item.type)) {
    const numericTrack = item.type === "track" && /^\d+$/.test(item.name);
    const koName = partKoName(item);
    const displayName = itemDisplayName(item, options.region);
    return numericTrack
      ? modalTitle(displayName)
      : modalTitle(options.region === "jp" && item.jpName ? displayName : koName);
  }
  if (item.type === "bey") {
    const combo = partCategory(item);
    const name = itemDisplayName(item, options.region);
    return modalTitle(combo ? `${name} ${combo}` : name);
  }
  return modalTitle(itemDisplayName(item, options.region));
}
const validReleaseRegion = region => releaseRegionLabels[region] ? region : "";
const catalogDetailProductHasTarget = (product, region, targetId) =>
  productReleasedInRegion(product, region) &&
  (productCompositionItems(product, region).some(part => part.target === targetId) ||
    productLineupIds(product).includes(targetId));
const inferCatalogDetailRegionFromProduct = (options = {}) => {
  const product = options.backProductId ? productItemsById.get(options.backProductId) : null;
  if (!product) return "";
  const requestedRegion = validReleaseRegion(options.region) || validReleaseRegion(activeReleaseRegion) || "kr";
  return productDisplayRegion(product, requestedRegion);
};
const inferCatalogDetailRegionFromItem = item => {
  if (!item || item.series !== "x") return "";
  if (item.id.includes("-JP-")) return "jp";
  if (item.type !== "bey") return "";
  const hasJpRelease = productItems.some(product => catalogDetailProductHasTarget(product, "jp", item.id));
  const hasKrRelease = productItems.some(product => catalogDetailProductHasTarget(product, "kr", item.id));
  return hasJpRelease && !hasKrRelease ? "jp" : "";
};
function catalogDetailRegion(item, options = {}) {
  return validReleaseRegion(options.region) ||
    inferCatalogDetailRegionFromProduct(options) ||
    inferCatalogDetailRegionFromItem(item) ||
    validReleaseRegion(activeReleaseRegion) ||
    "kr";
}
function openDetail(id, options = {}) {
  const item = catalogCoreItemsById.get(id);
  if (!item) return;
  const detailRegion = catalogDetailRegion(item, options);
  const detailOptions = { ...options, region: detailRegion };
  if (routeIfNeeded({ type: "detail", id, options: detailOptions })) return;
  closeModalTagPopover();
  cleanupModelViewer();
  const description = itemDisplayDesc(item, detailRegion);
  const slot = item.type === "bey"
    ? modalInfoSlot(description, beyModalTags(item), "single-line-info-slot")
    : modalInfoSlot(description, partModalTags(item));
  const body = item.type === "bey" ? beyDetailSections(item, detailRegion) : partStats(item);
  const visibleCoreItems = visibleCatalogCoreItems();
  const stepItems = visibleCoreItems.some(entry => entry.id === item.id) ? visibleCoreItems : catalogCoreItems;
  const modalContentRoot = setModalContent(`${modalStepButtons(stepItems, item.id, "item")}<div class="modal-inner">
    <div class="modal-art">${modalArtMarkup(item)}</div>
    <div class="modal-info ${item.type === "bey" ? "bey-modal-info" : "part-modal-info"}">
    ${modalScrollArea(`${detailHeading(item, detailOptions)}
    ${slot}<div class="modal-body-block">${body}</div>`)}${detailBackButton(detailOptions.backId, detailOptions.backProductId, detailOptions.backRelease, detailRegion)}</div></div>`);
  if (!modalContentRoot) return;
  bindModalStepButtons({ item: detailOptions });
  bindCatalogModalBack(modalContentRoot);
  modalContentRoot.querySelectorAll(".mounted-link").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    if (!link.dataset.partId) return;
    const linkOptions = { backId: item.id, region: detailRegion };
    if (detailOptions.backProductId) linkOptions.backProductId = detailOptions.backProductId;
    if (detailOptions.backRelease) linkOptions.backRelease = true;
    queueModalTransition("composition", { sourceElement: link });
    openDetail(link.dataset.partId, linkOptions);
  }));
  bindModalTagPopovers(modalContentRoot);
  bindModalDescriptionExpanders(modalContentRoot);
  finishModalOpen({ contextKind: "item", contextId: item.id, contextOptions: detailOptions, root: modalContentRoot });
  scheduleModalDescriptionMeasure(modalContentRoot);
  if (item.model) requestAnimationFrame(initModelViewer);
}
function productHeader(item, region = activeReleaseRegion) {
  return modalTitle(productDisplayName(item, region), "product-modal-name");
}
function rareBeyGetMetaChip(item, region = activeReleaseRegion) {
  if (!releaseHasBadge(item, RARE_BEY_GET_BADGE, region)) return "";
  return `<button class="ui-chip-button rare-bey-get-chip rare-bey-get-list-trigger" type="button" aria-label="역대 레어 베이 겟 상품 보기" data-release-region="${escapeAttributeValue(region)}" data-release-series="${escapeAttributeValue(item.series || "")}"><span>레어 베이 겟 목록</span><b aria-hidden="true">→</b></button>`;
}
function productMetaSlot(item = null, region = activeReleaseRegion) {
  const chip = item ? rareBeyGetMetaChip(item, region) : "";
  if (chip) return `<div class="product-meta-slot product-rare-bey-get-slot">${chip}</div>`;
  return `<div class="product-empty-info-slot"></div>`;
}
const productLineupTitle = product => product.lineupTitle || "등장 베이";
const productLineupComposition = (product, part) => {
  const lineupIds = productLineupIds(product);
  if (!lineupIds.length) return false;
  if (part.lineup) return true;
  return Boolean(part.target && lineupIds.includes(part.target) && /무작위|레벨별/.test(part.name || compositionItemLabel(part)));
};
const compositionItemLabel = part => {
  const target = part.target ? findCatalogItemById(part.target) : null;
  if (!target) return "";
  if (target.type === "bey") return "베이";
  if (target.type && typeLabels[target.type]) return partDisplayTypeLabel(target);
  if (target.category) return target.category;
  return "";
};

function itemDisplayName(item, region = activeReleaseRegion, options = {}) {
  const name = region === "jp" ? item.jpName || item.name || "" : item.name || "";
  const sub = options.withSub ? item.sub || "" : "";
  return sub && !name.includes(sub) ? `${name} ${sub}` : name;
}
function itemDisplayDesc(item, region = activeReleaseRegion) {
  return region === "jp" && item.jpDesc ? item.jpDesc : item.desc || "";
}
const compositionDisplayName = name => (name || "").replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
function productComposition(item, region = activeReleaseRegion) {
  const composition = productCompositionItems(item, region);
  if (!composition.length) return "";
  return `<section class="modal-section product-composition"><p class="mounted-title">구성</p><div class="modal-section-scroll product-composition-list">${composition.map(part => {
    const name = compositionDisplayName(part.name || "");
    const quantity = part.quantity || part.qty || "1개";
    if (productLineupComposition(item, part)) return `<button class="ui-list-link product-composition-item product-lineup-trigger" type="button" data-product-id="${item.id}" data-target-id="${part.target || ""}"><span>${name} ${quantity}</span><b>→</b></button>`;
    if (!part.target) return `<div class="ui-list-link product-composition-item"><span>${name} ${quantity}</span><b>→</b></div>`;
    const target = findCatalogItemById(part.target);
    const targetDisplayName = region === "jp" && target ? itemDisplayName(target, region) : "";
    const displayName = targetDisplayName || name || compositionDisplayName(target?.name || "");
    return `<a class="ui-list-link product-composition-item composition-link" href="#${part.target}" data-target-id="${part.target}"><span>${displayName} ${quantity}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
}
const productDetailBody = (item, region = activeReleaseRegion) =>
  productComposition(item, region);
const productLineupItemName = (item, region = activeReleaseRegion) => {
  if (productItemsById.has(item.id)) return productDisplayName(item, region);
  const combo = item.type === "bey" ? partCategory(item) : "";
  const name = itemDisplayName(item, region);
  return combo ? `${name} ${combo}` : name;
};
function productLineup(item, region = activeReleaseRegion) {
  const lineupIds = productLineupIds(item);
  if (!lineupIds.length) return "";
  const lineupItems = lineupIds
    .map(id => findCatalogItemById(id))
    .filter(Boolean);
  if (!lineupItems.length) return "";
  return `<section class="modal-section product-composition"><p class="mounted-title">${productLineupTitle(item)}</p><div class="modal-section-scroll product-composition-list">${lineupItems.map(lineupItem => {
    const name = productLineupItemName(lineupItem, region);
    return `<a class="ui-list-link product-composition-item composition-link" href="#${lineupItem.id}" data-target-id="${lineupItem.id}"><span>${name}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
}
function bindProductCompositionLinks(product, root = document, options = {}) {
  root.querySelectorAll(".product-composition-list").forEach(compositionList => compositionList.addEventListener("click", event => {
    const lineupButton = event.target.closest(".product-lineup-trigger");
    if (lineupButton && compositionList.contains(lineupButton)) {
      event.preventDefault();
      if (!lineupButton.dataset.productId) return;
      queueModalTransition("composition", { sourceElement: lineupButton });
      openProductLineupDetail(lineupButton.dataset.productId, { ...options, skipRoute: true });
      return;
    }
    const link = event.target.closest(".composition-link");
    if (!link || !compositionList.contains(link)) return;
    event.preventDefault();
    const targetId = link.dataset.targetId;
    if (!targetId) return;
    const backOptions = { backProductId: product.id };
    if (options.backRelease) backOptions.backRelease = true;
    if (options.region) backOptions.region = options.region;
    queueModalTransition("composition", { sourceElement: link });
    openDetailByKind("", targetId, backOptions);
  }));
}
const rareBeyGetFinishGroupOrder = ["익스트림피니시", "버스트피니시", "오버피니시", "스핀피니시"];
const rareBeyGetFinishGroup = finish => {
  const value = finish || "";
  return rareBeyGetFinishGroupOrder.find(name => value.includes(name.replace("피니시", ""))) || "";
};
const rareBeyGetFinishRank = entry => {
  const rank = rareBeyGetFinishGroupOrder.indexOf(rareBeyGetFinishGroup(entry?.finish));
  return rank === -1 ? rareBeyGetFinishGroupOrder.length : rank;
};
const sortRareBeyGetCurrentEntries = entries => entries
  .map((entry, index) => ({ entry, index }))
  .sort((a, b) => rareBeyGetFinishRank(a.entry) - rareBeyGetFinishRank(b.entry) || a.index - b.index)
  .map(({ entry }) => entry);
const rareBeyGetEndSortValue = entry => releaseDateSortValue(entry?.endDate || "");
const sortRareBeyGetEndedEntries = entries => entries
  .map((entry, index) => ({ entry, index }))
  .sort((a, b) => {
    const endDiff = rareBeyGetEndSortValue(b.entry) - rareBeyGetEndSortValue(a.entry);
    const startDiff = rareBeyGetEntryStartSortValue(b.entry) - rareBeyGetEntryStartSortValue(a.entry);
    return endDiff || startDiff || a.index - b.index;
  })
  .map(({ entry }) => entry);
const rareBeyGetListDisplayName = name => String(name || "").replace(/^부스터\s+/, "");
const rareBeyGetListItemMarkup = (entry, region = activeReleaseRegion) => {
  const productIds = rareBeyGetEntryProductIds(entry);
  const productId = entry?.productId || "";
  const primaryProduct = productItemsById.get(productId) || productItemsById.get(productIds[0]);
  if (!primaryProduct) return "";
  const entryRegion = rareBeyGetEntryRegion(entry) || region;
  const release = productRelease(primaryProduct, entryRegion);
  const name = entry.name || release.name || productDisplayName(primaryProduct, entryRegion);
  const displayName = rareBeyGetListDisplayName(name);
  const displayNameAttr = escapeAttributeValue(displayName);
  const finish = entry.finish || "";
  const finishBadge = finish ? `<span class="rare-bey-get-list-item-finish">${escapeHtml(finish)}</span>` : "";
  const content = `<span class="rare-bey-get-list-item-main">${finishBadge}<span class="rare-bey-get-list-item-title">${escapeHtml(displayName)}</span></span>`;
  if (!productId) return `<div class="ui-list-link product-composition-item rare-bey-get-list-item rare-bey-get-list-item--static" aria-label="${displayNameAttr}">${content}</div>`;
  return `<a class="ui-list-link product-composition-item rare-bey-get-list-item rare-bey-get-list-link" href="#${productId}" data-product-id="${escapeAttributeValue(productId)}" data-release-region="${escapeAttributeValue(entryRegion)}" aria-label="${escapeAttributeValue(`${displayName} 상세 보기`)}">${content}<b aria-hidden="true">→</b></a>`;
};
const rareBeyGetListSectionMarkup = (title, entries, { region = activeReleaseRegion, current = false } = {}) => {
  if (!entries.length) return "";
  const orderedEntries = current ? sortRareBeyGetCurrentEntries(entries) : sortRareBeyGetEndedEntries(entries);
  const rows = orderedEntries.map(entry => rareBeyGetListItemMarkup(entry, region)).filter(Boolean);
  if (!rows.length) return "";
  return `<section class="product-composition rare-bey-get-list-section${current ? " rare-bey-get-list-section--current" : " rare-bey-get-list-section--ended"}" aria-label="${escapeAttributeValue(`${title} ${rows.length}개`)}">
    <h3 class="mounted-title rare-bey-get-list-panel-title"><span>${escapeHtml(title)}</span> <b>${rows.length}개</b></h3>
    <div class="rare-bey-get-list-group-items">${rows.join("")}</div>
  </section>`;
};
function rareBeyGetListMarkup({ region = activeReleaseRegion, series = activeReleaseSeries } = {}) {
  const entries = visibleRareBeyGetEntries({ region, series });
  const currentEntries = entries.filter(entry => entry?.isCurrent === true);
  const endedEntries = entries.filter(entry => entry?.isCurrent !== true);
  const groups = [
    rareBeyGetListSectionMarkup("현행 경품", currentEntries, { region, current: true }),
    rareBeyGetListSectionMarkup("종료 경품", endedEntries, { region })
  ].filter(Boolean);
  const body = groups.length
    ? groups.join("")
    : `<p class="rare-bey-get-empty">목록 준비 중입니다.</p>`;
  return `<section class="modal-section rare-bey-get-list"><div class="modal-section-scroll rare-bey-get-list-scroll"><div class="rare-bey-get-list-items">${body}</div></div></section>`;
}
function bindRareBeyGetListLinks(root = document, options = {}) {
  root.querySelectorAll(".rare-bey-get-list-link").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const productId = link.dataset.productId;
    if (!productId) return;
    const region = releaseRegionLabels[link.dataset.releaseRegion] ? link.dataset.releaseRegion : options.region;
    queueModalTransition("composition", { sourceElement: link });
    openProductEntry(productId, {
      ...options,
      region,
      backRareBeyGetList: true,
      rareBeyGetListRegion: region,
      rareBeyGetListSeries: options.series || activeReleaseSeries,
      rareBeyGetListBackProductId: options.backProductId || "",
      rareBeyGetListBackRelease: options.backRelease === true
    });
  }));
}
function openRareBeyGetListDetail(options = {}) {
  const { skipRoute = false, ...detailOptions } = options;
  const normalizedRoute = normalizeRoute({ type: "rare-bey-get-list", options: detailOptions });
  const routeOptions = normalizedRoute.options || {};
  const region = routeOptions.region || activeReleaseRegion;
  const series = routeOptions.series || activeReleaseSeries;
  const backProductId = routeOptions.backProductId || "";
  const backRelease = routeOptions.backRelease === true;
  if (!skipRoute && routeIfNeeded(normalizedRoute)) return;
  const modalContentRoot = setModalContent(`<div class="modal-inner modal-inner--rare-bey-get-list">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info">
    ${modalScrollArea(`${modalTitle("레어 베이 겟 목록", "product-modal-name")}
    ${productMetaSlot()}
    <div class="modal-body-block">${rareBeyGetListMarkup({ region, series })}</div>`)}
    ${productBackButton({ backProductId, backRelease, region })}</div></div>`);
  if (!modalContentRoot) return;
  bindCatalogModalBack(modalContentRoot, { fallbackRegion: region });
  bindRareBeyGetListLinks(modalContentRoot, { region, series, backProductId, backRelease });
  finishModalOpen({ contextKind: "rare-bey-get-list", contextId: "rare-bey-get-list", contextOptions: { region, series, backProductId, backRelease }, root: modalContentRoot });
}
function openProductLineupDetail(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  const { skipRoute = false, ...detailOptions } = options;
  if (!skipRoute && routeIfNeeded({ type: "detail", id, options: detailOptions })) return;
  const requestedRegion = releaseRegionLabels[detailOptions.region] ? detailOptions.region : (releaseRegionLabels[activeReleaseRegion] ? activeReleaseRegion : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  activeReleaseRegion = region;
  cleanupModelViewer();
  const backButton = productModalBackButton(item, detailOptions, region);
  const modalContentRoot = setModalContent(`<div class="modal-inner">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info">
    ${modalScrollArea(`${productHeader(item, region)}
    ${productMetaSlot()}
    <div class="modal-body-block">${productLineup(item, region)}</div>`)}
    ${backButton}</div></div>`);
  if (!modalContentRoot) return;
  bindCatalogModalBack(modalContentRoot, { fallbackRegion: region });
  bindProductCompositionLinks(item, modalContentRoot, { ...detailOptions, region });
  finishModalOpen({ contextKind: "product-lineup", contextId: item.id, contextOptions: { ...detailOptions, region }, root: modalContentRoot });
}
function openProductEntry(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  if (item.lineupEntryMode === "lineup-first" && productLineupIds(item).length) {
    openProductLineupDetail(id, options);
    return;
  }
  openProductDetail(id, options);
}
function openProductDetail(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  if (routeIfNeeded({ type: "detail", id, options })) return;
  const requestedRegion = releaseRegionLabels[options.region] ? options.region : (releaseRegionLabels[activeReleaseRegion] ? activeReleaseRegion : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  const stepRegion = requestedRegion === "kr" ? "kr" : region;
  activeReleaseRegion = region;
  cleanupModelViewer();
  const backButton = productModalBackButton(item, options, region);
  const productStepSource = productItems.filter(entry => !entry.lineupOnly).sort((a, b) => productSerialNumber(a, stepRegion) - productSerialNumber(b, stepRegion));
  const stepItems = productStepSource.filter(entry => productReleasedInRegion(entry, stepRegion));
  const productInfoClass = releaseHasBadge(item, RARE_BEY_GET_BADGE, region) ? " has-rare-bey-get-chip" : "";
  const modalContentRoot = setModalContent(`${modalStepButtons(stepItems, item.id, "product")}<div class="modal-inner">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info${productInfoClass}">
    ${modalScrollArea(`${productHeader(item, region)}
    ${productMetaSlot(item, region)}
    <div class="modal-body-block">${productDetailBody(item, region)}</div>`)}${backButton}</div></div>`);
  if (!modalContentRoot) return;
  bindModalStepButtons({ product: { ...options, region: stepRegion } });
  bindCatalogModalBack(modalContentRoot, { fallbackRegion: region });
  bindProductCompositionLinks(item, modalContentRoot, { ...options, region });
  modalContentRoot.querySelector(".rare-bey-get-list-trigger")?.addEventListener("click", event => {
    event.preventDefault();
    const trigger = event.currentTarget;
    const triggerRegion = releaseRegionLabels[trigger.dataset.releaseRegion] ? trigger.dataset.releaseRegion : region;
    const triggerSeries = releaseSeriesLabels[trigger.dataset.releaseSeries] ? trigger.dataset.releaseSeries : item.series;
    queueModalTransition("composition", { sourceElement: trigger });
    openRareBeyGetListDetail({
      region: triggerRegion,
      series: triggerSeries,
      backProductId: item.id,
      backRelease: options.backRelease === true
    });
  });
  finishModalOpen({ contextKind: "product", contextId: item.id, contextOptions: { ...options, region }, root: modalContentRoot });
}
function openSimpleCatalogDetail({ item, options = {}, kind, stepItems, tags = "" }) {
  if (routeIfNeeded({ type: "detail", id: item.id, options })) return;
  cleanupModelViewer();
  const backButton = productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region: options.region });
  const modalContentRoot = setModalContent(`${modalStepButtons(stepItems, item.id, kind)}<div class="modal-inner">
    <div class="modal-art"></div>
    <div class="modal-info part-modal-info">${modalScrollArea(`${modalTitle(itemDisplayName(item, options.region))}
    ${modalInfoSlot(itemDisplayDesc(item, options.region), tags)}<div class="modal-body-block"></div>`)}${backButton}</div></div>`);
  if (!modalContentRoot) return;
  bindModalStepButtons({ [kind]: options });
  bindCatalogModalBack(modalContentRoot);
  finishModalOpen({ contextKind: kind, contextId: item.id, contextOptions: options, root: modalContentRoot });
}
const compareItemsByKoreanName = (a, b) => a.name.localeCompare(b.name, "ko");
const simpleCatalogDetailConfigs = {
  tools: {
    itemsById: toolsItemsById,
    stepItems: item => {
      const visibleItems = visibleToolsItems();
      return visibleItems.some(entry => entry.id === item.id) ? visibleItems : toolsItems.slice().sort(compareToolsItemsByFirstRelease);
    }
  },
  book: {
    itemsById: bookItemsById,
    stepItems: () => bookItems.slice().sort(compareItemsByKoreanName),
    tags: item => modalTagGroup(`<span>${item.category || "도서"}</span>`)
  },
  game: {
    itemsById: gameItemsById,
    stepItems: () => gameItems.slice().sort(compareItemsByKoreanName)
  }
};
function openConfiguredSimpleCatalogDetail(kind, id, options = {}) {
  const config = simpleCatalogDetailConfigs[kind];
  const item = config?.itemsById.get(id);
  if (!item) return;
  openSimpleCatalogDetail({
    item,
    options,
    kind,
    stepItems: config.stepItems(item),
    tags: config.tags?.(item) || ""
  });
}
function openToolsDetail(id, options = {}) {
  openConfiguredSimpleCatalogDetail("tools", id, options);
}
function openBookDetail(id, options = {}) {
  openConfiguredSimpleCatalogDetail("book", id, options);
}
function openGameDetail(id, options = {}) {
  openConfiguredSimpleCatalogDetail("game", id, options);
}
function closeDetail() {
  const targetRoute = getModalCloseRoute();
  const targetScrollY = validScrollY(modalController.scrollY);
  closeModalSession();
  navigateToRoute(targetRoute, { replace: true, preserveScroll: true, preserveSearch: true });
  restorePageScroll(targetScrollY);
}
document.querySelector("#modalClose").addEventListener("click", closeDetail);
document.querySelector("[data-modal-overlay]")?.addEventListener("click", closeDetail);
modal.addEventListener("cancel", event => {
  event.preventDefault();
  if (activeModalTagButton) {
    closeModalTagPopover();
    return;
  }
  closeDetail();
});
modal.addEventListener("close", () => {
  cancelModalViewportSync();
  clearModalLockStyles();
});

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
  menuButton.setAttribute("title", open ? "메뉴 닫기" : "메뉴 열기");
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
  activeCatalogSort = normalizeCatalogRouteSort(originState?.catalogSort || activeCatalogSort);
  restorePagedSearchOrigin({
    originState,
    queryKey: "catalogQuery",
    pageKey: "catalogPage",
    input: catalogSearch,
    setPage: page => { currentCatalogPage = page; },
    render: renderCatalogItems,
    refresh: refreshCatalogState
  });
};
const restoreStoredAnimeOrigin = originState => {
  if (originState?.animeSeason) activeAnimeCharacterSeason = normalizeAnimeCharacterSeason(originState.animeSeason);
  restorePagedSearchOrigin({
    originState,
    queryKey: "animeQuery",
    pageKey: "animePage",
    input: animeSearch,
    setPage: page => { currentAnimePage = page; },
    render: renderAnimePage
  });
};
function restoreDetailOriginPanel(context) {
  const originRoute = routeSnapshot(context?.originRoute);
  if (!originRoute || !isPrimaryRoute(originRoute)) return false;
  const originState = context?.originState || {};
  modalOriginRoute = routeSnapshot(originRoute);
  modalOriginRouteExplicit = context?.originExplicit === true;
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
    openCategoryReleaseDetail({
      ...(originRoute.options || {}),
      region: originState.releaseRegion || originRoute.options?.region,
      series: originState.releaseSeries || originRoute.options?.series,
      releaseQuery: typeof originState.releaseQuery === "string" ? originState.releaseQuery : originRoute.options?.releaseQuery,
      releaseSort: originState.releaseSort || originRoute.options?.releaseSort,
      updateHash: false,
      preserveSearch: true
    });
  } else if (originRoute.type === "category-anime") {
    openCategoryAnimePage({
      ...originRoute,
      season: originState.animeSeason || originRoute.season,
      query: typeof originState.animeQuery === "string" ? originState.animeQuery : originRoute.query,
      page: originState.animePage || originRoute.page,
      updateHash: false,
      preserveSearch: true
    });
    restoreStoredAnimeOrigin(originState);
  } else if (originRoute.type === "category-anime-episodes") {
    openCategoryAnimeEpisodesDetail({
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
    window.BeystadiumDataStore?.hasItem(id) ||
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
function restoreDetailFallbackOriginIfNeeded(restoredContext, fallbackOriginRoute) {
  const restoredOriginRoute = routeSnapshot(restoredContext?.originRoute);
  if (restoredOriginRoute && isPrimaryRoute(restoredOriginRoute) && (restoredOriginRoute.type !== "overview" || restoredContext?.originExplicit === true)) {
    return restoreDetailOriginPanel(restoredContext);
  }
  if (modalOriginRouteExplicit && modalOriginRoute && isPrimaryRoute(modalOriginRoute)) {
    return restoreDetailOriginPanel({
      originRoute: modalOriginRoute,
      originState: modalOriginState(modalOriginRoute),
      originExplicit: true
    });
  }
  if (fallbackOriginRoute && (!modalOriginRoute || modalOriginRoute.type === "overview")) {
    return restoreDetailOriginPanel({ originRoute: fallbackOriginRoute, originState: {} });
  }
  return false;
}
let routeApplyGeneration = 0;
async function applyRoute(route = parseRouteFromHash(), { preserveScroll = false, preserveSearch = false } = {}) {
  const normalizedRoute = normalizeRoute(route || { type: "overview" });
  const generation = ++routeApplyGeneration;
  const ready = await window.BeystadiumDataStore.ensureRoute(normalizedRoute);
  if (!ready || generation !== routeApplyGeneration) return false;
  let normalizedRouteKey = appliedRouteKey(normalizedRoute);
  const preservePrimaryReturn = Boolean(isPrimaryRoute(normalizedRoute) && (modal?.open || modalOriginRoute));
  const shouldPreserveScroll = preserveScroll || preservePrimaryReturn;
  const shouldPreserveSearch = preserveSearch || preservePrimaryReturn;
  applyingRoute = true;
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
      openCategoryReleaseDetail({ ...routeApplyOptions(normalizedRoute), preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "category-anime") {
      openCategoryAnimePage({ ...normalizedRoute, updateHash: false, preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "category-anime-episodes") {
      openCategoryAnimeEpisodesDetail({ ...routeApplyOptions(normalizedRoute), preserveSearch: shouldPreserveSearch });
    } else if (normalizedRoute.type === "rare-bey-get-list") {
      const restoredContext = restoredModalContext("rare-bey-get-list");
      const rareBeyGetListOptions = { ...(restoredContext?.options || {}), ...routeApplyOptions(normalizedRoute) };
      restoreDetailFallbackOriginIfNeeded(restoredContext, {
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
      restoreDetailFallbackOriginIfNeeded(restoredContext, fallbackOriginRoute);
      const restoredOptions = { ...(restoredContext?.options || {}), ...routeApplyOptions(normalizedRoute) };
      openDetailByKind(restoredContext?.kind || "", hashId, restoredOptions);
    }
  } finally {
    applyingRoute = false;
    lastAppliedRouteKey = normalizedRouteKey;
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
  if (!activeModalTagButton) return;
  if (!modal?.open || !document.body.contains(activeModalTagButton)) {
    closeModalTagPopover();
    return;
  }
  positionModalTagPopover(activeModalTagButton);
});
window.visualViewport?.addEventListener("resize", scheduleModalViewportSync);
window.visualViewport?.addEventListener("scroll", scheduleModalViewportSync);
window.visualViewport?.addEventListener("resize", positionSearchHelpPopovers);
window.visualViewport?.addEventListener("scroll", closeSearchHelpPopoversOnScroll, { passive: true });
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && activeSearchPreview) {
    closeAllSearchPreviews();
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && anySearchHelpPopoverIsOpen()) {
    closeSearchHelpPopovers();
    event.preventDefault();
    return;
  }
  if (event.key === "Escape" && activeModalTagButton) {
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
  if (activeModalTagButton && !event.target.closest(".modal-tag-info") && !event.target.closest(".modal-tag-popover")) closeModalTagPopover();
  if (!event.target.closest(".topbar") && !event.target.closest(".mobile-drawer")) setMobileDrawerOpen(false);
});

syncNavigationMode();
syncCatalogScopeState();
renderCatalogFilterChips();
const applyCurrentHashRoute = async () => {
  const route = routeWithKnownDetailFallback(parseRouteFromHash());
  const canonicalHash = serializeRoute(route);
  const canonicalRouteKey = `${currentPathWithSearch()}${canonicalHash}`;
  try {
    if (canonicalRouteKey === lastAppliedRouteKey) return;
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
