import { expect, test } from "@playwright/test";
import { X_ASSET_CACHE_VERSION, consoleErrors, expectModalBackAtShellTopLeft, injectRegionalProductPreviewImages } from "./helpers/ui-assertions.mjs";

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
  await expectModalBackAtShellTopLeft(page.locator(".modal-back"));
  expect(errors).toEqual([]);
});

test("closing a detail modal restores its catalog scroll position", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#toy-catalog?scope=bey&series=x");
  const card = page.locator("#catalogGrid .catalog-card").nth(12);
  const action = card.locator(".catalog-card-action");
  await expect(action).toBeVisible();

  for (const closeMethod of ["button", "escape"]) {
    await card.scrollIntoViewIfNeeded();
    const expectedScrollY = await page.evaluate(() => Math.round(window.scrollY));
    expect(expectedScrollY).toBeGreaterThan(0);

    await action.click();
    await expect(page.locator("#detailModal")).toBeVisible();
    if (closeMethod === "button") await page.locator("#modalClose").click();
    else await page.keyboard.press("Escape");

    await expect(page.locator("#detailModal")).not.toBeVisible();
    await expect(page).toHaveURL(/#toy-catalog\?scope=bey&series=x/);
    await expect(page.locator("#catalogSeriesFilter")).toHaveAttribute("data-scope", "x");
    await expect(page.locator("#catalogSearchScope")).toHaveAttribute("data-scope", "bey");
    await expect.poll(async () => Math.abs(await page.evaluate(() => Math.round(window.scrollY)) - expectedScrollY))
      .toBeLessThanOrEqual(1);
  }

  await page.locator("[data-category-release-open]").first().evaluate(element => element.click());
  await expect(page.locator(".release-product-row").first()).toBeVisible();
  await expect.poll(() => page.evaluate(() => Math.round(window.scrollY))).toBe(0);
  expect(errors).toEqual([]);
});

test("Burst random booster products open their ordered Bey lineups", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "lineup data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-BURST-B-15",
      count: 8,
      firstId: "BEY-BURST-B-15-01-TRIDENT-H-C"
    },
    {
      productId: "PRODUCT-BURST-B-61",
      count: 8,
      firstId: "BEY-BURST-B-61-01-QUAD-QUETZALCOATL-J-P",
      lastId: "BEY-BURST-B-61-08-DRIGER-SLASH-H-F"
    },
    {
      productId: "PRODUCT-BURST-B-156",
      count: 8,
      firstId: "BEY-BURST-B-156-01-NAKED-SPRIGGAN-PR-OM-TEN"
    },
    {
      productId: "PRODUCT-BURST-B-181",
      count: 6,
      firstId: "BEY-BURST-B-181-01-CYCLONE-RAGNARUK-GG-NV-6",
      lastId: "BEY-BURST-B-181-06-BRAVE-WYVERN-10-NV-4A"
    },
    {
      productId: "PRODUCT-BURST-B-202",
      count: 5,
      firstId: "BEY-BURST-B-202-01-WIND-KNIGHT-MN-BN-6"
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const lineupTrigger = page.locator("#detailModal .product-lineup-trigger");
    await expect(lineupTrigger).toHaveText("무작위 베이 1개→");
    await lineupTrigger.click();
    const lineupLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(lineupLinks).toHaveCount(entry.count);
    await expect(lineupLinks.first()).toHaveAttribute("data-target-id", entry.firstId);
    if (entry.lastId) await expect(lineupLinks.last()).toHaveAttribute("data-target-id", entry.lastId);
    await lineupLinks.first().click();
    await expect(page).toHaveURL(new RegExp(`#${entry.firstId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
    await page.locator("#detailModal .modal-back").click();
    await expect(page.locator("#detailModal .product-lineup-trigger")).toHaveText("무작위 베이 1개→");
  }
  expect(errors).toEqual([]);
});

test("B-181 Dragoon V2 separates its mounted combination from the bundled 6 Armor", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "bundled part data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  await page.goto("/#PRODUCT-BURST-B-181");
  await page.locator("#detailModal .product-lineup-trigger").click();

  const dragoonLink = page.locator('#detailModal .composition-link[data-target-id="BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH"]');
  await expect(dragoonLink.locator("span")).toHaveText("마그마 리저드.Wh.Xc' + 6 아머");
  await dragoonLink.click();
  await expect(page).toHaveURL(/#BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH$/);
  await expect(page.locator("#detailModal .modal-name")).toHaveText("마그마 리저드.Wh.Xc'");

  const mountedLinks = page.locator("#detailModal .mounted-parts:not(.bundled-parts) .mounted-link");
  await expect(mountedLinks).toHaveCount(3);
  expect(await mountedLinks.evaluateAll(links => links.map(link => link.dataset.partId))).toEqual([
    "PART-BURST-LAYER-DRAGOON-V2",
    "PART-BURST-DISK-WHEEL",
    "PART-BURST-DRIVER-XCEED-DASH"
  ]);

  const bundledSection = page.locator("#detailModal .bundled-parts");
  await expect(bundledSection.locator(".mounted-title")).toHaveText("동봉 부품");
  const armorLink = bundledSection.locator(".mounted-link");
  await expect(armorLink).toHaveCount(1);
  await expect(armorLink).toHaveAttribute("data-part-id", "PART-BURST-DBARMOR-6");
  await expect(armorLink.locator("span")).toHaveText("아머");
  await expect(armorLink.locator("strong")).toHaveText("6");
  await armorLink.click();
  await expect(page).toHaveURL(/#PART-BURST-DBARMOR-6$/);
  await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));

  await page.goto("/#toy-release");
  await page.locator('[data-release-region="jp"]').click();
  await page.locator(".release-list-page .table-list-dropdown summary").click();
  await page.locator('[data-release-series="burst"]').click();
  await page.locator("#releaseSearchInput").fill("B-181");
  await page.locator('.release-product-row[data-product-id="PRODUCT-BURST-B-181"]').click();
  await page.locator("#detailModal .product-lineup-trigger").click();
  const japaneseDragoonLink = page.locator('#detailModal .composition-link[data-target-id="BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH"]');
  await expect(japaneseDragoonLink.locator("span")).toHaveText("드라군 V2.Wh.Xc' + 6 아머");
  await japaneseDragoonLink.click();
  await expect(page.locator("#detailModal .modal-name")).toHaveText("드라군 V2.Wh.Xc'");
  expect(errors).toEqual([]);
});

test("Metal Fight remake names switch between Korean releases and Japanese originals", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "regional remake data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productNo: "B-151",
      targetId: "BEY-BURST-B-151-02-LIGHTNING-L-DRAGO-10-R-Z-DASH",
      kr: "아쿠아 레비아단.10R.Z'",
      jp: "라이트닝 엘드라고.10R.Z'"
    },
    {
      productNo: "B-181",
      targetId: "BEY-BURST-B-181-04-HELL-KERBECS-GG-WV",
      kr: "다크 케르베로스.Gg.Wv",
      jp: "헬 케르벡스.Gg.Wv"
    },
    {
      productNo: "B-194",
      targetId: "BEY-BURST-B-194-06-GALAXY-PEGASIS-LG-X-DASH",
      kr: "스파크 슬레이프닐.Lg.X'",
      jp: "갤럭시 페가시스.Lg.X'"
    }
  ];

  const openRegionalBey = async (entry, region) => {
    await page.goto("/#toy-release");
    await page.locator(`button[data-release-region="${region}"]`).click();
    await page.locator(".release-list-page .table-list-dropdown summary").click();
    await page.locator('[data-release-series="burst"]').click();
    await page.locator("#releaseSearchInput").fill(entry.productNo);
    await page.locator(`.release-product-row[data-product-id="PRODUCT-BURST-${entry.productNo}"]`).click();
    await page.locator("#detailModal .product-lineup-trigger").click();
    const link = page.locator(`#detailModal .composition-link[data-target-id="${entry.targetId}"]`);
    await expect(link.locator("span")).toHaveText(entry[region]);
    await link.click();
    await expect(page.locator("#detailModal .modal-name")).toHaveText(entry[region]);
  };

  for (const entry of cases) {
    await openRegionalBey(entry, "kr");
    await openRegionalBey(entry, "jp");
  }
  expect(errors).toEqual([]);
});

