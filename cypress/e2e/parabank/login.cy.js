import LoginPage from '../../pageobjects/LoginPage';
import HomePage from '../../pageobjects/HomePage';
import AccountsOverviewPage from '../../pageobjects/AccountsOverviewPage';

describe('User Login', () => {
  it('should be able to login', () => {
    //login
    LoginPage.doLogin(Cypress.env('PB_USERNAME'), Cypress.env('PB_PASSWORD'));

    //assert successful login
    cy.get(HomePage.btnHome).should('exist');
    cy.get(HomePage.lblWelcome).should('exist').contains('Welcome');
    cy.get(AccountsOverviewPage.ttlAccountOverview).contains('Accounts Overview');
  });
});
