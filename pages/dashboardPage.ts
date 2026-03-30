import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class DashboardPage extends BasePage {
  private pendingSelfReview = this.page.locator('.oxd-sheet').filter({ hasText: 'Pending Self Review' });

  constructor(page: Page) {
    super(page);
  }

  async navigateToDashboard() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await this.page.waitForLoadState();
  }

  async clickPendingSelfReview() {
    await this.pendingSelfReview.click();
  }
}