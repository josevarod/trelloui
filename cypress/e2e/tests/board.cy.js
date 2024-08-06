import { it } from "mocha";
import { BoardHelper } from "../pages/board/board.helper";
import { LoginConstants } from "../pages/login/login.constants";
import { LoginHelper } from "../pages/login/login.helper";

describe('Verify that it is possible to create a new board.', () => {
    const username = Cypress.env('CYPRESS_USERNAME');
    const password = Cypress.env('CYPRESS_PASSWORD');
    const testData = LoginConstants.testData;

    it('Verify that it is possible to login successfully with valid credentials.', () => {
        LoginHelper.login(username, password);
        LoginHelper.validateUserLoginSuccessfullySpanish();
    });

    
});
