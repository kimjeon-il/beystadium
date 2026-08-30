import { appState } from "#app/state";
import { BeystadiumDataStore, productItems, productItemsById, rareBeyGetItems } from "#app/data-store";
import { tableListControlsMarkup } from "#app/table-list-view";
import { tabButtonMarkup } from "#app/ui-markup";

const releaseRegionLabels = {
  kr: "한국",
  jp: "일본"
};
const releaseSeriesLabels = {
  topblade: "탑블레이드",
  "metal fight": "메탈베이블레이드",
  burst: "베이블레이드 버스트",
  x: "베이블레이드 X"
};
const releaseSeriesOrderValues = Object.freeze(Object.keys(releaseSeriesLabels));
const productDisplayFallbackRegionValues = Object.freeze({
  kr: Object.freeze(["kr", "jp"]),
  jp: Object.freeze(["jp", "kr"])
});
const RARE_BEY_GET_BADGE = "rare-bey-get";
const releaseBadgeDefinitions = {
  [RARE_BEY_GET_BADGE]: {
    label: "레어 베이 겟",
    aliases: ["레어 베이 겟", "레어베이겟", "레어 베이", "rare bey get"]
  }
};
const releaseBadgeLabel = badge => releaseBadgeDefinitions[badge]?.label || "";
const releaseBadgeSearchTerms = badge => {
  const definition = releaseBadgeDefinitions[badge];
  return definition ? [definition.label, ...(definition.aliases || [])].filter(Boolean) : [];
};
const rareBeyGetEntryProductIds = entry => {
  const singleProductId = entry?.productId ? [entry.productId] : [];
  const groupedProductIds = Array.isArray(entry?.productIds) ? entry.productIds : [];
  return [...new Set([...singleProductId, ...groupedProductIds].filter(Boolean))];
};
const rareBeyGetEntryRegion = entry => releaseRegionLabels[entry?.region] ? entry.region : "";
const rareBeyGetEntryMatchesProduct = (entry, item, region = appState.release.region) => {
  const entryRegion = rareBeyGetEntryRegion(entry);
  return rareBeyGetEntryProductIds(entry).includes(item.id) && (!entryRegion || entryRegion === region);
};
const rareBeyGetEntryForProduct = (item, region = appState.release.region) =>
  rareBeyGetItems.find(entry => rareBeyGetEntryMatchesProduct(entry, item, region)) || null;
const releaseBadges = (item, region = appState.release.region) => {
  const release = productRelease(item, region);
  const explicitBadges = Array.isArray(release.badges) ? release.badges : [];
  const derivedBadges = rareBeyGetEntryForProduct(item, region) ? [RARE_BEY_GET_BADGE] : [];
  return [...new Set([...explicitBadges, ...derivedBadges])].filter(releaseBadgeLabel);
};
const releaseHasBadge = (item, badge, region = appState.release.region) => releaseBadges(item, region).includes(badge);
const releaseBadgeSearchText = (item, region = appState.release.region) =>
  releaseBadges(item, region).flatMap(releaseBadgeSearchTerms).join(" ");
const rareBeyGetEntryProducts = entry =>
  rareBeyGetEntryProductIds(entry).map(id => productItemsById.get(id)).filter(Boolean);
const rareBeyGetEntryStartSortValue = entry => releaseDateSortValue(entry?.startDate || "");
const rareBeyGetEntryCurrentSortValue = entry => entry?.isCurrent === true ? 0 : 1;
const rareBeyGetListEntryMatchesContext = (entry, { region = appState.release.region, series = appState.release.series } = {}) => {
  const products = rareBeyGetEntryProducts(entry);
  if (!products.length) return false;
  const entryRegion = rareBeyGetEntryRegion(entry);
  if (entryRegion && entryRegion !== region) return false;
  return !series || products.some(product => product.series === series);
};
const visibleRareBeyGetEntries = ({ region = appState.release.region, series = appState.release.series } = {}) =>
  rareBeyGetItems
    .filter(entry => rareBeyGetListEntryMatchesContext(entry, { region, series }))
    .slice()
    .sort((a, b) => {
      const currentDiff = rareBeyGetEntryCurrentSortValue(a) - rareBeyGetEntryCurrentSortValue(b);
      return currentDiff || rareBeyGetEntryStartSortValue(a) - rareBeyGetEntryStartSortValue(b);
    });
