let animeFeaturePromise = null;
let releaseFeaturePromise = null;
let viewFeaturePromise = null;
let detailFeaturePromise = null;
const loadAnimeFeature = () => animeFeaturePromise ||= import("#app/anime");
const loadReleaseFeature = () => releaseFeaturePromise ||= import("#app/release-page");
const loadViewFeature = () => viewFeaturePromise ||= import("#app/view-controller");
const loadDetailFeature = () => detailFeaturePromise ||= Promise.all([
  import("#app/detail-controller"),
  import("#app/modal-controller"),
  import("#app/modal-context"),
  import("#app/detail-view")
]).then(modules => Object.assign({}, ...modules));
const renderAnimePage = (...args) => loadAnimeFeature().then(module => module.renderAnimePage(...args));
const openAnimeEpisodeDetail = (...args) => loadAnimeFeature().then(module => module.openAnimeEpisodeDetail(...args));
const openCategoryAnimeEpisodesDetail = (...args) => loadAnimeFeature().then(module => module.openCategoryAnimeEpisodesDetail(...args));
const openCategoryReleaseDetail = (...args) => loadReleaseFeature().then(module => module.openCategoryReleaseDetail(...args));

export {
  loadDetailFeature,
  loadAnimeFeature,
  loadReleaseFeature,
  loadViewFeature,
  openAnimeEpisodeDetail,
  openCategoryAnimeEpisodesDetail,
  openCategoryReleaseDetail,
  renderAnimePage
};
