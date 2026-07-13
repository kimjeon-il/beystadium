import { appState } from "#app/state";
import { closeOpenCatalogDropdowns } from "#app/shell-controller";
import {
  animeSearchHelpButton,
  animeSearchHelpPopover,
  catalogSearchHelpButton,
  catalogSearchHelpPopover
} from "#app/ui-core";

const searchHelpPopovers = [];
let initialized = false;

const rootPixelValue = (name, fallback) => {
  const value = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isFinite(value) ? value : fallback;
};
const closeSearchPreviews = () => {
  document.querySelectorAll(".search-preview").forEach(preview => { preview.hidden = true; });
  appState.activeSearchPreview = null;
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
  popover.style.width = "";
  popover.style.maxHeight = "";
  if (isCompact) {
    const controlBar = button.closest(".catalog-control-bar");
    const anchorRow = button.closest(".catalog-search-controls, .catalog-toolbar") || button;
    const contentRect = (controlBar || anchorRow).getBoundingClientRect();
    const anchorRect = anchorRow.getBoundingClientRect();
    const availableLeft = Math.max(minLeft, contentRect.left);
    const availableRight = Math.min(maxLeft, contentRect.right || maxLeft);
    const width = Math.min(360, Math.max(160, availableRight - availableLeft), Math.max(0, maxLeft - minLeft));
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
  popover.style.left = `${Math.min(Math.max(left, minLeft), rightmostLeft)}px`;
  popover.style.top = `${Math.min(Math.max(top, minTop), lowestTop)}px`;
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
    this.popover.style.width = "";
    this.popover.style.maxHeight = "";
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
  if (controller.isOpen()) positionSearchHelpPopover(controller.button, controller.popover);
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
  window.addEventListener("scroll", () => closeSearchHelpPopovers(), { passive: true });
};

export {
  closeSearchHelpPopovers,
  initializeSearchHelpController,
  positionSearchHelpPopovers
};