const normalizeProductKind = kind => kind === "기타" ? "" : kind || "";
const baseProductRelease = item => ({
  status: "released",
  no: item.no || "",
  name: item.name || "",
  sale: item.sale || "",
  kind: normalizeProductKind(item.kind),
  tools: item.tools || "",
  releaseDate: item.releaseDate || item.release || "",
  price: item.price || "",
  composition: item.composition || []
});
const blankProductRelease = () => ({
  status: "unreleased",
  no: "",
  name: "",
  sale: "",
  kind: "",
  tools: "",
  releaseDate: "",
  price: "",
  composition: []
});
let productReleaseCache = new WeakMap();
const resolveProductRelease = (item, region) => {
  const base = baseProductRelease(item);
  const blank = blankProductRelease();
  if (!item.releases) return region === "kr" ? base : blank;
  const release = item.releases?.[region];
  if (!release) return region === "kr" ? base : blank;
  if (release.status === "unreleased") return blank;
  const merged = { ...(region === "kr" ? base : blank), ...release, status: release.status || "released" };
  return { ...merged, kind: normalizeProductKind(merged.kind) };
};
const productRelease = (item, region = appState.release.region) => {
  let releasesByRegion = productReleaseCache.get(item);
  if (!releasesByRegion) {
    releasesByRegion = new Map();
    productReleaseCache.set(item, releasesByRegion);
  }
  if (!releasesByRegion.has(region)) releasesByRegion.set(region, resolveProductRelease(item, region));
  return releasesByRegion.get(region);
};
window.addEventListener("beystadium:data-loaded", () => { productReleaseCache = new WeakMap(); });
const productReleaseValue = (item, key, region = appState.release.region) => productRelease(item, region)[key] || "";
const productReleasedInRegion = (item, region = appState.release.region) => productRelease(item, region).status !== "unreleased";
const releaseSeriesOrder = () => releaseSeriesOrderValues;
const releaseSeriesHasProducts = (series, region = appState.release.region) => releaseSeriesLabels[series] && productItems.some(item =>
  !item.lineupOnly && item.series === series && productReleasedInRegion(item, region)
);
const defaultReleaseSeries = (region = appState.release.region) => [...releaseSeriesOrder()].reverse().find(series =>
  releaseSeriesHasProducts(series, region)
) || BeystadiumDataStore?.defaultReleaseSeries(region) || releaseSeriesOrder()[0] || "metal fight";
const releaseSeriesForRegion = (series, region = appState.release.region) =>
  releaseSeriesHasProducts(series, region) ? series : defaultReleaseSeries(region);
const productDisplayFallbackRegions = (region = "kr") =>
  productDisplayFallbackRegionValues[region] || productDisplayFallbackRegionValues.kr;
const productDisplayRegion = (item, region = "kr") =>
  productDisplayFallbackRegions(region).find(candidate => productReleasedInRegion(item, candidate)) || region;
const productDisplayRelease = (item, region = "kr") => productRelease(item, productDisplayRegion(item, region));
const seriesLabels = { topblade: "탑블레이드", "metal fight": "메탈베이블레이드", burst: "베이블레이드 버스트", x: "베이블레이드 X" };
const normalizeCatalogSeries = series => seriesLabels[series] ? series : "all";
const itemSeriesLabel = item => seriesLabels[item.series] || item.series || "";
const productDisplayName = (item, region = appState.release.region) => {
  const release = productDisplayRelease(item, region);
  if (release.name) return release.name;
  const fallbackReleases = productDisplayFallbackRegions(region).map(candidate => productRelease(item, candidate));
  const fallbackName = fallbackReleases.map(candidateRelease => candidateRelease.name).find(Boolean);
  if (fallbackName) return fallbackName;
  const baseName = item.name || "";
  const fallbackNo = fallbackReleases.map(candidateRelease => candidateRelease.no).find(Boolean);
  return baseName || release.no || fallbackNo || item.no || "";
};
const isoDateParts = value => value ? String(value).match(/^(\d{4})-(\d{2})(?:-(\d{2}))?$/) : null;
const dotDateLabel = (value, fallbackLabel, includeDay = false) => {
  const match = isoDateParts(value);
  if (!match || (includeDay && !match[3])) return fallbackLabel(value);
  const parts = [match[1], Number(match[2])];
  if (includeDay) parts.push(Number(match[3]));
  return `${parts.join(".")}.`;
};
const responsiveDateSpans = (fullClass, compactClass, fullLabel, compactLabel) =>
  `<span class="${fullClass}">${fullLabel}</span><span class="${compactClass}">${compactLabel}</span>`;
