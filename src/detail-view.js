import { appState } from "#app/state";
import { appServices } from "#app/services";
import { catalogCoreItemsById } from "#app/data-store";
import { escapeAttributeValue, escapeHtml } from "#app/markup-core";
import { anchoredLayerPosition } from "#app/floating-layer";
import {
  battleTypeDescription,
  battleTypeLabel,
  partClassificationDescriptors,
  partMountedTypeLabel,
  spinDescription,
  spinLabel,
  structureLabels,
  structureTagDescriptions
} from "#app/catalog-metadata";

const modalTagInfoMarkup = (label, description) => {
  return description
    ? `<button type="button" class="modal-tag-info" data-tag-label="${escapeAttributeValue(label)}" data-tag-description="${escapeAttributeValue(description)}" aria-expanded="false">${escapeHtml(label)}</button>`
    : `<span>${escapeHtml(label)}</span>`;
};
const modalTagPriority = {
  structure: 10,
  "part-system": 20,
  "x-line": 30,
  type: 40,
  "x-blade-role": 50,
  battle: 60,
  spin: 70
};
const orderedModalTagMarkup = entries => entries
  .filter(entry => entry?.label)
  .map((entry, index) => ({ entry, index }))
  .sort((a, b) => (modalTagPriority[a.entry.group] ?? 55) - (modalTagPriority[b.entry.group] ?? 55) || a.index - b.index)
  .map(({ entry }) => modalTagInfoMarkup(entry.label, entry.description))
  .join("");
const partClassificationModalTags = item => partClassificationDescriptors(item)
  .filter(descriptor => descriptor.showInModal)
  .map(descriptor => ({
    group: descriptor.group,
    label: descriptor.label,
    description: descriptor.description
  }));
const battleTypeTag = item => item.battleType ? {
  group: "battle",
  label: battleTypeLabel(item.battleType, item),
  description: battleTypeDescription(item.battleType, item)
} : null;
const spinTag = item => item.spin ? {
  group: "spin",
  label: spinLabel(item.spin),
  description: spinDescription(item.spin)
} : null;
const beySystemTag = item => {
  const label = structureLabels[item.structure];
  const description = structureTagDescriptions[item.structure];
  return label && description ? { group: "structure", label, description } : null;
};
const modalTagGroup = (tags, className = "") => tags ? `<div class="${["modal-tags", className].filter(Boolean).join(" ")}">${tags}</div>` : "";
const modalInfoSlot = (description = "", tags = "", className = "") => {
  const hasDescription = String(description || "").trim().length > 0;
  const classes = ["modal-info-slot", className, hasDescription ? "has-description" : ""].filter(Boolean).join(" ");
  return `<div class="${classes}"><div class="modal-slot-tags">${tags || ""}</div><div class="modal-description-region"><p class="modal-description">${escapeHtml(description || "")}</p><button class="modal-description-toggle" type="button" aria-label="부품 설명 펼치기" aria-expanded="false" hidden></button></div></div>`;
};
const modalScrollArea = content => `<div class="modal-scroll-area">${content}</div>`;
function beyModalTags(item) {
  return modalTagGroup(orderedModalTagMarkup([beySystemTag(item), battleTypeTag(item), spinTag(item)]), "bey-modal-tags");
}
function partModalTags(item) {
  return modalTagGroup(orderedModalTagMarkup([...partClassificationModalTags(item), battleTypeTag(item), spinTag(item)]));
}

let modalTagPopover = null;
let modalTagPinned = false;
const isHoverPointer = event => event.pointerType !== "touch";

function closeModalTagPopover() {
  if (appState.modal.activeTagButton) {
    appState.modal.activeTagButton.setAttribute("aria-expanded", "false");
    appState.modal.activeTagButton.removeAttribute("aria-describedby");
  }
  modalTagPopover?.remove();
  appState.modal.activeTagButton = null;
  modalTagPopover = null;
  modalTagPinned = false;
}

function positionModalTagPopover(button) {
  if (!modalTagPopover) return;
  const buttonRect = button.getBoundingClientRect();
  const popoverRect = modalTagPopover.getBoundingClientRect();
  const { left, top } = anchoredLayerPosition(buttonRect, popoverRect);
  modalTagPopover.style.left = `${left}px`;
  modalTagPopover.style.top = `${top}px`;
}

function revealModalTag(button) {
  const scroller = button.closest(".modal-slot-tags");
  if (!scroller) return;
  const scrollerRect = scroller.getBoundingClientRect();
  const buttonRect = button.getBoundingClientRect();
  if (buttonRect.left < scrollerRect.left) {
    scroller.scrollLeft += buttonRect.left - scrollerRect.left;
  } else if (buttonRect.right > scrollerRect.right) {
    scroller.scrollLeft += buttonRect.right - scrollerRect.right;
  }
}

function scrollModalTagsWithWheel(scroller, event) {
  if (event.ctrlKey) return;
  const maxScrollLeft = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
  if (maxScrollLeft < 1) return;
  const horizontalInput = Math.abs(event.deltaX) > Math.abs(event.deltaY);
  const rawDelta = horizontalInput ? event.deltaX : event.deltaY;
  const delta = event.deltaMode === 1
    ? rawDelta * 16
    : event.deltaMode === 2
      ? rawDelta * scroller.clientWidth
      : rawDelta;
  if (!delta) return;
  const smooth = !horizontalInput && !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const edgeSnapDistance = 8;
  let nextScrollLeft = Math.min(maxScrollLeft, Math.max(0, scroller.scrollLeft + delta));
  if (delta > 0 && maxScrollLeft - nextScrollLeft <= edgeSnapDistance) nextScrollLeft = maxScrollLeft;
  if (delta < 0 && nextScrollLeft <= edgeSnapDistance) nextScrollLeft = 0;
  if (Math.abs(nextScrollLeft - scroller.scrollLeft) < 0.5) return;
  event.preventDefault();
  if (smooth) scroller.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
  else scroller.scrollLeft = nextScrollLeft;
}

