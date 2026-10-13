import { animeDataPath, homeModulePaths, homeStylePaths, modulePath, registryDataPath, resourcePattern, routeStylePaths, searchPaths, seriesPath, seriesPaths, stylePath } from "./helpers/app-resources.mjs";
import { expect, test } from "@playwright/test";
import { animeLayoutSnapshot, consoleErrors } from "./helpers/ui-assertions.mjs";

test("detail hashes entered after home resolve unloaded items and preserve unknown-ID fallback", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  await page.evaluate(() => { window.location.hash = "BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS"; });
  const modal = page.locator("#detailModal");
  await expect(modal).toBeVisible();
  await expect(modal.locator(".bey-character-link")).toHaveText(["단", "레이크"]);
  await modal.locator("#modalClose").click();
  await expect(modal).not.toBeVisible();
  await page.evaluate(() => { window.location.hash = "BEY-NOT-A-REGISTERED-ITEM"; });
  await expect(page).toHaveURL(/\/$/);
  await expect(modal).not.toBeVisible();
  expect(errors).toEqual([]);
});

test("primary routes render without runtime errors", async ({ page }) => {
  const errors = consoleErrors(page);
  for (const hash of ["", "#toy-catalog?scope=bey&series=x", "#toy-release", "#anime-character", "#anime-episode"]) {
    await page.goto(`/${hash}`);
    await expect(page.locator("html")).not.toHaveClass(/route-booting/);
    await expect(page.locator(".app-panel.active")).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("a failed late detail registry load keeps its address for retry", async ({ page }) => {
  const registryPattern = resourcePattern(registryDataPath);
  await page.route(registryPattern, route => route.abort("failed"));
  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  const id = "BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS";
  await page.evaluate(value => { window.location.hash = value; }, id);
  await expect(page.locator("#dataLoadStatus.is-error")).toBeVisible();
  // Let error rendering and the hash handler finish before exercising reload.
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  await expect(page).toHaveURL(new RegExp(`#${id}$`));
  await page.unroute(registryPattern);
  await page.locator("[data-load-retry]").click();
  await expect(page.locator("#detailModal")).toBeVisible();
  await expect(page.locator("#detailModal .bey-character-link")).toHaveText(["단", "레이크"]);
});

test("a pending detail registry load cannot replace a newer primary hash", async ({ page }) => {
  let releaseRegistry;
  const registryGate = new Promise(resolve => { releaseRegistry = resolve; });
  await page.route(resourcePattern(registryDataPath), async route => {
    await registryGate;
    await route.continue();
  });
  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  const requestedRegistry = page.waitForRequest(resourcePattern(registryDataPath));
  await page.evaluate(() => { window.location.hash = "BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS"; });
  await requestedRegistry;
  await page.evaluate(() => { window.location.hash = "anime-character?season=metal-fight"; });
  await expect(page.locator(".anime-character-card").first()).toBeVisible();
  const registryResponse = page.waitForResponse(resourcePattern(registryDataPath));
  releaseRegistry();
  await registryResponse;
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  await expect(page).toHaveURL(/#anime-character\?season=metal-fight$/);
  await expect(page.locator("#detailModal")).not.toBeVisible();
});

test("runtime data is loaded by route instead of during home boot", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "request coverage only needs one browser");
  const runtimeRequests = [];
  const moduleRequests = [];
  const styleRequests = [];
  page.on("request", request => {
    const pathname = new URL(request.url()).pathname;
    if (pathname.includes("/data/runtime/")) runtimeRequests.push(pathname);
    if (request.resourceType() === "script") moduleRequests.push(pathname);
    if (request.resourceType() === "stylesheet") styleRequests.push(pathname);
  });

  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  expect(runtimeRequests).toContain("/data/runtime/index.json");
  expect(runtimeRequests.some(path => seriesPaths.includes(path))).toBe(false);
  expect(runtimeRequests.some(path => searchPaths.includes(path))).toBe(false);
  expect(runtimeRequests).not.toContain(registryDataPath);
  expect(moduleRequests).toContain(homeModulePaths[0]);
  expect(moduleRequests).toContain(modulePath("#app/data-store"));
  expect(moduleRequests).not.toContain(modulePath("#app/entry"));
  expect(moduleRequests).not.toContain(modulePath("#app/router"));
  expect(new Set(styleRequests)).toEqual(new Set(homeStylePaths));

  await page.goto("/#toy-release");
  await expect(page.locator(".release-product-row").first()).toBeVisible();
  expect(moduleRequests).toContain(modulePath("#app/release-page"));
  expect(moduleRequests).not.toContain(modulePath("#app/collection-view"));
  expect(moduleRequests).not.toContain(modulePath("#app/catalog-feature"));
  expect(moduleRequests).not.toContain(modulePath("#app/search-controller"));
  expect(moduleRequests).not.toContain(modulePath("#app/search-feature"));
  expect(moduleRequests).not.toContain(modulePath("#app/catalog-model"));
  expect(moduleRequests).not.toContain(modulePath("#app/detail-controller"));
  expect(moduleRequests).not.toContain(modulePath("#app/detail-view"));
  expect(moduleRequests).not.toContain(modulePath("#app/modal-controller"));
  expect(moduleRequests).not.toContain(modulePath("#app/anime"));
  expect(styleRequests).toContain(stylePath("table"));
  expect(styleRequests).toContain(stylePath("release"));
  expect(styleRequests).toContain(stylePath("page"));
  expect(styleRequests).not.toContain(stylePath("catalog"));
  expect(styleRequests).not.toContain(stylePath("modal"));

  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  expect(runtimeRequests).toContain(seriesPath("x"));
  expect(runtimeRequests.some(path => searchPaths.includes(path))).toBe(false);
  expect(moduleRequests).toContain(modulePath("#app/router"));
  expect(moduleRequests).toContain(modulePath("#app/catalog-feature"));
  expect(moduleRequests).toContain(modulePath("#app/catalog-view"));
  expect(moduleRequests).toContain(modulePath("#app/catalog-model"));
  expect(moduleRequests).toContain(modulePath("#app/collection-view"));
  expect(moduleRequests).toContain(modulePath("#app/search-engine"));
  expect(moduleRequests).not.toContain(modulePath("#app/anime"));
  expect(styleRequests).toContain(stylePath("collection"));
  expect(styleRequests).toContain(stylePath("catalog"));
  expect(styleRequests).toContain(stylePath("search"));

  await page.goto("/#anime-character");
  await expect(page.locator('[data-app-panel="anime"].active')).toBeVisible();
  expect(moduleRequests).toContain(modulePath("#app/anime"));
  expect(styleRequests).toContain(stylePath("anime"));
  expect(styleRequests).toContain(stylePath("search"));
});

test("catalog intent preload stays silent and is reused by navigation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "request orchestration only needs one browser");
  const requests = [];
  const heldRoutes = [];
  let releaseData;
  const dataGate = new Promise(resolve => { releaseData = resolve; });
  page.on("request", request => requests.push(new URL(request.url()).pathname));
  await page.route(url => seriesPaths.includes(url.pathname), async route => {
    heldRoutes.push(route);
    await dataGate;
    await route.continue();
  });

  await page.goto("/");
  const catalogButton = page.locator("[data-category-catalog-open]").first();
  await catalogButton.hover();
  await expect.poll(() => heldRoutes.length).toBe(seriesPaths.length);
  await expect(page.locator("#dataLoadStatus")).toBeHidden();
  await expect(page.locator("body")).toHaveAttribute("aria-busy", "false");
  await expect(page).toHaveURL(/\/$/);
  await expect(page.locator('[data-app-panel="overview"].active')).toBeVisible();

  await catalogButton.click();
  await expect(page.locator("#dataLoadStatus")).toBeVisible();
  await expect(page.locator("body")).toHaveAttribute("aria-busy", "true");
  releaseData();
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await expect(page.locator("#dataLoadStatus")).toBeHidden();
  expect(requests.filter(path => seriesPaths.includes(path))).toHaveLength(seriesPaths.length);
  expect(requests.filter(path => path === modulePath("#app/catalog-feature"))).toHaveLength(1);
  expect(requests.filter(path => path === stylePath("catalog"))).toHaveLength(1);
});

test("focus and touch intent preload only their category", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "intent coverage only needs one browser");
  const cases = [
    {
      selector: "[data-category-release-open]",
      expectedData: seriesPath("x"),
      expectedModule: modulePath("#app/release-page"),
      trigger: locator => locator.focus()
    },
    {
      selector: "[data-category-anime-open]",
      expectedData: animeDataPath,
      expectedModule: modulePath("#app/anime"),
      trigger: locator => locator.dispatchEvent("pointerdown", { pointerType: "touch", bubbles: true })
    }
  ];

  for (const entry of cases) {
    const context = await browser.newContext();
    const page = await context.newPage();
    const requests = [];
    page.on("request", request => requests.push(new URL(request.url()).pathname));
    await page.goto("/");
    const trigger = page.locator(entry.selector).first();
    await entry.trigger(trigger);
    await expect.poll(() => requests.includes(entry.expectedData) && requests.includes(entry.expectedModule)).toBe(true);
    await expect(page).toHaveURL(/\/$/);
    await expect(page.locator('[data-app-panel="overview"].active')).toBeVisible();
    await expect(page.locator("#dataLoadStatus")).toBeHidden();
    await entry.trigger(trigger);
    await expect.poll(() => requests.filter(path => path === entry.expectedData).length).toBe(1);
    expect(requests.filter(path => path === entry.expectedModule)).toHaveLength(1);
    await context.close();
  }
});

