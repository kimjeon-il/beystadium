import { appState } from "#app/state";
import {
  bookItemsById,
  catalogCoreItemOrder,
  catalogCoreItems,
  catalogCoreItemsById,
  gameItemsById,
  partItems,
  productItems,
  productItemsById,
  toolsItemOrder,
  toolsItems,
  toolsItemsById
} from "#app/data-store";
import {
  productRelease,
  productReleaseValue,
  productReleasedInRegion,
  releaseDateSortValue,
  releaseRegionLabels,
  releaseSeriesOrder
} from "#app/release-core";
import {
  catalogItemSearchFields,
  catalogSearchQuery,
  createSearchRecord,
  matchSearchRecord,
  prepareCatalogSearchQuery,
  toolsSearchFields
} from "#app/search-engine";
import { partDisplayTypeLabel } from "#app/ui-core";

const catalogSourceOrder = item => {
  if (!item || typeof item !== "object") return Number.MAX_SAFE_INTEGER;
  const toolsOrder = toolsItemOrder.get(item);
  if (toolsOrder !== undefined) return 100000 + toolsOrder;
  const coreOrder = catalogCoreItemOrder.get(item);
  return coreOrder !== undefined ? coreOrder : Number.MAX_SAFE_INTEGER;
};
const zeroGBottomStartIndex = () => partItems.findIndex(item => item.id === "BOTTOM-CIRCLE-FLAT");
const findCatalogItemById = id => catalogCoreItemsById.get(id) || toolsItemsById.get(id) || bookItemsById.get(id) || gameItemsById.get(id) || productItemsById.get(id) || null;

const cardVisualMarkup = item => item.image
  ? `<img class="bey-image" src="${item.image}" alt="${item.name}" />`
  : "";
const modalArtMarkup = item => item.model
  ? `<div class="model-viewer" data-model="${item.model}"><p>3D 모델 로딩 중</p></div>`
  : cardVisualMarkup(item);
const partCategory = item => item.sub || "";
const catalogCardTypeLabel = item => partDisplayTypeLabel(item);
const catalogCardTitle = (label, title, className = "") => {
  const titleClass = ["card-name", className].filter(Boolean).join(" ");
  return `
    <h3 class="${titleClass}">
      <span class="catalog-card-badge">${label}</span>
      <span class="catalog-card-title">${title}</span>
    </h3>`;
};
const codedPartNameTypes = ["track", "bottom", "4dbottom", "disk", "coredisk", "frame", "dbdisk", "dbarmor", "driver", "bit", "superkingchassis"];
const partKoName = item => {
  if (!codedPartNameTypes.includes(item.type)) return "";
  const detail = item.sub || "";
  return detail.includes("높이") ? "" : detail;
};
const wheelTypes = ["wheel", "clearwheel", "4dclearwheel", "lightwheel", "metalwheel", "4dmetalwheel", "chromewheel", "crystalwheel"];
const cardInfo = item => {
  if (codedPartNameTypes.includes(item.type)) {
    const fullEn = item.type === "track" && /^\d+$/.test(item.name) ? "&nbsp;" : item.en;
    return `${catalogCardTitle(catalogCardTypeLabel(item), item.name, "code-name")}<p class="card-full-en">${fullEn}</p><p class="card-full-ko">${partKoName(item) || "&nbsp;"}</p>`;
  }
  if (item.type === "bey") {
    const combo = partCategory(item);
    const suffix = combo ? ` ${combo}` : "";
    return `${catalogCardTitle(catalogCardTypeLabel(item), `${item.name}${suffix}`)}<p class="card-full-en">${item.en}${suffix}</p><p class="card-full-ko">&nbsp;</p>`;
  }
  if (wheelTypes.includes(item.type)) {
    return `${catalogCardTitle(catalogCardTypeLabel(item), item.name)}<p class="card-full-en">${item.en}</p><p class="card-full-ko">&nbsp;</p>`;
  }
  if (["face", "stoneface"].includes(item.type)) {
    return `${catalogCardTitle(catalogCardTypeLabel(item), item.name)}<p class="card-full-en">${item.en}</p><p class="card-full-ko">&nbsp;</p>`;
  }
  return `${catalogCardTitle(catalogCardTypeLabel(item), item.name)}<p class="card-en">${item.en}</p>`;
};

