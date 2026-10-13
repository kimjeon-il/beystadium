import { expect, test } from "@playwright/test";

// P0 presentation contract: keep the existing route parser, search engine,
// catalog data and detail-modal mechanics while changing the shared shell.
test("desktop header groups direct destinations without adding navigation depth", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop header layout");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const groups = page.locator(".topbar-primary-nav .topbar-nav-group");
  await expect(groups).toHaveCount(2);
  await expect(groups.nth(0)).toHaveAttribute("aria-label", "완구");
  await expect(groups.nth(1)).toHaveAttribute("aria-label", "미디어");
  await expect(groups.nth(0).locator("button")).toHaveCount(2);
  await expect(groups.nth(1).locator("button")).toHaveCount(3);
  await expect(page.locator(".topbar-nav-label").first()).toBeVisible();
  await page.locator(".topbar [data-category-catalog-open]").click();
  await expect(page).toHaveURL(/#toy-catalog/);
  await expect(page.locator(".topbar [data-category-catalog-open]")).toHaveAttribute("aria-current", "page");
});

test("unified-search shortcuts retain the query and synchronize the existing scope control", async ({ page }) => {
  await page.goto("/#search?q=BX-01&scope=product");
  await expect(page.locator("#searchResultsSearchInput")).toHaveValue("BX-01");
  await expect(page.locator('.search-category-button[data-search-results-scope-tab="product"]')).toHaveAttribute("aria-pressed", "true");
  await page.locator('.search-category-button[data-search-results-scope-tab="bey"]').click();
  await expect(page).toHaveURL(/#search\?q=BX-01&scope=bey/);
  await expect(page.locator("#searchResultsSearchScope")).toHaveAttribute("data-scope", "bey");
  await expect(page.locator('.search-category-button[data-search-results-scope-tab="bey"]')).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator('.search-category-button[aria-pressed="true"]')).toHaveCount(1);
  await page.reload();
  await expect(page.locator("#searchResultsSearchInput")).toHaveValue("BX-01");
  await expect(page.locator('.search-category-button[data-search-results-scope-tab="bey"]')).toHaveAttribute("aria-pressed", "true");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
});

test("mobile navigation centers search and returns to a filtered catalog URL", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile bottom navigation");
  await page.goto("/#toy-catalog?scope=bey&series=x&sort=no-desc&page=1&q=%EB%93%9C%EB%9E%98%EA%B3%A4");
  await expect(page.locator("#catalogSearchInput")).toHaveValue("드래곤");
  const buttons = page.locator(".mobile-bottom-nav > button");
  await expect(buttons).toHaveCount(5);
  await expect(buttons.nth(0)).toHaveAttribute("data-sidebar-home", "");
  await expect(buttons.nth(1)).toHaveAttribute("data-category-catalog-open", "");
  await expect(buttons.nth(2)).toHaveAttribute("data-mobile-search-open", "");
  await expect(buttons.nth(3)).toHaveAttribute("data-category-release-open", "");
  await expect(buttons.nth(4)).toHaveAttribute("data-mobile-media-open", "");
  await buttons.nth(2).click();
  await expect(page).toHaveURL(/#search/);
  await expect(page.locator("#searchResultsSearchInput")).toBeFocused();
  await page.locator("#mobileTopbarBack").click();
  await expect(page).toHaveURL(/#toy-catalog\?scope=bey&series=x/);
  await expect(page.locator("#catalogSearchInput")).toHaveValue("드래곤");
  await expect(page.locator("#catalogSearchScope")).toHaveAttribute("data-scope", "bey");
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
});

test("closing a detail returns to its existing catalog route and filter state", async ({ page }) => {
  await page.goto("/#toy-catalog?scope=bey&series=x&sort=no-desc&page=1&q=%EB%93%9C%EB%9E%98%EA%B3%A4");
  const action = page.locator("#catalogGrid .catalog-card-action").first();
  await expect(action).toBeVisible();
  await action.click();
  await expect(page.locator("#detailModal")).toBeVisible();
  await page.locator("#modalClose").click();
  await expect(page.locator("#detailModal")).toBeHidden();
  await expect(page).toHaveURL(/#toy-catalog\?scope=bey&series=x/);
  await expect(page.locator("#catalogSearchInput")).toHaveValue("드래곤");
  await expect(page.locator("#catalogSeriesFilter")).toHaveAttribute("data-scope", "x");
});
