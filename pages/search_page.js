var pageObject = require('../pages/page_object.js');
require('../pages/search_result_page.js');

var search_page = function() {

    var fieldSearch = element(by.model('headerSearchCtrl.userInput'));
    var buttonSearch = element(by.css('[class="fa fa-search"]'));

    this.searchProduct = function(value) {
        fieldSearch.sendKeys(value);
        buttonSearch.click();
        return require('./search_result_page');
    };
};
module.exports = new search_page();