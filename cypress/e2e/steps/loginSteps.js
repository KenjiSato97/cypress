/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('que o usuário está na página de login do swag labs', () => {
  cy.visit('https://www.saucedemo.com/');
});

When('o usuário insere o nome de usuário "standard_user"', () => {
  cy.get('#user-name').type('standard_user');
});

When('o usuário insere a senha "secret_sauce"', () => {
  cy.get('#password').type('secret_sauce');
});

When('o usuário insere o nome de usuário "invalid_user"', () => {
  cy.get('#user-name').type('invalid_user');
});

When('o usuário insere a senha "wrong_password"', () => {
  cy.get('#password').type('wrong_password');
});

When('o usuário clica no botão de login', () => {
  cy.get('#login-button').click();
});

Then('o usuário deve ser redirecionado para a página Products', () => {
  cy.url().should('include', '/inventory.html');
});

Then('o usuário deve ver uma mensagem de erro indicando credenciais inválidas', () => {
  cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
});

Then('o usuário permanece na página de login do swag labs', () => {
  cy.url().should('eq', 'https://www.saucedemo.com/');
});

Then('o usuário deve ver uma mensagem de erro indicando que o campo de usuário é obrigatório', () => {
  cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Username is required');
});

Then('o usuário deve ver uma mensagem de erro indicando que o campo de senha é obrigatório', () => {
  cy.get('[data-test="error"]').should('be.visible').and('contain', 'Epic sadface: Password is required');
});

When('o usuário deixa o campo de nome de usuário vazio', () => {
  cy.get('#user-name').clear();
});

When('o usuário deixa o campo de senha vazio', () => {
  cy.get('#password').clear();
});

When('o usuário insere o nome de usuário {string} e a senha {string}', (username, password) => {
  if(username) {
  cy.get('#user-name').type(username);
  }
  else {
    cy.get('#user-name').clear();
  } 
  if(password) {
    cy.get('#password').type(password);
  }
  else {
    cy.get('#password').clear();
  }
});

Then('o usuário deve ver a mensagem {string}', (errorMessage) => {
  cy.get('[data-test="error"]').should('be.visible').and('contain', errorMessage);
});
