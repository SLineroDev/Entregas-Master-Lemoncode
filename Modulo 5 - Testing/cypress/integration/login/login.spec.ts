describe('Login', () => {
  it('should visit the login page', () => {
    cy.visit('/')
  })

  it('should not login with incorrect credentials', () => {
    cy.visit('http://localhost:8080')
    cy.get('input[name=user]').type('admin')
    cy.get('input[name=password]').type('invalid')
    cy.get('button[type=submit]').click()
    cy.get('#snackbar').should('be.visible')
  })

  it('should login properly with correct credentials', () => {
    cy.visit('http://localhost:8080')
    cy.get('input[name=user]').type('admin')
    cy.get('input[name=password]').type('test')
    cy.get('button[type=submit]').click()
    cy.url().should('include', 'submodule-list')
  })
})
