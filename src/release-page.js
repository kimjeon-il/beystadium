const releaseSortableColumns = {
  no: "번호",
  kind: "종류",
  release: "발매",
  price: "가격"
};
const releaseSortAccessibleColumns = {
  ...releaseSortableColumns,
  release: "발매일"
};
const releaseSortDirectionLabel = direction => direction === "desc" ? "내림차순" : "오름차순";
const releaseSortOptionAriaLabel = (key, direction) =>
  `${releaseSortAccessibleColumns[key] || releaseSortableColumns[key] || key} ${releaseSortDirectionLabel(direction)} 정렬`;
const releaseMobileSortOptions = [
  { value: "release:asc", label: "발매순 ↑", key: "release", direction: "asc", ariaLabel: releaseSortOptionAriaLabel("release", "asc") },
  { value: "release:desc", label: "발매순 ↓", key: "release", direction: "desc", ariaLabel: releaseSortOptionAriaLabel("release", "desc") },
  { value: "no:asc", label: "번호순 ↑", key: "no", direction: "asc", ariaLabel: releaseSortOptionAriaLabel("no", "asc") },
  { value: "no:desc", label: "번호순 ↓", key: "no", direction: "desc", ariaLabel: releaseSortOptionAriaLabel("no", "desc") },
  { value: "kind:asc", label: "종류순", key: "kind", direction: "asc", ariaLabel: releaseSortOptionAriaLabel("kind", "asc") },
  { value: "price:asc", label: "가격순 ↑", key: "price", direction: "asc", ariaLabel: releaseSortOptionAriaLabel("price", "asc") },
  { value: "price:desc", label: "가격순 ↓", key: "price", direction: "desc", ariaLabel: releaseSortOptionAriaLabel("price", "desc") }
];
const releaseMobileSortOptionValue = sort => sort?.key === "kind" ? "kind:asc" : `${sort?.key || "release"}:${sort?.direction === "desc" ? "desc" : "asc"}`;
const activeReleaseMobileSortOption = () =>
  releaseMobileSortOptions.find(option => option.value === releaseMobileSortOptionValue(activeReleaseSort)) || releaseMobileSortOptions[0];
const releaseSortFromOptionValue = value =>
  releaseMobileSortOptions.find(option => option.value === value) || releaseMobileSortOptions[0];
