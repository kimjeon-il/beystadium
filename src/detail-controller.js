import { isAnimeEpisodeHash } from "#app/anime-core";
import { appState } from "#app/state";
import { bookItems, bookItemsById, catalogCoreItems, catalogCoreItemsById, gameItems, gameItemsById, productItems, productItemsById, toolsItems, toolsItemsById } from "#app/data-store";
import { codedPartNameTypes, compareToolsItemsByFirstRelease, findCatalogItemById, modalArtMarkup, partCategory, partKoName, productCompositionItems, productLineupIds, productSerialNumber, visibleCatalogCoreItems, visibleToolsItems } from "#app/catalog-model";
import { beyDetailSections, beyModalTags, bindModalTagPopovers, cleanupModelViewer, closeModalTagPopover, initModelViewer, modalInfoSlot, modalScrollArea, modalTagGroup, partModalTags } from "#app/detail-view";
import { openAnimeEpisodeDetail, openCategoryReleaseDetail } from "#app/feature-loaders";
import { bindModalDescriptionExpanders, cancelModalViewportSync, clearModalLockStyles, closeModalSession, finishModalOpen, modal, modalBackButtonMarkup, modalController, partStats, queueModalStepDirection, queueModalTransition, routeIfNeeded, scheduleModalDescriptionMeasure, setModalContent } from "#app/modal-controller";
import { restorePageScroll, validScrollY } from "#app/modal-context";
import { normalizeRoute } from "#app/route-parser";
import { getModalCloseRoute, navigateToRoute } from "#app/navigation";
import { registerAppServices } from "#app/services";
import { RARE_BEY_GET_BADGE, escapeAttributeValue, escapeHtml, productDisplayName, productDisplayRegion, productRelease, productReleasedInRegion, rareBeyGetEntryProductIds, rareBeyGetEntryRegion, rareBeyGetEntryStartSortValue, releaseDateSortValue, releaseHasBadge, releaseRegionLabels, releaseSeriesLabels, visibleRareBeyGetEntries } from "#app/release-core";
import { partDisplayTypeLabel, typeLabels } from "#app/ui-core";

const detailBackButton = (backId, backProductId, backRelease, backRegion) => {
  if (backId) {
    return modalBackButtonMarkup({ backId, backProductId, backRelease, region: backRegion, label: "베이로 돌아가기" });
  }
  return productBackButton({ backProductId, backRelease, region: backRegion });
};
const productBackButton = ({ backProductId, backRelease = false, region = "" } = {}) => {
  if (!backProductId) return "";
  return modalBackButtonMarkup({ backProductId, backRelease, region, label: "제품으로 돌아가기" });
};
const rareBeyGetListBackButton = ({ region = "", series = "", backProductId = "", backRelease = false } = {}) =>
  modalBackButtonMarkup({ backRareBeyGetList: true, backProductId, backRelease, region, series, label: "레어 베이 겟 목록으로 돌아가기" });
