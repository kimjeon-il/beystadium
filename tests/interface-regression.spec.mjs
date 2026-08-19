import { expect, test } from "@playwright/test";
import { consoleErrors, expectActionRowFocusIndicator, expectFocusIndicator, expectTableListTitleSnapshot, tableListTitleSnapshot } from "./helpers/ui-assertions.mjs";

test("anime character profile cards keep optional roles and overflow beys readable", async ({ page }, testInfo) => {
  await page.goto("/#anime-character?season=beyblade-x");
  const grid = page.locator("#animeCharacterGrid");
  const groupedCard = page.locator('[data-anime-character-card="나다운"]');
  const rolelessCard = page.locator('[data-anime-character-card="태 사장"]');
  await expect(groupedCard).toBeVisible();
  await expect(rolelessCard).toBeVisible();
  await expect(groupedCard.locator(".anime-character-role")).toHaveText("팀 페르소나");
  await expect(rolelessCard.locator(".anime-character-role")).toHaveCount(0);

  const cardLayout = await grid.evaluate(element => {
    const cards = [...element.querySelectorAll(".anime-character-card")];
    const heights = cards.map(card => card.getBoundingClientRect().height);
    return {
      columnCount: getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length,
      heightSpread: Math.max(...heights) - Math.min(...heights),
      overflowX: element.scrollWidth - element.clientWidth
    };
  });
  expect(cardLayout.heightSpread).toBeLessThanOrEqual(1);
  expect(cardLayout.overflowX).toBeLessThanOrEqual(1);
  if (testInfo.project.name === "desktop") expect(cardLayout.columnCount).toBeGreaterThanOrEqual(3);
  else expect(cardLayout.columnCount).toBe(1);

  const beyList = groupedCard.locator("[data-anime-character-bey-list]");
  const moreButton = groupedCard.locator("[data-anime-character-bey-more]");
  await expect(moreButton).toBeVisible();
  const beyLayout = await beyList.evaluate(element => {
    const chips = [...element.querySelectorAll("[data-anime-character-bey-chip]")];
    const visibleChips = chips.filter(chip => !chip.hidden);
    const rowTops = [...new Set(visibleChips.map(chip => Math.round(chip.offsetTop)))];
    const more = element.querySelector("[data-anime-character-bey-more]");
    const beys = JSON.parse(element.dataset.animeCharacterBeys || "[]");
    return {
      total: beys.length,
      visible: visibleChips.length,
      hidden: chips.filter(chip => chip.hidden).length,
      hiddenCount: Number(more?.dataset.hiddenCount || 0),
      rows: rowTops.length
    };
  });
  expect(beyLayout.total).toBe(8);
  expect(beyLayout.rows).toBeLessThanOrEqual(2);
  expect(beyLayout.hidden).toBeGreaterThan(0);
  expect(beyLayout.hiddenCount).toBe(beyLayout.hidden);
  expect(beyLayout.visible + beyLayout.hidden).toBe(beyLayout.total);

  await moreButton.click();
  const popover = page.locator("#animeCharacterBeyPopover");
  await expect(popover).toBeVisible();
  await expect(popover.locator("strong")).toHaveText("나다운의 사용 베이");
  await expect(popover.locator(".anime-character-bey-popover__chip")).toHaveCount(8);
  await expect(moreButton).toHaveAttribute("aria-expanded", "true");
  await expect(moreButton).toHaveAttribute("aria-controls", "animeCharacterBeyPopover");
  await expect(moreButton).toHaveAttribute("aria-describedby", "animeCharacterBeyPopover");

  const originalViewport = page.viewportSize();
  await page.setViewportSize({
    width: Math.min(originalViewport?.width || 420, 420),
    height: Math.min(originalViewport?.height || 720, 720)
  });
  await expect.poll(() => popover.evaluate(element => {
    const rect = element.getBoundingClientRect();
    const viewport = window.visualViewport;
    const left = viewport?.offsetLeft || 0;
    const top = viewport?.offsetTop || 0;
    const width = viewport?.width || window.innerWidth;
    const height = viewport?.height || window.innerHeight;
    return rect.left >= left + 13
      && rect.right <= left + width - 13
      && rect.top >= top + 13
      && rect.bottom <= top + height - 13;
  })).toBe(true);

  await moreButton.press("Escape");
  await expect(popover).toHaveCount(0);
  await expect(moreButton).toHaveAttribute("aria-expanded", "false");
  await expect(moreButton).not.toHaveAttribute("aria-controls");
  await expect(moreButton).not.toHaveAttribute("aria-describedby");

  await moreButton.click();
  await expect(page.locator("#animeCharacterBeyPopover")).toBeVisible();
  await page.locator('[data-anime-character-season="all"]').evaluate(element => element.click());
  await expect(page.locator("#animeCharacterBeyPopover")).toHaveCount(0);

  for (const colorScheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme, reducedMotion: "reduce" });
    const colors = await rolelessCard.evaluate(element => {
      const cardStyle = getComputedStyle(element);
      const chipStyle = getComputedStyle(element.querySelector(".anime-character-bey-chip"));
      return {
        cardBackground: cardStyle.backgroundColor,
        cardText: cardStyle.color,
        chipBackground: chipStyle.backgroundColor,
        chipText: chipStyle.color
      };
    });
    expect(colors.cardBackground).not.toBe("rgba(0, 0, 0, 0)");
    expect(colors.cardText).not.toBe(colors.cardBackground);
    expect(colors.chipText).not.toBe(colors.chipBackground);
  }
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
  expectTableListTitleSnapshot(episodeTitleAfterRelease, directEpisodeTitle);

  await crossPage.goto("/#toy-release");
  await expect(crossPage.locator(".release-product-link").first()).toBeVisible();
  const releaseTitleAfterAnime = await tableListTitleSnapshot(crossPage, ".release-product-link");
  expectTableListTitleSnapshot(releaseTitleAfterAnime, directReleaseTitle);

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
    await page.locator(".mobile-bottom-nav [data-mobile-search-open]").click();
    await expect(page.locator('[data-app-panel="all"].active')).toBeVisible();
    await expect(page.locator("#searchResultsSearchInput")).toBeFocused();
    await page.locator("#searchResultsSearchInput").fill("페가시스");
    await page.locator("#searchResultsSearchInput").press("Enter");
    await expect(page.locator("#searchResultsSearchInput")).toHaveValue("페가시스");
    await expect(page.locator(".mobile-bottom-nav [data-mobile-search-open]")).toHaveClass(/active/);
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
  const expectAligned = (actual, baseline, hasQuery = false) => {
    const stacked = testInfo.project.name === "mobile" && hasQuery;
    const alignmentTolerance = stacked ? 8 : 1;
    expect(Math.abs(actual.actionsRight - baseline.actionsRight)).toBeLessThanOrEqual(alignmentTolerance);
    expect(Math.abs(actual.dropdownRight - baseline.dropdownRight)).toBeLessThanOrEqual(alignmentTolerance);
    expect(actual.actionGridColumn).toBe(stacked ? "1" : "2");
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
  expectAligned(await layout(), emptyLayout, true);

  await queryChips.nth(1).click();
  await expect(searchInput).toHaveValue("스톰 페가시스");
  await expect(queryChips).toHaveCount(1);
  await expect(queryChips).toContainText("스톰 페가시스");
  await expect.poll(async () => (await routeState()).query).toBe("스톰 페가시스");
  expectAligned(await layout(), emptyLayout, true);

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
  expectAligned(await layout(), emptyLayout, true);

  if (testInfo.project.name === "desktop") {
    const compoundQuery = "드랜 버스터 메인 블레이드";
    await searchInput.fill(compoundQuery);
    await expect(queryChips).toHaveCount(2);
    await expect(queryChips.nth(0)).toContainText("드랜 버스터");
    await expect(queryChips.nth(1)).toContainText("메인블레이드");
    await expect.poll(async () => (await routeState()).query).toBe(compoundQuery);
    expectAligned(await layout(), emptyLayout, true);
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
    await expect(page.locator(
      testInfo.project.name === "mobile"
        ? ".catalog-pagination-nav .pagination-status"
        : ".catalog-pagination-nav .ui-button.active"
    )).toBeVisible();
    await expect(page.locator('[data-catalog-filter-chips="catalog"] .active-query-chip')).toBeVisible();
    if (testInfo.project.name === "desktop") await page.mouse.move(1, 1);
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

test("secondary control text and modal colors use accessible semantic tokens", async ({ page }, testInfo) => {
  const controlColorState = locator => locator.evaluate(element => {
    const parseRgb = value => (value.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
    const luminance = value => {
      const channels = parseRgb(value).map(channel => channel / 255)
        .map(channel => channel <= .03928 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4);
      return .2126 * channels[0] + .7152 * channels[1] + .0722 * channels[2];
    };
    const contrast = (foreground, background) => {
      const foregroundLuminance = luminance(foreground);
      const backgroundLuminance = luminance(background);
      return (Math.max(foregroundLuminance, backgroundLuminance) + .05)
        / (Math.min(foregroundLuminance, backgroundLuminance) + .05);
    };
    const probe = document.createElement("i");
    probe.style.cssText = "position:fixed;background:var(--ui-control);color:var(--ui-control-text-muted)";
    const hoverProbe = document.createElement("i");
    hoverProbe.style.cssText = "position:fixed;background:var(--ui-control-hover);color:var(--ui-control-text-active)";
    document.body.append(probe, hoverProbe);
    const style = getComputedStyle(element);
    const state = {
      background: style.backgroundColor,
      color: style.color,
      contrast: contrast(style.color, style.backgroundColor),
      tokenBackground: getComputedStyle(probe).backgroundColor,
      tokenColor: getComputedStyle(probe).color,
      hoverBackground: getComputedStyle(hoverProbe).backgroundColor,
      hoverColor: getComputedStyle(hoverProbe).color
    };
    probe.remove();
    hoverProbe.remove();
    return state;
  });

  for (const colorScheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme, reducedMotion: "reduce" });
    await page.goto("/#toy-catalog?scope=all&series=all&sort=latest&page=1");
    const pageButton = page.locator(testInfo.project.name === "mobile"
      ? ".catalog-pagination-nav .catalog-page-step:not([disabled])"
      : ".catalog-pagination-nav .catalog-page-button:not(.active)").first();
    await expect(pageButton).toBeVisible();
    const pageButtonColors = await controlColorState(pageButton);
    expect(pageButtonColors.background).toBe(pageButtonColors.tokenBackground);
    expect(pageButtonColors.color).toBe(pageButtonColors.tokenColor);
    expect(pageButtonColors.contrast).toBeGreaterThanOrEqual(4.5);

    if (testInfo.project.name === "desktop") {
      await pageButton.hover();
      await expect(pageButton).toHaveCSS("background-color", pageButtonColors.hoverBackground);
      await expect(pageButton).toHaveCSS("color", pageButtonColors.hoverColor);
    }

    await page.goto(`/#search?q=${encodeURIComponent("드래곤")}&scope=bey`);
    const searchSummary = page.locator(".search-results-summary");
    await expect(searchSummary).toBeVisible();
    const searchSummaryColors = await controlColorState(searchSummary);
    expect(searchSummaryColors.background).toBe(searchSummaryColors.tokenBackground);
    expect(searchSummaryColors.color).toBe(searchSummaryColors.tokenColor);
    expect(searchSummaryColors.contrast).toBeGreaterThanOrEqual(4.5);

    await page.goto("/#PART-METAL-FIGHT-FACE-PEGASIS");
    await expect(page.locator("#detailModal")).toBeVisible();
    await expect(page.locator("#detailModal .stat-fill").first()).toBeVisible();
    const modalColors = await page.evaluate(() => {
      const scrimProbe = document.createElement("i");
      scrimProbe.style.cssText = "position:fixed;background:var(--ui-scrim)";
      const surfaceProbe = document.createElement("i");
      surfaceProbe.style.cssText = "position:fixed;background:var(--ui-surface-raised)";
      const accentProbe = document.createElement("i");
      accentProbe.style.cssText = "position:fixed;background:var(--ui-accent)";
      document.body.append(scrimProbe, surfaceProbe, accentProbe);
      const state = {
        accent: getComputedStyle(accentProbe).backgroundColor,
        scrim: getComputedStyle(scrimProbe).backgroundColor,
        surface: getComputedStyle(surfaceProbe).backgroundColor,
        overlay: getComputedStyle(document.querySelector(".modal-overlay")).backgroundColor,
        statFill: getComputedStyle(document.querySelector("#detailModal .stat-fill")).backgroundColor
      };
      scrimProbe.remove();
      surfaceProbe.remove();
      accentProbe.remove();
      return state;
    });
    expect(modalColors.overlay).toBe(testInfo.project.name === "mobile" ? modalColors.surface : modalColors.scrim);
    expect(modalColors.statFill).toBe(modalColors.accent);
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

test("shared interface controls keep tokenized sizes and timings", async ({ page }, testInfo) => {
  const mobile = testInfo.project.name === "mobile";
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  if (mobile) {
    await page.locator("#mobileCatalogFilterOpen").click();
    await expect(page.locator("#mobileCatalogFilters .mobile-filter-options button").first()).toBeVisible();
  } else {
    await page.locator("#catalogSeriesFilter > summary").click();
    await expect(page.locator("#catalogSeriesFilter .ui-dropdown-item").first()).toBeVisible();
  }

  const catalogControls = await page.evaluate(isMobile => {
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
      dropdownItem: size(isMobile
        ? "#mobileCatalogFilters .mobile-filter-options button"
        : "#catalogSeriesFilter .ui-dropdown-item"),
      toTop: size("#toTop"),
      drawerClose: size(".mobile-drawer-close"),
      dropdownMotion: transitionDurations("#catalogSeriesFilter > summary", "::after"),
      menuMotion: transitionDurations("#menuButton"),
      menuLineMotion: transitionDurations("#menuButton span"),
      toTopMotion: transitionDurations("#toTop")
    };
  }, mobile);

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
  expect(catalogControls.drawerClose).toEqual(mobile ? [0, 0] : [44, 44]);
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
  expect(modalControls.scrollMarginTop).toBe(mobile ? 63 : 70);
});

test("keyboard focus indicators stay visible across interface surfaces", async ({ page }, testInfo) => {
  test.setTimeout(90_000);
  const mobile = testInfo.project.name === "mobile";

  for (const colorScheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme });
    await page.goto("/#toy-catalog?scope=bey&series=x");
    await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();

    await expectFocusIndicator(page.locator(mobile ? ".mobile-bottom-nav [data-category-catalog-open]" : ".topbar > .brand"));
    await expectFocusIndicator(page.locator("#catalogGrid .catalog-card-action").first());
    await expectFocusIndicator(page.locator("#toTop"));

    if (mobile) {
      await page.locator("#mobileCatalogFilterOpen").click();
      await expect(page.locator("#mobileCatalogFilters")).toBeVisible();
      await expectFocusIndicator(page.locator(".mobile-filter-sheet__close"));
      await page.keyboard.press("Escape");
      await expect(page.locator("#mobileCatalogFilters")).toBeHidden();
    } else {
      const seriesFilter = page.locator("#catalogSeriesFilter");
      await seriesFilter.locator("summary").click();
      await expect(seriesFilter.locator(".ui-dropdown-item").first()).toBeVisible();
      await expectFocusIndicator(seriesFilter.locator(".ui-dropdown-item").first());
      await seriesFilter.locator("summary").click();
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

test("touch table rows suppress native text selection without changing activation", async ({ page }, testInfo) => {
  const errors = consoleErrors(page);
  const routes = [
    ["/#toy-release", ".release-product-row"],
    ["/#anime-episode", ".anime-episode-row"]
  ];

  for (const [route, rowSelector] of routes) {
    await page.goto(route);
    const row = page.locator(rowSelector).first();
    const action = row.locator(".table-list-row-action");
    await expect(row).toBeVisible();

    const interactionStyles = await row.evaluate(element => {
      const rowStyle = getComputedStyle(element);
      const actionStyle = getComputedStyle(element.querySelector(".table-list-row-action"));
      return {
        rowUserSelect: rowStyle.userSelect,
        actionUserSelect: actionStyle.userSelect,
        touchAction: rowStyle.touchAction
      };
    });

    if (testInfo.project.name === "mobile") {
      expect(interactionStyles.rowUserSelect).toBe("none");
      expect(interactionStyles.actionUserSelect).toBe("none");
      expect(interactionStyles.touchAction).not.toBe("none");
      await action.tap();
    } else {
      expect(interactionStyles.rowUserSelect).not.toBe("none");
      expect(interactionStyles.actionUserSelect).not.toBe("none");
      await action.focus();
      await action.press("Enter");
    }

    await expect(page.locator("#detailModal")).toBeVisible();
  }

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

test("mobile detail uses one internal modal scroll without nested section scrollers", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile detail scroll coverage");
  const errors = consoleErrors(page);
  await page.setViewportSize({ width: 393, height: 600 });
  await page.goto("/#PRODUCT-X-UX-10");
  await expect(page.locator("#detailModal")).toBeVisible();

  const scrollArea = page.locator("#detailModal .product-modal-info .modal-scroll-area");
  const overlayHost = page.locator("#detailModal .product-modal-info");
  const layerState = await scrollArea.evaluate(element => {
    const host = element.closest(".modal-info");
    const stage = element.closest(".modal-stage");
    const overlay = getComputedStyle(host, "::after");
    return {
      hostOverflow: getComputedStyle(host).overflow,
      overlayDisplay: overlay.display,
      scrollAreaMaxHeight: getComputedStyle(element).maxHeight,
      scrollAreaOverflowY: getComputedStyle(element).overflowY,
      scrollAreaClientHeight: element.clientHeight,
      scrollAreaScrollHeight: element.scrollHeight,
      stageClientHeight: stage.clientHeight,
      stageOverflowY: getComputedStyle(stage).overflowY,
      stageScrollHeight: stage.scrollHeight
    };
  });
  await expect(scrollArea).toHaveClass(/has-scroll-content-below/);
  await expect(overlayHost).toHaveClass(/has-scroll-overlay/);
  expect(layerState.hostOverflow).toBe("hidden");
  expect(layerState.overlayDisplay).toBe("block");
  expect(layerState.scrollAreaMaxHeight).toBe("none");
  expect(layerState.scrollAreaOverflowY).toBe("auto");
  expect(layerState.scrollAreaScrollHeight).toBeGreaterThan(layerState.scrollAreaClientHeight);
  expect(layerState.stageOverflowY).toBe("visible");
  expect(layerState.stageScrollHeight).toBeLessThanOrEqual(layerState.stageClientHeight + 1);
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
