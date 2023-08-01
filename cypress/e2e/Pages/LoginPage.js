export class LoginPage {

    username_textbox = ':nth-child(1) > .ant-col > .ant-form-item-control > .ant-form-item-children > .example-input > .ant-input';
    password_textbox = '.ant-input-password > .ant-input';
    button_login = '.ant-btn';

    enterUsername(username) {
        cy.get(this.username_textbox).type(username);
    }

    enterPassword(password) {
        cy.get(this.password_textbox).type(password);
    }

    clickLogin() {
        cy.get(this.button_login).click();
    }






}
