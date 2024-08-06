export class BoardElements {
    static get elements() {
        return {
            get headerMenuOption() {
                return cy.get('div[data-testid="header-member-menu-avatar"] span');
            },
            get boardWorkSpace() {
                return cy.get('h3.boards-page-section-header-name');
            },
            get logoutButton() {
                return cy.get('[data-testid="account-menu-logout"] > .LCeoUSr_PkZrP2');
            },
        }
    }
}