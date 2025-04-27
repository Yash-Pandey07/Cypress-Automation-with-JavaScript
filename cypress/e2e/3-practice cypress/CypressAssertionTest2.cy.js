describe("Cypress Assertion Suite", () => {
  it("Cypress Assertion Test", () => {
    // Visit the page
    cy.visit("https://example.cypress.io");
    cy.contains('get').click();
    cy.get('#query-btn')
        .should('contain','Button')
        .and('have.class','query-btn btn btn-primary')  // .should('have.class','query-btn btn btn-primary')
        .and('have.id','query-btn')                     // .should('have.id','query-btn')
        .and('be.visible')                              // .should('be.visible')
        .and('be.enabled')                              // .should('be.enabled')
    

  });
});