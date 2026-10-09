import { expect, test } from '@playwright/test';

test('example.com shows the Example Domain heading', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByRole('heading', { name: 'Example Domain' })).toBeVisible();
});
