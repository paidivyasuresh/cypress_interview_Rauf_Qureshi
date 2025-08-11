// Iframe handling example

describe('Iframe Handling', () => {
  it('interacts with an iframe', () => {
    cy.visit('/iframe')
    cy.get('iframe#demo-iframe').then($iframe => {
      const $body = $iframe[0].contentDocument.body;
      cy.wrap($body).find('#tinymce').type('Hello from Cypress!');
    });
  })
})
