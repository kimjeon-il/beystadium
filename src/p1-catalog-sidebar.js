// P1 presentation adapter for the catalog's desktop filter rail.
// Reuses existing route state and search terms without changing search/filter internals.
import { appState } from "#app/state";
import { navigateToRoute } from "#app/navigation";

const root = document.querySelector(".catalog-filter-rail");
const catalogQuery = document.querySelector("#catalogSearchInput");
const seriesControl = document.querySelector("#catalogSeriesFilter");
const scopeControl = document.querySelector("#catalogSearchScope");

const entries = [
  { id: "series", label: "시리즈", options: [
    ["all", "전체"], ["topblade", "탑블레이드"], ["metal fight", "메탈베이블레이드"],
    ["burst", "베이블레이드 버스트"], ["x", "베이블레이드 X"]
  ] },
  { id: "scope", label: "분류", options: [
    ["all", "전체"], ["bey", "베이"], ["parts", "부품"], ["tools", "장비"]
  ] },
  { id: "system", label: "시스템 · 라인", options: [
    ["", "전체"], ["하이브리드", "하이브리드", "metal fight"],
    ["4D", "4D", "metal fight"], ["싱크롬", "싱크롬", "metal fight"],
    ["베이직라인", "베이직라인", "x"], ["유니크라인", "유니크라인", "x"],
    ["커스텀라인", "커스텀라인", "x"]
  ] },
  { id: "type", label: "타입", options: [
    ["", "전체"], ["공격형", "공격형"], ["방어형", "방어형"],
    ["지구형", "지구형"], ["균형형", "균형형"]
  ] },
  { id: "spin", label: "회전", options: [
    ["", "전체"], ["우회전", "우회전"], ["좌회전", "좌회전"], ["양회전", "양회전"]
  ] }
];
const keywordGroups = new Map(entries
  .filter(entry => !["series", "scope"].includes(entry.id))
  .map(entry => [entry.id, new Set(entry.options.map(option => option[0]).filter(Boolean))]));
const queryTerms = () => String(catalogQuery?.value || "").trim().split(/\s+/).filter(Boolean);
const currentValue = (group, terms) => {
  if (group === "series") return appState.catalog.series || "all";
  if (group === "scope") return appState.catalog.kind || "all";
  return terms.find(term => keywordGroups.get(group)?.has(term)) || "";
};

const renderRail = () => {
  if (!root) return;
  root.innerHTML = `<div class="catalog-rail-heading">
    <h3>도감 필터</h3>
    <p>시리즈와 조건으로 범위를 좁혀보세요.</p>
  </div>${entries.map(entry => `<section class="catalog-rail-group" data-rail-group="${entry.id}" aria-label="${entry.label}">
    <h4>${entry.label}</h4>
    <div class="catalog-rail-options">${entry.options.map(([value, label, series]) =>
      `<button type="button" class="catalog-rail-option" data-rail-option="${entry.id}" data-rail-value="${value}"${series ? ` data-rail-series="${series}"` : ""} aria-pressed="false">${label}</button>`
    ).join("")}</div>
  </section>`).join("")}`;
};

const syncRail = () => {
  if (!root) return;
  const series = appState.catalog.series || "all";
  const terms = queryTerms();
  root.querySelectorAll("[data-rail-group]").forEach(groupNode => {
    const group = groupNode.dataset.railGroup;
    let visibleOptions = 0;
    groupNode.querySelectorAll("[data-rail-option]").forEach(button => {
      const targetSeries = button.dataset.railSeries;
      const visible = !targetSeries || series === "all" || series === targetSeries;
      button.hidden = !visible;
      if (visible) visibleOptions += 1;
      const selected = button.dataset.railValue === currentValue(group, terms);
      button.classList.toggle("active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    groupNode.hidden = group === "system" && visibleOptions <= 1;
  });
};

const updateRouteFromRail = (button) => {
  const group = button.dataset.railOption;
  const value = button.dataset.railValue || "";
  const route = {
    type: "catalog",
    scope: appState.catalog.kind || "all",
    series: appState.catalog.series || "all",
    sort: appState.catalog.sort,
    page: 1,
    query: String(catalogQuery?.value || "").trim()
  };
  if (group === "series") route.series = value;
  else if (group === "scope") route.scope = value;
  else {
    const otherTerms = queryTerms().filter(term => !keywordGroups.get(group)?.has(term));
    route.query = [...otherTerms, value].filter(Boolean).join(" ");
  }
  void navigateToRoute(route, { replace: true, preserveSearch: true, preserveScroll: true })
    .then(syncRail);
};

let initialized = false;
export const initializeP1CatalogSidebar = () => {
  if (!root || initialized) return;
  initialized = true;
  renderRail();
  syncRail();
  root.addEventListener("click", event => {
    const button = event.target.closest("[data-rail-option]");
    if (button && root.contains(button) && !button.hidden) updateRouteFromRail(button);
  });
  catalogQuery?.addEventListener("input", syncRail);
  const observer = new MutationObserver(syncRail);
  for (const control of [seriesControl, scopeControl]) {
    if (control) observer.observe(control, { attributes: true, attributeFilter: ["data-scope"] });
  }
  window.addEventListener("popstate", syncRail);
  window.addEventListener("hashchange", syncRail);
};
