///<reference types="cypress"/>

describe("Universal", function(){

    it("Universal login", function(){
        cy.viewport(1280,720)
        cy.visit("https://universal.3tlstaging.com/login")
        
        //login credentials

        cy.get('#mat-input-0').type('himanshu.gupta@knoldus.com')
        cy.get('#mat-input-1').type('Himanshu@1234')
        cy.get('button[type=submit]').click()
        
        //click on rewards
        cy.get('div > li:nth-of-type(3) > .ng-star-inserted').click()
        
        //selecting physical from type
        cy.get('.mat-select-value').click()
        cy.get('#mat-option-8 > .mat-option-text').click()
        
        //selecting Pitch 3 reward
        cy.get(':nth-child(3) > .mat-card-actions > .ng-star-inserted > .btn').click()
        cy.get('.col > .btn').click()
        cy.get('.earn-preview-heading').should('contain','Pitch Perfect 3')
        
        //Providing the details for shipping
        cy.get('h2').should('contain', 'Checkout')
        cy.get('.ng-star-inserted.pb-2').should('contain','Pitch Perfect 3')
        cy.get('#mat-input-2').type('Himanshu')
        
        cy.get('#mat-input-3').type('Gupta')
        
        cy.get('#address').type('12300')
        cy.wait(1000)
        cy.get('#address').type('{downArrow}{enter}')
        
        //details submit
        cy.get(':nth-child(3) > .col > .checkout-next-step-button').click()
        cy.wait(2000)

        //payment
        cy.get('#braintree-hosted-field-cardholderName').then(function($ele)
        {
            var elllle = $ele.contents().find('input')
            cy.wrap(elllle).type('Himanshu Gupta')
        })
        
        
        
        
        //cy.get('#braintree-hosted-field-cardholderName').type('Himanshu Gupta')
        //cy.get('#braintree-hosted-field-cardholderName').type('4111 1111 1111 1111')
        //cy.get('#braintree-hosted-field-expirationDate').type('09/22')
        //cy.get('#braintree-hosted-field-cvv').type('400')
        //cy.get('#submit-button').click()
    })
})
