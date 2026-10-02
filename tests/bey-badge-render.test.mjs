import assert from 'node:assert/strict';
import { registerHooks } from 'node:module';
import { readFileSync } from 'node:fs';
import test from 'node:test';
const imports = JSON.parse(readFileSync(new URL('../index.html', import.meta.url), 'utf8').match(/<script\s+type="importmap">([\s\S]*?)<\/script>/)[1]).imports;
registerHooks({ resolve(specifier, context, nextResolve) {
  return nextResolve(imports[specifier] ? new URL(`../${imports[specifier].split('?')[0]}`, import.meta.url).href : specifier, context);
}});
const { beyDetailSections } = await import('../src/detail-view.js');
const { catalogCoreItemsById } = await import('../src/data-store.js');
const { registerAppServices } = await import('../src/app-services.js');
registerAppServices({ itemDisplayName: item => item.name });

test('part badges expose full localized bit name without role or arrow columns', () => {
  catalogCoreItemsById.set('PART-X-BIT-F', { id: 'PART-X-BIT-F', series: 'x', type: 'bit', name: 'F', sub: '플랫' });
  const html = beyDetailSections({id: 'TEST', type: 'bey', series: 'x', parts: ['PART-X-BIT-F']}, 'kr');
  assert.match(html, />부품</);
  assert.match(html, /bey-relation-badge/);
  assert.match(html, />플랫</);
  assert.doesNotMatch(html, /<b>|>비트</);
});

test('bey badges render product number, fallback name and family-level fictional users', async () => {
  const { animeInfo, productItems } = await import('../src/data-store.js');
  const bey = { id: 'SWORD', type: 'bey', series: 'x', parts: ['SWORD-BLADE'] };
  catalogCoreItemsById.set('SWORD-BLADE', { id: 'SWORD-BLADE', series: 'x', type: 'blade', name: '드랜소드' });
  productItems.push({ id: 'RANDOM', lineupPool: ['SWORD'], releases: {
    kr: { no: 'BX-99', composition: [{ name: '무작위 베이', target: 'SWORD' }] },
    jp: { name: '상품 <이름>' }
  } });
  animeInfo.characters = [{ id: 'CHARACTER-X-TEST', name: '구이수', season: 'beyblade-x', beys: ['드랜소드'] }];
  const html = beyDetailSections(bey, 'kr');
  assert.match(html, />포함 제품</);
  assert.match(html, />사용자</);
  assert.match(html, />BX-99 상품 &lt;이름&gt; \(랜덤\)</);
  assert.match(html, /무작위 구성 후보/);
  assert.match(html, /작품 속 모델 사용자/);
  assert.match(html, /href="#CHARACTER-X-TEST"/);
  assert.doesNotMatch(html, /<strong>|<b>/);
  productItems.length = 0;
  animeInfo.characters = [];
});

test('records without mapped relations do not show empty sections or invent links', () => {
  const html = beyDetailSections({ id: 'UNKNOWN', type: 'bey', series: 'x', parts: ['MISSING'] }, 'kr');
  assert.equal(html, '');
});

test('all abbreviated part categories use their existing localized modal title in Bey badges', async () => {
  const { partItems } = await import('../data/source/catalog.mjs');
  const { partDetailDisplayName } = await import('../src/part-name-core.js');
  const originalNames = partItems.map(part => part.name);
  const codedTypes = new Set(['track', 'bottom', '4dbottom', 'disk', 'coredisk', 'frame', 'dbdisk', 'dbarmor', 'driver', 'bit', 'superkingchassis']);
  const codedRoles = new Set(['assistBlade', 'overBlade']);
  const changedCategories = new Set();
  for (const part of partItems) {
    catalogCoreItemsById.set(part.id, part);
    const coded = codedTypes.has(part.type) || (part.series === 'x' && codedRoles.has(part.xBladeRole));
    const numericTrack = part.type === 'track' && /^\d+$/.test(part.name);
    for (const region of ['kr', 'jp']) {
      const fullName = region === 'jp' && part.jpName ? part.jpName : coded && !numericTrack ? part.sub : part.name;
      assert.equal(partDetailDisplayName(part, region), fullName, `${part.id}: existing modal title must not change`);
      const escaped = String(fullName).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
      const html = beyDetailSections({ id: 'TEST', type: 'bey', series: part.series, parts: [part.id] }, region);
      assert.ok(html.includes(`>${escaped}</a>`), `${part.id} (${region}): badge must use existing modal title ${fullName}`);
      if (fullName !== part.name) changedCategories.add(part.xBladeRole || part.type);
    }
  }
  assert.deepEqual(partItems.map(part => part.name), originalNames);
  for (const category of [...codedTypes, ...codedRoles]) assert.ok(changedCategories.has(category), `Full-name coverage missing ${category}`);
});
