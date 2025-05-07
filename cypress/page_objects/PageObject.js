export default class PageObject {
  visit(path) {
    cy.visit(path);
  }

  url() {
    cy.url();
  }

  type(target, value) {
    cy.get(target).clear({ force: true }).type(value, { force: true });
  }

  click(target) {
    cy.get(target).click({ force: true });
  }

  select(target, value) {
    cy.get(target).select(value);
  }

  check(target) {
    cy.get(target).check();
  }

  wait(timeout) {
    cy.wait(timeout);
  }

  waitVisible(target, timeout) {
    cy.get(target, { timeout }).should("be.visible");
  }

  assertUrl(expect_url) {
    cy.url().should("eq", expect_url);
  }

  assertContent(target, expect_content) {
    cy.get(target).contains(expect_content);
  }

  assertInvoke(target, invoke, expect_content) {
    cy.get(target).invoke(invoke).should("eq", expect_content);
  }
}
