// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

/**
 * Login to the website
 * @param {String} username - The user's username
 * @param {String} password - The user's password
 */
Cypress.Commands.add("login", (username, password) => {
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('[type="submit"]').click()
    cy.url().should('include', 'bank/account-summary.html')
})