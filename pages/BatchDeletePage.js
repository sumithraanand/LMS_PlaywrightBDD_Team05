import { expect } from '@playwright/test';

export class BatchPage{

    constructor(page){

    this.page = page;
    this.batchHeader = this.page.getByText('Batch', { exact: true });
    this.deleteIcon = this.page.locator("button.p-button-danger:has(span.pi-trash):not([disabled])");
    this.confirmDialog = page.locator('div.p-confirm-dialog');
    this.confirmTitle = this.confirmDialog.getByText('Confirm',{ exact: true });
    this.yesButton = this.confirmDialog.getByRole('button',{ name: 'Yes', exact: true });
    this.cancelButton = this.confirmDialog.getByRole('button',{ name: 'No', exact: true });
     this.closeIcon = this.confirmDialog.locator('button.p-dialog-header-icon');
    this.successMessage = page.getByText('batch Deleted',{ exact: false });
    this.overlayBackdrop = this.page.locator( 'div.cdk-overlay-backdrop.cdk-overlay-backdrop-showing');
    this.paginator = this.page.locator('.p-paginator');
    this.firstPageButton = this.paginator.locator('button.p-paginator-first');
    this.previousPageButton = this.paginator.locator('button.p-paginator-prev');
    this.nextPageButton = this.paginator.locator('button.p-paginator-next');
    this.lastPageButton = this.paginator.locator('button.p-paginator-last');
   
    }


    async clickBatchNavigation(arg){
        console.log("Navigation item:", arg);
        await expect(this.batchHeader).toBeVisible({
            timeout: 10000
        });
        await this.batchHeader.click();
    }

        async verifyBatchPage(){
        await expect(this.batchHeader).toBeVisible({
            state: 'visible',
            timeout: 10000
        });
        console.log("Batch page URL", this.page.url());

    }


    async closeOverlayIfPresent() { 
        const overlayCount = await this.overlayBackdrop.count(); 
        console.log( "Visible CDK overlays:", overlayCount ); 
        if (overlayCount > 0) { 
            console.log( "CDK overlay is present. Closing it..." ); 
            await this.overlayBackdrop.first().click({ position: { x: 5, y: 5 } }); 
            await expect( this.overlayBackdrop.first() ).toBeHidden({ timeout: 5000 }); 
        } 
    }

    async clickDeleteIcon() { 
    
        console.log( "Enabled delete buttons:", await this.deleteIcon.count() ); 
        const deleteButton = this.deleteIcon.first(); 
        await expect(deleteButton).toBeVisible({ timeout: 10000 }); 
        await expect(deleteButton).toBeEnabled({ timeout: 10000 }); 
        await this.closeOverlayIfPresent(); 
        await deleteButton.scrollIntoViewIfNeeded(); 
        console.log( "Delete button HTML:", await deleteButton.evaluate( element => element.outerHTML ) ); 
        await deleteButton.click({ timeout: 10000 });
        await expect(this.confirmDialog).toBeVisible({ timeout: 10000 }); 
        await expect(this.confirmTitle).toBeVisible({ timeout: 10000 });
        await expect(this.yesButton).toBeVisible({ timeout: 10000 }); 
        await expect(this.cancelButton).toBeVisible({ timeout: 10000 }); 
        
        }
    
    async confirmAlertTitle(){
        await expect(this.confirmDialog).toBeVisible({timeout: 10000});
            await expect(this.confirmTitle).toBeVisible({timeout: 10000});
            await expect(this.yesButton).toBeVisible({timeout: 10000});
            await expect(this.cancelButton).toBeVisible({timeout: 10000});
      }

    async clickYesButton() {

         await expect(this.confirmDialog).toBeVisible({timeout: 10000});
         await expect(this.yesButton).toBeVisible({timeout: 10000});
         await this.yesButton.click();
    }

    async verifySuccessfulMessage(){
        await expect(this.successMessage).toBeVisible({timeout: 10000});

    }

    async clickCancelButton() {
        await expect(this.confirmDialog).toBeVisible({
            timeout: 10000
        });

        await expect(this.cancelButton).toBeVisible();
        await this.cancelButton.click();
    }
    async clickCloseIcon() {
        await expect(this.confirmDialog).toBeVisible({
            timeout: 10000
        });

        await expect(this.closeIcon).toBeVisible();
        await this.closeIcon.click();
    }

