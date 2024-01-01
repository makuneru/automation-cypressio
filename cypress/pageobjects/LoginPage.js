class LoginPage {
  txtUserName = 'input[name="username"]';
  txtPassword = 'input[name="password"]';
  btnLogin = 'input[value="Log In"]';
  hdrCustomerLogin = 'div[id="leftPanel"] h2';

  setUsername(username) {
    cy.get(this.txtUserName).clear().type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword).clear().type(password);
  }

  clickLogin() {
    cy.get(this.btnLogin).click();
  }

  doLogin(username, password) {
    cy.visit('/');
    this.setUsername(username);
    this.setPassword(password);
    this.clickLogin();
  }
}
export default new LoginPage();
