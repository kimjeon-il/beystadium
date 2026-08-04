import { appState } from "#app/state";
import { BeystadiumDataStore } from "#app/data-store";
import { navigateToRoute } from "#app/navigation";
import { defaultReleaseSeries, setSortDropdownLabel } from "#app/release-core";
import { bindScrollAffordances, clearScrollAffordance, clearScrollAffordances, scheduleScrollAffordances } from "#app/scroll-affordance";
import {
  activeAppPanel,
  clearSearchInputs,
  dropdownSummaryText,
  getNavigationRoots,
  isNavigationButtonCurrent,
  menuButton,
  mobileDrawer,
  mobileDrawerClose,
  normalizeSidebarSection,
  playEnterAnimation,
  setSidebarButtonCurrent,
  setSearchInputValue,
  sidebarCurrentButtonSelector,
  syncSearchInputState,
  toTop
} from "#app/ui-core";

const filterButtonAttrs = ["data-release-series", "data-anime-season", "data-catalog-sort", "data-release-sort-option"];
const filterButtonAttr = button => filterButtonAttrs.find(attr => button.hasAttribute(attr));
const activeAppPanelName = () => activeAppPanel()?.dataset.appPanel || "";
const mobileTopbarBack = document.querySelector("#mobileTopbarBack");
const mobileTopbarTitle = document.querySelector("#mobileTopbarTitle");
const mobileBottomNav = document.querySelector(".mobile-bottom-nav");
const mobileSearchButton = document.querySelector("[data-mobile-search-open]");
const mobileCatalogFilterOpen = document.querySelector("#mobileCatalogFilterOpen");
const mobileCatalogFilters = document.querySelector("#mobileCatalogFilters");
const catalogSeriesFilter = document.querySelector("#catalogSeriesFilter");
const catalogSearchScope = document.querySelector("#catalogSearchScope");
const catalogSearchInput = document.querySelector("#catalogSearchInput");
const topbar = document.querySelector(".topbar");
const topbarSearch = document.querySelector("#topbarSearch");
const topbarSearchToggle = document.querySelector("#topbarSearchToggle");
const mobileDrawerMediaQuery = window.matchMedia("(max-width: 63.999rem)");
const compactMobileMediaQuery = window.matchMedia("(max-width: 39.999rem)");
const compactTopbarSearchMediaQuery = window.matchMedia("(min-width: 40rem) and (max-width: 49.999rem)");
const mobileDrawerIsOpen = () => document.body.classList.contains("menu-open");
const isMobileDrawerMode = () => mobileDrawerMediaQuery.matches;
const currentMenuTrigger = () => menuButton;
const mobilePanelTitles = {
  overview: "베이 아카이브",
  all: "검색",
  catalog: "완구 도감",
  release: "제품 발매목록",
  anime: "등장인물",
  "anime-episodes": "애니메이션 방영목록"
};
let mobileNavigationDepth = 0;
let mobileFilterTrigger = null;

const compactTopbarSearchIsOpen = () => topbar?.classList.contains("is-compact-search-open");
const setCompactTopbarSearchOpen = (open, { restoreFocus = false } = {}) => {
  const nextOpen = Boolean(open && compactTopbarSearchMediaQuery.matches);
  topbar?.classList.toggle("is-compact-search-open", nextOpen);
  topbarSearchToggle?.setAttribute("aria-expanded", String(nextOpen));
  topbarSearchToggle?.setAttribute("aria-label", nextOpen ? "검색창 닫기" : "검색창 열기");
  if (nextOpen) {
    closeOpenCatalogDropdowns();
    requestAnimationFrame(() => document.querySelector("#globalSearchInput")?.focus({ preventScroll: true }));
  } else {
    topbarSearch?.querySelectorAll(".catalog-dropdown[open]").forEach(closeCatalogDropdown);
    if (restoreFocus && topbarSearchToggle?.offsetParent !== null) topbarSearchToggle.focus({ preventScroll: true });
  }
};

const syncMobileTopbar = section => {
  if (mobileTopbarTitle) mobileTopbarTitle.textContent = mobilePanelTitles[section] || "베이 아카이브";
  if (mobileTopbarBack) mobileTopbarBack.hidden = section === "overview";
  const currentSection = normalizeSidebarSection(section);
  mobileBottomNav?.querySelectorAll(sidebarCurrentButtonSelector).forEach(button => {
    setSidebarButtonCurrent(button, isNavigationButtonCurrent(button, currentSection));
  });
};

