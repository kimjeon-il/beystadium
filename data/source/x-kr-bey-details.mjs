// Sources: Beyblade Official Korea Instagram product and development-review posts.
// https://www.instagram.com/beybladeofficial_korea/
const xKoreaBeyDescriptions = Object.freeze({
  "BEY-X-BX-00-STORM-SPRIGGAN-2-70M": "2-70 래칫과 M(머지) 비트의 조합으로 강력한 공격력과 안정적인 밸런스를 동시에 실현하며, 카운터 방어와 기동력·지구력도 겸비한다.",
  "BEY-X-UX-18-01-MUMMY-CURSE-7-55W": "컴팩트한 카운터 폼에서 넓게 전개되는 가드 폼으로 전환하며, 강력한 충격 흡수와 파괴적인 카운터 스매시로 공격과 방어를 모두 수행한다.",
  "BEY-X-CX-10-WOLF-HUNT-F-0-60DB": "자유롭게 회전하는 어시스트 블레이드와 원형 구조의 래칫·비트를 갖춰 상대의 공격을 흘려내고 지속적으로 스태미나를 소모시키며 연속 타격한다.",
  "BEY-X-CX-11-EMPEROR-MIGHT-H-OP": "메탈 엠퍼러 락칩을 포함한 프리미엄 헤비 파츠 구성과 수동 전환이 가능한 Op 비트를 갖춰, 헤비 어택 모드에서는 강력한 스매시 공격을 하고 헤비 디펜스 모드에서는 높은 안정성을 유지한다.",
  "BEY-X-CX-11-GOLEM-ROCK-M-85HN": "메탈 M-85 래칫과 HN(하이 니들) 비트의 조합으로 강력한 반격과 안정적인 방어를 수행한다.",
  "BEY-X-CX-11-SHARK-GILL-5-60FB": "FB(프리볼) 비트의 자유 회전 기믹으로 강한 스태미나를 유지하며 빠르고 공격적인 움직임을 보인다.",
  "BEY-X-UX-17-METEO-DRAGOON-3-70J": "좌회전 대형 고무날 블레이드와 공격력이 뛰어난 파츠를 조합해 우회전 상대의 회전을 흡수하고 여러 차례 강력한 일격을 가한다.",
  "BEY-X-CX-12-PHOENIX-FLARE-Z-9-80WW": "묵직하고 강력한 커스터마이즈와 WW 비트로 빠른 공격과 카운터 방어, 견고한 방어력과 지구력을 발휘하며, 중앙을 지키면서 상대의 공격을 버티고 연속 타격과 강력한 카운터를 가한다.",
  "BEY-X-CX-13-BAHAMUT-BLITZ-BK-1-50I": "탄력성이 뛰어난 중량급 5개 날 구조로 타격 포인트를 한 곳에 집중해 한 번의 공격을 더욱 강력하게 하고 상대를 튕겨낸다.",
  "BEY-X-CX-16-BAHAMUT-BLITZ-BK-1-50I": "탄력성이 뛰어난 중량급 5개 날 구조로 타격 포인트를 한 곳에 집중해 한 번의 공격을 더욱 강력하게 하고 상대를 튕겨낸다.",
  "BEY-X-CX-14-KNIGHT-FORTRESS-GV-8-70UN": "상대의 스매시 공격을 강하게 되돌리고 입체적인 형태의 날로 카운터를 만들어 전방위 방어 성능을 높인다.",
  "BEY-X-CX-15-RAGNA-RAGE-FE-4-55Y": "공기 저항을 줄여 회전력을 유지하고 유선형의 매끄러운 날로 상대의 공격을 받아넘겨 회전 손실을 억제하며, 지구력을 높여 지속적으로 연타한다."
});

const applyXKoreaBeyDetails = (beyItems) => {
  const beysById = new Map(beyItems.map((bey) => [bey.id, bey]));

  for (const [id, desc] of Object.entries(xKoreaBeyDescriptions)) {
    const bey = beysById.get(id);
    if (!bey) throw new Error(`X 한국 공식 베이 설명 대상을 찾을 수 없습니다: ${id}`);
    bey.desc = desc;
  }
};

export { applyXKoreaBeyDetails, xKoreaBeyDescriptions };
