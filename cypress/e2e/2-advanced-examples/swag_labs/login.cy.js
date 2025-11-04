/// <reference types="cypress" />
context('Swag Labs Login', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  });

    it('should log in with valid credentials', () => {
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
        cy.url().should('include', '/inventory.html');
    });

    it('should not log in with invalid credentials', () => {
        cy.get('#user-name').type('invalid_user');
        cy.get('#password').type('wrong_password');
        cy.get('#login-button').click();
        cy.get('[data-test="error"]').should('be.visible')
          .and('contain', 'Epic sadface: Username and password do not match any user in this service');
    });
});