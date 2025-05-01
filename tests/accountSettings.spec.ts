import { test, expect } from '@playwright/test';
import { AccountSettings } from '../pages/AccountSettings';
import { HomePage } from '../pages/homepage';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.CURRENTUSEREMAIL || !process.env.CURRENTUSERPASSWORD) {
    throw new Error('Missing required environment variables: CURRENTUSEREMAIL and CURRENTUSERPASSWORD');
}
//Current account email and password
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
        
/*Below are additional  tests cases that could also be written as per the instructions under the account settings pages:

1. Payment Methods:
1.1 Add a payment method
1.2 Edit a payment method
1.3 Delete a payment method
2. View order history and sorting options (will require seed data)
3. View and create List items
4. View, edit and delete subscriptions
5. Search for a demonstrator (ideally have seed date setup or created)
6. Join Stampin' rewards

*/

});