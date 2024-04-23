describe("Testare Linkedin", () => {
  it("Vizitare URL si login", () => {
    cy.visit("https://linkedin.com");
    cy.get(".nav__button-secondary").click();
    cy.get("#username").click().type("mrpanda20012111@yahoo.com");
    cy.get("#password").click().type("KalimeraBont3@2324!@$");
    cy.get(".btn__primary--large").click();
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.get(".identity-headline").should("exist");
  });
});
