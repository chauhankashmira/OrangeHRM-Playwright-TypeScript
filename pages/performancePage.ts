import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class PerformancePage extends BasePage {
  private configureDropdown = this.page.locator('li').filter({ hasText: 'Configure' }).locator('i');
  private manageReviewsDropdown = this.page.locator('li').filter({ hasText: 'Manage Reviews' }).locator('i');

  constructor(page: Page) {
    super(page);
  }

  async navigateToPerformance() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewPerformanceModule');
    await this.page.waitForLoadState();
  }


  async verifyManageReviewsDropdown() {
    await this.manageReviewsDropdown.click();
    const items = ['Manage Reviews', 'My Reviews', 'Employee Reviews'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }
}