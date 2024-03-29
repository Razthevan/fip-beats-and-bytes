import { test, expect } from '@playwright/test';

test('It tests the basic functionality', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page.getByRole('heading', { name: 'What\'s playing?' })).toBeVisible();
  await expect(page.getByLabel('FIP Jazz,')).toBeVisible();
  await expect(page.getByLabel('FIP Jazz,').locator('span')).toContainText('FIP Jazz,');
  await page.getByLabel('FIP Jazz,').click();
  await page.getByLabel('FIP Groove', { exact: true }).click();
  await expect(page.getByLabel('FIP Groove,').locator('span')).toContainText('FIP Groove,');
  await page.getByText('Software Engineer').click();
  await expect(page.getByText('Sharing my current FIP Radio')).toContainText('groove and a bit about myself.');
  // Note: I know this test does not do a lot. Testing Playwright, bear with me 😬. 
});
