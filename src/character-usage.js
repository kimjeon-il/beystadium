/** Short labels for character displays; keep source combinations and edition IDs intact. */
export const characterBeyNames = character => [...new Set((character?.beys || [])
  .map(name => String(name || "").trim()
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
