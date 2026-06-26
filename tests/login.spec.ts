// spec: .ordino/stories/login.story.md
import { test } from '@config/page.config';

test.describe('Swag Labs - Login', () => {

  test.beforeEach(async ({ loginPage }) => {
    await loginPage.step_navigateToLogin();
  });

  // scenario: Happy Path
  test('[AC-1] should redirect to inventory with valid standard user credentials', async ({ loginPage }) => {
    await loginPage.step_submitLogin(process.env.STANDARD_USER!, process.env.STANDARD_PASSWORD!);
    await loginPage.verify_inventoryLoaded();
  });

  // scenario: Login Form Display
  test('[AC-2] should display username, password, and login button', async ({ loginPage }) => {
    await loginPage.verify_loginFormVisible();
  });

  // scenario: Login Form Display
  test('[AC-3] should display accepted usernames hint', async ({ loginPage }) => {
    await loginPage.verify_credentialsHintVisible();
  });

  // scenario: Invalid Credentials
  test('[AC-4] should show mismatch error for unknown credentials', async ({ loginPage }) => {
    await loginPage.step_submitLogin('invalid_user', 'wrong_password');
    await loginPage.verify_mismatchErrorDisplayed();
    await loginPage.verify_staysOnLoginPage();
  });

  // scenario: Wrong Password
  test('[AC-5] should show mismatch error when password is wrong', async ({ loginPage }) => {
    await loginPage.step_submitLogin(process.env.STANDARD_USER!, 'wrong_password');
    await loginPage.verify_mismatchErrorDisplayed();
    await loginPage.verify_staysOnLoginPage();
  });

  // scenario: Locked Out User
  test('[AC-6] should show locked-out error for locked_out_user', async ({ loginPage }) => {
    await loginPage.step_submitLogin(process.env.LOCKED_OUT_USER!, process.env.STANDARD_PASSWORD!);
    await loginPage.verify_lockedOutErrorDisplayed();
    await loginPage.verify_staysOnLoginPage();
  });

  // scenario: Empty Username
  test('[AC-7] should show username-required error when username is empty', async ({ loginPage }) => {
    await loginPage.step_submitLogin('', process.env.STANDARD_PASSWORD!);
    await loginPage.verify_usernameRequiredErrorDisplayed();
    await loginPage.verify_staysOnLoginPage();
  });

  // scenario: Empty Password
  test('[AC-8] should show password-required error when password is empty', async ({ loginPage }) => {
    await loginPage.step_submitLogin(process.env.STANDARD_USER!, '');
    await loginPage.verify_passwordRequiredErrorDisplayed();
    await loginPage.verify_staysOnLoginPage();
  });

  // scenario: Both Fields Empty
  test('[AC-9] should show username-required error when both fields are empty', async ({ loginPage }) => {
    await loginPage.step_submitLogin('', '');
    await loginPage.verify_usernameRequiredErrorDisplayed();
    await loginPage.verify_staysOnLoginPage();
  });

  // scenario: Alternate Valid Users
  test('[AC-10] should redirect to inventory for error_user', async ({ loginPage }) => {
    await loginPage.step_submitLogin(process.env.ERROR_USER!, process.env.STANDARD_PASSWORD!);
    await loginPage.verify_inventoryLoaded();
  });

  // scenario: Alternate Valid Users
  test('[AC-11] should redirect to inventory for problem_user', async ({ loginPage }) => {
    await loginPage.step_submitLogin(process.env.PROBLEM_USER!, process.env.STANDARD_PASSWORD!);
    await loginPage.verify_inventoryLoaded();
  });

  // scenario: Alternate Valid Users
  test('[AC-12] should redirect to inventory for performance_glitch_user', async ({ loginPage }) => {
    await loginPage.step_submitLogin(process.env.PERFORMANCE_GLITCH_USER!, process.env.STANDARD_PASSWORD!);
    await loginPage.verify_inventoryLoaded();
  });

});
