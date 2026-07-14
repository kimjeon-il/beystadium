import { animeDisplayRegion, animeEpisodeTitle, animeSeasonLabels, episodeHashId } from "#app/anime-core";
import { appState } from "#app/state";
import { BeystadiumDataStore, searchIndexItems } from "#app/data-store";
import {
  animeAirDateLabel,
  escapeAttributeValue,
  escapeHtml,
  itemSeriesLabel,
  priceLabel,
  productDisplayName,
  productDisplayRegion,
  productRelease,
  releaseDateLabel,
  seriesLabels
} from "#app/release-core";
import { appServices } from "#app/services";
import {
  catalogItemSearchFields,
  compareScoredSearchResults,
  createSearchRecord,
  globalSearchQuery,
  itemAttributeLabels,
  mainSearchItemText,
  matchSearchRecord,
  normalizeSearchScope,
  prepareSearchQuery,
  searchFieldsFromValues,
  searchQueryFrom,
  toolsSearchFields
} from "#app/search-engine";
import { findCatalogItemById, productCompositionItems } from "#app/catalog-model";
import { bindCatalogCardClicks, openCatalogCard } from "#app/collection-view";
import {
  globalSearch,
  globalSearchScopeValue,
  mobileDrawerSearch,
  mobileDrawerSearchScopeValue,
  overviewSearch,
  overviewSearchScopeValue,
  partDetailTypeLabel,
  playEnterAnimation,
  searchResultsSearch,
  searchResultsSearchScopeValue,
  setGlobalSearchScope,
  setMobileDrawerSearchScope,
  setOverviewSearchScope,
  setSearchResultsSearchScope,
  setSearchInputValue,
  structureLabels
} from "#app/ui-core";

const mainSearchProductCompositionText = (item, region) => {
  const composition = productCompositionItems(item, region);
  if (!composition.length) return item._compositionSearchText || "";
  return composition
    .map(part => [part.name, mainSearchItemText(findCatalogItemById(part.target))].filter(Boolean).join(" "))
    .filter(Boolean)
    .join(" ");
};
const productSearchFields = item => {
  const krRelease = productRelease(item, "kr");
  const jpRelease = productRelease(item, "jp");
  return [
    ...searchFieldsFromValues("primaryName", [item.name, krRelease.name, jpRelease.name]),
    ...searchFieldsFromValues("code", [item.no, krRelease.no, jpRelease.no]),
    ...searchFieldsFromValues("category", [
      item.series,
      seriesLabels[item.series],
      krRelease.kind,
      jpRelease.kind,
      krRelease.sale,
      jpRelease.sale
    ]),
    ...searchFieldsFromValues("composition", [
      mainSearchProductCompositionText(item, "kr"),
      mainSearchProductCompositionText(item, "jp")
    ])
  ];
};
const bookSearchFields = item => [
  ...searchFieldsFromValues("primaryName", [item.name]),
  ...searchFieldsFromValues("alias", [item.en]),
  ...searchFieldsFromValues("category", [item.category]),
  ...searchFieldsFromValues("description", [item.desc])
];
const gameSearchFields = item => [
  ...searchFieldsFromValues("primaryName", [item.name]),
  ...searchFieldsFromValues("alias", [item.en]),
  ...searchFieldsFromValues("category", [item.category]),
  ...searchFieldsFromValues("description", [item.desc])
];
const animeSearchFields = episode => [
  ...searchFieldsFromValues("primaryName", [episode.titles?.kr, episode.titles?.jp]),
  ...searchFieldsFromValues("code", [episode.no]),
  ...searchFieldsFromValues("category", [animeSeasonLabels[episode.season], episode.season]),
  ...searchFieldsFromValues("description", [episode.note])
];
let searchResultRecordCache = null;
let searchResultRecordListCache = null;
const SEARCH_RESULT_ITEMS_CACHE_LIMIT = 64;
const SEARCH_RESULT_MARKUP_CACHE_LIMIT = 32;
const SEARCH_RESULTS_PAGE_SIZE = 10;
const SEARCH_HASH_UPDATE_DELAY = 180;
const SEARCH_RENDER_DELAY = 100;
const searchResultItemsCache = new Map();
const searchResultMarkupCache = new Map();
const cacheSearchResultItems = (key, result) => {
  if (!searchResultItemsCache.has(key) && searchResultItemsCache.size >= SEARCH_RESULT_ITEMS_CACHE_LIMIT) {
    searchResultItemsCache.delete(searchResultItemsCache.keys().next().value);
  }
  searchResultItemsCache.set(key, result);
  return result;
};
const cacheSearchResultMarkup = (key, result) => {
  if (!searchResultMarkupCache.has(key) && searchResultMarkupCache.size >= SEARCH_RESULT_MARKUP_CACHE_LIMIT) {
    searchResultMarkupCache.delete(searchResultMarkupCache.keys().next().value);
  }
  searchResultMarkupCache.set(key, result);
  return result;
};
const mainSearchRecord = (kind, item, fields, order, extra = {}) => createSearchRecord(kind, item, fields, order, extra);
const createMainSearchRecords = ({ items, kind, fields = catalogItemSearchFields, extra = () => ({}) }, sourceIndex = 0) =>
  items.map((item, index) => mainSearchRecord(kind, item, fields(item, index), (sourceIndex * 100000) + index, extra(item, index)));
