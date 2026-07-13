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
const rareBeyGetEntries = () =>
  typeof rareBeyGetItems !== "undefined" && Array.isArray(rareBeyGetItems) ? rareBeyGetItems : [];
const rareBeyGetEntryProductIds = entry => {
  const singleProductId = entry?.productId ? [entry.productId] : [];
  const groupedProductIds = Array.isArray(entry?.productIds) ? entry.productIds : [];
  return [...new Set([...singleProductId, ...groupedProductIds].filter(Boolean))];
};
const rareBeyGetEntryProductId = entry => rareBeyGetEntryProductIds(entry)[0] || "";
const rareBeyGetEntryRegion = entry => releaseRegionLabels[entry?.region] ? entry.region : "";
const rareBeyGetEntryMatchesProduct = (entry, item, region = activeReleaseRegion) =>
  rareBeyGetEntryProductIds(entry).includes(item.id) && (!rareBeyGetEntryRegion(entry) || rareBeyGetEntryRegion(entry) === region);
const rareBeyGetEntryForProduct = (item, region = activeReleaseRegion) =>
  rareBeyGetEntries().find(entry => rareBeyGetEntryMatchesProduct(entry, item, region)) || null;
const releaseBadges = (item, region = activeReleaseRegion) => {
  const release = productRelease(item, region);
  const explicitBadges = Array.isArray(release.badges) ? release.badges : [];
  const derivedBadges = rareBeyGetEntryForProduct(item, region) ? [RARE_BEY_GET_BADGE] : [];
  return [...new Set([...explicitBadges, ...derivedBadges])].filter(releaseBadgeLabel);
};
const releaseHasBadge = (item, badge, region = activeReleaseRegion) => releaseBadges(item, region).includes(badge);
const releaseBadgeSearchText = (item, region = activeReleaseRegion) =>
  releaseBadges(item, region).flatMap(releaseBadgeSearchTerms).join(" ");
const rareBeyGetEntryProducts = entry =>
  rareBeyGetEntryProductIds(entry).map(id => productItemsById.get(id)).filter(Boolean);
const rareBeyGetEntryStartSortValue = entry => releaseDateSortValue(entry?.startDate || "");
const rareBeyGetEntryCurrentSortValue = entry => entry?.isCurrent === true ? 0 : 1;
const rareBeyGetListEntryMatchesContext = (entry, { region = activeReleaseRegion, series = activeReleaseSeries } = {}) => {
  const products = rareBeyGetEntryProducts(entry);
  if (!products.length) return false;
  const entryRegion = rareBeyGetEntryRegion(entry);
  if (entryRegion && entryRegion !== region) return false;
  return !series || products.some(product => product.series === series);
};
const visibleRareBeyGetEntries = ({ region = activeReleaseRegion, series = activeReleaseSeries } = {}) =>
  rareBeyGetEntries()
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
const productRelease = (item, region = activeReleaseRegion) => {
  const base = baseProductRelease(item);
  const blank = blankProductRelease();
  if (!item.releases) return region === "kr" ? base : blank;
  const release = item.releases?.[region];
  if (!release) return region === "kr" ? base : blank;
  if (release.status === "unreleased") return blank;
  const merged = { ...(region === "kr" ? base : blank), ...release, status: release.status || "released" };
  return { ...merged, kind: normalizeProductKind(merged.kind) };
};
const productReleaseValue = (item, key, region = activeReleaseRegion) => productRelease(item, region)[key] || "";
const productReleasedInRegion = (item, region = activeReleaseRegion) => productRelease(item, region).status !== "unreleased";
const releaseSeriesOrder = () => Object.keys(releaseSeriesLabels);
const releaseSeriesHasProducts = (series, region = activeReleaseRegion) => releaseSeriesLabels[series] && productItems.some(item =>
  !item.lineupOnly && item.series === series && productReleasedInRegion(item, region)
);
const defaultReleaseSeries = (region = activeReleaseRegion) => [...releaseSeriesOrder()].reverse().find(series =>
  releaseSeriesHasProducts(series, region)
) || window.BeystadiumDataStore?.defaultReleaseSeries(region) || releaseSeriesOrder()[0] || "metal fight";
const releaseSeriesForRegion = (series, region = activeReleaseRegion) =>
  releaseSeriesHasProducts(series, region) ? series : defaultReleaseSeries(region);
