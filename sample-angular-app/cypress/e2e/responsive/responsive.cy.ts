
// --- INTERVIEWER NOTE ---
// This test only checks for the presence of a heading after setting the viewport.
// Ask the candidate: What is wrong with this test? What is the best practice for responsive testing?
// Expected answer: The test should verify actual responsive behavior (e.g., layout, menu, or element visibility changes), not just static content.

describe('Responsiveness', () => {
  it('checks mobile view (anti-pattern)', () => {
    cy.viewport('iphone-6')
    cy.visit('/responsive')
    cy.get('h2').should('contain', 'Responsive Demo') // This does not verify any responsive behavior!
    // Below validation checks if the desktop menu is hidden on mobile and visible on desktop
    //cy.get('#desktop-menu').should('not.be.visible')
  })
})
