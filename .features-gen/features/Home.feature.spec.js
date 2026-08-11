// Generated from: features\Home.feature
import { test } from "playwright-bdd";

test.describe('Home Page', () => {

  test.beforeEach('Background: Admin enters the Valid LMS app URL', async ({ Given, When, Then, page }, testInfo) => { if (testInfo.error) return;
    await Given('Admin is on the browser', null, { page }); 
    await When('Admin clicks login button after entering a valid credential'); 
    await Then('Admin should land on home page', null, { page }); 
  });
  
  test('Title of the LMS', { tag: ['@home', '@ui', '@smoke', '@title'] }, async ({ Then }) => { 
    await Then('Admin should see LMS -Learning management system as title'); 
  });

  test('Title alignment', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('LMS title should be on the top left corner of page'); 
  });

  test('Navigation bar text spelling', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see correct spelling in navigation bar text'); 
  });

  test('LMS title - spelling and space', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see correct spelling and space in LMS title'); 
  });

  test('Navigation bar Alignment', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see the navigation bar text on the top right side'); 
  });

  test('Navigation bar order - 1st home', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see home in the 1st place'); 
  });

  test('Navigation bar order - 2nd Program', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see program in the 2nd place'); 
  });

  test('Navigation bar order  - 3rd  batch', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see batch in the  3rd place'); 
  });

  test('Navigation bar order - 4th logout', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see logout in the 4th place'); 
  });

  test('Welcome Message is displayed', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see welcome message with user name and role'); 
  });

  test('Bar chart presence', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see bar chart for Active and inactive user'); 
  });

  test('User count card presence', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see user count for Active and inactive user'); 
  });

  test('Navigation to ManageUser page', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should be navigated to Manage User page'); 
  });

  test('Program count card presence', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see Program count for Active and inactive user'); 
  });

  test('Navigation to ManageProgram page', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should be navigated to Manage Program page'); 
  });

  test('Staff Count card presence', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see Staff count'); 
  });

  test('Navigation presence for Staff count card', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should not see the navigation to staff  page'); 
  });

  test('Batch count card presence', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see batch count for Active and inactive user'); 
  });

  test('Navigation to ManageBatch page', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should be navigated to Manage Batch page'); 
  });

  test('Staff Table Presence', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see the Staff Data table'); 
  });

  test('Staff Table header Presence', { tag: ['@home', '@ui'] }, async ({ Then }) => { 
    await Then('Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\Home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":8,"tags":["@home","@ui","@smoke","@title"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then Admin should see LMS -Learning management system as title","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":10,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then LMS title should be on the top left corner of page","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":13,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then Admin should see correct spelling in navigation bar text","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":16,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then Admin should see correct spelling and space in LMS title","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":19,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the navigation bar text on the top right side","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":22,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Admin should see home in the 1st place","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":24,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Admin should see program in the 2nd place","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":26,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch in the  3rd place","stepMatchArguments":[]}]},
  {"pwTestLine":44,"pickleLine":28,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then Admin should see logout in the 4th place","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":30,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Admin should see welcome message with user name and role","stepMatchArguments":[]}]},
  {"pwTestLine":52,"pickleLine":32,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Admin should see bar chart for Active and inactive user","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":34,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Admin should see user count for Active and inactive user","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":36,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":37,"keywordType":"Outcome","textWithKeyword":"Then Admin should be navigated to Manage User page","stepMatchArguments":[]}]},
  {"pwTestLine":64,"pickleLine":38,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Program count for Active and inactive user","stepMatchArguments":[]}]},
  {"pwTestLine":68,"pickleLine":40,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then Admin should be navigated to Manage Program page","stepMatchArguments":[]}]},
  {"pwTestLine":72,"pickleLine":42,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":43,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Staff count","stepMatchArguments":[]}]},
  {"pwTestLine":76,"pickleLine":44,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should not see the navigation to staff  page","stepMatchArguments":[]}]},
  {"pwTestLine":80,"pickleLine":46,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":47,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch count for Active and inactive user","stepMatchArguments":[]}]},
  {"pwTestLine":84,"pickleLine":48,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":49,"keywordType":"Outcome","textWithKeyword":"Then Admin should be navigated to Manage Batch page","stepMatchArguments":[]}]},
  {"pwTestLine":88,"pickleLine":50,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Staff Data table","stepMatchArguments":[]}]},
  {"pwTestLine":92,"pickleLine":52,"tags":["@home","@ui"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given Admin is on the browser","isBg":true,"stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When Admin clicks login button after entering a valid credential","isBg":true,"stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":53,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the headers #, First Name, Last Name, Phone in the Staff Data table","stepMatchArguments":[]}]},
]; // bdd-data-end