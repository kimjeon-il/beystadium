const item = (name, target, quantity = "1개") => ({ name, quantity, target });

const xSetPartItems = [
  { id: "PART-X-BLADE-IRON-MAN", series: "x", type: "blade", name: "아이언맨", en: "Iron Man", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-THANOS", series: "x", type: "blade", name: "타노스", en: "Thanos", battleType: "balance", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-SPIDER-MAN", series: "x", type: "blade", name: "스파이더맨", en: "Spider-Man", battleType: "attack", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-VENOM", series: "x", type: "blade", name: "베놈", en: "Venom", battleType: "defense", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-LUKE-SKYWALKER", series: "x", type: "blade", name: "루크 스카이워커", en: "Luke Skywalker", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-DARTH-VADER", series: "x", type: "blade", name: "다스 베이더", en: "Darth Vader", battleType: "balance", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-THE-MANDALORIAN", series: "x", type: "blade", name: "만달로리안", en: "The Mandalorian", battleType: "attack", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-MOFF-GIDEON", series: "x", type: "blade", name: "모프 기디언", en: "Moff Gideon", battleType: "defense", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-OPTIMUS-PRIME", series: "x", type: "blade", name: "옵티머스 프라임", en: "Optimus Prime", battleType: "balance", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-MEGATRON", series: "x", type: "blade", name: "메가트론", en: "Megatron", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-OPTIMUS-PRIMAL", series: "x", type: "blade", name: "옵티머스 프라이멀", en: "Optimus Primal", battleType: "attack", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-STARSCREAM", series: "x", type: "blade", name: "스타스크림", en: "Starscream", battleType: "defense", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-T-REX", series: "x", type: "blade", name: "티렉스", en: "T. Rex", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-MOSASAURUS", series: "x", type: "blade", name: "모사사우루스", en: "Mosasaurus", battleType: "balance", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-SPINOSAURUS", series: "x", type: "blade", name: "스피노사우루스", en: "Spinosaurus", battleType: "attack", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-QUETZALCOATLUS", series: "x", type: "blade", name: "케찰코아틀루스", en: "Quetzalcoatlus", battleType: "defense", spin: "right", tags: [], desc: "", stats: [] },
  { id: "PART-X-BLADE-LOCK-CHIP-EVA", series: "x", type: "blade", name: "에바", en: "Eva", spin: "right", xLine: "custom", xBladeRole: "lockChip", tags: [], desc: "", stats: [] }
];

const xSetBeyItems = [
  { id: "BEY-X-UX-10-KNIGHT-MAIL-3-85BS", series: "x", type: "bey", name: "나이트메일 3-85BS", en: "Knight Mail 3-85BS", productNo: "UX-10", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-KNIGHT-MAIL", "PART-X-RATCHET-3-85", "PART-X-BIT-BS"] },
  { id: "BEY-X-BX-00-DRAN-SWORD-3-60F", series: "x", type: "bey", name: "드랜소드 3-60F", jpName: "드란소드 3-60F", en: "Dran Sword 3-60F", productNo: "BX-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-DRAN-SWORD", "PART-X-RATCHET-3-60", "PART-X-BIT-F"] },
  { id: "BEY-X-BX-00-VICTORY-VALKYRIE-2-60RA", series: "x", type: "bey", name: "빅토리 발키리 2-60RA", jpName: "빅토리발키리 2-60RA", en: "Victory Valkyrie 2-60RA", productNo: "BX-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-VICTORY-VALKYRIE", "PART-X-RATCHET-2-60", "PART-X-BIT-RA"] },
  { id: "BEY-X-BX-00-IRON-MAN-4-80B", series: "x", type: "bey", name: "아이언맨 4-80B", en: "Iron Man 4-80B", productNo: "BX-00", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-IRON-MAN", "PART-X-RATCHET-4-80", "PART-X-BIT-B"] },
  { id: "BEY-X-BX-00-THANOS-4-60P", series: "x", type: "bey", name: "타노스 4-60P", en: "Thanos 4-60P", productNo: "BX-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-THANOS", "PART-X-RATCHET-4-60", "PART-X-BIT-P"] },
  { id: "BEY-X-BX-00-SPIDER-MAN-3-60F", series: "x", type: "bey", name: "스파이더맨 3-60F", en: "Spider-Man 3-60F", productNo: "BX-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-SPIDER-MAN", "PART-X-RATCHET-3-60", "PART-X-BIT-F"] },
  { id: "BEY-X-BX-00-VENOM-3-80N", series: "x", type: "bey", name: "베놈 3-80N", en: "Venom 3-80N", productNo: "BX-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-VENOM", "PART-X-RATCHET-3-80", "PART-X-BIT-N"] },
  { id: "BEY-X-BX-00-LUKE-SKYWALKER-4-80B", series: "x", type: "bey", name: "루크 스카이워커 4-80B", en: "Luke Skywalker 4-80B", productNo: "BX-00", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-LUKE-SKYWALKER", "PART-X-RATCHET-4-80", "PART-X-BIT-B"] },
  { id: "BEY-X-BX-00-DARTH-VADER-4-60P", series: "x", type: "bey", name: "다스 베이더 4-60P", en: "Darth Vader 4-60P", productNo: "BX-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-DARTH-VADER", "PART-X-RATCHET-4-60", "PART-X-BIT-P"] },
  { id: "BEY-X-BX-00-THE-MANDALORIAN-3-60F", series: "x", type: "bey", name: "만달로리안 3-60F", en: "The Mandalorian 3-60F", productNo: "BX-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-THE-MANDALORIAN", "PART-X-RATCHET-3-60", "PART-X-BIT-F"] },
  { id: "BEY-X-BX-00-MOFF-GIDEON-3-80N", series: "x", type: "bey", name: "모프 기디언 3-80N", en: "Moff Gideon 3-80N", productNo: "BX-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-MOFF-GIDEON", "PART-X-RATCHET-3-80", "PART-X-BIT-N"] },
  { id: "BEY-X-BX-00-OPTIMUS-PRIME-4-60P", series: "x", type: "bey", name: "옵티머스 프라임 4-60P", en: "Optimus Prime 4-60P", productNo: "BX-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-OPTIMUS-PRIME", "PART-X-RATCHET-4-60", "PART-X-BIT-P"] },
  { id: "BEY-X-BX-00-MEGATRON-4-80B", series: "x", type: "bey", name: "메가트론 4-80B", en: "Megatron 4-80B", productNo: "BX-00", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-MEGATRON", "PART-X-RATCHET-4-80", "PART-X-BIT-B"] },
  { id: "BEY-X-BX-00-OPTIMUS-PRIMAL-3-60F", series: "x", type: "bey", name: "옵티머스 프라이멀 3-60F", en: "Optimus Primal 3-60F", productNo: "BX-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-OPTIMUS-PRIMAL", "PART-X-RATCHET-3-60", "PART-X-BIT-F"] },
  { id: "BEY-X-BX-00-STARSCREAM-3-80N", series: "x", type: "bey", name: "스타스크림 3-80N", en: "Starscream 3-80N", productNo: "BX-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-STARSCREAM", "PART-X-RATCHET-3-80", "PART-X-BIT-N"] },
  { id: "BEY-X-BX-00-T-REX-1-80GB", series: "x", type: "bey", name: "티렉스 1-80GB", en: "T. Rex 1-80GB", productNo: "BX-00", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-T-REX", "PART-X-RATCHET-1-80", "PART-X-BIT-GB"] },
  { id: "BEY-X-BX-00-MOSASAURUS-9-60U", series: "x", type: "bey", name: "모사사우루스 9-60U", en: "Mosasaurus 9-60U", productNo: "BX-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-MOSASAURUS", "PART-X-RATCHET-9-60", "PART-X-BIT-U"] },
  { id: "BEY-X-BX-00-SPINOSAURUS-3-85A", series: "x", type: "bey", name: "스피노사우루스 3-85A", en: "Spinosaurus 3-85A", productNo: "BX-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-SPINOSAURUS", "PART-X-RATCHET-3-85", "PART-X-BIT-A"] },
  { id: "BEY-X-BX-00-QUETZALCOATLUS-4-55D", series: "x", type: "bey", name: "케찰코아틀루스 4-55D", en: "Quetzalcoatlus 4-55D", productNo: "BX-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-QUETZALCOATLUS", "PART-X-RATCHET-4-55", "PART-X-BIT-D"] },
  { id: "BEY-X-CX-16-BAHAMUT-BLITZ-BK-1-50I", series: "x", type: "bey", name: "바하무트 블리츠BK 1-50I", en: "Bahamut Blitz BK 1-50I", productNo: "CX-16", battleType: "", spin: "", tags: [], desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-BAHAMUT", "PART-X-BLADE-MAIN-BLADE-BLITZ", "PART-X-BLADE-OVER-BLADE-BRAKE", "PART-X-BLADE-ASSIST-BLADE-KNUCKLE", "PART-X-RATCHET-1-50", "PART-X-BIT-I"] },
  { id: "BEY-X-CX-00-EVA-ARC-B-0-70E", series: "x", type: "bey", name: "에바 아크B 0-70E", en: "EvaArc B0-70E", productNo: "CX-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-EVA", "PART-X-BLADE-MAIN-BLADE-ARC", "PART-X-BLADE-ASSIST-BLADE-BUMPER", "PART-X-RATCHET-0-70", "PART-X-BIT-E"] },
  { id: "BEY-X-CX-00-EVA-BRAVE-A-1-70V", series: "x", type: "bey", name: "에바 브레이브A 1-70V", en: "EvaBrave A1-70V", productNo: "CX-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-EVA", "PART-X-BLADE-MAIN-BLADE-BRAVE", "PART-X-BLADE-ASSIST-BLADE-ASSAULT", "PART-X-RATCHET-1-70", "PART-X-BIT-V"] },
  { id: "BEY-X-CX-00-EVA-BRUSH-T-2-70A", series: "x", type: "bey", name: "에바 브러시T 2-70A", en: "EvaBrush T2-70A", productNo: "CX-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-X-BLADE-LOCK-CHIP-EVA", "PART-X-BLADE-MAIN-BLADE-BRUSH", "PART-X-BLADE-ASSIST-BLADE-TURN", "PART-X-RATCHET-2-70", "PART-X-BIT-A"] }
];

