var DATA = require('../json/locators.json');

var Login = function () {

    this.enterCrecentials = function (email,pass) {

        var locatorEmail= DATA.login.email;
        var locatorPass=DATA.login.pass;
        locate(locatorEmail,email);
        locate(locatorPass,pass);

        element(by.buttonText(DATA.login.loginButton)).click();
        return require('./HomePage.js');
    };

    var locate = function(locator, value){
            element(by.css(locator)).sendKeys(value);
    }

}

module.exports = new Login();