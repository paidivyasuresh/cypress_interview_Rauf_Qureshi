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
    });
});

