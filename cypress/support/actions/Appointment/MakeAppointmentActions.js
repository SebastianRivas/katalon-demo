import MakeAppointmentPage from "../../page_objects/Appointment/MakeAppointmentPage";
import { CommonActions } from "../Common/CommonActions";

export class Actions {
    visit() {
        cy.visit("/appointment.php");
    }

    select_facility(facility) {
        cy.get(MakeAppointmentPage.facility_select).select(facility);
    }

    check_apply_readmission(readmission) {
        if (readmission) {
            cy.get(MakeAppointmentPage.apply_readmission_checkBox).check();
        }
    }

    switch_healthcare_program(healthcare_program) {
        switch (healthcare_program) {
            case "medicare":
                cy.get(MakeAppointmentPage.healthcare_program_medicare_radioButton).check();
                break;
        
            case "medicaid":
                cy.get(MakeAppointmentPage.healthcare_program_medicaid_radioButton).check();
                break;
        
            case "none":
                cy.get(MakeAppointmentPage.healthcare_program_none_radioButton).check();
                break;
        
            default:
                break;
        }
    }

    type_visit_date(visit_date) {
        if (visit_date != "none") {
            cy.get(MakeAppointmentPage.visit_date_input).type(visit_date);   
        }
    }

    type_comment(comment) {
        cy.get(MakeAppointmentPage.comment_input).type(comment, { force: true });
    }

    click_book_appointment() {
        cy.get(MakeAppointmentPage.book_appointment_button).click();
    }

    fill_appointment_form(facility, readmission, healthcare_program, visit_date, comment) {
        this.select_facility(facility);
        this.check_apply_readmission(readmission);
        this.switch_healthcare_program(healthcare_program);
        this.type_visit_date(visit_date);
        this.type_comment(comment);
        this.click_book_appointment();
    }
}

export const MakeAppointmentActions = new Actions();