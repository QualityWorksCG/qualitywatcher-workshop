/// <reference types="cypress" />
const loginPage = require('../../page-objects/login.page');

describe('User Authentication', function () {

    it.only('Should login the user successfully with valid email and password', () => {
        loginPage.navigate('/login')
        cy.fixture('loginData').then(loginData => {
            loginPage.login(loginData.validEmail, loginData.validPassword)
        });
        cy.get(loginPage.myAccount).should('have.text', 'My Account')
    })

    it('Should not login user with invalid password', () => {
        loginPage.navigate('/login')
        cy.fixture('loginData').then(loginData => {
            loginPage.login(loginData.validEmail, loginData.invalidPassword)
        });
        cy.get(loginPage.loginErrorMessage).should('have.text', 'Invalid email or password')
    })

    it('Should not login user with no password', () => {
        loginPage.navigate('/login')
        cy.fixture('loginData').then(loginData => {
            cy.get(loginPage.userEmail).type(loginData.validEmail)
            cy.get(loginPage.password).clear()
            cy.get(loginPage.loginButton).click()
        });
        cy.get(loginPage.credentialRequiredMessage(3)).should('have.text', 'Password is required')
    })

    it('Should not login user with invalid email', () => {
        loginPage.navigate('/login')
        cy.fixture('loginData').then(loginData => {
            loginPage.login(loginData.invalidEmail, loginData.validPassword)
        });
        cy.get(loginPage.loginErrorMessage).should('have.text', 'Invalid email or password')
    })

    it('Should not login user with no email no password', () => {
        loginPage.navigate('/login')
        cy.get(loginPage.userEmail).clear()
        cy.get(loginPage.password).clear()
        cy.get(loginPage.loginButton).click()
        cy.get(loginPage.credentialRequiredMessage(2)).should('have.text', 'Email is required')
        cy.get(loginPage.credentialRequiredMessage(4)).should('have.text', 'Password is required')
    })

})