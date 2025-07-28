const { Helper } = require('../../helper/helper');

class HomePageChint {
  constructor(page) {
    this.page = page;
    this.helper = new Helper(page);
  }

  get rawDataButton() {
    return this.page.locator("xpath=//*[@class='menutitle'][text()='Raw Data']");
  }

  get gasMeterDataButton() {
    return this.page.locator("xpath=//*[@data-original-title='Gas Meter Data']");
  }

  get chooseStartDateButton() {
    return this.page.locator("xpath=//*[@id='startDate']");
  }

  get chooseEndDateButton() {
    return this.page.locator("xpath=//*[@id='endDate']");
  }

  get searchButton() {
    return this.page.locator("xpath=//*[@id='search']");
  }

  get rightFrame() {
    return this.page.frameLocator("#RightFrame");
  }

  get exportButton() {
    return this.page.locator("xpath=//*[@data-original-title='Export']");
  }

  get exportToExcel() {
    return this.page.locator("xpath=//*[@data-original-title='Export to XLS']");
  }

  get filterDataButton() {
    return this.page.locator("xpath=//*[@data-original-title='Data Item Select']");
  }

  get volumeSumCheckbox() {
    return this.page.locator("xpath=//*[@data-original-title='Export to XLS']");
  }

  ///////////////////////
  //       CLICK
  ///////////////////////

  async clickOnRawDataButton() {
    await this.helper.click(this.rawDataButton);
  }

  async clickGasMeterDataButton() {
    await this.helper.click(this.gasMeterDataButton);
  }

  async clickOnSearchButton() {
    await this.helper.click(this.searchButton);
  }

  async clickOnExportButton() {
    await this.helper.click(this.exportButton);
  }

  async clickOnExcelButton() {
    await this.helper.click(this.exportToExcel);
  }

  ///////////////////////
  //       IFRAME
  ///////////////////////

  async moveToIframe() {
    const frame = this.page.frame({ name: 'RightFrame' });
    if (!frame) throw new Error('RightFrame not found');
    this.page = frame; // מעדכן את page למחיקת עבודה בתוך iframe
  }

  ///////////////////////
  //       SET
  ///////////////////////

  async setStartDate() {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd} 00:00:00`;

    await this.page.locator('#startDate').fill(formattedDate);
  }

  async setEndDate() {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const formattedDate = `${yyyy}-${mm}-${dd} 23:59:00`;

    await this.page.locator('#endDate').fill(formattedDate);
  }
}

module.exports = { HomePageChint };