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

  it.skip("Count Rows approch-1", () => {
    cy.get(".table.table-bordered.table-hover>thead>tr")
      .children()
      .its("length")
      .then((count) => {
        cy.log(`There are ${count} rows here`);
      });
  });

  it.skip("Count Rows approach-2", () => {
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

  it.skip("Count Columns approach-1", () => {
    cy.get(".table.table-bordered.table-hover>tbody>tr")
      .its("length")
      .then((count) => {
        cy.log(`There are ${count} Columns in the table`);
      });
  });

  it.skip("count columns approach-2", () => {
    cy.get(".table.table-bordered.table-hover>tbody>tr")
      .its("length")
      .then((count) => {
        if (count > 0) {
          cy.log(`There are ${count} Columns in the table`);
        } else {
          cy.log(`There are no Columns in the table`);
        }
      });
  });

  it.skip("Check  cell data from specific row and column", () => {
    cy.get(
      ".table.table-bordered.table-hover>tbody>tr:nth-child(5)>td:nth-child(3)"
    ).contains("princytrainings4@gmail.com");
  });

  it.skip("Red all the rows and columns data from 1st page", () => {
    cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });

  it.only("pagination", () => {
    // find totall number of pages
    // cy.get(".col-sm-6.text-end").then((e) => {
    //   let mytext = e.text();
    //   let totalpages = mytext.substring(
    //     mytext.indexOf("(") + 1,
    //     mytext.indexOf("Pages") - 1
    //   );
    //   cy.log("Total number of pages in a table========>" + totalpages);
    // });

    let totalpages = 3;
    for (let p = 1; p <= totalpages; p++) {
      if (totalpages > 1) {
        cy.log("Active Page" + p);
        cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
        cy.wait(3000);
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").each(
          ($row, index, $rows) => {
            cy.wrap($row).within(() => {
              cy.get("td:nth-child(3)").then((e) => {
                e.text(); //email
              });
            });
          }
        );
      }
    }
  });
});
