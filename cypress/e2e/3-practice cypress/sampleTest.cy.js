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
      cy.contains('Querying').click()
      cy.url().should('include', '/commands/querying')
    })
  
    it('Type into input and verify the value', () => {
      cy.contains('Actions').click()
      cy.get('.action-email')
        .type('hello@cypress.io')
        .should('have.value', 'hello@cypress.io')
    })
  
    it('Click a button and assert class change', () => {
      cy.contains('Commands').click()
      cy.get('.action-btn')
        .click()
        .should('have.class', 'active')
    })
  
  })
  