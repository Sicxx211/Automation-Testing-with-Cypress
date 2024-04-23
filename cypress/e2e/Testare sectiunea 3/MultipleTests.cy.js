describe("Multiple Automation Tests", () => {
  it("Check if Digi contains stiri in name", () => {
    cy.visit(
      "https://www.digi24.ro/stiri/externe/video-acuzatii-de-blat-la-semimaratonul-de-la-beijing-trei-alergatori-africani-i-ar-fi-permis-campionului-chinez-sa-castige-2759301"
    );
    cy.url().should("include", "/stiri/");
  });

  it("Asteapta 10 sec si scrie", () => {
    cy.visit("https://google.com");
    cy.get("#L2AGLb").click();
    cy.wait(2000);
    cy.get("#APjFqb").click().type("Sicxx21 cel mai smecher").type("{enter}");
    cy.get("#result-stats").should("exist");
  });

  it("Testul cu un atribut", () => {
    cy.visit("https://google.com");
    cy.get("#L2AGLb").click();
    cy.get("[alt = 'Google']").should("be.visible");
  });

  it("Screenshot la pagina", () => {
    cy.visit("https://rockstargames.com");
    cy.wait(5000);
    cy.screenshot();
    // cy.wait(10000);
    // if (cy.get("#onetrust-accept-btn-handler")) {
    // } else {
    //   cy.screenshot();
    // }
  });

  it("Testul cu o constanta", () => {
    cy.visit("https://google.com");
    cy.get("#L2AGLb").click();
    const googleSearch = cy.get("#APjFqb");

    googleSearch.click().type("123");
    googleSearch.should("have.value", "123");
  });

  it("Testez daca exista clasa dintr-un input", () => {
    cy.visit("https://libris.ro");
    cy.get("#autoCompleteButton").should("have.class", "onSearchClick");
  });
});
