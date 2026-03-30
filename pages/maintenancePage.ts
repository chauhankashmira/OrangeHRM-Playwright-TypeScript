import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class MaintenancePage extends BasePage {
  private purgeRecordsDropdown = this.page.locator('li').filter({ hasText: 'Purge Records' }).locator('i');

  constructor(page: Page) {
    super(page);
  }

  async navigateToMaintenance() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/viewMaintenanceModule');
    await this.page.waitForLoadState();
  }


}