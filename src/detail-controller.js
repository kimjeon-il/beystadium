import { characterUsageGroups } from "#app/character-usage";
import { partDetailDisplayName } from "#app/part-name-core";
import { animeSeasonLabels, isAnimeEpisodeHash } from "#app/anime-core";
import { appState } from "#app/state";
import { animeInfo, bookItems, bookItemsById, catalogCoreItems, catalogCoreItemsById, gameItems, gameItemsById, productItems, productItemsById, toolsItems, toolsItemsById } from "#app/data-store";
import { compareToolsItemsByFirstRelease, partCategory, productLineupIds, productSerialNumber, visibleCatalogCoreItems, visibleToolsItems } from "#app/catalog-model";
import { itemDisplayDesc, itemDisplayName, modalTitle, productDetailBody, productHeader, productLineup, productMetaSlot, rareBeyGetListMarkup } from "#app/detail-content";
import { beyDetailSections, beyModalTags, bindModalTagPopovers, closeModalTagPopover, modalInfoSlot, modalScrollArea, modalTagGroup, partModalTags } from "#app/detail-view";
import { openAnimeEpisodeDetail, openCategoryReleaseDetail } from "#app/feature-loaders";
import { initializeImageLinkPreviews } from "#app/image-preview";
import { bindModalDescriptionExpanders, cancelModalViewportSync, clearModalLockStyles, closeModalSession, finishModalOpen, modal, modalBackButtonMarkup, modalController, partStats, queueModalStepDirection, queueModalTransition, routeIfNeeded, scheduleModalDescriptionMeasure, setModalContent } from "#app/modal-controller";
import { restorePageScroll, validScrollY } from "#app/modal-context";
import { normalizeRoute } from "#app/route-parser";
import { getModalCloseRoute, navigateToRoute } from "#app/navigation";
import { registerAppServices } from "#app/services";
import { escapeAttributeValue, escapeHtml } from "#app/markup-core";
import { RARE_BEY_GET_BADGE, productDisplayRegion, productReleasedInRegion, releaseHasBadge, releaseRegionLabels, releaseSeriesLabels } from "#app/release-core";

