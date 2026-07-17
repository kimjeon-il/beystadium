const dashAndBurst = (dash, burst) => [
  { name: "대시력", value: dash },
  { name: "버스트 저항", value: burst }
];

// Sources: Takara Tomy Beyblade X lineup pages and their パーツ詳細 images.
// https://beyblade.takaratomy.co.jp/beyblade-x/lineup/
const xJapanPartDetails = Object.freeze({
  // Basic, unique, crossover, and collaboration blades
  "PART-X-BLADE-ROCK-LEONE": {
    desc: "사다리꼴 형태의 6개 날로 상대의 공격을 흘려보내면서 카운터를 가한다.",
    stats: [30, 55, 15]
  },
  "PART-X-BLADE-DRAN-STRIKE": {
    desc: "메탈이 중앙까지 이어져 강성이 높고, 중량급 6개 날로 강력한 연타 공격을 가한다.",
    stats: [58, 25, 17]
  },
  "PART-X-BLADE-GORE-TACKLE": {
    desc: "아래를 향한 8개 날로 낮은 위치에서 들어오는 공격을 막아낸다.",
    stats: [13, 65, 22]
  },
  "PART-X-BLADE-METEO-DRAGOON": {
    desc: "대형 러버를 탑재한 3개 날로 우회전 상대의 회전을 흡수해 강력한 공격을 가한다. 메탈 코팅으로 성능을 높였다.",
    stats: [75, 15, 35]
  },
  "PART-X-BLADE-GLORY-VALKYRIE": {
    desc: "래칫 일체형 블레이드에 내장된 스프링과 6개 날이 공격 시 바운드해 강한 반발 공격을 가한다. 메탈 코팅으로 성능을 높였다.",
    stats: [85, 35, 25]
  },
  "PART-X-BLADE-CLOCK-MIRAGE": {
    desc: "원형으로 배치된 60개 날이 높은 지구력을 만들어 오래 회전한다.",
    stats: [10, 10, 80]
  },
  "PART-X-BLADE-MUMMY-CURSE": {
    desc: "회전 속도에 따라 형태가 변하며, 초반에는 돌출된 카운터 날로 공격하고 후반에는 원형에 가까운 형태로 방어한다.",
    stats: [30, 60, 20]
  },
  "PART-X-BLADE-BULLET-GRIFFON": {
    desc: "래칫 일체형 블레이드로, 배틀 중 불릿과 본체로 분리한다.",
    stats: [45, 45, 40]
  },
  "PART-X-BLADE-SHARK-GILL": {
    desc: "매끄러운 원형의 2개 날로 상대의 공격을 흘려보내면서 지구력을 높인다.",
    stats: [20, 25, 55]
  },
  "PART-X-BLADE-STORM-PEGASIS": {
    desc: "어퍼 형태의 3개 날로 상대를 강하게 튕겨낸다.",
    stats: [55, 15, 30]
  },
  "PART-X-BLADE-VICTORY-VALKYRIE": {
    desc: "3개의 상향 날로 상대를 튕겨내는 공격을 가한다.",
    stats: [55, 20, 25]
  },
  "PART-X-BLADE-STORM-SPRIGGAN": {
    desc: "2개의 상단 어퍼 날과 2개의 하단 방어 날로 공격과 방어를 양립한다.",
    stats: [30, 40, 30]
  },
  "PART-X-BLADE-IRON-MAN": {
    desc: "6개의 방어 날과 댐퍼 구조로 충격을 쉽게 흡수한다.",
    stats: [17, 55, 28]
  },
  "PART-X-BLADE-THANOS": {
    desc: "높게 배치된 날로 상대의 공격을 제압한다.",
    stats: [22, 60, 18]
  },
  "PART-X-BLADE-SPIDER-MAN": {
    desc: "아래를 향한 날카로운 6개 날로 상대를 위에서 내려친다.",
    stats: [33, 17, 50]
  },
  "PART-X-BLADE-VENOM": {
    desc: "3개의 어퍼 날로 상대를 강하게 튕겨낸다.",
    stats: [55, 22, 23]
  },
  "PART-X-BLADE-LUKE-SKYWALKER": {
    desc: "6개의 방어 날과 댐퍼 구조로 충격을 쉽게 흡수한다.",
    stats: [23, 55, 22]
  },
  "PART-X-BLADE-DARTH-VADER": {
    desc: "높게 배치된 날로 상대의 공격을 제압한다.",
    stats: [28, 60, 12]
  },
  "PART-X-BLADE-THE-MANDALORIAN": {
    desc: "공격 날과 방어 날을 함께 갖춰 슈팅 방법에 따라 성능을 활용한다.",
    stats: [40, 43, 17]
  },
  "PART-X-BLADE-MOFF-GIDEON": {
    desc: "4개의 스매시 날로 상대의 자세를 무너뜨린다.",
    stats: [32, 35, 33]
  },
  "PART-X-BLADE-OPTIMUS-PRIME": {
    desc: "6개의 방어 날과 댐퍼 구조로 충격을 쉽게 흡수한다.",
    stats: [22, 55, 23]
  },
  "PART-X-BLADE-MEGATRON": {
    desc: "4개의 스매시 날로 상대의 자세를 무너뜨린다.",
    stats: [27, 35, 38]
  },
  "PART-X-BLADE-OPTIMUS-PRIMAL": {
    desc: "날카로운 각도의 어퍼 날로 낮은 위치에서 파고들어 상대를 튕겨낸다.",
    stats: [60, 27, 13]
  },
  "PART-X-BLADE-STARSCREAM": {
    desc: "2개의 대형 원형 날이 강한 원심력을 만든다.",
    stats: [18, 27, 55]
  },
  "PART-X-BLADE-HEAVENS-RING": {
    desc: "메탈이 중앙까지 이어진 고강성 프레임 구조의 원형 12개 날로 충격을 효율적으로 분산해 버텨낸다."
  },

  // CX lock chips
  "PART-X-BLADE-LOCK-CHIP-RHINO": { desc: "라이노 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-VALKYRIE": { desc: "메탈을 탑재한 발키리 모델의 록 파츠로 CX 블레이드를 고정하고 중량을 높인다." },
  "PART-X-BLADE-LOCK-CHIP-WOLF": { desc: "울프 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-PHOENIX": { desc: "피닉스 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-BAHAMUT": { desc: "바하무트 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-RAGNA": { desc: "라그나로크 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-KNIGHT": { desc: "나이트 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-BUGS": { desc: "벅스 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-KRAKEN": { desc: "크라켄 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-HORNET": { desc: "호넷 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-DRAKE": { desc: "드레이크 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-TIGA": { desc: "티가 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-EMPEROR": { desc: "메탈 파츠로 중량을 높인 엠퍼러 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-EVA": { desc: "에반게리온 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-UNICORN": { desc: "유니콘 모델의 록 파츠로 CX 블레이드를 고정한다." },
  "PART-X-BLADE-LOCK-CHIP-BRACHIO": { desc: "브라키오 모델의 록 파츠로 CX 블레이드를 고정한다." },

  // CX main and metal blades
  "PART-X-BLADE-MAIN-BLADE-REAPER": { desc: "기복이 있는 스매시 형태의 4개 날로 연타해 상대의 자세를 무너뜨린다." },
  "PART-X-BLADE-MAIN-BLADE-BOLT": { desc: "메탈 코팅된 스매시 형상의 날로 상대를 강하게 타격한다." },
  "PART-X-BLADE-MAIN-BLADE-HUNT": { desc: "블레이드 외곽에 중량을 모은 매끄러운 연타 날로 높은 지구력과 공격력을 양립한다." },
  "PART-X-BLADE-MAIN-BLADE-FLARE": { desc: "두께가 있는 15개 연타 날로 강한 카운터를 가한다. 메탈 코팅으로 성능을 높였다." },
  "PART-X-BLADE-MAIN-BLADE-BLITZ": { desc: "반발 성능이 높은 중량급 5개 날에 한쪽으로 치우친 대형 날을 더해 중량 성능을 높인다." },
  "PART-X-BLADE-MAIN-BLADE-FORTRESS": { desc: "높낮이가 다른 형태로 공격을 분산하고 입체적인 날로 카운터를 가한다." },
  "PART-X-BLADE-MAIN-BLADE-RAGE": { desc: "유선형의 매끄러운 날로 상대의 공격을 흘려보내고 회전 손실을 줄인다." },
  "PART-X-BLADE-MAIN-BLADE-ANTLERS": { desc: "지구력과 방어력을 함께 발휘하도록 설계되었다." },
  "PART-X-BLADE-MAIN-BLADE-RIGGLE": { desc: "높은 원심력을 만들어 종반까지 회전을 유지한다." },
  "PART-X-BLADE-MAIN-BLADE-PORT": { desc: "공격·방어·지구력의 균형을 맞춰 다양한 상대에 대응한다." },
  "PART-X-BLADE-MAIN-BLADE-MIGHT": { desc: "옆면에 여러 개의 세로 모서리를 둔 중량급 8개 날로 상대의 회전력을 깎는다. 메탈 코팅으로 성능을 높였다." },
  "PART-X-BLADE-MAIN-BLADE-DELTA": { desc: "공격적인 날과 방어적인 날을 함께 갖추고 좌우 형태가 다른 2개 날을 사용한다." },
  "PART-X-BLADE-MAIN-BLADE-WHIP": { desc: "매끄러운 원호 형태의 4개 날로 상대의 공격을 흘려보낸다." },

  // CX over and assist blades
  "PART-X-BLADE-OVER-BLADE-BRAKE": { desc: "무게중심을 한쪽에 치우치게 해 반발 성능을 높인다." },
  "PART-X-BLADE-OVER-BLADE-GUARD": { desc: "위쪽을 향한 3개의 대형 날로 상대의 스매시 공격을 튕겨내 강한 카운터를 가한다." },
  "PART-X-BLADE-OVER-BLADE-FLOW": { desc: "얇고 매끄러운 형태로 공기 저항을 줄여 회전력을 유지한다." },
  "PART-X-BLADE-OVER-BLADE-PEAK": { desc: "한곳에 무게를 집중한 형태로 블레이드의 무게중심을 조절한다." },
  "PART-X-BLADE-OVER-BLADE-OUTER": { desc: "바깥쪽이 두꺼운 5개 날로 원심력을 높인다." },
  "PART-X-BLADE-ASSIST-BLADE-TURN": { desc: "바깥 둘레의 날을 뒤집어 연타와 흘려받기 모드를 전환한다." },
  "PART-X-BLADE-ASSIST-BLADE-CHARGE": { desc: "지름이 작은 3개 날로 타격을 받아도 자세가 흐트러지지 않아 안정성이 뛰어나다." },
  "PART-X-BLADE-ASSIST-BLADE-FREE": { desc: "외곽의 프리 링이 회전해 공격을 받아도 흘려보내고 지구력을 유지한다." },
  "PART-X-BLADE-ASSIST-BLADE-GRAVITY": { desc: "두껍게 돌출된 중량급 메탈 파츠로 강한 반발력을 만든다." },
  "PART-X-BLADE-ASSIST-BLADE-HEAVY": { desc: "메탈 파츠로 원심력을 높인 낮은 6개 날이 타격력과 안정성을 강화한다." },
  "PART-X-BLADE-ASSIST-BLADE-ZILLION": { desc: "원형으로 배치된 중량급 12개 날로 공격을 튕겨내며 버틴다." },
  "PART-X-BLADE-ASSIST-BLADE-KNUCKLE": { desc: "5개 날 중 1개를 중량 포인트로 삼아 블레이드의 반발 성능을 높인다." },
  "PART-X-BLADE-ASSIST-BLADE-VERTICAL": { desc: "위아래로 뻗은 12개의 수직 날로 래칫을 향한 공격을 막고 버스트 저항을 높인다." },
  "PART-X-BLADE-ASSIST-BLADE-ERASE": { desc: "매끄러운 연타 날로 스태미나 손실을 최소화하면서 지구력을 활용한 연속 공격을 가한다." },
  "PART-X-BLADE-ASSIST-BLADE-ODD": { desc: "비대칭 구조에 연타 공격 날과 원형 흘려받기 날을 함께 갖춘다." },

  // Ratchets
  "PART-X-RATCHET-1-50": {
    desc: "베이를 낮게 설정하며 공격 성능에 특화된 1개 날을 사용한다.",
    stats: [18, 9, 3]
  },
  "PART-X-RATCHET-7-55": {
    desc: "베이를 낮게 설정하고 버스트 저항을 일정하게 하는 단순한 구조로 흔들림을 줄인다. 두껍고 방어 성능이 높은 7개 날을 사용한다.",
    stats: [6, 14, 10]
  },
  "PART-X-RATCHET-0-60": {
    desc: "베이를 낮게 설정하며 수평 방향의 공격을 견디기 쉬운 무날 구조를 사용한다.",
    stats: [3, 14, 13]
  },
  "PART-X-RATCHET-9-65": {
    desc: "베이를 낮게 설정하고 버스트 저항을 일정하게 하는 단순한 구조로 흔들림을 줄인다. 연타에 뛰어난 9개 날을 사용한다.",
    stats: [13, 10, 7]
  },
  "PART-X-RATCHET-8-70": {
    desc: "베이 높이를 중간으로 설정하며 지름이 크고 원심력 강화에 뛰어난 8개 날을 사용한다.",
    stats: [8, 10, 12]
  },

  // Bits
  "PART-X-BIT-K": {
    stats: [35, 25, 15],
    extraStats: dashAndBurst(25, 80)
  },
  "PART-X-BIT-FF": {
    desc: "래칫에 대해 자유 회전하며, 조금 가늘고 평평한 축 끝으로 스태미나 손실을 줄이면서 대시 속도를 높인다.",
    stats: [40, 15, 15],
    extraStats: dashAndBurst(30, 80)
  },
  "PART-X-BIT-OP": {
    desc: "흘려받기용 4개 날과 가는 축 끝의 방어 모드, 공력 구조의 2개 날과 굵은 축 끝으로 움직이는 공격 모드를 선택해 설정한다.",
    stats: [20, 50, 50],
    extraStats: dashAndBurst(10, 30),
    modes: [
      { name: "방어 모드", stats: [20, 50, 50], extraStats: dashAndBurst(10, 30) },
      { name: "공격 모드", stats: [50, 35, 10], extraStats: dashAndBurst(35, 30) }
    ]
  },
  "PART-X-BIT-WW": {
    desc: "예각으로 뾰족한 W 비트의 축 끝을 뾰족한 원반형 벽으로 둘러 베이의 기울어짐을 억제한다.",
    stats: [5, 60, 25],
    extraStats: dashAndBurst(10, 30)
  },
  "PART-X-BIT-I": {
    desc: "여러 돌기가 있는 대형 원통형 축 끝이 스타디움을 강하게 붙잡아 고속 기동 공격을 가한다.",
    stats: [50, 15, 5],
    extraStats: dashAndBurst(30, 80)
  },
  "PART-X-BIT-Y": {
    desc: "대형 구형 축 끝의 지구력과 네 방향으로 돌출된 연동 날의 자세 제어 성능을 양립한다.",
    stats: [10, 15, 65],
    extraStats: dashAndBurst(10, 30)
  },
  "PART-X-BIT-J": {
    desc: "가늘고 평평한 축 끝으로 스태미나 손실을 줄인 공격과 대형 기어를 통한 고속 익스트림 대시를 겸비한다.",
    stats: [35, 10, 15],
    extraStats: dashAndBurst(40, 80)
  },
  "PART-X-BIT-GU": {
    desc: "끝에서 기어를 제어하는 구형 축 끝에 평평한 접지면과 중앙 돌기를 두어 공격·방어·지구 움직임을 겸비한다."
  },
  "PART-X-BIT-NR": {
    desc: "가느다란 축 모양의 축 끝으로 오래 회전하고, 10개 기어가 익스트림 대시 속도를 억제해 스태미나 손실을 줄인다."
  },
  "PART-X-BIT-DS": {
    desc: "방어 성능이 높은 뾰족한 축 끝에 원반형 움직임을 더하고, 버스트 저항과 맞바꿔 자세 제어 성능을 높인다."
  }
});

const xJapanPartDetailSplitIds = Object.freeze([
  ...Object.keys(xJapanPartDetails).filter((id) => id.includes("LOCK-CHIP")),
  ...Object.keys(xJapanPartDetails).filter((id) => id.includes("MAIN-BLADE")),
  ...Object.keys(xJapanPartDetails).filter((id) => id.includes("OVER-BLADE")),
  ...Object.keys(xJapanPartDetails).filter((id) => id.includes("ASSIST-BLADE"))
]);

const xJapanPartDetailFullIds = Object.freeze(
  Object.keys(xJapanPartDetails).filter((id) => !xJapanPartDetailSplitIds.includes(id))
);

const xJapanPartDetailExcludedIds = Object.freeze([
  "PART-X-BLADE-WARRIOR-STEEL",
  "PART-X-BLADE-LOCK-CHIP-LEON",
  "PART-X-BLADE-MAIN-BLADE-FANG"
]);

const applyXJapanPartDetails = (partItems) => {
  const partsById = new Map(partItems.map((part) => [part.id, part]));

  for (const [id, details] of Object.entries(xJapanPartDetails)) {
    const part = partsById.get(id);
    if (!part) throw new Error(`X 일본 공식 부품 상세 대상을 찾을 수 없습니다: ${id}`);
    Object.assign(part, details);
  }
};

export {
  applyXJapanPartDetails,
  xJapanPartDetails,
  xJapanPartDetailExcludedIds,
  xJapanPartDetailFullIds,
  xJapanPartDetailSplitIds
};
