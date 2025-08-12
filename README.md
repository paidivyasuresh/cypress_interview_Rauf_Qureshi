# Sample Angular App for Cypress QA Interview

This project is a minimal Angular app with Cypress configured as the test runner. It contains example tests that intentionally demonstrate common issues for QA interviews. Use these to ask candidates about identifying, fixing, and improving test reliability and structure.

## Test Scenarios & Issues

- **Login Page (Flaky/Selector Issues):** `cypress/e2e/login/login.cy.ts`
- **Network Stubbing/Mocking:** `cypress/e2e/network/network.cy.ts`
- **Iframe Handling:** `cypress/e2e/iframe/iframe.cy.ts`
- **File Upload/Download:** `cypress/e2e/file/file.cy.ts`
- **Responsiveness:** `cypress/e2e/responsive/responsive.cy.ts`
- **Command Chaining:** `cypress/e2e/chaining/chaining.cy.ts`

## How to Use

1. Install dependencies:

   ```bash
   npm install
   ```

2. Open Cypress test runner:

   ```bash
   npx cypress open
   ```

3. Run tests and discuss issues with candidates.

## Interview Discussion Points

- How to identify and fix flaky tests (see login test)
- Proper selector usage and async handling
- Network request stubbing/mocking
- Handling iframes, file upload/download, and responsive tests
- Improving test structure and organization
- Command chaining for robust tests

---

**Note:** The test files are intentionally written to demonstrate common mistakes and anti-patterns for interview purposes.
