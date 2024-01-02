class ParabankNavigationComponents {
  lnkOpenNewAccount = 'a[href*="openaccount.htm"]';
  lnkOverview = 'a[href*="overview.htm"]';
  lnkTransfer = 'a[href*="transfer.htm"]';
  lnkBillPay = 'a[href*="billpay.htm"]';
  lnkFindTransactions = 'a[href*="findtrans.htm"]';
  lnkUpdateContactInfo = 'a[href*="updateprofile.htm"]';
  lnkRequestLoan = 'a[href*="requestloan.htm"]';
  lnkLogout = 'a[href*="logout.htm"]';

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
