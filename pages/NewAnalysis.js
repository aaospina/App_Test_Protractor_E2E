var locator = require('../json/locators.json');
var locators = require('../util/customlocators.js');
var SelectWrapper = require('../util/select-wrapper');
var mySelect = new SelectWrapper(by.model(locator.newAnalysis.wrapperModel));

var NewAnalysis = function () {

    this.basicInfoAnalysis = function () {

        element(by.model(locator.newAnalysis.name)).sendKeys("Aforo "+Date.now().toString());
        mySelect.selectByValue(locator.newAnalysis.wrapperOption).click();
        element(by.xpath(locator.newAnalysis.folder)).click();
        element(by.buttonText(locator.newAnalysis.ngClickCreate)).click();
        browser.sleep(3000);
        return require('./Movements2.js');
    }

    this.toAsignLocation = function () {

        element(by.xpath(locator.newAnalysis.buttonLocation)).click();
        browser.sleep(3000);
        var map = element(by.xpath(locator.newAnalysis.map));
        browser.actions().mouseMove(map, {x: 150, y: 150}).click().perform();
        element(by.xpath(locator.newAnalysis.point)).click();
        browser.sleep(3000);
        return require('./NewAnalysis.js');

    }

    this.toDeleteLocation = function () {

        element(by.xpath(locator.newAnalysis.deleteLocation)).click();
        browser.sleep(3000);
        return require('./NewAnalysis.js');
    }

}

module.exports = new NewAnalysis();