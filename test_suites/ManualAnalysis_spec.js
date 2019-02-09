var base = require('../pages/BasePage.js');
var DATA = require('../json/locators.json');
var user_login = require('../pages/Login.js');
const config = require('config');

describe("Manual analysis functionality",function () {

    it("Manual analysis functionality",function () {

        base.navigateToURL(config.get('env.url'));
        browser.sleep(8000);
        user_login.enterCrecentials(config.get('user.qa'), config.get('user.passQa')).optSampling().countMissingAndLeftover().doManualAnalysis();
        browser.sleep(3000);
    })


})