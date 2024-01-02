class AccountsOverview {
  ttlAccountOverview = '.title';
  ttlAccountDetails = 'div[ng-if="showDetails"] h1[class="title"]';
  lblAccountNumber = 'td#accountId';
  lblAccountType = 'td#accountType';
  lblBalance = 'td#balance';
  lblAvailableBalance = 'td#availableBalance';

  getlnkAccountByAccountNumber(accountNumber) {
    return cy.get(`a[href*="activity.htm?id=${accountNumber}"]`);
  }
}
export default new AccountsOverview();
