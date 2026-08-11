import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();
import { expect } from '@playwright/test';
import {LoginPage} from "../pages/LoginPage.js";
import { HomePage } from '../pages/HomePage.js';
import { request } from "node:http";
import ExcelReader from "../utils/ExcelReader.js";
const excelReader = new ExcelReader();


Given('Admin is on the browser', async ({page}) => {
      console.log ("Browser session started");
      const loginPage = new LoginPage(page);
      await loginPage.gotoLoginPage();
  });
  
When('Admin enters the Valid LMS app URL', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    console.log("Launching LMS Application");
   
      });
  
Then('Admin should land on the login page', async ({page}) => {
    console.log("page =", page);
    const loginPage = new LoginPage(page);
    const currentURL = await loginPage.verifyLoginPageURL();
    console.log("Current URL:", currentURL);
    await expect(page).toHaveURL(/login/);
   
  });

 When('Admin enters the invalid LMS app URL', async ({page}) => {
    await page.goto('https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/invalid');
    console.log("Invalid URL");

  });
  
  Then('Admin should receive application error', async ({page}) => {
   
    try {
        await page.goto("https://lms-frontend-hackathon-6dcccb9dd0fa.herokuapp.com/invalid");
    } catch (error) {
        console.log("Navigation failed:", error.message);
    }

    });
  
  Then('HTTP response >= {int}. Then the link is broken', async ({page}, expectedStatus) => {
  
    const response = await request.get(process.env.APP_URL);
    expect(response).not.toBeNull();
    expect(response.status()).toBeGreaterThanOrEqual(expectedStatus);

  });
  
  Then('Admin should see  LMS - Learning Management System', async ({page}) => {
 
        await expect(page).toHaveTitle('LMS');
  });
  
  Then('Admin should see Application Logo', async ({page}) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.verifyApplicationLogo();

  });
  
  Then('Admin should see company name below the app name', async ({page}) => {
  
    const loginPage = new LoginPage(page);
    await loginPage.verifyCompanyName();
  });
  
  Then('Admin should see {string}', async ({page}, expectedText )=> {
    
    const loginPage = new LoginPage(page);
    await loginPage.verifyLoginMessage(expectedText);

  });
  
  Then('Admin should see two text field', async ({page}) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.loginInputCount();
  });
  
Then('Admin should see one dropdown', async ({page}) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.verifyDropdownCount();

  });
  
  Then('Admin should see {string} in the first text field', async ({page}, expectedText) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.verifyUserNameField(expectedText);

  });
  
  Then('Admin should  see {string} in the second text field', async ({page}, expectedText) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.verifyPasswordField(expectedText);

  });
  
  Then('Admin should see asterisk mark\\(*) symbol next to text for user field', async ({page}) => {
   
    const loginPage = new LoginPage(page);
    await loginPage.verifyUserRequiredAsterisk();

  });
  
  Then('Admin should see asterisk mark symbol next to password text', async ({page}) => {
   
    const loginPage = new LoginPage(page);
    await loginPage.verifyPasswordRequiredAsterisk();
  });
  
  Then('Admin should see {string} placeholder in dropdown', async ({page}, expectedText) => {
  
    const roleDropdown = page.getByRole('combobox');
    await expect(roleDropdown).toBeVisible();
    await expect(roleDropdown).toContainText(expectedText.trim());
  
  });
  
  Then('Admin should see options in dropdown', async ({ page }, dataTable) => {
   
    const loginPage = new LoginPage(page);
    const expectedItems = dataTable
        .raw()
        .flat()
        .map(item => item.trim().toLowerCase());

    await loginPage.roleDropdown.click();
    const actualItems = (await loginPage.getDropdownItems())
          .map(item => item.trim().toLowerCase());

    console.log('Expected dropdown items:', expectedItems);
    console.log('Actual dropdown items:', actualItems);

    expect(actualItems).toEqual(expectedItems);

  });
  
  
  Then('Admin should see login button', async ({page}) => {
    const loginPage = new LoginPage(page);
    await expect(loginPage.loginButton).toBeVisible();

  });

  Then('Admin should see user text in gray color', async ({page}) => {
     const userLabel = page.getByText('User', { exact: true });
    await expect(userLabel).toHaveCSS('color', 'rgba(195, 189, 189, 0.54)');
   // await expect(userLabel).toHaveCSS('color', 'rgba(0, 0, 0, 0.54)');

  });
  
  Then('Admin should see password text in gray color', async ({page}) => {
    const passwordLabel = page.getByText('Password', { exact: true });
    await expect(passwordLabel).toHaveCSS('color', 'rgba(195, 189, 189, 0.54)');

   // await expect(passwordLabel).toHaveCSS('color', 'rgba(0, 0, 0, 0.54)');---actual color

  });


  When('Admin clicks login in button after entering  a valid credential', async ({page}) => {
    
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
  });
  
  Then('Admin should land on home page', async ({page}) => {
       
    await expect(page.getByText('Dashboard')).toBeVisible();
    const homePage = new HomePage(page);
    await homePage.verifyHomePageLoaded();

  });

  When('User clicks Login button after entering {string} fields', async ({page}, testCaseType) => {
          const loginPage = new LoginPage(page);
          const testData = getTestData(testCaseType);
          console.log('Test Case:', testCaseType);
          console.log('User:', testData.User);
          console.log('Password:', testData.Password);
          console.log('Role:', testData['Select the Role']);
          console.log('Expected:', testData.Expected);
          page.testData = testData;
          await loginPage.loginWithTestData(testData);

      });
  
  
Then('User should see appropriate error message in Login page', async ({page}) => {
     const loginPage = new LoginPage(page);
    const testData = getTestData(testCaseType);
    console.log("Expected Error:", testData.Expected);
     await expect(
      page.getByText(testData.Expected, { exact: true })).toBeVisible({timeout: 10000});
}
);



    

