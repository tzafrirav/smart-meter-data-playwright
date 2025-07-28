const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/goldcard/loginPage');
const {LoginPageChint} = require('../pages/chint/loginpage');
const goldcardData = require('../Data/goldcardData.json');
const chintData = require('../Data/chintData.json');

class LoginFlow {
    constructor(page) {
        this.page = page;
        this.loginGoldcard = new LoginPage(page);
        this.loginChint = new LoginPageChint(page);
    }

    async openGoldcardLoginPage() {
        console.log('✅ Opening Goldcard website');
        await this.page.goto(goldcardData.goldcardUrl);
    }

    async openChintLoginPage() {
        console.log('✅ Opening Chint website');
        await this.page.goto(chintData.chintUrl);
    }

    async goldcardLogin() {
        console.log('🔐 Logging in to Goldcard');
        await this.loginGoldcard.setUsername(goldcardData.username);
        await this.loginGoldcard.setPassword(goldcardData.password);
        await this.loginGoldcard.clickOnSignInButton();
    }

    async chintLogin() {
        console.log('🔐 Logging in to Chint');
        await this.loginChint.setUsername(chintData.username);
        await this.loginChint.setPassword(chintData.password);
        await this.loginChint.clickOnSignInButton();
    }
}

module.exports = LoginFlow;