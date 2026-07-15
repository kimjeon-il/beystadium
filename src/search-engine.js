import { itemSeriesLabel } from "#app/release-core";
import {
  catalogSearchQueryTerms,
  compactSearchSpacing,
  compareScoredSearchResults,
  createSearchRecord,
  lowerSearchText,
  matchSearchRecord,
  matchesSearchText,
  prepareCatalogSearchQuery,
  prepareSearchQuery,
  searchFieldsFromValues,
  searchQueryFrom,
  uniqueSearchValues
} from "#app/search-core";
import {
  animeSearch,
  battleTypeLabel,
  battleTypeLabels,
  catalogSearch,
  globalSearch,
  heightClassLabel,
  mobileDrawerSearch,
  partClassificationFilterDescriptors,
  partClassificationLabels,
  partClassificationSearchValues,
  setSearchInputValue,
  spinLabel,
  spinLabels,
  structureLabels,
  tagLabels,
  toolsSubtypeOptions,
  typeLabels
} from "#app/ui-core";

const mainSearchItemText = item => item
  ? [item.name, item.jpName, item.en, item.sub, item.no, item.productNo].filter(Boolean).join(" ")
  : "";
const catalogListSpinSearchTerms = item => {
  if (!item?.spin) return [];
  if (item.spin === "dual") return ["dual", spinLabel("dual"), "left", spinLabel("left"), "right", spinLabel("right")];
  return [item.spin, spinLabel(item.spin)];
};
const itemNameWithSub = item => [item?.name, item?.sub].filter(Boolean).join(" ");
const catalogItemKindSearchValues = item => item?.type === "bey" ? ["bey", "베이"] : ["parts", "부품"];
const layerSystemFilterGroups = {
  gachi: {
    label: "진검레이어",
    types: ["gachichip", "gachiweight", "gachibase", "gachilayer", "gachiupgrade"]
  },
  superking: {
    label: "슈퍼킹레이어",
    types: ["superkingchip", "superkingring", "superkingchassis", "superkingupgrade"]
  },
  db: {
    label: "DB레이어",
    types: ["dbcore", "dbblade", "dbarmor", "dblayer"]
  }
};
const burstBeySystemFilterGroups = {
  single: { label: "싱글레이어 시스템", aliases: ["싱글레이어"], partPrefixes: ["PART-BURST-LAYER-"] },
  dual: { label: "듀얼레이어 시스템", aliases: ["듀얼레이어"], partPrefixes: ["PART-BURST-DUALLAYER-"] },
  god: { label: "갓레이어 시스템", aliases: ["갓레이어"], partPrefixes: ["PART-BURST-GODLAYER-"] },
  choz: { label: "초제트레이어 시스템", aliases: ["초제트레이어"], partPrefixes: ["PART-BURST-CHOZLAYER-"] },
  gachi: { label: "진검레이어 시스템", aliases: ["진검레이어"], partPrefixes: ["PART-BURST-GACHIBASE-", "PART-BURST-GACHILAYER-"] },
  superking: { label: "슈퍼킹레이어 시스템", aliases: ["슈퍼킹레이어"], partPrefixes: ["PART-BURST-SUPERKINGRING-"] },
  db: { label: "DB레이어 시스템", aliases: ["DB레이어"], partPrefixes: ["PART-BURST-DBBLADE-", "PART-BURST-DBLAYER-"] }
};
const shouldIncludeSeriesSearchField = options => options?.includeSeries !== false;
const searchTagAliases = {
  "크로스오버": ["crossover"]
};
const itemSearchTagValues = item => Array.isArray(item.searchTags)
  ? item.searchTags.flatMap(tag => [tag, tagLabels[tag] || "", ...(searchTagAliases[tag] || [])]).filter(Boolean)
  : [];
