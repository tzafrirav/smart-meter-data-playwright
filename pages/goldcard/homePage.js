const { Helper } = require('../../helper/helper');
// const { startStep, endStep } = require('@wdio/allure-reporter');

class HomePage {
  constructor(page) {
    this.page = page;
    this.helper = new Helper(page);
  }

  get devicesButton() {
    return this.page.locator("xpath=//*[text()='Devices']");
  }
  get allDevicesButton() {
    return this.page.locator("xpath=//*[text()='All Devices']");
  }
  get chooseDateButton() {
    return this.page.locator("xpath=//*[contains(@class, 'form-control date-picker-button')]");
  }
  get monthList() {
    return this.page.locator("xpath=//*[contains(@class, 'react-datepicker__month-text react-datepicker__month-')]");
  }
  get actionsButton() {
    return this.page.locator("xpath=//*[text()='פעולות']");
  }
  get fileDownloadButton() {
    return this.page.locator("xpath=//*[text()='Export']");
  }

  ///////////////////////
  //       CLICK
  ///////////////////////

  async clickOnDevicesButton() {
    // startStep('Click on Devices button');
    await this.helper.click(this.devicesButton);
    // endStep();
  }

  async clickOnAllDevicesButton() {
    // startStep('Click on All Devices button');
    await this.helper.click(this.allDevicesButton);
    // endStep();
  }

  async clickOnChooseDateButton() {
    // startStep('Click on Choose Date button');
    await this.helper.click(this.chooseDateButton);
    // endStep();
  }

  async clickOnChoosenMonth() {
    // startStep('Click on Month selection');
    await this.helper.click(this.monthList);
    // endStep();
  }

  async clickOnActionsButton() {
    // startStep('Click on Actions button');
    await this.helper.click(this.actionsButton);
    // endStep();
  }

  async clickOnFileDownload() {
    // startStep('Click on Export button');
    await this.helper.click(this.fileDownloadButton);
    // endStep();
  }

  ///////////////////////
  //       GET
  ///////////////////////

  getErrorMessageOfRequestSender() {
    // startStep('Get current month');
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    // endStep();
    return currentMonth;
  }
}

module.exports = { HomePage };