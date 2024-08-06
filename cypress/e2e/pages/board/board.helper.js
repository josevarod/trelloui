import { BoardElements } from "./board.elements";

export class BoardHelper {
    static clickCreateBoardButton() {
        BoardElements.elements.createBoardButton.click();
    }
    static clickHeaderCreateBoardButton() {
        BoardElements.elements.headerCreateBoardButton.click();
    }

    static clickAddIconBoardButton() {
        BoardElements.elements.boardIconAdd.click();
    }

    static clickHeadCreateBoardButton() {
        BoardElements.elements.headerCreateBoard.click();
    }

    static insertBoardTitle(board_name) {
        BoardElements.elements.boardTitle.type(board_name);
    }

    static clickSubmitBoardButton(board_name) {
        BoardElements.elements.submitButton.click();
        cy.get('[data-testid="board-name-display"]').should('be.visible');
        cy.url().should('include', `/${board_name.toLowerCase()}`);
        cy.get('[data-testid="board-name-display"]').should('contain.text', board_name);
    }

    static validateBoardCreatedSuccessfully(board_name) {
        cy.url().should('include', `/${board_name}`);
        BoardElements.elements.boardName.should('contain.text', board_name);
    }

    static clickHeaderMenuOption() {
        BoardElements.elements.headerMenuOption.click();
    }

    static clickLogoutButton() {
        BoardElements.elements.logoutButton.click();
    }

    static logout() {
        this.clickHeaderMenuOption();
        this.clickLogoutButton();
    }

    static validateLogoutUserSuccessfully() {
        cy.url().should('include', 'logout');
        cy.contains('h5', 'Log out of your Atlassian account').should('be.visible');
    }

    static clickBoardMenu() {
        BoardElements.elements.boardMenu.click();
    }

    static clickCloseBoardButton() {
        BoardElements.elements.closeBoardButton.click();
    }

    static clickCloseButton() {
        BoardElements.elements.closeButton.click();
    }

    static clickDeleteBoardButton() {
        BoardElements.elements.deleteBoardButton.click();
    }

    static clickDeleteButton() {
        BoardElements.elements.deleteButton.click();
    }

    static validateDeleteBoardSuccessfully(board_name) {
        cy.url().should('include', '/boards');
        cy.contains(board_name).should('not.exist');
    }

    static createBoard(board_name) {
        this.clickCreateBoardButton();
        this.clickHeaderCreateBoardButton();
        this.insertBoardTitle(board_name);
        this.clickSubmitBoardButton(board_name);
    }

    static deleteBoard(board_name) {
        cy.contains(board_name).click();
        this.clickBoardMenu();
        this.clickCloseBoardButton();
        this.clickCloseButton();
        this.clickDeleteBoardButton();
        this.clickDeleteButton();
    }
}