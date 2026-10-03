import { test, expect } from "@playwright/test";
import { consoleErrors, expectModalBackAtShellTopLeft } from "./helpers/ui-assertions.mjs";

const sword = "BEY-X-BX-01-DRAN-SWORD-3-60F";
const storm = "BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF";
const galaxy = "BEY-METAL-FIGHT-BB-70-GALAXY-PEGASIS-W105R2F";
const kangTa = "CHARACTER-METAL-FIGHT-KANG-TA";

test("X Bey badges preserve localized product and part navigation without unverified users", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto(`/#${sword}`);
  const modal = page.locator("#detailModal");
  await expect(modal).toBeVisible();
  await expect(modal.locator(".mounted-parts .mounted-title")).toHaveText("부품");
  await expect(modal.locator(".bey-products .mounted-title")).toHaveText("포함 제품");
  await expect(modal.locator(".bey-users, .bey-character-link")).toHaveCount(0);
  await expect(modal.locator('[data-part-id="PART-X-BIT-F"]')).toHaveText("플랫");
  await expect(modal.locator(".bey-relation-badge span, .bey-relation-badge strong, .bey-relation-badge b")).toHaveCount(0);

  const destinations = [
    {
      selector: '.bey-product-link[data-product-id="PRODUCT-X-BX-01"]',
      id: "PRODUCT-X-BX-01",
      accessibleName: /BX-01.*포함 제품 상세 보기/
    },
    {
      selector: '.mounted-link[data-part-id="PART-X-BIT-F"]',
      id: "PART-X-BIT-F",
      accessibleName: "플랫"
    }
  ];
  for (const destination of destinations) {
    const link = modal.locator(destination.selector);
    await expect(link).toHaveAttribute("href", `#${destination.id}`);
    await expect(link).toHaveAccessibleName(destination.accessibleName);
    await link.focus();
    await expect(link).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(new RegExp(`#${destination.id}$`));
    await expectModalBackAtShellTopLeft(modal.locator(".modal-back"));
    await modal.locator(".modal-back").click();
    await expect(page).toHaveURL(new RegExp(`#${sword}$`));
    await expect(modal.locator(destination.selector)).toBeVisible();
    await expect(modal.locator(".bey-users, .bey-character-link")).toHaveCount(0);
    await expect(modal.locator(".mounted-parts .mounted-link")).toHaveCount(3);
  }

  const boxes = await modal.locator(".bey-relation-badge").evaluateAll(nodes => nodes.map(node => {
    const rect = node.getBoundingClientRect();
    const parent = node.parentElement.getBoundingClientRect();
    return {
      height: rect.height,
      left: rect.left,
      right: rect.right,
      parentLeft: parent.left,
      parentRight: parent.right,
      width: rect.width,
      parentWidth: parent.width,
      isPart: node.classList.contains("mounted-link")
    };
  }));
  for (const box of boxes) {
    expect(box.height).toBeGreaterThanOrEqual(44);
    expect(box.left).toBeGreaterThanOrEqual(box.parentLeft - 1);
    expect(box.right).toBeLessThanOrEqual(box.parentRight + 1);
    expect(box.width).toBeLessThanOrEqual(box.parentWidth + 1);
    if (box.isPart) expect(box.width).toBeLessThan(box.parentWidth);
  }
  await modal.locator("#modalClose").click();
  await expect(modal).not.toBeVisible();
  expect(errors).toEqual([]);
});

