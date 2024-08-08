import { generateRandomString } from "../../../support/utils";

export class BoardConstants {
    static get boardTestData() {
        return {
            boardName: generateRandomString('board'),
        }
    }
}