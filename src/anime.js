import { appState } from "#app/state";
import {
  animeCharacterAllSeason,
  animeCharacterSeasonEntries,
  animeDisplayRegion,
  animeSeasonEntries,
  animeSeasonLabels,
  defaultAnimeSeason,
  normalizeAnimeCharacterSeason,
  normalizeAnimeSeason
} from "#app/anime-core";
import { renderCategoryCollection, renderPagination, scrollGridIntoView } from "#app/collection-view";
import { animeSearchQuery, createSearchRecord, matchSearchRecord, matchesSearchText, prepareCatalogSearchQuery, searchFieldsFromValues } from "#app/search-engine";
import { animeInfo } from "#app/data-store";
import { TableListController, animeAirDateCompactLabel, animeAirDateLabel, escapeHtml, responsiveDateSpans, tableListControlsMarkup, tableListDropdownMarkup, tableListPageMarkup, tableListTableMarkup } from "#app/release-core";
import { appServices, registerAppServices } from "#app/services";
import { normalizeRoute } from "#app/route-parser";
import { navigateToRoute } from "#app/navigation";
import { initializeSearchHelpController } from "#app/search-help-controller";
import { activeAppPanel, animeSearch, bindActionRows, setSearchInputValue } from "#app/ui-core";

if (!appState.activeAnimeSeason) appState.activeAnimeSeason = defaultAnimeSeason();

const ANIME_PAGE_SIZE = 40;
const SEARCH_RENDER_DELAY = 100;
let initialized = false;
let animeRenderTimer = 0;
let animeRenderFrame = 0;
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
const scrollAnimeGridIntoView = () => scrollGridIntoView({
  gridSelector: "#animeCharacterGrid",
  controlSelector: ".anime-control-bar"
});
const scheduleAnimeRender = () => {
  if (animeRenderTimer) clearTimeout(animeRenderTimer);
  if (animeRenderFrame) cancelAnimationFrame(animeRenderFrame);
  animeRenderTimer = setTimeout(() => {
    animeRenderTimer = 0;
    animeRenderFrame = requestAnimationFrame(() => {
      animeRenderFrame = 0;
      renderAnimePage();
    });
  }, SEARCH_RENDER_DELAY);
};

const animeRouteFromState = (overrides = {}) => normalizeRoute({
  type: "category-anime",
  season: appState.activeAnimeCharacterSeason || "all",
  page: appState.currentAnimePage,
  query: animeSearchQuery(),
  ...overrides
});
const syncAnimeRouteHash = ({ replace = true, force = false, overrides = {} } = {}) => {
  if (!force && (appState.applyingRoute || activeAppPanel()?.dataset.appPanel !== "anime")) return;
  navigateToRoute(animeRouteFromState(overrides), {
    replace,
    apply: false,
    preserveScroll: true,
    preserveSearch: true
  });
};
const openCategoryAnimePage = (options = {}) => {
  const { updateHash = true, replace = false, preserveSearch = false } = options;
  const route = normalizeRoute({ type: "category-anime", ...options });
  if (updateHash && !appState.applyingRoute) {
    navigateToRoute(route, { replace });
    return;
  }
  appServices.activatePrimarySection("anime", { preserveSearch });
  appState.activeAnimeCharacterSeason = normalizeAnimeCharacterSeason(route.season);
  if (Object.hasOwn(options, "query") || Object.hasOwn(options, "q") || !preserveSearch) {
    setSearchInputValue(animeSearch, route.query);
  }
  appState.currentAnimePage = route.page;
  appState.currentAnimeRenderKey = animeRenderKey();
  renderAnimePage();
};
const restoreStoredAnimeOrigin = originState => {
  if (originState?.animeSeason) appState.activeAnimeCharacterSeason = normalizeAnimeCharacterSeason(originState.animeSeason);
  if (typeof originState?.animeQuery === "string") setSearchInputValue(animeSearch, originState.animeQuery);
  renderAnimePage();
  const page = Number(originState?.animePage);
  if (Number.isFinite(page) && page > 1) {
    appState.currentAnimePage = Math.floor(page);
    renderAnimePage();
  }
};

const animeEpisodeControls = () => tableListControlsMarkup({
  label: "방영목록 필터",
  className: "anime-episode-controls",
  attrs: "data-anime-controls",
  dropdown: {
    label: animeSeasonLabels[appState.activeAnimeSeason] || "",
    entries: animeSeasonEntries(),
    activeValue: appState.activeAnimeSeason,
    dataAttr: "data-anime-season"
  },
  search: { id: "animeEpisodeSearchInput", value: appState.activeAnimeEpisodeQuery }
});
const animeCharacterSeasonLabel = () =>
  appState.activeAnimeCharacterSeason === animeCharacterAllSeason ? "전체 시리즈" : animeSeasonLabels[appState.activeAnimeCharacterSeason] || "전체 시리즈";
