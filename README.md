## Test Execution Exercise

> This project requires node version 16 or higher

1. Clone the repo

```sh
git clone https://github.com/QualityWorksCG/qualitywatcher-workshop.git
```

2. Navigate into folder:

```sh
cd qualitywatcher-workshop
```

3. Install dependencies

```sh
npm install
```

4. Create `.env` file and add your QUALITYWATCHER_API_KEY

Learn more: [Generating a QualityWatcher API Key Guide](https://www.docs.qualitywatcher.com/docs/guides/integrating-automation-results#generating-a-qualitywatcher-api-key)

5. Update the `cypress.config.js` file with the relevant `reporterOptions` to create your test run (testRunName, description, projectId, includeAllCases)

6. Update the `it.only` test in `./cypress/e2e/authentication/login.cy.js` with a QualityWatcher [Suite and Case ID](https://www.docs.qualitywatcher.com/docs/guides/integrating-automation-results#finding-your-project-id-test-suite-ids-and-test-case-ids)

7. Run the test and report to QualityWatcher (only execute this step once you have completed 1-6)

```sh
npm run cy:run
```

> Observe terminal for the link to the generated test run
> Look for QualityWatcher in green in your terminal
