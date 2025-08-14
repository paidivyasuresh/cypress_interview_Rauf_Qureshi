describe('Login Form', () => {
	it('logs in with valid credentials', () => {
		cy.visit('/login');
		cy.get('input').first().type('text');
		cy.get('input').last().type('password');
		cy.get('button').contains('Login').click();
		cy.contains('Login successful!');
	});

	it('shows error for invalid credentials', () => {
		cy.visit('/login');
		cy.get('input').first().type('wrong');
		cy.get('input').last().type('wrong');
		cy.get('button').contains('Login').click();
		cy.contains('Invalid credentials.');
	});

	it('register new user', () => {
		cy.visit('/login');
		cy.get('#register-btn').click();
		cy.get('#register-btn').should('have.text', 'Register');
	});

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