const productModalBackButton = (item, options = {}, region = appState.activeReleaseRegion) => {
  if (options.backRareBeyGetList) return rareBeyGetListBackButton({
    region: options.rareBeyGetListRegion || region,
    series: options.rareBeyGetListSeries || item?.series || appState.activeReleaseSeries,
    backProductId: options.rareBeyGetListBackProductId || "",
    backRelease: options.rareBeyGetListBackRelease === true
  });
  if (options.backProductId) return productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region });
  if (options.backRelease) return modalBackButtonMarkup({ backRelease: true, region, label: "발매목록으로 돌아가기" });
  return "";
};
const modalBackOptions = (button, fallbackRegion = "") => ({
  ...(button.dataset.backRelease ? { backRelease: true } : {}),
  ...(button.dataset.backSeries ? { series: button.dataset.backSeries } : {}),
  ...((button.dataset.backRegion || fallbackRegion) ? { region: button.dataset.backRegion || fallbackRegion } : {})
});
function bindCatalogModalBack(scope = document, { fallbackRegion = "" } = {}) {
  scope.querySelector(".modal-back")?.addEventListener("click", event => {
    event.preventDefault();
    const backButton = event.currentTarget;
    const backOptions = modalBackOptions(backButton, fallbackRegion);
    if (backButton.dataset.backRareBeyGetList) {
      queueModalTransition("back");
      openRareBeyGetListDetail({
        region: backOptions.region || appState.activeReleaseRegion,
        series: backOptions.series || appState.activeReleaseSeries,
        backProductId: backButton.dataset.backProductId || "",
        backRelease: backOptions.backRelease === true
      });
      return;
    }
    if (backButton.dataset.backId) {
      if (backButton.dataset.backProductId) backOptions.backProductId = backButton.dataset.backProductId;
      queueModalTransition("back");
      openDetail(backButton.dataset.backId, backOptions);
      return;
    }
    if (backButton.dataset.backProductId) {
      queueModalTransition("back");
      openProductEntry(backButton.dataset.backProductId, backOptions);
      return;
    }
    if (backButton.dataset.backRelease) openCategoryReleaseDetail({ region: backOptions.region || appState.activeReleaseRegion });
  });
}
const modalStepButtonMarkup = ({ direction, targetId, kind, label }) =>
  `<button class="ui-icon-button modal-step modal-step-${direction}" type="button" data-modal-kind="${escapeAttributeValue(kind)}" data-modal-target="${escapeAttributeValue(targetId)}" aria-label="${escapeAttributeValue(label)}"></button>`;
function modalStepButtons(list, currentId, kind) {
  const index = list.findIndex(entry => entry.id === currentId);
  if (index < 0 || list.length < 2) return "";
  const prev = list[(index - 1 + list.length) % list.length];
  const next = list[(index + 1) % list.length];
  return [
    modalStepButtonMarkup({ direction: "prev", targetId: prev.id, kind, label: "전 항목" }),
    modalStepButtonMarkup({ direction: "next", targetId: next.id, kind, label: "후 항목" })
  ].join("");
}
function bindModalStepButtons(options = {}) {
  document.querySelectorAll(".modal-step").forEach(button => button.addEventListener("click", event => {
    event.preventDefault();
    event.stopPropagation();
    const targetId = button.dataset.modalTarget;
    if (!targetId) return;
    const kind = button.dataset.modalKind || "item";
    queueModalStepDirection(button.classList.contains("modal-step-prev") ? "prev" : "next");
    openDetailByKind(kind, targetId, options[kind] || (kind === "item" ? options.item : {}) || {});
  }));
}
async function openDetailByKind(kind, targetId, options = {}) {
  if (!targetId) return;
  if (isAnimeEpisodeHash(targetId)) await openAnimeEpisodeDetail(targetId, options);
  else if (kind === "product-lineup") openProductLineupDetail(targetId, options);
  else if (kind === "product" || targetId.startsWith("PRODUCT-")) openProductEntry(targetId, options);
  else if (kind === "tools" || targetId.startsWith("TOOLS-")) openToolsDetail(targetId, options);
  else if (kind === "book" || targetId.startsWith("BOOK-")) openBookDetail(targetId, options);
  else if (kind === "game" || targetId.startsWith("GAME-")) openGameDetail(targetId, options);
  else openDetail(targetId, options);
}
function modalTitle(text, extraClass = "") {
  const className = extraClass ? `modal-name ${extraClass}` : "modal-name";
  return `<h3 class="${className}">${text}</h3>`;
}
function detailHeading(item, options = {}) {
  if (codedPartNameTypes.includes(item.type)) {
    const numericTrack = item.type === "track" && /^\d+$/.test(item.name);
    const koName = partKoName(item);
    const displayName = itemDisplayName(item, options.region);
    return numericTrack
      ? modalTitle(displayName)
      : modalTitle(options.region === "jp" && item.jpName ? displayName : koName);
  }
  if (item.type === "bey") {
    const combo = partCategory(item);
    const name = itemDisplayName(item, options.region);
    return modalTitle(combo ? `${name} ${combo}` : name);
  }
  return modalTitle(itemDisplayName(item, options.region));
}
const validReleaseRegion = region => releaseRegionLabels[region] ? region : "";
const catalogDetailProductHasTarget = (product, region, targetId) =>
  productReleasedInRegion(product, region) &&
  (productCompositionItems(product, region).some(part => part.target === targetId) ||
    productLineupIds(product).includes(targetId));
