import { expect, test } from "@playwright/test";

const consoleErrors = page => {
  const errors = [];
  page.on("console", message => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", error => errors.push(error.message));
  return errors;
};

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

test("mobile drawer opens and exposes category navigation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only behavior");
  const errors = consoleErrors(page);
  await page.goto("/");
  await page.locator("#menuButton").click();
  await expect(page.locator("#mobileDrawer")).toHaveAttribute("aria-hidden", "false");
  await expect(page.locator("[data-category-catalog-open]").last()).toBeVisible();
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
