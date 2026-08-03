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
    await expect(page.locator(".overview-quick-links__icon svg")).toHaveCount(4);
    await expect(page.locator("#mobileTopbarTitle")).toHaveText("베이 아카이브");
    await expect(page.locator('[data-global-search-scope="parts"]')).toHaveCount(1);
    await expect(page.locator('[data-global-search-scope="character"]')).toHaveCount(1);

    const layout = await page.evaluate(() => {
      const probe = document.createElement("i");
      probe.style.cssText = "position:fixed;border-radius:var(--radius-card);background:var(--ui-surface-raised)";
      document.body.append(probe);
      const probeStyle = getComputedStyle(probe);
      const quickLinkStyle = getComputedStyle(document.querySelector(".overview-quick-links > button"));
      const result = {
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
        minimumTarget: Math.min(
          ...[...document.querySelectorAll(".mobile-bottom-nav > button")]
            .map(element => element.getBoundingClientRect().height)
        ),
        heroAlignment: getComputedStyle(document.querySelector(".overview-hero h1")).textAlign,
        searchHeight: document.querySelector(".overview-search").getBoundingClientRect().height,
        searchScopeHeight: document.querySelector("#overviewSearchScope > summary").getBoundingClientRect().height,
        searchRadius: getComputedStyle(document.querySelector(".overview-search")).borderRadius,
        searchScopeRadius: getComputedStyle(document.querySelector("#overviewSearchScope > summary")).borderRadius,
        quickLinkRadius: quickLinkStyle.borderRadius,
        expectedRadius: probeStyle.borderRadius,
        quickLinkBackground: quickLinkStyle.backgroundColor,
        expectedBackground: probeStyle.backgroundColor
      };
      probe.remove();
      return result;
    });
    expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
    expect(layout.minimumTarget).toBeGreaterThanOrEqual(44);
    expect(layout.heroAlignment).toBe("center");
    expect(layout.searchHeight).toBeCloseTo(62, 3);
    expect(layout.searchScopeHeight).toBeCloseTo(44, 3);
    expect(layout.searchRadius).toBe("12px");
    expect(layout.searchScopeRadius).toBe("10px");
    expect(layout.quickLinkRadius).toBe(layout.expectedRadius);
    expect(layout.quickLinkBackground).toBe(layout.expectedBackground);
    expect(errors).toEqual([]);
  });

  test("mobile search and active-tab highlights stay contained", async ({ page }) => {
    await page.goto("/");
    await page.locator(".mobile-bottom-nav [data-category-catalog-open]").click();

    const activeTab = page.locator(".mobile-bottom-nav [data-category-catalog-open]");
    await expect(activeTab).toHaveAttribute("aria-current", "page");
    await page.waitForTimeout(250);
    const tabSurface = await activeTab.evaluate(element => {
      const style = getComputedStyle(element);
      const marker = getComputedStyle(element, "::before");
      const inactiveStyle = getComputedStyle(document.querySelector(".mobile-bottom-nav [data-sidebar-home]"));
      const probe = document.createElement("i");
      probe.style.cssText = "position:fixed;background:var(--ui-control-hover);border-radius:var(--radius-control)";
      document.body.append(probe);
      const probeStyle = getComputedStyle(probe);
      const expectedBackground = probeStyle.backgroundColor;
      const expectedRadius = probeStyle.borderRadius;
      probe.remove();
      return {
        height: element.getBoundingClientRect().height,
        background: style.backgroundColor,
        expectedBackground,
        radius: style.borderRadius,
        expectedRadius,
        markerDisplay: marker.display,
        inactiveBackground: inactiveStyle.backgroundColor
      };
    });
    expect(tabSurface.height).toBeCloseTo(44, 3);
    expect(tabSurface.background).toBe(tabSurface.expectedBackground);
    expect(tabSurface.radius).toBe(tabSurface.expectedRadius);
    expect(tabSurface.markerDisplay).toBe("none");
    expect(tabSurface.inactiveBackground).toBe("rgba(0, 0, 0, 0)");

    await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
    const scope = page.locator("#catalogSearchScope > summary");
    await scope.focus();
    await expect(scope).toBeFocused();

    for (const width of [352, 393, 430, 442]) {
      await page.setViewportSize({ width, height: 800 });
      const sizing = await page.evaluate(() => {
        const searchBox = document.querySelector(".catalog-search-box");
        const summary = document.querySelector("#catalogSearchScope > summary");
        const help = document.querySelector(".catalog-search-box .catalog-search-help-button");
        return {
          searchHeight: searchBox.getBoundingClientRect().height,
          searchRadius: getComputedStyle(searchBox).borderRadius,
          borderWidth: getComputedStyle(searchBox).borderTopWidth,
          summaryHeight: summary.getBoundingClientRect().height,
          summaryRadius: getComputedStyle(summary).borderRadius,
          helpWidth: help.getBoundingClientRect().width,
          helpHeight: help.getBoundingClientRect().height
        };
      });
      expect(sizing.searchHeight).toBeCloseTo(48, 3);
      expect(sizing.searchRadius).toBe("12px");
      expect(sizing.borderWidth).toBe("1px");
      expect(sizing.summaryHeight).toBeCloseTo(32, 3);
      expect(sizing.summaryRadius).toBe("10px");
      expect(sizing.helpWidth).toBeCloseTo(30, 3);
      expect(sizing.helpHeight).toBeCloseTo(30, 3);
    }

    const searchHighlight = await scope.evaluate(element => {
      const help = document.querySelector(".catalog-search-box .catalog-search-help-button");
      const scopeStyle = getComputedStyle(element);
      const searchBox = element.closest(".catalog-search-box");
      const scopeControl = element.closest(".search-scope");
      return {
        scopeShadow: scopeStyle.boxShadow,
        searchHeight: searchBox.getBoundingClientRect().height,
        helpWidth: help.getBoundingClientRect().width,
        helpHeight: help.getBoundingClientRect().height,
        scopeHeight: scopeControl.getBoundingClientRect().height,
        summaryHeight: element.getBoundingClientRect().height,
        scopeCenterOffset: (scopeControl.getBoundingClientRect().top + scopeControl.getBoundingClientRect().height / 2)
          - (searchBox.getBoundingClientRect().top + searchBox.getBoundingClientRect().height / 2),
        summaryCenterOffset: (element.getBoundingClientRect().top + element.getBoundingClientRect().height / 2)
          - (searchBox.getBoundingClientRect().top + searchBox.getBoundingClientRect().height / 2)
      };
    });
    expect(searchHighlight.scopeShadow).not.toBe("none");
    expect(searchHighlight.searchHeight).toBe(48);
    expect(searchHighlight.helpWidth).toBe(30);
    expect(searchHighlight.helpHeight).toBe(30);
    expect(searchHighlight.scopeHeight).toBe(32);
    expect(searchHighlight.summaryHeight).toBe(32);
    expect(searchHighlight.scopeCenterOffset).toBeCloseTo(0, 5);
    expect(searchHighlight.summaryCenterOffset).toBeCloseTo(0, 5);

    await scope.click();
    await expect(page.locator("#catalogSearchScope")).toHaveAttribute("open", "");
    const menuSpacing = await page.locator("#catalogSearchScope > .catalog-dropdown-menu").evaluate(menu => {
      const items = [...menu.querySelectorAll("button")];
      const centers = items.map(item => {
        const rect = item.getBoundingClientRect();
        return rect.top + rect.height / 2;
      });
      return {
        gap: Number.parseFloat(getComputedStyle(menu).gap),
        paddingTop: Number.parseFloat(getComputedStyle(menu).paddingTop),
        paddingBottom: Number.parseFloat(getComputedStyle(menu).paddingBottom),
        itemHeights: items.map(item => item.getBoundingClientRect().height),
        centerSteps: centers.slice(1).map((center, index) => center - centers[index])
      };
    });
    expect(menuSpacing.gap).toBe(4);
    expect(menuSpacing.paddingTop).toBe(8);
    expect(menuSpacing.paddingBottom).toBe(8);
    expect(menuSpacing.itemHeights.every(height => Math.abs(height - 32) < .01)).toBe(true);
    expect(menuSpacing.centerSteps.every(step => Math.abs(step - 36) < .01)).toBe(true);

    await page.keyboard.press("Escape");
    await page.locator("#catalogSearchInput").fill("드랜");
    const clear = page.locator(".catalog-search-box .search-clear");
    await expect(clear).toBeVisible();
    const clearSize = await clear.evaluate(element => {
      const rect = element.getBoundingClientRect();
      return [rect.width, rect.height];
    });
    expect(clearSize).toEqual([30, 30]);
  });

  test("catalog uses two columns and applies the filter sheet", async ({ page }) => {
    const errors = consoleErrors(page);
    await page.goto("/");
    await page.locator(".mobile-bottom-nav [data-category-catalog-open]").click();
    await page.waitForTimeout(250);

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
      const probe = document.createElement("i");
      probe.style.cssText = "position:fixed;background:var(--ui-control-hover);color:var(--ui-text)";
      const controlProbe = document.createElement("i");
      controlProbe.style.cssText = "position:fixed;background:var(--ui-control)";
      document.body.append(probe);
      document.body.append(controlProbe);
      const expectedActiveBackground = getComputedStyle(probe).backgroundColor;
      const expectedScopeBackground = getComputedStyle(controlProbe).backgroundColor;
      probe.remove();
      controlProbe.remove();
      return {
        focusShadow: getComputedStyle(searchBox).boxShadow,
        scopeBackground: getComputedStyle(scope).backgroundColor,
        helpBackground: getComputedStyle(help).backgroundColor,
        expectedScopeBackground,
        activeBackground: getComputedStyle(activeTab).backgroundColor.match(/[\d.]+/g)?.slice(0, 3),
        expectedActiveBackground: expectedActiveBackground.match(/[\d.]+/g)?.slice(0, 3),
        markerDisplay: getComputedStyle(activeTab, "::before").display
      };
    });
    expect(controlStyles.focusShadow).not.toBe("none");
    expect(controlStyles.focusShadow).not.toContain("inset");
    expect(controlStyles.scopeBackground).toBe(controlStyles.expectedScopeBackground);
    expect(controlStyles.helpBackground).toBe("rgba(0, 0, 0, 0)");
    expect(controlStyles.activeBackground).toEqual(controlStyles.expectedActiveBackground);
    expect(controlStyles.markerDisplay).toBe("none");

    const columns = await page.locator("#catalogGrid").evaluate(element =>
      getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length
    );
    expect(columns).toBe(2);
    await expect(firstCard.locator(".bey-image")).toHaveAttribute("width", "240");
    await expect(firstCard.locator(".bey-image")).toHaveAttribute("height", "240");
    await expect(firstCard.locator(".bey-image")).toHaveAttribute("sizes", /max-width: 639px/);
    await expect(page.locator(".catalog-pagination-nav .pagination-status")).toBeVisible();
    const paginationSize = await page.locator(".catalog-pagination-nav").evaluate(element => {
      const button = [...element.querySelectorAll(".ui-button")].find(candidate => getComputedStyle(candidate).display !== "none");
      const rect = button.getBoundingClientRect();
      return { width: rect.width, height: rect.height };
    });
    expect(paginationSize.width).toBeGreaterThanOrEqual(38);
    expect(paginationSize.height).toBeCloseTo(34, 3);

    const cardParity = await firstCard.evaluate(element => {
      const style = getComputedStyle(element);
      const imageStyle = getComputedStyle(element.querySelector(".bey-image"));
      const titleStyle = getComputedStyle(element.querySelector(".catalog-card-title"));
      return {
        minHeight: Number.parseFloat(style.minHeight),
        imageMaxWidth: imageStyle.maxWidth,
        titleWhiteSpace: titleStyle.whiteSpace,
        radius: style.borderRadius,
        shadow: style.boxShadow
      };
    });
    expect(cardParity.minHeight).toBe(132);
    expect(cardParity.imageMaxWidth).toBe("min(78%, 112px)");
    expect(cardParity.titleWhiteSpace).toBe("nowrap");
    expect(cardParity.radius).toBe("12px");
    expect(cardParity.shadow).not.toBe("");

    await page.locator("#mobileCatalogFilterOpen").click();
    const sheet = page.locator("#mobileCatalogFilters");
    await expect(sheet).toBeVisible();
    await expect(sheet.locator(".mobile-filter-sheet__close")).toBeFocused();
    const sheetControls = await sheet.evaluate(element => {
      const panelStyle = getComputedStyle(element.querySelector(".mobile-filter-sheet__panel"));
      const optionRect = element.querySelector(".mobile-filter-options .ui-dropdown-item").getBoundingClientRect();
      const actionRect = element.querySelector(".mobile-filter-sheet__actions .ui-button").getBoundingClientRect();
      const closeRect = element.querySelector(".mobile-filter-sheet__close").getBoundingClientRect();
      return {
        animationName: panelStyle.animationName,
        optionHeight: optionRect.height,
        actionHeight: actionRect.height,
        closeSize: [closeRect.width, closeRect.height]
      };
    });
    expect(sheetControls.animationName).not.toBe("mobile-sheet-enter");
    expect(sheetControls.optionHeight).toBeCloseTo(38, 3);
    expect(sheetControls.actionHeight).toBeCloseTo(38, 3);
    expect(sheetControls.closeSize[0]).toBeCloseTo(44, 3);
    expect(sheetControls.closeSize[1]).toBeCloseTo(44, 3);
    await page.keyboard.press("Shift+Tab");
    await expect(sheet.locator("[data-mobile-filter-apply]")).toBeFocused();
    await sheet.locator('[data-mobile-filter-query="공격형"]').click();
    await page.waitForTimeout(250);
    const selectedFilterStyle = await sheet.locator('[data-mobile-filter-query="공격형"]').evaluate(element => {
      const style = getComputedStyle(element);
      const surface = getComputedStyle(element, "::before");
      const probe = document.createElement("i");
      probe.style.cssText = "position:fixed;background:var(--ui-control-hover);border-radius:var(--radius-control-sm)";
      document.body.append(probe);
      const probeStyle = getComputedStyle(probe);
      const result = {
        background: style.backgroundColor,
        height: element.getBoundingClientRect().height,
        borderWidth: style.borderTopWidth,
        radius: style.borderRadius,
        expectedRadius: probeStyle.borderRadius,
        surfaceBackground: surface.backgroundColor,
        expectedSurfaceBackground: probeStyle.backgroundColor,
        surfaceOpacity: surface.opacity
      };
      probe.remove();
      return result;
    });
    expect(selectedFilterStyle.background).toBe("rgba(0, 0, 0, 0)");
    expect(selectedFilterStyle.height).toBeCloseTo(38, 3);
    expect(selectedFilterStyle.borderWidth).toBe("0px");
    expect(selectedFilterStyle.radius).toBe(selectedFilterStyle.expectedRadius);
    expect(selectedFilterStyle.surfaceBackground).toBe(selectedFilterStyle.expectedSurfaceBackground);
    expect(selectedFilterStyle.surfaceOpacity).toBe("1");
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
    const releaseSurface = await releaseRow.evaluate(element => {
      const sectionStyle = getComputedStyle(element.closest(".table-list-section"));
      const rowStyle = getComputedStyle(element);
      const titleStyle = getComputedStyle(element.querySelector(".table-list-primary-text"));
      const probe = document.createElement("i");
      probe.style.cssText = "position:fixed;background:var(--ui-surface-raised);border-radius:var(--radius-card)";
      document.body.append(probe);
      const probeStyle = getComputedStyle(probe);
      const metaStyle = getComputedStyle(element.querySelector(".mobile-row-meta"));
      const result = {
        sectionBackground: sectionStyle.backgroundColor,
        expectedSectionBackground: probeStyle.backgroundColor,
        sectionBorderWidth: sectionStyle.borderTopWidth,
        rowBackground: rowStyle.backgroundColor,
        rowShadow: rowStyle.boxShadow,
        rowRadius: rowStyle.borderRadius,
        expectedRowRadius: probeStyle.borderRadius,
        titleWeight: titleStyle.fontWeight,
        rowMinHeight: rowStyle.minHeight,
        metaColor: metaStyle.color,
        metaFontSize: metaStyle.fontSize,
        expectedMetaColor: probeStyle.color,
        expectedMetaFontSize: probeStyle.fontSize
      };
      probe.remove();
      return result;
    });
    expect(releaseSurface.sectionBackground).toBe(releaseSurface.expectedSectionBackground);
    expect(releaseSurface.sectionBorderWidth).toBe("1px");
    expect(releaseSurface.rowBackground).toBe("rgba(0, 0, 0, 0)");
    expect(releaseSurface.rowShadow).toBe("none");
    expect(releaseSurface.rowRadius).toBe(releaseSurface.expectedRowRadius);
    expect(Number(releaseSurface.titleWeight)).toBeLessThanOrEqual(500);
    expect(releaseSurface.rowMinHeight).toBe("auto");
    expect(releaseSurface.metaColor).toBe(releaseSurface.expectedMetaColor);
    expect(releaseSurface.metaFontSize).toBe(releaseSurface.expectedMetaFontSize);

    await page.goto("/#anime-episode");
    const episodeRow = page.locator(".anime-episode-row").first();
    await expect(episodeRow).toBeVisible();
    await expect(episodeRow.locator(".mobile-row-meta")).toBeVisible();
    await expect(episodeRow.locator(".mobile-row-meta")).not.toHaveText("");
    expect(errors).toEqual([]);
  });

  test("release titles use the full mobile width before wrapping", async ({ page }) => {
    const errors = consoleErrors(page);
    await page.goto("/#toy-release");
    await page.locator(".release-list-page .table-list-dropdown summary").tap();
    await page.locator('[data-release-series="x"]').tap();
    await page.locator("#releaseSearchInput").fill("BX-27");

    const row = page.locator('.release-product-row[data-product-id="PRODUCT-X-BX-27"]');
    await expect(row).toBeVisible();

    for (const width of [352, 393, 430, 442]) {
      await page.setViewportSize({ width, height: 800 });
      const layout = await row.evaluate(element => {
        const cell = element.querySelector(".release-product-cell");
        const title = element.querySelector(".release-product-link");
        const meta = element.querySelector(".mobile-row-meta");
        const cellRect = cell.getBoundingClientRect();
        const titleRect = title.getBoundingClientRect();
        const metaRect = meta.getBoundingClientRect();
        const columns = getComputedStyle(cell).gridTemplateColumns.split(" ").map(Number.parseFloat);
        const lineHeight = Number.parseFloat(getComputedStyle(title).lineHeight);
        return {
          cellWidth: cellRect.width,
          titleWidth: titleRect.width,
          titleRight: titleRect.right,
          cellRight: cellRect.right,
          titleBottom: titleRect.bottom,
          metaTop: metaRect.top,
          metaRight: metaRect.right,
          columns,
          titleLines: Math.round(titleRect.height / lineHeight),
          metaGridRowStart: getComputedStyle(meta).gridRowStart,
          metaGridColumnStart: getComputedStyle(meta).gridColumnStart,
          metaGridColumnEnd: getComputedStyle(meta).gridColumnEnd,
          metaJustify: getComputedStyle(meta).justifyContent,
          previewCount: cell.querySelectorAll(".release-image-preview-button").length
        };
      });

      expect(layout.previewCount).toBe(0);
      expect(layout.columns[1]).toBeCloseTo(0, 1);
      expect(layout.titleWidth).toBeCloseTo(layout.cellWidth, 1);
      expect(layout.titleRight).toBeCloseTo(layout.cellRight, 1);
      expect(layout.metaRight).toBeLessThanOrEqual(layout.cellRight + 1);
      expect(layout.metaTop).toBeGreaterThanOrEqual(layout.titleBottom - 1);
      expect(layout.metaGridRowStart).toBe("auto");
      expect(layout.metaGridColumnStart).toBe("1");
      expect(layout.metaGridColumnEnd).toBe("-1");
      expect(layout.metaJustify).toBe("flex-end");
      if (width === 442) expect(layout.titleLines).toBe(1);
    }

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
    await input.fill("페가시스");
    await input.press("Enter");
    const firstResult = page.locator(".search-results-list .search-result-item").first();
    await expect(firstResult).toBeVisible();
    const resultSurface = await firstResult.evaluate(element => ({
      background: getComputedStyle(element).backgroundColor,
      borderWidth: getComputedStyle(element).borderTopWidth,
      padding: getComputedStyle(element).padding,
      minHeight: getComputedStyle(element).minHeight
    }));
    expect(resultSurface.background).toBe("rgba(0, 0, 0, 0)");
    expect(resultSurface.borderWidth).toBe("0px");
    expect(resultSurface.padding).toBe("11px 10px");
    expect(resultSurface.minHeight).toBe("auto");
    expect(errors).toEqual([]);
  });

  test("detail keeps a contained single-scroll modal and release titles open in one tap", async ({ page }) => {
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
    expect(backGeometry).toEqual({ left: 19, top: 19, width: 44, height: 44 });

    const geometry = await shell.evaluate(element => {
      const rect = element.getBoundingClientRect();
      const scrollArea = element.querySelector(".modal-scroll-area");
      return {
        left: Math.round(rect.left),
        width: Math.round(rect.width),
        top: Math.round(rect.top),
        height: Math.round(rect.height),
        viewportWidth: document.documentElement.clientWidth,
        viewportHeight: document.documentElement.clientHeight,
        shellOverflow: getComputedStyle(element).overflow,
        innerOverflow: scrollArea ? getComputedStyle(scrollArea).overflowY : "visible",
        radius: Number.parseFloat(getComputedStyle(element).borderTopLeftRadius),
        shadow: getComputedStyle(element).boxShadow,
        overlayDisplay: getComputedStyle(document.querySelector("#detailModal .modal-overlay")).display,
        sectionPadding: getComputedStyle(element.querySelector(".modal-info")).getPropertyValue("--modal-section-padding").trim()
      };
    });
    expect(geometry.left).toBe(8);
    expect(geometry.top).toBe(8);
    expect(geometry.width).toBe(geometry.viewportWidth - 16);
    expect(geometry.height).toBe(geometry.viewportHeight - 16);
    expect(geometry.shellOverflow).toBe("hidden");
    expect(geometry.innerOverflow).toBe("auto");
    expect(geometry.radius).toBe(24);
    expect(geometry.shadow).not.toBe("none");
    expect(geometry.overlayDisplay).toBe("block");
    expect(geometry.sectionPadding).toBe("20px");

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

  test("wider phones retain the harmonized shell without horizontal overflow", async ({ page }) => {
    await page.setViewportSize({ width: 430, height: 932 });
    await page.goto("/#toy-release");
    const firstProduct = page.locator(".release-product-link").first();
    await expect(firstProduct).toBeVisible();
    await firstProduct.tap();
    await expect(page.locator("#detailModal .modal-inner")).toBeVisible();

    const layout = await page.evaluate(() => {
      const shell = document.querySelector("#detailModal .modal-inner").getBoundingClientRect();
      const activeTab = document.querySelector('.mobile-bottom-nav > button[aria-current="page"]');
      const probe = document.createElement("i");
      probe.style.cssText = "position:fixed;background:var(--ui-control-hover)";
      document.body.append(probe);
      const expectedActiveBackground = getComputedStyle(probe).backgroundColor;
      probe.remove();
      return {
        documentWidth: document.documentElement.scrollWidth,
        viewportWidth: document.documentElement.clientWidth,
        shellLeft: Math.round(shell.left),
        shellRight: Math.round(window.innerWidth - shell.right),
        shellRadius: Number.parseFloat(getComputedStyle(document.querySelector("#detailModal .modal-inner")).borderTopLeftRadius),
        activeBackground: getComputedStyle(activeTab).backgroundColor,
        expectedActiveBackground,
        activeTargetMinHeight: Number.parseFloat(getComputedStyle(activeTab).minHeight)
      };
    });

    expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
    expect(layout.shellLeft).toBeGreaterThanOrEqual(8);
    expect(layout.shellLeft).toBeLessThanOrEqual(12);
    expect(layout.shellRight).toBeGreaterThanOrEqual(8);
    expect(layout.shellRight).toBeLessThanOrEqual(12);
    expect(layout.shellRadius).toBe(24);
    expect(layout.activeBackground).toBe(layout.expectedActiveBackground);
    expect(layout.activeTargetMinHeight).toBe(44);
  });
});

