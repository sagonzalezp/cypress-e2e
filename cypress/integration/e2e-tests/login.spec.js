/// <reference types="Cypress" />

describe('login/logout test', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('should try to login with invalid data', ()=>{
        cy.get('[id="user_login"]').type('invalidUser', {delay:100})
        cy.get('[id="user_password"]').type('invalidPass', {delay:100})
        cy.get('[type="submit"]').click()
    })

    it('should display error message', ()=>{
        cy.get('.alert').should('include.text', 'Login and/or password are wrong.')
    })

    it('should login to application', ()=>{
        cy.fixture('user').then(user => {
            const username = user.id;
            const password = user.pwd;
            cy.get('[id="user_login"]').type(username, {delay:100})
            cy.get('[id="user_password"]').type(password, {delay:100})
            cy.get('[type="submit"]').click()
            cy.url().should('include', 'bank/account-summary.html')
        })
        
    })

    it('should logout from application', ()=>{
        cy.get(':nth-child(3) > .dropdown-toggle').click()
        cy.get('#logout_link').click()
        cy.url().should('include', 'index.html')
    })
})