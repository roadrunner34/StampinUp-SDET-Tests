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

    test('Create new Account and fill out Address information', async ({ page }) => {
        const homePage = new HomePage(page);
        const accountSettings = new AccountSettings(page);
        await homePage.clickSignInButton();
        await homePage.clickCreateAccountButton();
        await homePage.fillOutNewAccountForm('Tester', 'Tester', faker.internet.email({provider: 'fakeemail.com'}), faker.internet.password());
        
        await accountSettings.clickToAccountsettings();
        await accountSettings.clickToAddresses();

        const streetAddress = faker.location.streetAddress();
        const city = faker.location.city();
        const state = 'Utah';
        const zip = '84117';
        const phoneNumber = faker.phone.number();

        await accountSettings.fillOutShippingInfo('Tester', 'Tester', streetAddress, '', city, state, zip, phoneNumber);
        await accountSettings.verifyAddressSaved(streetAddress, city);
    });

    test('Create new Account and change Contact information', async ({ page }) => {
        const homePage = new HomePage(page);
        const accountSettings = new AccountSettings(page);
        await homePage.clickSignInButton();
        await homePage.clickCreateAccountButton();
        await homePage.fillOutNewAccountForm('Tester', 'Tester', faker.internet.email({provider: 'fakeemail.com'}), faker.internet.password());
        
        await accountSettings.clickToAccountsettings();

        const newFirstName = faker.person.firstName();
        const newLastName = faker.person.lastName();
        const newEmail = faker.internet.email({provider: 'fakeemail.com'});
        const newPhone = faker.phone.number();

        await accountSettings.editContactInfo(newFirstName, newLastName, newEmail, newPhone);
        await accountSettings.verifyContactInfoSaved(newFirstName, newLastName);
        
    });

});
