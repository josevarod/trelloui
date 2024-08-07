export class BoardElements {
    static get elements() {
        return {
            get headerMenuOption() {
                return cy.get('div[data-testid="header-member-menu-avatar"] span');
            },
            get boardWorkSpace() {
                return cy.get('h3.boards-page-section-header-name');
            },
            get boardIconAdd() {
                return cy.get('[data-testid="AddIcon"]');
            },
            get headerCreateBoard() {
                return cy.get('[data-testid="header-create-board-button"] > .LCeoUSr_PkZrP2 > .BmRHtH7FIX0jcL');
            },
            get submitButton() {
                return cy.get('[data-testid="create-board-submit-button"]');
            },
            get createBoardButton() {
                return cy.get('[data-testid="AddIcon"]');
            },
            get headerCreateBoardButton() {
                return cy.get('[data-testid="header-create-board-button"] > .LCeoUSr_PkZrP2 > .BmRHtH7FIX0jcL');
            },
            get boardTitle() {
                return cy.get('[data-testid="create-board-title-input"]');
            },
            get logoutButton() {
                return cy.get('[data-testid="account-menu-logout"] > .LCeoUSr_PkZrP2');
            },
        }
    }
}