import { appState } from "#app/state";
import { productItemsById } from "#app/data-store";
import { findCatalogItemById, partCategory, productCompositionItems, productLineupIds } from "#app/catalog-model";
import { escapeAttributeValue, escapeHtml } from "#app/markup-core";
import { RARE_BEY_GET_BADGE, productDisplayName, productRelease, rareBeyGetEntryProductIds, rareBeyGetEntryRegion, rareBeyGetEntryStartSortValue, releaseDateSortValue, releaseHasBadge, visibleRareBeyGetEntries } from "#app/release-core";
import { partDisplayTypeLabel, typeLabels } from "#app/catalog-metadata";

const modalTitle = (text, extraClass = "") => {
  const className = ["modal-name", extraClass].filter(Boolean).join(" ");
  return `<h3 class="${className}">${escapeHtml(text)}</h3>`;
};

function productHeader(item, region = appState.release.region) {
  return modalTitle(productDisplayName(item, region), "product-modal-name");
}
function rareBeyGetMetaChip(item, region = appState.release.region) {
  if (!releaseHasBadge(item, RARE_BEY_GET_BADGE, region)) return "";
  return `<button class="ui-chip-button rare-bey-get-chip rare-bey-get-list-trigger" type="button" aria-label="역대 레어 베이 겟 상품 보기" data-release-region="${escapeAttributeValue(region)}" data-release-series="${escapeAttributeValue(item.series || "")}"><span>레어 베이 겟 목록</span><b aria-hidden="true">→</b></button>`;
}
function productMetaSlot(item = null, region = appState.release.region) {
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

function itemDisplayName(item, region = appState.release.region, options = {}) {
  const name = region === "jp" ? item.jpName || item.name || "" : item.name || "";
  const sub = options.withSub ? item.sub || "" : "";
  return sub && !name.includes(sub) ? `${name} ${sub}` : name;
}
function itemDisplayDesc(item, region = appState.release.region) {
  return region === "jp" && item.jpDesc ? item.jpDesc : item.desc || "";
}
const compositionDisplayName = name => (name || "").replace(/\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
function productComposition(item, region = appState.release.region) {
  const composition = productCompositionItems(item, region);
  if (!composition.length) return "";
  return `<section class="modal-section product-composition"><h4 class="mounted-title">구성</h4><div class="modal-section-scroll product-composition-list">${composition.map(part => {
    const name = compositionDisplayName(part.name || "");
    const quantity = part.quantity || part.qty || "1개";
    if (productLineupComposition(item, part)) return `<button class="ui-list-link product-composition-item product-lineup-trigger" type="button" data-product-id="${item.id}" data-target-id="${part.target || ""}" data-image-preview-id="${part.target || ""}"><span>${name} ${quantity}</span><b>→</b></button>`;
    if (!part.target) return `<div class="ui-list-link product-composition-item"><span>${name} ${quantity}</span><b>→</b></div>`;
    const target = findCatalogItemById(part.target);
    const targetDisplayName = region === "jp" && target ? itemDisplayName(target, region) : "";
    const displayName = targetDisplayName || name || compositionDisplayName(target?.name || "");
    return `<a class="ui-list-link product-composition-item composition-link" href="#${part.target}" data-target-id="${part.target}" data-image-preview-id="${part.target}"><span>${displayName} ${quantity}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
}
const productDetailBody = (item, region = appState.release.region) =>
  productComposition(item, region);
const productLineupItemName = (item, region = appState.release.region) => {
  if (productItemsById.has(item.id)) return productDisplayName(item, region);
  const combo = item.type === "bey" ? partCategory(item) : "";
  const name = itemDisplayName(item, region);
  const displayName = combo ? `${name} ${combo}` : name;
  const bundledNames = (item.bundledParts || []).map(partId => {
    const part = findCatalogItemById(partId);
    return part ? `${itemDisplayName(part, region)} ${partDisplayTypeLabel(part)}` : "";
  }).filter(Boolean);
  return bundledNames.length ? `${displayName} + ${bundledNames.join(" + ")}` : displayName;
};
function productLineup(item, region = appState.release.region) {
  const lineupIds = productLineupIds(item);
  if (!lineupIds.length) return "";
  const lineupItems = lineupIds
    .map(id => findCatalogItemById(id))
    .filter(Boolean);
  if (!lineupItems.length) return "";
  return `<section class="modal-section product-composition"><h4 class="mounted-title">${productLineupTitle(item)}</h4><div class="modal-section-scroll product-composition-list">${lineupItems.map(lineupItem => {
    const name = productLineupItemName(lineupItem, region);
    return `<a class="ui-list-link product-composition-item composition-link" href="#${lineupItem.id}" data-target-id="${lineupItem.id}" data-image-preview-id="${lineupItem.id}"><span>${name}</span><b>→</b></a>`;
  }).join("")}</div></section>`;
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
const rareBeyGetListItemMarkup = (entry, region = appState.release.region) => {
  const productIds = rareBeyGetEntryProductIds(entry);
  const productId = entry?.productId || "";
  const primaryProduct = productItemsById.get(productId) || productItemsById.get(productIds[0]);
  if (!primaryProduct) return "";
  const entryRegion = rareBeyGetEntryRegion(entry) || region;
  const release = productRelease(primaryProduct, entryRegion);
  const name = entry.name || release.name || productDisplayName(primaryProduct, entryRegion);
  const displayName = rareBeyGetListDisplayName(name);
  const finish = entry.finish || "";
  const finishBadge = finish ? `<span class="rare-bey-get-list-item-finish">${escapeHtml(finish)}</span>` : "";
  const content = `<span class="rare-bey-get-list-item-main">${finishBadge}<span class="rare-bey-get-list-item-title">${escapeHtml(displayName)}</span></span>`;
  if (!productId) return `<div class="ui-list-link product-composition-item rare-bey-get-list-item rare-bey-get-list-item--static">${content}</div>`;
  return `<a class="ui-list-link product-composition-item rare-bey-get-list-item rare-bey-get-list-link" href="#${productId}" data-product-id="${escapeAttributeValue(productId)}" data-release-region="${escapeAttributeValue(entryRegion)}" data-image-preview-product-id="${escapeAttributeValue(productId)}" data-image-preview-region="${escapeAttributeValue(entryRegion)}" aria-label="${escapeAttributeValue(`${displayName} 상세 보기`)}">${content}<b aria-hidden="true">→</b></a>`;
};
const rareBeyGetListSectionMarkup = (title, entries, { region = appState.release.region, current = false } = {}) => {
  if (!entries.length) return "";
  const orderedEntries = current ? sortRareBeyGetCurrentEntries(entries) : sortRareBeyGetEndedEntries(entries);
  const rows = orderedEntries.map(entry => rareBeyGetListItemMarkup(entry, region)).filter(Boolean);
  if (!rows.length) return "";
  return `<section class="product-composition rare-bey-get-list-section${current ? " rare-bey-get-list-section--current" : " rare-bey-get-list-section--ended"}">
    <h4 class="mounted-title rare-bey-get-list-panel-title"><span>${escapeHtml(title)}</span> <b>${rows.length}개</b></h4>
    <div class="rare-bey-get-list-group-items">${rows.join("")}</div>
  </section>`;
};
function rareBeyGetListMarkup({ region = appState.release.region, series = appState.release.series } = {}) {
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
  return `<div class="modal-section rare-bey-get-list"><div class="modal-section-scroll rare-bey-get-list-scroll"><div class="rare-bey-get-list-items">${body}</div></div></div>`;
}

export {
  itemDisplayDesc,
  itemDisplayName,
  modalTitle,
  productDetailBody,
  productHeader,
  productLineup,
  productMetaSlot,
  rareBeyGetListMarkup
};
