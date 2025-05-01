import { Locator, Page } from '@playwright/test';

export class AccountSettings {

    private readonly page: Page;
    accountName: Locator;
    accountSettings: Locator;
    addresses: Locator;
    paymentMethods: Locator;
    shippingFirstName: Locator;
    shippingLastName: Locator;
    addressLine1: Locator;
    addressLine2: Locator;
    city: Locator;
    state: Locator;
    zip: Locator;
    phoneNumber: Locator;
    defaultAddress: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountName = this.page.getByTestId('menu-user-firstname');
        this.accountSettings = this.page.getByRole('menuitem', { name: 'Account Settings' });
        this.addresses = this.page.getByRole('menuitem', { name: 'Addresses' });
        this.paymentMethods = this.page.getByRole('menuitem', { name: 'Payment' });
        this.shippingFirstName = this.page.getByTestId('address-field-first-name');
        this.shippingLastName = this.page.getByTestId('address-field-last-name');
        this.addressLine1 = this.page.getByTestId('address.addressLine1');
        this.addressLine2 = this.page.getByTestId('addressLine2');
        this.city = this.page.getByTestId('address-field-city');
        this.state = this.page.getByTestId('autocomplete-field-div');
        this.zip = this.page.getByTestId('address-field-postalCode');
        this.phoneNumber = this.page.getByTestId('address-telephone');
        this.defaultAddress = this.page.getByTestId('address-default')

    }

    async goto() {
        await this.page.goto('/account/settings');
    }

    async clickToAccountsettings(){
        await this.accountName.click();
        await this.accountSettings.click();
    }
    
    async clickToAddresses(){
        await this.addresses.click();
    }

    async fillOutShippingInfo(firstName: string, lastName: string, addressLine1: string, addressLine2: string = '', city: string, state: string, zip: string, phoneNumber: string){
        await this.shippingFirstName.fill(firstName);
        await this.shippingLastName.fill(lastName);
        await this.addressLine1.fill(addressLine1);
        if (addressLine2) {
            await this.addressLine2.fill(addressLine2);
        }
        await this.city.fill(city);
        await this.state.fill(state);
        await this.zip.fill(zip);
        await this.phoneNumber.fill(phoneNumber);
    }

}
