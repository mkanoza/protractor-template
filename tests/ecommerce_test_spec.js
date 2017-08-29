var util = require('util')

var home_page = require('../pages/home_page.js');
var search_page = require('../pages/search_page.js');
var search_result_page = require('../pages/search_result_page.js');

describe('To test ecommerce site', function () {

    beforeEach(function () {
        browser.get('https://www.landsend.com/');
        browser.driver.manage().window().maximize();
    });

    describe('To test login funcionality', function () {

        it('Should be able to close popup', function () {
            home_page.closePopup();
        });

        it('Should be able to click on login button', function () {
            home_page.fieldLogin();
            var login_page = home_page.buttonSignin();
            login_page.fillEmail('mkanoza@objectivity.co.uk');
            login_page.fillPassword('testy123');
            login_page.clickSignin();
        });
    });

    describe('To test searching funcionality', function () {
        it('Should be able to search products', function () {
            search_page.searchProduct('shoes');
            search_result_page.checkSearchProductPage();
        });
    });
});