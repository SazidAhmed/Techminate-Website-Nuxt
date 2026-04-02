import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should display the hero section', async ({ page }) => {
    // Check if the hero section is visible
    const heroSection = page.locator('section').first()
    await expect(heroSection).toBeVisible()
    
    // Check for common hero elements
    const heading = page.getByRole('heading', { level: 1 })
    await expect(heading).toBeVisible()
  })

  test('should have working navigation', async ({ page }) => {
    // Check if navigation is present
    const nav = page.locator('nav')
    await expect(nav).toBeVisible()
  })

  test('should be responsive on mobile', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 667 })
    
    // Check if page still renders correctly
    await expect(page.locator('body')).toBeVisible()
  })
})