const inferCatalogDetailRegionFromProduct = (options = {}) => {
  const product = options.backProductId ? productItemsById.get(options.backProductId) : null;
  if (!product) return "";
  const requestedRegion = validReleaseRegion(options.region) || validReleaseRegion(appState.activeReleaseRegion) || "kr";
  return productDisplayRegion(product, requestedRegion);
};
const inferCatalogDetailRegionFromItem = item => {
  if (!item || item.series !== "x") return "";
  if (item.id.includes("-JP-")) return "jp";
  if (item.type !== "bey") return "";
  const hasJpRelease = productItems.some(product => catalogDetailProductHasTarget(product, "jp", item.id));
  const hasKrRelease = productItems.some(product => catalogDetailProductHasTarget(product, "kr", item.id));
  return hasJpRelease && !hasKrRelease ? "jp" : "";
};
function catalogDetailRegion(item, options = {}) {
  return validReleaseRegion(options.region) ||
    inferCatalogDetailRegionFromProduct(options) ||
    inferCatalogDetailRegionFromItem(item) ||
    validReleaseRegion(appState.activeReleaseRegion) ||
    "kr";
}
function openDetail(id, options = {}) {
  const item = catalogCoreItemsById.get(id);
  if (!item) return;
  const detailRegion = catalogDetailRegion(item, options);
  const detailOptions = { ...options, region: detailRegion };
  if (routeIfNeeded({ type: "detail", id, options: detailOptions })) return;
  closeModalTagPopover();
  cleanupModelViewer();
  const description = itemDisplayDesc(item, detailRegion);
  const slot = item.type === "bey"
    ? modalInfoSlot(description, beyModalTags(item), "single-line-info-slot")
    : modalInfoSlot(description, partModalTags(item));
  const body = item.type === "bey" ? beyDetailSections(item, detailRegion) : partStats(item);
  const visibleCoreItems = visibleCatalogCoreItems();
  const stepItems = visibleCoreItems.some(entry => entry.id === item.id) ? visibleCoreItems : catalogCoreItems;
  const modalContentRoot = setModalContent(`${modalStepButtons(stepItems, item.id, "item")}<div class="modal-inner">
    <div class="modal-art">${modalArtMarkup(item)}</div>
    <div class="modal-info ${item.type === "bey" ? "bey-modal-info" : "part-modal-info"}">
    ${modalScrollArea(`${detailHeading(item, detailOptions)}
    ${slot}<div class="modal-body-block">${body}</div>`)}${detailBackButton(detailOptions.backId, detailOptions.backProductId, detailOptions.backRelease, detailRegion)}</div></div>`);
  if (!modalContentRoot) return;
  bindModalStepButtons({ item: detailOptions });
  bindCatalogModalBack(modalContentRoot);
  modalContentRoot.querySelectorAll(".mounted-link").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    if (!link.dataset.partId) return;
    const linkOptions = { backId: item.id, region: detailRegion };
    if (detailOptions.backProductId) linkOptions.backProductId = detailOptions.backProductId;
    if (detailOptions.backRelease) linkOptions.backRelease = true;
    queueModalTransition("composition", { sourceElement: link });
    openDetail(link.dataset.partId, linkOptions);
  }));
  bindModalTagPopovers(modalContentRoot);
  bindModalDescriptionExpanders(modalContentRoot);
  finishModalOpen({ contextKind: "item", contextId: item.id, contextOptions: detailOptions, root: modalContentRoot });
  scheduleModalDescriptionMeasure(modalContentRoot);
  if (item.model) requestAnimationFrame(initModelViewer);
}
function productHeader(item, region = appState.activeReleaseRegion) {
  return modalTitle(productDisplayName(item, region), "product-modal-name");
}
function rareBeyGetMetaChip(item, region = appState.activeReleaseRegion) {
  if (!releaseHasBadge(item, RARE_BEY_GET_BADGE, region)) return "";
  return `<button class="ui-chip-button rare-bey-get-chip rare-bey-get-list-trigger" type="button" aria-label="역대 레어 베이 겟 상품 보기" data-release-region="${escapeAttributeValue(region)}" data-release-series="${escapeAttributeValue(item.series || "")}"><span>레어 베이 겟 목록</span><b aria-hidden="true">→</b></button>`;
}
function productMetaSlot(item = null, region = appState.activeReleaseRegion) {
  const chip = item ? rareBeyGetMetaChip(item, region) : "";
  if (chip) return `<div class="product-meta-slot product-rare-bey-get-slot">${chip}</div>`;
  return `<div class="product-empty-info-slot"></div>`;
}
const productLineupTitle = product => product.lineupTitle || "등장 베이";
const productLineupComposition = (product, part) => {
  const lineupIds = productLineupIds(product);
  if (!lineupIds.length) return false;
  if (part.lineup) return true;
  return Boolean(part.target && lineupIds.includes(part.target) && /무작위|레벨별/.test(part.name || compositionItemLabel(part)));
};
const compositionItemLabel = part => {
  const target = part.target ? findCatalogItemById(part.target) : null;
  if (!target) return "";
  if (target.type === "bey") return "베이";
  if (target.type && typeLabels[target.type]) return partDisplayTypeLabel(target);
  if (target.category) return target.category;
  return "";
};