test("verified Metal Bey users support keyboard navigation and season-labeled character details", async ({ page }) => {
  const errors = consoleErrors(page);
  const modal = page.locator("#detailModal");
  await page.goto(`/#${storm}`);
  await expect(modal).toBeVisible();
  await expect(modal.locator(".bey-users .mounted-title")).toHaveText("사용자");
  const user = modal.locator(`.bey-character-link[data-character-id="${kangTa}"]`);
  await expect(user).toHaveText("강타");
  await expect(user).toHaveAttribute("href", `#${kangTa}`);
  await expect(user).toHaveAccessibleName("강타 · 사용 확인된 제품 사용자 상세 보기");
  const userBox = await user.evaluate(node => {
    const rect = node.getBoundingClientRect();
    const parent = node.parentElement.getBoundingClientRect();
    return { height: rect.height, left: rect.left, right: rect.right, parentLeft: parent.left, parentRight: parent.right };
  });
  expect(userBox.height).toBeGreaterThanOrEqual(44);
  expect(userBox.left).toBeGreaterThanOrEqual(userBox.parentLeft - 1);
  expect(userBox.right).toBeLessThanOrEqual(userBox.parentRight + 1);
  await expect(modal.locator(".bey-users .bey-relation-badge span, .bey-users .bey-relation-badge strong, .bey-users .bey-relation-badge b")).toHaveCount(0);
  await user.focus();
  await expect(user).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(new RegExp(`#${kangTa}$`));
  await expect(modal.locator(".modal-name")).toHaveText("강타");
  const sections = modal.locator(".bey-relation-section");
  await expect(sections.locator(".mounted-title")).toHaveText(["메탈베이블레이드", "메탈베이블레이드 2", "사용 베이"]);
  await expect(sections.nth(0).locator(".bey-relation-badge")).toHaveText(["스톰 페가시스"]);
  await expect(sections.nth(1).locator(".bey-relation-badge")).toHaveText(["갤럭시 페가시스"]);
  await expect(sections.nth(2).locator(".bey-relation-badge")).toHaveText(["빅뱅 페가시스"]);
  await expectModalBackAtShellTopLeft(modal.locator(".modal-back"));
  await modal.locator(".modal-back").click();
  await expect(page).toHaveURL(new RegExp(`#${storm}$`));
  await expect(user).toBeVisible();
  expect(errors).toEqual([]);
});

const openKoreanReleaseProduct = async (page, { series, query, productId }) => {
  await page.goto("/#toy-release");
  await page.locator('.release-region-tabs button[data-release-region="kr"]').click();
  await page.locator(".release-list-page .table-list-dropdown summary").click();
  await page.locator(`[data-release-series="${series}"]`).click();
  await page.locator("#releaseSearchInput").fill(query);
  await page.locator(`.release-product-row[data-product-id="${productId}"] .release-product-link`).click();
  await expect(page).toHaveURL(new RegExp(`#${productId}$`));
};

const expectKoreanReleaseState = async (page, { series, query, productId }) => {
  await expect(page.locator('[data-app-panel="release"].active')).toBeVisible();
  await expect(page.locator('.release-region-tabs button[data-release-region="kr"]')).toHaveClass(/\bactive\b/);
  await expect(page.locator(`[data-release-series="${series}"]`)).toHaveClass(/\bactive\b/);
  await expect(page.locator("#releaseSearchInput")).toHaveValue(query);
  await expect(page.locator(`.release-product-row[data-product-id="${productId}"]`)).toHaveAttribute("data-release-region", "kr");
};

for (const relation of [
  {
    name: "character", selector: `.bey-character-link[data-character-id="${kangTa}"]`, id: kangTa,
    beyId: storm, title: "스톰 페가시스 105RF",
    origin: { series: "metal fight", query: "BB-28", productId: "PRODUCT-METAL-FIGHT-BB-28" }
  },
  {
    name: "product", selector: '.bey-product-link[data-product-id="PRODUCT-X-BX-01"]', id: "PRODUCT-X-BX-01",
    beyId: sword, title: "드랜소드 3-60F",
    origin: { series: "x", query: "BX-01", productId: "PRODUCT-X-BX-01" }
  }
]) {
  test(`Bey ${relation.name} navigation preserves its original release product back chain`, async ({ page }) => {
    const errors = consoleErrors(page);
    const { origin, beyId, title } = relation;
    const modal = page.locator("#detailModal");
    await openKoreanReleaseProduct(page, origin);
    await modal.locator(`.composition-link[data-target-id="${beyId}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${beyId}$`));

    await modal.locator(relation.selector).click();
    await expect(page).toHaveURL(new RegExp(`#${relation.id}$`));
    const back = modal.locator(".modal-back");
    await expect(back).toHaveAttribute("data-back-id", beyId);
    await expect(back).toHaveAttribute("data-back-product-id", origin.productId);
    await expect(back).toHaveAttribute("data-back-release", "true");
    await back.click();
    await expect(page).toHaveURL(new RegExp(`#${beyId}$`));
    await expect(modal.locator(".modal-name")).toHaveText(title);

    await expect(back).toHaveAttribute("data-back-product-id", origin.productId);
    await expect(back).toHaveAttribute("data-back-release", "true");
    await back.click();
    await expect(page).toHaveURL(new RegExp(`#${origin.productId}$`));
    await expect(modal.locator(".product-modal-name")).toHaveText(title);
    await expect(back).toHaveAttribute("aria-label", "발매목록으로 돌아가기");
    await back.click();
    await expect(page).toHaveURL(/#toy-release$/);
    await expect(modal).not.toBeVisible();
    await expectKoreanReleaseState(page, origin);
    expect(errors).toEqual([]);
  });
}

