import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');

    // Check for main heading
    await expect(page.locator('h1')).toBeVisible();

    // Check for navigation
    await expect(page.locator('nav')).toBeVisible();

    // Check for footer
    await expect(page.locator('footer')).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    // Click on Services link
    await page.click('text=Services');
    await expect(page).toHaveURL(/.*services/);
  });

  test('should display hire helper CTA', async ({ page }) => {
    await page.goto('/');

    const ctaButton = page.locator('text=Hire a Helper');
    await expect(ctaButton.first()).toBeVisible();
  });
});
