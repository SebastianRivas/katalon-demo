import { Given, When, Then, BeforeAll, Before } from "@badeball/cypress-cucumber-preprocessor";
import { MakeAppointmentPage } from "../page_objects/Appointment/MakeAppointmentPage";
import { AppointmentConfirmationPage } from "../page_objects/Appointment/AppointmentConfirmationPage";

Before(function () {
  this.objMakeAppointmentPage = new MakeAppointmentPage();
  this.objAppointmentConfirmationPage = new AppointmentConfirmationPage();
});

When("Tester ingresa en el formulario de asignacion de citas los datos", function (args) {
    this.objMakeAppointmentPage.makeAppointment(args);
});

Then("Tester verifica que el resumen de la cita corresponda con", function (args) {
    this.objAppointmentConfirmationPage.ckeckAppointmentConfirmation(args);
});

Then("Tester verifica que la cita haya sido asignada", function () {
  this.objMakeAppointmentPage.assertUrl("https://katalon-demo-cura.herokuapp.com/appointment.php#summary");
});

Then("Tester verifica que la cita no haya sido asignada", function () {
  this.objMakeAppointmentPage.assertUrl("https://katalon-demo-cura.herokuapp.com/#appointment");
});
