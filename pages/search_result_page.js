var pageObject = require('../pages/page_object.js');

var search_result_page = function() {

    var stringSearchResult = element(by.css('[class="index-page-title ng-scope"] [class="ng-binding ng-scope"]:nth-child(1)'));

    this.checkSearchProductPage = function() {
        //pageObject.waitForElementToBeDisplayed(stringSearchResult, 5000);
        expect(stringSearchResult.isPresent());
    };
};
module.exports = new search_result_page();