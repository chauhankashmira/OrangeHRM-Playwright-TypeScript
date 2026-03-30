import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LeavePage extends BasePage {
  private entitlementsDropdown = this.page.locator('li').filter({ hasText: 'Entitlements' }).locator('i');
  private reportsDropdown = this.page.locator('li').filter({ hasText: 'Reports' }).locator('i');
  private configureDropdown = this.page.locator('li').filter({ hasText: 'Configure' }).locator('i');

  constructor(page: Page) {
    super(page);
  }

  async navigateToLeave() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveModule');
    await this.page.waitForLoadState();
  }

  async verifyEntitlementsDropdown() {
    await this.entitlementsDropdown.click();
    const items = ['Add Entitlements', 'Employee Entitlements', 'My Entitlements'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }


  async verifyConfigureDropdown() {
    await this.configureDropdown.click();
    const items = ['Leave Period', 'Leave Types', 'Work Week', 'Holidays'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }
}