const animeCharacterSeasonFilterRoot = () => document.querySelector("[data-anime-character-season-filter]");
const animeCharacterSeasonFilterMarkup = () => tableListDropdownMarkup({
  label: animeCharacterSeasonLabel(),
  entries: animeCharacterSeasonEntries(),
  activeValue: appState.activeAnimeCharacterSeason,
  dataAttr: "data-anime-character-season"
});

function renderAnimeCharacterSeasonFilter() {
  const root = animeCharacterSeasonFilterRoot();
  if (!root) return;
  const renderKey = appState.activeAnimeCharacterSeason;
  if (root.dataset.renderKey !== renderKey) {
    root.innerHTML = animeCharacterSeasonFilterMarkup();
    root.dataset.renderKey = renderKey;
  }
  root.querySelectorAll("[data-anime-character-season]").forEach(button => {
    if (button.dataset.animeCharacterSeasonBound) return;
    button.dataset.animeCharacterSeasonBound = "true";
    button.addEventListener("click", event => {
      event.preventDefault();
      appState.activeAnimeCharacterSeason = normalizeAnimeCharacterSeason(event.currentTarget.dataset.animeCharacterSeason);
      event.currentTarget.closest(".catalog-dropdown")?.removeAttribute("open");
      appState.currentAnimePage = 1;
      renderAnimePage();
      appServices.syncAnimeRouteHash({ overrides: { page: 1 } });
    });
  });
}

const animeCharacterCardMarkup = character => {
  const name = character?.name || character?.title || "";
  const beys = Array.isArray(character?.beys) ? character.beys.filter(Boolean).join(" / ") : "";
  const detail = character?.desc || character?.role || "";
  return `<article class="category-card anime-character-card">
    <strong>${escapeHtml(name)}</strong>
    ${beys ? `<small>${escapeHtml(beys)}</small>` : ""}
    ${detail ? `<p>${escapeHtml(detail)}</p>` : ""}
  </article>`;
};
const animeCharacterSearchFields = character => [
  ...searchFieldsFromValues("primaryName", [character?.name, character?.title]),
  ...searchFieldsFromValues("alias", [character?.jpName, character?.en]),
  ...searchFieldsFromValues("category", [character?.season]),
  ...searchFieldsFromValues("composition", [Array.isArray(character?.beys) ? character.beys.join(" ") : ""]),
  ...searchFieldsFromValues("description", [character?.desc, character?.role])
];
const animeCharacterSearchRecord = (character, index) =>
  createSearchRecord("anime-character", character, animeCharacterSearchFields(character), index);
