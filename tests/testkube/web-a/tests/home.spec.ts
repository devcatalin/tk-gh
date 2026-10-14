import {expect, test} from '@playwright/test';

test('homepage title is Example Domain', async ({page}) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle('Example Domain');
});
