exports.config = {

    directConnect: true, //to use the ChromeDriver directly without selenium

    capabilities: { //capabilities to be passed to the webdriver instance. You can change the browser. For example between chrome and firefox
        'browserName': 'chrome',
        //'chromeOptions': {
            // Get rid of --ignore-certificate yellow warning
            args: ['--no-sandbox', '--test-type=browser'],
            // Set download path and avoid prompting for download even though
            // this is already the default on Chrome but for completeness
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'default_directory': '/e2e/downloads/',
                }
            }
    },

    framework: 'jasmine2', //to select the framework

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['./test_suites/CreateAllMovements.js'],

    suites: {

        regression: ['./test_suites/regression/regression_spec.ts'],
        smoke: ['./test_suites/smoke_test/smoke_test_spec.ts'],
        functional: ['./test_suites/functional/functional_spec.ts'],
        all: ['./test_suites/!*!/!*_spec.ts']

    },

    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000
    },

    /*onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            allureReport:{
                resultsDir: 'allure-results'
            }

        }));
        jasmine.getEnv().afterEach(function (done){
            browser.takeScreenshot().then(function (png){
                allure.createAttachment('Screenshot',function(){
                    return new Buffer(png, 'base64')
                },'image/png')();
                done();
            })
        })
    },

    onComplete:function () {
        console.log("Sending Mail with reports for the test execution.");
        var sys = require('util')
        var exec = require('child_process').exec;
        function puts(error, stdout, stderr) { sys.puts(stdout) }
        exec("node mail.js", puts);
    },*/
    /*onPrepare() {
        // delete ./e2e/download before tests are run
        rmDir('./e2e/download');
    }*/
};

/*var fs = require('fs');

function rmDir (dirPath) {
try { var files = fs.readdirSync(dirPath); }
catch(e) { return; }
if (files.length > 0)
    for (var i = 0; i < files.length; i++) {
        var filePath = dirPath + '/' + files[i];
        if (fs.statSync(filePath).isFile())
            fs.unlinkSync(filePath);
        else
            rmDir(filePath);
    }
fs.rmdirSync(dirPath);
}*/
