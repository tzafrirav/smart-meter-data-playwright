class Helper {
  constructor(page) {
    this.page = page;
  }

  async click(locator) {
    await locator.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500); // כמו pause
    await locator.waitFor({ state: 'visible', timeout: 25*1000 });
    await locator.click();
  }

  async setText(locator, text) {
    await locator.fill(text);
  }

  async getText(locator) {
    return await locator.textContent();
  }

  async displayed(locator) {
    await locator.waitFor({ state: 'visible', timeout: 6000 });
  }

  async chooseFromList(num) {
    const listItems = await this.page.locator("ul[role='listbox'] li").all();
    if (listItems[num]) {
      await listItems[num].click();
    } else {
      throw new Error(`List item at index ${num} not found.`);
    }
  }
}

module.exports = { Helper };