const releaseTableSearchText = (item, region = activeReleaseRegion) => {
  const release = productRelease(item, region);
  const releaseDate = release.releaseDate || release.release;
  return [
    release.no || "",
    release.name || item.name || "",
    release.sale || "",
    release.kind || "",
    releaseDate,
    releaseDateLabel(releaseDate),
    release.price,
    priceLabel(release.price, region)
  ].join(" ");
};
const releaseTableInitialSearchText = (item, region = activeReleaseRegion) => {
  const release = productRelease(item, region);
  return [release.name || item.name || "", item.name || ""].filter(Boolean).join(" ");
};
const releaseSortTieBreak = (a, b, region = activeReleaseRegion) => {
  const serialDiff = productSerialNumber(a, region) - productSerialNumber(b, region);
  if (serialDiff) return serialDiff;
  const releaseA = productRelease(a, region);
  const releaseB = productRelease(b, region);
  return (releaseA.no || a.no || "").localeCompare(releaseB.no || b.no || "", "ko", { numeric: true });
};
const releaseDateNameTieBreak = (a, b, releaseA, releaseB) => {
  const dateDiff = releaseDateSortValue(releaseA.releaseDate || releaseA.release) - releaseDateSortValue(releaseB.releaseDate || releaseB.release);
  if (dateDiff) return dateDiff;
  const nameDiff = (releaseA.name || a.name || "").localeCompare(releaseB.name || b.name || "", "ko", { numeric: true });
  if (nameDiff) return nameDiff;
  return a.id.localeCompare(b.id, "ko", { numeric: true });
};
const compareReleaseTableItemsAsc = (a, b, key = activeReleaseSort.key, region = activeReleaseRegion) => {
  const releaseA = productRelease(a, region);
  const releaseB = productRelease(b, region);
  if (key === "no") {
    const noA = releaseA.no || "";
    const noB = releaseB.no || "";
    if (!noA && noB) return 1;
    if (noA && !noB) return -1;
    if (!noA && !noB) return releaseDateNameTieBreak(a, b, releaseA, releaseB);
    const noDiff = noA.localeCompare(noB, "ko", { numeric: true });
    if (noDiff) return noDiff;
    return releaseDateNameTieBreak(a, b, releaseA, releaseB);
  }
  if (key === "kind") {
    const kindDiff = releaseKindSortValue(releaseA.kind) - releaseKindSortValue(releaseB.kind);
    if (kindDiff) return kindDiff;
    return releaseSortTieBreak(a, b, region);
  }
  if (key === "price") {
    const priceDiff = releasePriceSortValue(releaseA.price) - releasePriceSortValue(releaseB.price);
    if (priceDiff) return priceDiff;
    return releaseSortTieBreak(a, b, region);
  }
  return compareProductReleaseOrder(a, b, region);
};
const visibleReleaseTableItems = (region = activeReleaseRegion, series = activeReleaseSeries) => {
  const query = activeReleaseQuery.trim();
  const sortedItems = productItems
    .slice()
    .filter(item => !item.lineupOnly && item.series === series && productReleasedInRegion(item, region))
    .filter(item => matchesSearchText(releaseTableSearchText(item, region), query, releaseTableInitialSearchText(item, region)))
    .sort((a, b) => compareReleaseTableItemsAsc(a, b, activeReleaseSort.key, region));
  return activeReleaseSort.direction === "desc" ? sortedItems.reverse() : sortedItems;
};
const releaseSortSymbol = key => {
  if (activeReleaseSort.key !== key) return "\u2195";
  return activeReleaseSort.direction === "asc" ? "\u2191" : "\u2193";
};
const releaseSortButtonAriaLabel = (key, active, direction) => {
  const columnName = releaseSortAccessibleColumns[key] || releaseSortableColumns[key] || key;
  const nextDirection = active && direction === "asc" ? "내림차순" : "오름차순";
  if (!active) return `${columnName}: 정렬 안 됨. ${nextDirection}으로 정렬`;
  return `${columnName}: 현재 ${releaseSortDirectionLabel(direction)} 정렬됨. ${nextDirection}으로 변경`;
};
const releaseSortHeader = (key, label) => {
  const active = activeReleaseSort.key === key;
  const direction = active ? activeReleaseSort.direction : "none";
  return `<th aria-sort="${direction === "asc" ? "ascending" : direction === "desc" ? "descending" : "none"}">
    <button class="release-sort-button" type="button" data-release-sort="${key}" aria-label="${escapeAttributeValue(releaseSortButtonAriaLabel(key, active, direction))}">
      <span class="release-sort-label">${label}</span><span class="release-sort-mark" aria-hidden="true">${releaseSortSymbol(key)}</span>
    </button>
  </th>`;
};
const releaseTableHead = () => `<thead>
  <tr>
    ${releaseSortHeader("no", releaseSortableColumns.no)}
    <th>제품명</th>
    ${releaseSortHeader("kind", releaseSortableColumns.kind)}
    ${releaseSortHeader("release", releaseSortableColumns.release)}
    ${releaseSortHeader("price", releaseSortableColumns.price)}
  </tr>
</thead>`;
const productReleaseTableRows = (region = activeReleaseRegion, series = activeReleaseSeries) => {
  const rows = visibleReleaseTableItems(region, series).map(item => {
    const release = productRelease(item, region);
    const releaseDate = release.releaseDate || release.release;
    return `<tr class="table-list-row release-product-row" role="button" tabindex="0" data-product-id="${item.id}" data-release-region="${region}">
    <td>${release.no || ""}</td>
    <td><span class="release-product-link">${release.name || item.name}</span></td>
    <td>${release.kind || ""}</td>
    <td>${responsiveDateSpans("release-date-full", "release-date-compact", releaseDateLabel(releaseDate), releaseDateCompactLabel(releaseDate))}</td>
    <td>${priceLabel(release.price, region)}</td>
  </tr>`;
  }).join("");
  return rows || `<tr class="table-list-empty-row release-empty-row"><td colspan="5">검색 결과가 없습니다.</td></tr>`;
};
const releaseTableMarkup = (region = activeReleaseRegion, series = activeReleaseSeries) => tableListTableMarkup({
  scrollClass: "release-table-scroll",
  tableClass: "release-table",
  head: releaseTableHead(),
  body: productReleaseTableRows(region, series)
});
const releaseMobileSortDropdownMarkup = () => {
  const activeOption = activeReleaseMobileSortOption();
  return sortDropdownMarkup({
    className: "release-mobile-sort-dropdown",
    label: "발매목록 정렬",
    value: activeOption.value,
    options: releaseMobileSortOptions,
    dataAttr: "data-release-sort-option"
  });
};
const releaseMetaRowMarkup = (region = activeReleaseRegion, series = activeReleaseSeries) => {
  const visibleCount = visibleReleaseTableItems(region, series).length;
  return `<div class="table-list-meta-row catalog-query-row release-mobile-sort-row" data-release-meta-row>
    <div class="table-list-meta-primary">
      <p class="result-count release-query-count"><b>${visibleCount}</b>개 항목</p>
    </div>
    <div class="catalog-query-actions">
      ${releaseMobileSortDropdownMarkup()}
    </div>
  </div>`;
};
const rememberReleaseModalContext = () => rememberModalContext("category-release", "toy-release", {
  region: activeReleaseRegion,
  series: activeReleaseSeries,
  releaseSort: activeReleaseSort,
  releaseQuery: activeReleaseQuery
});
const releasePageRoot = () => document.querySelector("[data-release-page-content]");
const releasePageContentRoot = root =>
  root?.matches?.("[data-release-page-content]") ? root : root?.closest?.("[data-release-page-content]") || releasePageRoot() || document;
