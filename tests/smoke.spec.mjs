import { expect, test } from "@playwright/test";

const consoleErrors = page => {
  const errors = [];
  page.on("console", message => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", error => errors.push(error.message));
  return errors;
};

const expectFocusIndicator = async locator => {
  const readIndicator = element => {
    const style = getComputedStyle(element);
    return {
      boxShadow: style.boxShadow,
      outlineStyle: style.outlineStyle,
      outlineWidth: style.outlineWidth,
      focusVisible: element.matches(":focus-visible")
    };
  };
  const before = await locator.evaluate(readIndicator);
  await locator.press("Tab");
  await locator.focus();
  await expect(locator).toBeFocused();
  const after = await locator.evaluate(readIndicator);
  const visibleOutline = after.outlineStyle !== "none" && Number.parseFloat(after.outlineWidth) > 0;
  expect(after.focusVisible).toBe(true);
  expect(after.boxShadow !== before.boxShadow || visibleOutline).toBe(true);
};

const expectActionRowFocusIndicator = async row => {
  const action = row.locator(".table-list-row-action");
  const before = await row.evaluate(element => getComputedStyle(element).outlineWidth);
  await action.focus();
  await expect(action).toBeFocused();
  const after = await row.evaluate(element => ({
    outlineStyle: getComputedStyle(element).outlineStyle,
    outlineWidth: getComputedStyle(element).outlineWidth,
    focusVisible: element.matches(":has(.table-list-row-action:focus-visible)")
  }));
  expect(after.focusVisible).toBe(true);
  expect(after.outlineStyle).not.toBe("none");
  expect(Number.parseFloat(after.outlineWidth)).toBeGreaterThan(Number.parseFloat(before));
};

const expectModalBackAtShellTopLeft = async backButton => {
  await expect(backButton).toBeVisible();
  const geometry = await backButton.evaluate(button => {
    const shell = button.closest(".modal-inner");
    return {
      parentIsShell: button.parentElement === shell,
      offsetParentIsShell: button.offsetParent === shell,
      left: Math.round(button.offsetLeft),
      top: Math.round(button.offsetTop)
    };
  });
  expect(geometry).toEqual({
    parentIsShell: true,
    offsetParentIsShell: true,
    left: 18,
    top: 18
  });
};

const animeLayoutSnapshot = page => page.evaluate(() => {
  const snapshot = selector => {
    const element = document.querySelector(selector);
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    return {
      display: style.display,
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      backgroundColor: style.backgroundColor,
      borderTopStyle: style.borderTopStyle,
      columnGap: style.columnGap,
      gridTemplateColumns: style.gridTemplateColumns
    };
  };
  return {
    control: snapshot(".anime-control-bar"),
    collection: snapshot(".anime-combined"),
    section: snapshot(".anime-subsection"),
    query: snapshot(".anime-query-row"),
    grid: snapshot("#animeCharacterGrid"),
    card: snapshot("#animeCharacterGrid .anime-character-card")
  };
});

const tableListTitleSnapshot = (page, selector) => page.locator(selector).first().evaluate(element => {
  const rounded = value => Math.round(value * 100) / 100;
  const rect = element.getBoundingClientRect();
  const cellRect = element.closest("td")?.getBoundingClientRect();
  const rowRect = element.closest("tr")?.getBoundingClientRect();
  const style = getComputedStyle(element);
  return {
    display: style.display,
    fontFamily: style.fontFamily,
    fontSize: style.fontSize,
    fontWeight: style.fontWeight,
    lineHeight: style.lineHeight,
    color: style.color,
    overflow: style.overflow,
    textOverflow: style.textOverflow,
    whiteSpace: style.whiteSpace,
    width: rounded(rect.width),
    height: rounded(rect.height),
    cellWidth: rounded(cellRect?.width || 0),
    rowHeight: rounded(rowRect?.height || 0)
  };
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
  expect(styleRequests).toEqual(["/styles/base.css"]);

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

test("episode and release table styles are independent of navigation order", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "layout order coverage only needs one browser");

  const directContext = await browser.newContext();
  const directPage = await directContext.newPage();
  const directStyleRequests = [];
  directPage.on("request", request => {
    const pathname = new URL(request.url()).pathname;
    if (pathname.includes("/styles/")) directStyleRequests.push(pathname);
  });
  await directPage.goto("/#anime-episode");
  await expect(directPage.locator(".anime-episode-title").first()).toBeVisible();
  const directEpisodeTitle = await tableListTitleSnapshot(directPage, ".anime-episode-title");

  expect(directEpisodeTitle.fontWeight).toBe("450");
  expect(directEpisodeTitle.display).toBe("block");
  expect(directEpisodeTitle.overflow).toBe("hidden");
  expect(directEpisodeTitle.textOverflow).toBe("ellipsis");
  expect(directEpisodeTitle.whiteSpace).toBe("nowrap");
  expect(directStyleRequests).toContain("/styles/table.css");
  expect(directStyleRequests).toContain("/styles/anime.css");
  expect(directStyleRequests).not.toContain("/styles/release.css");
  await expect(directPage.locator(".anime-episode-controls .table-list-search-box")).toBeVisible();
  await expect(directPage.locator(".anime-episode-controls .table-list-dropdown")).toBeVisible();
  expect(await directPage.locator("[data-anime-episodes-page-content] [class]").evaluateAll(elements =>
    elements.flatMap(element => [...element.classList].filter(className => className.startsWith("release-")))
  )).toEqual([]);

  await directPage.locator("#animeEpisodeSearchInput").fill("__등록되지_않은_방영목록__");
  await expect(directPage.locator(".table-list-empty-row")).toBeVisible();
  await expect(directPage.locator(".table-list-empty-row")).not.toHaveClass(/release-empty-row/);

  const crossContext = await browser.newContext();
  const crossPage = await crossContext.newPage();
  const crossStyleRequests = [];
  crossPage.on("request", request => {
    const pathname = new URL(request.url()).pathname;
    if (pathname.includes("/styles/")) crossStyleRequests.push(pathname);
  });

  await crossPage.goto("/#toy-release");
  await expect(crossPage.locator(".release-product-link").first()).toBeVisible();
  const directReleaseTitle = await tableListTitleSnapshot(crossPage, ".release-product-link");
  const releaseStylesBeforeAnime = [...crossStyleRequests];
  expect(releaseStylesBeforeAnime).toContain("/styles/table.css");
  expect(releaseStylesBeforeAnime).toContain("/styles/release.css");
  expect(releaseStylesBeforeAnime).not.toContain("/styles/anime.css");

  await crossPage.goto("/#anime-episode");
  await expect(crossPage.locator(".anime-episode-title").first()).toBeVisible();
  const episodeTitleAfterRelease = await tableListTitleSnapshot(crossPage, ".anime-episode-title");
  expect(episodeTitleAfterRelease).toEqual(directEpisodeTitle);

  await crossPage.goto("/#toy-release");
  await expect(crossPage.locator(".release-product-link").first()).toBeVisible();
  const releaseTitleAfterAnime = await tableListTitleSnapshot(crossPage, ".release-product-link");
  expect(releaseTitleAfterAnime).toEqual(directReleaseTitle);

  await directContext.close();
  await crossContext.close();
});

test("search controls clear only the query across list routes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "full search control route coverage only needs one browser");
  const errors = consoleErrors(page);
  const phraseQuery = "스톰 페가시스 공격형";

  await page.goto(`/#search?q=${encodeURIComponent(phraseQuery)}&scope=bey`);
  await expect(page.locator('[data-app-panel="all"].active')).toBeVisible();
  await expect(page.locator("#searchResultsSearchInput")).toHaveValue(phraseQuery);
  await expect(page.locator("#searchResultsMeta")).toHaveCount(0);
  await expect(page.locator(".search-results-panel .active-query-chip")).toHaveCount(0);
  await expect(page.locator(".search-results-search .search-clear")).toBeVisible();
  await page.locator(".search-results-search .search-clear").click();
  await expect(page).toHaveURL(/#search\?q=&scope=bey$/);
  for (const selector of ["#globalSearchInput", "#mobileDrawerSearchInput", "#overviewSearchInput", "#searchResultsSearchInput"]) {
    await expect(page.locator(selector)).toHaveValue("");
  }
  await expect(page.locator(".search-results-summary")).toBeHidden();
  await expect(page.locator("#globalCount")).toHaveText("0");
  await expect(page.locator("#globalGrid [data-search-idle]")).toHaveText("검색어를 입력해주세요.");
  await expect(page.locator("#globalGrid .search-result-item, #globalGrid [data-search-results-page]")).toHaveCount(0);

  await page.goto("/#toy-catalog?scope=bey&series=x&sort=no-desc&page=1&q=드래곤");
  await expect(page.locator('[data-app-panel="catalog"].active')).toBeVisible();
  const catalogState = await page.evaluate(() => ({
    scope: document.querySelector("#catalogSearchScope")?.dataset.scope,
    series: document.querySelector("#catalogSeriesFilter")?.dataset.scope,
    sort: document.querySelector("[data-catalog-sort].active")?.dataset.catalogSort
  }));
  await expect(page.locator('[data-catalog-filter-chips="catalog"] [data-clear-query]')).toBeVisible();
  await expect(page.locator("[data-catalog-filter-chips]")).toHaveCount(1);
  await page.locator('[data-catalog-filter-chips="catalog"] [data-clear-query]').click();
  await expect(page).toHaveURL(/#toy-catalog\?scope=bey&series=x&sort=no-desc&page=1$/);
  await expect(page.locator("#catalogSearchInput")).toHaveValue("");
  await expect(page.locator('[data-catalog-filter-chips="catalog"]')).toBeHidden();
  expect(await page.evaluate(() => ({
    scope: document.querySelector("#catalogSearchScope")?.dataset.scope,
    series: document.querySelector("#catalogSeriesFilter")?.dataset.scope,
    sort: document.querySelector("[data-catalog-sort].active")?.dataset.catalogSort
  }))).toEqual(catalogState);

  await page.goto(`/#anime-character?season=burst&q=${encodeURIComponent("강산 발키리")}&page=1`);
  await expect(page.locator('[data-app-panel="anime"].active')).toBeVisible();
  await expect(page.locator('[data-catalog-filter-chips="anime"]')).toHaveCount(0);
  await expect(page.locator(".anime-panel .active-query-chip")).toHaveCount(0);
  await expect(page.locator(".anime-search-box .search-clear")).toBeVisible();
  await page.locator(".anime-search-box .search-clear").click();
  await expect(page).toHaveURL(/#anime-character\?season=burst$/);
  await expect(page.locator("#animeSearchInput")).toHaveValue("");
  await expect(page.locator('[data-anime-character-season="burst"].active')).toHaveCount(1);

  await page.goto("/#toy-release");
  await expect(page.locator(".release-product-row").first()).toBeVisible();
  const releaseState = await page.evaluate(() => ({
    region: document.querySelector("[data-release-region].active")?.dataset.releaseRegion,
    series: document.querySelector("[data-release-series].active")?.dataset.releaseSeries,
    sort: document.querySelector("[data-release-sort-option].active")?.dataset.releaseSortOption
  }));
  await page.locator("#releaseSearchInput").fill("베이 블레이드");
  await expect(page.locator("[data-release-meta-row] .active-query-chip")).toHaveCount(0);
  await expect(page.locator("[data-release-meta-row] .release-query-count")).toBeVisible();
  await expect(page.locator(".release-list-page .search-clear")).toBeVisible();
  await page.locator(".release-list-page .search-clear").click();
  await expect(page.locator("#releaseSearchInput")).toHaveValue("");
  await expect(page.locator("[data-release-meta-row] .active-query-chip")).toHaveCount(0);
  expect(await page.evaluate(() => ({
    region: document.querySelector("[data-release-region].active")?.dataset.releaseRegion,
    series: document.querySelector("[data-release-series].active")?.dataset.releaseSeries,
    sort: document.querySelector("[data-release-sort-option].active")?.dataset.releaseSortOption
  }))).toEqual(releaseState);

  await page.goto("/#anime-episode");
  await expect(page.locator(".anime-episode-row").first()).toBeVisible();
  const episodeSeason = await page.locator("[data-anime-season].active").getAttribute("data-anime-season");
  await page.locator("#animeEpisodeSearchInput").fill("운명의 시작");
  await expect(page.locator(".anime-episode-list-page .active-query-chip")).toHaveCount(0);
  await expect(page.locator(".table-list-query-row")).toHaveCount(0);
  await expect(page.locator(".anime-episode-list-page .search-clear")).toBeVisible();
  await page.locator(".anime-episode-list-page .search-clear").click();
  await expect(page.locator("#animeEpisodeSearchInput")).toHaveValue("");
  await expect(page.locator(".table-list-query-row")).toHaveCount(0);
  await expect(page.locator(`[data-anime-season="${episodeSeason}"].active`)).toHaveCount(1);
  expect(errors).toEqual([]);
});

test("query chips are limited to the toy catalog", async ({ page }) => {
  const errors = consoleErrors(page);

  await page.goto(`/#toy-catalog?scope=bey&series=x&q=${encodeURIComponent("공격형")}`);
  await expect(page.locator('[data-app-panel="catalog"].active')).toBeVisible();
  await expect(page.locator('[data-catalog-filter-chips="catalog"] [data-clear-query]')).toBeVisible();
  await expect(page.locator("[data-catalog-filter-chips]")).toHaveCount(1);

  const chipFreeRoutes = [
    { route: "/#anime-character", panel: ".anime-panel", input: "#animeSearchInput", query: "강산 발키리" },
    { route: "/#toy-release", panel: ".release-panel", input: "#releaseSearchInput", query: "베이 블레이드" },
    { route: "/#anime-episode", panel: ".anime-episodes-panel", input: "#animeEpisodeSearchInput", query: "운명의 시작" }
  ];

  for (const entry of chipFreeRoutes) {
    await page.goto(entry.route);
    await page.locator(entry.input).fill(entry.query);
    await expect(page.locator(`${entry.panel} .active-query-chip`)).toHaveCount(0);
    await expect(page.locator(`${entry.panel} [data-clear-query]`)).toHaveCount(0);
    await expect(page.locator(`${entry.panel} .search-clear`)).toBeVisible();
    if (entry.route === "/#toy-release") await expect(page.locator(".release-query-count")).toBeVisible();
  }

  await expect(page.locator(".anime-episode-list-page .table-list-query-row")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("search results own live search controls", async ({ page }, testInfo) => {
  const errors = consoleErrors(page);
  const queryInputs = [
    "#globalSearchInput",
    "#mobileDrawerSearchInput",
    "#overviewSearchInput",
    "#searchResultsSearchInput"
  ];
  const scopeRoots = [
    "#globalSearchScope",
    "#mobileDrawerSearchScope",
    "#overviewSearchScope",
    "#searchResultsSearchScope"
  ];
  const routeState = () => page.evaluate(() => {
    const parameters = new URLSearchParams(window.location.hash.split("?")[1] || "");
    return {
      query: parameters.get("q") || "",
      scope: parameters.get("scope") || ""
    };
  });
  const layout = () => page.evaluate(() => {
    const search = document.querySelector(".search-results-search");
    const searchBox = document.querySelector(".search-results-search-box");
    const heading = document.querySelector(".search-results-heading");
    const summary = document.querySelector(".search-results-summary");
    const snapshot = element => {
      const rect = element.getBoundingClientRect();
      return {
        left: Math.round(rect.left * 100) / 100,
        right: Math.round(rect.right * 100) / 100,
        top: Math.round(rect.top * 100) / 100,
        bottom: Math.round(rect.bottom * 100) / 100
      };
    };
    return {
      search: snapshot(search),
      searchBox: snapshot(searchBox),
      heading: snapshot(heading),
      summary: snapshot(summary),
      topbarSearchDisplay: getComputedStyle(document.querySelector(".topbar-search")).display,
      viewportWidth: document.documentElement.clientWidth,
      viewportHeight: document.documentElement.clientHeight,
      documentWidth: document.documentElement.scrollWidth
    };
  });
  const expectInViewport = actual => {
    for (const part of [actual.search, actual.searchBox, actual.heading, actual.summary]) {
      expect(part.left).toBeGreaterThanOrEqual(-1);
      expect(part.right).toBeLessThanOrEqual(actual.viewportWidth + 1);
      expect(part.top).toBeGreaterThanOrEqual(-1);
      expect(part.bottom).toBeLessThanOrEqual(actual.viewportHeight + 1);
    }
    expect(actual.documentWidth).toBeLessThanOrEqual(actual.viewportWidth + 1);
    expect(actual.topbarSearchDisplay).toBe("none");
  };

  await page.goto(`/#search?q=${encodeURIComponent("스톰 페가시스")}&scope=bey`);
  await expect(page.locator('[data-app-panel="all"].active')).toBeVisible();
  await expect(page.locator(".search-results-search")).toBeVisible();
  await expect(page.locator("#searchResultsSearchInput")).toHaveValue("스톰 페가시스");
  await expect(page.locator("#searchResultsSearchScope")).toHaveAttribute("data-scope", "bey");
  await expect(page.locator('[data-search-results-search-scope="bey"].active')).toHaveCount(1);
  await expect(page.locator("#searchResultsTitle")).toHaveText("검색결과");
  await expect(page.locator("#searchResultsMeta")).toHaveCount(0);
  await expect(page.locator(".search-results-panel .active-query-chip")).toHaveCount(0);
  await expect(page.locator(".search-results-search .search-preview")).toHaveCount(0);
  await expect(page.locator(".topbar-search")).toBeHidden();
  expect(await page.evaluate(() => document.activeElement?.id)).not.toBe("searchResultsSearchInput");
  expectInViewport(await layout());

  await page.locator("#searchResultsSearchInput").fill("존재하지않는검색어");
  await expect.poll(async () => (await routeState()).query).toBe("존재하지않는검색어");
  await expect(page.locator("#globalCount")).toHaveText("0");
  await expect(page.locator("#globalGrid .search-empty")).toBeVisible();
  for (const selector of queryInputs) await expect(page.locator(selector)).toHaveValue("존재하지않는검색어");
  await expect(page.locator(".search-results-search .search-preview")).toHaveCount(0);

  await page.locator("#searchResultsSearchInput").fill("드래곤");
  await expect.poll(async () => (await routeState()).query).toBe("드래곤");
  await page.locator("#searchResultsSearchScope > summary").click();
  await page.locator('[data-search-results-search-scope="anime"]').click();
  await expect.poll(async () => (await routeState()).scope).toBe("anime");
  expect(await routeState()).toEqual({ query: "드래곤", scope: "anime" });
  for (const selector of queryInputs) await expect(page.locator(selector)).toHaveValue("드래곤");
  for (const selector of scopeRoots) await expect(page.locator(selector)).toHaveAttribute("data-scope", "anime");
  await expect(page.locator(".search-results-search .search-preview")).toHaveCount(0);
  expectInViewport(await layout());

  await page.locator(".search-results-search .search-clear").click();
  await expect.poll(async () => (await routeState()).query).toBe("");
  expect(await routeState()).toEqual({ query: "", scope: "anime" });
  for (const selector of queryInputs) await expect(page.locator(selector)).toHaveValue("");
  await expect(page.locator(".search-results-summary")).toBeHidden();
  await expect(page.locator("#globalGrid [data-search-idle]")).toHaveText("검색어를 입력해주세요.");

  if (testInfo.project.name === "desktop") {
    await page.goto("/");
    await page.locator("#overviewSearchInput").click();
    await expect(page.locator("#overviewSearchInput")).toHaveAttribute("data-search-input-bound", "true");
    await page.locator("#overviewSearchInput").fill("페가시스");
    await page.locator("#overviewSearchInput").press("Enter");
    await expect(page.locator('[data-app-panel="all"].active')).toBeVisible();
    await expect(page.locator("#searchResultsSearchInput")).toBeFocused();
    await expect(page.locator("#searchResultsSearchInput")).toHaveValue("페가시스");

    await page.goto("/#toy-catalog?scope=bey&series=x");
    await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
    await expect(page.locator(".topbar-search")).toBeVisible();
    await page.locator("#globalSearchInput").fill("드랜소드");
    await page.locator("#globalSearchInput").press("Enter");
    await expect(page.locator('[data-app-panel="all"].active')).toBeVisible();
    await expect(page.locator("#searchResultsSearchInput")).toBeFocused();
    await expect(page.locator("#searchResultsSearchInput")).toHaveValue("드랜소드");
  } else {
    await page.goto("/");
    await page.locator("#menuButton").click();
    await expect(page.locator("#mobileDrawer")).toBeVisible();
    await page.locator("#mobileDrawerSearchInput").click();
    await expect(page.locator("#mobileDrawerSearchInput")).toHaveAttribute("data-search-input-bound", "true");
    await page.locator("#mobileDrawerSearchInput").fill("페가시스");
    await page.locator("#mobileDrawerSearchInput").press("Enter");
    await expect(page.locator('[data-app-panel="all"].active')).toBeVisible();
    await expect(page.locator("#searchResultsSearchInput")).toBeFocused();
    await expect(page.locator("#searchResultsSearchInput")).toHaveValue("페가시스");
    await expect(page.locator("#mobileDrawer")).toBeHidden();
  }

  await page.goto(`/#toy-catalog?scope=bey&series=x&q=${encodeURIComponent("공격형")}`);
  await expect(page.locator('[data-app-panel="catalog"].active')).toBeVisible();
  await expect(page.locator('[data-catalog-filter-chips="catalog"] [data-clear-query]')).toBeVisible();
  expect(errors).toEqual([]);
});

test("catalog query chips split designated attributes and keep sort alignment stable", async ({ page }, testInfo) => {
  const errors = consoleErrors(page);
  const query = "스톰 페가시스 공격형";
  const chipRoot = page.locator('[data-catalog-filter-chips="catalog"]');
  const queryChips = chipRoot.locator("[data-query-chip-key]");
  const searchInput = page.locator("#catalogSearchInput");
  const routeState = () => page.evaluate(() => {
    const parameters = new URLSearchParams(window.location.hash.split("?")[1] || "");
    return {
      scope: parameters.get("scope"),
      series: parameters.get("series"),
      sort: parameters.get("sort"),
      page: parameters.get("page"),
      query: parameters.get("q") || ""
    };
  });
  const layout = () => page.evaluate(() => {
    const actions = document.querySelector(".catalog-query-actions");
    const dropdown = document.querySelector(".catalog-sort-control");
    const actionsRect = actions.getBoundingClientRect();
    const dropdownRect = dropdown.getBoundingClientRect();
    return {
      actionsRight: Math.round(actionsRect.right * 100) / 100,
      dropdownRight: Math.round(dropdownRect.right * 100) / 100,
      actionGridColumn: getComputedStyle(actions).gridColumnStart,
      viewportWidth: document.documentElement.clientWidth,
      documentWidth: document.documentElement.scrollWidth
    };
  });
  const expectAligned = (actual, baseline) => {
    expect(Math.abs(actual.actionsRight - baseline.actionsRight)).toBeLessThanOrEqual(1);
    expect(Math.abs(actual.dropdownRight - baseline.dropdownRight)).toBeLessThanOrEqual(1);
    expect(actual.actionGridColumn).toBe("2");
    expect(actual.dropdownRight).toBeLessThanOrEqual(actual.viewportWidth + 1);
    expect(actual.documentWidth).toBeLessThanOrEqual(actual.viewportWidth + 1);
  };

  await page.goto("/#toy-catalog?scope=bey&series=x&sort=no-desc&page=1");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await expect(chipRoot).toBeHidden();
  const emptyLayout = await layout();
  expectAligned(emptyLayout, emptyLayout);

  await searchInput.fill(query);
  await expect(queryChips).toHaveCount(2);
  await expect(queryChips.nth(0)).toHaveText(/스톰 페가시스\s*×/);
  await expect(queryChips.nth(1)).toHaveText(/공격형\s*×/);
  await expect(queryChips.nth(0)).toHaveAttribute("aria-label", "검색어 “스톰 페가시스” 제거");
  await expect(queryChips.nth(1)).toHaveAttribute("aria-label", "검색어 “공격형” 제거");
  await expect.poll(async () => (await routeState()).query).toBe(query);
  expect(await routeState()).toEqual({ scope: "bey", series: "x", sort: "no-desc", page: "1", query });
  expectAligned(await layout(), emptyLayout);

  await queryChips.nth(1).click();
  await expect(searchInput).toHaveValue("스톰 페가시스");
  await expect(queryChips).toHaveCount(1);
  await expect(queryChips).toContainText("스톰 페가시스");
  await expect.poll(async () => (await routeState()).query).toBe("스톰 페가시스");
  expectAligned(await layout(), emptyLayout);

  await queryChips.click();
  await expect(searchInput).toHaveValue("");
  await expect(chipRoot).toBeHidden();
  await expect.poll(async () => (await routeState()).query).toBe("");
  expect(await routeState()).toEqual({ scope: "bey", series: "x", sort: "no-desc", page: "1", query: "" });
  expectAligned(await layout(), emptyLayout);

  await searchInput.fill(query);
  await expect(queryChips).toHaveCount(2);
  await queryChips.nth(0).click();
  await expect(searchInput).toHaveValue("공격형");
  await expect(queryChips).toHaveCount(1);
  await expect(queryChips).toContainText("공격형");
  await expect.poll(async () => (await routeState()).query).toBe("공격형");
  expectAligned(await layout(), emptyLayout);

  if (testInfo.project.name === "desktop") {
    const compoundQuery = "드랜 버스터 메인 블레이드";
    await searchInput.fill(compoundQuery);
    await expect(queryChips).toHaveCount(2);
    await expect(queryChips.nth(0)).toContainText("드랜 버스터");
    await expect(queryChips.nth(1)).toContainText("메인블레이드");
    await expect.poll(async () => (await routeState()).query).toBe(compoundQuery);
    expectAligned(await layout(), emptyLayout);
  }
  expect(errors).toEqual([]);
});

test("long query chip truncates inside the mobile viewport", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "narrow query-chip coverage is mobile-only");
  const query = "아주긴검색어".repeat(16);
  await page.goto(`/#toy-catalog?scope=bey&series=x&q=${encodeURIComponent(query)}`);
  const chip = page.locator('[data-catalog-filter-chips="catalog"] [data-clear-query]');
  await expect(chip).toBeVisible();
  await expect(chip).toHaveAttribute("aria-label", `검색어 “${query}” 제거`);
  const layout = await page.evaluate(() => {
    const chipElement = document.querySelector('[data-catalog-filter-chips="catalog"] [data-clear-query]');
    const value = chipElement.querySelector(".active-query-chip__value");
    const rect = chipElement.getBoundingClientRect();
    return {
      chipLeft: rect.left,
      chipRight: rect.right,
      viewportWidth: document.documentElement.clientWidth,
      documentWidth: document.documentElement.scrollWidth,
      textOverflow: getComputedStyle(value).textOverflow,
      valueWidth: value.clientWidth,
      valueScrollWidth: value.scrollWidth
    };
  });
  expect(layout.chipLeft).toBeGreaterThanOrEqual(0);
  expect(layout.chipRight).toBeLessThanOrEqual(layout.viewportWidth + 1);
  expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
  expect(layout.textOverflow).toBe("ellipsis");
  expect(layout.valueScrollWidth).toBeGreaterThan(layout.valueWidth);
});

test("persistent selections use the existing neutral highlight in light and dark themes", async ({ page }, testInfo) => {
  for (const colorScheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme, reducedMotion: "reduce" });
    await page.goto(`/#toy-catalog?scope=all&series=all&sort=latest&page=1&q=${encodeURIComponent("공격형")}`);
    await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
    await expect(page.locator(".catalog-pagination-nav .ui-button.active")).toBeVisible();
    await expect(page.locator('[data-catalog-filter-chips="catalog"] .active-query-chip')).toBeVisible();
    if (testInfo.project.name === "desktop") await page.mouse.move(1, 1);
    if (testInfo.project.name === "mobile") {
      await page.locator("#menuButton").click();
      await expect(page.locator("#mobileDrawer")).toBeVisible();
    }
    const colors = await page.evaluate(() => ({
      ...(() => {
        const probe = document.createElement("i");
        probe.style.cssText = "position:fixed;border:1px solid var(--ui-line);background:var(--ui-control);color:var(--ui-text)";
        document.body.append(probe);
        const controlBackground = getComputedStyle(probe).backgroundColor;
        const controlText = getComputedStyle(probe).color;
        const hoverProbe = document.createElement("i");
        hoverProbe.style.cssText = "position:fixed;background:var(--ui-control-hover);color:var(--ui-control-text-active)";
        document.body.append(hoverProbe);
        const neutralBackground = getComputedStyle(hoverProbe).backgroundColor;
        const neutralBorder = getComputedStyle(probe).borderColor;
        const neutralText = getComputedStyle(hoverProbe).color;
        probe.remove();
        hoverProbe.remove();
        return { controlBackground, controlText, neutralBackground, neutralBorder, neutralText };
      })(),
      menuBackground: getComputedStyle(document.querySelector(".topbar-primary-button.active")).backgroundColor,
      menuText: getComputedStyle(document.querySelector(".topbar-primary-button.active")).color,
      dropdownBackground: getComputedStyle(document.querySelector("#catalogSeriesFilter .ui-dropdown-item.active"), "::before").backgroundColor,
      dropdownText: getComputedStyle(document.querySelector("#catalogSeriesFilter .ui-dropdown-item.active")).color,
      pageBackground: getComputedStyle(document.querySelector(".catalog-pagination-nav .ui-button.active")).backgroundColor,
      pageText: getComputedStyle(document.querySelector(".catalog-pagination-nav .ui-button.active")).color,
      chipBackground: getComputedStyle(document.querySelector('[data-catalog-filter-chips="catalog"] .active-query-chip')).backgroundColor,
      chipBorder: getComputedStyle(document.querySelector('[data-catalog-filter-chips="catalog"] .active-query-chip')).borderColor,
      chipText: getComputedStyle(document.querySelector('[data-catalog-filter-chips="catalog"] .active-query-chip')).color,
      sidebarBackground: getComputedStyle(document.querySelector("#mobileDrawer .sidebar-button.active")).backgroundColor,
      sidebarText: getComputedStyle(document.querySelector("#mobileDrawer .sidebar-button.active")).color,
      sidebarAccentToken: getComputedStyle(document.querySelector("#mobileDrawer")).getPropertyValue("--sidebar-accent").trim(),
      sidebarChannels: (() => {
        const canvas = document.createElement("canvas");
        canvas.width = 1;
        canvas.height = 1;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        const channels = color => {
          context.clearRect(0, 0, 1, 1);
          context.fillStyle = color;
          context.fillRect(0, 0, 1, 1);
          return [...context.getImageData(0, 0, 1, 1).data];
        };
        return {
          marker: channels(getComputedStyle(document.querySelector("#mobileDrawer .sidebar-button.active"), "::before").backgroundColor),
          icon: channels(getComputedStyle(document.querySelector("#mobileDrawer .sidebar-button.active .sidebar-button__icon")).color)
        };
      })()
    }));
    expect(colors.menuBackground).toBe(colors.neutralBackground);
    expect(colors.menuText).toBe(colors.neutralText);
    expect(colors.dropdownBackground).toBe(colors.neutralBackground);
    expect(colors.dropdownText).toBe(colors.neutralText);
    expect(colors.pageBackground).toBe(colors.neutralBackground);
    expect(colors.pageText).toBe(colors.neutralText);
    expect(colors.chipBackground).toBe(colors.controlBackground);
    expect(colors.chipBorder).toBe(colors.neutralBorder);
    expect(colors.chipText).toBe(colors.controlText);
    expect(colors.sidebarBackground).toBe(colors.neutralBackground);
    expect(colors.sidebarText).toBe(colors.neutralText);
    expect(colors.sidebarAccentToken).toContain("light-dark(#334155, #d7dee8) 84%");
    expect(colors.sidebarAccentToken).toContain("light-dark(#101827, #f3f6fa) 16%");
    expect(colors.sidebarChannels.marker).toEqual(colors.sidebarChannels.icon);

    if (testInfo.project.name === "desktop") {
      const chip = page.locator('[data-catalog-filter-chips="catalog"] .active-query-chip');
      await chip.hover();
      await expect(chip).toHaveCSS("background-color", colors.neutralBackground);
      await expect(chip).toHaveCSS("color", colors.neutralText);
    }

    await page.goto("/#toy-release");
    await expect(page.locator(".release-region-tabs .ui-tab-button.active")).toBeVisible();
    const releaseTabColors = await page.locator(".release-region-tabs .ui-tab-button.active").evaluate(element => ({
      background: getComputedStyle(element).backgroundColor,
      text: getComputedStyle(element).color
    }));
    expect(releaseTabColors.background).toBe(colors.neutralBackground);
    expect(releaseTabColors.text).toBe(colors.neutralText);
  }
});

test("dropdown chevrons share the same open and close rotation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "motion coverage only needs one browser");
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();

  const dropdowns = [
    page.locator("#catalogSeriesFilter"),
    page.locator("#catalogSearchScope"),
    page.locator(".catalog-sort-dropdown")
  ];
  const arrowState = dropdown => dropdown.locator("summary").evaluate(summary => {
    const style = getComputedStyle(summary, "::after");
    return {
      transform: style.transform,
      transitionDuration: style.transitionDuration,
      transitionProperty: style.transitionProperty
    };
  });

  for (const dropdown of dropdowns) await expect(dropdown).toBeVisible();
  const closedStates = await Promise.all(dropdowns.map(arrowState));
  expect(new Set(closedStates.map(state => state.transform)).size).toBe(1);
  for (const state of closedStates) {
    expect(state.transitionProperty.split(", ")).toContain("transform");
    expect(state.transitionDuration.split(", ")[0]).toBe("0.16s");
  }
  const expectedOpenTransform = await page.evaluate(() => {
    const probe = document.createElement("details");
    probe.className = "catalog-dropdown";
    probe.open = true;
    probe.innerHTML = "<summary></summary>";
    document.body.append(probe);
    const transform = getComputedStyle(probe.querySelector("summary"), "::after").transform;
    probe.remove();
    return transform;
  });

  const openTransforms = [];
  for (const [index, dropdown] of dropdowns.entries()) {
    const summary = dropdown.locator("summary");
    if (index === dropdowns.length - 1) {
      await summary.focus();
      await page.keyboard.press("Enter");
    } else {
      await summary.click();
    }
    await expect(dropdown).toHaveAttribute("open", "");
    await expect.poll(async () => (await arrowState(dropdown)).transform)
      .toBe(expectedOpenTransform);
    openTransforms.push((await arrowState(dropdown)).transform);

    if (index === dropdowns.length - 1) await page.keyboard.press("Enter");
    else await summary.click();
    await expect(dropdown).not.toHaveAttribute("open", "");
    await expect.poll(async () => (await arrowState(dropdown)).transform)
      .toBe(closedStates[index].transform);
  }
  expect(new Set(openTransforms).size).toBe(1);
});

test("shared interface controls keep tokenized sizes and timings", async ({ page }) => {
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await page.locator("#catalogSeriesFilter > summary").click();
  await expect(page.locator("#catalogSeriesFilter .ui-dropdown-item").first()).toBeVisible();

  const catalogControls = await page.evaluate(() => {
    const rootStyle = getComputedStyle(document.documentElement);
    const size = selector => {
      const rect = document.querySelector(selector).getBoundingClientRect();
      return [Math.round(rect.width), Math.round(rect.height)];
    };
    const transitionDurations = (selector, pseudo = null) =>
      getComputedStyle(document.querySelector(selector), pseudo).transitionDuration.split(", ");
    return {
      tokens: {
        inline: rootStyle.getPropertyValue("--inline-icon-control-size").trim(),
        compact: rootStyle.getPropertyValue("--control-height-compact").trim(),
        default: rootStyle.getPropertyValue("--control-height-default").trim(),
        icon: rootStyle.getPropertyValue("--icon-control-size").trim(),
        compactMotion: rootStyle.getPropertyValue("--motion-compact").trim(),
        standardMotion: rootStyle.getPropertyValue("--motion-standard").trim()
      },
      help: size("#catalogSearchHelpButton"),
      searchScope: size("#catalogSearchScope > summary"),
      dropdownItem: size("#catalogSeriesFilter .ui-dropdown-item"),
      toTop: size("#toTop"),
      drawerClose: size(".mobile-drawer-close"),
      dropdownMotion: transitionDurations("#catalogSeriesFilter > summary", "::after"),
      menuMotion: transitionDurations("#menuButton"),
      menuLineMotion: transitionDurations("#menuButton span"),
      toTopMotion: transitionDurations("#toTop")
    };
  });

  expect(catalogControls.tokens).toEqual({
    inline: "30px",
    compact: "32px",
    default: "38px",
    icon: "44px",
    compactMotion: "160ms",
    standardMotion: "180ms"
  });
  expect(catalogControls.help).toEqual([30, 30]);
  expect(catalogControls.searchScope[1]).toBe(32);
  expect(catalogControls.dropdownItem[1]).toBe(38);
  expect(catalogControls.toTop).toEqual([44, 44]);
  expect(catalogControls.drawerClose).toEqual([44, 44]);
  expect(catalogControls.dropdownMotion).toEqual(["0.16s", "0.16s"]);
  expect(catalogControls.menuMotion).toEqual(["0.16s", "0.16s"]);
  expect(catalogControls.menuLineMotion).toEqual(["0.18s", "0.18s", "0.16s", "0.18s"]);
  expect(catalogControls.toTopMotion).toEqual(["0.18s", "0.18s", "0.16s", "0.16s"]);

  await page.goto("/#toy-release");
  await expect(page.locator(".release-product-row").first()).toBeVisible();
  const releaseMotion = await page.locator(".release-table td").first().evaluate(
    element => getComputedStyle(element).transitionDuration.split(", ")
  );
  expect(releaseMotion).toEqual(["0.16s", "0.16s"]);

  await page.goto("/#PRODUCT-X-BX-01");
  await expect(page.locator("#detailModal")).toBeVisible();
  const modalControls = await page.evaluate(() => {
    const size = element => {
      const style = getComputedStyle(element);
      return [Math.round(Number.parseFloat(style.width)), Math.round(Number.parseFloat(style.height))];
    };
    const scrollArea = document.querySelector("#detailModal .modal-scroll-area");
    return {
      close: size(document.querySelector("#modalClose")),
      steps: [...document.querySelectorAll("#detailModal .modal-step")].map(size),
      scrollMarginTop: Math.round(Number.parseFloat(getComputedStyle(scrollArea).marginTop))
    };
  });
  expect(modalControls.close).toEqual([44, 44]);
  modalControls.steps.forEach(step => expect(step).toEqual([44, 44]));
  expect(modalControls.scrollMarginTop).toBe(70);
});

test("keyboard focus indicators stay visible across interface surfaces", async ({ page }, testInfo) => {
  test.setTimeout(90_000);
  const mobile = testInfo.project.name === "mobile";

  for (const colorScheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme });
    await page.goto("/#toy-catalog?scope=bey&series=x");
    await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();

    await expectFocusIndicator(page.locator(mobile ? "#menuButton" : ".topbar > .brand"));
    await expectFocusIndicator(page.locator("#catalogGrid .catalog-card-action").first());
    await expectFocusIndicator(page.locator("#toTop"));

    const seriesFilter = page.locator("#catalogSeriesFilter");
    await seriesFilter.locator("summary").click();
    await expect(seriesFilter.locator(".ui-dropdown-item").first()).toBeVisible();
    await expectFocusIndicator(seriesFilter.locator(".ui-dropdown-item").first());
    await seriesFilter.locator("summary").click();

    if (mobile) {
      await page.locator("#menuButton").click();
      await expect(page.locator("#mobileDrawer")).toHaveAttribute("aria-hidden", "false");
      await expectFocusIndicator(page.locator(".mobile-drawer-close"));
    }

    await page.goto("/#toy-release");
    await expect(page.locator(".release-product-row").first()).toBeVisible();
    await expectFocusIndicator(page.locator(".release-region-tabs .ui-tab-button").first());
    await expectActionRowFocusIndicator(page.locator(".release-product-row").first());
    if (!mobile) await expectFocusIndicator(page.locator(".release-sort-button").first());

    await page.goto(`/#search?q=${encodeURIComponent("드래곤")}&scope=bey`);
    await expect(page.locator(".search-results-panel .search-result-item").first()).toBeVisible();
    await expectFocusIndicator(page.locator(".search-results-panel .search-result-item").first());

    await page.goto("/#PRODUCT-X-BX-01");
    await page.reload();
    await expect(page.locator("#detailModal")).toBeVisible();
    await expect(page.locator(".composition-link[data-target-id]").first()).toBeVisible();
    await expectFocusIndicator(page.locator(".composition-link[data-target-id]").first());

    await page.goto("/#BEY-METAL-FIGHT-BB-80-GRAVITY-PERSEUS-AD145WD");
    await page.reload();
    await expect(page.locator("#detailModal .mounted-parts .mounted-link").first()).toBeVisible();
    await expectFocusIndicator(page.locator("#detailModal .mounted-parts .mounted-link").first());
    await expect(page.locator("#detailModal .modal-tag-info").first()).toBeVisible();
    await expectFocusIndicator(page.locator("#detailModal .modal-tag-info").first());
  }
});

