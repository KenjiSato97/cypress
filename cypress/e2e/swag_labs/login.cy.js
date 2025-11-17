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

it('should login with valid credentials but in a problem user', function() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').type('problem_user');
    cy.get('[data-test="password"]').click();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    
});

it('locked_ou_user', function() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#login_button_container form').click();
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').type('locked_out_user');
    cy.get('[data-test="password"]').click();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
    
});

it('null_user', function() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="password"]').click();
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
    
});

it('null_password', function() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').click();
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
    cy.get('#login_button_container div.error').should('be.visible');
});