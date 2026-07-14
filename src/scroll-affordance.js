const scrollAffordanceSelector = [
  ".catalog-dropdown-menu",
  ".catalog-search-help-popover",
  ".modal-scroll-area",
  ".modal-section-scroll",
  ".sidebar-root .sidebar-nav"
].join(",");
const scrollAffordanceClass = "has-scroll-content-below";
const scrollAffordanceOverlayClass = "has-scroll-overlay";
const scrollAffordanceTolerance = 2;
const boundScrollAffordances = new Set();
let syncFrame = 0;
const pendingRoots = new Set();

const scrollAffordanceElements = (root = document) => {
  const elements = [];
  if (root instanceof Element && root.matches(scrollAffordanceSelector)) elements.push(root);
  root.querySelectorAll?.(scrollAffordanceSelector).forEach(element => elements.push(element));
  return elements;
};
const hasScrollContentBelow = element => {
  if (!element?.isConnected || element.clientHeight <= 0) return false;
  const overflow = element.scrollHeight - element.clientHeight;
  return overflow > scrollAffordanceTolerance
    && overflow - element.scrollTop > scrollAffordanceTolerance;
};
const scrollAffordanceOverlayHost = element => {
  if (element?.classList?.contains("modal-scroll-area")) return element.closest(".modal-info");
  if (element?.classList?.contains("modal-section-scroll")) return element.closest(".modal-section");
  return null;
};
const syncScrollAffordance = element => {
  if (!(element instanceof Element)) return;
  const active = hasScrollContentBelow(element);
  element.classList.toggle(scrollAffordanceClass, active);
  scrollAffordanceOverlayHost(element)?.classList.toggle(scrollAffordanceOverlayClass, active);
};
const cleanupDetachedScrollAffordances = () => {
  boundScrollAffordances.forEach(element => {
    if (element.isConnected) return;
    resizeObserver?.unobserve(element);
    boundScrollAffordances.delete(element);
  });
};
const flushScrollAffordances = () => {
  syncFrame = 0;
  cleanupDetachedScrollAffordances();
  const roots = Array.from(pendingRoots);
  pendingRoots.clear();
  roots.forEach(root => bindScrollAffordances(root));
};
const scheduleScrollAffordances = (root = document) => {
  if (root) pendingRoots.add(root);
  if (syncFrame) return;
  syncFrame = requestAnimationFrame(flushScrollAffordances);
};
const handleScroll = event => scheduleScrollAffordances(event.currentTarget);
const resizeObserver = typeof ResizeObserver === "function"
  ? new ResizeObserver(entries => entries.forEach(entry => scheduleScrollAffordances(entry.target)))
  : null;
const bindScrollAffordance = element => {
  if (!(element instanceof Element) || !element.isConnected) return;
  if (!boundScrollAffordances.has(element)) {
    boundScrollAffordances.add(element);
    element.addEventListener("scroll", handleScroll, { passive: true });
    resizeObserver?.observe(element);
  }
  syncScrollAffordance(element);
};
function bindScrollAffordances(root = document) {
  scrollAffordanceElements(root).forEach(bindScrollAffordance);
}
const clearScrollAffordance = element => {
  element?.classList?.remove(scrollAffordanceClass);
  scrollAffordanceOverlayHost(element)?.classList.remove(scrollAffordanceOverlayClass);
};
const clearScrollAffordances = (root = document) => scrollAffordanceElements(root).forEach(clearScrollAffordance);

window.addEventListener("resize", () => scheduleScrollAffordances(document), { passive: true });
window.visualViewport?.addEventListener("resize", () => scheduleScrollAffordances(document), { passive: true });
document.fonts?.ready?.then(() => scheduleScrollAffordances(document));

export {
  bindScrollAffordance,
  bindScrollAffordances,
  clearScrollAffordance,
  clearScrollAffordances,
  scheduleScrollAffordances,
  syncScrollAffordance
};
