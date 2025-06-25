describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.get("#cardSetPage").click();
  });

  describe("Create Set Form", () => {
    it("should successfully submit with valid input (happy path)", () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"]').within(() => {
        cy.get('input[name="titleInput"]').type("New Study Set");
        cy.get('input[type="submit"]').click();
      });
      cy.contains("New Study Set").should("exist");
    });

    it("should show error when submitting empty title (unhappy path)", () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"]').within(() => {
        cy.get('input[type="submit"]').click();
      });
      cy.contains("TITLE CANNOT BE EMPTY").should("exist");
    });
  });

  describe("Add Card Form", () => {
    beforeEach(() => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="set_form"]').within(() => {
        cy.get('input[name="titleInput"]').type("Test Set");
        cy.get('input[type="submit"]').click();
      });
      cy.contains("Test Set").click();
    });

    it("should successfully submit with valid input (happy path)", () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('input[name="termInput"]').type("JavaScript");
        cy.get('input[name="descriptionInput"]').type("A programming language");
        cy.get('input[type="submit"]').click();
      });
      cy.contains("JavaScript").should("exist");
      cy.contains("A programming language").should("exist");
    });

    it("should show error when submitting empty term (unhappy path)", () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('input[name="descriptionInput"]').type("Description only");
        cy.get('input[type="submit"]').click();
      });
      cy.contains("TERM CANNOT BE EMPTY").should("exist");
    });

    it("should show error when submitting empty description (unhappy path)", () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('input[name="termInput"]').type("Term only");
        cy.get('input[type="submit"]').click();
      });
      cy.contains("DESCRIPTION CANNOT BE EMPTY").should("exist");
    });

    it("should show error when submitting empty form (unhappy path)", () => {
      cy.get('[data-cy="toggle_form"]').click();
      cy.get('[data-cy="card_form"]').within(() => {
        cy.get('input[type="submit"]').click();
      });
      cy.contains("TERM AND DESCRIPTION CANNOT BE EMPTY").should("exist");
    });
  });
});
