import { expect, test } from "@playwright/test";

const consoleErrors = page => {
  const errors = [];
  page.on("console", message => {
    if (message.type() === "error" && !message.text().startsWith("Failed to load resource")) errors.push(message.text());
  });
  page.on("pageerror", error => errors.push(error.message));
  return errors;
};

test("primary routes render without runtime errors", async ({ page }) => {
  const errors = consoleErrors(page);
  for (const hash of ["", "#toy-catalog?scope=bey&series=x", "#toy-release", "#anime-character", "#anime-episode"]) {
    await page.goto(`/${hash}`);
    await expect(page.locator("html")).not.toHaveClass(/route-booting/);
    await expect(page.locator(".app-panel.active")).toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("runtime data is loaded by route instead of during home boot", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "request coverage only needs one browser");
  const runtimeRequests = [];
  const moduleRequests = [];
  page.on("request", request => {
    const pathname = new URL(request.url()).pathname;
    if (pathname.includes("/data/runtime/")) runtimeRequests.push(pathname);
    if (pathname.includes("/src/")) moduleRequests.push(pathname);
  });

  await page.goto("/");
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  expect(runtimeRequests).toContain("/data/runtime/index.json");
  expect(runtimeRequests.some(path => path.includes("/series/"))).toBe(false);
  expect(runtimeRequests.some(path => path.includes("/search/"))).toBe(false);
  expect(runtimeRequests).not.toContain("/data/runtime/registry.json");
  expect(moduleRequests).toContain("/src/bootstrap.js");
  expect(moduleRequests).toContain("/src/data-store.js");
  expect(moduleRequests).not.toContain("/src/app-entry.js");
  expect(moduleRequests).not.toContain("/src/router.js");

  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  expect(runtimeRequests).toContain("/data/runtime/series/x.json");
  expect(runtimeRequests.some(path => path.includes("/search/"))).toBe(false);
  expect(moduleRequests).toContain("/src/router.js");
  expect(moduleRequests).toContain("/src/catalog-core.js");
  expect(moduleRequests).not.toContain("/src/release-page.js");
  expect(moduleRequests).not.toContain("/src/anime.js");

  await page.goto("/#toy-release");
  await expect(page.locator(".release-product-row").first()).toBeVisible();
  expect(moduleRequests).toContain("/src/release-page.js");
  expect(moduleRequests).not.toContain("/src/anime.js");

  await page.goto("/#anime-character");
  await expect(page.locator('[data-app-panel="anime"].active')).toBeVisible();
  expect(moduleRequests).toContain("/src/anime.js");
});

test("detail route restores modal and internal navigation hash", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#PRODUCT-X-BX-01");
  await expect(page.locator("#detailModal")).toBeVisible();
  await page.reload();
  await expect(page.locator("#detailModal")).toBeVisible();
  const compositionLink = page.locator(".composition-link[data-target-id]");
  await expect(compositionLink.first()).toBeVisible();
  const target = await compositionLink.first().getAttribute("data-target-id");
  await compositionLink.first().click();
  await expect(page).toHaveURL(new RegExp(`#${target}$`));
  await expect(page.locator(".modal-back")).toBeVisible();
  expect(errors).toEqual([]);
});

test("mobile drawer opens and exposes category navigation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile-only behavior");
  const errors = consoleErrors(page);
  await page.goto("/");
  await page.locator("#menuButton").click();
  await expect(page.locator("#mobileDrawer")).toHaveAttribute("aria-hidden", "false");
  await expect(page.locator("[data-category-catalog-open]").last()).toBeVisible();
  expect(errors).toEqual([]);
});

test("responsive routes preserve hidden states and viewport bounds", async ({ page }) => {
  const errors = consoleErrors(page);
  for (const hash of ["#toy-catalog?scope=bey&series=x", "#toy-release", "#PRODUCT-X-BX-01"]) {
    await page.goto(`/${hash}`);
    await expect(page.locator("html")).not.toHaveClass(/route-booting/);

    const layout = await page.evaluate(() => ({
      hiddenLeaks: [...document.querySelectorAll("[hidden]")]
        .filter(element => getComputedStyle(element).display !== "none")
        .map(element => element.id || element.className || element.tagName),
      inactivePanelLeaks: [...document.querySelectorAll(".app-panel:not(.active)")]
        .filter(element => getComputedStyle(element).display !== "none")
        .map(element => element.dataset.appPanel || element.id),
      viewportWidth: document.documentElement.clientWidth,
      documentWidth: document.documentElement.scrollWidth
    }));

    expect(layout.hiddenLeaks).toEqual([]);
    expect(layout.inactivePanelLeaks).toEqual([]);
    expect(layout.documentWidth).toBeLessThanOrEqual(layout.viewportWidth + 1);
  }
  expect(errors).toEqual([]);
});

test("reduced motion disables route and control transitions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "motion coverage only needs one browser");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();

  const catalogMotion = await page.evaluate(() => ({
    panelAnimation: getComputedStyle(document.querySelector(".app-panel.active")).animationName,
    cardTransition: getComputedStyle(document.querySelector(".catalog-card")).transitionDuration
  }));
  expect(catalogMotion.panelAnimation).toBe("none");
  expect(catalogMotion.cardTransition).toBe("0.001s");

  await page.goto("/#PRODUCT-X-BX-01");
  await expect(page.locator("#detailModal")).toBeVisible();
  const modalAnimation = await page.locator(".modal-stage").evaluate(
    element => getComputedStyle(element).animationName
  );
  expect(modalAnimation).toBe("none");
});
