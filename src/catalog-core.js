const catalogSourceOrder = item => {
  if (!item || typeof item !== "object") return Number.MAX_SAFE_INTEGER;
  const toolsOrder = toolsItemOrder.get(item);
  if (toolsOrder !== undefined) return 100000 + toolsOrder;
  const coreOrder = catalogCoreItemOrder.get(item);
  return coreOrder !== undefined ? coreOrder : Number.MAX_SAFE_INTEGER;
};
const zeroGBottomStartIndex = () => partItems.findIndex(item => item.id === "BOTTOM-CIRCLE-FLAT");
const findCatalogItemById = id => catalogCoreItemsById.get(id) || toolsItemsById.get(id) || bookItemsById.get(id) || gameItemsById.get(id) || productItemsById.get(id) || null;

const cardVisualMarkup = item => item.image
  ? `<img class="bey-image" src="${item.image}" alt="${item.name}" />`
  : "";
const modalArtMarkup = item => item.model
  ? `<div class="model-viewer" data-model="${item.model}"><p>3D 모델 로딩 중</p></div>`
  : cardVisualMarkup(item);
const partCategory = item => item.sub || "";
const catalogCardTypeLabel = item => partDisplayTypeLabel(item);
const catalogCardTitle = (label, title, className = "") => {
  const titleClass = ["card-name", className].filter(Boolean).join(" ");
  return `
    <h3 class="${titleClass}">
      <span class="catalog-card-badge">${label}</span>
      <span class="catalog-card-title">${title}</span>
    </h3>`;
};
const codedPartNameTypes = ["track", "bottom", "4dbottom", "disk", "coredisk", "frame", "dbdisk", "dbarmor", "driver", "bit", "superkingchassis"];
const partKoName = item => {
  if (!codedPartNameTypes.includes(item.type)) return "";
  const detail = item.sub || "";
  return detail.includes("높이") ? "" : detail;
};
const wheelTypes = ["wheel", "clearwheel", "4dclearwheel", "lightwheel", "metalwheel", "4dmetalwheel", "chromewheel", "crystalwheel"];
const cardInfo = item => {
  if (codedPartNameTypes.includes(item.type)) {
    const fullEn = item.type === "track" && /^\d+$/.test(item.name) ? "&nbsp;" : item.en;
    return `${catalogCardTitle(catalogCardTypeLabel(item), item.name, "code-name")}<p class="card-full-en">${fullEn}</p><p class="card-full-ko">${partKoName(item) || "&nbsp;"}</p>`;
  }
  if (item.type === "bey") {
    const combo = partCategory(item);
    const suffix = combo ? ` ${combo}` : "";
    return `${catalogCardTitle(catalogCardTypeLabel(item), `${item.name}${suffix}`)}<p class="card-full-en">${item.en}${suffix}</p><p class="card-full-ko">&nbsp;</p>`;
  }
  if (wheelTypes.includes(item.type)) {
    return `${catalogCardTitle(catalogCardTypeLabel(item), item.name)}<p class="card-full-en">${item.en}</p><p class="card-full-ko">&nbsp;</p>`;
  }
  if (["face", "stoneface"].includes(item.type)) {
    return `${catalogCardTitle(catalogCardTypeLabel(item), item.name)}<p class="card-full-en">${item.en}</p><p class="card-full-ko">&nbsp;</p>`;
  }
  return `${catalogCardTitle(catalogCardTypeLabel(item), item.name)}<p class="card-en">${item.en}</p>`;
};
const mainSearchItemText = item => item
  ? [item.name, item.jpName, item.en, item.sub, item.no, item.productNo].filter(Boolean).join(" ")
  : "";
