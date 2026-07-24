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
import { TableListController, animeAirDateCompactLabel, animeAirDateLabel, escapeAttributeValue, escapeHtml, responsiveDateSpans, tableListControlsMarkup, tableListDropdownMarkup, tableListPageMarkup, tableListTableMarkup } from "#app/release-core";
import { appServices, registerAppServices } from "#app/services";
import { normalizeRoute } from "#app/route-parser";
import { navigateToRoute } from "#app/navigation";
import { initializeSearchHelpController } from "#app/search-help-controller";
import { activeAppPanel, animeSearch, bindActionRows, setSearchInputValue } from "#app/ui-core";

if (!appState.activeAnimeSeason) appState.activeAnimeSeason = defaultAnimeSeason();

const ANIME_PAGE_SIZE = 40;
const SEARCH_RENDER_DELAY = 100;
const ANIME_CHARACTER_BEY_POPOVER_ID = "animeCharacterBeyPopover";
let initialized = false;
let animeRenderTimer = 0;
let animeRenderFrame = 0;
let animeCharacterLayoutFrame = 0;
let animeCharacterPopoverFrame = 0;
let animeCharacterBeyPopover = null;
let activeAnimeCharacterBeyButton = null;
let animeCharacterResizeObserver = null;
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

const animeCharacterGrid = () => document.querySelector("#animeCharacterGrid");
const animeCharacterBeyLists = () =>
  [...(animeCharacterGrid()?.querySelectorAll("[data-anime-character-bey-list]") || [])];

function closeAnimeCharacterBeyPopover() {
  if (activeAnimeCharacterBeyButton) {
    activeAnimeCharacterBeyButton.setAttribute("aria-expanded", "false");
    activeAnimeCharacterBeyButton.removeAttribute("aria-describedby");
    activeAnimeCharacterBeyButton.removeAttribute("aria-controls");
  }
  animeCharacterBeyPopover?.remove();
  animeCharacterBeyPopover = null;
  activeAnimeCharacterBeyButton = null;
}

function positionAnimeCharacterBeyPopover() {
  if (!animeCharacterBeyPopover || !activeAnimeCharacterBeyButton?.isConnected) {
    closeAnimeCharacterBeyPopover();
    return;
  }
  const margin = 14;
  const gap = 8;
  const viewport = window.visualViewport;
  const viewportLeft = viewport?.offsetLeft || 0;
  const viewportTop = viewport?.offsetTop || 0;
  const viewportWidth = viewport?.width || window.innerWidth;
  const viewportHeight = viewport?.height || window.innerHeight;
  const minLeft = viewportLeft + margin;
  const minTop = viewportTop + margin;
  const buttonRect = activeAnimeCharacterBeyButton.getBoundingClientRect();
  const popoverRect = animeCharacterBeyPopover.getBoundingClientRect();
  const maxLeft = Math.max(minLeft, viewportLeft + viewportWidth - margin - popoverRect.width);
  const maxTop = Math.max(minTop, viewportTop + viewportHeight - margin - popoverRect.height);
  const left = Math.max(minLeft, Math.min(buttonRect.left, maxLeft));
  let top = buttonRect.bottom + gap;
  if (top > maxTop) top = buttonRect.top - popoverRect.height - gap;
  animeCharacterBeyPopover.style.left = `${left}px`;
  animeCharacterBeyPopover.style.top = `${Math.max(minTop, Math.min(top, maxTop))}px`;
}

const scheduleAnimeCharacterPopoverPosition = () => {
  if (animeCharacterPopoverFrame) cancelAnimationFrame(animeCharacterPopoverFrame);
  animeCharacterPopoverFrame = requestAnimationFrame(() => {
    animeCharacterPopoverFrame = 0;
    positionAnimeCharacterBeyPopover();
  });
};