test("X bey detail names use Japanese only from an explicit Japanese release context", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "regional X bey names are shared by desktop and mobile layouts");
  test.setTimeout(60_000);
  const errors = consoleErrors(page);
  const targetId = "BEY-X-UX-00-DRAN-BUSTER-1-60A";
  const koreanName = "드랜버스터 1-60A";
  const japaneseName = "드란버스터 1-60A";
  const domClick = locator => locator.evaluate(element => element.click());

  await page.goto(`/#${targetId}`);
  await expect(page.locator("#detailModal .modal-name")).toHaveText(koreanName);

  await page.goto("/#toy-release");
  await expect(page.locator("#releaseSearchInput")).toBeVisible();
  await domClick(page.locator('.release-region-tabs button[data-release-region="jp"]'));
  await domClick(page.locator(".release-list-page .table-list-dropdown summary"));
  await domClick(page.locator('[data-release-series="x"]'));
  await page.locator("#releaseSearchInput").fill("UX-00");
  await domClick(page.locator('.release-product-row[data-product-id="PRODUCT-X-UX-00-DRAN-BUSTER-1-60A"]'));
  const japaneseLink = page.locator(`#detailModal .composition-link[data-target-id="${targetId}"]`);
  await expect(japaneseLink.locator("span")).toContainText(japaneseName);
  await domClick(japaneseLink);
  await expect(page.locator("#detailModal .modal-name")).toHaveText(japaneseName);

  await page.goto("/#toy-release");
  await expect(page.locator("#releaseSearchInput")).toBeVisible();
  await domClick(page.locator('.release-region-tabs button[data-release-region="kr"]'));
  await domClick(page.locator(".release-list-page .table-list-dropdown summary"));
  await domClick(page.locator('[data-release-series="x"]'));
  await page.locator("#releaseSearchInput").fill("FC 바르셀로나");
  await domClick(page.locator('.release-product-row[data-product-id="PRODUCT-X-UX-00-DRAN-BUSTER-1-60A-FC-BARCELONA"]'));
  const koreanLink = page.locator(`#detailModal .composition-link[data-target-id="${targetId}"]`);
  await expect(koreanLink.locator("span")).toContainText(koreanName);
  await domClick(koreanLink);
  await expect(page.locator("#detailModal .modal-name")).toHaveText(koreanName);

  await page.goto("/#toy-release");
  await expect(page.locator("#releaseSearchInput")).toBeVisible();
  await domClick(page.locator('.release-region-tabs button[data-release-region="jp"]'));
  const searchHash = `#search?q=${encodeURIComponent(koreanName)}&scope=bey`;
  await page.evaluate(hash => {
    window.location.hash = hash;
  }, searchHash);
  const searchResult = page.locator(`#globalGrid .search-result-item[data-id="${targetId}"]`);
  await expect(searchResult).toBeVisible();
  await expect(searchResult.locator("strong")).toHaveText(koreanName);
  await domClick(searchResult);
  await expect(page.locator("#detailModal .modal-name")).toHaveText(koreanName);

  await page.goto("/#toy-release");
  await expect(page.locator("#releaseSearchInput")).toBeVisible();
  await domClick(page.locator('.release-region-tabs button[data-release-region="jp"]'));
  const catalogHash = `#toy-catalog?scope=bey&series=x&sort=latest&page=1&q=${encodeURIComponent(koreanName)}`;
  await page.evaluate(hash => {
    window.location.hash = hash;
  }, catalogHash);
  const catalogCard = page.locator(`.catalog-card[data-id="${targetId}"]`);
  await expect(catalogCard).toBeVisible();
  await expect(catalogCard.locator(".catalog-card-title")).toContainText(koreanName);
  await domClick(catalogCard.locator(".catalog-card-action"));
  await expect(page.locator("#detailModal .modal-name")).toHaveText(koreanName);

  expect(errors).toEqual([]);
});

test("X random booster products open their ordered Bey lineups", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "lineup data is shared by desktop and mobile layouts");
  test.setTimeout(60_000);
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-X-BX-48",
      count: 5,
      firstId: "BEY-X-BX-48-01-COBALT-DRAGOON-9-80F",
      lastId: "BEY-X-BX-48-05-DRAN-BUSTER-2-80Q"
    },
    {
      productId: "PRODUCT-X-CX-17",
      count: 6,
      firstId: "BEY-X-CX-17-01-UNICORN-DELTA-PO-3-60GU",
      lastId: "BEY-X-CX-17-06-CRIMSON-GARUDA-7-80GU"
    },
    {
      productId: "PRODUCT-X-CX-18",
      count: 3,
      firstId: "BEY-X-CX-18-01-BRACHIO-WHIP-OW-5-70NR",
      lastId: "BEY-X-CX-18-03-BRACHIO-WHIP-OW-5-70NR"
    },
    {
      productId: "PRODUCT-X-CX-19",
      count: 3,
      firstId: "BEY-X-CX-19-01-CROCO-TREAD-TQ-5-50GN",
      lastId: "BEY-X-CX-19-03-CROCO-TREAD-TQ-5-50GN"
    },
    {
      productId: "PRODUCT-X-BX-50",
      count: 6,
      firstId: "BEY-X-BX-50-01-HEAVENS-RING-0-80DS",
      lastId: "BEY-X-BX-50-06-KERBEROS-REAPER-B-0-80WB"
    },
    {
      productId: "PRODUCT-X-BX-00-LIGHTNING-L-DRAGO-1-60F",
      count: 2,
      firstId: "BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F",
      lastId: "BEY-X-BX-00-02-LIGHTNING-L-DRAGO-BARRAGE-1-60F"
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const lineupTrigger = page.locator("#detailModal .product-lineup-trigger");
    await expect(lineupTrigger).toHaveText("무작위 베이 1개→");
    await lineupTrigger.click();
    const lineupLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(page.locator("#detailModal .mounted-title")).toHaveText("등장 베이");
    await expect(lineupLinks).toHaveCount(entry.count);
    await expect(lineupLinks.first()).toHaveAttribute("data-target-id", entry.firstId);
    await expect(lineupLinks.last()).toHaveAttribute("data-target-id", entry.lastId);
    await lineupLinks.first().click();
    await expect(page).toHaveURL(new RegExp(`#${entry.firstId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
    await page.locator("#detailModal .modal-back").click();
    await expect(page.locator("#detailModal .product-lineup-trigger")).toHaveText("무작위 베이 1개→");
  }
  expect(errors).toEqual([]);
});

test("Burst random layer products open their ordered layer lineups", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "lineup data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-BURST-B-143",
      firstId: "PART-BURST-GACHILAYER-DREAD-BAHAMUT-TEN"
    },
    {
      productId: "PRODUCT-BURST-B-152",
      firstId: "PART-BURST-GACHILAYER-KNOCKOUT-ODIN-GEN"
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const lineupTrigger = page.locator("#detailModal .product-lineup-trigger");
    await expect(lineupTrigger).toHaveText("무작위 레이어 1개→");
    await lineupTrigger.click();
    const lineupLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(page.locator("#detailModal .mounted-title")).toHaveText("등장 레이어");
    await expect(lineupLinks).toHaveCount(4);
    await expect(lineupLinks.first()).toHaveAttribute("data-target-id", entry.firstId);
    await lineupLinks.first().click();
    await expect(page).toHaveURL(new RegExp(`#${entry.firstId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
    await page.locator("#detailModal .modal-back").click();
    await expect(page.locator("#detailModal .product-lineup-trigger")).toHaveText("무작위 레이어 1개→");
  }
  expect(errors).toEqual([]);
});

