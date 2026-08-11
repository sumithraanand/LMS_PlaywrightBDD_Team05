# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\Batch.feature.spec.js >> Batch Page >> Batch Delete >> Cancel batch deletion
- Location: .features-gen\features\Batch.feature.spec.js:194:5

# Error details

```
ReferenceError: expect is not defined
```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e4]:
    - generic [ref=f1e5]: LMS - Learning Management System
    - generic [ref=f1e6]:
      - button "Home" [ref=f1e7] [cursor=pointer]
      - button "Program" [ref=f1e8] [cursor=pointer]
      - button "Batch" [ref=f1e9] [cursor=pointer]
      - button "Logout" [ref=f1e10] [cursor=pointer]
  - generic [ref=f1e11]:
    - generic [ref=f1e14]:
      - generic [ref=f1e16]:
        - generic [ref=f1e17]: Dashboard
        - generic [ref=f1e20]:
          - generic:
            - figure [ref=f1e22]:
              - generic [ref=f1e25]:
                - img "Paris" [ref=f1e27]
                - strong [ref=f1e29]: Welcome Lmshackathon@gmail.com
                - generic [ref=f1e30]: ADMIN
            - figure [ref=f1e32]
      - generic [ref=f1e39]:
        - generic [ref=f1e40]:
          - generic [ref=f1e41]: 
          - generic [ref=f1e43]:
            - generic [ref=f1e44]: "3"
            - generic [ref=f1e45]: User
        - generic [ref=f1e46]:
          - generic [ref=f1e47]: 
          - generic [ref=f1e49]:
            - generic [ref=f1e50]: "0"
            - generic [ref=f1e51]: Staff
        - generic [ref=f1e52]:
          - generic [ref=f1e53]: 
          - generic [ref=f1e55]:
            - generic [ref=f1e56]: "325"
            - generic [ref=f1e57]: Batches
        - generic [ref=f1e58]:
          - generic [ref=f1e59]: 
          - generic [ref=f1e61]:
            - generic [ref=f1e62]: "327"
            - generic [ref=f1e63]: Programs
      - generic [ref=f1e65]:
        - generic:
          - figure [ref=f1e67]:
            - generic [ref=f1e69]:
              - heading "Staff Data" [level=3] [ref=f1e70]
              - grid [ref=f1e71]:
                - row [ref=f1e72]:
                  - columnheader "#" [ref=f1e73]
                  - columnheader "First Name" [ref=f1e74]
                  - columnheader "Last Name" [ref=f1e75]
                  - columnheader "Phone" [ref=f1e76]
              - group [ref=f1e77]:
                - generic [ref=f1e80]:
                  - generic [ref=f1e81]: 0 of 0
                  - button "First page" [disabled] [ref=f1e82]
                  - button "Previous page" [disabled] [ref=f1e86]
                  - button "Next page" [disabled] [ref=f1e90]
                  - button "Last page" [disabled] [ref=f1e94]
          - figure [ref=f1e99]
    - text: \
