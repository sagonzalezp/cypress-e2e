/// <reference types="Cypress" />

describe('New Payee test', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html')
        //Login
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.login(username, password)
        })
        //Clicking on Pay Bills
        cy.get('#pay_bills_tab > a').click()
        cy.url().should('include', 'bank/pay-bills.html')
    })

    it('should add a new payee to the list', ()=>{
        //Clicking on Add New Payee
        cy.get('.ui-tabs-nav > :nth-child(2) > a').click()
        cy.get('#ui-tabs-2 > .board-header').should('include.text', 'Who are you paying?')

        //Filling the form
        cy.fixture('payee').then(payee => {
            const payeeName = payee.name;
            const payeeAddress = payee.address;
            const payeeAccount = payee.account;
            const payeeDetails = payee.details;

            cy.get('#np_new_payee_name').type(payeeName)
            cy.get('#np_new_payee_address').type(payeeAddress)
            cy.get('#np_new_payee_account').type(payeeAccount)
            cy.get('#np_new_payee_details').type(payeeDetails)
        })
        cy.get('#add_new_payee').click()
    })

    it('should show a success message', ()=>{
        cy.fixture('payee').then(payee => {
            const payeeName = payee.name;
            cy.get('#alert_content').should('be.visible').and('include.text', `The new payee ${payeeName} was successfully created.`)
        })
    })
})