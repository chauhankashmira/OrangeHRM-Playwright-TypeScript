import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class MyActionsPage extends BasePage {
  private evaluateIcon = this.page.locator('.oxd-icon').filter({ hasText: 'evaluate' }); 
  private cancelButton = this.page.locator('button').filter({ hasText: 'Cancel' });

  constructor(page: Page) {
    super(page);
  }


  async verifySubUnit() {
    await expect(this.page.locator('text=Human Resources')).toBeVisible();
  }


  async verifySelfEvaluationStatus() {
    await expect(this.page.locator('text=Activated')).toBeVisible();
  }

  async verifyReviewStatus() {
    await expect(this.page.locator('text=Activated')).toBeVisible();
  }

  async clickEvaluateIcon() {
    await this.evaluateIcon.click();
  }

  async verifyPerformanceReviewText() {
    await expect(this.page.locator('text=Performance Review')).toBeVisible();
  }

  async verifyReviewSummaryText() {
    await expect(this.page.locator('text=Review Summary')).toBeVisible();
  }

  async verifyReviewStatusActivated() {
    await expect(this.page.locator('text=Activated')).toBeVisible();
  }

  async verifyReviewPeriodAgain() {
    await expect(this.page.locator('text=2022-01-07 - 2022-30-12')).toBeVisible();
  }

  async verifyReviewDueDate() {
    await expect(this.page.locator('text=2022-31-12')).toBeVisible();
  }

  async verifySupervisorEvaluationBy() {
    await expect(this.page.locator('text=Supervisor Evaluation by')).toBeVisible();
  }

  async verifyStatusEvaluationActivated() {
    await expect(this.page.locator('text=Activated')).toBeVisible();
  }

  async clickCancelButton() {
    await this.cancelButton.click();
  }
}