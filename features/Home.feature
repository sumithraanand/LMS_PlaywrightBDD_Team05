@home @ui
Feature: Home Page
    Background: Admin enters the Valid LMS app URL
      Given Admin is on the browser
      When Admin clicks login button after entering a valid credential
      Then Admin should land on home page
    @smoke @title 
    Scenario: Title of the LMS
      Then Admin should see LMS -Learning management system as title
    Scenario: Title alignment
      Then LMS title should be on the top left corner of page
    
    Scenario: Navigation bar text spelling
      Then Admin should see correct spelling in navigation bar text
    
    Scenario: LMS title - spelling and space
      Then Admin should see correct spelling and space in LMS title
    
    Scenario: Navigation bar Alignment
      Then Admin should see the navigation bar text on the top right side
    
    Scenario: Navigation bar order - 1st home
      Then Admin should see home in the 1st place
    Scenario: Navigation bar order - 2nd Program
      Then Admin should see program in the 2nd place
    Scenario: Navigation bar order  - 3rd  batch
      Then Admin should see batch in the  3rd place
    Scenario: Navigation bar order - 4th logout
      Then Admin should see logout in the 4th place
    Scenario: Welcome Message is displayed 
      Then Admin should see welcome message with user name and role
    Scenario: Bar chart presence
      Then Admin should see bar chart for Active and inactive user
    Scenario: User count card presence
      Then Admin should see user count for Active and inactive user
     Scenario: Navigation to ManageUser page
      Then Admin should be navigated to Manage User page
     Scenario: Program count card presence
      Then Admin should see Program count for Active and inactive user
    Scenario: Navigation to ManageProgram page
      Then Admin should be navigated to Manage Program page
     Scenario: Staff Count card presence
       Then Admin should see Staff count 
    Scenario: Navigation presence for Staff count card 
       Then Admin should not see the navigation to staff  page
    Scenario: Batch count card presence
       Then Admin should see batch count for Active and inactive user
    Scenario:Navigation to ManageBatch page
      Then Admin should be navigated to Manage Batch page
    Scenario: Staff Table Presence
      Then Admin should see the Staff Data table
    Scenario: Staff Table header Presence
      Then Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table
    