import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { MakeAppointmentActions } from "../actions/Appointment/MakeAppointmentActions";
import { AppointmentConfirmationActions } from "../actions/Appointment/AppointmentConfirmationActions";
import { LoginActions } from "../actions/Login/LoginActions";
import { CommonActions } from "../actions/Common/CommonActions";

Given("Tester realiza el login con {string} como usuario y {string} como contraseña", function (user, passwd) {
    LoginActions.visit();
    LoginActions.fill_login_form(user, passwd);
});

When("Tester ingresa en elformulario de asignacion de citas los datos {string}, {string}, {string}, {string}, {string}", function (facility, hospital_readmission, healthcare_program, visit_date, comment) {
    MakeAppointmentActions.fill_appointment_form(facility, hospital_readmission, healthcare_program, visit_date, comment);
});
    
Then("Tester verifica que la cita haya sido asignada", function () {
    CommonActions.actual_url_eq("https://katalon-demo-cura.herokuapp.com/appointment.php#summary");
});

Then("Tester verifica que la cita no haya sido asignada", function () {
    CommonActions.actual_url_eq("https://katalon-demo-cura.herokuapp.com/#appointment");
});