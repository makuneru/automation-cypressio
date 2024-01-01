import RegistrationPage from '../../pageobjects/RegistrationPage';
import LoginPage from '../../pageobjects/LoginPage';
import HomePage from '../../pageobjects/HomePage';
import GlobalNavigationMenu from '../../pageobjects/GlobalNavigationMenu';
import OpenNewAccountPage from '../../pageobjects/OpenNewAccountPage';
import AccountsOverviewPage from '../../pageobjects/AccountsOverviewPage';
import TransferFundsPage from '../../pageobjects/TransferFundsPage';
import BillPayPage from '../../pageobjects/BillPayPage';
import FindTransactionPage from '../../pageobjects/FindTransactionPage';
import UpdateContactInfoPage from '../../pageobjects/UpdateContactInfoPage';
import schemaFindTransactionByAmount from '../../fixtures/schemaFindTransactionByAmount.json';
import Chance from 'chance';
import Ajv from 'ajv';

const avj = new Ajv();
let username, password, newAccount, oldAccount, amountToFind, payeeName;
describe('QA Code Challenge: UI Test Scenario', () => {
  const BALANCE = '$100.00';
  const ACCOUNT_TYPE = 'SAVINGS';
  const chance = new Chance();

  describe('Step 1- 2', () => {
    it('Navigate to parabank app and create new user.', () => {
      username = chance.word({ syllables: 3 });
      password = chance.integer();
      cy.log(`Username : ${username}, Password : ${password}`);
      RegistrationPage.doRegister(username, password);

      //assert successful registration
      cy.get('.title').contains(`Welcome ${username}`);

      //logout
      GlobalNavigationMenu.getlnkLogout().click();
      cy.get(LoginPage.hdrCustomerLogin).should('exist').contains('Customer Login');
    });
  });

  describe('Step 4 - 9', () => {
    beforeEach('Step 3 - Login using the created user.', () => {
      LoginPage.doLogin(username, password);
      //assert successful login
      cy.get(HomePage.btnHome).should('exist');
      cy.get(HomePage.lblWelcome).should('exist').contains('Welcome');
      cy.get(AccountsOverviewPage.ttlAccountOverview).contains('Accounts Overview');
    });

    it('Verify global navigation menu.', () => {
      //navigate to each global menu and assert that it was redirected to corresponding page.
      GlobalNavigationMenu.getlnkOpenNewAccount().click();
      cy.get(OpenNewAccountPage.ttlOpenNewAccount).should('exist').contains('Open New Account');

      GlobalNavigationMenu.getlnkOverview().click();
      cy.get(AccountsOverviewPage.ttlAccountOverview).should('exist').contains('Accounts Overview');

      GlobalNavigationMenu.getlnkTransferFunds().click();
      cy.get(TransferFundsPage.ttTransferFunds).should('exist').contains('Transfer Funds');

      GlobalNavigationMenu.getlnkBillPay().click();
      cy.get(BillPayPage.ttlBillPay).should('exist').contains('Bill Payment Service');

      GlobalNavigationMenu.getlnkFindTransactions().click();
      cy.get(FindTransactionPage.ttlFindTransaction).should('exist').contains('Find Transactions');

      GlobalNavigationMenu.getlnkUpdateContactInfo().click();
      cy.get(UpdateContactInfoPage.ttlUpdateContactInfo).should('exist').contains('Update Profile');

      GlobalNavigationMenu.getlnkRequestLoan().click();
      cy.get(UpdateContactInfoPage.ttlUpdateContactInfo).should('exist').contains('Apply for a Loan');
    });

    it('Create a savings account.', () => {
      GlobalNavigationMenu.getlnkOpenNewAccount().click();
      cy.get(OpenNewAccountPage.ddlAccountType).select('1').contains('SAVINGS');
      cy.get(OpenNewAccountPage.btnOpenNewAccount).click();
      cy.get(OpenNewAccountPage.ttlAccountOpened).should('contain', 'Account Opened!');

      cy.get(OpenNewAccountPage.lnkNewAccountId)
        .invoke('text')
        .then((text) => {
          newAccount = text.trim(); // Store the text content in the variable newAccount
          cy.log(`Created Savings Account Number is ${newAccount}`);
        });
    });

    it('Validate Accounts Overview Page.', () => {
      GlobalNavigationMenu.getlnkOverview().click();
      AccountsOverviewPage.getddlAccountByAccountNumber(newAccount).then(($link) => {
        const adjacentTdElements = $link.parent().nextAll('td.ng-binding').slice(0, 2);
        const tdTexts = adjacentTdElements.map((index, element) => Cypress.$(element).text().trim()).get();

        // Assert that both <td> elements for Balance and Available Amount contain '$100.00'
        cy.log(`Texts in the adjacent <td> elements Balance and AVailable Amount are: ${tdTexts}`);
        cy.wrap(tdTexts)
          .should('deep.eq', [BALANCE, BALANCE])
          .then(() => {
            AccountsOverviewPage.getddlAccountByAccountNumber(newAccount).click();

            //assert account overview page
            cy.get(AccountsOverviewPage.ttlAccountDetails).should('exist').contains('Account Details');
            cy.get(AccountsOverviewPage.lblAccountNumber).should('exist').contains(newAccount);
            cy.get(AccountsOverviewPage.lblAccountType).should('exist').contains(ACCOUNT_TYPE);
            cy.get(AccountsOverviewPage.lblBalance).should('exist').contains(BALANCE);
            cy.get(AccountsOverviewPage.lblAvailableBalance).should('exist').contains(BALANCE);
          });
      });
    });

    it('Transfer funds from new account to another account.', () => {
      GlobalNavigationMenu.getlnkTransferFunds().click();
      const AMOUNT = '50';
      cy.get(TransferFundsPage.txtAmount).type(AMOUNT);
      cy.get(TransferFundsPage.ddlFromAccountId).select(newAccount);

      //store the old account for verification
      cy.get(TransferFundsPage.ddlToAccountId)
        .find(`option[value!='${newAccount}']`)
        .first()
        .then(($option) => {
          oldAccount = $option.val();
          cy.log(`Old Account: ${oldAccount}`);

          cy.get(TransferFundsPage.btnTransfer).click();
          cy.get(TransferFundsPage.ttlTransferComplete).should('exist').contains('Transfer Complete');

          //assert successful fund transfer
          cy.get(TransferFundsPage.lblAmount).should('exist').contains(AMOUNT);
          cy.get(TransferFundsPage.lblFromAccountId).should('exist').contains(newAccount);
          cy.get(TransferFundsPage.lblToAccountId).should('exist').contains(oldAccount);
        });
    });

    it('Pay the bill using created account.', () => {
      GlobalNavigationMenu.getlnkBillPay().click();
      const AMOUNT = chance.floating({ min: 0, max: 50, fixed: 2 });
      amountToFind = AMOUNT;
      const BILLING_ACCOUNT = chance.integer({ min: 10000, max: 99999 });
      payeeName = chance.name();
      cy.get(BillPayPage.txtPayeeName).clear().type(payeeName);
      cy.get(BillPayPage.txtAddress).clear().type(chance.address());
      cy.get(BillPayPage.txtCity).clear().type(chance.city());
      cy.get(BillPayPage.txtState).clear().type(chance.state());
      cy.get(BillPayPage.txtZipCode).clear().type(chance.zip());
      cy.get(BillPayPage.txtPhoneNumber).clear().type(chance.phone());
      cy.get(BillPayPage.txtAccountNumber).clear().type(BILLING_ACCOUNT);
      cy.get(BillPayPage.txtVerifyAccountNumber).clear().type(BILLING_ACCOUNT);
      cy.get(BillPayPage.txtAmount).clear().type(AMOUNT);
      cy.get(BillPayPage.ddlFromAccountNumber).select(newAccount);
      cy.get(BillPayPage.btnSendPayment).click();

      //assert successful bill payment
      cy.get(BillPayPage.ttlBillPaymentComplete).should('exist').contains('Bill Payment Complete');
      cy.get(BillPayPage.lblPayeeName).should('exist').contains(payeeName);
      cy.get(BillPayPage.lblAmount).should('exist').contains(AMOUNT);
      cy.get(BillPayPage.lblFromAccountId).should('exist').contains(newAccount);
    });
  });
});

describe('QA Code Challenge: API Test Scenario', () => {
  it('Search the transaction using "Find Transactions" API call by Amount for the payment made.', () => {
    cy.request({
      method: 'GET',
      url: `/services/bank/accounts/${newAccount}/transactions/amount/${amountToFind}`,
      headers: { accept: 'application/json', 'Content-Type': 'application/json' }
    }).then((response) => {
      //assert the res status and body
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
      expect(response.body[0].accountId).to.eq(Number(newAccount));
      expect(response.body[0].type).to.eq('Debit');
      expect(response.body[0].amount).to.eq(amountToFind);
      expect(response.body[0].description).to.eq(`Bill Payment to ${payeeName}`);

      //validate schema
      const validateSchema = avj.compile(schemaFindTransactionByAmount);
      const isValid = validateSchema(response.body);
      expect(isValid).to.be.true;
    });
  });
});
