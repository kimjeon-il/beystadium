import { test, expect } from '@playwright/test';
import { consoleErrors } from './helpers/ui-assertions.mjs';

const rows = page => page.locator('.release-product-row');
const openTopblade = async page => {
  await page.goto('/#toy-release');
  await expect(rows(page).first()).toBeVisible();
  await page.locator('.release-region-tabs [data-release-region=kr]').click();
  await page.locator('.release-list-page .table-list-dropdown summary').click();
  await page.locator('[data-release-series=topblade]').click();
  await expect(rows(page)).toHaveCount(68);
};

test('Korean Topblade selection lists all supplied products including unknown kinds and dates', async ({ page }) => {
  const errors = consoleErrors(page);
  await openTopblade(page);
  const search = page.locator('#releaseSearchInput');
  await search.fill('기타');
  await expect(rows(page)).toHaveCount(9);
  await expect(rows(page).first().locator('td').nth(2)).toHaveText('기타');
  await search.fill('슈퍼');
  await expect(rows(page)).toHaveCount(5);
  await search.fill('슈퍼드래곤V');
  await expect(rows(page)).toHaveCount(1);
  await expect(rows(page).first().locator('td').nth(2)).toHaveText('');
  await expect(rows(page).first().locator('.release-date-full')).toHaveText('2003년 1월');
  await search.fill('크리스탈');
  await expect(rows(page)).toHaveCount(4);
  await expect(rows(page).locator('.release-date-full')).toHaveText(['', '', '', '']);
  await expect(rows(page).first().locator('td').nth(2)).toHaveText('스타터');
  await expect(rows(page).first().locator('td').nth(4)).toHaveText('');
  await search.fill('국내 한정판');
  await expect(rows(page)).toHaveCount(4);
  expect(errors).toEqual([]);
});

test('Topblade release sorting, distinct RC details and direct reload work on both layouts', async ({ page }, testInfo) => {
  const errors = consoleErrors(page);
  await openTopblade(page);
  for (const direction of ['asc', 'desc']) {
    if (testInfo.project.name === 'mobile') {
      await page.locator('.release-mobile-sort-dropdown summary').click();
      await page.locator('[data-release-sort-option=' + JSON.stringify('release:' + direction) + ']').click();
    } else {
      const sort = page.locator('[data-release-sort=release]');
      if (await sort.locator('..').getAttribute('aria-sort') !== (direction === 'asc' ? 'ascending' : 'descending')) await sort.click();
    }
    const dates = rows(page).locator('.release-date-full');
    await expect(dates.first()).toHaveText(direction === 'asc' ? '2001년 9월' : '');
    await expect(dates.last()).toHaveText(direction === 'asc' ? '' : '2001년 9월');
  }
  await page.locator('#releaseSearchInput').fill('드래곤V2');
  await expect(page.getByRole('button', { name: '드래곤V2', exact: true })).toHaveCount(2);
  const id = 'PRODUCT-TOPBLADE-KR-RC-DRAGON-V2';
  await page.locator('.release-product-row[data-product-id=' + id + '] .release-product-link').click();
  await expect(page).toHaveURL(new RegExp('#' + id + '(?:\\?|$)'));
  await expect(page.locator('#detailModal .product-modal-name')).toHaveText('드래곤V2');
  await expect(page.locator('#detailModal')).toHaveAttribute('data-detail-id', id);
  await page.reload();
  await expect(page.locator('#detailModal .product-modal-name')).toHaveText('드래곤V2');
  await expect(page.locator('#detailModal')).toHaveAttribute('data-detail-id', id);
  expect(errors).toEqual([]);
});

test('compact product search includes Topblade and Japanese release lists exclude Korean-only products', async ({ page }) => {
  const errors = consoleErrors(page);
  await page.goto('/#search?q=' + encodeURIComponent('크리스탈') + '&scope=product');
  const results = page.locator('.search-result-item');
  await expect(results).toHaveCount(4);
  await results.filter({ hasText: '드래곤S 크리스탈' }).click();
  await expect(page.locator('#detailModal .product-modal-name')).toHaveText('드래곤S 크리스탈');
  await page.reload();
  await expect(page.locator('#detailModal .product-modal-name')).toHaveText('드래곤S 크리스탈');
  await openTopblade(page);
  await page.locator('.release-region-tabs [data-release-region=jp]').click();
  await expect(rows(page).first()).toBeVisible();
  await expect(page.locator('.release-product-row[data-product-id^=PRODUCT-TOPBLADE-]')).toHaveCount(0);
  expect(errors).toEqual([]);
});
