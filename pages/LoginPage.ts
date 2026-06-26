// AUTO-GENERATED — edit this file directly; use ordino_generate_code create/register_page for structural changes
import { BasePage } from './BasePage';
import { expect } from '@playwright/test';
import { loginExpected } from '@config/page-loader';


export class LoginPage extends BasePage {
  readonly path = '/';

  // ── Locators ──────────────────────────────────────────────────────────
  // locator-helper: testid
  private usernameInput = this.page.getByTestId('username');
  // locator-helper: testid
  private passwordInput = this.page.getByTestId('password');
  // locator-helper: testid
  private loginButtonInput = this.page.getByTestId('login-button');
  // locator-helper: testid
  private errorDiv = this.page.getByTestId('error');
  // locator-helper: testid
  private loginCredentialsDiv = this.page.getByTestId('login-credentials');
  // locator-helper: testid
  private titleDiv = this.page.getByTestId('title');

  // ── Steps ──────────────────────────────────────────────────────────────
  /**
   * Open the login page.
   * @returns this for chaining
   */
  async step_navigateToLogin(): Promise<this> {
    await this.page.goto(this.path);
    await this.waitForPageLoad();
    return this;
  }

  /**
   * Fill credentials and submit.
   * @param username - Username (string)
   * @param password - Password (string)
   * @returns this for chaining
   */
  async step_submitLogin(username: string, password: string): Promise<this> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButtonInput.click();
    return this;
  }

  // ── Verifies ───────────────────────────────────────────────────────────
  /**
   * Login form controls are visible.
   * @returns this for chaining
   */
  async verify_loginFormVisible(): Promise<this> {
    await expect(this.usernameInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.loginButtonInput).toBeVisible();
    return this;
  }

  /**
   * Accepted usernames hint is shown.
   * @returns this for chaining
   */
  async verify_credentialsHintVisible(): Promise<this> {
    await expect(this.loginCredentialsDiv).toBeVisible();
    await expect(this.loginCredentialsDiv).toContainText(loginExpected.credentialsHint);
    return this;
  }

  /**
   * Shows mismatch error.
   * @returns this for chaining
   */
  async verify_mismatchErrorDisplayed(): Promise<this> {
    await expect(this.errorDiv).toBeVisible();
    await expect(this.errorDiv).toHaveText(loginExpected.errors.mismatch);
    return this;
  }

  /**
   * Shows lockedOut error.
   * @returns this for chaining
   */
  async verify_lockedOutErrorDisplayed(): Promise<this> {
    await expect(this.errorDiv).toBeVisible();
    await expect(this.errorDiv).toHaveText(loginExpected.errors.lockedOut);
    return this;
  }

  /**
   * Shows usernameRequired error.
   * @returns this for chaining
   */
  async verify_usernameRequiredErrorDisplayed(): Promise<this> {
    await expect(this.errorDiv).toBeVisible();
    await expect(this.errorDiv).toHaveText(loginExpected.errors.usernameRequired);
    return this;
  }

  /**
   * Shows passwordRequired error.
   * @returns this for chaining
   */
  async verify_passwordRequiredErrorDisplayed(): Promise<this> {
    await expect(this.errorDiv).toBeVisible();
    await expect(this.errorDiv).toHaveText(loginExpected.errors.passwordRequired);
    return this;
  }

  /**
   * Inventory page loaded after login.
   * @returns this for chaining
   */
  async verify_inventoryLoaded(): Promise<this> {
    await expect(this.page).toHaveURL(loginExpected.inventoryUrl);
    await expect(this.titleDiv).toHaveText(loginExpected.inventoryTitle);
    return this;
  }

  /**
   * User remains on login page.
   * @returns this for chaining
   */
  async verify_staysOnLoginPage(): Promise<this> {
    await expect(this.page).toHaveURL(loginExpected.loginUrl);
    return this;
  }
}
