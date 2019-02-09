var base = require('../pages/BasePage.js');
var DATA = require('../json/locators.json');
var user_login = require('../pages/Login.js');
var homePage = require('../pages/HomePage.js');
const config = require('config');


describe("Enter with a client user", function () {


    /*it("Successful login to the client user", function () {
        base.navigateToURL(config.get('env.url'));
        user_login.enterCrecentials(config.get('user.client'), config.get('user.passClient'));
        browser.sleep(5000);
    });*/

    it("Successful login to the client user", function () {
        base.navigateToURL(config.get('env.url'));
        user_login.enterCrecentials(config.get('user.client'), config.get('user.passClient'));
        homePage.optCreateAnalysis();
        browser.sleep(2000);
        homePage.optSearchAnalysis().editAnalysis().toEditMovement();
        /*const filename = './e2e/download/new_Name_List_members.csv';

        const exportButton = element(by.xpath('//tr/td/div/button/span[1]'));

        exportButton.click().then(() => {
            browser.driver.wait(function() {
                // Wait until the file has been downloaded.
                return fs.existsSync(filename);
            }, 5000).then(function() {
                expect(fs.readFileSync(filename, { encoding: 'utf8' })).toContain('username,email,name');
            });
        });*/



        //var abc = require('../pages/NewAnalysis.js');
        //abc.toDeleteGps()
        //browser.sleep(3000);

    });

    /*it('edit Analysis', function () {

        var edit = require('../pages/HomePage.js');
        edit.editAnalysis();
        browser.sleep(5000);


    });

    it('logout', function () {

        var movement = require('../pages/HomePage.js');
        movement.editAnalysis();
        browser.sleep(5000);

    });


    it('add Gps to a analysis', function () {

        var home = require('../pages/HomePage.js');
        home.createAnalysis().toAsignGps();
        browser.sleep(3000);

    })*/

})


