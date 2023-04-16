require("cypress-xpath");
// go
// back
// reload
describe("mysuite", () => {
  it("NavigationTest", () => {
    cy.visit("https://demo.opencart.com/");
    cy.title().should("eq", "Your Store");
    cy.get("li:nth-child(7) a:nth-child(1)");
    cy.get("div[id='content'] h2").should("have.text", "Cameras");
  });
});
