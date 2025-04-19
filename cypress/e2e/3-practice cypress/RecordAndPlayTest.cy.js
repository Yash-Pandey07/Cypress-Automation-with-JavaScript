// to get auto recommendations in cypress
// / <reference types="cypress" />          //make first 2 "//" to "///" to get auto recommendations in cypress
// ************************************************************** 
// This is a test file to demonstrate the use of Cypress Studio for recording and playing back tests.
describe('Test Suite 1', () => {
  it('My Test 1', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.log("Test1 is running")
    cy.log("Navogating to youtube")
    cy.visit('https://www.youtube.com/');

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.log("Searching for Nitish rajput")
    cy.get('.ytSearchboxComponentInput').clear('N');
    cy.log("Searching for Nitish rajput by clicking enter")
    cy.get('.ytSearchboxComponentInput').type('Nitish rajput{enter}');
    cy.log("Clicking on channel link")
    cy.get('#channel-title > #container > #text-container > #text').click();
    /* ==== End Cypress Studio ==== */
  })

  it('My Test 2', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.log("Test2 is running")
    cy.log("Navogating to youtube")
    cy.visit('https://www.youtube.com/');

    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.log("Searching for T series")
    cy.get('.ytSearchboxComponentInput').clear('N');
    cy.log("Searching for T series by clicking enter")
    cy.get('.ytSearchboxComponentInput').type('t series {enter}');
    cy.log("Clicking on channel link")
    cy.get('#channel-title > #container > #text-container > #text').click();
    /* ==== End Cypress Studio ==== */
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('saucedemo', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').clear('s');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').clear('s');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('[data-test="inventory-sidebar-link"]').click();
    cy.get('#react-burger-cross-btn').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
    cy.get('[data-test="shopping-cart-badge"]').click();
    cy.get('.header_label').click();
    cy.get('.header_label').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('.app_logo').click();
    cy.get('#react-burger-cross-btn').click();
    cy.get('[data-test="shopping-cart-badge"]').click();
    /* ==== End Cypress Studio ==== */
    cy.get
  });
})