test("X tool products open their base equipment without color variants", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "tool data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-X-BX-00-XTREME-STADIUM-LIGHT-PACKAGE",
      name: "익스트림스타디움",
      targetId: "TOOLS-X-XTREME-STADIUM"
    },
    {
      productId: "PRODUCT-X-BX-28",
      name: "스트링런처",
      targetId: "TOOLS-X-STRING-LAUNCHER"
    },
    {
      productId: "PRODUCT-X-BX-00-CUSTOM-GRIP-CLEAR-BLACK",
      name: "커스텀그립",
      targetId: "TOOLS-X-CUSTOM-GRIP"
    },
    {
      productId: "PRODUCT-X-BX-32",
      name: "와이드익스트림스타디움",
      targetId: "TOOLS-X-WIDE-XTREME-STADIUM"
    },
    {
      productId: "PRODUCT-X-BX-00-PHOENIX-FEATHER-BLADE-ORANGE",
      name: "피닉스페더 블레이드",
      targetId: "TOOLS-X-PHOENIX-FEATHER-BLADE"
    },
    {
      productId: "PRODUCT-X-BX-00-DRAN-SWORD-BLADE-BLUE",
      name: "드란소드 블레이드",
      targetId: "TOOLS-X-DRAN-SWORD-BLADE"
    },
    {
      productId: "PRODUCT-X-BX-00-BEYBLADE-STICKER-02",
      name: "베이블레이드 스티커 02",
      targetId: "TOOLS-X-BEYBLADE-STICKER-02"
    },
    {
      productId: "PRODUCT-X-BX-41",
      name: "러버커스텀그립",
      targetId: "TOOLS-X-RUBBER-CUSTOM-GRIP"
    },
    {
      productId: "PRODUCT-X-BX-47",
      name: "스트링런처L",
      targetId: "TOOLS-X-STRING-LAUNCHER-L"
    },
    {
      productId: "PRODUCT-X-BX-51",
      name: "스트링런처",
      targetId: "TOOLS-X-STRING-LAUNCHER"
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const compositionLink = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(compositionLink).toHaveCount(1);
    await expect(compositionLink).toHaveText(`${entry.name} 1개→`);
    await expect(compositionLink).toHaveAttribute("data-target-id", entry.targetId);
    await compositionLink.click();
    await expect(page).toHaveURL(new RegExp(`#${entry.targetId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
  }
  expect(errors).toEqual([]);
});

test("Burst remake products render exact Bey and launcher compositions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "set data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    { productId: "PRODUCT-BURST-B-00-DRAGOON-STORM-W-X", count: 1, targetId: "BEY-BURST-B-00-DRAGOON-STORM-W-X" },
    { productId: "PRODUCT-BURST-B-00-DRAGOON-STORM-W-X-GOLD", count: 1, targetId: "BEY-BURST-B-00-DRAGOON-STORM-W-X-GOLD" },
    { productId: "PRODUCT-BURST-B-00-DRANZER-SPIRAL-S-T", count: 1, targetId: "BEY-BURST-B-00-DRANZER-SPIRAL-S-T" },
    { productId: "PRODUCT-BURST-B-00-LEGEND-STAR-BEY-SET", count: 7, targetIndex: 4, targetId: "BEY-BURST-B-00-STORM-PEGASIS-HR-L-DASH" },
    { productId: "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-20TH-ANNIVERSARY-SET", count: 9, targetId: "BEY-BURST-B-00-DRAGOON-STORM-W-X" },
    { productId: "PRODUCT-BURST-B-00-METAL-FIGHT-BEYBLADE-ANIME-10TH-ANNIVERSARY-SET", count: 7, targetIndex: 5, targetId: "TOOLS-BURST-LONG-BEYLAUNCHER" },
    { productId: "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2020-V-SET", count: 7, targetIndex: 4, targetId: "BEY-BURST-B-00-GAIA-DRAGOON-BURST-10-E-I" },
    { productId: "PRODUCT-BURST-B-00-METAL-FIGHT-BEYBLADE-2020-BAKU-SET", count: 7, targetIndex: 6, targetId: "TOOLS-BURST-LONG-BEYLAUNCHER-LR" },
    { productId: "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2023-V2-SET", count: 6, targetId: "BEY-BURST-B-00-DRAGOON-V2-WH-XP-DASH" }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const compositionLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(compositionLinks).toHaveCount(entry.count);
    const targetLink = compositionLinks.nth(entry.targetIndex || 0);
    await expect(targetLink).toHaveAttribute("data-target-id", entry.targetId);
    await targetLink.click();
    await expect(page).toHaveURL(new RegExp(`#${entry.targetId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
  }

  await page.goto("/#PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2023-V2-SET");
  await expect(page.locator('#detailModal .composition-link[data-target-id="TOOLS-BURST-LIGHT-LAUNCHER-LR"]')).toHaveText("라이트런처LR 2개→");
  await expect(page.locator('#detailModal .composition-link[data-target-id="TOOLS-BURST-LAUNCHER-GRIP"]')).toHaveText("런처그립 2개→");
  await page.goto("/#PRODUCT-BURST-B-00-LEGEND-STAR-BEY-SET");
  await expect(page.locator('#detailModal .composition-link[data-target-id="TOOLS-BURST-LONG-LIGHT-LAUNCHER-LR"]')).toHaveText("롱라이트런처LR 1개→");
  await expect(page.locator('#detailModal .composition-link[data-target-id="TOOLS-BURST-LAUNCHER-GRIP"]')).toHaveText("런처그립 1개→");
  expect(errors).toEqual([]);
});

test("X set products render Bey, part, tool, and quantity compositions", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "set data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    { productId: "PRODUCT-X-BX-09", count: 1, targetId: "TOOLS-X-BEY-BATTLE-LOGGER" },
    { productId: "PRODUCT-X-UX-10", count: 11, targetId: "BEY-X-UX-10-KNIGHT-MAIL-3-85BS" },
    { productId: "PRODUCT-X-BX-00-BEYBLADE-25TH-ANNIVERSARY-SET", count: 7, targetIndex: 3, targetId: "BEY-X-BX-00-DRAN-SWORD-3-60F" },
    { productId: "PRODUCT-X-BX-00-IRON-MAN-4-80B-THANOS-4-60P", count: 3, targetId: "BEY-X-BX-00-IRON-MAN-4-80B" },
    { productId: "PRODUCT-X-BX-00-T-REX-MOSASAURUS", count: 3, targetId: "BEY-X-BX-00-T-REX-1-80GB" },
    { productId: "PRODUCT-X-CX-00-EVANGELION-DECK-SET", count: 5, targetIndex: 4, targetId: "TOOLS-X-BEYBLADE-STORAGE-BOX" },
    { productId: "PRODUCT-X-CX-16", count: 4, targetId: "BEY-X-CX-16-BAHAMUT-BLITZ-BK-1-50I" }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const compositionLinks = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(compositionLinks).toHaveCount(entry.count);
    const targetLink = compositionLinks.nth(entry.targetIndex || 0);
    await expect(targetLink).toHaveAttribute("data-target-id", entry.targetId);
    await targetLink.click();
    await expect(page).toHaveURL(new RegExp(`#${entry.targetId}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
  }
  expect(errors).toEqual([]);
});

test("X 국내 공식 설명과 신규 한국 출시 구성이 상세·검색에 반영된다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "한국 공식 데이터는 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN");
  await expect(page.locator("#detailModal .modal-description")).toHaveText(
    "상대의 스매시 공격을 강하게 되돌리고 입체적인 형태의 날로 카운터를 만들어 전방위 방어 성능을 높인다."
  );

  await page.goto(`/#search?q=${encodeURIComponent("전방위 방어 성능")}&scope=bey`);
  await expect(page.locator('.search-results-panel .search-result-item[data-id="BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN"]')).toBeVisible();

  await page.goto("about:blank");
  await page.goto("/#PRODUCT-X-CX-11");
  await expect(page.locator("#detailModal .modal-name")).toHaveText("엠퍼러 마이트 덱 세트");
  const compositionLinks = page.locator("#detailModal .product-composition-list .composition-link");
  await expect(compositionLinks).toHaveCount(3);
  expect(await compositionLinks.evaluateAll((links) => links.map((link) => link.getAttribute("data-target-id")))).toEqual([
    "BEY-X-CX-11-EMPEROR-MIGHT-H-OP",
    "BEY-X-CX-11-SHARK-GILL-5-60FB",
    "BEY-X-CX-11-GOLEM-ROCK-M-85HN"
  ]);
  expect(errors).toEqual([]);
});

test("X 한국 발매목록은 기존 제품명과 보강된 출시 정보를 유지한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "한국 발매목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#toy-release");
  await page.locator('button[data-release-region="kr"]').click();
  await page.locator(".release-list-page .table-list-dropdown summary").click();
  await page.locator('[data-release-series="x"]').click();

  const cases = [
    ["UX-16", "PRODUCT-X-UX-16", "랜덤부스터 클락미라지 셀렉트", "2025년 12월", "₩15,900"],
    ["CX-16", "PRODUCT-X-CX-16", "스타트 대시 세트 C", "2026년 4월", "₩70,900"],
    ["UX-19", "PRODUCT-X-UX-19", "불릿그리폰 H", "2026년 7월", "₩19,900"],
    ["CX-18", "PRODUCT-X-CX-18", "랜덤부스터 브라키오 윕 셀렉트", "2026년 8월", ""],
    ["UX-20", "PRODUCT-X-UX-20", "글로리 발키리언LF", "2026년 8월", ""],
    ["BX-51", "PRODUCT-X-BX-51", "스트링런처 블랙×그린", "2026년 8월", ""]
  ];

  for (const [query, productId, name, date, price] of cases) {
    await page.locator("#releaseSearchInput").fill(query);
    const row = page.locator(`.release-product-row[data-product-id="${productId}"]`);
    await expect(row).toBeVisible();
    await expect(row.locator(".release-product-link")).toHaveText(name);
    await expect(row.locator(".release-date-full")).toHaveText(date);
    await expect(row.locator("td").nth(4)).toHaveText(price);
  }

  expect(errors).toEqual([]);
});