    async verifyAlertClosed() {

        await expect(this.confirmDialog).toBeHidden({
            timeout: 10000
        });
    }
    
   async verifyBatchNotDeleted(){
    await expect(this.successMessage).not.toBeVisible({
        timeout: 3000
    });

   }

  async closeOverlay() {
    const overlay = this.page.locator(
        '.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing'
    );

    if (await overlay.isVisible) {
        console.log('Closing  overlay..');
        await overlay.click({ position: { x: 5, y: 5 } });
        await overlay.waitFor({ state: 'hidden' }).catch(() => {});
     
    }
  }
   async selectMultipleBatches(){
    await this.closeOverlay();
    const checkboxes = this.page.getByRole('checkbox').filter({visible: true});
    const count = await checkboxes.count();
    console.log('Total checkboxes:', count);
    await checkboxes.nth(1).click();
    await checkboxes.nth(3).click();
 
   }

   async verifyMultipleDeleteEnabled() {
   
   const multipleDeleteButton = this.page.locator('mat-card-title').getByRole('button');
    await expect(multipleDeleteButton ).toBeVisible();
    await expect(multipleDeleteButton ).toBeEnabled();
  }


  async clickMultipleDeleteButton(){

    const multipleDeleteButton = this.page.locator('mat-card-title').getByRole('button');
    await expect(multipleDeleteButton ).toBeVisible();
    await expect(multipleDeleteButton ).toBeEnabled();
    await multipleDeleteButton.click();

  }

  async verifyConfirmationForm(){
    const confirmationDialog = this.page.locator(
        '.p-dialog.p-confirm-dialog'
      ); 
   await expect(confirmationDialog).toBeVisible();

    }


    async verifyBatchPageWithMultiplePages() {
        await expect(this.page).toHaveURL(/\/batch/);
        await expect(this.paginator).toBeVisible();
        await expect(this.nextPageButton).toBeVisible();
        await this.nextPageButton.isDisabled();
    
      }
    
      async verifyFirstPageArrowDisabled() {
        await expect(this.firstPageButton).toBeVisible();
        await expect(this.firstPageButton).toBeDisabled();
      }
    
      async verifyPreviousPageArrowDisabled() {
        await expect(this.previousPageButton).toBeVisible();
        await expect(this.previousPageButton).toBeDisabled();
      }
    
      async verifyNextPageArrowEnabled() {
        await expect(this.nextPageButton).toBeVisible();
        await expect(this.nextPageButton).toBeEnabled();
      }
    
      async verifyLastPageArrowEnabled() {
        await expect(this.lastPageButton).toBeVisible();
        await expect(this.lastPageButton).toBeEnabled();
      }
    
      async clickNextPage() {
        await this.closeOverlay();

        await expect(this.nextPageButton).toBeVisible();
        await expect(this.nextPageButton).toBeEnabled();
    
        await this.nextPageButton.click();
      }
    
      async clickLastPage() {
        await this.closeOverlay();

        await expect(this.lastPageButton).toBeVisible();
        await expect(this.lastPageButton).toBeEnabled();
    
        await this.lastPageButton.click();
      }
    
      async clickPreviousPage() {
        await expect(this.previousPageButton).toBeVisible();
        await expect(this.previousPageButton).toBeEnabled();
      
        await this.previousPageButton.click();
      }
      
    
      async clickFirstPage() {
        await expect(this.firstPageButton).toBeVisible();
        await expect(this.firstPageButton).toBeEnabled();
        await this.firstPageButton.click();
      }
    
      async verifyNextPageDisabled() {
        await expect(this.nextPageButton).toBeVisible();
        await expect(this.nextPageButton).toBeDisabled();
      }
    
      async verifyPreviousPageEnabled() {
        await expect(this.previousPageButton).toBeVisible();
        await expect(this.previousPageButton).toBeEnabled();
      }
      async verifyPreviousPage() {
             await expect(this.previousPageButton).toBeEnabled();
      }
    }