/*
 * Catalog sidebar presentation adapter. All filtering, ranking, pagination,
 * hash serialization and data loading remain owned by the existing catalog.
 * This module only renders accessible controls and delegates selections to it.
 */
import { appState } from "#app/state";
import { navigateToRoute } from "#app/navigation";
import { battleTypeLabels, toolsSubtypeOptions } from "#app/catalog-metadata";

const root = document.querySelector(".catalog-filter-rail");
const catalogQuery = document.querySelector("#catalogSearchInput");
const seriesControl = document.querySelector("#catalogSeriesFilter");
const scopeControl = document.querySelector("#catalogSearchScope");

const entries = [
  { id: "series", label: "시리즈", layout: "stack", options: [
    { value: "all", label: "전체" },
    { value: "topblade", label: "탑블레이드" },
    { value: "metal fight", label: "메탈베이블레이드" },
    { value: "burst", label: "베이블레이드 버스트" },
    { value: "x", label: "베이블레이드 X" }
  ] },
  { id: "scope", label: "분류", layout: "grid", options: [
    { value: "all", label: "전체" }, { value: "bey", label: "베이" },
    { value: "parts", label: "부품" }, { value: "tools", label: "장비" }
  ] },
  { id: "system", label: "시스템 · 라인", layout: "stack", options: [
    { value: "", label: "전체" },
    { value: "basic", label: "4단 구조", series: "metal fight" },
    { value: "하이브리드", label: "하이브리드 시스템", series: "metal fight" },
    { value: "4D", label: "4D 시스템", series: "metal fight" },
    { value: "싱크롬", label: "싱크롬 시스템", series: "metal fight" },
    { value: "듀얼레이어", label: "듀얼레이어", series: "burst", scope: "parts" },
    { value: "갓레이어", label: "갓레이어", series: "burst", scope: "parts" },
    { value: "초제트레이어", label: "초제트레이어", series: "burst", scope: "parts" },
    { value: "진검레이어", label: "진검레이어", series: "burst", scope: "parts" },
    { value: "슈퍼킹레이어", label: "슈퍼킹레이어", series: "burst", scope: "parts" },
    { value: "DB레이어", label: "DB레이어", series: "burst", scope: "parts" },
    { value: "베이직라인", label: "베이직라인", series: "x" },
    { value: "유니크라인", label: "유니크라인", series: "x" },
    { value: "커스텀라인", label: "커스텀라인", series: "x" }
  ] },
  { id: "type", label: "타입", layout: "grid", options: [
    { value: "", label: "전체" },
    ...Object.entries(battleTypeLabels.classic).map(([value, label]) => ({ value, label }))
  ] },
  { id: "spin", label: "회전", layout: "grid", options: [
    { value: "", label: "전체" },
    { value: "우회전", label: "우회전" },
    { value: "좌회전", label: "좌회전" },
    { value: "양회전", label: "양회전" }
  ] },
  { id: "tools", label: "장비 종류", layout: "grid", options: [
    { value: "", label: "전체" },
    ...toolsSubtypeOptions.map(({ value, label }) => ({ value, label }))
  ] }
];

const typeAliases = new Map();
Object.keys(battleTypeLabels.classic).forEach(key => {
  [key, battleTypeLabels.classic[key], battleTypeLabels.modern[key]]
    .forEach(term => typeAliases.set(term, key));
});
const keywordGroups = new Map(entries
  .filter(entry => !["series", "scope"].includes(entry.id))
  .map(entry => [entry.id, new Set(entry.options.map(option => option.value).filter(Boolean))]));
const queryTerms = () => String(catalogQuery?.value || "").trim().split(/\s+/).filter(Boolean);
const belongsToGroup = (group, term) => group === "type"
  ? typeAliases.has(term)
  : keywordGroups.get(group)?.has(term);
const currentValue = (group, terms) => {
  if (group === "series") return appState.catalog.series || "all";
  if (group === "scope") return appState.catalog.kind || "all";
  const found = terms.find(term => belongsToGroup(group, term));
  return group === "type" ? typeAliases.get(found) || "" : found || "";
};
const catalogRoute = (overrides = {}) => ({
  type: "catalog",
  scope: appState.catalog.kind || "all",
  series: appState.catalog.series || "all",
  sort: appState.catalog.sort,
  page: 1,
  query: String(catalogQuery?.value || "").trim(),
  ...overrides
});

let statusLabel = null;
let resetButton = null;

const createOption = (entry, option) => {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "catalog-rail-option";
  button.dataset.railOption = entry.id;
  button.dataset.railValue = option.value;
  if (option.series) button.dataset.railSeries = option.series;
  if (option.scope) button.dataset.railScope = option.scope;
  button.setAttribute("aria-pressed", "false");
  const text = document.createElement("span");
  text.className = "catalog-rail-option__text";
  text.textContent = option.label;
  button.append(text);
  return button;
};

