import { appState } from "#app/state";
import {
  cardInfo,
  cardVisualMarkup,
  catalogCardActionMarkup,
  catalogRenderKey,
  toolsCard,
  visibleCatalogItems
} from "#app/catalog-model";
import { renderCategoryCollection, renderPagination, scrollGridIntoView } from "#app/collection-view";

const CATALOG_PAGE_SIZE = 40;

const syncCatalogRenderPage = renderKey => {
  if (renderKey !== appState.currentCatalogRenderKey) {
    appState.currentCatalogRenderKey = renderKey;
    appState.currentCatalogPage = 1;
  }
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
const scrollCatalogGridIntoView = () => scrollGridIntoView({
  gridSelector: "#catalogGrid",
  controlSelector: ".catalog-control-bar"
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
    <article class="category-card catalog-card${item.type === "bey" ? " bey-card" : ""}" data-id="${item.id}">
      ${catalogCardActionMarkup(item)}
      <div class="catalog-card-visual">${cardVisualMarkup(item)}</div>
      ${cardInfo(item)}
    </article>`;
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

const renderCatalogItems = () => renderCategoryCollection(catalogCollectionConfig);

export {
  CATALOG_PAGE_SIZE,
  renderCatalogItems,
  renderCatalogPagination,
  scrollCatalogGridIntoView,
  syncCatalogRenderPage,
  syncCatalogScopeState,
  updateCatalogCount
};
