import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();
import { expect } from '@playwright/test';
import {LoginPage} from "../pages/LoginPage.js";
import { BatchPage } from "../pages/BatchDeletePage.js";


Given('Admin is on the login page', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.gotoLoginPage();
  });
  
  When('Admin logs in with valid credentials', async ({page}) => {
        const loginPage = new LoginPage(page);
        await loginPage.login();
  });
  
  Then('Admin should land on the home page', async ({page}) => {
      await expect(page.getByText('Dashboard', { exact: true })).toBeVisible({ timeout: 10000 });
  });
  
  When('Admin clicks {string} on the navigation bar', async ({page}, arg) => {
            const batchPage = new BatchPage(page);
            await batchPage.clickBatchNavigation(arg);
  });
  
  Then('Admin should land on the Batch page', async ({page}) => {
    const batchPage = new BatchPage(page);
    await batchPage.verifyBatchPage();
  });

  
 // When('Admin clicks the delete Icon on any row', async ({page}) => {
  //   const batchPage = new BatchPage(page);
 //   await batchPage.clickDeleteIcon();
 // });


  //Then('Admin should see the confirm alert box with yes and no button', async ({page}) => {
 //  const batchPage = new BatchPage(page);
  //  await batchPage.confirmAlertTitle();

  //});
  
//   When('Admin clicks yes button', async ({page}) => {
//       const batchPage = new BatchPage(page);
//       await batchPage.clickYesButton();

//   });
  
//   Then('Admin should see the successful message', async ({page}) => {
//      const batchPage = new BatchPage(page);
//     await batchPage.verifySuccessfulMessage();

//   });
  
//   When('Admin should verify the batch should be deleted', async ({page}) => {
//     const batchPage = new BatchPage(page);
//     await batchPage.verifySuccessfulMessage();
//   });
  
//   When('Admin clicks the Cancel button', async ({page}) => {
//     const batchPage = new BatchPage(page);
//     await batchPage.clickCancelButton();
//   });
//   When('Admin clicks on the close icon', async ({page}) => {
//     const batchPage = new BatchPage(page);
//     await batchPage.clickCloseIcon();
//   });
  
//   When('Admin clicks the delete Icon on any row Admin', async ({page}) => {
//     const batchPage = new BatchPage(page);
//     await batchPage.clickDeleteIcon();
  
//   });

//   Then('Admin should see the alert box closed', async ({page}) => {
//     const batchPage = new BatchPage(page);
//     await batchPage.verifyAlertClosed();
//   });
  
//   Then('the batch is not deleted', async ({page}) => {
//     const batchPage = new BatchPage(page);
//     await batchPage.verifyBatchNotDeleted();

//   });

//   Given('Admin is on batch page', async ({page}) => {
//    const batchPage = new BatchPage(page);
//   await batchPage.verifyBatchPage();
// });

// When('Admin selects more than one batch by clicking on the checkbox', async ({page}) => {
//     const batchPage = new BatchPage(page);
//   await batchPage.selectMultipleBatches();
// });

// Then('Admin should see the Multiple delete box enabled under manage batch', async ({page}) => {
//   const batchPage = new BatchPage(page);
//   await batchPage.verifyMultipleDeleteEnabled();
// });

// When('Admin clicks on the delete button on the left top of the batch page', async ({page}) => {
  
//   const batchPage = new BatchPage(page);
//   await batchPage.clickMultipleDeleteButton();
// });

// Then('Admin lands on Confirmation form', async ({page}) => {
  
//   const batchPage = new BatchPage(page);
//   await batchPage.verifyConfirmationForm();
// });

// // Batch_Pagination


// Given('Admin is on the batch page with multiple pages of batch record', async ({page}) => {
 
//   const batchPage = new BatchPage(page);
//   await batchPage.verifyBatchPageWithMultiplePages();

// });

// When('Admin clicks first page link on the data table', async ({page}) => {
 
//   const batchPage = new BatchPage(page);
//   await batchPage.clickFirstPage();

// });

// Then('Admin should see the Previous arrow \\(<)  disabled', async ({page}) => {
  
//   const batchPage = new BatchPage(page);
//   await batchPage.verifyPreviousPageArrowDisabled();
// });

// Then('Admin should see the First page arrow \\(<<) disabled', async ({page}) => {
  
//   const batchPage = new BatchPage(page);
//   await batchPage.verifyFirstPageArrowDisabled() ;
// });

// Then('Admin should see Next arrow \\(>) enabled', async ({}) => {
 
//   const batchPage = new BatchPage(page);
//   await batchPage.verifyNextPageArrowEnabled();
// });

 
// Then('Admin should see Last page arrow \\(>>) enabled', async ({page}) => {
//   1
//   const batchPage = new BatchPage(page);
//   await batchPage.verifyLastPageArrowEnabled();
// });

// When('Admin clicks the next page option \\(>) in the pagination control', async ({page}) => {

//   const batchPage = new BatchPage(page);
//   await batchPage.clickNextPage();
// });

// Then('Admin should see the Next enabled link', async ({page}) => {

//   const batchPage = new BatchPage(page);
//   await batchPage.verifyNextPageArrowEnabled();

// });

// When('Admin clicks the last page option \\(>>) in the pagination control', async ({page}) => {
 
//   const batchPage = new BatchPage(page);
//   await batchPage.clickLastPage();
// });

// Then('Admin should see the last page link with next page link disabled on the table', async ({page}) => {
 
//   const batchPage = new BatchPage(page);
//   await batchPage.verifyNextPageDisabled();
// });

// When('Admin clicks the previous page option \\(<) in the pagination control', async ({page}) => {
 
//   const batchPage = new BatchPage(page);
//   await batchPage.clickPreviousPage();
// });

// Then('Admin should see the previous page on the table', async ({page}) => {

//   const batchPage = new BatchPage(page);
//   await batchPage.verifyPreviousPage();
// });

// When('Admin clicks the first page option \\(<<) in the pagination control', async ({page}) => {
  
//   const batchPage = new BatchPage(page);
//   await batchPage.clickFirstPage();
// });

// Then('Admin should see the very first page on the data table', async ({page}) => {
 
//   const batchPage = new BatchPage(page);
//   await batchPage.clickFirstPage();
// });