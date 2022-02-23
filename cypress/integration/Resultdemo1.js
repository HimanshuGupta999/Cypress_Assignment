/// <reference types="cypress" />

describe('MyTestSuite',function()
{
    before(function(){
        cy.fixture('demosite1').then(function(data){
        this.data= data
    })
})
    it('Demo_value',function()
    {
    cy.visit('https://nxtgenaiacademy.com/demo-site/')

    cy.get('#vfb-5').type(this.data.firstname)
    cy.get('#vfb-7').type(this.data.lastname)
    cy.get('#vfb-8-1').click()
    cy.get('#vfb-13-address').type(this.data.Address)
    cy.get('#vfb-13-city').type(this.data.City)
    cy.get('#vfb-13-state').type(this.data.State)
    cy.get('#vfb-13-zip').type(this.data.Postalcode)
    //cy.get('#vfb-13-country').type("India")
    cy.get('#vfb-14').type(this.data.Email)
    cy.get('#vfb-18').type(this.data.Date_of_Demo)
    //cy.get('#vfb-16-hour:#vfb-16-min #vfb-16-ampm').type("03:00 am")
    //cy.get('#vfb-19').type(7073545769)
    cy.get('#vfb-20-0').click()
    cy.get('#vfb-23').type(this.data.Enter_query)
    cy.get('#vfb-3').type(this.data.Verification)
    cy.get('#vfb-4').click()
    })
})