const animeSeasonOrder = [
  "topblade",
  "topblade-v",
  "gblade",
  "metal-fight",
  "metal-fight-2",
  "metal-fight-4d",
  "metal-fight-zerog",
  "burst",
  "burst-god",
  "burst-cho-z",
  "burst-gachi",
  "burst-superking",
  "burst-db",
  "beyblade-x",
  "beyblade-x-2",
  "beyblade-x-3"
];
const animeSeasonLabels = {
  topblade: "탑블레이드",
  "topblade-v": "탑블레이드 V",
  gblade: "팽이대전 G블레이드",
  "metal-fight": "메탈베이블레이드",
  "metal-fight-2": "메탈베이블레이드 2",
  "metal-fight-4d": "메탈베이블레이드 4D",
  "metal-fight-zerog": "메탈베이블레이드 제로G",
  burst: "베이블레이드 버스트",
  "burst-god": "베이블레이드 버스트 갓",
  "burst-cho-z": "베이블레이드 버스트 초제트",
  "burst-gachi": "베이블레이드 버스트 진검",
  "burst-superking": "베이블레이드 버스트 슈퍼킹",
  "burst-db": "베이블레이드 버스트 DB",
  "beyblade-x": "베이블레이드 X",
  "beyblade-x-2": "베이블레이드 X 2",
  "beyblade-x-3": "베이블레이드 X 3"
};
const animeSeasonEntries = () => animeSeasonOrder.map(value => [value, animeSeasonLabels[value]]).filter(([, label]) => label);
const animeCharacterAllSeason = "all";
const animeCharacterSeasonEntries = () => [[animeCharacterAllSeason, "전체 시리즈"], ...animeSeasonEntries()];
const latestAnimeSeason = () => animeSeasonOrder[animeSeasonOrder.length - 1] || "metal-fight";
const defaultAnimeSeason = () => [...animeSeasonOrder].reverse().find(season =>
  animeInfo.episodes.some(episode => episode.season === season)
) || latestAnimeSeason();
const normalizeAnimeSeason = season => animeSeasonLabels[season] ? season : defaultAnimeSeason();
const normalizeAnimeCharacterSeason = season => animeSeasonLabels[season] ? season : animeCharacterAllSeason;
const animeDisplayRegion = "kr";
let activeAnimeSeason = defaultAnimeSeason();
let activeAnimeEpisodeQuery = "";
let activeAnimeCharacterSeason = animeCharacterAllSeason;
const animeEpisodeControls = () => tableListControlsMarkup({
  label: "방영목록 필터",
  className: "anime-episode-controls",
  attrs: "data-anime-controls",
  dropdown: {
    label: animeSeasonLabels[activeAnimeSeason] || "",
    entries: animeSeasonEntries(),
    activeValue: activeAnimeSeason,
    dataAttr: "data-anime-season"
  },
  search: { id: "animeEpisodeSearchInput", value: activeAnimeEpisodeQuery }
});
const animeCharacterSeasonLabel = () =>
  activeAnimeCharacterSeason === animeCharacterAllSeason ? "전체 시리즈" : animeSeasonLabels[activeAnimeCharacterSeason] || "전체 시리즈";
const animeCharacterSeasonFilterRoot = () => document.querySelector("[data-anime-character-season-filter]");
const animeCharacterSeasonFilterMarkup = () => tableListDropdownMarkup({
  label: animeCharacterSeasonLabel(),
  entries: animeCharacterSeasonEntries(),
  activeValue: activeAnimeCharacterSeason,
  dataAttr: "data-anime-character-season"
});

