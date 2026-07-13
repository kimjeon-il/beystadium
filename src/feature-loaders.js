let animeFeaturePromise = null;
let releaseFeaturePromise = null;
const loadAnimeFeature = () => animeFeaturePromise ||= import("#app/anime");
const loadReleaseFeature = () => releaseFeaturePromise ||= import("#app/release-page");
const renderAnimePage = (...args) => loadAnimeFeature().then(module => module.renderAnimePage(...args));
const openAnimeEpisodeDetail = (...args) => loadAnimeFeature().then(module => module.openAnimeEpisodeDetail(...args));
const openCategoryAnimeEpisodesDetail = (...args) => loadAnimeFeature().then(module => module.openCategoryAnimeEpisodesDetail(...args));
const openCategoryReleaseDetail = (...args) => loadReleaseFeature().then(module => module.openCategoryReleaseDetail(...args));

export {
  loadAnimeFeature,
  loadReleaseFeature,
  openAnimeEpisodeDetail,
  openCategoryAnimeEpisodesDetail,
  openCategoryReleaseDetail,
  renderAnimePage
};