test("rendered pages keep HTML and ARIA conformance invariants", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "markup conformance is viewport-independent");
  const routes = [
    ["/", ".overview-home"],
    ["/#toy-catalog?scope=bey&series=x", "#catalogGrid .catalog-card"],
    ["/#toy-release", ".release-product-row"],
    ["/#anime-character", "#animeCharacterGrid .anime-character-card"],
    ["/#anime-episode", ".anime-episode-row"],
    [`/#search?q=${encodeURIComponent("드래곤")}&scope=bey`, ".search-results-panel .search-result-item"],
    ["/#PRODUCT-X-BX-01", "#detailModal[open]"],
    ["/#rare-bey-get-list?region=jp&series=x", "#detailModal[open]"]
  ];

  for (const [route, readySelector] of routes) {
    await page.goto(route);
    await expect(page.locator(readySelector).first()).toBeVisible();
    const violations = await page.evaluate(() => ({
      h1Count: document.querySelectorAll("h1").length,
      actionRows: document.querySelectorAll('tr[role="button"], tr[tabindex]').length,
      redundantDisabled: document.querySelectorAll("button[disabled][aria-disabled]").length,
      invalidGenericLabels: document.querySelectorAll("div[aria-label]:not([role]), span[aria-label]:not([role])").length,
      invalidButtonContent: document.querySelectorAll("button div, button h1, button h2, button h3, button h4, button h5, button h6, button p").length,
      redundantHidden: document.querySelectorAll("[hidden][aria-hidden]").length,
      invalidExpandedInputs: document.querySelectorAll('input[aria-expanded]:not([role="combobox"])').length,
      headinglessSections: [...document.querySelectorAll("section")]
        .filter(section => !section.querySelector("h1, h2, h3, h4, h5, h6"))
        .map(section => section.className || section.id || section.tagName),
      headinglessArticles: [...document.querySelectorAll("article")]
        .filter(article => !article.querySelector("h1, h2, h3, h4, h5, h6"))
        .map(article => article.className || article.id || article.tagName)
    }));
    expect(violations, route).toEqual({
      h1Count: 1,
      actionRows: 0,
      redundantDisabled: 0,
      invalidGenericLabels: 0,
      invalidButtonContent: 0,
      redundantHidden: 0,
      invalidExpandedInputs: 0,
      headinglessSections: [],
      headinglessArticles: []
    });
  }
});

