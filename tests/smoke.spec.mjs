import { expect, test } from "@playwright/test";

const consoleErrors = page => {
  const errors = [];
  page.on("console", message => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", error => errors.push(error.message));
  return errors;
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

test("query chips clear only the search query across list routes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "full query-chip route coverage only needs one browser");
  const errors = consoleErrors(page);

  await page.goto("/#search?q=드래곤&scope=bey");
  await expect(page.locator('[data-app-panel="all"].active')).toBeVisible();
  const globalChip = page.locator("#searchResultsMeta [data-clear-query]");
  await expect(globalChip).toHaveText(/검색:\s*드래곤\s*×/);
  await expect(globalChip).toHaveAttribute("aria-label", "검색어 “드래곤” 제거");
  await globalChip.click();
  await expect(page).toHaveURL(/#search\?q=&scope=bey$/);
  await expect(page.locator("#searchResultsMeta [data-clear-query]")).toHaveCount(0);
  await expect(page.locator("#searchResultsMeta .search-results-scope-label")).toHaveText("베이 범위");
  for (const selector of ["#globalSearchInput", "#mobileDrawerSearchInput", "#overviewSearchInput"]) {
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
  await page.locator('[data-catalog-filter-chips="catalog"] [data-clear-query]').click();
  await expect(page).toHaveURL(/#toy-catalog\?scope=bey&series=x&sort=no-desc&page=1$/);
  await expect(page.locator("#catalogSearchInput")).toHaveValue("");
  await expect(page.locator('[data-catalog-filter-chips="catalog"]')).toBeHidden();
  expect(await page.evaluate(() => ({
    scope: document.querySelector("#catalogSearchScope")?.dataset.scope,
    series: document.querySelector("#catalogSeriesFilter")?.dataset.scope,
    sort: document.querySelector("[data-catalog-sort].active")?.dataset.catalogSort
  }))).toEqual(catalogState);

  await page.goto("/#anime-character?season=burst&q=강산&page=1");
  await expect(page.locator('[data-app-panel="anime"].active')).toBeVisible();
  await expect(page.locator('[data-catalog-filter-chips="anime"] [data-clear-query]')).toBeVisible();
  await page.locator('[data-catalog-filter-chips="anime"] [data-clear-query]').click();
  await expect(page).toHaveURL(/#anime-character\?season=burst$/);
  await expect(page.locator("#animeSearchInput")).toHaveValue("");
  await expect(page.locator('[data-catalog-filter-chips="anime"]')).toBeHidden();
  await expect(page.locator('[data-anime-character-season="burst"].active')).toHaveCount(1);

  await page.goto("/#toy-release");
  await expect(page.locator(".release-product-row").first()).toBeVisible();
  const releaseState = await page.evaluate(() => ({
    region: document.querySelector("[data-release-region].active")?.dataset.releaseRegion,
    series: document.querySelector("[data-release-series].active")?.dataset.releaseSeries,
    sort: document.querySelector("[data-release-sort-option].active")?.dataset.releaseSortOption
  }));
  await page.locator("#releaseSearchInput").fill("베이");
  await expect(page.locator("[data-release-meta-row] [data-clear-query]")).toBeVisible();
  await page.locator("[data-release-meta-row] [data-clear-query]").click();
  await expect(page.locator("#releaseSearchInput")).toHaveValue("");
  await expect(page.locator("[data-release-meta-row] [data-clear-query]")).toHaveCount(0);
  expect(await page.evaluate(() => ({
    region: document.querySelector("[data-release-region].active")?.dataset.releaseRegion,
    series: document.querySelector("[data-release-series].active")?.dataset.releaseSeries,
    sort: document.querySelector("[data-release-sort-option].active")?.dataset.releaseSortOption
  }))).toEqual(releaseState);

  await page.goto("/#anime-episode");
  await expect(page.locator(".anime-episode-row").first()).toBeVisible();
  const episodeSeason = await page.locator("[data-anime-season].active").getAttribute("data-anime-season");
  await page.locator("#animeEpisodeSearchInput").fill("1");
  await expect(page.locator(".table-list-query-row [data-clear-query]")).toBeVisible();
  await page.locator(".table-list-query-row [data-clear-query]").click();
  await expect(page.locator("#animeEpisodeSearchInput")).toHaveValue("");
  await expect(page.locator(".table-list-query-row")).toHaveCount(0);
  await expect(page.locator(`[data-anime-season="${episodeSeason}"].active`)).toHaveCount(1);
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

test("persistent selections use Fluent blue in light and dark themes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "theme color coverage only needs one browser");
  for (const [colorScheme, expectedAccent] of [["light", "rgb(15, 108, 189)"], ["dark", "rgb(98, 171, 245)"]]) {
    await page.emulateMedia({ colorScheme });
    await page.goto("/#toy-catalog?scope=all&series=all&sort=latest&page=1");
    await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
    await expect(page.locator(".catalog-pagination-nav .ui-button.active")).toBeVisible();
    await expect(page.locator(".topbar-primary-button.active")).toHaveCSS("color", expectedAccent);
    await expect(page.locator("#catalogSeriesFilter .ui-dropdown-item.active")).toHaveCSS("color", expectedAccent);
    await expect(page.locator(".catalog-pagination-nav .ui-button.active")).toHaveCSS("color", expectedAccent);
    const colors = await page.evaluate(() => ({
      menu: getComputedStyle(document.querySelector(".topbar-primary-button.active")).color,
      dropdown: getComputedStyle(document.querySelector("#catalogSeriesFilter .ui-dropdown-item.active")).color,
      page: getComputedStyle(document.querySelector(".catalog-pagination-nav .ui-button.active")).color,
      inactive: getComputedStyle(document.querySelector("#catalogSeriesFilter .ui-dropdown-item:not(.active)")).color,
      focusToken: getComputedStyle(document.documentElement).getPropertyValue("--ui-focus-ring"),
      accentToken: getComputedStyle(document.documentElement).getPropertyValue("--ui-accent")
    }));
    expect(colors.menu).toBe(expectedAccent);
    expect(colors.dropdown).toBe(expectedAccent);
    expect(colors.page).toBe(expectedAccent);
    expect(colors.inactive).not.toBe(expectedAccent);
    expect(colors.focusToken).toContain(colors.accentToken.trim());
    expect(colors.accentToken).not.toContain("0f6cbd");

    await page.goto("/#toy-release");
    await expect(page.locator(".release-region-tabs .ui-tab-button.active")).toBeVisible();
    await expect(page.locator(".release-region-tabs .ui-tab-button.active")).toHaveCSS("color", expectedAccent);
  }
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
  await expect(page.locator(".modal-back")).toBeVisible();
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
  await expect(backButton).toBeVisible();
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
  await expect(page.locator("#mobileDrawer [data-sidebar-home]")).toHaveCSS("color", "rgb(15, 108, 189)");
  const currentMenuColors = await page.locator("#mobileDrawer [data-sidebar-home]").evaluate(element => ({
    text: getComputedStyle(element).color,
    marker: getComputedStyle(element, "::before").backgroundColor,
    icon: getComputedStyle(element.querySelector(".sidebar-button__icon")).color
  }));
  expect(currentMenuColors.marker).toBe(currentMenuColors.text);
  expect(currentMenuColors.icon).toBe(currentMenuColors.text);
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
