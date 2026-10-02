// Pure release/composition rules shared by the browser and reverse relationships.
const fallbackRegions = Object.freeze({
  kr: Object.freeze(["kr", "jp"]),
  jp: Object.freeze(["jp", "kr"])
});
const normalizeProductKind = kind => kind === "기타" ? "" : kind || "";
const baseProductRelease = item => ({
  status: "released",
  no: item.no || "",
  name: item.name || "",
  sale: item.sale || "",
  kind: normalizeProductKind(item.kind),
  tools: item.tools || "",
  releaseDate: item.releaseDate || item.release || "",
  price: item.price || "",
  composition: item.composition || []
});
const blankProductRelease = () => ({
  status: "unreleased",
  no: "",
  name: "",
  sale: "",
  kind: "",
  tools: "",
  releaseDate: "",
  price: "",
  composition: []
});

export const resolveProductRelease = (item, region = "kr") => {
  const base = baseProductRelease(item);
  const blank = blankProductRelease();
  if (!item.releases) return region === "kr" ? base : blank;
  const release = item.releases?.[region];
  if (!release) return region === "kr" ? base : blank;
  if (release.status === "unreleased") return blank;
  const merged = { ...(region === "kr" ? base : blank), ...release, status: release.status || "released" };
  return { ...merged, kind: normalizeProductKind(merged.kind) };
};

export const productDisplayFallbackRegions = (region = "kr") => fallbackRegions[region] || fallbackRegions.kr;
export const resolveProductDisplayRegion = (item, region = "kr") =>
  productDisplayFallbackRegions(region).find(candidate => resolveProductRelease(item, candidate).status !== "unreleased") || region;

export const resolveProductDisplayName = (item, region = "kr") => {
  const release = resolveProductRelease(item, resolveProductDisplayRegion(item, region));
  if (release.name) return release.name;
  const fallbackReleases = productDisplayFallbackRegions(region).map(candidate => resolveProductRelease(item, candidate));
  const fallbackName = fallbackReleases.map(candidateRelease => candidateRelease.name).find(Boolean);
  if (fallbackName) return fallbackName;
  const baseName = item.name || "";
  const fallbackNo = fallbackReleases.map(candidateRelease => candidateRelease.no).find(Boolean);
  return baseName || release.no || fallbackNo || item.no || "";
};

export const resolveProductComposition = (item, region = "kr", release = resolveProductRelease(item, region)) => {
  const releaseComposition = Array.isArray(release.composition) && release.composition.length ? release.composition : null;
  const regionComposition = releaseComposition || (region === "jp" ? item.compositionJp || item.compositionJapan : item.compositionKr || item.compositionKorea);
  const krReleaseComposition = Array.isArray(item.releases?.kr?.composition) && item.releases.kr.composition.length ? item.releases.kr.composition : null;
  const baseComposition = region === "jp" ? item.composition || krReleaseComposition : region === "kr" ? item.composition : null;
  return regionComposition || baseComposition || [];
};

export const isProductLineupEntry = (product, entry) => {
  const lineup = Array.isArray(product?.lineupPool) ? product.lineupPool : [];
  return Boolean(lineup.length && (entry.lineup || (
    entry.target && lineup.includes(entry.target) && /무작위|레벨별/.test(entry.name || "")
  )));
};
