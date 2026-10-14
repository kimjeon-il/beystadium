import { expect, test } from "@playwright/test";

// P1 breakpoint evidence. Screenshots show the viewport-sized composition;
// behavioral checks below remain required regardless of the review images.
const destinations = [
  { name: "home", route: "", ready: ".overview-series-link" },
  { name: "catalog", route: "#toy-catalog?scope=bey&series=x", ready: "#catalogGrid .catalog-card" },
  { name: "release", route: "#toy-release", ready: ".release-product-row" },
  { name: "characters", route: "#anime-character", ready: ".anime-character-card" },
  { name: "episodes", route: "#anime-episode", ready: ".anime-episode-row" },
  { name: "search", route: "#search?q=BX-01&scope=all", ready: "#globalGrid .search-result-item" },
  { name: "detail", route: "#BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF", ready: "#detailModal[open] .modal-inner" }
];

for (const { name, route, ready } of destinations) {
  test(`P1 breakpoint layout: ${name}`, async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== "desktop", "Resize Chromium within one project; mobile-touch flows have separate tests.");
    test.setTimeout(180_000);
    for (const width of [320, 390, 768, 1024, 1440]) {
      const height = width === 320 ? 720 : 900;
      await page.setViewportSize({ width, height });
      for (const theme of ["light", "dark"]) {
        await page.goto(`/?theme=${theme}${route}`);
        await expect(page.locator(ready).first()).toBeVisible();
        const geometry = await page.evaluate(() => ({
          documentWidth: document.documentElement.scrollWidth,
          viewportWidth: document.documentElement.clientWidth,
          hasFixedBottomNav: getComputedStyle(document.querySelector(".mobile-bottom-nav")).display !== "none"
        }));
        expect(geometry.documentWidth - geometry.viewportWidth, `${name} ${width}px ${theme}: horizontal overflow`).toBeLessThanOrEqual(1);
        if (name !== "detail") expect(geometry.hasFixedBottomNav).toBe(width <= 639);
        if (name === "catalog") {
          const railVisible = await page.locator(".catalog-filter-rail").isVisible();
          expect(railVisible).toBe(width >= 1024);
        }
        await page.screenshot({
          path: testInfo.outputPath(`p1-${name}-${width}-${theme}.png`),
          animations: "disabled",
          fullPage: false
        });
      }
    }
  });
}