const groupedSearchIndexItems = () => {
  const groups = {
    "catalog-item": [],
    tools: [],
    product: [],
    book: [],
    game: [],
    anime: []
  };
  searchIndexItems.forEach(entry => groups[entry.kind]?.push(entry.item));
  return groups;
};
const mainSearchRecordSources = () => {
  const items = groupedSearchIndexItems();
  return [
    { key: "catalog", kind: "catalog-item", items: items["catalog-item"], fields: catalogItemSearchFields },
    { key: "tools", kind: "tools", items: items.tools, fields: toolsSearchFields },
    { key: "product", kind: "product", items: items.product, fields: productSearchFields },
    { key: "manga", kind: "book", items: items.book, fields: bookSearchFields },
    { key: "game", kind: "game", items: items.game, fields: gameSearchFields },
    { key: "anime", kind: "anime", items: items.anime, fields: animeSearchFields, extra: (episode, index) => ({ index }) }
  ];
};
const searchResultRecords = () => {
  if (searchResultRecordCache) return searchResultRecordCache;
  searchResultRecordCache = Object.fromEntries(mainSearchRecordSources().map((source, sourceIndex) => [source.key, createMainSearchRecords(source, sourceIndex)]));
  return searchResultRecordCache;
};
window.addEventListener("beystadium:data-loaded", () => {
  searchResultRecordCache = null;
  searchResultRecordListCache = null;
  searchResultItemsCache.clear();
  searchResultMarkupCache.clear();
});
const searchResultCacheKey = (scope, query) => `${scope}\u0000${searchQueryFrom(query).cacheKey}`;
const searchResultRenderKey = (scope, query) => [
  scope,
  searchQueryFrom(query).cacheKey,
  appState.activeReleaseRegion,
  animeDisplayRegion
].join("\u0000");
const searchResultRecordLists = () => {
  if (searchResultRecordListCache) return searchResultRecordListCache;
  const records = searchResultRecords();
  searchResultRecordListCache = {
    all: [...records.catalog, ...records.tools, ...records.product, ...records.manga, ...records.game, ...records.anime],
    bey: records.catalog,
    tools: records.tools,
    product: records.product,
    manga: records.manga,
    anime: records.anime
  };
  return searchResultRecordListCache;
};
const searchResultRecordList = scope => searchResultRecordLists()[normalizeSearchScope(scope)] || searchResultRecordLists().all;
const scoredSearchResult = (record, preparedQuery) => {
  const match = matchSearchRecord(record, preparedQuery);
  if (match.matched && searchQueryFrom(preparedQuery).isEmpty) return { record, score: 0, entry: record.entry };
  return match.matched && match.score > 0 ? { record, score: match.score, entry: record.entry } : null;
};
const insertLimitedSearchResult = (results, result, limit) => {
  let index = results.findIndex(entry => compareScoredSearchResults(result, entry) < 0);
  if (index < 0) index = results.length;
  if (index < limit) {
    results.splice(index, 0, result);
    if (results.length > limit) results.pop();
  } else if (results.length < limit) {
    results.push(result);
  }
};
const collectSearchResultItems = (scope = globalSearchScopeValue(), query = globalSearchQuery()) => {
  scope = normalizeSearchScope(scope);
  const preparedQuery = searchQueryFrom(query);
  const cacheKey = searchResultCacheKey(scope, preparedQuery);
  const cached = searchResultItemsCache.get(cacheKey);
  if (cached) return cached;
  const scored = [];
  for (const record of searchResultRecordList(scope)) {
    const result = scoredSearchResult(record, preparedQuery);
    if (result) scored.push(result);
  }
  scored.sort(compareScoredSearchResults);
  const items = scored.map(result => result.entry);
  const result = { total: items.length, items };
  return cacheSearchResultItems(cacheKey, result);
};
const collectSearchPreviewItems = (scope = globalSearchScopeValue(), query = globalSearchQuery(), limit = SEARCH_PREVIEW_LIMIT) => {
  scope = normalizeSearchScope(scope);
  const preparedQuery = searchQueryFrom(query);
  const cached = searchResultItemsCache.get(searchResultCacheKey(scope, preparedQuery));
  if (cached) return cached.items.slice(0, limit);
  const topResults = [];
  for (const record of searchResultRecordList(scope)) {
    const result = scoredSearchResult(record, preparedQuery);
    if (result) insertLimitedSearchResult(topResults, result, limit);
  }
  return topResults.map(result => result.entry);
};
const searchResultType = entry => {
  if (entry.kind === "tools") return "장비";
  if (entry.kind === "product") return "제품";
  if (entry.kind === "book") return "도서";
  if (entry.kind === "game") return "게임";
  if (entry.kind === "anime") return "애니";
  return partDetailTypeLabel(entry.item) || "베이";
};
const searchResultTitle = entry => {
  if (entry.kind === "tools") return entry.item.name;
  if (entry.kind === "product") return productDisplayName(entry.item, appState.activeReleaseRegion);
  if (entry.kind === "book" || entry.kind === "game") return entry.item.name;
  if (entry.kind === "anime") return animeEpisodeTitle(entry.item, animeDisplayRegion);
  const suffix = entry.item.type === "bey" && entry.item.sub ? ` ${entry.item.sub}` : "";
  return `${entry.item.name}${suffix}`;
};
const searchProductSnippet = item => {
  const region = productDisplayRegion(item, appState.activeReleaseRegion);
  const release = productRelease(item, region);
  return [
    release.no || item.no,
    seriesLabels[item.series] || item.series || "",
    release.kind,
    releaseDateLabel(release.releaseDate || release.release),
    priceLabel(release.price, region)
  ].filter(Boolean).join(" · ");
};
const searchAnimeEpisodeSnippet = (episode, region = animeDisplayRegion) => [
  animeSeasonLabels[episode.season] || episode.season || "",
  animeAirDateLabel(episode.airDates?.[region] || ""),
  episode.note || ""
].filter(Boolean).join(" · ");
const searchResultSnippet = entry => {
  if (entry.kind === "tools") {
    return [entry.item.category, entry.item.desc].filter(Boolean).join(" · ") || "장비 정보를 확인할 수 있습니다.";
  }
  if (entry.kind === "product") return searchProductSnippet(entry.item) || "제품 정보를 확인할 수 있습니다.";
  if (entry.kind === "book") return [entry.item.category, entry.item.desc].filter(Boolean).join(" · ") || "도서 정보를 확인할 수 있습니다.";
  if (entry.kind === "game") return [entry.item.category, entry.item.desc].filter(Boolean).join(" · ") || "게임 정보를 확인할 수 있습니다.";
  if (entry.kind === "anime") return searchAnimeEpisodeSnippet(entry.item) || "애니 회차 정보를 확인할 수 있습니다.";
  const labels = itemAttributeLabels(entry.item).slice(0, 4);
  const parts = [
    entry.item.productNo,
    itemSeriesLabel(entry.item),
    entry.item.type === "bey" ? structureLabels[entry.item.structure] : "",
    labels.join(" · "),
    entry.item.desc
  ].filter(Boolean);
  return parts.join(" · ") || "베이와 부품 정보를 확인할 수 있습니다.";
};
const searchResultAttributes = entry => {
  if (entry.kind === "tools") return `data-tools-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "product") return `data-product-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "book") return `data-book-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "game") return `data-game-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "anime") return `data-anime-episode-id="${escapeAttributeValue(episodeHashId(entry.index))}"`;
  return `data-id="${escapeAttributeValue(entry.item.id)}"`;
};
const searchResultButton = entry => {
  const attr = searchResultAttributes(entry);
  return `<button class="search-result-item" type="button" ${attr}>
    <span class="search-result-kind">${escapeHtml(searchResultType(entry))}</span>
    <strong>${escapeHtml(searchResultTitle(entry))}</strong>
    <span class="search-result-snippet">${escapeHtml(searchResultSnippet(entry))}</span>
  </button>`;
};
const searchResultButtonMarkupSlice = (renderKey, items, start, end) => {
  const cached = searchResultMarkupCache.get(renderKey);
  const markup = cached || cacheSearchResultMarkup(renderKey, []);
  const safeStart = Math.max(0, start);
  const safeEnd = Math.min(end, items.length);
  for (let index = safeStart; index < safeEnd; index += 1) {
    if (!markup[index]) markup[index] = searchResultButton(items[index]);
  }
  return markup.slice(safeStart, safeEnd);
};
const searchResultPageButtons = (currentPage, totalPages) => {
  if (totalPages <= 1) return "";
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let page = start; page <= end; page += 1) pages.push(page);
  const pageButtons = pages.map(page => `
    <button class="ui-button search-results-page-button${page === currentPage ? " active" : ""}" type="button" data-search-results-page="${page}"${page === currentPage ? " aria-current=\"page\"" : ""}>${page}</button>`).join("");
  return `<nav class="search-results-pagination" aria-label="검색결과 페이지">
    <button class="ui-button search-results-page-step" type="button" data-search-results-page="${currentPage - 1}" ${currentPage <= 1 ? "disabled aria-disabled=\"true\"" : ""}>이전</button>
    ${start > 1 ? `<button class="ui-button search-results-page-button" type="button" data-search-results-page="1">1</button>${start > 2 ? `<span class="search-results-page-gap">…</span>` : ""}` : ""}
    ${pageButtons}
    ${end < totalPages ? `${end < totalPages - 1 ? `<span class="search-results-page-gap">…</span>` : ""}<button class="ui-button search-results-page-button" type="button" data-search-results-page="${totalPages}">${totalPages}</button>` : ""}
    <button class="ui-button search-results-page-step" type="button" data-search-results-page="${currentPage + 1}" ${currentPage >= totalPages ? "disabled aria-disabled=\"true\"" : ""}>다음</button>
  </nav>`;
};
let currentSearchResultPage = 1;
let currentSearchResultKey = "";
const resetCurrentSearchResultPage = key => {
  currentSearchResultKey = key;
  currentSearchResultPage = 1;
};
const syncSearchResultRenderState = (scope, query) => {
  const normalizedScope = normalizeSearchScope(scope);
  const preparedQuery = prepareSearchQuery(query);
  const renderKey = searchResultRenderKey(normalizedScope, preparedQuery);
  if (renderKey !== currentSearchResultKey) resetCurrentSearchResultPage(renderKey);
  return { scope: normalizedScope, query: preparedQuery.raw, preparedQuery, renderKey };
};
const bindSearchResultControls = gridRoot => {
  if (!gridRoot || gridRoot.dataset.searchResultControlsBound) return;
  gridRoot.dataset.searchResultControlsBound = "true";
  gridRoot.addEventListener("click", event => {
    const pageButton = event.target.closest("[data-search-results-page]");
    if (!pageButton || pageButton.disabled || !gridRoot.contains(pageButton)) return;
    event.preventDefault();
    currentSearchResultPage = Number(pageButton.dataset.searchResultsPage) || 1;
    renderGlobalCards();
  });
};
const SEARCH_PREVIEW_LIMIT = 6;
const SEARCH_PREVIEW_RENDER_DELAY = 100;
const searchPreviewControls = new Map();
const searchPreviewScopeValue = input => {
  if (input === overviewSearch) return overviewSearchScopeValue();
  if (input === mobileDrawerSearch) return mobileDrawerSearchScopeValue();
  if (input === searchResultsSearch) return searchResultsSearchScopeValue();
  return globalSearchScopeValue();
};
const searchPreviewSyncToGlobal = input => {
  if (input === overviewSearch) {
    if (globalSearch) setSearchInputValue(globalSearch, overviewSearch.value);
    if (mobileDrawerSearch) setSearchInputValue(mobileDrawerSearch, overviewSearch.value);
    if (searchResultsSearch) setSearchInputValue(searchResultsSearch, overviewSearch.value);
    setGlobalSearchScope(overviewSearchScopeValue());
    setMobileDrawerSearchScope(overviewSearchScopeValue());
    setSearchResultsSearchScope(overviewSearchScopeValue());
    return;
  }
  if (input === mobileDrawerSearch) {
    if (globalSearch) setSearchInputValue(globalSearch, mobileDrawerSearch.value);
    if (overviewSearch) setSearchInputValue(overviewSearch, mobileDrawerSearch.value);
    if (searchResultsSearch) setSearchInputValue(searchResultsSearch, mobileDrawerSearch.value);
    setGlobalSearchScope(mobileDrawerSearchScopeValue());
    setOverviewSearchScope(mobileDrawerSearchScopeValue());
    setSearchResultsSearchScope(mobileDrawerSearchScopeValue());
    return;
  }
  if (input === globalSearch) {
    if (mobileDrawerSearch) setSearchInputValue(mobileDrawerSearch, globalSearch.value);
    if (overviewSearch) setSearchInputValue(overviewSearch, globalSearch.value);
    if (searchResultsSearch) setSearchInputValue(searchResultsSearch, globalSearch.value);
    setMobileDrawerSearchScope(globalSearchScopeValue());
    setOverviewSearchScope(globalSearchScopeValue());
    setSearchResultsSearchScope(globalSearchScopeValue());
  }
};
const searchPreviewOptionId = (control, index) => `${control.preview.id}-option-${index}`;
const searchPreviewItemButton = (entry, control, index) => {
  const attr = searchResultAttributes(entry);
  const selected = index === control.highlightedIndex;
  return `<button class="search-result-item search-preview-item${selected ? " is-active" : ""}" type="button" ${attr} role="option" id="${escapeAttributeValue(searchPreviewOptionId(control, index))}" data-search-preview-index="${index}" aria-selected="${selected ? "true" : "false"}">
    <span class="search-result-kind">${escapeHtml(searchResultType(entry))}</span>
    <strong>${escapeHtml(searchResultTitle(entry))}</strong>
    <span class="search-result-snippet">${escapeHtml(searchResultSnippet(entry))}</span>
  </button>`;
};
const closeSearchPreviewCompetingLayers = () => {
  if (typeof appServices.closeOpenCatalogDropdowns === "function") appServices.closeOpenCatalogDropdowns();
  if (typeof appServices.closeSearchHelpPopovers === "function") appServices.closeSearchHelpPopovers();
};
class SearchPreviewController {
  constructor(input, root) {
    this.input = input;
    this.root = root;
    this.preview = document.createElement("div");
    this.entries = [];
    this.highlightedIndex = -1;
    this.renderTimer = 0;
    this.renderGeneration = 0;
    this.preview.className = "search-preview";
    this.preview.id = `${input.id}Preview`;
    this.preview.hidden = true;
    this.preview.setAttribute("role", "listbox");
    this.preview.setAttribute("aria-label", "검색결과 미리보기");
    root.appendChild(this.preview);
    input.setAttribute("aria-haspopup", "listbox");
    input.setAttribute("aria-controls", this.preview.id);
    input.setAttribute("aria-expanded", "false");
    this.bind();
  }