test("Accel parts, UX-10 composition, and search use the canonical Korean spelling", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "spelling data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const partCases = [
    ["PART-X-BIT-A", "액셀"],
    ["PART-X-BIT-RA", "러버 액셀"],
    ["PART-BURST-DRIVER-HIGH-ACCEL-DASH", "하이 액셀 대시"]
  ];

  for (const [id, name] of partCases) {
    await page.goto("about:blank");
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal .modal-name")).toHaveText(name);
  }

  await page.goto("/#PRODUCT-X-UX-10");
  const rubberAccelLink = page.locator('#detailModal .composition-link[data-target-id="PART-X-BIT-RA"]');
  await expect(rubberAccelLink).toHaveText("러버 액셀 1개→");
  await rubberAccelLink.click();
  await expect(page).toHaveURL(/#PART-X-BIT-RA$/);
  await expect(page.locator("#detailModal .modal-name")).toHaveText("러버 액셀");

  await page.goto(`/#search?q=${encodeURIComponent("액셀")}&scope=all`);
  await expect(page.locator('.search-results-panel .search-result-item[data-id="PART-X-BIT-A"]')).toBeVisible();
  await expect(page.locator(".search-results-panel")).not.toContainText("엑셀");
  expect(errors).toEqual([]);
});

test("X over and assist blade codes use their Korean full names in details", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "coded part names are shared by desktop and mobile layouts");
  const errors = consoleErrors(page);

  await page.goto(`/#toy-catalog?scope=parts&series=x&q=${encodeURIComponent("슬래시")}`);
  const slashCard = page.locator('#catalogGrid .catalog-card[data-id="PART-X-BLADE-ASSIST-BLADE-SLASH"]');
  await expect(slashCard).toBeVisible();
  await expect(slashCard.locator(".card-name")).toHaveClass(/code-name/);
  await expect(slashCard.locator(".catalog-card-title")).toHaveText("S");
  await expect(slashCard.locator(".card-full-en")).toHaveText("Slash");
  await expect(slashCard.locator(".card-full-ko")).toHaveText("슬래시");

  const codedCases = [
    ["PART-X-BLADE-ASSIST-BLADE-SLASH", "슬래시"],
    ["PART-X-BLADE-OVER-BLADE-BRAKE", "브레이크"],
    ["PART-X-BLADE-ASSIST-BLADE-ODD", "오드"],
    ["PART-X-BIT-A", "액셀"],
    ["PART-METAL-FIGHT-TRACK-CLAW-145", "클로145"]
  ];
  for (const [id, name] of codedCases) {
    await page.goto("about:blank");
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal .modal-name")).toHaveText(name);
  }

  const properNameCases = [
    ["PART-X-BLADE-LOCK-CHIP-DRAN", "드랜"],
    ["PART-X-BLADE-MAIN-BLADE-BRAVE", "브레이브"],
    ["PART-X-BLADE-MAIN-BLADE-BLITZ", "블리츠"]
  ];
  for (const [id, name] of properNameCases) {
    await page.goto("about:blank");
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal .modal-name")).toHaveText(name);
  }

  expect(errors).toEqual([]);
});

test("X gold part products link to their base parts", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "part product data is shared by desktop and mobile layouts");
  const errors = consoleErrors(page);
  const cases = [
    {
      productId: "PRODUCT-X-BX-00-NIGHT-SHIELD-GOLD",
      names: ["나이트실드"],
      targetIds: ["PART-X-BLADE-KNIGHT-SHIELD"]
    },
    {
      productId: "PRODUCT-X-BX-00-F-T-B-N-BIT-SET-GOLD-BLACK",
      names: ["F", "T", "B", "N"],
      targetIds: ["PART-X-BIT-F", "PART-X-BIT-T", "PART-X-BIT-B", "PART-X-BIT-N"]
    }
  ];

  for (const entry of cases) {
    await page.goto("about:blank");
    await page.goto(`/#${entry.productId}`);
    const links = page.locator("#detailModal .product-composition-list .composition-link");
    await expect(links).toHaveCount(entry.targetIds.length);
    await expect(links).toHaveText(entry.names.map(name => `${name} 1개→`));
    expect(await links.evaluateAll(elements => elements.map(element => element.getAttribute("data-target-id"))))
      .toEqual(entry.targetIds);
    await links.first().click();
    await expect(page).toHaveURL(new RegExp(`#${entry.targetIds[0]}$`));
    await expectModalBackAtShellTopLeft(page.locator("#detailModal .modal-back"));
  }
  expect(errors).toEqual([]);
});

test("mounted part names use the restored compact label column", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#BEY-METAL-FIGHT-BB-80-GRAVITY-PERSEUS-AD145WD");
  await expect(page.locator("#detailModal")).toBeVisible();

  const links = page.locator("#detailModal .mounted-parts .mounted-link");
  await expect(links).toHaveCount(5);
  await expect(links.locator("strong")).toHaveText(["페르세우스", "페르세우스", "그라비티", "AD145", "WD"]);
  const rows = await links.evaluateAll(elements => elements.map(element => {
    const name = element.querySelector("strong");
    const nameStyle = getComputedStyle(name);
    return {
      arrow: element.querySelector("b")?.textContent,
      firstColumn: Number.parseFloat(getComputedStyle(element).gridTemplateColumns),
      nameLines: name.getBoundingClientRect().height / Number.parseFloat(nameStyle.lineHeight)
    };
  }));
  rows.forEach(row => {
    expect(row.firstColumn).toBe(84);
    expect(row.nameLines).toBeLessThanOrEqual(1.1);
    expect(row.arrow).toBe("→");
  });

  await links.first().click();
  await expect(page).toHaveURL(/#PART-METAL-FIGHT-FACE-PERSEUS$/);
  expect(errors).toEqual([]);
});