test("cold catalog route requests data styles and feature in parallel", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "parallel request coverage only needs one browser");
  const context = await browser.newContext();
  const page = await context.newPage();
  const pending = new Set();
  let releaseRequests;
  const requestGate = new Promise(resolve => { releaseRequests = resolve; });
  const hold = async (name, pattern) => page.route(pattern, async route => {
    pending.add(name);
    await requestGate;
    await route.continue();
  });
  await hold("data", resourcePattern(seriesPath("x")));
  await hold("feature", resourcePattern(modulePath("#app/catalog-feature")));
  await hold("style", resourcePattern(stylePath("catalog")));

  const navigation = page.goto("/#toy-catalog?scope=bey&series=x");
  try {
    await expect.poll(() => [...pending].sort()).toEqual(["data", "feature", "style"]);
  } finally {
    releaseRequests();
  }
  await navigation;
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await context.close();
});

test("catalog sort caches match direct load after incremental series loading", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "catalog cache coverage only needs one browser");
  const incrementalContext = await browser.newContext();
  const directContext = await browser.newContext();
  const incrementalPage = await incrementalContext.newPage();
  const directPage = await directContext.newPage();
  const catalogHash = sort => `#toy-catalog?scope=bey&series=all&sort=${sort}&page=1`;
  const applyCatalogHash = async (page, sort) => {
    const hash = catalogHash(sort);
    await page.evaluate(value => { window.location.hash = value; }, hash);
    await expect(page).toHaveURL(new RegExp(`${hash.replace(/[?]/g, "\\?")}$`));
    await expect(page.locator("#catalogSeriesFilter")).toHaveAttribute("data-scope", "all");
    await expect(page.locator(`[data-catalog-sort="${sort}"].active`)).toHaveCount(1);
    await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  };
  const catalogSnapshot = page => page.evaluate(() => ({
    count: document.querySelector("#catalogCount")?.textContent,
    ids: [...document.querySelectorAll("#catalogGrid .catalog-card")].map(card => card.dataset.id || card.dataset.toolsId)
  }));

  await incrementalPage.goto("/#toy-catalog?scope=bey&series=x&sort=latest&page=1");
  await expect(incrementalPage.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await directPage.goto(`/${catalogHash("latest")}`);
  await expect(directPage.locator("#catalogGrid .catalog-card").first()).toBeVisible();

  for (const sort of ["latest", "oldest", "no-asc", "no-desc"]) {
    await applyCatalogHash(incrementalPage, sort);
    await applyCatalogHash(directPage, sort);
    expect(await catalogSnapshot(incrementalPage)).toEqual(await catalogSnapshot(directPage));
  }

  await incrementalContext.close();
  await directContext.close();
});