  bind() {
    this.input.addEventListener("focus", () => this.refresh({ resetActive: true }));
    this.root.addEventListener("focusout", () => {
      setTimeout(() => {
        if (!this.root.contains(document.activeElement)) this.close();
      }, 0);
    });
    this.preview.addEventListener("click", event => {
      const allButton = event.target.closest("[data-search-preview-all]");
      if (allButton) {
        event.preventDefault();
        this.openResults();
        return;
      }
      const itemButton = event.target.closest("[data-search-preview-index]");
      if (!itemButton) return;
      event.preventDefault();
      this.openItem(itemButton);
    });
  }

  close() {
    this.renderGeneration += 1;
    if (this.renderTimer) {
      clearTimeout(this.renderTimer);
      this.renderTimer = 0;
    }
    this.preview.hidden = true;
    this.highlightedIndex = -1;
    this.entries = [];
    this.input.setAttribute("aria-expanded", "false");
    this.input.removeAttribute("aria-activedescendant");
    if (appState.activeSearchPreview === this) appState.activeSearchPreview = null;
  }

  render() {
    const query = this.input.value.trim();
    const focusedInside = this.root.contains(document.activeElement);
    if (!query || !focusedInside) {
      this.close();
      return;
    }
    closeSearchPreviewCompetingLayers();
    closeAllSearchPreviews(this);
    this.entries = collectSearchPreviewItems(searchPreviewScopeValue(this.input), query);
    if (this.highlightedIndex >= this.entries.length) this.highlightedIndex = -1;
    const wasHidden = this.preview.hidden;
    this.preview.innerHTML = this.entries.length
      ? `<div class="search-preview-list" role="presentation">${this.entries.map((entry, index) => searchPreviewItemButton(entry, this, index)).join("")}</div>
        <button class="search-preview-all" type="button" data-search-preview-all>전체 검색결과 보기</button>`
      : `<div class="search-preview-empty">검색결과가 없습니다.</div>`;
    this.preview.hidden = false;
    if (wasHidden) playEnterAnimation(this.preview, "is-preview-entering");
    appState.activeSearchPreview = this;
    this.input.setAttribute("aria-expanded", "true");
    if (this.highlightedIndex >= 0) {
      this.input.setAttribute("aria-activedescendant", searchPreviewOptionId(this, this.highlightedIndex));
    } else {
      this.input.removeAttribute("aria-activedescendant");
    }
  }

