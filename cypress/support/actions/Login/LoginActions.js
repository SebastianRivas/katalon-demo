import LoginPage from "../../page_objects/Login/LoginPage";
import { CommonActions } from "../Common/CommonActions";

export class Actions {
    visit() {
        cy.visit("/profile.php");
    }

    type_username(username) {
        cy.get(LoginPage.username_input).type(username);
    }

    type_passwd(passwd) {
        cy.get(LoginPage.passwd_input).type(passwd);
    }

    click_login() {
        cy.get(LoginPage.login_button).click();
    }

    fill_login_form(username, passwd) {
        this.type_username(username);
        this.type_passwd(passwd);
        this.click_login()
    }
}

export const LoginActions = new Actions();