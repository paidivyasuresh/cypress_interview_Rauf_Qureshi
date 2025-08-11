// Flaky test example: relies on timing, may fail intermittently

describe('Flaky Test Example', () => {
  it('sometimes fails due to timing', () => {
    cy.visit('/flaky')
    // Simulate a flaky wait
    cy.wait(Math.random() > 0.5 ? 100 : 2000)
    cy.contains('flaky-page works!').should('exist')
  })
})
