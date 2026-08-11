// Generated from: features\Batch.feature
import { test } from "playwright-bdd";

test.describe('Batch Page', () => {

  test.beforeEach('Background: Admin enters the Valid LMS app URL', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
    await Given('Admin is on home page after Login', null, { page }); 
    await When('Admin clicks "Batch" on the navigation bar', null, { page }); 
  });
  
  test('Batch page Navigation', { tag: ['@batch', '@BatchPageNavigation'] }, async ({ Then, page }) => { 
    await Then('Admin should be in the Manage Batch Page', null, { page }); 
  });

  test.describe('Menu bar', () => {

    test('Batch-sub menu displayed', { tag: ['@batch', '@Menubar'] }, async ({ Then, page }) => { 
      await Then('Admin should see sub menu in menu bar as "Add New Batch"', null, { page }); 
    });

    test('Batch page heading is displayed', { tag: ['@batch', '@Menubar'] }, async ({ Then, page }) => { 
      await Then('Admin should see the "Manage Batch" Heading', null, { page }); 
    });

    test('Presence of disabled Delete Icon', { tag: ['@batch', '@Menubar'] }, async ({ Then, page }) => { 
      await Then('Admin should see the disabled "Delete Icon" under the header', null, { page }); 
    });

    test('Pagination controls are displayed', { tag: ['@batch', '@Menubar'] }, async ({ Then, page }) => { 
      await Then('Admin should see the pagination controls under the data table', null, { page }); 
    });

    test('Edit icon is displayed', { tag: ['@batch', '@Menubar'] }, async ({ Then, page }) => { 
      await Then('Admin should see the edit icon in each row', null, { page }); 
    });

  });

  test.describe('Manage Batch - UI validation', () => {

    test('Delete icon is displayed', { tag: ['@batch', '@ManageBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the delete icon in each row', null, { page }); 
    });

    test('Row Checkbox is displayed', { tag: ['@batch', '@ManageBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the checkbox in each row', null, { page }); 
    });

    test('Datatable headers are displayed', { tag: ['@batch', '@ManageBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the datatable headers', {"dataTable":{"rows":[{"cells":[{"value":"Batch Name"}]},{"cells":[{"value":"Batch Description"}]},{"cells":[{"value":"Batch Status"}]},{"cells":[{"value":"No Of Classes"}]},{"cells":[{"value":"Program Name"}]},{"cells":[{"value":"Edit/Delete"}]}]}}, { page }); 
    });

    test('Checkbox is displayed', { tag: ['@batch', '@ManageBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the checkbox in the datatable header row', null, { page }); 
    });

    test('Sort icon presence', { tag: ['@batch', '@ManageBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the sort icon next to all Datatable headers', null, { page }); 
    });

    test('Add New Batch dialog is displayed', { tag: ['@batch', '@ManageBatch_UIvalidation'] }, async ({ When, Then, page }) => { 
      await When('Admin clicks on "Add New batch" under the "batch" menu bar', null, { page }); 
      await Then('Admin should see the Batch Details dialog box', null, { page }); 
    });

  });

  test.describe('Add New Batch - UI validation', () => {

    test.beforeEach('Background: Admin navigates to Manage batch page after logged in', async ({ Given, When, page }, testInfo) => { if (testInfo.error) return;
      await Given('Admin is on the batch page', null, { page }); 
      await When('Admin clicks on "Add New batch" under the "batch" menu bar', null, { page }); 
    });
    
    test('Batch name field is displayed', { tag: ['@batch', '@AddNewBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the batch name field', null, { page }); 
    });

    test('Number of Classes field is displayed', { tag: ['@batch', '@AddNewBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the number of classes field', null, { page }); 
    });

    test('Description field is displayed', { tag: ['@batch', '@AddNewBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the description field', null, { page }); 
    });

    test('Program Name dropdown is displayed', { tag: ['@batch', '@AddNewBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the program name field with dropdown', null, { page }); 
    });

    test('Status radio buttons are displayed', { tag: ['@batch', '@AddNewBatch_UIvalidation'] }, async ({ Then, page }) => { 
      await Then('Admin should see the status radio button', null, { page }); 
    });

  });

  test.describe('Add New Batch - Functional Validation', () => {

    test.beforeEach('Background: Admin navigates to Add new batch dialog box after logged in', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
      await Given('Admin is on Batch Details dialog box', null, { page }); 
    });
    
    test('Program name appears as batch prefix', { tag: ['@batch', '@AddNewBatch_FunctionalValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin selects program name present in the dropdown', null, { page }); 
      await Then('Admin should see selected program name in the batch name prefix box', null, { page }); 
    });

    test('Batch name suffix accepts only numbers', { tag: ['@batch', '@AddNewBatch_FunctionalValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin enters alphabets in batch name suffix box', null, { page }); 
      await Then('Admin should get error message below the text box of respective field', null, { page }); 
    });

    test('Batch name Prefix cannot be edited', { tag: ['@batch', '@AddNewBatch_FunctionalValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin enters alphabets in batch name prefix box', null, { page }); 
      await Then('Admin should see empty text box', null, { page }); 
    });

    test('Add new batch with leaving space in mandatory field', { tag: ['@batch', '@AddNewBatch_FunctionalValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin leaves blank one of the mandatory fields', null, { page }); 
      await Then('Admin should get a error message on the respective mandatory field', null, { page }); 
    });

    test('Cancel Button functionality', { tag: ['@batch', '@AddNewBatch_FunctionalValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin enters the valid data to all the mandatory fields and click cancel button', null, { page }); 
      await Then('Admin should see the batch details popup closes without creating any batch', null, { page }); 
    });

    test('Close icon functionality', { tag: ['@batch', '@AddNewBatch_FunctionalValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin clicks on the close icon', null, { page }); 
      await Then('batch details pop up closes', null, { page }); 
    });

  });

  test.describe('Edit Batch Validation', () => {

    test.beforeEach('Background: Admin navigates to Manage batch page after logged in', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
      await Given('Admin is on the Batch page', null, { page }); 
    });
    
    test('Edit icon functionality', { tag: ['@batch', '@EditBatchValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin clicks the edit icon', null, { page }); 
      await Then('Admin should see the Batch details dialog box', null, { page }); 
    });

    test('Batch Name value disabled', { tag: ['@batch', '@EditBatchValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin clicks the edit icon', null, { page }); 
      await Then('Admin should see batch name value field is disabled for editing', null, { page }); 
    });

    test('Validate editing description and No. of classes fields with invalid data in the pop up', { tag: ['@batch', '@EditBatchValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin clicks the edit icon', null, { page }); 
      await When('Admin Updates any fields with invalid data and click save button', null, { page }); 
      await Then('Admin should get a error message under the respective field', null, { page }); 
    });

    test('Successful Batch Update', { tag: ['@batch', '@EditBatchValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin clicks the edit icon', null, { page }); 
      await When('Admin clicks save button after updating with valid data', null, { page }); 
      await Then('Admin should get a successful message for editing the batch', null, { page }); 
    });

    test('Cancel Button Functionality', { tag: ['@batch', '@EditBatchValidation'] }, async ({ When, Then, page }) => { 
      await When('Admin clicks the edit icon', null, { page }); 
      await When('Admin clicks cancel button after updating with valid data', null, { page }); 
      await Then('Admin should see the batch details popup closes without editing the batch', null, { page }); 
    });

  });

  test.describe('Batch Delete', () => {

    test.beforeEach('Background: Admin logs in and navigates to Batch page', async ({ Given, When, Then, page }, testInfo) => { if (testInfo.error) return;
      await Given('Admin is on the login page', null, { page }); 
      await When('Admin logs in with valid credentials', null, { page }); 
      await Then('Admin should land on the home page', null, { page }); 
      await When('Admin clicks "Batch" on the navigation bar', null, { page }); 
      await Then('Admin should land on the Batch page', null, { page }); 
    });
    
    test('Display Delete Confirmation', { tag: ['@batch', '@Batch_Delete', '@Batch1_Delete'] }, async ({ When, Then, page }) => { 
      await When('Admin clicks the delete Icon on any row', null, { page }); 
      await Then('Admin should see the confirm alert box with yes and no button', null, { page }); 
    });

    test('Delete batch Successfully', { tag: ['@batch', '@Batch_Delete'] }, async ({ When, Then, And, page }) => { 
      await When('Admin clicks the delete Icon on any row', null, { page }); 
      await Then('Admin should see the confirm alert box with yes and no button', null, { page }); 
      await When('Admin clicks yes button', null, { page }); 
      await Then('Admin should see the successful message', null, { page }); 
      await And('Admin should verify the batch should be deleted', null, { page }); 
    });

    test('Cancel batch deletion', { tag: ['@batch', '@Batch_Delete'] }, async ({ When, Then, And, page }) => { 
      await When('Admin clicks the delete Icon on any row', null, { page }); 
      await Then('Admin should see the confirm alert box with yes and no button', null, { page }); 
      await When('Admin clicks the Cancel button', null, { page }); 
      await Then('Admin should see the alert box closed', null, { page }); 
      await And('the batch is not deleted', null, { page }); 
    });

    test('close icon functionality', { tag: ['@batch', '@Batch_Delete'] }, async ({ When, Then, page }) => { 
      await When('Admin clicks the delete Icon on any row', null, { page }); 
      await Then('Admin should see the confirm alert box with yes and no button', null, { page }); 
      await When('Admin clicks on the close icon', null, { page }); 
      await Then('Admin should see the alert box closed', null, { page }); 
    });

  });

  test.describe('MultipleBatch_Delete', () => {

    test('Select multiple batch', { tag: ['@batch', '@MultipleBatch_Delete'] }, async ({ Given, When, Then, page }) => { 
      await Given('Admin is on batch page', null, { page }); 
      await When('Admin selects more than one batch by clicking on the checkbox', null, { page }); 
      await Then('Admin should see the Multiple delete box enabled under manage batch', null, { page }); 
    });

    test('Delete Multiple Batches', { tag: ['@batch', '@MultipleBatch_Delete'] }, async ({ Given, When, Then, And, page }) => { 
      await Given('Admin is on batch page', null, { page }); 
      await When('Admin selects more than one batch by clicking on the checkbox', null, { page }); 
      await And('Admin clicks on the delete button on the left top of the batch page', null, { page }); 
      await Then('Admin lands on Confirmation form', null, { page }); 
    });

  });

  test.describe('Batch_Pagination', () => {

    test('Previous page arrow disabled on first page', { tag: ['@batch', '@Batch_Pagination'] }, async ({ Given, Then, page }) => { 
      await Given('Admin is on the batch page with multiple pages of batch record', null, { page }); 
      await Then('Admin should see the Previous arrow (<)  disabled', null, { page }); 
    });

    test('First page arrow disabled on first page', { tag: ['@batch', '@Batch_Pagination'] }, async ({ Given, Then, page }) => { 
      await Given('Admin is on the batch page with multiple pages of batch record', null, { page }); 
      await Then('Admin should see the First page arrow (<<) disabled', null, { page }); 
    });

    test('Next page arrow enabled on first page', { tag: ['@batch', '@Batch_Pagination'] }, async ({ Then }) => { 
      await Then('Admin should see Next arrow (>) enabled'); 
    });

    test('Last page arrow enabled on first page', { tag: ['@batch', '@Batch_Pagination'] }, async ({ Then, page }) => { 
      await Then('Admin should see Last page arrow (>>) enabled', null, { page }); 
    });

    test('Next Page Navigation', { tag: ['@batch', '@Batch_Pagination'] }, async ({ Given, When, Then, page }) => { 
      await Given('Admin is on the batch page with multiple pages of batch record', null, { page }); 
      await When('Admin clicks the next page option (>) in the pagination control', null, { page }); 
      await Then('Admin should see the Next enabled link', null, { page }); 
    });

    test('Last Page Navigation', { tag: ['@batch', '@Batch_Pagination'] }, async ({ Given, When, Then, page }) => { 
      await Given('Admin is on the batch page with multiple pages of batch record', null, { page }); 
      await When('Admin clicks the last page option (>>) in the pagination control', null, { page }); 
      await Then('Admin should see the last page link with next page link disabled on the table', null, { page }); 
    });

    test('Previous Page Navigation', { tag: ['@batch', '@Batch_Pagination'] }, async ({ Given, When, Then, page }) => { 
      await Given('Admin is on the batch page with multiple pages of batch record', null, { page }); 
      await When('Admin clicks the previous page option (<) in the pagination control', null, { page }); 
      await Then('Admin should see the previous page on the table', null, { page }); 
    });

    test('First Page Navigation', { tag: ['@batch', '@Batch_Pagination'] }, async ({ Given, When, Then, page }) => { 
      await Given('Admin is on the batch page with multiple pages of batch record', null, { page }); 
      await When('Admin clicks the first page option (<<) in the pagination control', null, { page }); 
      await Then('Admin should see the very first page on the data table', null, { page }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Batch.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":11,"pickleLine":7,"tags":["@batch","@BatchPageNavigation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should be in the Manage Batch Page","stepMatchArguments":[]}]},
  {"pwTestLine":17,"pickleLine":11,"tags":["@batch","@Menubar"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should see sub menu in menu bar as \"Add New Batch\"","stepMatchArguments":[{"group":{"start":41,"value":"\"Add New Batch\"","children":[{"start":42,"value":"Add New Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":21,"pickleLine":13,"tags":["@batch","@Menubar"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":22,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \"Manage Batch\" Heading","stepMatchArguments":[{"group":{"start":21,"value":"\"Manage Batch\"","children":[{"start":22,"value":"Manage Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":15,"tags":["@batch","@Menubar"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the disabled \"Delete Icon\" under the header","stepMatchArguments":[{"group":{"start":30,"value":"\"Delete Icon\"","children":[{"start":31,"value":"Delete Icon","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":29,"pickleLine":17,"tags":["@batch","@Menubar"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the pagination controls under the data table","stepMatchArguments":[]}]},
  {"pwTestLine":33,"pickleLine":19,"tags":["@batch","@Menubar"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the edit icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":41,"pickleLine":23,"tags":["@batch","@ManageBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the delete icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":25,"tags":["@batch","@ManageBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in each row","stepMatchArguments":[]}]},
  {"pwTestLine":49,"pickleLine":27,"tags":["@batch","@ManageBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":50,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable headers","stepMatchArguments":[]}]},
  {"pwTestLine":53,"pickleLine":35,"tags":["@batch","@ManageBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in the datatable header row","stepMatchArguments":[]}]},
  {"pwTestLine":57,"pickleLine":37,"tags":["@batch","@ManageBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":58,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon next to all Datatable headers","stepMatchArguments":[]}]},
  {"pwTestLine":61,"pickleLine":40,"tags":["@batch","@ManageBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":62,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Add New batch\" under the \"batch\" menu bar","stepMatchArguments":[{"group":{"start":16,"value":"\"Add New batch\"","children":[{"start":17,"value":"Add New batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"batch\"","children":[{"start":43,"value":"batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":63,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Batch Details dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":75,"pickleLine":48,"tags":["@batch","@AddNewBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":71,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Add New batch\" under the \"batch\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"Add New batch\"","children":[{"start":17,"value":"Add New batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"batch\"","children":[{"start":43,"value":"batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":76,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the batch name field","stepMatchArguments":[]}]},
  {"pwTestLine":79,"pickleLine":50,"tags":["@batch","@AddNewBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":71,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Add New batch\" under the \"batch\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"Add New batch\"","children":[{"start":17,"value":"Add New batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"batch\"","children":[{"start":43,"value":"batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":80,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the number of classes field","stepMatchArguments":[]}]},
  {"pwTestLine":83,"pickleLine":52,"tags":["@batch","@AddNewBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":71,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Add New batch\" under the \"batch\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"Add New batch\"","children":[{"start":17,"value":"Add New batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"batch\"","children":[{"start":43,"value":"batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":84,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the description field","stepMatchArguments":[]}]},
  {"pwTestLine":87,"pickleLine":54,"tags":["@batch","@AddNewBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":71,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Add New batch\" under the \"batch\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"Add New batch\"","children":[{"start":17,"value":"Add New batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"batch\"","children":[{"start":43,"value":"batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":88,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the program name field with dropdown","stepMatchArguments":[]}]},
  {"pwTestLine":91,"pickleLine":56,"tags":["@batch","@AddNewBatch_UIvalidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":71,"gherkinStepLine":46,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"When Admin clicks on \"Add New batch\" under the \"batch\" menu bar","isBg":true,"stepMatchArguments":[{"group":{"start":16,"value":"\"Add New batch\"","children":[{"start":17,"value":"Add New batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"batch\"","children":[{"start":43,"value":"batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":92,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the status radio button","stepMatchArguments":[]}]},
  {"pwTestLine":103,"pickleLine":62,"tags":["@batch","@AddNewBatch_FunctionalValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given Admin is on Batch Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When Admin selects program name present in the dropdown","stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Admin should see selected program name in the batch name prefix box","stepMatchArguments":[]}]},
  {"pwTestLine":108,"pickleLine":65,"tags":["@batch","@AddNewBatch_FunctionalValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given Admin is on Batch Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When Admin enters alphabets in batch name suffix box","stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then Admin should get error message below the text box of respective field","stepMatchArguments":[]}]},
  {"pwTestLine":113,"pickleLine":68,"tags":["@batch","@AddNewBatch_FunctionalValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given Admin is on Batch Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":69,"keywordType":"Action","textWithKeyword":"When Admin enters alphabets in batch name prefix box","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":70,"keywordType":"Outcome","textWithKeyword":"Then Admin should see empty text box","stepMatchArguments":[]}]},
  {"pwTestLine":118,"pickleLine":71,"tags":["@batch","@AddNewBatch_FunctionalValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given Admin is on Batch Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When Admin leaves blank one of the mandatory fields","stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a error message on the respective mandatory field","stepMatchArguments":[]}]},
  {"pwTestLine":123,"pickleLine":74,"tags":["@batch","@AddNewBatch_FunctionalValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given Admin is on Batch Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data to all the mandatory fields and click cancel button","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the batch details popup closes without creating any batch","stepMatchArguments":[]}]},
  {"pwTestLine":128,"pickleLine":77,"tags":["@batch","@AddNewBatch_FunctionalValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":100,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given Admin is on Batch Details dialog box","isBg":true,"stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then batch details pop up closes","stepMatchArguments":[]}]},
  {"pwTestLine":141,"pickleLine":84,"tags":["@batch","@EditBatchValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":138,"gherkinStepLine":83,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":85,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":86,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Batch details dialog box","stepMatchArguments":[]}]},
  {"pwTestLine":146,"pickleLine":87,"tags":["@batch","@EditBatchValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":138,"gherkinStepLine":83,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch name value field is disabled for editing","stepMatchArguments":[]}]},
  {"pwTestLine":151,"pickleLine":90,"tags":["@batch","@EditBatchValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":138,"gherkinStepLine":83,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":92,"keywordType":"Action","textWithKeyword":"When Admin Updates any fields with invalid data and click save button","stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a error message under the respective field","stepMatchArguments":[]}]},
  {"pwTestLine":157,"pickleLine":94,"tags":["@batch","@EditBatchValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":138,"gherkinStepLine":83,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":95,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"When Admin clicks save button after updating with valid data","stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a successful message for editing the batch","stepMatchArguments":[]}]},
  {"pwTestLine":163,"pickleLine":98,"tags":["@batch","@EditBatchValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":138,"gherkinStepLine":83,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":164,"gherkinStepLine":99,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon","stepMatchArguments":[]},{"pwStepLine":165,"gherkinStepLine":100,"keywordType":"Action","textWithKeyword":"When Admin clicks cancel button after updating with valid data","stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":101,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the batch details popup closes without editing the batch","stepMatchArguments":[]}]},
  {"pwTestLine":181,"pickleLine":113,"tags":["@batch","@Batch_Delete","@Batch1_Delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":174,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"Given Admin is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When Admin logs in with valid credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":178,"gherkinStepLine":110,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":114,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":115,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]}]},
  {"pwTestLine":186,"pickleLine":117,"tags":["@batch","@Batch_Delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":174,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"Given Admin is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When Admin logs in with valid credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":178,"gherkinStepLine":110,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":118,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":119,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":120,"keywordType":"Action","textWithKeyword":"When Admin clicks yes button","stepMatchArguments":[]},{"pwStepLine":190,"gherkinStepLine":121,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the successful message","stepMatchArguments":[]},{"pwStepLine":191,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"And Admin should verify the batch should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":194,"pickleLine":124,"tags":["@batch","@Batch_Delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":174,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"Given Admin is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When Admin logs in with valid credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":178,"gherkinStepLine":110,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":195,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":196,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]},{"pwStepLine":197,"gherkinStepLine":127,"keywordType":"Action","textWithKeyword":"When Admin clicks the Cancel button","stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":128,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed","stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":129,"keywordType":"Outcome","textWithKeyword":"And the batch is not deleted","stepMatchArguments":[]}]},
  {"pwTestLine":202,"pickleLine":131,"tags":["@batch","@Batch_Delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":174,"gherkinStepLine":106,"keywordType":"Context","textWithKeyword":"Given Admin is on the login page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":107,"keywordType":"Action","textWithKeyword":"When Admin logs in with valid credentials","isBg":true,"stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":108,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":178,"gherkinStepLine":110,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on the Batch page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":132,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":133,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]},{"pwStepLine":205,"gherkinStepLine":134,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon","stepMatchArguments":[]},{"pwStepLine":206,"gherkinStepLine":135,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed","stepMatchArguments":[]}]},
  {"pwTestLine":213,"pickleLine":139,"tags":["@batch","@MultipleBatch_Delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":214,"gherkinStepLine":140,"keywordType":"Context","textWithKeyword":"Given Admin is on batch page","stepMatchArguments":[]},{"pwStepLine":215,"gherkinStepLine":141,"keywordType":"Action","textWithKeyword":"When Admin selects more than one batch by clicking on the checkbox","stepMatchArguments":[]},{"pwStepLine":216,"gherkinStepLine":142,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Multiple delete box enabled under manage batch","stepMatchArguments":[]}]},
  {"pwTestLine":219,"pickleLine":144,"tags":["@batch","@MultipleBatch_Delete"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":220,"gherkinStepLine":145,"keywordType":"Context","textWithKeyword":"Given Admin is on batch page","stepMatchArguments":[]},{"pwStepLine":221,"gherkinStepLine":146,"keywordType":"Action","textWithKeyword":"When Admin selects more than one batch by clicking on the checkbox","stepMatchArguments":[]},{"pwStepLine":222,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"And Admin clicks on the delete button on the left top of the batch page","stepMatchArguments":[]},{"pwStepLine":223,"gherkinStepLine":148,"keywordType":"Outcome","textWithKeyword":"Then Admin lands on Confirmation form","stepMatchArguments":[]}]},
  {"pwTestLine":230,"pickleLine":153,"tags":["@batch","@Batch_Pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":231,"gherkinStepLine":154,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page with multiple pages of batch record","stepMatchArguments":[]},{"pwStepLine":232,"gherkinStepLine":155,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Previous arrow (<)  disabled","stepMatchArguments":[]}]},
  {"pwTestLine":235,"pickleLine":158,"tags":["@batch","@Batch_Pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":236,"gherkinStepLine":159,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page with multiple pages of batch record","stepMatchArguments":[]},{"pwStepLine":237,"gherkinStepLine":160,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the First page arrow (<<) disabled","stepMatchArguments":[]}]},
  {"pwTestLine":240,"pickleLine":163,"tags":["@batch","@Batch_Pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":241,"gherkinStepLine":164,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Next arrow (>) enabled","stepMatchArguments":[]}]},
  {"pwTestLine":244,"pickleLine":167,"tags":["@batch","@Batch_Pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":245,"gherkinStepLine":168,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Last page arrow (>>) enabled","stepMatchArguments":[]}]},
  {"pwTestLine":248,"pickleLine":171,"tags":["@batch","@Batch_Pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":249,"gherkinStepLine":172,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page with multiple pages of batch record","stepMatchArguments":[]},{"pwStepLine":250,"gherkinStepLine":173,"keywordType":"Action","textWithKeyword":"When Admin clicks the next page option (>) in the pagination control","stepMatchArguments":[]},{"pwStepLine":251,"gherkinStepLine":174,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Next enabled link","stepMatchArguments":[]}]},
  {"pwTestLine":254,"pickleLine":177,"tags":["@batch","@Batch_Pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":255,"gherkinStepLine":178,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page with multiple pages of batch record","stepMatchArguments":[]},{"pwStepLine":256,"gherkinStepLine":179,"keywordType":"Action","textWithKeyword":"When Admin clicks the last page option (>>) in the pagination control","stepMatchArguments":[]},{"pwStepLine":257,"gherkinStepLine":180,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the last page link with next page link disabled on the table","stepMatchArguments":[]}]},
  {"pwTestLine":260,"pickleLine":183,"tags":["@batch","@Batch_Pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":261,"gherkinStepLine":184,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page with multiple pages of batch record","stepMatchArguments":[]},{"pwStepLine":262,"gherkinStepLine":185,"keywordType":"Action","textWithKeyword":"When Admin clicks the previous page option (<) in the pagination control","stepMatchArguments":[]},{"pwStepLine":263,"gherkinStepLine":186,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the previous page on the table","stepMatchArguments":[]}]},
  {"pwTestLine":266,"pickleLine":189,"tags":["@batch","@Batch_Pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks \"Batch\" on the navigation bar","isBg":true,"stepMatchArguments":[{"group":{"start":13,"value":"\"Batch\"","children":[{"start":14,"value":"Batch","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":267,"gherkinStepLine":190,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page with multiple pages of batch record","stepMatchArguments":[]},{"pwStepLine":268,"gherkinStepLine":191,"keywordType":"Action","textWithKeyword":"When Admin clicks the first page option (<<) in the pagination control","stepMatchArguments":[]},{"pwStepLine":269,"gherkinStepLine":192,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the very first page on the data table","stepMatchArguments":[]}]},
]; // bdd-data-end