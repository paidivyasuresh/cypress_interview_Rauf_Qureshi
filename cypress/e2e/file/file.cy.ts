
describe('File Upload/Download', () => {
  it('uploads a file (incorrect way)', () => {
    cy.visit('/file')
    cy.get('input[type="file"]').type('cypress/fixtures/sample.txt')
    cy.get('button#upload-btn').click()
    cy.contains('File Uploaded!').should('exist')
  })
})
