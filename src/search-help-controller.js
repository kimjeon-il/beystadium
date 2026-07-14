import { appState } from "#app/state";
import { closeOpenCatalogDropdowns } from "#app/shell-controller";
import { bindScrollAffordance, clearScrollAffordance, scheduleScrollAffordances } from "#app/scroll-affordance";
import {
  animeSearchHelpButton,
  animeSearchHelpPopover,
  catalogSearchHelpButton,
  catalogSearchHelpPopover
} from "#app/ui-core";

const searchHelpPopovers = [];
const searchHelpSummaryClass = "is-summary-only";
const searchHelpDetailsSelector = "[data-help-details]";
const searchHelpOverflowTolerance = 2;
let initialized = false;

const rootPixelValue = (name, fallback) => {
  const value = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isFinite(value) ? value : fallback;
};
const closeSearchPreviews = () => {
  document.querySelectorAll(".search-preview").forEach(preview => { preview.hidden = true; });
  appState.activeSearchPreview = null;
};
const clamp = (value, min, max) => Math.min(Math.max(value, min), Math.max(min, max));
const resetSearchHelpPopoverLayout = popover => {
  popover.classList.remove(searchHelpSummaryClass);
  clearScrollAffordance(popover);
  popover.scrollTop = 0;
  popover.style.width = "";
  popover.style.maxHeight = "";
  popover.style.left = "";
  popover.style.top = "";
};
const fitSearchHelpPopoverContent = (popover, availableHeight) => {
  const fullRect = popover.getBoundingClientRect();
  const fullHeight = popover.scrollHeight;
  const hasDetails = Boolean(popover.querySelector(searchHelpDetailsSelector));
  const constrainedByCss = fullHeight - fullRect.height > searchHelpOverflowTolerance;
  const constrainedBySpace = fullHeight - availableHeight > searchHelpOverflowTolerance;
  const summaryOnly = hasDetails && (constrainedByCss || constrainedBySpace);
  popover.classList.toggle(searchHelpSummaryClass, summaryOnly);
  if (summaryOnly) {
    popover.scrollTop = 0;
    clearScrollAffordance(popover);
  }
  return popover.getBoundingClientRect();
};
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
  resetSearchHelpPopoverLayout(popover);
  if (isCompact) {
    const controlBar = button.closest(".catalog-control-bar");
    const anchorRow = button.closest(".catalog-search-controls, .catalog-toolbar") || button;
    const contentRect = (controlBar || anchorRow).getBoundingClientRect();
    const anchorRect = anchorRow.getBoundingClientRect();
    const availableLeft = Math.max(minLeft, contentRect.left);
    const availableRight = Math.min(maxLeft, contentRect.right || maxLeft);
    const width = Math.min(360, Math.max(160, availableRight - availableLeft), Math.max(0, maxLeft - minLeft));
    const viewportAvailableHeight = Math.max(0, maxTop - minTop);
    popover.style.width = `${Math.floor(width)}px`;
    const popoverRect = fitSearchHelpPopoverContent(popover, viewportAvailableHeight);
    const left = clamp(availableLeft, minLeft, maxLeft - popoverRect.width);
    const top = clamp(anchorRect.bottom + gap, minTop, maxTop - popoverRect.height);
    popover.style.left = `${Math.floor(left)}px`;
    popover.style.top = `${Math.floor(top)}px`;
    return;
  }
  const preferredTop = Math.max(buttonRect.bottom + gap, minTop);
  const availableBelow = Math.max(0, maxTop - preferredTop);
  const availableAbove = Math.max(0, buttonRect.top - gap - minTop);
  const popoverRect = fitSearchHelpPopoverContent(popover, Math.max(availableBelow, availableAbove));
  const rightmostLeft = Math.max(minLeft, maxLeft - popoverRect.width);
  let top = preferredTop;
  if (top + popoverRect.height > maxTop) {
    const flippedTop = buttonRect.top - popoverRect.height - gap;
    top = flippedTop >= minTop ? flippedTop : minTop;
  }
  popover.style.left = `${clamp(buttonRect.left, minLeft, rightmostLeft)}px`;
  popover.style.top = `${clamp(top, minTop, maxTop - popoverRect.height)}px`;
};

class SearchHelpPopoverController {
  constructor(button, popover) {
    this.button = button;
    this.popover = popover;
    button?.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      this.toggle();
    });
    popover?.addEventListener("click", event => event.stopPropagation());
  }

  isOpen() {
    return Boolean(this.popover && !this.popover.hidden);
  }

  close() {
    if (!this.popover) return;
    this.popover.hidden = true;
    resetSearchHelpPopoverLayout(this.popover);
    this.button?.setAttribute("aria-expanded", "false");
  }

  open() {
    if (!this.popover) return;
    closeSearchPreviews();
    closeOpenCatalogDropdowns();
    closeSearchHelpPopovers(this);
    if (this.popover.parentNode !== document.body) document.body.appendChild(this.popover);
    this.popover.hidden = false;
    this.button?.setAttribute("aria-expanded", "true");
    positionSearchHelpPopover(this.button, this.popover);
    bindScrollAffordance(this.popover);
    scheduleScrollAffordances(this.popover);
  }

  toggle() {
    if (this.isOpen()) this.close();
    else this.open();
  }

  contains(target) {
    return target instanceof Node && (this.button?.contains(target) || this.popover?.contains(target));
  }
}

const closeSearchHelpPopovers = exceptController => searchHelpPopovers.forEach(controller => {
  if (controller !== exceptController) controller.close();
});
const positionSearchHelpPopovers = () => searchHelpPopovers.forEach(controller => {
  if (controller.isOpen()) {
    positionSearchHelpPopover(controller.button, controller.popover);
    scheduleScrollAffordances(controller.popover);
  }
});
const initializeSearchHelpController = () => {
  if (initialized) return;
  initialized = true;
  searchHelpPopovers.push(
    new SearchHelpPopoverController(catalogSearchHelpButton, catalogSearchHelpPopover),
    new SearchHelpPopoverController(animeSearchHelpButton, animeSearchHelpPopover)
  );
  document.addEventListener("click", event => {
    if (!searchHelpPopovers.some(controller => controller.contains(event.target))) closeSearchHelpPopovers();
  });
  window.addEventListener("resize", positionSearchHelpPopovers, { passive: true });
  window.visualViewport?.addEventListener("resize", positionSearchHelpPopovers, { passive: true });
  window.addEventListener("scroll", () => closeSearchHelpPopovers(), { passive: true });
};

export {
  closeSearchHelpPopovers,
  initializeSearchHelpController,
  positionSearchHelpPopovers
};
