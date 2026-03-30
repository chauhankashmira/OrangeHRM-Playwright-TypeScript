import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class TimePage extends BasePage {
  private timesheetsDropdown = this.page.locator('li').filter({ hasText: 'Timesheets' }).locator('i');
  private attendanceDropdown = this.page.locator('li').filter({ hasText: 'Attendance' }).locator('i');
  private reportsDropdown = this.page.locator('li').filter({ hasText: 'Reports' }).locator('i');
  private projectInfoDropdown = this.page.locator('li').filter({ hasText: 'Project Info' }).locator('i');

  constructor(page: Page) {
    super(page);
  }

  async navigateToTime() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewTimeModule');
    await this.page.waitForLoadState();
  }

  async verifyTimesheetsDropdown() {
    await this.timesheetsDropdown.click();
    const items = ['My Timesheets', 'Employee Timesheets'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }

  async verifyAttendanceDropdown() {
    await this.attendanceDropdown.click();
    const items = ['My Records', 'Punch In/Out', 'Employee Records', 'Configuration'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }

  async verifyReportsDropdown() {
    await this.reportsDropdown.click();
    const items = ['Project Reports', 'Employee Reports', 'Attendance Summary'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }

  async verifyProjectInfoDropdown() {
    await this.projectInfoDropdown.click();
    const items = ['Customers', 'Projects'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }
}