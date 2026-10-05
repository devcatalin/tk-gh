import {expect, test} from '@playwright/test';

test('Example Domain heading is exact', async ({page}) => {
  await page.goto('https://example.com');
  await expect(page.getByRole('heading', {name: 'Example Domain'})).toHaveText('Example Domain');
});
