/// <reference types="cypress" />

describe("Login", () => {
  it("should login successfully", () => {
    cy.visit("http://localhost:3000");

    cy.contains("I'm in login page!");
  });
});
