# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Batch.feature.spec.js >> Batch Page >> Batch_Pagination >> Previous Page Navigation
- Location: .features-gen\features\Batch.feature.spec.js:260:5

# Error details

```
Error: expect(locator).toBeEnabled() failed

Locator:  locator('.p-paginator').locator('button.p-paginator-prev')
Expected: enabled
Received: disabled
Timeout:  5000ms

Call log:
  - Expect "toBeEnabled" with timeout 5000ms
  - waiting for locator('.p-paginator').locator('button.p-paginator-prev')
    14 × locator resolved to <button disabled pripple="" type="button" ng-reflect-ng-class="[object Object]" class="p-paginator-prev p-paginator-element p-link p-disabled p-ripple">…</button>
       - unexpected value "disabled"

```

```yaml
- button "" [disabled]
```

# Test source

```ts
  349 |     async clickCloseIcon() {
  350 |          await expect(this.batchDetailsDialog).toBeVisible({
  351 |           timeout: 10000
  352 |     });
  353 | 
  354 |     await this.closeIcon.click();
  355 |     }
  356 | 
  357 |     async verifyAlertClosed() {
  358 |          await expect(this.confirmDialog).toBeHidden({
  359 |            timeout: 10000
  360 |     });
  361 |     }
  362 |     
  363 |    async verifyBatchNotDeleted(){
  364 |     await expect(this.successMessage).not.toBeVisible({
  365 |         timeout: 3000
  366 |     });
  367 | 
  368 |    }
  369 | 
  370 |   async closeOverlay() {
  371 |     const overlay = this.page.locator(
  372 |         '.cdk-overlay-backdrop.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing'
  373 |     );
  374 | 
  375 |     if (await overlay.isVisible) {
  376 |         console.log('Closing  overlay..');
  377 |         await overlay.click({ position: { x: 5, y: 5 } });
  378 |         await overlay.waitFor({ state: 'hidden' }).catch(() => {});
  379 |      
  380 |     }
  381 |   }
  382 |    async selectMultipleBatches(){
  383 |     await this.closeOverlay();
  384 |     const checkboxes = this.page.getByRole('checkbox').filter({visible: true});
  385 |     const count = await checkboxes.count();
  386 |     console.log('Total checkboxes:', count);
  387 |     await checkboxes.nth(1).click();
  388 |     await checkboxes.nth(3).click();
  389 |  
  390 |    }
  391 | 
  392 |    async verifyMultipleDeleteEnabled() {
  393 |    
  394 |    const multipleDeleteButton = this.page.locator('mat-card-title').getByRole('button');
  395 |     await expect(multipleDeleteButton ).toBeVisible();
  396 |     await expect(multipleDeleteButton ).toBeEnabled();
  397 |   }
  398 | 
  399 | 
  400 |   async clickMultipleDeleteButton(){
  401 | 
  402 |     const multipleDeleteButton = this.page.locator('mat-card-title').getByRole('button');
  403 |     await expect(multipleDeleteButton ).toBeVisible();
  404 |     await expect(multipleDeleteButton ).toBeEnabled();
  405 |     await multipleDeleteButton.click();
  406 | 
  407 |   }
  408 | 
  409 |   async verifyConfirmationForm(){
  410 |     const confirmationDialog = this.page.locator(
  411 |         '.p-dialog.p-confirm-dialog'
  412 |       ); 
  413 |    await expect(confirmationDialog).toBeVisible();
  414 | 
  415 |     }
  416 | 
  417 | 
  418 |     async verifyBatchPageWithMultiplePages() {
  419 |         await expect(this.page).toHaveURL(/\/batch/);
  420 |         await expect(this.paginator).toBeVisible();
  421 |         await expect(this.nextPageButton).toBeVisible();
  422 |         await this.nextPageButton.isDisabled();
  423 |     
  424 |       }
  425 |     
  426 |       async verifyFirstPageArrowDisabled() {
  427 |         await expect(this.firstPageButton).toBeVisible();
  428 |         await expect(this.firstPageButton).toBeDisabled();
  429 |       }
  430 |     
  431 |       async verifyPreviousPageArrowDisabled() {
  432 |         await expect(this.previousPageButton).toBeVisible();
  433 |         await expect(this.previousPageButton).toBeDisabled();
  434 |       }
  435 |     
  436 |       async verifyNextPageArrowEnabled() {
  437 |         await expect(this.nextPageButton).toBeVisible();
  438 |         await expect(this.nextPageButton).toBeEnabled();
  439 |       }
  440 |     
  441 |       async verifyLastPageArrowEnabled() {
  442 |         await expect(this.lastPageButton).toBeVisible();
  443 |         await expect(this.lastPageButton).toBeEnabled();
  444 |       }
  445 |     
  446 |       async clickNextPage() {
  447 |         await this.closeOverlay();
  448 | 
> 449 |         await expect(this.nextPageButton).toBeVisible();
      |                                           ^ Error: expect(locator).toBeEnabled() failed
  450 |         await expect(this.nextPageButton).toBeEnabled();
  451 |     
  452 |         await this.nextPageButton.click();
  453 |       }
  454 |     
  455 |       async clickLastPage() {
  456 |         await this.closeOverlay();
  457 | 
  458 |         await expect(this.lastPageButton).toBeVisible();
  459 |         await expect(this.lastPageButton).toBeEnabled();
  460 |     
  461 |         await this.lastPageButton.click();
  462 |       }
  463 |     
  464 |       async clickPreviousPage() {
  465 |         await expect(this.previousPageButton).toBeVisible();
  466 |         await expect(this.previousPageButton).toBeEnabled();
  467 |       
  468 |         await this.previousPageButton.click();
  469 |       }
  470 |       
  471 |     
  472 |       async clickFirstPage() {
  473 |         await expect(this.firstPageButton).toBeVisible();
  474 |         await expect(this.firstPageButton).toBeEnabled();
  475 |         await this.firstPageButton.click();
  476 |       }
  477 |     
  478 |       async verifyNextPageDisabled() {
  479 |         await expect(this.nextPageButton).toBeVisible();
  480 |         await expect(this.nextPageButton).toBeDisabled();
  481 |       }
  482 |     
  483 |       async verifyPreviousPageEnabled() {
  484 |         await expect(this.previousPageButton).toBeVisible();
  485 |         await expect(this.previousPageButton).toBeEnabled();
  486 |       }
  487 |       async verifyPreviousPage() {
  488 |              await expect(this.previousPageButton).toBeEnabled();
  489 |       }
  490 |     }
  491 | 
  492 | 
  493 | 
  494 | export default BatchPage;
```