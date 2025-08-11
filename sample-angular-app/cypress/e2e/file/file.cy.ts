// File upload/download example

describe('File Upload/Download', () => {
  it('uploads a file', () => {
    cy.visit('/file')
    cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.txt')
    cy.get('button#upload-btn').click()
    cy.contains('File Uploaded!').should('exist')
  })
})
