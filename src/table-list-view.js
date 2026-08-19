import { escapeAttributeValue, escapeHtml } from "#app/markup-core";
import { dropdownButtonMarkup } from "#app/ui-markup";

const tableListClassName = (...classes) => classes.filter(Boolean).join(" ");
const dropdownOptionsMarkup = (entries, activeValue, dataAttr) => entries
  .map(([value, label]) => dropdownButtonMarkup({ value, label, active: activeValue === value, dataAttr }))
  .join("");
const tableListTableMarkup = ({ scrollClass = "", tableClass = "", head = "", body = "" } = {}) => `<div class="${tableListClassName("table-list-scroll", "page-table-scroll", scrollClass)}">
  <table class="${tableListClassName("table-list-table", "ui-data-table", tableClass)}">
    ${head}
    <tbody>${body}</tbody>
  </table>
</div>`;
const tableListSectionMarkup = tableMarkup => `<div class="table-list-section">${tableMarkup}</div>`;
const tableListPageMarkup = ({ className = "", attrs = "", controlsMarkup = "", metaMarkup = "", tableMarkup = "" } = {}) =>
  `<div class="${tableListClassName("table-list-page", className)}"${attrs ? ` ${attrs}` : ""}>
    ${controlsMarkup}
    ${metaMarkup}
    ${tableListSectionMarkup(tableMarkup)}
  </div>`;
const tableListSearchBoxMarkup = ({ id, value = "", className = "", placeholder = "검색어를 입력해주세요." } = {}) =>
  `<div class="${tableListClassName("search-box", "table-list-search-box", className)}" role="search">
    <span class="search-icon" aria-hidden="true"></span>
    <input id="${escapeAttributeValue(id)}" type="search" placeholder="${escapeAttributeValue(placeholder)}" data-search-placeholder="${escapeAttributeValue(placeholder)}" value="${escapeAttributeValue(value)}" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" aria-autocomplete="none">
  </div>`;
const tableListDropdownMarkup = ({ label = "", entries = [], activeValue = "", dataAttr = "", className = "" } = {}) => `<details class="${tableListClassName("catalog-dropdown", "table-list-dropdown", className)}">
  <summary><b class="catalog-dropdown-value">${escapeHtml(label)}</b></summary>
  <div class="catalog-dropdown-menu">
    ${dropdownOptionsMarkup(entries, activeValue, dataAttr)}
  </div>
</details>`;
const tableListControlsMarkup = ({ label = "", className = "", before = "", dropdown = null, search = null, attrs = "" } = {}) => `<div class="${tableListClassName("table-list-controls", className)}" role="group"${attrs ? ` ${attrs}` : ""}${label ? ` aria-label="${escapeAttributeValue(label)}"` : ""}>
  ${before || ""}
  ${dropdown ? tableListDropdownMarkup(dropdown) : ""}
  ${search ? tableListSearchBoxMarkup(search) : ""}
</div>`;

class TableListController {
  constructor(config = {}) {
    this.config = config;
  }

  root() {
    return this.config.root?.() || null;
  }

  contentRoot(root = document) {
    return this.config.contentRoot?.(root) || root;
  }

  tableSection(root = document) {
    return this.config.tableSection?.(root)
      || root.querySelector?.(".table-list-section")
      || null;
  }

  renderPage() {
    const root = this.root();
    if (!root || !this.config.pageMarkup) return null;
    root.innerHTML = this.config.pageMarkup(this);
    this.bind(root);
    return root;
  }

  renderTable(root = document) {
    const contentRoot = this.contentRoot(root);
    if (!contentRoot) return null;
    this.config.renderMeta?.(contentRoot, this);
    const section = this.tableSection(contentRoot);
    if (!section || !this.config.tableMarkup) return section;
    section.innerHTML = this.config.tableMarkup(this);
    this.config.bindTable?.(section, contentRoot, this);
    return section;
  }

  bind(root = document) {
    const contentRoot = this.contentRoot(root);
    if (!contentRoot) return null;
    this.config.bind?.(contentRoot, this);
    return contentRoot;
  }
}

const sortDropdownLabelParts = label => {
  const rawLabel = String(label || "").trim();
  const match = rawLabel.match(/^(.+?)\s*([↑↓])$/u);
  return match ? { text: match[1].trim(), direction: match[2] } : { text: rawLabel, direction: "" };
};
const sortDropdownLabelMarkup = label => {
  const { text, direction } = sortDropdownLabelParts(label);
  return `<span class="sort-dropdown-label"><span class="sort-dropdown-label-spacer" aria-hidden="true"></span><span class="sort-dropdown-label-text">${escapeHtml(text)}</span><span class="sort-dropdown-label-direction"${direction ? "" : " aria-hidden=\"true\""}>${escapeHtml(direction)}</span></span>`;
};
const setSortDropdownLabel = (element, label) => {
  if (element) element.innerHTML = sortDropdownLabelMarkup(label);
};
const sortDropdownOptionsMarkup = (options, activeValue, dataAttr) => options.map(option =>
  `<button type="button" class="${option.value === activeValue ? "active" : ""}" ${dataAttr}="${escapeAttributeValue(option.value)}" data-summary-label="${escapeAttributeValue(option.label)}"${option.ariaLabel ? ` aria-label="${escapeAttributeValue(option.ariaLabel)}"` : ""}>${sortDropdownLabelMarkup(option.label)}</button>`
).join("");
const sortDropdownMarkup = ({ className = "", label = "정렬", value = "", options = [], dataAttr = "" } = {}) =>
  `<details class="${tableListClassName("catalog-dropdown", "search-scope", "list-sort-dropdown", className)}" aria-label="${escapeAttributeValue(label)}">
    <summary><b class="catalog-dropdown-value">${sortDropdownLabelMarkup(options.find(option => option.value === value)?.label || label)}</b></summary>
    <div class="catalog-dropdown-menu">
      ${sortDropdownOptionsMarkup(options, value, dataAttr)}
    </div>
  </details>`;

export {
  TableListController,
  setSortDropdownLabel,
  sortDropdownMarkup,
  tableListControlsMarkup,
  tableListDropdownMarkup,
  tableListPageMarkup,
  tableListTableMarkup
};
