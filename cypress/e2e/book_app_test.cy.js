describe("Tests BooksApp", () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it.only("Success login", () => {
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

  it("Add book", () => {
    const title = "Title" + Date.now();
    const author = "Author" + Date.now();

    cy.login("bropet@mail.ru", 123);
    cy.addBook(title, author);
    cy.get('.card-body > .card-title').last().should("have.text", title);
    cy.get('.card-body > .card-text').last().should("have.text", author);
  })

  it("Add book to favorites", () => {
    const title = "Title" + Date.now();
    const author = "Author" + Date.now();

    cy.login("bropet@mail.ru", 123);
    cy.addBook(title, author);
    cy.contains('.card-title', title).parent().parent().contains('button', 'Add to favorite').click();
    cy.contains('.card-title', title).parent().parent().contains('button', 'Delete from favorite').should('be.visible');
    cy.get('[href="/favorites"]').click();
    cy.contains('.card-title', title).should('be.visible');
  })

  it.only("Delete book from favorites", () => {
    const title = "Title" + Date.now();
    const author = "Author" + Date.now();

    cy.login("bropet@mail.ru", 123);
    cy.addBook(title, author);
    cy.contains('.card-title', title).parent().parent().contains('button', 'Add to favorite').click();
    cy.contains('.card-title', title).parent().parent().contains('button', 'Delete from favorite').should('be.visible');

    cy.contains('.card-title', title).parent().parent().contains('button', 'Delete from favorite').click();
    cy.contains('.card-title', title).parent().parent().contains('button', 'Add to favorite').should('be.visible');
  })
})