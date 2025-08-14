// Cypress challenge: Reload page until a random number is 7

// Anti-pattern example: Using a while loop with Cypress commands
// Expected result: This test will NOT work as intended. Cypress commands are asynchronous and queued,
// so a while loop will not wait for commands to finish and will not reload the page as expected.
// The test will either hang or fail immediately.

describe('Page reloads until lucky 7 (anti-pattern)', () => {
  it('tries to reload until #result is 7 (anti-pattern)', () => {
    cy.visit('/page-reload-challenge.html');
    let number = 0;
    while (number !== 7) {
      cy.get('#result').should('not.be.empty')
        .invoke('text').then(parseInt)
        .then((n) => {
          number = n;
        });
      if (number !== 7) {
        cy.wait(500, { log: false });
        cy.reload();
      }
    }
    // The above will not work as expected!
  });
});


//------------------------------------------------------------------
// Expected

// describe('Page reloads until lucky 7 (best practice)', () => {
//   it('tries to reload until #result is 7 (best practice)', () => {
//     cy.visit('/page-reload-challenge.html');
//     const checkResult = () => {
//       cy.get('#result').should('not.be.empty')
//         .invoke('text').then(parseInt)
//         .then((n) => {
//           if (n === 7) {
//             return;
//           }
//           cy.wait(500, { log: false });
//           cy.reload();
//           checkResult();
//         });
//     };
//     checkResult();
//   });
// });
