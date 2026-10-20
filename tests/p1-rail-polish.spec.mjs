import { expect, test } from "@playwright/test";

const catalogUrl = "/#toy-catalog?scope=bey&series=x";

test("P1 rail has deliberate text wrapping, consistent columns and no horizontal overflow", { tag: "@design-flow" }, async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop rail and responsive grid.");
  test.setTimeout(180_000);
  for (const width of [1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const scheme of ["light", "dark"]) {
      await page.emulateMedia({ colorScheme: scheme });
      await page.goto(catalogUrl);
      const rail = page.locator(".catalog-filter-rail");
      await expect(rail).toBeVisible();
      await expect(rail.locator('[data-rail-option="series"]')).toHaveCount(5);
      const metrics = await rail.evaluate(element => {
        const series = [...element.querySelectorAll('[data-rail-option="series"]')];
        const boxes = series.map(button => {
          const rect = button.getBoundingClientRect();
          const label = button.querySelector(".catalog-rail-option__text");
          const labelRect = label.getBoundingClientRect();
          const lineHeight = Number.parseFloat(getComputedStyle(label).lineHeight);
          return {
            text: label.textContent.trim(),
            buttonWidth: rect.width,
            labelWidth: labelRect.width,
            labelHeight: labelRect.height,
            lineHeight,
            buttonHeight: rect.height
          };
        });
        const groups = [...element.querySelectorAll(".catalog-rail-options")];
        return {
          railLeft: element.getBoundingClientRect().left,
          railRight: element.getBoundingClientRect().right,
          gridLeft: document.querySelector("#catalogGrid").getBoundingClientRect().left,
          railWidth: element.getBoundingClientRect().width,
          options: boxes,
          layouts: groups.map(group => ({ mode: group.dataset.railLayout, columns: getComputedStyle(group).gridTemplateColumns.split(" ").filter(Boolean).length })),
          pageWidth: document.documentElement.scrollWidth,
          viewportWidth: document.documentElement.clientWidth
        };
      });
      expect(metrics.railRight).toBeLessThan(metrics.gridLeft);
      expect(metrics.railWidth).toBeGreaterThanOrEqual(260);
      expect(metrics.pageWidth).toBeLessThanOrEqual(metrics.viewportWidth + 1);
      for (const item of metrics.options) {
        expect(item.buttonWidth, item.text + " should fill the rail").toBeGreaterThanOrEqual(220);
        expect(item.buttonHeight).toBeGreaterThanOrEqual(44);
        expect(item.labelHeight, item.text + " should stay on one line").toBeLessThanOrEqual(item.lineHeight + 2);
        expect(item.labelWidth).toBeGreaterThan(0);
      }
      expect(metrics.layouts[0].columns).toBe(1);
      expect(metrics.layouts[1].columns).toBe(2);
      await page.screenshot({
        path: testInfo.outputPath("catalog-rail-" + width + "-" + scheme + ".png"),
        animations: "disabled"
      });
    }
  }
});

test("P1 rail exposes generation-correct type names and preserves the catalog search behavior", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop rail interactions.");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(catalogUrl);
  const rail = page.locator(".catalog-filter-rail");
  await expect(rail.locator('[data-rail-group="system"]')).toBeVisible();
  await expect(rail.locator('[data-rail-option="system"][data-rail-value="커스텀라인"]')).toBeVisible();
  const attack = rail.locator('[data-rail-option="type"][data-rail-value="attack"]');
  await expect(attack).toHaveText("어택형");
  await attack.click();
  await expect(page.locator("#catalogSearchInput")).toHaveValue("어택형");
  await expect(attack).toHaveAttribute("aria-pressed", "true");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await expect(page.locator("#catalogCount")).not.toHaveText("0");
  await expect(rail.locator(".catalog-rail-status")).toContainText("조건 적용 중");
  await expect(rail.locator("[data-rail-reset]")).toBeEnabled();
  await rail.locator("[data-rail-reset]").click();
  await expect(page.locator("#catalogSearchInput")).toHaveValue("");
  await expect(page.locator("#catalogSeriesFilter")).toHaveAttribute("data-scope", "all");
  await expect(page.locator("#catalogSearchScope")).toHaveAttribute("data-scope", "all");
  await expect(rail.locator("[data-rail-reset]")).toBeDisabled();
  await expect(rail.locator('[data-rail-group="system"]')).toBeHidden();
});

test("P1 rail shows only relevant equipment and generation facets", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Desktop contextual facets.");
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.goto("/#toy-catalog?scope=parts&series=burst");
  const rail = page.locator(".catalog-filter-rail");
  await expect(rail.locator('[data-rail-group="system"]')).toBeVisible();
  await expect(rail.locator('[data-rail-option="system"][data-rail-value="진검레이어"]')).toBeVisible();
  await expect(rail.locator('[data-rail-option="system"][data-rail-value="베이직라인"]')).toBeHidden();
  await expect(rail.locator('[data-rail-group="type"]')).toBeHidden();
  await expect(rail.locator('[data-rail-group="spin"]')).toBeHidden();
  await rail.locator('[data-rail-option="system"][data-rail-value="진검레이어"]').click();
  await expect(page.locator("#catalogSearchInput")).toHaveValue("진검레이어");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();

  await rail.locator('[data-rail-option="scope"][data-rail-value="tools"]').click();
  await expect(rail.locator('[data-rail-group="tools"]')).toBeVisible();
  await expect(rail.locator('[data-rail-group="system"]')).toBeHidden();
  await expect(rail.locator('[data-rail-option="tools"][data-rail-value="런처"]')).toBeVisible();
  await rail.locator("[data-rail-reset]").click();
  await expect(page.locator("#catalogSearchInput")).toHaveValue("");
});

test("P1 rail remains keyboard operable and 768px returns to the existing compact filter", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "Breakpoint and focus contract.");
  await page.setViewportSize({ width: 1024, height: 680 });
  await page.goto(catalogUrl);
  const rail = page.locator(".catalog-filter-rail");
  await expect(rail).toBeVisible();
  const item = rail.locator('[data-rail-option="series"][data-rail-value="metal fight"]');
  await item.focus();
  await expect(item).toBeFocused();
  await expect(item).toHaveCSS("min-height", "44px");
  const outline = await item.evaluate(element => {
    const style = getComputedStyle(element);
    return { shadow: style.boxShadow, visible: element.matches(":focus-visible") };
  });
  expect(outline.visible).toBe(true);
  expect(outline.shadow).not.toBe("none");
  const railScroll = await rail.evaluate(element => ({
    maxScroll: element.scrollHeight - element.clientHeight,
    overflow: getComputedStyle(element).overflowY
  }));
  expect(railScroll.overflow).toBe("auto");
  expect(railScroll.maxScroll).toBeGreaterThan(0);
  await page.setViewportSize({ width: 768, height: 900 });
  await expect(rail).toBeHidden();
  await expect(page.locator("#catalogSeriesFilter")).toBeVisible();
});
