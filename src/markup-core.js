const escapeAttributeValue = value => String(value || "")
  .replace(/&/g, "&amp;")
  .replace(/"/g, "&quot;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;");

const escapeHtml = escapeAttributeValue;

export { escapeAttributeValue, escapeHtml };