function renderAnimeCharacterSeasonFilter() {
  const root = animeCharacterSeasonFilterRoot();
  if (!root) return;
  const renderKey = activeAnimeCharacterSeason;
  if (root.dataset.renderKey !== renderKey) {
    root.innerHTML = animeCharacterSeasonFilterMarkup();
    root.dataset.renderKey = renderKey;
  }
  root.querySelectorAll("[data-anime-character-season]").forEach(button => {
    if (button.dataset.animeCharacterSeasonBound) return;
    button.dataset.animeCharacterSeasonBound = "true";
    button.addEventListener("click", event => {
      event.preventDefault();
      activeAnimeCharacterSeason = normalizeAnimeCharacterSeason(event.currentTarget.dataset.animeCharacterSeason);
      event.currentTarget.closest(".catalog-dropdown")?.removeAttribute("open");
      currentAnimePage = 1;
      renderAnimePage();
      syncAnimeRouteHash({ overrides: { page: 1 } });
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
    .filter(character => activeAnimeCharacterSeason === animeCharacterAllSeason || character?.season === activeAnimeCharacterSeason)
    .map((character, index) => {
      const record = animeCharacterSearchRecord(character, index);
      const match = matchSearchRecord(record, query);
      return match.matched ? { character, index, score: match.score } : null;
    })
    .filter(Boolean)
    .sort((a, b) => query.isEmpty ? a.index - b.index : b.score - a.score || a.index - b.index)
    .map(entry => entry.character);
};
const categoryCollectionConfigs = {
  catalog: {
    key: "catalog",
    gridSelector: "#catalogGrid",
    pageSize: CATALOG_PAGE_SIZE,
    getVisibleItems: visibleCatalogItems,
    renderKey: catalogRenderKey,
    syncRenderPage: syncCatalogRenderPage,
    getCurrentPage: () => currentCatalogPage,
    setCurrentPage: page => { currentCatalogPage = page; },
    cardTemplate: catalogCard,
    emptyMarkup: () => `<p class="catalog-empty search-empty">검색결과가 없습니다.</p>`,
    afterRender: updateCatalogCount,
    renderPagination: renderCatalogPagination
  },
  animeCharacters: {
    key: "animeCharacters",
    gridSelector: "#animeCharacterGrid",
    countSelector: "#animeCount",
    pageSize: ANIME_PAGE_SIZE,
    getVisibleItems: visibleAnimeCharacters,
    renderKey: animeRenderKey,
    syncRenderPage: syncAnimeRenderPage,
    getCurrentPage: () => currentAnimePage,
    setCurrentPage: page => { currentAnimePage = page; },
    cardTemplate: animeCharacterCardMarkup,
    emptyMarkup: () => `<p class="anime-page-empty panel-empty-state">${animeSearchQuery() ? "검색결과가 없습니다." : "등록된 등장인물 및 베이 정보가 없습니다."}</p>`,
    renderPagination: renderAnimePagination
  }
};

function renderAnimePage() {
  renderAnimeCharacterSeasonFilter();
  renderCategoryCollection(categoryCollectionConfigs.animeCharacters);
}

const animeEpisodeHashPrefixes = {
  topblade: "TOPBLADE-EPISODE",
  "topblade-v": "TOPBLADE-V-EPISODE",
  gblade: "GBLADE-EPISODE",
  "metal-fight": "METAL-FIGHT-EPISODE",
  "metal-fight-2": "METAL-FIGHT-2-EPISODE",
  "metal-fight-4d": "METAL-FIGHT-4D-EPISODE",
  "metal-fight-zerog": "METAL-FIGHT-ZEROG-EPISODE",
  burst: "BURST-EPISODE",
  "burst-god": "BURST-GOD-EPISODE",
  "beyblade-x": "BEYBLADE-X-EPISODE",
  "beyblade-x-2": "BEYBLADE-X-2-EPISODE"
};
const animeEpisodeSeasonIndex = index => {
  const episode = animeInfo.episodes[index];
  if (!episode?.season) return -1;
  return animeInfo.episodes
    .slice(0, index + 1)
    .filter(item => item.season === episode.season).length;
};
const episodeHashId = index => {
  const episode = animeInfo.episodes[index];
  const prefix = animeEpisodeHashPrefixes[episode?.season];
  const seasonIndex = animeEpisodeSeasonIndex(index);
  return prefix && seasonIndex > 0 ? `${prefix}-${seasonIndex}` : "";
};
const isAnimeEpisodeHash = id => Object.values(animeEpisodeHashPrefixes).some(prefix => String(id || "").startsWith(`${prefix}-`));
const episodeIndexFromHash = id => {
  const source = String(id || "");
  const prefixEntry = Object.entries(animeEpisodeHashPrefixes).find(([, prefix]) => source.startsWith(`${prefix}-`));
  if (!prefixEntry) return -1;
  const [season, prefix] = prefixEntry;
  const match = source.slice(prefix.length + 1).match(/^\d+$/);
  if (!match) return -1;
  const seasonIndex = Number(match[0]);
  if (!Number.isInteger(seasonIndex) || seasonIndex < 1) return -1;
  const matchingEpisodes = animeInfo.episodes
    .map((episode, index) => ({ episode, index }))
    .filter(({ episode }) => episode.season === season);
  return matchingEpisodes[seasonIndex - 1]?.index ?? -1;
};
const animeEpisodeTitle = (episode, region = animeDisplayRegion) => {
  const title = episode?.titles?.[region] || episode?.titles?.kr || "";
  return [episode?.no || "", title].filter(Boolean).join(" ");
};

const animeEpisodeSearchText = episode => [
  episode.no || "",
  episode.titles?.[animeDisplayRegion] || "",
  animeAirDateLabel(episode.airDates?.[animeDisplayRegion] || ""),
  episode.note || ""
].join(" ");
const animeEpisodeDisplayInitialSearchText = episode => episode.titles?.[animeDisplayRegion] || "";

const visibleAnimeEpisodes = () => {
  const query = activeAnimeEpisodeQuery.trim();
  return animeInfo.episodes
    .map((episode, index) => ({ episode, index }))
    .filter(({ episode }) => episode.season === activeAnimeSeason)
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
      activeAnimeSeason = normalizeAnimeSeason(event.currentTarget.dataset.animeSeason);
      event.currentTarget.closest(".catalog-dropdown")?.removeAttribute("open");
      rememberAnimeModalContext();
      controller.renderPage();
    }));
    const animeSearch = animePanel.querySelector("#animeEpisodeSearchInput");
    bindSearchInput(animeSearch, ".release-search-box", { onInput: searchInput => {
      activeAnimeEpisodeQuery = searchInput.value.trim();
      rememberAnimeModalContext();
      controller.renderPage();
      const nextInput = animeEpisodesPageRoot()?.querySelector("#animeEpisodeSearchInput");
      nextInput?.focus();
      nextInput?.setSelectionRange(nextInput.value.length, nextInput.value.length);
    } });
    bindActionRows(animePanel, "[data-anime-episode-index]", animeRow => {
      const index = Number(animeRow.dataset.animeEpisodeIndex);
      queueModalTransition("list");
      openAnimeEpisodeDetail(index, {
        fromAnimeList: true,
        animeSeason: activeAnimeSeason,
        animeQuery: activeAnimeEpisodeQuery
      });
    });
  }
});

