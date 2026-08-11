import { expect } from '@playwright/test';

export class BatchPage {

    constructor(page) {
        this.page = page;

        // Manage Batch Page
        this.batchMenu = page.getByRole('button', { name: 'Batch' });
        this.addNewBatchSubMenu = page.getByText('Add New Batch', { exact: true });
        this.manageBatchHeading = page.getByText('Manage Batch', { exact: true });
        // Table
        this.batchTable = page.getByRole('grid');
        this.dataTableHeaders = this.batchTable.locator('thead.p-datatable-thead th');
        this.batchRows = this.batchTable.locator('tbody.p-datatable-tbody tr');
        

       // Actions
        this.deleteButton = page.locator('button.p-button-danger:has(.pi-trash)').first();
        this.editIcons = this.batchRows.locator('button:has(.pi-pencil)');
        this.deleteIcons = this.batchRows.locator('button:has(.pi-trash)');
        this.headerCheckbox = this.batchTable.locator('p-tableheadercheckbox');
        this.rowCheckboxes = this.batchTable.locator('p-tablecheckbox');
        this.sortIcons = this.batchTable.locator('p-sorticon');
        this.paginationControls = page.locator('p-paginator');
        
        // Batch Details Dialog
        this.batchDetailsDialog = page.getByRole('dialog', {name: 'Batch Details'});
        this.programNameDropdown = this.batchDetailsDialog.getByRole('searchbox', {name: 'Select or type a program'});
        this.batchNameField = this.batchDetailsDialog.locator('#batchName').first();
        this.descriptionField = page.locator('#batchDescription');
        this.numberOfClassesField = page.locator('#batchNoOfClasses');
        this.statusRadioButton = page.locator('p-radiobutton[id="batchStatus"]');
        this.batchNamePrefixField = page.locator('#batchProg');
        this.batchNameSuffixField = this.batchDetailsDialog.getByRole('textbox', {name: 'Batch Name *'});
        this.numberOfClassesError = this.batchDetailsDialog.getByText('Number of classes is required.',{ exact: true });
        this.errorMessage = page.locator('small#text-danger.p-invalid');
        this.closeIcon = page.locator('button.p-dialog-header-close');
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        
        // Edit Batch
        //this.editBatchNameField = this.batchDetailsDialog.getByRole('textbox', {name: 'Batch Name *'});
        this.editBatchNameField = this.batchDetailsDialog.locator('input#batchName:not([hidden])');
        this.editSaveButton = this.batchDetailsDialog.getByRole('button', {name: 'Save'});

        this.editCancelButton = this.batchDetailsDialog.getByRole('button', {name: 'Cancel'});
        this.toastMessage = page.locator('p-toast .p-toast-message');
        this.successToast = page.getByRole('alert');


        //Delete Batch
        this.batchHeader = this.page.getByText('Batch', { exact: true });
        this.deleteIcon = this.page.locator("button.p-button-danger:has(span.pi-trash):not([disabled])");
        this.confirmDialog = page.locator('div.p-confirm-dialog');
        this.confirmTitle = this.confirmDialog.getByText('Confirm',{ exact: true });
        this.yesButton = this.confirmDialog.getByRole('button',{ name: 'Yes', exact: true });
        this.cancelButton = this.confirmDialog.getByRole('button',{ name: 'No', exact: true });
         this.closeIcon = this.confirmDialog.locator('button.p-dialog-header-icon');
        this.successMessage = page.getByText('batch Deleted',{ exact: false });
        this.overlayBackdrop = this.page.locator( 'div.cdk-overlay-backdrop.cdk-overlay-backdrop-showing');

        //Pagination

        this.paginator = this.page.locator('.p-paginator');
        this.firstPageButton = this.paginator.locator('button.p-paginator-first');
        this.previousPageButton = this.paginator.locator('button.p-paginator-prev');
        this.nextPageButton = this.paginator.locator('button.p-paginator-next');
        this.lastPageButton = this.paginator.locator('button.p-paginator-last');
       


    }
    // Manage Batch Page Methods
   
    async clickBatchMenu() {
         await this.batchMenu.click();
    }

    async verifyManageBatchPage() {
          await expect(this.manageBatchHeading).toBeVisible();
          await expect(this.batchTable).toBeVisible();
    }

    async verifySubMenu(expectedText) {
        await expect(this.addNewBatchSubMenu).toHaveText(expectedText);
    }

    async verifyAddNewBatchSubMenu() {
         await expect(this.addNewBatchSubMenu).toBeVisible();
    }
    async verifyHeading(expectedText) {
         await expect(this.manageBatchHeading).toHaveText(expectedText);
    }

    async verifyManageBatchHeading() {
         await expect(this.manageBatchHeading).toBeVisible();
    }

    async verifyDeleteButtonDisabled() {
        await expect(this.deleteButton).toBeDisabled();
    }

    async verifyPaginationControls() {
        await expect(this.paginationControls).toBeVisible();
    }

    async verifyEditIcons() {
         await expect(this.editIcons.first()).toBeVisible();
   }