test("phone navigation uses one common hover and current surface", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "pointer hover is verified in one desktop browser");
  await page.setViewportSize({ width: 474, height: 800 });

  for (const colorScheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme, reducedMotion: "reduce" });
    await page.goto("/");
    const currentTab = page.locator(".mobile-bottom-nav [data-sidebar-home]");
    const hoverTab = page.locator(".mobile-bottom-nav [data-category-catalog-open]");
    await expect(currentTab).toBeVisible();
    await hoverTab.hover();
    await expect.poll(() => page.evaluate(() => {
      const current = document.querySelector(".mobile-bottom-nav [data-sidebar-home]");
      const hovered = document.querySelector(".mobile-bottom-nav [data-category-catalog-open]");
      return getComputedStyle(hovered).backgroundColor === getComputedStyle(current).backgroundColor;
    })).toBe(true);

    const surfaces = await page.evaluate(() => {
      const current = document.querySelector(".mobile-bottom-nav [data-sidebar-home]");
      const hovered = document.querySelector(".mobile-bottom-nav [data-category-catalog-open]");
      const currentSurface = getComputedStyle(current);
      const hoverSurface = getComputedStyle(hovered);
      return {
        currentHeight: current.getBoundingClientRect().height,
        currentBackground: currentSurface.backgroundColor,
        currentRadius: currentSurface.borderRadius,
        hoverHeight: hovered.getBoundingClientRect().height,
        hoverBackground: hoverSurface.backgroundColor,
        hoverRadius: hoverSurface.borderRadius,
        markerDisplay: getComputedStyle(current, "::before").display
      };
    });

    expect(surfaces.currentHeight).toBeCloseTo(44, 3);
    expect(surfaces.hoverHeight).toBeCloseTo(44, 3);
    expect(surfaces.hoverBackground).toBe(surfaces.currentBackground);
    expect(surfaces.hoverRadius).toBe(surfaces.currentRadius);
    expect(surfaces.markerDisplay).toBe("none");
  }
});

