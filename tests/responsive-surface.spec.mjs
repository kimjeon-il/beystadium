import { expect, test } from "@playwright/test";
import { consoleErrors } from "./helpers/ui-assertions.mjs";

test("desktop release title group preserves the existing inline layout", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "desktop layout only needs one browser project");
  const errors = consoleErrors(page);
  await page.setViewportSize({ width: 1024, height: 900 });
  await page.goto("/#toy-release");
  await page.locator(".release-list-page .table-list-dropdown summary").click();
  await page.locator('[data-release-series="x"]').click();
  await page.locator("#releaseSearchInput").fill("BXG-03");

  const row = page.locator('.release-product-row[data-product-id="PRODUCT-X-BX-00-HELLS-SCYTHE-4-60T-GOLD"]');
  await expect(row).toBeVisible();
  const layout = await row.evaluate(element => {
    const cell = element.querySelector(".release-product-cell");
    const heading = element.querySelector(".release-product-heading");
    const titleRect = element.querySelector(".release-product-link").getBoundingClientRect();
    const badgeRect = element.querySelector(".release-badges").getBoundingClientRect();
    return {
      cellDisplay: getComputedStyle(cell).display,
      cellGap: Number.parseFloat(getComputedStyle(cell).columnGap),
      headingDisplay: getComputedStyle(heading).display,
      badgeGap: badgeRect.left - titleRect.right,
      titleCenter: titleRect.top + titleRect.height / 2,
      badgeCenter: badgeRect.top + badgeRect.height / 2,
      metaDisplay: getComputedStyle(element.querySelector(".mobile-row-meta")).display,
      previewDisplay: element.querySelector(".release-image-preview-button")
        ? getComputedStyle(element.querySelector(".release-image-preview-button")).display
        : "missing"
    };
  });

  expect(layout.cellDisplay).toBe("inline-flex");
  expect(layout.cellGap).toBeCloseTo(8, 1);
  expect(layout.headingDisplay).toBe("contents");
  expect(layout.badgeGap).toBeCloseTo(8, 1);
  expect(layout.badgeCenter).toBeCloseTo(layout.titleCenter, 1);
  expect(layout.metaDisplay).toBe("none");
  expect(layout.previewDisplay).toBe("missing");
  expect(errors).toEqual([]);
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
  const releaseRow = page.locator(".release-product-row").first();
  const rowRest = await visualState(releaseRow);
  await releaseRow.hover();
  expect(await visualState(releaseRow)).toEqual(rowRest);
  const releaseCell = releaseRow.locator("td").nth(1);
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
  await page.waitForTimeout(250);
  const closeRest = await visualState(closeButton);
  await closeButton.hover();
  expect(await visualState(closeButton)).toEqual(closeRest);
  expect(errors).toEqual([]);
});

test("mobile table rows use one parent highlight surface", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "fine-pointer responsive comparison only needs one browser project");
  const tableCases = [
    { route: "#toy-release", rowSelector: ".release-product-row" },
    { route: "#anime-episode", rowSelector: ".anime-episode-row" }
  ];
  const highlightState = row => row.evaluate(element => {
    const probe = document.createElement("i");
    probe.style.cssText = "position:fixed;background:var(--ui-control-hover)";
    document.body.append(probe);
    const visibleCells = [...element.querySelectorAll("td")].filter(cell => getComputedStyle(cell).display !== "none");
    const result = {
      rowBackground: getComputedStyle(element).backgroundColor,
      rowRadius: getComputedStyle(element).borderRadius,
      rowOutlineWidth: getComputedStyle(element).outlineWidth,
      expectedBackground: getComputedStyle(probe).backgroundColor,
      cellBackgrounds: visibleCells.map(cell => getComputedStyle(cell).backgroundColor)
    };
    probe.remove();
    return result;
  });
  const sameRgb = (actual, expected) =>
    actual.match(/[\d.]+/g)?.slice(0, 3).join(",") === expected.match(/[\d.]+/g)?.slice(0, 3).join(",");

  for (const width of [393, 430]) {
    await page.setViewportSize({ width, height: 852 });
    for (const { route, rowSelector } of tableCases) {
      await page.goto(`/${route}`);
      const row = page.locator(rowSelector).first();
      await expect(row).toBeVisible();
      await page.mouse.move(0, 0);

      const rest = await highlightState(row);
      expect(rest.rowBackground).toBe("rgba(0, 0, 0, 0)");
      expect(rest.cellBackgrounds.every(background => background === "rgba(0, 0, 0, 0)")).toBe(true);

      await row.hover();
      await expect.poll(async () => {
        const state = await highlightState(row);
        return {
          rowHighlighted: sameRgb(state.rowBackground, state.expectedBackground),
          cellsTransparent: state.cellBackgrounds.every(background => background === "rgba(0, 0, 0, 0)")
        };
      }).toEqual({ rowHighlighted: true, cellsTransparent: true });

      await page.mouse.move(0, 0);
      const action = row.locator(".table-list-row-action");
      await action.focus();
      await expect(action).toBeFocused();
      const focused = await highlightState(row);
      expect(sameRgb(focused.rowBackground, focused.expectedBackground)).toBe(true);
      expect(focused.cellBackgrounds.every(background => background === "rgba(0, 0, 0, 0)")).toBe(true);
      expect(Number.parseFloat(focused.rowRadius)).toBeGreaterThan(0);
      expect(Number.parseFloat(focused.rowOutlineWidth)).toBeGreaterThan(0);
    }
  }

  await page.setViewportSize({ width: 800, height: 900 });
  for (const { route, rowSelector } of tableCases) {
    await page.goto(`/${route}`);
    const row = page.locator(rowSelector).first();
    await expect(row).toBeVisible();
    await row.hover();
    await expect.poll(async () => {
      const state = await highlightState(row);
      return {
        rowTransparent: state.rowBackground === "rgba(0, 0, 0, 0)",
        cellsHighlighted: state.cellBackgrounds.every(background => sameRgb(background, state.expectedBackground))
      };
    }).toEqual({ rowTransparent: true, cellsHighlighted: true });
  }
});

