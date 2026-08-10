@Login
Feature: Login Page - UI Verification


Background: 
Given Admin is on the browser
When Admin enters the Valid LMS app URL

@Login_NonFunctional
Scenario: Login page is displayed successfully
    Then Admin should land on the login page

Scenario: Access app with invalid URL
    When Admin enters the invalid LMS app URL
    Then Admin should receive application error

Scenario: Broken link verification
    Then HTTP response >= 400. Then the link is broken

Scenario: Application title is displayed
    Then Admin should see  LMS - Learning Management System

Scenario: Application Logo is displayed
    Then Admin should see Application Logo

Scenario: Company name is displayed
    Then Admin should see company name below the app name

Scenario: Login instruction message is displayed
    Then Admin should see "Please login to LMS application"

Scenario: Input field is displayed
    Then Admin should see two text field

Scenario: Role Dropdown is displayed
    Then Admin should see one dropdown

Scenario: Text presence on the first field
    Then Admin should see "User" in the first text field

Scenario: Text presence on the second field
    Then Admin should  see "Password" in the second text field

Scenario: Asterisk is displayed for user field
    Then Admin should see asterisk mark(*) symbol next to text for user field

Scenario: Asterisk is displayed for password field
    Then Admin should see asterisk mark symbol next to password text

Scenario: Placeholder presence in dropdown 
    Then Admin should see "Select the role " placeholder in dropdown

Scenario: Dropdown options to select role
    Then Admin should see options in dropdown
    | Admin |
    | staff |
    | student |

Scenario: Login button is displayed
    Then Admin should see login button

Scenario: User field Placeholder text colour
    Then Admin should see user text in gray color

Scenario: Password field Placeholder text colour
    Then Admin should see password text in gray color

@Login_Functional
 Scenario Outline: Display error message while signing with "<testCaseType>"
 When User clicks Login button after entering "<testCaseType>" fields
 Then User should see appropriate error message in Login page

 Examples:
 |testCaseType|
 |Login with spl charac in Username|
 | Empty Username field for signin|
 | Empty Password field for signin|
 | Login attempt without selecting any role|
 | Login Attempt with invalid role|
 | Login attempt with wrong password|
 

Scenario: Successful login with valid credentials
When Admin clicks login in button after entering  a valid credential
Then Admin should land on home page 

