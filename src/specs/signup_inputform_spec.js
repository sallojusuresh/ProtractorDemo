/**
 * Created by sureshs on 8/16/2016.
 */

var SignUpPage = require("../pages/signup_locator"),
    EC = protractor.ExpectedConditions;

describe('Signup Page Form Fields Tests', function () {
    //declare input fields names for global scope
    var userNameInput, fullNameInput, emailInput, passwordInput, createAccountButton;

    //this will be executed before start test execution
    beforeAll(function () {
        //initializing the input field names with locator
        userNameInput = SignUpPage.userName;
        fullNameInput = SignUpPage.fullName;
        emailInput = SignUpPage.email;
        passwordInput = SignUpPage.password;
        createAccountButton = SignUpPage.createAccount;

        browser.get(browser.baseUrl);
        browser.manage().window().maximize();

    });

    afterAll(function () {
        //will be executed after all test execution done
    });

    it('verify that signup form has 4 input filed say - username,fullname,email and password', function () {
        //check username input field displayed or not
        EC.visibilityOf(userNameInput).call().then(function (isVisible) {
            expect(isVisible).toBeTruthy();
        });
        //check full name input field displayed or not
        EC.visibilityOf(fullNameInput).call().then(function (isVisible) {
            expect(isVisible).toBeTruthy();
        });
        //check email input field displayed or not
        EC.visibilityOf(emailInput).call().then(function (isVisible) {
            expect(isVisible).toBeTruthy();
        });
        //check password input field displayed or not
        EC.visibilityOf(passwordInput).call().then(function (isVisible) {
            expect(isVisible).toBeTruthy();
        });
    });
    it('verify that all input fields on signup form are accepting input data', function () {
        /**
         * 1-check whether the input field click able or not
         * 2-enter data into input field
         * 3-capture the input field data and verify whether it has entered data or not
         */
        //test data
        var username_testdata = "Nielsen",
            fullname_testdata = "Nielsen Company",
            email_testdata = "nielsen@gmail.com",
            password_testdata = "Nielsen@123";

        EC.elementToBeClickable(userNameInput).call().then(function (isClickable) {
            expect(isClickable).toBeTruthy();
        });
        userNameInput.sendKeys(username_testdata);
        userNameInput.getAttribute('value').then(function (storedValueIs) {
            expect(storedValueIs).toEqual(username_testdata);
        });
        EC.elementToBeClickable(fullNameInput).call().then(function (isClickable) {
            expect(isClickable).toBeTruthy();
        });
        fullNameInput.sendKeys(fullname_testdata);
        fullNameInput.getAttribute('value').then(function (storedValueIs) {
            expect(storedValueIs).toEqual(fullname_testdata);
        });
        EC.elementToBeClickable(emailInput).call().then(function (isClickable) {
            expect(isClickable).toBeTruthy();
        });
        emailInput.sendKeys(email_testdata);
        emailInput.getAttribute('value').then(function (storedValueIs) {
            expect(storedValueIs).toEqual(email_testdata);
        });
        EC.elementToBeClickable(passwordInput).call().then(function (isClickable) {
            expect(isClickable).toBeTruthy();
        });
        passwordInput.sendKeys(password_testdata);
        passwordInput.getAttribute('value').then(function (storedValueIs) {
            expect(storedValueIs).toEqual(password_testdata);
        });
    });
    it('verify that create account button displayed and clickable', function () {
        //check username input field displayed or not
        EC.visibilityOf(createAccountButton).call().then(function (isVisible) {
            expect(isVisible).toBeTruthy();
        });
        EC.elementToBeClickable(createAccountButton).call().then(function (isClickable) {
            expect(isClickable).toBeTruthy();
        });
    });
});