initializeImageLinkPreviews();

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
const productModalBackButton = (item, options = {}, region = appState.release.region) => {
  if (options.backRareBeyGetList) return rareBeyGetListBackButton({
    region: options.rareBeyGetListRegion || region,
    series: options.rareBeyGetListSeries || item?.series || appState.release.series,
    backProductId: options.rareBeyGetListBackProductId || "",
    backRelease: options.rareBeyGetListBackRelease === true
  });
  if (options.backId) return detailBackButton(options.backId, options.backProductId, options.backRelease, options.backRegion || region);
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
        region: backOptions.region || appState.release.region,
        series: backOptions.series || appState.release.series,
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
    if (backButton.dataset.backRelease) openCategoryReleaseDetail({ region: backOptions.region || appState.release.region });
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
  if (targetId.startsWith("CHARACTER-")) openCharacterDetail(targetId, options);
  else if (isAnimeEpisodeHash(targetId)) await openAnimeEpisodeDetail(targetId, options);
  else if (kind === "product-lineup") openProductLineupDetail(targetId, options);
  else if (kind === "product" || targetId.startsWith("PRODUCT-")) openProductEntry(targetId, options);
  else if (kind === "tools" || targetId.startsWith("TOOLS-")) openToolsDetail(targetId, options);
  else if (kind === "book" || targetId.startsWith("BOOK-")) openBookDetail(targetId, options);
  else if (kind === "game" || targetId.startsWith("GAME-")) openGameDetail(targetId, options);
  else openDetail(targetId, options);
}
function detailHeading(item, options = {}) {
  if (item.type === "bey") {
    const combo = partCategory(item);
    const name = itemDisplayName(item, options.region);
    return modalTitle(combo ? `${name} ${combo}` : name);
  }
  return modalTitle(partDetailDisplayName(item, options.region));
}
const validReleaseRegion = region => releaseRegionLabels[region] ? region : "";
function catalogDetailRegion(_item, options = {}) {
  return validReleaseRegion(options.region) || "kr";
}
function openDetail(id, options = {}) {
  const item = catalogCoreItemsById.get(id);
  if (!item) return;
  const detailRegion = catalogDetailRegion(item, options);
  const detailOptions = { ...options, region: detailRegion };
  if (routeIfNeeded({ type: "detail", id, options: detailOptions })) return;
  closeModalTagPopover();
  const description = itemDisplayDesc(item, detailRegion);
  const slot = item.type === "bey"
    ? modalInfoSlot(description, beyModalTags(item), "single-line-info-slot")
    : modalInfoSlot(description, partModalTags(item));
  const body = item.type === "bey" ? beyDetailSections(item, detailRegion) : partStats(item);
  const visibleCoreItems = visibleCatalogCoreItems();
  const stepItems = visibleCoreItems.some(entry => entry.id === item.id) ? visibleCoreItems : catalogCoreItems;
  const modalContentRoot = setModalContent(`${modalStepButtons(stepItems, item.id, "item")}<div class="modal-inner modal-inner--content">
    ${detailBackButton(detailOptions.backId, detailOptions.backProductId, detailOptions.backRelease, detailRegion)}
    <div class="modal-info ${item.type === "bey" ? "bey-modal-info" : "part-modal-info"}">
    ${modalScrollArea(`${detailHeading(item, detailOptions)}
    ${slot}<div class="modal-body-block">${body}</div>`)}</div></div>`);
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
  modalContentRoot.querySelectorAll(".bey-product-link, .bey-character-link").forEach(link => link.addEventListener("click", event => {
    event.preventDefault();
    const linkOptions = { backId: item.id, region: detailRegion, backRegion: detailRegion };
    if (detailOptions.backProductId) linkOptions.backProductId = detailOptions.backProductId;
    if (detailOptions.backRelease) linkOptions.backRelease = true;
    queueModalTransition("composition", { sourceElement: link });
    if (link.dataset.productId) openProductEntry(link.dataset.productId, { ...linkOptions, region: link.dataset.releaseRegion });
    else openCharacterDetail(link.dataset.characterId, linkOptions);
  }));
  bindModalTagPopovers(modalContentRoot);
  bindModalDescriptionExpanders(modalContentRoot);
  finishModalOpen({ contextKind: "item", contextId: item.id, contextOptions: detailOptions, root: modalContentRoot });
  scheduleModalDescriptionMeasure(modalContentRoot);
}
function openCharacterDetail(id, options = {}) {
  const character = animeInfo.characters.find(entry => entry.id === id);
  if (!character || routeIfNeeded({ type: "detail", id, options })) return;
  const groups = characterUsageGroups(character);
  const models = groups.map(group => `<section class="modal-section bey-relation-section">
    <h4 class="mounted-title">${escapeHtml(animeSeasonLabels[group.season] || "사용 베이")}</h4>
    <div class="bey-relation-list">${(group.beys || []).map(name => `<span class="bey-relation-badge">${escapeHtml(name)}</span>`).join("")}</div>
  </section>`).join("");
  const root = setModalContent(`<div class="modal-inner modal-inner--content">
    ${detailBackButton(options.backId, options.backProductId, options.backRelease, options.region)}
    <div class="modal-info part-modal-info">${modalScrollArea(`${modalTitle(character.name)}
      ${modalInfoSlot(character.role || "", modalTagGroup(groups.map(group => `<span>${escapeHtml(animeSeasonLabels[group.season] || "등장인물")}</span>`).join("")))}
      <div class="modal-body-block">${models}<p class="stat-note">베이의 사용자 표시는 사용이 확인된 개별 제품에만 연결합니다. 미확인 색상이나 세트판에는 연결하지 않습니다.</p></div>`)}</div></div>`);
  if (!root) return;
  bindCatalogModalBack(root);
  finishModalOpen({ contextKind: "character", contextId: id, contextOptions: options, root });
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
      rareBeyGetListSeries: options.series || appState.release.series,
      rareBeyGetListBackProductId: options.backProductId || "",
      rareBeyGetListBackRelease: options.backRelease === true
    });
  }));
}
function openRareBeyGetListDetail(options = {}) {
  const { skipRoute = false, ...detailOptions } = options;
  const normalizedRoute = normalizeRoute({ type: "rare-bey-get-list", options: detailOptions });
  const routeOptions = normalizedRoute.options || {};
  const region = routeOptions.region || appState.release.region;
  const series = routeOptions.series || appState.release.series;
  const backProductId = routeOptions.backProductId || "";
  const backRelease = routeOptions.backRelease === true;
  if (!skipRoute && routeIfNeeded(normalizedRoute)) return;
  const modalContentRoot = setModalContent(`<div class="modal-inner modal-inner--rare-bey-get-list">
    ${productBackButton({ backProductId, backRelease, region })}
    <div class="modal-art product-modal-art"></div>
    <div class="modal-info product-modal-info">
    ${modalScrollArea(`${modalTitle("레어 베이 겟 목록", "product-modal-name")}
    ${productMetaSlot()}
    <div class="modal-body-block">${rareBeyGetListMarkup({ region, series })}</div>`)}</div></div>`);
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
  const requestedRegion = releaseRegionLabels[detailOptions.region] ? detailOptions.region : (releaseRegionLabels[appState.release.region] ? appState.release.region : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  // A nested product locale must not change the release list behind the modal.
  if (appState.modal.originRoute?.type !== "category-release") appState.release.region = region;
  const backButton = productModalBackButton(item, detailOptions, region);
  const modalContentRoot = setModalContent(`<div class="modal-inner modal-inner--content">
    ${backButton}
    <div class="modal-info product-modal-info">
    ${modalScrollArea(`${productHeader(item, region)}
    ${productMetaSlot()}
    <div class="modal-body-block">${productLineup(item, region)}</div>`)}</div></div>`);
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
  const requestedRegion = releaseRegionLabels[options.region] ? options.region : (releaseRegionLabels[appState.release.region] ? appState.release.region : "kr");
  const region = productDisplayRegion(item, requestedRegion);
  const stepRegion = requestedRegion === "kr" ? "kr" : region;
  // A nested product locale must not change the release list behind the modal.
  if (appState.modal.originRoute?.type !== "category-release") appState.release.region = region;
  const backButton = productModalBackButton(item, options, region);
  const productStepSource = productItems.filter(entry => !entry.lineupOnly).sort((a, b) => productSerialNumber(a, stepRegion) - productSerialNumber(b, stepRegion));
  const stepItems = productStepSource.filter(entry => productReleasedInRegion(entry, stepRegion));
  const productInfoClass = releaseHasBadge(item, RARE_BEY_GET_BADGE, region) ? " has-rare-bey-get-chip" : "";
  const modalContentRoot = setModalContent(`${modalStepButtons(stepItems, item.id, "product")}<div class="modal-inner modal-inner--content">
    ${backButton}
    <div class="modal-info product-modal-info${productInfoClass}">
    ${modalScrollArea(`${productHeader(item, region)}
    ${productMetaSlot(item, region)}
    <div class="modal-body-block">${productDetailBody(item, region)}</div>`)}</div></div>`);
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
  const backButton = productBackButton({ backProductId: options.backProductId, backRelease: options.backRelease, region: options.region });
  const modalContentRoot = setModalContent(`${modalStepButtons(stepItems, item.id, kind)}<div class="modal-inner modal-inner--content">
    ${backButton}
    <div class="modal-info part-modal-info">${modalScrollArea(`${modalTitle(itemDisplayName(item, options.region))}
    ${modalInfoSlot(itemDisplayDesc(item, options.region), tags)}<div class="modal-body-block"></div>`)}</div></div>`);
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
  if (appState.modal.activeTagButton) {
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
  itemDisplayName,
  openBookDetail,
  openDetail,
  openDetailByKind,
  openGameDetail,
  openProductEntry,
  openRareBeyGetListDetail,
  openToolsDetail
};
