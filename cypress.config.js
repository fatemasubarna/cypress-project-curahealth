const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.specPattern =[
        'cypress/e2e/login.cy.js',
        'cypress/e2e/makeappointment.cy.js'

      ]
      return config; 
    },
  },
});
