describe('Feedback test', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/feedback.html')
    })

    it('should load feedback form', ()=>{
        cy.get('[action="/sendFeedback.html"]')
    })

    it('should fill feedback form', ()=>{
        cy.get('[id="name"]').should('have.attr', 'placeholder', 'Your Name').type('automatic name')
        cy.get('[id="email"]').should('have.attr', 'placeholder', 'Your email address').type('automatic@mail.com')
        cy.get('[id="subject"]').should('have.attr', 'placeholder', 'Subject').type('automation')
        cy.get('[id="comment"]').should('have.attr', 'placeholder', 'Type your questions here...').type('automatic feedback')
    })

    it('should submit feedback form', ()=>{
        cy.get('.btn-signin').click()
    })

    it('should display feedback message', ()=>{
        cy.get('[class="page-header"]').should('include.text','Feedback')
    })
})
