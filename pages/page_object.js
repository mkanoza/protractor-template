var PageObject = function () {

    var EC = browser.ExpectedConditions;

    this.waitForElementToBeDisplayed = function (element, timeout) {
        return browser.wait(EC.presenceOf(element), timeout) && browser.wait(EC.visibilityOf(element), timeout);
    };

    this.waitForElementToBeClickable = function (element, timeout) {
        return browser.wait(EC.elementToBeClickable(element, timeout));
    };
}

module.exports = new PageObject();