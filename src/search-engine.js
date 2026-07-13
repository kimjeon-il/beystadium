import { itemSeriesLabel } from "#app/release-core";
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
const compactSearchSpacing = value => String(value || "").replace(/[\s·,.;:!?()[\]{}"“”'‘’/\\-]+/g, "");
const lowerSearchText = value => String(value || "").toLocaleLowerCase("ko");
const HANGUL_SYLLABLE_START = 0xac00;
const HANGUL_SYLLABLE_END = 0xd7a3;
const HANGUL_MEDIAL_COUNT = 21;
const HANGUL_FINAL_COUNT = 28;
const HANGUL_INITIALS = ["ㄱ", "ㄲ", "ㄴ", "ㄷ", "ㄸ", "ㄹ", "ㅁ", "ㅂ", "ㅃ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅉ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const HANGUL_MEDIALS = ["ㅏ", "ㅐ", "ㅑ", "ㅒ", "ㅓ", "ㅔ", "ㅕ", "ㅖ", "ㅗ", "ㅘ", "ㅙ", "ㅚ", "ㅛ", "ㅜ", "ㅝ", "ㅞ", "ㅟ", "ㅠ", "ㅡ", "ㅢ", "ㅣ"];
const HANGUL_FINALS = ["", "ㄱ", "ㄲ", "ㄳ", "ㄴ", "ㄵ", "ㄶ", "ㄷ", "ㄹ", "ㄺ", "ㄻ", "ㄼ", "ㄽ", "ㄾ", "ㄿ", "ㅀ", "ㅁ", "ㅂ", "ㅄ", "ㅅ", "ㅆ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"];
const HANGUL_FINAL_DECOMPOSED = {
  "ㄳ": "ㄱㅅ",
  "ㄵ": "ㄴㅈ",
  "ㄶ": "ㄴㅎ",
  "ㄺ": "ㄹㄱ",
  "ㄻ": "ㄹㅁ",
  "ㄼ": "ㄹㅂ",
  "ㄽ": "ㄹㅅ",
  "ㄾ": "ㄹㅌ",
  "ㄿ": "ㄹㅍ",
  "ㅀ": "ㄹㅎ",
  "ㅄ": "ㅂㅅ"
};
const HANGUL_INITIAL_INDEX = new Map(HANGUL_INITIALS.map((char, index) => [char, index]));
const hangulSyllableParts = char => {
  const code = char.codePointAt(0);
  if (code < HANGUL_SYLLABLE_START || code > HANGUL_SYLLABLE_END) return null;
  const offset = code - HANGUL_SYLLABLE_START;
  const initial = Math.floor(offset / (HANGUL_MEDIAL_COUNT * HANGUL_FINAL_COUNT));
  const medial = Math.floor((offset % (HANGUL_MEDIAL_COUNT * HANGUL_FINAL_COUNT)) / HANGUL_FINAL_COUNT);
  const final = offset % HANGUL_FINAL_COUNT;
  return final ? [initial, medial, final] : [initial, medial];
};
const hangulInitialIndex = char => HANGUL_INITIAL_INDEX.has(char) ? HANGUL_INITIAL_INDEX.get(char) : -1;
const hangulInitialMatchesChar = (textChar, initialChar) => {
  const textParts = hangulSyllableParts(textChar);
  const initial = hangulInitialIndex(initialChar);
  return Boolean(textParts) && initial >= 0 && textParts[0] === initial;
};
const hangulInitialForChar = char => {
  if (hangulInitialIndex(char) >= 0) return char;
  const parts = hangulSyllableParts(char);
  return parts ? HANGUL_INITIALS[parts[0]] : "";
};
const searchCharExactMatches = (textChar, termChar) => textChar.toLocaleLowerCase("ko") === termChar.toLocaleLowerCase("ko");
const searchCharPrefixMatches = (textChar, termChar) => {
  const textParts = hangulSyllableParts(textChar);
  if (textParts && hangulInitialIndex(termChar) >= 0) return hangulInitialMatchesChar(textChar, termChar);
  const termParts = hangulSyllableParts(termChar);
  if (textParts && termParts) return termParts.every((part, index) => textParts[index] === part);
  return searchCharExactMatches(textChar, termChar);
};
const searchCharMatches = (textChar, termChar, { allowPrefix = false } = {}) =>
  allowPrefix ? searchCharPrefixMatches(textChar, termChar) : searchCharExactMatches(textChar, termChar);
const searchQueryTerms = query => String(query || "").split(",").map(term => term.trim()).filter(Boolean);
const catalogSearchQueryTerms = query => String(query || "").split(/[\s,]+/).map(term => term.trim()).filter(Boolean);
const createHangulInitialWordStartSet = text => {
  const starts = new Set();
  String(text || "")
    .split(/[\s·,.;:!?()[\]{}"“”'‘’/\\-]+/)
    .filter(Boolean)
    .forEach(word => {
      const initial = hangulInitialForChar([...word][0] || "");
      if (initial) starts.add(initial);
    });
  return starts;
};
const searchWords = text => String(text || "")
  .split(/[\s·,.;:!?()[\]{}"“”'‘’/\\-]+/)
  .filter(Boolean);
const hangulInitialSequence = text => [...String(text || "")]
  .map(hangulInitialForChar)
  .join("");
const hangulWordInitialSequence = text => searchWords(text)
  .map(word => hangulInitialForChar([...word][0] || ""))
  .filter(Boolean)
  .join("");
const searchDelimiterPattern = /[\s·,.;:!?()[\]{}"“”'‘’/\\-]/;
const hangulFinalJamo = finalIndex => HANGUL_FINAL_DECOMPOSED[HANGUL_FINALS[finalIndex]] || HANGUL_FINALS[finalIndex] || "";
const hangulImeJamoKey = text => [...String(text || "").toLocaleLowerCase("ko")]
  .map(char => {
    if (searchDelimiterPattern.test(char)) return "";
    const parts = hangulSyllableParts(char);
    if (!parts) return char;
    const [initial, medial, final = 0] = parts;
    return `${HANGUL_INITIALS[initial]}${HANGUL_MEDIALS[medial]}${hangulFinalJamo(final)}`;
  })
  .join("");
const hangulImeWordKeys = text => searchWords(text)
  .map(hangulImeJamoKey)
  .filter(Boolean);
const createSearchTextIndex = (text = "", initialText = "") => {
  const raw = String(text || "");
  const initial = String(initialText || "");
  const lower = lowerSearchText(raw);
  const compact = compactSearchSpacing(raw);
  return {
    isSearchTextIndex: true,
    raw,
    lower,
    compact,
    compactLower: compactSearchSpacing(lower),
    compactChars: [...compact],
    initialText: initial,
    initialWordStarts: createHangulInitialWordStartSet(initial),
    initials: hangulInitialSequence(raw),
    wordInitials: hangulWordInitialSequence(initial || raw),
    imeJamoKey: hangulImeJamoKey(raw),
    initialImeJamoKey: hangulImeJamoKey(initial || raw),
    imeWordKeys: hangulImeWordKeys(raw),
    initialImeWordKeys: hangulImeWordKeys(initial || raw)
  };
};
const SEARCH_TEXT_INDEX_CACHE_LIMIT = 768;
const searchTextIndexCache = new Map();
const searchTextIndexFrom = (text, initialText = "") => {
  if (text && typeof text === "object" && text.isSearchTextIndex) return text;
  const raw = String(text || "");
  const initial = String(initialText || "");
  const key = `${raw}\u0000${initial}`;
  const cached = searchTextIndexCache.get(key);
  if (cached) return cached;
  if (searchTextIndexCache.size >= SEARCH_TEXT_INDEX_CACHE_LIMIT) {
    searchTextIndexCache.delete(searchTextIndexCache.keys().next().value);
  }
  const index = createSearchTextIndex(raw, initial);
  searchTextIndexCache.set(key, index);
  return index;
};
const prepareSearchTerm = term => {
  const raw = String(term || "");
  const compact = compactSearchSpacing(raw);
  const compactChars = [...compact];
  return {
    isPreparedSearchTerm: true,
    raw,
    lower: lowerSearchText(raw),
    compact,
    compactLower: compactSearchSpacing(lowerSearchText(raw)),
    imeJamoKey: hangulImeJamoKey(raw),
    compactChars,
    hasHangulTerm: compactChars.some(char => hangulSyllableParts(char) || hangulInitialIndex(char) >= 0),
    hasHangulSyllableTerm: compactChars.some(char => hangulSyllableParts(char)),
    isOnlyHangulInitials: compactChars.length > 0 && compactChars.every(char => hangulInitialIndex(char) >= 0),
    isSingleHangulInitial: compactChars.length === 1 && hangulInitialIndex(compactChars[0]) >= 0
  };
};
const searchTermFrom = term =>
  term && typeof term === "object" && term.isPreparedSearchTerm ? term : prepareSearchTerm(term);
const prepareSearchQuery = query => {
  const raw = String(query || "").trim();
  const termTexts = searchQueryTerms(raw);
  return {
    isPreparedSearchQuery: true,
    raw,
    isEmpty: !raw,
    terms: raw ? (termTexts.length ? termTexts : [raw]).map(prepareSearchTerm) : []
  };
};
const prepareCatalogSearchQuery = query => {
  const raw = String(query || "").trim();
  const termTexts = catalogSearchQueryTerms(raw);
  return {
    isPreparedSearchQuery: true,
    raw,
    isEmpty: !raw,
    terms: raw ? (termTexts.length ? termTexts : [raw]).map(prepareSearchTerm) : []
  };
};
const searchQueryFrom = query =>
  query && typeof query === "object" && query.isPreparedSearchQuery ? query : prepareSearchQuery(query);
const hangulJamoPrefixIncludesPrepared = (textIndex, term) => {
  const textChars = textIndex.compactChars;
  const termChars = term.compactChars;
  if (!termChars.length || !term.hasHangulTerm || term.isSingleHangulInitial) return false;
  for (let start = 0; start <= textChars.length - termChars.length; start += 1) {
    let matched = true;
    for (let index = 0; index < termChars.length; index += 1) {
      if (!searchCharMatches(textChars[start + index], termChars[index], { allowPrefix: index === termChars.length - 1 })) {
        matched = false;
        break;
      }
    }
    if (matched) return true;
  }
  return false;
};
const imeJamoPrefixMatchesPrepared = (textIndex, term) => {
  if (!term.hasHangulSyllableTerm || term.imeJamoKey.length < 3) return false;
  const searchKeys = [textIndex.initialImeJamoKey, textIndex.imeJamoKey].filter(Boolean);
  const wordKeys = [...(textIndex.initialImeWordKeys || []), ...(textIndex.imeWordKeys || [])];
  return searchKeys.some(key => key.startsWith(term.imeJamoKey)) || wordKeys.some(key => key.startsWith(term.imeJamoKey));
};
const searchTermMatchRank = (text, term, { initialText = "" } = {}) => {
  const textIndex = searchTextIndexFrom(text, initialText);
  const preparedTerm = searchTermFrom(term);
  if (preparedTerm.lower && textIndex.lower.includes(preparedTerm.lower)) return 2;
  if (preparedTerm.compactLower && textIndex.compactLower.includes(preparedTerm.compactLower)) return 2;
  if (preparedTerm.isSingleHangulInitial && textIndex.initialWordStarts.has(preparedTerm.compact)) return 1;
  if (imeJamoPrefixMatchesPrepared(textIndex, preparedTerm)) return 1;
  return hangulJamoPrefixIncludesPrepared(textIndex, preparedTerm) ? 1 : 0;
};
const searchMatchRank = (text, query, { initialText = "" } = {}) => {
  const preparedQuery = searchQueryFrom(query);
  if (preparedQuery.isEmpty) return 2;
  const textIndex = searchTextIndexFrom(text, initialText);
  const ranks = preparedQuery.terms.map(term => searchTermMatchRank(textIndex, term));
  return ranks.every(Boolean) ? Math.min(...ranks) : 0;
};
const matchesSearchText = (text, query, initialText = "") => {
  return searchMatchRank(text, query, { initialText }) > 0;
};
const catalogListSpinSearchTerms = item => {
  if (!item?.spin) return [];
  if (item.spin === "dual") return ["dual", spinLabel("dual"), "left", spinLabel("left"), "right", spinLabel("right")];
  return [item.spin, spinLabel(item.spin)];
};
const SEARCH_FIELD_WEIGHTS = {
  primaryName: 120,
  code: 108,
  alias: 88,
  category: 58,
  attributes: 42,
  composition: 24,
  description: 18
};
const SEARCH_FIELD_DEFAULTS = {
  primaryName: { initial: true, jamo: true, ime: true },
  code: { initial: false, jamo: false, ime: false },
  alias: { initial: true, jamo: true, ime: true },
  category: { initial: true, jamo: false, ime: false },
  attributes: { initial: false, jamo: false, ime: false },
  composition: { initial: false, jamo: false, ime: false },
  description: { initial: false, jamo: false, ime: false }
};
const uniqueSearchValues = values => {
  const seen = new Set();
  return values
    .flat(Infinity)
    .map(value => String(value || "").trim())
    .filter(value => {
      if (!value || seen.has(value)) return false;
      seen.add(value);
      return true;
    });
};
const createSearchField = (role, text, options = {}) => {
  const raw = String(text || "").trim();
  if (!raw) return null;
  const defaults = SEARCH_FIELD_DEFAULTS[role] || {};
  return {
    role,
    weight: options.weight || SEARCH_FIELD_WEIGHTS[role] || 24,
    initial: options.initial ?? defaults.initial ?? false,
    jamo: options.jamo ?? defaults.jamo ?? false,
    ime: options.ime ?? defaults.ime ?? false,
    index: createSearchTextIndex(raw, options.initialText ?? raw)
  };
};
const searchFieldsFromValues = (role, values, options = {}) =>
  uniqueSearchValues(values).map(value => createSearchField(role, value, options)).filter(Boolean);
const createSearchRecord = (kind, item, fields, order = 0, extra = {}) => {
  const record = {
    kind,
    item,
    order,
    ...extra,
    fields: fields.filter(Boolean)
  };
  record.entry = kind === "anime" ? { kind, item, index: record.index } : { kind, item };
  return record;
};
const searchFieldTermScore = (field, term) => {
  const preparedTerm = searchTermFrom(term);
  if (!field || !preparedTerm.compactLower) return 0;
  const index = field.index;
  const weight = field.weight;
  if (preparedTerm.lower && index.lower === preparedTerm.lower) return weight + 90;
  if (preparedTerm.compactLower && index.compactLower === preparedTerm.compactLower) return weight + 84;
  if (preparedTerm.lower && index.lower.startsWith(preparedTerm.lower)) return weight + 70;
  if (preparedTerm.compactLower && index.compactLower.startsWith(preparedTerm.compactLower)) return weight + 64;
  if (preparedTerm.lower && index.lower.includes(preparedTerm.lower)) return weight + 48;
  if (preparedTerm.compactLower && index.compactLower.includes(preparedTerm.compactLower)) return weight + 44;
  if (field.initial && preparedTerm.isSingleHangulInitial && index.initialWordStarts.has(preparedTerm.compact)) return weight + 22;
  if (field.initial && preparedTerm.isOnlyHangulInitials && preparedTerm.compact.length > 1) {
    if (index.wordInitials.includes(preparedTerm.compact)) return weight + 26;
    if (index.initials.includes(preparedTerm.compact)) return weight + 16;
  }
  if (field.ime && imeJamoPrefixMatchesPrepared(index, preparedTerm)) return weight + 56;
  if (field.jamo && hangulJamoPrefixIncludesPrepared(index, preparedTerm)) return Math.max(1, Math.round(weight * 0.45));
  return 0;
};
const matchSearchRecord = (record, query) => {
  const preparedQuery = searchQueryFrom(query);
  if (preparedQuery.isEmpty) return { matched: true, score: 0 };
  let score = 0;
  for (const term of preparedQuery.terms) {
    let termScore = 0;
    for (const field of record.fields) termScore = Math.max(termScore, searchFieldTermScore(field, term));
    if (!termScore) return { matched: false, score: 0 };
    score += termScore;
  }
  return { matched: true, score };
};
const compareScoredSearchResults = (a, b) => b.score - a.score || a.record.order - b.record.order;
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
  single: { label: "싱글레이어 시스템", aliases: ["싱글레이어"], partPrefixes: ["LAYER-"] },
  dual: { label: "듀얼레이어 시스템", aliases: ["듀얼레이어"], partPrefixes: ["DUALLAYER-"] },
  god: { label: "갓레이어 시스템", aliases: ["갓레이어"], partPrefixes: ["GODLAYER-"] },
  choz: { label: "초제트레이어 시스템", aliases: ["초제트레이어"], partPrefixes: ["CHOZLAYER-"] },
  gachi: { label: "진검레이어 시스템", aliases: ["진검레이어"], partPrefixes: ["GACHIBASE-", "GACHILAYER-"] },
  superking: { label: "슈퍼킹레이어 시스템", aliases: ["슈퍼킹레이어"], partPrefixes: ["SUPERKINGRING-"] },
  db: { label: "DB레이어 시스템", aliases: ["DB레이어"], partPrefixes: ["DBBLADE-", "DBLAYER-"] }
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
const burstBeySystemBaseTermLabels = new Map(
  Object.values(burstBeySystemFilterGroups)
    .flatMap(group => (group.aliases || []).map(alias => [catalogAttributeChipAliasKey(alias), group.label]))
);
const catalogSystemTermKey = catalogAttributeChipAliasKey("시스템");
const catalogFilterQueryTerms = query => {
  const terms = catalogSearchQueryTerms(query);
  const mergedTerms = [];
  for (let index = 0; index < terms.length; index += 1) {
    const term = terms[index];
    const nextTermKey = catalogAttributeChipAliasKey(terms[index + 1] || "");
    const burstSystemLabel = burstBeySystemBaseTermLabels.get(catalogAttributeChipAliasKey(term));
    if (burstSystemLabel && nextTermKey === catalogSystemTermKey) {
      mergedTerms.push(burstSystemLabel);
      index += 1;
      continue;
    }
    mergedTerms.push(term);
  }
  return mergedTerms;
};
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
  searchFieldsFromValues,
  searchQueryFrom,
  searchScopeLabel,
  toolsSearchFields
};
