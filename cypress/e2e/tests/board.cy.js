import { it } from "mocha";
import { BoardHelper } from "../pages/board/board.helper";
import { LoginConstants } from "../pages/login/login.constants";
import { LoginHelper } from "../pages/login/login.helper";
import { generateRandomString } from "../../support/utils";

describe('Verify that it is possible to create a new board.', () => {
    const username = Cypress.env('CYPRESS_USERNAME');
    const password = Cypress.env('CYPRESS_PASSWORD');

    it('Verify that it is possible to create a new board not exist', () => {

        LoginHelper.login(username, password);
        BoardHelper.createBoard(generateRandomString('JUAN'));
    });
});

