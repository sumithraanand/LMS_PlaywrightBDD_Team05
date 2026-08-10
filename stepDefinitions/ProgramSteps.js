import { expect } from '@playwright/test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Given, When, Then } from './fixtures.js';
import { LoginPage } from '../pages/LoginPage.js';
import { ProgramPage } from '../pages/ProgramPage.js';
import { rowByKey } from '../utils/ExcelReader.js';
import { normalized, sorted, uniqueProgramName } from '../utils/CommonMethods.js';

const here = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.resolve(here, '../testData/Testdata.xlsx');
const programData = key => rowByKey(dataFile, key, 'Program');

let createdProgramName = '';
let currentSearchValue = '';
let currentSortValues = [];
let currentSortDirection = 'asc';
let recordsBeforeNavigation = [];
let recordsAfterNavigation = [];

function getProgramPage(page) {
  return new ProgramPage(page);
}

async function ensureProgramExists(page, data, targetName) {
  const programPage = getProgramPage(page);
  await programPage.searchFor(targetName);

  if (await programPage.hasRowNamed(targetName)) return;

  await programPage.searchFor('');
  await programPage.openAddDialog();
  await programPage.fillProgram({
    name: targetName,
    description: data.Description || 'Automation test program',
    status: data.Status || 'Active',
  });
  await programPage.save();
  await programPage.expectToast(/Successful|Created/i);
  await programPage.searchFor(targetName);
  await expect(programPage.rowByName(targetName)).toBeVisible({ timeout: 10000 });
}

Given('Admin is logged in to LMS Portal', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.gotoLoginPage();
  await loginPage.login();

  await page.waitForURL(url => {
    return url.pathname.includes('login') === false;
  });
});

When('Admin is on the Program page', async ({ page }) => {
  const programPage = getProgramPage(page);
  await programPage.open();
});

Then('Admin should be navigated to the Program page', async ({ page }) => {
  const currentUrl = page.url();
  expect(currentUrl.endsWith('/program')).toBe(true);
});

Then('Program page should display {string}', async ({ page }, element) => {
  await getProgramPage(page).expectPageElement(element);
});

Then('the Manage Program heading should be left aligned', async ({ page }) => {
  const programPage = getProgramPage(page);
  expect(await programPage.isHeadingLeftAligned()).toBeTruthy();
});

Then('the multiple Program delete button should be disabled', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.multiDelete).toBeDisabled();
});

Then('the Program search placeholder should be {string}', async ({ page }, placeholder) => {
  const programPage = getProgramPage(page);
  await expect(programPage.search).toHaveAttribute('placeholder', placeholder);
});

Then('Program table should display the expected column headers', async ({ page }) => {
  const programPage = getProgramPage(page);
  await programPage.expectColumnHeaders(['Program Name', 'Program Description', 'Program Status', 'Edit / Delete']);
});

Then('the Program header checkbox should be unchecked', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.headerCheckbox.locator('input')).not.toBeChecked();
});

Then('all Program row checkboxes should be unchecked', async ({ page }) => {
  await getProgramPage(page).expectAllRowsUnchecked();
});

Then('sortable Program columns should display sort icons', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.sortIcons).toHaveCount(3);
});

Then('each Program row should display Edit and Delete buttons', async ({ page }) => {
  await getProgramPage(page).expectRowActions();
});

Then('Program page should display pagination controls and entry text', async ({ page }) => {
  await getProgramPage(page).expectPagination();
});

Then('Program page should display the total Program footer', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.footer).toBeVisible();
});

When('Admin opens the Add New Program dialog', async ({ page }) => { await getProgramPage(page).openAddDialog(); });

Then('Program Details should display {string}', async ({ page }, element) => {
  await getProgramPage(page).expectDialogElement(element);
});

When('Admin saves the empty Program form', async ({ page }) => { await getProgramPage(page).save(); });

Then('Name and Status required messages should be displayed', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.nameRequired).toBeVisible();
  await expect(programPage.statusRequired).toBeVisible();
});

When('Admin closes the Program dialog using {string}', async ({ page }, action) => {
  const programPage = getProgramPage(page);
  if (action.toLowerCase() === 'cancel') await programPage.cancel();
  else await programPage.closeDialog();
});

Then('the Program Details dialog should disappear', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.dialog).toBeHidden();
});

When('Admin creates a Program using data key {string}', async ({ page }, key) => {
  const programPage = getProgramPage(page);
  const data = programData(key);
  const name = data.ProgramName === '<unique>'
  ? uniqueProgramName()
  : data.ProgramName;

createdProgramName = name;
console.log('Generated Program Name:', createdProgramName);

await programPage.fillProgram({
  name,
  description: data.Description,
  status: data.Status
});

await programPage.save();
});

Then('a Program created success message should be displayed', async ({ page }) => {
  const programPage = getProgramPage(page);
  await programPage.expectToast(/Program Created|Successful/i);
  await programPage.searchFor(createdProgramName);
  await expect(programPage.rowByName(createdProgramName)).toBeVisible({ timeout: 15000 });
});

