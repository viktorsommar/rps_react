describe('RPS Game', () => {
  it('user can play the game', () => {
    cy.visit('/')
    cy.get("button").contains("Rock").click()
    cy.get('#message').should ('contain', 'You choose rock')
  })
})