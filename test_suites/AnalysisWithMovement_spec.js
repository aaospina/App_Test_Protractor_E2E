var base = require('../pages/BasePage.js');
var user_login = require('../pages/Login.js');
const config = require('config');

describe("Create a complete Analysis",function () {

    it("Successful analysis creation with movement",function () {
        base.navigateToURL(config.get('env.url'));
        user_login.enterCrecentials(config.get('user.client'), config.get('user.passClient')).optCreateAnalysis().basicInfoAnalysis().toAddMovement().toProccessAnalysis();
        browser.sleep(5000);
    })


})