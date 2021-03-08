/// <reference types="Cypress" />


describe('Form Authentication spec', () => {
    it('FO:01 Form Authentication Specs', () => {
        cy.request({
            method: 'POST',
            url: 'https://the-internet.herokuapp.com/authenticate',
            form: true,
            body: {
                username: 'tomsmith',
                password: 'SuperSecretPassword!'
            }
        });
        cy.visit('https://the-internet.herokuapp.com/secure');
        cy.get('h4').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.');
        cy.get('.button').click();
    });

});