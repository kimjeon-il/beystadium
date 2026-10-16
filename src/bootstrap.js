import { BeystadiumDataStore } from "#app/data-store";

const lazyInteractionSelector = [
  "button",
  "a[href]",
  "input",
  "summary",
  "[role='button']",
  "[data-category-catalog-open]",
  "[data-category-release-open]",
  "[data-category-anime-open]",
  "[data-category-anime-episodes-open]"
].join(",");
const categoryInteractionSelector = [
  "[data-category-catalog-open]",
  "[data-category-release-open]",
  "[data-category-anime-open]",
  "[data-category-anime-episodes-open]"
].join(",");

let appPromise = null;
let appLoaded = false;
const startupListeners = new window.AbortController();

const loadApp = () => {
  if (!appPromise) {
    appPromise = import("#app/entry").then(module => {
      appLoaded = true;
      startupListeners.abort();
      return module;
    });
  }
  return appPromise;
};

const appInteractionTarget = target => target?.closest?.(lazyInteractionSelector) || null;
const categoryInteractionTarget = target => target?.closest?.(categoryInteractionSelector) || null;

const primeApp = event => {
  if (appLoaded) return;
  const target = appInteractionTarget(event.target);
  if (target) void loadApp().then(module => module.prepareInteraction?.(target));
};
const primeCategoryApp = event => {
  if (appLoaded) return;
  const target = categoryInteractionTarget(event.target);
  if (target) void loadApp().then(module => module.prepareInteraction?.(target));
};

const replayClickAfterLoad = event => {
  if (appLoaded) return;
  const target = appInteractionTarget(event.target);
  if (!target) return;
  event.preventDefault();
  event.stopImmediatePropagation();
  void loadApp().then(async module => {
    await module.prepareInteraction?.(target);
    target.click();
  });
};

const replayInputAfterLoad = event => {
  if (appLoaded || !event.target?.matches?.("input[type='search']")) return;
  const input = event.target;
  const value = input.value;
  event.stopImmediatePropagation();
  void loadApp().then(async module => {
    await module.prepareInteraction?.(input);
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  });
};

try {
  await BeystadiumDataStore.initialize();
  if (window.location.hash) {
    await loadApp();
  } else {
    document.documentElement.classList.remove("route-booting");
    const { signal } = startupListeners;
    document.addEventListener("pointerover", primeCategoryApp, { capture: true, passive: true, signal });
    document.addEventListener("pointerdown", primeApp, { capture: true, passive: true, signal });
    document.addEventListener("focusin", primeApp, { capture: true, signal });
    document.addEventListener("click", replayClickAfterLoad, { capture: true, signal });
    document.addEventListener("input", replayInputAfterLoad, { capture: true, signal });
    window.addEventListener("hashchange", () => void loadApp(), { signal });
  }
} catch (error) {
  document.documentElement.classList.remove("route-booting");
  console.error(error);
}
