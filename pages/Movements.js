var locators = require('../util/customlocators.js');
var locator = require('../json/locators.json');
var SelectWrapper = require('../util/select-wrapper');
var mySelect = new SelectWrapper(by.model(locator.movements.camaraWrapper));
const config = require('config');

var Movements = function () {

    this.toAddMovement = function () {

        element(by.ngClick(locator.movements.newMovement)).click();
        element(by.model(locator.movements.name)).sendKeys("mov 1");
        element(by.model(locator.movements.camara)).element(by.css("[value='string:" + config.get('cardinals.camara') + "']")).click();
        var canvas = element(by.xpath(locator.movements.canvas));
        browser.actions()
            .mouseMove(canvas, {x: config.get('cardinals.l1X1'), y: config.get('cardinals.l1Y1')}).click()
            .mouseMove(canvas, {x: config.get('cardinals.l1X2'), y: config.get('cardinals.l1Y2')}).click()
            .perform();
        element(by.ngClick('vm.activateExitLine()')).click();
        browser.actions()
            .mouseMove(canvas, {x: config.get('cardinals.l2X1'), y: config.get('cardinals.l2Y1')}).click()
            .mouseMove(canvas, {x: config.get('cardinals.l2X2'), y: config.get('cardinals.l2Y2')}).click()
            .perform();
        element(by.buttonText(locator.movements.saveMovement)).click();
        element(by.buttonText(locator.movements.confirmation)).click();
        return require('./Movements.js');
    }

    this.toProccessAnalysis = function () {

        element(by.buttonText(locator.movements.process)).click();
        element(by.buttonText(locator.movements.confirmation)).click();
        browser.sleep(2000);
        return require('./HomePage.js');
    }

    this.toEditMovement = function () {

        element(by.xpath(locator.movements.edit)).click();
        browser.sleep(2000);
        return require('./Movements.js');

    }

    this.toDeleteMovement = function () {

        element(by.xpath(locator.movements.delete)).click();
        return require('./Movements.js');

    }

    this.comeBack = function () {

        element(by.buttonText(locator.movements.comeBack)).click();
        return require('../pages/HomePage.js');

    }

}

module.exports = new Movements();