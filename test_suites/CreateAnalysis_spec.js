var base = require('../pages/BasePage.js');
var DATA = require('../json/locators.json');
var user_login = require('../pages/Login.js');
const config = require('config');

describe("Create an Analysis",function () {

    it("Successful analysis creation",function () {
        base.navigateToURL(config.get('env.url'));
        user_login.enterCrecentials(config.get('user.client'), config.get('user.passClient')).optCreateAnalysis().basicInfoAnalysis();
        browser.sleep(5000);
    })


})