for (const reloadDetail of [false, true]) {
  test(`Japanese fallback product preserves the Korean release search on close${reloadDetail ? " after reload" : ""}`, async ({ page }) => {
    const errors = consoleErrors(page);
    const origin = { series: "metal fight", query: "BB-82-1", productId: "PRODUCT-METAL-FIGHT-BB-82-1" };
    const beyId = "BEY-METAL-FIGHT-BB-82-GRAND-KETOS-WD145RS";
    const japaneseProductId = "PRODUCT-METAL-FIGHT-BB-82";
    const modal = page.locator("#detailModal");
    await openKoreanReleaseProduct(page, origin);
    await modal.locator(`.composition-link[data-target-id="${beyId}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${beyId}$`));

    const japaneseProduct = modal.locator(`.bey-product-link[data-product-id="${japaneseProductId}"]`);
    await expect(japaneseProduct).toHaveAttribute("data-release-region", "jp");
    await japaneseProduct.click();
    await expect(page).toHaveURL(new RegExp(`#${japaneseProductId}$`));
    await expect(modal.locator(".product-modal-name")).toHaveText("랜덤부스터 Vol.5 그랜드 케토스");
    if (reloadDetail) {
      await page.reload();
      await expect(modal).toBeVisible();
      await expect(modal.locator(".product-modal-name")).toHaveText("랜덤부스터 Vol.5 그랜드 케토스");
    }
    await expect(modal.locator(".modal-back")).toHaveAttribute("data-back-region", "kr");
    await expect(modal.locator(".modal-back")).toHaveAttribute("data-back-product-id", origin.productId);

    await modal.locator("#modalClose").click();
    await expect(page).toHaveURL(/#toy-release$/);
    await expect(modal).not.toBeVisible();
    await expectKoreanReleaseState(page, origin);
    expect(errors).toEqual([]);
  });
}

test("every mounted and bundled badge matches its part detail title while Bey titles stay unchanged", async ({ page }) => {
  const modal = page.locator("#detailModal");
  for (const beyId of [
    "BEY-BURST-B-181-03-DRAGOON-V2-WH-XC-DASH",
    "BEY-METAL-FIGHT-BB-80-GRAVITY-PERSEUS-AD145WD",
    "BEY-X-CX-13-BAHAMUT-BLITZ-BK-1-50I"
  ]) {
    await page.goto(`/#${beyId}`);
    await expect(modal).toBeVisible();
    const beyTitle = await modal.locator(".modal-name").innerText();
    const partIds = await modal.locator(".mounted-link").evaluateAll(links => links.map(link => link.dataset.partId));
    for (const id of partIds) {
      const badge = modal.locator(`.mounted-link[data-part-id="${id}"]`);
      const badgeTitle = await badge.innerText();
      await badge.click();
      await expect(page).toHaveURL(new RegExp(`#${id}$`));
      await expect(modal.locator(".modal-name")).toHaveText(badgeTitle);
      await modal.locator(".modal-back").click();
      await expect(page).toHaveURL(new RegExp(`#${beyId}$`));
      await expect(modal.locator(".modal-name")).toHaveText(beyTitle);
    }
  }
});