function itemDisplayName(item, region = appState.activeReleaseRegion, options = {}) {
  const name = region === "jp" ? item.jpName || item.name || "" : item.name || "";
  const sub = options.withSub ? item.sub || "" : "";
  return sub && !name.includes(sub) ? `${name} ${sub}` : name;
}
function itemDisplayDesc(item, region = appState.activeReleaseRegion) {
  return region === "jp" && item.jpDesc ? item.jpDesc : item.desc || "";
}
const compositionDisplayName = name => (name || "").replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
function productComposition(item, region = appState.activeReleaseRegion) {
  const composition = productCompositionItems(item, region);
  if (!composition.length) return "";
  return `<section class="modal-section product-composition"><p class="mounted-title">구성</p><div class="modal-section-scroll product-composition-list">${composition.map(part => {
    const name = compositionDisplayName(part.name || "");
    const quantity = part.quantity || part.qty || "1개";
    if (productLineupComposition(item, part)) return `<button class="ui-list-link product-composition-item product-lineup-trigger" type="button" data-product-id="${item.id}" data-target-id="${part.target || ""}"><span>${name} ${quantity}</span><b>→</b></button>`;
    if (!part.target) return `<div class="ui-list-link product-composition-item"><span>${name} ${quantity}</span><b>→</b></div>`;
    const target = findCatalogItemById(part.target);
    const targetDisplayName = region === "jp" && target ? itemDisplayName(target, region) : "";
    const displayName = targetDisplayName || name || compositionDisplayName(target?.name || "");
    return `<a class="ui-list-link product-composition-item composition-link" href="#${part.target}" data-target-id="${part.target}"><span>${displayName} ${quantity}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
}
const productDetailBody = (item, region = appState.activeReleaseRegion) =>
  productComposition(item, region);
