import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DirectoryPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToDirectory() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
    await this.page.waitForLoadState();
  }

  async verifyTextContains() {
    await expect(this.page.locator('label').filter({ hasText: 'Employee Name' })).toBeVisible();
    await expect(this.page.locator('label').filter({ hasText: 'Job Title' })).toBeVisible();
    await expect(this.page.locator('label').filter({ hasText: 'Location' })).toBeVisible();
  }
}