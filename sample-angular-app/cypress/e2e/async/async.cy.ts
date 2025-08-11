// Async handling and selector issues

describe('Async Handling and Selector Issues', () => {
  it('fails due to missing await or wrong selector', () => {
    cy.visit('/async')
    // Wrong selector, will fail
    cy.get('.non-existent-class').should('exist')
  })
})
