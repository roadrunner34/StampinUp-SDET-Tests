import { test, expect } from '@playwright/test';
import { AccountSettings } from '../pages/AccountSettings';
import { HomePage } from '../pages/homepage';
import { testEmail, testPassword } from './accountCreation.spec';
import dotenv from 'dotenv';

dotenv.config();

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