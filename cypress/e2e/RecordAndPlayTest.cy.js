describe('template spec', () => {
  it('passes', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.youtube.com/');

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.ytSearchboxComponentInput').clear('N');
    cy.get('.ytSearchboxComponentInput').type('Nitish rajput{enter}');
    cy.get('#channel-title > #container > #text-container > #text').click();
    /* ==== End Cypress Studio ==== */
  })
})