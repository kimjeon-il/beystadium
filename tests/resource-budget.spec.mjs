import { expect, test } from "@playwright/test";
import { BASE_CSS_LIMIT, HOME_TEXT_LIMIT } from "../scripts/validation-budgets.mjs";
import { homeModulePaths, modulePath, seriesPaths, searchPaths, registryDataPath, stylePath } from "./helpers/app-resources.mjs";
import { observeTextRequests } from "./helpers/resource-observer.mjs";

test("cold home records actual text requests and preserves independent core budgets", { tag: "@resources" }, async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "one cold browser measures network payload");
  const observer = observeTextRequests(page, new URL(testInfo.project.use.baseURL).origin);
  const entries = observer.sizes;
  const core = new Set(["/", "/index.html", ...homeModulePaths, modulePath("#app/data-store"), stylePath("base"), stylePath("mobile"), "/data/runtime/index.json"]);
  const indexResponse = page.waitForResponse(response => new URL(response.url()).pathname === "/data/runtime/index.json");
  await page.goto("/");
  await indexResponse;
  await expect(page.locator("html")).not.toHaveClass(/route-booting/);
  await observer.drain();
  expect(observer.failures).toEqual([]);
  const paths = [...observer.paths];
  expect(paths.some(path => seriesPaths.includes(path) || searchPaths.includes(path) || path === registryDataPath)).toBe(false);
  expect(entries.has(modulePath("#app/data-store"))).toBe(true);
  const coreBytes = [...entries].filter(([path]) => core.has(path)).reduce((sum, [, bytes]) => sum + bytes, 0);
  expect(coreBytes).toBeLessThanOrEqual(HOME_TEXT_LIMIT);
  expect(entries.get(stylePath("base"))).toBeGreaterThan(0);
  expect(entries.get(stylePath("base"))).toBeLessThanOrEqual(BASE_CSS_LIMIT);
  const report = { coreBytes, allRequestedTextBytes: [...entries.values()].reduce((sum, bytes) => sum + bytes, 0), entries: Object.fromEntries(entries) };
  await testInfo.attach("startup-resource-report", { body: JSON.stringify(report, null, 2), contentType: "application/json" });
  console.log(`Startup text: ${report.coreBytes} core bytes; ${report.allRequestedTextBytes} total requested bytes.`);
});
