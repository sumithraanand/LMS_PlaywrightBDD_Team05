import { expect } from '@playwright/test';

export class BatchManagePage{

    constructor(page){

      this.page = page;
      this.batchNameSortColumn = page.locator('[psortablecolumn="batchName"]');
      this.batchDescriptionSortColumn = page.locator('[psortablecolumn="batchDescription"]');
     
    }


    async verifyBatchPage() {
        await expect(
            this.page.getByText('Manage Batch', { exact: true })
        ).toBeVisible({ timeout: 10000 });
    }



    async clickSortBatchNameSortArrow(){
       //const overlay = this.page.locator('.cdk-overlay-backdrop');
        const overlay = this.page.locator('.cdk-overlay-container');

        console.log('Overlay count:',await overlay.count());
    
        if (await overlay.isVisible()) {
            await this.page.keyboard.press('Escape');
        }
    
        await expect(this.batchNameSortColumn).toBeVisible();
        await this.batchNameSortColumn.click();
    }

    async clickSortBatchDescSortArrow() {
        const overlay = this.page.locator('.cdk-overlay-container');
        console.log('Overlay count:', await overlay.count());
        if (await overlay.isVisible().catch(() => false)) {
            await this.page.keyboard.press('Escape');
        }
        await expect(this.batchDescriptionSortColumn).toBeVisible();

        await this.batchDescriptionSortColumn.click();
    }

    async verifyBatchNameAscendingOrder()
      {
        const batchNames = this.page.locator(
            '[psortablecolumn="batchName"]'
        ).locator('tbody tr td');
        const names = await batchNames.allTextContents();

    const actual = names
        .map(name => name.trim()).filter(name => name.length > 0);

    const expected = [...actual].sort((a, b) =>
        a.localeCompare(b, undefined, { sensitivity: 'base' })
    );

    expect(actual).toEqual(expected);

        }
    async verifyBatchDescriptionAscendingOrder() {
            const descriptions = this.page.locator(
                '[psortablecolumn="batchDescription"]'
            ).locator('tbody tr td');
        
            const descriptionsText = await descriptions.allTextContents();
        
            const actual = descriptionsText
                .map(description => description.trim())
                .filter(description => description.length > 0);
        
            const expected = [...actual].sort((a, b) =>
                a.localeCompare(b, undefined, { sensitivity: 'base' })
            );
        
            expect(actual).toEqual(expected);
        }

}