test("table action rows preserve pointer and native keyboard activation", async ({ page }) => {
  const errors = consoleErrors(page);

  await page.goto("/#toy-release");
  const releaseRow = page.locator(".release-product-row").first();
  const releaseAction = releaseRow.locator(".table-list-row-action");
  await expect(releaseRow).not.toHaveAttribute("role", "button");
  await expect(releaseRow).not.toHaveAttribute("tabindex", "0");
  await releaseAction.focus();
  await releaseAction.press("Enter");
  await expect(page.locator("#detailModal")).toBeVisible();

  await page.goto("/#anime-episode");
  const episodeRow = page.locator(".anime-episode-row").first();
  const episodeAction = episodeRow.locator(".table-list-row-action");
  await expect(episodeRow).not.toHaveAttribute("role", "button");
  await expect(episodeRow).not.toHaveAttribute("tabindex", "0");
  await episodeAction.focus();
  await episodeAction.press("Space");
  await expect(page.locator("#detailModal")).toBeVisible();
  expect(errors).toEqual([]);
});

test("scroll affordances appear only while internal content remains below", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "scroll position coverage only needs one browser");
  const errors = consoleErrors(page);

  await page.setViewportSize({ width: 1280, height: 260 });
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  const seriesMenu = page.locator("#catalogSeriesFilter > .catalog-dropdown-menu");
  await page.locator("#catalogSeriesFilter > summary").evaluate(element => element.click());
  await expect(seriesMenu).not.toHaveClass(/has-scroll-content-below/);
  const activeDropdownState = await seriesMenu.evaluate(element => ({
    clientHeight: element.clientHeight,
    scrollHeight: element.scrollHeight,
    shadow: getComputedStyle(element).boxShadow
  }));
  expect(activeDropdownState.scrollHeight).toBeGreaterThan(activeDropdownState.clientHeight + 2);
  expect(activeDropdownState.shadow).not.toBe("none");
  expect(activeDropdownState.shadow).not.toContain("inset");

  await seriesMenu.evaluate(element => { element.scrollTop = element.scrollHeight; });
  await expect(seriesMenu).not.toHaveClass(/has-scroll-content-below/);
  const bottomShadow = await seriesMenu.evaluate(element => getComputedStyle(element).boxShadow);
  expect(bottomShadow).not.toContain("inset");

  await seriesMenu.evaluate(element => { element.scrollTop = 0; });
  await expect(seriesMenu).not.toHaveClass(/has-scroll-content-below/);
  await page.locator("#catalogSeriesFilter > summary").evaluate(element => element.click());
  await expect(seriesMenu).not.toHaveClass(/has-scroll-content-below/);

  await page.setViewportSize({ width: 1280, height: 900 });
  const searchScopeMenu = page.locator("#catalogSearchScope > .catalog-dropdown-menu");
  await page.locator("#catalogSearchScope > summary").evaluate(element => element.click());
  await expect(searchScopeMenu).not.toHaveClass(/has-scroll-content-below/);
  const shortMenuState = await searchScopeMenu.evaluate(element => ({
    clientHeight: element.clientHeight,
    scrollHeight: element.scrollHeight
  }));
  expect(shortMenuState.scrollHeight).toBeLessThanOrEqual(shortMenuState.clientHeight + 2);

  await page.goto("/#rare-bey-get-list?region=jp&series=x");
  await expect(page.locator("#detailModal")).toBeVisible();
  const rareList = page.locator("#detailModal .rare-bey-get-list-scroll");
  const rareListHost = page.locator("#detailModal .rare-bey-get-list");
  await expect(rareList).toHaveClass(/has-scroll-content-below/);
  await expect(rareListHost).toHaveClass(/has-scroll-overlay/);
  await expect.poll(() => rareListHost.evaluate(element => getComputedStyle(element, "::after").opacity)).toBe("1");
  const rareListState = await rareList.evaluate(element => {
    const host = element.closest(".modal-section");
    const hostRect = host.getBoundingClientRect();
    const scrollRect = element.getBoundingClientRect();
    const overlay = getComputedStyle(host, "::after");
    return {
      clientHeight: element.clientHeight,
      scrollHeight: element.scrollHeight,
      scrollShadow: getComputedStyle(element).boxShadow,
      overlayBottom: hostRect.bottom - parseFloat(overlay.bottom),
      overlayPointerEvents: overlay.pointerEvents,
      overlayShadow: overlay.boxShadow,
      overlayZIndex: overlay.zIndex,
      scrollBottom: scrollRect.bottom
    };
  });
  expect(rareListState.scrollHeight).toBeGreaterThan(rareListState.clientHeight + 2);
  expect(rareListState.scrollShadow).not.toContain("inset");
  expect(rareListState.overlayPointerEvents).toBe("none");
  expect(rareListState.overlayShadow).toContain("inset");
  expect(rareListState.overlayZIndex).toBe("5");
  expect(Math.abs(rareListState.overlayBottom - rareListState.scrollBottom)).toBeLessThanOrEqual(1);
  await rareList.evaluate(element => { element.scrollTop = element.scrollHeight; });
  await expect(rareList).not.toHaveClass(/has-scroll-content-below/);
  await expect(rareListHost).not.toHaveClass(/has-scroll-overlay/);
  await expect.poll(() => rareListHost.evaluate(element => getComputedStyle(element, "::after").opacity)).toBe("0");
  expect(errors).toEqual([]);
});

test("search help shows only its summary when the full guide does not fit", async ({ page }) => {
  const errors = consoleErrors(page);
  const viewport = page.viewportSize();
  const width = viewport?.width || 1280;
  await page.setViewportSize({ width, height: 900 });
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();

  const button = page.locator("#catalogSearchHelpButton");
  const popover = page.locator("#catalogSearchHelpPopover");
  const details = popover.locator("[data-help-details]");
  await button.evaluate(element => element.click());
  await expect(popover).toBeVisible();
  await expect(popover).not.toHaveClass(/is-summary-only/);
  await expect(details).toBeVisible();
  const fullState = await popover.evaluate(element => ({
    clientHeight: element.clientHeight,
    overflowY: getComputedStyle(element).overflowY,
    scrollHeight: element.scrollHeight
  }));
  expect(fullState.scrollHeight).toBeLessThanOrEqual(fullState.clientHeight + 2);
  expect(fullState.overflowY).toBe("auto");

  await page.setViewportSize({ width, height: 260 });
  await expect(popover).toHaveClass(/is-summary-only/);
  await expect(popover.locator("strong")).toHaveText("상세검색");
  await expect(popover.locator("p")).toHaveText("띄어쓰기로 여러 조건을 함께 검색할 수 있습니다.");
  await expect(details).toBeHidden();
  await expect(popover).not.toHaveClass(/has-scroll-content-below/);
  const summaryState = await popover.evaluate(element => ({
    clientHeight: element.clientHeight,
    overflowY: getComputedStyle(element).overflowY,
    scrollHeight: element.scrollHeight
  }));
  expect(summaryState.scrollHeight).toBeLessThanOrEqual(summaryState.clientHeight + 2);
  expect(summaryState.overflowY).toBe("hidden");

  await page.setViewportSize({ width, height: 900 });
  await expect(popover).not.toHaveClass(/is-summary-only/);
  await expect(details).toBeVisible();

  await page.goto("/#anime-character");
  await expect(page.locator("#animeCharacterGrid .anime-character-card").first()).toBeVisible();
  await page.locator("#animeSearchHelpButton").evaluate(element => element.click());
  const animePopover = page.locator("#animeSearchHelpPopover");
  await expect(animePopover).toBeVisible();
  await expect(animePopover).not.toHaveClass(/is-summary-only/);
  await expect(animePopover.locator("strong")).toHaveText("등장인물 및 베이 검색");
  expect(errors).toEqual([]);
});

