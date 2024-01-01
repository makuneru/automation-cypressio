class BillPay {
  ttlBillPay = 'div[ng-show="showForm"] h1[class="title"]';
  txtPayeeName = 'input[name="payee.name"]';
  txtAddress = 'input[name="payee.address.street"]';
  txtCity = 'input[name="payee.address.city"]';
  txtState = 'input[name="payee.address.state"]';
  txtZipCode = 'input[name="payee.address.zipCode"]';
  txtPhoneNumber = 'input[name="payee.phoneNumber"]';
  txtAccountNumber = 'input[name="payee.accountNumber"]';
  txtVerifyAccountNumber = 'input[name="verifyAccount"]';
  txtAmount = 'input[name="amount"]';
  ddlFromAccountNumber = 'select[name="fromAccountId"]';
  btnSendPayment = 'input[value="Send Payment"]';
  ttlBillPaymentComplete = 'div[ng-show="showResult"] h1[class="title"]';
  lblPayeeName = '#payeeName';
  lblAmount = '#amount';
  lblFromAccountId = '#fromAccountId';
}

export default new BillPay();
