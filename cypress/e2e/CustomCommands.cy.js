//www.youtube.com/watch?v=CZ0c9-Mnil4&t=1482s&ab_channel=SDET-QAAutomationTechie

https: describe("CustomCommands", () => {
  it.skip("handaling Links", () => {
    cy.visit("https://demo.nopcommerce.com/");

    // custom commands
    cy.ClickLink("Apple MacBook Pro 13-inch");
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });

  it.skip("overritting existing commands", () => {
    cy.visit("https://demo.nopcommerce.com/");

    // custom commands
    cy.ClickLink("Apple MacBook Pro 13-inch");
    cy.get("div[class='product-name'] h1").should(
      "have.text",
      "Apple MacBook Pro 13-inch"
    );
  });

  it.only("Login commands", () => {
    cy.visit("https://demo.nopcommerce.com/");
    cy.wait(3000);
    cy.ClickLink("Log in");
    cy.loginApp("alamin.dolar1@gmail.com", "test123");
    cy.get(".ico-account").should("have.text", "My account");
  });
});
