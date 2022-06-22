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

3. Create `.env` file user your QUALITYWATCHER_API_KEY

[Generating a QualityWatcher API Key Guide](https://www.docs.qualitywatcher.com/docs/guides/integrating-automation-results#generating-a-qualitywatcher-api-key)

4. Update the `cypress.config.js` file with the relevant report details (See activity instructions for more details)

5. Update only 1 test with a QualityWatcher Suite and Case ID

6. Run the test and report to QualityWatcher (only execute this step once you have completed 1-5)

```sh
npm run cy:run
```

> Observe terminal for link to generated test run
