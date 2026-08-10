import { expect } from '@playwright/test';

export class LoginPage{

    constructor(page){
        this.page = page;
        this.url = process.env.APP_URL;
        //this.loginLink = this.page.locator('[id="login"]');
        this.username=process.env.USER;
        this.password=process.env.PASSWORD;
       // this.dropdownItems = this.page.getByRole('listbox');
        this.usernameField = this.page.locator('#username');
        this.passwordField = this.page.locator('#password');
        this.loginButton = this.page.locator('#login');
        this.adminOption = this.page.getByRole('option', { name: 'Admin' });
       // this.roleDropdown = this.page.locator('mat-select');
        this.roleDropdown = this.page.getByRole('combobox');
    }

    async verifyLoginPageURL(){
        return this.page.url();
    }

    
    async gotoLoginPage(){
        await this.page.goto(this.url);

    }

    async login() {

       //console.log(`Navigated to URL: ${this.page.url()}`);
       //console.log(`Page title: ${await this.page.title()}`);
       await this.usernameField.waitFor({ state: 'visible' });
       await this.usernameField.fill(this.username);
       await this.passwordField.waitFor({ state: 'visible' });
       await this.passwordField.fill(this.password);
       await this.selectRole();
       await this.clickLogin();
   }

   async clickLogin() {
    await this.loginButton.click();
}

     //  async getDropdownItems() {
     //   return await this.dropdownItems.allTextContents();
     // }

  async selectRole() {

    await this.roleDropdown.click();
    await this.adminOption.waitFor({state:'visible'});
    await this.adminOption.click();
    

}

}