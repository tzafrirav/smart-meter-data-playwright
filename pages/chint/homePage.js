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
  // ממתין שה־iframe יופיע ב־DOM
  await this.page.waitForSelector('#RightFrame');

  // מאחזר את ה־element של ה־iframe לפי ה־id
  const frameElementHandle = await this.page.$('#RightFrame');
  if (!frameElementHandle) throw new Error('❌ iframe עם id RightFrame לא נמצא');

  // מקבל את האובייקט של ה־iframe
  const frame = await frameElementHandle.contentFrame();
  if (!frame) throw new Error('❌ לא הצליח לגשת ל־contentFrame מתוך RightFrame');

  // מעדכן את page לעבודה בתוך ה־iframe
  this.page = frame;
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

module.exports =  HomePageChint ;