test("Metal season-one characters, alias search and verified users preserve existing navigation", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto("/#anime-character?season=metal-fight");
  await expect(page.locator(".anime-character-card")).toHaveCount(21);
  await expect(page.locator(".anime-character-card img")).toHaveCount(0);
  await page.goto(`/#anime-character?season=metal-fight&q=${encodeURIComponent("강유성")}`);
  await expect(page.locator(".anime-character-card")).toHaveCount(1);
  await expect(page.locator(".anime-character-card h3")).toHaveText("피닉스");
  await page.goto(`/#search?q=${encodeURIComponent("강유성")}&scope=character`);
  await expect(page.locator('.search-result-item[data-anime-character-query="피닉스"]')).toHaveCount(1);
  const gemios = "BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS";
  await page.goto(`/#${gemios}`);
  const modal = page.locator("#detailModal");
  await expect(modal.locator(".bey-character-link")).toHaveText(["단", "레이크"]);
  await modal.locator(".bey-character-link").first().click();
  await expect(modal.locator(".modal-tags")).toHaveText("메탈베이블레이드");
  await expect(modal.locator(".modal-name")).toHaveText("단");
  await page.reload();
  await expect(modal.locator(".modal-name")).toHaveText("단");
  await modal.locator(".modal-back").click();
  await expect(page).toHaveURL(new RegExp(`#${gemios}$`));
  expect(errors).toEqual([]);
});

test("media Bey labels are Korean in cards, overflow, details and search while English queries and character addresses stay valid", async ({ page }) => {
  const errors = consoleErrors(page);
  for (const query of ["포이즌 비르고", "Poison Virgo"]) {
    await page.goto(`/#anime-character?season=metal-fight-2&q=${encodeURIComponent(query)}`);
    await page.reload();
    const card = page.locator('.anime-character-card[data-anime-character-card="챠우싱"]');
    await expect(card.locator(".anime-character-bey-chip")).toHaveText(["비르고", "포이즌 비르고"]);
    await expect(card.locator("[data-anime-character-bey-list]")).toHaveAttribute("data-anime-character-beys", JSON.stringify(["비르고", "포이즌 비르고"]));
    await page.goto(`/#search?q=${encodeURIComponent(query)}&scope=character`);
    await page.reload();
    const result = page.locator('.search-result-item[data-anime-character-query="챠우싱"]');
    await expect(result.locator(".search-result-snippet")).toHaveText("비르고 ED145ES · 포이즌 비르고 ED145ES");
  }
  const characterId = "CHARACTER-METAL-FIGHT-CHAOXIN";
  await page.goto(`/#${characterId}`);
  await page.reload();
  await expect(page).toHaveURL(new RegExp(`#${characterId}$`));
  await expect(page.locator("#detailModal .bey-relation-badge")).toHaveText(["비르고", "포이즌 비르고"]);
  expect(errors).toEqual([]);
});

test("character cards and their overflow data use short model names on direct entry", async ({ page }) => {
  for (const [season, names] of [
    ["all", ["스톰 페가시스", "갤럭시 페가시스", "빅뱅 페가시스"]],
    ["metal-fight", ["스톰 페가시스"]],
    ["metal-fight-2", ["갤럭시 페가시스"]]
  ]) {
    await page.goto("/");
    await page.goto(`/#anime-character?season=${season}&q=${encodeURIComponent("강타")}`);
    await page.reload();
    const card = page.locator('.anime-character-card[data-anime-character-card="강타"]');
    await expect(card.locator(".anime-character-bey-chip")).toHaveText(names);
    await expect(card.locator("[data-anime-character-bey-list]")).toHaveAttribute("data-anime-character-beys", JSON.stringify(names));
  }
  await page.goto(`/#${kangTa}`);
  await page.reload();
  await expect(page.locator("#detailModal .bey-relation-badge")).toHaveText(["스톰 페가시스", "갤럭시 페가시스", "빅뱅 페가시스"]);
});

test("Metal character cards show only the selected season's Bey usage", async ({ page }) => {
  const errors = consoleErrors(page);
  for (const { season, included, excluded } of [
    { season: "metal-fight", included: "스톰 페가시스", excluded: "갤럭시 페가시스" },
    { season: "metal-fight-2", included: "갤럭시 페가시스", excluded: "스톰 페가시스" }
  ]) {
    await page.goto(`/#anime-character?season=${season}&q=${encodeURIComponent("강타")}`);
    const cards = page.locator(".anime-character-card");
    await expect(cards).toHaveCount(1);
    await expect(cards.locator("h3")).toHaveText("강타");
    await expect(cards.locator(".anime-character-bey-chip")).toHaveText([included]);
    await expect(cards).not.toContainText(excluded);
    await page.reload();
    await expect(cards.locator(".anime-character-bey-chip")).toHaveText([included]);
    await expect(cards).not.toContainText(excluded);
  }
  expect(errors).toEqual([]);
});