function rememberAnimeModalContext() {
  rememberModalContext("category-anime-episodes", "anime-episode", {
    animeSeason: activeAnimeSeason,
    animeQuery: activeAnimeEpisodeQuery
  });
}

function renderAnimeEpisodesPage() {
  animeEpisodeTableController.renderPage();
}

function openAnimeEpisodeDetail(indexOrId, options = {}) {
  const index = typeof indexOrId === "number" ? indexOrId : episodeIndexFromHash(indexOrId);
  const episode = animeInfo.episodes[index];
  if (!episode) return;
  const id = episodeHashId(index);
  if (!id) return;
  if (routeIfNeeded({ type: "detail", id, options }, options)) return;
  cleanupModelViewer();
  const backAnimeSeason = normalizeAnimeSeason(options.animeSeason || episode.season || activeAnimeSeason);
  const backAnimeQuery = typeof options.animeQuery === "string" ? options.animeQuery : activeAnimeEpisodeQuery;
  const backButton = options.fromAnimeList
    ? modalBackButtonMarkup({ label: "방영목록으로 돌아가기", animeEpisodes: true })
    : "";
  const content = setModalContent(`<div class="modal-inner category-anime-modal">
    <div class="modal-info category-anime-info">
      ${backButton}
      <div class="overview-title-row anime-episode-title-row">
        <h3 class="category-title">${escapeHtml(animeEpisodeTitle(episode))}</h3>
      </div>
    </div>
  </div>`);
  if (!content || !modal) return;
  content.querySelector("[data-back-anime-episodes]")?.addEventListener("click", () => {
    openCategoryAnimeEpisodesDetail({
      animeSeason: backAnimeSeason,
      animeQuery: backAnimeQuery
    });
  });
  finishModalOpen({
    contextKind: "metal-fight-episode",
    contextId: id,
    contextOptions: {
      fromAnimeList: options.fromAnimeList,
      animeSeason: backAnimeSeason,
      animeQuery: backAnimeQuery
    }
  });
}

function openCategoryAnimeEpisodesDetail(options = {}) {
  if (routeIfNeeded({ type: "category-anime-episodes", options }, options)) return;
  const preserveSearch = options.preserveSearch === true;
  if (options.animeSeason || !preserveSearch) activeAnimeSeason = normalizeAnimeSeason(options.animeSeason || activeAnimeSeason);
  if (typeof options.animeQuery === "string") activeAnimeEpisodeQuery = options.animeQuery;
  else if (!preserveSearch) activeAnimeEpisodeQuery = "";
  cleanupModelViewer();
  activatePrimarySection("anime-episodes", { preserveSearch });
  renderAnimeEpisodesPage();
  rememberAnimeModalContext();
}
