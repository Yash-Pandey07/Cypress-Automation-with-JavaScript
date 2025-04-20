describe("Cypress Assertion Suite", () => {
  it("Cypress Assertion Test", () => {
    // Visit the page
    cy.visit("https://duckduckgo.com/?q=yash+pandey+fis");

    // Validate the value of the input field using `.invoke("val")`
    cy.get("input[class='search__input--adv js-search-input']")
      .invoke("val")
      .should("equal", "yash pandey fis");

    // Validate the value using `should("have.value")`
    cy.get("input[class='search__input--adv js-search-input']").should(
      "have.value",
      "yash pandey fis"
    );

    // Validate that the value does not match an incorrect value
    cy.get("input[class='search__input--adv js-search-input']").should(
      "not.have.value",
      "yashh pandey fis"
    );

    // Validate visibility
    cy.get("input[class='search__input--adv js-search-input']").should(
      "be.visible"
    );

    // Remove invalid `.should("have.html")` assertions
    // Input elements do not have inner HTML, so these assertions are not applicable

    cy.get("input[class='search__input--adv js-search-input']").invoke("val").then((value) => {
      expect(value).to.have.length(15);
    });

  });
});