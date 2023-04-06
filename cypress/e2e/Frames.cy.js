// source link:https://youtu.be/CTpSOW-oL7k Is a Great Engineer

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
});
