import PageObject from "../../page_objects/PageObject.js";

class MakeAppointmentPage extends PageObject {
  get facilitySelect() {
    return 'select[id="combo_facility"]';
  }

  get applyReadmissionCheckBox() {
    return 'input[id="chk_hospotal_readmission"]';
  }

  get healthcareProgramMedicareRadioButton() {
    return 'input[id="radio_program_medicare"]';
  }

  get healthcareProgramMedicaidRadioButton() {
    return 'input[id="radio_program_medicaid"]';
  }

  get healthcareProgramNoneRadioButton() {
    return 'input[id="radio_program_none"]';
  }

  get visitDateInput() {
    return 'input[id="txt_visit_date"]';
  }

  get commentInput() {
    return 'textarea[id="txt_comment"]';
  }

  get bookAppointmentButton() {
    return 'button[id="btn-book-appointment"]';
  }

  navigateTo() {
    this.visit("/appointment.php");
  }

  switchFacility(facility) {
    this.select(this.facilitySelect, facility);
  }

  checkReadmission(readmission) {
    if (readmission) {
      this.check(this.applyReadmissionCheckBox);
    }
  }

  switchHealthcareProgram(healthcare_program) {
    switch (healthcare_program) {
      case "medicare":
        this.check(this.healthcareProgramMedicareRadioButton);
        break;

      case "medicaid":
        this.check(this.healthcareProgramMedicaidRadioButton);
        break;

      case "none":
        this.check(this.healthcareProgramNoneRadioButton);
        break;

      default:
        break;
    }
  }

  fillVisitDate(visit_date) {
    if (visit_date != null) {
      this.type(this.visitDateInput, visit_date);
    }
  }

  fillComment(comment) {
    this.type(this.commentInput, comment);
  }

  clickBookAppointment() {
    this.click(this.bookAppointmentButton);
  }

  makeAppointment(args) {
    let appointmentData = JSON.parse(args);
    
    this.switchFacility(appointmentData.facility);
    this.checkReadmission(appointmentData.hospital_readmission);
    this.switchHealthcareProgram(appointmentData.healthcare_program);
    this.fillVisitDate(appointmentData.visit_date);
    this.fillComment(appointmentData.comment);
    this.clickBookAppointment();
  }
}

export default new MakeAppointmentPage();
