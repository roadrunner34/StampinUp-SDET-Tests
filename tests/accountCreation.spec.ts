import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AccountSettings } from '../pages/AccountSettings';
import dotenv from 'dotenv';
import { logTestAccount } from '../utils/accountLogger';

dotenv.config();

if (!process.env.CURRENTUSEREMAIL || !process.env.CURRENTUSERPASSWORD) {
    throw new Error('Missing required environment variables: CURRENTUSEREMAIL and CURRENTUSERPASSWORD');
}

//Current account email and password
export const testEmail = process.env.CURRENTUSEREMAIL;
export const testPassword = process.env.CURRENTUSERPASSWORD;

//New Random account email and password
export const newEmail = Math.random().toString(36).substring(2, 15) + '@fakeemail.com';
export const newPassword = Math.random().toString(36).substring(2, 15);
//Random Address information
const streetAddress = Math.random().toString(36).substring(2, 15);
const city = Math.random().toString(36).substring(2, 15);
const state = Math.random().toString(36).substring(2, 15);
const zip = Math.random().toString(36).substring(2, 15);


test.describe('Home Page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should have a sign in button', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickSignInButton();
        await expect(page.getByTestId('auth-submit')).toBeVisible();
        
    });

    test('Create new Account and fill out information', async ({ page }) => {
        const homePage = new HomePage(page);
        const accountSettings = new AccountSettings(page);
        await homePage.clickSignInButton();
        await homePage.clickCreateAccountButton();
        await homePage.fillOutNewAccountForm('Tester', 'Tester', newEmail, newPassword);
        
        await accountSettings.clickToAccountsettings();


        // Log the newly created account credentials
        logTestAccount(newEmail, newPassword);
    });


    test('Sign in to newly created account', async ({ page }) => {
        const homePage = new HomePage(page);
        const accountSettings = new AccountSettings(page);
        await homePage.clickSignInButton();
        await homePage.loginToAccount(testEmail, testPassword);
        await accountSettings.clickToAccountsettings();
    });
});
