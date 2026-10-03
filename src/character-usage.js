const mediaBeyKoreanNames = new Map([
  ["Virgo", "비르고"],
  ["Poison Virgo", "포이즌 비르고"],
  ["Burn Wolf", "번 울프"],
  ["Grand Capricorne", "그랜드 카프리콘"],
  ["Ray Cancer", "레이 캔서"],
  ["Rock Escolpio", "로크 에스콜피오"],
  ["Rock Orso", "로크 오르소"],
  ["Cyber Aquario", "사이버 아쿠아리오"]
]);

/** Localize displayed media usage without changing recorded names or combinations. */
export const characterBeyDisplayName = name => {
  const value = String(name || "").trim();
  for (const [english, korean] of mediaBeyKoreanNames) {
    if (value === english || value.startsWith(`${english} `)) return korean + value.slice(english.length);
  }
  return value;
};

/** Short labels for character displays; keep source combinations and edition IDs intact. */
export const characterBeyNames = character => [...new Set((character?.beys || [])
  .map(name => characterBeyDisplayName(name)
    .replace(/\s+(?:[A-Z]*\d+[A-Z][A-Z\d²³/:-]*|\d+-\d+[A-Z][A-Z\d]*|[A-Z]:[A-Z])(?=\s|$).*$/i, "")
    .replace(/[.·].*$/, ""))
  .filter(Boolean))];

/** Preserve one identity while displaying only usage recorded for the chosen season. */
export const characterUsageGroups = character => {
  const groups = Array.isArray(character?.usages)
    ? character.usages
    : character?.additionalUsage && !Object.hasOwn(character, "season")
      ? []
      : [{ season: character?.season || "", beys: character?.beys || [], beyIds: character?.beyIds || [] }];
  return character?.additionalUsage
    ? [...groups, { ...character.additionalUsage, season: "" }]
    : groups;
};

export const characterForSeason = (character, season = "all") => {
  if (season === "all") return character;
  if (!Array.isArray(character?.usages)) return character?.season === season ? character : null;
  const groups = characterUsageGroups(character).filter(group => group.season === season);
  if (!groups.length) return null;
  return {
    ...character,
    season,
    beys: [...new Set(groups.flatMap(group => group.beys || []))],
    beyIds: [...new Set(groups.flatMap(group => group.beyIds || []))]
  };
};
