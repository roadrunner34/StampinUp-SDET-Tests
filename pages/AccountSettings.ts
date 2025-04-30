import { Locator, Page } from '@playwright/test';

export class AccountSettings {

    private readonly page: Page;
    accountName: Locator;
    accountSettings: Locator;
    addresses: Locator;
    paymentMethods: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountName = this.page.getByTestId('menu-user-firstname');
        this.accountSettings = this.page.getByRole('menuitem', { name: 'Account Settings' });
        this.addresses = this.page.getByRole('menuitem', { name: 'Addresses' });
        this.paymentMethods = this.page.getByRole('menuitem', { name: 'Payment' });
    }

    async goto() {
        await this.page.goto('/account/settings');
    }

    async clickToAccountsettings(){
        await this.accountSettings.click();
    }
    
}