When('Admin enters Program data using key {string}', async ({ page }, key) => {
  const programPage = getProgramPage(page);
  const data = programData(key);
  await programPage.fillProgram({ name: data.ProgramName, description: data.Description, status: data.Status });
});

Then('the Program name format error should be displayed', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.nameFormatError).toBeVisible();
});

When('Admin searches using data key {string}', async ({ page }, key) => {
  const programPage = getProgramPage(page);
  const data = programData(key);
  if (data.SearchQuery === '<created>') {
    currentSearchValue = createdProgramName;
  } else {
    currentSearchValue = data.SearchQuery || data.ProgramName;
  }
  await programPage.searchFor(currentSearchValue);
});

Then('matching Program records should be displayed', async ({ page }) => {
  const programPage = getProgramPage(page);
  await programPage.expectMatchingSearchResults(currentSearchValue);
});

Then('zero Program records should be displayed', async ({ page }) => {
  await getProgramPage(page).expectZeroResults();
});

When('Admin opens Edit for Program using data key {string}', async ({ page }, key) => {
  const programPage = getProgramPage(page);
  const data = programData(key);
  const target = data.SearchQuery || data.ProgramName;
  await ensureProgramExists(page, data, target);
  await programPage.clickEdit(target);
});

When('Admin edits Program using data key {string}', async ({ page }, key) => {
  const programPage = getProgramPage(page);
  const data = programData(key);
  const target = data.SearchQuery || data.ProgramName;
  await ensureProgramExists(page, data, target);
  await programPage.clickEdit(target);
  await programPage.fillProgram({
    name: data.ProgramName || undefined,
    description: data.Description || undefined,
    status: data.Status || undefined,
  });
  await programPage.save();
});

Then('a Program updated success message should be displayed', async ({ page }) => {
  await getProgramPage(page).expectToast(/Program Updated/i);
});

Then('Program details should match data key {string}', async ({ page }, key) => {
  await getProgramPage(page).expectRowData(programData(key));
});

When('Admin requests Program deletion using data key {string}', async ({ page }, key) => {
  const programPage = getProgramPage(page);
  const data = programData(key);
  const name = data.SearchQuery || data.ProgramName;
  await ensureProgramExists(page, data, name);
  await programPage.clickDelete(name);
});

When('Admin deletes Program using data key {string}', async ({ page }, key) => {
  const programPage = getProgramPage(page);
  const data = programData(key);
  const name = data.SearchQuery || data.ProgramName;
  await ensureProgramExists(page, data, name);
  await programPage.clickDelete(name);
  await programPage.confirmDelete();
});

Then('the Program deletion confirmation should be displayed', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.confirmDialog).toBeVisible();
});

When('Admin answers {string} to the deletion confirmation', async ({ page }, answer) => {
  const programPage = getProgramPage(page);
  if (answer.toLowerCase() === 'yes') await programPage.confirmDelete();
  else await programPage.cancelDelete();
});

When('Admin closes the deletion confirmation', async ({ page }) => {
  await getProgramPage(page).closeConfirmation();
});

Then('a Program deleted success message should be displayed', async ({ page }) => {
  await getProgramPage(page).expectToast(/Program Deleted/i);
});

Then('the deletion confirmation should disappear', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.confirmDialog).toBeHidden();
});

When('Admin selects the first {int} Programs', async ({ page }, count) => {
  await getProgramPage(page).selectFirstRows(count);
});

Then('the multiple Program delete button should be enabled', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.multiDelete).toBeEnabled();
});

When('Admin opens the multiple Program deletion confirmation', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.multiDelete).toBeEnabled();
  await programPage.multiDelete.click();
  await expect(programPage.confirmDialog).toBeVisible({ timeout: 10000 });
});

Then('selected Program checkboxes should remain checked', async ({ page }) => {
  await getProgramPage(page).expectSelectedRows(2);
});

When('Admin sorts by {string} in {string} order', async ({ page }, column, direction) => {
  const programPage = getProgramPage(page);
  const indexes = { 'Program Name': 2, 'Program Description': 3, 'Program Status': 4 };
  await programPage.sort(column, direction);
  currentSortValues = await programPage.columnValues(indexes[column]);
  currentSortDirection = direction === 'descending' ? 'desc' : 'asc';
});

Then('the Program values should be sorted correctly', async ({ page }) => {
  const actual = normalized(currentSortValues);
  expect(actual).toEqual(sorted(actual, currentSortDirection));
});

When('Admin navigates to the {string} Program page', async ({ page }, action) => {
  const programPage = getProgramPage(page);
  recordsBeforeNavigation = await programPage.visibleRowValues();
  await programPage.goToPage(action.toLowerCase());
  recordsAfterNavigation = await programPage.visibleRowValues();
});

Then('a different set of Program records should be displayed', async ({ page }) => {
  expect(recordsAfterNavigation).not.toEqual(recordsBeforeNavigation);
});

Then('Program pagination should show zero entries', async ({ page }) => {
  const programPage = getProgramPage(page);
  await expect(programPage.zeroEntries).toBeVisible();
});

Then('all Program pagination navigation buttons should be disabled', async ({ page }) => {
  await getProgramPage(page).expectAllPaginationButtonsDisabled();
});