test("mobile modal scroll affordance stays above opaque detail sections", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile modal layering coverage");
  const errors = consoleErrors(page);
  await page.goto("/#PART-BURST-DBLAYER-GREATEST-RAPHAEL");
  await expect(page.locator("#detailModal")).toBeVisible();

  const scrollArea = page.locator("#detailModal .part-modal-info .modal-scroll-area");
  const overlayHost = page.locator("#detailModal .part-modal-info");
  await expect(scrollArea).toHaveClass(/has-scroll-content-below/);
  await expect(overlayHost).toHaveClass(/has-scroll-overlay/);
  await expect.poll(() => overlayHost.evaluate(element => getComputedStyle(element, "::after").opacity)).toBe("1");
  const layerState = await scrollArea.evaluate(element => {
    const host = element.closest(".modal-info");
    const hostRect = host.getBoundingClientRect();
    const scrollRect = element.getBoundingClientRect();
    const statRect = host.querySelector(".stat-block").getBoundingClientRect();
    const overlay = getComputedStyle(host, "::after");
    const overlayBottom = hostRect.bottom - parseFloat(overlay.bottom);
    const overlayTop = overlayBottom - parseFloat(overlay.height);
    return {
      hostPosition: getComputedStyle(host).position,
      overlayBottom,
      overlayOpacity: overlay.opacity,
      overlayPointerEvents: overlay.pointerEvents,
      overlayShadow: overlay.boxShadow,
      overlayTop,
      overlayZIndex: overlay.zIndex,
      scrollBottom: scrollRect.bottom,
      scrollShadow: getComputedStyle(element).boxShadow,
      shadowToken: overlay.getPropertyValue("--scroll-below-shadow"),
      statBottom: statRect.bottom,
      statTop: statRect.top
    };
  });
  expect(layerState.hostPosition).toBe("relative");
  expect(layerState.overlayOpacity).toBe("1");
  expect(layerState.overlayPointerEvents).toBe("none");
  expect(layerState.overlayShadow).toContain("inset");
  expect(layerState.overlayZIndex).toBe("5");
  expect(layerState.scrollShadow).not.toContain("inset");
  expect(layerState.shadowToken).toContain("28%");
  expect(Math.abs(layerState.overlayBottom - layerState.scrollBottom)).toBeLessThanOrEqual(1);
  expect(layerState.overlayTop).toBeLessThan(layerState.statBottom);
  expect(layerState.overlayBottom).toBeGreaterThan(layerState.statTop);

  await scrollArea.evaluate(element => { element.scrollTop = element.scrollHeight; });
  await expect(scrollArea).not.toHaveClass(/has-scroll-content-below/);
  await expect(overlayHost).not.toHaveClass(/has-scroll-overlay/);
  await expect.poll(() => overlayHost.evaluate(element => getComputedStyle(element, "::after").opacity)).toBe("0");
  await scrollArea.evaluate(element => { element.scrollTop = 0; });
  await expect(scrollArea).toHaveClass(/has-scroll-content-below/);
  await expect(overlayHost).toHaveClass(/has-scroll-overlay/);
  expect(errors).toEqual([]);
});

test("anime route stays masked until collection styles are ready", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "style timing coverage only needs one browser");
  let unblockStyle;
  let markStyleBlocked;
  const styleGate = new Promise(resolve => { unblockStyle = resolve; });
  const styleBlocked = new Promise(resolve => { markStyleBlocked = resolve; });
  await page.route("**/styles/collection.css*", async route => {
    markStyleBlocked();
    await styleGate;
    await route.continue();
  });

  const navigation = page.goto("/#anime-character", { waitUntil: "domcontentloaded" });
  await styleBlocked;
  await expect(page.locator("html")).toHaveClass(/route-booting/);
  await expect(page.locator("main")).toHaveCSS("visibility", "hidden");

  unblockStyle();
  await navigation;
  await expect(page.locator("#animeCharacterGrid .anime-character-card").first()).toBeVisible();
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  await expect(page.locator(".anime-query-row")).toHaveCSS("display", "grid");
});

test("catalog and anime listings do not preload detail controllers", async ({ browser }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "request isolation only needs one browser");
  for (const [hash, readySelector, forbidden] of [
    ["#toy-catalog?scope=bey&series=x", "#catalogGrid .catalog-card", ["detail-controller", "detail-view", "modal-controller", "anime-detail"]],
    ["#anime-character", "#animeCharacterGrid .anime-character-card", ["detail-controller", "detail-view", "modal-controller", "anime-detail", "catalog-model", "catalog-feature", "catalog-view"]],
    ["#anime-episode", ".anime-episode-row", ["detail-controller", "detail-view", "modal-controller", "anime-detail", "catalog-model", "catalog-feature", "catalog-view"]]
  ]) {
    const context = await browser.newContext();
    const page = await context.newPage();
    const modules = [];
    page.on("request", request => {
      const pathname = new URL(request.url()).pathname;
      if (pathname.includes("/src/")) modules.push(pathname);
    });
    await page.goto(`/${hash}`);
    await expect(page.locator(readySelector).first()).toBeVisible();
    forbidden.forEach(name => expect(modules, `${hash} loaded ${name}`).not.toContain(`/src/${name}.js`));
    if (hash.startsWith("#toy-catalog")) {
      await page.locator(readySelector).first().click();
      await expect(page.locator("#detailModal")).toBeVisible();
      expect(modules).toContain("/src/detail-controller.js");
      expect(modules).toContain("/src/modal-controller.js");
    }
    if (hash === "#anime-episode") {
      await page.locator(readySelector).first().click();
      await expect(page.locator("#detailModal")).toBeVisible();
      expect(modules).toContain("/src/anime-detail.js");
      expect(modules).toContain("/src/modal-controller.js");
    }
    await context.close();
  }
});

test("first home search interaction loads search feature once and preserves fast input", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "lazy search coverage only needs one browser");
  const requests = [];
  page.on("request", request => requests.push(new URL(request.url()).pathname));
  await page.goto("/");
  expect(requests).not.toContain("/src/search-controller.js");
  expect(requests).not.toContain("/styles/search.css");

  const input = page.locator("#overviewSearchInput");
  await input.click();
  await input.fill("드랜소드");
  await expect(input).toHaveValue("드랜소드");
  await expect(page.locator("#overviewSearchInputPreview")).toBeVisible();
  expect(requests.filter(path => path === "/src/search-controller.js")).toHaveLength(1);
  expect(requests.filter(path => path === "/styles/search.css")).toHaveLength(1);

  await input.fill("드랜소드 3-60F");
  await expect(input).toHaveValue("드랜소드 3-60F");
  expect(requests.filter(path => path === "/src/search-controller.js")).toHaveLength(1);
  expect(requests.filter(path => path === "/styles/search.css")).toHaveLength(1);
});

test("feature loaders initialize controls idempotently", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "idempotence coverage only needs one browser");
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  const state = await page.evaluate(async () => {
    const loaders = await import("#app/feature-loaders");
    await Promise.all([loaders.loadCatalogFeature(), loaders.loadCatalogFeature()]);
    await Promise.all([loaders.loadSearchFeature(), loaders.loadSearchFeature()]);
    return {
      catalogInputBound: document.querySelector("#catalogSearchInput")?.dataset.searchInputBound,
      overviewInputBound: document.querySelector("#overviewSearchInput")?.dataset.searchInputBound,
      overviewPreviews: document.querySelectorAll("#overviewSearchInputPreview").length,
      overviewClearButtons: document.querySelectorAll(".overview-search .search-clear").length,
      catalogClearButtons: document.querySelectorAll(".catalog-search-box .search-clear").length
    };
  });
  expect(state).toEqual({
    catalogInputBound: "true",
    overviewInputBound: "true",
    overviewPreviews: 1,
    overviewClearButtons: 1,
    catalogClearButtons: 1
  });
});

test("detail route restores modal and internal navigation hash", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#PRODUCT-X-BX-01");
  await expect(page.locator("#detailModal")).toBeVisible();
  await page.reload();
  await expect(page.locator("#detailModal")).toBeVisible();
  const compositionLink = page.locator(".composition-link[data-target-id]");
  await expect(compositionLink.first()).toBeVisible();
  const target = await compositionLink.first().getAttribute("data-target-id");
  await compositionLink.first().click();
  await expect(page).toHaveURL(new RegExp(`#${target}$`));
  await expectModalBackAtShellTopLeft(page.locator(".modal-back"));
  expect(errors).toEqual([]);
});

test("closing a detail modal restores its catalog scroll position", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#toy-catalog?scope=bey&series=x");
  const card = page.locator("#catalogGrid .catalog-card").nth(12);
  const action = card.locator(".catalog-card-action");
  await expect(action).toBeVisible();

  for (const closeMethod of ["button", "escape"]) {
    await card.scrollIntoViewIfNeeded();
    const expectedScrollY = await page.evaluate(() => Math.round(window.scrollY));
    expect(expectedScrollY).toBeGreaterThan(0);

    await action.click();
    await expect(page.locator("#detailModal")).toBeVisible();
    if (closeMethod === "button") await page.locator("#modalClose").click();
    else await page.keyboard.press("Escape");

    await expect(page.locator("#detailModal")).not.toBeVisible();
    await expect(page).toHaveURL(/#toy-catalog\?scope=bey&series=x/);
    await expect(page.locator("#catalogSeriesFilter")).toHaveAttribute("data-scope", "x");
    await expect(page.locator("#catalogSearchScope")).toHaveAttribute("data-scope", "bey");
    await expect.poll(async () => Math.abs(await page.evaluate(() => Math.round(window.scrollY)) - expectedScrollY))
      .toBeLessThanOrEqual(1);
  }

  await page.locator("[data-category-release-open]").first().evaluate(element => element.click());
  await expect(page.locator(".release-product-row").first()).toBeVisible();
  await expect.poll(() => page.evaluate(() => Math.round(window.scrollY))).toBe(0);
  expect(errors).toEqual([]);
});

test("Burst random booster products open their ordered Bey lineups", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "lineup data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-BURST-B-15",
      count: 8,
      firstId: "BEY-BURST-B-15-01-TRIDENT-H-C"
    },
    {
      productId: "PRODUCT-BURST-B-61",
      count: 8,
      firstId: "BEY-BURST-B-61-01-QUAD-QUETZALCOATL-J-P",
      lastId: "BEY-BURST-B-61-08-DRIGER-SLASH-H-F"
    },
    {
      productId: "PRODUCT-BURST-B-156",
      count: 8,
      firstId: "BEY-BURST-B-156-01-NAKED-SPRIGGAN-PR-OM-TEN"
    },
    {
      productId: "PRODUCT-BURST-B-181",
      count: 6,
      firstId: "BEY-BURST-B-181-01-CYCLONE-RAGNARUK-GG-NV-6",
      lastId: "BEY-BURST-B-181-06-BRAVE-WYVERN-10-NV-4A"
    },
    {
      productId: "PRODUCT-BURST-B-202",
      count: 5,
      firstId: "BEY-BURST-B-202-01-WIND-KNIGHT-MN-BN-6"
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const lineupTrigger = page.locator("#detailModal .product-lineup-trigger");
    await expect(lineupTrigger).toHaveText("무작위 베이 1개→");
    await lineupTrigger.click();
    const lineupLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(lineupLinks).toHaveCount(entry.count);
    await expect(lineupLinks.first()).toHaveAttribute("data-target-id", entry.firstId);
    if (entry.lastId) await expect(lineupLinks.last()).toHaveAttribute("data-target-id", entry.lastId);
    await lineupLinks.first().click();
    await expect(page).toHaveURL(new RegExp(`#${entry.firstId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
    await page.locator("#detailModal .modal-back").click();
    await expect(page.locator("#detailModal .product-lineup-trigger")).toHaveText("무작위 베이 1개→");
  }
  expect(errors).toEqual([]);
});

test("B-181 Dragoon V2 separates its mounted combination from the bundled 6 Armor", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "bundled part data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  await page.goto("/#PRODUCT-BURST-B-181");
  await page.locator("#detailModal .product-lineup-trigger").click();

  const dragoonLink = page.locator('#detailModal .composition-link[data-target-id="BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH"]');
  await expect(dragoonLink.locator("span")).toHaveText("마그마 리저드.Wh.Xc' + 6 아머");
  await dragoonLink.click();
  await expect(page).toHaveURL(/#BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH$/);
  await expect(page.locator("#detailModal .modal-name")).toHaveText("마그마 리저드.Wh.Xc'");

  const mountedLinks = page.locator("#detailModal .mounted-parts:not(.bundled-parts) .mounted-link");
  await expect(mountedLinks).toHaveCount(3);
  expect(await mountedLinks.evaluateAll(links => links.map(link => link.dataset.partId))).toEqual([
    "PART-BURST-LAYER-DRAGOON-V2",
    "PART-BURST-DISK-WHEEL",
    "PART-BURST-DRIVER-XCEED-DASH"
  ]);

  const bundledSection = page.locator("#detailModal .bundled-parts");
  await expect(bundledSection.locator(".mounted-title")).toHaveText("동봉 부품");
  const armorLink = bundledSection.locator(".mounted-link");
  await expect(armorLink).toHaveCount(1);
  await expect(armorLink).toHaveAttribute("data-part-id", "PART-BURST-DBARMOR-6");
  await expect(armorLink.locator("span")).toHaveText("아머");
  await expect(armorLink.locator("strong")).toHaveText("6");
  await armorLink.click();
  await expect(page).toHaveURL(/#PART-BURST-DBARMOR-6$/);
  await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));

  await page.goto("/#toy-release");
  await page.locator('[data-release-region="jp"]').click();
  await page.locator(".release-list-page .table-list-dropdown summary").click();
  await page.locator('[data-release-series="burst"]').click();
  await page.locator("#releaseSearchInput").fill("B-181");
  await page.locator('.release-product-row[data-product-id="PRODUCT-BURST-B-181"]').click();
  await page.locator("#detailModal .product-lineup-trigger").click();
  const japaneseDragoonLink = page.locator('#detailModal .composition-link[data-target-id="BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH"]');
  await expect(japaneseDragoonLink.locator("span")).toHaveText("드라군 V2.Wh.Xc' + 6 아머");
  await japaneseDragoonLink.click();
  await expect(page.locator("#detailModal .modal-name")).toHaveText("드라군 V2.Wh.Xc'");
  expect(errors).toEqual([]);
});

test("Metal Fight remake names switch between Korean releases and Japanese originals", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "regional remake data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productNo: "B-151",
      targetId: "BEY-BURST-B-151-02-LIGHTNING-L-DRAGO-10-R-Z-DASH",
      kr: "아쿠아 레비아단.10R.Z'",
      jp: "라이트닝 엘드라고.10R.Z'"
    },
    {
      productNo: "B-181",
      targetId: "BEY-BURST-B-181-04-HELL-KERBECS-GG-WV",
      kr: "다크 케르베로스.Gg.Wv",
      jp: "헬 케르벡스.Gg.Wv"
    },
    {
      productNo: "B-194",
      targetId: "BEY-BURST-B-194-06-GALAXY-PEGASIS-LG-X-DASH",
      kr: "스파크 슬레이프닐.Lg.X'",
      jp: "갤럭시 페가시스.Lg.X'"
    }
  ];

  const openRegionalBey = async (entry, region) => {
    await page.goto("/#toy-release");
    await page.locator(`button[data-release-region="${region}"]`).click();
    await page.locator(".release-list-page .table-list-dropdown summary").click();
    await page.locator('[data-release-series="burst"]').click();
    await page.locator("#releaseSearchInput").fill(entry.productNo);
    await page.locator(`.release-product-row[data-product-id="PRODUCT-BURST-${entry.productNo}"]`).click();
    await page.locator("#detailModal .product-lineup-trigger").click();
    const link = page.locator(`#detailModal .composition-link[data-target-id="${entry.targetId}"]`);
    await expect(link.locator("span")).toHaveText(entry[region]);
    await link.click();
    await expect(page.locator("#detailModal .modal-name")).toHaveText(entry[region]);
  };

  for (const entry of cases) {
    await openRegionalBey(entry, "kr");
    await openRegionalBey(entry, "jp");
  }
  expect(errors).toEqual([]);
});

