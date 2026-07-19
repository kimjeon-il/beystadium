import { appState } from "#app/state";
import { appServices } from "#app/services";
import { catalogCoreItemsById } from "#app/data-store";
import { escapeAttributeValue, escapeHtml } from "#app/markup-core";
import {
  battleTypeDescription,
  battleTypeLabel,
  partClassificationDescriptors,
  partMountedTypeLabel,
  spinDescription,
  spinLabel,
  structureLabels,
  structureTagDescriptions
} from "#app/ui-core";

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
  if (appState.activeModalTagButton) {
    appState.activeModalTagButton.setAttribute("aria-expanded", "false");
    appState.activeModalTagButton.removeAttribute("aria-describedby");
  }
  modalTagPopover?.remove();
  appState.activeModalTagButton = null;
  modalTagPopover = null;
  modalTagPinned = false;
}

function positionModalTagPopover(button) {
  if (!modalTagPopover) return;
  const margin = 14;
  const gap = 8;
  const viewport = window.visualViewport;
  const viewportLeft = viewport?.offsetLeft || 0;
  const viewportTop = viewport?.offsetTop || 0;
  const viewportWidth = viewport?.width || window.innerWidth;
  const viewportHeight = viewport?.height || window.innerHeight;
  const minLeft = viewportLeft + margin;
  const minTop = viewportTop + margin;
  const buttonRect = button.getBoundingClientRect();
  const popoverRect = modalTagPopover.getBoundingClientRect();
  let left = buttonRect.left;
  let top = buttonRect.bottom + gap;
  const maxLeft = viewportLeft + viewportWidth - margin - popoverRect.width;
  const maxTop = viewportTop + viewportHeight - margin - popoverRect.height;
  if (left > maxLeft) left = maxLeft;
  if (top > maxTop) top = buttonRect.top - popoverRect.height - gap;
  modalTagPopover.style.left = `${Math.max(minLeft, Math.min(left, maxLeft))}px`;
  modalTagPopover.style.top = `${Math.max(minTop, Math.min(top, maxTop))}px`;
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
  const nextScrollLeft = Math.min(maxScrollLeft, Math.max(0, scroller.scrollLeft + delta));
  if (Math.abs(nextScrollLeft - scroller.scrollLeft) < 0.5) return;
  event.preventDefault();
  if (smooth) scroller.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
  else scroller.scrollLeft = nextScrollLeft;
}

