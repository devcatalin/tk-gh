import { test, expect } from '@playwright/test';

test('about page basics', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/\S/);

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
