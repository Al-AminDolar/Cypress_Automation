require("cypress-xpath");
require("cypress-iframe");
require("cypress-drag-drop");

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

  it.skip("Right click", () => {
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

  it.skip("Double Click", () => {
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick"
    );
    cy.frameLoaded("#iframeResult"); //frame loaded

    //approach-1
    // cy.iframe("#iframeResult")
    //   .find("button[ondblclick='myFunction()']")
    //   .trigger("dblclick");
    // cy.iframe("#iframeResult").find("#demo").should("have.text", "Hello World");

    //Approach -2
    cy.iframe("#iframeResult")
      .find("button[ondblclick='myFunction()']")
      .dblclick();
    cy.iframe("#iframeResult").find("#demo").should("have.text", "Hello World");
  });

  it.skip("Drag and Drop Using Plugin", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box1").should("be.visible");
    cy.get("#box103").should("be.visible");
    cy.wait(3000);
    cy.get("#box1").drag("#box103", { force: true });
  });

  it.only("Scrolling", () => {
    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
    cy.get(
      ":nth-child(2) > tbody > :nth-child(102) > :nth-child(1) > img"
    ).scrollIntoView({ duration: 2000 });

    cy.get(
      ":nth-child(1) > tbody > :nth-child(2) > :nth-child(2)"
    ).scrollIntoView({ duration: 2000 });
    cy.get(":nth-child(1) > tbody > :nth-child(2) > :nth-child(2)").should(
      "be.visible"
    );
  });
});
