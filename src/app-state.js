const appState = {
  activeReleaseRegion: "kr",
  activeReleaseSeries: "",
  activeReleaseSort: { key: "release", direction: "asc" },
  activeReleaseQuery: "",
  selectedCatalogKind: "",
  selectedCatalogSeries: "all",
  activeCatalogSort: "latest",
  currentCatalogPage: 1,
  currentCatalogRenderKey: "",
  currentAnimePage: 1,
  currentAnimeRenderKey: "",
  applyingRoute: false,
  modalOriginRoute: null,
  modalOriginRouteExplicit: false,
  activeDetailModalContext: null,
  lastPrimaryRoute: { type: "overview" },
  activeModalTagButton: null,
  activeSearchPreview: null,
  lastAppliedRouteKey: "",
  activeAnimeCharacterSeason: "all",
  activeAnimeSeason: "",
  activeAnimeEpisodeQuery: ""
};

export { appState };
