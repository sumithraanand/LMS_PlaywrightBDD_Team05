@Batch_Delete
Feature:Delete test case


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