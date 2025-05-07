import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../page_objects/Home/HomePage";
import LoginPage from "../page_objects/Login/LoginPage";

Given("Tester desea ingresar al login", function () {
    HomePage.navigateTo();
    HomePage.login();
});

When("Tester ingresa {string} como usuario y {string} como contraseña", function (user, passwd) {
    LoginPage.login(user, passwd);
});

Then("Tester verifica que puede accer al aplicativo", function () {
    LoginPage.assertUrl("https://katalon-demo-cura.herokuapp.com/#appointment");
});

Then("Tester verifica que no puede accder al aplicativo", function () {
    LoginPage.assertContent('p[class="lead text-danger"]', "Login failed! Please ensure the username and password are valid.");
});