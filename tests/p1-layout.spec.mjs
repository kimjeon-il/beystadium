import { expect, test } from "@playwright/test";

test("P1 home shows task shortcuts and series links that open the requested catalog", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".overview-quick-links > button")).toHaveCount(4);
  await expect(page.locator(".overview-quick-links > button").first()).toBeVisible();
  const links = page.locator(".overview-series-link");
  await expect(links).toHaveCount(4);
  await links.last().click();
  await expect(page).toHaveURL(/#toy-catalog\?scope=bey&series=x/);
  await expect(page.locator("#catalogSeriesFilter")).toHaveAttribute("data-scope", "x");
});

test("P1 desktop catalog sidebar updates the existing route and query without changing the engine", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop sidebar is shown at desktop viewport widths.");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/#toy-catalog?scope=bey&series=x");
  const rail = page.locator(".catalog-filter-rail");
  const grid = page.locator("#catalogGrid");
  await expect(rail).toBeVisible();
  await expect(rail.locator("[data-rail-option]")).not.toHaveCount(0);
  await expect(rail.locator('[data-rail-option="series"][data-rail-value="x"]')).toHaveAttribute("aria-pressed", "true");
  await expect(grid.locator(".catalog-card").first()).toBeVisible();
  const geometry = await page.evaluate(() => {
    const a = document.querySelector(".catalog-filter-rail").getBoundingClientRect();
    const b = document.querySelector("#catalogGrid").getBoundingClientRect();
    return { leftRail: a.left, rightRail: a.right, gridLeft: b.left };
  });
  expect(geometry.rightRail).toBeLessThan(geometry.gridLeft);
  await rail.locator('[data-rail-option="type"][data-rail-value="attack"]').click();
  await expect.poll(() => page.locator("#catalogSearchInput").inputValue()).toContain("어택형");
  await expect(rail.locator('[data-rail-option="type"][data-rail-value="attack"]')).toHaveAttribute("aria-pressed", "true");
  await rail.locator('[data-rail-option="type"][data-rail-value=""]').click();
  await expect(page.locator("#catalogSearchInput")).toHaveValue("");
  await rail.locator('[data-rail-option="scope"][data-rail-value="parts"]').click();
  await expect(page.locator("#catalogSearchScope")).toHaveAttribute("data-scope", "parts");
  await expect(rail.locator('[data-rail-group="type"]')).toBeHidden();
  await expect(page.locator("#catalogSearchInput")).toHaveValue("");
});

test("P1 mobile catalog keeps its two-column grid and existing filter sheet", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile catalog presentation.");
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator(".catalog-filter-rail")).toBeHidden();
  await expect(page.locator("#mobileCatalogFilterOpen")).toBeVisible();
  const columns = await page.locator("#catalogGrid").evaluate(element =>
    getComputedStyle(element).gridTemplateColumns.split(" ").length);
  expect(columns).toBe(2);
  await page.locator("#mobileCatalogFilterOpen").click();
  await expect(page.locator("#mobileCatalogFilters")).toBeVisible();
  await page.locator("[data-mobile-filter-close]").last().click();
  await expect(page.locator("#mobileCatalogFilters")).toBeHidden();
});

test("P1 media pages share links while preserving the existing content types", async ({ page }, testInfo) => {
  await page.goto("/#anime-character");
  const characters = page.locator(".anime-panel .media-section-tabs");
  await expect(characters).toBeVisible();
  await expect(page.locator("#animeCharacterGrid .anime-character-card").first()).toBeVisible();
  const columns = await page.locator("#animeCharacterGrid").evaluate(element =>
    getComputedStyle(element).gridTemplateColumns.split(" ").length);
  if (testInfo.project.name === "desktop") expect(columns).toBeGreaterThanOrEqual(3);
  else expect(columns).toBe(1);
  await characters.getByRole("link", { name: "방영목록" }).click();
  await expect(page).toHaveURL(/#anime-episode/);
  await expect(page.locator(".anime-episodes-panel .media-section-tabs")).toBeVisible();
  await expect(page.locator(".anime-episode-row").first()).toBeVisible();
  await page.locator(".anime-episodes-panel .media-section-tabs").getByRole("link", { name: "등장인물" }).click();
  await expect(page.locator(".anime-character-card").first()).toBeVisible();
});

test("P1 mobile release and episode rows use independent readable information cards", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Mobile list presentation.");
  for (const [route, selector] of [
    ["/#toy-release", ".release-product-row"],
    ["/#anime-episode", ".anime-episode-row"]
  ]) {
    await page.goto(route);
    const row = page.locator(selector).first();
    await expect(row).toBeVisible();
    const geometry = await row.evaluate(el => {
      const cs = getComputedStyle(el), rect = el.getBoundingClientRect();
      return { background: cs.backgroundColor, borderWidth: cs.borderTopWidth, width: rect.width };
    });
    expect(geometry.background).not.toBe("rgba(0, 0, 0, 0)");
    expect(geometry.borderWidth).not.toBe("0px");
    expect(geometry.width).toBeLessThanOrEqual(393);
  }
});

test("P1 content-only detail uses two columns on desktop but one scrollable column on mobile", async ({ page }, testInfo) => {
  if (testInfo.project.name === "desktop") await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/#BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  const modal = page.locator("#detailModal");
  await expect(modal).toBeVisible();
  const scroll = modal.locator(".modal-inner--content .modal-scroll-area");
  await expect(scroll).toBeVisible();
  const columns = await scroll.evaluate(el => getComputedStyle(el).gridTemplateColumns.split(" ").length);
  if (testInfo.project.name === "desktop") expect(columns).toBe(2);
  else expect(columns).toBeLessThanOrEqual(1);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
});

test("P1 catalog rail reflects hash-only query restoration with unchanged series and scope", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop filter rail state.");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/#toy-catalog?scope=bey&series=x&q=%EA%B3%B5%EA%B2%A9%ED%98%95");
  const rail = page.locator(".catalog-filter-rail");
  await expect(rail.locator('[data-rail-option="type"][data-rail-value="attack"]')).toHaveAttribute("aria-pressed", "true");
  await page.evaluate(() => { window.location.hash = "#toy-catalog?scope=bey&series=x&q=%EB%B0%A9%EC%96%B4%ED%98%95"; });
  await expect(page.locator("#catalogSearchInput")).toHaveValue("방어형");
  await expect(rail.locator('[data-rail-option="type"][data-rail-value="defense"]')).toHaveAttribute("aria-pressed", "true");
  await expect(rail.locator('[data-rail-option="type"][data-rail-value="attack"]')).toHaveAttribute("aria-pressed", "false");
});

test("P1 compact home has no preview theme control or horizontal overflow", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Narrow viewport layout.");
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/");
  await expect(page.locator(".overview-series-link")).toHaveCount(4);
  await expect(page.locator(".sport-theme-switch, [data-preview-mode]")).toHaveCount(0);
  const overflow = await page.evaluate(() =>
    document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(1);
});
