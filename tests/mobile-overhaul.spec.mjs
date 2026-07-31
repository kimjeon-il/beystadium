import { expect, test } from "@playwright/test";

const consoleErrors = page => {
  const errors = [];
  page.on("console", message => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) {
      errors.push(message.text());
    }
  });
  page.on("pageerror", error => errors.push(error.message));
  return errors;
};

test.describe("mobile-first navigation and content", () => {
  test.beforeEach(({ page: _page }, testInfo) => {
    test.skip(testInfo.project.name !== "mobile", "mobile-only responsive behavior");
  });

  test("home exposes five primary destinations and four quick actions", async ({ page }) => {
    const errors = consoleErrors(page);
    await page.goto("/");

    await expect(page.locator(".mobile-topbar")).toBeVisible();
    await expect(page.locator(".mobile-bottom-nav > button")).toHaveCount(5);
    await expect(page.locator(".overview-quick-links > button")).toHaveCount(4);
    await expect(page.locator("#mobileTopbarTitle")).toHaveText("베이 아카이브");
    await expect(page.locator('[data-global-search-scope="parts"]')).toHaveCount(1);
    await expect(page.locator('[data-global-search-scope="character"]')).toHaveCount(1);

    const layout = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
      minimumTarget: Math.min(
        ...[...document.querySelectorAll(".mobile-bottom-nav > button")]
          .map(element => element.getBoundingClientRect().height)
      )
    }));
    expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
    expect(layout.minimumTarget).toBeGreaterThanOrEqual(44);
    expect(errors).toEqual([]);
  });

  test("mobile search and active-tab highlights stay contained", async ({ page }) => {
    await page.goto("/");
    await page.locator(".mobile-bottom-nav [data-category-catalog-open]").click();

    const activeTab = page.locator(".mobile-bottom-nav [data-category-catalog-open]");
    const tabIndicator = await activeTab.evaluate(element => {
      const style = getComputedStyle(element, "::before");
      const iconStyle = getComputedStyle(element.querySelector("svg"));
      return {
        width: Number.parseFloat(style.width),
        height: Number.parseFloat(style.height),
        position: style.position,
        markerGridRow: style.gridRowStart,
        iconGridRow: iconStyle.gridRowStart
      };
    });
    expect(tabIndicator).toEqual({
      width: 46,
      height: 26,
      position: "relative",
      markerGridRow: "1",
      iconGridRow: "1"
    });

    const scope = page.locator("#catalogSearchScope > summary");
    await scope.focus();
    await expect(scope).toBeFocused();

    const searchHighlight = await scope.evaluate(element => {
      const help = document.querySelector(".catalog-search-box .catalog-search-help-button");
      const scopeStyle = getComputedStyle(element);
      const scopeSurface = getComputedStyle(element, "::before");
      const helpSurface = getComputedStyle(help, "::before");
      return {
        scopeShadow: scopeStyle.boxShadow,
        scopeSurfaceHeight: Number.parseFloat(scopeSurface.height),
        helpSurfaceWidth: Number.parseFloat(helpSurface.width),
        helpSurfaceHeight: Number.parseFloat(helpSurface.height)
      };
    });
    expect(searchHighlight).toEqual({
      scopeShadow: "none",
      scopeSurfaceHeight: 36,
      helpSurfaceWidth: 36,
      helpSurfaceHeight: 36
    });
  });

  test("catalog uses two columns and applies the filter sheet", async ({ page }) => {
    const errors = consoleErrors(page);
    await page.goto("/");
    await page.locator(".mobile-bottom-nav [data-category-catalog-open]").click();

    const firstCard = page.locator("#catalogGrid .catalog-card").first();
    await expect(firstCard).toBeVisible();
    await expect(page.locator("#mobileTopbarTitle")).toHaveText("완구 도감");
    await expect(page.locator("#mobileCatalogFilterOpen")).toBeVisible();

    await page.locator("#catalogSearchInput").focus();
    const controlStyles = await page.evaluate(() => {
      const searchBox = document.querySelector(".catalog-search-box");
      const scope = document.querySelector("#catalogSearchScope > summary");
      const help = document.querySelector("#catalogSearchHelpButton");
      const activeTab = document.querySelector('.mobile-bottom-nav > button[aria-current="page"]');
      const marker = getComputedStyle(activeTab, "::before");
      return {
        focusShadow: getComputedStyle(searchBox).boxShadow,
        scopeBackground: getComputedStyle(scope).backgroundColor,
        helpBackground: getComputedStyle(help).backgroundColor,
        markerWidth: marker.width,
        markerHeight: marker.height,
        markerOpacity: marker.opacity
      };
    });
    expect(controlStyles.focusShadow).toContain("inset");
    expect(controlStyles.scopeBackground).toBe("rgba(0, 0, 0, 0)");
    expect(controlStyles.helpBackground).toBe("rgba(0, 0, 0, 0)");
    expect(controlStyles.markerWidth).toBe("46px");
    expect(controlStyles.markerHeight).toBe("26px");
    expect(controlStyles.markerOpacity).toBe("1");

    const columns = await page.locator("#catalogGrid").evaluate(element =>
      getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length
    );
    expect(columns).toBe(2);
    await expect(firstCard.locator(".bey-image")).toHaveAttribute("width", "240");
    await expect(firstCard.locator(".bey-image")).toHaveAttribute("height", "240");
    await expect(firstCard.locator(".bey-image")).toHaveAttribute("sizes", /max-width: 639px/);
    await expect(page.locator(".catalog-pagination-nav .pagination-status")).toBeVisible();

    await page.locator("#mobileCatalogFilterOpen").click();
    const sheet = page.locator("#mobileCatalogFilters");
    await expect(sheet).toBeVisible();
    await expect(sheet.locator(".mobile-filter-sheet__close")).toBeFocused();
    await page.keyboard.press("Shift+Tab");
    await expect(sheet.locator("[data-mobile-filter-apply]")).toBeFocused();
    await sheet.locator('[data-mobile-filter-query="공격형"]').click();
    await sheet.locator("[data-mobile-filter-apply]").click();
    await expect(sheet).toBeHidden();
    await expect(page.locator("#catalogSearchInput")).toHaveValue(/공격형/);
    expect(errors).toEqual([]);
  });

  test("release and episode lists retain metadata without wide tables", async ({ page }) => {
    const errors = consoleErrors(page);
    await page.goto("/#toy-release");
    const releaseRow = page.locator(".release-product-row").first();
    await expect(releaseRow).toBeVisible();
    await expect(releaseRow.locator(".mobile-row-meta")).toBeVisible();
    await expect(releaseRow.locator(".mobile-row-meta")).not.toHaveText("");

    await page.goto("/#anime-episode");
    const episodeRow = page.locator(".anime-episode-row").first();
    await expect(episodeRow).toBeVisible();
    await expect(episodeRow.locator(".mobile-row-meta")).toBeVisible();
    await expect(episodeRow.locator(".mobile-row-meta")).not.toHaveText("");
    expect(errors).toEqual([]);
  });

  test("search opens as a focused full-screen destination", async ({ page }) => {
    const errors = consoleErrors(page);
    await page.goto("/");
    await page.locator(".mobile-bottom-nav [data-mobile-search-open]").click();

    const input = page.locator("#searchResultsSearchInput");
    await expect(page.locator('[data-app-panel="all"].active')).toBeVisible();
    await expect(page.locator("#mobileTopbarTitle")).toHaveText("검색");
    await expect(page.locator("#mobileTopbarBack")).toBeVisible();
    await expect(input).toBeFocused();
    await expect(page.locator("#searchResultsSearchScope")).toBeVisible();
    expect(errors).toEqual([]);
  });

  test("detail is a full-screen single-scroll view and release titles open in one tap", async ({ page }) => {
    const errors = consoleErrors(page);
    await page.goto("/#toy-release");
    await expect(page.locator(".release-product-row").first()).toBeVisible();
    await page.locator(".mobile-bottom-nav [data-mobile-search-open]").click();
    await expect(page.locator('[data-app-panel="all"].active')).toBeVisible();
    await page.locator(".mobile-bottom-nav [data-category-release-open]").click();
    const productLink = page.locator(".release-product-link").first();
    await expect(productLink).toBeVisible();
    await productLink.tap();

    const dialog = page.locator("#detailModal");
    const shell = dialog.locator(".modal-inner");
    await expect(dialog).toBeVisible();
    await expect(shell).toBeVisible();
    await expect(dialog.locator(".product-composition-item").first()).toBeVisible();

    const contextualBack = dialog.locator(".modal-back[data-back-release]");
    await expect(contextualBack).toBeVisible();
    const backGeometry = await contextualBack.evaluate(element => {
      const rect = element.getBoundingClientRect();
      return {
        left: Math.round(rect.left),
        top: Math.round(rect.top),
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    });
    expect(backGeometry).toEqual({ left: 6, top: 6, width: 44, height: 44 });

    const geometry = await shell.evaluate(element => {
      const rect = element.getBoundingClientRect();
      const scrollArea = element.querySelector(".modal-scroll-area");
      return {
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        viewportWidth: document.documentElement.clientWidth,
        shellOverflow: getComputedStyle(element).overflow,
        innerOverflow: scrollArea ? getComputedStyle(scrollArea).overflow : "visible"
      };
    });
    expect(geometry.left).toBe(0);
    expect(geometry.width).toBeGreaterThanOrEqual(geometry.viewportWidth - 1);
    expect(geometry.shellOverflow).toBe("visible");
    expect(geometry.innerOverflow).toBe("visible");

    await contextualBack.tap();
    await expect(dialog).toBeHidden();
    await expect(page.locator('[data-app-panel="release"].active')).toBeVisible();

    const directPage = await page.context().newPage();
    await directPage.goto("/#BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
    const directDialog = directPage.locator("#detailModal");
    await expect(directDialog).toBeVisible();
    const fallbackBack = directDialog.locator("#modalMobileBack");
    await expect(fallbackBack).toBeVisible();
    await expect(directDialog.locator("#modalContent .modal-back")).toHaveCount(0);
    await fallbackBack.tap();
    await expect(directDialog).toBeHidden();
    await expect(directPage).toHaveURL(/#toy-catalog\?scope=bey/);
    await expect(directPage.locator("#catalogGrid .catalog-card").first()).toBeVisible();
    await directPage.close();
    expect(errors).toEqual([]);
  });
});

test("tablet keeps brand search and menu without the phone tab bar", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one tablet viewport is sufficient");
  await page.setViewportSize({ width: 768, height: 1024 });
  await page.goto("/");

  await expect(page.locator(".topbar > .brand")).toBeVisible();
  await expect(page.locator(".topbar-search")).toBeVisible();
  await expect(page.locator("#menuButton")).toBeVisible();
  await expect(page.locator(".mobile-bottom-nav")).toBeHidden();

  const bounds = await page.evaluate(() => ({
    documentWidth: document.documentElement.scrollWidth,
    viewportWidth: document.documentElement.clientWidth
  }));
  expect(bounds.documentWidth).toBeLessThanOrEqual(bounds.viewportWidth + 1);
});
