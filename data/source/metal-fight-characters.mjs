import { beyItems } from "./catalog.mjs";

const beyById = new Map(beyItems.map(bey => [bey.id, bey]));

// Record usage once per character. Bey detail pages derive the reverse relation
// from these representative catalog references and their canonical wheel parts.
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

const metalFightCharacters = characterUsages.map(character => ({
  ...character,
  season: "metal-fight",
  role: "",
  beys: character.beyIds.map(id => {
    const bey = beyById.get(id);
    if (!bey) throw new Error(`Unknown Metal Fight character Bey: ${id}`);
    return [bey.name, bey.sub].filter(Boolean).join(" ");
  })
}));

export { metalFightCharacters };