function openModalTagPopover(button, { pinned = false } = {}) {
  const label = button.dataset.tagLabel || button.textContent.trim();
  const description = button.dataset.tagDescription || "";
  if (!description) return;
  if (appState.modal.activeTagButton === button && modalTagPopover) {
    modalTagPinned = modalTagPinned || pinned;
    button.setAttribute("aria-expanded", "true");
    positionModalTagPopover(button);
    return;
  }
  if (appState.modal.activeTagButton && appState.modal.activeTagButton !== button) closeModalTagPopover();
  appState.modal.activeTagButton = button;
  modalTagPinned = pinned;
  modalTagPopover = document.createElement("div");
  modalTagPopover.id = `modal-tag-popover-${Date.now()}`;
  modalTagPopover.className = "modal-tag-popover";
  modalTagPopover.setAttribute("role", "tooltip");
  modalTagPopover.innerHTML = `<strong>${escapeHtml(label)}</strong><p>${escapeHtml(description)}</p>`;
  appServices.modal.appendChild(modalTagPopover);
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-describedby", modalTagPopover.id);
  positionModalTagPopover(button);
}

function bindModalTagPopovers(scope = document) {
  scope.querySelectorAll(".modal-tag-info").forEach(button => {
    let focusOpened = false;
    button.addEventListener("pointerenter", event => {
      if (isHoverPointer(event)) openModalTagPopover(button);
    });
    button.addEventListener("pointerleave", event => {
      if (isHoverPointer(event) && !modalTagPinned && document.activeElement !== button) closeModalTagPopover();
    });
    button.addEventListener("focus", () => {
      focusOpened = true;
      revealModalTag(button);
      openModalTagPopover(button);
      setTimeout(() => { focusOpened = false; }, 0);
    });
    button.addEventListener("blur", () => {
      setTimeout(() => {
        if (!modalTagPinned) closeModalTagPopover();
      }, 0);
    });
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      if (focusOpened && appState.modal.activeTagButton === button) {
        modalTagPinned = true;
        return;
      }
      if (appState.modal.activeTagButton === button && modalTagPinned) closeModalTagPopover();
      else openModalTagPopover(button, { pinned: true });
    });
  });
  scope.querySelectorAll(".modal-slot-tags").forEach(scroller => {
    let positionFrame = 0;
    scroller.addEventListener("wheel", event => scrollModalTagsWithWheel(scroller, event), { passive: false });
    scroller.addEventListener("scroll", () => {
      const button = appState.modal.activeTagButton;
      if (!modalTagPopover || !button || !scroller.contains(button)) return;
      cancelAnimationFrame(positionFrame);
      positionFrame = requestAnimationFrame(() => {
        positionFrame = 0;
        if (modalTagPopover && appState.modal.activeTagButton === button && scroller.contains(button)) {
          positionModalTagPopover(button);
        }
      });
    }, { passive: true });
  });
}

const burstDetailPartOrder = part => {
  if (part?.type === "dbarmor") return 40;
  if (part?.type === "driver" || part?.type === "driverupgrade") return 50;
  return 0;
};
const beyDetailPartIds = item => {
  if (item?.series !== "burst") return item.parts;
  return item.parts
    .map((partId, index) => ({ partId, index, order: burstDetailPartOrder(catalogCoreItemsById.get(partId)) }))
    .sort((a, b) => a.order - b.order || a.index - b.index)
    .map(entry => entry.partId);
};
const mountedPartTypeLabelMarkup = part => {
  const label = partMountedTypeLabel(part);
  const escapedLabel = escapeHtml(label);
  return part?.xBladeRole && label.endsWith("블레이드")
    ? escapedLabel.replace(/블레이드$/, "<wbr>블레이드")
    : escapedLabel;
};
const beyPartPreviewAttribute = (bey, part) => {
  if (bey?.series !== "x") {
    return ` data-image-preview-id="${escapeAttributeValue(part.id)}"`;
  }
  const source = bey.partPreviewImages?.[part.id];
  return source ? ` data-image-preview-src="${escapeAttributeValue(source)}"` : "";
};
const beyPartSection = (title, bey, partIds, region, className = "") => {
  const links = (partIds || []).map(partId => {
    const part = catalogCoreItemsById.get(partId);
    if (!part) return "";
    const previewAttribute = beyPartPreviewAttribute(bey, part);
    return `<a class="ui-list-link mounted-link" href="#${part.id}" data-part-id="${part.id}"${previewAttribute}><span>${mountedPartTypeLabelMarkup(part)}</span><strong>${appServices.itemDisplayName(part, region)}</strong><b>→</b></a>`;
  }).filter(Boolean).join("");
  if (!links) return "";
  const classes = ["modal-section", "mounted-parts", className].filter(Boolean).join(" ");
  return `<section class="${classes}"><h4 class="mounted-title">${title}</h4><div class="modal-section-scroll mounted-parts-list">${links}</div></section>`;
};

function beyDetailSections(item, region) {
  const detailPartIds = beyDetailPartIds(item);
  const mounted = beyPartSection("구성", item, detailPartIds, region);
  const bundled = beyPartSection("동봉 부품", item, item.bundledParts, region, "bundled-parts");
  return `${mounted}${bundled}`;
}

export {
  beyDetailSections,
  beyModalTags,
  bindModalTagPopovers,
  closeModalTagPopover,
  modalInfoSlot,
  modalScrollArea,
  modalTagGroup,
  partModalTags,
  positionModalTagPopover
};
