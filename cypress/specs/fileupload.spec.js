/// <reference types="Cypress" />
describe('Image Upload spec', () => {
    it('FU1: Image Upload Spec', () => {
        cy.visit('https://the-internet.herokuapp.com/upload');
        cy.fixture('../images/image.jpeg').as('logo');

        cy.get('input[type="file"]').then(function($x) {
            const blob = Cypress.Blob.base64StringToBlob(this.logo, 'image/jpeg');
            const file = new File([blob], '../images/image.jpeg', {
                type: 'image/jpeg'
            });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            const listFiles = dataTransfer.files;
            $x[0].files =listFiles;
            $x[0].dispatchEvent(new Event('change', {
                bubbles: true
            }));
        });
        cy.get('#file-submit').click();
        cy.get('h3').should('have.text', 'File Uploaded!');
    });

});