const activateAppPanel = section => {
  setCompactTopbarSearchOpen(false);
  document.querySelectorAll(".app-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.appPanel === section));
  document.body.dataset.activePanel = section;
  document.body.classList.toggle("is-overview", section === "overview");
  document.querySelectorAll(".search-preview").forEach(preview => { preview.hidden = true; });
  appState.activeSearchPreview = null;
  syncMobileTopbar(section);
};
const syncSidebarActiveState = section => {
  const currentSection = normalizeSidebarSection(section);
  getNavigationRoots().forEach(root => {
    root.querySelectorAll(sidebarCurrentButtonSelector).forEach(button => {
      setSidebarButtonCurrent(button, isNavigationButtonCurrent(button, currentSection));
    });
  });
};
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
    syncSidebarActiveState(activeAppPanelName() || "overview");
    scheduleScrollAffordances(mobileDrawer);
  } else {
    clearScrollAffordances(mobileDrawer);
  }
  syncMenuButtonMode();
};
const activatePrimarySection = (section, { preserveSearch = false } = {}) => {
  if (section === "product") section = "overview";
  const panelSection = ["catalog", "bey", "parts", "tools"].includes(section) ? "catalog" : section;
  if (!preserveSearch) clearSearchInputs();
  syncSidebarActiveState(panelSection);
  activateAppPanel(panelSection);
  setMobileDrawerOpen(false);
};

const categoryReleaseMenuRoute = () => {
  const region = "kr";
  return { type: "category-release", options: { region, series: defaultReleaseSeries(region) } };
};
const categoryRouteTriggers = [
  { selector: "[data-category-release-open]", route: categoryReleaseMenuRoute },
  { selector: "[data-category-anime-episodes-open]", route: { type: "category-anime-episodes" } },
  { selector: "[data-category-anime-open]", route: { type: "category-anime" } },
  { selector: "[data-mobile-media-open]", route: { type: "category-anime" } },
  { selector: "[data-category-catalog-open]", route: trigger => ({
    type: "catalog",
    scope: ["bey", "parts", "tools"].includes(trigger.dataset.catalogScope) ? trigger.dataset.catalogScope : "all"
  }) }
];
const categoryRouteFromTrigger = target => {
  if (!target?.closest) return null;
  for (const { selector, route } of categoryRouteTriggers) {
    const trigger = target.closest(selector);
    if (trigger) return { trigger, route: typeof route === "function" ? route(trigger) : route };
  }
  return null;
};
const handleCategoryRouteClick = (event, { closeMobileMenu = true } = {}) => {
  const match = categoryRouteFromTrigger(event.target);
  if (!match || (event.currentTarget?.contains && !event.currentTarget.contains(match.trigger))) return false;
  event.preventDefault();
  navigateToRoute(match.route);
  if (compactMobileMediaQuery.matches) mobileNavigationDepth += 1;
  if (closeMobileMenu) setMobileDrawerOpen(false);
  return true;
};

const focusMobileSearchInput = (attempt = 0) => {
  const input = document.querySelector("#searchResultsSearchInput");
  if (document.body.dataset.activePanel === "all" && input && input.offsetParent !== null) {
    input.focus({ preventScroll: true });
    return;
  }
  if (attempt < 40) requestAnimationFrame(() => focusMobileSearchInput(attempt + 1));
};

const mobileFilterGroupButtons = group =>
  [...(mobileCatalogFilters?.querySelectorAll(`[data-mobile-filter-group="${group}"] button`) || [])];
const setMobileFilterButtonActive = (button, active) => {
  button?.classList.toggle("active", active);
  button?.setAttribute("aria-pressed", String(Boolean(active)));
};
const selectMobileFilterButton = button => {
  const group = button?.closest?.("[data-mobile-filter-group]");
  if (!group) return;
  group.querySelectorAll("button").forEach(option => setMobileFilterButtonActive(option, option === button));
};
const selectMobileFilterValue = (group, attribute, value) => {
  const buttons = mobileFilterGroupButtons(group);
  const target = buttons.find(button => (button.getAttribute(attribute) || "") === (value || "")) || buttons[0];
  buttons.forEach(button => setMobileFilterButtonActive(button, button === target));
};
const mobileFilterQueryButtons = () =>
  [...(mobileCatalogFilters?.querySelectorAll("[data-mobile-filter-query]") || [])];