test("X random booster products open their ordered Bey lineups", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "lineup data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-X-BX-48",
      count: 5,
      firstId: "BEY-X-BX-48-01-COBALT-DRAGOON-9-80F",
      lastId: "BEY-X-BX-48-05-DRAN-BUSTER-2-80Q"
    },
    {
      productId: "PRODUCT-X-CX-17",
      count: 6,
      firstId: "BEY-X-CX-17-01-UNICORN-DELTA-PO-3-60GU",
      lastId: "BEY-X-CX-17-06-CRIMSON-GARUDA-7-80GU"
    },
    {
      productId: "PRODUCT-X-CX-18",
      count: 3,
      firstId: "BEY-X-CX-18-01-BRACHIO-WHIP-OW-5-70NR",
      lastId: "BEY-X-CX-18-03-BRACHIO-WHIP-OW-5-70NR"
    },
    {
      productId: "PRODUCT-X-BX-50",
      count: 6,
      firstId: "BEY-X-BX-50-01-HEAVENS-RING-0-80DS",
      lastId: "BEY-X-BX-50-06-KERBEROS-REAPER-B-0-80WB"
    },
    {
      productId: "PRODUCT-X-BX-00-LIGHTNING-L-DRAGO-1-60F",
      count: 2,
      firstId: "BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F",
      lastId: "BEY-X-BX-00-02-LIGHTNING-L-DRAGO-BARRAGE-1-60F"
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const lineupTrigger = page.locator("#detailModal .product-lineup-trigger");
    await expect(lineupTrigger).toHaveText("무작위 베이 1개→");
    await lineupTrigger.click();
    const lineupLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(page.locator("#detailModal .mounted-title")).toHaveText("등장 베이");
    await expect(lineupLinks).toHaveCount(entry.count);
    await expect(lineupLinks.first()).toHaveAttribute("data-target-id", entry.firstId);
    await expect(lineupLinks.last()).toHaveAttribute("data-target-id", entry.lastId);
    await lineupLinks.first().click();
    await expect(page).toHaveURL(new RegExp(`#${entry.firstId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
    await page.locator("#detailModal .modal-back").click();
    await expect(page.locator("#detailModal .product-lineup-trigger")).toHaveText("무작위 베이 1개→");
  }
  expect(errors).toEqual([]);
});

test("Burst random layer products open their ordered layer lineups", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "lineup data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-BURST-B-143",
      firstId: "PART-BURST-GACHILAYER-DREAD-BAHAMUT-TEN"
    },
    {
      productId: "PRODUCT-BURST-B-152",
      firstId: "PART-BURST-GACHILAYER-KNOCKOUT-ODIN-GEN"
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const lineupTrigger = page.locator("#detailModal .product-lineup-trigger");
    await expect(lineupTrigger).toHaveText("무작위 레이어 1개→");
    await lineupTrigger.click();
    const lineupLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(page.locator("#detailModal .mounted-title")).toHaveText("등장 레이어");
    await expect(lineupLinks).toHaveCount(4);
    await expect(lineupLinks.first()).toHaveAttribute("data-target-id", entry.firstId);
    await lineupLinks.first().click();
    await expect(page).toHaveURL(new RegExp(`#${entry.firstId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
    await page.locator("#detailModal .modal-back").click();
    await expect(page.locator("#detailModal .product-lineup-trigger")).toHaveText("무작위 레이어 1개→");
  }
  expect(errors).toEqual([]);
});

test("X tool products open their base equipment without color variants", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "tool data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-X-BX-00-XTREME-STADIUM-LIGHT-PACKAGE",
      name: "익스트림스타디움",
      targetId: "TOOLS-X-XTREME-STADIUM"
    },
    {
      productId: "PRODUCT-X-BX-28",
      name: "스트링런처",
      targetId: "TOOLS-X-STRING-LAUNCHER"
    },
    {
      productId: "PRODUCT-X-BX-00-CUSTOM-GRIP-CLEAR-BLACK",
      name: "커스텀그립",
      targetId: "TOOLS-X-CUSTOM-GRIP"
    },
    {
      productId: "PRODUCT-X-BX-32",
      name: "와이드익스트림스타디움",
      targetId: "TOOLS-X-WIDE-XTREME-STADIUM"
    },
    {
      productId: "PRODUCT-X-BX-00-PHOENIX-FEATHER-BLADE-ORANGE",
      name: "피닉스페더 블레이드",
      targetId: "TOOLS-X-PHOENIX-FEATHER-BLADE"
    },
    {
      productId: "PRODUCT-X-BX-00-DRAN-SWORD-BLADE-BLUE",
      name: "드란소드 블레이드",
      targetId: "TOOLS-X-DRAN-SWORD-BLADE"
    },
    {
      productId: "PRODUCT-X-BX-00-BEYBLADE-STICKER-02",
      name: "베이블레이드 스티커 02",
      targetId: "TOOLS-X-BEYBLADE-STICKER-02"
    },
    {
      productId: "PRODUCT-X-BX-41",
      name: "러버커스텀그립",
      targetId: "TOOLS-X-RUBBER-CUSTOM-GRIP"
    },
    {
      productId: "PRODUCT-X-BX-47",
      name: "스트링런처L",
      targetId: "TOOLS-X-STRING-LAUNCHER-L"
    },
    {
      productId: "PRODUCT-X-BX-51",
      name: "스트링런처",
      targetId: "TOOLS-X-STRING-LAUNCHER"
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const compositionLink = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(compositionLink).toHaveCount(1);
    await expect(compositionLink).toHaveText(`${entry.name} 1개→`);
    await expect(compositionLink).toHaveAttribute("data-target-id", entry.targetId);
    await compositionLink.click();
    await expect(page).toHaveURL(new RegExp(`#${entry.targetId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
  }
  expect(errors).toEqual([]);
});

test("Burst remake products render exact Bey and launcher compositions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "set data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    { productId: "PRODUCT-BURST-B-00-DRAGOON-STORM-W-X", count: 1, targetId: "BEY-BURST-B-00-DRAGOON-STORM-W-X" },
    { productId: "PRODUCT-BURST-B-00-DRAGOON-STORM-W-X-GOLD", count: 1, targetId: "BEY-BURST-B-00-DRAGOON-STORM-W-X-GOLD" },
    { productId: "PRODUCT-BURST-B-00-DRANZER-SPIRAL-S-T", count: 1, targetId: "BEY-BURST-B-00-DRANZER-SPIRAL-S-T" },
    { productId: "PRODUCT-BURST-B-00-LEGEND-STAR-BEY-SET", count: 7, targetIndex: 4, targetId: "BEY-BURST-B-00-STORM-PEGASIS-HR-L-DASH" },
    { productId: "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-20TH-ANNIVERSARY-SET", count: 9, targetId: "BEY-BURST-B-00-DRAGOON-STORM-W-X" },
    { productId: "PRODUCT-BURST-B-00-METAL-FIGHT-BEYBLADE-ANIME-10TH-ANNIVERSARY-SET", count: 7, targetIndex: 5, targetId: "TOOLS-BURST-LONG-BEYLAUNCHER" },
    { productId: "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2020-V-SET", count: 7, targetIndex: 4, targetId: "BEY-BURST-B-00-GAIA-DRAGOON-BURST-10-E-I" },
    { productId: "PRODUCT-BURST-B-00-METAL-FIGHT-BEYBLADE-2020-BAKU-SET", count: 7, targetIndex: 6, targetId: "TOOLS-BURST-LONG-BEYLAUNCHER-LR" },
    { productId: "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2023-V2-SET", count: 6, targetId: "BEY-BURST-B-00-DRAGOON-V2-WH-XP-DASH" }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const compositionLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(compositionLinks).toHaveCount(entry.count);
    const targetLink = compositionLinks.nth(entry.targetIndex || 0);
    await expect(targetLink).toHaveAttribute("data-target-id", entry.targetId);
    await targetLink.click();
    await expect(page).toHaveURL(new RegExp(`#${entry.targetId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
  }

  await page.goto("/#PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2023-V2-SET");
  await expect(page.locator('#detailModal .composition-link[data-target-id="TOOLS-BURST-LIGHT-LAUNCHER-LR"]')).toHaveText("라이트런처LR 2개→");
  await expect(page.locator('#detailModal .composition-link[data-target-id="TOOLS-BURST-LAUNCHER-GRIP"]')).toHaveText("런처그립 2개→");
  await page.goto("/#PRODUCT-BURST-B-00-LEGEND-STAR-BEY-SET");
  await expect(page.locator('#detailModal .composition-link[data-target-id="TOOLS-BURST-LONG-LIGHT-LAUNCHER-LR"]')).toHaveText("롱라이트런처LR 1개→");
  await expect(page.locator('#detailModal .composition-link[data-target-id="TOOLS-BURST-LAUNCHER-GRIP"]')).toHaveText("런처그립 1개→");
  expect(errors).toEqual([]);
});

test("X set products render Bey, part, tool, and quantity compositions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "set data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    { productId: "PRODUCT-X-BX-09", count: 1, targetId: "TOOLS-X-BEY-BATTLE-LOGGER" },
    { productId: "PRODUCT-X-UX-10", count: 11, targetId: "BEY-X-UX-10-KNIGHT-MAIL-3-85BS" },
    { productId: "PRODUCT-X-BX-00-BEYBLADE-25TH-ANNIVERSARY-SET", count: 7, targetIndex: 3, targetId: "BEY-X-BX-00-DRAN-SWORD-3-60F" },
    { productId: "PRODUCT-X-BX-00-IRON-MAN-4-80B-THANOS-4-60P", count: 3, targetId: "BEY-X-BX-00-IRON-MAN-4-80B" },
    { productId: "PRODUCT-X-BX-00-T-REX-MOSASAURUS", count: 3, targetId: "BEY-X-BX-00-T-REX-1-80GB" },
    { productId: "PRODUCT-X-CX-00-EVANGELION-DECK-SET", count: 5, targetIndex: 4, targetId: "TOOLS-X-BEYBLADE-STORAGE-BOX" },
    { productId: "PRODUCT-X-CX-16", count: 4, targetId: "BEY-X-CX-16-BAHAMUT-BLITZ-BK-1-50I" }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const compositionLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(compositionLinks).toHaveCount(entry.count);
    const targetLink = compositionLinks.nth(entry.targetIndex || 0);
    await expect(targetLink).toHaveAttribute("data-target-id", entry.targetId);
    await targetLink.click();
    await expect(page).toHaveURL(new RegExp(`#${entry.targetId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
  }
  expect(errors).toEqual([]);
});

test("X 국내 공식 설명과 신규 한국 출시 구성이 상세·검색에 반영된다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "한국 공식 데이터는 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN");
  await expect(page.locator("#detailModal .modal-description")).toHaveText(
    "상대의 스매시 공격을 강하게 되돌리고 입체적인 형태의 날로 카운터를 만들어 전방위 방어 성능을 높인다."
  );

  await page.goto(`/#search?q=${encodeURIComponent("전방위 방어 성능")}&scope=bey`);
  await expect(page.locator('.search-results-panel .search-result-item[data-id="BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN"]')).toBeVisible();

  await page.goto("about:blank");
  await page.goto("/#PRODUCT-X-CX-11");
  await expect(page.locator("#detailModal .modal-name")).toHaveText("엠퍼러 마이트 덱 세트");
  const compositionLinks = page.locator("#detailModal .product-composition-list .composition-link");
  await expect(compositionLinks).toHaveCount(3);
  expect(await compositionLinks.evaluateAll((links) => links.map((link) => link.getAttribute("data-target-id")))).toEqual([
    "BEY-X-CX-11-EMPEROR-MIGHT-H-OP",
    "BEY-X-CX-11-SHARK-GILL-5-60FB",
    "BEY-X-CX-11-GOLEM-ROCK-M-85HN"
  ]);
  expect(errors).toEqual([]);
});

test("X 한국 발매목록은 기존 제품명과 보강된 출시 정보를 유지한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "한국 발매목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#toy-release");
  await page.locator('button[data-release-region="kr"]').click();
  await page.locator(".release-list-page .table-list-dropdown summary").click();
  await page.locator('[data-release-series="x"]').click();

  const cases = [
    ["UX-16", "PRODUCT-X-UX-16", "랜덤부스터 클락미라지 셀렉트", "2025년 12월", "₩15,900"],
    ["CX-16", "PRODUCT-X-CX-16", "스타트 대시 세트 C", "2026년 4월", "₩70,900"],
    ["UX-19", "PRODUCT-X-UX-19", "불릿그리폰H", "2026년 7월", "₩19,900"]
  ];

  for (const [query, productId, name, date, price] of cases) {
    await page.locator("#releaseSearchInput").fill(query);
    const row = page.locator(`.release-product-row[data-product-id="${productId}"]`);
    await expect(row).toBeVisible();
    await expect(row.locator(".release-product-link")).toHaveText(name);
    await expect(row.locator(".release-date-full")).toHaveText(date);
    await expect(row.locator("td").nth(4)).toHaveText(price);
  }

  expect(errors).toEqual([]);
});

test("Accel parts, UX-10 composition, and search use the canonical Korean spelling", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "spelling data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const partCases = [
    ["PART-X-BIT-A", "액셀"],
    ["PART-X-BIT-RA", "러버 액셀"],
    ["PART-BURST-DRIVER-HIGH-ACCEL-DASH", "하이 액셀 대시"]
  ];

  for (const [id, name] of partCases) {
    await page.goto("about:blank");
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal .modal-name")).toHaveText(name);
  }

  await page.goto("/#PRODUCT-X-UX-10");
  const rubberAccelLink = page.locator('#detailModal .composition-link[data-target-id="PART-X-BIT-RA"]');
  await expect(rubberAccelLink).toHaveText("러버 액셀 1개→");
  await rubberAccelLink.click();
  await expect(page).toHaveURL(/#PART-X-BIT-RA$/);
  await expect(page.locator("#detailModal .modal-name")).toHaveText("러버 액셀");

  await page.goto(`/#search?q=${encodeURIComponent("액셀")}&scope=all`);
  await expect(page.locator('.search-results-panel .search-result-item[data-id="PART-X-BIT-A"]')).toBeVisible();
  await expect(page.locator(".search-results-panel")).not.toContainText("엑셀");
  expect(errors).toEqual([]);
});

test("X over and assist blade codes use their Korean full names in details", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "coded part names are shared by desktop and mobile layouts");
  const errors = consoleErrors(page);

  await page.goto(`/#toy-catalog?scope=parts&series=x&q=${encodeURIComponent("슬래시")}`);
  const slashCard = page.locator('#catalogGrid .catalog-card[data-id="PART-X-BLADE-ASSIST-BLADE-SLASH"]');
  await expect(slashCard).toBeVisible();
  await expect(slashCard.locator(".card-name")).toHaveClass(/code-name/);
  await expect(slashCard.locator(".catalog-card-title")).toHaveText("S");
  await expect(slashCard.locator(".card-full-en")).toHaveText("Slash");
  await expect(slashCard.locator(".card-full-ko")).toHaveText("슬래시");

  const codedCases = [
    ["PART-X-BLADE-ASSIST-BLADE-SLASH", "슬래시"],
    ["PART-X-BLADE-OVER-BLADE-BRAKE", "브레이크"],
    ["PART-X-BLADE-ASSIST-BLADE-ODD", "오드"],
    ["PART-X-BIT-A", "액셀"],
    ["PART-METAL-FIGHT-TRACK-CLAW-145", "클로145"]
  ];
  for (const [id, name] of codedCases) {
    await page.goto("about:blank");
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal .modal-name")).toHaveText(name);
  }

  const properNameCases = [
    ["PART-X-BLADE-LOCK-CHIP-DRAN", "드랜"],
    ["PART-X-BLADE-MAIN-BLADE-BRAVE", "브레이브"],
    ["PART-X-BLADE-MAIN-BLADE-BLITZ", "블리츠"]
  ];
  for (const [id, name] of properNameCases) {
    await page.goto("about:blank");
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal .modal-name")).toHaveText(name);
  }

  expect(errors).toEqual([]);
});