function openModalTagPopover(button, { pinned = false } = {}) {
  const label = button.dataset.tagLabel || button.textContent.trim();
  const description = button.dataset.tagDescription || "";
  if (!description) return;
  if (appState.activeModalTagButton === button && modalTagPopover) {
    modalTagPinned = modalTagPinned || pinned;
    button.setAttribute("aria-expanded", "true");
    positionModalTagPopover(button);
    return;
  }
  if (appState.activeModalTagButton && appState.activeModalTagButton !== button) closeModalTagPopover();
  appState.activeModalTagButton = button;
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
      if (focusOpened && appState.activeModalTagButton === button) {
        modalTagPinned = true;
        return;
      }
      if (appState.activeModalTagButton === button && modalTagPinned) closeModalTagPopover();
      else openModalTagPopover(button, { pinned: true });
    });
  });
  scope.querySelectorAll(".modal-slot-tags").forEach(scroller => {
    let positionFrame = 0;
    scroller.addEventListener("wheel", event => scrollModalTagsWithWheel(scroller, event), { passive: false });
    scroller.addEventListener("scroll", () => {
      const button = appState.activeModalTagButton;
      if (!modalTagPopover || !button || !scroller.contains(button)) return;
      cancelAnimationFrame(positionFrame);
      positionFrame = requestAnimationFrame(() => {
        positionFrame = 0;
        if (modalTagPopover && appState.activeModalTagButton === button && scroller.contains(button)) {
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
const beyPartSection = (title, partIds, region, className = "") => {
  const links = (partIds || []).map(partId => {
    const part = catalogCoreItemsById.get(partId);
    if (!part) return "";
    return `<a class="ui-list-link mounted-link" href="#${part.id}" data-part-id="${part.id}"><span>${mountedPartTypeLabelMarkup(part)}</span><strong>${appServices.itemDisplayName(part, region)}</strong><b>→</b></a>`;
  }).filter(Boolean).join("");
  if (!links) return "";
  const classes = ["modal-section", "mounted-parts", className].filter(Boolean).join(" ");
  return `<section class="${classes}"><h4 class="mounted-title">${title}</h4><div class="modal-section-scroll mounted-parts-list">${links}</div></section>`;
};

function beyDetailSections(item, region) {
  const detailPartIds = beyDetailPartIds(item);
  const mounted = beyPartSection("구성", detailPartIds, region);
  const bundled = beyPartSection("동봉 부품", item.bundledParts, region, "bundled-parts");
  return `${mounted}${bundled}`;
}

let modelViewerCleanup = null;
let threeModules = null;

function cleanupModelViewer() {
  if (!modelViewerCleanup) return;
  modelViewerCleanup();
  modelViewerCleanup = null;
}

async function loadThreeModules() {
  if (!threeModules) {
    const [THREE, { OBJLoader }, { OrbitControls }] = await Promise.all([
      import("https://esm.sh/three@0.160.0"),
      import("https://esm.sh/three@0.160.0/examples/jsm/loaders/OBJLoader.js"),
      import("https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js")
    ]);
    threeModules = { THREE, OBJLoader, OrbitControls };
  }
  return threeModules;
}

async function initModelViewer() {
  cleanupModelViewer();
  const container = document.querySelector(".model-viewer");
  if (!container) return;

  const { THREE, OBJLoader, OrbitControls } = await loadThreeModules();
  if (!document.body.contains(container)) return;

  const width = Math.max(container.clientWidth, 260);
  const height = Math.max(container.clientHeight, 300);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 0, 5.35);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height, false);
  container.textContent = "";
  container.appendChild(renderer.domElement);
  const resetButton = document.createElement("button");
  resetButton.className = "ui-button model-reset";
  resetButton.type = "button";
  resetButton.textContent = "기본 위치";
  container.appendChild(resetButton);

  const defaultCameraPosition = new THREE.Vector3(0, 0, 5.35);
  const defaultControlsTarget = new THREE.Vector3(0, 0, 0);
  const defaultModelRotation = new THREE.Euler(-Math.PI / 2, 0, 0);
  const modelRoot = new THREE.Group();
  scene.add(modelRoot);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = true;
  controls.screenSpacePanning = true;
  controls.rotateSpeed = 0.72;
  controls.panSpeed = 0.85;
  controls.zoomSpeed = 0.88;
  controls.minDistance = 2.6;
  controls.maxDistance = 9;
  controls.target.copy(defaultControlsTarget);
  const orbitMouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
  };
  const panMouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
  };
  controls.mouseButtons = orbitMouseButtons;
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN
  };
  const resetView = () => {
    camera.position.copy(defaultCameraPosition);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    controls.target.copy(defaultControlsTarget);
    modelRoot.rotation.copy(defaultModelRotation);
    controls.update();
  };
  resetButton.addEventListener("click", resetView);

  const usePanForShiftDrag = event => {
    controls.mouseButtons = event.shiftKey && event.button === 0 ? panMouseButtons : orbitMouseButtons;
  };
  const restoreOrbitDrag = () => {
    controls.mouseButtons = orbitMouseButtons;
    container.classList.remove("is-grabbing");
  };
  const markDragging = () => container.classList.add("is-grabbing");
  const preventContextMenu = event => event.preventDefault();
  const resizeRenderer = () => {
    if (!document.body.contains(container)) return;
    const nextWidth = Math.max(container.clientWidth, 260);
    const nextHeight = Math.max(container.clientHeight, 300);
    renderer.setSize(nextWidth, nextHeight, false);
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    controls.update();
  };
  const resizeObserver = new ResizeObserver(resizeRenderer);
  resizeObserver.observe(container);
  renderer.domElement.addEventListener("pointerdown", usePanForShiftDrag, true);
  renderer.domElement.addEventListener("pointerdown", markDragging);
  renderer.domElement.addEventListener("dblclick", resetView);
  renderer.domElement.addEventListener("contextmenu", preventContextMenu);
  window.addEventListener("pointerup", restoreOrbitDrag);
  window.addEventListener("pointercancel", restoreOrbitDrag);

  let active = true;
  const loader = new OBJLoader();
  const handleObject = object => {
    if (!active) return;
    object.traverse(child => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({ color: 0xb8c3c8 });
      }
    });
    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    object.position.sub(center);
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    object.scale.multiplyScalar(1.62 / maxAxis);
    object.rotation.x = -Math.PI / 2;
    object.updateMatrixWorld(true);
    const rotatedCenter = new THREE.Box3().setFromObject(object).getCenter(new THREE.Vector3());
    object.position.sub(rotatedCenter);
    modelRoot.add(object);
    resetView();
  };
  loader.load(container.dataset.model, handleObject, undefined, () => {
    container.innerHTML = "<p>3D 모델을 불러오지 못했습니다.</p>";
  });

  const render = () => {
    if (!active) return;
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  modelViewerCleanup = () => {
    active = false;
    resetButton.removeEventListener("click", resetView);
    renderer.domElement.removeEventListener("pointerdown", usePanForShiftDrag, true);
    renderer.domElement.removeEventListener("pointerdown", markDragging);
    renderer.domElement.removeEventListener("dblclick", resetView);
    renderer.domElement.removeEventListener("contextmenu", preventContextMenu);
    window.removeEventListener("pointerup", restoreOrbitDrag);
    window.removeEventListener("pointercancel", restoreOrbitDrag);
    resizeObserver.disconnect();
    controls.dispose();
    renderer.dispose();
  };
}

export {
  beyDetailSections,
  beyModalTags,
  bindModalTagPopovers,
  cleanupModelViewer,
  closeModalTagPopover,
  initModelViewer,
  modalInfoSlot,
  modalScrollArea,
  modalTagGroup,
  partModalTags,
  positionModalTagPopover
};
