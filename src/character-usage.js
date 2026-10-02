/** Preserve one identity while displaying only usage recorded for the chosen season. */
export const characterUsageGroups = character => Array.isArray(character?.usages)
  ? character.usages
  : [{ season: character?.season || "", beys: character?.beys || [], beyIds: character?.beyIds || [] }];

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
