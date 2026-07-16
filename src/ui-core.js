import { escapeAttributeValue, escapeHtml } from "#app/markup-core";

const globalSearch = document.querySelector("#globalSearchInput");
const globalSearchScope = document.querySelector("#globalSearchScope");
const mobileDrawerSearch = document.querySelector("#mobileDrawerSearchInput");
const mobileDrawerSearchScope = document.querySelector("#mobileDrawerSearchScope");
const overviewSearchScope = document.querySelector("#overviewSearchScope");
const searchResultsSearchScope = document.querySelector("#searchResultsSearchScope");
const catalogSearchScope = document.querySelector("#catalogSearchScope");
const catalogSeriesFilter = document.querySelector("#catalogSeriesFilter");
const catalogSearch = document.querySelector("#catalogSearchInput");
const catalogSearchHelpButton = document.querySelector("#catalogSearchHelpButton");
const catalogSearchHelpPopover = document.querySelector("#catalogSearchHelpPopover");
const animeSearch = document.querySelector("#animeSearchInput");
const animeSearchHelpButton = document.querySelector("#animeSearchHelpButton");
const animeSearchHelpPopover = document.querySelector("#animeSearchHelpPopover");
const globalSearchScopeValue = () => globalSearchScope?.dataset.scope || "all";
const mobileDrawerSearchScopeValue = () => mobileDrawerSearchScope?.dataset.scope || "all";
const overviewSearchScopeValue = () => overviewSearchScope?.dataset.scope || "all";
const searchResultsSearchScopeValue = () => searchResultsSearchScope?.dataset.scope || "all";
const dropdownSummaryText = button => button?.dataset.summaryLabel || button?.textContent.trim() || "";
function playEnterAnimation(element, className) {
  if (!element || !className || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return;
  element.classList.remove(className);
  void element.offsetHeight;
  element.classList.add(className);
  const clearClass = () => element.classList.remove(className);
  element.addEventListener("animationend", clearClass, { once: true });
  element.addEventListener("animationcancel", clearClass, { once: true });
}
const setSearchScope = (dropdown, dataAttr, scope) => {
  if (!dropdown) return;
  const value = scope || "all";
  dropdown.dataset.scope = value;
  const activeButton = dropdown.querySelector(`button[${dataAttr}="${value}"]`);
  dropdown.querySelectorAll(`button[${dataAttr}]`).forEach(button => {
    button.classList.toggle("active", button === activeButton);
  });
  const label = dropdown.querySelector(".catalog-dropdown-value");
  if (label && activeButton) label.textContent = dropdownSummaryText(activeButton);
  dropdown.removeAttribute("open");
};
const setGlobalSearchScope = scope => setSearchScope(globalSearchScope, "data-global-search-scope", scope);
const setMobileDrawerSearchScope = scope => setSearchScope(mobileDrawerSearchScope, "data-mobile-drawer-search-scope", scope);
const setOverviewSearchScope = scope => setSearchScope(overviewSearchScope, "data-overview-search-scope", scope);
const setSearchResultsSearchScope = scope => setSearchScope(searchResultsSearchScope, "data-search-results-search-scope", scope);
const setCatalogSearchScope = scope => setSearchScope(catalogSearchScope, "data-catalog-search-scope", scope || "all");
const setCatalogSeriesFilter = series => setSearchScope(catalogSeriesFilter, "data-catalog-series", series || "all");
const overviewSearch = document.querySelector("#overviewSearchInput");
const searchResultsSearch = document.querySelector("#searchResultsSearchInput");
const searchInputRoot = input => input?.closest(".overview-search, .search-box");
const searchClearButton = input => searchInputRoot(input)?.querySelector(".search-clear");
const searchPlaceholderInputs = () => [globalSearch, mobileDrawerSearch, overviewSearch, searchResultsSearch, catalogSearch, animeSearch].filter(Boolean);
const searchPlaceholderText = width => {
  if (width >= 156) return "검색어를 입력해주세요.";
  return "검색어 입력";
};
function syncSearchInputPlaceholder(input) {
  if (!input) return;
  const width = input.clientWidth || input.getBoundingClientRect?.().width || 0;
  input.placeholder = searchPlaceholderText(width);
}
function syncSearchPlaceholders() {
  searchPlaceholderInputs().forEach(syncSearchInputPlaceholder);
}
function bindResponsiveSearchPlaceholders() {
  const inputs = searchPlaceholderInputs();
  if (!inputs.length) return;
  syncSearchPlaceholders();
  requestAnimationFrame(syncSearchPlaceholders);
  window.addEventListener("load", syncSearchPlaceholders, { once: true });
  if (typeof ResizeObserver === "function") {
    const observer = new ResizeObserver(entries => {
      entries.forEach(entry => syncSearchInputPlaceholder(entry.target));
    });
    inputs.forEach(input => observer.observe(input));
    return;
  }
  window.addEventListener("resize", syncSearchPlaceholders, { passive: true });
}
const syncSearchInputState = input => {
  if (!input) return;
  const hasValue = input.value.length > 0;
  input.classList.toggle("has-value", hasValue);
  const clearButton = searchClearButton(input);
  if (clearButton) clearButton.hidden = !hasValue;
  syncSearchInputPlaceholder(input);
};
const setSearchInputValue = (input, value = "") => {
  if (!input) return;
  input.value = value;
  syncSearchInputState(input);
};
const clearSearchInputs = () => {
  setSearchInputValue(globalSearch, "");
  setSearchInputValue(mobileDrawerSearch, "");
  setSearchInputValue(overviewSearch, "");
  setSearchInputValue(searchResultsSearch, "");
  setSearchInputValue(catalogSearch, "");
  setSearchInputValue(animeSearch, "");
};
bindResponsiveSearchPlaceholders();
const bindActionRows = (root = document, selector, handler) => {
  root.querySelectorAll(selector).forEach(row => {
    row.addEventListener("click", event => {
      event.preventDefault();
      handler(row, event);
    });
  });
};
const activeAppPanel = () => document.querySelector(".app-panel.active");
const toTop = document.querySelector("#toTop");
const menuButton = document.querySelector("#menuButton");
const mobileDrawer = document.querySelector("#mobileDrawer");
const mobileDrawerClose = document.querySelector(".mobile-drawer-close");
const sidebarRouteTargets = [
  { attribute: "data-sidebar-home", section: "overview" },
  { attribute: "data-category-catalog-open", section: "catalog" },
  { attribute: "data-category-release-open", section: "release" },
  { attribute: "data-category-anime-episodes-open", section: "anime-episodes" },
  { attribute: "data-category-anime-open", section: "anime" }
];
const sidebarCurrentButtonSelector = sidebarRouteTargets.map(({ attribute }) => `[${attribute}]`).join(", ");
const getSidebarRoots = () => Array.from(document.querySelectorAll("[data-sidebar-root]"));
const getNavigationRoots = () => [
  ...getSidebarRoots(),
  ...[document.querySelector(".topbar")].filter(Boolean)
];
const getSidebarButtonSection = button => sidebarRouteTargets.find(({ attribute }) => button.hasAttribute(attribute))?.section || "";
const normalizeSidebarSection = section => {
  if (["catalog", "bey", "tools"].includes(section)) return "catalog";
  return ["overview", "release", "anime", "anime-episodes"].includes(section) ? section : "";
};
const isNavigationButtonCurrent = (button, currentSection) => {
  return getSidebarButtonSection(button) === currentSection;
};
const setSidebarButtonCurrent = (button, active) => {
  const disabled = button.disabled || button.getAttribute("aria-disabled") === "true";
  const current = Boolean(active && !disabled);
  button.classList.toggle("active", current);
  if (current) button.setAttribute("aria-current", "page");
  else button.removeAttribute("aria-current");
};
const typeLabels = { bey: "베이", parts: "부품", tools: "장비", face: "페이스", wheel: "휠", clearwheel: "클리어휠", lightwheel: "라이트휠", metalwheel: "메탈휠", "4dclearwheel": "4D클리어휠", "4dmetalwheel": "4D메탈휠", track: "트랙", bottom: "버텀", "4dbottom": "4D버텀", stoneface: "스톤페이스", chromewheel: "크롬휠", crystalwheel: "크리스탈휠", bitchip: "비트칩", attackring: "어택링", weightdisk: "웨이트디스크", bladebase: "블레이드베이스", gear: "기어", layer: "레이어", duallayer: "듀얼레이어", godlayer: "갓레이어", chozlayer: "초제트레이어", gachichip: "진검칩", gachiweight: "웨이트", gachibase: "베이스", gachilayer: "진검레이어", gachiupgrade: "강화파츠", superkingchip: "슈퍼킹칩", superkingring: "링", superkingchassis: "섀시", superkingupgrade: "강화파츠", dblayer: "DB레이어", dbcore: "DB코어", dbblade: "블레이드", dbarmor: "아머", evolutiongear: "진화기어", disk: "디스크", coredisk: "코어디스크", frame: "프레임", dbdisk: "DB디스크", driver: "드라이버", driverupgrade: "강화파츠", blade: "블레이드", ratchet: "래칫", bit: "비트" };
const tagLabels = {};
const xLineLabels = {
  basic: "베이직라인",
  unique: "유니크라인",
  custom: "커스텀라인"
};
const xLineDescriptions = {
  basic: "중량 밸런스를 안정시키기 위해 금속제 런처 후크를 채택한 기본 제품군.",
  unique: "메탈 소재를 블레이드의 외부에 집중적으로 사용한 제품군.",
  custom: "3중 블레이드 구조로 더 정교한 개조가 가능한 제품군."
};
const xBladeRoleLabels = {
  lockChip: "락칩",
  mainBlade: "메인블레이드",
  assistBlade: "어시스트블레이드",
  overBlade: "오버블레이드",
  metalBlade: "메탈블레이드"
};
const xBladeRoleAliases = {
  lockChip: ["락 칩"],
  mainBlade: ["메인 블레이드"],
  assistBlade: ["어시스트 블레이드"],
  overBlade: ["오버 블레이드"],
  metalBlade: ["메탈 블레이드"]
};
const xBladeRoleDescriptions = {};
const partTypeHierarchy = {
  "4dclearwheel": { groupType: "clearwheel", displayType: "clearwheel", detailType: "4dclearwheel" },
  "4dmetalwheel": { groupType: "metalwheel", displayType: "metalwheel", detailType: "4dmetalwheel" },
  "4dbottom": { groupType: "bottom", displayType: "bottom", detailType: "4dbottom" },
  duallayer: { groupType: "layer", displayType: "layer", detailType: "duallayer" },
  godlayer: { groupType: "layer", displayType: "layer", detailType: "godlayer" },
  chozlayer: { groupType: "layer", displayType: "layer", detailType: "chozlayer" },
  gachichip: { groupType: "layer", displayType: "gachichip", systemLabel: "진검레이어" },
  gachiweight: { groupType: "layer", displayType: "gachiweight", systemLabel: "진검레이어" },
  gachibase: { groupType: "layer", displayType: "gachibase", systemLabel: "진검레이어" },
  gachilayer: { groupType: "layer", displayType: "layer", detailType: "gachilayer" },
  gachiupgrade: { groupType: "layer", displayType: "gachiupgrade", detailLabel: "진검레이어 강화파츠" },
  superkingchip: { groupType: "layer", displayType: "superkingchip", systemLabel: "슈퍼킹레이어" },
  superkingring: { groupType: "layer", displayType: "superkingring", systemLabel: "슈퍼킹레이어" },
  superkingchassis: { groupType: "layer", displayType: "superkingchassis", systemLabel: "슈퍼킹레이어" },
  superkingupgrade: { groupType: "layer", displayType: "superkingupgrade", detailLabel: "슈퍼킹레이어 강화파츠" },
  dblayer: { groupType: "layer", displayType: "layer", detailType: "dblayer" },
  dbcore: { groupType: "layer", displayType: "dbcore", systemLabel: "DB레이어" },
  dbblade: { groupType: "layer", displayType: "dbblade", systemLabel: "DB레이어" },
  dbarmor: { groupType: "layer", displayType: "dbarmor", systemLabel: "DB레이어" },
  coredisk: { groupType: "disk", displayType: "disk", detailType: "coredisk" },
  frame: { groupType: "disk", displayType: "frame", systemLabel: "코어디스크 대응" },
  dbdisk: { groupType: "disk", displayType: "disk", detailType: "dbdisk" },
  driverupgrade: { groupType: "driver", displayType: "driverupgrade", detailLabel: "드라이버 강화파츠" }
};
const partTypeOf = item => typeof item === "string" ? item : item?.type;
const partTypeMeta = item => partTypeHierarchy[partTypeOf(item)] || {};
const partTypeLabel = type => typeLabels[type] || type || "";
const partGroupType = item => partTypeMeta(item).groupType || partTypeOf(item) || "";
const partDisplayType = item => partTypeMeta(item).displayType || partTypeOf(item) || "";
const partDetailType = item => partTypeMeta(item).detailType || "";
const partGroupTypeLabel = item => partTypeMeta(item).groupLabel || partTypeLabel(partGroupType(item));
const partDisplayTypeLabel = item => partTypeMeta(item).displayLabel || partTypeLabel(partDisplayType(item));
const partDetailTypeLabel = item => {
  const meta = partTypeMeta(item);
  return meta.detailLabel || partTypeLabel(meta.detailType || "") || partDisplayTypeLabel(item);
};
const partSystemLabel = item => {
  const label = partTypeMeta(item).systemLabel || "";
  return label && label !== partDetailTypeLabel(item) ? label : "";
};
const shouldShowPartSystemTag = item => {
  return partGroupType(item) !== "layer" || partDisplayType(item) === "layer";
};
const partTypeDescriptionType = item => partDetailType(item) || partDisplayType(item);
const partTypeSearchValues = item => {
  const type = typeof item === "string" ? item : item?.type;
  return [...new Set([
    type,
    partTypeLabel(type),
    partGroupType(item),
    partGroupTypeLabel(item),
    partDisplayType(item),
    partDisplayTypeLabel(item),
    partDetailType(item),
    partDetailTypeLabel(item),
    partSystemLabel(item)
  ].filter(Boolean))];
};
const partClassificationDescriptor = ({
  group,
  key,
  label,
  description = "",
  aliases = [],
  showInModal = true,
  showOnCard = false,
  searchable = true,
  filterable = true,
  replacesPartType = false
}) => label ? {
  group,
  key: key || label,
  label,
  description,
  aliases,
  showInModal,
  showOnCard,
  searchable,
  filterable,
  replacesPartType
} : null;
const xLineDescriptor = item => item?.series === "x" && item.xLine
  ? partClassificationDescriptor({
    group: "x-line",
    key: item.xLine,
    label: xLineLabels[item.xLine] || item.xLine,
    description: xLineDescriptions[item.xLine] || "",
    aliases: [item.xLine],
    showOnCard: true
  })
  : null;
const xBladeRoleDescriptor = item => item?.series === "x" && item.xBladeRole
  ? partClassificationDescriptor({
    group: "x-blade-role",
    key: item.xBladeRole,
    label: xBladeRoleLabels[item.xBladeRole] || item.xBladeRole,
    description: xBladeRoleDescriptions[item.xBladeRole] || "",
    aliases: [item.xBladeRole, ...(xBladeRoleAliases[item.xBladeRole] || [])],
    showOnCard: true,
    replacesPartType: item.type === "blade"
  })
  : null;
const partSystemDescriptor = item => {
  const label = partSystemLabel(item);
  return partClassificationDescriptor({
    group: "part-system",
    key: label,
    label,
    aliases: [],
    showInModal: shouldShowPartSystemTag(item),
    showOnCard: false
  });
};
const partSubtypeClassificationDescriptors = item => [
  partSystemDescriptor(item),
  xLineDescriptor(item),
  xBladeRoleDescriptor(item)
].filter(Boolean);
const partTypeDescriptor = item => {
  const label = partDetailTypeLabel(item);
  if (!label) return null;
  const description = partTypeTagDescriptions[partTypeDescriptionType(item)]
    || partTypeTagDescriptions[partGroupType(item)]
    || "";
  const showInModal = !partSubtypeClassificationDescriptors(item)
    .some(descriptor => descriptor.replacesPartType);
  return partClassificationDescriptor({
    group: "type",
    key: partTypeOf(item),
    label,
    description,
    aliases: partTypeSearchValues(item),
    showInModal,
    showOnCard: false
  });
};
const partClassificationDescriptors = item => [
  partTypeDescriptor(item),
  ...partSubtypeClassificationDescriptors(item)
].filter(Boolean);
const partMountedTypeLabel = item => {
  const replacement = partClassificationDescriptors(item)
    .find(descriptor => descriptor.replacesPartType);
  return replacement?.label || partDisplayTypeLabel(item);
};
const partClassificationLabels = (item, visibility = "card") => {
  const visibilityKey = visibility === "modal" ? "showInModal" : "showOnCard";
  return partClassificationDescriptors(item)
    .filter(descriptor => descriptor[visibilityKey])
    .map(descriptor => descriptor.label);
};
const partClassificationSearchValues = item => [...new Set(partClassificationDescriptors(item)
  .filter(descriptor => descriptor.searchable)
  .flatMap(descriptor => [descriptor.key, descriptor.label, ...(descriptor.aliases || [])])
  .filter(Boolean))];
const partClassificationFilterDescriptors = () => {
  const descriptors = [];
  Object.entries(typeLabels).forEach(([value, label]) => {
    descriptors.push(partClassificationDescriptor({
      group: "type",
      key: value,
      label,
      aliases: [value],
      showInModal: false,
      showOnCard: false
    }));
  });
  [...new Set(Object.values(partTypeHierarchy).map(meta => meta.systemLabel).filter(Boolean))]
    .forEach(label => descriptors.push(partClassificationDescriptor({
      group: "part-system",
      key: label,
      label,
      aliases: [],
      showInModal: false,
      showOnCard: false
    })));
  Object.entries(xLineLabels).forEach(([value, label]) => {
    descriptors.push(partClassificationDescriptor({
      group: "x-line",
      key: value,
      label,
      aliases: [value],
      showInModal: false,
      showOnCard: false
    }));
  });
  Object.entries(xBladeRoleLabels).forEach(([value, label]) => {
    descriptors.push(partClassificationDescriptor({
      group: "x-blade-role",
      key: value,
      label,
      aliases: [value, ...(xBladeRoleAliases[value] || [])],
      showInModal: false,
      showOnCard: false
    }));
  });
  return descriptors.filter(Boolean);
};
const structureLabels = { basic: "4단 구조 시스템", hybrid: "하이브리드 시스템", "4d": "4D 시스템", synchrome: "싱크롬 시스템" };
const structureTagDescriptions = {
  basic: "페이스, 휠, 트랙, 버텀으로 구성된다",
  hybrid: "휠을 2단으로 분리하여 윗면과 측면의 공격 패턴을 다양하게 조합할 수 있다",
  "4d": "메탈휠을 분할하여 모드 전환이 가능하며 트랙과 버텀을 융합하여 새로운 움직임을 실현한다",
  synchrome: "크롬휠끼리 합체시켜 중량을 크게 늘릴 수 있다"
};
const partTypeTagDescriptions = {
  face: "휠, 트랙, 버텀을 연결하여 본체를 고정하는 나사 역할을 한다",
  stoneface: "휠, 트랙, 버텀을 연결하여 본체를 고정하는 나사 역할을 한다",
  wheel: "베이의 공격력과 방어력을 결정한다",
  clearwheel: "베이의 공격력과 방어력을 결정한다",
  lightwheel: "베이의 공격력과 방어력을 결정한다",
  metalwheel: "베이의 공격력과 방어력을 결정한다",
  "4dclearwheel": "베이의 공격력과 방어력을 결정하며 금속 소재를 융합하여 중량이 높아졌다",
  "4dmetalwheel": "베이의 공격력과 방어력을 결정하며 여러 층으로 분할되어 모드 전환이 가능하다",
  chromewheel: "베이의 공격력과 방어력을 결정하며 크리스탈휠과 위치를 바꾸거나 크롬휠끼리 결합할 수 있다",
  crystalwheel: "베이의 공격력과 방어력을 결정하며 크롬휠과 위치를 바꿀 수 있다",
  track: "베이의 높이를 결정한다",
  bottom: "베이의 움직임을 결정한다",
  "4dbottom": "트랙과 버텀을 융합하여 새로운 움직임을 실현한다",
  layer: "배틀 시 상대와 직접 부딪치는 부분으로 공격과 방어를 담당한다.",
  disk: "베이의 전체 중량과 무게중심을 변화시켜 배틀 성능에 영향을 준다.",
  driver: "베이가 스타디움 안에서 어떻게 움직이는지를 결정한다.",
  blade: "공격을 담당하며, 베이의 회전 방향을 결정한다.",
  ratchet: "블레이드 아래에서 공격을 보조하며, 베이의 높이를 결정한다.",
  bit: "래칫 아래의 회전축으로 베이의 움직임과 고정력을 결정한다."
};
const modernBattleTypeLabels = { attack: "어택형", defense: "디펜스형", stamina: "스태미나형", balance: "밸런스형" };
const battleTypeLabels = {
  classic: { attack: "공격형", defense: "방어형", stamina: "지구형", balance: "균형형" },
  zeroG: { attack: "공격형", defense: "방어형", stamina: "지구형", balance: "균형형" },
  modern: modernBattleTypeLabels,
  burst: modernBattleTypeLabels,
  x: modernBattleTypeLabels
};
const burstBattleTypeDescriptions = {
  attack: "공격에 특화되어 스태미나형에 유리하다",
  defense: "방어에 특화되어 어택형에 유리하다",
  stamina: "지구력이 높아 디펜스형에 유리하다",
  balance: "공격·방어·지구력을 고르게 갖추고 있다"
};
const xBattleTypeDescriptions = {
  attack: "대시 성능과 공격력이 높아 강한 위력의 X대시가 가능하다.",
  defense: "충격을 방어하는 것에 뛰어나 튕겨내기 어려운 타입이다.",
  stamina: "강한 원심력과 지구력으로 오래 회전하는 것에 뛰어나다.",
  balance: "공격과 방어의 밸런스가 좋아 어떤 상대라도 대응력이 높다."
};
const zeroGBattleTypeDescriptions = {
  attack: "크게 날뛰며 상대를 튕겨내거나 상대를 끌어올리는 것이 가능하다.",
  defense: "흔들리는 스타디움에서도 밸런스를 잃지 않고 버티는 능력이 뛰어나다.",
  stamina: "더 오래 회전하는 능력이 뛰어나다.",
  balance: "여러 능력을 균형 있게 갖추었다."
};
const battleTypeDescriptions = {
  classic: {
    attack: "높은 공격력으로 상대를 튕겨낸다!",
    defense: "쉽게 튕겨나가지 않는 묵직한 몸체로 상대를 날려버린다!",
    stamina: "원심력으로 상대보다 오래 회전한다!",
    balance: "공격·방어·지구력을 두루 갖춘 만능형 타입."
  },
  zeroG: zeroGBattleTypeDescriptions,
  burst: burstBattleTypeDescriptions,
  x: xBattleTypeDescriptions
};
const spinLabels = { right: "우회전", left: "좌회전", dual: "양회전" };
const spinDescriptions = {
  right: "시계 방향으로 회전한다",
  left: "반시계 방향으로 회전한다",
  dual: "좌우회전 모두 가능하다"
};
const heightClassLabels = { low: "낮은 높이", high: "높은 높이" };
const isZeroGBattleTypeItem = item => item?.type === "crystalwheel"
  || item?.type === "chromewheel"
  || (item?.type === "bey" && item?.structure === "synchrome");
const battleTypeLabelGroup = item => {
  const series = typeof item === "string" ? item : item?.series;
  if (series === "x") return "x";
  if (series === "burst") return "burst";
  if (isZeroGBattleTypeItem(item)) return "zeroG";
  return "classic";
};
const battleTypeLabel = (value, item) => battleTypeLabels[battleTypeLabelGroup(item)]?.[value] || value || "";
const battleTypeDescription = (value, item) => battleTypeDescriptions[battleTypeLabelGroup(item)]?.[value] || "";
const spinLabel = value => spinLabels[value] || value || "";
const spinDescription = value => spinDescriptions[value] || "";
const heightClassLabel = value => heightClassLabels[value] || value || "";
const toolsSubtypeOptions = [
  { value: "런처", label: "런처" },
  { value: "그립", label: "그립" },
  { value: "스타디움", label: "스타디움" },
  { value: "기타", label: "기타" }
];
const dropdownButtonMarkup = ({ value = "", label = "", active = false, dataAttr, summaryLabel = "" }) => {
  const summary = summaryLabel ? ` data-summary-label="${escapeAttributeValue(summaryLabel)}"` : "";
  return `<button type="button" class="ui-dropdown-item ${active ? "active" : ""}" ${dataAttr}="${escapeAttributeValue(value)}"${summary}>${escapeHtml(label)}</button>`;
};
const tabButtonMarkup = ({ value = "", label = "", active = false, dataAttr }) =>
  `<button type="button" class="ui-tab-button ${active ? "active" : ""}" ${dataAttr}="${escapeAttributeValue(value)}" aria-pressed="${active ? "true" : "false"}">${escapeHtml(label)}</button>`;
const queryChipMarkup = queryOrEntries => {
  const entries = (Array.isArray(queryOrEntries) ? queryOrEntries : [{ label: queryOrEntries }])
    .map(entry => typeof entry === "string" ? { label: entry } : entry || {})
    .map(entry => ({ key: String(entry.key || ""), label: String(entry.label || "").trim() }))
    .filter(entry => entry.label);
  return entries.map(entry => {
    const keyAttribute = entry.key ? ` data-query-chip-key="${escapeAttributeValue(entry.key)}"` : "";
    return `<button type="button" class="ui-chip-button active-query-chip" data-clear-query${keyAttribute} aria-label="${escapeAttributeValue(`검색어 “${entry.label}” 제거`)}">
      <span class="active-query-chip__value">${escapeHtml(entry.label)}</span>
      <span class="active-query-chip__remove" aria-hidden="true">×</span>
    </button>`;
  }).join("");
};

export {
  activeAppPanel,
  animeSearch,
  animeSearchHelpButton,
  animeSearchHelpPopover,
  battleTypeDescription,
  battleTypeLabel,
  battleTypeLabels,
  bindActionRows,
  catalogSearch,
  catalogSearchHelpButton,
  catalogSearchHelpPopover,
  catalogSearchScope,
  catalogSeriesFilter,
  clearSearchInputs,
  dropdownButtonMarkup,
  dropdownSummaryText,
  getNavigationRoots,
  globalSearch,
  globalSearchScope,
  globalSearchScopeValue,
  heightClassLabel,
  isNavigationButtonCurrent,
  menuButton,
  mobileDrawer,
  mobileDrawerClose,
  mobileDrawerSearch,
  mobileDrawerSearchScope,
  mobileDrawerSearchScopeValue,
  normalizeSidebarSection,
  overviewSearch,
  overviewSearchScope,
  overviewSearchScopeValue,
  partClassificationDescriptors,
  partClassificationFilterDescriptors,
  partClassificationLabels,
  partClassificationSearchValues,
  partDetailTypeLabel,
  partDisplayTypeLabel,
  partMountedTypeLabel,
  playEnterAnimation,
  queryChipMarkup,
  searchResultsSearch,
  searchResultsSearchScope,
  searchResultsSearchScopeValue,
  setCatalogSearchScope,
  setCatalogSeriesFilter,
  setGlobalSearchScope,
  setMobileDrawerSearchScope,
  setOverviewSearchScope,
  setSearchResultsSearchScope,
  setSearchInputValue,
  setSidebarButtonCurrent,
  sidebarCurrentButtonSelector,
  spinDescription,
  spinLabel,
  spinLabels,
  structureLabels,
  structureTagDescriptions,
  syncSearchInputState,
  tabButtonMarkup,
  tagLabels,
  toTop,
  toolsSubtypeOptions,
  typeLabels
};
