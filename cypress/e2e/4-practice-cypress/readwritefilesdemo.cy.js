before(function () {
  cy.fixture("example.json").as("exampleData");
});

it("Read and Write Files Demo using Fixtures", function () {
  cy.fixture("example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
    cy.log(data.body);

    cy.log(
      this.exampleData.name +
        " " +
        this.exampleData.email +
        " " +
        this.exampleData.body
    );
  });
});

it("Read file using cy.readFile", function () {
  cy.readFile("./cypress/fixtures/example.json").then((data) => {
    cy.log(data.name);
    cy.log(data.email);
    cy.log(data.body);
  });
});

it.skip("Write file using cy.writeFile", function () {
  cy.writeFile("./cypress/fixtures/sample.json", {
    name: "John Doe",
    email: "sample@email.com",
  });
  // Appends new data with a newline
  cy.writeFile(
    "./cypress/fixtures/sample.json",
    "\n" +
      JSON.stringify({
        name: "Jane Doe",
        email: "another@email.com",
      }),
    { flag: "a+" }
  );
});
