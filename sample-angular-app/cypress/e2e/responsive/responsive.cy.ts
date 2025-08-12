


describe('Responsiveness', () => {
  it('checks mobile view (anti-pattern)', () => {
    cy.viewport('iphone-6')
    cy.visit('/responsive')
    cy.get('h2').should('contain', 'Responsive Demo') 
   
  })
})
