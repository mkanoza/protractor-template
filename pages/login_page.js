var pageObject = require('../pages/page_object.js');

var login_page = function () {

    var inputEmail = element(by.css('[id="emailAddress-login"]'));
    var inputPassword = element(by.css('[id="password-login"]'));
    var buttonSignin = element(by.css('[class="btn btn-primary btn-block-phone"]'));

    this.fillEmail = function (value) {
        inputEmail.sendKeys(value);
    }
    this.fillPassword = function (value) {
        inputPassword.sendKeys(value);
    }

    this.clickSignin = function () {
        buttonSignin.click();
    };
};
module.exports = new login_page();
