
describe('Iframe Handling', () => {
  it('interacts with an iframe', () => {
    cy.visit('/iframe')
    cy.get('iframe#demo-iframe').get('#tinymce').type('Hello from Cypress!');
  })
})
