@program
Feature: Program Page

  Background: Admin is logged in and navigates to the Program page
    Given Admin is logged in to LMS Portal
    When Admin is on the Program page

  @smoke @navigation
  Scenario: Program page navigation
    Then Admin should be navigated to the Program page

  Scenario: Program-Sub menu displayed
    Then Program page should display "Add New Program submenu"

  @ui
  Scenario: Manage program heading presence
    Then Program page should display "Manage Program heading"

  Scenario: Manage program heading alignment
    Then the Manage Program heading should be left aligned

  Scenario: Multiple Delete button state
    Then the multiple Program delete button should be disabled

  Scenario: Search box is displayed
    Then Program page should display "Search box"

  Scenario: Search placeholder presence
    Then the Program search placeholder should be "Search..."

  Scenario: Column header name of data table
    Then Program table should display the expected column headers

  Scenario: Checkbox default state - header
    Then the Program header checkbox should be unchecked

  Scenario: Checkbox default state - datatable each rows
    Then all Program row checkboxes should be unchecked

  Scenario: Sort icon presence
    Then sortable Program columns should display sort icons

  Scenario: Edit and delete icon presence
    Then each Program row should display Edit and Delete buttons

  Scenario: Pagination controls are displayed
    Then Program page should display pagination controls and entry text

  Scenario: Footer message is displayed
    Then Program page should display the total Program footer

  @ui @add-program
  Scenario: Add New Program dialog is displayed
    When Admin opens the Add New Program dialog
    Then Program page should display "Program Details dialog"

  Scenario: Program Details dialog title
    When Admin opens the Add New Program dialog
    Then Program Details should display "dialog title"

  Scenario: Mandatory fields indicator
    When Admin opens the Add New Program dialog
    Then Program Details should display "mandatory indicators"

  Scenario: Name field is displayed
    When Admin opens the Add New Program dialog
    Then Program Details should display "Name field"

  Scenario: Description field is displayed
    When Admin opens the Add New Program dialog
    Then Program Details should display "Description field"

  Scenario: Status radio buttons are displayed
    When Admin opens the Add New Program dialog
    Then Program Details should display "Status radio buttons"

  @validation @negative
  Scenario: Empty form submission
    When Admin opens the Add New Program dialog
    And Admin saves the empty Program form
    Then Name and Status required messages should be displayed

  Scenario: Cancel button functionality
    When Admin opens the Add New Program dialog
    And Admin closes the Program dialog using "Cancel"
    Then the Program Details dialog should disappear

  Scenario: Close button (X) functionality
    When Admin opens the Add New Program dialog
    And Admin closes the Program dialog using "X"
    Then the Program Details dialog should disappear

  @crud @positive
  Scenario: Add new program with valid details
    When Admin opens the Add New Program dialog
    And Admin creates a Program using data key "validProgram"
    Then a Program created success message should be displayed

  @validation @negative
  Scenario: Add new program with numeric program name
    When Admin opens the Add New Program dialog
    And Admin enters Program data using key "numericProgram"
    Then the Program name format error should be displayed

  @crud
  Scenario: Verify added Program is created
    When Admin searches using data key "validProgram"
    Then matching Program records should be displayed

  @edit
  Scenario: Edit icon functionality
    When Admin opens Edit for Program using data key "existingProgram"
    Then Program page should display "Program Details dialog"

  Scenario: Edit Program Name
    When Admin edits Program using data key "editProgramName"
    Then a Program updated success message should be displayed

  Scenario: Edit Description
    When Admin edits Program using data key "editDescription"
    Then a Program updated success message should be displayed

  Scenario: Edit Status
    When Admin edits Program using data key "editStatus"
    Then a Program updated success message should be displayed

  Scenario: Verify edited Program details
    When Admin edits Program using data key "editProgramName"
    Then a Program updated success message should be displayed
    When Admin searches using data key "editProgramName"
    Then Program details should match data key "editProgramName"

  @delete
  Scenario: Display Delete Confirmation
    When Admin requests Program deletion using data key "deleteProgram"
    Then the Program deletion confirmation should be displayed

  Scenario: Delete Program Successfully
    When Admin deletes Program using data key "deleteProgram"
    Then a Program deleted success message should be displayed

  Scenario: Deleted Program visibility
    When Admin searches using data key "deleteProgram"
    Then zero Program records should be displayed

  Scenario: Cancel Program Deletion
    When Admin requests Program deletion using data key "existingProgram"
    And Admin answers "No" to the deletion confirmation
    Then the deletion confirmation should disappear

  Scenario: Close Delete Confirmation
    When Admin requests Program deletion using data key "existingProgram"
    And Admin closes the deletion confirmation
    Then the deletion confirmation should disappear

  @multi-delete
  Scenario: Select multiple programs
    When Admin selects the first 2 Programs
    Then the multiple Program delete button should be enabled

  Scenario: Delete Multiple programs
    When Admin selects the first 2 Programs
    And Admin opens the multiple Program deletion confirmation
    Then the Program deletion confirmation should be displayed

  Scenario: Delete selected program
    When Admin selects the first 2 Programs
    And Admin opens the multiple Program deletion confirmation
    And Admin answers "Yes" to the deletion confirmation
    Then a Program deleted success message should be displayed

  Scenario: Deleted program Visibility
    When Admin searches using data key "multiDeleteProgram"
    Then zero Program records should be displayed

  Scenario: Cancel Multiple Deletion
    When Admin selects the first 2 Programs
    And Admin opens the multiple Program deletion confirmation
    And Admin answers "No" to the deletion confirmation
    Then selected Program checkboxes should remain checked

  Scenario: Close Multiple deletion confirmation
    When Admin selects the first 2 Programs
    And Admin opens the multiple Program deletion confirmation
    And Admin closes the deletion confirmation
    Then the deletion confirmation should disappear

  @search
  Scenario: Search by program name
    When Admin searches using data key "searchByName"
    Then matching Program records should be displayed

  Scenario: Search by program description
    When Admin searches using data key "searchByDescription"
    Then matching Program records should be displayed

  Scenario: Search by Non-Existent Program Name
    When Admin searches using data key "nonExistentProgram"
    Then zero Program records should be displayed

  Scenario: Search by partial program name
    When Admin searches using data key "partialProgramName"
    Then matching Program records should be displayed

  @sort
  Scenario: Sorting of Program name in Ascending order
    When Admin sorts by "Program Name" in "ascending" order
    Then the Program values should be sorted correctly

  Scenario: Sorting of Program name in Descending order
    When Admin sorts by "Program Name" in "descending" order
    Then the Program values should be sorted correctly

  Scenario: Sorting of Program Description in Ascending order
    When Admin sorts by "Program Description" in "ascending" order
    Then the Program values should be sorted correctly

  Scenario: Sorting of Program Description in Descending order
    When Admin sorts by "Program Description" in "descending" order
    Then the Program values should be sorted correctly

  Scenario: Sorting of Program status in Ascending order
    When Admin sorts by "Program Status" in "ascending" order
    Then the Program values should be sorted correctly

  Scenario: Sorting of Program status in Descending order
    When Admin sorts by "Program Status" in "descending" order
    Then the Program values should be sorted correctly

  @pagination
  Scenario: Next Page Navigation
    When Admin navigates to the "next" Program page
    Then a different set of Program records should be displayed

  Scenario: Last Page Navigation
    When Admin navigates to the "last" Program page
    Then a different set of Program records should be displayed

  Scenario: Previous Page Navigation
    Given Admin navigates to the "next" Program page
    When Admin navigates to the "previous" Program page
    Then a different set of Program records should be displayed

  Scenario: First Page Navigation
    Given Admin navigates to the "last" Program page
    When Admin navigates to the "first" Program page
    Then a different set of Program records should be displayed

  Scenario: Pagination when there are no records
    When Admin searches using data key "nonExistentProgram"
    Then Program pagination should show zero entries

  Scenario: Pagination when there are less than 5 records
    When Admin searches using data key "singleResultProgram"
    Then all Program pagination navigation buttons should be disabled

