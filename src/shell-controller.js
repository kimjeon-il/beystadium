import { appState } from "#app/state";
import { BeystadiumDataStore } from "#app/data-store";
import { navigateToRoute } from "#app/navigation";
import { defaultReleaseSeries, setSortDropdownLabel } from "#app/release-core";
import { bindScrollAffordance, bindScrollAffordances, clearScrollAffordance, clearScrollAffordances, scheduleScrollAffordances } from "#app/scroll-affordance";
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
const mobileDrawerMediaQuery = window.matchMedia("(max-width: 63.999rem)");
const mobileDrawerIsOpen = () => document.body.classList.contains("menu-open");
const isMobileDrawerMode = () => mobileDrawerMediaQuery.matches;
const currentMenuTrigger = () => menuButton;

const activateAppPanel = section => {
  document.querySelectorAll(".app-panel").forEach(panel => panel.classList.toggle("active", panel.dataset.appPanel === section));
  document.body.dataset.activePanel = section;
  document.body.classList.toggle("is-overview", section === "overview");
  document.querySelectorAll(".search-preview").forEach(preview => { preview.hidden = true; });
  appState.activeSearchPreview = null;
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
  { selector: "[data-category-catalog-open]", route: { type: "catalog", scope: "all" } }
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
  if (closeMobileMenu) setMobileDrawerOpen(false);
  return true;
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
    bindScrollAffordance(catalogDropdownMenu(dropdown));
    if (!dropdown.classList.contains("search-scope")) syncCatalogDropdownScrollbarCompensation(dropdown);
  });
};
const closeCatalogDropdown = dropdown => {
  if (!dropdown) return;
  dropdown.classList.remove("is-dropdown-entering");
  clearCatalogDropdownScrollbarCompensation(dropdown);
  clearScrollAffordance(catalogDropdownMenu(dropdown));
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
  syncMenuButtonMode();
};
const updateToTop = () => toTop?.classList.toggle("show", window.scrollY > 300);

document.querySelectorAll(".topbar > .brand, [data-sidebar-home]").forEach(brand => brand.addEventListener("click", event => {
  event.preventDefault();
  navigateToRoute({ type: "overview" }, { replace: true });
  setMobileDrawerOpen(false);
}));
document.querySelector(".overview-panel")?.addEventListener("click", handleCategoryRouteClick);
document.querySelector(".topbar")?.addEventListener("click", handleCategoryRouteClick);
mobileDrawer?.addEventListener("click", handleCategoryRouteClick);
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
  if (!event.target.closest(".topbar") && !event.target.closest(".mobile-drawer")) setMobileDrawerOpen(false);
});
document.addEventListener("keydown", event => {
  if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
    const dropdown = catalogDropdownFromSummaryEvent(event);
    if (dropdown) {
      event.preventDefault();
      toggleCatalogDropdown(dropdown);
      return;
    }
  }
  if (event.key === "Escape" && document.body.classList.contains("menu-open")) setMobileDrawerOpen(false);
});
document.addEventListener("toggle", event => {
  const dropdown = event.target.closest?.(".catalog-dropdown");
  if (!dropdown) return;
  if (!dropdown.open) {
    dropdown.classList.remove("is-dropdown-entering");
    clearCatalogDropdownScrollbarCompensation(dropdown);
    clearScrollAffordance(catalogDropdownMenu(dropdown));
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