test("touch layouts ignore decorative hover without losing persistent states", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "touch hover behavior only needs the mobile project");
  const errors = consoleErrors(page);
  const visualState = locator => locator.evaluate(element => {
    const style = getComputedStyle(element);
    return {
      background: style.backgroundColor,
      borderColor: style.borderColor,
      boxShadow: style.boxShadow,
      color: style.color,
      transform: style.transform
    };
  });

  await page.goto("/");
  expect(await page.evaluate(() => ({
    hoverNone: matchMedia("(hover: none)").matches,
    coarse: matchMedia("(pointer: coarse)").matches
  }))).toEqual({ hoverNone: true, coarse: true });

  const inactiveNav = page.locator(".mobile-bottom-nav [data-category-catalog-open]");
  const navRest = await visualState(inactiveNav);
  await inactiveNav.hover();
  expect(await visualState(inactiveNav)).toEqual(navRest);

  await page.goto("/#toy-catalog");
  const card = page.locator("#catalogGrid .catalog-card").first();
  await expect(card).toBeVisible();
  const cardRest = await visualState(card);
  await card.hover();
  expect(await visualState(card)).toEqual(cardRest);

  await page.goto("/#toy-release");
  const releaseCell = page.locator(".release-product-row").first().locator("td").nth(1);
  await expect(releaseCell).toBeVisible();
  const cellRest = await visualState(releaseCell);
  await releaseCell.hover();
  expect(await visualState(releaseCell)).toEqual(cellRest);

  await page.goto(`/#search?q=${encodeURIComponent("드래곤")}&scope=bey`);
  const result = page.locator(".search-results-list .search-result-item").first();
  await expect(result).toBeVisible();
  const resultRest = await visualState(result);
  await result.hover();
  expect(await visualState(result)).toEqual(resultRest);

  await page.goto("/#BEY-X-BX-02-HELLS-SCYTHE-4-60T");
  const closeButton = page.locator("#modalClose");
  await expect(closeButton).toBeVisible();
  const closeRest = await visualState(closeButton);
  await closeButton.hover();
  expect(await visualState(closeButton)).toEqual(closeRest);
  expect(errors).toEqual([]);
});

