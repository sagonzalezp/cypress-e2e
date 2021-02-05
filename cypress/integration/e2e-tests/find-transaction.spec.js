/// <reference types="Cypress" />
describe('Find transaction test',()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html')
        //Login
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.login(username, password)
        })
        cy.get('#account_activity_tab > a').click()
        cy.url().should('include', 'bank/account-activity.html')
        
    })

    it('should filter transactions', ()=>{
        cy.contains('Find Transactions').click()
        cy.get('#aa_fromAmount').type('200')
        cy.get('#aa_toAmount').type('1000')
        cy.get('.btn').click()
    })

    it('should display results', ()=>{
        cy.get('#filtered_transactions_for_account').should('be.visible')
        cy.get('tbody > tr').its('length').should('be.greaterThan', 0)
    })
})