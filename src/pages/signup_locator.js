/**
 * Created by sureshs on 8/16/2016.
 */

var locators = {
    logo: element(by.css("img")),
    signUpSection: element(by.css(".scrumdo-box-modal")),
    formHeaderText: element(by.css(".scrumdo-signup-title")),
    formHeaderSubText: element(by.css(".scrumdo-signup-description")),
    signUpForm: element(by.css('#signupForm')),
    userName: element(by.name("username")),
    fullName: element(by.name("fullname")),
    email: element(by.name("email")),
    password: element(by.name("password")),
    createAccount: element(by.buttonText("Create Account")),
    footerText: element(by.css(".signup-page-footer-2"))
};

module.exports = locators;

