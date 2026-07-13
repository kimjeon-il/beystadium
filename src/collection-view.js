import { appState } from "#app/state";
import { appServices } from "#app/services";
import {
  cardInfo,
  cardVisualMarkup,
  catalogRenderKey,
  toolsCard,
  visibleCatalogItems
} from "#app/catalog-model";
import { animeSearchQuery } from "#app/search-engine";

const openCatalogCard = card => {
  appServices.queueModalTransition("list");
  if (card.dataset.productId) appServices.openProductEntry(card.dataset.productId);
  else if (card.dataset.toolsId) appServices.openToolsDetail(card.dataset.toolsId);
  else if (card.dataset.bookId) appServices.openBookDetail(card.dataset.bookId);
  else if (card.dataset.gameId) appServices.openGameDetail(card.dataset.gameId);
  else if (card.dataset.animeEpisodeId) appServices.openAnimeEpisodeDetail(card.dataset.animeEpisodeId);
  else if (card.dataset.id) appServices.openDetail(card.dataset.id);
};
const bindCatalogCardClicks = gridRoot => {
  if (!gridRoot || gridRoot.dataset.catalogCardClicksBound) return;
  gridRoot.dataset.catalogCardClicksBound = "true";
  gridRoot.addEventListener("click", event => {
    const card = event.target.closest("[data-product-id], [data-tools-id], [data-book-id], [data-game-id], [data-anime-episode-id], [data-id]");
    if (!card || !gridRoot.contains(card)) return;
    event.preventDefault();
    openCatalogCard(card);
  });
};
const CATALOG_PAGE_SIZE = 40;
const ANIME_PAGE_SIZE = CATALOG_PAGE_SIZE;
const categoryCollectionRenderKeys = new Map();
const categoryCollectionItemKey = (item, index) => item?.id || item?.name || item?.title || String(index);
const renderCategoryCollectionGrid = ({ cacheKey, grid, items, cardTemplate, emptyMarkup, itemKey = categoryCollectionItemKey }) => {
  const nextKey = items.length
    ? items.map((item, index) => itemKey(item, index)).join("|")
    : `__empty__:${emptyMarkup}`;
  if (categoryCollectionRenderKeys.get(cacheKey) !== nextKey) {
    grid.innerHTML = items.length ? items.map(cardTemplate).join("") : emptyMarkup;
    categoryCollectionRenderKeys.set(cacheKey, nextKey);
  }
  bindCatalogCardClicks(grid);
};
const renderCategoryCollection = config => {
  const grid = document.querySelector(config.gridSelector);
  if (!grid) return [];
  config.syncRenderPage(config.renderKey());
  const visible = config.getVisibleItems();
  const totalPages = Math.max(1, Math.ceil(visible.length / config.pageSize));
  const currentPage = Math.min(Math.max(1, config.getCurrentPage()), totalPages);
  config.setCurrentPage(currentPage);
  const pageStart = (currentPage - 1) * config.pageSize;
  const pageItems = visible.slice(pageStart, pageStart + config.pageSize);
  const count = config.countSelector ? document.querySelector(config.countSelector) : null;
  if (count) count.textContent = visible.length;
  renderCategoryCollectionGrid({
    cacheKey: config.key,
    grid,
    items: pageItems,
    cardTemplate: config.cardTemplate,
    emptyMarkup: config.emptyMarkup(visible)
  });
  config.afterRender?.(visible);
  config.renderPagination(totalPages);
  return visible;
};

