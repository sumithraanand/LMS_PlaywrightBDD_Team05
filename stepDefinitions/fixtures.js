import { test as base, createBdd } from 'playwright-bdd';
import { LoginPage } from '../pages/LoginPage.js';
import { ProgramPage } from '../pages/ProgramPage.js';

export const test = base.extend({
  loginPage: async ({ page }, use) => use(new LoginPage(page)),
  programPage: async ({ page }, use) => use(new ProgramPage(page)),
  scenarioState: async ({}, use) => use({})
});

export const { Given, When, Then } = createBdd(test);
