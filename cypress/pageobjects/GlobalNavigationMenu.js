class ParabankNavigationComponents {
  lnkOpenNewAccount = 'a[href="/parabank-3.0.0-SNAPSHOT/openaccount.htm"]';
  lnkOverview = 'a[href="/parabank-3.0.0-SNAPSHOT/overview.htm"]';
  lnkTransfer = 'a[href="/parabank-3.0.0-SNAPSHOT/transfer.htm"]';
  lnkBillPay = 'a[href="/parabank-3.0.0-SNAPSHOT/billpay.htm"]';
  lnkFindTransactions = 'a[href="/parabank-3.0.0-SNAPSHOT/findtrans.htm"]';
  lnkUpdateContactInfo = 'a[href="/parabank-3.0.0-SNAPSHOT/updateprofile.htm"]';
  lnkRequestLoan = 'a[href="/parabank-3.0.0-SNAPSHOT/requestloan.htm"]';
  lnkLogout = 'a[href="/parabank-3.0.0-SNAPSHOT/logout.htm"]';

  getlnkOpenNewAccount() {
    return cy.get(this.lnkOpenNewAccount);
  }

  getlnkOverview() {
    return cy.get(this.lnkOverview);
  }

  getlnkTransferFunds() {
    return cy.get(this.lnkTransfer);
  }

  getlnkBillPay() {
    return cy.get(this.lnkBillPay);
  }

  getlnkFindTransactions() {
    return cy.get(this.lnkFindTransactions);
  }

  getlnkUpdateContactInfo() {
    return cy.get(this.lnkUpdateContactInfo);
  }

  getlnkRequestLoan() {
    return cy.get(this.lnkRequestLoan);
  }

  getlnkLogout() {
    return cy.get(this.lnkLogout);
  }
}

export default new ParabankNavigationComponents();
