// --- INTERVIEWER NOTE ---
// This test tries to upload a file by typing the file path into the input, which does NOT work in Cypress.
// Ask the candidate: What is wrong with this approach? What is the best practice for file uploads in Cypress?
// Expected answer: Use the cypress-file-upload plugin or cy.selectFile (built-in) for file uploads, not .type().

describe('File Upload/Download', () => {
  it('uploads a file (incorrect way)', () => {
    cy.visit('/file')
    cy.get('input[type="file"]').type('cypress/fixtures/sample.txt')
    cy.get('button#upload-btn').click()
    cy.contains('File Uploaded!').should('exist')
  })
})
