const handlers = Object.create(null);
const serviceNames = new Set([
  "activatePrimarySection",
  "applyRoute",
  "bindSearchInput",
  "closeOpenCatalogDropdowns",
  "closeSearchHelpPopovers",
  "finishModalOpen",
  "itemDisplayName",
  "modal",
  "modalBackButtonMarkup",
  "openAnimeEpisodeDetail",
  "openBookDetail",
  "openCategoryAnimeEpisodesDetail",
  "openDetail",
  "openGameDetail",
  "openProductEntry",
  "openSearchResults",
  "openToolsDetail",
  "queueModalTransition",
  "routeIfNeeded",
  "setDropdownOption",
  "setMobileDrawerOpen",
  "setModalContent",
  "syncAnimeRouteHash"
]);

const missingService = name => {
  throw new Error(`App service is not registered: ${String(name)}`);
};

const appServices = {};
for (const name of serviceNames) {
  Object.defineProperty(appServices, name, {
    enumerable: true,
    get() {
      if (name === "modal" && !handlers[name]) return null;
      if (!(name in handlers)) missingService(name);
      return handlers[name];
    }
  });
}
Object.freeze(appServices);

const registerAppServices = services => {
  for (const [name, service] of Object.entries(services)) {
    if (!serviceNames.has(name)) throw new Error(`Unknown app service: ${name}`);
    if (name !== "modal" && typeof service !== "function") {
      throw new TypeError(`App service must be a function: ${name}`);
    }
    handlers[name] = service;
  }
};

export { appServices, registerAppServices };