const releaseDateLabel = value => {
  if (!value) return "";
  const match = isoDateParts(value);
  return match ? `${match[1]}년 ${Number(match[2])}월` : value;
};
const releaseDateCompactLabel = value => dotDateLabel(value, releaseDateLabel);
const animeAirDateLabel = value => {
  if (!value) return "";
  const match = isoDateParts(value);
  return match?.[3] ? `${match[1]}년 ${Number(match[2])}월 ${Number(match[3])}일` : value;
};
const animeAirDateCompactLabel = value => dotDateLabel(value, animeAirDateLabel, true);
const releaseDateSortValue = value => {
  if (!value) return Number.MAX_SAFE_INTEGER;
  const match = isoDateParts(value);
  if (!match) return Number.MAX_SAFE_INTEGER;
  return Number(`${match[1]}${match[2]}${match[3] || "15"}`);
};
const productSerialNumber = (item, region = appState.release.region) => {
  const no = productReleaseValue(item, "no", region) || item.no || "";
  const match = no.match(/BB-(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};
const compareProductReleaseOrder = (a, b, region = appState.release.region) => {
  const releaseA = productRelease(a, region);
  const releaseB = productRelease(b, region);
  const dateDiff = releaseDateSortValue(releaseA.releaseDate || releaseA.release)
    - releaseDateSortValue(releaseB.releaseDate || releaseB.release);
  if (dateDiff) return dateDiff;
  const serialDiff = productSerialNumber(a, region) - productSerialNumber(b, region);
  if (serialDiff) return serialDiff;
  return (releaseA.no || a.no || "").localeCompare(releaseB.no || b.no || "", "ko", { numeric: true });
};
const priceLabel = (value, region = "kr") => {
  if (!value) return "";
  const digits = String(value).replace(/[^\d]/g, "");
  if (!digits) return "";
  const amount = Number(digits);
  if (!Number.isFinite(amount)) return "";
  const currency = region === "jp" ? "\u00a5" : "\u20a9";
  return `${currency}${amount.toLocaleString("ko-KR")}`;
};
const releasePriceSortValue = value => {
  const digits = String(value || "").replace(/[^\d]/g, "");
  if (!digits) return Number.MAX_SAFE_INTEGER;
  const amount = Number(digits);
  return Number.isFinite(amount) ? amount : Number.MAX_SAFE_INTEGER;
};
const releaseKindSortValue = kind => {
  const value = kind || "";
  if (value.includes("스타터")) return 0;
  if (value.includes("부스터")) return 1;
  if (value.includes("세트")) return 2;
  if (value.includes("게임")) return 3;
  return 4;
};
const releaseRegionTabs = () => `<div class="table-list-region-tabs release-region-tabs" role="group" aria-label="출시 지역">
  ${Object.entries(releaseRegionLabels).map(([value, label]) => tabButtonMarkup({ value, label, active: appState.release.region === value, dataAttr: "data-release-region" })).join("")}
</div>`;
const releaseControls = () => tableListControlsMarkup({
  label: "발매목록 필터",
  before: releaseRegionTabs(),
  dropdown: {
    label: releaseSeriesLabels[appState.release.series],
    entries: Object.entries(releaseSeriesLabels),
    activeValue: appState.release.series,
    dataAttr: "data-release-series"
  },
  search: { id: "releaseSearchInput", value: appState.release.query, placeholder: "발매목록에서 검색" }
});
export {
  RARE_BEY_GET_BADGE,
  animeAirDateCompactLabel,
  animeAirDateLabel,
  compareProductReleaseOrder,
  defaultReleaseSeries,
  itemSeriesLabel,
  normalizeCatalogSeries,
  priceLabel,
  productDisplayName,
  productDisplayRegion,
  productRelease,
  productReleasedInRegion,
  productSerialNumber,
  rareBeyGetEntryProductIds,
  rareBeyGetEntryRegion,
  rareBeyGetEntryStartSortValue,
  releaseBadgeLabel,
  releaseBadgeSearchText,
  releaseBadges,
  releaseControls,
  releaseDateCompactLabel,
  releaseDateLabel,
  releaseDateSortValue,
  releaseHasBadge,
  releaseKindSortValue,
  releasePriceSortValue,
  releaseRegionLabels,
  releaseSeriesForRegion,
  releaseSeriesLabels,
  releaseSeriesOrder,
  responsiveDateSpans,
  seriesLabels,
  visibleRareBeyGetEntries
};
