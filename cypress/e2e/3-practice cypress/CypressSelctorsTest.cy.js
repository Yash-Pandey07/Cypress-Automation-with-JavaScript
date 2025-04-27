describe("Cypress Practice Suite", () => {
  it("Cypress Test 1", () => {

    cy.visit("https://demoqa.com/")
    // cy.visit("https://github.com/search?q=Yash%20Pandey&type=repositories");
    
    // cy.get('#APjFqb').type('Yash Pandey FIS {Enter}')
    cy.get('.category-cards > :nth-child(1)').click();
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();

    cy.get('#userName').type('Yash Pandey');
    cy.get('#userEmail').type('sample@email.com');
    cy.get('#submit').click();
    cy.get('#name').should('contain.text', 'Yash Pandey');
    cy.get('#email').should('contain.text', 'sample@email.com');

    cy.contains("Yash Pandey").should("be.visible");          // By Text 
    //https://docs.cypress.io/app/core-concepts/interacting-with-elements#__docusaurus_skipToContent_fallback
    


    // cy.contains("Google Search").click()
    //By Attribute
    // cy.get("qbsearch-input[class='search-input flex-1']").then((element) => {
    //   cy.log("Element found 1: ", element.text());
    // });

    // //By ID
    // cy.get("div.overflow-hidden > span#qb-input-query").then((element) => {
    //   cy.log("Element found 2: ", element.text());
    // });

    //By Class


  });
});
