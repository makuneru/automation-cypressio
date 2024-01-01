import RegistrationPage from '../../pageobjects/RegistrationPage';
import Chance from 'chance';

describe('User Registration', () => {
  let username, password;
  const chance = new Chance();
  it('should be able to register a user', () => {
    username = chance.word({ syllables: 3 });
    password = chance.integer();
    RegistrationPage.doRegister(username, password);

    //assert successful registration
    cy.get('.title').contains(`Welcome ${username}`);
  });
});
