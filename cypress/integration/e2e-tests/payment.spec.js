/// <reference types="Cypress" />
describe('Payment test', () => {
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

    it('should send a payment (fake)', ()=>{
        cy.get('#sp_payee').select('Bank of America')
        cy.get('#sp_get_payee_details').click()
        cy.get('#sp_payee_details').should('contain.text', '47844181491040')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('1000')
        cy.get('#sp_date').type('2021-01-12 {enter}')
        cy.get('#sp_description').type('47844181491040')
        cy.get('.btn-primary').click()
    })

    it('should show a success message', ()=>{
        cy.get('#alert_content').should('contain.text', 'The payment was successfully submitted.')
    })
})