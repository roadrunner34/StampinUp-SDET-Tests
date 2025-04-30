import { test, expect } from '@playwright/test';
import { AccountSettings } from '../pages/AccountSettings';
import { HomePage } from '../pages/homepage';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.CURRENTUSEREMAIL || !process.env.CURRENTUSERPASSWORD) {
    throw new Error('Missing required environment variables: CURRENTUSEREMAIL and CURRENTUSERPASSWORD');
}
//New account email and password
export const testEmail = process.env.CURRENTUSEREMAIL;
export const testPassword = process.env.CURRENTUSERPASSWORD;



test.describe('Account Settings', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Navigate to Account Settings', async ({ page }) => {
        const accountSettings = new AccountSettings(page);
        const homePage = new HomePage(page);
        await homePage.clickSignInButton();
        await homePage.loginToAccount(testEmail, testPassword);
        await accountSettings.goto();
    });
        
});