const catalogItemSearchFields = (item, options = {}) => {
  const includeSeries = shouldIncludeSeriesSearchField(options);
  return [
    ...searchFieldsFromValues("primaryName", [itemNameWithSub(item), item.name]),
    ...searchFieldsFromValues("alias", [item.jpName, item.en]),
    ...searchFieldsFromValues("code", [item.no, item.productNo]),
    ...searchFieldsFromValues("category", [
      ...catalogItemKindSearchValues(item),
      ...(includeSeries ? [item.series, itemSeriesLabel(item)] : []),
      ...partClassificationSearchValues(item),
      item.category,
      item.category ? typeLabels[item.category] : "",
      item.structure,
      item.structure ? structureLabels[item.structure] : ""
    ]),
    ...searchFieldsFromValues("attributes", [
      item.battleType,
      item.battleType ? battleTypeLabel(item.battleType, item) : "",
      ...catalogListSpinSearchTerms(item),
      item.heightClass,
      item.heightClass ? heightClassLabel(item.heightClass) : "",
      ...itemSearchTagValues(item)
    ])
  ];
};
const toolsSearchFields = (item, options = {}) => {
  const includeSeries = shouldIncludeSeriesSearchField(options);
  return [
    ...searchFieldsFromValues("primaryName", [item.name]),
    ...searchFieldsFromValues("alias", [item.jpName, item.en]),
    ...searchFieldsFromValues("code", [item.no, item.productNo]),
    ...searchFieldsFromValues("category", ["tools", "장비", ...(includeSeries ? [item.series, itemSeriesLabel(item)] : []), item.category, item.category ? typeLabels[item.category] : ""]),
    ...searchFieldsFromValues("description", [item.desc])
  ];
};
const catalogAttributeChipAliasKey = value => compactSearchSpacing(lowerSearchText(value));
const catalogAttributeChipCandidates = (() => {
  const candidates = [];
  const seenKeys = new Set();
  const add = (key, label, aliases = []) => {
    const aliasKeys = uniqueSearchValues([label, key, aliases]).map(catalogAttributeChipAliasKey).filter(Boolean);
    if (!label || !aliasKeys.length || seenKeys.has(key)) return;
    seenKeys.add(key);
    candidates.push({ key, label, aliasKeys: new Set(aliasKeys) });
  };
  Object.values(layerSystemFilterGroups)
    .forEach(group => add(`part-system:${catalogAttributeChipAliasKey(group.label)}`, group.label));
  partClassificationFilterDescriptors()
    .forEach(descriptor => {
      const key = descriptor.group === "part-system"
        ? catalogAttributeChipAliasKey(descriptor.key)
        : descriptor.key;
      add(`${descriptor.group}:${key}`, descriptor.label, descriptor.aliases);
    });
  Object.entries(structureLabels).forEach(([value, label]) => {
    const aliases = value === "basic"
      ? ["4단 구조", "4단", "basic"]
      : value === "hybrid"
        ? ["하이브리드", "hybrid"]
        : value === "4d"
          ? ["4D", "4d"]
          : value === "synchrome"
            ? ["싱크롬", "synchrome"]
            : [value];
    add(`system:${value}`, label, aliases);
  });
  Object.values(burstBeySystemFilterGroups)
    .forEach(group => add(`bey-system:${catalogAttributeChipAliasKey(group.label)}`, group.label, group.aliases));
  Object.keys(battleTypeLabels.classic).forEach(value => {
    add(`battle:${value}`, battleTypeLabels.classic[value], [value, battleTypeLabels.modern[value]]);
  });
  Object.entries(spinLabels).forEach(([value, label]) => add(`spin:${value}`, label, [value]));
  toolsSubtypeOptions.forEach(option => add(`tools:${option.value}`, option.label, [option.value]));
  Object.entries(searchTagAliases).forEach(([tag, aliases]) => add(`tag:${catalogAttributeChipAliasKey(tag)}`, tagLabels[tag] || tag, aliases));
  Object.entries(tagLabels).forEach(([value, label]) => add(`tag:${value}`, label, [value]));
  return candidates;
})();
const catalogAttributeChipForTerm = term => {
  const key = catalogAttributeChipAliasKey(term);
  return catalogAttributeChipCandidates.find(candidate => candidate.aliasKeys.has(key)) || null;
};
const catalogExclusiveFilterGroups = new Set(["type", "part-system", "bey-system", "system", "battle", "spin", "x-line", "x-blade-role", "tools"]);
const catalogFilterGroupForTerm = term => {
  const candidate = catalogAttributeChipForTerm(term);
  const group = String(candidate?.key || "").split(":")[0];
  return catalogExclusiveFilterGroups.has(group) ? group : "";
};
const catalogFilterChipLabelForTerm = (candidate, term) => {
  if (!candidate) return "";
  const [group, value] = String(candidate.key || "").split(":");
  if (group !== "battle") return candidate.label;
  const termKey = catalogAttributeChipAliasKey(term);
  const classicLabel = battleTypeLabels.classic[value] || "";
  const modernLabel = battleTypeLabels.modern[value] || "";
  if (classicLabel && termKey === catalogAttributeChipAliasKey(classicLabel)) return classicLabel;
  if (modernLabel && termKey === catalogAttributeChipAliasKey(modernLabel)) return modernLabel;
  return candidate.label;
};
const catalogAttributeSegmentAt = (terms, start) => {
  for (let end = terms.length; end > start; end -= 1) {
    const term = terms.slice(start, end).join(" ");
    const candidate = catalogAttributeChipForTerm(term);
    if (candidate) return { kind: "attribute", start, end, term, candidate };
  }
  return null;
};
const catalogQuerySegments = query => {
  const terms = catalogSearchQueryTerms(query);
  const segments = [];
  for (let index = 0; index < terms.length;) {
    const attribute = catalogAttributeSegmentAt(terms, index);
    if (attribute) {
      segments.push(attribute);
      index = attribute.end;
      continue;
    }
    segments.push({ kind: "text", start: index, end: index + 1, term: terms[index] });
    index += 1;
  }
  return { terms, segments };
};
const catalogFilterQueryTerms = query => catalogQuerySegments(query).segments.map(segment => segment.term);
const catalogQueryChipRecords = query => {
  const { terms, segments } = catalogQuerySegments(query);
  const textSegments = segments.filter(segment => segment.kind === "text");
  const records = segments
    .filter(segment => segment.kind === "attribute")
    .map(segment => ({
      key: `attribute:${segment.start}:${segment.end}`,
      label: catalogFilterChipLabelForTerm(segment.candidate, segment.term),
      start: segment.start,
      termIndexes: Array.from({ length: segment.end - segment.start }, (_, index) => segment.start + index)
    }));
  if (textSegments.length) {
    records.push({
      key: "text",
      label: textSegments.map(segment => segment.term).join(" "),
      start: textSegments[0].start,
      termIndexes: textSegments.map(segment => segment.start)
    });
  }
  records.sort((a, b) => a.start - b.start);
  return { terms, records };
};
const catalogQueryChips = query => catalogQueryChipRecords(query).records.map(({ key, label }) => ({ key, label }));
const removeCatalogQueryChip = (query, key) => {
  const { terms, records } = catalogQueryChipRecords(query);
  const record = records.find(entry => entry.key === key);
  if (!record) return String(query || "").trim();
  const removedIndexes = new Set(record.termIndexes);
  return terms.filter((term, index) => term && !removedIndexes.has(index)).join(" ");
};
const normalizeCatalogFilterTerms = query => {
  const terms = catalogFilterQueryTerms(query);
  if (!terms.length) return String(query || "").trim();
  const entries = terms.map((term, index) => ({ term, index, group: catalogFilterGroupForTerm(term) }));
  const lastGroupIndexes = new Map();
  entries.forEach(entry => {
    if (entry.group) lastGroupIndexes.set(entry.group, entry.index);
  });
  return entries
    .filter(entry => !entry.group || lastGroupIndexes.get(entry.group) === entry.index)
    .map(entry => entry.term)
    .join(" ");
};
const normalizeCatalogSearchInput = input => {
  if (!input) return;
  const normalized = normalizeCatalogFilterTerms(input.value);
  if (normalized !== input.value.trim()) setSearchInputValue(input, normalized);
};

