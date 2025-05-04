describe('My First Test Suite', () => {

    beforeEach(() => {
      // Runs before each test in this block
      cy.visit('https://example.cypress.io')
    })
  
    it('Check page title', () => {
      cy.title().should('include', 'Cypress')
    })
  
    it('Check if the header is visible', () => {
      cy.get('h1').should('be.visible').and('contain', 'Kitchen Sink')
    })
  
    it('Navigate to Querying page and verify URL', () => {
      // cy.contains('Querying',{force: true}).click();
      cy.get('ul.home-list a[href="/commands/querying"]').should('be.visible').debug();
      cy.get('ul.home-list a[href="/commands/querying"]').first().click();
      // Verify the URL contains '/commands/querying'
      cy.url().should('include', '/commands/querying')
    })
  
    it.skip('Type into input and verify the value', () => {
      cy.contains('Actions').click()
      cy.get('.action-email')
        .type('hello@cypress.io')
        .should('have.value', 'hello@cypress.io')
    })
  
    it.skip('Click a button and assert class change', () => {
      cy.contains('Commands').click()
      cy.get('.action-btn')
        .click()
        .should('have.class', 'active')
    })
  
  })
  