const compactSearchSpacing = value => String(value || "").replace(/[\s·,.;:!?()[\]{}"“”'‘’/\\\-]+/g, "");
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
    .split(/[\s·,.;:!?()[\]{}"“”'‘’/\\\-]+/)
    .filter(Boolean)
    .forEach(word => {
      const initial = hangulInitialForChar([...word][0] || "");
      if (initial) starts.add(initial);
    });
  return starts;
};
const searchWords = text => String(text || "")
  .split(/[\s·,.;:!?()[\]{}"“”'‘’/\\\-]+/)
  .filter(Boolean);
const hangulInitialSequence = text => [...String(text || "")]
  .map(hangulInitialForChar)
  .join("");
const hangulWordInitialSequence = text => searchWords(text)
  .map(word => hangulInitialForChar([...word][0] || ""))
  .filter(Boolean)
  .join("");
const searchDelimiterPattern = /[\s·,.;:!?()[\]{}"“”'‘’/\\\-]/;
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
const catalogSearchRecordCache = new WeakMap();
const catalogListSearchRecord = item => {
  if (!item || typeof item !== "object") return createSearchRecord("catalog-item", item, [], 0);
  const cached = catalogSearchRecordCache.get(item);
  if (cached) return cached;
  const isToolsItem = toolsItemsById.has(item.id);
  const order = catalogSourceOrder(item);
  const record = createSearchRecord(isToolsItem ? "tools" : "catalog-item", item, isToolsItem ? toolsSearchFields(item, { includeSeries: false }) : catalogItemSearchFields(item, { includeSeries: false }), order);
  catalogSearchRecordCache.set(item, record);
  return record;
};
const catalogListSearchScore = (item, query) => matchSearchRecord(catalogListSearchRecord(item), query).score;
const globalSearchQuery = () => (globalSearch?.value || mobileDrawerSearch?.value || "").trim();
const catalogSearchQuery = () => catalogSearch?.value.trim() || "";
const animeSearchQuery = () => animeSearch?.value.trim() || "";
const searchResultTitleElement = document.querySelector("#searchResultsTitle");
const searchResultMeta = document.querySelector("#searchResultsMeta");
const productSerialNumber = (item, region = activeReleaseRegion) => {
  const no = productReleaseValue(item, "no", region) || item.no || "";
  const match = no.match(/BB-(\d+)/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};
const compareProductReleaseOrder = (a, b, region = activeReleaseRegion) => {
  const releaseA = productRelease(a, region);
  const releaseB = productRelease(b, region);
  const dateDiff = releaseDateSortValue(releaseA.releaseDate || releaseA.release) - releaseDateSortValue(releaseB.releaseDate || releaseB.release);
  if (dateDiff) return dateDiff;
  const serialDiff = productSerialNumber(a, region) - productSerialNumber(b, region);
  if (serialDiff) return serialDiff;
  return (releaseA.no || a.no || "").localeCompare(releaseB.no || b.no || "", "ko", { numeric: true });
};
const toolsCard = item => `
  <button class="ui-card-button category-card catalog-card product-card" data-tools-id="${item.id}">
    <div class="catalog-card-visual"></div>
    ${catalogCardTitle(item.category, item.name)}
    <p class="card-full-en">${item.en}</p>
    <p class="card-full-ko">&nbsp;</p>
  </button>`;
function productCompositionItems(item, region = activeReleaseRegion) {
  const release = productRelease(item, region);
  const releaseComposition = Array.isArray(release.composition) && release.composition.length ? release.composition : null;
  const regionComposition = releaseComposition || (region === "jp" ? item.compositionJp || item.compositionJapan : item.compositionKr || item.compositionKorea);
  const krReleaseComposition = Array.isArray(item.releases?.kr?.composition) && item.releases.kr.composition.length ? item.releases.kr.composition : null;
  const baseComposition = region === "jp" ? item.composition || krReleaseComposition : region === "kr" ? item.composition : null;
  return regionComposition || baseComposition || [];
}
const productLineupIds = product => Array.isArray(product?.lineupPool) ? product.lineupPool : [];
const compareCatalogFirstReleaseMeta = (a, b) =>
  a.dateSort - b.dateSort ||
  a.productIndex - b.productIndex ||
  a.compositionIndex - b.compositionIndex ||
  a.regionIndex - b.regionIndex;
const firstReleaseMetaMapCache = new Map();
const firstReleaseMetaMap = (cacheKey, { matchesTarget, includeLineupTargets = false }) => {
  const cached = firstReleaseMetaMapCache.get(cacheKey);
  if (cached) return cached;
  const map = new Map();
  const rememberReleaseMeta = (target, meta) => {
    if (!matchesTarget(target)) return;
    const prev = map.get(target);
    if (!prev || compareCatalogFirstReleaseMeta(meta, prev) < 0) map.set(target, meta);
  };
  productItems.forEach((product, productIndex) => {
    Object.keys(releaseRegionLabels).forEach((region, regionIndex) => {
      if (!productReleasedInRegion(product, region)) return;
      const release = productRelease(product, region);
      const dateSort = releaseDateSortValue(release.releaseDate || release.release);
      if (dateSort === Number.MAX_SAFE_INTEGER) return;
      productCompositionItems(product, region).forEach((part, compositionIndex) => {
        rememberReleaseMeta(part.target, { dateSort, productIndex, compositionIndex, regionIndex });
      });
      if (!includeLineupTargets) return;
      productLineupIds(product).forEach((target, lineupIndex) => {
        rememberReleaseMeta(target, { dateSort, productIndex, compositionIndex: 1000 + lineupIndex, regionIndex });
      });
    });
  });
  firstReleaseMetaMapCache.set(cacheKey, map);
  return map;
};
const toolsFirstReleaseMetaMap = () => firstReleaseMetaMap("tools", {
  matchesTarget: target => target?.startsWith("TOOLS-") && toolsItemsById.has(target)
});
const compareToolsItemsByFirstRelease = (a, b) => {
  const metaA = toolsFirstReleaseMetaMap().get(a.id);
  const metaB = toolsFirstReleaseMetaMap().get(b.id);
  if (metaA && metaB) {
    const metaDiff = compareCatalogFirstReleaseMeta(metaA, metaB);
    if (metaDiff) return metaDiff;
  } else if (metaA || metaB) {
    return metaA ? -1 : 1;
  }
  return a.name.localeCompare(b.name, "ko");
};
const catalogCoreFirstReleaseMetaMap = () => firstReleaseMetaMap("catalog-core", {
  matchesTarget: target => catalogCoreItemsById.has(target),
  includeLineupTargets: true
});
const catalogFirstReleaseMeta = item => {
  if (!item?.id) return null;
  const meta = toolsItemsById.has(item.id)
    ? toolsFirstReleaseMetaMap().get(item.id)
    : catalogCoreFirstReleaseMetaMap().get(item.id);
  return meta?.dateSort === Number.MAX_SAFE_INTEGER ? null : meta || null;
};
const compareCatalogItemsByLatestRelease = (a, b) => {
  const metaA = catalogFirstReleaseMeta(a);
  const metaB = catalogFirstReleaseMeta(b);
  if (metaA && metaB) {
    const dateDiff = metaB.dateSort - metaA.dateSort;
    if (dateDiff) return dateDiff;
    return 0;
  }
  if (metaA || metaB) return metaA ? -1 : 1;
  return 0;
};
const catalogProductPrefixRank = {
  B: 1,
  BB: 1,
  BBG: 2,
  BX: 1,
  UX: 2,
  CX: 3
};
const catalogLatestSeriesRank = item => {
  const order = [...releaseSeriesOrder()].reverse();
  const index = order.indexOf(item?.series);
  return index >= 0 ? index : order.length;
};
const catalogToolFirstReleaseProductNo = item => {
  const meta = toolsFirstReleaseMetaMap().get(item?.id);
  const product = Number.isInteger(meta?.productIndex) ? productItems[meta.productIndex] : null;
  if (!product) return "";
  const region = Object.keys(releaseRegionLabels)[meta.regionIndex] || activeReleaseRegion;
  const release = productRelease(product, region);
  return release.no || product.no || "";
};
const catalogProductNumberKey = item => {
  const source = [
    item?.productNo,
    item?.no,
    toolsItemsById.has(item?.id) ? catalogToolFirstReleaseProductNo(item) : "",
    item?.id
  ].filter(Boolean).join(" ");
  const match = source.match(/\b(BBG|BX|UX|CX|BB|B)[-_\s]?(\d+)/i);
  if (!match) return null;
  const prefix = match[1].toUpperCase();
  return {
    prefixRank: catalogProductPrefixRank[prefix] || 0,
    number: Number(match[2]) || 0
  };
};
const compareCatalogProductNumberKeys = (a, b) => {
  if (a && b) {
    const prefixDiff = b.prefixRank - a.prefixRank;
    if (prefixDiff) return prefixDiff;
    return b.number - a.number;
  }
  if (a || b) return a ? -1 : 1;
  return 0;
};
const compareCatalogProductNumberKeysAsc = (a, b) => {
  if (a && b) {
    const prefixDiff = a.prefixRank - b.prefixRank;
    if (prefixDiff) return prefixDiff;
    return a.number - b.number;
  }
  if (a || b) return a ? -1 : 1;
  return 0;
};
const compareCatalogItemsByOldestRelease = (a, b) => {
  const metaA = catalogFirstReleaseMeta(a);
  const metaB = catalogFirstReleaseMeta(b);
  if (metaA && metaB) {
    const dateDiff = metaA.dateSort - metaB.dateSort;
    if (dateDiff) return dateDiff;
    return 0;
  }
  if (metaA || metaB) return metaA ? -1 : 1;
  return 0;
};
const compareCatalogItemsByLatest = (a, b) => {
  const seriesDiff = catalogLatestSeriesRank(a) - catalogLatestSeriesRank(b);
  if (seriesDiff) return seriesDiff;
  const releaseDiff = compareCatalogItemsByLatestRelease(a, b);
  if (releaseDiff) return releaseDiff;
  const numberDiff = compareCatalogProductNumberKeys(catalogProductNumberKey(a), catalogProductNumberKey(b));
  if (numberDiff) return numberDiff;
  const orderDiff = catalogSourceOrder(b) - catalogSourceOrder(a);
  if (orderDiff) return orderDiff;
  return (a?.name || "").localeCompare(b?.name || "", "ko", { numeric: true });
};
const compareCatalogItemsByOldest = (a, b) => {
  const seriesDiff = catalogLatestSeriesRank(b) - catalogLatestSeriesRank(a);
  if (seriesDiff) return seriesDiff;
  const releaseDiff = compareCatalogItemsByOldestRelease(a, b);
  if (releaseDiff) return releaseDiff;
  const numberDiff = compareCatalogProductNumberKeysAsc(catalogProductNumberKey(a), catalogProductNumberKey(b));
  if (numberDiff) return numberDiff;
  const orderDiff = catalogSourceOrder(a) - catalogSourceOrder(b);
  if (orderDiff) return orderDiff;
  return (a?.name || "").localeCompare(b?.name || "", "ko", { numeric: true });
};
const compareCatalogItemsByNumberAsc = (a, b) => {
  const numberDiff = compareCatalogProductNumberKeysAsc(catalogProductNumberKey(a), catalogProductNumberKey(b));
  if (numberDiff) return numberDiff;
  return compareCatalogItemsByLatest(a, b);
};
const compareCatalogItemsByNumberDesc = (a, b) => {
  const numberDiff = compareCatalogProductNumberKeys(catalogProductNumberKey(a), catalogProductNumberKey(b));
  if (numberDiff) return numberDiff;
  return compareCatalogItemsByLatest(a, b);
};
const catalogSortOptions = [
  { value: "no-asc", label: "번호순 ↑", compare: compareCatalogItemsByNumberAsc },
  { value: "no-desc", label: "번호순 ↓", compare: compareCatalogItemsByNumberDesc },
  { value: "latest", label: "최신순", compare: compareCatalogItemsByLatest },
  { value: "oldest", label: "오래된순", compare: compareCatalogItemsByOldest }
];
const activeCatalogSortOption = () => catalogSortOptions.find(option => option.value === activeCatalogSort) || catalogSortOptions[2];
const compareCatalogItemsByActiveSort = (a, b) => activeCatalogSortOption().compare(a, b);
const catalogHasSearchQuery = () => Boolean(catalogSearchQuery());
const catalogHasSeriesFilter = () => selectedCatalogSeries !== "all";
const catalogItemMatchesSeries = item => !catalogHasSeriesFilter() || item?.series === selectedCatalogSeries;
const catalogUsesDefaultBrowseSet = query => !selectedCatalogKind && (query ? query.isEmpty : !catalogHasSearchQuery());
const CATALOG_VISIBLE_ITEMS_CACHE_LIMIT = 48;
const catalogVisibleItemsCache = new Map();
const cacheCatalogVisibleItems = (key, factory) => {
  const cached = catalogVisibleItemsCache.get(key);
  if (cached) return cached;
  if (catalogVisibleItemsCache.size >= CATALOG_VISIBLE_ITEMS_CACHE_LIMIT) {
    catalogVisibleItemsCache.delete(catalogVisibleItemsCache.keys().next().value);
  }
  const items = factory();
  catalogVisibleItemsCache.set(key, items);
  return items;
};
const catalogVisibleCacheKey = bucket => `${bucket}|${catalogRenderKey()}`;
const sortCatalogEntries = (entries, query) => entries
  .sort((a, b) => compareCatalogItemsByActiveSort(a.item, b.item))
  .map(entry => entry.item);
const visibleCatalogSubsetItems = ({ bucket, items, includeItem }) =>
  cacheCatalogVisibleItems(catalogVisibleCacheKey(bucket), () => {
    const query = prepareCatalogSearchQuery(catalogSearchQuery());
    return sortCatalogEntries(items
      .map(item => {
        if (!includeItem(item, query)) return null;
        const score = query.isEmpty ? 0 : catalogListSearchScore(item, query);
        return query.isEmpty || score > 0 ? { item, score } : null;
      })
      .filter(Boolean), query);
  });
const visibleToolsItems = () => visibleCatalogSubsetItems({
  bucket: "tools",
  items: toolsItems,
  includeItem: (item, query) => catalogItemMatchesSeries(item) && (
    selectedCatalogKind === "tools" ||
    (!selectedCatalogKind && !query.isEmpty)
  )
});
const visibleCatalogCoreItems = () => visibleCatalogSubsetItems({
  bucket: "core",
  items: catalogCoreItems,
  includeItem: (item, query) => {
    if (selectedCatalogKind === "tools" || !catalogItemMatchesSeries(item)) return false;
    const useDefaultBrowseSet = catalogUsesDefaultBrowseSet(query);
    const effectiveCatalogItemType = useDefaultBrowseSet ? "bey" : selectedCatalogKind || "all";
    if (effectiveCatalogItemType === "bey" && item.type !== "bey") return false;
    if (effectiveCatalogItemType === "parts" && item.type === "bey") return false;
    return true;
  }
});
const visibleCatalogItems = () => {
  const cacheKey = catalogVisibleCacheKey("all");
  return cacheCatalogVisibleItems(cacheKey, () => {
    const query = prepareCatalogSearchQuery(catalogSearchQuery());
    return sortCatalogEntries([...visibleCatalogCoreItems(), ...visibleToolsItems()]
    .map(item => {
      const score = query.isEmpty ? 0 : catalogListSearchScore(item, query);
      return query.isEmpty || score > 0 ? { item, score } : null;
    })
    .filter(Boolean), query);
  });
};
const openCatalogCard = card => {
  queueModalTransition("list");
  if (card.dataset.productId) openProductEntry(card.dataset.productId);
  else if (card.dataset.toolsId) openToolsDetail(card.dataset.toolsId);
  else if (card.dataset.bookId) openBookDetail(card.dataset.bookId);
  else if (card.dataset.gameId) openGameDetail(card.dataset.gameId);
  else if (card.dataset.animeEpisodeId) openAnimeEpisodeDetail(card.dataset.animeEpisodeId);
  else if (card.dataset.id) openDetail(card.dataset.id);
};
const bindCatalogCardClicks = gridRoot => {
  if (!gridRoot || gridRoot.dataset.catalogCardClicksBound) return;
  gridRoot.dataset.catalogCardClicksBound = "true";
  gridRoot.addEventListener("click", event => {
    const card = event.target.closest("[data-product-id], [data-tools-id], [data-book-id], [data-game-id], [data-anime-episode-id], [data-id]");
    if (!card || !gridRoot.contains(card)) return;
    event.preventDefault();
    openCatalogCard(card);
  });
};
const CATALOG_PAGE_SIZE = 40;
const ANIME_PAGE_SIZE = CATALOG_PAGE_SIZE;
let currentCatalogPage = 1;
let currentCatalogRenderKey = "";
let currentAnimePage = 1;
let currentAnimeRenderKey = "";
const categoryCollectionRenderKeys = new Map();
const categoryCollectionItemKey = (item, index) => item?.id || item?.name || item?.title || String(index);
const renderCategoryCollectionGrid = ({ cacheKey, grid, items, cardTemplate, emptyMarkup, itemKey = categoryCollectionItemKey }) => {
  const nextKey = items.length
    ? items.map((item, index) => itemKey(item, index)).join("|")
    : `__empty__:${emptyMarkup}`;
  if (categoryCollectionRenderKeys.get(cacheKey) !== nextKey) {
    grid.innerHTML = items.length ? items.map(cardTemplate).join("") : emptyMarkup;
    categoryCollectionRenderKeys.set(cacheKey, nextKey);
  }
  bindCatalogCardClicks(grid);
};
const renderCategoryCollection = config => {
  const grid = document.querySelector(config.gridSelector);
  if (!grid) return [];
  config.syncRenderPage(config.renderKey());
  const visible = config.getVisibleItems();
  const totalPages = Math.max(1, Math.ceil(visible.length / config.pageSize));
  const currentPage = Math.min(Math.max(1, config.getCurrentPage()), totalPages);
  config.setCurrentPage(currentPage);
  const pageStart = (currentPage - 1) * config.pageSize;
  const pageItems = visible.slice(pageStart, pageStart + config.pageSize);
  const count = config.countSelector ? document.querySelector(config.countSelector) : null;
  if (count) count.textContent = visible.length;
  renderCategoryCollectionGrid({
    cacheKey: config.key,
    grid,
    items: pageItems,
    cardTemplate: config.cardTemplate,
    emptyMarkup: config.emptyMarkup(visible)
  });
  config.afterRender?.(visible);
  config.renderPagination(totalPages);
  return visible;
};
const catalogRenderKey = () => [
  selectedCatalogKind || "",
  selectedCatalogSeries || "all",
  activeCatalogSort,
  catalogSearchQuery()
].join("|");
const syncCatalogRenderPage = renderKey => {
  if (renderKey !== currentCatalogRenderKey) {
    currentCatalogRenderKey = renderKey;
    currentCatalogPage = 1;
  }
};
const animeRenderKey = () => [
  typeof activeAnimeCharacterSeason === "string" ? activeAnimeCharacterSeason : "all",
  animeSearchQuery()
].join("|");
const syncAnimeRenderPage = renderKey => {
  if (renderKey !== currentAnimeRenderKey) {
    currentAnimeRenderKey = renderKey;
    currentAnimePage = 1;
  }
};
const paginationButtons = ({ currentPage, totalPages, dataAttr, buttonClass, stepClass, navClass = "", label }) => {
  if (totalPages <= 1) return "";
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let page = start; page <= end; page += 1) pages.push(page);
  const navClassName = `catalog-pagination-nav${navClass ? ` ${navClass}` : ""}`;
  const pageButtons = pages.map(page => `
    <button class="ui-button ${buttonClass}${page === currentPage ? " active" : ""}" type="button" ${dataAttr}="${page}"${page === currentPage ? " aria-current=\"page\"" : ""}>${page}</button>`).join("");
  return `<nav class="${navClassName}" aria-label="${label}">
    <button class="ui-button ${stepClass}" type="button" ${dataAttr}="${currentPage - 1}" ${currentPage <= 1 ? "disabled aria-disabled=\"true\"" : ""}>이전</button>
    ${start > 1 ? `<button class="ui-button ${buttonClass}" type="button" ${dataAttr}="1">1</button>${start > 2 ? `<span class="catalog-page-gap">…</span>` : ""}` : ""}
    ${pageButtons}
    ${end < totalPages ? `${end < totalPages - 1 ? `<span class="catalog-page-gap">…</span>` : ""}<button class="ui-button ${buttonClass}" type="button" ${dataAttr}="${totalPages}">${totalPages}</button>` : ""}
    <button class="ui-button ${stepClass}" type="button" ${dataAttr}="${currentPage + 1}" ${currentPage >= totalPages ? "disabled aria-disabled=\"true\"" : ""}>다음</button>
  </nav>`;
};
const renderPagination = ({ rootSelector, totalPages, currentPage, ...buttonOptions }) => {
  const root = document.querySelector(rootSelector);
  if (!root) return;
  root.innerHTML = paginationButtons({ currentPage, totalPages, ...buttonOptions });
  root.hidden = totalPages <= 1;
};
const renderCatalogPagination = totalPages => renderPagination({
  rootSelector: "#catalogPagination",
  totalPages,
  currentPage: currentCatalogPage,
  dataAttr: "data-catalog-page",
  buttonClass: "catalog-page-button",
  stepClass: "catalog-page-step",
  label: "완구 페이지"
});
const renderAnimePagination = totalPages => renderPagination({
  rootSelector: "#animePagination",
  totalPages,
  currentPage: currentAnimePage,
  dataAttr: "data-anime-page",
  buttonClass: "anime-page-button",
  stepClass: "anime-page-step",
  navClass: "anime-pagination-nav",
  label: "애니메이션 페이지"
});
const scrollGridIntoView = ({ gridSelector, controlSelector }) => {
  const grid = document.querySelector(gridSelector);
  if (!grid) return;
  const topbarHeight = document.querySelector(".topbar")?.getBoundingClientRect().height || 0;
  const controlHeight = document.querySelector(controlSelector)?.getBoundingClientRect().height || 0;
  const targetTop = grid.getBoundingClientRect().top + window.scrollY - topbarHeight - controlHeight - 18;
  window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
};
const scrollCatalogGridIntoView = () => scrollGridIntoView({
  gridSelector: "#catalogGrid",
  controlSelector: ".catalog-control-bar"
});
const scrollAnimeGridIntoView = () => scrollGridIntoView({
  gridSelector: "#animeCharacterGrid",
  controlSelector: ".anime-control-bar"
});
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
const updateCatalogCount = visibleItems => {
  const count = document.querySelector("#catalogCount");
  if (!count) return;
  const countRoot = count.closest(".result-count");
  countRoot?.classList.remove("is-hidden");
  countRoot?.removeAttribute("aria-hidden");
  count.textContent = Array.isArray(visibleItems) ? visibleItems.length : visibleCatalogItems().length;
};
const syncCatalogScopeState = ({ updateCount = true } = {}) => {
  const panel = document.querySelector('.app-panel[data-app-panel="catalog"]');
  if (panel) panel.dataset.catalogScope = selectedCatalogKind || "all";
  if (updateCount) updateCatalogCount();
};
const searchHash = (query = globalSearchQuery(), scope = globalSearchScopeValue()) => {
  const params = new URLSearchParams();
  params.set("q", query);
  params.set("scope", normalizeSearchScope(scope || "all"));
  return `#search?${params.toString()}`;
};
const catalogRouteScopes = new Set(["all", "bey", "parts", "tools"]);
const normalizeCatalogRouteScope = scope => catalogRouteScopes.has(scope) ? scope : "all";
const defaultCatalogSort = () => catalogSortOptions[2]?.value || "latest";
const normalizeCatalogRouteSort = sort =>
  catalogSortOptions.some(option => option.value === sort) ? sort : defaultCatalogSort();
const normalizeCatalogRoutePage = page => {
  const numeric = Number.parseInt(page, 10);
  return Number.isFinite(numeric) && numeric > 0 ? numeric : 1;
};
const normalizeCatalogRouteQuery = query => String(query || "").trim();
const normalizeAnimeCharacterRouteSeason = season =>
  typeof normalizeAnimeCharacterSeason === "function" ? normalizeAnimeCharacterSeason(season) : "all";
const normalizeReleaseRouteRegion = region => releaseRegionLabels[region] ? region : "jp";
const normalizeReleaseRouteSeries = series => releaseSeriesLabels[series] ? series : "x";
const normalizeRareBeyGetListRouteOptions = options => {
  const region = normalizeReleaseRouteRegion(options?.region);
  return {
    region,
    series: normalizeReleaseRouteSeries(options?.series),
    ...(options?.backProductId ? { backProductId: String(options.backProductId) } : {}),
    ...(options?.backRelease ? { backRelease: true } : {})
  };
};
const currentPathWithSearch = () => `${window.location.pathname}${window.location.search}`;
const routeHashParts = (hash = window.location.hash) => {
  const raw = (hash || "").replace(/^#/, "");
  const queryIndex = raw.indexOf("?");
  return {
    id: queryIndex >= 0 ? raw.slice(0, queryIndex) : raw,
    params: new URLSearchParams(queryIndex >= 0 ? raw.slice(queryIndex + 1) : "")
  };
};
function normalizeRoute(route = {}) {
  if (!route || !route.type && !route.id) return { type: "overview" };
  if (route.type === "search") return {
    type: "search",
    query: route.query || "",
    scope: normalizeSearchScope(route.scope || "all")
  };
  if (route.type === "catalog") return {
    type: "catalog",
    scope: normalizeCatalogRouteScope(route.scope),
    series: normalizeCatalogSeries(route.series || "all"),
    sort: normalizeCatalogRouteSort(route.sort),
    page: normalizeCatalogRoutePage(route.page),
    query: normalizeCatalogRouteQuery(route.query ?? route.q)
  };
  if (route.type === "category-release") return {
    type: "category-release",
    options: { ...(route.options || {}) }
  };
  if (route.type === "category-anime") return {
    type: "category-anime",
    season: normalizeAnimeCharacterRouteSeason(route.season ?? route.options?.season),
    page: normalizeCatalogRoutePage(route.page ?? route.options?.page),
    query: normalizeCatalogRouteQuery(route.query ?? route.q ?? route.options?.query ?? route.options?.q)
  };
  if (route.type === "category-anime-episodes") return {
    type: "category-anime-episodes",
    options: { ...(route.options || {}) }
  };
  if (route.type === "rare-bey-get-list") {
    return {
      type: "rare-bey-get-list",
      options: normalizeRareBeyGetListRouteOptions({ ...(route.options || {}), ...route })
    };
  }
  if (route.type === "detail" || route.id) {
    const id = String(route.id || "");
    return id ? {
      type: "detail",
      id,
      options: { ...(route.options || {}) }
    } : { type: "overview" };
  }
  return { type: "overview" };
}
function parseRouteFromHash(hash = window.location.hash) {
  const { id, params } = routeHashParts(hash);
  if (!id) return { type: "overview" };
  if (id === "search") return {
    type: "search",
    query: params.get("q") || "",
    scope: normalizeSearchScope(params.get("scope") || "all")
  };
  if (id === "toy-catalog") return {
    type: "catalog",
    scope: normalizeCatalogRouteScope(params.get("scope")),
    series: normalizeCatalogSeries(params.get("series") || "all"),
    sort: normalizeCatalogRouteSort(params.get("sort")),
    page: normalizeCatalogRoutePage(params.get("page")),
    query: normalizeCatalogRouteQuery(params.get("q") || "")
  };
  if (id === "toy-release") return { type: "category-release" };
  if (id === "anime-character") return {
    type: "category-anime",
    season: normalizeAnimeCharacterRouteSeason(params.get("season") || "all"),
    page: normalizeCatalogRoutePage(params.get("page")),
    query: normalizeCatalogRouteQuery(params.get("q") || "")
  };
  if (id === "anime-episode") return { type: "category-anime-episodes" };
  if (id === "rare-bey-get-list") return normalizeRoute({
    type: "rare-bey-get-list",
    region: params.get("region") || "",
    series: params.get("series") || "",
    backProductId: params.get("backProductId") || "",
    backRelease: params.get("backRelease") === "1"
  });
  return normalizeRoute({ type: "detail", id });
}
function serializeRoute(route = {}) {
  const normalizedRoute = normalizeRoute(route);
  if (normalizedRoute.type === "overview") return "";
  if (normalizedRoute.type === "search") return searchHash(normalizedRoute.query || "", normalizedRoute.scope || "all");
  if (normalizedRoute.type === "catalog") {
    const params = new URLSearchParams();
    params.set("scope", normalizeCatalogRouteScope(normalizedRoute.scope));
    params.set("series", normalizeCatalogSeries(normalizedRoute.series || "all"));
    params.set("sort", normalizeCatalogRouteSort(normalizedRoute.sort));
    params.set("page", String(normalizeCatalogRoutePage(normalizedRoute.page)));
    if (normalizedRoute.query) params.set("q", normalizeCatalogRouteQuery(normalizedRoute.query));
    return `#toy-catalog?${params.toString()}`;
  }
  if (normalizedRoute.type === "category-release") return "#toy-release";
  if (normalizedRoute.type === "category-anime") {
    const params = new URLSearchParams();
    if (normalizedRoute.season && normalizedRoute.season !== "all") params.set("season", normalizedRoute.season);
    if (normalizedRoute.query) params.set("q", normalizeCatalogRouteQuery(normalizedRoute.query));
    if (normalizeCatalogRoutePage(normalizedRoute.page) > 1) params.set("page", String(normalizeCatalogRoutePage(normalizedRoute.page)));
    const queryString = params.toString();
    return queryString ? `#anime-character?${queryString}` : "#anime-character";
  }
  if (normalizedRoute.type === "category-anime-episodes") return "#anime-episode";
  if (normalizedRoute.type === "rare-bey-get-list") {
    const params = new URLSearchParams();
    const options = normalizeRareBeyGetListRouteOptions(normalizedRoute.options || {});
    params.set("region", options.region);
    params.set("series", options.series);
    if (options.backProductId) params.set("backProductId", options.backProductId);
    if (options.backRelease) params.set("backRelease", "1");
    return `#rare-bey-get-list?${params.toString()}`;
  }
  if (normalizedRoute.id) return `#${normalizedRoute.id}`;
  return "";
}
function isPrimaryRoute(route = {}) {
  if (!route) return false;
  return route.type === "overview" || route.type === "catalog" || route.type === "search" || route.type === "category-release" || route.type === "category-anime" || route.type === "category-anime-episodes";
}
function isDetailRoute(route = {}) {
  if (!route) return false;
  return route.type === "detail";
}
const routeSnapshot = route => route ? normalizeRoute(route) : null;
let modalOriginRoute = null;
let modalOriginRouteExplicit = false;
let activeDetailModalContext = null;
let lastPrimaryRoute = { type: "overview" };
function rememberPrimaryRoute(route = {}) {
  if (isPrimaryRoute(route)) lastPrimaryRoute = routeSnapshot(route) || { type: "overview" };
}
function syncModalOriginRoute(route = {}, { explicit = false } = {}) {
  if (isDetailRoute(route)) {
    if (!modalOriginRoute) {
      const currentRoute = parseRouteFromHash();
      modalOriginRoute = isPrimaryRoute(currentRoute) ? routeSnapshot(currentRoute) : routeSnapshot(lastPrimaryRoute);
      modalOriginRouteExplicit = Boolean(explicit && modalOriginRoute);
    } else if (explicit) {
      modalOriginRouteExplicit = true;
    }
    return;
  }
  if (isPrimaryRoute(route)) {
    rememberPrimaryRoute(route);
    modalOriginRoute = null;
    modalOriginRouteExplicit = false;
  }
}
function getModalCloseRoute() {
  return routeSnapshot(modalOriginRoute) || detailModalFallbackCloseRoute(activeDetailModalContext);
}
function clearModalOriginRoute() {
  modalOriginRoute = null;
  modalOriginRouteExplicit = false;
}
function stabilizePrimaryRouteScroll() {
  requestAnimationFrame(() => {
    if (!modal?.open) window.scrollTo(0, 0);
  });
}
let applyingRoute = false;
let lastAppliedRouteKey = "";
const appliedRouteKey = route => `${currentPathWithSearch()}${serializeRoute(route)}`;
function navigateToRoute(route, { replace = false, apply = true, preserveScroll = false, preserveSearch = false } = {}) {
  const normalizedRoute = normalizeRoute(route);
  syncModalOriginRoute(normalizedRoute, { explicit: isDetailRoute(normalizedRoute) });
  const nextHash = serializeRoute(normalizedRoute);
  const nextUrl = `${currentPathWithSearch()}${nextHash}`;
  if (`${currentPathWithSearch()}${window.location.hash}` !== nextUrl) {
    try {
      history[replace ? "replaceState" : "pushState"](null, "", nextUrl);
    } catch {
      // URL writes can be denied in embedded browsers; still apply the route state.
    }
  }
  if (!apply) return Promise.resolve(true);
  const result = applyRoute(normalizedRoute, { preserveScroll, preserveSearch });
  result?.catch?.(error => console.error(error));
  return result;
}
const mainSearchProductCompositionText = (item, region) => {
  const composition = productCompositionItems(item, region);
  if (!composition.length) return item._compositionSearchText || "";
  return composition
    .map(part => [part.name, mainSearchItemText(findCatalogItemById(part.target))].filter(Boolean).join(" "))
    .filter(Boolean)
    .join(" ");
};
const productSearchFields = item => {
  const krRelease = productRelease(item, "kr");
  const jpRelease = productRelease(item, "jp");
  return [
    ...searchFieldsFromValues("primaryName", [item.name, krRelease.name, jpRelease.name]),
    ...searchFieldsFromValues("code", [item.no, krRelease.no, jpRelease.no]),
    ...searchFieldsFromValues("category", [
      item.series,
      seriesLabels[item.series],
      krRelease.kind,
      jpRelease.kind,
      krRelease.sale,
      jpRelease.sale
    ]),
    ...searchFieldsFromValues("composition", [
      mainSearchProductCompositionText(item, "kr"),
      mainSearchProductCompositionText(item, "jp")
    ])
  ];
};
const bookSearchFields = item => [
  ...searchFieldsFromValues("primaryName", [item.name]),
  ...searchFieldsFromValues("alias", [item.en]),
  ...searchFieldsFromValues("category", [item.category]),
  ...searchFieldsFromValues("description", [item.desc])
];
const gameSearchFields = item => [
  ...searchFieldsFromValues("primaryName", [item.name]),
  ...searchFieldsFromValues("alias", [item.en]),
  ...searchFieldsFromValues("category", [item.category]),
  ...searchFieldsFromValues("description", [item.desc])
];
const animeSearchFields = episode => [
  ...searchFieldsFromValues("primaryName", [episode.titles?.kr, episode.titles?.jp]),
  ...searchFieldsFromValues("code", [episode.no]),
  ...searchFieldsFromValues("category", [animeSeasonLabels[episode.season], episode.season]),
  ...searchFieldsFromValues("description", [episode.note])
];
let searchResultRecordCache = null;
let searchResultRecordListCache = null;
const SEARCH_RESULT_ITEMS_CACHE_LIMIT = 64;
const SEARCH_RESULT_MARKUP_CACHE_LIMIT = 32;
const SEARCH_RESULTS_PAGE_SIZE = 10;
const SEARCH_HASH_UPDATE_DELAY = 180;
const SEARCH_RENDER_DELAY = 100;
const searchResultItemsCache = new Map();
const searchResultMarkupCache = new Map();
const cacheSearchResultItems = (key, result) => {
  if (!searchResultItemsCache.has(key) && searchResultItemsCache.size >= SEARCH_RESULT_ITEMS_CACHE_LIMIT) {
    searchResultItemsCache.delete(searchResultItemsCache.keys().next().value);
  }
  searchResultItemsCache.set(key, result);
  return result;
};
const cacheSearchResultMarkup = (key, result) => {
  if (!searchResultMarkupCache.has(key) && searchResultMarkupCache.size >= SEARCH_RESULT_MARKUP_CACHE_LIMIT) {
    searchResultMarkupCache.delete(searchResultMarkupCache.keys().next().value);
  }
  searchResultMarkupCache.set(key, result);
  return result;
};
const mainSearchRecord = (kind, item, fields, order, extra = {}) => createSearchRecord(kind, item, fields, order, extra);
const createMainSearchRecords = ({ items, kind, fields = catalogItemSearchFields, extra = () => ({}) }, sourceIndex = 0) =>
  items.map((item, index) => mainSearchRecord(kind, item, fields(item, index), (sourceIndex * 100000) + index, extra(item, index)));
const indexedSearchItems = kind => searchIndexItems.filter(entry => entry.kind === kind).map(entry => entry.item);
const mainSearchRecordSources = () => [
  { key: "catalog", kind: "catalog-item", items: indexedSearchItems("catalog-item"), fields: catalogItemSearchFields },
  { key: "tools", kind: "tools", items: indexedSearchItems("tools"), fields: toolsSearchFields },
  { key: "product", kind: "product", items: indexedSearchItems("product"), fields: productSearchFields },
  { key: "manga", kind: "book", items: indexedSearchItems("book"), fields: bookSearchFields },
  { key: "game", kind: "game", items: indexedSearchItems("game"), fields: gameSearchFields },
  { key: "anime", kind: "anime", items: indexedSearchItems("anime"), fields: animeSearchFields, extra: (episode, index) => ({ index }) }
];
const searchResultRecords = () => {
  if (searchResultRecordCache) return searchResultRecordCache;
  searchResultRecordCache = Object.fromEntries(mainSearchRecordSources().map((source, sourceIndex) => [source.key, createMainSearchRecords(source, sourceIndex)]));
  return searchResultRecordCache;
};
window.addEventListener("beystadium:data-loaded", () => {
  searchResultRecordCache = null;
  searchResultRecordListCache = null;
  searchResultItemsCache.clear();
  searchResultMarkupCache.clear();
});
const searchResultCacheKey = (scope, query) => `${scope}\u0000${searchQueryFrom(query).raw}`;
const searchResultRenderKey = (scope, query) => [
  scope,
  searchQueryFrom(query).raw,
  activeReleaseRegion,
  animeDisplayRegion
].join("\u0000");
const searchResultRecordLists = () => {
  if (searchResultRecordListCache) return searchResultRecordListCache;
  const records = searchResultRecords();
  searchResultRecordListCache = {
    all: [...records.catalog, ...records.tools, ...records.product, ...records.manga, ...records.game, ...records.anime],
    bey: records.catalog,
    tools: records.tools,
    product: records.product,
    manga: records.manga,
    anime: records.anime
  };
  return searchResultRecordListCache;
};
const searchResultRecordList = scope => searchResultRecordLists()[normalizeSearchScope(scope)] || searchResultRecordLists().all;
const scoredSearchResult = (record, preparedQuery) => {
  const match = matchSearchRecord(record, preparedQuery);
  if (match.matched && searchQueryFrom(preparedQuery).isEmpty) return { record, score: 0, entry: record.entry };
  return match.matched && match.score > 0 ? { record, score: match.score, entry: record.entry } : null;
};
const insertLimitedSearchResult = (results, result, limit) => {
  let index = results.findIndex(entry => compareScoredSearchResults(result, entry) < 0);
  if (index < 0) index = results.length;
  if (index < limit) {
    results.splice(index, 0, result);
    if (results.length > limit) results.pop();
  } else if (results.length < limit) {
    results.push(result);
  }
};
const collectSearchResultItems = (scope = globalSearchScopeValue(), query = globalSearchQuery()) => {
  scope = normalizeSearchScope(scope);
  const preparedQuery = searchQueryFrom(query);
  const cacheKey = searchResultCacheKey(scope, preparedQuery);
  const cached = searchResultItemsCache.get(cacheKey);
  if (cached) return cached;
  const scored = [];
  for (const record of searchResultRecordList(scope)) {
    const result = scoredSearchResult(record, preparedQuery);
    if (result) scored.push(result);
  }
  scored.sort(compareScoredSearchResults);
  const items = scored.map(result => result.entry);
  const result = { total: items.length, items };
  return cacheSearchResultItems(cacheKey, result);
};
const collectSearchPreviewItems = (scope = globalSearchScopeValue(), query = globalSearchQuery(), limit = SEARCH_PREVIEW_LIMIT) => {
  scope = normalizeSearchScope(scope);
  const preparedQuery = searchQueryFrom(query);
  const cached = searchResultItemsCache.get(searchResultCacheKey(scope, preparedQuery));
  if (cached) return cached.items.slice(0, limit);
  const topResults = [];
  for (const record of searchResultRecordList(scope)) {
    const result = scoredSearchResult(record, preparedQuery);
    if (result) insertLimitedSearchResult(topResults, result, limit);
  }
  return topResults.map(result => result.entry);
};
const searchResultType = entry => {
  if (entry.kind === "tools") return "장비";
  if (entry.kind === "product") return "제품";
  if (entry.kind === "book") return "도서";
  if (entry.kind === "game") return "게임";
  if (entry.kind === "anime") return "애니";
  return partDetailTypeLabel(entry.item) || "베이";
};
const searchResultTitle = entry => {
  if (entry.kind === "tools") return entry.item.name;
  if (entry.kind === "product") return productDisplayName(entry.item, activeReleaseRegion);
  if (entry.kind === "book" || entry.kind === "game") return entry.item.name;
  if (entry.kind === "anime") return animeEpisodeTitle(entry.item, animeDisplayRegion);
  const suffix = entry.item.type === "bey" && entry.item.sub ? ` ${entry.item.sub}` : "";
  return `${entry.item.name}${suffix}`;
};
const searchProductSnippet = item => {
  const region = productDisplayRegion(item, activeReleaseRegion);
  const release = productRelease(item, region);
  return [
    release.no || item.no,
    seriesLabels[item.series] || item.series || "",
    release.kind,
    releaseDateLabel(release.releaseDate || release.release),
    priceLabel(release.price, region)
  ].filter(Boolean).join(" · ");
};
const searchAnimeEpisodeSnippet = (episode, region = animeDisplayRegion) => [
  animeSeasonLabels[episode.season] || episode.season || "",
  animeAirDateLabel(episode.airDates?.[region] || ""),
  episode.note || ""
].filter(Boolean).join(" · ");
const searchResultSnippet = entry => {
  if (entry.kind === "tools") {
    return [entry.item.category, entry.item.desc].filter(Boolean).join(" · ") || "장비 정보를 확인할 수 있습니다.";
  }
  if (entry.kind === "product") return searchProductSnippet(entry.item) || "제품 정보를 확인할 수 있습니다.";
  if (entry.kind === "book") return [entry.item.category, entry.item.desc].filter(Boolean).join(" · ") || "도서 정보를 확인할 수 있습니다.";
  if (entry.kind === "game") return [entry.item.category, entry.item.desc].filter(Boolean).join(" · ") || "게임 정보를 확인할 수 있습니다.";
  if (entry.kind === "anime") return searchAnimeEpisodeSnippet(entry.item) || "애니 회차 정보를 확인할 수 있습니다.";
  const labels = itemAttributeLabels(entry.item).slice(0, 4);
  const parts = [
    entry.item.productNo,
    itemSeriesLabel(entry.item),
    entry.item.type === "bey" ? structureLabels[entry.item.structure] : "",
    labels.join(" · "),
    entry.item.desc
  ].filter(Boolean);
  return parts.join(" · ") || "베이와 부품 정보를 확인할 수 있습니다.";
};
const searchResultAttributes = entry => {
  if (entry.kind === "tools") return `data-tools-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "product") return `data-product-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "book") return `data-book-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "game") return `data-game-id="${escapeAttributeValue(entry.item.id)}"`;
  if (entry.kind === "anime") return `data-anime-episode-id="${escapeAttributeValue(episodeHashId(entry.index))}"`;
  return `data-id="${escapeAttributeValue(entry.item.id)}"`;
};
const searchResultButton = entry => {
  const attr = searchResultAttributes(entry);
  return `<button class="search-result-item" type="button" ${attr}>
    <span class="search-result-kind">${escapeHtml(searchResultType(entry))}</span>
    <strong>${escapeHtml(searchResultTitle(entry))}</strong>
    <span class="search-result-snippet">${escapeHtml(searchResultSnippet(entry))}</span>
  </button>`;
};
const searchResultButtonMarkupSlice = (renderKey, items, start, end) => {
  const cached = searchResultMarkupCache.get(renderKey);
  const markup = cached || cacheSearchResultMarkup(renderKey, []);
  const safeStart = Math.max(0, start);
  const safeEnd = Math.min(end, items.length);
  for (let index = safeStart; index < safeEnd; index += 1) {
    if (!markup[index]) markup[index] = searchResultButton(items[index]);
  }
  return markup.slice(safeStart, safeEnd);
};
const searchResultPageButtons = (currentPage, totalPages) => {
  if (totalPages <= 1) return "";
  const pages = [];
  const start = Math.max(1, currentPage - 2);
  const end = Math.min(totalPages, currentPage + 2);
  for (let page = start; page <= end; page += 1) pages.push(page);
  const pageButtons = pages.map(page => `
    <button class="ui-button search-results-page-button${page === currentPage ? " active" : ""}" type="button" data-search-results-page="${page}"${page === currentPage ? " aria-current=\"page\"" : ""}>${page}</button>`).join("");
  return `<nav class="search-results-pagination" aria-label="검색결과 페이지">
    <button class="ui-button search-results-page-step" type="button" data-search-results-page="${currentPage - 1}" ${currentPage <= 1 ? "disabled aria-disabled=\"true\"" : ""}>이전</button>
    ${start > 1 ? `<button class="ui-button search-results-page-button" type="button" data-search-results-page="1">1</button>${start > 2 ? `<span class="search-results-page-gap">…</span>` : ""}` : ""}
    ${pageButtons}
    ${end < totalPages ? `${end < totalPages - 1 ? `<span class="search-results-page-gap">…</span>` : ""}<button class="ui-button search-results-page-button" type="button" data-search-results-page="${totalPages}">${totalPages}</button>` : ""}
    <button class="ui-button search-results-page-step" type="button" data-search-results-page="${currentPage + 1}" ${currentPage >= totalPages ? "disabled aria-disabled=\"true\"" : ""}>다음</button>
  </nav>`;
};
let currentSearchResultPage = 1;
let currentSearchResultKey = "";
const resetCurrentSearchResultPage = key => {
  currentSearchResultKey = key;
  currentSearchResultPage = 1;
};
const syncSearchResultRenderState = (scope, query) => {
  const normalizedScope = normalizeSearchScope(scope);
  const preparedQuery = prepareSearchQuery(query);
  const renderKey = searchResultRenderKey(normalizedScope, preparedQuery);
  if (renderKey !== currentSearchResultKey) resetCurrentSearchResultPage(renderKey);
  return { scope: normalizedScope, query: preparedQuery.raw, preparedQuery, renderKey };
};
const bindSearchResultControls = gridRoot => {
  if (!gridRoot || gridRoot.dataset.searchResultControlsBound) return;
  gridRoot.dataset.searchResultControlsBound = "true";
  gridRoot.addEventListener("click", event => {
    const pageButton = event.target.closest("[data-search-results-page]");
    if (!pageButton || pageButton.disabled || !gridRoot.contains(pageButton)) return;
    event.preventDefault();
    currentSearchResultPage = Number(pageButton.dataset.searchResultsPage) || 1;
    renderGlobalCards();
  });
};
const SEARCH_PREVIEW_LIMIT = 6;
const SEARCH_PREVIEW_RENDER_DELAY = 100;
const searchPreviewControls = new Map();
let activeSearchPreview = null;
const searchPreviewScopeValue = input => {
  if (input === overviewSearch) return overviewSearchScopeValue();
  if (input === mobileDrawerSearch) return mobileDrawerSearchScopeValue();
  return globalSearchScopeValue();
};
const searchPreviewSyncToGlobal = input => {
  if (input === overviewSearch) {
    if (globalSearch) setSearchInputValue(globalSearch, overviewSearch.value);
    if (mobileDrawerSearch) setSearchInputValue(mobileDrawerSearch, overviewSearch.value);
    setGlobalSearchScope(overviewSearchScopeValue());
    setMobileDrawerSearchScope(overviewSearchScopeValue());
    return;
  }
  if (input === mobileDrawerSearch) {
    if (globalSearch) setSearchInputValue(globalSearch, mobileDrawerSearch.value);
    if (overviewSearch) setSearchInputValue(overviewSearch, mobileDrawerSearch.value);
    setGlobalSearchScope(mobileDrawerSearchScopeValue());
    setOverviewSearchScope(mobileDrawerSearchScopeValue());
    return;
  }
  if (input === globalSearch) {
    if (mobileDrawerSearch) setSearchInputValue(mobileDrawerSearch, globalSearch.value);
    if (overviewSearch) setSearchInputValue(overviewSearch, globalSearch.value);
    setMobileDrawerSearchScope(globalSearchScopeValue());
    setOverviewSearchScope(globalSearchScopeValue());
  }
};
const searchPreviewOptionId = (control, index) => `${control.preview.id}-option-${index}`;
const searchPreviewItemButton = (entry, control, index) => {
  const attr = searchResultAttributes(entry);
  const selected = index === control.highlightedIndex;
  return `<button class="search-result-item search-preview-item${selected ? " is-active" : ""}" type="button" ${attr} role="option" id="${escapeAttributeValue(searchPreviewOptionId(control, index))}" data-search-preview-index="${index}" aria-selected="${selected ? "true" : "false"}">
    <span class="search-result-kind">${escapeHtml(searchResultType(entry))}</span>
    <strong>${escapeHtml(searchResultTitle(entry))}</strong>
    <span class="search-result-snippet">${escapeHtml(searchResultSnippet(entry))}</span>
  </button>`;
};
const closeSearchPreviewCompetingLayers = () => {
  if (typeof closeOpenCatalogDropdowns === "function") closeOpenCatalogDropdowns();
  if (typeof closeSearchHelpPopovers === "function") closeSearchHelpPopovers();
};
class SearchPreviewController {
  constructor(input, root) {
    this.input = input;
    this.root = root;
    this.preview = document.createElement("div");
    this.entries = [];
    this.highlightedIndex = -1;
    this.renderTimer = 0;
    this.preview.className = "search-preview";
    this.preview.id = `${input.id}Preview`;
    this.preview.hidden = true;
    this.preview.setAttribute("role", "listbox");
    this.preview.setAttribute("aria-label", "검색결과 미리보기");
    root.appendChild(this.preview);
    input.setAttribute("aria-haspopup", "listbox");
    input.setAttribute("aria-controls", this.preview.id);
    input.setAttribute("aria-expanded", "false");
    this.bind();
  }

  bind() {
    this.input.addEventListener("focus", () => this.refresh({ resetActive: true }));
    this.root.addEventListener("focusout", () => {
      setTimeout(() => {
        if (!this.root.contains(document.activeElement)) this.close();
      }, 0);
    });
    this.preview.addEventListener("click", event => {
      const allButton = event.target.closest("[data-search-preview-all]");
      if (allButton) {
        event.preventDefault();
        this.openResults();
        return;
      }
      const itemButton = event.target.closest("[data-search-preview-index]");
      if (!itemButton) return;
      event.preventDefault();
      this.openItem(itemButton);
    });
  }

  close() {
    if (this.renderTimer) {
      clearTimeout(this.renderTimer);
      this.renderTimer = 0;
    }
    this.preview.hidden = true;
    this.highlightedIndex = -1;
    this.entries = [];
    this.input.setAttribute("aria-expanded", "false");
    this.input.removeAttribute("aria-activedescendant");
    if (activeSearchPreview === this) activeSearchPreview = null;
  }

  render() {
    const query = this.input.value.trim();
    const focusedInside = this.root.contains(document.activeElement);
    if (!query || !focusedInside) {
      this.close();
      return;
    }
    closeSearchPreviewCompetingLayers();
    closeAllSearchPreviews(this);
    this.entries = collectSearchPreviewItems(searchPreviewScopeValue(this.input), query);
    if (this.highlightedIndex >= this.entries.length) this.highlightedIndex = -1;
    const wasHidden = this.preview.hidden;
    this.preview.innerHTML = this.entries.length
      ? `<div class="search-preview-list" role="presentation">${this.entries.map((entry, index) => searchPreviewItemButton(entry, this, index)).join("")}</div>
        <button class="search-preview-all" type="button" data-search-preview-all>전체 검색결과 보기</button>`
      : `<div class="search-preview-empty">검색결과가 없습니다.</div>`;
    this.preview.hidden = false;
    if (wasHidden) playEnterAnimation(this.preview, "is-preview-entering");
    activeSearchPreview = this;
    this.input.setAttribute("aria-expanded", "true");
    if (this.highlightedIndex >= 0) {
      this.input.setAttribute("aria-activedescendant", searchPreviewOptionId(this, this.highlightedIndex));
    } else {
      this.input.removeAttribute("aria-activedescendant");
    }
  }

  refresh({ resetActive = false } = {}) {
    if (resetActive) this.highlightedIndex = -1;
    if (this.renderTimer) clearTimeout(this.renderTimer);
    if (!this.input.value.trim()) {
      this.renderTimer = 0;
      this.render();
      return;
    }
    this.renderTimer = setTimeout(() => {
      this.renderTimer = 0;
      this.render();
    }, SEARCH_PREVIEW_RENDER_DELAY);
  }

  syncToGlobal() {
    searchPreviewSyncToGlobal(this.input);
  }

  openItem(button) {
    if (!button) return;
    this.syncToGlobal();
    closeAllSearchPreviews();
    openCatalogCard(button);
    setMobileDrawerOpen(false);
  }

  openResults() {
    this.syncToGlobal();
    closeAllSearchPreviews();
    openSearchResults();
  }

  handleKeydown(event) {
    const key = event.key;
    if (!["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(key)) return false;
    const isOpen = !this.preview.hidden;
    if (key === "Escape") {
      if (!isOpen) return false;
      event.preventDefault();
      this.close();
      return true;
    }
    if (key === "ArrowDown" || key === "ArrowUp") {
      if (!this.input.value.trim()) return false;
      event.preventDefault();
      if (!isOpen) this.render();
      const count = this.entries.length;
      if (!count) return true;
      const direction = key === "ArrowDown" ? 1 : -1;
      this.highlightedIndex = this.highlightedIndex < 0
        ? (direction > 0 ? 0 : count - 1)
        : (this.highlightedIndex + direction + count) % count;
      this.render();
      return true;
    }
    if (key === "Enter" && isOpen && this.highlightedIndex >= 0) {
      const button = this.preview.querySelector(`[data-search-preview-index="${this.highlightedIndex}"]`);
      if (button) {
        event.preventDefault();
        this.openItem(button);
        return true;
      }
    }
    return false;
  }
}
const closeAllSearchPreviews = exceptControl => {
  searchPreviewControls.forEach(control => {
    if (control !== exceptControl) control?.close();
  });
};
const refreshSearchPreview = (input, { resetActive = false } = {}) => {
  const control = searchPreviewControls.get(input);
  control?.refresh({ resetActive });
};
const handleSearchPreviewKeydown = (input, event) => {
  const control = searchPreviewControls.get(input);
  return control ? control.handleKeydown(event) : false;
};
const bindSearchPreview = (input, containerSelector) => {
  if (!input || searchPreviewControls.has(input)) return;
  const root = input.closest(containerSelector);
  if (!root) return;
  const control = new SearchPreviewController(input, root);
  searchPreviewControls.set(input, control);
};
const renderGlobalCards = () => {
  const grid = document.querySelector("#globalGrid");
  const count = document.querySelector("#globalCount");
  if (!grid || !count) return;
  const { scope, query, preparedQuery, renderKey } = syncSearchResultRenderState(globalSearchScopeValue(), globalSearchQuery());
  const visible = collectSearchResultItems(scope, preparedQuery).items;
  const totalCount = visible.length;
  const totalPages = Math.max(1, Math.ceil(totalCount / SEARCH_RESULTS_PAGE_SIZE));
  currentSearchResultPage = Math.min(Math.max(1, currentSearchResultPage), totalPages);
  const pageStart = (currentSearchResultPage - 1) * SEARCH_RESULTS_PAGE_SIZE;
  const pageEnd = pageStart + SEARCH_RESULTS_PAGE_SIZE;
  count.textContent = totalCount;
  if (searchResultTitleElement) {
    searchResultTitleElement.textContent = query
      ? `${query}의 검색결과`
      : scope === "all"
        ? "전체 검색결과"
        : `${searchScopeLabel(scope)} 검색결과`;
  }
  if (searchResultMeta) {
    searchResultMeta.textContent = scope === "all" ? "" : `${searchScopeLabel(scope)} 범위`;
  }
  const itemMarkup = visible.length ? searchResultButtonMarkupSlice(renderKey, visible, pageStart, pageEnd) : [];
  grid.innerHTML = visible.length
    ? `${itemMarkup.join("")}${searchResultPageButtons(currentSearchResultPage, totalPages)}`
    : `<p class="search-empty">검색결과가 없습니다.</p>`;
  bindCatalogCardClicks(grid);
  bindSearchResultControls(grid);
};

const itemAttributeLabels = item => [
  item.battleType ? battleTypeLabel(item.battleType, item) : "",
  item.spin ? spinLabel(item.spin) : "",
  item.heightClass ? heightClassLabel(item.heightClass) : "",
  ...partClassificationLabels(item, "card")
].filter(Boolean);

const modalTagInfoMarkup = (label, description) => {
  return description
    ? `<button type="button" class="modal-tag-info" data-tag-label="${escapeAttributeValue(label)}" data-tag-description="${escapeAttributeValue(description)}" aria-expanded="false">${escapeHtml(label)}</button>`
    : `<span>${escapeHtml(label)}</span>`;
};
const partClassificationModalTags = item => partClassificationDescriptors(item)
  .filter(descriptor => descriptor.showInModal)
  .map(descriptor => modalTagInfoMarkup(descriptor.label, descriptor.description))
  .join("");
const battleTypeTag = item => item.battleType
  ? modalTagInfoMarkup(battleTypeLabel(item.battleType, item), battleTypeDescription(item.battleType, item))
  : "";
const spinTag = item => item.spin ? modalTagInfoMarkup(spinLabel(item.spin), spinDescription(item.spin)) : "";
const heightClassTag = item => item.heightClass ? modalTagInfoMarkup(heightClassLabel(item.heightClass), "") : "";
const beySystemTag = item => {
  const label = structureLabels[item.structure];
  const description = structureTagDescriptions[item.structure];
  return label && description ? modalTagInfoMarkup(label, description) : "";
};
const modalTagGroup = (tags, className = "") => tags ? `<div class="${["modal-tags", className].filter(Boolean).join(" ")}">${tags}</div>` : "";
const modalInfoSlot = (description = "", tags = "", className = "") => {
  const hasDescription = String(description || "").trim().length > 0;
  const classes = ["modal-info-slot", className, hasDescription ? "has-description" : ""].filter(Boolean).join(" ");
  return `<div class="${classes}"><div class="modal-slot-tags">${tags || ""}</div><div class="modal-description-region"><p class="modal-description">${escapeHtml(description || "")}</p><button class="modal-description-toggle" type="button" aria-expanded="false" hidden>더보기</button></div></div>`;
};
const modalScrollArea = content => `<div class="modal-scroll-area">${content}</div>`;
function beyModalTags(item) {
  return modalTagGroup(`${beySystemTag(item)}${battleTypeTag(item)}${spinTag(item)}`, "bey-modal-tags");
}
function partModalTags(item) {
  return modalTagGroup(`${partClassificationModalTags(item)}${battleTypeTag(item)}${spinTag(item)}${heightClassTag(item)}`);
}

let activeModalTagButton = null;
let modalTagPopover = null;
let modalTagPinned = false;
const isTouchPointer = () => window.matchMedia("(hover: none), (pointer: coarse)").matches;

function closeModalTagPopover() {
  if (activeModalTagButton) {
    activeModalTagButton.setAttribute("aria-expanded", "false");
    activeModalTagButton.removeAttribute("aria-describedby");
  }
  modalTagPopover?.remove();
  activeModalTagButton = null;
  modalTagPopover = null;
  modalTagPinned = false;
}

function positionModalTagPopover(button) {
  if (!modalTagPopover) return;
  const margin = 14;
  const gap = 8;
  const buttonRect = button.getBoundingClientRect();
  const popoverRect = modalTagPopover.getBoundingClientRect();
  let left = buttonRect.left;
  let top = buttonRect.bottom + gap;
  if (left + popoverRect.width > window.innerWidth - margin) left = window.innerWidth - margin - popoverRect.width;
  if (top + popoverRect.height > window.innerHeight - margin) top = buttonRect.top - popoverRect.height - gap;
  modalTagPopover.style.left = `${Math.max(margin, left)}px`;
  modalTagPopover.style.top = `${Math.max(margin, top)}px`;
}

function openModalTagPopover(button, { pinned = false } = {}) {
  const label = button.dataset.tagLabel || button.textContent.trim();
  const description = button.dataset.tagDescription || "";
  if (!description) return;
  if (activeModalTagButton === button && modalTagPopover) {
    modalTagPinned = modalTagPinned || pinned;
    button.setAttribute("aria-expanded", "true");
    positionModalTagPopover(button);
    return;
  }
  if (activeModalTagButton && activeModalTagButton !== button) closeModalTagPopover();
  activeModalTagButton = button;
  modalTagPinned = pinned;
  modalTagPopover = document.createElement("div");
  modalTagPopover.id = `modal-tag-popover-${Date.now()}`;
  modalTagPopover.className = "modal-tag-popover";
  modalTagPopover.setAttribute("role", "tooltip");
  modalTagPopover.innerHTML = `<strong>${escapeHtml(label)}</strong><p>${escapeHtml(description)}</p>`;
  modal.appendChild(modalTagPopover);
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-describedby", modalTagPopover.id);
  positionModalTagPopover(button);
}

function bindModalTagPopovers(scope = document) {
  scope.querySelectorAll(".modal-tag-info").forEach(button => {
    let focusOpened = false;
    button.addEventListener("mouseenter", () => {
      if (!isTouchPointer()) openModalTagPopover(button);
    });
    button.addEventListener("mouseleave", () => {
      if (!isTouchPointer() && !modalTagPinned) closeModalTagPopover();
    });
    button.addEventListener("focus", () => {
      focusOpened = true;
      openModalTagPopover(button);
      setTimeout(() => { focusOpened = false; }, 0);
    });
    button.addEventListener("blur", () => {
      setTimeout(() => {
        if (!modalTagPinned) closeModalTagPopover();
      }, 0);
    });
    button.addEventListener("click", event => {
      event.preventDefault();
      event.stopPropagation();
      if (focusOpened && activeModalTagButton === button) {
        modalTagPinned = true;
        return;
      }
      if (activeModalTagButton === button && modalTagPinned) closeModalTagPopover();
      else openModalTagPopover(button, { pinned: true });
    });
  });
}

const burstDetailPartOrder = part => {
  if (part?.type === "dbarmor") return 40;
  if (part?.type === "driver" || part?.type === "driverupgrade") return 50;
  return 0;
};
const beyDetailPartIds = item => {
  if (item?.series !== "burst") return item.parts;
  return item.parts
    .map((partId, index) => ({ partId, index, order: burstDetailPartOrder(catalogCoreItemsById.get(partId)) }))
    .sort((a, b) => a.order - b.order || a.index - b.index)
    .map(entry => entry.partId);
};

function beyDetailSections(item, region) {
  const detailPartIds = beyDetailPartIds(item);
  const info = detailPartIds.length ? `<section class="modal-section mounted-parts"><p class="mounted-title">구성</p><div class="modal-section-scroll mounted-parts-list">${detailPartIds.map(partId => {
    const part = catalogCoreItemsById.get(partId);
    return `<a class="ui-list-link mounted-link" href="#${part.id}" data-part-id="${part.id}"><span>${partMountedTypeLabel(part)}</span><strong>${itemDisplayName(part, region)}</strong><b>→</b></a>`;
  }).join("")}</div></section>` : "";
  return info;
}

let modelViewerCleanup = null;
let threeModules = null;

function cleanupModelViewer() {
  if (!modelViewerCleanup) return;
  modelViewerCleanup();
  modelViewerCleanup = null;
}

async function loadThreeModules() {
  if (!threeModules) {
    const [THREE, { OBJLoader }, { OrbitControls }] = await Promise.all([
      import("https://esm.sh/three@0.160.0"),
      import("https://esm.sh/three@0.160.0/examples/jsm/loaders/OBJLoader.js"),
      import("https://esm.sh/three@0.160.0/examples/jsm/controls/OrbitControls.js")
    ]);
    threeModules = { THREE, OBJLoader, OrbitControls };
  }
  return threeModules;
}

async function initModelViewer() {
  cleanupModelViewer();
  const container = document.querySelector(".model-viewer");
  if (!container) return;

  const { THREE, OBJLoader, OrbitControls } = await loadThreeModules();
  if (!document.body.contains(container)) return;

  const width = Math.max(container.clientWidth, 260);
  const height = Math.max(container.clientHeight, 300);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
  camera.position.set(0, 0, 5.35);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height, false);
  container.textContent = "";
  container.appendChild(renderer.domElement);
  const resetButton = document.createElement("button");
  resetButton.className = "ui-button model-reset";
  resetButton.type = "button";
  resetButton.textContent = "기본 위치";
  container.appendChild(resetButton);

  const defaultCameraPosition = new THREE.Vector3(0, 0, 5.35);
  const defaultControlsTarget = new THREE.Vector3(0, 0, 0);
  const defaultModelRotation = new THREE.Euler(-Math.PI / 2, 0, 0);
  const modelRoot = new THREE.Group();
  scene.add(modelRoot);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.08;
  controls.enablePan = true;
  controls.screenSpacePanning = true;
  controls.rotateSpeed = 0.72;
  controls.panSpeed = 0.85;
  controls.zoomSpeed = 0.88;
  controls.minDistance = 2.6;
  controls.maxDistance = 9;
  controls.target.copy(defaultControlsTarget);
  const orbitMouseButtons = {
    LEFT: THREE.MOUSE.ROTATE,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
  };
  const panMouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.PAN
  };
  controls.mouseButtons = orbitMouseButtons;
  controls.touches = {
    ONE: THREE.TOUCH.ROTATE,
    TWO: THREE.TOUCH.DOLLY_PAN
  };
  const resetView = () => {
    camera.position.copy(defaultCameraPosition);
    camera.zoom = 1;
    camera.updateProjectionMatrix();
    controls.target.copy(defaultControlsTarget);
    modelRoot.rotation.copy(defaultModelRotation);
    controls.update();
  };
  resetButton.addEventListener("click", resetView);

  const usePanForShiftDrag = event => {
    controls.mouseButtons = event.shiftKey && event.button === 0 ? panMouseButtons : orbitMouseButtons;
  };
  const restoreOrbitDrag = () => {
    controls.mouseButtons = orbitMouseButtons;
    container.classList.remove("is-grabbing");
  };
  const markDragging = () => container.classList.add("is-grabbing");
  const preventContextMenu = event => event.preventDefault();
  const resizeRenderer = () => {
    if (!document.body.contains(container)) return;
    const nextWidth = Math.max(container.clientWidth, 260);
    const nextHeight = Math.max(container.clientHeight, 300);
    renderer.setSize(nextWidth, nextHeight, false);
    camera.aspect = nextWidth / nextHeight;
    camera.updateProjectionMatrix();
    controls.update();
  };
  const resizeObserver = new ResizeObserver(resizeRenderer);
  resizeObserver.observe(container);
  renderer.domElement.addEventListener("pointerdown", usePanForShiftDrag, true);
  renderer.domElement.addEventListener("pointerdown", markDragging);
  renderer.domElement.addEventListener("dblclick", resetView);
  renderer.domElement.addEventListener("contextmenu", preventContextMenu);
  window.addEventListener("pointerup", restoreOrbitDrag);
  window.addEventListener("pointercancel", restoreOrbitDrag);

  let active = true;
  const loader = new OBJLoader();
  const handleObject = object => {
    if (!active) return;
    object.traverse(child => {
      if (child.isMesh) {
        child.material = new THREE.MeshBasicMaterial({ color: 0xb8c3c8 });
      }
    });
    const box = new THREE.Box3().setFromObject(object);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    object.position.sub(center);
    const maxAxis = Math.max(size.x, size.y, size.z) || 1;
    object.scale.multiplyScalar(1.62 / maxAxis);
    object.rotation.x = -Math.PI / 2;
    object.updateMatrixWorld(true);
    const rotatedCenter = new THREE.Box3().setFromObject(object).getCenter(new THREE.Vector3());
    object.position.sub(rotatedCenter);
    modelRoot.add(object);
    resetView();
  };
  loader.load(container.dataset.model, handleObject, undefined, () => {
    container.innerHTML = "<p>3D 모델을 불러오지 못했습니다.</p>";
  });

  const render = () => {
    if (!active) return;
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

  modelViewerCleanup = () => {
    active = false;
    resetButton.removeEventListener("click", resetView);
    renderer.domElement.removeEventListener("pointerdown", usePanForShiftDrag, true);
    renderer.domElement.removeEventListener("pointerdown", markDragging);
    renderer.domElement.removeEventListener("dblclick", resetView);
    renderer.domElement.removeEventListener("contextmenu", preventContextMenu);
    window.removeEventListener("pointerup", restoreOrbitDrag);
    window.removeEventListener("pointercancel", restoreOrbitDrag);
    resizeObserver.disconnect();
    controls.dispose();
    renderer.dispose();
  };
}

const catalogItemCard = item => `
    <button class="ui-card-button category-card catalog-card${item.type === "bey" ? " bey-card" : ""}" data-id="${item.id}">
      <div class="catalog-card-visual">${cardVisualMarkup(item)}</div>
      ${cardInfo(item)}
    </button>`;
const catalogCard = item => item.category ? toolsCard(item) : catalogItemCard(item);

function renderCatalogItems() {
  renderCategoryCollection(categoryCollectionConfigs.catalog);
}

const modalContextStorageKey = "beyArchiveModalContext";
const currentPageScrollY = () => window.scrollY || document.documentElement.scrollTop || 0;
const validScrollY = value => {
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric > 0 ? Math.round(numeric) : 0;
};
const restorePageScroll = value => {
  const targetY = validScrollY(value);
  const rootStyle = document.documentElement.style;
  const previousScrollBehavior = rootStyle.scrollBehavior;
  rootStyle.scrollBehavior = "auto";
  window.scrollTo(0, targetY);
  requestAnimationFrame(() => {
    window.scrollTo(0, targetY);
    if (previousScrollBehavior) rootStyle.scrollBehavior = previousScrollBehavior;
    else rootStyle.removeProperty("scroll-behavior");
  });
};
const modalOriginRouteSnapshot = () => {
  const origin = routeSnapshot(modalOriginRoute) || routeSnapshot(lastPrimaryRoute);
  return origin && isPrimaryRoute(origin) ? origin : null;
};
const modalOriginStateGetters = {
  catalog: () => ({
    catalogQuery: catalogSearchQuery(),
    catalogSeries: selectedCatalogSeries,
    catalogSort: activeCatalogSort,
    catalogPage: currentCatalogPage
  }),
  search: () => ({
    globalQuery: globalSearchQuery(),
    globalScope: globalSearchScopeValue()
  }),
  "category-release": () => ({
    releaseQuery: activeReleaseQuery,
    releaseRegion: activeReleaseRegion,
    releaseSeries: activeReleaseSeries,
    releaseSort: { ...activeReleaseSort }
  }),
  "category-anime": () => ({
    animeSeason: typeof activeAnimeCharacterSeason === "string" ? activeAnimeCharacterSeason : "all",
    animeQuery: animeSearchQuery(),
    animePage: currentAnimePage
  }),
  "category-anime-episodes": () => ({
    animeSeason: activeAnimeSeason,
    animeQuery: activeAnimeEpisodeQuery
  })
};
const modalOriginState = originRoute => ({
  scrollY: currentPageScrollY(),
  ...(modalOriginStateGetters[originRoute?.type]?.() || {})
});
const modalContextOptionKeys = [
  "backId",
  "backProductId",
  "region",
  "series",
  "releaseQuery",
  "animeSeason",
  "animeQuery",
  "rareBeyGetListRegion",
  "rareBeyGetListSeries",
  "rareBeyGetListBackProductId"
];
const modalContextOptions = options => {
  const context = Object.fromEntries(modalContextOptionKeys
    .map(key => [key, options?.[key]])
    .filter(([, value]) => value));
  if (options?.backRelease) context.backRelease = true;
  if (options?.backRareBeyGetList) context.backRareBeyGetList = true;
  if (options?.rareBeyGetListBackRelease) context.rareBeyGetListBackRelease = true;
  if (options?.fromAnimeList) context.fromAnimeList = true;
  if (options?.releaseSort?.key && options?.releaseSort?.direction) context.releaseSort = options.releaseSort;
  return context;
};
const detailModalRouteOptions = (options = {}, keys = []) => Object.fromEntries(keys
  .map(key => [key, options[key]])
  .filter(([, value]) => value));
const detailModalFallbackCloseRoute = (context = activeDetailModalContext) => {
  const options = context?.options || {};
  if (options.backRelease) return {
    type: "category-release",
    options: detailModalRouteOptions(options, ["region", "series", "releaseQuery", "releaseSort"])
  };
  if (options.fromAnimeList) return {
    type: "category-anime-episodes",
    options: detailModalRouteOptions(options, ["animeSeason", "animeQuery"])
  };
  const id = context?.id || "";
  if (catalogCoreItemsById.has(id) || toolsItemsById.has(id)) return { type: "catalog", scope: "all" };
  return { type: "overview" };
};
const rememberActiveDetailModalContext = context => {
  if (context?.kind === "category-release" || context?.kind === "category-anime-episodes") return;
  activeDetailModalContext = context;
};
const clearActiveDetailModalContext = () => {
  activeDetailModalContext = null;
};
function rememberModalContext(kind, id, options = {}) {
  const originRoute = modalOriginRouteSnapshot();
  const context = { kind, id, options: modalContextOptions(options) };
  if (originRoute) {
    context.originRoute = originRoute;
    context.originState = modalOriginState(originRoute);
    if (modalOriginRouteExplicit) context.originExplicit = true;
  }
  rememberActiveDetailModalContext(context);
  try {
    sessionStorage.setItem(modalContextStorageKey, JSON.stringify(context));
  } catch {
    // Browsers can disable sessionStorage; the modal still works without refresh restoration.
  }
}
function restoredModalContext(id) {
  try {
    const context = JSON.parse(sessionStorage.getItem(modalContextStorageKey) || "null");
    return context?.id === id ? context : null;
  } catch {
    return null;
  }
}
function clearModalContext() {
  try {
    sessionStorage.removeItem(modalContextStorageKey);
  } catch {
    // Ignore storage restrictions.
  }
}
