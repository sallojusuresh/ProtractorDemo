/**
 * Created by sureshs on 8/16/2016.
 */

var SignUpPage = require("../pages/signup_locator"),
    EC = protractor.ExpectedConditions;

describe('Signup Page Header Verification Tests', function () {

    beforeAll(function () {
        //this will be executed before start test execution
        browser.get(browser.baseUrl);
        browser.manage().window().maximize();
    });

    afterAll(function () {
        //will be executed after all test execution done
    });

    it('verify that scrumdo logo displayed on signup page', function () {
        var scrumDoLogo = SignUpPage.logo;
        expect(scrumDoLogo.isDisplayed()).toBeTruthy();
        expect(scrumDoLogo.getAttribute('class')).toContain("scrum");
        expect(SignUpPage.signUpSection.isDisplayed).toBeTruthy();
    });
    it('verify that signup section has header and sub header text', function () {
        var headerText = SignUpPage.formHeaderText,
            subHeaderText = SignUpPage.formHeaderSubText,
            expectedHeaderText = "Create An Account",
            expectedSubHeaderText = "First, create a personal account for you to log in with, we'll set up your company and project next.";

        EC.visibilityOf(headerText).call().then(function (isVisible) {
            expect(isVisible).toBeTruthy();
        });
        headerText.getText().then(function (txt) {
            expect(txt).toEqual(expectedHeaderText);
        });
        EC.visibilityOf(subHeaderText).call().then(function (isVisible) {
            expect(isVisible).toBeTruthy();
        });
        subHeaderText.getText().then(function (txt) {
            expect(txt).toEqual(expectedSubHeaderText);
        });
    });
});