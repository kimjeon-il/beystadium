import { expect, test } from "@playwright/test";

test("X Valkyrie-line Korean names use Valkyrion in search and details", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "대표 데스크톱 화면에서 지역명을 확인합니다.");

  const cases = [
    ["BEY-X-CX-00-VALKYRIE-BOLT-S-4-70V", "발키리언 볼트S 4-70V", "왈큐레 볼트S 4-70V"],
    ["BEY-X-UX-20-GLORY-VALKYRIE-LF", "글로리발키리언 LF", "글로리발키리언 LF"]
  ];

  for (const [id, koreanName, detailName] of cases) {
    await page.goto(`/#toy-catalog?scope=bey&series=x&q=${encodeURIComponent(koreanName)}`);
    const card = page.locator(`#catalogGrid .catalog-card[data-id="${id}"]`);
    await expect(card).toBeVisible();
    await expect(card.locator(".catalog-card-title")).toHaveText(koreanName);
    await card.locator(".catalog-card-action").click();
    await expect(page.locator("#detailModal .modal-name")).toHaveText(detailName);
  }

  await page.goto("/#PRODUCT-X-UX-20?region=kr");
  await expect(page.locator("#detailModal .modal-name")).toHaveText("글로리 발키리언LF");
  const compositionLinks = page.locator("#detailModal .product-composition-list .composition-link");
  await expect(compositionLinks).toHaveCount(2);
  await expect(compositionLinks.nth(0)).toHaveText("글로리발키리언 LF 1개→");
  await expect(compositionLinks.nth(1)).toHaveText("스트링런처 1개→");
});
