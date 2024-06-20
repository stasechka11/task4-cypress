describe('Tests BooksApp', () => {
  it('Success login', () => {
    cy.visit('http://localhost:3000/');
    cy.login("bropet@mail.ru", 123);
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  })
})