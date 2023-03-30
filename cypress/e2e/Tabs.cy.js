describe("Handle child Tabs", () => {
  it("Approch1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //parent Tab
    cy.get(".example > a").invoke("removeAttr", "target").click(); //clicking on link
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    cy.wait(5000); //wait
    //operations
    cy.go("back"); // back to parrent tab
  });

  it("Approch2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //parent Tab

    cy.get(".example > a").then((e) => {
      let url = e.prop("href");

      cy.visit(url);
    });

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    cy.wait(5000); //wait
    //operations
    cy.go("back"); // back to parrent tab
  });
});

describe("Handle child Tabs", () => {
  it("Approch1", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //parent Tab
    cy.get(".example > a").invoke("removeAttr", "target").click(); //clicking on link
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    cy.wait(5000); //wait
    //operations
    cy.go("back"); // back to parrent tab
  });

  it("Approch2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows"); //parent Tab

    cy.get(".example > a").then((e) => {
      let url = e.prop("href");

      cy.visit(url);
    });

    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    cy.wait(5000); //wait
    //operations
    cy.go("back"); // back to parrent tab
  });
});
