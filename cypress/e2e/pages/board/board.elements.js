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
            get boardName(){
                return cy.get('[data-testid="board-name-display"]');
            },
            get deleteButton() {
                return cy.get('[data-testid="close-board-delete-board-confirm-button"]');
            },
            get deleteBoardButton() {
                return cy.get('[data-testid="close-board-delete-board-button"]');
            },
            get closeButton() {
                return cy.get(':nth-child(22) > .board-menu-navigation-item-link');
            },
            get closeButtonConfirm() {
                return cy.get('[data-testid="close-board-confirm-button"]');
            },
            get closeBoardButton() {
                return cy.get('.board-menu-navigation-item-link').contains('Close board');
            },
            get boardMenu() {
                return cy.get('.GDunJzzgFqQY_3 > .nch-icon > [data-testid="OverflowMenuHorizontalIcon"]');
            },
        }
    }
}