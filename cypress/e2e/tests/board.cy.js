import { it } from "mocha";
import { BoardHelper } from "../pages/board/board.helper";
import { LoginHelper } from "../pages/login/login.helper";
import { generateRandomString } from "../../support/utils";
import { BoardConstants } from "../pages/board/board.constants";

describe('Verify that it is possible to create a new board.', () => {
    let boardName;

    before(()=>{
        boardName = BoardConstants.boardTestData.boardName;
    });

    const username = Cypress.env('CYPRESS_USERNAME');
    const password = Cypress.env('CYPRESS_PASSWORD');

    it('Verify that it is possible to create a new board not exist', () => {
        const boarName  = generateRandomString(boardName);
        LoginHelper.login(username, password);
        BoardHelper.createBoard(boarName);
        BoardHelper.deleteBoard(boarName);
    });

});

