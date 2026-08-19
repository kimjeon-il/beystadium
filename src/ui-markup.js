import { escapeAttributeValue, escapeHtml } from "#app/markup-core";

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
  dropdownButtonMarkup,
  queryChipMarkup,
  tabButtonMarkup
};