const productLineupItemName = (item, region = appState.activeReleaseRegion) => {
  if (productItemsById.has(item.id)) return productDisplayName(item, region);
  const combo = item.type === "bey" ? partCategory(item) : "";
  const name = itemDisplayName(item, region);
  return combo ? `${name} ${combo}` : name;
};
function productLineup(item, region = appState.activeReleaseRegion) {
  const lineupIds = productLineupIds(item);
  if (!lineupIds.length) return "";
  const lineupItems = lineupIds
    .map(id => findCatalogItemById(id))
    .filter(Boolean);
  if (!lineupItems.length) return "";
  return `<section class="modal-section product-composition"><p class="mounted-title">${productLineupTitle(item)}</p><div class="modal-section-scroll product-composition-list">${lineupItems.map(lineupItem => {
    const name = productLineupItemName(lineupItem, region);
    return `<a class="ui-list-link product-composition-item composition-link" href="#${lineupItem.id}" data-target-id="${lineupItem.id}"><span>${name}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
}
function bindProductCompositionLinks(product, root = document, options = {}) {
  root.querySelectorAll(".product-composition-list").forEach(compositionList => compositionList.addEventListener("click", event => {
    const lineupButton = event.target.closest(".product-lineup-trigger");
    if (lineupButton && compositionList.contains(lineupButton)) {
      event.preventDefault();
      if (!lineupButton.dataset.productId) return;
      queueModalTransition("composition", { sourceElement: lineupButton });
      openProductLineupDetail(lineupButton.dataset.productId, { ...options, skipRoute: true });
      return;
    }
    const link = event.target.closest(".composition-link");
    if (!link || !compositionList.contains(link)) return;
    event.preventDefault();
    const targetId = link.dataset.targetId;
    if (!targetId) return;
    const backOptions = { backProductId: product.id };
    if (options.backRelease) backOptions.backRelease = true;
    if (options.region) backOptions.region = options.region;
    queueModalTransition("composition", { sourceElement: link });
    openDetailByKind("", targetId, backOptions);
  }));
}
const rareBeyGetFinishGroupOrder = ["익스트림피니시", "버스트피니시", "오버피니시", "스핀피니시"];
const rareBeyGetFinishGroup = finish => {
  const value = finish || "";
  return rareBeyGetFinishGroupOrder.find(name => value.includes(name.replace("피니시", ""))) || "";
};
const rareBeyGetFinishRank = entry => {
  const rank = rareBeyGetFinishGroupOrder.indexOf(rareBeyGetFinishGroup(entry?.finish));
  return rank === -1 ? rareBeyGetFinishGroupOrder.length : rank;
};
const sortRareBeyGetCurrentEntries = entries => entries
  .map((entry, index) => ({ entry, index }))
  .sort((a, b) => rareBeyGetFinishRank(a.entry) - rareBeyGetFinishRank(b.entry) || a.index - b.index)
  .map(({ entry }) => entry);
const rareBeyGetEndSortValue = entry => releaseDateSortValue(entry?.endDate || "");
const sortRareBeyGetEndedEntries = entries => entries
  .map((entry, index) => ({ entry, index }))
  .sort((a, b) => {
    const endDiff = rareBeyGetEndSortValue(b.entry) - rareBeyGetEndSortValue(a.entry);
    const startDiff = rareBeyGetEntryStartSortValue(b.entry) - rareBeyGetEntryStartSortValue(a.entry);
    return endDiff || startDiff || a.index - b.index;
  })
  .map(({ entry }) => entry);
