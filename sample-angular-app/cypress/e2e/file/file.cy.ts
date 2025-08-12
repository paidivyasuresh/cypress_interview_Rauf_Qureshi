

describe('File Upload/Download', () => {
  it('uploads a file (incorrect way)', () => {
    cy.visit('/file')
    // INCORRECT: .type() does not work for file inputs in Cypress
    cy.get('input[type="file"]').type('cypress/fixtures/sample.txt')
    cy.get('button#upload-btn').click()
    cy.contains('File Uploaded!').should('exist')
  })
})
