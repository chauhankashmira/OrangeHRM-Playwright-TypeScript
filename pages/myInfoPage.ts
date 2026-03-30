import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class MyInfoPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToMyInfo() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7');
    await this.page.waitForLoadState();
  }

  async verifyTextContains() {
    const texts = ['Personal Details', 'Contact Details', 'Emergency Contacts', 'Dependents', 'Immigration', 'Job', 'Salary', 'Report-to', 'Qualifications', 'Memberships'];
    for (const text of texts) {
      await expect(this.page.locator('.orangehrm-tabs-item').filter({ hasText: text })).toBeVisible();
    }
  }
}