test("direct anime character route owns its shared layout styles", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "style request coverage only needs one browser");
  const context = await browser.newContext();
  const page = await context.newPage();
  const styleRequests = [];
  page.on("request", request => {
    const pathname = new URL(request.url()).pathname;
    if (request.resourceType() === "stylesheet") styleRequests.push(pathname);
  });

  await page.goto("/#anime-character");
  await expect(page.locator("#animeCharacterGrid .anime-character-card").first()).toBeVisible();
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);

  expect(styleRequests).toEqual(expect.arrayContaining([...homeStylePaths, ...routeStylePaths("category-anime")]));
  expect(styleRequests).not.toContain(stylePath("catalog"));

  const layout = await animeLayoutSnapshot(page);
  expect(layout.control.display).toBe("grid");
  expect(layout.collection.display).toBe("grid");
  expect(layout.section.display).toBe("grid");
  expect(layout.query.display).toBe("grid");
  expect(layout.query.height).toBeGreaterThanOrEqual(48);
  expect(layout.query.borderTopStyle).not.toBe("none");
  expect(layout.grid.display).toBe("grid");
  expect(layout.grid.columnGap).not.toBe("normal");
  await context.close();
});

test("anime character layout is independent of prior catalog navigation", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "layout order coverage only needs one browser");
  const directContext = await browser.newContext();
  const directPage = await directContext.newPage();
  await directPage.goto("/#anime-character");
  await expect(directPage.locator("#animeCharacterGrid .anime-character-card").first()).toBeVisible();
  const directLayout = await animeLayoutSnapshot(directPage);

  const catalogContext = await browser.newContext();
  const catalogPage = await catalogContext.newPage();
  await catalogPage.goto("/#toy-catalog?scope=bey&series=x");
  await expect(catalogPage.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await catalogPage.goto("/#anime-character");
  await expect(catalogPage.locator("#animeCharacterGrid .anime-character-card").first()).toBeVisible();
  const afterCatalogLayout = await animeLayoutSnapshot(catalogPage);

  expect(directLayout).toEqual(afterCatalogLayout);
  await directContext.close();
  await catalogContext.close();
});
