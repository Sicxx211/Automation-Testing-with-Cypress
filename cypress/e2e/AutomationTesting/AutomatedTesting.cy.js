describe("Swag Labs automation", () => {
  it("Login does not work with wrong credentials", () => {
    cy.visit("https://www.saucedemo.com/", { failOnStatusCode: false });
    cy.get("#user-name").type("WrongUser");
    cy.get("#password").type("WrongPass");
    cy.get("#login-button").click();
    cy.get(".error-button").should("exist");
    cy.wait(10000); // Works better with Microsoft Edge as browser
  });

  it("Login works with standard credentials", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(".shopping_cart_link").should("exist");
    cy.wait(10000);
  });

  it("User is able to logout using top left menu", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
    cy.get(".login_logo").should("exist");
    cy.wait(10000);
  });

  it("Side bar menu can be opened and closed", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#react-burger-cross-btn").click();
    cy.get('[data-test="title"]').should("exist");
    cy.wait(10000);
  });

  it("Adding an item to cart works correctly", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get(".shopping_cart_badge").should("exist");
    cy.wait(10000);
  });

  it("Removing an item from the cart is working", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="remove-sauce-labs-bike-light"]').click();
    cy.get(".shopping_cart_badge").should("not.exist");
    cy.wait(10000);
  });

  it("Ordering a product function is working", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get("#add-to-cart-sauce-labs-bike-light").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    cy.get("#first-name").type("Test");
    cy.get("#last-name").type("User");
    cy.get("#postal-code").type("1337");
    cy.get("#continue").click();
    cy.get("#finish").click();
    cy.get(".pony_express").should("exist");
    cy.wait(5000);
    cy.screenshot();
    cy.wait(10000);
  });

  it("Opening a product's description page", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(
      '[data-test="item-5-title-link"] > [data-test="inventory-item-name"]'
    ).click();
    cy.get("#add-to-cart").should("exist");
    cy.wait(10000);
  });

  it("Returning to products page", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    cy.get(
      '[data-test="item-5-title-link"] > [data-test="inventory-item-name"]'
    ).click();
    cy.get("#back-to-products").click();
    cy.get('[data-test="title"]').should("exist");
  });
});
