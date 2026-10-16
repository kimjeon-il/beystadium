import { expect, test } from "@playwright/test";
import { waitForAnimations } from "./helpers/ui-assertions.mjs";

test("Sport-Tech follows OS theme changes without moving catalog layout", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  await waitForAnimations(page.locator(".catalog-panel.active"), { subtree: false });

  const readState = () => page.evaluate(() => ({
    background: getComputedStyle(document.body).backgroundColor,
    bounds: document.querySelector(".catalog-control-bar").getBoundingClientRect().toJSON()
  }));
  const lightState = await readState();
  await expect(page.locator("html")).not.toHaveAttribute("data-sport-theme");
  await expect(page.locator(".sport-theme-switch, [data-preview-mode]")).toHaveCount(0);

  await page.emulateMedia({ colorScheme: "dark" });
  await expect.poll(async () => (await readState()).background).not.toBe(lightState.background);
  await waitForAnimations(page.locator("body"), { subtree: false });
  const darkState = await readState();
  for (const key of ["x", "y", "width", "height"]) {
    expect(Math.abs(darkState.bounds[key] - lightState.bounds[key])).toBeLessThan(1);
  }
  await expect(page).toHaveURL(/\/#toy-catalog/);

  await page.emulateMedia({ colorScheme: "light" });
  await expect.poll(async () => (await readState()).background).toBe(lightState.background);
});

test("Preview theme buttons are absent on every main route", async ({ page }) => {
  for (const hash of ["", "#toy-catalog?scope=bey&series=x", "#toy-release", "#anime-character", "#anime-episode"]) {
    await page.goto(`/${hash}`);
    await expect(page.locator(".app-panel.active")).toBeVisible();
    await expect(page.locator(".sport-theme-switch, [data-preview-mode]")).toHaveCount(0);
    await expect(page.locator("html")).not.toHaveAttribute("data-sport-theme");
  }
});
