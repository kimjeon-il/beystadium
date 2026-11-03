import assert from 'node:assert/strict';
import test from 'node:test';
import { productItems } from '../data/source/products.mjs';
import { buildRuntimeData } from '../scripts/build-data-index.mjs';
import { addressIdIssues } from '../scripts/address-id.mjs';
import { productIdIssues } from '../scripts/product-id.mjs';
import { resolveProductRelease } from '../src/product-relations-core.js';
import { decodeSearchEntry } from '../src/search-data-decoder.js';

// Supplied names and month precision, including the original spelling and spaces.
const groups = [
  ['2001-09', '스타터', '드래곤S,드랜져S,드래이거S,드래셀S'],
  ['2001-10', '부스터', '메가탑,메칸탑,스파크탑,폴탑'],
  ['2001-10', '세트', '탑블레이드DX세트'],
  ['2001-10', '슈퍼탑블레이드', '슈퍼드래곤S,슈퍼드랜져S'],
  ['2001-10', '기타', '스프링슈터'],
  ['2001-11', '변신탑블레이드', '드래곤 블루,드래곤블랙,드래곤썬더'],
  ['2001-11', '기타', '드래곤슈터,드래이거슈터'],
  ['2001-12', '세트', '어택 드래곤세트,어택 드랜져세트,어택 드래이거세트,어택 드래셀세트'],
  ['2002-01', '스타터', '드래곤F,드랜져F,드래이거F,드래셀F,가르온'],
  ['2002-01', '부스터', '가르즈리,가르만,마스터드래셀'],
  ['2002-02', '스타터', '트라이글,트라이피오'],
  ['2002-02', '부스터', '울보그,시보그,마스터드래곤,마스터드랜져'],
  ['2002-03', '스타터', '울버그2,시보그2'],
  ['2002-03', '세트', '다이나믹 세트'],
  ['2002-04', '기타', '드랜져슈터,드래곤전략 분석기,드랜져 전략분석기'],
  ['2002-08', '스타터', '드래곤V,드랜져V,드래이거V,드래셀V'],
  ['2002-08', '부스터', '블랙레오,메탈드랜져'],
  ['2002-08', '기타', '마그넷스타디움'],
  ['2002-09', '스타터', '사이버드래곤,블랙레오2'],
  ['2002-09', '세트', '마그넷게임세트'],
  ['2002-09', '기타', '마그넷 블록S,마그넷슈터그립'],
  ['2003-01', '', '슈퍼드래곤V,슈퍼드랜져V,슈퍼드래이거V'],
  ['2003-02', '스타터', '드래곤V2,드랜져V2,드래이거V2,드래셀V2'],
  ['2003-02', 'RC탑블레이드', '드래곤V2,드랜져V2,드래이거V2,드래셀V2'],
  ['', '스타터', '드래곤S 크리스탈,드랜져S 크리스탈,드래이거S 크리스탈,드래셀S 크리스탈']
];
const products = productItems.filter(item => item.series === 'topblade');

test('all 68 Korean products preserve supplied names, kinds and month precision', () => {
  assert.equal(products.length, 68);
  const expected = groups.flatMap(([releaseDate, kind, names]) => names.split(',').map(name => ({ name, kind, releaseDate })));
  assert.deepEqual(products.map(item => {
    const r = item.releases.kr;
    return { name: r.name, kind: r.kind || '', releaseDate: r.releaseDate || '' };
  }), expected);
  const counts = {};
  for (const item of products) {
    const kind = item.releases.kr.kind || '';
    counts[kind] = (counts[kind] || 0) + 1;
  }
  assert.deepEqual(counts, { '스타터': 27, '부스터': 13, '세트': 7, '슈퍼탑블레이드': 2, '변신탑블레이드': 3, 'RC탑블레이드': 4, '기타': 9, '': 3 });
});

test('Korean-only products have unique addresses without invented metadata', () => {
  assert.equal(products.length, 68);
  assert.equal(new Set(productItems.map(item => item.id)).size, productItems.length);
  for (const item of products) {
    assert.match(item.id, /^PRODUCT-TOPBLADE-KR-[A-Z0-9]+(?:-[A-Z0-9]+)*$/);
    assert.deepEqual(addressIdIssues('product', item), []);
    assert.deepEqual(productIdIssues(item), []);
    assert.deepEqual(Object.keys(item.releases), ['kr']);
    for (const field of ['no', 'price', 'composition', 'image']) assert.equal(Object.hasOwn(item.releases.kr, field), false);
    assert.equal(resolveProductRelease(item, 'jp').status, 'unreleased');
  }
  const crystals = products.filter(item => item.releases.kr.name.endsWith(' 크리스탈'));
  assert.equal(crystals.length, 4);
  for (const item of crystals) {
    assert.equal(item.releases.kr.sale, '국내 한정판');
    assert.equal(item.releases.kr.releaseDate || '', '');
  }
  assert.ok(products.some(item => item.id === 'PRODUCT-TOPBLADE-KR-DRAGON-V2'));
  assert.ok(products.some(item => item.id === 'PRODUCT-TOPBLADE-KR-RC-DRAGON-V2'));
});

test('Topblade keeps 기타 while other series retain current normalization', () => {
  const fixture = series => ({ series, releases: { kr: { name: '슈터', kind: '기타' } } });
  assert.equal(resolveProductRelease(fixture('topblade'), 'kr').kind, '기타');
  for (const series of ['metal fight', 'burst', 'x']) assert.equal(resolveProductRelease(fixture(series), 'kr').kind, '');
});

test('runtime manifest, compact search and registry include the same 68 products', () => {
  const runtime = buildRuntimeData();
  assert.ok(runtime.chunks.topblade, 'Topblade needs a loadable series chunk');
  assert.equal(runtime.chunks.topblade.productItems.length, 68);
  for (const key of ['beyItems', 'partItems', 'toolsItems']) assert.deepEqual(runtime.chunks.topblade[key], []);
  assert.match(runtime.manifest.chunks.topblade, /series\/topblade\.json\?v=/);
  assert.match(runtime.manifest.searchChunks.topblade, /search\/topblade\.json\?v=/);
  assert.ok(runtime.manifest.availableReleaseSeries.kr.includes('topblade'));
  assert.equal(runtime.manifest.availableReleaseSeries.jp.includes('topblade'), false);
  const registry = new Map(runtime.registry.items);
  const decoded = runtime.searchChunks.topblade.search.map(decodeSearchEntry);
  assert.deepEqual(decoded.map(entry => entry.item.id), products.map(item => item.id));
  for (const entry of decoded) {
    assert.equal(entry.kind, 'product');
    assert.equal(entry.chunk, 'topblade');
    assert.equal(registry.get(entry.item.id), 't');
    assert.equal(entry.item.releases.jp, undefined);
  }
});
