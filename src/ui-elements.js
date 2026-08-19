const globalSearch = document.querySelector("#globalSearchInput");
const globalSearchScope = document.querySelector("#globalSearchScope");
const mobileDrawerSearch = document.querySelector("#mobileDrawerSearchInput");
const mobileDrawerSearchScope = document.querySelector("#mobileDrawerSearchScope");
const overviewSearchScope = document.querySelector("#overviewSearchScope");
const searchResultsSearchScope = document.querySelector("#searchResultsSearchScope");
const catalogSearchScope = document.querySelector("#catalogSearchScope");
const catalogSeriesFilter = document.querySelector("#catalogSeriesFilter");
const catalogSearch = document.querySelector("#catalogSearchInput");
const catalogSearchHelpButton = document.querySelector("#catalogSearchHelpButton");
const catalogSearchHelpPopover = document.querySelector("#catalogSearchHelpPopover");
const animeSearch = document.querySelector("#animeSearchInput");
const animeSearchHelpButton = document.querySelector("#animeSearchHelpButton");
const animeSearchHelpPopover = document.querySelector("#animeSearchHelpPopover");
const activeAppPanelName = () => activeAppPanel()?.dataset.appPanel || "";
const globalSearchScopeValue = () => globalSearchScope?.dataset.scope || "all";
const mobileDrawerSearchScopeValue = () => mobileDrawerSearchScope?.dataset.scope || "all";
const overviewSearchScopeValue = () => overviewSearchScope?.dataset.scope || "all";
const searchResultsSearchScopeValue = () => searchResultsSearchScope?.dataset.scope || "all";
const dropdownSummaryText = button => button?.dataset.summaryLabel || button?.textContent.trim() || "";
function playEnterAnimation(element, className) {
  if (!element || !className || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
  element.classList.remove(className);
  void element.offsetHeight;
  element.classList.add(className);
  const clearClass = () => element.classList.remove(className);
  element.addEventListener("animationend", clearClass, { once: true });
  element.addEventListener("animationcancel", clearClass, { once: true });
}
const setSearchScope = (dropdown, dataAttr, scope) => {
  if (!dropdown) return;
  const value = scope || "all";
  dropdown.dataset.scope = value;
  const activeButton = dropdown.querySelector(`button[${dataAttr}="${value}"]`);
  dropdown.querySelectorAll(`button[${dataAttr}]`).forEach(button => {
    button.classList.toggle("active", button === activeButton);
  });
  const label = dropdown.querySelector(".catalog-dropdown-value");
  if (label && activeButton) label.textContent = dropdownSummaryText(activeButton);
  dropdown.removeAttribute("open");
};
const setGlobalSearchScope = scope => setSearchScope(globalSearchScope, "data-global-search-scope", scope);
const setMobileDrawerSearchScope = scope => setSearchScope(mobileDrawerSearchScope, "data-mobile-drawer-search-scope", scope);
const setOverviewSearchScope = scope => setSearchScope(overviewSearchScope, "data-overview-search-scope", scope);
const setSearchResultsSearchScope = scope => setSearchScope(searchResultsSearchScope, "data-search-results-search-scope", scope);
const setCatalogSearchScope = scope => setSearchScope(catalogSearchScope, "data-catalog-search-scope", scope || "all");
const setCatalogSeriesFilter = series => setSearchScope(catalogSeriesFilter, "data-catalog-series", series || "all");
const overviewSearch = document.querySelector("#overviewSearchInput");
const searchResultsSearch = document.querySelector("#searchResultsSearchInput");
const searchInputRoot = input => input?.closest(".overview-search, .search-box");
const searchClearButton = input => searchInputRoot(input)?.querySelector(".search-clear");
const searchPlaceholderInputs = () => [globalSearch, mobileDrawerSearch, overviewSearch, searchResultsSearch, catalogSearch, animeSearch].filter(Boolean);
const searchPlaceholderText = (input, width) => {
  if (width >= 156) return input?.dataset.searchPlaceholder || "검색어를 입력해주세요.";
  return "검색어 입력";
};
function syncSearchInputPlaceholder(input) {
  if (!input) return;
  const width = input.clientWidth || input.getBoundingClientRect?.().width || 0;
  input.placeholder = searchPlaceholderText(input, width);
}
function syncSearchPlaceholders() {
  searchPlaceholderInputs().forEach(syncSearchInputPlaceholder);
}
function bindResponsiveSearchPlaceholders() {
  const inputs = searchPlaceholderInputs();
  if (!inputs.length) return;
  syncSearchPlaceholders();
  requestAnimationFrame(syncSearchPlaceholders);
  window.addEventListener("load", syncSearchPlaceholders, { once: true });
  if (typeof ResizeObserver === "function") {
    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => syncSearchInputPlaceholder(entry.target));
    });
    inputs.forEach(input => observer.observe(input));
    return;
  }
  window.addEventListener("resize", syncSearchPlaceholders, { passive: true });
}
const syncSearchInputState = input => {
  if (!input) return;
  const hasValue = input.value.length > 0;
  input.classList.toggle("has-value", hasValue);
  const clearButton = searchClearButton(input);
  if (clearButton) clearButton.hidden = !hasValue;
  syncSearchInputPlaceholder(input);
};
const setSearchInputValue = (input, value = "") => {
  if (!input) return;
  input.value = value;
  syncSearchInputState(input);
};
const clearSearchInputs = () => {
  setSearchInputValue(globalSearch, "");
  setSearchInputValue(mobileDrawerSearch, "");
  setSearchInputValue(overviewSearch, "");
  setSearchInputValue(searchResultsSearch, "");
  setSearchInputValue(catalogSearch, "");
  setSearchInputValue(animeSearch, "");
};
bindResponsiveSearchPlaceholders();
const bindActionRows = (root = document, selector, handler) => {
  root.querySelectorAll(selector).forEach(row => {
    row.addEventListener("click", event => {
      event.preventDefault();
      handler(row, event);
    });
  });
};
const activeAppPanel = () => document.querySelector(".app-panel.active");
const toTop = document.querySelector("#toTop");
const menuButton = document.querySelector("#menuButton");
const mobileDrawer = document.querySelector("#mobileDrawer");
const mobileDrawerClose = document.querySelector(".mobile-drawer-close");
const sidebarRouteTargets = [
  { attribute: "data-sidebar-home", section: "overview" },
  { attribute: "data-category-catalog-open", section: "catalog" },
  { attribute: "data-category-release-open", section: "release" },
  { attribute: "data-category-anime-episodes-open", section: "anime-episodes" },
  { attribute: "data-category-anime-open", section: "anime" },
  { attribute: "data-mobile-media-open", section: "media" },
  { attribute: "data-mobile-search-open", section: "all" }
];
const sidebarCurrentButtonSelector = sidebarRouteTargets.map(({ attribute }) => `[${attribute}]`).join(", ");
const getSidebarRoots = () => Array.from(document.querySelectorAll("[data-sidebar-root]"));
const getNavigationRoots = () => [
  ...getSidebarRoots(),
  ...[document.querySelector(".topbar")].filter(Boolean)
];
const getSidebarButtonSection = button => sidebarRouteTargets.find(({ attribute }) => button.hasAttribute(attribute))?.section || "";
const normalizeSidebarSection = section => {
  if (["catalog", "bey", "parts", "tools"].includes(section)) return "catalog";
  return ["overview", "all", "release", "anime", "anime-episodes"].includes(section) ? section : "";
};
const isNavigationButtonCurrent = (button, currentSection) => {
  if (button.hasAttribute("data-mobile-media-open")) return ["anime", "anime-episodes"].includes(currentSection);
  return getSidebarButtonSection(button) === currentSection;
};
const setSidebarButtonCurrent = (button, active) => {
  const disabled = button.disabled || button.getAttribute("aria-disabled") === "true";
  const current = Boolean(active && !disabled);
  button.classList.toggle("active", current);
  if (current) button.setAttribute("aria-current", "page");
  else button.removeAttribute("aria-current");
};

