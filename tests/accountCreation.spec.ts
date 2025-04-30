import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AccountSettings } from '../pages/AccountSettings';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.currentUserEmail || !process.env.currentUserPassword) {
    throw new Error('Missing required environment variables: currentUserEmail and currentUserPassword');
}

//New account email and password
export const testEmail = process.env.currentUserEmail;
export const testPassword = process.env.currentUserPassword;

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
