import { addressIdPrefix, hasAddressNamespace } from "./address-id.mjs";

const PRODUCT_ID_PREFIXES = Object.fromEntries(["metal fight", "burst", "x"]
  .map(series => [series, addressIdPrefix("product", series)]));

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

const hasProductNamespace = item => hasAddressNamespace("product", item);

const limitedProductNumber = item => productReleaseNumbers(item)
  .map(number => number.match(/^([A-Z]+-00)(?:-|$)/)?.[1])
  .find(Boolean) || "";

const expectedLimitedProductId = item => {
  const prefix = PRODUCT_ID_PREFIXES[item?.series] || "";
  const number = limitedProductNumber(item);
  const slug = normalizeProductIdToken(item?.addressSlug);
  return prefix && number && slug ? `${prefix}${number}-${slug}` : "";
};

const productIdIncludesNumber = (id, number) => {
  const normalizedId = normalizeProductIdToken(id);
  const normalizedNumber = normalizeProductNumber(number);
  return Boolean(normalizedNumber && `-${normalizedId}-`.includes(`-${normalizedNumber}-`));
};

const productIdIssues = item => {
  const issues = [];
  if (!hasProductNamespace(item)) issues.push(`invalid ${item?.series || "unknown"} namespace`);

  const limitedNumber = limitedProductNumber(item);
  if (limitedNumber) {
    if (!item?.addressSlug) issues.push("missing limited product address slug");
    else if (item.addressSlug !== normalizeProductIdToken(item.addressSlug)) issues.push("invalid limited product address slug");
    const expectedId = expectedLimitedProductId(item);
    if (expectedId && item.id !== expectedId) issues.push(`expected ${expectedId}`);
    return issues;
  }

  const numbers = productReleaseNumbers(item);
  if (numbers.length && !numbers.some(number => productIdIncludesNumber(item?.id, number))) {
    issues.push(`missing release number (${numbers.join(" or ")})`);
  }
  return issues;
};

export {
  PRODUCT_ID_PREFIXES,
  expectedLimitedProductId,
  hasProductNamespace,
  limitedProductNumber,
  normalizeProductNumber,
  productIdIncludesNumber,
  productIdIssues,
  productReleaseNumbers
};
