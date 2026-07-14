import { expect, test } from "@playwright/test";

const resultIds = page => page.locator("#globalGrid .search-result-item").evaluateAll(items => items.map(item =>
  item.dataset.id || item.dataset.productId || item.dataset.toolsId || item.dataset.bookId || item.dataset.gameId || item.dataset.animeIndex
));

test("empty global search shows an idle prompt instead of result items", async ({ page }) => {
  for (const query of ["", "   "]) {
    await page.goto("about:blank");
    await page.goto(`/#search?q=${encodeURIComponent(query)}&scope=bey`);
    await expect(page.locator("#searchResultsSearchInput")).toHaveValue(query);
    await expect(page.locator(".search-results-summary")).toBeHidden();
    await expect(page.locator("#globalCount")).toHaveText("0");
    await expect(page.locator("#globalGrid [data-search-idle]")).toHaveText("검색어를 입력해주세요.");
    await expect(page.locator("#globalGrid .search-result-item, #globalGrid [data-search-results-page]")).toHaveCount(0);
  }

  await page.locator("#searchResultsSearchScope > summary").click();
  await page.locator('[data-search-results-search-scope="product"]').click();
  await expect(page.locator("#searchResultsSearchScope")).toHaveAttribute("data-scope", "product");
  await expect(page.locator("#globalGrid [data-search-idle]")).toHaveText("검색어를 입력해주세요.");

  await page.locator("#searchResultsSearchInput").fill("존재하지않는검색어");
  await expect(page.locator(".search-results-summary")).toBeVisible();
  await expect(page.locator("#globalCount")).toHaveText("0");
  await expect(page.locator("#globalGrid [data-search-idle]")).toHaveCount(0);
  await expect(page.locator("#globalGrid .search-empty")).toHaveText("검색결과가 없습니다.");
});

test("real search data keeps representative result IDs and ordering", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "The same search data is shared by desktop and mobile layouts.");

  const cases = [
    {
      route: `/#search?q=${encodeURIComponent("스톰 페가시스")}&scope=bey`,
      query: "스톰 페가시스",
      scope: "bey",
      expectedIds: [
        "BEY-BB-28-STORM-PEGASIS-105RF",
        "BEY-BB-32-STORM-PEGASIS-105RF",
        "BEY-BB-44-STORM-PEGASIS-100RF",
        "BEY-X-BX-00-JP-43",
        "LAYER-STORM-PEGASIS",
        "X-BLADE-STORM-PEGASIS"
      ],
      orderedGroups: [
        ["BEY-BB-28-STORM-PEGASIS-105RF", "BEY-BB-32-STORM-PEGASIS-105RF", "BEY-BB-44-STORM-PEGASIS-100RF"],
        ["X-BLADE-STORM-PEGASIS", "BEY-X-BX-00-JP-43", "LAYER-STORM-PEGASIS"]
      ]
    },
    {
      route: "/#search?q=BX-01&scope=all",
      query: "BX-01",
      scope: "all",
      expectedIds: ["BEY-X-BX-01", "PRODUCT-X-BX-01"],
      orderedGroups: [["BEY-X-BX-01", "PRODUCT-X-BX-01"]]
    },
    {
      route: `/#search?q=${encodeURIComponent("ㅅㅌㅍㄱㅅㅅ")}&scope=bey`,
      query: "ㅅㅌㅍㄱㅅㅅ",
      scope: "bey",
      expectedIds: [
        "BEY-BB-28-STORM-PEGASIS-105RF",
        "BEY-BB-32-STORM-PEGASIS-105RF",
        "BEY-BB-44-STORM-PEGASIS-100RF",
        "BEY-X-BX-00-JP-43",
        "LAYER-STORM-PEGASIS",
        "X-BLADE-STORM-PEGASIS"
      ],
      orderedGroups: [
        ["BEY-BB-28-STORM-PEGASIS-105RF", "BEY-BB-32-STORM-PEGASIS-105RF", "BEY-BB-44-STORM-PEGASIS-100RF"],
        ["BEY-X-BX-00-JP-43", "X-BLADE-STORM-PEGASIS", "LAYER-STORM-PEGASIS"]
      ]
    },
    {
      route: `/#search?q=${encodeURIComponent("스톰 페가시스 105RF")}&scope=product`,
      query: "스톰 페가시스 105RF",
      scope: "product",
      expectedIds: ["PRODUCT-BB-28", "PRODUCT-BB-32", "PRODUCT-KR-METAL-PERFECT-MASTER-SET"],
      orderedGroups: [["PRODUCT-BB-28", "PRODUCT-BB-32", "PRODUCT-KR-METAL-PERFECT-MASTER-SET"]]
    }
  ];

  for (const { route, query, scope, expectedIds, orderedGroups } of cases) {
    await page.goto("about:blank");
    await page.goto(route);
    await expect(page.locator("#searchResultsSearchInput")).toHaveValue(query);
    await expect(page.locator("#searchResultsSearchScope")).toHaveAttribute("data-scope", scope);
    await expect(page.locator("#globalCount")).toHaveText(String(expectedIds.length));
    await expect.poll(async () => (await resultIds(page)).toSorted()).toEqual(expectedIds.toSorted());
    const ids = await resultIds(page);
    for (const orderedGroup of orderedGroups) {
      expect(ids.filter(id => orderedGroup.includes(id))).toEqual(orderedGroup);
    }
  }
});