export {
  activeAppPanel,
  activeAppPanelName,
  animeSearch,
  animeSearchHelpButton,
  animeSearchHelpPopover,
  bindActionRows,
  catalogSearch,
  catalogSearchHelpButton,
  catalogSearchHelpPopover,
  catalogSearchScope,
  catalogSeriesFilter,
  clearSearchInputs,
  dropdownSummaryText,
  getNavigationRoots,
  globalSearch,
  globalSearchScope,
  globalSearchScopeValue,
  isNavigationButtonCurrent,
  menuButton,
  mobileDrawer,
  mobileDrawerClose,
  mobileDrawerSearch,
  mobileDrawerSearchScope,
  mobileDrawerSearchScopeValue,
  normalizeSidebarSection,
  overviewSearch,
  overviewSearchScope,
  overviewSearchScopeValue,
  playEnterAnimation,
  searchResultsSearch,
  searchResultsSearchScope,
  searchResultsSearchScopeValue,
  setCatalogSearchScope,
  setCatalogSeriesFilter,
  setGlobalSearchScope,
  setMobileDrawerSearchScope,
  setOverviewSearchScope,
  setSearchResultsSearchScope,
  setSearchInputValue,
  setSidebarButtonCurrent,
  sidebarCurrentButtonSelector,
  syncSearchInputState,
  toTop
};
