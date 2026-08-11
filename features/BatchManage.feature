@Batch_ManageSearch
Feature:Manage Batch Page test case

 Background: Admin logs in and navigates to Batch page
            Given Admin is on the login page
            When Admin logs in with valid credentials
            Then Admin should land on the home page
            When Admin clicks "Batch" on the navigation bar
            Then Admin should land on the Batch page

 Given Admin is on the batch page

                        
Scenario: Search by Batch name
         When Admin clicks on Arrow next to batch name
         Then Admin should See the batch details sorted by batch Name in Ascending order

                                
Scenario: Search by Batch description
         When Admin clicks on Arrow next to batch description 
         Then Admin should See the batch details sorted by batch description in Ascending order

 Scenario: Search by program name
         When Admin enters the Program name in the search box 
         Then Admin should see the filtered batch details based on the program name in the data table

 