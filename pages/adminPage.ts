import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class AdminPage extends BasePage {
  private userManagementDropdown = this.page.locator('li').filter({ hasText: 'User Management' }).locator('i');
  private jobDropdown = this.page.locator('li').filter({ hasText: 'Job' }).locator('i');
  private organizationDropdown = this.page.locator('li').filter({ hasText: 'Organization' }).locator('i');
  private qualificationsDropdown = this.page.locator('li').filter({ hasText: 'Qualifications' }).locator('i');

  constructor(page: Page) {
    super(page);
  }

  async navigateToAdmin() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewAdminModule');
    await this.page.waitForLoadState();
  }

  async verifyUserManagementDropdown() {
    await this.userManagementDropdown.click();
    await expect(this.page.locator('a').filter({ hasText: 'Users' })).toBeVisible();
  }

  async verifyJobDropdown() {
    await this.jobDropdown.click();
    const items = ['Job Titles', 'Pay Grades', 'Employment Status', 'Job Categories', 'Work Shifts'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }

  async verifyOrganizationDropdown() {
    await this.organizationDropdown.click();
    const items = ['General Information', 'Locations', 'Structure'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }

  async verifyQualificationsDropdown() {
    await this.qualificationsDropdown.click();
    const items = ['Skills', 'Education', 'Licenses', 'Languages', 'Memberships'];
    for (const item of items) {
      await expect(this.page.locator('a').filter({ hasText: item })).toBeVisible();
    }
  }
}