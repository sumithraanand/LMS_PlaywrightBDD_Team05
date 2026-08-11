// @ts-check
<<<<<<< HEAD

=======
>>>>>>> origin/Radhika_LMS_New
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';
import dotenv from 'dotenv';
import path from 'path';

<<<<<<< HEAD


dotenv.config({
  path: path.resolve(process.cwd(), '.env'),
});

// Configure the BDD environment
const testDir = defineBddConfig({
  features: ['features/**.feature'], 
  steps: ['stepDefinitions/**/*.js'],
  tags: ' ',
});


export default defineConfig({
  testDir,

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use */
  reporter: 'html',

  /* Shared settings for all projects */
  use: {
    /* Base URL */
     baseURL: process.env.APP_URL,

    /* Trace */
    trace: 'retain-on-failure',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    launchOptions: {
      slowMo: 300,
    },
=======
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

 //dotenv.config({ path: path.resolve(__dirname, '.env') });


dotenv.config({ path: path.resolve(process.cwd(), '.env') });

// Configure the BDD environment
  const testDir = defineBddConfig({
    features: ['features/**/*.feature'], // Standard glob for subfolders
    steps: ['stepDefinations/**/*.js'],
    tags :' ',
   //tags : ' '
});

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  //testDir: './tests',
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.APP_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    launchOptions:{
     
          slowMo:300,
        
    }
>>>>>>> origin/Radhika_LMS_New
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
<<<<<<< HEAD
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    
  ],

});






=======
      use: { ...devices['Desktop Chrome'] },
    },

    //{
    //  name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    //},

    //{
    //  name: 'webkit',
    //  use: { ...devices['Desktop Safari'] },
   // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

>>>>>>> origin/Radhika_LMS_New
