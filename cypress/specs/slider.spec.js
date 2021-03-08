/// <reference types="Cypress" />


describe('Slider spec', () => {
    it('SP:01- Moving slider', () => {
        cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
        cy.location('pathname').then($x => {
            if ($x !== '/horizontal_slider') {
                cy.visit('https://the-internet.herokuapp.com/horizontal_slider');
            }
        })
        cy.get('[type="range"]')
            .invoke('val', 2.5)
            .trigger("change")
            .click();
        cy.get('#range').then($x => {
            expect($x.text()).to.equal('2.5');
        });
    });
});