test("X gold part products link to their base parts", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "part product data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-X-BX-00-NIGHT-SHIELD-GOLD",
      names: ["나이트실드"],
      targetIds: ["PART-X-BLADE-KNIGHT-SHIELD"]
    },
    {
      productId: "PRODUCT-X-BX-00-F-T-B-N-BIT-SET-GOLD-BLACK",
      names: ["F", "T", "B", "N"],
      targetIds: ["PART-X-BIT-F", "PART-X-BIT-T", "PART-X-BIT-B", "PART-X-BIT-N"]
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const links = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(links).toHaveCount(entry.targetIds.length);
    await expect(links).toHaveText(entry.names.map(name => `${name} 1개→`));
    expect(await links.evaluateAll(elements => elements.map(element => element.getAttribute("data-target-id"))))
      .toEqual(entry.targetIds);
    await links.first().click();
    await expect(page).toHaveURL(new RegExp(`#${entry.targetIds[0]}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
  }
  expect(errors).toEqual([]);
});

test("mounted part names use the restored compact label column", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#BEY-METAL-FIGHT-BB-80-GRAVITY-PERSEUS-AD145WD");
  await expect(page.locator("#detailModal")).toBeVisible();

  const links = page.locator("#detailModal .mounted-parts .mounted-link");
  await expect(links).toHaveCount(5);
  await expect(links.locator("strong")).toHaveText(["페르세우스", "페르세우스", "그라비티", "AD145", "WD"]);
  const rows = await links.evaluateAll(elements => elements.map(element => {
    const name = element.querySelector("strong");
    const nameStyle = getComputedStyle(name);
    return {
      arrow: element.querySelector("b")?.textContent,
      firstColumn: Number.parseFloat(getComputedStyle(element).gridTemplateColumns),
      nameLines: name.getBoundingClientRect().height / Number.parseFloat(nameStyle.lineHeight)
    };
  }));
  rows.forEach(row => {
    expect(row.firstColumn).toBe(84);
    expect(row.nameLines).toBeLessThanOrEqual(1.1);
    expect(row.arrow).toBe("→");
  });

  await links.first().click();
  await expect(page).toHaveURL(/#PART-METAL-FIGHT-FACE-PERSEUS$/);
  expect(errors).toEqual([]);
});

test("long X blade role labels wrap without overlapping mounted part names", async ({ page }) => {
  const errors = consoleErrors(page);
  const routes = [
    "BEY-X-CX-01-DRAN-BRAVE-S-6-60V",
    "BEY-X-CX-13-BAHAMUT-BLITZ-BK-1-50I"
  ];

  for (const id of routes) {
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal")).toBeVisible();
    const links = page.locator("#detailModal .mounted-parts:not(.bundled-parts) .mounted-link");
    const rows = await links.evaluateAll(elements => elements.map(element => {
      const label = element.querySelector("span");
      const name = element.querySelector("strong");
      const labelRange = document.createRange();
      const nameRange = document.createRange();
      labelRange.selectNodeContents(label);
      nameRange.selectNodeContents(name);
      const labelRect = labelRange.getBoundingClientRect();
      const nameRect = nameRange.getBoundingClientRect();
      return {
        label: label.textContent,
        firstColumn: Number.parseFloat(getComputedStyle(element).gridTemplateColumns),
        labelRight: labelRect.right,
        nameLeft: nameRect.left,
        nameLineCount: nameRange.getClientRects().length,
        breakCount: label.querySelectorAll("wbr").length
      };
    }));

    rows.forEach(row => {
      expect(row.firstColumn).toBe(84);
      expect(row.labelRight).toBeLessThanOrEqual(row.nameLeft);
      expect(row.nameLineCount).toBe(1);
      if (row.label.endsWith("블레이드")) expect(row.breakCount).toBe(1);
    });
  }
  expect(errors).toEqual([]);
});

test("release detail back button stays at the modal photo corner", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#toy-release");
  const releaseLink = page.locator(".release-product-link").first();
  await expect(releaseLink).toBeVisible();
  await releaseLink.click();
  await expect(page.locator("#detailModal")).toBeVisible();

  const backButton = page.locator("#detailModal .modal-back[data-back-release]");
  await expectModalBackAtShellTopLeft(backButton);
  await backButton.click();
  await expect(page.locator('[data-app-panel="release"].active')).toBeVisible();
  expect(errors).toEqual([]);
});

test("long part descriptions use an accessible chevron expander", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#PART-BURST-DBLAYER-GREATEST-RAPHAEL");
  await expect(page.locator("#detailModal")).toBeVisible();

  const slot = page.locator("#detailModal .part-modal-info .modal-info-slot");
  const description = slot.locator(".modal-description");
  const toggle = slot.locator(".modal-description-toggle");
  const expanderGeometry = () => slot.evaluate(element => {
    const region = element.querySelector(".modal-description-region");
    const description = element.querySelector(".modal-description");
    const button = element.querySelector(".modal-description-toggle");
    const regionRect = region.getBoundingClientRect();
    const descriptionRect = description.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const buttonStyle = getComputedStyle(button);
    const hoverSurfaceStyle = getComputedStyle(button, "::after");
    const regionStyle = getComputedStyle(region);
    const paddingBottom = Number.parseFloat(regionStyle.paddingBottom);
    const expectedRegionHeight = descriptionRect.height
      + Number.parseFloat(regionStyle.paddingTop)
      + paddingBottom
      + Number.parseFloat(regionStyle.borderTopWidth)
      + Number.parseFloat(regionStyle.borderBottomWidth);
    return {
      backgroundColor: buttonStyle.backgroundColor,
      borderStyle: buttonStyle.borderTopStyle,
      borderWidth: buttonStyle.borderTopWidth,
      buttonHeight: buttonRect.height,
      buttonWidth: buttonRect.width,
      expectedRegionHeight,
      hoverSurfaceBackgroundColor: hoverSurfaceStyle.backgroundColor,
      hoverSurfaceHeight: Number.parseFloat(hoverSurfaceStyle.height),
      hoverSurfaceLeft: Number.parseFloat(hoverSurfaceStyle.left),
      hoverSurfaceTop: Number.parseFloat(hoverSurfaceStyle.top),
      hoverSurfaceWidth: Number.parseFloat(hoverSurfaceStyle.width),
      horizontalOffset: (buttonRect.left + buttonRect.width / 2) - (regionRect.left + regionRect.width / 2),
      paddingBottom,
      regionContainsButton: region.contains(button),
      regionHeight: regionRect.height,
      regionOwnsButton: button.parentElement === region,
      verticalOffset: (buttonRect.top + buttonRect.height / 2) - regionRect.bottom
    };
  });
  await expect(slot).toHaveClass(/is-expandable/);
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveText("");
  await expect(toggle).toHaveAttribute("aria-label", "부품 설명 펼치기");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  const collapsed = await description.evaluate(element => ({
    height: element.getBoundingClientRect().height,
    lineClamp: getComputedStyle(element).webkitLineClamp
  }));
  const collapsedChevron = await toggle.evaluate(element => getComputedStyle(element, "::before").transform);
  const collapsedGeometry = await expanderGeometry();
  expect(collapsed.lineClamp).toBe("2");
  expect(collapsedGeometry.regionContainsButton).toBe(true);
  expect(collapsedGeometry.regionOwnsButton).toBe(true);
  expect(Math.abs(collapsedGeometry.horizontalOffset)).toBeLessThanOrEqual(1);
  expect(Math.abs(collapsedGeometry.verticalOffset + collapsedGeometry.paddingBottom / 2)).toBeLessThanOrEqual(1);
  expect(Math.abs(collapsedGeometry.regionHeight - collapsedGeometry.expectedRegionHeight)).toBeLessThanOrEqual(1);
  expect(collapsedGeometry.backgroundColor).toBe("rgba(0, 0, 0, 0)");
  expect(collapsedGeometry.borderStyle).toBe("none");
  expect(collapsedGeometry.borderWidth).toBe("0px");
  expect(collapsedGeometry.buttonWidth).toBeCloseTo(44, 1);
  expect(collapsedGeometry.buttonHeight).toBeCloseTo(32, 1);
  expect(collapsedGeometry.hoverSurfaceBackgroundColor).toBe("rgba(0, 0, 0, 0)");
  expect(collapsedGeometry.hoverSurfaceWidth).toBeCloseTo(28, 1);
  expect(collapsedGeometry.hoverSurfaceHeight).toBeCloseTo(24, 1);
  expect(collapsedGeometry.hoverSurfaceLeft).toBeCloseTo(8, 1);
  expect(collapsedGeometry.hoverSurfaceTop).toBeCloseTo(4, 1);

  await toggle.hover();
  const hoveredGeometry = await expanderGeometry();
  const hoverColor = await toggle.evaluate(() => {
    const probe = document.createElement("i");
    probe.style.cssText = "position:fixed;background:var(--ui-control-hover)";
    document.body.append(probe);
    const color = getComputedStyle(probe).backgroundColor;
    probe.remove();
    return color;
  });
  expect(hoveredGeometry.backgroundColor).toBe("rgba(0, 0, 0, 0)");
  await expect.poll(() => toggle.evaluate(element => getComputedStyle(element, "::after").backgroundColor))
    .toBe(hoverColor);

  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(slot).toHaveClass(/is-expanded/);
  await expect(toggle).toHaveAttribute("aria-label", "부품 설명 접기");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  const expandedHeight = await description.evaluate(element => element.getBoundingClientRect().height);
  expect(expandedHeight).toBeGreaterThan(collapsed.height + 1);
  const expandedGeometry = await expanderGeometry();
  expect(Math.abs(expandedGeometry.horizontalOffset)).toBeLessThanOrEqual(1);
  expect(Math.abs(expandedGeometry.verticalOffset + expandedGeometry.paddingBottom / 2)).toBeLessThanOrEqual(1);
  expect(Math.abs(expandedGeometry.regionHeight - expandedGeometry.expectedRegionHeight)).toBeLessThanOrEqual(1);
  await expect.poll(() => toggle.evaluate(element => getComputedStyle(element, "::before").transform))
    .not.toBe(collapsedChevron);

  await page.keyboard.press("Enter");
  await expect(slot).not.toHaveClass(/is-expanded/);
  await expect(toggle).toHaveAttribute("aria-label", "부품 설명 펼치기");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  await page.goto("/#PART-X-BLADE-DRAN-SWORD");
  await expect(page.locator("#detailModal")).toBeVisible();
  const shortToggle = page.locator("#detailModal .part-modal-info .modal-description-toggle");
  await expect(shortToggle).toBeHidden();
  expect(errors).toEqual([]);
});

test("초제트 방영목록은 51개 회차와 검색·상세 주소를 제공한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "초제트 방영목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#anime-episode");
  await page.locator(".anime-episode-controls .table-list-dropdown summary").click();
  await page.locator('[data-anime-season="burst-cho-z"]').click();

  const rows = page.locator(".anime-episode-row");
  await expect(rows).toHaveCount(51);
  await expect(rows.first().locator("td").nth(0)).toHaveText("1화");
  await expect(rows.first().locator(".anime-episode-title")).toHaveText("이게 바로 초제트 베이야!");
  await expect(rows.first().locator(".anime-air-date-full")).toHaveText("2018년 6월 18일");
  await expect(rows.last().locator("td").nth(0)).toHaveText("51화");
  await expect(rows.last().locator(".anime-episode-title")).toHaveText("유대감! 서아진 대 강산!!");
  await expect(rows.last().locator(".anime-air-date-full")).toHaveText("2019년 6월 3일");

  await page.locator("#animeEpisodeSearchInput").fill("전율! 데드그랑의 함정!!");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-title")).toHaveText("전율! 데드그랑의 함정!!");

  await page.locator("#animeEpisodeSearchInput").fill("");
  await page.locator(".anime-episode-row").first().click();
  await expect(page).toHaveURL(/#BURST-CHO-Z-EPISODE-1$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("1화 이게 바로 초제트 베이야!");
  await page.locator("#detailModal .modal-back[data-back-anime-episodes]").click();
  await expect(page.locator('[data-anime-season="burst-cho-z"].active')).toHaveCount(1);
  await expect(page.locator(".anime-episode-row")).toHaveCount(51);
  expect(errors).toEqual([]);
});

test("진검 방영목록은 52개 회차와 교정된 검색·상세 주소를 제공한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "진검 방영목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#anime-episode");
  const seasonDropdownSummary = page.locator(".anime-episode-controls .table-list-dropdown summary");
  await expect(seasonDropdownSummary).toBeVisible();
  await seasonDropdownSummary.evaluate(summary => {
    summary.closest("details").open = true;
  });
  await page.locator('[data-anime-season="burst-gachi"]').click();

  const rows = page.locator(".anime-episode-row");
  await expect(rows).toHaveCount(52);
  await expect(rows.first().locator("td").nth(0)).toHaveText("1화");
  await expect(rows.first().locator(".anime-episode-title")).toHaveText("진검 베이! 에이스 드래곤!");
  await expect(rows.first().locator(".anime-air-date-full")).toHaveText("2019년 6월 24일");
  await expect(rows.last().locator("td").nth(0)).toHaveText("52화");
  await expect(rows.last().locator(".anime-episode-title")).toHaveText("진검승부! 데미안 대 로니!");
  await expect(rows.last().locator(".anime-air-date-full")).toHaveText("2020년 6월 15일");

  await page.locator("#animeEpisodeSearchInput").fill("중량급, 츠바이 롱기누스!");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-title")).toHaveText("중량급, 츠바이 롱기누스!");

  await page.locator("#animeEpisodeSearchInput").fill("");
  await page.locator(".anime-episode-row").first().click();
  await expect(page).toHaveURL(/#BURST-GACHI-EPISODE-1$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("1화 진검 베이! 에이스 드래곤!");
  await page.locator("#detailModal .modal-back[data-back-anime-episodes]").click();
  await expect(page.locator('[data-anime-season="burst-gachi"].active')).toHaveCount(1);
  await expect(page.locator(".anime-episode-row")).toHaveCount(52);
  expect(errors).toEqual([]);
});

test("슈퍼킹 방영목록은 52개 한국판 제목과 검색·상세 주소를 제공한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "슈퍼킹 방영목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#anime-episode");
  const seasonDropdownSummary = page.locator(".anime-episode-controls .table-list-dropdown summary");
  await expect(seasonDropdownSummary).toBeVisible();
  await seasonDropdownSummary.evaluate(summary => {
    summary.closest("details").open = true;
  });
  await page.locator('[data-anime-season="burst-superking"]').click();

  const rows = page.locator(".anime-episode-row");
  await expect(rows).toHaveCount(52);
  await expect(rows.first().locator("td").nth(0)).toHaveText("1화");
  await expect(rows.first().locator(".anime-episode-title")).toHaveText("베이블레이드 혁명!");
  await expect(rows.first().locator(".anime-air-date-full")).toHaveText("2020년 7월 1일");
  await expect(rows.nth(15).locator(".anime-air-date-full")).toHaveText("2020년 10월 21일");
  await expect(rows.nth(45).locator("td").nth(0)).toHaveText("46화");
  await expect(rows.nth(45).locator(".anime-episode-title")).toHaveText("몰아치는 레이징 템페스트!");
  await expect(rows.nth(45).locator(".anime-air-date-full")).toHaveText("2021년 5월 19일");
  await expect(rows.last().locator("td").nth(0)).toHaveText("52화");
  await expect(rows.last().locator(".anime-episode-title")).toHaveText("한계돌파! 우리들의 플레어!");
  await expect(rows.last().locator(".anime-air-date-full")).toHaveText("2021년 6월 30일");

  await page.locator("#animeEpisodeSearchInput").fill("하이페리온! 헬리오스! 한계돌파!");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-title")).toHaveText("하이페리온! 헬리오스! 한계돌파!");

  await page.locator("#animeEpisodeSearchInput").fill("");
  await rows.nth(45).click();
  await expect(page).toHaveURL(/#BURST-SUPERKING-EPISODE-46$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("46화 몰아치는 레이징 템페스트!");
  await page.locator("#detailModal .modal-back[data-back-anime-episodes]").click();
  await expect(page.locator('[data-anime-season="burst-superking"].active')).toHaveCount(1);
  await expect(page.locator(".anime-episode-row")).toHaveCount(52);

  await page.locator(".anime-episode-row").first().click();
  await expect(page).toHaveURL(/#BURST-SUPERKING-EPISODE-1$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("1화 베이블레이드 혁명!");
  expect(errors).toEqual([]);
});

test("DB 방영목록은 52개 한국판 제목과 검색·상세 주소를 제공한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "DB 방영목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#anime-episode");
  const seasonDropdownSummary = page.locator(".anime-episode-controls .table-list-dropdown summary");
  await expect(seasonDropdownSummary).toBeVisible();
  await seasonDropdownSummary.evaluate(summary => {
    summary.closest("details").open = true;
  });
  await page.locator('[data-anime-season="burst-db"]').click();

  const rows = page.locator(".anime-episode-row");
  await expect(rows).toHaveCount(52);
  await expect(rows.first().locator("td").nth(0)).toHaveText("1화");
  await expect(rows.first().locator(".anime-episode-title")).toHaveText("마왕! 다이너마이트 벨리알!");
  await expect(rows.first().locator(".anime-air-date-full")).toHaveText("2021년 7월 7일");
  await expect(rows.nth(45).locator(".anime-episode-title")).toHaveText("격돌! 패왕 대 불사조!");
  await expect(rows.nth(45).locator(".anime-air-date-full")).toHaveText("2022년 6월 8일");
  await expect(rows.nth(46).locator(".anime-air-date-full")).toHaveText("2022년 6월 8일");
  await expect(rows.nth(47).locator(".anime-air-date-full")).toHaveText("2022년 6월 15일");
  await expect(rows.last().locator("td").nth(0)).toHaveText("52화");
  await expect(rows.last().locator(".anime-episode-title")).toHaveText("폭발! 파이널 배틀!");
  await expect(rows.last().locator(".anime-air-date-full")).toHaveText("2022년 7월 13일");

  await page.locator("#animeEpisodeSearchInput").fill("역전의 역전! 바사라의 역습!");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-title")).toHaveText("역전의 역전! 바사라의 역습!");

  await page.locator("#animeEpisodeSearchInput").fill("");
  await rows.nth(32).click();
  await expect(page).toHaveURL(/#BURST-DB-EPISODE-33$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("33화 역전의 역전! 바사라의 역습!");
  await page.locator("#detailModal .modal-back[data-back-anime-episodes]").click();
  await expect(page.locator('[data-anime-season="burst-db"].active')).toHaveCount(1);
  await expect(page.locator(".anime-episode-row")).toHaveCount(52);

  await page.locator(".anime-episode-row").first().click();
  await expect(page).toHaveURL(/#BURST-DB-EPISODE-1$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("1화 마왕! 다이너마이트 벨리알!");
  expect(errors).toEqual([]);
});

test("episode modal matches the rare bey get shell and preserves contextual back navigation", async ({ page }) => {
  const errors = consoleErrors(page);
  const shellGeometry = async () => {
    await page.locator("#detailModal .modal-stage").evaluate(stage =>
      Promise.all(stage.getAnimations({ subtree: true }).map(animation => animation.finished.catch(() => {})))
    );
    const shell = await page.locator("#detailModal .modal-inner--rare-bey-get-list").boundingBox();
    const title = await page.locator("#detailModal .product-modal-name").boundingBox();
    return { shell, title };
  };

  await page.goto("/#rare-bey-get-list?region=jp&series=x");
  await expect(page.locator("#detailModal")).toBeVisible();
  await expect(page.locator("#detailModal .rare-bey-get-list")).toBeVisible();
  const rareGeometry = await shellGeometry();

  await page.goto("/#anime-episode");
  const episodeRow = page.locator(".anime-episode-row").first();
  await expect(episodeRow).toBeVisible();
  await episodeRow.click();
  await expect(page).toHaveURL(/#.*EPISODE-\d+$/);
  await expect(page.locator("#detailModal")).toBeVisible();

  const episodeShell = page.locator("#detailModal .modal-inner--rare-bey-get-list");
  const episodeTitle = page.locator("#detailModal .product-modal-name");
  const episodeArt = page.locator("#detailModal .product-modal-art");
  const backButton = page.locator("#detailModal .modal-back[data-back-anime-episodes]");
  await expect(episodeShell).toBeVisible();
  await expect(episodeTitle).toBeVisible();
  await expect(episodeArt).toHaveCSS("display", "none");
  await expectModalBackAtShellTopLeft(backButton);
  await expect(episodeShell.locator(".modal-body-block, .modal-section, .product-composition, .rare-bey-get-list")).toHaveCount(0);

  const episodeGeometry = await shellGeometry();
  for (const key of ["x", "y", "width", "height"]) {
    expect(Math.abs(episodeGeometry.shell[key] - rareGeometry.shell[key])).toBeLessThanOrEqual(1);
  }
  for (const key of ["x", "y", "width"]) {
    expect(Math.abs(episodeGeometry.title[key] - rareGeometry.title[key])).toBeLessThanOrEqual(1);
  }

  const backBox = await backButton.boundingBox();
  expect(episodeGeometry.title.y - (backBox.y + backBox.height)).toBeGreaterThanOrEqual(7.5);
  const viewport = page.viewportSize();
  const closeBox = await page.locator("#detailModal .modal-close").boundingBox();
  expect(episodeGeometry.shell.x).toBeGreaterThanOrEqual(0);
  expect(episodeGeometry.shell.y).toBeGreaterThanOrEqual(0);
  expect(episodeGeometry.shell.x + episodeGeometry.shell.width).toBeLessThanOrEqual(viewport.width + 1);
  expect(episodeGeometry.shell.y + episodeGeometry.shell.height).toBeLessThanOrEqual(viewport.height + 1);
  expect(closeBox.x).toBeGreaterThanOrEqual(0);
  expect(closeBox.y).toBeGreaterThanOrEqual(0);
  expect(closeBox.x + closeBox.width).toBeLessThanOrEqual(viewport.width + 1);
  expect(closeBox.y + closeBox.height).toBeLessThanOrEqual(viewport.height + 1);

  const episodeHash = new URL(page.url()).hash;
  const episodeTitleText = await episodeTitle.textContent();
  await page.evaluate(() => sessionStorage.removeItem("beyArchiveModalContext"));
  await page.goto(`/index.html${episodeHash}`);
  await expect(page.locator("#detailModal")).toBeVisible();
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText(episodeTitleText);
  await expect(page.locator("#detailModal .modal-back")).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("modal tag popovers follow the active pointer type", async ({ page }, testInfo) => {
  const mobile = testInfo.project.name === "mobile";
  if (!mobile) {
    await page.addInitScript(() => {
      const nativeMatchMedia = window.matchMedia.bind(window);
      window.matchMedia = query => {
        const result = nativeMatchMedia(query);
        if (query !== "(hover: none), (pointer: coarse)") return result;
        return {
          matches: true,
          media: result.media,
          onchange: result.onchange,
          addListener: result.addListener.bind(result),
          removeListener: result.removeListener.bind(result),
          addEventListener: result.addEventListener.bind(result),
          removeEventListener: result.removeEventListener.bind(result),
          dispatchEvent: result.dispatchEvent.bind(result)
        };
      };
    });
  }

  await page.goto("/#BEY-X-BX-03-WIZARD-ARROW-4-80B");
  await expect(page.locator("#detailModal")).toBeVisible();
  const tag = page.locator('.modal-tag-info[data-tag-label="스태미나형"]');
  await expect(tag).toHaveCount(1);
  const popover = page.locator(".modal-tag-popover");

  if (mobile) {
    await tag.tap();
    await expect(popover).toBeVisible();
    await expect(tag).toHaveAttribute("aria-expanded", "true");
    await tag.tap();
    await expect(popover).toHaveCount(0);
    await expect(tag).toHaveAttribute("aria-expanded", "false");
    return;
  }

  await tag.hover();
  await expect(popover).toBeVisible();
  await expect(tag).toHaveAttribute("aria-expanded", "true");
  await expect(tag).toHaveAttribute("aria-describedby", /modal-tag-popover-/);

  await page.locator(".modal-name").hover();
  await expect(popover).toHaveCount(0);
  await expect(tag).toHaveAttribute("aria-expanded", "false");

  await tag.click();
  await expect(popover).toBeVisible();
  await page.locator(".modal-name").hover();
  await expect(popover).toBeVisible();
  await tag.click();
  await expect(popover).toHaveCount(0);

  await page.locator("#modalClose").focus();
  await tag.focus();
  await expect(popover).toBeVisible();
  await page.keyboard.press("Tab");
  await expect(popover).toHaveCount(0);
});

test("modal tags use one free horizontal scroll row when space is narrow", async ({ page }, testInfo) => {
  const narrowWidth = testInfo.project.name === "mobile" ? 393 : 360;
  await page.setViewportSize({ width: narrowWidth, height: 800 });
  await page.goto("/#PART-X-BLADE-DRAN-SWORD");
  await expect(page.locator("#detailModal")).toBeVisible();

  const slot = page.locator("#detailModal .modal-slot-tags");
  const tags = slot.locator(".modal-tags > *");
  await expect(tags).toHaveCount(4);
  const narrowLayout = await slot.evaluate(element => {
    const bounds = node => {
      const rect = node.getBoundingClientRect();
      return { left: rect.left, right: rect.right, top: rect.top, bottom: rect.bottom };
    };
    const style = getComputedStyle(element);
    const tagRoot = element.querySelector(".modal-tags");
    return {
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
      overflowX: style.overflowX,
      overflowY: style.overflowY,
      overscrollX: style.overscrollBehaviorX,
      scrollbarWidth: style.scrollbarWidth,
      boxShadow: style.boxShadow,
      flexWrap: getComputedStyle(tagRoot).flexWrap,
      slot: bounds(element),
      tags: [...tagRoot.children].map(bounds)
    };
  });
  expect(narrowLayout.scrollWidth).toBeGreaterThan(narrowLayout.clientWidth);
  expect(narrowLayout.overflowX).toBe("auto");
  expect(narrowLayout.overflowY).toBe("hidden");
  expect(narrowLayout.overscrollX).toBe("contain");
  expect(narrowLayout.scrollbarWidth).toBe("none");
  expect(narrowLayout.boxShadow).toBe("none");
  expect(narrowLayout.flexWrap).toBe("nowrap");
  expect(new Set(narrowLayout.tags.map(tag => Math.round(tag.top))).size).toBe(1);
  expect(new Set(narrowLayout.tags.map(tag => Math.round(tag.bottom))).size).toBe(1);
  expect(narrowLayout.tags.every(tag => tag.top >= narrowLayout.slot.top - 1 && tag.bottom <= narrowLayout.slot.bottom + 1)).toBe(true);

  const smoothWheelBehavior = await slot.evaluate(element => new Promise(resolve => {
    const positions = [];
    const onScroll = () => positions.push(element.scrollLeft);
    element.scrollLeft = 0;
    element.addEventListener("scroll", onScroll);
    const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 120 });
    const dispatched = element.dispatchEvent(event);
    const immediate = element.scrollLeft;
    const maxScrollLeft = element.scrollWidth - element.clientWidth;
    const waitForEndpoint = deadline => {
      if (Math.abs(maxScrollLeft - element.scrollLeft) <= 1 || performance.now() >= deadline) {
        element.removeEventListener("scroll", onScroll);
        resolve({
          defaultPrevented: event.defaultPrevented,
          dispatched,
          immediate,
          maxScrollLeft,
          positions,
          settled: element.scrollLeft
        });
        return;
      }
      requestAnimationFrame(() => waitForEndpoint(deadline));
    };
    requestAnimationFrame(() => waitForEndpoint(performance.now() + 1_000));
  }));
  expect(smoothWheelBehavior.defaultPrevented).toBe(true);
  expect(smoothWheelBehavior.dispatched).toBe(false);
  expect(smoothWheelBehavior.immediate).toBeLessThan(smoothWheelBehavior.maxScrollLeft);
  expect(Math.abs(smoothWheelBehavior.maxScrollLeft - smoothWheelBehavior.settled)).toBeLessThanOrEqual(1);
  expect(smoothWheelBehavior.positions.some(position => position > 0 && position < smoothWheelBehavior.maxScrollLeft)).toBe(true);

  const repeatedWheelTarget = await slot.evaluate(element => new Promise(resolve => {
    element.scrollLeft = 0;
    const targets = [];
    const originalScrollTo = element.scrollTo.bind(element);
    element.scrollTo = options => {
      targets.push(options.left);
      originalScrollTo(options);
    };
    const dispatchWheel = () => element.dispatchEvent(new window.WheelEvent("wheel", {
      bubbles: true,
      cancelable: true,
      deltaY: 30
    }));
    const waitForFirstScrollFrame = deadline => {
      if (element.scrollLeft > 0 || performance.now() >= deadline) {
        dispatchWheel();
        element.scrollTo = originalScrollTo;
        resolve({ targets });
        return;
      }
      requestAnimationFrame(() => waitForFirstScrollFrame(deadline));
    };
    dispatchWheel();
    requestAnimationFrame(() => waitForFirstScrollFrame(performance.now() + 1_000));
  }));
  expect(repeatedWheelTarget.targets).toHaveLength(2);
  expect(repeatedWheelTarget.targets[1]).toBeGreaterThan(repeatedWheelTarget.targets[0]);
  await expect.poll(async () => {
    const position = await slot.evaluate(element => element.scrollLeft);
    return Math.abs(repeatedWheelTarget.targets[1] - position);
  }, { timeout: 1_000 }).toBeLessThanOrEqual(1);

  const horizontalWheelBehavior = await slot.evaluate(element => {
    element.scrollLeft = 0;
    const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaX: 30 });
    const dispatched = element.dispatchEvent(event);
    return { defaultPrevented: event.defaultPrevented, dispatched, scrollLeft: element.scrollLeft };
  });
  expect(horizontalWheelBehavior).toEqual({ defaultPrevented: true, dispatched: false, scrollLeft: 30 });

  await page.emulateMedia({ reducedMotion: "reduce" });
  const reducedMotionWheelBehavior = await slot.evaluate(element => {
    element.scrollLeft = 0;
    const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 120 });
    const dispatched = element.dispatchEvent(event);
    return {
      defaultPrevented: event.defaultPrevented,
      dispatched,
      maxScrollLeft: element.scrollWidth - element.clientWidth,
      scrollLeft: element.scrollLeft
    };
  });
  expect(reducedMotionWheelBehavior).toEqual(expect.objectContaining({
    defaultPrevented: true,
    dispatched: false,
    scrollLeft: reducedMotionWheelBehavior.maxScrollLeft
  }));
  await page.emulateMedia({ reducedMotion: "no-preference" });

  const edgeWheelBehavior = await slot.evaluate(element => {
    element.scrollLeft = element.scrollWidth;
    const atEnd = element.scrollLeft;
    const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 120 });
    const dispatched = element.dispatchEvent(event);
    return { defaultPrevented: event.defaultPrevented, dispatched, atEnd, afterOutward: element.scrollLeft };
  });
  expect(edgeWheelBehavior.defaultPrevented).toBe(false);
  expect(edgeWheelBehavior.dispatched).toBe(true);
  expect(edgeWheelBehavior.afterOutward).toBe(edgeWheelBehavior.atEnd);

  if (testInfo.project.name === "desktop") {
    await slot.evaluate(element => { element.scrollLeft = 0; });
    await slot.hover();
    await page.mouse.wheel(0, 120);
    await expect.poll(async () => slot.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);

    const modalScrollArea = page.locator("#detailModal .modal-scroll-area");
    await page.setViewportSize({ width: narrowWidth, height: 500 });
    await expect.poll(async () => modalScrollArea.evaluate(element => element.scrollHeight - element.clientHeight)).toBeGreaterThan(0);
    await modalScrollArea.evaluate(element => { element.scrollTop = 0; });
    await slot.evaluate(element => { element.scrollLeft = element.scrollWidth; });
    await slot.hover();
    await page.mouse.wheel(0, 120);
    await expect.poll(async () => modalScrollArea.evaluate(element => element.scrollTop)).toBeGreaterThan(0);
    await page.setViewportSize({ width: narrowWidth, height: 800 });
    await modalScrollArea.evaluate(element => { element.scrollTop = 0; });
  }

  await slot.evaluate(element => { element.scrollLeft = element.scrollWidth; });
  await expect.poll(async () => slot.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
  const lastTagVisible = await slot.evaluate(element => {
    const slotRect = element.getBoundingClientRect();
    const tagRect = element.querySelector(".modal-tags > :last-child").getBoundingClientRect();
    return tagRect.left >= slotRect.left - 1 && tagRect.right <= slotRect.right + 1;
  });
  expect(lastTagVisible).toBe(true);

  await slot.evaluate(element => { element.scrollLeft = 0; });
  await tags.last().focus();
  await expect.poll(async () => slot.evaluate(element => element.scrollLeft)).toBeGreaterThan(0);
  await expect(page.locator(".modal-tag-popover")).toBeVisible();
  const focusedTagVisible = await slot.evaluate(element => {
    const slotRect = element.getBoundingClientRect();
    const tagRect = element.querySelector(".modal-tags > :last-child").getBoundingClientRect();
    return tagRect.left >= slotRect.left - 1 && tagRect.right <= slotRect.right + 1;
  });
  expect(focusedTagVisible).toBe(true);

  await page.reload();
  await expect(page.locator("#detailModal")).toBeVisible();
  const reloadedSlot = page.locator("#detailModal .modal-slot-tags");
  const firstTag = reloadedSlot.locator(".modal-tag-info").first();
  await firstTag.click();
  await expect(page.locator(".modal-tag-popover")).toBeVisible();
  await reloadedSlot.evaluate(element => {
    element.scrollLeft = 0;
    element.dispatchEvent(new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 30 }));
  });
  await expect.poll(async () => reloadedSlot.evaluate(element => element.scrollLeft)).toBe(30);
  await expect.poll(async () => page.evaluate(() => {
    const tag = document.querySelector("#detailModal .modal-tag-info");
    const popover = document.querySelector(".modal-tag-popover");
    if (!tag || !popover) return Number.POSITIVE_INFINITY;
    return Math.abs(parseFloat(popover.style.left) - Math.max(14, tag.getBoundingClientRect().left));
  })).toBeLessThanOrEqual(1);

  if (testInfo.project.name === "desktop") {
    const popoverLayout = () => page.evaluate(() => {
      const tag = document.querySelector("#detailModal .modal-tag-info");
      const popover = document.querySelector(".modal-tag-popover");
      if (!tag || !popover) return null;
      const margin = 14;
      const gap = 8;
      const viewport = window.visualViewport;
      const viewportLeft = viewport?.offsetLeft || 0;
      const viewportTop = viewport?.offsetTop || 0;
      const viewportWidth = viewport?.width || window.innerWidth;
      const viewportHeight = viewport?.height || window.innerHeight;
      const tagRect = tag.getBoundingClientRect();
      const popoverRect = popover.getBoundingClientRect();
      const minLeft = viewportLeft + margin;
      const minTop = viewportTop + margin;
      const maxLeft = viewportLeft + viewportWidth - margin - popoverRect.width;
      const maxTop = viewportTop + viewportHeight - margin - popoverRect.height;
      let expectedLeft = Math.min(tagRect.left, maxLeft);
      let expectedTop = tagRect.bottom + gap;
      if (expectedTop > maxTop) expectedTop = tagRect.top - popoverRect.height - gap;
      expectedLeft = Math.max(minLeft, Math.min(expectedLeft, maxLeft));
      expectedTop = Math.max(minTop, Math.min(expectedTop, maxTop));
      return {
        expanded: tag.getAttribute("aria-expanded"),
        describedBy: tag.getAttribute("aria-describedby") || "",
        leftError: Math.abs(parseFloat(popover.style.left) - expectedLeft),
        topError: Math.abs(parseFloat(popover.style.top) - expectedTop),
        withinViewport: popoverRect.left >= minLeft - 1
          && popoverRect.right <= viewportLeft + viewportWidth - margin + 1
          && popoverRect.top >= minTop - 1
          && popoverRect.bottom <= viewportTop + viewportHeight - margin + 1
      };
    });

    await page.setViewportSize({ width: 1200, height: 800 });
    await expect(page.locator("#detailModal")).toBeVisible();
    await expect.poll(async () => (await popoverLayout())?.leftError ?? Number.POSITIVE_INFINITY).toBeLessThanOrEqual(1);
    await expect.poll(async () => (await popoverLayout())?.topError ?? Number.POSITIVE_INFINITY).toBeLessThanOrEqual(1);
    const resizedPopover = await popoverLayout();
    expect(resizedPopover).toEqual(expect.objectContaining({
      expanded: "true",
      withinViewport: true
    }));
    expect(resizedPopover.describedBy).toMatch(/^modal-tag-popover-/);
    await expect.poll(async () => page.locator("#detailModal .modal-slot-tags").evaluate(element => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth,
      scrollLeft: element.scrollLeft
    }))).toEqual(expect.objectContaining({ scrollLeft: 0 }));
    const wideLayout = await page.locator("#detailModal .modal-slot-tags").evaluate(element => ({
      clientWidth: element.clientWidth,
      scrollWidth: element.scrollWidth
    }));
    expect(wideLayout.scrollWidth).toBeLessThanOrEqual(wideLayout.clientWidth + 1);
    const wideWheelBehavior = await page.locator("#detailModal .modal-slot-tags").evaluate(element => {
      const event = new window.WheelEvent("wheel", { bubbles: true, cancelable: true, deltaY: 120 });
      const dispatched = element.dispatchEvent(event);
      return { defaultPrevented: event.defaultPrevented, dispatched, scrollLeft: element.scrollLeft };
    });
    expect(wideWheelBehavior).toEqual({ defaultPrevented: false, dispatched: true, scrollLeft: 0 });

    await page.setViewportSize({ width: narrowWidth, height: 720 });
    await expect.poll(async () => (await popoverLayout())?.leftError ?? Number.POSITIVE_INFINITY).toBeLessThanOrEqual(1);
    await expect.poll(async () => (await popoverLayout())?.topError ?? Number.POSITIVE_INFINITY).toBeLessThanOrEqual(1);
    expect(await popoverLayout()).toEqual(expect.objectContaining({
      expanded: "true",
      withinViewport: true
    }));
  }
});

test("modal tags follow the shared category-first order and use terminal punctuation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "shared tag order only needs one browser");
  const cases = [
    {
      id: "BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF",
      labels: ["하이브리드 시스템", "공격형", "우회전"]
    },
    {
      id: "PART-METAL-FIGHT-CLEARWHEEL-PEGASIS",
      labels: ["클리어휠", "공격형", "우회전"]
    },
    {
      id: "PART-BURST-SUPERKINGCHASSIS-1S",
      labels: ["슈퍼킹레이어", "섀시", "스태미나형"],
      plainLabels: ["슈퍼킹레이어"]
    },
    {
      id: "PART-BURST-FRAME-VORTEX",
      labels: ["코어디스크 대응", "프레임"],
      plainLabels: ["코어디스크 대응"]
    },
    {
      id: "PART-X-BLADE-DRAN-SWORD",
      labels: ["베이직라인", "블레이드", "어택형", "우회전"]
    },
    {
      id: "PART-X-BLADE-LOCK-CHIP-DRAN",
      labels: ["커스텀라인", "락칩", "우회전"]
    }
  ];

  for (const { id, labels, plainLabels = [] } of cases) {
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal")).toBeVisible();
    await expect(page.locator("#detailModal .modal-tags > *")).toHaveText(labels);
    const descriptions = await page.locator("#detailModal .modal-tag-info").evaluateAll(tags => tags.map(tag => tag.dataset.tagDescription));
    expect(descriptions.length).toBeGreaterThan(0);
    expect(descriptions.every(description => /[.!?]$/u.test(description))).toBe(true);
    for (const label of plainLabels) {
      await expect(page.locator("#detailModal .modal-tags > span").filter({ hasText: label })).toHaveCount(1);
      await expect(page.locator(`#detailModal .modal-tag-info[data-tag-label="${label}"]`)).toHaveCount(0);
    }
  }

  await page.goto("/#BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  await expect(page.locator('.modal-tag-info[data-tag-label="공격형"]')).toHaveAttribute("data-tag-description", "높은 공격력으로 상대를 튕겨낸다!");
});

