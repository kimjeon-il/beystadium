import { expect, test } from "@playwright/test";

const consoleErrors = page => {
  const errors = [];
  page.on("console", message => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", error => errors.push(error.message));
  return errors;
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

test("scroll affordances appear only while internal content remains below", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "scroll position coverage only needs one browser");
  const errors = consoleErrors(page);

  await page.setViewportSize({ width: 1280, height: 260 });
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  const seriesMenu = page.locator("#catalogSeriesFilter > .catalog-dropdown-menu");
  await page.locator("#catalogSeriesFilter > summary").click();
  await expect(seriesMenu).toHaveClass(/has-scroll-content-below/);
  const activeDropdownState = await seriesMenu.evaluate(element => ({
    clientHeight: element.clientHeight,
    scrollHeight: element.scrollHeight,
    shadow: getComputedStyle(element).boxShadow
  }));
  expect(activeDropdownState.scrollHeight).toBeGreaterThan(activeDropdownState.clientHeight + 2);
  expect(activeDropdownState.shadow).toContain("inset");

  await seriesMenu.evaluate(element => { element.scrollTop = element.scrollHeight; });
  await expect(seriesMenu).not.toHaveClass(/has-scroll-content-below/);
  const bottomShadow = await seriesMenu.evaluate(element => getComputedStyle(element).boxShadow);
  expect(bottomShadow).not.toContain("inset");

  await seriesMenu.evaluate(element => { element.scrollTop = 0; });
  await expect(seriesMenu).toHaveClass(/has-scroll-content-below/);
  await page.locator("#catalogSeriesFilter > summary").click();
  await expect(seriesMenu).not.toHaveClass(/has-scroll-content-below/);

  await page.setViewportSize({ width: 1280, height: 900 });
  const searchScopeMenu = page.locator("#catalogSearchScope > .catalog-dropdown-menu");
  await page.locator("#catalogSearchScope > summary").click();
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
  await page.goto("/#DBLAYER-GREATEST-RAPHAEL");
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
  await page.goto("/#DBLAYER-GREATEST-RAPHAEL");
  await expect(page.locator("#detailModal")).toBeVisible();

  const slot = page.locator("#detailModal .part-modal-info .modal-info-slot");
  const description = slot.locator(".modal-description");
  const toggle = slot.locator(".modal-description-toggle");
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
  expect(collapsed.lineClamp).toBe("2");

  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(slot).toHaveClass(/is-expanded/);
  await expect(toggle).toHaveAttribute("aria-label", "부품 설명 접기");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  const expandedHeight = await description.evaluate(element => element.getBoundingClientRect().height);
  expect(expandedHeight).toBeGreaterThan(collapsed.height + 1);
  await expect.poll(() => toggle.evaluate(element => getComputedStyle(element, "::before").transform))
    .not.toBe(collapsedChevron);

  await page.keyboard.press("Enter");
  await expect(slot).not.toHaveClass(/is-expanded/);
  await expect(toggle).toHaveAttribute("aria-label", "부품 설명 펼치기");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  await page.goto("/#X-BLADE-DRAN-SWORD");
  await expect(page.locator("#detailModal")).toBeVisible();
  const shortToggle = page.locator("#detailModal .part-modal-info .modal-description-toggle");
  await expect(shortToggle).toBeHidden();
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

  await page.goto("/#BEY-X-BX-03");
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
  await page.goto("/#BEY-X-CX-09");
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
    cardTransition: getComputedStyle(document.querySelector(".catalog-card")).transitionDuration
  }));
  expect(catalogMotion.panelAnimation).toBe("none");
  expect(catalogMotion.cardTransition).toBe("0.001s");

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
