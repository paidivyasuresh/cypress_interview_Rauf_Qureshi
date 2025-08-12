
// --- INTERVIEWER NOTE ---
// This test currently calls the real /api/users endpoint.
// Ask the candidate: How would you improve this test to make it more reliable and independent of backend/third-party API failures?
// Expected answer: Use cy.intercept to mock the API response, so the test does not depend on the real API being up.
//
describe('Network API Example', () => {
  it('loads users from the real API (not best practice)', () => {
    cy.visit('/network')
    cy.get('button#load-users').click()
    cy.get('#users-list').should('contain', 'Alice') // This may fail if API is down or returns no data
  })
})
