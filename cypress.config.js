const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  env: {
    PB_USERNAME: process.env.PB_USERNAME,
    PB_PASSWORD: process.env.PB_PASSWORD
  },
  e2e: {
    baseUrl: 'http://localhost:8080/parabank-3.0.0-SNAPSHOT',
    setupNodeEvents(on, config) {}
  },
  defaultCommandTimeout: 10000
});
