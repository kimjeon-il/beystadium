import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { beyItems, partItems } from "../data/source/catalog.mjs";
import {
  xPartPreviewMappings,
  xPartPreviewUnavailable
} from "../data/source/x-part-previews.mjs";

const OUTPUT_PATH = path.resolve(".cache/x-part-preview-review/index.html");
const xBeys = beyItems.filter(item => item.series === "x");
const itemById = new Map([...xBeys, ...partItems].map(item => [item.id, item]));
const mappingsByBeyId = new Map();
for (const entry of xPartPreviewMappings) {
  if (!mappingsByBeyId.has(entry.beyId)) mappingsByBeyId.set(entry.beyId, []);
  mappingsByBeyId.get(entry.beyId).push(entry);
}

const escapeHtml = value => String(value || "")
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll("\"", "&quot;");
const itemTitle = item => [item?.name, item?.sub, item?.en].filter(Boolean).join(" · ");
const imageCard = (item, image, label, source = "", sourceKind = "") => `
  <article class="item-card">
    <div class="image-frame"><img src="../../${escapeHtml(image)}" alt=""></div>
    <strong>${escapeHtml(label)} · ${escapeHtml(itemTitle(item))}</strong>
    <code>${escapeHtml(item?.id)}</code>
    ${sourceKind ? `<small>${escapeHtml(sourceKind)}</small>` : ""}
    ${source ? `<small>${escapeHtml(source)}</small>` : ""}
  </article>`;

const sections = xBeys
  .map(bey => ({ bey, mappings: mappingsByBeyId.get(bey.id) || [] }))
  .filter(entry => entry.mappings.length)
  .map(({ bey, mappings }) => `
    <section data-bey-id="${escapeHtml(bey.id)}">
      <h2>${escapeHtml(itemTitle(bey))}</h2>
      <div class="grid">
        ${imageCard(bey, bey.image, "완성 베이")}
        ${mappings.map(entry => imageCard(
          itemById.get(entry.partId),
          entry.image,
          "장착 부품",
          entry.sourceUrl,
          entry.sourceKind
        )).join("")}
      </div>
    </section>
  `).join("");
const unavailableRows = xPartPreviewUnavailable
  .map(entry => {
    const bey = itemById.get(entry.beyId);
    const part = itemById.get(entry.partId);
    return `<tr>
      <td>${escapeHtml(itemTitle(bey))}<br><code>${escapeHtml(entry.beyId)}</code></td>
      <td>${escapeHtml(itemTitle(part))}<br><code>${escapeHtml(entry.partId)}</code></td>
      <td>${escapeHtml(entry.reason)}</td>
      <td>${escapeHtml(entry.evidenceUrl)}</td>
    </tr>`;
  })
  .join("");
const sourceKindCounts = Object.entries(
  xPartPreviewMappings.reduce((counts, entry) => {
    counts[entry.sourceKind] = (counts[entry.sourceKind] || 0) + 1;
    return counts;
  }, {})
).map(([sourceKind, count]) => `${escapeHtml(sourceKind)} ${count}건`).join(" · ");

const html = `<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>X 색상별 부품 미리보기 검수표</title>
  <style>
    :root { color-scheme: light; font-family: system-ui, sans-serif; }
    body { margin: 0; padding: 24px; background: #eceef2; color: #15171a; }
    header { position: sticky; top: 0; z-index: 2; padding: 12px; background: #eceef2ee; backdrop-filter: blur(8px); }
    button { margin-right: 8px; padding: 8px 12px; }
    section { margin: 28px 0; }
    h2 { font-size: 16px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 12px; }
    .item-card { display: grid; gap: 6px; min-width: 0; padding: 10px; border-radius: 10px; background: white; }
    .image-frame { display: grid; place-items: center; aspect-ratio: 1; overflow: hidden; border-radius: 8px; background-color: white; }
    .image-frame img { width: auto; height: auto; min-width: 0; min-height: 0; max-width: calc(100% - 16px); max-height: calc(100% - 16px); object-fit: contain; }
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
    table { width: 100%; border-collapse: collapse; background: white; }
    th, td { padding: 8px; border: 1px solid #d8dbe1; text-align: left; vertical-align: top; }
    th { position: sticky; top: 104px; background: #f6f7f9; }
  </style>
</head>
<body data-background="checker">
  <header>
    <h1>X 색상별 부품 미리보기 검수표</h1>
    <p>${xPartPreviewMappings.length}개 공식 색상 매핑 · ${xPartPreviewUnavailable.length}개 공식 확인 불가</p>
    <p>${sourceKindCounts}</p>
    <button type="button" data-bg="white">흰색</button>
    <button type="button" data-bg="black">검은색</button>
    <button type="button" data-bg="checker">체커보드</button>
  </header>
  <main>
    ${sections}
    <section>
      <h2>공식 확인 불가</h2>
      <table>
        <thead><tr><th>베이</th><th>부품</th><th>사유</th><th>공식 근거</th></tr></thead>
        <tbody>${unavailableRows}</tbody>
      </table>
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
