const styleVersion = "20260717-dead-code-cleanup";
const styleOrder = ["page", "collection", "table", "release", "anime", "catalog", "search", "modal"];
const styleFiles = Object.fromEntries(styleOrder.map(key => [key, `./styles/${key}.css?v=${styleVersion}`]));
const stylePromises = new Map();

const routeStyleManifest = Object.freeze({
  overview: [],
  search: ["page", "collection", "search"],
  catalog: ["page", "collection", "catalog", "search"],
  "category-release": ["page", "table", "release"],
  "category-anime": ["page", "collection", "anime", "search"],
  "category-anime-episodes": ["page", "table", "anime"],
  "rare-bey-get-list": ["page", "table", "release", "modal"]
});

const showStyleError = error => {
  const root = document.querySelector("#dataLoadStatus");
  if (!root) return;
  root.hidden = false;
  root.classList.add("is-error");
  const message = root.querySelector("[data-load-message]");
  if (message) message.textContent = "화면 스타일을 불러오지 못했습니다.";
  root.querySelector("[data-load-retry]")?.removeAttribute("hidden");
  console.error(error);
};

const observeStylePromise = (promise, { background = false } = {}) => background
  ? promise
  : promise.catch(error => {
    showStyleError(error);
    throw error;
  });

const loadStyle = (key, options = {}) => {
  if (!styleFiles[key]) return Promise.reject(new Error(`Unknown style key: ${key}`));
  const current = document.querySelector(`link[data-style-key="${key}"]`);
  if (current?.sheet) return Promise.resolve(current);
  if (stylePromises.has(key)) return observeStylePromise(stylePromises.get(key), options);

  const promise = new Promise((resolve, reject) => {
    const link = current || document.createElement("link");
    link.rel = "stylesheet";
    link.href = styleFiles[key];
    link.dataset.styleKey = key;
    link.addEventListener("load", () => resolve(link), { once: true });
    link.addEventListener("error", () => reject(new Error(`Stylesheet failed to load: ${styleFiles[key]}`)), { once: true });
    if (!current) document.head.append(link);
  }).catch(error => {
    stylePromises.delete(key);
    document.querySelector(`link[data-style-key="${key}"]`)?.remove();
    throw error;
  });

  stylePromises.set(key, promise);
  return observeStylePromise(promise, options);
};

const prepareStyles = (keys, options = {}) => {
  const requested = new Set(keys.flat().filter(Boolean));
  return Promise.all(styleOrder.filter(key => requested.has(key)).map(key => loadStyle(key, options)));
};
const ensureStyles = (...keys) => prepareStyles(keys);

export { ensureStyles, prepareStyles, routeStyleManifest, styleFiles };
