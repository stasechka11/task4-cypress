describe("Tests BooksApp", () => {
  it.skip("Success login", () => {
    cy.visit("http://localhost:3000/");
    cy.login("bropet@mail.ru", 123);
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  })

  it.skip("Login with empty email", () => {
    cy.visit("http://localhost:3000/");
    cy.login("", 123);
    cy.CheckInputValidity("#mail");
  })

  it.skip("Login with empty password", () => {
    cy.visit("http://localhost:3000/");
    cy.login("bropet@mail.ru", "");
    cy.CheckInputValidity("#pass");
  })

  it("Login with empty email and password", () => {
    cy.visit("http://localhost:3000/");
    cy.login("", "");
    cy.CheckInputValidity("#mail");
    cy.CheckInputValidity("#pass");
  })
})