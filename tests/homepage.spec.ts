import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';

test.describe('Home Page', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('should have a sign in button', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickSignInButton();
        await expect(page.getByTestId('auth-submit')).toBeVisible();
        
    });

    test('Create new Account', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.clickSignInButton();
        await homePage.clickCreateAccountButton();
        await expect(page.getByTestId('reg-submit')).toBeVisible();
    });
});
