import { unscopedMetalCharacterUsages } from "./metal-fight-unscoped-characters.mjs";
import { beyItems } from "./catalog.mjs";

const beyById = new Map(beyItems.map(bey => [bey.id, bey]));

// Exact, verified toy editions only. Never expand usage to recolors or set variants.
// Season provenance is retained while each character keeps one stable identity.
const characterUsages = [
  { id: "CHARACTER-METAL-FIGHT-KANG-TA", name: "강타", beyIds: ["BEY-METAL-FIGHT-BB-28-STORM-PEGASIS-105RF"] },
  { id: "CHARACTER-METAL-FIGHT-TAE-SAJA", name: "태사자", beyIds: ["BEY-METAL-FIGHT-BB-30-ROCK-LEONE-145WB"] },
  { id: "CHARACTER-METAL-FIGHT-NOA", name: "노아", beyIds: ["BEY-METAL-FIGHT-BB-35-FLAME-SAGITTARIO-C145S"] },
  { id: "CHARACTER-METAL-FIGHT-BAEK-DUSAN", name: "백두산", beyIds: ["BEY-METAL-FIGHT-BB-40-DARK-BULL-H145SD"] },
  { id: "CHARACTER-METAL-FIGHT-BANDI", name: "반디", beyIds: ["BEY-METAL-FIGHT-BB-37-WIND-AQUARIO-100HF-S"] },
  { id: "CHARACTER-METAL-FIGHT-DONGSAN-DORYEONG", name: "동산도령", beyIds: ["BEY-METAL-FIGHT-BB-45-CLAY-ARIES-ED145B"] },
  { id: "CHARACTER-METAL-FIGHT-GYEONU", name: "견우", beyIds: ["BEY-METAL-FIGHT-BB-47-EARTH-AQUILA-145WD"] },
  { id: "CHARACTER-METAL-FIGHT-JINI", name: "지니", beyIds: ["BEY-METAL-FIGHT-BB-48-FLAME-LIBRA-T125ES"] },
  { id: "CHARACTER-METAL-FIGHT-DRAGON", name: "드래곤", beyIds: ["BEY-METAL-FIGHT-BB-43-LIGHTNING-L-DRAGO-100HF"] },
  { id: "CHARACTER-METAL-FIGHT-DARK-MOON", name: "다크문", beyIds: ["BEY-METAL-FIGHT-BB-29-DARK-WOLF-DF145FS"] },
  { id: "CHARACTER-METAL-FIGHT-REIJI", name: "레이지", beyIds: ["BEY-METAL-FIGHT-BB-69-POISON-SERPENT-SW145SD"] },
  { id: "CHARACTER-METAL-FIGHT-CRAB-KING", name: "크랩킹", beyIds: ["BEY-METAL-FIGHT-BB-31-MAD-CANCER-CH120FS", "BEY-METAL-FIGHT-BB-55-DARK-CANCER-CH120SF"] },
  { id: "CHARACTER-METAL-FIGHT-PHOENIX", name: "피닉스", aliases: ["강유성"], beyIds: ["BEY-METAL-FIGHT-BB-59-BURN-PHOENIX-135MS"] },
  { id: "CHARACTER-METAL-FIGHT-HANEUL", name: "하늘", beyIds: ["BEY-METAL-FIGHT-CYBER-PEGASIS-100HF"] },
  { id: "CHARACTER-METAL-FIGHT-DEATH-CAPRI", name: "데스카프리", beyIds: ["BEY-METAL-FIGHT-BB-50-STORM-CAPRICORNE-M145Q"] },
  { id: "CHARACTER-METAL-FIGHT-TARO", name: "타로", beyIds: ["BEY-METAL-FIGHT-BB-57-THERMAL-PISCES-T125ES"] },
  { id: "CHARACTER-METAL-FIGHT-LUMIE", name: "루미에", beyIds: ["BEY-METAL-FIGHT-BB-60-EARTH-VIRGO-GB145BS"] },
  { id: "CHARACTER-METAL-FIGHT-DAN", name: "단", beyIds: ["BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS"] },
  { id: "CHARACTER-METAL-FIGHT-LAKE", name: "레이크", beyIds: ["BEY-METAL-FIGHT-BB-56-KILLER-GEMIOS-DF145FS"] },
  { id: "CHARACTER-METAL-FIGHT-NAM-DAEUNG", name: "남대웅", beyIds: ["BEY-METAL-FIGHT-BB-51-ROCK-ORSO-D125B"] },
  { id: "CHARACTER-METAL-FIGHT-DOKGO-CHUNG", name: "독고충", beyIds: ["BEY-METAL-FIGHT-BB-65-ROCK-ESCOLPIO-T125JB"] }
];