const mobileFilterKnownQueries = () =>
  [...new Set(mobileFilterQueryButtons().map(button => button.dataset.mobileFilterQuery).filter(Boolean))];
const syncMobileFilterSheet = () => {
  selectMobileFilterValue("series", "data-mobile-filter-series", catalogSeriesFilter?.dataset.scope || "all");
  selectMobileFilterValue("scope", "data-mobile-filter-scope", catalogSearchScope?.dataset.scope || "all");
  const terms = new Set(String(catalogSearchInput?.value || "").trim().split(/\s+/).filter(Boolean));
  ["system", "type", "spin"].forEach(group => {
    const buttons = mobileFilterGroupButtons(group);
    const target = buttons.find(button => button.dataset.mobileFilterQuery && terms.has(button.dataset.mobileFilterQuery)) || buttons[0];
    buttons.forEach(button => setMobileFilterButtonActive(button, button === target));
  });
};
const setMobileFilterSheetOpen = open => {
  if (!mobileCatalogFilters) return;
  const nextOpen = Boolean(open && compactMobileMediaQuery.matches);
  mobileCatalogFilters.hidden = !nextOpen;
  document.body.classList.toggle("mobile-filters-open", nextOpen);
  if (nextOpen) {
    mobileFilterTrigger = document.activeElement;
    syncMobileFilterSheet();
    requestAnimationFrame(() => mobileCatalogFilters.querySelector(".mobile-filter-sheet__close")?.focus());
  } else if (mobileFilterTrigger?.isConnected) {
    mobileFilterTrigger.focus();
    mobileFilterTrigger = null;
  }
};
const resetMobileFilterSheet = () => {
  selectMobileFilterValue("series", "data-mobile-filter-series", "all");
  selectMobileFilterValue("scope", "data-mobile-filter-scope", "all");
  ["system", "type", "spin"].forEach(group => selectMobileFilterValue(group, "data-mobile-filter-query", ""));
};
const applyMobileFilterSheet = () => {
  const series = mobileCatalogFilters?.querySelector("[data-mobile-filter-series].active")?.dataset.mobileFilterSeries || "all";
  const scope = mobileCatalogFilters?.querySelector("[data-mobile-filter-scope].active")?.dataset.mobileFilterScope || "all";
  const selectedQueries = [...(mobileCatalogFilters?.querySelectorAll("[data-mobile-filter-query].active") || [])]
    .map(button => button.dataset.mobileFilterQuery)
    .filter(Boolean);
  const knownQueries = new Set(mobileFilterKnownQueries());
  const freeTerms = String(catalogSearchInput?.value || "").trim().split(/\s+/).filter(term => term && !knownQueries.has(term));
  const query = [...freeTerms, ...selectedQueries].join(" ");
  setMobileFilterSheetOpen(false);
  navigateToRoute({
    type: "catalog",
    series,
    scope,
    sort: appState.activeCatalogSort,
    page: 1,
    query
  }, {
    replace: true,
    preserveSearch: true,
    preserveScroll: true
  });
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
  if (!dropdown) return;
  requestAnimationFrame(() => {
    if (!dropdown.classList.contains("search-scope")) syncCatalogDropdownScrollbarCompensation(dropdown);
  });
};
const closeCatalogDropdown = dropdown => {
  if (!dropdown) return;
  dropdown.classList.remove("is-dropdown-entering");
  clearCatalogDropdownScrollbarCompensation(dropdown);
  dropdown.removeAttribute("open");
  dropdown.querySelector(":scope > summary")?.setAttribute("aria-expanded", "false");
};
const closeOpenCatalogDropdowns = exceptDropdown => {
  document.querySelectorAll(".catalog-dropdown[open]").forEach(dropdown => {
    if (dropdown !== exceptDropdown) closeCatalogDropdown(dropdown);
  });
};
const closeSearchHelpPopovers = () => {
  document.querySelectorAll(".catalog-search-help-popover").forEach(popover => {
    popover.hidden = true;
    clearScrollAffordance(popover);
  });
  document.querySelectorAll(".catalog-search-help-button[aria-expanded='true']").forEach(button => button.setAttribute("aria-expanded", "false"));
};
const closeSearchPreviews = () => {
  document.querySelectorAll(".search-preview").forEach(preview => { preview.hidden = true; });
  appState.activeSearchPreview = null;
};
const openCatalogDropdown = dropdown => {
  if (!dropdown || dropdown.open) return;
  closeOpenCatalogDropdowns(dropdown);
  closeSearchPreviews();
  closeSearchHelpPopovers();
  playEnterAnimation(dropdown, "is-dropdown-entering");
  dropdown.setAttribute("open", "");
  dropdown.querySelector(":scope > summary")?.setAttribute("aria-expanded", "true");
  scheduleCatalogDropdownScrollbarCompensation(dropdown);
};
const toggleCatalogDropdown = dropdown => {
  if (dropdown?.open) closeCatalogDropdown(dropdown);
  else openCatalogDropdown(dropdown);
};
const catalogDropdownFromSummaryEvent = event => {
  const summary = event.target?.closest?.("summary");
  const dropdown = summary?.parentElement;
  return dropdown?.classList?.contains("catalog-dropdown") ? dropdown : null;
};
const setDropdownOption = button => {
  const attr = filterButtonAttr(button);
  const dropdown = button.closest(".catalog-dropdown");
  if (!attr || !dropdown) return;
  dropdown.querySelectorAll(`button[${attr}]`).forEach(option => option.classList.toggle("active", option === button));
  const label = dropdown.querySelector(".catalog-dropdown-value");
  if (label) {
    const text = dropdownSummaryText(button);
    if (dropdown.classList.contains("list-sort-dropdown")) setSortDropdownLabel(label, text);
    else label.textContent = text;
  }
  closeCatalogDropdown(dropdown);
};

