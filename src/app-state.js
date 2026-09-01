const appState = {
  release: {
    region: "kr",
    series: "",
    sort: { key: "release", direction: "asc" },
    query: ""
  },
  catalog: {
    kind: "",
    series: "all",
    sort: "latest",
    page: 1,
    renderKey: ""
  },
  anime: {
    page: 1,
    renderKey: "",
    characterSeason: "all",
    season: "",
    episodeQuery: ""
  },
  routing: {
    applying: false,
    lastPrimary: { type: "overview" },
    lastAppliedKey: ""
  },
  modal: {
    originRoute: null,
    originExplicit: false,
    detailContext: null,
    activeTagButton: null
  },
  search: {
    activePreview: null
  }
};

export { appState };
