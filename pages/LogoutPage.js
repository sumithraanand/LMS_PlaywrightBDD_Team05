import { expect } from '@playwright/test';

export class LogoutPage{

    constructor(page){

        this.page = page;
        this.loginButton = this.page.locator('#login');
        this.logoutButton = this.page.locator('#logout');
    }

    async logout(){
        await this.logoutButton.click();
    }
  
    
}