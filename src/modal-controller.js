import { appState } from "#app/state";
import { partItems } from "#app/data-store";
import { zeroGBottomStartIndex } from "#app/catalog-model";
import { cleanupModelViewer, closeModalTagPopover } from "#app/detail-view";
import { clearActiveDetailModalContext, clearModalContext, currentPageScrollY, rememberModalContext, restorePageScroll, validScrollY } from "#app/modal-context";
import { clearModalOriginRoute, navigateToRoute } from "#app/route-core";
import { escapeAttributeValue } from "#app/release-core";
import { playEnterAnimation } from "#app/ui-core";

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
  const shouldRestoreModalScroll = Boolean(appState.modalOriginRoute);
  if (clearOrigin) clearModalOriginRoute();
  if (modal?.open) closeModal();
  else if (shouldRestoreModalScroll) restorePageScroll(modalController.scrollY);
}
function routeIfNeeded(route) {
  if (appState.applyingRoute) return false;
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

export {
  bindModalDescriptionExpanders,
  cancelModalViewportSync,
  clearModalLockStyles,
  closeModal,
  closeModalSession,
  finishModalOpen,
  modal,
  modalBackButtonMarkup,
  modalController,
  partStats,
  queueModalStepDirection,
  queueModalTransition,
  routeIfNeeded,
  scheduleModalDescriptionMeasure,
  scheduleModalViewportSync,
  setModalContent
};
