import { test } from '@playwright/test';
import { LoginPage } from '../../pages/Login';
import { cb } from '@cloudbeat/playwright';
import { FailureReasonEnum } from '@cloudbeat/types';

test('Example of setting failure reason', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await test.step('Open login page', async () => {
    await loginPage.open();
    await loginPage.assertPageOpen();
  });

  await test.step('Enter invalid credentials', async () => {
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('invalid pass');
  });

  await test.step('Submit login and verify error', async () => {
    await loginPage.pressLoginButton();

    try {
      await loginPage.assertLoginSuccess();
    } catch {
      cb.setFailureReason(FailureReasonEnum.RealDefect);
      throw new Error('test failed');
    }
  });
});

test('Example of setting test attribute and output data', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await test.step('Open login page', async () => {
    await loginPage.open();
    await loginPage.assertPageOpen();
  });

  cb.addTestAttribute('someTestAttributeName', 'test attribute value')
  cb.addOutputData('someOutputDataName', 'output data value');
});

test('Example of intercepting browser console logs', async ({ page }) => {
  page.on('console', (message) => {
    cb.onConsole(message);
  });

  const loginPage = new LoginPage(page);

  await test.step('Open login page', async () => {
    await loginPage.open();
    await loginPage.assertPageOpen();
  });

  await test.step('Enter valid credentials', async () => {
    await loginPage.enterUsername('standard_user');
    await loginPage.enterPassword('secret_sauce');
  });

  await test.step('Submit login and verify success', async () => {
    await loginPage.pressLoginButton();
    await loginPage.assertLoginSuccess();
  });
});
