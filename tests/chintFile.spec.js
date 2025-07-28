const {test} = require ('@playwright/test');
const LoginFlow = require('../flows/loginFlow')
const HomePageChintFlow = require('../flows/homePageChintFlow')


test('Download chint file',{ timeout: 180000 }, async ({ page }) => {
  const loginFlow = new LoginFlow(page);
  const homePageChintFlow = new HomePageChintFlow(page);


  // כניסה לחשבון
  await loginFlow.openChintLoginPage();
  await loginFlow.chintLogin();

  // ניסיון ראשון להוריד את הקובץ
  await homePageChintFlow.exportMeterDataFile();

  // ... ההמשך כמו שהיה

  console.log('waiting')
  await page.waitForTimeout(10*1000);
  console.log('end')
});