const bindSearchInput = (input, containerSelector, {
  onInput,
  onSubmit = onInput,
  onKeydown,
  ensureSearchScope
} = {}) => {
  if (!input || input.dataset.searchInputBound) return;
  input.dataset.searchInputBound = "true";
  const root = input.closest(containerSelector);
  let clearButton = root?.querySelector(".search-clear");
  const runSearch = async handler => {
    syncSearchInputState(input);
    const scope = ensureSearchScope?.(input);
    if (scope) await BeystadiumDataStore.ensureSearch(scope);
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
    });
  }
  input.addEventListener("input", () => void runSearch(onInput));
  input.addEventListener("keydown", event => {
    if (onKeydown?.(event, input) === true) return;
    if (event.key !== "Enter") return;
    event.preventDefault();
    void runSearch(onSubmit);
  });
  root?.querySelector(".search-icon")?.addEventListener("click", () => void runSearch(onSubmit));
  syncSearchInputState(input);
};

const syncNavigationMode = () => {
  if (!isMobileDrawerMode()) setMobileDrawerOpen(false);
  if (!compactTopbarSearchMediaQuery.matches) setCompactTopbarSearchOpen(false);
  syncMenuButtonMode();
};
const updateToTop = () => toTop?.classList.toggle("show", window.scrollY > 300);

