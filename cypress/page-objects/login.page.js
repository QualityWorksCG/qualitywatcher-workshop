/// <reference types="cypress" />
const Page = require('./page');
class LoginPage extends Page {

    get userEmail() { return 'div.input #email' }
    get password() { return 'div.input #password' }
    get loginButton() { return '.segment button.button' }
    get noOrdersHeader() { return '.message > div.header' }
    get previousOrdersHeader() { return 'div.ui div h1.ui' }
    get myAccount() { return '.menu .active' }
    get loginErrorMessage() { return 'div.error p' }
    get signInOutLink() { return 'div.right a:nth-child(2)' }
    credentialRequiredMessage(index) { return `form .segment p:nth-child(${index})` }

    /**
     * Enters user email
     * @param {string} text 
     */
    enterUserEmail(text) {
        cy.get(this.userEmail)
            .clear()
            .type(text)
    }

    /**
     * Enters password
     * @param {string} text 
     */
    enterPassword(text) {
        cy.get(this.password)
            .clear()
            .type(text)
    }

    /**
     * Clicks the login button
     */
    clickLoginButton() {
        cy.get(this.loginButton).click()
    }

    /**
     * Gets the heading of the 'Previous Orders' page
     */
    getLoginConfirmation(callback) {
        cy.get(this.previousOrdersHeader).then(($header) => {
            if ($header.is(':visible')) {
                callback(($header.text() === 'My previous orders'))
            } else {
                cy.get(this.noOrdersHeader).then(($header) => {
                    if ($header.is(':visible')) {
                        callback(($header.text() === 'No recent orders'))
                    }
                })
            }
        });
    }

    /**
     * login function
     */
    login(email, password) {
        this.enterUserEmail(email)
        this.enterPassword(password)
        this.clickLoginButton()
    }

    /**
     * Clicks the sign in/sign out button
     */
    clickSignInOutLink() {
        cy.get(this.signInOutLink).click()
    }

}

module.exports = new LoginPage;