import { expect, test } from "@playwright/test";

test("X 일본 미발매 대표 부품 상세에 공식 설명과 스탯을 표시한다", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "desktop", "대표 상세 화면은 데스크톱에서 한 번만 확인합니다.");

  const cases = [
    {
      id: "PART-X-BLADE-ROCK-LEONE",
      desc: "사다리꼴 형태의 6개 날로 상대의 공격을 흘려보내면서 카운터를 가한다.",
      hasStats: true
    },
    {
      id: "PART-X-BLADE-LOCK-CHIP-VALKYRIE",
      desc: "메탈을 탑재한 발키리 모델의 록 파츠로 CX 블레이드를 고정하고 중량을 높인다.",
      hasStats: false
    },
    {
      id: "PART-X-RATCHET-1-50",
      desc: "베이를 낮게 설정하며 공격 성능에 특화된 1개 날을 사용한다.",
      hasStats: true
    },
    {
      id: "PART-X-BIT-FF",
      desc: "래칫에 대해 자유 회전하며, 조금 가늘고 평평한 축 끝으로 스태미나 손실을 줄이면서 대시 속도를 높인다.",
      hasStats: true
    }
  ];

  for (const entry of cases) {
    await page.goto(`/#${entry.id}`);
    const modal = page.locator("#detailModal");
    await expect(modal).toBeVisible();
    await expect(modal.locator(".modal-description")).toHaveText(entry.desc);
    if (entry.hasStats) await expect(modal.locator(".stat-row").first()).toBeVisible();
    else await expect(modal.locator(".stat-row")).toHaveCount(0);
  }
});
