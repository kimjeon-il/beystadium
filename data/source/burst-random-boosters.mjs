const burstRandomBoosterSource = `
B-15-01: Trident Heavy Claw
B-15-02: Spriggan Wing Claw
B-15-03: Ragnaruk Spread Claw
B-15-04: Kerbeus Heavy Survive
B-15-05: Valkyrie Central Fusion
B-15-06: Spriggan Central Accel
B-15-07: Ragnaruk Wing Defense
B-15-08: Kerbeus Spread Accel
B-24-01: Evil-eye Wing Needle
B-24-02: Deathscyther Armed Blow
B-24-03: Deathscyther Spread Massive
B-24-04: Wyvern Heavy Accel
B-24-05: Wyvern Central Needle
B-24-06: Odin Armed Claw
B-24-07: Odin Oval Fusion
B-24-08: Valkyrie Oval Needle
B-49-01: Yaeger Yggdrasil Gravity Yielding
B-49-02: Storm Spriggan Boost Yielding
B-49-03: Rising Ragnaruk Knuckle Yielding
B-49-04: Kaiser Kerbeus Knuckle Revolve
B-49-05: Victory Valkyrie Limited Unite
B-49-06: Storm Spriggan Limited Variable
B-49-07: Rising Ragnaruk Boost Press
B-49-08: Kaiser Kerbeus Gravity Variable
B-61-01: Quad Quetzalcoatl Jerk Press
B-61-02: Wild Wyvern Jerk Gyro
B-61-03: Dark Deathscyther Jerk Orbit
B-61-04: Holy Horusood Vertical Jaggy
B-61-05: Obelisk Odin Upper Jaggy
B-61-06: Holy Horusood Triple Orbit
B-61-07: Dark Deathscyther Vertical Gyro
B-61-08: Driger Slash Heavy Fusion
B-67-01: Gigant Gaia Quarter Fusion
B-67-02: Nova Neptune Quarter Needle
B-67-03: Unlock Unicorn Quarter Accel
B-67-04: Xeno Xcalibur Down Orbit
B-67-05: Nova Neptune Jerk Impact
B-67-06: Unlock Unicorn Upper Trans
B-67-07: Xeno Xcalibur Vertical Claw
B-67-08: Draciel Shield Central Press
B-156-01: Naked Spriggan Paradox Orbit Metal Ten
B-156-02: Dragoon Victory Sting Evolution
B-156-03: Dread Fafnir Paradox Revolve Metsu
B-156-04: Naked Longinus-0Turn Rise Sen
B-156-05: Poison Dragon 11 Volcanic' Zan
B-156-06: Heaven Joker Gravity Operate Gou
B-156-07: Erase Bahamut 1'Star Zeta' Sou
B-156-08: Draciel Fortress-00Wall Charge
B-158-01: Burn Phoenix Yell Wedge
B-158-02: Grand Dragon Aero'Lift Flugel Gou
B-158-03: Rock Dragon 5 Jaggy' Sou
B-158-04: Poison Hydra 8'Angle Fusion' Gen
B-158-05: Knockout Odin 12 Operate' Ten
B-158-06: Bushin Ashura 13 Anchor Sen
B-158-07: Cho-Z Valkyrie 3 Guard
B-158-08: Shining Amaterios-0 Destroy'
B-164-01: Curse Satan Hurricane Universe 1D
B-164-02: Glide Hyperion 7Bump Survive 1D
B-164-03: Curse Ragnaruk-0 Accel' 1S
B-164-04: Tact Diabolos 2Glaive Low Gen
B-164-05: Naked Bahamut 10 Universe Metsu
B-164-06: Union Spriggan Outer Quick' Zan
B-164-07: Earth Aquila Vanguard Merge'
B-164-08: Flame Sagittario-00 Keep'
B-170-01: Death Diabolos 4Turn Merge' 1D
B-170-02: Abyss Diabolos 5 Fusion' 1S
B-170-03: King Fafnir 8' Defense 1S
B-170-04: Cosmo Pegasus 7 Atomic Sou
B-170-05: Air Knight 10 Revolve
B-170-06: Emperor Forneus Wheel Destroy
B-170-07: Burn Phoenix-00 Assault'
B-170-08: Dranzer Volcano-0 Charge'
B-80-01: Tornado Wyvern 4Glaive Atomic
B-80-02: Exceed Evil-eye Gravity Atomic
B-80-03: Fang Fenrir Polish Atomic
B-80-04: Exceed Evil-eye 2Glaive Weight
B-80-05: Psychic Phantom 6Cross Spiral
B-80-06: Inferno Ifrit 2Vortex Hold
B-80-07: Fang Fenrir 6Glaive Liner
B-80-08: Beast Behemoth 4Cross Weight
B-87-01: Maximum Garuda 8Flow Flugel
B-87-02: God Valkyrie 2 Flugel
B-87-03: Kreis Satan Yell Spiral
B-87-04: Blaze Ragnaruk Nine Liner
B-87-05: Draciel Shield 4Flow Cycle
B-87-06: Dranzer Spiral 6Cross Spiral
B-87-07: Acid Anubis 8Vortex Loop
B-87-08: Jail Jormungand 6Glaive Nothing
B-95-01: Shelter Regulus 5Star Tower
B-95-02: Alter Chronos Ring Tower
B-95-03: Killer Deathscyther Quarter Loop
B-95-04: Blaze Ragnaruk Triple Revolve
B-95-05: Yaeger Yggdrasil 8Meteor Quake
B-95-06: Quad Quetzalcoatl 4Star Flugel
B-95-07: Dragoon Storm 5Meteor Loop
B-95-08: Driger Slash 4Vortex Hunter
B-101-01: Beat Kukulcan 7Under Hunter
B-101-02: Dranzer Flame Yell Zeta
B-101-03: Valkyrie 1Flow Edge
B-101-04: Blast Jinnius 1 Defense
B-101-05: Guardian Kerbeus 7 Nothing
B-101-06: Kreis Satan 5 Guard
B-101-07: Mad Minoboros 5Vortex Zephyr
B-101-08: Gigant Gaia 8Under Quake
B-111-01: Crash Ragnaruk 11Reach Wedge
B-111-02: Winning Valkyrie 8 Guard
B-111-03: Z Achilles 4 Destroy
B-111-04: Emperor Forneus 7 Zeta
B-111-05: Sieg Xcalibur 5Bump Atomic
B-111-06: Spriggan Requiem 6Meteor Iron
B-111-07: Lost Longinus 2Reach Merge
B-111-08: Legend Spriggan 0Under Nothing
B-118-01: Vise Leopard 12Lift Destroy
B-118-02: Vise Leopard 4 Yard
B-118-03: Screw Trident 0Lift Volcanic
B-118-04: Arc Bahamut 7Lift Xtend
B-118-05: Nightmare Longinus Planet
B-118-06: Winning Valkyrie 3 Yielding
B-118-07: Emperor Forneus 1Meteor Hunter
B-118-08: Bloody Longinus 8Vortex Defense
B-125-01: Dead Hades 11Turn Zephyr'
B-125-02: Hell Salamander Gravity Yielding
B-125-03: Archer Hercules Heavy Friction
B-125-04: Maximum Garuda 7Lift Sword
B-125-05: Deep Chaos 0Turn Xtend
B-125-06: Twin Nemesis 1'Hit Wedge
B-125-07: Shelter Regulus 8'Bump Destroy'
B-125-08: Beat Kukulcan 13Dagger Yard
B-130-01: Air Knight 12Expand Eternal
B-130-02: Air Knight 11 Friction
B-130-03: Revive Phoenix 12 Fusion'
B-130-04: Hell Salamander 13 Blow'
B-130-05: Hazard Kerbeus 4 Merge'
B-130-06: Emperor Forneus 13Meteor Survive
B-130-07: Dranzer Flame 10Turn Sword
B-130-08: Wolborg 0Expand Atomic
B-132-01: Winning Valkyrie 1' Operate
B-132-02: Spriggan Requiem 7 Absorb
B-132-03: Bloody Longinus 3 Press
B-132-04: Z Achilles 13Turn Blow'
B-132-05: Legend Spriggan 5Reach Eternal
B-132-06: Left Apollos 12Meteor Sword
B-132-07: Right Artemis 4Proof Orbit
B-132-08: Driger Fang 0 Xtend
B-140-01: Cosmo Valkyrie 11 Eternal Ten
B-140-02: Storm Pegasis 10Glaive Quick'
B-140-03: Bushin Dragon 7 Friction Retsu
B-140-04: Slash Ashura 5 Quest Zan
B-140-05: Orb Egis 0Turn Quick'
B-140-06: Dead Hades 8'Expand Xtreme'
B-140-07: Buster Xcalibur Zenith Absorb
B-140-08: Vise Leopard 1'Proof Operate
B-146-01: Flare Dragon Around Planet Sen
B-146-02: Gaia Dragoon Around Hunter'
B-146-03: Flare Ashura 5 Survive Retsu
B-146-04: Slash Joker 10 Keep Metsu
B-146-05: Crash Ragnaruk 7Bump Fusion'
B-146-06: Hazard Kerbeus 00Hit Guard
B-146-07: Geist Fafnir Ratchet Gyro
B-146-08: Revive Phoenix 8'Meteor Accel'
B-151-01: Tact Longinus 12Expand Trans' Sou
B-151-02: Lightning L-Drago 10Reach Zephyr'
B-151-03: Tact Fafnir 11 Revolve Sen
B-151-04: Rock Joker Zenith Eternal Sou
B-151-05: Storm Pegasis Hurricane Atomic
B-151-06: Bushin Valkyrie 0 Unite' Retsu
B-151-07: Wizard Bahamut 00Cross Jolt' Gen
B-151-08: Judgement Pegasus 8'Glaive Keep' Metsu
B-173-01: Infinite Achilles Dimension' 1B
B-173-02: Infinite Achilles 7 Loop 1D
B-173-03: Super Satan 6 Xtreme' 1S
B-173-04: Ace Dragon Wheel Rise Gen
B-173-05: Hell Salamander Outer Universe
B-173-06: Dead Hades 1' High Blow'
B-173-07: Dragoon Victory 2Expand Eternal
B-173-08: Driger Vulcan 0 High Jaggy'
B-176-01: Hollow Deathscyther 12Axe High Accel' 4A
B-176-02: Hollow Valkyrie 11 Absorb 1D
B-176-03: Abyss Longinus 13 Spiral' 4A
B-176-04: Curse Deathscyther 8' Zeta' 1S
B-176-05: Dead Phoenix 3 High Zephyr
B-176-06: Archer Hercules 10Axe Power
B-176-07: Storm Pegasis Drake High Survive
B-176-08: Draciel Viper 00Wall High Defense
B-178-01: First Uranus 00 Metal Accel 1D
B-178-02: King Helios Survive 1B
B-178-03: Glide Ragnaruk 5 Trans 1S
B-178-04: Super Hyperion Quick 1A
B-178-05: Variant Lucifer Orbit 2D
B-178-06: Imperial Dragon 7 Eternal
B-178-07: Master Diabolos 0 Zephyr
B-178-08: Revive Phoenix 4 Metal Defense
B-181-01: Cyclone Ragnaruk Giga Never-6
B-181-02: Cyclone Ragnaruk Nexus Rise-2
B-181-03: Dragoon V2 Wheel Xceed'
B-181-04: Hell Kerbecs Giga Wave
B-181-05: Infinite Deathscyther Universe 1A
B-181-06: Brave Wyvern 10 Never 4A
B-186-01: Roar Bahamut Giga Moment-10
B-186-02: Roar Fafnir 00 Revolve-2
B-186-03: Dranzer V2 0Cross Reboot'
B-186-04: Dynamite Ragnaruk Nexus Just-6
B-186-05: World Dragon Outer Moment 4A
B-186-06: Variant Spriggan Convert High Hold' 1S
B-194-01: Devil Belial Giga Mobius-3
B-194-02: Dynamite Valkyrie Over Just-6
B-194-03: Guilty Spriggan Outer Never-2
B-194-04: Vanish Longinus Nexus Moment-7
B-194-05: Astral Fafnir Karma Venture-0
B-194-06: Galaxy Pegasis Legacy Xtreme'
B-194-07: Dragoon V2 Tapered Zone'
B-196-01: Ultimate Valkyrie Legacy Variable'-9
B-196-02: Tempest Achilles Xceed'+Z 1B
B-196-03: Infinite Dragon Zone'+X 1A
B-196-04: Super Hyperion Giga Metal Dimension 4A
B-196-05: King Helios Karma High Charge' 1S
B-198-01: Chain Kerbeus Fortress Yard'-6
B-198-02: Chain Ragnaruk Tapered Accel'-10
B-198-03: Driger V2 Over Wedge'
B-198-04: Dynamite Kerbeus Legacy Moment-9
B-198-05: Roar Spriggan Fortress Kick-2
B-198-06: Cyclone Valkyrie Giga High Eternal-3
B-202-01: Wind Knight Moon Bounce-6
B-202-02: Prominence Knight Legacy Sword'-1
B-202-03: Devil Xcalibur Moon High Wave'-2
B-202-04: Wind Kerbeus Xanthus Bounce-4
B-202-05: Xiphoid Belial Karma Destroy'-10
`.trim();

