import { expect, test } from "@playwright/test";

test("X Valkyrie-line Korean names use Valkyrion in search and details", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "대표 데스크톱 화면에서 지역명을 확인합니다.");

  const cases = [
    ["BEY-X-CX-00-VALKYRIE-BOLT-S-4-70V", "발키리언 볼트S 4-70V", "왈큐레 볼트S 4-70V"],
    ["BEY-X-UX-20-GLORY-VALKYRIE-LF", "글로리발키리언 LF", "글로리왈큐레 LF"]
  ];

  for (const [id, koreanName, japaneseName] of cases) {
    await page.goto(`/#toy-catalog?scope=bey&series=x&q=${encodeURIComponent(koreanName)}`);
    const card = page.locator(`#catalogGrid .catalog-card[data-id="${id}"]`);
    await expect(card).toBeVisible();
    await expect(card.locator(".catalog-card-title")).toHaveText(koreanName);
    await card.locator(".catalog-card-action").click();
    await expect(page.locator("#detailModal .modal-name")).toHaveText(japaneseName);
  }
});
