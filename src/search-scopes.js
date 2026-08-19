const searchScopeValues = Object.freeze([
  "all",
  "bey",
  "parts",
  "tools",
  "product",
  "character",
  "manga",
  "anime"
]);
const searchScopes = new Set(searchScopeValues);

const normalizeSearchScope = scope => searchScopes.has(scope) ? scope : "all";

export {
  normalizeSearchScope,
  searchScopeValues
};
