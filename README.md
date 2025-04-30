# StampinUp SDET Tests

This repository contains automated tests for the StampinUp website.

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   ```bash
   npm run setup
   ```
   This will create a `.env` file in your project root. Please fill in the required variables.

4. Run the tests:
   ```bash
   npm test
   ```

## Environment Variables

The following environment variables are required:

- Add your required environment variables here

## Test Configuration

Tests are configured to run in multiple browsers (Chrome, Firefox, and Safari) by default. You can modify the configuration in `playwright.config.ts`.

## Contributing

Please follow the existing code style and add appropriate tests for new features.

For Technical Interview
Email Instructions:

# Assignment Details:
## Write Test Cases: 
Create comprehensive test cases for the website www.stampinup.com. Your test cases should include the following scenarios:
- Creating a new account
- Setting up the initial user profile under account settings for a new user
- Setting up address in account setting menu for a new user
- With created account continue on and create cases for scenarios as an existing user signing in and editing the fields in above sections from set up. 

## Develop a Test Suite: 
Using Cypress, Playwright, or any modern testing framework of your choice, develop a test suite that automates the test cases you have written.

## Submission Instructions:
Once you have completed the assignment, please share the code or provide a link to the repository where the code is hosted.  In the submission please also include a copy of the written test cases.
Deadline: Please submit your completed assignment by Friday May 2nd.

Notes:
Used Temp-mail.org to create a new email address for the test cases.
https://temp-mail.org/en/
Results deployed to GitHub Pages: https://roadrunner34.github.io/StampinUp-SDET-Tests/