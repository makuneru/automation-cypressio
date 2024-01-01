class HomePage {
  btnHome = 'li[class="home"] a';
  lblWelcome = ':contains("Welcome")';
  btnLogin = 'input[value="Log In"]';

  setUsername(username) {
    cy.get(this.txtUserName).clear().type(username);
  }

  setPassword(password) {
    cy.get(this.txtPassword).clear().type(password);
  }

  btnLogin() {
    cy.get(this.btnLogin);
  }

  doLogin(username, password) {
    this.setUsername(username);
    this.setPassword(password);
    this.btnLogin().click();
  }
}

export default new HomePage();
