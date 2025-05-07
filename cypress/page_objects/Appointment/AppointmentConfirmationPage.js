import PageObject from "../../page_objects/PageObject.js";

class AppointmentConfirmationPage extends PageObject {
  get facilityText() {
    return 'p[id="facility"]';
  }

  get applyReadmissionText() {
    return 'p[id="hospital_readmission"]';
  }

  get healthcareProgramText() {
    return 'p[id="program"]';
  }

  get visitDateText() {
    return `p[id="visit_date"]`;
  }

  get commentText() {
    return 'p[id="comment"]';
  }

  get goHomepageButton() {
    return 'a[href="https://katalon-demo-cura.herokuapp.com/"]';
  }

  navigateTo() {
    this.visit("/appointment.php#summary");
  }

  ckeckAppointmentConfirmation(args) {
    let summaryData = JSON.parse(args);

    this.assertInvoke(this.facilityText, "text", summaryData.facility);
    this.assertInvoke(this.applyReadmissionText, "text", summaryData.hospital_readmission);
    this.assertInvoke(this.healthcareProgramText, "text", summaryData.healthcare_program);
    this.assertInvoke(this.visitDateText, "text", summaryData.visit_date);
    this.assertInvoke(this.commentText, "text", summaryData.comment);
  }
}

export default new AppointmentConfirmationPage();
