"# Cypress-Automation-with-JavaScript" 

run-> npm install cypress --save-dev
update the package.json with adding this 
  "scripts": {
    "cypress open": "cypress open"
  }
run -> npx cypress open


===========================================
TO run project 
i)run cypress test runner
ii) npx cypress run --browser edge --headed --spec ".js path"

npx cypress run --browser edge --headed --spec "cypress/e2e/RecordAndPlayTest.cy.js"

==========================================
to disable the xhr and fetch logs 

add it in support/e2e.js file

const app = window.top;
if (!app.document.head.querySelector("[data-hide-command-log-request]")) {
const style = app.document.createElement("style");
style.innerHTML =".command-name-request, .command-name-xhr { display: none }";
style.setAttribute("data-hide-command-log-request", "");
app.document.head.appendChild(style);
}

=====================================================

to get auto recommendations in cypress
/// <reference types="Cypress" />

or create a jsconfig.json file in root folder and add below code
{
    "include": [
        "./node_modules/cypress",
        "cypress/**/*.js",
        "cypress/**/*.ts",
        "cypress/**/*.json",
        
    ]
}

==========================================================
Assertions

1) to.equal
2) have.text
3) contain
4) be.visible
5) have.html
6) have.atts
7) have.attr & include
8) to.have.length
 