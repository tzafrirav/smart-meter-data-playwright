const { test } = require('@playwright/test');
const LoginFlow = require('../flows/loginFlow');
const  HomePageGoldcardFlow  = require('../flows/homePageGoldcardFlow');
const { homePageGoldcard } = require('../pages/goldcard/homePage');

test('Download Goldcard file', async ({ page }) => {
  const loginFlow = new LoginFlow(page);
  const homePageGoldcardFlow = new HomePageGoldcardFlow(page);


  // כניסה לחשבון
  await loginFlow.openGoldcardLoginPage();
  await loginFlow.goldcardLogin();

  // ניסיון ראשון להוריד את הקובץ
  await homePageGoldcardFlow.exportMeterDataFile();

  // ... ההמשך כמו שהיה

  console.log('waiting')
  await page.waitForTimeout(10*1000);
  console.log('end')
});