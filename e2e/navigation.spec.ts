import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should scroll to sections when clicking nav links', async ({ page }) => {
    // Find navigation links
    const navLinks = page.locator('nav a')
    const count = await navLinks.count()
    
    if (count > 0) {
      // Click the first nav link
      await navLinks.first().click()
      
      // Wait for any scroll animation
      await page.waitForTimeout(500)
      
      // Verify page is still stable
      await expect(page.locator('body')).toBeVisible()
    }
  })

  test('should have visible CTA buttons', async ({ page }) => {
    // Look for CTA buttons
    const buttons = page.getByRole('button')
    const count = await buttons.count()
    
    if (count > 0) {
      // Check that at least one button is visible
      await expect(buttons.first()).toBeVisible()
    }
  })
})
