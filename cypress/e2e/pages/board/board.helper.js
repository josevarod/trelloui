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

    static insertBoardTitle(boardName) {
        BoardElements.elements.boardTitle.type(boardName);
    }

    static clickSubmitBoardButton(boardName) {
        BoardElements.elements.submitButton.click();
        BoardElements.elements.boardName.should('be.visible');
        cy.url().should('include', `/${boardName.toLowerCase()}`);
        BoardElements.elements.boardName.should('contain.text', boardName);
    }

    static validateBoardCreatedSuccessfully(boardName) {
        cy.url().should('include', `/${boardName}`);
        BoardElements.elements.boardName.should('contain.text', boardName);
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
        BoardElements.elements.closeButtonConfirm.click();
    }

    static clickDeleteBoardButton() {
        BoardElements.elements.deleteBoardButton.click();
    }

    static clickDeleteButton() {
        BoardElements.elements.deleteButton.click();
    }

    static validateDeleteBoardSuccessfully(boardName) {
        cy.url().should('include', '/boards');
        cy.contains(boardName).should('not.exist');
    }

    static createBoard(boardName) {
        this.clickCreateBoardButton();
        this.clickHeaderCreateBoardButton();
        this.insertBoardTitle(boardName);
        this.clickSubmitBoardButton(boardName);
    }

    static deleteBoard(boardName) {
        cy.contains(boardName).click();
        this.clickBoardMenu();
        this.clickCloseButton();
        this.clickDeleteBoardButton();
        this.clickDeleteButton();
        cy.contains(boardName).should('not.exist');
    }
}