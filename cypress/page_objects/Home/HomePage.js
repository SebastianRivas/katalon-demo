import PageObject from "../../page_objects/PageObject.js";

class HomePage extends PageObject {
  get makeAppointmentButton() {
    return 'a[id="btn-make-appointment"]';
  }

  get homeMenuButton() {
    return 'a[id="menu-toggle"]';
  }

  get goToHomeButton() {
    return 'a[href="./"]';
  }

  get goToLoginButton() {
    return 'a[href="profile.php#login"]';
  }

  navigateTo() {
    this.visit("/");
  }

  makeAppointment() {
    this.click(this.makeAppointmentButton);
  }

  displayMenu() {
    this.click(this.homeMenuButton);
  }

  home() {
    this.displayMenu();
    this.click(this.goToHomeButton);
  }

  login() {
    this.displayMenu();
    this.click(this.goToLoginButton);
  }
}

export default new HomePage();
