describe("Site-ul google.com", () => {
  it("Functioneaza cu o cautare basic", () => {
    cy.visit("https://www.google.com");
    cy.get("#L2AGLb").click();
    cy.get(".gLFyf").type("emag").type("{enter}");

    cy.get("#result-stats").should("exist");
  }); // Test Nr.1
});
