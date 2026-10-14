import { expect, test } from "@playwright/test";
import { expectFocusIndicator } from "./helpers/ui-assertions.mjs";

const widths = [320, 390, 768, 1024, 1440];
const themes = ["light", "dark"];
const detailId = "BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF";
const catalogImageId = "BEY-X-BX-01-DRAN-SWORD-3-60F";

const noHorizontalOverflow = async (page, context) => {
  const dimensions = await page.evaluate(() => ({
    page: document.documentElement.scrollWidth,
    viewport: document.documentElement.clientWidth
  }));
  expect(dimensions.page - dimensions.viewport, context).toBeLessThanOrEqual(1);
};

const textContrast = (foreground, background) => {
  const luminance = rgb => {
    const values = (rgb.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
    if (values.length !== 3) throw new Error("Expected computed RGB color: " + rgb);
    const [r, g, b] = values.map(value => {
      const channel = value / 255;
      return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const a = luminance(foreground), b = luminance(background);
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
};

test("P2 light/dark text contrast on all seven screens", { tag: "@visual" }, async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Both color schemes use the same route data.");
  test.setTimeout(180_000);
  const screens = [
    ["", ".overview-hero"],
    ["#toy-catalog?scope=bey&series=x", "#catalogGrid .catalog-card"],
    ["#toy-release", ".release-product-row"],
    ["#anime-character", ".anime-character-card"],
    ["#anime-episode", ".anime-episode-row"],
    ["#search?q=BX-01&scope=all", "#globalGrid .search-result-item"],
    ["#" + detailId, "#detailModal .modal-inner"]
  ];
  await page.setViewportSize({ width: 390, height: 844 });
  for (const theme of themes) {
    for (const [route, ready] of screens) {
      await page.goto("/?theme=" + theme + route);
      await expect(page.locator(ready).first()).toBeVisible();
      await expect(page.locator("html")).toHaveAttribute("data-sport-theme", theme);
      const palette = await page.locator(".app-shell").evaluate(el => {
        const style = getComputedStyle(el);
        return { text: style.color, background: style.backgroundColor };
      });
      expect(textContrast(palette.text, palette.background),
        "Contrast at " + theme + " " + route).toBeGreaterThanOrEqual(4.5);
      await noHorizontalOverflow(page, "Color scheme " + theme + " " + route);
    }
  }
});

test("P2 keyboard focus on navigation, catalog controls and detail", async ({ page }) => {
  test.setTimeout(180_000);
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/#toy-catalog?scope=bey&series=x");
    const currentNav = width < 640
      ? page.locator(".mobile-bottom-nav [data-category-catalog-open]")
      : page.locator(".topbar [data-category-catalog-open]");
    await expectFocusIndicator(currentNav);
    const cardAction = page.locator("#catalogGrid .catalog-card-action").first();
    await expectFocusIndicator(cardAction, cardAction.locator(".."));
    if (width >= 1024) {
      await expectFocusIndicator(page.locator('.catalog-filter-rail [data-rail-option="series"][data-rail-value="x"]'));
    } else if (width < 640) {
      await expectFocusIndicator(page.locator("#mobileCatalogFilterOpen"));
    }
    await noHorizontalOverflow(page, "Focused catalog at " + width + "px");
  }
  await page.goto("/#" + detailId);
  await expectFocusIndicator(page.locator("#modalClose"));
});

test("P2 Bey images load and decode on all five widths in both themes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Asset delivery does not depend on mobile project.");
  test.setTimeout(180_000);
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of themes) {
      await page.goto("/?theme=" + theme + "#toy-catalog?scope=bey&series=x&sort=no-desc&page=1&q=BX-01");
      const img = page.locator('#catalogGrid .catalog-card[data-id="' + catalogImageId + '"] .bey-image');
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute("loading", "lazy");
      await img.evaluate(el => {
        el.loading = "eager";
        el.scrollIntoView({ block: "center" });
      });
      await expect.poll(() => img.evaluate(el => el.complete && el.naturalWidth > 0)).toBe(true);
      const data = await img.evaluate(el => {
        const rect = el.getBoundingClientRect();
        return {
          src: el.getAttribute("src") || "",
          alt: el.getAttribute("alt") || "",
          naturalWidth: el.naturalWidth,
          naturalHeight: el.naturalHeight,
          renderedWidth: rect.width,
          renderedHeight: rect.height,
          objectFit: getComputedStyle(el).objectFit
        };
      });
      expect(data.src).toContain("?v=");
      expect(data.alt.trim()).not.toBe("");
      expect(data.naturalWidth).toBeGreaterThan(0);
      expect(data.naturalHeight).toBeGreaterThan(0);
      expect(data.renderedWidth).toBeGreaterThan(0);
      expect(data.renderedHeight).toBeGreaterThan(0);
      expect(data.objectFit).toBe("contain");
      await noHorizontalOverflow(page, "Image at " + width + "px / " + theme);
    }
  }
});