const xSetProductCompositions = {
  "PRODUCT-X-BX-07": {
    kr: [item("드랜소드 3-60F", "BEY-X-BX-07-DRAN-SWORD-3-60F"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM"), item("스트링런처", "TOOLS-X-STRING-LAUNCHER"), item("런처그립", "TOOLS-X-LAUNCHER-GRIP")],
    jp: [item("드란소드 3-60F", "BEY-X-BX-07-DRAN-SWORD-3-60F"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM"), item("스트링런처", "TOOLS-X-STRING-LAUNCHER"), item("런처그립", "TOOLS-X-LAUNCHER-GRIP")]
  },
  "PRODUCT-X-BX-08": {
    kr: [item("헬즈사이드 3-80B", "BEY-X-BX-08-HELLS-SCYTHE-3-80B"), item("위저드애로우 4-60N", "BEY-X-BX-08-WIZARD-ARROW-4-60N"), item("나이트실드 4-80T", "BEY-X-BX-08-KNIGHT-SHIELD-4-80T")],
    jp: [item("헬즈사이즈 3-80B", "BEY-X-BX-08-HELLS-SCYTHE-3-80B"), item("위저드애로우 4-60N", "BEY-X-BX-08-WIZARD-ARROW-4-60N"), item("나이트실드 4-80T", "BEY-X-BX-08-KNIGHT-SHIELD-4-80T")]
  },
  "PRODUCT-X-BX-09": {
    kr: [item("베이 배틀 로거", "TOOLS-X-BEY-BATTLE-LOGGER")],
    jp: [item("베이 배틀 패스", "TOOLS-X-BEY-BATTLE-LOGGER")]
  },
  "PRODUCT-X-BX-17": {
    kr: [item("드랜소드 3-60F", "BEY-X-BX-17-DRAN-SWORD-3-60F"), item("위저드애로우 4-80B", "BEY-X-BX-17-WIZARD-ARROW-4-80B"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER", "2개"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM")],
    jp: [item("드란소드 3-60F", "BEY-X-BX-17-DRAN-SWORD-3-60F"), item("위저드애로우 4-80B", "BEY-X-BX-17-WIZARD-ARROW-4-80B"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER", "2개"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM")]
  },
  "PRODUCT-X-BX-20": {
    kr: [item("드랜대거 4-60R", "BEY-X-BX-20-DRAN-DAGGER-4-60R"), item("나이트실드 5-80T", "BEY-X-BX-20-KNIGHT-SHIELD-5-80T"), item("샤크엣지 3-80F", "BEY-X-BX-20-SHARK-EDGE-3-80F")],
    jp: [item("드란대거 4-60R", "BEY-X-BX-20-DRAN-DAGGER-4-60R"), item("나이트실드 5-80T", "BEY-X-BX-20-KNIGHT-SHIELD-5-80T"), item("샤크엣지 3-80F", "BEY-X-BX-20-SHARK-EDGE-3-80F")]
  },
  "PRODUCT-X-BX-21": {
    kr: [item("헬즈체인 5-60HT", "BEY-X-BX-21-HELLS-CHAIN-5-60HT"), item("나이트랜스 3-60LF", "BEY-X-BX-21-KNIGHT-LANCE-3-60LF"), item("위저드애로우 4-80N", "BEY-X-BX-21-WIZARD-ARROW-4-80N")],
    jp: [item("헬즈체인 5-60HT", "BEY-X-BX-21-HELLS-CHAIN-5-60HT"), item("나이트랜스 3-60LF", "BEY-X-BX-21-KNIGHT-LANCE-3-60LF"), item("위저드애로우 4-80N", "BEY-X-BX-21-WIZARD-ARROW-4-80N")]
  },
  "PRODUCT-X-UX-04": {
    kr: [item("드랜버스터 1-60A", "BEY-X-UX-04-DRAN-BUSTER-1-60A"), item("위저드로드 5-70DB", "BEY-X-UX-04-WIZARD-ROD-5-70DB"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER", "2개"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM")],
    jp: [item("드란버스터 1-60A", "BEY-X-UX-04-DRAN-BUSTER-1-60A"), item("위저드로드 5-70DB", "BEY-X-UX-04-WIZARD-ROD-5-70DB"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER", "2개"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM")]
  },
  "PRODUCT-X-UX-07": {
    kr: [item("피닉스러더 9-70G", "BEY-X-UX-07-PHOENIX-RUDDER-9-70G"), item("스핑크스카울 1-80GF", "BEY-X-UX-07-SPHINX-COWL-1-80GF"), item("와이번게일 2-60S", "BEY-X-UX-07-WYVERN-GALE-2-60S")],
    jp: [item("피닉스러더 9-70G", "BEY-X-UX-07-PHOENIX-RUDDER-9-70G"), item("스핑크스카울 1-80GF", "BEY-X-UX-07-SPHINX-COWL-1-80GF"), item("와이번게일 2-60S", "BEY-X-UX-07-WYVERN-GALE-2-60S")]
  },
  "PRODUCT-X-BX-37": {
    kr: [item("베어스크래치 5-60F", "BEY-X-BX-37-BEAR-SCRATCH-5-60F"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER"), item("더블익스트림스타디움", "TOOLS-X-DOUBLE-XTREME-STADIUM")],
    jp: [item("베어스크래치 5-60F", "BEY-X-BX-37-BEAR-SCRATCH-5-60F"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER"), item("더블익스트림스타디움", "TOOLS-X-DOUBLE-XTREME-STADIUM")]
  },
  "PRODUCT-X-UX-10": {
    kr: [item("나이트메일 3-85BS", "BEY-X-UX-10-KNIGHT-MAIL-3-85BS"), item("프테라스윙", "PART-X-BLADE-PTERA-SWING"), item("헬즈해머", "PART-X-BLADE-HELLS-HAMMER"), item("티라노비트", "PART-X-BLADE-TYRANNO-BEAT"), item("1-60", "PART-X-RATCHET-1-60"), item("7-70", "PART-X-RATCHET-7-70"), item("볼", "PART-X-BIT-B"), item("메탈 니들", "PART-X-BIT-MN"), item("포인트", "PART-X-BIT-P"), item("러버 액셀", "PART-X-BIT-RA"), item("러시", "PART-X-BIT-R")],
    jp: [item("나이트메일 3-85BS", "BEY-X-UX-10-KNIGHT-MAIL-3-85BS"), item("프테라스윙", "PART-X-BLADE-PTERA-SWING"), item("헬즈해머", "PART-X-BLADE-HELLS-HAMMER"), item("티라노비트", "PART-X-BLADE-TYRANNO-BEAT"), item("1-60", "PART-X-RATCHET-1-60"), item("7-70", "PART-X-RATCHET-7-70"), item("볼", "PART-X-BIT-B"), item("메탈 니들", "PART-X-BIT-MN"), item("포인트", "PART-X-BIT-P"), item("러버 액셀", "PART-X-BIT-RA"), item("러시", "PART-X-BIT-R")]
  },
  "PRODUCT-X-UX-00-BEY-KICKOFF-SET-FC-BARCELONA": {
    kr: [item("헬즈해머 3-70H", "BEY-X-UX-00-HELLS-HAMMER-3-70H"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM")],
    jp: [item("헬즈해머 3-70H", "BEY-X-UX-00-HELLS-HAMMER-3-70H"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM")]
  },
  "PRODUCT-X-CX-04": {
    kr: [item("드랜 브레이브S 6-60V", "BEY-X-CX-04-DRAN-BRAVE-S-6-60V"), item("페르세우스 다크B 6-80W", "BEY-X-CX-04-PERSEUS-DARK-B-6-80W"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER", "2개"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM")],
    jp: [item("드란 브레이브S 6-60V", "BEY-X-CX-04-DRAN-BRAVE-S-6-60V"), item("페르세우스 다크B 6-80W", "BEY-X-CX-04-PERSEUS-DARK-B-6-80W"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER", "2개"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM")]
  },
  "PRODUCT-X-UX-15": {
    kr: [item("샤크스케일 4-50UF", "BEY-X-UX-15-SHARK-SCALE-4-50UF"), item("티라노로어 1-70L", "BEY-X-UX-15-TYRANNO-ROAR-1-70L"), item("헬즈 브레이브J 3-60GF", "BEY-X-UX-15-HELLS-BRAVE-J-3-60GF")],
    jp: [item("샤크스케일 4-50UF", "BEY-X-UX-15-SHARK-SCALE-4-50UF"), item("티라노로어 1-70L", "BEY-X-UX-15-TYRANNO-ROAR-1-70L"), item("헬즈 브레이브J 3-60GF", "BEY-X-UX-15-HELLS-BRAVE-J-3-60GF")]
  },
  "PRODUCT-X-BX-00-BEYBLADE-25TH-ANNIVERSARY-SET": {
    jp: [item("드라군스톰 4-60RA", "BEY-X-BX-00-DRAGOON-STORM-4-60RA"), item("스톰 페가시스 3-70RA", "BEY-X-BX-00-STORM-PEGASIS-3-70RA"), item("빅토리발키리 2-60RA", "BEY-X-BX-00-VICTORY-VALKYRIE-2-60RA"), item("드란소드 3-60F", "BEY-X-BX-00-DRAN-SWORD-3-60F"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER"), item("와인더런처L", "TOOLS-X-WINDER-LAUNCHER-L"), item("스트링런처", "TOOLS-X-STRING-LAUNCHER", "2개")]
  },
  "PRODUCT-X-BX-00-IRON-MAN-4-80B-THANOS-4-60P": {
    jp: [item("아이언맨 4-80B", "BEY-X-BX-00-IRON-MAN-4-80B"), item("타노스 4-60P", "BEY-X-BX-00-THANOS-4-60P"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")]
  },
  "PRODUCT-X-BX-00-SPIDER-MAN-3-60F-VENOM-3-80N": {
    jp: [item("스파이더맨 3-60F", "BEY-X-BX-00-SPIDER-MAN-3-60F"), item("베놈 3-80N", "BEY-X-BX-00-VENOM-3-80N"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")]
  },
  "PRODUCT-X-BX-00-LUKE-SKYWALKER-4-80B-DARTH-VADER-4-60P": {
    jp: [item("루크 스카이워커 4-80B", "BEY-X-BX-00-LUKE-SKYWALKER-4-80B"), item("다스 베이더 4-60P", "BEY-X-BX-00-DARTH-VADER-4-60P"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")]
  },
  "PRODUCT-X-BX-00-MANDALORIAN-3-60F-MOFF-GIDEON-3-80N": {
    jp: [item("만달로리안 3-60F", "BEY-X-BX-00-THE-MANDALORIAN-3-60F"), item("모프 기디언 3-80N", "BEY-X-BX-00-MOFF-GIDEON-3-80N"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")]
  },
  "PRODUCT-X-BX-00-OPTIMUS-PRIME-4-60P-MEGATRON-4-80B": {
    jp: [item("옵티머스 프라임 4-60P", "BEY-X-BX-00-OPTIMUS-PRIME-4-60P"), item("메가트론 4-80B", "BEY-X-BX-00-MEGATRON-4-80B"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")]
  },
  "PRODUCT-X-BX-00-OPTIMUS-PRIMAL-3-60F-STARSCREAM-3-80N": {
    jp: [item("옵티머스 프라이멀 3-60F", "BEY-X-BX-00-OPTIMUS-PRIMAL-3-60F"), item("스타스크림 3-80N", "BEY-X-BX-00-STARSCREAM-3-80N"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")]
  },
  "PRODUCT-X-BX-00-T-REX-MOSASAURUS": {
    kr: [item("티렉스 1-80GB", "BEY-X-BX-00-T-REX-1-80GB"), item("모사사우루스 9-60U", "BEY-X-BX-00-MOSASAURUS-9-60U"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")],
    jp: [item("티렉스 1-80GB", "BEY-X-BX-00-T-REX-1-80GB"), item("모사사우루스 9-60U", "BEY-X-BX-00-MOSASAURUS-9-60U"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")]
  },
  "PRODUCT-X-BX-00-SPINOSAURUS-QUETZALCOATLUS": {
    kr: [item("스피노사우루스 3-85A", "BEY-X-BX-00-SPINOSAURUS-3-85A"), item("케찰코아틀루스 4-55D", "BEY-X-BX-00-QUETZALCOATLUS-4-55D"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")],
    jp: [item("스피노사우루스 3-85A", "BEY-X-BX-00-SPINOSAURUS-3-85A"), item("케찰코아틀루스 4-55D", "BEY-X-BX-00-QUETZALCOATLUS-4-55D"), item("엔트리런처", "TOOLS-X-ENTRY-LAUNCHER", "2개")]
  },
  "PRODUCT-X-CX-00-EVANGELION-DECK-SET": {
    jp: [item("에바 아크B 0-70E", "BEY-X-CX-00-EVA-ARC-B-0-70E"), item("에바 브레이브A 1-70V", "BEY-X-CX-00-EVA-BRAVE-A-1-70V"), item("에바 브러시T 2-70A", "BEY-X-CX-00-EVA-BRUSH-T-2-70A"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER", "2개"), item("베이블레이드 수납 박스", "TOOLS-X-BEYBLADE-STORAGE-BOX")]
  },
  "PRODUCT-X-CX-16": {
    jp: [item("바하무트 블리츠BK 1-50I", "BEY-X-CX-16-BAHAMUT-BLITZ-BK-1-50I"), item("와인더런처", "TOOLS-X-WINDER-LAUNCHER"), item("런처그립", "TOOLS-X-LAUNCHER-GRIP"), item("익스트림스타디움", "TOOLS-X-XTREME-STADIUM")]
  }
};

export { xSetBeyItems, xSetPartItems, xSetProductCompositions };
