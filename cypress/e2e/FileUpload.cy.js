import "cypress-file-upload";

describe("File Uploads", () => {
  it.skip("Single File Upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("dolar.txt");
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it.skip("File Upload - Rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile({
      filePath: "dolar.txt",
      fileName: "LOve.txt",
    });
    cy.get("#file-submit").click();
    cy.wait(3000);
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
  });

  it.skip("File Upload - Drag n Drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#drag-drop-upload").attachFile("dolar.txt", {
      subjectType: "drag-n-drop",
    });

    cy.get(
      "#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span"
    ).should("be.visible");
  });

  it("File Upload - Multiple File Upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
    cy.get("#filesToUpload").attachFile(["dolar.txt", "sss.txt"]);
    cy.get(":nth-child(6) > strong").should("have.text", "Files You Selected:");
  });
});