   async verifyDeleteIcons() {
        await expect(this.deleteIcons.first()).toBeVisible();
   }

   async verifyRowCheckboxes() {
       await expect(this.rowCheckboxes.first()).toBeVisible();
    }

    async verifyDataTableHeaders(expectedHeaders) {

      const actualHeaders = this.batchTable.locator('thead.p-datatable-thead th:not(:has(p-tableheadercheckbox))');
      const actualTexts = (await actualHeaders.allTextContents()).map(text => text.trim().replace(/\s*\/\s*/g, '/'));

      const expectedTexts = expectedHeaders
        .map(text => text.trim().replace(/\s*\/\s*/g, '/'));

    expect(actualTexts).toEqual(expectedTexts);

    }

    async verifyHeaderCheckbox() {
         await expect(this.headerCheckbox).toBeVisible();
    }

    async verifySortIcons() {
        await expect(this.sortIcons.first()).toBeVisible();
    }

// Add Batch Methods

    async clickAddNewBatch() {
        await this.addNewBatchSubMenu.click();
    }

    async verifyBatchDetailsDialog() {
         await expect(this.batchDetailsDialog).toBeVisible();
    }

    async verifyBatchNameField() {
          await expect(this.batchNameField).toBeVisible();
    }

    async verifyNumberOfClassesField() {
        await expect(this.numberOfClassesField).toBeVisible();
    }

    async verifyDescriptionField() {
        await expect(this.descriptionField).toBeVisible();
    }

    async verifyProgramNameDropdown() {
        await expect(this.programNameDropdown).toBeVisible();
    }

    async verifyStatusRadioButton() {
         await expect(this.statusRadioButton.first()).toBeVisible();
   }

    async selectProgram(programName) {
         const programDropdown = this.batchDetailsDialog.locator('p-autocomplete');
         await programDropdown.getByRole('button').click();
         const programOption = this.page.getByRole('option', {name: programName,exact: true});
         await expect(programOption).toBeVisible();
         await programOption.click();
    // await this.batchDetailsDialog.getByText(programName, { exact: true }).click();
   }

   async verifyProgramNameInPrefix(programName) {
       await expect(this.batchNamePrefixField).toHaveValue(programName);
   }

   async enterInvalidBatchNameSuffix() {
        await this.batchNameSuffixField.fill('ABC');
    }

    async verifyFieldErrorMessage() {
        await expect(this.errorMessage).toBeVisible();
        await expect(this.errorMessage).toHaveText('This field accept only numbers and max 5 count.');
    }

    async enterInvalidBatchNamePrefix() {
        await expect(this.batchNamePrefixField).toBeEditable({editable: false});
    }

    async verifyPrefixFieldEmpty() {
        await expect(this.batchNamePrefixField).toHaveValue('');
    }

    async leaveMandatoryFieldBlank() {
         await this.numberOfClassesField.fill('');
         await this.saveButton.click();
    }

    async verifyMandatoryFieldError() {
        await expect(this.numberOfClassesError).toBeVisible();
        
    }

    async enterValidDataAndCancel() {
        await this.numberOfClassesField.fill('10');
        await this.descriptionField.fill('Test Batch Description');

        await this.cancelButton.click();
    }

    async clickCloseIcon() {
        await this.closeIcon.click();
    }

    async verifyDialogClosed() {
         await expect(this.batchDetailsDialog).not.toBeVisible();
    }

    // Edit Batch Methods

    async clickEditIcon() {
        const addNewBatchMenu = this.page.getByRole('menuitem', {name: 'Add New Batch'});

        if (await addNewBatchMenu.isVisible()) {
              await this.page.keyboard.press('Escape');
          }

        const firstRow = this.batchRows.first();
         await firstRow.locator('button').first().click();
    }

    async verifyEditBatchDialog() {
         await expect(this.batchDetailsDialog).toBeVisible();
    }

    async verifyBatchNameDisabled() {
         await expect(this.editBatchNameField).toBeDisabled();
    }

    async updateInvalidDataAndSave() {
         await this.descriptionField.fill('12345');
         await this.editSaveButton.click();
    }

    async verifyEditValidationError() {
         await expect(this.toastMessage).toContainText('Batch Update Failed');
    }

    async updateValidDataAndSave() {
        await this.descriptionField.fill('Updated Batch Description');
        await this.editSaveButton.click();
    }

    async verifyEditSuccessMessage() {
        await expect(this.successToast).toContainText('Batch Updated Successfully');
    }


   async cancelEdit() {
        await this.editCancelButton.click();
    }

   async verifyEditDialogClosed() {
        await expect(this.batchDetailsDialog).not.toBeVisible();
   }
//Delete
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

// MultiDelete
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

//Batch Pagination

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
         await expect(this.paginator).toBeVisible();
         await expect(this.previousPageButton).toBeEnabled();
         await expect(this.firstPageButton).toBeEnabled();
  }

  async verifyFirstPage()
{  await expect(this.firstPageButton).toBeDisabled();
    await expect(this.previousPageButton).toBeDisabled();

}
}
export default BatchPage;