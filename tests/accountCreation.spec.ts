import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AccountSettings } from '../pages/AccountSettings';

/*
Normally this would not be hardcoded like this for a test suite. 
We would use a .env file to store hardcoded values, or use a random string generator for the email and password.
But for the purposes of this job application, I am going this route.  
*/


//New account email and password
export const testEmail = 'sapoli5013@hedotu.com';
export const testPassword = 'pg4X@h#r&b@R';

test.describe('Home Page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should have a sign in button', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickSignInButton();
        await expect(page.getByTestId('auth-submit')).toBeVisible();
        
    });
/*
    test('Create new Account and fill out information', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickSignInButton();
        await homePage.clickCreateAccountButton();
        await homePage.fillOutNewAccountForm('Tester', Math.random().toString(36).substring(2, 15), testEmail, testPassword);

    });
*/

    test('Sign in to newly created account', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickSignInButton();
        await homePage.loginToAccount(testEmail, testPassword);
    });
});
