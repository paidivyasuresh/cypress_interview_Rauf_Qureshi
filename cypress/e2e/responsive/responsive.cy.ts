


describe('Responsiveness', () => {
  it('checks mobile view', () => {
    cy.viewport('iphone-6')
    cy.visit('/responsive')
    cy.get('h2').should('contain', 'Responsive Demo') 
   
  })
})
