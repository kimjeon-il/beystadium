import { animeInfo } from "#app/data-store";

const animeSeasonOrder = [
  "topblade",
  "topblade-v",
  "gblade",
  "metal-fight",
  "metal-fight-2",
  "metal-fight-4d",
  "metal-fight-zerog",
  "burst",
  "burst-god",
  "burst-cho-z",
  "burst-gachi",
  "burst-superking",
  "burst-db",
  "beyblade-x",
  "beyblade-x-2",
  "beyblade-x-3"
];

const animeSeasonLabels = {
  topblade: "탑블레이드",
  "topblade-v": "탑블레이드 V",
  gblade: "팽이대전 G블레이드",
  "metal-fight": "메탈베이블레이드",
  "metal-fight-2": "메탈베이블레이드 2",
  "metal-fight-4d": "메탈베이블레이드 4D",
  "metal-fight-zerog": "메탈베이블레이드 제로G",
  burst: "베이블레이드 버스트",
  "burst-god": "베이블레이드 버스트 갓",
  "burst-cho-z": "베이블레이드 버스트 초제트",
  "burst-gachi": "베이블레이드 버스트 진검",
  "burst-superking": "베이블레이드 버스트 슈퍼킹",
  "burst-db": "베이블레이드 버스트 DB",
  "beyblade-x": "베이블레이드 X",
  "beyblade-x-2": "베이블레이드 X 2",
  "beyblade-x-3": "베이블레이드 X 3"
};

const animeSeasonEntries = () => animeSeasonOrder.map(value => [value, animeSeasonLabels[value]]).filter(([, label]) => label);
const animeCharacterAllSeason = "all";
const animeCharacterSeasonEntries = () => [[animeCharacterAllSeason, "전체 시리즈"], ...animeSeasonEntries()];
const latestAnimeSeason = () => animeSeasonOrder[animeSeasonOrder.length - 1] || "metal-fight";
const defaultAnimeSeason = () => [...animeSeasonOrder].reverse().find(season =>
  animeInfo.episodes.some(episode => episode.season === season)
) || latestAnimeSeason();
const normalizeAnimeSeason = season => animeSeasonLabels[season] ? season : defaultAnimeSeason();
const normalizeAnimeCharacterSeason = season => animeSeasonLabels[season] ? season : animeCharacterAllSeason;
const animeDisplayRegion = "kr";

const animeEpisodeHashPrefixes = {
  topblade: "TOPBLADE-EPISODE",
  "topblade-v": "TOPBLADE-V-EPISODE",
  gblade: "GBLADE-EPISODE",
  "metal-fight": "METAL-FIGHT-EPISODE",
  "metal-fight-2": "METAL-FIGHT-2-EPISODE",
  "metal-fight-4d": "METAL-FIGHT-4D-EPISODE",
  "metal-fight-zerog": "METAL-FIGHT-ZEROG-EPISODE",
  burst: "BURST-EPISODE",
  "burst-god": "BURST-GOD-EPISODE",
  "burst-cho-z": "BURST-CHO-Z-EPISODE",
  "burst-gachi": "BURST-GACHI-EPISODE",
  "burst-superking": "BURST-SUPERKING-EPISODE",
  "burst-db": "BURST-DB-EPISODE",
  "beyblade-x": "BEYBLADE-X-EPISODE",
  "beyblade-x-2": "BEYBLADE-X-2-EPISODE"
};

const animeEpisodeSeasonIndex = index => {
  const episode = animeInfo.episodes[index];
  if (!episode?.season) return -1;
  return animeInfo.episodes
    .slice(0, index + 1)
    .filter(item => item.season === episode.season).length;
};

const episodeHashId = index => {
  const episode = animeInfo.episodes[index];
  const prefix = animeEpisodeHashPrefixes[episode?.season];
  const seasonIndex = animeEpisodeSeasonIndex(index);
  return prefix && seasonIndex > 0 ? `${prefix}-${seasonIndex}` : "";
};

const isAnimeEpisodeHash = id => Object.values(animeEpisodeHashPrefixes).some(prefix => String(id || "").startsWith(`${prefix}-`));

const episodeIndexFromHash = id => {
  const value = String(id || "");
  const entry = Object.entries(animeEpisodeHashPrefixes).find(([, prefix]) => value.startsWith(`${prefix}-`));
  if (!entry) return -1;
  const seasonNumber = Number(value.slice(entry[1].length + 1));
  if (!Number.isInteger(seasonNumber) || seasonNumber < 1) return -1;
  let current = 0;
  return animeInfo.episodes.findIndex(episode => {
    if (episode.season !== entry[0]) return false;
    current += 1;
    return current === seasonNumber;
  });
};

const animeEpisodeTitle = (episode, region = animeDisplayRegion) => {
  const title = episode?.titles?.[region] || episode?.titles?.kr || "";
  return [episode?.no || "", title].filter(Boolean).join(" ");
};

export {
  animeCharacterAllSeason,
  animeCharacterSeasonEntries,
  animeDisplayRegion,
  animeEpisodeTitle,
  animeSeasonEntries,
  animeSeasonLabels,
  defaultAnimeSeason,
  episodeHashId,
  episodeIndexFromHash,
  isAnimeEpisodeHash,
  normalizeAnimeCharacterSeason,
  normalizeAnimeSeason
};
