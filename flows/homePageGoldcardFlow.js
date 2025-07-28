const { HomePage } = require("../pages/goldcard/homePage");

class HomePageGoldcardFlow {
  constructor(page) {
    this.page = page;
    this.homePageGoldcard = new HomePage(page);
  }

  async exportMeterDataFile() {
    console.log('📤 מתחיל תהליך ייצוא קובץ Excel');

    await this.homePageGoldcard.clickOnDevicesButton();
    await this.homePageGoldcard.clickOnAllDevicesButton();
    await this.homePageGoldcard.clickOnFileDownload();

    console.log('✅ סיום תהליך ייצוא');
  }
}

module.exports = HomePageGoldcardFlow;