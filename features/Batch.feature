@batch
Feature: Batch Page
    Background: Admin enters the Valid LMS app URL
       Given Admin is on home page after Login
       When Admin clicks "Batch" on the navigation bar
    @BatchPageNavigation
    Scenario: Batch page Navigation
        Then Admin should be in the Manage Batch Page
     @Menubar
Rule: Menu bar
    Scenario: Batch-sub menu displayed
        Then Admin should see sub menu in menu bar as "Add New Batch"
    Scenario: Batch page heading is displayed
        Then Admin should see the "Manage Batch" Heading
     Scenario: Presence of disabled Delete Icon
        Then Admin should see the disabled "Delete Icon" under the header
     Scenario: Pagination controls are displayed
        Then Admin should see the pagination controls under the data table
     Scenario: Edit icon is displayed
        Then Admin should see the edit icon in each row
     @ManageBatch_UIvalidation
Rule: Manage Batch - UI validation
     Scenario: Delete icon is displayed
        Then Admin should see the delete icon in each row
     Scenario: Row Checkbox is displayed
        Then Admin should see the checkbox in each row
     Scenario: Datatable headers are displayed
        Then Admin should see the datatable headers
               |Batch Name|
               |Batch Description|
               |Batch Status|
               |No Of Classes|
               |Program Name|
               |Edit/Delete|
     Scenario: Checkbox is displayed
        Then Admin should see the checkbox in the datatable header row
     Scenario: Sort icon presence
        Then Admin should see the sort icon next to all Datatable headers

     Scenario: Add New Batch dialog is displayed
        When Admin clicks on "Add New batch" under the "batch" menu bar
        Then Admin should see the Batch Details dialog box
      @AddNewBatch_UIvalidation
Rule: Add New Batch - UI validation
     Background: Admin navigates to Manage batch page after logged in
       Given Admin is on the batch page
       When Admin clicks on "Add New batch" under the "batch" menu bar
     Scenario: Batch name field is displayed
       Then Admin should see the batch name field
     Scenario:Number of Classes field is displayed
       Then Admin should see the number of classes field
     Scenario:Description field is displayed
       Then Admin should see the description field
     Scenario:Program Name dropdown is displayed
       Then Admin should see the program name field with dropdown
     Scenario:Status radio buttons are displayed
       Then Admin should see the status radio button
      @AddNewBatch_FunctionalValidation
Rule: Add New Batch - Functional Validation
     Background: Admin navigates to Add new batch dialog box after logged in
       Given Admin is on Batch Details dialog box
     Scenario:Program name appears as batch prefix
        When Admin selects program name present in the dropdown
        Then Admin should see selected program name in the batch name prefix box
     Scenario: Batch name suffix accepts only numbers
        When Admin enters alphabets in batch name suffix box
        Then Admin should get error message below the text box of respective field
     Scenario: Batch name Prefix cannot be edited
        When Admin enters alphabets in batch name prefix box
        Then Admin should see empty text box
    Scenario: Add new batch with leaving space in mandatory field
       When Admin leaves blank one of the mandatory fields
       Then Admin should get a error message on the respective mandatory field
    Scenario: Cancel Button functionality
       When Admin enters the valid data to all the mandatory fields and click cancel button
       Then Admin should see the batch details popup closes without creating any batch
    Scenario: Close icon functionality
       When Admin clicks on the close icon
       Then batch details pop up closes
      @EditBatchValidation
Rule: Edit Batch Validation
     Background: Admin navigates to Manage batch page after logged in
           Given Admin is on the Batch page
     Scenario: Edit icon functionality
         When Admin clicks the edit icon
         Then Admin should see the Batch details dialog box
     Scenario: Batch Name value disabled
         When Admin clicks the edit icon
         Then Admin should see batch name value field is disabled for editing
     Scenario: Validate editing description and No. of classes fields with invalid data in the pop up
        When Admin clicks the edit icon
        When Admin Updates any fields with invalid data and click save button
        Then Admin should get a error message under the respective field
     Scenario: Successful Batch Update
        When Admin clicks the edit icon
        When Admin clicks save button after updating with valid data
        Then Admin should get a successful message for editing the batch
     Scenario: Cancel Button Functionality
        When Admin clicks the edit icon
        When Admin clicks cancel button after updating with valid data
        Then Admin should see the batch details popup closes without editing the batch

      @Batch_Delete
Rule: Batch Delete
    Background: Admin logs in and navigates to Batch page
        Given Admin is on the login page
        When Admin logs in with valid credentials
        Then Admin should land on the home page
        When Admin clicks "Batch" on the navigation bar
        Then Admin should land on the Batch page

    @Batch1_Delete
    Scenario: Display Delete Confirmation
        When Admin clicks the delete Icon on any row
        Then Admin should see the confirm alert box with yes and no button

    Scenario: Delete batch Successfully
         When Admin clicks the delete Icon on any row
         Then Admin should see the confirm alert box with yes and no button
         When Admin clicks yes button
         Then Admin should see the successful message 
         And Admin should verify the batch should be deleted

    Scenario: Cancel batch deletion
        When Admin clicks the delete Icon on any row
         Then Admin should see the confirm alert box with yes and no button
         When Admin clicks the Cancel button
         Then Admin should see the alert box closed 
         And the batch is not deleted

     Scenario:close icon functionality
         When Admin clicks the delete Icon on any row
         Then Admin should see the confirm alert box with yes and no button
         When Admin clicks on the close icon
         Then Admin should see the alert box closed

     @MultipleBatch_Delete
Rule:MultipleBatch_Delete
     Scenario:Select multiple batch
         Given Admin is on batch page
         When Admin selects more than one batch by clicking on the checkbox
         Then Admin should see the Multiple delete box enabled under manage batch 

     Scenario:Delete Multiple Batches
        Given Admin is on batch page
        When Admin selects more than one batch by clicking on the checkbox
        And Admin clicks on the delete button on the left top of the batch page
        Then Admin lands on Confirmation form


     @Batch_Pagination
Rule:Batch_Pagination
     Scenario:Previous page arrow disabled on first page
          Given Admin is on the batch page with multiple pages of batch record
         Then Admin should see the Previous arrow (<)  disabled

    @Batch_Pagination
     Scenario:First page arrow disabled on first page
         Given Admin is on the batch page with multiple pages of batch record
         Then Admin should see the First page arrow (<<) disabled

      @Batch_Pagination
      Scenario:Next page arrow enabled on first page
          Then Admin should see Next arrow (>) enabled

      @Batch_Pagination
      Scenario:Last page arrow enabled on first page
          Then Admin should see Last page arrow (>>) enabled

      @Batch_Pagination
      Scenario:Next Page Navigation
           Given Admin is on the batch page with multiple pages of batch record
           When Admin clicks the next page option (>) in the pagination control
           Then Admin should see the Next enabled link

      @Batch_Pagination
      Scenario:Last Page Navigation
          Given Admin is on the batch page with multiple pages of batch record
          When Admin clicks the last page option (>>) in the pagination control
          Then Admin should see the last page link with next page link disabled on the table

      @Batch_Pagination
      Scenario:Previous Page Navigation
         Given Admin is on the batch page with multiple pages of batch record
         When Admin clicks the previous page option (<) in the pagination control
         Then Admin should see the previous page on the table

      @Batch_Pagination
     Scenario:First Page Navigation
          Given Admin is on the batch page with multiple pages of batch record
          When Admin clicks the first page option (<<) in the pagination control
          Then Admin should see the very first page on the data table
