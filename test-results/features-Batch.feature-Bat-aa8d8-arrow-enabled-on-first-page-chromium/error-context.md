# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Batch.feature.spec.js >> Batch Page >> Batch_Pagination >> Next page arrow enabled on first page
- Location: .features-gen\features\Batch.feature.spec.js:240:5

# Error details

```
ReferenceError: page is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]: LMS - Learning Management System
      - generic [ref=e6]:
        - button "Home" [ref=e7] [cursor=pointer]
        - button "Program" [ref=e8] [cursor=pointer]
        - button "Batch" [expanded] [ref=e9] [cursor=pointer]
        - button "Logout" [ref=e10] [cursor=pointer]
    - generic [ref=e13]:
      - generic [ref=e14]:
        - generic [ref=e15]: Manage Batch
        - generic [ref=e16]:
          - button [disabled] [ref=e18]:
            - generic [ref=e19]: 
          - generic [ref=e21]:
            - generic [ref=e22]: 
            - textbox "Search..." [ref=e23]
      - generic [ref=e26]:
        - grid [ref=e28]:
          - rowgroup [ref=e29]:
            - row [ref=e30]:
              - columnheader [ref=e31]:
                - generic [ref=e33] [cursor=pointer]:
                  - generic [ref=e34]:
                    - checkbox
                  - checkbox [ref=e35]
              - columnheader "Batch Name " [ref=e36] [cursor=pointer]:
                - text: Batch Name
                - generic [ref=e37]: 
              - columnheader "Batch Description " [ref=e39] [cursor=pointer]:
                - text: Batch Description
                - generic [ref=e40]: 
              - columnheader "Batch Status " [ref=e42] [cursor=pointer]:
                - text: Batch Status
                - generic [ref=e43]: 
              - columnheader "No Of Classes " [ref=e45] [cursor=pointer]:
                - text: No Of Classes
                - generic [ref=e46]: 
              - columnheader "Program Name " [ref=e48] [cursor=pointer]:
                - text: Program Name
                - generic [ref=e49]: 
              - columnheader "Edit / Delete" [ref=e51]
          - rowgroup [ref=e52]:
            - row [ref=e53]:
              - gridcell [ref=e54]:
                - generic [ref=e56] [cursor=pointer]:
                  - generic [ref=e57]:
                    - checkbox
                  - checkbox [ref=e58]
              - gridcell "azure-af_111" [ref=e59]
              - gridcell "Updated Batch Description" [ref=e60]
              - gridcell "Active" [ref=e61]
              - gridcell "5" [ref=e62]
              - gridcell "azure-af" [ref=e63]
              - gridcell [ref=e64]:
                - generic [ref=e65]:
                  - button [ref=e67] [cursor=pointer]:
                    - generic [ref=e68]: 
                  - button [ref=e70] [cursor=pointer]:
                    - generic [ref=e71]: 
            - row [ref=e72]:
              - gridcell [ref=e73]:
                - generic [ref=e75] [cursor=pointer]:
                  - generic [ref=e76]:
                    - checkbox
                  - checkbox [ref=e77]
              - gridcell "azure-aj_111" [ref=e78]
              - gridcell [ref=e79]
              - gridcell "Active" [ref=e80]
              - gridcell "5" [ref=e81]
              - gridcell "azure-aj" [ref=e82]
              - gridcell [ref=e83]:
                - generic [ref=e84]:
                  - button [ref=e86] [cursor=pointer]:
                    - generic [ref=e87]: 
                  - button [ref=e89] [cursor=pointer]:
                    - generic [ref=e90]: 
            - row [ref=e91]:
              - gridcell [ref=e92]:
                - generic [ref=e94] [cursor=pointer]:
                  - generic [ref=e95]:
                    - checkbox
                  - checkbox [ref=e96]
              - gridcell "azure-ak_111" [ref=e97]
              - gridcell [ref=e98]
              - gridcell "Active" [ref=e99]
              - gridcell "5" [ref=e100]
              - gridcell "azure-ak" [ref=e101]
              - gridcell [ref=e102]:
                - generic [ref=e103]:
                  - button [ref=e105] [cursor=pointer]:
                    - generic [ref=e106]: 
                  - button [ref=e108] [cursor=pointer]:
                    - generic [ref=e109]: 
            - row [ref=e110]:
              - gridcell [ref=e111]:
                - generic [ref=e113] [cursor=pointer]:
                  - generic [ref=e114]:
                    - checkbox
                  - checkbox [ref=e115]
              - gridcell "CypressLMSApplication_55" [ref=e116]
              - gridcell "Search test description" [ref=e117]
              - gridcell "Active" [ref=e118]
              - gridcell "7" [ref=e119]
              - gridcell "CypressLMSApplication" [ref=e120]
              - gridcell [ref=e121]:
                - generic [ref=e122]:
                  - button [ref=e124] [cursor=pointer]:
                    - generic [ref=e125]: 
                  - button [ref=e127] [cursor=pointer]:
                    - generic [ref=e128]: 
            - row [ref=e129]:
              - gridcell [ref=e130]:
                - generic [ref=e132] [cursor=pointer]:
                  - generic [ref=e133]:
                    - checkbox
                  - checkbox [ref=e134]
              - gridcell "CypressLMSApplication_5512" [ref=e135]
              - gridcell "Search test description" [ref=e136]
              - gridcell "Active" [ref=e137]
              - gridcell "7" [ref=e138]
              - gridcell "CypressLMSApplication" [ref=e139]
              - gridcell [ref=e140]:
                - generic [ref=e141]:
                  - button [ref=e143] [cursor=pointer]:
                    - generic [ref=e144]: 
                  - button [ref=e146] [cursor=pointer]:
                    - generic [ref=e147]: 
            - row [ref=e148]:
              - gridcell [ref=e149]:
                - generic [ref=e151] [cursor=pointer]:
                  - generic [ref=e152]:
                    - checkbox
                  - checkbox [ref=e153]
              - gridcell "CypressLMSApplication_55124" [ref=e154]
              - gridcell "Search test description" [ref=e155]
              - gridcell "Active" [ref=e156]
              - gridcell "7" [ref=e157]
              - gridcell "CypressLMSApplication" [ref=e158]
              - gridcell [ref=e159]:
                - generic [ref=e160]:
                  - button [ref=e162] [cursor=pointer]:
                    - generic [ref=e163]: 
                  - button [ref=e165] [cursor=pointer]:
                    - generic [ref=e166]: 
            - row [ref=e167]:
              - gridcell [ref=e168]:
                - generic [ref=e170] [cursor=pointer]:
                  - generic [ref=e171]:
                    - checkbox
                  - checkbox [ref=e172]
              - gridcell "CypressLMSApplication_55163" [ref=e173]
              - gridcell "Search test description" [ref=e174]
              - gridcell "Active" [ref=e175]
              - gridcell "7" [ref=e176]
              - gridcell "CypressLMSApplication" [ref=e177]
              - gridcell [ref=e178]:
                - generic [ref=e179]:
                  - button [ref=e181] [cursor=pointer]:
                    - generic [ref=e182]: 
                  - button [ref=e184] [cursor=pointer]:
                    - generic [ref=e185]: 
            - row [ref=e186]:
              - gridcell [ref=e187]:
                - generic [ref=e189] [cursor=pointer]:
                  - generic [ref=e190]:
                    - checkbox
                  - checkbox [ref=e191]
              - gridcell "CypressLMSApplication_55164" [ref=e192]
              - gridcell "Search test description" [ref=e193]
              - gridcell "Active" [ref=e194]
              - gridcell "7" [ref=e195]
              - gridcell "CypressLMSApplication" [ref=e196]
              - gridcell [ref=e197]:
                - generic [ref=e198]:
                  - button [ref=e200] [cursor=pointer]:
                    - generic [ref=e201]: 
                  - button [ref=e203] [cursor=pointer]:
                    - generic [ref=e204]: 
            - row [ref=e205]:
              - gridcell [ref=e206]:
                - generic [ref=e208] [cursor=pointer]:
                  - generic [ref=e209]:
                    - checkbox
                  - checkbox [ref=e210]
              - gridcell "CypressLMSApplication_55173" [ref=e211]
              - gridcell "Search test description" [ref=e212]
              - gridcell "Active" [ref=e213]
              - gridcell "7" [ref=e214]
              - gridcell "CypressLMSApplication" [ref=e215]
              - gridcell [ref=e216]:
                - generic [ref=e217]:
                  - button [ref=e219] [cursor=pointer]:
                    - generic [ref=e220]: 
                  - button [ref=e222] [cursor=pointer]:
                    - generic [ref=e223]: 
            - row [ref=e224]:
              - gridcell [ref=e225]:
                - generic [ref=e227] [cursor=pointer]:
                  - generic [ref=e228]:
                    - checkbox
                  - checkbox [ref=e229]
              - gridcell "CypressLMSApplication_55176" [ref=e230]
              - gridcell "Search test description" [ref=e231]
              - gridcell "Active" [ref=e232]
              - gridcell "7" [ref=e233]
              - gridcell "CypressLMSApplication" [ref=e234]
              - gridcell [ref=e235]:
                - generic [ref=e236]:
                  - button [ref=e238] [cursor=pointer]:
                    - generic [ref=e239]: 
                  - button [ref=e241] [cursor=pointer]:
                    - generic [ref=e242]: 
        - generic [ref=e244]:
          - generic [ref=e245] [cursor=pointer]: Showing 1 to 10 of 86 entries
          - button "" [disabled]
          - button "" [disabled]
          - generic [ref=e246]:
            - button "1" [ref=e247] [cursor=pointer]
            - button "2" [ref=e248] [cursor=pointer]
            - button "3" [ref=e249] [cursor=pointer]
            - button "4" [ref=e250] [cursor=pointer]
            - button "5" [ref=e251] [cursor=pointer]
          - button "" [ref=e252] [cursor=pointer]
          - button "" [ref=e254] [cursor=pointer]
        - generic [ref=e256]: In total there are 86 batches.
  - menu [ref=e261]:
    - menuitem "Add New Batch" [active] [ref=e263] [cursor=pointer]
```

