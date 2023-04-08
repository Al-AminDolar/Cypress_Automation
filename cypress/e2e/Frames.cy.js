// source link:https://youtu.be/CTpSOW-oL7k Is a Great Engineer
require("cypress-iframe");

describe("handaling frames", () => {
  it("appproach 1", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);

    iframe.clear().type("Dollar Is a Great Engineer {ctrl+a}");

    cy.get("[aria-label='Bold']").click();
  });

  it("appproach -2 using custom commands", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");

    cy.getIframe("#mce_0_ifr")
      .clear()
      .type("Dollar Is a Great Engineer {ctrl+a}");

    cy.get("[aria-label='Bold']").click();
  });

  it.only("appproach -3 using cypress plugin", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr")

      .clear()
      .type("Dollar Is a Great Engineer {ctrl+a}");

    cy.get("[aria-label='Bold']").click();
  });
});
