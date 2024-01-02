const { defineConfig } = require('cypress');
require('dotenv').config();

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false
  },
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  env: {
    PB_USERNAME: process.env.PB_USERNAME,
    PB_PASSWORD: process.env.PB_PASSWORD
  },
  e2e: {
    baseUrl: 'http://localhost:8080/parabank-3.0.0-SNAPSHOT',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    }
  },
  defaultCommandTimeout: 10000
});
