import { expect, test } from "@playwright/test";

// Screen-by-screen P0 audit captures the actual Chromium renders in both themes
// and both viewport classes, independently of image snapshot baselines.
const routes = [
  { key: "home", hash: "", ready: ".overview-hero" },
  { key: "search", hash: "#search?q=BX-01&scope=all", ready: "#globalGrid .search-result-item" },
  { key: "catalog", hash: "#toy-catalog?scope=bey&series=x", ready: "#catalogGrid .catalog-card" },
  { key: "release", hash: "#toy-release", ready: ".release-product-row" },
  { key: "characters", hash: "#anime-character", ready: ".anime-character-card" },
  { key: "episodes", hash: "#anime-episode", ready: ".anime-episode-row" },
  { key: "detail", hash: "#PRODUCT-X-BX-01", ready: "#detailModal[open] .modal-inner" }
];

for (const { key, hash, ready } of routes) {
  test(`P0 layout evidence: ${key}`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "Capture desktop and mobile viewports in one browser project.");
    for (const [view, width, height] of [["desktop", 1440, 900], ["mobile", 390, 844]]) {
      await page.setViewportSize({ width, height });
      for (const scheme of ["light", "dark"]) {
        await page.goto(`/?theme=${scheme}${hash}`);
        await expect(page.locator(ready).first()).toBeVisible();
        await expect.poll(() => page.evaluate(() => ({
          viewport: document.documentElement.clientWidth,
          page: document.documentElement.scrollWidth
        }))).toMatchObject({ viewport: width });
        const horizontalOverflow = await page.evaluate(() =>
          document.documentElement.scrollWidth - document.documentElement.clientWidth);
        expect(horizontalOverflow, `${key} ${view} ${scheme} horizontal overflow`).toBeLessThanOrEqual(1);
        if (view === "mobile" && key !== "detail") {
          await expect(page.locator(".mobile-bottom-nav")).toBeVisible();
        }
        await page.screenshot({
          path: testInfo.outputPath(`p0-${key}-${view}-${scheme}.png`),
          fullPage: key !== "detail",
          animations: "disabled"
        });
      }
    }
  });
}