const visibleAnimeCharacters = () => {
  const characters = Array.isArray(animeInfo.characters) ? animeInfo.characters : [];
  const query = prepareCatalogSearchQuery(animeSearchQuery());
  return characters
    .filter(character => appState.activeAnimeCharacterSeason === animeCharacterAllSeason || character?.season === appState.activeAnimeCharacterSeason)
    .map((character, index) => {
      const record = animeCharacterSearchRecord(character, index);
      const match = matchSearchRecord(record, query);
      return match.matched ? { character, index, score: match.score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => query.isEmpty ? a.index - b.index : b.score - a.score || a.index - b.index)
    .map(entry => entry.character);
};
const animeCharacterCollectionConfig = {
  key: "animeCharacters",
  gridSelector: "#animeCharacterGrid",
  countSelector: "#animeCount",
  pageSize: ANIME_PAGE_SIZE,
  getVisibleItems: visibleAnimeCharacters,
  renderKey: animeRenderKey,
  syncRenderPage: syncAnimeRenderPage,
  getCurrentPage: () => appState.currentAnimePage,
  setCurrentPage: page => { appState.currentAnimePage = page; },
  cardTemplate: animeCharacterCardMarkup,
  emptyMarkup: () => `<p class="anime-page-empty panel-empty-state">${animeSearchQuery() ? "검색결과가 없습니다." : "등록된 등장인물 및 베이 정보가 없습니다."}</p>`,
  renderPagination: renderAnimePagination
};

function renderAnimePage() {
  renderAnimeCharacterSeasonFilter();
  renderCategoryCollection(animeCharacterCollectionConfig);
}

const animeEpisodeSearchText = episode => [
  episode.no || "",
  episode.titles?.[animeDisplayRegion] || "",
  animeAirDateLabel(episode.airDates?.[animeDisplayRegion] || ""),
  episode.note || ""
].join(" ");
const animeEpisodeDisplayInitialSearchText = episode => episode.titles?.[animeDisplayRegion] || "";

const visibleAnimeEpisodes = () => {
  const query = appState.activeAnimeEpisodeQuery.trim();
  return animeInfo.episodes
    .map((episode, index) => ({ episode, index }))
    .filter(({ episode }) => episode.season === appState.activeAnimeSeason)
    .filter(({ episode }) => matchesSearchText(animeEpisodeSearchText(episode), query, animeEpisodeDisplayInitialSearchText(episode)));
};

const animeEpisodeRowsMarkup = visibleRows => {
  const rows = visibleRows.map(({ episode, index }) => {
    const airDate = episode.airDates?.[animeDisplayRegion] || "";
    return `<tr class="table-list-row anime-episode-row" role="button" tabindex="0" data-anime-episode-index="${index}">
    <td>${escapeHtml(episode.no || "")}</td>
    <td><span class="release-product-link">${escapeHtml(episode.titles?.[animeDisplayRegion] || "")}</span></td>
    <td>${responsiveDateSpans("anime-air-date-full", "anime-air-date-compact", animeAirDateLabel(airDate), animeAirDateCompactLabel(airDate))}</td>
  </tr>`;
  }).join("");
  return rows || `<tr class="table-list-empty-row release-empty-row"><td colspan="3">등록된 방영목록이 없습니다.</td></tr>`;
};

const animeEpisodesMarkup = () => {
  const visibleRows = visibleAnimeEpisodes();
  const tableMode = visibleRows.length > 8 ? "scroll" : "fit";
  const tableMarkup = tableListTableMarkup({
    scrollClass: "anime-episode-table-scroll",
    tableClass: "anime-episode-table",
    head: `<thead>
      <tr>
        <th>회차</th>
        <th>제목</th>
        <th>방영일</th>
      </tr>
    </thead>`,
    body: animeEpisodeRowsMarkup(visibleRows)
  });
  return tableListPageMarkup({
    className: "category-anime-episodes anime-episode-list-page",
    attrs: `data-anime-table-mode="${tableMode}"`,
    controlsMarkup: animeEpisodeControls(),
    tableMarkup
  });
};
const animeEpisodesPageRoot = () => document.querySelector("[data-anime-episodes-page-content]");
const animeEpisodeTableController = new TableListController({
  root: animeEpisodesPageRoot,
  pageMarkup: animeEpisodesMarkup,
  bind: (root, controller) => {
    const animePanel = root.querySelector(".category-anime-episodes");
    if (!animePanel) return;
    animePanel.querySelectorAll("[data-anime-season]").forEach(button => button.addEventListener("click", event => {
      appState.activeAnimeSeason = normalizeAnimeSeason(event.currentTarget.dataset.animeSeason);
      event.currentTarget.closest(".catalog-dropdown")?.removeAttribute("open");
      controller.renderPage();
    }));
    const animeSearch = animePanel.querySelector("#animeEpisodeSearchInput");
    appServices.bindSearchInput(animeSearch, ".release-search-box", { onInput: searchInput => {
      appState.activeAnimeEpisodeQuery = searchInput.value.trim();
      controller.renderPage();
      const nextInput = animeEpisodesPageRoot()?.querySelector("#animeEpisodeSearchInput");
      nextInput?.focus();
      nextInput?.setSelectionRange(nextInput.value.length, nextInput.value.length);
    } });
    bindActionRows(animePanel, "[data-anime-episode-index]", animeRow => {
      const index = Number(animeRow.dataset.animeEpisodeIndex);
      appServices.queueModalTransition("list");
      appServices.openAnimeEpisodeDetail(index, {
        fromAnimeList: true,
        animeSeason: appState.activeAnimeSeason,
        animeQuery: appState.activeAnimeEpisodeQuery
      });
    });
  }
});

function renderAnimeEpisodesPage() {
  animeEpisodeTableController.renderPage();
}

function openCategoryAnimeEpisodesDetail(options = {}) {
  if (appServices.routeIfNeeded({ type: "category-anime-episodes", options }, options)) return;
  const preserveSearch = options.preserveSearch === true;
  if (options.animeSeason) appState.activeAnimeSeason = normalizeAnimeSeason(options.animeSeason);
  else if (!preserveSearch && !animeInfo.episodes.some(episode => episode.season === appState.activeAnimeSeason)) appState.activeAnimeSeason = defaultAnimeSeason();
  if (typeof options.animeQuery === "string") appState.activeAnimeEpisodeQuery = options.animeQuery;
  else if (!preserveSearch) appState.activeAnimeEpisodeQuery = "";
  appServices.activatePrimarySection("anime-episodes", { preserveSearch });
  renderAnimeEpisodesPage();
}

const initializeAnimeFeature = () => {
  if (initialized) return;
  initialized = true;
  initializeSearchHelpController();
  appServices.bindSearchInput(animeSearch, ".anime-search-box", {
    onInput: () => {
      appState.currentAnimePage = 1;
      scheduleAnimeRender();
      syncAnimeRouteHash({ overrides: { page: 1 } });
    }
  });
  document.querySelector("#animePagination")?.addEventListener("click", event => {
    const button = event.target.closest("[data-anime-page]");
    if (!button || button.disabled) return;
    event.preventDefault();
    appState.currentAnimePage = Number(button.dataset.animePage) || 1;
    renderAnimePage();
    syncAnimeRouteHash();
    scrollAnimeGridIntoView();
  });
};

registerAppServices({ syncAnimeRouteHash });

export {
  initializeAnimeFeature,
  openCategoryAnimePage,
  openCategoryAnimeEpisodesDetail,
  restoreStoredAnimeOrigin,
  syncAnimeRouteHash,
  renderAnimePage
};
