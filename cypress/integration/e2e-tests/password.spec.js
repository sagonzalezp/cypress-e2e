/// <reference types="Cypress" />

describe('Password test', ()=>{
    before(()=>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should click on the signin button',()=>{
        cy.get('#signin_button').click()
    })

    it('should click on the forgoten password', ()=>{
        cy.get('a').contains('Forgot your password ?').click()
    })

    it('should fill the email form', ()=>{
        cy.get('#user_email').type('test.email@email.com')
    })

    it('should submit  the form', ()=>{
        cy.get('[value="Send Password"]').click()
    })
})