test("long X blade role labels wrap without overlapping mounted part names", async ({ page }) => {
  const errors = consoleErrors(page);
  const routes = [
    "BEY-X-CX-01-DRAN-BRAVE-S-6-60V",
    "BEY-X-CX-13-BAHAMUT-BLITZ-BK-1-50I"
  ];

  for (const id of routes) {
    await page.goto(`/#${id}`);
    await expect(page.locator("#detailModal")).toBeVisible();
    const links = page.locator("#detailModal .mounted-parts:not(.bundled-parts) .mounted-link");
    const rows = await links.evaluateAll(elements => elements.map(element => {
      const label = element.querySelector("span");
      const name = element.querySelector("strong");
      const labelRange = document.createRange();
      const nameRange = document.createRange();
      labelRange.selectNodeContents(label);
      nameRange.selectNodeContents(name);
      const labelRect = labelRange.getBoundingClientRect();
      const nameRect = nameRange.getBoundingClientRect();
      return {
        label: label.textContent,
        firstColumn: Number.parseFloat(getComputedStyle(element).gridTemplateColumns),
        labelRight: labelRect.right,
        nameLeft: nameRect.left,
        nameLineCount: nameRange.getClientRects().length,
        breakCount: label.querySelectorAll("wbr").length
      };
    }));

    rows.forEach(row => {
      expect(row.firstColumn).toBe(84);
      expect(row.labelRight).toBeLessThanOrEqual(row.nameLeft);
      expect(row.nameLineCount).toBe(1);
      if (row.label.endsWith("블레이드")) expect(row.breakCount).toBe(1);
    });
  }
  expect(errors).toEqual([]);
});

test("release detail back button stays at the modal shell corner", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#toy-release");
  const releaseLink = page.locator(".release-product-link").first();
  await expect(releaseLink).toBeVisible();
  await releaseLink.click();
  await expect(page.locator("#detailModal")).toBeVisible();

  const backButton = page.locator("#detailModal .modal-back[data-back-release]");
  await expectModalBackAtShellTopLeft(backButton);
  await backButton.click();
  await expect(page.locator('[data-app-panel="release"].active')).toBeVisible();
  expect(errors).toEqual([]);
});

test("long part descriptions use an accessible chevron expander", async ({ page }, testInfo) => {
  const errors = consoleErrors(page);
  await page.goto("/#PART-BURST-DBLAYER-GREATEST-RAPHAEL");
  await expect(page.locator("#detailModal")).toBeVisible();

  const slot = page.locator("#detailModal .part-modal-info .modal-info-slot");
  const description = slot.locator(".modal-description");
  const toggle = slot.locator(".modal-description-toggle");
  const expanderGeometry = () => slot.evaluate(element => {
    const region = element.querySelector(".modal-description-region");
    const description = element.querySelector(".modal-description");
    const button = element.querySelector(".modal-description-toggle");
    const regionRect = region.getBoundingClientRect();
    const descriptionRect = description.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();
    const buttonStyle = getComputedStyle(button);
    const hoverSurfaceStyle = getComputedStyle(button, "::after");
    const regionStyle = getComputedStyle(region);
    const paddingBottom = Number.parseFloat(regionStyle.paddingBottom);
    const expectedRegionHeight = descriptionRect.height
      + Number.parseFloat(regionStyle.paddingTop)
      + paddingBottom
      + Number.parseFloat(regionStyle.borderTopWidth)
      + Number.parseFloat(regionStyle.borderBottomWidth);
    return {
      backgroundColor: buttonStyle.backgroundColor,
      borderStyle: buttonStyle.borderTopStyle,
      borderWidth: buttonStyle.borderTopWidth,
      buttonHeight: buttonRect.height,
      buttonWidth: buttonRect.width,
      expectedRegionHeight,
      hoverSurfaceBackgroundColor: hoverSurfaceStyle.backgroundColor,
      hoverSurfaceHeight: Number.parseFloat(hoverSurfaceStyle.height),
      hoverSurfaceLeft: Number.parseFloat(hoverSurfaceStyle.left),
      hoverSurfaceTop: Number.parseFloat(hoverSurfaceStyle.top),
      hoverSurfaceWidth: Number.parseFloat(hoverSurfaceStyle.width),
      horizontalOffset: (buttonRect.left + buttonRect.width / 2) - (regionRect.left + regionRect.width / 2),
      paddingBottom,
      regionContainsButton: region.contains(button),
      regionHeight: regionRect.height,
      regionOwnsButton: button.parentElement === region,
      verticalOffset: (buttonRect.top + buttonRect.height / 2) - regionRect.bottom
    };
  });
  await expect(slot).toHaveClass(/is-expandable/);
  await expect(toggle).toBeVisible();
  await expect(toggle).toHaveText("");
  await expect(toggle).toHaveAttribute("aria-label", "부품 설명 펼치기");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  const collapsed = await description.evaluate(element => ({
    height: element.getBoundingClientRect().height,
    lineClamp: getComputedStyle(element).webkitLineClamp
  }));
  const collapsedChevron = await toggle.evaluate(element => getComputedStyle(element, "::before").transform);
  const collapsedGeometry = await expanderGeometry();
  expect(collapsed.lineClamp).toBe("2");
  expect(collapsedGeometry.regionContainsButton).toBe(true);
  expect(collapsedGeometry.regionOwnsButton).toBe(true);
  expect(Math.abs(collapsedGeometry.horizontalOffset)).toBeLessThanOrEqual(1);
  expect(Math.abs(collapsedGeometry.verticalOffset + collapsedGeometry.paddingBottom / 2)).toBeLessThanOrEqual(1);
  expect(Math.abs(collapsedGeometry.regionHeight - collapsedGeometry.expectedRegionHeight)).toBeLessThanOrEqual(1);
  expect(collapsedGeometry.backgroundColor).toBe("rgba(0, 0, 0, 0)");
  expect(collapsedGeometry.borderStyle).toBe("none");
  expect(collapsedGeometry.borderWidth).toBe("0px");
  expect(collapsedGeometry.buttonWidth).toBeCloseTo(44, 1);
  expect(collapsedGeometry.buttonHeight).toBeCloseTo(32, 1);
  expect(collapsedGeometry.hoverSurfaceBackgroundColor).toBe("rgba(0, 0, 0, 0)");
  expect(collapsedGeometry.hoverSurfaceWidth).toBeCloseTo(28, 1);
  expect(collapsedGeometry.hoverSurfaceHeight).toBeCloseTo(24, 1);
  expect(collapsedGeometry.hoverSurfaceLeft).toBeCloseTo(8, 1);
  expect(collapsedGeometry.hoverSurfaceTop).toBeCloseTo(4, 1);

  await toggle.hover();
  const hoveredGeometry = await expanderGeometry();
  const hoverColor = await toggle.evaluate(() => {
    const probe = document.createElement("i");
    probe.style.cssText = "position:fixed;background:var(--ui-control-hover)";
    document.body.append(probe);
    const color = getComputedStyle(probe).backgroundColor;
    probe.remove();
    return color;
  });
  expect(hoveredGeometry.backgroundColor).toBe("rgba(0, 0, 0, 0)");
  await expect.poll(() => toggle.evaluate(element => getComputedStyle(element, "::after").backgroundColor))
    .toBe(testInfo.project.name === "mobile" ? "rgba(0, 0, 0, 0)" : hoverColor);

  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(slot).toHaveClass(/is-expanded/);
  await expect(toggle).toHaveAttribute("aria-label", "부품 설명 접기");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  const expandedHeight = await description.evaluate(element => element.getBoundingClientRect().height);
  expect(expandedHeight).toBeGreaterThan(collapsed.height + 1);
  const expandedGeometry = await expanderGeometry();
  expect(Math.abs(expandedGeometry.horizontalOffset)).toBeLessThanOrEqual(1);
  expect(Math.abs(expandedGeometry.verticalOffset + expandedGeometry.paddingBottom / 2)).toBeLessThanOrEqual(1);
  expect(Math.abs(expandedGeometry.regionHeight - expandedGeometry.expectedRegionHeight)).toBeLessThanOrEqual(1);
  await expect.poll(() => toggle.evaluate(element => getComputedStyle(element, "::before").transform))
    .not.toBe(collapsedChevron);

  await page.keyboard.press("Enter");
  await expect(slot).not.toHaveClass(/is-expanded/);
  await expect(toggle).toHaveAttribute("aria-label", "부품 설명 펼치기");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");

  await page.goto("/#PART-X-BLADE-DRAN-SWORD");
  await expect(page.locator("#detailModal")).toBeVisible();
  const shortToggle = page.locator("#detailModal .part-modal-info .modal-description-toggle");
  await expect(shortToggle).toBeHidden();
  expect(errors).toEqual([]);
});

