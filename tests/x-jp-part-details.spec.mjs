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
      id: "PART-X-BLADE-MAIN-BLADE-MIGHT",
      desc: "측면에 여러 개의 예각 면을 둔 중량급 8개 날로 상대의 회전력을 깎는다. 메탈 코팅으로 성능을 높였다.",
      hasStats: false
    },
    {
      id: "PART-X-RATCHET-1-50",
      desc: "베이를 낮게 세팅하는 파츠. 공격 성능에 특화된 1개의 날을 사용한다.",
      hasStats: true
    },
    {
      id: "PART-X-BIT-FF",
      desc: "래칫과 별개로 자유 회전하는 비트. 조금 가늘고 평평한 축 끝으로 스태미나 손실을 줄이면서 대시 속도를 높인다.",
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
