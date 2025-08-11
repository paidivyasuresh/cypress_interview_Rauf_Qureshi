// Parallel-safe test example

describe('Parallel Safe Test', () => {
  it('runs safely in parallel', () => {
    cy.visit('/parallel')
    cy.contains('parallel-page works!').should('exist')
  })
})