document.querySelectorAll(".topbar > .brand, [data-sidebar-home]").forEach(brand => brand.addEventListener("click", event => {
  event.preventDefault();
  navigateToRoute({ type: "overview" }, { replace: true });
  mobileNavigationDepth = 0;
  setMobileDrawerOpen(false);
}));
document.querySelector(".overview-panel")?.addEventListener("click", handleCategoryRouteClick);
document.querySelector(".topbar")?.addEventListener("click", handleCategoryRouteClick);
mobileDrawer?.addEventListener("click", handleCategoryRouteClick);
mobileBottomNav?.addEventListener("click", handleCategoryRouteClick);
mobileSearchButton?.addEventListener("click", event => {
  event.preventDefault();
  mobileNavigationDepth += 1;
  navigateToRoute({ type: "search", query: "", scope: "all" });
  requestAnimationFrame(() => focusMobileSearchInput());
});
mobileTopbarBack?.addEventListener("click", event => {
  event.preventDefault();
  if (mobileNavigationDepth > 0) {
    mobileNavigationDepth -= 1;
    window.history.back();
    return;
  }
  navigateToRoute({ type: "overview" }, { replace: true });
});
mobileCatalogFilterOpen?.addEventListener("click", event => {
  event.preventDefault();
  setMobileFilterSheetOpen(true);
});
mobileCatalogFilters?.addEventListener("click", event => {
  const closeButton = event.target.closest("[data-mobile-filter-close]");
  if (closeButton) {
    event.preventDefault();
    setMobileFilterSheetOpen(false);
    return;
  }
  const resetButton = event.target.closest("[data-mobile-filter-reset]");
  if (resetButton) {
    event.preventDefault();
    resetMobileFilterSheet();
    return;
  }
  const applyButton = event.target.closest("[data-mobile-filter-apply]");
  if (applyButton) {
    event.preventDefault();
    applyMobileFilterSheet();
    return;
  }
  const option = event.target.closest("[data-mobile-filter-group] button");
  if (option && mobileCatalogFilters.contains(option)) {
    event.preventDefault();
    selectMobileFilterButton(option);
  }
});
menuButton?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();
  if (isMobileDrawerMode()) setMobileDrawerOpen(!mobileDrawerIsOpen());
});
topbarSearchToggle?.addEventListener("click", event => {
  event.preventDefault();
  event.stopPropagation();
  setCompactTopbarSearchOpen(!compactTopbarSearchIsOpen());
});
mobileDrawerClose?.addEventListener("click", event => {
  event.preventDefault();
  setMobileDrawerOpen(false);
  currentMenuTrigger()?.focus();
});
toTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
window.addEventListener("scroll", updateToTop, { passive: true });
window.addEventListener("resize", syncNavigationMode);
document.addEventListener("click", event => {
  const dropdown = catalogDropdownFromSummaryEvent(event);
  if (dropdown && !event.defaultPrevented && event.button === 0) {
    event.preventDefault();
    toggleCatalogDropdown(dropdown);
    return;
  }
  if (!event.target.closest(".catalog-dropdown")) closeOpenCatalogDropdowns();
  if (compactTopbarSearchIsOpen() && !event.target.closest(".topbar-search")) setCompactTopbarSearchOpen(false);
  if (!event.target.closest(".topbar") && !event.target.closest(".mobile-drawer")) setMobileDrawerOpen(false);
});
document.addEventListener("keydown", event => {
  if (event.key === "Tab" && !mobileCatalogFilters?.hidden) {
    const focusable = [...mobileCatalogFilters.querySelectorAll("button:not([disabled]), input:not([disabled])")]
      .filter(element => element.offsetParent !== null && element.tabIndex >= 0);
    const first = focusable[0];
    const last = focusable.at(-1);
    if (first && last && (event.shiftKey ? document.activeElement === first : document.activeElement === last)) {
      event.preventDefault();
      (event.shiftKey ? last : first).focus();
      return;
    }
  }
  if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
    const dropdown = catalogDropdownFromSummaryEvent(event);
    if (dropdown) {
      event.preventDefault();
      toggleCatalogDropdown(dropdown);
      return;
    }
  }
  if (event.key === "Escape" && compactTopbarSearchIsOpen()) {
    event.preventDefault();
    setCompactTopbarSearchOpen(false, { restoreFocus: true });
    return;
  }
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) setMobileDrawerOpen(false);
  if (event.key === "Escape" && !mobileCatalogFilters?.hidden) setMobileFilterSheetOpen(false);
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
  closeSearchPreviews();
  closeSearchHelpPopovers();
  scheduleCatalogDropdownScrollbarCompensation(dropdown);
}, true);
window.addEventListener("resize", () => {
  document.querySelectorAll(".catalog-dropdown[open]").forEach(scheduleCatalogDropdownScrollbarCompensation);
}, { passive: true });
syncNavigationMode();
syncSidebarActiveState(activeAppPanelName() || "overview");
syncMobileTopbar(activeAppPanelName() || "overview");
updateToTop();
bindScrollAffordances(document);

export {
  activatePrimarySection,
  bindSearchInput,
  categoryRouteFromTrigger,
  closeCatalogDropdown,
  closeOpenCatalogDropdowns,
  closeSearchHelpPopovers,
  setDropdownOption,
  setMobileDrawerOpen
};
