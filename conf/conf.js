var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
var jasmineReporters = require('jasmine-reporters');

// An example configuration file.
exports.config = {
    directConnect: true,

    //The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome'
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine2',

    // Spec patterns are relative to the current working directory when protractor is called.
    specs: ['../tests/ecommerce_test_spec.js'],

    // Assign the test reporter to each running instance
    onPrepare: function () {
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: '../test_results',
            filePrefix: 'xmloutput'
        }));
    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 10000
    }
};

