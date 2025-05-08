import { Given, When, Then, BeforeAll, Before } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../page_objects/Home/HomePage";
import { LoginPage } from "../page_objects/Login/LoginPage";

Before(function () {
  this.objHomePage = new HomePage();
  this.objLoginPage = new LoginPage();
});

Given("Tester desea ingresar al login", function () {
  this.objHomePage.navigateTo();
  this.objHomePage.login();
});

When("Tester ingresa {string} como usuario y {string} como contraseña", function (user, passwd) {
  this.objLoginPage.login(user, passwd);
});

Then("Tester verifica que puede accer al aplicativo", function () { 
  this.objLoginPage.assertUrl("https://katalon-demo-cura.herokuapp.com/#appointment");
});

Then("Tester verifica que no puede accder al aplicativo", function () {
  this.objLoginPage.assertContent('p[class="lead text-danger"]', "Login failed! Please ensure the username and password are valid.");
});
