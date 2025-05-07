import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MakeAppointment from "../page_objects/Appointment/MakeAppointmentPage";
import AppointmentConfirmation from "../page_objects/Appointment/AppointmentConfirmationPage";

When("Tester ingresa en el formulario de asignacion de citas los datos", function (args) {
    MakeAppointment.makeAppointment(args);
});

Then("Tester verifica que el resumen de la cita corresponda con", function (args) {
    AppointmentConfirmation.ckeckAppointmentConfirmation(args);
});

Then("Tester verifica que la cita haya sido asignada", function () {
    MakeAppointment.assertUrl("https://katalon-demo-cura.herokuapp.com/appointment.php#summary");
});

Then("Tester verifica que la cita no haya sido asignada", function () {
    MakeAppointment.assertUrl("https://katalon-demo-cura.herokuapp.com/#appointment");
});