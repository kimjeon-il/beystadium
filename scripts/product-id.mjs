const PRODUCT_ID_PREFIXES = {
  "metal fight": "PRODUCT-",
  burst: "PRODUCT-BURST-",
  x: "PRODUCT-X-"
};

const normalizeProductIdToken = value => String(value || "")
  .trim()
  .replace(/[αΑ]/gu, "-ALPHA")
  .replace(/[βΒ]/gu, "-BETA")
  .toUpperCase()
  .replace(/[^A-Z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");

const normalizeProductNumber = value => normalizeProductIdToken(
  String(value || "").replace(/\([^)]*\)\s*$/u, "")
);

const productReleaseNumbers = item => [...new Set(Object.values(item?.releases || {})
  .map(release => normalizeProductNumber(release?.no))
  .filter(Boolean))];

const hasProductNamespace = item => {
  const id = String(item?.id || "");
  if (item?.series === "metal fight") return /^PRODUCT-(?!BURST-|X-)/.test(id);
  const prefix = PRODUCT_ID_PREFIXES[item?.series];
  return Boolean(prefix && id.startsWith(prefix));
};

const productIdIncludesNumber = (id, number) => {
  const normalizedId = normalizeProductIdToken(id);
  const normalizedNumber = normalizeProductNumber(number);
  return Boolean(normalizedNumber && `-${normalizedId}-`.includes(`-${normalizedNumber}-`));
};

const productIdIssues = item => {
  const issues = [];
  if (!hasProductNamespace(item)) issues.push(`invalid ${item?.series || "unknown"} namespace`);

  const numbers = productReleaseNumbers(item);
  if (numbers.length && !numbers.some(number => productIdIncludesNumber(item?.id, number))) {
    issues.push(`missing release number (${numbers.join(" or ")})`);
  }
  return issues;
};

export {
  PRODUCT_ID_PREFIXES,
  hasProductNamespace,
  normalizeProductNumber,
  productIdIncludesNumber,
  productIdIssues,
  productReleaseNumbers
};
