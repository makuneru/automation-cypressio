class TransferFunds {
  ttTransferFunds = '.title';
  txtAmount = '#amount';
  btnTransfer = 'input[value="Transfer"]';
  ddlFromAccountId = 'select[id="fromAccountId"]';
  ddlToAccountId = 'select[id="toAccountId"]';
  ttlTransferComplete = 'div[ng-if="showResult"] h1[class="title"]';
  lblAmount = '#amount';
  lblFromAccountId = '#fromAccountId';
  lblToAccountId = '#toAccountId';
}
export default new TransferFunds();
