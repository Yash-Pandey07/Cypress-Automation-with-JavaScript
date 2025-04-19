// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

//
// This block hides unnecessary network request logs (XHR, Fetch) 
// from the Cypress Command Log to keep the UI clean for test steps only.

const app = window.top; // Get reference to the Cypress Test Runner's top-level window

// Check if the custom style tag is already added to avoid duplicates
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {

  // Create a <style> element to inject custom CSS
  const style = app.document.createElement("style");

  // Define CSS rules to hide specific command logs (request, xhr, fetch)
  style.innerHTML = `
    .command-name-request,   /* Hides general network request logs */
    .command-name-xhr,       /* Hides XHR (XMLHttpRequest) logs */
    .command-name-fetch {    /* Hides Fetch API request logs */
      display: none !important;
    }
  `;

  // Add a unique attribute to prevent duplicate style injection
  style.setAttribute("data-hide-command-log-request", "");

  // Append the style tag to the <head> of the Cypress Test Runner
  app.document.head.appendChild(style);
}
