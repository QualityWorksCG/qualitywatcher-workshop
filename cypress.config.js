require('dotenv').config()
const qualitywatcher = require("@qualitywatcher/cypress-reporter");
module.exports = {
  "chromeWebSecurity": false,
  e2e: {
    baseUrl: 'https://qw-test-store-prod.netlify.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      qualitywatcher.report(on, {
        ...config,
        reporterOptions: {
          testRunName: "Test Run Name",
          description: "Test Run Description",
          projectId: 1,
          includeAllCases: true
        },
      });
    },
    retries: 3
  },
};
