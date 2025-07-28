const { Helper } = require('../../helper/helper');
// const { startStep, endStep } = require('@wdio/allure-reporter');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.helper = new Helper(page);
  }

  get usernameField() {
    return this.page.locator("xpath=//*[@id='username']");
  }

  get passwordField() {
    return this.page.locator("xpath=//*[@id='password']");
  }

  get signInButton() {
    return this.page.locator("xpath=//button[@type='submit']");
  }

  ///////////////////////
  //       SET
  ///////////////////////

  async setUsername(username) {
    // startStep(`Set username to: ${username}`);
    await this.helper.setText(this.usernameField, username);
    // endStep();
  }

  async setPassword(password) {
    // startStep(`Set password`);
    await this.helper.setText(this.passwordField, password);
    // endStep();
  }

  ///////////////////////
  //       CLICK
  ///////////////////////

  async clickOnSignInButton() {
    // startStep('Click on sign in button');
    await this.helper.click(this.signInButton);
    // endStep();
  }
}

module.exports = { LoginPage };