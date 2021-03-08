/// <reference types="Cypress" />

describe('Drag and Drop spec', () => {

    it('DD:01- Drag Drop', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');

        cy.get('#column-a')
            .trigger('mousedown', {
                which: 1
            });
        cy.get('#column-b')
            .trigger('mousemove')
            .trigger('mouseup')

    });

    it('DD:02- Drag Drop Data Transfer', () => {
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop');
        const dataTransfer = new DataTransfer();
        cy.get('#column-a').should('have.text', 'A');
        cy.get('#column-a')
            .trigger('dragstart', {
                dataTransfer
            });
        cy.get('#column-b')
            .trigger('drop', {
                dataTransfer
            });
        cy.get('#column-a')
            .trigger('dragend');

        cy.get('#column-a').should('have.text', 'B');

    });
});