test("topbar stays 72px and keeps search available from 640px", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "responsive viewport matrix only needs one browser project");

  for (const width of [360, 393, 639, 640, 709, 799, 800, 900, 1023, 1024, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/#toy-catalog");

    const topbar = page.locator(".topbar");
    await expect(topbar).toBeVisible();
    await expect(topbar).toHaveCSS("height", "72px");

    const brand = page.locator(".topbar > .brand");
    const primaryNav = page.locator(".topbar-primary-nav");
    const topbarSearch = page.locator(".topbar-search");
    const topbarSearchToggle = page.locator("#topbarSearchToggle");
    const menuButton = page.locator("#menuButton");

    if (width < 640) {
      await expect(page.locator(".mobile-topbar")).toBeVisible();
      await expect(brand).toBeHidden();
      await expect(primaryNav).toBeHidden();
      await expect(topbarSearch).toBeHidden();
      await expect(topbarSearchToggle).toBeHidden();
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

      if (width < 800) {
        await expect(topbarSearch).toBeHidden();
        await expect(topbarSearchToggle).toBeVisible();
      } else {
        await expect(topbarSearch).toBeVisible();
        await expect(topbarSearchToggle).toBeHidden();
      }

      const spacing = await page.evaluate(() => {
        const topbarRect = document.querySelector(".topbar").getBoundingClientRect();
        const brandRect = document.querySelector(".topbar > .brand").getBoundingClientRect();
        const navRect = document.querySelector(".topbar-primary-nav").getBoundingClientRect();
        const rightControl = window.innerWidth < 800
          ? document.querySelector("#topbarSearchToggle")
          : document.querySelector(".topbar-search");
        const rightControlRect = rightControl.getBoundingClientRect();
        return {
          brandNavGap: navRect.left - brandRect.right,
          navControlGap: rightControlRect.left - navRect.right,
          rightControlOverflow: rightControlRect.right - topbarRect.right
        };
      });
      expect(spacing.brandNavGap).toBeGreaterThanOrEqual(-1);
      expect(spacing.navControlGap).toBeGreaterThanOrEqual(-1);
      expect(spacing.rightControlOverflow).toBeLessThanOrEqual(1);
    }

    const bounds = await page.evaluate(() => ({
      documentWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth
    }));
    expect(bounds.documentWidth).toBeLessThanOrEqual(bounds.viewportWidth + 1);
  }
});

test("compact tablet search opens below the topbar and follows keyboard dismissal", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "compact topbar behavior only needs one browser project");
  await page.setViewportSize({ width: 709, height: 900 });
  await page.goto("/#toy-catalog");

  const toggle = page.locator("#topbarSearchToggle");
  const search = page.locator("#topbarSearch");
  const input = page.locator("#globalSearchInput");
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(search).toBeVisible();
  await expect(input).toBeFocused();
  await page.waitForTimeout(250);

  const openLayout = await page.evaluate(() => {
    const bar = document.querySelector(".topbar").getBoundingClientRect();
    const searchBox = document.querySelector("#topbarSearch").getBoundingClientRect();
    return {
      topbarHeight: bar.height,
      searchGap: searchBox.top - bar.bottom,
      searchRightOverflow: searchBox.right - window.innerWidth
    };
  });
  expect(openLayout.topbarHeight).toBe(72);
  expect(openLayout.searchGap).toBeGreaterThanOrEqual(7);
  expect(openLayout.searchRightOverflow).toBeLessThanOrEqual(0);

  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(search).toBeHidden();
  await expect(toggle).toBeFocused();

  await toggle.click();
  await page.locator("main").click({ position: { x: 4, y: 100 } });
  await expect(search).toBeHidden();

  await toggle.click();
  await page.setViewportSize({ width: 800, height: 900 });
  await expect(toggle).toBeHidden();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(search).toBeVisible();
});

test("topbar uses one opaque surface across responsive widths", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "responsive surface comparison only needs one browser project");

  for (const colorScheme of ["light", "dark"]) {
    await page.emulateMedia({ colorScheme });
    const backgrounds = [];
    for (const width of [393, 709, 800, 1024]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/#toy-catalog");
      const surface = await page.locator(".topbar").evaluate(element => {
        const probe = document.createElement("i");
        probe.style.cssText = "position:fixed;background:var(--ui-topbar-bg)";
        document.body.append(probe);
        const actual = getComputedStyle(element);
        const expectedBackground = getComputedStyle(probe).backgroundColor;
        probe.remove();
        return {
          background: actual.backgroundColor,
          expectedBackground,
          backdropFilter: actual.backdropFilter
        };
      });
      expect(surface.background).toBe(surface.expectedBackground);
      expect(surface.backdropFilter).toBe("none");
      backgrounds.push(surface.background);
    }
    expect(new Set(backgrounds).size).toBe(1);
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