test("P2 catalog and character pagination preserve route and page after reload", async ({ page }) => {
  test.setTimeout(120_000);
  await page.goto("/#toy-catalog?scope=bey&series=x&sort=no-desc&page=1");
  const cards = page.locator("#catalogGrid .catalog-card");
  await expect(cards.first()).toBeVisible();
  const firstId = await cards.first().getAttribute("data-id");
  const catalogNext = page.locator('#catalogPagination .catalog-page-step[data-catalog-page="2"]');
  await expect(catalogNext).toBeVisible();
  await catalogNext.click();
  await expect(page).toHaveURL(/#toy-catalog\?scope=bey&series=x&sort=no-desc&page=2/);
  await expect(page.locator('#catalogPagination [data-catalog-page="2"][aria-current="page"]')).toHaveCount(1);
  await expect(page.locator("#catalogPagination .pagination-status")).toHaveAttribute("aria-label", /^2\/\d+ 페이지$/);
  const secondId = await cards.first().getAttribute("data-id");
  expect(secondId).not.toBe(firstId);
  await page.reload();
  await expect(cards.first()).toHaveAttribute("data-id", secondId);
  await cards.first().locator(".catalog-card-action").click();
  await expect(page.locator("#detailModal")).toBeVisible();
  await page.locator("#modalClose").click();
  await expect(page).toHaveURL(/page=2/);
  await expect(cards.first()).toHaveAttribute("data-id", secondId);

  await page.goto("/#anime-character");
  const characters = page.locator("#animeCharacterGrid .anime-character-card");
  await expect(characters.first()).toBeVisible();
  const firstCharacter = await characters.first().getAttribute("data-anime-character-card");
  const animeNext = page.locator('#animePagination .anime-page-step[data-anime-page="2"]');
  await expect(animeNext).toBeVisible();
  await animeNext.click();
  await expect(page).toHaveURL(/#anime-character\?page=2/);
  expect(await characters.first().getAttribute("data-anime-character-card")).not.toBe(firstCharacter);
  await page.reload();
  await expect(page.locator('#animePagination [data-anime-page="2"][aria-current="page"]')).toHaveCount(1);
  await expect(page.locator("#animePagination .pagination-status")).toHaveAttribute("aria-label", /^2\/\d+ 페이지$/);
});

test("P2 search pagination and scope buttons keep consistent active state", async ({ page }) => {
  test.setTimeout(120_000);
  for (const query of ["드랜", "베이"]) {
    await page.goto("/#search?q=" + encodeURIComponent(query) + "&scope=all");
    await expect(page.locator("#searchResultsSearchInput")).toHaveValue(query);
    if (await page.locator('#globalGrid .search-results-page-step[data-search-results-page="2"]').isVisible()) break;
  }
  const items = page.locator("#globalGrid .search-result-item");
  await expect(items.first()).toBeVisible();
  const firstTitle = await items.first().locator("strong").innerText();
  const searchNext = page.locator('#globalGrid .search-results-page-step[data-search-results-page="2"]');
  await expect(searchNext).toBeVisible();
  await searchNext.click();
  await expect(page.locator('#globalGrid [data-search-results-page="2"][aria-current="page"]')).toHaveCount(1);
  await expect(page.locator("#globalGrid .pagination-status")).toHaveAttribute("aria-label", /^2\/\d+ 페이지$/);
  expect(await items.first().locator("strong").innerText()).not.toBe(firstTitle);
  await page.locator('.search-category-button[data-search-results-scope-tab="bey"]').click();
  await expect(page.locator("#searchResultsSearchScope")).toHaveAttribute("data-scope", "bey");
  await expect(page.locator('.search-category-button[data-search-results-scope-tab="bey"]')).toHaveAttribute("aria-pressed", "true");
});

test("P2 reduced-motion mode disables animation and keeps modal navigation operable", async ({ page }) => {
  test.setTimeout(120_000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const theme of themes) {
      await page.goto("/?theme=" + theme + "#toy-catalog?scope=bey&series=x");
      await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
      const motion = await page.evaluate(() => {
        const panel = getComputedStyle(document.querySelector(".app-panel.active"));
        const card = getComputedStyle(document.querySelector("#catalogGrid .catalog-card"));
        return {
          reduced: matchMedia("(prefers-reduced-motion: reduce)").matches,
          panelAnimation: panel.animationName,
          cardAnimation: card.animationName,
          cardDurations: card.transitionDuration.split(", ").map(Number.parseFloat)
        };
      });
      expect(motion.reduced).toBe(true);
      expect(motion.panelAnimation).toBe("none");
      expect(motion.cardAnimation).toBe("none");
      expect(motion.cardDurations.every(ms => ms <= 0.01)).toBe(true);
      await page.goto("/?theme=" + theme + "#" + detailId);
      await expect(page.locator("#detailModal")).toBeVisible();
      await expect(page.locator("#detailModal .modal-inner")).toHaveCSS("animation-name", "none");
      await page.locator("#modalClose").click();
      await expect(page.locator("#detailModal")).toBeHidden();
    }
  }
});

test("P2 mobile bottom navigation never occludes the last catalog card", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "Bottom tabs only appear in mobile layouts.");
  for (const width of [320, 390]) {
    await page.setViewportSize({ width, height: 800 });
    await page.goto("/#toy-catalog?scope=bey&series=x&sort=no-desc&page=1");
    await expect(page.locator("#catalogGrid .catalog-card").last()).toBeVisible();
    await expect(page.locator("#catalogPagination .pagination-status")).toBeVisible();
    await page.locator("#catalogPagination").scrollIntoViewIfNeeded();
    await expect.poll(async () => {
      await page.evaluate(() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "instant" }));
      return page.evaluate(() => {
        const last = document.querySelector("#catalogGrid .catalog-card:last-child").getBoundingClientRect();
        const tabs = document.querySelector(".mobile-bottom-nav").getBoundingClientRect();
        return last.bottom - tabs.top;
      });
    }, { message: "Last catalog card must remain above the fixed bottom bar at " + width + "px" })
      .toBeLessThanOrEqual(1);
    await noHorizontalOverflow(page, "Bottom navigation at " + width + "px");
  }
});
