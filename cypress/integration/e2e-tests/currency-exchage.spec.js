/// <reference types="Cypress" />
describe('Currency exchange text', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html')
        //Login
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.login(username, password)
        })
        cy.get('#pay_bills_tab > a').click()
        cy.url().should('include', 'bank/pay-bills.html')
        
    })

    it('should fill convertion form', ()=>{
        cy.get('.ui-tabs-nav > :nth-child(3) > a').click()
        cy.get('#ui-tabs-3 > .board-header').should('contain.text', 'Purchase foreign currency cash')
        cy.get('#pc_currency').select('Japan (yen)')
        cy.get('#pc_amount').type('10000')
        cy.get('#pc_inDollars_false').click()
        cy.get('#pc_calculate_costs').click()
    })

    it('should display convertion amount', ()=>{
        cy.get('#pc_conversion_amount').should('contain.text', '10000.00 yen (JPY) = 124.40 U.S. dollar (USD)')
    })


})