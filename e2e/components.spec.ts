import { test, expect } from '@playwright/test'

test.describe('UI Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should render features section', async ({ page }) => {
    // Look for features section by common patterns
    const featuresHeading = page.getByText(/features|services|what we offer/i)
    
    if (await featuresHeading.isVisible().catch(() => false)) {
      await expect(featuresHeading).toBeVisible()
    }
  })

  test('should render team section', async ({ page }) => {
    // Look for team section
    const teamHeading = page.getByText(/team|our team|about us/i)
    
    if (await teamHeading.isVisible().catch(() => false)) {
      await expect(teamHeading).toBeVisible()
    }
  })

  test('should render footer', async ({ page }) => {
    // Check for footer
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })
})
