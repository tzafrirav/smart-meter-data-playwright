import { test } from '@playwright/test';
import { LoginPage } from '../../pages/Login';


test.describe('Login', () => {
    test('Standard user login behaviour', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.assertPageOpen();
        await loginPage.enterUsername('standard_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.pressLoginButton();
        await loginPage.assertLoginSuccess();
    });

    test('Locked out user login behaviour', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.assertPageOpen();
        await loginPage.enterUsername('locked_out_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.pressLoginButton();
        await loginPage.assertLoginErrorMessage('Epic sadface: Sorry, this user has been locked out.');
    });

    test('Invalid user login behaviour', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.open();
        await loginPage.assertPageOpen();
        await loginPage.enterUsername('invalid_user');
        await loginPage.enterPassword('invalid_password');
        await loginPage.pressLoginButton();
        await loginPage.assertLoginErrorMessage('Epic sadface: Username and password do not match any user in this service');
    });
});