test("only exact verified Metal retail variants expose character users", async ({ page }) => {
  const errors = consoleErrors(page);
  const modal = page.locator("#detailModal");
  for (const beyId of [storm, galaxy]) {
    await page.goto(`/#${beyId}`);
    await expect(modal).toBeVisible();
    await expect(modal.locator(".bey-character-link")).toHaveText(["강타"]);
    await expect(modal.locator(".bey-character-link")).toHaveAttribute("href", `#${kangTa}`);
    await modal.locator("#modalClose").click();
    await expect(modal).not.toBeVisible();
  }
  for (const beyId of [
    "BEY-METAL-FIGHT-BB-32-STORM-PEGASIS-105RF",
    "BEY-METAL-FIGHT-BB-44-STORM-PEGASIS-100RF",
    "BEY-METAL-FIGHT-BB-75-GALAXY-PEGASIS-W105R2F",
    "BEY-METAL-FIGHT-BB-76-GALAXY-PEGASIS-W105R2F",
    "BEY-METAL-FIGHT-BB-92-GALAXY-PEGASIS-W105R2F",
    "BEY-METAL-FIGHT-GALAXY-PEGASIS-GB145MS",
    sword,
    "BEY-X-BX-00-STORM-PEGASIS-3-70RA"
  ]) {
    await page.goto(`/#${beyId}`);
    await expect(modal).toBeVisible();
    await expect(modal.locator(".bey-products")).toBeVisible();
    await expect(modal.locator(".mounted-link").first()).toBeVisible();
    await expect(modal.locator(".bey-users, .bey-character-link")).toHaveCount(0);
    await modal.locator("#modalClose").click();
    await expect(modal).not.toBeVisible();
  }
  expect(errors).toEqual([]);
});

test("additional upgraded usage is unscoped and preserves the exact Bey back flow", async ({ page }) => {
  const id = "BEY-METAL-FIGHT-BB-105-BIG-BANG-PEGASIS-FD";
  await page.goto(`/#${id}`);
  const modal = page.locator("#detailModal");
  await expect(modal.locator(".bey-character-link")).toHaveText("강타");
  await modal.locator(".bey-character-link").click();
  await expect(modal.locator(".modal-tags")).not.toContainText("등장인물");
  await expect(modal.locator(".modal-tags")).not.toContainText("4D");
  const additional = modal.locator(".bey-relation-section").filter({ has: page.getByRole("heading", { name: "사용 베이", exact: true }) });
  await expect(additional.locator(".bey-relation-badge")).toHaveText(["빅뱅 페가시스"]);
  await page.reload();
  await expect(additional.locator(".bey-relation-badge")).toHaveText(["빅뱅 페가시스"]);
  await modal.locator(".modal-back").click();
  await expect(page).toHaveURL(new RegExp(`#${id}$`));
});

test("new unscoped characters keep Toby and Faust separate without seasonal tags", async ({ page }) => {
  const modal = page.locator("#detailModal");
  await page.goto("/#BEY-METAL-FIGHT-BB-116-SCREW-LYRA-ED145MF");
  await expect(modal.locator(".bey-character-link")).toHaveText("토비");
  await modal.locator(".bey-character-link").click();
  await expect(modal.locator(".modal-name")).toHaveText("토비");
  await expect(modal.locator(".mounted-title")).toHaveText("사용 베이");
  await expect(modal.locator(".bey-relation-badge")).toHaveText(["스크류 레이라"]);
  await expect(modal).not.toContainText("호로지움");
  await expect(modal.locator(".modal-tags")).toHaveCount(0);
  await page.reload();
  await expect(modal.locator(".modal-name")).toHaveText("토비");
  await modal.locator(".modal-back").click();
  await expect(page).toHaveURL(/#BEY-METAL-FIGHT-BB-116-SCREW-LYRA-ED145MF$/);
  await page.goto("/#BEY-METAL-FIGHT-BB-104-BASALT-HOROGIUM-145WD");
  await expect(modal.locator(".bey-character-link")).toHaveText("파우스트");
});
