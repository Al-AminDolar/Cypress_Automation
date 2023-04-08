describe("Handles Tables", () => {
  beforeEach("Login", () => {
    cy.visit("https://demo.opencart.com/admin/index.php?route=common/login");
    cy.get("#input-username").type("demo");
    cy.get("#input-password").type("demo");
    cy.get("button[type='submit']").click();
    cy.get("button[class='btn-close']").click();
    cy.get("#menu-customer>a").click();
    cy.get("#menu-customer>ul>li:first-child").click();
  });

  it("Count Rows approch-1", () => {
    cy.get(".table.table-bordered.table-hover>thead>tr")
      .children()
      .its("length")
      .then((count) => {
        cy.log(`There are ${count} rows here`);
      });
  });

  it("Count Rows approach-2", () => {
    cy.get(".table.table-bordered.table-hover>thead>tr")
      .children()
      .its("length")
      .then((count) => {
        if (count > 0) {
          cy.log(`There are ${count} rows here`);
        } else {
          cy.log("There is no table on this page");
        }
      });
  });
});