test("topbar stays 72px and uses the desktop menu from 640px", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "responsive viewport matrix only needs one browser project");

  for (const width of [360, 393, 639, 640, 768, 785, 1023, 1024, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/#toy-catalog");

    const topbar = page.locator(".topbar");
    await expect(topbar).toBeVisible();
    await expect(topbar).toHaveCSS("height", "72px");

    const brand = page.locator(".topbar > .brand");
    const primaryNav = page.locator(".topbar-primary-nav");
    const topbarSearch = page.locator(".topbar-search");
    const menuButton = page.locator("#menuButton");

    if (width < 640) {
      await expect(page.locator(".mobile-topbar")).toBeVisible();
      await expect(brand).toBeHidden();
      await expect(primaryNav).toBeHidden();
      await expect(topbarSearch).toBeHidden();
      await expect(menuButton).toBeHidden();
      await expect(page.locator(".mobile-bottom-nav")).toBeVisible();

      const mobileAlignment = await page.evaluate(() => {
        const bar = document.querySelector(".topbar").getBoundingClientRect();
        const title = document.querySelector(".mobile-topbar-title").getBoundingClientRect();
        const back = document.querySelector(".mobile-topbar-back");
        const backRect = back.hidden ? null : back.getBoundingClientRect();
        return {
          titleCenterOffset: Math.abs((title.top + title.height / 2) - (bar.top + bar.height / 2)),
          backCenterOffset: backRect
            ? Math.abs((backRect.top + backRect.height / 2) - (bar.top + bar.height / 2))
            : 0
        };
      });
      expect(mobileAlignment.titleCenterOffset).toBeLessThanOrEqual(1);
      expect(mobileAlignment.backCenterOffset).toBeLessThanOrEqual(1);
    } else {
      await expect(page.locator(".mobile-topbar")).toBeHidden();
      await expect(brand).toBeVisible();
      await expect(primaryNav).toBeVisible();
      await expect(primaryNav.locator(".topbar-primary-button")).toHaveCount(5);
      await expect(menuButton).toBeHidden();
      await expect(page.locator(".mobile-bottom-nav")).toBeHidden();

      if (width < 1024) {
        await expect(topbarSearch).toBeHidden();
      } else {
        await expect(topbarSearch).toBeVisible();
      }

      const spacing = await page.evaluate(() => {
        const topbarRect = document.querySelector(".topbar").getBoundingClientRect();
        const brandRect = document.querySelector(".topbar > .brand").getBoundingClientRect();
        const navRect = document.querySelector(".topbar-primary-nav").getBoundingClientRect();
        const lastButtonRect = document.querySelector(".topbar-primary-button:last-child").getBoundingClientRect();
        return {
          brandNavGap: navRect.left - brandRect.right,
          lastButtonOverflow: lastButtonRect.right - topbarRect.right
        };
      });
      expect(spacing.brandNavGap).toBeGreaterThanOrEqual(-1);
      expect(spacing.lastButtonOverflow).toBeLessThanOrEqual(1);
    }

    const bounds = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth
    }));
    expect(bounds.documentWidth).toBeLessThanOrEqual(bounds.viewportWidth + 1);
  }
});

