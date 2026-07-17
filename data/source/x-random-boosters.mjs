const xRandomBoosterPartItems = [
  { id: "PART-X-BLADE-LOCK-CHIP-UNICORN", series: "x", type: "blade", name: "유니콘", en: "Unicorn", spin: "right", xLine: "custom", xBladeRole: "lockChip", desc: "", stats: [] },
  { id: "PART-X-BLADE-MAIN-BLADE-DELTA", series: "x", type: "blade", name: "델타", en: "Delta", battleType: "", spin: "right", xLine: "custom", xBladeRole: "metalBlade", desc: "", stats: [] },
  { id: "PART-X-BLADE-OVER-BLADE-PEAK", series: "x", type: "blade", name: "P", en: "Peak", sub: "피크", battleType: "", spin: "right", xLine: "custom", xBladeRole: "overBlade", desc: "", stats: [] },
  { id: "PART-X-BLADE-ASSIST-BLADE-ODD", series: "x", type: "blade", name: "O", en: "Odd", sub: "오드", battleType: "", spin: "right", xLine: "custom", xBladeRole: "assistBlade", desc: "", stats: [] },
  { id: "PART-X-BLADE-LOCK-CHIP-BRACHIO", series: "x", type: "blade", name: "브라키오", en: "Brachio", spin: "right", xLine: "custom", xBladeRole: "lockChip", desc: "", stats: [] },
  { id: "PART-X-BLADE-MAIN-BLADE-WHIP", series: "x", type: "blade", name: "윕", en: "Whip", battleType: "", spin: "right", xLine: "custom", xBladeRole: "metalBlade", desc: "", stats: [] },
  { id: "PART-X-BLADE-OVER-BLADE-OUTER", series: "x", type: "blade", name: "O", en: "Outer", sub: "아우터", battleType: "", spin: "right", xLine: "custom", xBladeRole: "overBlade", desc: "", stats: [] },
  { id: "PART-X-BLADE-HEAVENS-RING", series: "x", type: "blade", name: "헤븐즈링", en: "Heavens Ring", battleType: "defense", spin: "right", desc: "", stats: [10, 60, 30] },
  { id: "PART-X-BIT-GU", series: "x", type: "bit", name: "GU", en: "Gear Unite", sub: "기어 유나이트", battleType: "balance", desc: "", stats: [30, 20, 20], extraStats: [{ name: "대시력", value: 30 }, { name: "버스트 저항", value: 80 }] },
  { id: "PART-X-BIT-NR", series: "x", type: "bit", name: "Nr", en: "Narrow", sub: "내로우", battleType: "stamina", desc: "", stats: [15, 20, 60], extraStats: [{ name: "대시력", value: 5 }, { name: "버스트 저항", value: 30 }] },
  { id: "PART-X-BIT-DS", series: "x", type: "bit", name: "DS", en: "Disc Spike", sub: "디스크 스파이크", battleType: "defense", desc: "", stats: [5, 55, 40], extraStats: [{ name: "대시력", value: 10 }, { name: "버스트 저항", value: 20 }] }
];