# Test source

```ts
  286 |       const batchPage = new BatchPage(page);
  287 |       await batchPage.clickYesButton();
  288 | 
  289 |   });
  290 |   
  291 |   Then('Admin should see the successful message', async ({page}) => {
  292 |      const batchPage = new BatchPage(page);
  293 |     await batchPage.verifySuccessfulMessage();
  294 | 
  295 |   });
  296 |   
  297 |   When('Admin should verify the batch should be deleted', async ({page}) => {
  298 |     const batchPage = new BatchPage(page);
  299 |     await batchPage.verifySuccessfulMessage();
  300 |   });
  301 |   
  302 |   When('Admin clicks the Cancel button', async ({page}) => {
  303 |     const batchPage = new BatchPage(page);
  304 |     await batchPage.clickCancelButton();
  305 |   });
  306 | //   When('Admin clicks on the close icon', async ({page}) => {
  307 | //     const batchPage = new BatchPage(page);
  308 | //     await batchPage.clickCloseIcon();
  309 | //   });
  310 |   
  311 |   When('Admin clicks the delete Icon on any row Admin', async ({page}) => {
  312 |     const batchPage = new BatchPage(page);
  313 |     await batchPage.clickDeleteIcon();
  314 |   
  315 |   });
  316 | 
  317 |   Then('Admin should see the alert box closed', async ({page}) => {
  318 |     const batchPage = new BatchPage(page);
  319 |     await batchPage.verifyAlertClosed();
  320 |   });
  321 |   
  322 |   Then('the batch is not deleted', async ({page}) => {
  323 |     const batchPage = new BatchPage(page);
  324 |     await batchPage.verifyBatchNotDeleted();
  325 | 
  326 |   });
  327 | 
  328 |   Given('Admin is on batch page', async ({page}) => {
  329 |    const batchPage = new BatchPage(page);
  330 |   await batchPage.verifyBatchPage();
  331 | });
  332 | 
  333 | When('Admin selects more than one batch by clicking on the checkbox', async ({page}) => {
  334 |     const batchPage = new BatchPage(page);
  335 |   await batchPage.selectMultipleBatches();
  336 | });
  337 | 
  338 | Then('Admin should see the Multiple delete box enabled under manage batch', async ({page}) => {
  339 |   const batchPage = new BatchPage(page);
  340 |   await batchPage.verifyMultipleDeleteEnabled();
  341 | });
  342 | 
  343 | When('Admin clicks on the delete button on the left top of the batch page', async ({page}) => {
  344 |   
  345 |   const batchPage = new BatchPage(page);
  346 |   await batchPage.clickMultipleDeleteButton();
  347 | });
  348 | 
  349 | Then('Admin lands on Confirmation form', async ({page}) => {
  350 |   
  351 |   const batchPage = new BatchPage(page);
  352 |   await batchPage.verifyConfirmationForm();
  353 | });
  354 | 
  355 | // Batch_Pagination
  356 | 
  357 | 
  358 | Given('Admin is on the batch page with multiple pages of batch record', async ({page}) => {
  359 |  
  360 |   const batchPage = new BatchPage(page);
  361 |   await batchPage.verifyBatchPageWithMultiplePages();
  362 | 
  363 | });
  364 | 
  365 | When('Admin clicks first page link on the data table', async ({page}) => {
  366 |  
  367 |   const batchPage = new BatchPage(page);
  368 |   await batchPage.clickFirstPage();
  369 | 
  370 | });
  371 | 
  372 | Then('Admin should see the Previous arrow \\(<)  disabled', async ({page}) => {
  373 |   
  374 |   const batchPage = new BatchPage(page);
  375 |   await batchPage.verifyPreviousPageArrowDisabled();
  376 | });
  377 | 
  378 | Then('Admin should see the First page arrow \\(<<) disabled', async ({page}) => {
  379 |   
  380 |   const batchPage = new BatchPage(page);
  381 |   await batchPage.verifyFirstPageArrowDisabled() ;
  382 | });
  383 | 
  384 | Then('Admin should see Next arrow \\(>) enabled', async ({}) => {
  385 |  
> 386 |   const batchPage = new BatchPage(page);
      |                                   ^ ReferenceError: page is not defined
  387 |   await batchPage.verifyNextPageArrowEnabled();
  388 | });
  389 | 
  390 |  
  391 | Then('Admin should see Last page arrow \\(>>) enabled', async ({page}) => {
  392 |   1
  393 |   const batchPage = new BatchPage(page);
  394 |   await batchPage.verifyLastPageArrowEnabled();
  395 | });
  396 | 
  397 | When('Admin clicks the next page option \\(>) in the pagination control', async ({page}) => {
  398 | 
  399 |   const batchPage = new BatchPage(page);
  400 |   await batchPage.clickNextPage();
  401 | });
  402 | 
  403 | Then('Admin should see the Next enabled link', async ({page}) => {
  404 | 
  405 |   const batchPage = new BatchPage(page);
  406 |   await batchPage.verifyNextPageArrowEnabled();
  407 | 
  408 | });
  409 | 
  410 | When('Admin clicks the last page option \\(>>) in the pagination control', async ({page}) => {
  411 |  
  412 |   const batchPage = new BatchPage(page);
  413 |   await batchPage.clickLastPage();
  414 | });
  415 | 
  416 | Then('Admin should see the last page link with next page link disabled on the table', async ({page}) => {
  417 |  
  418 |   const batchPage = new BatchPage(page);
  419 |   await batchPage.verifyNextPageDisabled();
  420 | });
  421 | 
  422 | When('Admin clicks the previous page option \\(<) in the pagination control', async ({page}) => {
  423 |  
  424 |   const batchPage = new BatchPage(page);
  425 |   await batchPage.clickPreviousPage();
  426 | });
  427 | 
  428 | Then('Admin should see the previous page on the table', async ({page}) => {
  429 | 
  430 |   const batchPage = new BatchPage(page);
  431 |   await batchPage.verifyPreviousPage();
  432 | });
  433 | 
  434 | When('Admin clicks the first page option \\(<<) in the pagination control', async ({page}) => {
  435 |   
  436 |   const batchPage = new BatchPage(page);
  437 |   await batchPage.clickFirstPage();
  438 | });
  439 | 
  440 | Then('Admin should see the very first page on the data table', async ({page}) => {
  441 |  
  442 |   const batchPage = new BatchPage(page);
  443 |   await batchPage.clickFirstPage();
  444 | });
  445 | 
```