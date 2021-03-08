/// <reference types="Cypress" />

describe('Lists Handling spec', () => {
    const dualListOption = 'Morbi leo risus';
    it('LI:01 Dual List Box Spec', () => {
        cy.visit('https://www.seleniumeasy.com/test/bootstrap-dual-list-box-demo.html');

        cy.get('div.dual-list.list-left ul').find('li').each(($el, _$index, _$list) => {
            if ($el.text().includes(dualListOption)) {
                cy.wrap($el).click();
                return false;
            }
        });
        cy.get('button.move-right').click();
        cy.get('div.dual-list.list-right ul').find('li.active').should('have.text', dualListOption);
    });
});