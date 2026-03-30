import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class PIMPage extends BasePage {
  private configurationDropdown = this.page.locator('li').filter({ hasText: 'Configuration' }).locator('i');

  constructor(page: Page) {
    super(page);
  }

  async navigateToPIM() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPimModule');
    await this.page.waitForLoadState();
  }

  async verifyConfigurationDropdown() {
    await this.configurationDropdown.click();
    const items = ['Optional Fields', 'Custom Fields', 'Data Import', 'Reporting Methods', 'Termination Reasons'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }
}