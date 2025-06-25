describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("should navigate to Card Sets page when clicking 'Card Sets'", () => {
    cy.get("#cardSetPage").click();
    cy.get('[data-cy="study-set-header"]').should("exist");
  });

  it("should navigate to About page when clicking 'About'", () => {
    cy.get("#aboutPage").click();
    cy.get('[data-cy="about_page"]').should("exist");
  });

  it("should navigate to Home page when clicking 'Home'", () => {
    cy.get("#aboutPage").click();
    cy.get("#homePage").click();
    cy.get('[data-cy="home_header"]').should("exist");
  });
});