const xRandomBoosterBeyItems = [
  { id: "BEY-X-BX-48-01-COBALT-DRAGOON-9-80F", series: "x", type: "bey", name: "코발트드래군 9-80F", jpName: "코발트드라군 9-80F", en: "Cobalt Dragoon 9-80F", productNo: "BX-48-01", battleType: "attack", spin: "left", desc: "", parts: ["PART-X-BLADE-COBALT-DRAGOON", "PART-X-RATCHET-9-80", "PART-X-BIT-F"] },
  { id: "BEY-X-BX-48-02-SHARK-EDGE-4-70E", series: "x", type: "bey", name: "샤크엣지 4-70E", en: "Shark Edge 4-70E", productNo: "BX-48-02", battleType: "balance", spin: "right", desc: "", parts: ["PART-X-BLADE-SHARK-EDGE", "PART-X-RATCHET-4-70", "PART-X-BIT-E"] },
  { id: "BEY-X-BX-48-03-MAMMOTH-TUSK-7-60S", series: "x", type: "bey", name: "매머드터스크 7-60S", jpName: "맘모스터스크 7-60S", en: "Mammoth Tusk 7-60S", productNo: "BX-48-03", battleType: "defense", spin: "right", desc: "", parts: ["PART-X-BLADE-MAMMOTH-TUSK", "PART-X-RATCHET-7-60", "PART-X-BIT-S"] },
  { id: "BEY-X-BX-48-04-HELLS-SCYTHE-3-85GB", series: "x", type: "bey", name: "헬즈사이드 3-85GB", jpName: "헬즈사이즈 3-85GB", en: "Hells Scythe 3-85GB", productNo: "BX-48-04", battleType: "stamina", spin: "right", desc: "", parts: ["PART-X-BLADE-HELLS-SCYTHE", "PART-X-RATCHET-3-85", "PART-X-BIT-GB"] },
  { id: "BEY-X-BX-48-05-DRAN-BUSTER-2-80Q", series: "x", type: "bey", name: "드랜버스터 2-80Q", jpName: "드란버스터 2-80Q", en: "Dran Buster 2-80Q", productNo: "BX-48-05", battleType: "attack", spin: "right", desc: "", parts: ["PART-X-BLADE-DRAN-BUSTER", "PART-X-RATCHET-2-80", "PART-X-BIT-Q"] },
  { id: "BEY-X-CX-17-01-UNICORN-DELTA-PO-3-60GU", series: "x", type: "bey", name: "유니콘 델타PO 3-60GU", en: "Unicorn Delta PO 3-60GU", productNo: "CX-17-01", battleType: "balance", spin: "right", desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-UNICORN", "PART-X-BLADE-MAIN-BLADE-DELTA", "PART-X-BLADE-OVER-BLADE-PEAK", "PART-X-BLADE-ASSIST-BLADE-ODD", "PART-X-RATCHET-3-60", "PART-X-BIT-GU"] },
  { id: "BEY-X-CX-17-02-UNICORN-DELTA-PO-1-80GR", series: "x", type: "bey", name: "유니콘 델타PO 1-80GR", en: "Unicorn Delta PO 1-80GR", productNo: "CX-17-02", battleType: "attack", spin: "right", desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-UNICORN", "PART-X-BLADE-MAIN-BLADE-DELTA", "PART-X-BLADE-OVER-BLADE-PEAK", "PART-X-BLADE-ASSIST-BLADE-ODD", "PART-X-RATCHET-1-80", "PART-X-BIT-GR"] },
  { id: "BEY-X-CX-17-03-WARRIOR-SABER-9-65LO", series: "x", type: "bey", name: "워리어세이버 9-65LO", jpName: "사무라이세이버 9-65LO", en: "Warrior Saber 9-65LO", productNo: "CX-17-03", battleType: "stamina", spin: "right", desc: "", parts: ["PART-X-BLADE-WARRIOR-SABER", "PART-X-RATCHET-9-65", "PART-X-BIT-LO"] },
  { id: "BEY-X-CX-17-04-HELLS-HAMMER-3-85GU", series: "x", type: "bey", name: "헬즈해머 3-85GU", en: "Hells Hammer 3-85GU", productNo: "CX-17-04", battleType: "balance", spin: "right", desc: "", parts: ["PART-X-BLADE-HELLS-HAMMER", "PART-X-RATCHET-3-85", "PART-X-BIT-GU"] },
  { id: "BEY-X-CX-17-05-TYRANNO-BEAT-3-60N", series: "x", type: "bey", name: "티라노비트 3-60N", en: "Tyranno Beat 3-60N", productNo: "CX-17-05", battleType: "defense", spin: "right", desc: "", parts: ["PART-X-BLADE-TYRANNO-BEAT", "PART-X-RATCHET-3-60", "PART-X-BIT-N"] },
  { id: "BEY-X-CX-17-06-CRIMSON-GARUDA-7-80GU", series: "x", type: "bey", name: "크림슨가루다 7-80GU", en: "Crimson Garuda 7-80GU", productNo: "CX-17-06", battleType: "balance", spin: "right", desc: "", parts: ["PART-X-BLADE-CRIMSON-GARUDA", "PART-X-RATCHET-7-80", "PART-X-BIT-GU"] },
  { id: "BEY-X-CX-18-01-BRACHIO-WHIP-OW-5-70NR", series: "x", type: "bey", name: "브라키오 윕OW 5-70Nr", en: "Brachio Whip OW 5-70Nr", productNo: "CX-18-01", battleType: "stamina", spin: "right", desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-BRACHIO", "PART-X-BLADE-MAIN-BLADE-WHIP", "PART-X-BLADE-OVER-BLADE-OUTER", "PART-X-BLADE-ASSIST-BLADE-WHEEL", "PART-X-RATCHET-5-70", "PART-X-BIT-NR"] },
  { id: "BEY-X-CX-18-02-BRACHIO-WHIP-OW-5-70NR", series: "x", type: "bey", name: "브라키오 윕OW 5-70Nr", en: "Brachio Whip OW 5-70Nr", productNo: "CX-18-02", battleType: "stamina", spin: "right", desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-BRACHIO", "PART-X-BLADE-MAIN-BLADE-WHIP", "PART-X-BLADE-OVER-BLADE-OUTER", "PART-X-BLADE-ASSIST-BLADE-WHEEL", "PART-X-RATCHET-5-70", "PART-X-BIT-NR"] },
  { id: "BEY-X-CX-18-03-BRACHIO-WHIP-OW-5-70NR", series: "x", type: "bey", name: "브라키오 윕OW 5-70Nr", en: "Brachio Whip OW 5-70Nr", productNo: "CX-18-03", battleType: "stamina", spin: "right", desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-BRACHIO", "PART-X-BLADE-MAIN-BLADE-WHIP", "PART-X-BLADE-OVER-BLADE-OUTER", "PART-X-BLADE-ASSIST-BLADE-WHEEL", "PART-X-RATCHET-5-70", "PART-X-BIT-NR"] },
  { id: "BEY-X-BX-50-01-HEAVENS-RING-0-80DS", series: "x", type: "bey", name: "헤븐즈링 0-80DS", en: "Heavens Ring 0-80DS", productNo: "BX-50-01", battleType: "defense", spin: "right", desc: "", parts: ["PART-X-BLADE-HEAVENS-RING", "PART-X-RATCHET-0-80", "PART-X-BIT-DS"] },
  { id: "BEY-X-BX-50-02-HEAVENS-RING-6-60TP", series: "x", type: "bey", name: "헤븐즈링 6-60TP", en: "Heavens Ring 6-60TP", productNo: "BX-50-02", battleType: "balance", spin: "right", desc: "", parts: ["PART-X-BLADE-HEAVENS-RING", "PART-X-RATCHET-6-60", "PART-X-BIT-TP"] },
  { id: "BEY-X-BX-50-03-IMPACT-DRAKE-7-55FB", series: "x", type: "bey", name: "임팩트드레이크 7-55FB", en: "Impact Drake 7-55FB", productNo: "BX-50-03", battleType: "stamina", spin: "right", desc: "", parts: ["PART-X-BLADE-IMPACT-DRAKE", "PART-X-RATCHET-7-55", "PART-X-BIT-FB"] },
  { id: "BEY-X-BX-50-04-GHOST-CIRCLE-M-85DS", series: "x", type: "bey", name: "고스트서클 M-85DS", en: "Ghost Circle M-85DS", productNo: "BX-50-04", battleType: "defense", spin: "right", desc: "", parts: ["PART-X-BLADE-GHOST-CIRCLE", "PART-X-RATCHET-M-85", "PART-X-BIT-DS"] },
  { id: "BEY-X-BX-50-05-WOLF-FLAME-D-9-65L", series: "x", type: "bey", name: "울프 플레임D 9-65L", en: "Wolf Flame D 9-65L", productNo: "BX-50-05", battleType: "attack", spin: "right", desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-WOLF", "PART-X-BLADE-MAIN-BLADE-FLAME", "PART-X-BLADE-ASSIST-BLADE-DUAL", "PART-X-RATCHET-9-65", "PART-X-BIT-L"] },
  { id: "BEY-X-BX-50-06-KERBEROS-REAPER-B-0-80WB", series: "x", type: "bey", name: "케르베로스 리퍼B 0-80WB", en: "Kerberos Reaper B 0-80WB", productNo: "BX-50-06", battleType: "stamina", spin: "right", desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-KERBEROS", "PART-X-BLADE-MAIN-BLADE-REAPER", "PART-X-BLADE-ASSIST-BLADE-BUMPER", "PART-X-RATCHET-0-80", "PART-X-BIT-WB"] },
  { id: "BEY-X-BX-00-01-LIGHTNING-L-DRAGO-UPPER-1-60F", series: "x", type: "bey", name: "라이트닝 엘드라고 1-60F (어퍼형)", jpName: "라이트닝엘드라고 1-60F (어퍼형)", en: "Lightning L-Drago 1-60F (Upper Mode)", productNo: "BX-00-01", battleType: "attack", spin: "left", desc: "", parts: ["PART-X-BLADE-LIGHTNING-L-DRAGO-UPPER", "PART-X-RATCHET-1-60", "PART-X-BIT-F"] },
  { id: "BEY-X-BX-00-02-LIGHTNING-L-DRAGO-BARRAGE-1-60F", series: "x", type: "bey", name: "라이트닝 엘드라고 1-60F (연타형)", jpName: "라이트닝엘드라고 1-60F (연타형)", en: "Lightning L-Drago 1-60F (Barrage Mode)", productNo: "BX-00-02", battleType: "attack", spin: "left", desc: "", parts: ["PART-X-BLADE-LIGHTNING-L-DRAGO-BARRAGE", "PART-X-RATCHET-1-60", "PART-X-BIT-F"] }
];

const xRandomBoosterLineups = {
  "PRODUCT-X-BX-48": xRandomBoosterBeyItems.slice(0, 5).map(item => item.id),
  "PRODUCT-X-CX-17": xRandomBoosterBeyItems.slice(5, 11).map(item => item.id),
  "PRODUCT-X-CX-18": xRandomBoosterBeyItems.slice(11, 14).map(item => item.id),
  "PRODUCT-X-BX-50": xRandomBoosterBeyItems.slice(14, 20).map(item => item.id),
  "PRODUCT-X-BX-00-LIGHTNING-L-DRAGO-1-60F": xRandomBoosterBeyItems.slice(20, 22).map(item => item.id)
};

export {
  xRandomBoosterBeyItems,
  xRandomBoosterLineups,
  xRandomBoosterPartItems
};
