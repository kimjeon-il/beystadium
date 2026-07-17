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
const createSearchTextIndex = (text = "", initialText = "", capabilities = {}) => {
  const raw = String(text || "");
  const initial = String(initialText || "");
  const lower = lowerSearchText(raw);
  const compact = compactSearchSpacing(raw);
  const index = {
    isSearchTextIndex: true,
    lower,
    compactLower: compactSearchSpacing(lower)
  };
  if (capabilities.initial !== false) {
    index.initialWordStarts = createHangulInitialWordStartSet(initial);
    index.initials = hangulInitialSequence(raw);
    index.wordInitials = hangulWordInitialSequence(initial || raw);
  }
  if (capabilities.jamo !== false) index.compactChars = [...compact];
  if (capabilities.ime !== false) {
    index.imeJamoKey = hangulImeJamoKey(raw);
    index.initialImeJamoKey = hangulImeJamoKey(initial || raw);
    index.imeWordKeys = hangulImeWordKeys(raw);
    index.initialImeWordKeys = hangulImeWordKeys(initial || raw);
  }
  return index;
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
  const lower = lowerSearchText(raw);
  const compact = compactSearchSpacing(raw);
  const compactChars = [...compact];
  return {
    isPreparedSearchTerm: true,
    raw,
    lower,
    compact,
    compactLower: compactSearchSpacing(lower),
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
const preparedSearchQuery = (raw, termTexts) => {
  const terms = raw ? (termTexts.length ? termTexts : [raw]).map(prepareSearchTerm) : [];
  return {
    isPreparedSearchQuery: true,
    raw,
    isEmpty: !raw,
    terms,
    cacheKey: JSON.stringify(terms.map(term => [term.lower, term.compactLower]))
  };
};
const prepareSearchQuery = query => {
  const raw = String(query || "").trim();
  return preparedSearchQuery(raw, searchQueryTerms(raw));
};
const prepareCatalogSearchQuery = query => {
  const raw = String(query || "").trim();
  return preparedSearchQuery(raw, catalogSearchQueryTerms(raw));
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
const matchesSearchText = (text, query, initialText = "") => searchMatchRank(text, query, { initialText }) > 0;
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
  const initial = options.initial ?? defaults.initial ?? false;
  const jamo = options.jamo ?? defaults.jamo ?? false;
  const ime = options.ime ?? defaults.ime ?? false;
  return {
    role,
    weight: options.weight || SEARCH_FIELD_WEIGHTS[role] || 24,
    initial,
    jamo,
    ime,
    index: createSearchTextIndex(raw, options.initialText ?? raw, { initial, jamo, ime })
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

export {
  catalogSearchQueryTerms,
  compactSearchSpacing,
  compareScoredSearchResults,
  createSearchField,
  createSearchRecord,
  lowerSearchText,
  matchSearchRecord,
  matchesSearchText,
  prepareCatalogSearchQuery,
  prepareSearchQuery,
  searchFieldsFromValues,
  searchQueryFrom,
  uniqueSearchValues
};
