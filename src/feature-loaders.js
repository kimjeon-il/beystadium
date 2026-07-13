let animeFeaturePromise = null;
let animeDetailPromise = null;
let catalogFeaturePromise = null;
let searchFeaturePromise = null;
let releaseFeaturePromise = null;
let detailFeaturePromise = null;
const initializeModule = (module, method) => {
  module[method]?.();
  return module;
};
const loadAnimeFeature = () => animeFeaturePromise ||= import("#app/anime")
  .then(module => initializeModule(module, "initializeAnimeFeature"));
const loadAnimeDetail = () => animeDetailPromise ||= import("#app/anime-detail");
const loadCatalogFeature = () => catalogFeaturePromise ||= import("#app/catalog-feature")
  .then(module => initializeModule(module, "initializeCatalogFeature"));
const loadSearchFeature = () => searchFeaturePromise ||= Promise.all([
  import("#app/style-loader").then(module => module.ensureStyles("search")),
  import("#app/search-controller")
]).then(([, module]) => initializeModule(module, "initializeSearchFeature"));
const loadReleaseFeature = () => releaseFeaturePromise ||= import("#app/release-page");
const loadDetailFeature = () => detailFeaturePromise ||= Promise.all([
  import("#app/detail-controller"),
  import("#app/modal-controller"),
  import("#app/modal-context"),
  import("#app/detail-view")
]).then(modules => Object.assign({}, ...modules));
const renderAnimePage = (...args) => loadAnimeFeature().then(module => module.renderAnimePage(...args));
const openAnimeEpisodeDetail = (...args) => loadAnimeDetail().then(module => module.openAnimeEpisodeDetail(...args));
const openCategoryAnimeEpisodesDetail = (...args) => loadAnimeFeature().then(module => module.openCategoryAnimeEpisodesDetail(...args));
const openCategoryReleaseDetail = (...args) => loadReleaseFeature().then(module => module.openCategoryReleaseDetail(...args));

export {
  loadDetailFeature,
  loadAnimeFeature,
  loadCatalogFeature,
  loadReleaseFeature,
  loadSearchFeature,
  openAnimeEpisodeDetail,
  openCategoryAnimeEpisodesDetail,
  openCategoryReleaseDetail,
  renderAnimePage
};
