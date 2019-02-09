var locator = require('../json/locators.json');
var locators = require('../util/customlocators.js');

var Samplings = function () {

    this.countMissingAndLeftover = function () {

        element(by.repeater(locator.sampling.results)).element(by.css(DATA.sampling.bottonResults)).click();
        element(by.ngClick(locator.sampling.optCounting)).click();
        return require('./ManualAnalysis.js');

    };

    this.toSeeResults = function () {

        element(by.repeater(locator.sampling.results)).element(by.css(DATA.sampling.bottonResults)).click();
        element(by.ngClick(locator.sampling.optSeeResults)).click();
        element(by.ngClick(locator.sampling.return)).click();
        element(by.ngClick(locator.sampling.cancel)).click();

    };

    this.toDownloadSampling = function () {

        element(by.repeater(locator.sampling.results)).element(by.css(DATA.sampling.bottonResults)).click();
        var row = element(by.repeater(locator.sampling.optGetLink).row(0));
        row.element(by.css(locator.sampling.download1)).click();
        row.element(by.css(locator.sampling.download2)).click();
    }

}

module.exports = new Samplings();