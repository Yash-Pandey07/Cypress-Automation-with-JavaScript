describe("Cypress selectors Suite", () => {
  it("Cypress Selectors Test 1", () => {
    cy.visit("https://github.com/search?q=Yash%20Pandey&type=repositories");

    //By Attribute
    cy.get("qbsearch-input[class='search-input flex-1']").then((element) => {
      cy.log("Element found 1: ", element.text());
    });

    //By ID
    cy.get("div.overflow-hidden > span#qb-input-query").then((element) => {
      cy.log("Element found 2: ", element.text());
    });

    //By Class


  });
});
