import { expect } from '@playwright/test';

export class LoginPage{

    constructor(page){
        this.page = page;
        this.url = process.env.APP_URL;
        this.loginLink = this.page.locator('[id="login"]');
        this.username=process.env.USER;
        this.password=process.env.PASSWORD;
        this.usernameField = this.page.getByRole('textbox', {name:'User'});
        this.passwordField = this.page.getByRole('textbox', {name:'Password'});
        this.loginButton = this.page.getByRole('button',{name:'Login'});
         this.adminOption = this.page.getByRole('option', { name: 'Admin' });
        this.roleDropdown = this.page.getByRole('combobox');
        this.logo = this.page.locator('img[src="assets/img/LMS-logo.jpg"]');
        this.companyName = this.page.getByText('NumpyNinja', { exact: true });
         this.loginMessage = this.page.locator("//p[text() ='Please login to LMS application']");
        this.allInputCount = this.page.locator('//input');
        this.userLabel = page.getByText('User', { exact: true });
        this.passwordLabel = page.getByText('Password', { exact: true });
        

    }

async verifyLoginPageURL(){
        return this.page.url();
    }

async gotoLoginPage(){
        await this.page.goto(this.url);

    }

async login() {
     
      console.log(`Navigated to URL: ${this.page.url()}`);
      console.log(`Page title: ${await this.page.title()}`);
       await this.usernameField.waitFor({ state: 'visible' });
       await this.usernameField.fill(this.username);
       await this.usernameField.waitFor({ state: 'visible' });
       await this.passwordField.fill(this.password);
       await this.selectRole();
       await this.clickLogin();
   }

async clickLogin() {
    await this.loginButton.click();
}

   async getDropdownItems(){
    const options = this.page.locator(
        '.cdk-overlay-pane mat-option'
    );

    await options.first().waitFor({
        state: 'visible',
        timeout: 10000
    });

    const items = await options.allTextContents();
    console.log('Dropdown options:', items);
    return (await this.page.getByRole('option').allTextContents())
    .map(item => item.trim())
    .filter(Boolean);
 }

  async selectRole() {

    await this.roleDropdown.click();
    await this.adminOption.waitFor({state:'visible'});
    await this.adminOption.click();

}

async verifyApplicationLogo(){
    await expect(this.logo).toBeVisible();
}

async verifyCompanyName(){
    console.log('URL:', this.page.url());

    const bodyText = await this.page.locator('body').innerText();
    console.log(bodyText);

    await expect(this.companyName).toBeVisible();
  
}

async verifyLoginMessage(expectedText){
    await expect(this.loginMessage).toHaveText(expectedText);

}
async loginInputCount(){
    return await this.allInputCount.count();
}

async verifyUserNameField(expectedText){
    await expect(this.usernameField).toHaveAttribute('data-placeholder',expectedText);
}

async verifyPasswordField(expectedText){
    await expect(this.passwordField).toHaveAttribute('data-placeholder',expectedText);

}

async verifyUserRequiredAsterisk(){
    const labelText = await this.userLabel
    .locator('..')
    .innerText();

    expect(labelText).toContain('*');
}

async verifyPasswordRequiredAsterisk(){
        const labelText = await this.passwordLabel
        .locator('..')
        .innerText();

    expect(labelText).toContain('*');

    }

async verifyDropdownCount(){
        await expect(this.roleDropdown).toHaveCount(1);

    }

 async loginWithTestData(testData) {
    await this.usernameField.waitFor({
        state:'visible',
        timeout:10000
    });
    await this.usernameField.fill(testData.User ?? '');

    await this.passwordField.fill(testData.Password ?? '');

            if (testData['Select the Role']) {
    
            await this.roleDropdown.click();
    
            await this.page
                .getByRole('option', {
                    name: testData['Select the Role'],
                    exact: true
                })
                .click();
        }
    
         await this.loginButton.click();
    }
    
}