const productDisplayFallbackRegions = (region = "kr") =>
  [region, "kr", "jp"].filter((value, index, values) => releaseRegionLabels[value] && values.indexOf(value) === index);
const productDisplayRegion = (item, region = "kr") =>
  productDisplayFallbackRegions(region).find(candidate => productReleasedInRegion(item, candidate)) || region;
const productDisplayRelease = (item, region = "kr") => productRelease(item, productDisplayRegion(item, region));
const seriesLabels = { topblade: "탑블레이드", "metal fight": "메탈베이블레이드", burst: "베이블레이드 버스트", x: "베이블레이드 X" };
const defaultCatalogSeries = () => "all";
const normalizeCatalogSeries = series => seriesLabels[series] ? series : "all";
const itemSeriesLabel = item => seriesLabels[item.series] || item.series || "";
const productDisplayName = (item, region = activeReleaseRegion) => {
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
const releaseDropdownOptions = (entries, activeValue, dataAttr) => entries
  .map(([value, label]) => dropdownButtonMarkup({ value, label, active: activeValue === value, dataAttr }))
  .join("");
const releaseRegionTabs = () => `<div class="release-region-tabs" role="tablist" aria-label="출시 지역">
  ${Object.entries(releaseRegionLabels).map(([value, label]) => tabButtonMarkup({ value, label, active: activeReleaseRegion === value, dataAttr: "data-release-region" })).join("")}
</div>`;
const escapeAttributeValue = value => String(value || "")
  .replace(/&/g, "&amp;")
  .replace(/"/g, "&quot;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;");
const escapeHtml = escapeAttributeValue;
const tableListClassName = (...classes) => classes.filter(Boolean).join(" ");
const tableListTableMarkup = ({ scrollClass = "", tableClass = "", head = "", body = "" } = {}) => `<div class="${tableListClassName("table-list-scroll", "page-table-scroll", scrollClass)}">
  <table class="${tableListClassName("table-list-table", "ui-data-table", tableClass)}">
    ${head}
    <tbody>${body}</tbody>
  </table>
</div>`;
const tableListSectionMarkup = tableMarkup => `<section class="table-list-section release-table-section">${tableMarkup}</section>`;
const tableListPageMarkup = ({ className = "", attrs = "", controlsMarkup = "", metaMarkup = "", tableMarkup = "" } = {}) =>
  `<section class="${tableListClassName("table-list-page", className)}"${attrs ? ` ${attrs}` : ""}>
    ${controlsMarkup}
    ${metaMarkup}
    ${tableListSectionMarkup(tableMarkup)}
  </section>`;
const tableListSearchBoxMarkup = ({ id, value = "", className = "release-search-box" } = {}) =>
  `<div class="search-box ${className}" role="search">
    <span class="search-icon" aria-hidden="true"></span>
    <input id="${escapeAttributeValue(id)}" type="search" placeholder="검색어를 입력해주세요." value="${escapeAttributeValue(value)}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" aria-autocomplete="none" />
  </div>`;
const tableListDropdownMarkup = ({ label = "", entries = [], activeValue = "", dataAttr = "" } = {}) => `<details class="catalog-dropdown release-dropdown">
  <summary><b class="catalog-dropdown-value">${escapeHtml(label)}</b></summary>
  <div class="catalog-dropdown-menu">
    ${releaseDropdownOptions(entries, activeValue, dataAttr)}
  </div>
</details>`;
const tableListControlsMarkup = ({ label = "", className = "", before = "", dropdown = null, search = null, attrs = "" } = {}) => `<div class="${tableListClassName("table-list-controls", "release-dropdowns", className)}"${attrs ? ` ${attrs}` : ""} aria-label="${escapeAttributeValue(label)}">
  ${before || ""}
  ${dropdown ? tableListDropdownMarkup(dropdown) : ""}
  ${search ? tableListSearchBoxMarkup(search) : ""}
</div>`;
class TableListController {
  constructor(config = {}) {
    this.config = config;
  }

  root() {
    return this.config.root?.() || null;
  }

  contentRoot(root = document) {
    return this.config.contentRoot?.(root) || root;
  }

  tableSection(root = document) {
    return this.config.tableSection?.(root)
      || root.querySelector?.(".table-list-section")
      || root.querySelector?.(".release-table-section")
      || null;
  }

  renderPage() {
    const root = this.root();
    if (!root || !this.config.pageMarkup) return null;
    root.innerHTML = this.config.pageMarkup(this);
    this.bind(root);
    return root;
  }

  renderTable(root = document) {
    const contentRoot = this.contentRoot(root);
    if (!contentRoot) return null;
    this.config.renderMeta?.(contentRoot, this);
    const section = this.tableSection(contentRoot);
    if (!section || !this.config.tableMarkup) return section;
    section.innerHTML = this.config.tableMarkup(this);
    this.config.bindTable?.(section, contentRoot, this);
    return section;
  }

  bind(root = document) {
    const contentRoot = this.contentRoot(root);
    if (!contentRoot) return null;
    this.config.bind?.(contentRoot, this);
    return contentRoot;
  }
}
const releaseControls = () => tableListControlsMarkup({
  label: "발매목록 필터",
  before: releaseRegionTabs(),
  dropdown: {
    label: releaseSeriesLabels[activeReleaseSeries],
    entries: Object.entries(releaseSeriesLabels),
    activeValue: activeReleaseSeries,
    dataAttr: "data-release-series"
  },
  search: { id: "releaseSearchInput", value: activeReleaseQuery }
});
const sortDropdownLabelParts = label => {
  const rawLabel = String(label || "").trim();
  const match = rawLabel.match(/^(.+?)\s*([↑↓])$/u);
  return match ? { text: match[1].trim(), direction: match[2] } : { text: rawLabel, direction: "" };
};
const sortDropdownLabelMarkup = label => {
  const { text, direction } = sortDropdownLabelParts(label);
  return `<span class="sort-dropdown-label"><span class="sort-dropdown-label-spacer" aria-hidden="true"></span><span class="sort-dropdown-label-text">${escapeHtml(text)}</span><span class="sort-dropdown-label-direction"${direction ? "" : " aria-hidden=\"true\""}>${escapeHtml(direction)}</span></span>`;
};
const setSortDropdownLabel = (element, label) => {
  if (element) element.innerHTML = sortDropdownLabelMarkup(label);
};
const sortDropdownOptionsMarkup = (options, activeValue, dataAttr) => options.map(option =>
  `<button type="button" class="${option.value === activeValue ? "active" : ""}" ${dataAttr}="${escapeAttributeValue(option.value)}" data-summary-label="${escapeAttributeValue(option.label)}"${option.ariaLabel ? ` aria-label="${escapeAttributeValue(option.ariaLabel)}"` : ""}>${sortDropdownLabelMarkup(option.label)}</button>`
).join("");
const sortDropdownMarkup = ({ className = "", label = "정렬", value = "", options = [], dataAttr = "" } = {}) =>
  `<details class="${tableListClassName("catalog-dropdown", "search-scope", "list-sort-dropdown", className)}" aria-label="${escapeAttributeValue(label)}">
    <summary><b class="catalog-dropdown-value">${sortDropdownLabelMarkup(options.find(option => option.value === value)?.label || label)}</b></summary>
    <div class="catalog-dropdown-menu">
      ${sortDropdownOptionsMarkup(options, value, dataAttr)}
    </div>
  </details>`;
