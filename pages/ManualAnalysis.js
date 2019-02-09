var locators = require('../util/customlocators.js');

var ManualAnalysis = function () {

    this.doManualAnalysis = function () {

        browser.sleep(2000);
        element(by.repeater("analysisSample in vm.analysisSamples")).element(by.css('button')).click();
        element(by.ngClick("vm.count(videoSample.id)")).click();
        browser.sleep(2000);
        element(by.ngClick("vm.tab = 'classes'")).click();
        browser.sleep(2000);
        element(by.ngClick("vm.tab = 'controls'")).click();
        browser.sleep(2000);
        browser.actions().sendKeys("c").perform();
        browser.actions().sendKeys("b").perform();
        browser.actions().sendKeys("2").perform();
        browser.actions().sendKeys("3").perform();
        browser.actions().sendKeys("4").perform();
        browser.actions().sendKeys("i").perform();
        browser.actions().sendKeys("l").perform();
        browser.actions().sendKeys("m").perform();
        browser.actions().sendKeys("p").perform();
        browser.sleep(2000);
        element(by.ngClick("vm.doSave()")).click();
        element(by.buttonText("Aceptar")).click();

        return this;

    }

}

module.exports = new ManualAnalysis();