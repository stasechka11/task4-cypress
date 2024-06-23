describe("Tests BooksApp", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  })

  it("Success login", () => {
    cy.login("bropet@mail.ru", 123);
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  })

  it("Login with empty email", () => {
    cy.login("", 123);
    cy.CheckInputValidity("#mail");
  })

  it("Login with empty password", () => {
    cy.login("bropet@mail.ru", "");
    cy.CheckInputValidity("#pass");
  })

  it("Login with empty email and password", () => {
    cy.login("", "");
    cy.CheckInputValidity("#mail");
    cy.CheckInputValidity("#pass");
  })
})