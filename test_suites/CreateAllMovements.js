var base = require('../pages/BasePage.js');
var DATA = require('../json/locators.json');
var user_login = require('../pages/Login.js');
var homePage = require('../pages/HomePage.js');
const config = require('config');


describe("Create a new analysis", function () {

    it("Cretate an analysis with all movements", function () {
        base.navigateToURL(config.get('env.url'));
        user_login.enterCrecentials(config.get('user.client'), config.get('user.passClient'));
        homePage.optCreateAnalysis().basicInfoAnalysis().toAddMovement2();
        browser.sleep(2000);

    });

})


