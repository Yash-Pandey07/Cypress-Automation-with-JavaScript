export class LoginOrangeHrmLive {
  //constatnts for the locators
  LoginPage_textbox_usernameField =
    ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input";
  LoginPage_textbox_passwordField =
    ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input";
  LoginPage_textbox_loginButton = ".oxd-button";

  //functions to perform actions on the login page
  visit(website) {
    cy.visit(website);
  }

  fillUsername(username) {
    cy.get(this.LoginPage_textbox_usernameField).type(username);
  }

  fillPassword(password) {
    cy.get(this.LoginPage_textbox_passwordField).type(password);
  }

  submit() {
    cy.get(this.LoginPage_textbox_loginButton).click();
  }
}
