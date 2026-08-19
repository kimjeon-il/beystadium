import { expect, test } from "@playwright/test";
import { animeLayoutSnapshot, consoleErrors } from "./helpers/ui-assertions.mjs";

test("primary routes render without runtime errors", async ({ page }) => {
  const errors = consoleErrors(page);
  for (const hash of ["", "#toy-catalog?scope=bey&series=x", "#toy-release", "#anime-character", "#anime-episode"]) {
    await page.goto(`/${hash}`);
    await expect(page.locator("html")).not.toHaveClass(/route-booting/);
    await expect(page.locator(".app-panel.active")).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("runtime data is loaded by route instead of during home boot", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "request coverage only needs one browser");
  const runtimeRequests = [];
  const moduleRequests = [];
  const styleRequests = [];
  page.on("request", request => {
    const pathname = new URL(request.url()).pathname;
    if (pathname.includes("/data/runtime/")) runtimeRequests.push(pathname);
    if (pathname.includes("/src/")) moduleRequests.push(pathname);
    if (pathname.includes("/styles/")) styleRequests.push(pathname);
  });

  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  expect(runtimeRequests).toContain("/data/runtime/index.json");
  expect(runtimeRequests.some(path => path.includes("/series/"))).toBe(false);
  expect(runtimeRequests.some(path => path.includes("/search/"))).toBe(false);
  expect(runtimeRequests).not.toContain("/data/runtime/registry.json");
  expect(moduleRequests).toContain("/src/bootstrap.js");
  expect(moduleRequests).toContain("/src/data-store.js");
  expect(moduleRequests).not.toContain("/src/app-entry.js");
  expect(moduleRequests).not.toContain("/src/router.js");
  expect(styleRequests).toEqual(["/styles/base.css", "/styles/mobile.css"]);

  await page.goto("/#toy-release");
  await expect(page.locator(".release-product-row").first()).toBeVisible();
  expect(moduleRequests).toContain("/src/release-page.js");
  expect(moduleRequests).not.toContain("/src/view-controller.js");
  expect(moduleRequests).not.toContain("/src/collection-view.js");
  expect(moduleRequests).not.toContain("/src/catalog-feature.js");
  expect(moduleRequests).not.toContain("/src/search-controller.js");
  expect(moduleRequests).not.toContain("/src/search-feature.js");
  expect(moduleRequests).not.toContain("/src/catalog-model.js");
  expect(moduleRequests).not.toContain("/src/detail-controller.js");
  expect(moduleRequests).not.toContain("/src/detail-view.js");
  expect(moduleRequests).not.toContain("/src/modal-controller.js");
  expect(moduleRequests).not.toContain("/src/anime.js");
  expect(styleRequests).toContain("/styles/table.css");
  expect(styleRequests).toContain("/styles/release.css");
  expect(styleRequests).toContain("/styles/page.css");
  expect(styleRequests).not.toContain("/styles/catalog.css");
  expect(styleRequests).not.toContain("/styles/modal.css");

  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  expect(runtimeRequests).toContain("/data/runtime/series/x.json");
  expect(runtimeRequests.some(path => path.includes("/search/"))).toBe(false);
  expect(moduleRequests).toContain("/src/router.js");
  expect(moduleRequests).toContain("/src/catalog-feature.js");
  expect(moduleRequests).toContain("/src/catalog-view.js");
  expect(moduleRequests).toContain("/src/catalog-model.js");
  expect(moduleRequests).toContain("/src/collection-view.js");
  expect(moduleRequests).toContain("/src/search-engine.js");
  expect(moduleRequests).not.toContain("/src/anime.js");
  expect(styleRequests).toContain("/styles/collection.css");
  expect(styleRequests).toContain("/styles/catalog.css");
  expect(styleRequests).toContain("/styles/search.css");

  await page.goto("/#anime-character");
  await expect(page.locator('[data-app-panel="anime"].active')).toBeVisible();
  expect(moduleRequests).toContain("/src/anime.js");
  expect(styleRequests).toContain("/styles/anime.css");
  expect(styleRequests).toContain("/styles/search.css");
});

test("catalog intent preload stays silent and is reused by navigation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "request orchestration only needs one browser");
  const requests = [];
  const heldRoutes = [];
  let releaseData;
  const dataGate = new Promise(resolve => { releaseData = resolve; });
  page.on("request", request => requests.push(new URL(request.url()).pathname));
  await page.route("**/data/runtime/series/*.json*", async route => {
    heldRoutes.push(route);
    await dataGate;
    await route.continue();
  });

  await page.goto("/");
  const catalogButton = page.locator("[data-category-catalog-open]").first();
  await catalogButton.hover();
  await expect.poll(() => heldRoutes.length).toBe(3);
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
  expect(requests.filter(path => path.includes("/data/runtime/series/"))).toHaveLength(3);
  expect(requests.filter(path => path === "/src/catalog-feature.js")).toHaveLength(1);
  expect(requests.filter(path => path === "/styles/catalog.css")).toHaveLength(1);
});

test("focus and touch intent preload only their category", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "intent coverage only needs one browser");
  const cases = [
    {
      selector: "[data-category-release-open]",
      expectedData: "/data/runtime/series/x.json",
      expectedModule: "/src/release-page.js",
      trigger: locator => locator.focus()
    },
    {
      selector: "[data-category-anime-open]",
      expectedData: "/data/runtime/anime.json",
      expectedModule: "/src/anime.js",
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
  await hold("data", "**/data/runtime/series/x.json*");
  await hold("feature", "**/src/catalog-feature.js*");
  await hold("style", "**/styles/catalog.css*");

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
    if (pathname.includes("/styles/")) styleRequests.push(pathname);
  });

  await page.goto("/#anime-character");
  await expect(page.locator("#animeCharacterGrid .anime-character-card").first()).toBeVisible();
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);

  expect(styleRequests).toEqual(expect.arrayContaining([
    "/styles/base.css",
    "/styles/page.css",
    "/styles/collection.css",
    "/styles/anime.css",
    "/styles/search.css"
  ]));
  expect(styleRequests).not.toContain("/styles/catalog.css");

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