test("tablet primary menu keeps desktop active and focus states", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "tablet state comparison only needs one browser project");
  await page.setViewportSize({ width: 785, height: 900 });

  for (const colorScheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme });
    await page.goto("/#toy-catalog");

    const activeButton = page.locator(".topbar .topbar-primary-button[data-category-catalog-open]");
    await expect(activeButton).toHaveClass(/active/);
    await page.waitForTimeout(250);
    const activeColors = await activeButton.evaluate(element => {
      const probe = document.createElement("i");
      probe.style.cssText = "position:fixed;background:var(--ui-control-hover);color:var(--ui-control-text-active)";
      document.body.append(probe);
      const actual = getComputedStyle(element);
      const expected = getComputedStyle(probe);
      const result = {
        background: actual.backgroundColor,
        expectedBackground: expected.backgroundColor,
        color: actual.color,
        expectedColor: expected.color
      };
      probe.remove();
      return result;
    });
    expect(activeColors.background).toBe(activeColors.expectedBackground);
    expect(activeColors.color).toBe(activeColors.expectedColor);

    const focusButton = page.locator(".topbar .topbar-primary-button[data-category-release-open]");
    await focusButton.focus();
    expect(await focusButton.evaluate(element => getComputedStyle(element).boxShadow)).not.toBe("none");
  }
});