test("part classification tags expose their shared descriptions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "shared copy only needs one browser");
  const cases = [
    {
      id: "PART-BURST-EVOLUTIONGEAR-F",
      label: "진화기어",
      description: "벨리알의 성능을 올려준다."
    },
    {
      id: "PART-X-BLADE-LOCK-CHIP-DRAN",
      label: "락칩",
      description: "CX 블레이드의 각 파츠를 결합해 고정한다."
    },
    {
      id: "PART-X-BLADE-MAIN-BLADE-BRAVE",
      label: "메인블레이드",
      description: "상대와 직접 부딪치며, 형태와 무게에 따라 블레이드의 기본 성능을 결정한다."
    },
    {
      id: "PART-X-BLADE-ASSIST-BLADE-SLASH",
      label: "어시스트블레이드",
      description: "메인블레이드와 조합하여 블레이드의 성능을 보조하고 조정한다."
    },
    {
      id: "PART-X-BLADE-OVER-BLADE-BRAKE",
      label: "오버블레이드",
      description: "메탈블레이드와 어시스트블레이드 사이에 추가되어 CX 블레이드를 4파트 구조로 확장한다."
    },
    {
      id: "PART-X-BLADE-MAIN-BLADE-BLITZ",
      label: "메탈블레이드",
      description: "금속 소재의 중량과 형태로 블레이드의 기본 성능을 결정한다."
    }
  ];

  for (const { id, label, description } of cases) {
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal")).toBeVisible();
    const tag = page.locator(`.modal-tag-info[data-tag-label="${label}"]`);
    await expect(tag).toHaveCount(1);
    await expect(tag).toHaveAttribute("data-tag-description", description);

    await tag.click();
    const popover = page.locator(".modal-tag-popover");
    await expect(popover.locator("strong")).toHaveText(label);
    await expect(popover.locator("p")).toHaveText(description);
    await tag.click();
    await expect(popover).toHaveCount(0);
  }
});

