import { test, expect } from '@playwright/test';

test('home page has a non-empty title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/\S/);

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