const globalSearchQuery = () => (globalSearch?.value || mobileDrawerSearch?.value || "").trim();
const catalogSearchQuery = () => catalogSearch?.value.trim() || "";
const animeSearchQuery = () => animeSearch?.value.trim() || "";

const searchScopeLabel = scope => ({
  all: "전체",
  bey: "베이",
  tools: "장비",
  product: "제품",
  manga: "만화",
  anime: "애니"
})[scope] || "전체";
const searchScopeValues = ["all", "bey", "tools", "product", "manga", "anime"];
const normalizeSearchScope = scope => searchScopeValues.includes(scope) ? scope : "all";

const itemAttributeLabels = item => [
  item.battleType ? battleTypeLabel(item.battleType, item) : "",
  item.spin ? spinLabel(item.spin) : "",
  item.heightClass ? heightClassLabel(item.heightClass) : "",
  ...partClassificationLabels(item, "card")
].filter(Boolean);

export {
  animeSearchQuery,
  catalogAttributeChipForTerm,
  catalogFilterChipLabelForTerm,
  catalogFilterQueryTerms,
  catalogItemSearchFields,
  catalogQueryChips,
  catalogSearchQuery,
  compareScoredSearchResults,
  createSearchRecord,
  globalSearchQuery,
  itemAttributeLabels,
  mainSearchItemText,
  matchSearchRecord,
  matchesSearchText,
  normalizeCatalogSearchInput,
  normalizeSearchScope,
  prepareCatalogSearchQuery,
  prepareSearchQuery,
  removeCatalogQueryChip,
  searchFieldsFromValues,
  searchQueryFrom,
  searchScopeLabel,
  toolsSearchFields
};
