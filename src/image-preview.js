import { bookItemsById, catalogCoreItemsById, gameItemsById, productItemsById, toolsItemsById } from "#app/data-store";
import { releaseRegionLabels } from "#app/release-core";

const previewSelector = "[data-image-preview-id], [data-image-preview-product-id]";
const fineHover = window.matchMedia("(hover: hover) and (pointer: fine)");
const failedSources = new Set();
const previewGap = 12;
const viewportInset = 12;
const hoverDelay = 120;

let initialized = false;
let previewElement = null;
let previewImage = null;
let activeAnchor = null;
let activeSource = "";
let openTimer = 0;
let requestToken = 0;
let positionFrame = 0;
let lastInputMethod = "keyboard";

const previewAnchorFrom = target => target?.closest?.(previewSelector) || null;
const previewItemById = id => catalogCoreItemsById.get(id)
  || toolsItemsById.get(id)
  || bookItemsById.get(id)
  || gameItemsById.get(id)
  || null;
const previewSourceForAnchor = anchor => {
  const productId = anchor?.dataset.imagePreviewProductId;
  if (productId) {
    const region = anchor.dataset.imagePreviewRegion;
    if (!releaseRegionLabels[region]) return "";
    return productItemsById.get(productId)?.releases?.[region]?.image || "";
  }
  const itemId = anchor?.dataset.imagePreviewId;
  return itemId ? previewItemById(itemId)?.image || "" : "";
};
const previewHostForAnchor = anchor =>
  anchor?.closest?.("dialog[open]")?.querySelector(".modal-stage") || document.body;

function ensurePreviewElement(anchor) {
  if (!previewElement) {
    previewElement = document.createElement("div");
    previewElement.className = "link-image-preview";
    previewElement.hidden = true;
    previewElement.setAttribute("aria-hidden", "true");
    previewImage = document.createElement("img");
    previewImage.alt = "";
    previewImage.decoding = "async";
    previewElement.append(previewImage);
  }
  const host = previewHostForAnchor(anchor);
  if (previewElement.parentElement !== host) host.append(previewElement);
  return previewElement;
}

const previewViewport = () => {
  const viewport = window.visualViewport;
  const left = viewport?.offsetLeft || 0;
  const top = viewport?.offsetTop || 0;
  return {
    left,
    top,
    right: left + (viewport?.width || window.innerWidth),
    bottom: top + (viewport?.height || window.innerHeight)
  };
};
const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

function positionLinkImagePreview() {
  positionFrame = 0;
  if (!activeAnchor?.isConnected || !previewElement || previewElement.hidden) {
    hideLinkImagePreview();
    return;
  }
  const anchorRect = activeAnchor.getBoundingClientRect();
  const viewport = previewViewport();
  if (anchorRect.bottom <= viewport.top || anchorRect.top >= viewport.bottom
    || anchorRect.right <= viewport.left || anchorRect.left >= viewport.right) {
    hideLinkImagePreview();
    return;
  }
  const previewRect = previewElement.getBoundingClientRect();
  const availableRight = viewport.right - anchorRect.right - previewGap;
  const availableLeft = anchorRect.left - viewport.left - previewGap;
  const preferredLeft = availableRight >= previewRect.width || availableRight >= availableLeft
    ? anchorRect.right + previewGap
    : anchorRect.left - previewRect.width - previewGap;
  const left = clamp(
    preferredLeft,
    viewport.left + viewportInset,
    viewport.right - previewRect.width - viewportInset
  );
  const top = clamp(
    anchorRect.top + (anchorRect.height - previewRect.height) / 2,
    viewport.top + viewportInset,
    viewport.bottom - previewRect.height - viewportInset
  );
  previewElement.style.left = `${Math.round(left)}px`;
  previewElement.style.top = `${Math.round(top)}px`;
}

function schedulePreviewPosition() {
  if (!previewElement || previewElement.hidden || positionFrame) return;
  positionFrame = requestAnimationFrame(positionLinkImagePreview);
}