const renderRail = () => {
  if (!root) return;
  const heading = document.createElement("header");
  heading.className = "catalog-rail-heading";
  const titleRow = document.createElement("div");
  titleRow.className = "catalog-rail-heading__row";
  const title = document.createElement("h3");
  title.textContent = "도감 필터";
  resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.className = "catalog-rail-reset";
  resetButton.dataset.railReset = "";
  resetButton.textContent = "초기화";
  resetButton.setAttribute("aria-label", "도감 필터 전체 초기화");
  titleRow.append(title, resetButton);
  statusLabel = document.createElement("p");
  statusLabel.className = "catalog-rail-status";
  statusLabel.setAttribute("aria-live", "polite");
  heading.append(titleRow, statusLabel);

  const fragment = document.createDocumentFragment();
  fragment.append(heading);
  entries.forEach(entry => {
    const section = document.createElement("section");
    section.className = "catalog-rail-group";
    section.dataset.railGroup = entry.id;
    const headingId = "catalog-rail-" + entry.id;
    section.setAttribute("aria-labelledby", headingId);
    const sectionTitle = document.createElement("h4");
    sectionTitle.id = headingId;
    sectionTitle.textContent = entry.label;
    const options = document.createElement("div");
    options.className = "catalog-rail-options";
    options.dataset.railLayout = entry.layout;
    entry.options.forEach(option => options.append(createOption(entry, option)));
    section.append(sectionTitle, options);
    fragment.append(section);
  });
  root.replaceChildren(fragment);
};

const syncRail = () => {
  if (!root) return;
  const series = appState.catalog.series || "all";
  const scope = appState.catalog.kind || "all";
  const terms = queryTerms();
  let appliedGroups = 0;
  const consumedTerms = new Set();

  root.querySelectorAll("[data-rail-group]").forEach(section => {
    const group = section.dataset.railGroup;
    const active = currentValue(group, terms);
    let applicableOptions = 0;
    section.querySelectorAll("[data-rail-option]").forEach(button => {
      const value = button.dataset.railValue;
      const targetSeries = button.dataset.railSeries;
      const targetScope = button.dataset.railScope;
      const visible = (!targetSeries || targetSeries === series)
        && (!targetScope || targetScope === scope || scope === "all");
      button.hidden = !visible;
      if (visible) applicableOptions += 1;
      if (group === "type" && value) {
        button.querySelector(".catalog-rail-option__text").textContent =
          ["burst", "x"].includes(series) ? battleTypeLabels.modern[value] : battleTypeLabels.classic[value];
      }
      const selected = value === active;
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected && visible));
    });
    if (group === "system") {
      section.hidden = series === "all" || scope === "tools" || applicableOptions <= 1;
    } else if (group === "type" || group === "spin") {
      section.hidden = ["parts", "tools"].includes(scope);
    } else if (group === "tools") {
      section.hidden = scope !== "tools";
    } else {
      section.hidden = false;
    }
    if (active && active !== "all") appliedGroups += 1;
  });

  terms.forEach(term => {
    if (entries.slice(2).some(entry => belongsToGroup(entry.id, term))) consumedTerms.add(term);
  });
  if (terms.some(term => !consumedTerms.has(term))) appliedGroups += 1;
  if (statusLabel) statusLabel.textContent = appliedGroups ? appliedGroups + "개 조건 적용 중" : "시리즈와 조건을 선택하세요";
  if (resetButton) resetButton.disabled = appliedGroups === 0;
};

const activateRailOption = button => {
  const group = button.dataset.railOption;
  const value = button.dataset.railValue || "";
  let route = catalogRoute();
  if (group === "series") route = catalogRoute({ series: value });
  else if (group === "scope") route = catalogRoute({ scope: value });
  else {
    const remaining = queryTerms().filter(term => !belongsToGroup(group, term));
    const term = group === "type" && value
      ? (["x", "burst"].includes(appState.catalog.series) ? battleTypeLabels.modern[value]
        : appState.catalog.series === "all" ? value : battleTypeLabels.classic[value])
      : value;
    route.query = [...remaining, term].filter(Boolean).join(" ");
  }
  void navigateToRoute(route, { replace: true, preserveSearch: true, preserveScroll: true }).then(syncRail);
};

let initialized = false;
export const initializeP1CatalogSidebar = () => {
  if (!root || initialized) return;
  initialized = true;
  renderRail();
  syncRail();
  root.addEventListener("click", event => {
    const reset = event.target.closest("[data-rail-reset]");
    if (reset && root.contains(reset) && !reset.disabled) {
      void navigateToRoute(catalogRoute({ series: "all", scope: "all", query: "" }), {
        replace: true, preserveSearch: true, preserveScroll: true
      }).then(syncRail);
      return;
    }
    const button = event.target.closest("[data-rail-option]");
    if (button && root.contains(button) && !button.hidden) activateRailOption(button);
  });
  catalogQuery?.addEventListener("input", syncRail);
  const observer = new MutationObserver(syncRail);
  for (const control of [seriesControl, scopeControl]) {
    if (control) observer.observe(control, { attributes: true, attributeFilter: ["data-scope"] });
  }
  for (const view of [
    document.querySelector("#catalogGrid"),
    document.querySelector('[data-catalog-filter-chips="catalog"]')
  ]) {
    if (view) observer.observe(view, { childList: true });
  }
  window.addEventListener("popstate", syncRail);
  window.addEventListener("hashchange", syncRail);
};