```

# Test source

```ts
  159 |   const batchPage = new BatchPage(page);
  160 |   await batchPage.enterInvalidBatchNamePrefix();
  161 | });
  162 | 
  163 | Then('Admin should see empty text box', async ({page}) => {
  164 |    const batchPage = new BatchPage(page);
  165 |    await batchPage.verifyPrefixFieldEmpty();
  166 | });
  167 | 
  168 | When('Admin leaves blank one of the mandatory fields', async ({page}) => {
  169 |    const batchPage = new BatchPage(page);
  170 |    await batchPage.leaveMandatoryFieldBlank();
  171 | });
  172 | 
  173 | Then('Admin should get a error message on the respective mandatory field', async ({page}) => {
  174 |     const batchPage = new BatchPage(page);
  175 |     await batchPage.verifyMandatoryFieldError();
  176 | });
  177 | 
  178 | When('Admin enters the valid data to all the mandatory fields and click cancel button', async ({page}) => {
  179 |      const batchPage = new BatchPage(page);
  180 |      await batchPage.enterValidDataAndCancel();
  181 | });
  182 | 
  183 | Then('Admin should see the batch details popup closes without creating any batch', async ({page}) => {
  184 |     const batchPage = new BatchPage(page);
  185 |     await batchPage.verifyDialogClosed();
  186 | });
  187 | 
  188 | When('Admin clicks on the close icon', async ({page}) => {
  189 |    const batchPage = new BatchPage(page);
  190 |    await batchPage.clickCloseIcon();
  191 | });
  192 | 
  193 | Then('batch details pop up closes', async ({page}) => {
  194 |    const batchPage = new BatchPage(page);
  195 |    await batchPage.verifyDialogClosed();
  196 | });
  197 | 
  198 | //Edit batch Validation
  199 | Given('Admin is on the Batch page', async ({page}) => {
  200 |     const batchPage = new BatchPage(page);
  201 |     await batchPage.verifyManageBatchPage();
  202 | });
  203 | 
  204 | When('Admin clicks the edit icon', async ({page}) => {
  205 |     const batchPage = new BatchPage(page);
  206 |     await batchPage.clickEditIcon();
  207 | });
  208 | 
  209 | Then('Admin should see the Batch details dialog box', async ({page}) => {
  210 |     const batchPage = new BatchPage(page);
  211 |     await batchPage.verifyEditBatchDialog();
  212 | });
  213 | 
  214 | Then('Admin should see batch name value field is disabled for editing', async ({page}) => {
  215 |     const batchPage = new BatchPage(page);
  216 |     await batchPage.verifyBatchNameDisabled();
  217 | });
  218 | 
  219 | When('Admin Updates any fields with invalid data and click save button', async ({page}) => {
  220 |     const batchPage = new BatchPage(page);
  221 |     await batchPage.updateInvalidDataAndSave();
  222 | });
  223 | 
  224 | Then('Admin should get a error message under the respective field', async ({page}) => {
  225 |     const batchPage = new BatchPage(page);
  226 |     await batchPage.verifyEditValidationError();
  227 | });
  228 | When('Admin clicks save button after updating with valid data', async ({page}) => {
  229 |     const batchPage = new BatchPage(page);
  230 |     await batchPage.updateValidDataAndSave();
  231 | });
  232 | 
  233 | Then('Admin should get a successful message for editing the batch', async ({page}) => {
  234 |   const batchPage = new BatchPage(page);
  235 |     await batchPage.verifyEditSuccessMessage();
  236 | });
  237 | 
  238 | When('Admin clicks cancel button after updating with valid data', async ({page}) => {
  239 |   const batchPage = new BatchPage(page);
  240 |     await batchPage.cancelEdit();
  241 | });
  242 | 
  243 | Then('Admin should see the batch details popup closes without editing the batch', async ({page}) => {
  244 |   const batchPage = new BatchPage(page);
  245 |     await batchPage.verifyEditDialogClosed();
  246 | });
  247 | //Delete batch
  248 | Given('Admin is on the login page', async ({page}) => {
  249 |         const loginPage = new LoginPage(page);
  250 |         await loginPage.gotoLoginPage();
  251 |   });
  252 |   
  253 |   When('Admin logs in with valid credentials', async ({page}) => {
  254 |         const loginPage = new LoginPage(page);
  255 |         await loginPage.login();
  256 |   });
  257 |   
  258 |   Then('Admin should land on the home page', async ({page}) => {
> 259 |       await expect(page.getByText('Dashboard', { exact: true })).toBeVisible({ timeout: 10000 });
      |       ^ ReferenceError: expect is not defined
  260 |   });
  261 |   
  262 | //   When('Admin clicks {string} on the navigation bar', async ({page}, arg) => {
  263 | //             const batchPage = new BatchPage(page);
  264 | //             await batchPage.clickBatchNavigation(arg);
  265 | //   });
  266 |   
  267 |   Then('Admin should land on the Batch page', async ({page}) => {
  268 |     const batchPage = new BatchPage(page);
  269 |     await batchPage.verifyBatchPage();
  270 |   });
  271 | 
  272 |   
  273 |   When('Admin clicks the delete Icon on any row', async ({page}) => {
  274 |      const batchPage = new BatchPage(page);
  275 |     await batchPage.clickDeleteIcon();
  276 |   });
  277 | 
  278 | 
  279 |   Then('Admin should see the confirm alert box with yes and no button', async ({page}) => {
  280 |     const batchPage = new BatchPage(page);
  281 |     await batchPage.confirmAlertTitle();
  282 | 
  283 |   });
  284 |   
  285 |   When('Admin clicks yes button', async ({page}) => {
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
```