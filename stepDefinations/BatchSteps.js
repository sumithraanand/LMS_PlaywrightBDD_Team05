import { createBdd } from 'playwright-bdd';
import BatchPage from '../pages/BatchPage.js';
import { LoginPage } from '../pages/LoginPage.js';
import ExcelReader from '../utils/ExcelReader.js';
import { expect } from '@playwright/test';
const { Given, When, Then } = createBdd();
const excelReader = new ExcelReader();
//let loginPage;
//let batchPage;

Given('Admin is on home page after Login', async ({page}) => {
  const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login();
});
//Menu bar
When('Admin clicks {string} on the navigation bar', async ({page}, menuName) => {
  const batchPage = new BatchPage(page);
    if (menuName === 'Batch') {
       await batchPage.clickBatchMenu();
    }
});

Then('Admin should be in the Manage Batch Page', async ({page}) => {
 const batchPage = new BatchPage(page);
 await batchPage.verifyManageBatchPage();
});

Then('Admin should see sub menu in menu bar as {string}', async ({page}, expectedText) => {
  const batchPage = new BatchPage(page);
  await batchPage.verifySubMenu(expectedText);
});
//Manage batch-UI validation
Then('Admin should see the {string} Heading', async ({page}, expectedText) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifyHeading(expectedText);
});

Then('Admin should see the disabled {string} under the header', async ({page }, expectedText) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifyDeleteButtonDisabled();
});

Then('Admin should see the pagination controls under the data table', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyPaginationControls();
});

Then('Admin should see the edit icon in each row', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifyEditIcons();
});

Then('Admin should see the delete icon in each row', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifyDeleteIcons();
});

Then('Admin should see the checkbox in each row', async ({page}) => {
    const batchPage = new BatchPage(page);
     await batchPage.verifyRowCheckboxes();
});
Then('Admin should see the datatable headers', async ({page}, dataTable) => {
     const batchPage = new BatchPage(page);
     const expectedHeaders = dataTable.raw().flat();
     await batchPage.verifyDataTableHeaders(expectedHeaders);
});

Then('Admin should see the checkbox in the datatable header row', async ({page}) => {
     const batchPage = new BatchPage(page);
      await batchPage.verifyHeaderCheckbox();
});

Then('Admin should see the sort icon next to all Datatable headers', async ({page}) => {
     const batchPage = new BatchPage(page);
     await batchPage.verifySortIcons();
});

When('Admin clicks on {string} under the {string} menu bar', async ({page}, subMenu, menu) => {
    const batchPage = new BatchPage(page);
    await batchPage.clickAddNewBatch(menu, subMenu);
    });


Then('Admin should see the Batch Details dialog box', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyBatchDetailsDialog();
    });

// Add New batch-UI validation
Given('Admin is on the batch page', async ({page}) => {
    const batchPage = new BatchPage(page);
   await batchPage.verifyManageBatchPage();

   });

Then('Admin should see the batch name field', async ({page}) => {
  const batchPage = new BatchPage(page);
  await batchPage.verifyBatchNameField();
  });


Then('Admin should see the number of classes field', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifyNumberOfClassesField();
   });


Then('Admin should see the description field', async ({page}) => {
    const batchPage = new BatchPage(page);
   await batchPage.verifyDescriptionField();
   });

Then('Admin should see the program name field with dropdown', async ({page}) => {
     const batchPage = new BatchPage(page);
    await batchPage.verifyProgramNameDropdown();
    });
Then('Admin should see the status radio button', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyStatusRadioButton();
    });
// Add New Batch- Functional validation
Given('Admin is on Batch Details dialog box', async ({page}) => {
    const batchPage = new BatchPage(page);

    await batchPage.verifyManageBatchPage();
    await batchPage.clickAddNewBatch();
    await batchPage.verifyBatchDetailsDialog();
  });

When('Admin selects program name present in the dropdown', async ({page}) => {
  const batchPage = new BatchPage(page);
  const testData = excelReader.getRowByTestScenario('Batch','Batch_ProgramPrefix');
  const programName = testData.ProgramName;
  
  console.log('FULL testData:', testData);
  console.log('ProgramName:', testData?.ProgramName);
  await batchPage.selectProgram(programName);
});

Then('Admin should see selected program name in the batch name prefix box', async ({page}) => {
 const batchPage = new BatchPage(page);
  const testData = excelReader.getRowByTestScenario('Batch','Batch_ProgramPrefix');
  const programName = testData.ProgramName;
 await batchPage.verifyProgramNameInPrefix(programName);
});

When('Admin enters alphabets in batch name suffix box', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.enterInvalidBatchNameSuffix();
});

Then('Admin should get error message below the text box of respective field', async ({page}) => {
   const batchPage = new BatchPage(page);
    await batchPage.verifyFieldErrorMessage();
});

When('Admin enters alphabets in batch name prefix box', async ({page}) => {
  const batchPage = new BatchPage(page);
  await batchPage.enterInvalidBatchNamePrefix();
});

Then('Admin should see empty text box', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifyPrefixFieldEmpty();
});

When('Admin leaves blank one of the mandatory fields', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.leaveMandatoryFieldBlank();
});

Then('Admin should get a error message on the respective mandatory field', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyMandatoryFieldError();
});

When('Admin enters the valid data to all the mandatory fields and click cancel button', async ({page}) => {
     const batchPage = new BatchPage(page);
     await batchPage.enterValidDataAndCancel();
});

Then('Admin should see the batch details popup closes without creating any batch', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyDialogClosed();
});

When('Admin clicks on the close icon', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.clickCloseIcon();
 });

Then('batch details pop up closes', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifyDialogClosed();
});
When('Admin clicks the Cancel button', async ({page}) => {
  // Step: When Admin clicks the delete Icon on any row Admin clicks the Cancel button
  // From: features\Batch.feature:22:9
  const batchPage = new BatchPage(page);
  await batchPage.clickCancelButton();
});

