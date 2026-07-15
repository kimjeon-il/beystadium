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
        "BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF",
        "BEY-METAL-FIGHT-BB-32-STORM-PEGASIS-105RF",
        "BEY-METAL-FIGHT-BB-44-STORM-PEGASIS-100RF",
        "BEY-BURST-B-140-02-STORM-PEGASIS-10-G-QC-DASH",
        "BEY-BURST-B-151-05-STORM-PEGASIS-HR-AT",
        "BEY-BURST-B-176-07-STORM-PEGASIS-DR-HS",
        "BEY-X-BX-00-STORM-PEGASIS-3-70RA",
        "PART-BURST-LAYER-STORM-PEGASIS",
        "PART-X-BLADE-STORM-PEGASIS"
      ],
      orderedGroups: [
        ["BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF", "BEY-METAL-FIGHT-BB-32-STORM-PEGASIS-105RF", "BEY-METAL-FIGHT-BB-44-STORM-PEGASIS-100RF", "BEY-BURST-B-140-02-STORM-PEGASIS-10-G-QC-DASH", "BEY-BURST-B-151-05-STORM-PEGASIS-HR-AT", "BEY-BURST-B-176-07-STORM-PEGASIS-DR-HS"],
        ["PART-X-BLADE-STORM-PEGASIS", "BEY-X-BX-00-STORM-PEGASIS-3-70RA", "PART-BURST-LAYER-STORM-PEGASIS"]
      ]
    },
    {
      route: "/#search?q=BX-01&scope=all",
      query: "BX-01",
      scope: "all",
      expectedIds: [
        "BEY-X-BX-01-DRAN-SWORD-3-60F",
        "PRODUCT-X-BX-01"
      ],
      orderedGroups: [[
        "BEY-X-BX-01-DRAN-SWORD-3-60F",
        "PRODUCT-X-BX-01"
      ]]
    },
    {
      route: `/#search?q=${encodeURIComponent("ㅅㅌㅍㄱㅅㅅ")}&scope=bey`,
      query: "ㅅㅌㅍㄱㅅㅅ",
      scope: "bey",
      expectedIds: [
        "BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF",
        "BEY-METAL-FIGHT-BB-32-STORM-PEGASIS-105RF",
        "BEY-METAL-FIGHT-BB-44-STORM-PEGASIS-100RF",
        "BEY-BURST-B-140-02-STORM-PEGASIS-10-G-QC-DASH",
        "BEY-BURST-B-151-05-STORM-PEGASIS-HR-AT",
        "BEY-BURST-B-176-07-STORM-PEGASIS-DR-HS",
        "BEY-X-BX-00-STORM-PEGASIS-3-70RA",
        "PART-BURST-LAYER-STORM-PEGASIS",
        "PART-X-BLADE-STORM-PEGASIS"
      ],
      orderedGroups: [
        ["BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF", "BEY-METAL-FIGHT-BB-32-STORM-PEGASIS-105RF", "BEY-METAL-FIGHT-BB-44-STORM-PEGASIS-100RF", "BEY-BURST-B-140-02-STORM-PEGASIS-10-G-QC-DASH", "BEY-BURST-B-151-05-STORM-PEGASIS-HR-AT", "BEY-BURST-B-176-07-STORM-PEGASIS-DR-HS"],
        ["BEY-X-BX-00-STORM-PEGASIS-3-70RA", "PART-X-BLADE-STORM-PEGASIS", "PART-BURST-LAYER-STORM-PEGASIS"]
      ]
    },
    {
      route: `/#search?q=${encodeURIComponent("스톰 페가시스 105RF")}&scope=product`,
      query: "스톰 페가시스 105RF",
      scope: "product",
      expectedIds: ["PRODUCT-METAL-FIGHT-BB-28", "PRODUCT-METAL-FIGHT-BB-32", "PRODUCT-METAL-FIGHT-KR-METAL-PERFECT-MASTER-SET"],
      orderedGroups: [["PRODUCT-METAL-FIGHT-BB-28", "PRODUCT-METAL-FIGHT-BB-32", "PRODUCT-METAL-FIGHT-KR-METAL-PERFECT-MASTER-SET"]]
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

test("Judgement search uses the corrected English spelling and addresses", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "The same search data is shared by desktop and mobile layouts.");
  await page.goto(`/#search?q=${encodeURIComponent("Judgement")}&scope=bey`);
  await expect.poll(() => resultIds(page)).toEqual(expect.arrayContaining([
    "PART-BURST-GACHIBASE-JUDGEMENT",
    "PART-BURST-GACHILAYER-JUDGEMENT-ASHURA-METSU",
    "BEY-BURST-B-142-JUDGEMENT-JOKER-00T-TR-ZAN",
    "BEY-BURST-B-151-08-JUDGEMENT-PEGASUS-8-DASH-G-KP-DASH-METSU"
  ]));
  expect(await resultIds(page)).toEqual(expect.not.arrayContaining([
    "PART-BURST-GACHIBASE-JUDGMENT",
    "BEY-BURST-B-142-JUDGMENT-JOKER-00T-TR-ZAN"
  ]));
});
