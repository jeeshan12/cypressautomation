/// <reference types="Cypress" />


describe('Hover spec', () => {
    it('HO:01: Hover Spec', () => {
        cy.visit('https://the-internet.herokuapp.com/jqueryui/menu#');
            cy.contains('PDF').click({
                force: true
        });
    });

    it.only('Data', () => {
        cy.request({
            method: 'POST',
            url: 'https://the-internet.herokuapp.com/authenticate',
            form: true,
            body: {
              username: 'tomsmith',
              password:'SuperSecretPassword!'
            },
          });
          cy.visit('https://the-internet.herokuapp.com/secure');
          cy.get('h4').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.');
          cy.get('.button').click();
    });
});