//Edit batch Validation
Given('Admin is on the Batch page', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyManageBatchPage();
});

When('Admin clicks the edit icon', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.clickEditIcon();
});

Then('Admin should see the Batch details dialog box', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyEditBatchDialog();
});

Then('Admin should see batch name value field is disabled for editing', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyBatchNameDisabled();
});

When('Admin Updates any fields with invalid data and click save button', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.updateInvalidDataAndSave();
});

Then('Admin should get a error message under the respective field', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyEditValidationError();
});
When('Admin clicks save button after updating with valid data', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.updateValidDataAndSave();
});

Then('Admin should get a successful message for editing the batch', async ({page}) => {
  const batchPage = new BatchPage(page);
    await batchPage.verifyEditSuccessMessage();
});

When('Admin clicks cancel button after updating with valid data', async ({page}) => {
  const batchPage = new BatchPage(page);
    await batchPage.cancelEdit();
});

Then('Admin should see the batch details popup closes without editing the batch', async ({page}) => {
  const batchPage = new BatchPage(page);
    await batchPage.verifyEditDialogClosed();
});

//Batch Delete
Given('Admin is on batch page', async ({page}) => {
    const batchPage = new BatchPage(page);
   await batchPage.verifyBatchPage();
  });

When('Admin clicks the delete Icon on any row', async ({page}) => {
    const batchPage = new BatchPage(page);
   await batchPage.clickDeleteIcon();
 });


 Then('Admin should see the confirm alert box with yes and no button', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.confirmAlertTitle();

 });
 
 When('Admin clicks yes button', async ({page}) => {
     const batchPage = new BatchPage(page);
     await batchPage.clickYesButton();

 });
 
 Then('Admin should see the successful message', async ({page}) => {
    const batchPage = new BatchPage(page);
   await batchPage.verifySuccessfulMessage();

 });
 
 When('Admin should verify the batch should be deleted', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifySuccessfulMessage();
 });
 
 When('Admin clicks the Cancel button', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.clickCancelButton();
 });
 
 When('Admin clicks the delete Icon on any row Admin', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.clickDeleteIcon();
 
 });

 Then('Admin should see the alert box closed', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifyAlertClosed();
 });
 
 Then('the batch is not deleted', async ({page}) => {
   const batchPage = new BatchPage(page);
   await batchPage.verifyBatchNotDeleted();

 });

 

//Batch Multi Delete
When('Admin selects more than one batch by clicking on the checkbox', async ({page}) => {
    const batchPage = new BatchPage(page);
  await batchPage.selectMultipleBatches();
});

Then('Admin should see the Multiple delete box enabled under manage batch', async ({page}) => {
  const batchPage = new BatchPage(page);
  await batchPage.verifyMultipleDeleteEnabled();
});

When('Admin clicks on the delete button on the left top of the batch page', async ({page}) => {
  
  const batchPage = new BatchPage(page);
  await batchPage.clickMultipleDeleteButton();
});

Then('Admin lands on Confirmation form', async ({page}) => {
  
  const batchPage = new BatchPage(page);
  await batchPage.verifyConfirmationForm();
});

// Batch_Pagination


Given('Admin is on the batch page with multiple pages of batch record', async ({page}) => {
 
    const batchPage = new BatchPage(page);
    await batchPage.verifyBatchPageWithMultiplePages();
  
  });
  
  
  Then('Admin should see the Previous arrow \\(<)  disabled', async ({page}) => {
    
    const batchPage = new BatchPage(page);
    await batchPage.verifyPreviousPageArrowDisabled();
  });
  
  Then('Admin should see the First page arrow \\(<<) disabled', async ({page}) => {
    
    const batchPage = new BatchPage(page);
    await batchPage.verifyFirstPageArrowDisabled() ;
  });
  
  Then('Admin should see Next arrow \\(>) enabled', async ({page}) => {
   
    const batchPage = new BatchPage(page);
    await batchPage.verifyNextPageArrowEnabled();
  });
  
   
  Then('Admin should see Last page arrow \\(>>) enabled', async ({page}) => {
    
    const batchPage = new BatchPage(page);
    await batchPage.verifyLastPageArrowEnabled();
  });
  
  When('Admin clicks the next page option \\(>) in the pagination control', async ({page}) => {
  
    const batchPage = new BatchPage(page);
    await batchPage.clickNextPage();
  });
  
  Then('Admin should see the Next enabled link', async ({page}) => {
  
    const batchPage = new BatchPage(page);
    await batchPage.verifyNextPageArrowEnabled();
  
  });
  
  When('Admin clicks the last page option \\(>>) in the pagination control', async ({page}) => {
   
    const batchPage = new BatchPage(page);
    await batchPage.clickLastPage();
  });
  
  Then('Admin should see the last page link with next page link disabled on the table', async ({page}) => {
   
    const batchPage = new BatchPage(page);
    await batchPage.verifyNextPageDisabled();
  });
  
  When('Admin clicks the previous page option \\(<) in the pagination control', async ({page}) => {
   
    const batchPage = new BatchPage(page);
    await batchPage.clickPreviousPage();
  });
  
  Then('Admin should see the previous page on the table', async ({page}) => {
  
    const batchPage = new BatchPage(page);
    await batchPage.verifyPreviousPage();
  });
  
  When('Admin clicks the first page option \\(<<) in the pagination control', async ({page}) => {
    
    const batchPage = new BatchPage(page);
    await batchPage.clickFirstPage();
  });
  
  Then('Admin should see the very first page on the data table', async ({page}) => {
   
    const batchPage = new BatchPage(page);
    await batchPage.verifyFirstPage();
  });