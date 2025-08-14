
// --- INTERVIEWER NOTE ---
// This test only checks for the presence of a heading after setting the viewport.
// Ask the candidate: What is wrong with this test? What is the best practice for responsive testing?
// Expected answer: The test should verify actual responsive behavior (e.g., layout, menu, or element visibility changes), not just static content.


describe('Responsiveness', () => {
  it('checks mobile view', () => {
    cy.viewport('iphone-6')
    cy.visit('/responsive')
    cy.get('h2').should('contain', 'Responsive Demo') 
   
  })
})
