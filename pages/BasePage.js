var BasePage = function () {

    this.navigateToURL = function(url){

        browser.get(url);
        browser.driver.manage().window().maximize();
    }

    this.getPageTitle = function () {

        return browser.getTitle();

    }

}

module.exports = new BasePage();