const catalogSearchRecordCache = new WeakMap();
const catalogListSearchRecord = item => {
  if (!item || typeof item !== "object") return createSearchRecord("catalog-item", item, [], 0);
  const cached = catalogSearchRecordCache.get(item);
  if (cached) return cached;
  const isToolsItem = toolsItemsById.has(item.id);
  const order = catalogSourceOrder(item);
  const record = createSearchRecord(isToolsItem ? "tools" : "catalog-item", item, isToolsItem ? toolsSearchFields(item, { includeSeries: false }) : catalogItemSearchFields(item, { includeSeries: false }), order);
  catalogSearchRecordCache.set(item, record);
  return record;
};
const catalogListSearchScore = (item, query) => matchSearchRecord(catalogListSearchRecord(item), query).score;

const productSerialNumber = (item, region = appState.activeReleaseRegion) => {
  const no = productReleaseValue(item, "no", region) || item.no || "";
  const match = no.match(/BB-(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};
const compareProductReleaseOrder = (a, b, region = appState.activeReleaseRegion) => {
  const releaseA = productRelease(a, region);
  const releaseB = productRelease(b, region);
  const dateDiff = releaseDateSortValue(releaseA.releaseDate || releaseA.release) - releaseDateSortValue(releaseB.releaseDate || releaseB.release);
  if (dateDiff) return dateDiff;
  const serialDiff = productSerialNumber(a, region) - productSerialNumber(b, region);
  if (serialDiff) return serialDiff;
  return (releaseA.no || a.no || "").localeCompare(releaseB.no || b.no || "", "ko", { numeric: true });
};
const toolsCard = item => `
  <button class="ui-card-button category-card catalog-card product-card" data-tools-id="${item.id}">
    <div class="catalog-card-visual"></div>
    ${catalogCardTitle(item.category, item.name)}
    <p class="card-full-en">${item.en}</p>
    <p class="card-full-ko">&nbsp;</p>
  </button>`;
function productCompositionItems(item, region = appState.activeReleaseRegion) {
  const release = productRelease(item, region);
  const releaseComposition = Array.isArray(release.composition) && release.composition.length ? release.composition : null;
  const regionComposition = releaseComposition || (region === "jp" ? item.compositionJp || item.compositionJapan : item.compositionKr || item.compositionKorea);
  const krReleaseComposition = Array.isArray(item.releases?.kr?.composition) && item.releases.kr.composition.length ? item.releases.kr.composition : null;
  const baseComposition = region === "jp" ? item.composition || krReleaseComposition : region === "kr" ? item.composition : null;
  return regionComposition || baseComposition || [];
}
const productLineupIds = product => Array.isArray(product?.lineupPool) ? product.lineupPool : [];
const compareCatalogFirstReleaseMeta = (a, b) =>
  a.dateSort - b.dateSort ||
  a.productIndex - b.productIndex ||
  a.compositionIndex - b.compositionIndex ||
  a.regionIndex - b.regionIndex;
const firstReleaseMetaMapCache = new Map();
const firstReleaseMetaMap = (cacheKey, { matchesTarget, includeLineupTargets = false }) => {
  const cached = firstReleaseMetaMapCache.get(cacheKey);
  if (cached) return cached;
  const map = new Map();
  const rememberReleaseMeta = (target, meta) => {
    if (!matchesTarget(target)) return;
    const prev = map.get(target);
    if (!prev || compareCatalogFirstReleaseMeta(meta, prev) < 0) map.set(target, meta);
  };
  productItems.forEach((product, productIndex) => {
    Object.keys(releaseRegionLabels).forEach((region, regionIndex) => {
      if (!productReleasedInRegion(product, region)) return;
      const release = productRelease(product, region);
      const dateSort = releaseDateSortValue(release.releaseDate || release.release);
      if (dateSort === Number.MAX_SAFE_INTEGER) return;
      productCompositionItems(product, region).forEach((part, compositionIndex) => {
        rememberReleaseMeta(part.target, { dateSort, productIndex, compositionIndex, regionIndex });
      });
      if (!includeLineupTargets) return;
      productLineupIds(product).forEach((target, lineupIndex) => {
        rememberReleaseMeta(target, { dateSort, productIndex, compositionIndex: 1000 + lineupIndex, regionIndex });
      });
    });
  });
  firstReleaseMetaMapCache.set(cacheKey, map);
  return map;
};
const toolsFirstReleaseMetaMap = () => firstReleaseMetaMap("tools", {
  matchesTarget: target => target?.startsWith("TOOLS-") && toolsItemsById.has(target)
});
const compareToolsItemsByFirstRelease = (a, b) => {
  const metaA = toolsFirstReleaseMetaMap().get(a.id);
  const metaB = toolsFirstReleaseMetaMap().get(b.id);
  if (metaA && metaB) {
    const metaDiff = compareCatalogFirstReleaseMeta(metaA, metaB);
    if (metaDiff) return metaDiff;
  } else if (metaA || metaB) {
    return metaA ? -1 : 1;
  }
  return a.name.localeCompare(b.name, "ko");
};
const catalogCoreFirstReleaseMetaMap = () => firstReleaseMetaMap("catalog-core", {
  matchesTarget: target => catalogCoreItemsById.has(target),
  includeLineupTargets: true
});
const catalogFirstReleaseMeta = item => {
  if (!item?.id) return null;
  const meta = toolsItemsById.has(item.id)
    ? toolsFirstReleaseMetaMap().get(item.id)
    : catalogCoreFirstReleaseMetaMap().get(item.id);
  return meta?.dateSort === Number.MAX_SAFE_INTEGER ? null : meta || null;
};
const compareCatalogItemsByLatestRelease = (a, b) => {
  const metaA = catalogFirstReleaseMeta(a);
  const metaB = catalogFirstReleaseMeta(b);
  if (metaA && metaB) {
    const dateDiff = metaB.dateSort - metaA.dateSort;
    if (dateDiff) return dateDiff;
    return 0;
  }
  if (metaA || metaB) return metaA ? -1 : 1;
  return 0;
};
const catalogProductPrefixRank = {
  B: 1,
  BB: 1,
  BBG: 2,
  BX: 1,
  UX: 2,
  CX: 3
};
const catalogLatestSeriesRank = item => {
  const order = [...releaseSeriesOrder()].reverse();
  const index = order.indexOf(item?.series);
  return index >= 0 ? index : order.length;
};
const catalogToolFirstReleaseProductNo = item => {
  const meta = toolsFirstReleaseMetaMap().get(item?.id);
  const product = Number.isInteger(meta?.productIndex) ? productItems[meta.productIndex] : null;
  if (!product) return "";
  const region = Object.keys(releaseRegionLabels)[meta.regionIndex] || appState.activeReleaseRegion;
  const release = productRelease(product, region);
  return release.no || product.no || "";
};
const catalogProductNumberKey = item => {
  const source = [
    item?.productNo,
    item?.no,
    toolsItemsById.has(item?.id) ? catalogToolFirstReleaseProductNo(item) : "",
    item?.id
  ].filter(Boolean).join(" ");
  const match = source.match(/\b(BBG|BX|UX|CX|BB|B)[-_\s]?(\d+)/i);
  if (!match) return null;
  const prefix = match[1].toUpperCase();
  return {
    prefixRank: catalogProductPrefixRank[prefix] || 0,
    number: Number(match[2]) || 0
  };
};
const compareCatalogProductNumberKeys = (a, b) => {
  if (a && b) {
    const prefixDiff = b.prefixRank - a.prefixRank;
    if (prefixDiff) return prefixDiff;
    return b.number - a.number;
  }
  if (a || b) return a ? -1 : 1;
  return 0;
};
const compareCatalogProductNumberKeysAsc = (a, b) => {
  if (a && b) {
    const prefixDiff = a.prefixRank - b.prefixRank;
    if (prefixDiff) return prefixDiff;
    return a.number - b.number;
  }
  if (a || b) return a ? -1 : 1;
  return 0;
};
const compareCatalogItemsByOldestRelease = (a, b) => {
  const metaA = catalogFirstReleaseMeta(a);
  const metaB = catalogFirstReleaseMeta(b);
  if (metaA && metaB) {
    const dateDiff = metaA.dateSort - metaB.dateSort;
    if (dateDiff) return dateDiff;
    return 0;
  }
  if (metaA || metaB) return metaA ? -1 : 1;
  return 0;
};
const compareCatalogItemsByLatest = (a, b) => {
  const seriesDiff = catalogLatestSeriesRank(a) - catalogLatestSeriesRank(b);
  if (seriesDiff) return seriesDiff;
  const releaseDiff = compareCatalogItemsByLatestRelease(a, b);
  if (releaseDiff) return releaseDiff;
  const numberDiff = compareCatalogProductNumberKeys(catalogProductNumberKey(a), catalogProductNumberKey(b));
  if (numberDiff) return numberDiff;
  const orderDiff = catalogSourceOrder(b) - catalogSourceOrder(a);
  if (orderDiff) return orderDiff;
  return (a?.name || "").localeCompare(b?.name || "", "ko", { numeric: true });
};
const compareCatalogItemsByOldest = (a, b) => {
  const seriesDiff = catalogLatestSeriesRank(b) - catalogLatestSeriesRank(a);
  if (seriesDiff) return seriesDiff;
  const releaseDiff = compareCatalogItemsByOldestRelease(a, b);
  if (releaseDiff) return releaseDiff;
  const numberDiff = compareCatalogProductNumberKeysAsc(catalogProductNumberKey(a), catalogProductNumberKey(b));
  if (numberDiff) return numberDiff;
  const orderDiff = catalogSourceOrder(a) - catalogSourceOrder(b);
  if (orderDiff) return orderDiff;
  return (a?.name || "").localeCompare(b?.name || "", "ko", { numeric: true });
};
const compareCatalogItemsByNumberAsc = (a, b) => {
  const numberDiff = compareCatalogProductNumberKeysAsc(catalogProductNumberKey(a), catalogProductNumberKey(b));
  if (numberDiff) return numberDiff;
  return compareCatalogItemsByLatest(a, b);
};
const compareCatalogItemsByNumberDesc = (a, b) => {
  const numberDiff = compareCatalogProductNumberKeys(catalogProductNumberKey(a), catalogProductNumberKey(b));
  if (numberDiff) return numberDiff;
  return compareCatalogItemsByLatest(a, b);
};
const catalogSortOptions = [
  { value: "no-asc", label: "번호순 ↑", compare: compareCatalogItemsByNumberAsc },
  { value: "no-desc", label: "번호순 ↓", compare: compareCatalogItemsByNumberDesc },
  { value: "latest", label: "최신순", compare: compareCatalogItemsByLatest },
  { value: "oldest", label: "오래된순", compare: compareCatalogItemsByOldest }
];
const activeCatalogSortOption = () => catalogSortOptions.find(option => option.value === appState.activeCatalogSort) || catalogSortOptions[2];
const compareCatalogItemsByActiveSort = (a, b) => activeCatalogSortOption().compare(a, b);
const catalogHasSearchQuery = () => Boolean(catalogSearchQuery());
const catalogHasSeriesFilter = () => appState.selectedCatalogSeries !== "all";
const catalogItemMatchesSeries = item => !catalogHasSeriesFilter() || item?.series === appState.selectedCatalogSeries;
const catalogUsesDefaultBrowseSet = query => !appState.selectedCatalogKind && (query ? query.isEmpty : !catalogHasSearchQuery());
const CATALOG_VISIBLE_ITEMS_CACHE_LIMIT = 48;
const catalogVisibleItemsCache = new Map();
const cacheCatalogVisibleItems = (key, factory) => {
  const cached = catalogVisibleItemsCache.get(key);
  if (cached) return cached;
  if (catalogVisibleItemsCache.size >= CATALOG_VISIBLE_ITEMS_CACHE_LIMIT) {
    catalogVisibleItemsCache.delete(catalogVisibleItemsCache.keys().next().value);
  }
  const items = factory();
  catalogVisibleItemsCache.set(key, items);
  return items;
};
const catalogVisibleCacheKey = bucket => `${bucket}|${catalogRenderKey()}`;
const sortCatalogEntries = entries => entries
  .sort((a, b) => compareCatalogItemsByActiveSort(a.item, b.item))
  .map(entry => entry.item);
const visibleCatalogSubsetItems = ({ bucket, items, includeItem }) =>
  cacheCatalogVisibleItems(catalogVisibleCacheKey(bucket), () => {
    const query = prepareCatalogSearchQuery(catalogSearchQuery());
    return sortCatalogEntries(items
      .map(item => {
        if (!includeItem(item, query)) return null;
        const score = query.isEmpty ? 0 : catalogListSearchScore(item, query);
        return query.isEmpty || score > 0 ? { item, score } : null;
      })
      .filter(Boolean));
  });
const visibleToolsItems = () => visibleCatalogSubsetItems({
  bucket: "tools",
  items: toolsItems,
  includeItem: (item, query) => catalogItemMatchesSeries(item) && (
    appState.selectedCatalogKind === "tools" ||
    (!appState.selectedCatalogKind && !query.isEmpty)
  )
});
const visibleCatalogCoreItems = () => visibleCatalogSubsetItems({
  bucket: "core",
  items: catalogCoreItems,
  includeItem: (item, query) => {
    if (appState.selectedCatalogKind === "tools" || !catalogItemMatchesSeries(item)) return false;
    const useDefaultBrowseSet = catalogUsesDefaultBrowseSet(query);
    const effectiveCatalogItemType = useDefaultBrowseSet ? "bey" : appState.selectedCatalogKind || "all";
    if (effectiveCatalogItemType === "bey" && item.type !== "bey") return false;
    if (effectiveCatalogItemType === "parts" && item.type === "bey") return false;
    return true;
  }
});
const visibleCatalogItems = () => {
  const cacheKey = catalogVisibleCacheKey("all");
  return cacheCatalogVisibleItems(cacheKey, () => {
    const query = prepareCatalogSearchQuery(catalogSearchQuery());
    return sortCatalogEntries([...visibleCatalogCoreItems(), ...visibleToolsItems()]
    .map(item => {
      const score = query.isEmpty ? 0 : catalogListSearchScore(item, query);
      return query.isEmpty || score > 0 ? { item, score } : null;
    })
    .filter(Boolean));
  });
};

const catalogRenderKey = () => [
  appState.selectedCatalogKind || "",
  appState.selectedCatalogSeries || "all",
  appState.activeCatalogSort,
  catalogSearchQuery()
].join("|");

export {
  activeCatalogSortOption,
  cardInfo,
  cardVisualMarkup,
  catalogCardTitle,
  catalogRenderKey,
  catalogSortOptions,
  catalogSourceOrder,
  catalogVisibleItemsCache,
  codedPartNameTypes,
  compareProductReleaseOrder,
  compareToolsItemsByFirstRelease,
  findCatalogItemById,
  modalArtMarkup,
  partCategory,
  partKoName,
  productCompositionItems,
  productLineupIds,
  productSerialNumber,
  toolsCard,
  visibleCatalogCoreItems,
  visibleCatalogItems,
  visibleToolsItems,
  zeroGBottomStartIndex
};
