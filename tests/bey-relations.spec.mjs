import { test, expect } from "@playwright/test";
import { consoleErrors, expectModalBackAtShellTopLeft } from "./helpers/ui-assertions.mjs";

const sword = "BEY-X-BX-01-DRAN-SWORD-3-60F";

test("Bey relation badges expose localized names and exact product, character, and part navigation", async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto(`/#${sword}`);
  const modal = page.locator("#detailModal");
  await expect(modal).toBeVisible();
  await expect(modal.locator(".mounted-parts .mounted-title")).toHaveText("부품");
  await expect(modal.locator(".bey-products .mounted-title")).toHaveText("포함 제품");
  await expect(modal.locator(".bey-users .mounted-title")).toHaveText("사용자");
  await expect(modal.locator('[data-part-id="PART-X-BIT-F"]')).toHaveText("플랫");
  await expect(modal.locator(".bey-relation-badge span, .bey-relation-badge strong, .bey-relation-badge b")).toHaveCount(0);

  const destinations = [
    {
      selector: '.bey-product-link[data-product-id="PRODUCT-X-BX-01"]',
      id: "PRODUCT-X-BX-01",
      accessibleName: /BX-01.*포함 제품 상세 보기/
    },
    {
      selector: '.bey-character-link[data-character-id="CHARACTER-X-GU-ISU"]',
      id: "CHARACTER-X-GU-ISU",
      accessibleName: "구이수 · 작품 속 모델 사용자 상세 보기"
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
    await expect(modal.locator(".bey-character-link")).toHaveText("구이수");
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
  { name: "character", selector: '.bey-character-link[data-character-id="CHARACTER-X-GU-ISU"]', id: "CHARACTER-X-GU-ISU" },
  { name: "product", selector: '.bey-product-link[data-product-id="PRODUCT-X-BX-01"]', id: "PRODUCT-X-BX-01" }
]) {
  test(`Bey ${relation.name} navigation preserves its original release product back chain`, async ({ page }) => {
    const errors = consoleErrors(page);
    const origin = { series: "x", query: "BX-01", productId: "PRODUCT-X-BX-01" };
    const modal = page.locator("#detailModal");
    await openKoreanReleaseProduct(page, origin);
    await modal.locator(`.composition-link[data-target-id="${sword}"]`).click();
    await expect(page).toHaveURL(new RegExp(`#${sword}$`));

    await modal.locator(relation.selector).click();
    await expect(page).toHaveURL(new RegExp(`#${relation.id}$`));
    const back = modal.locator(".modal-back");
    await expect(back).toHaveAttribute("data-back-id", sword);
    await expect(back).toHaveAttribute("data-back-product-id", origin.productId);
    await expect(back).toHaveAttribute("data-back-release", "true");
    await back.click();
    await expect(page).toHaveURL(new RegExp(`#${sword}$`));
    await expect(modal.locator(".modal-name")).toHaveText("드랜소드 3-60F");

    await expect(back).toHaveAttribute("data-back-product-id", origin.productId);
    await expect(back).toHaveAttribute("data-back-release", "true");
    await back.click();
    await expect(page).toHaveURL(new RegExp(`#${origin.productId}$`));
    await expect(modal.locator(".product-modal-name")).toHaveText("드랜소드 3-60F");
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
