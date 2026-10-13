import { expect, test } from "@playwright/test";
import * as ui from "./helpers/ui-assertions.mjs";

test("pagination discovery tolerates moved items and fails explicitly for missing items", async ({ page }) => {
  expect(typeof ui.findPaginatedItem, "pagination discovery is missing").toBe("function");
  await page.setContent(`<section id="items"></section><nav id="pages">
    <button data-anime-page="1">1</button><button data-anime-page="2">2</button><button data-anime-page="3">3</button>
    </nav><script>
    const render = number => document.querySelector('#items').innerHTML = number === 3 ? '<button data-target>target</button>' : '<button>other</button>';
    render(1);
    document.querySelectorAll('[data-anime-page]').forEach(button => button.onclick = () => render(Number(button.dataset.animePage)));
    </script>`);
  const item = page.locator("[data-target]");
  await ui.findPaginatedItem(page, item, { pagination: "#pages" });
  await expect(item).toBeVisible();
  await expect(ui.findPaginatedItem(page, page.locator("[data-missing]"), { pagination: "#pages" })).rejects.toThrow(/not found/);
});

test("asset identity accepts new versions and rejects wrong paths or unversioned assets", async ({ page }) => {
  expect(typeof ui.expectVersionedAsset, "asset identity assertion is missing").toBe("function");
  await page.setContent('<img src="assets/current.webp?format=webp&v=future#preview">');
  const image = page.locator("img");
  await ui.expectVersionedAsset(image, "assets/current.webp");
  await expect(ui.expectVersionedAsset(image, "assets/wrong.webp")).rejects.toThrow();
  await image.evaluate(element => element.setAttribute("src", "assets/current.webp"));
  await expect(ui.expectVersionedAsset(image, "assets/current.webp")).rejects.toThrow();
});

test("current navigation accepts changed decoration while retaining state and usable targets", async ({ page }) => {
  expect(typeof ui.expectCurrentNavigation, "navigation assertion is missing").toBe("function");
  await page.setContent('<button aria-current="page" style="width:80px;height:60px;background:navy;color:white">Current</button>');
  const button = page.getByRole("button", { name: "Current" });
  await ui.expectCurrentNavigation(button);
  await button.evaluate(element => element.style.height = "10px");
  await expect(ui.expectCurrentNavigation(button)).rejects.toThrow();
});

test("primary navigation remains operable and shows the selected destination", async ({ page }, testInfo) => {
  await page.goto("/");
  const shell = testInfo.project.name === "mobile" ? ".mobile-bottom-nav" : ".topbar";
  for (const [attribute, hash, ready] of [
    ["data-category-catalog-open", "toy-catalog", "#catalogGrid .catalog-card"],
    ["data-category-release-open", "toy-release", ".release-product-row"],
    ["data-category-anime-open", "anime-character", ".anime-character-card"]
  ]) {
    const mobileMedia = testInfo.project.name === "mobile" && attribute === "data-category-anime-open";
    const button = page.locator(`${shell} [${mobileMedia ? "data-mobile-media-open" : attribute}]:visible`).first();
    await button.click();
    await expect(page).toHaveURL(new RegExp(`#${hash}`));
    await expect(page.locator(ready).first()).toBeVisible();
    await ui.expectCurrentNavigation(button);
    await ui.expectFocusIndicator(button);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
  }
});

test("mobile filter application and search stay operable across layout changes", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "mobile sheet flow");
  await page.goto("/#toy-catalog?scope=bey&series=x");
  await expect(page.locator("#catalogGrid .catalog-card").first()).toBeVisible();
  await page.locator("#mobileCatalogFilterOpen").click();
  const sheet = page.locator("#mobileCatalogFilters");
  await expect(sheet).toBeVisible();
  const option = sheet.locator('[data-mobile-filter-query]:not([data-mobile-filter-query=""]):visible').first();
  const query = await option.getAttribute("data-mobile-filter-query");
  await option.click();
  await sheet.locator("[data-mobile-filter-apply]").click();
  await expect(sheet).toBeHidden();
  await expect.poll(() => page.locator("#catalogSearchInput").inputValue()).toContain(query);
  await page.locator(".mobile-bottom-nav [data-mobile-search-open]").click();
  await expect(page.locator("#searchResultsSearchInput")).toBeFocused();
});

test("pagination reaches later pages when only previous and next controls are visible", async ({ page }) => {
  await page.setContent(`<section id="items"></section><nav id="pages"></nav><script>
    window.visits = [];
    function render(number) {
      document.querySelector('#items').innerHTML = number === 3 ? '<button data-target>target</button>' : 'other';
      document.querySelector('#pages').innerHTML = '<button data-anime-page="'+(number-1)+'" '+(number===1?'disabled':'')+'>prev</button>'
      + [1,2,3].map(value => '<button style="display:none" data-anime-page="'+value+'" '+(value===number?'aria-current="page"':'')+'>'+value+'</button>').join('')
      + '<button data-anime-page="'+(number+1)+'" '+(number===3?'disabled':'')+'>next</button>';
    }
    document.querySelector('#pages').onclick = event => { const number=Number(event.target.dataset.animePage); window.visits.push(number); render(number); };
    render(1);
    </script>`);
  await ui.findPaginatedItem(page, page.locator("[data-target]"), { pagination: "#pages" });
  expect(await page.evaluate(() => window.visits)).toEqual([2, 3]);
});

test("viewport containment accepts different margins and rejects off-screen shells", async ({ page }) => {
  await page.setContent('<div id="shell" style="position:fixed;left:20px;top:30px;width:100px;height:100px"></div>');
  const shell = page.locator("#shell");
  await ui.expectContainedInViewport(shell);
  await shell.evaluate(element => element.style.left = "-20px");
  await expect(ui.expectContainedInViewport(shell)).rejects.toThrow();
});

test("focus checks reset a matching hover indicator and reject a missing keyboard indicator", async ({ page }) => {
  await page.setContent('<style>button:hover, button:focus-visible { box-shadow: 0 0 0 3px blue; }</style><button>Focus</button>');
  const button = page.getByRole("button", { name: "Focus" });
  await button.hover();
  await button.focus();
  await ui.expectFocusIndicator(button);
  await page.locator("style").evaluate(element => element.textContent = 'button:hover { box-shadow: 0 0 0 3px blue; } button:focus-visible { outline: none; }');
  await expect(ui.expectFocusIndicator(button)).rejects.toThrow();
  for (const outline of ["2px solid transparent", "2px solid blue"]) {
    await page.locator("style").evaluate((element, value) => element.textContent = `button { outline: ${value}; }`, outline);
    await expect(ui.expectFocusIndicator(button)).rejects.toThrow();
  }
});

test("rendered detail identity follows a new hash before reading its content", async ({ page }) => {
  await page.goto("/#BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH");
  const modal = page.locator("#detailModal");
  await expect(modal).toHaveAttribute("data-detail-id", "BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH");
  await page.goto("/#BEY-METAL-FIGHT-BB-80-GRAVITY-PERSEUS-AD145WD");
  await expect(modal).toHaveAttribute("data-detail-id", "BEY-METAL-FIGHT-BB-80-GRAVITY-PERSEUS-AD145WD");
  await expect(modal.locator(".modal-name")).toHaveText("그라비티 페르세우스 AD145WD");
});
