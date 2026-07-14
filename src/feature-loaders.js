import { BeystadiumDataStore } from "#app/data-store";
import { prepareStyles, routeStyleManifest } from "#app/style-loader";

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
const loadRetryable = (current, setCurrent, factory) => {
  if (current) return current;
  const promise = factory().catch(error => {
    setCurrent(null);
    throw error;
  });
  setCurrent(promise);
  return promise;
};
const loadAnimeFeature = () => loadRetryable(animeFeaturePromise, value => { animeFeaturePromise = value; }, () => import("#app/anime")
  .then(module => initializeModule(module, "initializeAnimeFeature")));
const loadAnimeDetail = () => loadRetryable(animeDetailPromise, value => { animeDetailPromise = value; }, () => import("#app/anime-detail"));
const loadCatalogFeature = () => loadRetryable(catalogFeaturePromise, value => { catalogFeaturePromise = value; }, () => import("#app/catalog-feature")
  .then(module => initializeModule(module, "initializeCatalogFeature")));
const loadSearchFeature = () => loadRetryable(searchFeaturePromise, value => { searchFeaturePromise = value; }, () => Promise.all([
  import("#app/style-loader").then(module => module.ensureStyles("search")),
  import("#app/search-controller")
]).then(([, module]) => initializeModule(module, "initializeSearchFeature")));
const loadReleaseFeature = () => loadRetryable(releaseFeaturePromise, value => { releaseFeaturePromise = value; }, () => import("#app/release-page"));
const loadDetailFeature = () => loadRetryable(detailFeaturePromise, value => { detailFeaturePromise = value; }, () => Promise.all([
  import("#app/detail-controller"),
  import("#app/modal-controller"),
  import("#app/modal-context"),
  import("#app/detail-view")
]).then(modules => Object.assign({}, ...modules)));
const primaryRouteFeature = route => {
  if (route?.type === "catalog") return loadCatalogFeature();
  if (route?.type === "search") return loadSearchFeature();
  if (route?.type === "category-release") return loadReleaseFeature();
  if (route?.type === "category-anime" || route?.type === "category-anime-episodes") return loadAnimeFeature();
  return Promise.resolve(null);
};
const warmPrimaryRouteData = (route, ready, feature) => {
  if (ready && route?.type === "catalog") feature?.prepareCatalogSortMetadata?.();
};
const preparePrimaryRoute = async (route, { background = false } = {}) => {
  const tasks = [
    BeystadiumDataStore.ensureRoute(route, { background }),
    prepareStyles(routeStyleManifest[route?.type] || [], { background }),
    primaryRouteFeature(route)
  ];
  if (!background) {
    const [ready, , feature] = await Promise.all(tasks);
    warmPrimaryRouteData(route, ready, feature);
    return ready;
  }

  const [dataResult, styleResult, featureResult] = await Promise.allSettled(tasks);
  const ready = dataResult.status === "fulfilled" && dataResult.value === true;
  const prepared = ready && styleResult.status === "fulfilled" && featureResult.status === "fulfilled";
  if (prepared) warmPrimaryRouteData(route, ready, featureResult.value);
  return prepared;
};
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
  preparePrimaryRoute,
  renderAnimePage
};
