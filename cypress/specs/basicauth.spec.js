/// <reference types="Cypress" />


describe('Authentication spec', () => {
    it('AU01: Basic Auth Spec', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth',{
            auth:{
                username: 'admin',
                password: 'admin'
            }
        });
        cy.get('div.example p',).should('contain.text', 'Congratulations! You must have the proper credentials.')
    });
});