const releaseTableController = new TableListController({
  root: releasePageRoot,
  contentRoot: releasePageContentRoot,
  pageMarkup: () => tableListPageMarkup({
    className: "release-list-page",
    controlsMarkup: releaseControls(),
    metaMarkup: releaseMetaRowMarkup(activeReleaseRegion, activeReleaseSeries),
    tableMarkup: releaseTableMarkup(activeReleaseRegion, activeReleaseSeries)
  }),
  tableMarkup: () => releaseTableMarkup(activeReleaseRegion, activeReleaseSeries),
  renderMeta: root => {
    const releaseMetaRow = root.querySelector("[data-release-meta-row]");
    if (releaseMetaRow) releaseMetaRow.outerHTML = releaseMetaRowMarkup(activeReleaseRegion, activeReleaseSeries);
  },
  bindTable: (section, root) => {
    bindProductReleaseTableRows(section);
    bindReleaseSortControls(root);
  },
  bind: (contentRoot, controller) => {
    bindProductReleaseTableRows(contentRoot);
    bindReleaseSortControls(contentRoot);
    contentRoot.querySelectorAll("button[data-release-region]").forEach(button => button.addEventListener("click", event => {
      activeReleaseRegion = event.currentTarget.dataset.releaseRegion;
      activeReleaseSeries = releaseSeriesForRegion(activeReleaseSeries, activeReleaseRegion);
      openCategoryReleaseDetail({ region: activeReleaseRegion, series: activeReleaseSeries });
    }));
    contentRoot.querySelectorAll("button[data-release-series]").forEach(button => button.addEventListener("click", event => {
      setDropdownOption(event.currentTarget);
      activeReleaseSeries = event.currentTarget.dataset.releaseSeries;
      openCategoryReleaseDetail({ region: activeReleaseRegion, series: activeReleaseSeries });
    }));
    const releaseSearch = contentRoot.querySelector("#releaseSearchInput");
    bindSearchInput(releaseSearch, ".release-search-box", { onInput: searchInput => {
      activeReleaseQuery = searchInput.value.trim();
      rememberReleaseModalContext();
      controller.renderTable(contentRoot);
    } });
  }
});

function renderProductReleaseTable(contentRoot = document) {
  releaseTableController.renderTable(contentRoot);
}

function bindProductReleaseTableRows(tableRoot = document) {
  bindActionRows(tableRoot, ".release-product-row[data-product-id]", releaseRow => {
    const region = releaseRegionLabels[releaseRow.dataset.releaseRegion] ? releaseRow.dataset.releaseRegion : activeReleaseRegion;
    queueModalTransition("list");
    openProductEntry(releaseRow.dataset.productId, { backRelease: true, region });
  });
  tableRoot.querySelectorAll("button[data-release-sort]").forEach(button => button.addEventListener("click", event => {
    event.preventDefault();
    const key = event.currentTarget.dataset.releaseSort;
    if (!releaseSortableColumns[key]) return;
    activeReleaseSort = activeReleaseSort.key === key
      ? { key, direction: activeReleaseSort.direction === "asc" ? "desc" : "asc" }
      : { key, direction: "asc" };
    rememberReleaseModalContext();
    renderProductReleaseTable(tableRoot.closest?.("[data-release-page-content]") || releasePageRoot() || document);
  }));
}
function bindReleaseSortControls(root = document) {
  root.querySelectorAll("button[data-release-sort-option]").forEach(button => button.addEventListener("click", event => {
    event.preventDefault();
    const option = releaseSortFromOptionValue(event.currentTarget.dataset.releaseSortOption);
    activeReleaseSort = { key: option.key, direction: option.direction };
    setDropdownOption(event.currentTarget);
    rememberReleaseModalContext();
    renderProductReleaseTable(root);
  }));
}

function renderReleasePage() {
  releaseTableController.renderPage();
}

function bindProductReleaseTable(contentRoot = document) {
  releaseTableController.bind(contentRoot);
}

function openCategoryReleaseDetail(options = {}) {
  if (routeIfNeeded({ type: "category-release", options }, options)) return;
  const preserveSearch = options.preserveSearch === true;
  if (options.region && releaseRegionLabels[options.region]) activeReleaseRegion = options.region;
  if (options.series && releaseSeriesLabels[options.series]) activeReleaseSeries = options.series;
  if (!releaseSeriesLabels[activeReleaseSeries]) activeReleaseSeries = defaultReleaseSeries(activeReleaseRegion);
  if (options.releaseSort?.key && releaseSortableColumns[options.releaseSort.key]) {
    activeReleaseSort = { key: options.releaseSort.key, direction: options.releaseSort.direction === "desc" ? "desc" : "asc" };
  }
  if (typeof options.releaseQuery === "string") activeReleaseQuery = options.releaseQuery;
  cleanupModelViewer();
  activatePrimarySection("release", { preserveSearch });
  renderReleasePage();
  rememberReleaseModalContext();
}
