var locator = require('../json/locators.json');

var HomePage = function () {

    this.optCreateAnalysis = function () {

        element(by.partialLinkText(locator.homePage.create)).click();
        return require('./NewAnalysis.js');

    }

    this.optSearchAnalysis = function () {

        element(by.partialLinkText(locator.homePage.search)).click();
        return require('../pages/HomePage.js');

    }

    this.optSampling = function () {

        element(by.partialLinkText(locator.homePage.samplings)).click();
        return require('./Samplings.js');

    }

    this.downloadResult = function () {

        element(by.xpath(locator.homePage.downloadResults)).click();
        return require('../pages/HomePage.js');

    }

    this.editAnalysis = function () {

        element(by.xpath(locator.homePage.editAnalysis)).click();
        browser.sleep(2000);
        return require('./Movements.js');
    }

    this.goToNextPage = function () {

        element(by.xpath(locator.homePage.nextPage)).click();
        return require('../pages/HomePage.js');

    }

    this.goToPreviousPage = function () {

        element(by.xpath(locator.homePage.previousPage)).click();
        return require('../pages/HomePage.js');
    }

    this.goToSelectedPage = function (page) {

        element.all(by.xpath(locator.homePage.pages)).getText().then(function (rows) {
            var noPages = rows.length;
            if (page <= noPages && page > 0){
                element(by.xpath("//a[contains(text(),'"+page+"')]")).click();
                browser.sleep(3000);
            }
            else {
                console.log('The page entered doesnt exist');
            }
        })
        return require('../pages/HomePage.js');
    }

    this.logout = function () {

        element(by.xpath(locator.homePage.logout)).click();
        return require('./Login.js');

    }

}

module.exports = new HomePage();