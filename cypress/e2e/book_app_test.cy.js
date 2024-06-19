describe('Login to BookApp', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get('.ml-auto > .ml-2').click()
    cy.get('#mail').type("bropet@mail.ru")
    cy.get('#pass').type("123")
    cy.contains("Submit").click()
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible")
  })
})