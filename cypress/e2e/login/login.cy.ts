describe('Login Form', () => {
	// Expected answer:
	// Use unique selectors (e.g., cy.get('#username'), cy.get('#password')) instead of .first()/.last().
	// This makes the test robust against UI changes.

	it('logs in with valid credentials', () => {
		cy.visit('/login');
		cy.get('input').first().type('text');
		cy.get('input').last().type('password');
		cy.get('button').contains('Login').click();
		cy.contains('Login successful!');
	});

	// Expected answer:
	// Use unique selectors (e.g., cy.get('#username'), cy.get('#password')) instead of .first()/.last().
	// This makes the test robust against UI changes.

	it('shows error for invalid credentials', () => {
		cy.visit('/login');
		cy.get('input').first().type('wrong');
		cy.get('input').last().type('wrong');
		cy.get('button').contains('Login').click();
		cy.contains('Invalid credentials.');
	});

	// Expected answer:
	// Use Cypress's retry-ability and wait for the button to exist and be visible before clicking.
	// Example: cy.get('#flaky-btn', { timeout: 5000 }).should('be.visible').click();
	// Avoid cy.wait().

	it('register new user', () => {
		cy.visit('/login');
		cy.get('#register-btn').click();
		cy.get('#register-btn').should('have.text', 'Register');
	});

	// --- EXPECTED (Best Practice) ---
	// cy.visit('/login')
	//   .get('input[name="username"]').type('admin')
	//   .get('input[name="password"]').type('password')
	//   .get('button[type="submit"]').click()
	//   .contains('Login successful!')
	// --- INTERVIEWER NOTE ---
	// This test does not use command chaining. Ask the candidate to refactor it using Cypress command chaining.
	// Expected: Use chaining to make the test more readable and robust.


	it('fills and submits a form', () => {
		cy.visit('/login')
		const usernameInput = cy.get('input[name="username"]')
		usernameInput.type('admin')
		const passwordInput = cy.get('input[name="password"]')
		passwordInput.type('password')
		const loginBtn = cy.get('button[type="submit"]')
		loginBtn.click()
		cy.contains('Login successful!')
	});
});