test("open detail modal follows viewport resize in both directions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "viewport resize coverage only needs one browser");
  const errors = consoleErrors(page);
  const snapshotModalLayout = () => page.evaluate(() => {
    const rect = element => {
      const bounds = element.getBoundingClientRect();
      return {
        left: Math.round(bounds.left),
        top: Math.round(bounds.top),
        width: Math.round(bounds.width),
        height: Math.round(bounds.height),
        right: Math.round(bounds.right),
        bottom: Math.round(bounds.bottom)
      };
    };
    const dialog = document.querySelector("#detailModal");
    const inner = dialog.querySelector(".modal-inner");
    const bodyStyle = getComputedStyle(document.body);
    const viewport = window.visualViewport;
    return {
      viewportWidth: Math.round(viewport?.width || window.innerWidth),
      viewportHeight: Math.round(viewport?.height || window.innerHeight),
      storedViewportWidth: Math.round(parseFloat(bodyStyle.getPropertyValue("--modal-viewport-width"))),
      storedViewportHeight: Math.round(parseFloat(bodyStyle.getPropertyValue("--modal-viewport-height"))),
      storedLockWidth: Math.round(parseFloat(bodyStyle.getPropertyValue("--modal-lock-width"))),
      dialog: rect(dialog),
      overlay: rect(dialog.querySelector(".modal-overlay")),
      stage: rect(dialog.querySelector(".modal-stage")),
      inner: rect(inner),
      columnCount: getComputedStyle(inner).gridTemplateColumns.split(" ").filter(Boolean).length,
      title: dialog.querySelector(".modal-name")?.textContent.trim() || ""
    };
  });
  const expectViewportFit = layout => {
    expect(layout.storedViewportWidth).toBe(layout.viewportWidth);
    expect(layout.storedViewportHeight).toBe(layout.viewportHeight);
    expect(layout.storedLockWidth).toBe(layout.viewportWidth);
    for (const [name, layer] of [["dialog", layout.dialog], ["overlay", layout.overlay], ["stage", layout.stage]]) {
      expect(Math.abs(layer.width - layout.viewportWidth), `${name}: ${JSON.stringify(layout)}`).toBeLessThanOrEqual(1);
      expect(Math.abs(layer.height - layout.viewportHeight), `${name}: ${JSON.stringify(layout)}`).toBeLessThanOrEqual(1);
    }
    expect(layout.inner.left).toBeGreaterThanOrEqual(0);
    expect(layout.inner.top).toBeGreaterThanOrEqual(0);
    expect(layout.inner.right).toBeLessThanOrEqual(layout.viewportWidth);
    expect(layout.inner.bottom).toBeLessThanOrEqual(layout.viewportHeight);
    expect(Math.abs((layout.inner.left + layout.inner.right) / 2 - layout.viewportWidth / 2)).toBeLessThanOrEqual(1);
  };

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/#BEY-X-CX-09-SOL-ECLIPSE-D-5-70TK");
  await expect(page.locator("#detailModal")).toBeVisible();
  await expect.poll(async () => (await snapshotModalLayout()).stage.width).toBe(1440);
  const initialUrl = page.url();
  const initialTitle = await page.locator(".modal-name").textContent();

  const wideLayout = await snapshotModalLayout();
  expectViewportFit(wideLayout);
  expect(wideLayout.columnCount).toBe(2);

  await page.setViewportSize({ width: 900, height: 800 });
  await expect.poll(async () => (await snapshotModalLayout()).storedViewportWidth).toBe(900);
  const compactLayout = await snapshotModalLayout();
  expectViewportFit(compactLayout);
  expect(compactLayout.columnCount).toBe(1);
  await expect(page.locator("#detailModal")).toBeVisible();
  expect(page.url()).toBe(initialUrl);
  expect(compactLayout.title).toBe(initialTitle?.trim());

  await page.setViewportSize({ width: 1440, height: 900 });
  await expect.poll(async () => (await snapshotModalLayout()).storedViewportWidth).toBe(1440);
  const restoredLayout = await snapshotModalLayout();
  expectViewportFit(restoredLayout);
  expect(restoredLayout.columnCount).toBe(2);
  expect(page.url()).toBe(initialUrl);
  expect(restoredLayout.title).toBe(initialTitle?.trim());

  await page.locator("#modalClose").click();
  await expect(page.locator("#detailModal")).not.toBeVisible();
  const lockState = await page.evaluate(() => ({
    htmlOpen: document.documentElement.classList.contains("is-modal-open"),
    bodyOpen: document.body.classList.contains("is-modal-open"),
    viewportWidth: document.body.style.getPropertyValue("--modal-viewport-width"),
    viewportHeight: document.body.style.getPropertyValue("--modal-viewport-height"),
    lockWidth: document.body.style.getPropertyValue("--modal-lock-width")
  }));
  expect(lockState).toEqual({
    htmlOpen: false,
    bodyOpen: false,
    viewportWidth: "",
    viewportHeight: "",
    lockWidth: ""
  });
  expect(errors).toEqual([]);
});

test("mobile drawer opens and exposes category navigation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only behavior");
  const errors = consoleErrors(page);
  await page.goto("/");
  await page.locator("#menuButton").click();
  await expect(page.locator("#mobileDrawer")).toHaveAttribute("aria-hidden", "false");
  await expect(page.locator("[data-category-catalog-open]").last()).toBeVisible();
  await expect(page.locator("#mobileDrawer [data-sidebar-home]")).toHaveCSS("color", "rgb(16, 24, 39)");
  const currentMenuColors = await page.locator("#mobileDrawer [data-sidebar-home]").evaluate(element => ({
    text: getComputedStyle(element).color,
    marker: getComputedStyle(element, "::before").backgroundColor,
    icon: getComputedStyle(element.querySelector(".sidebar-button__icon")).color
  }));
  expect(currentMenuColors.marker).toBe(currentMenuColors.icon);
  expect(currentMenuColors.marker).not.toBe(currentMenuColors.text);
  expect(errors).toEqual([]);
});

test("responsive routes preserve hidden states and viewport bounds", async ({ page }) => {
  const errors = consoleErrors(page);
  for (const hash of ["#toy-catalog?scope=bey&series=x", "#toy-release", "#PRODUCT-X-BX-01"]) {
    await page.goto(`/${hash}`);
    await expect(page.locator("html")).not.toHaveClass(/route-booting/);

    const layout = await page.evaluate(() => ({
      hiddenLeaks: [...document.querySelectorAll("[hidden]")]
        .filter(element => getComputedStyle(element).display !== "none")
        .map(element => element.id || element.className || element.tagName),
      inactivePanelLeaks: [...document.querySelectorAll(".app-panel:not(.active)")]
        .filter(element => getComputedStyle(element).display !== "none")
        .map(element => element.dataset.appPanel || element.id),
      viewportWidth: document.documentElement.clientWidth,
      documentWidth: document.documentElement.scrollWidth
    }));

    expect(layout.hiddenLeaks).toEqual([]);
    expect(layout.inactivePanelLeaks).toEqual([]);
    expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
  }
  expect(errors).toEqual([]);
});

test("table date labels switch once at the responsive breakpoint", async ({ page }, testInfo) => {
  const mobile = testInfo.project.name === "mobile";
  for (const [hash, fullSelector, compactSelector, rowSelector] of [
    ["#toy-release", ".release-date-full", ".release-date-compact", ".release-product-row"],
    ["#anime-episode", ".anime-air-date-full", ".anime-air-date-compact", ".anime-episode-row"]
  ]) {
    await page.goto(`/${hash}`);
    await expect(page.locator(rowSelector).first()).toBeVisible();
    await expect(page.locator(fullSelector).first()).toHaveCSS("display", mobile ? "none" : "inline");
    await expect(page.locator(compactSelector).first()).toHaveCSS("display", mobile ? "inline" : "none");
  }
});

test("reduced motion disables route and control transitions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "motion coverage only needs one browser");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();

  const catalogMotion = await page.evaluate(() => ({
    panelAnimation: getComputedStyle(document.querySelector(".app-panel.active")).animationName,
    cardTransition: getComputedStyle(document.querySelector(".catalog-card")).transitionDuration,
    dropdownTransition: getComputedStyle(document.querySelector("#catalogSeriesFilter > summary"), "::after").transitionDuration,
    toTopTransition: getComputedStyle(document.querySelector("#toTop")).transitionDuration
  }));
  expect(catalogMotion.panelAnimation).toBe("none");
  expect(catalogMotion.cardTransition).toBe("0.001s");
  expect(catalogMotion.dropdownTransition).toBe("0.001s");
  expect(catalogMotion.toTopTransition).toBe("0.001s");

  await page.goto("/#PRODUCT-X-BX-01");
  await expect(page.locator("#detailModal")).toBeVisible();
  const modalAnimation = await page.locator(".modal-stage").evaluate(
    element => getComputedStyle(element).animationName
  );
  expect(modalAnimation).toBe("none");
});

test("failed route stylesheet exposes a retry that recovers the page", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "stylesheet recovery only needs one browser");
  let shouldFail = true;
  await page.route("**/styles/catalog.css*", async route => {
    if (shouldFail) {
      shouldFail = false;
      await route.abort("failed");
      return;
    }
    await route.continue();
  });

  await page.goto("/#toy-catalog?scope=bey&series=x");
  const status = page.locator("#dataLoadStatus");
  await expect(status).toBeVisible();
  await expect(status.locator("[data-load-message]")).toHaveText("화면 스타일을 불러오지 못했습니다.");
  await status.locator("[data-load-retry]").click();

  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await expect(status).toBeHidden();
});
