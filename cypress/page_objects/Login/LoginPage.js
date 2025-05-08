import { PageObject } from "../PageObject";

export class LoginPage extends PageObject {
  get usernameInput() {
    return 'input[id="txt-username"]';
  }

  get passwordInput() {
    return 'input[id="txt-password"]';
  }

  get loginButton() {
    return 'button[id="btn-login"]';
  }
  
  navigateTo() {
    this.visit("/profile.php");
  }

  fillUsername(username) {
    this.type(this.usernameInput, username);
  }

  fillPassword(password) {
    this.type(this.passwordInput, password);
  }

  clickLogin() {
    this.click(this.loginButton);
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.clickLogin();
  }
}
