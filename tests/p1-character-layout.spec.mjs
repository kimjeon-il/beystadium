import { expect, test } from "@playwright/test";

test("Characters without descriptions keep used-Bey information close to the title", { tag: "@design-flow" }, async ({ page }, testInfo) => {
  test.setTimeout(90_000);
  for (const width of [390, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/#anime-character");
    const card = page.locator(".anime-character-card:not(:has(.anime-character-summary))").first();
    await expect(card).toBeVisible();
    const geometry = await card.evaluate(el => {
      const heading = el.querySelector(".anime-character-card__header").getBoundingClientRect();
      const beys = el.querySelector(".anime-character-beys").getBoundingClientRect();
      const cardRect = el.getBoundingClientRect();
      return {
        contentGap: beys.top - heading.bottom,
        cardHeight: cardRect.height,
        beysBottom: beys.bottom,
        cardBottom: cardRect.bottom,
        gridRows: getComputedStyle(el).gridTemplateRows.split(" ").length
      };
    });
    expect(geometry.contentGap, "Empty description must not reserve a blank flexible row").toBeLessThanOrEqual(20);
    expect(geometry.cardHeight).toBeGreaterThanOrEqual(width >= 640 ? 196 : 190);
    expect(geometry.beysBottom).toBeLessThanOrEqual(geometry.cardBottom);
    expect(geometry.gridRows).toBeGreaterThanOrEqual(2);
    await page.screenshot({ path: testInfo.outputPath("compact-characters-" + width + ".png"), animations: "disabled" });
  }
});
