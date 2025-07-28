const { Helper } = require('../../helper/helper');

class LoginPageChint {
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
    await this.helper.setText(this.usernameField, username);
  }

  async setPassword(password) {
    await this.helper.setText(this.passwordField, password);
  }

  ///////////////////////
  //       CLICK
  ///////////////////////

  async clickOnSignInButton() {
    await this.helper.click(this.signInButton);
  }
}

module.exports = { LoginPageChint };