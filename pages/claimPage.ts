import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class ClaimPage extends BasePage {
  private configurationDropdown = this.page.locator('li').filter({ hasText: 'Configuration' }).locator('i');

  constructor(page: Page) {
    super(page);
  }

  async navigateToClaim() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewClaimModule');
    await this.page.waitForLoadState();
  }

  async verifyConfigurationDropdown() {
    await this.configurationDropdown.click();
    const items = ['Events', 'Expense Types'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }

}