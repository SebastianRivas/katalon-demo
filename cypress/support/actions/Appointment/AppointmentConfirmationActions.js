import AppointmentConfirmationPage from "../../page_objects/Appointment/AppointmentConfirmationPage";
import { CommonActions } from "../Common/CommonActions";

export class Actions {
    visit() {
        cy.visit("/appointment.php#summary");
    }

    expect_facility(facility) {
        cy.get(AppointmentConfirmationPage.facility_text).invoke('text').should('eq', facility);
    }

    expect_passwd(apply_readmission) {
        cy.get(AppointmentConfirmationPage.apply_readmission_text).invoke('text').should('eq', apply_readmission);
    }

    expect_username(healthcare_program) {
        cy.get(AppointmentConfirmationPage.healthcare_program_text).invoke('text').should('eq', healthcare_program);
    }

    expect_passwd(visit_date) {
        cy.get(AppointmentConfirmationPage.visit_date_text).invoke('text').should('eq', visit_date);
    }

    expect_username(comment) {
        cy.get(AppointmentConfirmationPage.comment_text).invoke('text').should('eq', comment);
    }

    click_go_homepage() {
        cy.get(AppointmentConfirmationPage.go_homepage_button).click();
    }
}

export const AppointmentConfirmationActions = new Actions();