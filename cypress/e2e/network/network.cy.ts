

describe('Network API Example', () => {
  it('loads users from the real API (not best practice)', () => {
    cy.visit('/network')
    cy.get('button#load-users').click()
    cy.get('#users-list').should('contain', 'Alice') 
  })
})
