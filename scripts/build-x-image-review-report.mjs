import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import { xImageReview } from "../data/source/x-image-review.mjs";
import { productItems } from "../data/source/products.mjs";

const OUTPUT_PATH = path.resolve(".cache/x-image-review/index.html");
const xItems = [...beyItems, ...partItems].filter(item => item.series === "x");
const itemById = new Map(xItems.map(item => [item.id, item]));
const reviewById = new Map(xImageReview.map(entry => [entry.id, entry]));

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll("\"", "&quot;");
}

function productTargets(product) {
  const targets = [
    ...(product.lineupPool || []),
    ...Object.values(product.releases || {})
      .flatMap(release => release?.composition || [])
      .map(entry => entry.target)
  ];
  const expanded = [];
  for (const target of targets) {
    expanded.push(target);
    const bey = itemById.get(target);
    if (bey?.type === "bey") {
      expanded.push(...(bey.parts || []), ...(bey.bundledParts || []));
    }
  }
  return [...new Set(expanded)].filter(id => reviewById.has(id));
}

function itemTitle(item) {
  const korean = item.name || "";
  const fullName = item.sub && item.sub !== korean ? ` · ${item.sub}` : "";
  const english = item.en ? ` · ${item.en}` : "";
  return `${korean}${fullName}${english}`;
}

function itemCard(id) {
  const item = itemById.get(id);
  const review = reviewById.get(id);
  if (!item || !review) return "";
  const source = review.sourcePath || review.sourceUrl;
  const parts = item.type === "bey"
    ? (item.parts || []).map(partId => itemById.get(partId)?.name || partId).join(" + ")
    : "";
  return `
    <article class="item-card" data-item-id="${escapeHtml(id)}">
      <div class="image-frame"><img src="../../${escapeHtml(review.image)}" alt=""></div>
      <strong>${escapeHtml(itemTitle(item))}</strong>
      <code>${escapeHtml(id)}</code>
      ${parts ? `<small>${escapeHtml(parts)}</small>` : ""}
      <small>${escapeHtml(source)}</small>
    </article>`;
}

const productGroups = productItems
  .filter(product => product.series === "x")
  .map(product => ({ product, targets: productTargets(product) }))
  .filter(({ targets }) => targets.length > 1)
  .sort((left, right) => left.product.id.localeCompare(right.product.id));

const groupedSections = productGroups.map(({ product, targets }) => `
  <section>
    <h2>${escapeHtml(product.id)} · ${escapeHtml(product.releases?.jp?.name || product.releases?.kr?.name || "")}</h2>
    <div class="grid">${targets.map(itemCard).join("")}</div>
  </section>`).join("");

const allItems = [...reviewById.keys()].sort((left, right) => left.localeCompare(right));
const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>X 이미지 정합성 검수표</title>
  <style>
    :root { color-scheme: light; font-family: system-ui, sans-serif; }
    body { margin: 0; padding: 24px; background: #eceef2; color: #15171a; }
    header { position: sticky; top: 0; z-index: 2; padding: 12px; background: #eceef2ee; backdrop-filter: blur(8px); }
    button { margin-right: 8px; padding: 8px 12px; }
    section { margin: 24px 0; }
    h2 { font-size: 16px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 12px; }
    .item-card { display: grid; gap: 6px; min-width: 0; padding: 10px; border-radius: 10px; background: white; }
    .image-frame { display: grid; place-items: center; aspect-ratio: 1; border-radius: 8px; overflow: hidden; background-color: white; }
    .image-frame img { width: 94%; height: 94%; object-fit: contain; }
    body[data-background="black"] .image-frame { background: #050505; }
    body[data-background="checker"] .image-frame {
      background-color: white;
      background-image:
        linear-gradient(45deg, #d6d6d6 25%, transparent 25%),
        linear-gradient(-45deg, #d6d6d6 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #d6d6d6 75%),
        linear-gradient(-45deg, transparent 75%, #d6d6d6 75%);
      background-position: 0 0, 0 12px, 12px -12px, -12px 0;
      background-size: 24px 24px;
    }
    strong, code, small { overflow-wrap: anywhere; }
    code, small { font-size: 11px; }
  </style>
</head>
<body data-background="checker">
  <header>
    <h1>X 이미지 정합성 검수표</h1>
    <p>${xImageReview.length}개 검수 매핑 · 제품별 고위험군과 전체 목록</p>
    <button type="button" data-bg="white">흰색</button>
    <button type="button" data-bg="black">검은색</button>
    <button type="button" data-bg="checker">체커보드</button>
  </header>
  <main>
    <h1>제품별 검수</h1>
    ${groupedSections}
    <section>
      <h1>전체 매핑</h1>
      <div class="grid">${allItems.map(itemCard).join("")}</div>
    </section>
  </main>
  <script>
    document.addEventListener("click", event => {
      const background = event.target.closest("[data-bg]")?.dataset.bg;
      if (background) document.body.dataset.background = background;
    });
  </script>
</body>
</html>`;

await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });
await writeFile(OUTPUT_PATH, html);
console.log(`Wrote ${OUTPUT_PATH}`);