test("초제트 방영목록은 51개 회차와 검색·상세 주소를 제공한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "초제트 방영목록은 데스크톱 대표 화면에서 확인합니다.");
  const errors = consoleErrors(page);

  await page.goto("/#anime-episode");
  await page.locator(".anime-episode-controls .table-list-dropdown summary").click();
  await page.locator('[data-anime-season="burst-cho-z"]').click();

  const rows = page.locator(".anime-episode-row");
  await expect(rows).toHaveCount(51);
  await expect(rows.first().locator("td").nth(0)).toHaveText("1화");
  await expect(rows.first().locator(".anime-episode-title")).toHaveText("이게 바로 초제트 베이야!");
  await expect(rows.first().locator(".anime-air-date-full")).toHaveText("2018년 6월 18일");
  await expect(rows.last().locator("td").nth(0)).toHaveText("51화");
  await expect(rows.last().locator(".anime-episode-title")).toHaveText("유대감! 서아진 대 강산!!");
  await expect(rows.last().locator(".anime-air-date-full")).toHaveText("2019년 6월 3일");

  await page.locator("#animeEpisodeSearchInput").fill("전율! 데드그랑의 함정!!");
  await expect(page.locator(".anime-episode-row")).toHaveCount(1);
  await expect(page.locator(".anime-episode-title")).toHaveText("전율! 데드그랑의 함정!!");

  await page.locator("#animeEpisodeSearchInput").fill("");
  await page.locator(".anime-episode-row").first().click();
  await expect(page).toHaveURL(/#BURST-CHO-Z-EPISODE-1$/);
  await expect(page.locator("#detailModal .product-modal-name")).toHaveText("1화 이게 바로 초제트 베이야!");
  await page.locator("#detailModal .modal-back[data-back-anime-episodes]").click();
  await expect(page.locator('[data-anime-season="burst-cho-z"].active')).toHaveCount(1);
  await expect(page.locator(".anime-episode-row")).toHaveCount(51);
  expect(errors).toEqual([]);
});

test("static details use a single-column layout without a photo pane", async ({ page }, testInfo) => {
  const errors = consoleErrors(page);
  await page.goto("/#BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF");
  await expect(page.locator("#detailModal")).toBeVisible();

  const shell = page.locator("#detailModal .modal-inner--content");
  await expect(shell).toBeVisible();
  await expect(shell.locator(".modal-art")).toHaveCount(0);
  const layout = await shell.evaluate(element => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    return {
      width: Math.round(rect.width),
      columns: style.gridTemplateColumns.split(" ").filter(Boolean).length,
      radius: style.borderTopLeftRadius
    };
  });
  expect(layout.columns).toBe(1);
  expect(layout.radius).toBe(testInfo.project.name === "mobile" ? "0px" : "24px");
  if (testInfo.project.name === "desktop") expect(Math.abs(layout.width - 720)).toBeLessThanOrEqual(1);
  expect(errors).toEqual([]);
});

test("composition sections use nested desktop scrolling and one modal-body mobile scroll", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "representative viewport coverage only needs one browser project");
  const errors = consoleErrors(page);
  const viewports = [
    { width: 1280, height: 720 },
    { width: 768, height: 650 },
    { width: 393, height: 727 },
    { width: 360, height: 640 }
  ];

  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto("/#BEY-X-CX-13-BAHAMUT-BLITZ-BK-1-50I");
    const mountedList = page.locator("#detailModal .mounted-parts-list");
    await expect(mountedList.locator(".mounted-link")).toHaveCount(6);
    const mountedLayout = await mountedList.evaluate(element => {
      const scrollArea = element.closest(".modal-scroll-area");
      return {
        clientHeight: element.clientHeight,
        scrollHeight: element.scrollHeight,
        outerClientHeight: scrollArea.clientHeight,
        outerScrollHeight: scrollArea.scrollHeight
      };
    });
    expect(mountedLayout.scrollHeight).toBeLessThanOrEqual(mountedLayout.clientHeight + 1);
    if (viewport.width > 639) {
      expect(mountedLayout.outerScrollHeight).toBeLessThanOrEqual(mountedLayout.outerClientHeight + 1);
    }

    await page.goto("/#PRODUCT-X-UX-10");
    const productList = page.locator("#detailModal .product-composition-list");
    await expect(productList.locator(".product-composition-item")).toHaveCount(11);
    const productLayout = await productList.evaluate(element => {
      const rows = Array.from(element.children);
      const listRect = element.getBoundingClientRect();
      const scrollArea = element.closest(".modal-scroll-area");
      return {
        clientHeight: element.clientHeight,
        scrollHeight: element.scrollHeight,
        outerClientHeight: scrollArea.clientHeight,
        outerScrollHeight: scrollArea.scrollHeight,
        seventhVisible: rows[6].getBoundingClientRect().bottom <= listRect.bottom + 1,
        eighthVisible: rows[7].getBoundingClientRect().bottom <= listRect.bottom + 1,
        ninthClipped: rows[8].getBoundingClientRect().bottom > listRect.bottom + 1
      };
    });
    if (viewport.width <= 639) {
      expect(productLayout.clientHeight).toBe(productLayout.scrollHeight);
      expect(productLayout.clientHeight).toBeGreaterThan(288);
      expect(productLayout.outerScrollHeight).toBeGreaterThan(productLayout.outerClientHeight);
      expect(productLayout.eighthVisible).toBe(true);
      expect(productLayout.ninthClipped).toBe(false);
    } else {
      expect(productLayout.clientHeight).toBeGreaterThanOrEqual(280);
      expect(productLayout.clientHeight).toBeLessThanOrEqual(288);
      expect(productLayout.scrollHeight).toBeGreaterThan(productLayout.clientHeight);
      expect(productLayout.outerScrollHeight).toBeLessThanOrEqual(productLayout.outerClientHeight + 1);
      expect(productLayout.seventhVisible).toBe(true);
      expect(productLayout.eighthVisible).toBe(viewport.width >= 1024);
      expect(productLayout.ninthClipped).toBe(true);
    }
  }
  expect(errors).toEqual([]);
});

test("hidden 3D model details use the shared content modal while retaining their source data", async ({ page }, testInfo) => {
  const runtimeRequests = [];
  page.on("request", request => runtimeRequests.push(request.url()));
  await page.goto("/#PART-METAL-FIGHT-BOTTOM-BALL");
  await expect(page.locator("#detailModal")).toBeVisible();
  const shell = page.locator("#detailModal .modal-inner--content");
  await expect(shell).toBeVisible();
  await expect(shell.locator(".modal-art, .model-viewer")).toHaveCount(0);
  const layout = await shell.evaluate(element => {
    const rect = element.getBoundingClientRect();
    return {
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      columns: getComputedStyle(element).gridTemplateColumns.split(" ").filter(Boolean).length
    };
  });
  expect(layout.columns).toBe(1);
  if (testInfo.project.name === "desktop") {
    expect(Math.abs(layout.width - 720)).toBeLessThanOrEqual(1);
    expect(Math.abs(layout.height - 620)).toBeLessThanOrEqual(1);
  }

  const response = await page.request.get("/data/runtime/series/metal-fight.json");
  expect(response.ok()).toBe(true);
  const data = await response.json();
  const ballBottom = data.partItems.find(item => item.id === "PART-METAL-FIGHT-BOTTOM-BALL");
  expect(ballBottom.model).toBe("assets/models/BO_B.obj");
  const modelResponse = await page.request.get(`/${ballBottom.model}`);
  expect(modelResponse.ok()).toBe(true);
  expect(runtimeRequests.some(url => /esm\.sh\/three|OBJLoader|OrbitControls/.test(url))).toBe(false);
});

