describe('Login Form', () => {

  // Expected answer:
  // Use unique selectors (e.g., cy.get('#username'), cy.get('#password')) instead of .first()/.last().
  // This makes the test robust against UI changes.
  it('logs in with valid credentials', () => {
    cy.visit('/');
    cy.get('input').first().type('text'); // flaky selector
    cy.get('input').last().type('password'); // flaky selector
    cy.get('button').contains('Login').click();
    cy.contains('Login successful!');
  });


  // Expected answer:
  // Same as above: use unique selectors for username and password fields.
  it('shows error for invalid credentials', () => {
    cy.visit('/');
    cy.get('input').first().type('wrong');
    cy.get('input').last().type('wrong');
    cy.get('button').contains('Login').click();
    cy.contains('Invalid credentials.');
  });
  

  // Expected answer:
  // Use Cypress's retry-ability and wait for the button to exist and be visible before clicking.
  // Example: cy.get('#delayed-btn', { timeout: 5000 }).should('be.visible').click();
  // Avoid cy.wait().
  it('clicks the delayed button (flaky)', () => {
    cy.visit('/');
    cy.get('#flaky-btn').click(); // flaky: button appears after 2.5s, no wait
    cy.get('#flaky-btn').should('have.text', 'Clicked!');
  });
});
