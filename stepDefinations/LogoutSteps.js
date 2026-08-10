import { createBdd } from "playwright-bdd";
const{Given,When, Then} = createBdd();
import { expect } from '@playwright/test';
import { LoginPage } from "../pages/LoginPage.js";
import {LogoutPage} from "../pages/LogoutPage.js";

Given('Admin is in home page', async ({page}) => {
   
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login();
    await expect(page).not.toHaveURL(/login/);
  });
  
  When('Admin clicks on the logout in the menu bar', async ({page}) => {
  
    const logoutPage = new LogoutPage(page);
    await logoutPage.logout();
  });
  
  Then('Admin should be redirected to login page', async ({page}) => {
  
    await expect(page).toHaveURL(/login/);
    
  });