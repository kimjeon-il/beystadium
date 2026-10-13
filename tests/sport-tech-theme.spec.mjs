import { expect, test } from "@playwright/test";

test("Sport-Tech preview switches both themes without moving catalog layout", async ({ page }) => {
  await page.goto("/?theme=light#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();

  const lightState = await page.evaluate(() => ({
    background: getComputedStyle(document.body).backgroundColor,
    bounds: document.querySelector(".catalog-control-bar").getBoundingClientRect().toJSON()
  }));
  await expect(page.locator('html')).toHaveAttribute("data-sport-theme", "light");
  await expect(page.locator('[data-preview-mode="light"]')).toHaveAttribute("aria-pressed", "true");

  await page.locator('[data-preview-mode="dark"]').click();
  await expect(page.locator('html')).toHaveAttribute("data-sport-theme", "dark");
  await expect(page.locator('[data-preview-mode="dark"]')).toHaveAttribute("aria-pressed", "true");
  await expect(page).toHaveURL(/\?theme=dark#toy-catalog/);

  const darkState = await page.evaluate(() => ({
    background: getComputedStyle(document.body).backgroundColor,
    bounds: document.querySelector(".catalog-control-bar").getBoundingClientRect().toJSON()
  }));
  expect(darkState.background).not.toBe(lightState.background);
  for (const key of ["x", "y", "width", "height"]) {
    expect(Math.abs(darkState.bounds[key] - lightState.bounds[key])).toBeLessThan(1);
  }

  await page.reload();
  await expect(page.locator('html')).toHaveAttribute("data-sport-theme", "dark");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
});

test("Sport-Tech preview is present on every main route", async ({ page }) => {
  for (const hash of ["", "#toy-catalog?scope=bey&series=x", "#toy-release", "#anime-character", "#anime-episode"]) {
    await page.goto(`/?theme=dark${hash}`);
    await expect(page.locator(".app-panel.active")).toBeVisible();
    await expect(page.locator('html')).toHaveAttribute("data-sport-theme", "dark");
    await expect(page.locator('[data-preview-mode="light"]')).toBeVisible();
    await expect(page.locator('[data-preview-mode="dark"]')).toHaveAttribute("aria-pressed", "true");
  }
});
