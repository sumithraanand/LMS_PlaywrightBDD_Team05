import { createBdd } from 'playwright-bdd';
import { HomePage } from '../pages/HomePage.js';
import { LoginPage } from '../pages/LoginPage.js';

const { Given, When, Then } = createBdd();

let homePage;
let loginPage;

Given('Admin is on the browser', async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
});

When('Admin clicks login button after entering a valid credential', async () => {
    await loginPage.login();
});

Then('Admin should land on home page', async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.verifyHomePageLoaded();
});

Then('Admin should see LMS -Learning management system as title', async ({}) => {
   await homePage.verifyLMSTitle();
});

Then('LMS title should be on the top left corner of page', async ({}) => {
  await homePage.verifyLMSTitlePosition();
});

Then('Admin should see correct spelling in navigation bar text', async ({}) => {
   await homePage.verifyNavigationText();
});

Then('Admin should see correct spelling and space in LMS title', async ({}) => {
  await homePage.verifyLMSTitle();
});

Then('Admin should see the navigation bar text on the top right side', async ({}) => {
  await homePage.verifyNavigationBarPosition();
});

Then('Admin should see home in the 1st place', async ({}) => {
  await homePage.verifyNavigationItem(0, 'Home');
});

Then('Admin should see program in the 2nd place', async ({}) => {
  await homePage.verifyNavigationItem(1, 'Program');
});
Then('Admin should see batch in the  3rd place', async ({}) => {
  await homePage.verifyNavigationItem(2, 'Batch');
});

Then('Admin should see logout in the 4th place', async ({}) => {
  await homePage.verifyNavigationItem(3, 'Logout');
});

Then('Admin should see welcome message with user name and role', async ({}) => {
   await homePage.verifyWelcomeMessage();
});

Then('Admin should see bar chart for Active and inactive user', async ({}) => {
  await homePage.verifyBarChart();
});

Then('Admin should see user count for Active and inactive user', async ({}) => {
  await homePage.verifyUserCountCard();
});

Then('Admin should be navigated to Manage User page', async ({}) => {
     await homePage.clickUserCountCard();
    await homePage.verifyManageUserPage();
});

Then('Admin should see Program count for Active and inactive user', async ({}) => {
    await homePage.verifyProgramCountCard();
});

Then('Admin should be navigated to Manage Program page', async ({}) => {
    await homePage.clickProgramCountCard();
    await homePage.verifyManageProgramPage();
});

Then('Admin should see Staff count', async ({}) => {
  await homePage.verifyStaffCountCard();
});

Then('Admin should not see the navigation to staff  page', async ({}) => {
  await homePage.verifyStaffCardNotClickable();
});
Then('Admin should see batch count for Active and inactive user', async ({}) => {
    await homePage.verifyBatchCountCard();
});

Then('Admin should be navigated to Manage Batch page', async ({}) => {
    await homePage.clickBatchCountCard();
    await homePage.verifyManageBatchPage();
});

Then('Admin should see the Staff Data table', async ({}) => {
   await homePage.verifyStaffTable();
});

Then('Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table', async ({}) => {
   await homePage.verifyStaffTableHeaders();
});
