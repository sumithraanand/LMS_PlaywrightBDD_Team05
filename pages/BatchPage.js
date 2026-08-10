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


}
export default BatchPage;