  refresh({ resetActive = false } = {}) {
    if (resetActive) this.highlightedIndex = -1;
    if (this.renderTimer) clearTimeout(this.renderTimer);
    if (!this.input.value.trim()) {
      this.renderTimer = 0;
      this.render();
      return;
    }
    const generation = ++this.renderGeneration;
    this.renderTimer = setTimeout(async () => {
      this.renderTimer = 0;
      await BeystadiumDataStore?.ensureSearch(searchPreviewScopeValue(this.input));
      if (generation !== this.renderGeneration) return;
      this.render();
    }, SEARCH_PREVIEW_RENDER_DELAY);
  }

  syncToGlobal() {
    searchPreviewSyncToGlobal(this.input);
  }

  openItem(button) {
    if (!button) return;
    this.syncToGlobal();
    closeAllSearchPreviews();
    openCatalogCard(button);
    appServices.setMobileDrawerOpen(false);
  }

  openResults() {
    this.syncToGlobal();
    closeAllSearchPreviews();
    appServices.openSearchResults();
  }

  handleKeydown(event) {
    const key = event.key;
    if (!["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(key)) return false;
    const isOpen = !this.preview.hidden;
    if (key === "Escape") {
      if (!isOpen) return false;
      event.preventDefault();
      this.close();
      return true;
    }
    if (key === "ArrowDown" || key === "ArrowUp") {
      if (!this.input.value.trim()) return false;
      event.preventDefault();
      if (!isOpen) this.render();
      const count = this.entries.length;
      if (!count) return true;
      const direction = key === "ArrowDown" ? 1 : -1;
      this.highlightedIndex = this.highlightedIndex < 0
        ? (direction > 0 ? 0 : count - 1)
        : (this.highlightedIndex + direction + count) % count;
      this.render();
      return true;
    }
    if (key === "Enter" && isOpen && this.highlightedIndex >= 0) {
      const button = this.preview.querySelector(`[data-search-preview-index="${this.highlightedIndex}"]`);
      if (button) {
        event.preventDefault();
        this.openItem(button);
        return true;
      }
    }
    return false;
  }
}
const closeAllSearchPreviews = exceptControl => {
  searchPreviewControls.forEach(control => {
    if (control !== exceptControl) control?.close();
  });
};
const refreshSearchPreview = (input, { resetActive = false } = {}) => {
  const control = searchPreviewControls.get(input);
  control?.refresh({ resetActive });
};
const handleSearchPreviewKeydown = (input, event) => {
  const control = searchPreviewControls.get(input);
  return control ? control.handleKeydown(event) : false;
};
const bindSearchPreview = (input, containerSelector) => {
  if (!input || searchPreviewControls.has(input)) return;
  const root = input.closest(containerSelector);
  if (!root) return;
  const control = new SearchPreviewController(input, root);
  searchPreviewControls.set(input, control);
};
const renderGlobalCards = () => {
  const grid = document.querySelector("#globalGrid");
  const count = document.querySelector("#globalCount");
  if (!grid || !count) return;
  const { scope, preparedQuery, renderKey } = syncSearchResultRenderState(globalSearchScopeValue(), globalSearchQuery());
  const visible = collectSearchResultItems(scope, preparedQuery).items;
  const totalCount = visible.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / SEARCH_RESULTS_PAGE_SIZE));
  currentSearchResultPage = Math.min(Math.max(1, currentSearchResultPage), totalPages);
  const pageStart = (currentSearchResultPage - 1) * SEARCH_RESULTS_PAGE_SIZE;
  const pageEnd = pageStart + SEARCH_RESULTS_PAGE_SIZE;
  count.textContent = totalCount;
  const itemMarkup = visible.length ? searchResultButtonMarkupSlice(renderKey, visible, pageStart, pageEnd) : [];
  grid.innerHTML = visible.length
    ? `${itemMarkup.join("")}${searchResultPageButtons(currentSearchResultPage, totalPages)}`
    : `<p class="search-empty">검색결과가 없습니다.</p>`;
  bindCatalogCardClicks(grid);
  bindSearchResultControls(grid);
};

export {
  SEARCH_HASH_UPDATE_DELAY,
  SEARCH_RENDER_DELAY,
  bindSearchPreview,
  closeAllSearchPreviews,
  handleSearchPreviewKeydown,
  refreshSearchPreview,
  renderGlobalCards,
  searchPreviewScopeValue
};