const rareBeyGetListDisplayName = name => String(name || "").replace(/^부스터\s+/, "");
const rareBeyGetListItemMarkup = (entry, region = appState.activeReleaseRegion) => {
  const productIds = rareBeyGetEntryProductIds(entry);
  const productId = entry?.productId || "";
  const primaryProduct = productItemsById.get(productId) || productItemsById.get(productIds[0]);
  if (!primaryProduct) return "";
  const entryRegion = rareBeyGetEntryRegion(entry) || region;
  const release = productRelease(primaryProduct, entryRegion);
  const name = entry.name || release.name || productDisplayName(primaryProduct, entryRegion);
  const displayName = rareBeyGetListDisplayName(name);
  const displayNameAttr = escapeAttributeValue(displayName);
  const finish = entry.finish || "";
  const finishBadge = finish ? `<span class="rare-bey-get-list-item-finish">${escapeHtml(finish)}</span>` : "";
  const content = `<span class="rare-bey-get-list-item-main">${finishBadge}<span class="rare-bey-get-list-item-title">${escapeHtml(displayName)}</span></span>`;
  if (!productId) return `<div class="ui-list-link product-composition-item rare-bey-get-list-item rare-bey-get-list-item--static" aria-label="${displayNameAttr}">${content}</div>`;
  return `<a class="ui-list-link product-composition-item rare-bey-get-list-item rare-bey-get-list-link" href="#${productId}" data-product-id="${escapeAttributeValue(productId)}" data-release-region="${escapeAttributeValue(entryRegion)}" aria-label="${escapeAttributeValue(`${displayName} 상세 보기`)}">${content}<b aria-hidden="true">→</b></a>`;
};
const rareBeyGetListSectionMarkup = (title, entries, { region = appState.activeReleaseRegion, current = false } = {}) => {
  if (!entries.length) return "";
  const orderedEntries = current ? sortRareBeyGetCurrentEntries(entries) : sortRareBeyGetEndedEntries(entries);
  const rows = orderedEntries.map(entry => rareBeyGetListItemMarkup(entry, region)).filter(Boolean);
  if (!rows.length) return "";
  return `<section class="product-composition rare-bey-get-list-section${current ? " rare-bey-get-list-section--current" : " rare-bey-get-list-section--ended"}" aria-label="${escapeAttributeValue(`${title} ${rows.length}개`)}">
    <h3 class="mounted-title rare-bey-get-list-panel-title"><span>${escapeHtml(title)}</span> <b>${rows.length}개</b></h3>
    <div class="rare-bey-get-list-group-items">${rows.join("")}</div>
  </section>`;
};
function rareBeyGetListMarkup({ region = appState.activeReleaseRegion, series = appState.activeReleaseSeries } = {}) {
  const entries = visibleRareBeyGetEntries({ region, series });
  const currentEntries = entries.filter(entry => entry?.isCurrent === true);
  const endedEntries = entries.filter(entry => entry?.isCurrent !== true);
  const groups = [
    rareBeyGetListSectionMarkup("현행 경품", currentEntries, { region, current: true }),
    rareBeyGetListSectionMarkup("종료 경품", endedEntries, { region })
  ].filter(Boolean);
  const body = groups.length
    ? groups.join("")
    : `<p class="rare-bey-get-empty">목록 준비 중입니다.</p>`;
  return `<section class="modal-section rare-bey-get-list"><div class="modal-section-scroll rare-bey-get-list-scroll"><div class="rare-bey-get-list-items">${body}</div></div></section>`;
}
function bindRareBeyGetListLinks(root = document, options = {}) {
  root.querySelectorAll(".rare-bey-get-list-link").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const productId = link.dataset.productId;
    if (!productId) return;
    const region = releaseRegionLabels[link.dataset.releaseRegion] ? link.dataset.releaseRegion : options.region;
    queueModalTransition("composition", { sourceElement: link });
    openProductEntry(productId, {
      ...options,
      region,
      backRareBeyGetList: true,
      rareBeyGetListRegion: region,
      rareBeyGetListSeries: options.series || appState.activeReleaseSeries,
      rareBeyGetListBackProductId: options.backProductId || "",
      rareBeyGetListBackRelease: options.backRelease === true
    });
  }));
}
function openRareBeyGetListDetail(options = {}) {
  const { skipRoute = false, ...detailOptions } = options;
  const normalizedRoute = normalizeRoute({ type: "rare-bey-get-list", options: detailOptions });
  const routeOptions = normalizedRoute.options || {};
  const region = routeOptions.region || appState.activeReleaseRegion;
  const series = routeOptions.series || appState.activeReleaseSeries;
  const backProductId = routeOptions.backProductId || "";
  const backRelease = routeOptions.backRelease === true;
  if (!skipRoute && routeIfNeeded(normalizedRoute)) return;
  const modalContentRoot = setModalContent(`<div class="modal-inner modal-inner--rare-bey-get-list">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info">
    ${modalScrollArea(`${modalTitle("레어 베이 겟 목록", "product-modal-name")}
    ${productMetaSlot()}
    <div class="modal-body-block">${rareBeyGetListMarkup({ region, series })}</div>`)}
    ${productBackButton({ backProductId, backRelease, region })}</div></div>`);
  if (!modalContentRoot) return;
  bindCatalogModalBack(modalContentRoot, { fallbackRegion: region });
  bindRareBeyGetListLinks(modalContentRoot, { region, series, backProductId, backRelease });
  finishModalOpen({ contextKind: "rare-bey-get-list", contextId: "rare-bey-get-list", contextOptions: { region, series, backProductId, backRelease }, root: modalContentRoot });
}
function openProductLineupDetail(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  const { skipRoute = false, ...detailOptions } = options;
  if (!skipRoute && routeIfNeeded({ type: "detail", id, options: detailOptions })) return;
  const requestedRegion = releaseRegionLabels[detailOptions.region] ? detailOptions.region : (releaseRegionLabels[appState.activeReleaseRegion] ? appState.activeReleaseRegion : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  appState.activeReleaseRegion = region;
  cleanupModelViewer();
  const backButton = productModalBackButton(item, detailOptions, region);
  const modalContentRoot = setModalContent(`<div class="modal-inner">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info">
    ${modalScrollArea(`${productHeader(item, region)}
    ${productMetaSlot()}
    <div class="modal-body-block">${productLineup(item, region)}</div>`)}
    ${backButton}</div></div>`);
  if (!modalContentRoot) return;
  bindCatalogModalBack(modalContentRoot, { fallbackRegion: region });
  bindProductCompositionLinks(item, modalContentRoot, { ...detailOptions, region });
  finishModalOpen({ contextKind: "product-lineup", contextId: item.id, contextOptions: { ...detailOptions, region }, root: modalContentRoot });
}
function openProductEntry(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  if (item.lineupEntryMode === "lineup-first" && productLineupIds(item).length) {
    openProductLineupDetail(id, options);
    return;
  }
  openProductDetail(id, options);
}
function openProductDetail(id, options = {}) {
  const item = productItemsById.get(id);
  if (!item) return;
  if (routeIfNeeded({ type: "detail", id, options })) return;
  const requestedRegion = releaseRegionLabels[options.region] ? options.region : (releaseRegionLabels[appState.activeReleaseRegion] ? appState.activeReleaseRegion : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  const stepRegion = requestedRegion === "kr" ? "kr" : region;
  appState.activeReleaseRegion = region;
  cleanupModelViewer();
  const backButton = productModalBackButton(item, options, region);
  const productStepSource = productItems.filter(entry => !entry.lineupOnly).sort((a, b) => productSerialNumber(a, stepRegion) - productSerialNumber(b, stepRegion));
  const stepItems = productStepSource.filter(entry => productReleasedInRegion(entry, stepRegion));
  const productInfoClass = releaseHasBadge(item, RARE_BEY_GET_BADGE, region) ? " has-rare-bey-get-chip" : "";
  const modalContentRoot = setModalContent(`${modalStepButtons(stepItems, item.id, "product")}<div class="modal-inner">
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info${productInfoClass}">
    ${modalScrollArea(`${productHeader(item, region)}
    ${productMetaSlot(item, region)}
    <div class="modal-body-block">${productDetailBody(item, region)}</div>`)}${backButton}</div></div>`);
  if (!modalContentRoot) return;
  bindModalStepButtons({ product: { ...options, region: stepRegion } });
  bindCatalogModalBack(modalContentRoot, { fallbackRegion: region });
  bindProductCompositionLinks(item, modalContentRoot, { ...options, region });
  modalContentRoot.querySelector(".rare-bey-get-list-trigger")?.addEventListener("click", event => {
    event.preventDefault();
    const trigger = event.currentTarget;
    const triggerRegion = releaseRegionLabels[trigger.dataset.releaseRegion] ? trigger.dataset.releaseRegion : region;
    const triggerSeries = releaseSeriesLabels[trigger.dataset.releaseSeries] ? trigger.dataset.releaseSeries : item.series;
    queueModalTransition("composition", { sourceElement: trigger });
    openRareBeyGetListDetail({
      region: triggerRegion,
      series: triggerSeries,
      backProductId: item.id,
      backRelease: options.backRelease === true
    });
  });
  finishModalOpen({ contextKind: "product", contextId: item.id, contextOptions: { ...options, region }, root: modalContentRoot });
}
function openSimpleCatalogDetail({ item, options = {}, kind, stepItems, tags = "" }) {
  if (routeIfNeeded({ type: "detail", id: item.id, options })) return;
  cleanupModelViewer();
  const backButton = productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region: options.region });
  const modalContentRoot = setModalContent(`${modalStepButtons(stepItems, item.id, kind)}<div class="modal-inner">
    <div class="modal-art"></div>
    <div class="modal-info part-modal-info">${modalScrollArea(`${modalTitle(itemDisplayName(item, options.region))}
    ${modalInfoSlot(itemDisplayDesc(item, options.region), tags)}<div class="modal-body-block"></div>`)}${backButton}</div></div>`);
  if (!modalContentRoot) return;
  bindModalStepButtons({ [kind]: options });
  bindCatalogModalBack(modalContentRoot);
  finishModalOpen({ contextKind: kind, contextId: item.id, contextOptions: options, root: modalContentRoot });
}
const compareItemsByKoreanName = (a, b) => a.name.localeCompare(b.name, "ko");
const simpleCatalogDetailConfigs = {
  tools: {
    itemsById: toolsItemsById,
    stepItems: item => {
      const visibleItems = visibleToolsItems();
      return visibleItems.some(entry => entry.id === item.id) ? visibleItems : toolsItems.slice().sort(compareToolsItemsByFirstRelease);
    }
  },
  book: {
    itemsById: bookItemsById,
    stepItems: () => bookItems.slice().sort(compareItemsByKoreanName),
    tags: item => modalTagGroup(`<span>${item.category || "도서"}</span>`)
  },
  game: {
    itemsById: gameItemsById,
    stepItems: () => gameItems.slice().sort(compareItemsByKoreanName)
  }
};
function openConfiguredSimpleCatalogDetail(kind, id, options = {}) {
  const config = simpleCatalogDetailConfigs[kind];
  const item = config?.itemsById.get(id);
  if (!item) return;
  openSimpleCatalogDetail({
    item,
    options,
    kind,
    stepItems: config.stepItems(item),
    tags: config.tags?.(item) || ""
  });
}
function openToolsDetail(id, options = {}) {
  openConfiguredSimpleCatalogDetail("tools", id, options);
}
function openBookDetail(id, options = {}) {
  openConfiguredSimpleCatalogDetail("book", id, options);
}
function openGameDetail(id, options = {}) {
  openConfiguredSimpleCatalogDetail("game", id, options);
}
function closeDetail() {
  const targetRoute = getModalCloseRoute();
  const targetScrollY = validScrollY(modalController.scrollY);
  closeModalSession();
  navigateToRoute(targetRoute, { replace: true, preserveScroll: true, preserveSearch: true });
  restorePageScroll(targetScrollY);
}
document.querySelector("#modalClose").addEventListener("click", closeDetail);
document.querySelector("[data-modal-overlay]")?.addEventListener("click", closeDetail);
modal.addEventListener("cancel", event => {
  event.preventDefault();
  if (appState.activeModalTagButton) {
    closeModalTagPopover();
    return;
  }
  closeDetail();
});
modal.addEventListener("close", () => {
  cancelModalViewportSync();
  clearModalLockStyles();
});

registerAppServices({
  cleanupModelViewer,
  finishModalOpen,
  itemDisplayName,
  modal,
  modalBackButtonMarkup,
  openBookDetail,
  openDetail,
  openGameDetail,
  openProductEntry,
  openToolsDetail,
  queueModalTransition,
  routeIfNeeded,
  setModalContent
});


export {
  bindCatalogModalBack,
  closeDetail,
  itemDisplayName,
  openBookDetail,
  openDetail,
  openDetailByKind,
  openGameDetail,
  openProductEntry,
  openRareBeyGetListDetail,
  openToolsDetail
};
