// Generated from: features\Program.feature
import { test } from "../../stepDefinitions/fixtures.js";

test.describe('Program Page', () => {

  test.beforeEach('Background: Admin is logged in and navigates to the Program page', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('Admin is logged in to LMS Portal', null, { page }); 
    await When('Admin is on the Program page', null, { page }); 
  });
  
  test('Program page navigation', { tag: ['@program', '@smoke', '@navigation'] }, async ({ Then, page }) => { 
    await Then('Admin should be navigated to the Program page', null, { page }); 
  });

  test('Program-Sub menu displayed', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('Program page should display "Add New Program submenu"', null, { page }); 
  });

  test('Manage program heading presence', { tag: ['@program', '@ui'] }, async ({ Then, page }) => { 
    await Then('Program page should display "Manage Program heading"', null, { page }); 
  });

  test('Manage program heading alignment', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('the Manage Program heading should be left aligned', null, { page }); 
  });

  test('Multiple Delete button state', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('the multiple Program delete button should be disabled', null, { page }); 
  });

  test('Search box is displayed', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('Program page should display "Search box"', null, { page }); 
  });

  test('Search placeholder presence', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('the Program search placeholder should be "Search..."', null, { page }); 
  });

  test('Column header name of data table', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('Program table should display the expected column headers', null, { page }); 
  });

  test('Checkbox default state - header', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('the Program header checkbox should be unchecked', null, { page }); 
  });

  test('Checkbox default state - datatable each rows', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('all Program row checkboxes should be unchecked', null, { page }); 
  });

  test('Sort icon presence', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('sortable Program columns should display sort icons', null, { page }); 
  });

  test('Edit and delete icon presence', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('each Program row should display Edit and Delete buttons', null, { page }); 
  });

  test('Pagination controls are displayed', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('Program page should display pagination controls and entry text', null, { page }); 
  });

  test('Footer message is displayed', { tag: ['@program'] }, async ({ Then, page }) => { 
    await Then('Program page should display the total Program footer', null, { page }); 
  });

  test('Add New Program dialog is displayed', { tag: ['@program', '@ui', '@add-program'] }, async ({ When, Then, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await Then('Program page should display "Program Details dialog"', null, { page }); 
  });

  test('Program Details dialog title', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await Then('Program Details should display "dialog title"', null, { page }); 
  });

  test('Mandatory fields indicator', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await Then('Program Details should display "mandatory indicators"', null, { page }); 
  });

  test('Name field is displayed', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await Then('Program Details should display "Name field"', null, { page }); 
  });

  test('Description field is displayed', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await Then('Program Details should display "Description field"', null, { page }); 
  });

  test('Status radio buttons are displayed', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await Then('Program Details should display "Status radio buttons"', null, { page }); 
  });

  test('Empty form submission', { tag: ['@program', '@validation', '@negative'] }, async ({ When, Then, And, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await And('Admin saves the empty Program form', null, { page }); 
    await Then('Name and Status required messages should be displayed', null, { page }); 
  });

  test('Cancel button functionality', { tag: ['@program'] }, async ({ When, Then, And, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await And('Admin closes the Program dialog using "Cancel"', null, { page }); 
    await Then('the Program Details dialog should disappear', null, { page }); 
  });

  test('Close button (X) functionality', { tag: ['@program'] }, async ({ When, Then, And, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await And('Admin closes the Program dialog using "X"', null, { page }); 
    await Then('the Program Details dialog should disappear', null, { page }); 
  });

  test('Add new program with valid details', { tag: ['@program', '@crud', '@positive'] }, async ({ When, Then, And, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await And('Admin creates a Program using data key "validProgram"', null, { page }); 
    await Then('a Program created success message should be displayed', null, { page }); 
  });

  test('Add new program with numeric program name', { tag: ['@program', '@validation', '@negative'] }, async ({ When, Then, And, page }) => { 
    await When('Admin opens the Add New Program dialog', null, { page }); 
    await And('Admin enters Program data using key "numericProgram"', null, { page }); 
    await Then('the Program name format error should be displayed', null, { page }); 
  });

  test('Verify added Program is created', { tag: ['@program', '@crud'] }, async ({ When, Then, page }) => { 
    await When('Admin searches using data key "validProgram"', null, { page }); 
    await Then('matching Program records should be displayed', null, { page }); 
  });

  test('Edit icon functionality', { tag: ['@program', '@edit'] }, async ({ When, Then, page }) => { 
    await When('Admin opens Edit for Program using data key "existingProgram"', null, { page }); 
    await Then('Program page should display "Program Details dialog"', null, { page }); 
  });

  test('Edit Program Name', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin edits Program using data key "editProgramName"', null, { page }); 
    await Then('a Program updated success message should be displayed', null, { page }); 
  });

  test('Edit Description', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin edits Program using data key "editDescription"', null, { page }); 
    await Then('a Program updated success message should be displayed', null, { page }); 
  });

  test('Edit Status', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin edits Program using data key "editStatus"', null, { page }); 
    await Then('a Program updated success message should be displayed', null, { page }); 
  });

  test('Verify edited Program details', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin edits Program using data key "editProgramName"', null, { page }); 
    await Then('a Program updated success message should be displayed', null, { page }); 
    await When('Admin searches using data key "editProgramName"', null, { page }); 
    await Then('Program details should match data key "editProgramName"', null, { page }); 
  });

  test('Display Delete Confirmation', { tag: ['@program', '@delete'] }, async ({ When, Then, page }) => { 
    await When('Admin requests Program deletion using data key "deleteProgram"', null, { page }); 
    await Then('the Program deletion confirmation should be displayed', null, { page }); 
  });

  test('Delete Program Successfully', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin deletes Program using data key "deleteProgram"', null, { page }); 
    await Then('a Program deleted success message should be displayed', null, { page }); 
  });

  test('Deleted Program visibility', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin searches using data key "deleteProgram"', null, { page }); 
    await Then('zero Program records should be displayed', null, { page }); 
  });

  test('Cancel Program Deletion', { tag: ['@program'] }, async ({ When, Then, And, page }) => { 
    await When('Admin requests Program deletion using data key "existingProgram"', null, { page }); 
    await And('Admin answers "No" to the deletion confirmation', null, { page }); 
    await Then('the deletion confirmation should disappear', null, { page }); 
  });

  test('Close Delete Confirmation', { tag: ['@program'] }, async ({ When, Then, And, page }) => { 
    await When('Admin requests Program deletion using data key "existingProgram"', null, { page }); 
    await And('Admin closes the deletion confirmation', null, { page }); 
    await Then('the deletion confirmation should disappear', null, { page }); 
  });

  test('Select multiple programs', { tag: ['@program', '@multi-delete'] }, async ({ When, Then, page }) => { 
    await When('Admin selects the first 2 Programs', null, { page }); 
    await Then('the multiple Program delete button should be enabled', null, { page }); 
  });

  test('Delete Multiple programs', { tag: ['@program'] }, async ({ When, Then, And, page }) => { 
    await When('Admin selects the first 2 Programs', null, { page }); 
    await And('Admin opens the multiple Program deletion confirmation', null, { page }); 
    await Then('the Program deletion confirmation should be displayed', null, { page }); 
  });

  test('Delete selected program', { tag: ['@program'] }, async ({ When, Then, And, page }) => { 
    await When('Admin selects the first 2 Programs', null, { page }); 
    await And('Admin opens the multiple Program deletion confirmation', null, { page }); 
    await And('Admin answers "Yes" to the deletion confirmation', null, { page }); 
    await Then('a Program deleted success message should be displayed', null, { page }); 
  });

  test('Deleted program Visibility', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin searches using data key "multiDeleteProgram"', null, { page }); 
    await Then('zero Program records should be displayed', null, { page }); 
  });

  test('Cancel Multiple Deletion', { tag: ['@program'] }, async ({ When, Then, And, page }) => { 
    await When('Admin selects the first 2 Programs', null, { page }); 
    await And('Admin opens the multiple Program deletion confirmation', null, { page }); 
    await And('Admin answers "No" to the deletion confirmation', null, { page }); 
    await Then('selected Program checkboxes should remain checked', null, { page }); 
  });

  test('Close Multiple deletion confirmation', { tag: ['@program'] }, async ({ When, Then, And, page }) => { 
    await When('Admin selects the first 2 Programs', null, { page }); 
    await And('Admin opens the multiple Program deletion confirmation', null, { page }); 
    await And('Admin closes the deletion confirmation', null, { page }); 
    await Then('the deletion confirmation should disappear', null, { page }); 
  });

  test('Search by program name', { tag: ['@program', '@search'] }, async ({ When, Then, page }) => { 
    await When('Admin searches using data key "searchByName"', null, { page }); 
    await Then('matching Program records should be displayed', null, { page }); 
  });

  test('Search by program description', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin searches using data key "searchByDescription"', null, { page }); 
    await Then('matching Program records should be displayed', null, { page }); 
  });

  test('Search by Non-Existent Program Name', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin searches using data key "nonExistentProgram"', null, { page }); 
    await Then('zero Program records should be displayed', null, { page }); 
  });

  test('Search by partial program name', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin searches using data key "partialProgramName"', null, { page }); 
    await Then('matching Program records should be displayed', null, { page }); 
  });

  test('Sorting of Program name in Ascending order', { tag: ['@program', '@sort'] }, async ({ When, Then, page }) => { 
    await When('Admin sorts by "Program Name" in "ascending" order', null, { page }); 
    await Then('the Program values should be sorted correctly', null, { page }); 
  });

  test('Sorting of Program name in Descending order', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin sorts by "Program Name" in "descending" order', null, { page }); 
    await Then('the Program values should be sorted correctly', null, { page }); 
  });

  test('Sorting of Program Description in Ascending order', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin sorts by "Program Description" in "ascending" order', null, { page }); 
    await Then('the Program values should be sorted correctly', null, { page }); 
  });

  test('Sorting of Program Description in Descending order', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin sorts by "Program Description" in "descending" order', null, { page }); 
    await Then('the Program values should be sorted correctly', null, { page }); 
  });

  test('Sorting of Program status in Ascending order', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin sorts by "Program Status" in "ascending" order', null, { page }); 
    await Then('the Program values should be sorted correctly', null, { page }); 
  });

  test('Sorting of Program status in Descending order', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin sorts by "Program Status" in "descending" order', null, { page }); 
    await Then('the Program values should be sorted correctly', null, { page }); 
  });

  test('Next Page Navigation', { tag: ['@program', '@pagination'] }, async ({ When, Then, page }) => { 
    await When('Admin navigates to the "next" Program page', null, { page }); 
    await Then('a different set of Program records should be displayed', null, { page }); 
  });

  test('Last Page Navigation', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin navigates to the "last" Program page', null, { page }); 
    await Then('a different set of Program records should be displayed', null, { page }); 
  });

  test('Previous Page Navigation', { tag: ['@program'] }, async ({ Given, When, Then, page }) => { 
    await Given('Admin navigates to the "next" Program page', null, { page }); 
    await When('Admin navigates to the "previous" Program page', null, { page }); 
    await Then('a different set of Program records should be displayed', null, { page }); 
  });

  test('First Page Navigation', { tag: ['@program'] }, async ({ Given, When, Then, page }) => { 
    await Given('Admin navigates to the "last" Program page', null, { page }); 
    await When('Admin navigates to the "first" Program page', null, { page }); 
    await Then('a different set of Program records should be displayed', null, { page }); 
  });

  test('Pagination when there are no records', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin searches using data key "nonExistentProgram"', null, { page }); 
    await Then('Program pagination should show zero entries', null, { page }); 
  });

  test('Pagination when there are less than 5 records', { tag: ['@program'] }, async ({ When, Then, page }) => { 
    await When('Admin searches using data key "singleResultProgram"', null, { page }); 
    await Then('all Program pagination navigation buttons should be disabled', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Program.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":9,"tags":["@program","@smoke","@navigation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":10,"keywordType":"Outcome","textWithKeyword":"Then Admin should be navigated to the Program page","stepMatchArguments":[]}]},
  {"pwTestLine":15,"pickleLine":12,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Program page should display \"Add New Program submenu\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Add New Program submenu\"","children":[{"start":29,"value":"Add New Program submenu","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":19,"pickleLine":16,"tags":["@program","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Program page should display \"Manage Program heading\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Manage Program heading\"","children":[{"start":29,"value":"Manage Program heading","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":23,"pickleLine":19,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then the Manage Program heading should be left aligned","stepMatchArguments":[]}]},
  {"pwTestLine":27,"pickleLine":22,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then the multiple Program delete button should be disabled","stepMatchArguments":[]}]},
  {"pwTestLine":31,"pickleLine":25,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Program page should display \"Search box\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Search box\"","children":[{"start":29,"value":"Search box","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":28,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the Program search placeholder should be \"Search...\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Search...\"","children":[{"start":42,"value":"Search...","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":39,"pickleLine":31,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Program table should display the expected column headers","stepMatchArguments":[]}]},
  {"pwTestLine":43,"pickleLine":34,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then the Program header checkbox should be unchecked","stepMatchArguments":[]}]},
  {"pwTestLine":47,"pickleLine":37,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then all Program row checkboxes should be unchecked","stepMatchArguments":[]}]},
  {"pwTestLine":51,"pickleLine":40,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then sortable Program columns should display sort icons","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":43,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":44,"keywordType":"Outcome","textWithKeyword":"Then each Program row should display Edit and Delete buttons","stepMatchArguments":[]}]},
  {"pwTestLine":59,"pickleLine":46,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":60,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then Program page should display pagination controls and entry text","stepMatchArguments":[]}]},
  {"pwTestLine":63,"pickleLine":49,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Program page should display the total Program footer","stepMatchArguments":[]}]},
  {"pwTestLine":67,"pickleLine":53,"tags":["@program","@ui","@add-program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Program page should display \"Program Details dialog\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Program Details dialog\"","children":[{"start":29,"value":"Program Details dialog","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":72,"pickleLine":57,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":58,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":59,"keywordType":"Outcome","textWithKeyword":"Then Program Details should display \"dialog title\"","stepMatchArguments":[{"group":{"start":31,"value":"\"dialog title\"","children":[{"start":32,"value":"dialog title","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":77,"pickleLine":61,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then Program Details should display \"mandatory indicators\"","stepMatchArguments":[{"group":{"start":31,"value":"\"mandatory indicators\"","children":[{"start":32,"value":"mandatory indicators","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":82,"pickleLine":65,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then Program Details should display \"Name field\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Name field\"","children":[{"start":32,"value":"Name field","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":87,"pickleLine":69,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then Program Details should display \"Description field\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Description field\"","children":[{"start":32,"value":"Description field","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":92,"pickleLine":73,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":74,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":75,"keywordType":"Outcome","textWithKeyword":"Then Program Details should display \"Status radio buttons\"","stepMatchArguments":[{"group":{"start":31,"value":"\"Status radio buttons\"","children":[{"start":32,"value":"Status radio buttons","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":97,"pickleLine":78,"tags":["@program","@validation","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":79,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":80,"keywordType":"Action","textWithKeyword":"And Admin saves the empty Program form","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":81,"keywordType":"Outcome","textWithKeyword":"Then Name and Status required messages should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":103,"pickleLine":83,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":84,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"And Admin closes the Program dialog using \"Cancel\"","stepMatchArguments":[{"group":{"start":38,"value":"\"Cancel\"","children":[{"start":39,"value":"Cancel","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":106,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then the Program Details dialog should disappear","stepMatchArguments":[]}]},
  {"pwTestLine":109,"pickleLine":88,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":89,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":90,"keywordType":"Action","textWithKeyword":"And Admin closes the Program dialog using \"X\"","stepMatchArguments":[{"group":{"start":38,"value":"\"X\"","children":[{"start":39,"value":"X","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":112,"gherkinStepLine":91,"keywordType":"Outcome","textWithKeyword":"Then the Program Details dialog should disappear","stepMatchArguments":[]}]},
  {"pwTestLine":115,"pickleLine":94,"tags":["@program","@crud","@positive"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":95,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"And Admin creates a Program using data key \"validProgram\"","stepMatchArguments":[{"group":{"start":39,"value":"\"validProgram\"","children":[{"start":40,"value":"validProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":118,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then a Program created success message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":121,"pickleLine":100,"tags":["@program","@validation","@negative"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"When Admin opens the Add New Program dialog","stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":102,"keywordType":"Action","textWithKeyword":"And Admin enters Program data using key \"numericProgram\"","stepMatchArguments":[{"group":{"start":36,"value":"\"numericProgram\"","children":[{"start":37,"value":"numericProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":124,"gherkinStepLine":103,"keywordType":"Outcome","textWithKeyword":"Then the Program name format error should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":127,"pickleLine":106,"tags":["@program","@crud"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"validProgram\"","stepMatchArguments":[{"group":{"start":30,"value":"\"validProgram\"","children":[{"start":31,"value":"validProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":129,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"Then matching Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":132,"pickleLine":111,"tags":["@program","@edit"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":112,"keywordType":"Action","textWithKeyword":"When Admin opens Edit for Program using data key \"existingProgram\"","stepMatchArguments":[{"group":{"start":44,"value":"\"existingProgram\"","children":[{"start":45,"value":"existingProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":134,"gherkinStepLine":113,"keywordType":"Outcome","textWithKeyword":"Then Program page should display \"Program Details dialog\"","stepMatchArguments":[{"group":{"start":28,"value":"\"Program Details dialog\"","children":[{"start":29,"value":"Program Details dialog","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":137,"pickleLine":115,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":116,"keywordType":"Action","textWithKeyword":"When Admin edits Program using data key \"editProgramName\"","stepMatchArguments":[{"group":{"start":35,"value":"\"editProgramName\"","children":[{"start":36,"value":"editProgramName","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":139,"gherkinStepLine":117,"keywordType":"Outcome","textWithKeyword":"Then a Program updated success message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":142,"pickleLine":119,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":120,"keywordType":"Action","textWithKeyword":"When Admin edits Program using data key \"editDescription\"","stepMatchArguments":[{"group":{"start":35,"value":"\"editDescription\"","children":[{"start":36,"value":"editDescription","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":144,"gherkinStepLine":121,"keywordType":"Outcome","textWithKeyword":"Then a Program updated success message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":147,"pickleLine":123,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":124,"keywordType":"Action","textWithKeyword":"When Admin edits Program using data key \"editStatus\"","stepMatchArguments":[{"group":{"start":35,"value":"\"editStatus\"","children":[{"start":36,"value":"editStatus","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":149,"gherkinStepLine":125,"keywordType":"Outcome","textWithKeyword":"Then a Program updated success message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":152,"pickleLine":127,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":128,"keywordType":"Action","textWithKeyword":"When Admin edits Program using data key \"editProgramName\"","stepMatchArguments":[{"group":{"start":35,"value":"\"editProgramName\"","children":[{"start":36,"value":"editProgramName","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":154,"gherkinStepLine":129,"keywordType":"Outcome","textWithKeyword":"Then a Program updated success message should be displayed","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":130,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"editProgramName\"","stepMatchArguments":[{"group":{"start":30,"value":"\"editProgramName\"","children":[{"start":31,"value":"editProgramName","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":156,"gherkinStepLine":131,"keywordType":"Outcome","textWithKeyword":"Then Program details should match data key \"editProgramName\"","stepMatchArguments":[{"group":{"start":38,"value":"\"editProgramName\"","children":[{"start":39,"value":"editProgramName","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":159,"pickleLine":134,"tags":["@program","@delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":135,"keywordType":"Action","textWithKeyword":"When Admin requests Program deletion using data key \"deleteProgram\"","stepMatchArguments":[{"group":{"start":47,"value":"\"deleteProgram\"","children":[{"start":48,"value":"deleteProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":161,"gherkinStepLine":136,"keywordType":"Outcome","textWithKeyword":"Then the Program deletion confirmation should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":164,"pickleLine":138,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":165,"gherkinStepLine":139,"keywordType":"Action","textWithKeyword":"When Admin deletes Program using data key \"deleteProgram\"","stepMatchArguments":[{"group":{"start":37,"value":"\"deleteProgram\"","children":[{"start":38,"value":"deleteProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":166,"gherkinStepLine":140,"keywordType":"Outcome","textWithKeyword":"Then a Program deleted success message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":169,"pickleLine":142,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"deleteProgram\"","stepMatchArguments":[{"group":{"start":30,"value":"\"deleteProgram\"","children":[{"start":31,"value":"deleteProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":171,"gherkinStepLine":144,"keywordType":"Outcome","textWithKeyword":"Then zero Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":174,"pickleLine":146,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When Admin requests Program deletion using data key \"existingProgram\"","stepMatchArguments":[{"group":{"start":47,"value":"\"existingProgram\"","children":[{"start":48,"value":"existingProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":176,"gherkinStepLine":148,"keywordType":"Action","textWithKeyword":"And Admin answers \"No\" to the deletion confirmation","stepMatchArguments":[{"group":{"start":14,"value":"\"No\"","children":[{"start":15,"value":"No","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":177,"gherkinStepLine":149,"keywordType":"Outcome","textWithKeyword":"Then the deletion confirmation should disappear","stepMatchArguments":[]}]},
  {"pwTestLine":180,"pickleLine":151,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":152,"keywordType":"Action","textWithKeyword":"When Admin requests Program deletion using data key \"existingProgram\"","stepMatchArguments":[{"group":{"start":47,"value":"\"existingProgram\"","children":[{"start":48,"value":"existingProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":182,"gherkinStepLine":153,"keywordType":"Action","textWithKeyword":"And Admin closes the deletion confirmation","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":154,"keywordType":"Outcome","textWithKeyword":"Then the deletion confirmation should disappear","stepMatchArguments":[]}]},
  {"pwTestLine":186,"pickleLine":157,"tags":["@program","@multi-delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":158,"keywordType":"Action","textWithKeyword":"When Admin selects the first 2 Programs","stepMatchArguments":[{"group":{"start":24,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":188,"gherkinStepLine":159,"keywordType":"Outcome","textWithKeyword":"Then the multiple Program delete button should be enabled","stepMatchArguments":[]}]},
  {"pwTestLine":191,"pickleLine":161,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":192,"gherkinStepLine":162,"keywordType":"Action","textWithKeyword":"When Admin selects the first 2 Programs","stepMatchArguments":[{"group":{"start":24,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":193,"gherkinStepLine":163,"keywordType":"Action","textWithKeyword":"And Admin opens the multiple Program deletion confirmation","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":164,"keywordType":"Outcome","textWithKeyword":"Then the Program deletion confirmation should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":197,"pickleLine":166,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":167,"keywordType":"Action","textWithKeyword":"When Admin selects the first 2 Programs","stepMatchArguments":[{"group":{"start":24,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":199,"gherkinStepLine":168,"keywordType":"Action","textWithKeyword":"And Admin opens the multiple Program deletion confirmation","stepMatchArguments":[]},{"pwStepLine":200,"gherkinStepLine":169,"keywordType":"Action","textWithKeyword":"And Admin answers \"Yes\" to the deletion confirmation","stepMatchArguments":[{"group":{"start":14,"value":"\"Yes\"","children":[{"start":15,"value":"Yes","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":201,"gherkinStepLine":170,"keywordType":"Outcome","textWithKeyword":"Then a Program deleted success message should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":204,"pickleLine":172,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":205,"gherkinStepLine":173,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"multiDeleteProgram\"","stepMatchArguments":[{"group":{"start":30,"value":"\"multiDeleteProgram\"","children":[{"start":31,"value":"multiDeleteProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":206,"gherkinStepLine":174,"keywordType":"Outcome","textWithKeyword":"Then zero Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":209,"pickleLine":176,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":177,"keywordType":"Action","textWithKeyword":"When Admin selects the first 2 Programs","stepMatchArguments":[{"group":{"start":24,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":211,"gherkinStepLine":178,"keywordType":"Action","textWithKeyword":"And Admin opens the multiple Program deletion confirmation","stepMatchArguments":[]},{"pwStepLine":212,"gherkinStepLine":179,"keywordType":"Action","textWithKeyword":"And Admin answers \"No\" to the deletion confirmation","stepMatchArguments":[{"group":{"start":14,"value":"\"No\"","children":[{"start":15,"value":"No","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":213,"gherkinStepLine":180,"keywordType":"Outcome","textWithKeyword":"Then selected Program checkboxes should remain checked","stepMatchArguments":[]}]},
  {"pwTestLine":216,"pickleLine":182,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":217,"gherkinStepLine":183,"keywordType":"Action","textWithKeyword":"When Admin selects the first 2 Programs","stepMatchArguments":[{"group":{"start":24,"value":"2"},"parameterTypeName":"int"}]},{"pwStepLine":218,"gherkinStepLine":184,"keywordType":"Action","textWithKeyword":"And Admin opens the multiple Program deletion confirmation","stepMatchArguments":[]},{"pwStepLine":219,"gherkinStepLine":185,"keywordType":"Action","textWithKeyword":"And Admin closes the deletion confirmation","stepMatchArguments":[]},{"pwStepLine":220,"gherkinStepLine":186,"keywordType":"Outcome","textWithKeyword":"Then the deletion confirmation should disappear","stepMatchArguments":[]}]},
  {"pwTestLine":223,"pickleLine":189,"tags":["@program","@search"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":224,"gherkinStepLine":190,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"searchByName\"","stepMatchArguments":[{"group":{"start":30,"value":"\"searchByName\"","children":[{"start":31,"value":"searchByName","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":225,"gherkinStepLine":191,"keywordType":"Outcome","textWithKeyword":"Then matching Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":228,"pickleLine":193,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":229,"gherkinStepLine":194,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"searchByDescription\"","stepMatchArguments":[{"group":{"start":30,"value":"\"searchByDescription\"","children":[{"start":31,"value":"searchByDescription","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":230,"gherkinStepLine":195,"keywordType":"Outcome","textWithKeyword":"Then matching Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":233,"pickleLine":197,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":234,"gherkinStepLine":198,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"nonExistentProgram\"","stepMatchArguments":[{"group":{"start":30,"value":"\"nonExistentProgram\"","children":[{"start":31,"value":"nonExistentProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":235,"gherkinStepLine":199,"keywordType":"Outcome","textWithKeyword":"Then zero Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":238,"pickleLine":201,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":239,"gherkinStepLine":202,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"partialProgramName\"","stepMatchArguments":[{"group":{"start":30,"value":"\"partialProgramName\"","children":[{"start":31,"value":"partialProgramName","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":240,"gherkinStepLine":203,"keywordType":"Outcome","textWithKeyword":"Then matching Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":243,"pickleLine":206,"tags":["@program","@sort"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":244,"gherkinStepLine":207,"keywordType":"Action","textWithKeyword":"When Admin sorts by \"Program Name\" in \"ascending\" order","stepMatchArguments":[{"group":{"start":15,"value":"\"Program Name\"","children":[{"start":16,"value":"Program Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"ascending\"","children":[{"start":34,"value":"ascending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":245,"gherkinStepLine":208,"keywordType":"Outcome","textWithKeyword":"Then the Program values should be sorted correctly","stepMatchArguments":[]}]},
  {"pwTestLine":248,"pickleLine":210,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":249,"gherkinStepLine":211,"keywordType":"Action","textWithKeyword":"When Admin sorts by \"Program Name\" in \"descending\" order","stepMatchArguments":[{"group":{"start":15,"value":"\"Program Name\"","children":[{"start":16,"value":"Program Name","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":33,"value":"\"descending\"","children":[{"start":34,"value":"descending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":250,"gherkinStepLine":212,"keywordType":"Outcome","textWithKeyword":"Then the Program values should be sorted correctly","stepMatchArguments":[]}]},
  {"pwTestLine":253,"pickleLine":214,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":254,"gherkinStepLine":215,"keywordType":"Action","textWithKeyword":"When Admin sorts by \"Program Description\" in \"ascending\" order","stepMatchArguments":[{"group":{"start":15,"value":"\"Program Description\"","children":[{"start":16,"value":"Program Description","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"ascending\"","children":[{"start":41,"value":"ascending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":255,"gherkinStepLine":216,"keywordType":"Outcome","textWithKeyword":"Then the Program values should be sorted correctly","stepMatchArguments":[]}]},
  {"pwTestLine":258,"pickleLine":218,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":259,"gherkinStepLine":219,"keywordType":"Action","textWithKeyword":"When Admin sorts by \"Program Description\" in \"descending\" order","stepMatchArguments":[{"group":{"start":15,"value":"\"Program Description\"","children":[{"start":16,"value":"Program Description","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"descending\"","children":[{"start":41,"value":"descending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":260,"gherkinStepLine":220,"keywordType":"Outcome","textWithKeyword":"Then the Program values should be sorted correctly","stepMatchArguments":[]}]},
  {"pwTestLine":263,"pickleLine":222,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":264,"gherkinStepLine":223,"keywordType":"Action","textWithKeyword":"When Admin sorts by \"Program Status\" in \"ascending\" order","stepMatchArguments":[{"group":{"start":15,"value":"\"Program Status\"","children":[{"start":16,"value":"Program Status","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"ascending\"","children":[{"start":36,"value":"ascending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":265,"gherkinStepLine":224,"keywordType":"Outcome","textWithKeyword":"Then the Program values should be sorted correctly","stepMatchArguments":[]}]},
  {"pwTestLine":268,"pickleLine":226,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":269,"gherkinStepLine":227,"keywordType":"Action","textWithKeyword":"When Admin sorts by \"Program Status\" in \"descending\" order","stepMatchArguments":[{"group":{"start":15,"value":"\"Program Status\"","children":[{"start":16,"value":"Program Status","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":35,"value":"\"descending\"","children":[{"start":36,"value":"descending","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":270,"gherkinStepLine":228,"keywordType":"Outcome","textWithKeyword":"Then the Program values should be sorted correctly","stepMatchArguments":[]}]},
  {"pwTestLine":273,"pickleLine":231,"tags":["@program","@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":274,"gherkinStepLine":232,"keywordType":"Action","textWithKeyword":"When Admin navigates to the \"next\" Program page","stepMatchArguments":[{"group":{"start":23,"value":"\"next\"","children":[{"start":24,"value":"next","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":275,"gherkinStepLine":233,"keywordType":"Outcome","textWithKeyword":"Then a different set of Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":278,"pickleLine":235,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":279,"gherkinStepLine":236,"keywordType":"Action","textWithKeyword":"When Admin navigates to the \"last\" Program page","stepMatchArguments":[{"group":{"start":23,"value":"\"last\"","children":[{"start":24,"value":"last","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":280,"gherkinStepLine":237,"keywordType":"Outcome","textWithKeyword":"Then a different set of Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":283,"pickleLine":239,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":284,"gherkinStepLine":240,"keywordType":"Context","textWithKeyword":"Given Admin navigates to the \"next\" Program page","stepMatchArguments":[{"group":{"start":23,"value":"\"next\"","children":[{"start":24,"value":"next","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":285,"gherkinStepLine":241,"keywordType":"Action","textWithKeyword":"When Admin navigates to the \"previous\" Program page","stepMatchArguments":[{"group":{"start":23,"value":"\"previous\"","children":[{"start":24,"value":"previous","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":286,"gherkinStepLine":242,"keywordType":"Outcome","textWithKeyword":"Then a different set of Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":289,"pickleLine":244,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":290,"gherkinStepLine":245,"keywordType":"Context","textWithKeyword":"Given Admin navigates to the \"last\" Program page","stepMatchArguments":[{"group":{"start":23,"value":"\"last\"","children":[{"start":24,"value":"last","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":291,"gherkinStepLine":246,"keywordType":"Action","textWithKeyword":"When Admin navigates to the \"first\" Program page","stepMatchArguments":[{"group":{"start":23,"value":"\"first\"","children":[{"start":24,"value":"first","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":292,"gherkinStepLine":247,"keywordType":"Outcome","textWithKeyword":"Then a different set of Program records should be displayed","stepMatchArguments":[]}]},
  {"pwTestLine":295,"pickleLine":249,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":296,"gherkinStepLine":250,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"nonExistentProgram\"","stepMatchArguments":[{"group":{"start":30,"value":"\"nonExistentProgram\"","children":[{"start":31,"value":"nonExistentProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":297,"gherkinStepLine":251,"keywordType":"Outcome","textWithKeyword":"Then Program pagination should show zero entries","stepMatchArguments":[]}]},
  {"pwTestLine":300,"pickleLine":253,"tags":["@program"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is logged in to LMS Portal","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When Admin is on the Program page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":301,"gherkinStepLine":254,"keywordType":"Action","textWithKeyword":"When Admin searches using data key \"singleResultProgram\"","stepMatchArguments":[{"group":{"start":30,"value":"\"singleResultProgram\"","children":[{"start":31,"value":"singleResultProgram","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":302,"gherkinStepLine":255,"keywordType":"Outcome","textWithKeyword":"Then all Program pagination navigation buttons should be disabled","stepMatchArguments":[]}]},
]; // bdd-data-end