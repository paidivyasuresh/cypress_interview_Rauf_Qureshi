// Network stubbing/mocking example

describe('Network Stubbing Example', () => {
  it('mocks a network request', () => {
    cy.intercept('GET', '/api/users', { fixture: 'users.json' }).as('getUsers')
    cy.visit('/network')
    // Simulate a button that triggers the request
    cy.get('button#load-users').click()
    cy.wait('@getUsers')
    cy.get('#users-list').should('contain', 'Alice')
  })
})
