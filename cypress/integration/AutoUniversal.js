///<reference types="cypress"/>

describe("Universal", function(){

    it("Universal login", function(){
        cy.viewport(1280,720)
        cy.visit("https://universal.3tlstaging.com/login")
        
        //login credentials
        function login()
        {
        cy.get('#mat-input-0').type('himanshu.gupta@knoldus.com')
        cy.get('#mat-input-1').type('Himanshu@1234')
        cy.get('button[type=submit]').click()
        }
        login()

        //click on rewards
        function rewards(){
        cy.get('div > li:nth-of-type(3) > .ng-star-inserted').click()
        }
        rewards()

        //selecting physical from type
        function physical_type(){
        cy.get('.mat-select-value').click()
        cy.get('#mat-option-8 > .mat-option-text').click()
        }
        physical_type()

        //selecting Pitch 3 reward
        function Pitch_Reward(){
        cy.get(':nth-child(3) > .mat-card-actions > .ng-star-inserted > .btn').click()
        cy.get('.col > .btn').click()
        cy.get('.earn-preview-heading').should('contain','Pitch Perfect 3')
        }
        Pitch_Reward()

        //Providing the details for shipping
        function Ship_Details(){
        cy.get('h2').should('contain', 'Checkout')
        cy.get('.ng-star-inserted.pb-2').should('contain','Pitch Perfect 3')
        cy.get('#mat-input-2').type('Himanshu')
        
        cy.get('#mat-input-3').type('Gupta')
        
        cy.get('#address').type('12300')
        cy.wait(1000)
        cy.get('#address').type('{downArrow}{enter}')
        }
        Ship_Details()
        //details submit

        function Ship_Submit(){
        cy.get(':nth-child(3) > .col > .checkout-next-step-button').click()
        cy.wait(2000)
        }
        Ship_Submit()

        //payment is not functioning because of iframes
        //function Card_details(){
        //cy.get('#braintree-hosted-field-cardholderName').then(function($ele)
        //{
        //    var elllle = $ele.contents().find('input')
        //    cy.wrap(elllle).type('Himanshu Gupta')
        //})
    //}
    //Card_details()
        
        
        
        
        //cy.get('#braintree-hosted-field-cardholderName').type('Himanshu Gupta')
        //cy.get('#braintree-hosted-field-cardholderName').type('4111 1111 1111 1111')
        //cy.get('#braintree-hosted-field-expirationDate').type('09/22')
        //cy.get('#braintree-hosted-field-cvv').type('400')
        //cy.get('#submit-button').click()
    })
})
