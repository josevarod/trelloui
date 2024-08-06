import { it } from "mocha";
import { LoginHelper } from "../pages/login/login.helper";

describe('Verify that it is possible to create a new board.', () => {
    const username = Cypress.env('CYPRESS_USERNAME');
    const password = Cypress.env('CYPRESS_PASSWORD');

    it('Verify that it is possible to login successfully with valid credentials.', () => {
        LoginHelper.login(username, password);
        LoginHelper.validateUserLoginSuccessfullySpanish();
        
        cy.get('[data-testid="AddIcon"]').click();
        cy.get('[data-testid="header-create-board-button"] > .LCeoUSr_PkZrP2 > .BmRHtH7FIX0jcL').click()
        cy.get('[data-testid="create-board-title-input"]').type('Automated-Board');
        cy.get('[data-testid="create-board-submit-button"]').click();
        cy.get('[data-testid="board-name-display"]').should('be.visible');
        cy.url().should('include', '/automated-board');
        cy.get('[data-testid="board-name-display"]').should('contain.text', 'Automated-Board');
    });
    //codigo gustavo
});