function openAnimeCharacterBeyPopover(button) {
  const list = button.closest("[data-anime-character-bey-list]");
  if (!list) return;
  let beys = [];
  try {
    beys = JSON.parse(list.dataset.animeCharacterBeys || "[]");
  } catch {
    beys = [];
  }
  if (!Array.isArray(beys) || !beys.length) return;
  const name = list.dataset.animeCharacterName || "등장인물";
  closeAnimeCharacterBeyPopover();
  animeCharacterBeyPopover = document.createElement("div");
  animeCharacterBeyPopover.id = ANIME_CHARACTER_BEY_POPOVER_ID;
  animeCharacterBeyPopover.className = "anime-character-bey-popover";
  animeCharacterBeyPopover.setAttribute("role", "tooltip");
  animeCharacterBeyPopover.innerHTML = `<strong>${escapeHtml(name)}의 사용 베이</strong>
    <div class="anime-character-bey-popover__list">${beys.map(bey =>
    `<span class="anime-character-bey-popover__chip">${escapeHtml(bey)}</span>`).join("")}</div>`;
  document.body.appendChild(animeCharacterBeyPopover);
  activeAnimeCharacterBeyButton = button;
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-controls", ANIME_CHARACTER_BEY_POPOVER_ID);
  button.setAttribute("aria-describedby", ANIME_CHARACTER_BEY_POPOVER_ID);
  positionAnimeCharacterBeyPopover();
}

function fitAnimeCharacterBeyList(list) {
  const chips = [...list.querySelectorAll("[data-anime-character-bey-chip]")];
  const moreButton = list.querySelector("[data-anime-character-bey-more]");
  if (!moreButton) return;
  chips.forEach(chip => { chip.hidden = false; });
  moreButton.hidden = true;
  moreButton.textContent = "";
  moreButton.removeAttribute("data-hidden-count");
  if (!chips.length || list.clientWidth < 1 || list.clientHeight < 1) return;

  const listBottom = list.getBoundingClientRect().top + list.clientHeight + .5;
  const overflowing = chips.filter(chip => chip.getBoundingClientRect().bottom > listBottom);
  overflowing.forEach(chip => { chip.hidden = true; });
  let hiddenCount = overflowing.length;
  if (!hiddenCount) return;

  moreButton.hidden = false;
  const visibleChips = () => chips.filter(chip => !chip.hidden);
  const updateMoreButton = () => {
    moreButton.textContent = `+${hiddenCount}`;
    moreButton.dataset.hiddenCount = String(hiddenCount);
    const name = list.dataset.animeCharacterName || "등장인물";
    moreButton.setAttribute("aria-label", `${name}의 숨겨진 사용 베이 ${hiddenCount}개 보기`);
  };
  updateMoreButton();
  while (moreButton.getBoundingClientRect().bottom > listBottom && visibleChips().length) {
    visibleChips().at(-1).hidden = true;
    hiddenCount += 1;
    updateMoreButton();
  }
}

const fitAnimeCharacterBeyLists = () => {
  animeCharacterBeyLists().forEach(fitAnimeCharacterBeyList);
  if (activeAnimeCharacterBeyButton) positionAnimeCharacterBeyPopover();
};

const scheduleAnimeCharacterBeyLayout = () => {
  if (animeCharacterLayoutFrame) cancelAnimationFrame(animeCharacterLayoutFrame);
  animeCharacterLayoutFrame = requestAnimationFrame(() => {
    animeCharacterLayoutFrame = 0;
    fitAnimeCharacterBeyLists();
  });
};

