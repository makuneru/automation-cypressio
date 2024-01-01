class RegistrationPage {
  txtfirstName = '#customer\\.firstName';
  txtlastName = '#customer\\.lastName';
  txtAddress = '#customer\\.address\\.street';
  txtCity = '#customer\\.address\\.city';
  txtState = '#customer\\.address\\.state';
  txtZipCode = '#customer\\.address\\.zipCode';
  txtPhoneNumber = '#customer\\.phoneNumber';
  txtSSN = '#customer\\.ssn';
  txtUserName = '#customer\\.username';
  txtPassword = '#customer\\.password';
  txtConfirmPassword = '#repeatedPassword';

  btnPanelRegister = '#loginPanel > :nth-child(3) > a';
  btnRegister = 'input[value="Register"]';

  doRegister(username, password) {
    cy.visit('/');

    cy.get(this.btnPanelRegister).click();
    cy.get(this.txtfirstName).clear().type(chance.name());
    cy.get(this.txtlastName).clear().type(chance.last());
    cy.get(this.txtAddress).clear().type(chance.street());
    cy.get(this.txtCity).clear().type(chance.city());
    cy.get(this.txtState).clear().type(chance.state());
    cy.get(this.txtZipCode).clear().type(chance.zip());
    cy.get(this.txtPhoneNumber).clear().type(chance.phone());
    cy.get(this.txtSSN).clear().type(chance.ssn());

    cy.get(this.txtUserName).clear().type(username);
    cy.get(this.txtPassword).clear().type(password);
    cy.get(this.txtConfirmPassword).clear().type(password);

    cy.get(this.btnRegister).click();
  }
}

export default new RegistrationPage();
