// --- EXPECTED (Best Practice) ---
// cy.visit('/login')
//   .get('input[name="username"]').type('admin')
//   .get('input[name="password"]').type('password')
//   .get('button[type="submit"]').click()
//   .contains('Login successful!')
// --- INTERVIEWER NOTE ---
// This test does not use command chaining. Ask the candidate to refactor it using Cypress command chaining.
// Expected: Use chaining to make the test more readable and robust.

describe('Command Chaining Example', () => {
  it('fills and submits a form (no chaining)', () => {
    cy.visit('/login')
    const usernameInput = cy.get('input[name="username"]')
    usernameInput.type('admin')
    const passwordInput = cy.get('input[name="password"]')
    passwordInput.type('password')
    const loginBtn = cy.get('button[type="submit"]')
    loginBtn.click()
    cy.contains('Login successful!')
  })
})
