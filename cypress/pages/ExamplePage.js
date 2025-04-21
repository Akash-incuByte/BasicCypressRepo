class ExamplePage {
    // Selectors
    elements = {
        body: () => cy.get('body')
    }

    // Actions
    visit() {
        cy.visit(Cypress.config("baseUrl"));
        return this;
    }

    // Assertions
    verifyPageLoaded() {
        this.elements.body().should('be.visible');
        return this;
    }

    verifyExampleText() {
        this.elements.body().should('not.be.empty');
        this.elements.body().should('be.visible');
        return this;
    }
}

export default new ExamplePage();