const syncCatalogRenderPage = renderKey => {
  if (renderKey !== appState.currentCatalogRenderKey) {
    appState.currentCatalogRenderKey = renderKey;
    appState.currentCatalogPage = 1;
  }
};
const animeRenderKey = () => [
  typeof appState.activeAnimeCharacterSeason === "string" ? appState.activeAnimeCharacterSeason : "all",
  animeSearchQuery()
].join("|");
const syncAnimeRenderPage = renderKey => {
  if (renderKey !== appState.currentAnimeRenderKey) {
    appState.currentAnimeRenderKey = renderKey;
    appState.currentAnimePage = 1;
  }
};
const paginationButtons = ({ currentPage, totalPages, dataAttr, buttonClass, stepClass, navClass = "", label }) => {
  if (totalPages <= 1) return "";
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let page = start; page <= end; page += 1) pages.push(page);
  const navClassName = `catalog-pagination-nav${navClass ? ` ${navClass}` : ""}`;
  const pageButtons = pages.map(page => `
    <button class="ui-button ${buttonClass}${page === currentPage ? " active" : ""}" type="button" ${dataAttr}="${page}"${page === currentPage ? " aria-current=\"page\"" : ""}>${page}</button>`).join("");
  return `<nav class="${navClassName}" aria-label="${label}">
    <button class="ui-button ${stepClass}" type="button" ${dataAttr}="${currentPage - 1}" ${currentPage <= 1 ? "disabled aria-disabled=\"true\"" : ""}>이전</button>
    ${start > 1 ? `<button class="ui-button ${buttonClass}" type="button" ${dataAttr}="1">1</button>${start > 2 ? `<span class="catalog-page-gap">…</span>` : ""}` : ""}
    ${pageButtons}
    ${end < totalPages ? `${end < totalPages - 1 ? `<span class="catalog-page-gap">…</span>` : ""}<button class="ui-button ${buttonClass}" type="button" ${dataAttr}="${totalPages}">${totalPages}</button>` : ""}
    <button class="ui-button ${stepClass}" type="button" ${dataAttr}="${currentPage + 1}" ${currentPage >= totalPages ? "disabled aria-disabled=\"true\"" : ""}>다음</button>
  </nav>`;
};
const renderPagination = ({ rootSelector, totalPages, currentPage, ...buttonOptions }) => {
  const root = document.querySelector(rootSelector);
  if (!root) return;
  root.innerHTML = paginationButtons({ currentPage, totalPages, ...buttonOptions });
  root.hidden = totalPages <= 1;
};
const renderCatalogPagination = totalPages => renderPagination({
  rootSelector: "#catalogPagination",
  totalPages,
  currentPage: appState.currentCatalogPage,
  dataAttr: "data-catalog-page",
  buttonClass: "catalog-page-button",
  stepClass: "catalog-page-step",
  label: "완구 페이지"
});
const renderAnimePagination = totalPages => renderPagination({
  rootSelector: "#animePagination",
  totalPages,
  currentPage: appState.currentAnimePage,
  dataAttr: "data-anime-page",
  buttonClass: "anime-page-button",
  stepClass: "anime-page-step",
  navClass: "anime-pagination-nav",
  label: "애니메이션 페이지"
});
const scrollGridIntoView = ({ gridSelector, controlSelector }) => {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;
  const topbarHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
  const controlHeight = document.querySelector(controlSelector)?.getBoundingClientRect().height || 0;
  const targetTop = grid.getBoundingClientRect().top + window.scrollY - topbarHeight - controlHeight - 18;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
};
const scrollCatalogGridIntoView = () => scrollGridIntoView({
  gridSelector: "#catalogGrid",
  controlSelector: ".catalog-control-bar"
});
const scrollAnimeGridIntoView = () => scrollGridIntoView({
  gridSelector: "#animeCharacterGrid",
  controlSelector: ".anime-control-bar"
});

const updateCatalogCount = visibleItems => {
  const count = document.querySelector("#catalogCount");
  if (!count) return;
  const countRoot = count.closest(".result-count");
  countRoot?.classList.remove("is-hidden");
  countRoot?.removeAttribute("aria-hidden");
  count.textContent = Array.isArray(visibleItems) ? visibleItems.length : visibleCatalogItems().length;
};
const syncCatalogScopeState = ({ updateCount = true } = {}) => {
  const panel = document.querySelector('.app-panel[data-app-panel="catalog"]');
  if (panel) panel.dataset.catalogScope = appState.selectedCatalogKind || "all";
  if (updateCount) updateCatalogCount();
};

const catalogItemCard = item => `
    <button class="ui-card-button category-card catalog-card${item.type === "bey" ? " bey-card" : ""}" data-id="${item.id}">
      <div class="catalog-card-visual">${cardVisualMarkup(item)}</div>
      ${cardInfo(item)}
    </button>`;
const catalogCard = item => item.category ? toolsCard(item) : catalogItemCard(item);

const catalogCollectionConfig = {
  key: "catalog",
  gridSelector: "#catalogGrid",
  pageSize: CATALOG_PAGE_SIZE,
  getVisibleItems: visibleCatalogItems,
  renderKey: catalogRenderKey,
  syncRenderPage: syncCatalogRenderPage,
  getCurrentPage: () => appState.currentCatalogPage,
  setCurrentPage: page => { appState.currentCatalogPage = page; },
  cardTemplate: catalogCard,
  emptyMarkup: () => `<p class="catalog-empty search-empty">검색결과가 없습니다.</p>`,
  afterRender: updateCatalogCount,
  renderPagination: renderCatalogPagination
};

function renderCatalogItems() {
  renderCategoryCollection(catalogCollectionConfig);
}

export {
  ANIME_PAGE_SIZE,
  CATALOG_PAGE_SIZE,
  animeRenderKey,
  bindCatalogCardClicks,
  catalogCard,
  openCatalogCard,
  renderAnimePagination,
  renderCatalogItems,
  renderCatalogPagination,
  renderCategoryCollection,
  scrollAnimeGridIntoView,
  scrollCatalogGridIntoView,
  syncAnimeRenderPage,
  syncCatalogRenderPage,
  syncCatalogScopeState,
  updateCatalogCount
};
