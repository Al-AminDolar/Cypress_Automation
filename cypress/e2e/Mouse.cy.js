require("cypress-xpath");

describe("Mouse Operations", () => {
  it.skip("Hover", () => {
    cy.visit("https://demo.opencart.com/");
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("not.be.visible");
    cy.get(".nav > :nth-child(1) > .dropdown-toggle")
      .trigger("mouseover")
      .click();
    cy.get(
      "body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    ).should("be.visible");
  });

  it.only("Right click", () => {
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    // approach1
    // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    // cy.get(
    //   ".context-menu-item.context-menu-icon.context-menu-icon-copy"
    // ).should("be.visible");

    // Approach-2
    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get(
      ".context-menu-item.context-menu-icon.context-menu-icon-copy"
    ).should("be.visible");
  });
});
