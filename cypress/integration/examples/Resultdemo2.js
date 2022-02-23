/// <reference types="cypress" />

describe('MyTestSuite',function()
{
    before(function(){
        cy.fixture('demosite2').then(function(data){
        this.data= data
    })
})
    it('Demo_value',function()
    {
    cy.visit('https://www.stealmylogin.com/demo.html')

    cy.get('input[name=username]').type(this.data.username)
    cy.get('input[name=password]').type(this.data.password)
    cy.get('input[value=login]').click()
    })
})