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

    // it('Verify that it is not possible to login with invalid credentials.', function() {
    //     cy.login(this.userData.email, this.userData.password);
    //     cy.get('.css-xal9c7').should('contain', 'Incorrect email address and / or password');
    // });
});
