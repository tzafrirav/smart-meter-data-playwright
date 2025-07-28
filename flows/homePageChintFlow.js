const HomePageChint= require ('../pages/chint/homePage');
 
 
class HomePageChintFlow {

  constructor(page) {
    this.page = page;
    this.homePageChint = new HomePageChint(page);
  }

 
    async exportMeterDataFile(){
        await this.homePageChint.clickOnRawDataButton();
        await this.homePageChint.clickGasMeterDataButton();
        await this.homePageChint.moveToIframe();
        await this.homePageChint.setStartDate();
        await this.homePageChint.setEndDate();
        await this.homePageChint.clickOnSearchButton();
        await this.page.waitForTimeout(2*1000);
        await this.homePageChint.clickOnExportButton();
        await this.page.waitForTimeout(2*1000);
        await this.homePageChint.clickOnExcelButton();
        
    }

 
}
 
module.exports = HomePageChintFlow;