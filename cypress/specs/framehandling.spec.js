/// <reference types="Cypress" />

describe('Frame handling spec', () => {

    it('C01: Frame Spec', () => {
        cy.visit('https://the-internet.herokuapp.com/frames');
        cy.get(`a[href = '/iframe']`).click();
        cy.getIFrameBodyDocument("iframe[id='mce_0_ifr']").should('have.text', 'Your content goes here.');
        cy.getIFrameBodyDocument("iframe[id='mce_0_ifr']").clear().type('I am able to edit textbox').blur().should('have.text', 'I am able to edit textbox');

    });

});