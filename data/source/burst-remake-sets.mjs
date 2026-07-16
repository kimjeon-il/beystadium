const item = (name, target, quantity = "1개") => ({ name, quantity, target });

const burstRemakeSetBeyItems = [
  { id: "BEY-BURST-B-00-DRAGOON-STORM-W-X", series: "burst", type: "bey", name: "드래곤 스톰.W.X", jpName: "드라군 스톰.W.X", en: "Dragoon Storm.W.X", productNo: "B-00", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRAGOON-STORM", "PART-BURST-DISK-WING", "PART-BURST-DRIVER-XTREME"] },
  { id: "BEY-BURST-B-00-DRANZER-SPIRAL-S-T", series: "burst", type: "bey", name: "드랜져 스파이럴.S.T", jpName: "드랜저 스파이럴.S.T", en: "Dranzer Spiral.S.T", productNo: "B-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRANZER-SPIRAL", "PART-BURST-DISK-SPREAD", "PART-BURST-DRIVER-TRANS"] },
  { id: "BEY-BURST-B-00-DRIGER-SLASH-H-F", series: "burst", type: "bey", name: "드래이거 슬래시.H.F", jpName: "드라이거 슬래시.H.F", en: "Driger Slash.H.F", productNo: "B-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRIGER-SLASH", "PART-BURST-DISK-HEAVY", "PART-BURST-DRIVER-FUSION"] },
  { id: "BEY-BURST-B-00-DRACIEL-SHIELD-C-P", series: "burst", type: "bey", name: "드래셀 실드.C.P", jpName: "드라시엘 실드.C.P", en: "Draciel Shield.C.P", productNo: "B-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRACIEL-SHIELD", "PART-BURST-DISK-CENTRAL", "PART-BURST-DRIVER-PRESS"] },
  { id: "BEY-BURST-B-00-WOLBORG-8-BR", series: "burst", type: "bey", name: "하운드 도그.8.Br", jpName: "울보그.8.Br", en: "Wolborg.8.Br", productNo: "B-00", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-WOLBORG", "PART-BURST-COREDISK-8", "PART-BURST-DRIVER-BEARING"] },
  { id: "BEY-BURST-B-00-DRAGOON-PHANTOM-G-V", series: "burst", type: "bey", name: "드래곤 팬텀.G.V", jpName: "드라군 팬텀.G.V", en: "Dragoon Phantom.G.V", productNo: "B-00", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRAGOON-PHANTOM", "PART-BURST-DISK-GRAVITY", "PART-BURST-DRIVER-VARIABLE"] },
  { id: "BEY-BURST-B-00-DRANZER-FLAME-Y-ZT", series: "burst", type: "bey", name: "윙 팔콘.Y.Zt", jpName: "드랜저 플레임.Y.Zt", en: "Dranzer Flame.Y.Zt", productNo: "B-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRANZER-FLAME", "PART-BURST-DISK-YELL", "PART-BURST-DRIVER-ZETA"] },
  { id: "BEY-BURST-B-00-DRIGER-FANG-0-XT", series: "burst", type: "bey", name: "클로 타이거.0.Xt", jpName: "드라이거 팽.0.Xt", en: "Driger Fang.0.Xt", productNo: "B-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRIGER-FANG", "PART-BURST-COREDISK-0", "PART-BURST-DRIVER-XTEND"] },
  { id: "BEY-BURST-B-00-DRACIEL-FORTRESS-10-PL", series: "burst", type: "bey", name: "드래셀 포트리스.10.Pl", jpName: "드라시엘 포트리스.10.Pl", en: "Draciel Fortress.10.Pl", productNo: "B-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRACIEL-FORTRESS", "PART-BURST-COREDISK-10", "PART-BURST-DRIVER-PLANET"] },

  { id: "BEY-BURST-B-00-STORM-PEGASIS-10-G-QC-DASH", series: "burst", type: "bey", name: "플래시 슬레이프닐.10G.Qc'", jpName: "스톰 페가시스.10G.Qc'", en: "Storm Pegasis.10G.Qc'", productNo: "B-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-STORM-PEGASIS", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-GLAIVE", "PART-BURST-DRIVER-QUICK-DASH"] },
  { id: "BEY-BURST-B-00-LIGHTNING-L-DRAGO-10-R-Z-DASH", series: "burst", type: "bey", name: "아쿠아 레비아단.10R.Z'", jpName: "라이트닝 엘드라고.10R.Z'", en: "Lightning L-Drago.10R.Z'", productNo: "B-00", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["PART-BURST-LAYER-LIGHTNING-L-DRAGO", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-REACH", "PART-BURST-DRIVER-ZEPHYR-DASH"] },
  { id: "BEY-BURST-B-00-FLAME-SAGITTARIO-8-DASH-C", series: "burst", type: "bey", name: "플레임 사지타리오.8'.C", jpName: "플레임 사지타리오.8'.C", en: "Flame Sagittario.8'.C", productNo: "B-00", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-FLAME-SAGITTARIO", "PART-BURST-COREDISK-8-DASH", "PART-BURST-DRIVER-CLAW"] },
  { id: "BEY-BURST-B-00-ROCK-LEONE-0-M", series: "burst", type: "bey", name: "로크 레온.0.M", jpName: "록 레오네.0.M", en: "Rock Leone.0.M", productNo: "B-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-ROCK-LEONE", "PART-BURST-COREDISK-0", "PART-BURST-DRIVER-MASSIVE"] },
  { id: "BEY-BURST-B-00-EARTH-AQUILA-2-Y", series: "burst", type: "bey", name: "어스 아쿠이라.2.Y", jpName: "어스 아쿠이라.2.Y", en: "Earth Aquila.2.Y", productNo: "B-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-EARTH-AQUILA", "PART-BURST-COREDISK-2", "PART-BURST-DRIVER-YIELDING"] },

  { id: "BEY-BURST-B-00-DRAGOON-VICTORY-ST-EV", series: "burst", type: "bey", name: "파이어 리저드.St.Ev", jpName: "드라군 빅토리.St.Ev", en: "Dragoon Victory.St.Ev", productNo: "B-00", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRAGOON-VICTORY", "PART-BURST-DISK-STING", "PART-BURST-DRIVER-EVOLUTION"] },
  { id: "BEY-BURST-B-00-DRANZER-VOLCANO-HR-DM", series: "burst", type: "bey", name: "드랜져 볼케이노.Hr.Dm", jpName: "드랜저 볼케이노.Hr.Dm", en: "Dranzer Volcano.Hr.Dm", productNo: "B-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRANZER-VOLCANO", "PART-BURST-DISK-HURRICANE", "PART-BURST-DRIVER-DIMENSION"] },
  { id: "BEY-BURST-B-00-DRIGER-VULCAN-10-R-W", series: "burst", type: "bey", name: "팽 타이거.10R.W", jpName: "드라이거 발칸.10R.W", en: "Driger Vulcan.10R.W", productNo: "B-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRIGER-VULCAN", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-REACH", "PART-BURST-DRIVER-WEIGHT"] },
  { id: "BEY-BURST-B-00-DRACIEL-VIPER-AR-OM", series: "burst", type: "bey", name: "프로텍션 터틀.Ar.Om", jpName: "드라시엘 바이퍼.Ar.Om", en: "Draciel Viper.Ar.Om", productNo: "B-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRACIEL-VIPER", "PART-BURST-DISK-AROUND", "PART-BURST-DRIVER-ORBIT-METAL"] },
  { id: "BEY-BURST-B-00-GAIA-DRAGOON-BURST-10-E-I", series: "burst", type: "bey", name: "가이아 드래곤 버스트.10E.I", jpName: "가이아 드라군 버스트.10E.I", en: "Gaia Dragoon Burst.10E.I", productNo: "B-00", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["PART-BURST-LAYER-GAIA-DRAGOON-BURST", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-EXPAND", "PART-BURST-DRIVER-IRON"] },

  { id: "BEY-BURST-B-00-GALAXY-PEGASIS-5-G-JL-DASH", series: "burst", type: "bey", name: "스파크 슬레이프닐.5G.Jl'", jpName: "갤럭시 페가시스.5G.Jl'", en: "Galaxy Pegasis.5G.Jl'", productNo: "B-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-GALAXY-PEGASIS", "PART-BURST-COREDISK-5", "PART-BURST-FRAME-GLAIVE", "PART-BURST-DRIVER-JOLT-DASH"] },
  { id: "BEY-BURST-B-00-RAY-UNICORNO-1-DASH-P-U-DASH", series: "burst", type: "bey", name: "레이 유니콘.1'P.U'", jpName: "레이 유니코르노.1'P.U'", en: "Ray Unicorno.1'P.U'", productNo: "B-00", battleType: "attack", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-RAY-UNICORNO", "PART-BURST-COREDISK-1-DASH", "PART-BURST-FRAME-PROOF", "PART-BURST-DRIVER-UNITE-DASH"] },
  { id: "BEY-BURST-B-00-GRAVITY-PERSEUS-00-B-Y", series: "burst", type: "bey", name: "그라비티 페르세우스.00B.Y", jpName: "그라비티 페르세우스.00B.Y", en: "Gravity Perseus.00B.Y", productNo: "B-00", battleType: "defense", spin: "dual", tags: [], desc: "", parts: ["PART-BURST-LAYER-GRAVITY-PERSEUS", "PART-BURST-COREDISK-00", "PART-BURST-FRAME-BUMP", "PART-BURST-DRIVER-YIELDING"] },
  { id: "BEY-BURST-B-00-METEO-L-DRAGO-7-V-SP-DASH", series: "burst", type: "bey", name: "메테오 엘드라고.7V.Sp'", jpName: "메테오 엘드라고.7V.Sp'", en: "Meteo L-Drago.7V.Sp'", productNo: "B-00", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["PART-BURST-LAYER-METEO-L-DRAGO", "PART-BURST-COREDISK-7", "PART-BURST-FRAME-VORTEX", "PART-BURST-DRIVER-SPIRAL-DASH"] },
  { id: "BEY-BURST-B-00-HELL-KERBECS-0-L-MB", series: "burst", type: "bey", name: "다크 케르베로스.0L.Mb", jpName: "헬 케르벡스.0L.Mb", en: "Hell Kerbecs.0L.Mb", productNo: "B-00", battleType: "stamina", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-HELL-KERBECS", "PART-BURST-COREDISK-0", "PART-BURST-FRAME-LIFT", "PART-BURST-DRIVER-MOBIUS"] },

  { id: "BEY-BURST-B-00-DRAGOON-V2-WH-XP-DASH", series: "burst", type: "bey", name: "마그마 리저드.Wh.Xp'", jpName: "드라군 V2.Wh.Xp'", en: "Dragoon V2.Wh.Xp'", productNo: "B-00", battleType: "attack", spin: "left", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRAGOON-V2", "PART-BURST-DISK-WHEEL", "PART-BURST-DRIVER-XPLOSION-DASH"] },
  { id: "BEY-BURST-B-00-DRANZER-V2-0-C-RB-DASH", series: "burst", type: "bey", name: "스카이 팔콘.0C.Rb'", jpName: "드랜저 V2.0C.Rb'", en: "Dranzer V2.0C.Rb'", productNo: "B-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRANZER-V2", "PART-BURST-COREDISK-0", "PART-BURST-FRAME-CROSS", "PART-BURST-DRIVER-REBOOT-DASH"] },
  { id: "BEY-BURST-B-00-DRIGER-V2-IL-WD-DASH", series: "burst", type: "bey", name: "스톰 타이거.Il.Wd'", jpName: "드라이거 V2.Il.Wd'", en: "Driger V2.Il.Wd'", productNo: "B-00", battleType: "balance", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRIGER-V2", "PART-BURST-DBDISK-ILLEGAL", "PART-BURST-DRIVER-WEDGE-DASH"] },
  { id: "BEY-BURST-B-00-DRACIEL-V2-10-T-PL-DASH", series: "burst", type: "bey", name: "드래셀 V2.10T.Pl'", jpName: "드라시엘 V2.10T.Pl'", en: "Draciel V2.10T.Pl'", productNo: "B-00", battleType: "defense", spin: "right", tags: [], desc: "", parts: ["PART-BURST-LAYER-DRACIEL-V2", "PART-BURST-COREDISK-10", "PART-BURST-FRAME-TURN", "PART-BURST-DRIVER-PLANET-DASH"] }
];

const burstRemakeSetProductCompositions = {
  "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-20TH-ANNIVERSARY-SET": {
    jp: [
      item("드라군 스톰.W.X", "BEY-BURST-B-00-DRAGOON-STORM-W-X"),
      item("드랜저 스파이럴.S.T", "BEY-BURST-B-00-DRANZER-SPIRAL-S-T"),
      item("드라이거 슬래시.H.F", "BEY-BURST-B-00-DRIGER-SLASH-H-F"),
      item("드라시엘 실드.C.P", "BEY-BURST-B-00-DRACIEL-SHIELD-C-P"),
      item("울보그.8.Br", "BEY-BURST-B-00-WOLBORG-8-BR"),
      item("드라군 팬텀.G.V", "BEY-BURST-B-00-DRAGOON-PHANTOM-G-V"),
      item("드랜저 플레임.Y.Zt", "BEY-BURST-B-00-DRANZER-FLAME-Y-ZT"),
      item("드라이거 팽.0.Xt", "BEY-BURST-B-00-DRIGER-FANG-0-XT"),
      item("드라시엘 포트리스.10.Pl", "BEY-BURST-B-00-DRACIEL-FORTRESS-10-PL")
    ]
  },
  "PRODUCT-BURST-B-00-METAL-FIGHT-BEYBLADE-ANIME-10TH-ANNIVERSARY-SET": {
    jp: [
      item("스톰 페가시스.10G.Qc'", "BEY-BURST-B-00-STORM-PEGASIS-10-G-QC-DASH"),
      item("라이트닝 엘드라고.10R.Z'", "BEY-BURST-B-00-LIGHTNING-L-DRAGO-10-R-Z-DASH"),
      item("플레임 사지타리오.8'.C", "BEY-BURST-B-00-FLAME-SAGITTARIO-8-DASH-C"),
      item("록 레오네.0.M", "BEY-BURST-B-00-ROCK-LEONE-0-M"),
      item("어스 아쿠이라.2.Y", "BEY-BURST-B-00-EARTH-AQUILA-2-Y"),
      item("롱베이런처", "TOOLS-BURST-LONG-BEYLAUNCHER"),
      item("롱베이런처L", "TOOLS-BURST-LONG-BEYLAUNCHER-L")
    ]
  },
  "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2020-V-SET": {
    jp: [
      item("드라군 빅토리.St.Ev", "BEY-BURST-B-00-DRAGOON-VICTORY-ST-EV"),
      item("드랜저 볼케이노.Hr.Dm", "BEY-BURST-B-00-DRANZER-VOLCANO-HR-DM"),
      item("드라이거 발칸.10R.W", "BEY-BURST-B-00-DRIGER-VULCAN-10-R-W"),
      item("드라시엘 바이퍼.Ar.Om", "BEY-BURST-B-00-DRACIEL-VIPER-AR-OM"),
      item("가이아 드라군 버스트.10E.I", "BEY-BURST-B-00-GAIA-DRAGOON-BURST-10-E-I"),
      item("라이트런처LR", "TOOLS-BURST-LIGHT-LAUNCHER-LR"),
      item("런처그립", "TOOLS-BURST-LAUNCHER-GRIP")
    ]
  },
  "PRODUCT-BURST-B-00-METAL-FIGHT-BEYBLADE-2020-BAKU-SET": {
    jp: [
      item("갤럭시 페가시스.5G.Jl'", "BEY-BURST-B-00-GALAXY-PEGASIS-5-G-JL-DASH"),
      item("레이 유니코르노.1'P.U'", "BEY-BURST-B-00-RAY-UNICORNO-1-DASH-P-U-DASH"),
      item("그라비티 페르세우스.00B.Y", "BEY-BURST-B-00-GRAVITY-PERSEUS-00-B-Y"),
      item("메테오 엘드라고.7V.Sp'", "BEY-BURST-B-00-METEO-L-DRAGO-7-V-SP-DASH"),
      item("헬 케르벡스.0L.Mb", "BEY-BURST-B-00-HELL-KERBECS-0-L-MB"),
      item("롱베이런처L", "TOOLS-BURST-LONG-BEYLAUNCHER-L"),
      item("롱베이런처LR", "TOOLS-BURST-LONG-BEYLAUNCHER-LR")
    ]
  },
  "PRODUCT-BURST-B-00-BAKUTEN-SHOOT-BEYBLADE-2023-V2-SET": {
    jp: [
      item("드라군 V2.Wh.Xp'", "BEY-BURST-B-00-DRAGOON-V2-WH-XP-DASH"),
      item("드랜저 V2.0C.Rb'", "BEY-BURST-B-00-DRANZER-V2-0-C-RB-DASH"),
      item("드라이거 V2.Il.Wd'", "BEY-BURST-B-00-DRIGER-V2-IL-WD-DASH"),
      item("드라시엘 V2.10T.Pl'", "BEY-BURST-B-00-DRACIEL-V2-10-T-PL-DASH"),
      item("라이트런처LR", "TOOLS-BURST-LIGHT-LAUNCHER-LR", "2개"),
      item("런처그립", "TOOLS-BURST-LAUNCHER-GRIP", "2개")
    ]
  }
};

export { burstRemakeSetBeyItems, burstRemakeSetProductCompositions };
