import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  private usernameInput = this.page.locator('input[name="username"]');
  private passwordInput = this.page.locator('input[name="password"]');
  private loginButton = this.page.locator('button[type="submit"]');
  private forgotPasswordLink = this.page.locator('p.oxd-text').filter({ hasText: 'Forgot your password?' });

  constructor(page: Page) {
    super(page);
  }

  async verifyForgotPasswordLink() {
    await expect(this.forgotPasswordLink).toBeVisible();
    await this.forgotPasswordLink.click();
    await expect(this.page).toHaveURL(/requestPasswordResetCode/);
    // Go back to login
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
    await this.page.waitForLoadState('networkidle');
  }

  async loginAsAdmin() {
    await this.login('Admin', 'admin123');
  }
}