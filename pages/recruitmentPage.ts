import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class RecruitmentPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToRecruitment() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewRecruitmentModule');
    await this.page.waitForLoadState();
  }

  async verifyTextContainsCandidatesVacancies() {
    await expect(this.page.locator('h6').filter({ hasText: 'Vacancies' })).toBeVisible();
  }


}