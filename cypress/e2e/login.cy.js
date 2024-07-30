describe('Trello Login Tests', ()=>{

    it('Verify that it is possible to login successfully with valid credentials.', function() {
        const username = Cypress.env('CYPRESS_USERNAME');
        const password = Cypress.env('CYPRESS_PASSWORD');

        cy.login(username, password);
        cy.wait(3000)
        cy.origin('https://trello.com', () => {
            cy.url().should('include', '/boards');
            cy.wait(10000);
            cy.get('h3.boards-page-section-header-name').should('contain.text', 'YOUR WORKSPACES');
        });
    });
});
