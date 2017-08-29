var pageObject = require('../pages/page_object.js');
require('../pages/login_page.js');

var home_page = function () {

    var buttonClosePopup = element(by.css('#closeButton'));
    var fieldLogin = element(by.css('[class="top-nav-link"] [class="sign-in-name"]'));
    var buttonSignin = element(by.css('[class="sub-nav user-log-in-menu"] [class="btn btn-primary btn-sm btn-block"]'));

    this.closePopup = function () {
        //pageObject.waitForElementToBeDisplayed(buttonClosePopup, 10000);
        buttonClosePopup.click();
    }

    this.fieldLogin = function () {
        //pageObject.waitForElementToBeClickable(fieldLogin, 10000);
        fieldLogin.click();
        //return require('./login_page.js');
    };

    this.buttonSignin = function () {
        //pageObject.waitForElementToBeClickable(buttonSignin, 10000);
        buttonSignin.click();
        return require('./login_page.js');
    };

    this.getDynamicText = function () {
        return element(by.binding('person.name')).getText();
    };

    this.buttonContinue = function () {
        element(by.buttonText('CONTINUE')).click();
        return require('./login_page.js');
    };

};
module.exports = new home_page();