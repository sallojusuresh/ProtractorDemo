/**
 * Created by sureshs on 8/16/2016.
 */
/**
 *We can find more and rich options of protractor-conf.js at @https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 */


var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {

    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2
    },
    specs: [
        'src/specs/*.js'
    ],
    params: {
        username: 'cmsprd',
        password: 'Verizon1'
    },

    baseUrl: "https://app.scrumdo.com/account/signup",

    framework: "jasmine2",

    onPrepare: function () {
        'use strict';
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'reports/',
            screenshotsFolder: 'images',
            //takeScreenshotsOnlyOnFailures: true,
            takeScreenshots: true,
            filePrefix: 'e2e-test'
        }));
    },

    allScriptsTimeout: 50000,

    jasmineNodeOpts: {
        onComplete: null,
        // If true, print colors to the terminal.
        showColors: true,

        defaultTimeoutInterval: 25000,

        /*print: function () {
         }*/
    },

    restartBrowserBetweenTests: false
};

