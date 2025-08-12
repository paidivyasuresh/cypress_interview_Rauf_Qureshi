
// --- INTERVIEWER NOTE ---
// This test demonstrates a common mistake: trying to use cy.get to select elements inside an iframe directly.
// Cypress cannot access elements inside an iframe with cy.get because it only works in the main document.
//
// Best Practice:
// - You must first get the iframe DOM element, then access its contentDocument/body, and then wrap that body with cy.wrap to use Cypress commands inside the iframe.
// - Example (correct way):
//     cy.get('iframe#demo-iframe').then($iframe => {
//       const $body = $iframe[0].contentDocument.body;
//       cy.wrap($body).find('#tinymce').type('Hello from Cypress!');
//     });
//
// Expected from candidate:
// - Candidate should recognize why the current test is incorrect and explain or demonstrate the correct approach as above.
//
// ------------------------

describe('Iframe Handling', () => {
  it('interacts with an iframe', () => {
    cy.visit('/iframe')
    // INCORRECT: This will not work because cy.get cannot see inside the iframe
    cy.get('iframe#demo-iframe').get('#tinymce').type('Hello from Cypress!');
  })
})
