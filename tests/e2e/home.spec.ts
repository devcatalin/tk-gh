import { test, expect } from '@playwright/test';

test('home page title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Example Domain');
});