function initializeAnimeCharacterCards() {
  const grid = animeCharacterGrid();
  if (!grid || grid.dataset.animeCharacterCardsBound) return;
  grid.dataset.animeCharacterCardsBound = "true";
  grid.addEventListener("click", event => {
    const button = event.target.closest("[data-anime-character-bey-more]");
    if (!button || !grid.contains(button)) return;
    event.preventDefault();
    event.stopPropagation();
    if (button === activeAnimeCharacterBeyButton && animeCharacterBeyPopover) {
      closeAnimeCharacterBeyPopover();
      return;
    }
    openAnimeCharacterBeyPopover(button);
  });
  document.addEventListener("pointerdown", event => {
    if (!activeAnimeCharacterBeyButton || activeAnimeCharacterBeyButton.contains(event.target)) return;
    closeAnimeCharacterBeyPopover();
  });
  document.addEventListener("focusin", event => {
    if (!activeAnimeCharacterBeyButton || event.target === activeAnimeCharacterBeyButton) return;
    closeAnimeCharacterBeyPopover();
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && animeCharacterBeyPopover) closeAnimeCharacterBeyPopover();
  });
  window.addEventListener("hashchange", closeAnimeCharacterBeyPopover);
  window.addEventListener("resize", scheduleAnimeCharacterBeyLayout, { passive: true });
  window.addEventListener("scroll", scheduleAnimeCharacterPopoverPosition, { passive: true, capture: true });
  window.visualViewport?.addEventListener("resize", scheduleAnimeCharacterBeyLayout, { passive: true });
  window.visualViewport?.addEventListener("scroll", scheduleAnimeCharacterPopoverPosition, { passive: true });
  if (typeof ResizeObserver === "function") {
    animeCharacterResizeObserver = new ResizeObserver(scheduleAnimeCharacterBeyLayout);
    animeCharacterResizeObserver.observe(grid);
  }
  document.fonts?.ready.then(scheduleAnimeCharacterBeyLayout);
}

const animeCharacterCardMarkup = character => {
  const name = String(character?.name || character?.title || "").trim();
  const role = String(character?.role || "").trim();
  const description = String(character?.desc || "").trim();
  const beys = Array.isArray(character?.beys)
    ? character.beys.map(bey => String(bey || "").trim()).filter(Boolean)
    : [];
  const beyChips = beys.map(bey =>
    `<span class="anime-character-bey-chip" data-anime-character-bey-chip>${escapeHtml(bey)}</span>`).join("");
  return `<article class="category-card anime-character-card" data-anime-character-card="${escapeAttributeValue(name)}">
    <header class="anime-character-card__header">
      <h3>${escapeHtml(name)}</h3>
      ${role ? `<span class="anime-character-role">${escapeHtml(role)}</span>` : ""}
    </header>
    ${description ? `<p class="anime-character-summary">${escapeHtml(description)}</p>` : ""}
    <div class="anime-character-beys">
      <span class="anime-character-beys__label">사용 베이</span>
      <div class="anime-character-bey-list${beys.length ? "" : " is-empty"}"
        data-anime-character-bey-list
        data-anime-character-name="${escapeAttributeValue(name)}"
        data-anime-character-beys="${escapeAttributeValue(JSON.stringify(beys))}">
        ${beyChips || `<span class="anime-character-bey-empty">등록 정보 없음</span>`}
        <button class="anime-character-bey-more" type="button"
          data-anime-character-bey-more
          aria-expanded="false"
          hidden></button>
      </div>
    </div>
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
  afterRender: scheduleAnimeCharacterBeyLayout,
  renderPagination: renderAnimePagination
};

function renderAnimePage() {
  closeAnimeCharacterBeyPopover();
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
    return `<tr class="table-list-row anime-episode-row" data-anime-episode-index="${index}">
    <td>${escapeHtml(episode.no || "")}</td>
    <td><button class="table-list-row-action table-list-primary-text anime-episode-title" type="button">${escapeHtml(episode.titles?.[animeDisplayRegion] || "")}</button></td>
    <td>${responsiveDateSpans("anime-air-date-full", "anime-air-date-compact", animeAirDateLabel(airDate), animeAirDateCompactLabel(airDate))}</td>
  </tr>`;
  }).join("");
  return rows || `<tr class="table-list-empty-row"><td colspan="3">등록된 방영목록이 없습니다.</td></tr>`;
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
    appServices.bindSearchInput(animeSearch, ".table-list-search-box", { onInput: searchInput => {
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
  initializeAnimeCharacterCards();
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
