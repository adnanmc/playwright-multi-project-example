import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

// conditional load of .env file based on application environment such as .env.qa or .env.stg
// create separate .env files for your needs and make sure to include them .gitignore file to avoid security leak
// default will be .env

if (!process.env.NODE_ENV) {
  dotenv.config({ path: `${__dirname}//.env` });
} else {
  dotenv.config({ path: `${__dirname}//sample.env` });
}


/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
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
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // trace: 'on-first-retry',
    trace: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'project1-smoke',
      testDir: './tests/project1/smoke',
      use: { ...devices['Desktop Chrome'] },
      metadata: {env: 'QA'}
    },

    {
      name: 'project1-regression',
      testDir: './tests/project1/regression',
      use: { ...devices['Desktop Firefox'] },
      metadata: {env: 'STG'}
    },

    {
      name: 'project2-smoke',
      testDir: './tests/project2/smoke',
      use: { ...devices['Desktop Safari'] },
    },

    {
      name: 'project2-regression',
      testDir: './tests/project2/regression',
      use: { ...devices['Desktop Firefox'] },
    },

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
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
