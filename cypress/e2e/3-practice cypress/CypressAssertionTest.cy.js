const { contains } = require("cypress/types/jquery");

describe("Cypress Assertion Suite", () => {
  it("Cypress Assertion Test", () => {
    // Visit the Google search page
    cy.visit("https://demoqa.com/text-box");

    //to.equal assertion 
    cy.get("textarea[placeholder='Current Address']").then((element) => {
      expect(element).to.equal("javascript by testers talk").then((element) => {
          expect(element).to.equal("Current Address");
        });
    });

    //have.text assertion
    cy.get("textarea[placeholder='Current Address']").should("have.text", "Current Address");
    cy.get("textarea[placeholder='Current Address']").should("not.have.text", "javascript by testers talk");
    cy.get("textarea[placeholder='Current Address']").should("contains","Current Address");
  });
});
