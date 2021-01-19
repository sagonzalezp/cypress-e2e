/// <reference types="Cypress" />
describe('Navbar test', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should display online banking content', ()=>{
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.get('h1').should('have.text', 'Online Banking')
    }) 

    it('should display feedback content', ()=>{
        cy.get('#feedback > div').click()
        cy.url().should('include', 'feedback.html')
        cy.get('#feedback-title').should('have.text', 'Feedback')
    })

    it('should display homepage content', ()=>{
        cy.get('.brand').click()
        cy.url().should('include', 'index.html')
    })
})