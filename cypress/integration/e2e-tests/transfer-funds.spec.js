/// <reference types="Cypress" />
describe('Transfer funds verification test', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html')
        //Login
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.login(username, password)
        })
        cy.get('#transfer_funds_tab > a').click()
        cy.url().should('include', 'bank/transfer-funds.html')
        
    })
    it('should feel transfer funds form', ()=>{
        cy.get('#tf_fromAccountId').select('Savings(Avail. balance = $ 1548)')
        cy.get('#tf_toAccountId').select('Checking(Avail. balance = $ -500.2)')
        cy.get('#tf_amount').type('500.2')
        cy.get('#tf_description').type('Transfer to checking')
        cy.get('#btn_submit').click()
    })
    it('should verify correct data', ()=>{
        cy.url().should('include', 'bank/transfer-funds-verify.html')
        cy.get('#tf_fromAccountId').should('have.value', 'Savings')
        cy.get('#tf_toAccountId').should('have.value', 'Checking')
        cy.get('#tf_amount').should('have.value', '500.2')
        cy.get('#tf_description').should('have.value', 'Transfer to checking')
        cy.get('#btn_submit').click()
    })
})