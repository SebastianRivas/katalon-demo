export class Actions {

    actual_url() {
        cy.url();
    }

    actual_url_eq(expect_url) {
        cy.url().should("eq", expect_url);
    }

    expect_contain(contain) {
        cy.contains(contain);
    }
}

export const CommonActions = new Actions();