function hideLinkImagePreview() {
  clearTimeout(openTimer);
  openTimer = 0;
  requestToken += 1;
  activeAnchor = null;
  activeSource = "";
  if (positionFrame) cancelAnimationFrame(positionFrame);
  positionFrame = 0;
  if (!previewElement) return;
  previewElement.classList.remove("is-visible");
  previewElement.hidden = true;
}

function revealLinkImagePreview(anchor, source, token) {
  if (token !== requestToken || anchor !== activeAnchor || source !== activeSource) return;
  const preview = ensurePreviewElement(anchor);
  previewImage.src = source;
  preview.hidden = false;
  preview.classList.remove("is-visible");
  positionLinkImagePreview();
  requestAnimationFrame(() => {
    if (token === requestToken && anchor === activeAnchor && !preview.hidden) {
      preview.classList.add("is-visible");
    }
  });
}

function loadLinkImagePreview(anchor, source, token) {
  const loader = new window.Image();
  loader.decoding = "async";
  loader.addEventListener("load", () => revealLinkImagePreview(anchor, source, token), { once: true });
  loader.addEventListener("error", () => {
    failedSources.add(source);
    if (token === requestToken) hideLinkImagePreview();
  }, { once: true });
  loader.src = source;
}

function showLinkImagePreview(anchor, { delay = hoverDelay } = {}) {
  const source = previewSourceForAnchor(anchor);
  if (!source || failedSources.has(source)) {
    hideLinkImagePreview();
    return;
  }
  clearTimeout(openTimer);
  activeAnchor = anchor;
  activeSource = source;
  const token = ++requestToken;
  openTimer = window.setTimeout(() => {
    openTimer = 0;
    loadLinkImagePreview(anchor, source, token);
  }, delay);
}

function initializeImageLinkPreviews() {
  if (initialized) return;
  initialized = true;
  document.addEventListener("pointerdown", event => {
    lastInputMethod = event.pointerType === "touch" ? "touch" : "pointer";
  }, true);
  document.addEventListener("pointerover", event => {
    if (!fineHover.matches) return;
    const anchor = previewAnchorFrom(event.target);
    if (!anchor || anchor.contains(event.relatedTarget)) return;
    showLinkImagePreview(anchor);
  }, true);
  document.addEventListener("pointerout", event => {
    const anchor = previewAnchorFrom(event.target);
    if (!anchor || anchor !== activeAnchor || anchor.contains(event.relatedTarget)) return;
    if (anchor.contains(document.activeElement)) return;
    hideLinkImagePreview();
  }, true);
  document.addEventListener("focusin", event => {
    const anchor = previewAnchorFrom(event.target);
    if (!anchor || lastInputMethod === "touch") return;
    showLinkImagePreview(anchor, { delay: 0 });
  }, true);
  document.addEventListener("focusout", event => {
    const anchor = previewAnchorFrom(event.target);
    if (!anchor || anchor !== activeAnchor || anchor.contains(event.relatedTarget)) return;
    if (fineHover.matches && anchor.matches(":hover")) return;
    hideLinkImagePreview();
  }, true);
  document.addEventListener("click", hideLinkImagePreview, true);
  document.addEventListener("keydown", event => {
    if (event.key === "Tab" || event.key.startsWith("Arrow")) lastInputMethod = "keyboard";
    if (event.key !== "Escape" || !previewElement || previewElement.hidden) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    hideLinkImagePreview();
  }, true);
  document.addEventListener("scroll", schedulePreviewPosition, { capture: true, passive: true });
  window.addEventListener("resize", schedulePreviewPosition, { passive: true });
  window.visualViewport?.addEventListener("resize", schedulePreviewPosition, { passive: true });
  window.visualViewport?.addEventListener("scroll", schedulePreviewPosition, { passive: true });
}

export {
  hideLinkImagePreview,
  initializeImageLinkPreviews
};