const burstRandomBoosterParts = [
  { id: "PART-BURST-LAYER-DRAGOON-STORM", series: "burst", type: "layer", name: "드래곤 스톰", jpName: "드라군 스톰", en: "Dragoon Storm", battleType: "attack", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRANZER-SPIRAL", series: "burst", type: "layer", name: "드랜져 스파이럴", jpName: "드랜저 스파이럴", en: "Dranzer Spiral", battleType: "balance", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRIGER-SLASH", series: "burst", type: "layer", name: "드래이거 슬래시", jpName: "드라이거 슬래시", en: "Driger Slash", battleType: "balance", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRACIEL-SHIELD", series: "burst", type: "layer", name: "드래셀 실드", jpName: "드라시엘 실드", en: "Draciel Shield", battleType: "defense", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRAGOON-PHANTOM", series: "burst", type: "layer", name: "드래곤 팬텀", jpName: "드라군 팬텀", en: "Dragoon Phantom", battleType: "attack", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRANZER-FLAME", series: "burst", type: "layer", name: "윙 팔콘", jpName: "드랜저 플레임", en: "Dranzer Flame", battleType: "balance", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-GAIA-DRAGOON", series: "burst", type: "layer", name: "나이프 리저드", jpName: "가이아 드라군", en: "Gaia Dragoon", battleType: "attack", tags: [], desc: "거대한 자유 회전 윙이 확실하게 상대의 레이어를 잡아내는 어택계열의 레이어.", stats: [4,1,0,2,3,1] },
  { id: "PART-BURST-LAYER-DRACIEL-FORTRESS", series: "burst", type: "layer", name: "드래셀 포트리스", jpName: "드라시엘 포트리스", en: "Draciel Fortress", battleType: "defense", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRAGOON-VICTORY", series: "burst", type: "layer", name: "파이어 리저드", jpName: "드라군 빅토리", en: "Dragoon Victory", battleType: "attack", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-ROCK-LEONE", series: "burst", type: "layer", name: "로크 레온", jpName: "록 레오네", en: "Rock Leone", battleType: "defense", spin: "right", tags: [], desc: "", stats: [2,4,0,3,1,1] },
  { id: "PART-BURST-LAYER-BURN-PHOENIX", series: "burst", type: "layer", name: "번 피닉스", jpName: "번 피닉스", en: "Burn Phoenix", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [1,1,5,2,2,0] },
  { id: "PART-BURST-LAYER-EARTH-AQUILA", series: "burst", type: "layer", name: "어스 아쿠이라", jpName: "어스 아쿠이라", en: "Earth Aquila", battleType: "defense", spin: "right", tags: [], desc: "", stats: [2,2,0,2,3,2] },
  { id: "PART-BURST-LAYER-FLAME-SAGITTARIO", series: "burst", type: "layer", name: "플레임 사지타리오", jpName: "플레임 사지타리오", en: "Flame Sagittario", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [1,1,4,2,1,2] },
  { id: "PART-BURST-LAYER-DRANZER-VOLCANO", series: "burst", type: "layer", name: "드랜져 볼케이노", jpName: "드랜저 볼케이노", en: "Dranzer Volcano", battleType: "balance", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRIGER-VULCAN", series: "burst", type: "layer", name: "팽 타이거", jpName: "드라이거 발칸", en: "Driger Vulcan", battleType: "balance", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRACIEL-VIPER", series: "burst", type: "layer", name: "프로텍션 터틀", jpName: "드라시엘 바이퍼", en: "Draciel Viper", battleType: "defense", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-GAIA-DRAGOON-BURST", series: "burst", type: "layer", name: "가이아 드래곤 버스트", jpName: "가이아 드라군 버스트", en: "Gaia Dragoon Burst", battleType: "attack", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRAGOON-V2", series: "burst", type: "layer", name: "마그마 리저드", jpName: "드라군 V2", en: "Dragoon V2", battleType: "attack", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRANZER-V2", series: "burst", type: "layer", name: "스카이 팔콘", jpName: "드랜저 V2", en: "Dranzer V2", battleType: "balance", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRIGER-V2", series: "burst", type: "layer", name: "스톰 타이거", jpName: "드라이거 V2", en: "Driger V2", battleType: "balance", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-DRACIEL-V2", series: "burst", type: "layer", name: "드래셀 V2", jpName: "드라시엘 V2", en: "Draciel V2", battleType: "defense", tags: [], desc: "", stats: [] },
  { id: "PART-BURST-LAYER-GALAXY-PEGASIS", series: "burst", type: "layer", name: "스파크 슬레이프닐", jpName: "갤럭시 페가시스", en: "Galaxy Pegasis", battleType: "attack", spin: "right", tags: [], desc: "", stats: [5,0,0,2,3,2] },
  { id: "PART-BURST-LAYER-RAY-UNICORNO", series: "burst", type: "layer", name: "레이 유니콘", jpName: "레이 유니코르노", en: "Ray Unicorno", battleType: "attack", spin: "right", tags: [], desc: "", stats: [4,1,1,2,2,2] },
  { id: "PART-BURST-LAYER-GRAVITY-PERSEUS", series: "burst", type: "layer", name: "그라비티 페르세우스", jpName: "그라비티 페르세우스", en: "Gravity Perseus", battleType: "defense", spin: "dual", tags: [], desc: "", stats: [2,5,0,3,1,1] },
  { id: "PART-BURST-LAYER-METEO-L-DRAGO", series: "burst", type: "layer", name: "메테오 엘드라고", jpName: "메테오 엘드라고", en: "Meteo L-Drago", battleType: "attack", spin: "left", tags: [], desc: "", stats: [5,0,0,2,2,3] },
  { id: "PART-BURST-LAYER-HELL-KERBECS", series: "burst", type: "layer", name: "다크 케르베로스", jpName: "헬 케르벡스", en: "Hell Kerbecs", battleType: "stamina", spin: "right", tags: [], desc: "", stats: [2,1,5,3,0,1] }
];

const identityPartTypes = new Set([
  "layer", "duallayer", "godlayer", "chozlayer", "gachilayer", "dblayer"
]);
const diskTypes = new Set(["disk", "coredisk", "dbdisk"]);
const compositeIdentityTypes = [
  ["gachibase", "gachichip"],
  ["superkingring", "superkingchip"],
  ["dbblade", "dbcore"]
];
const partAliases = new Map([
  ["PART-BURST-DUALLAYER-YAGER-YGGDRASIL", ["Yaeger Yggdrasil"]],
  ["PART-BURST-CHOZLAYER-VICE-LEOPARD", ["Vise Leopard"]],
  ["PART-BURST-LAYER-DRIGER-FANG", ["Draiger Fang"]]
]);
const spinByPrimaryPart = new Map([
  ["PART-BURST-GACHIBASE-WIZARD", "left"],
  ["PART-BURST-GACHIBASE-DREAD", "left"],
  ["PART-BURST-GACHIBASE-ZWEI", "left"],
  ["PART-BURST-GACHIBASE-ERASE", "left"],
  ["PART-BURST-GACHIBASE-NAKED", "left"],
  ["PART-BURST-GACHIBASE-LORD", "dual"],
  ["PART-BURST-GACHIBASE-MASTER", "dual"],
  ["PART-BURST-SUPERKINGRING-KING", "left"],
  ["PART-BURST-SUPERKINGRING-MIRAGE", "left"],
  ["PART-BURST-SUPERKINGRING-RAGE", "left"],
  ["PART-BURST-SUPERKINGRING-ABYSS", "left"],
  ["PART-BURST-SUPERKINGRING-WORLD", "dual"],
  ["PART-BURST-DBBLADE-VANISH", "left"],
  ["PART-BURST-DBBLADE-ROAR", "left"],
  ["PART-BURST-DBBLADE-ASTRAL", "dual"],
  ["PART-BURST-DBBLADE-GUILTY", "left"],
  ["PART-BURST-DBBLADE-ZEST", "dual"],
  ["PART-BURST-LAYER-LIGHTNING-L-DRAGO", "left"],
  ["PART-BURST-LAYER-DRAGOON-STORM", "left"],
  ["PART-BURST-LAYER-GAIA-DRAGOON", "left"],
  ["PART-BURST-LAYER-DRAGOON-VICTORY", "left"],
  ["PART-BURST-LAYER-DRAGOON-V2", "left"]
]);
const bundledPartsBySlot = new Map([
  ["B-181-03", ["PART-BURST-DBARMOR-6"]]
]);

const compact = value => String(value || "")
  .normalize("NFKD")
  .toUpperCase()
  .replace(/[^A-Z0-9'+]/g, "");
const slug = value => String(value || "")
  .normalize("NFKD")
  .toUpperCase()
  .replace(/'/g, "-DASH")
  .replace(/\+/g, "-PLUS-")
  .replace(/[^A-Z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .replace(/-+/g, "-");
const sourceRows = burstRandomBoosterSource.split("\n").map(line => {
  const match = line.match(/^(B-\d+)-(\d{2}):\s*(.+)$/);
  if (!match) throw new Error(`Invalid Burst random booster row: ${line}`);
  return { productNo: match[1], slot: match[2], en: match[3].trim() };
});
const aliasesForPart = part => [part.en, ...(partAliases.get(part.id) || [])].filter(Boolean);
function identityCandidates(parts) {
  const candidates = parts
    .filter(part => identityPartTypes.has(part.type))
    .flatMap(part => aliasesForPart(part).map(alias => ({
      key: compact(alias),
      en: part.en,
      name: part.name,
      jpName: part.jpName || part.name,
      parts: [part]
    })));

  for (const [primaryType, secondaryType] of compositeIdentityTypes) {
    const primaryParts = parts.filter(part => part.type === primaryType);
    const secondaryParts = parts.filter(part => part.type === secondaryType);
    for (const primary of primaryParts) {
      for (const secondary of secondaryParts) {
        for (const primaryAlias of aliasesForPart(primary)) {
          for (const secondaryAlias of aliasesForPart(secondary)) {
            candidates.push({
              key: compact(`${primaryAlias} ${secondaryAlias}`),
              en: `${primary.en} ${secondary.en}`,
              name: `${primary.name} ${secondary.name}`,
              jpName: `${primary.jpName || primary.name} ${secondary.jpName || secondary.name}`,
              parts: [primary, secondary]
            });
          }
        }
      }
    }
  }

  return candidates.sort((left, right) => right.key.length - left.key.length);
}

function componentCandidates(parts) {
  const candidates = parts
    .filter(part => diskTypes.has(part.type)
      || ["frame", "driver", "gachiweight", "superkingchassis", "dbarmor"].includes(part.type))
    .flatMap(part => {
      const aliases = [part.en];
      if (part.type === "superkingchassis") aliases.push(part.name);
      return aliases.filter(Boolean).map(alias => ({ key: compact(alias), part }));
    });
  candidates.push(
    { key: compact("+X"), part: parts.find(part => part.id === "PART-BURST-DRIVERUPGRADE-XCEED") },
    { key: compact("+Z"), part: parts.find(part => part.id === "PART-BURST-DRIVERUPGRADE-ZONE") }
  );
  return candidates.filter(candidate => candidate.key && candidate.part)
    .sort((left, right) => right.key.length - left.key.length);
}

function componentSequences(value, candidates, memo = new Map()) {
  if (!value) return [[]];
  if (memo.has(value)) return memo.get(value);
  const sequences = [];
  for (const candidate of candidates) {
    if (!value.startsWith(candidate.key)) continue;
    for (const tail of componentSequences(value.slice(candidate.key.length), candidates, memo)) {
      sequences.push([candidate.part, ...tail]);
      if (sequences.length >= 200) break;
    }
    if (sequences.length >= 200) break;
  }
  memo.set(value, sequences);
  return sequences;
}

function validComponentSequence(parts) {
  let index = 0;
  if (diskTypes.has(parts[index]?.type)) index += 1;
  if (parts[index]?.type === "frame") index += 1;
  if (parts[index]?.type !== "driver") return false;
  index += 1;
  if (parts[index]?.type === "driverupgrade") index += 1;
  if (["gachiweight", "superkingchassis", "dbarmor"].includes(parts[index]?.type)) index += 1;
  return index === parts.length;
}

function resolvedRow(row, identities, components) {
  const value = compact(row.en);
  const matches = [];
  for (const identity of identities) {
    if (!value.startsWith(identity.key)) continue;
    const remainder = value.slice(identity.key.length);
    for (const trailing of componentSequences(remainder, components)) {
      if (validComponentSequence(trailing)) matches.push({ identity, trailing });
    }
    if (matches.length) break;
  }
  if (matches.length !== 1) {
    throw new Error(`Unable to resolve ${row.productNo}-${row.slot}: ${row.en} (${matches.length} matches)`);
  }
  return { ...row, ...matches[0] };
}

function codeForPart(part) {
  if (part.type === "driverupgrade") return part.id.endsWith("XCEED") ? "+X" : "+Z";
  return part.name;
}

function idCodeForPart(part) {
  const code = codeForPart(part);
  return slug(code) || slug(part.en);
}

function displayCombination(identityName, trailing) {
  const disk = trailing.find(part => diskTypes.has(part.type));
  const frame = trailing.find(part => part.type === "frame");
  const driver = trailing.find(part => part.type === "driver");
  const upgrade = trailing.find(part => part.type === "driverupgrade");
  const weight = trailing.find(part => part.type === "gachiweight");
  const chassis = trailing.find(part => part.type === "superkingchassis");
  const armor = trailing.find(part => part.type === "dbarmor");
  const diskCode = `${disk ? codeForPart(disk) : ""}${frame ? codeForPart(frame) : ""}`;
  const driverCode = `${codeForPart(driver)}${upgrade ? codeForPart(upgrade) : ""}`;
  return `${identityName}.${diskCode ? `${diskCode}.` : ""}${driverCode}${weight ? ` ${weight.name}` : ""}${chassis ? ` ${chassis.name}` : ""}${armor ? `-${armor.name}` : ""}`;
}

function spinForIdentity(identity, existingBeys) {
  const existing = existingBeys.find(item => identity.parts.every(part => item.parts?.includes(part.id)));
  if (existing?.spin) return existing.spin;
  const primary = identity.parts[0];
  if (spinByPrimaryPart.has(primary.id)) return spinByPrimaryPart.get(primary.id);
  if (primary.type === "duallayer" && primary.id.includes("LOST-LONGINUS")) return "left";
  if (primary.type === "godlayer" && ["LEGEND-SPRIGGAN", "SPRIGGAN-REQUIEM"].some(token => primary.id.includes(token))) return "dual";
  if (primary.type === "godlayer" && ["NIGHTMARE-LONGINUS", "ARC-BAHAMUT"].some(token => primary.id.includes(token))) return "left";
  if (primary.type === "chozlayer" && ["BLOODY-LONGINUS"].some(token => primary.id.includes(token))) return "left";
  return "right";
}

function orderedParts(identity, trailing) {
  const weights = trailing.filter(part => part.type === "gachiweight");
  const remaining = trailing.filter(part => part.type !== "gachiweight");
  return [...identity.parts, ...weights, ...remaining].map(part => part.id);
}

function buildBurstRandomBoosterData(partItems, existingBeys) {
  const allParts = [...partItems, ...burstRandomBoosterParts];
  const identities = identityCandidates(allParts);
  const components = componentCandidates(allParts);
  const byProduct = new Map();
  const beys = sourceRows.map(row => {
    const resolved = resolvedRow(row, identities, components);
    const identityId = slug(resolved.identity.en);
    const componentId = resolved.trailing.map(idCodeForPart).filter(Boolean).join("-");
    const id = `BEY-BURST-${row.productNo}-${row.slot}-${identityId}-${componentId}`;
    const item = {
      id,
      series: "burst",
      type: "bey",
      name: displayCombination(resolved.identity.name, resolved.trailing),
      jpName: displayCombination(resolved.identity.jpName, resolved.trailing),
      en: row.en,
      productNo: row.productNo,
      battleType: resolved.identity.parts[0].battleType || "balance",
      spin: spinForIdentity(resolved.identity, existingBeys),
      tags: [],
      desc: "",
      parts: orderedParts(resolved.identity, resolved.trailing)
    };
    const bundledParts = bundledPartsBySlot.get(`${row.productNo}-${row.slot}`);
    if (bundledParts) item.bundledParts = [...bundledParts];
    const lineup = byProduct.get(row.productNo) || [];
    lineup.push(id);
    byProduct.set(row.productNo, lineup);
    return item;
  });
  return { beys, lineups: Object.fromEntries(byProduct) };
}

export {
  buildBurstRandomBoosterData,
  burstRandomBoosterParts,
  sourceRows as burstRandomBoosterRows
};
