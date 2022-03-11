describe('the Homepage', () => {
    it('displays a counter that can be incremented', () => {
        cy.visit('localhost:3000')
        cy.contains('Counter: 0')

        cy.contains('increment').click()
        cy.contains('Counter: 1')

        cy.contains('increment').click()
        cy.contains('Counter: 2')

        cy.contains('decrement').click()
        cy.contains('Counter: 1')

        cy.contains('decrement').click()
        cy.contains('Counter: 0')

        cy.contains('decrement').click()
        cy.contains('Counter: 0')
    });
})
