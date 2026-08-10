# LMS Program module — Playwright BDD

Runnable JavaScript framework for the LMS Program module using Playwright, `playwright-bdd`, Gherkin, Page Object Model, and Excel-driven test data.

## Setup

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npx playwright install chromium`.
4. Copy `.env.example` to `.env` and enter the LMS test credentials locally.
5. Run `npm run test:program`.

Do not commit `.env`; it is ignored by Git.

## Useful commands

- `npm run bddgen` — validates steps and generates Playwright tests.
- `npm run test:program` — runs all Program scenarios.
- `npm run test:smoke` — runs the navigation smoke test.
- `npm run test:headed` — runs with the browser visible.
- `npm run report` — opens the HTML report.

## Notes

- The page object uses application IDs verified from the deployed Program component: `filterGlobal`, `programName`, `programDescription`, `saveProgram`, `editProgram`, and `deleteProgram`.
- CRUD scenarios modify shared test data. Run them against an approved QA environment and replace sample search/edit names in the feature or Excel file with records known to exist.
- Credentials are read only from environment variables.