test("regional product and linked card images appear in rounded previews", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "pointer preview coverage only needs one fine-pointer browser");
  const errors = consoleErrors(page);
  await injectRegionalProductPreviewImages(page);
  await page.goto("/#toy-release");
  await page.locator(".release-list-page .table-list-dropdown summary").click();
  await page.locator('[data-release-series="metal fight"]').click();
  await page.locator("#releaseSearchInput").fill("BB-28");

  const releaseLink = page.locator('.release-product-row[data-product-id="PRODUCT-METAL-FIGHT-BB-28"] .release-product-link');
  await releaseLink.hover();
  const preview = page.locator(".link-image-preview");
  await expect(preview).toBeVisible();
  await expect(preview.locator("img")).toHaveAttribute(
    "src",
    `assets/images/beys/storm-pegasis.png?v=${X_ASSET_CACHE_VERSION}`
  );
  const previewLayout = await preview.evaluate(element => {
    const rect = element.getBoundingClientRect();
    const imageStyle = getComputedStyle(element.querySelector("img"));
    const style = getComputedStyle(element);
    return {
      width: Math.round(rect.width),
      height: Math.round(rect.height),
      radius: style.borderTopLeftRadius,
      imageRadius: imageStyle.borderTopLeftRadius,
      pointerEvents: style.pointerEvents,
      insideViewport: rect.left >= 12 && rect.top >= 12
        && rect.right <= window.innerWidth - 12 && rect.bottom <= window.innerHeight - 12
    };
  });
  expect(Math.abs(previewLayout.width - 184)).toBeLessThanOrEqual(1);
  expect(Math.abs(previewLayout.height - 184)).toBeLessThanOrEqual(1);
  expect(previewLayout).toMatchObject({
    radius: "12px",
    imageRadius: "12px",
    pointerEvents: "none",
    insideViewport: true
  });

  await releaseLink.click();
  await expect(page.locator("#detailModal .modal-inner--content")).toBeVisible();
  const compositionLink = page.locator('#detailModal .composition-link[data-target-id="BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF"]');
  await compositionLink.hover();
  await expect(preview).toBeVisible();
  await expect(preview.locator("img")).toHaveAttribute(
    "src",
    `assets/images/beys/storm-pegasis.png?v=${X_ASSET_CACHE_VERSION}`
  );

  const noImageLink = page.locator('#detailModal .composition-link[data-target-id="TOOLS-METAL-FIGHT-TOOL"]');
  await noImageLink.hover();
  await expect(preview).toBeHidden();

  await page.locator("#modalClose").click();
  await page.locator('[data-release-region="jp"]').click();
  await page.locator("#releaseSearchInput").fill("BB-28");
  const japaneseLink = page.locator('.release-product-row[data-product-id="PRODUCT-METAL-FIGHT-BB-28"] .release-product-link');
  await japaneseLink.focus();
  await expect(preview).toBeVisible();
  await expect(preview.locator("img")).toHaveAttribute(
    "src",
    `assets/images/beys/storm-pegasis-stardust.png?v=${X_ASSET_CACHE_VERSION}`
  );
  await page.keyboard.press("Escape");
  await expect(preview).toBeHidden();
  await expect(page.locator("#detailModal")).not.toBeVisible();
  expect(errors).toEqual([]);
});

test("X mounted part previews fit portrait bits and use each Bey's official colors", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "pointer preview coverage only needs one fine-pointer browser");
  const errors = consoleErrors(page);
  const preview = page.locator(".link-image-preview");

  await page.goto("/#BEY-X-BX-02-HELLS-SCYTHE-4-60T");
  const originalTaper = page.locator('#detailModal .mounted-link[data-part-id="PART-X-BIT-T"]');
  await expect(originalTaper).toHaveAttribute(
    "data-image-preview-src",
    "assets/images/x/parts/bit/part-x-bit-t.webp"
  );
  await originalTaper.hover();
  await expect(preview).toBeVisible();
  await expect.poll(async () => Math.round((await preview.boundingBox()).width)).toBe(184);
  const fit = await preview.evaluate(element => {
    const frame = element.getBoundingClientRect();
    const image = element.querySelector("img").getBoundingClientRect();
    return {
      frameWidth: Math.round(frame.width),
      frameHeight: Math.round(frame.height),
      imageWidth: Math.round(image.width),
      imageHeight: Math.round(image.height),
      leftInset: image.left - frame.left,
      topInset: image.top - frame.top,
      rightInset: frame.right - image.right,
      bottomInset: frame.bottom - image.bottom
    };
  });
  expect(fit.frameWidth).toBe(184);
  expect(fit.frameHeight).toBe(184);
  expect(fit.imageWidth).toBe(168);
  expect(fit.imageHeight).toBe(168);
  expect(Math.min(fit.leftInset, fit.topInset, fit.rightInset, fit.bottomInset)).toBeGreaterThanOrEqual(7);

  await page.goto("/#BEY-X-BX-08-KNIGHT-SHIELD-4-80T");
  const alternateTaper = page.locator('#detailModal .mounted-link[data-part-id="PART-X-BIT-T"]');
  await expect(alternateTaper).toHaveAttribute(
    "data-image-preview-src",
    "assets/images/x/beys/bey-x-bx-08-knight-shield-4-80t/parts/part-x-bit-t.webp"
  );
  await alternateTaper.hover();
  await expect(preview.locator("img")).toHaveAttribute(
    "src",
    `assets/images/x/beys/bey-x-bx-08-knight-shield-4-80t/parts/part-x-bit-t.webp?v=${X_ASSET_CACHE_VERSION}`
  );

  await page.goto("/#BEY-X-BX-48-03-MAMMOTH-TUSK-7-60S");
  const mammothBlade = page.locator('#detailModal .mounted-link[data-part-id="PART-X-BLADE-MAMMOTH-TUSK"]');
  await expect(mammothBlade).toHaveAttribute(
    "data-image-preview-src",
    "assets/images/x/beys/bey-x-bx-48-03-mammoth-tusk-7-60s/bey-x-bx-48-03-mammoth-tusk-7-60s.webp"
  );
  const mammothSpike = page.locator('#detailModal .mounted-link[data-part-id="PART-X-BIT-S"]');
  await expect(mammothSpike).toHaveAttribute(
    "data-image-preview-src",
    "assets/images/x/beys/bey-x-bx-48-03-mammoth-tusk-7-60s/parts/part-x-bit-s.webp"
  );
  await mammothSpike.hover();
  await expect(preview.locator("img")).toHaveAttribute(
    "src",
    `assets/images/x/beys/bey-x-bx-48-03-mammoth-tusk-7-60s/parts/part-x-bit-s.webp?v=${X_ASSET_CACHE_VERSION}`
  );
  await mammothSpike.click();
  await expect(page).toHaveURL(/#PART-X-BIT-S$/);

  await page.goto("/#BEY-X-CX-00-BUGS-ANTLERS-B-2-60D");
  const unavailablePreview = page.locator(
    '#detailModal .mounted-link[data-part-id="PART-X-BLADE-LOCK-CHIP-BUGS"]'
  );
  await expect(unavailablePreview).not.toHaveAttribute("data-image-preview-src", /.+/);
  await expect(unavailablePreview).not.toHaveAttribute("data-image-preview-id", /.+/);
  await unavailablePreview.hover();
  await expect(preview).toBeHidden();

  await page.goto("/#BEY-X-CX-09-SOL-ECLIPSE-D-5-70TK");
  await expect(page.locator('#detailModal .mounted-link[data-part-id="PART-X-RATCHET-5-70"]')).toHaveAttribute(
    "data-image-preview-src",
    "assets/images/x/beys/bey-x-cx-09-sol-eclipse-d-5-70tk/parts/part-x-ratchet-5-70.webp"
  );

  const compositionPrimaryImages = [
    [
      "PRODUCT-X-CX-11",
      "BEY-X-CX-11-EMPEROR-MIGHT-H-OP",
      "assets/images/x/beys/bey-x-cx-11-emperor-might-h-op/bey-x-cx-11-emperor-might-h-op.webp"
    ],
    [
      "PRODUCT-X-BX-00-DRAN-DAGGER-2-80GP-BLACK-GIANTS",
      "BEY-X-BX-00-DRAN-DAGGER-2-80GP",
      "assets/images/x/beys/bey-x-bx-00-dran-dagger-2-80gp/bey-x-bx-00-dran-dagger-2-80gp.webp"
    ],
    [
      "PRODUCT-X-BX-17",
      "BEY-X-BX-17-DRAN-SWORD-3-60F",
      "assets/images/x/beys/bey-x-bx-17-dran-sword-3-60f/bey-x-bx-17-dran-sword-3-60f.webp"
    ],
    [
      "PRODUCT-X-UX-04",
      "BEY-X-UX-04-DRAN-BUSTER-1-60A",
      "assets/images/x/beys/bey-x-ux-04-dran-buster-1-60a/bey-x-ux-04-dran-buster-1-60a.webp"
    ],
    [
      "PRODUCT-X-BX-48",
      "BEY-X-BX-48-01-COBALT-DRAGOON-9-80F",
      "assets/images/x/beys/bey-x-bx-48-01-cobalt-dragoon-9-80f/bey-x-bx-48-01-cobalt-dragoon-9-80f.webp"
    ],
    [
      "PRODUCT-X-UX-00-ASIA-SPECIAL-DRAN-DECK-SET",
      "BEY-X-UX-00-DRAN-SWORD-4-80DB",
      "assets/images/x/beys/bey-x-ux-00-dran-sword-4-80db/bey-x-ux-00-dran-sword-4-80db.webp"
    ]
  ];
  for (const [productId, beyId, image] of compositionPrimaryImages) {
    if (productId === "PRODUCT-X-BX-48") {
      await page.goto("/#toy-release");
      await page.locator('button[data-release-region="jp"]').click();
      await page.locator("#releaseSearchInput").fill("BX-48");
      await page.locator(`.release-product-row[data-product-id="${productId}"]`).click();
      await page.locator("#detailModal .product-lineup-trigger").click();
    } else {
      await page.goto(`/#${productId}`);
    }
    const composition = page.locator(
      `#detailModal .composition-link[data-target-id="${beyId}"]`
    );
    await expect(composition).toHaveAttribute("data-image-preview-id", beyId);
    await composition.hover();
    await expect(preview.locator("img")).toHaveAttribute("src", `${image}?v=${X_ASSET_CACHE_VERSION}`);
  }
  expect(errors).toEqual([]);
});

