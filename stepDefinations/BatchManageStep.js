import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();
import { expect } from '@playwright/test';
import {LoginPage} from "../pages/LoginPage.js";
import { BatchPage } from "../pages/BatchDeletePage.js";
import {BatchManagePage } from "../pages/BatchManagePage.js";

Given('Admin is on the batch page', async ({page}) => {
    // Step: Given Admin is on the batch page
    // From: features\ManageBatch_Search.feature:11:3
     const batchmanagePage = new BatchManagePage(page);
    // await batchmanagePage.clickBatchNavigation();
     await batchmanagePage.verifyBatchPage();
  });
  
  When('Admin clicks on Arrow next to batch name', async ({page}) => {
    // Step: When Admin clicks on Arrow next to batch name
    // From: features\ManageBatch_Search.feature:14:10  
    const batchmanagePage = new BatchManagePage(page);
    await batchmanagePage.clickSortBatchNameSortArrow();

  });
  
  Then('Admin should See the batch details sorted by batch Name in Ascending order', async ({page}) => {
    // Step: Then Admin should See the batch details sorted by batch Name in Ascending order
    // From: features\ManageBatch_Search.feature:15:10
    const batchmanagePage = new BatchManagePage(page);
    await batchmanagePage.verifyBatchNameAscendingOrder();
  });
  
  When('Admin clicks on Arrow next to batch description', async ({page}) => {
    // Step: When Admin clicks on Arrow next to batch description
    // From: features\ManageBatch_Search.feature:19:10

    const batchmanagePage = new BatchManagePage(page);
    await batchmanagePage.clickSortBatchDescSortArrow();
  });
  
  Then('Admin should See the batch details sorted by batch description in Ascending order', async ({page}) => {
    // Step: Then Admin should See the batch details sorted by batch description in Ascending order
    // From: features\ManageBatch_Search.feature:20:10

    const batchmanagePage = new BatchManagePage(page);
    await batchmanagePage.verifyBatchDescriptionAscendingOrder();
  });