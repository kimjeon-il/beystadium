const SERIES_ID_TOKENS = {
  "metal fight": "METAL-FIGHT",
  burst: "BURST",
  x: "X"
};

const ITEM_ID_TOKENS = {
  bey: "BEY",
  part: "PART",
  product: "PRODUCT",
  tools: "TOOLS"
};

const addressIdPrefix = (kind, series) => {
  const itemToken = ITEM_ID_TOKENS[kind];
  const seriesToken = SERIES_ID_TOKENS[series];
  return itemToken && seriesToken ? `${itemToken}-${seriesToken}-` : "";
};

const hasAddressNamespace = (kind, item) => {
  const prefix = addressIdPrefix(kind, item?.series);
  return Boolean(prefix && String(item?.id || "").startsWith(prefix));
};

const addressIdIssues = (kind, item) => {
  const prefix = addressIdPrefix(kind, item?.series);
  if (!prefix) return [`unknown ${kind} series (${item?.series || "missing"})`];
  return String(item?.id || "").startsWith(prefix) ? [] : [`expected ${prefix} namespace`];
};

export {
  ITEM_ID_TOKENS,
  SERIES_ID_TOKENS,
  addressIdIssues,
  addressIdPrefix,
  hasAddressNamespace
};
