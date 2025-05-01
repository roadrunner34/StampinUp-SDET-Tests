import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { AccountSettings } from '../pages/AccountSettings';
import dotenv from 'dotenv';
import { fakerEN_US as faker } from '@faker-js/faker';

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
const streetAddress = faker.location.streetAddress();
const city = faker.location.city();
const state = 'Utah';
const zip = '84117';
const phoneNumber = faker.phone.number();

test.describe('Home Page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });
/*
    test('should have a sign in button', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickSignInButton();
        await expect(page.getByTestId('auth-submit')).toBeVisible();
        
    });
*/
    test('Create new Account and fill out information', async ({ page }) => {
        const homePage = new HomePage(page);
        const accountSettings = new AccountSettings(page);
        await homePage.clickSignInButton();
        await homePage.clickCreateAccountButton();
        await homePage.fillOutNewAccountForm('Tester', 'Tester', newEmail, newPassword);
        
        await accountSettings.clickToAccountsettings();
        await accountSettings.clickToAddresses();
        await accountSettings.fillOutShippingInfo('Tester', 'Tester', streetAddress, '', city, state, zip, phoneNumber);
        await accountSettings.verifyAddressSaved(streetAddress, city);
    });


    test('Sign in to newly created account', async ({ page }) => {
        const homePage = new HomePage(page);
        const accountSettings = new AccountSettings(page);
        await homePage.clickSignInButton();
        await homePage.loginToAccount(testEmail, testPassword);
        await accountSettings.clickToAccountsettings();
    });
});