test("X mounted part links navigate on the first touch", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "touch behavior only needs the mobile project");
  const errors = consoleErrors(page);
  const preview = page.locator(".link-image-preview");

  await page.goto("/#BEY-X-BX-08-KNIGHT-SHIELD-4-80T");
  const alternateTaper = page.locator('#detailModal .mounted-link[data-part-id="PART-X-BIT-T"]');
  await expect(alternateTaper).toHaveAttribute(
    "data-image-preview-src",
    "assets/images/x/beys/bey-x-bx-08-knight-shield-4-80t/parts/part-x-bit-t.webp"
  );
  await alternateTaper.tap();
  await expect(page).toHaveURL(/#PART-X-BIT-T$/);
  await expect(preview).toBeHidden();

  await page.goto("/#BEY-X-BX-48-03-MAMMOTH-TUSK-7-60S");
  const mammothSpike = page.locator('#detailModal .mounted-link[data-part-id="PART-X-BIT-S"]');
  await expect(mammothSpike).toHaveAttribute(
    "data-image-preview-src",
    "assets/images/x/beys/bey-x-bx-48-03-mammoth-tusk-7-60s/parts/part-x-bit-s.webp"
  );
  await mammothSpike.tap();
  await expect(page).toHaveURL(/#PART-X-BIT-S$/);
  await expect(preview).toBeHidden();

  await page.goto("/#BEY-X-CX-00-BUGS-ANTLERS-B-2-60D");
  const unavailablePreview = page.locator(
    '#detailModal .mounted-link[data-part-id="PART-X-BLADE-LOCK-CHIP-BUGS"]'
  );
  await expect(unavailablePreview).not.toHaveAttribute("data-image-preview-src", /.+/);
  await expect(unavailablePreview).not.toHaveAttribute("data-image-preview-id", /.+/);
  await unavailablePreview.tap();
  await expect(page).toHaveURL(/#PART-X-BLADE-LOCK-CHIP-BUGS$/);
  await expect(preview).toBeHidden();
  expect(errors).toEqual([]);
});

test("touch release rows separate image previews from one-tap detail navigation", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "touch behavior only needs the mobile project");
  await injectRegionalProductPreviewImages(page);
  await page.goto("/#toy-release");
  await page.locator(".release-list-page .table-list-dropdown summary").tap();
  await page.locator('[data-release-series="metal fight"]').tap();
  await page.locator("#releaseSearchInput").fill("BB-28");
  const releaseRow = page.locator('.release-product-row[data-product-id="PRODUCT-METAL-FIGHT-BB-28"]');
  const releaseLink = releaseRow.locator(".release-product-link");
  const previewButton = releaseRow.locator(".release-image-preview-button");
  const preview = page.locator(".link-image-preview");
  const releaseUrl = page.url();

  const previewLayout = await releaseRow.evaluate(element => {
    const cell = element.querySelector(".release-product-cell");
    const title = element.querySelector(".release-product-link").getBoundingClientRect();
    const previewButton = element.querySelector(".release-image-preview-button").getBoundingClientRect();
    const meta = element.querySelector(".mobile-row-meta").getBoundingClientRect();
    const cellRect = cell.getBoundingClientRect();
    return {
      previewWidth: previewButton.width,
      previewHeight: previewButton.height,
      titleRight: title.right,
      previewLeft: previewButton.left,
      contentBottom: Math.max(title.bottom, previewButton.bottom),
      metaTop: meta.top,
      metaLeft: meta.left,
      metaRight: meta.right,
      cellLeft: cellRect.left,
      cellRight: cellRect.right
    };
  });
  expect(previewLayout.previewWidth).toBeCloseTo(30, 3);
  expect(previewLayout.previewHeight).toBeCloseTo(30, 3);
  expect(previewLayout.titleRight).toBeLessThanOrEqual(previewLayout.previewLeft + 1);
  expect(previewLayout.metaTop).toBeGreaterThanOrEqual(previewLayout.contentBottom - 1);
  expect(previewLayout.metaLeft).toBeGreaterThanOrEqual(previewLayout.cellLeft - 1);
  expect(previewLayout.metaRight).toBeLessThanOrEqual(previewLayout.cellRight + 1);

  await previewButton.tap();
  expect(page.url()).toBe(releaseUrl);
  await expect(preview).toBeVisible();
  await expect.poll(() => preview.evaluate(element => Math.round(element.getBoundingClientRect().width))).toBe(184);
  await expect.poll(() => preview.evaluate(element => Math.round(element.getBoundingClientRect().height))).toBe(184);
  await expect(preview.locator("img")).toHaveAttribute(
    "src",
    `assets/images/beys/storm-pegasis.png?v=${X_ASSET_CACHE_VERSION}`
  );
  await page.locator("#releaseSearchInput").tap();
  await expect(preview).toBeHidden();

  await previewButton.evaluate(button => button.click());
  await expect(preview).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(preview).toBeHidden();
  expect(page.url()).toBe(releaseUrl);

  await previewButton.evaluate(button => button.click());
  await expect(preview).toBeVisible();
  await page.evaluate(() => document.dispatchEvent(new Event("scroll")));
  await expect(preview).toBeHidden();

  await releaseLink.tap();
  await expect(page.locator("#detailModal")).toBeVisible();
  await expect(preview).toBeHidden();
});