// Verified season-two appearances; unresolved retail editions retain text only.
const seasonTwoNewCharacters = [
  {
    "id": "CHARACTER-METAL-FIGHT-JANGGUN",
    "name": "장군",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-71-RAY-UNICORNO-D125CS"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-WANG-DAESANG",
    "name": "왕대상",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-78-ROCK-GIRAFFE-R145WB"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-LI-CHIYUN",
    "name": "리치윤",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-74-THERMAL-LACERTA-WA130HF"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-MEIMEI",
    "name": "메이메이",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-72-AQUARIO-105F"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-CHAOXIN",
    "name": "챠우싱",
    "beyIds": [],
    "unmappedBeys": [
      "Virgo ED145ES",
      "Poison Virgo ED145ES"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-ALEXEI",
    "name": "알렉세이",
    "beyIds": [],
    "unmappedBeys": [
      "Burn Wolf SW145WD"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-DORA",
    "name": "도라",
    "beyIds": [],
    "unmappedBeys": [
      "Rock Escolpio T125JB"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-NOWAGUMA",
    "name": "노와구마",
    "beyIds": [],
    "unmappedBeys": [
      "Rock Orso D125B (red)"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-JULIUS-CAESAR",
    "name": "시저",
    "aliases": ["줄리어스 시저"],
    "beyIds": [
      "BEY-METAL-FIGHT-BB-80-GRAVITY-PERSEUS-AD145WD"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-WALES",
    "name": "웨일즈",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-82-GRAND-KETOS-WD145RS"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-SOPHIE",
    "name": "소피",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-82-GRAND-KETOS-T125RS"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-GEORG",
    "name": "게오르그",
    "beyIds": [],
    "unmappedBeys": [
      "Grand Capricorne 145D"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-NILE",
    "name": "나일",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-P01-VULCAN-HORUSEUS-145D"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-DAMOURE",
    "name": "다무레",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-86-COUNTER-ESCOLPIO-145D"
    ],
    "aliases": [
      "Damoure"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-ARGO",
    "name": "아르고",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-91-RAY-KEEL-100RSF"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-IAN",
    "name": "아이언",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-94-TORNADO-HERCULEO-105F"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-SELEN",
    "name": "셀린",
    "beyIds": [],
    "unmappedBeys": [
      "Ray Cancer 135SF"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-ENZO",
    "name": "엔조",
    "beyIds": [],
    "unmappedBeys": [
      "Ray Cancer M145Q"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-TOBY",
    "name": "파우스트",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-104-BASALT-HOROGIUM-145WD"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-ZEO",
    "name": "제오",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-95-FLAME-BYXIS-230WD"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-DAMIAN",
    "name": "데미안",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-99-HELL-KERBECS-BD145DS"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-JACK",
    "name": "잭",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-100-KILLER-BEAFOWL-UW145EWD"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-DR-ZIGGURAT",
    "name": "지구라트 박사",
    "beyIds": [
      "BEY-METAL-FIGHT-BB-102-SCREW-CAPRICORNE-90MF"
    ]
  },
  {
    "id": "CHARACTER-METAL-FIGHT-MARCUS",
    "name": "Marcus",
    "beyIds": [],
    "unmappedBeys": [
      "Cyber Aquario 105RF"
    ]
  }
];

const seasonTwoReturningIds = new Set([
  "KANG-TA", "TAE-SAJA", "NOA", "BAEK-DUSAN", "BANDI", "DONGSAN-DORYEONG", "GYEONU",
  "JINI", "DRAGON", "CRAB-KING", "PHOENIX", "DEATH-CAPRI", "TARO", "LUMIE"
].map(suffix => `CHARACTER-METAL-FIGHT-${suffix}`));
const seasonTwoReplacements = {
  "CHARACTER-METAL-FIGHT-KANG-TA": ["BEY-METAL-FIGHT-BB-70-GALAXY-PEGASIS-W105R2F"],
  "CHARACTER-METAL-FIGHT-DRAGON": ["BEY-METAL-FIGHT-BB-88-METEO-L-DRAGO-LW105LF"],
  "CHARACTER-METAL-FIGHT-CRAB-KING": ["BEY-METAL-FIGHT-BB-55-DARK-CANCER-CH120SF"]
};
const usageData = (beyIds, unmappedBeys = []) => ({
  beyIds,
  beys: [...beyIds.map(id => {
    const bey = beyById.get(id);
    if (!bey) throw new Error(`Unknown Metal Fight character Bey: ${id}`);
    return [bey.name, bey.sub].filter(Boolean).join(" ");
  }), ...unmappedBeys],
  ...(unmappedBeys.length ? { unmappedBeys } : {})
});
const usageGroup = (season, beyIds, unmappedBeys = []) => ({ season, ...usageData(beyIds, unmappedBeys) });

// Additional model usage is recorded without adding seasonal appearances.
const additionalBeyIds = {
  "CHARACTER-METAL-FIGHT-KANG-TA": ["BEY-METAL-FIGHT-BB-105-BIG-BANG-PEGASIS-FD"],
  "CHARACTER-METAL-FIGHT-TAE-SAJA": ["BEY-METAL-FIGHT-BB-106-FANG-LEONE-130W2D"],
  "CHARACTER-METAL-FIGHT-NOA": ["BEY-METAL-FIGHT-BB-126-FLASH-SAGITTARIO-230WD"],
  "CHARACTER-METAL-FIGHT-DRAGON": ["BEY-METAL-FIGHT-BB-108-L-DRAGO-DESTROY-FS"],
  "CHARACTER-METAL-FIGHT-JANGGUN": ["BEY-METAL-FIGHT-BB-117-BLITZ-UNICORNO-100RSF"],
  // Explicitly approved original-edition exception: BB-116 has a black W²D; anime uses blue.
  "CHARACTER-METAL-FIGHT-ZEO": ["BEY-METAL-FIGHT-BB-116-SCREW-FOX-TR145W2D"]
};
const legacyMetalFightCharacters = [...characterUsages, ...seasonTwoNewCharacters].map(character => {
  const firstSeason = characterUsages.includes(character) ? "metal-fight" : "metal-fight-2";
  const usages = [usageGroup(firstSeason, character.beyIds, character.unmappedBeys)];
  if (seasonTwoReturningIds.has(character.id)) {
    usages.push(usageGroup("metal-fight-2", seasonTwoReplacements[character.id] || character.beyIds));
  }
  const additionalUsage = Object.hasOwn(additionalBeyIds, character.id)
    ? usageData(additionalBeyIds[character.id])
    : null;
  const allUsage = additionalUsage ? [...usages, additionalUsage] : usages;
  return {
    id: character.id,
    name: character.name,
    ...(character.aliases ? { aliases: character.aliases } : {}),
    season: firstSeason,
    role: "",
    usages,
    ...(additionalUsage ? { additionalUsage } : {}),
    beyIds: [...new Set(allUsage.flatMap(usage => usage.beyIds))],
    beys: [...new Set(allUsage.flatMap(usage => usage.beys))]
  };
});

const metalFightCharacters = [
  ...legacyMetalFightCharacters,
  ...unscopedMetalCharacterUsages.map(character => {
    const additionalUsage = usageData(character.beyIds, character.unmappedBeys);
    return {
      id: character.id, name: character.name, series: "metal fight", role: "",
      additionalUsage, beyIds: additionalUsage.beyIds, beys: additionalUsage.beys
    };
  })
];

export { metalFightCharacters };
