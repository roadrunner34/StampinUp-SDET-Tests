import { expect, Locator, Page } from '@playwright/test';
import { logTestAccount } from '../utils/accountLogger';

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
    USState: Locator;
    addressSaveButton: Locator;
    savedAddressLine1: Locator;
    savedCityStateZipCode: Locator;

    savedPhoneNumber: Locator;
    editContactInfoButton: Locator;
    contactFirstName: Locator;
    contactLastName: Locator;
    contactEmail: Locator;
    contactPhone: Locator;
    contactSaveButton: Locator;
    contactCancelButton: Locator;
    birthdayDatePicker: Locator;
    contactCards: Locator;

    constructor(page: Page) {
        this.page = page;
        this.accountName = this.page.getByTestId('menu-user-firstname');
        this.accountSettings = this.page.getByRole('menuitem', { name: 'Account Settings' });
        this.addresses = this.page.getByRole('link', { name: 'Addresses' });
        this.paymentMethods = this.page.getByRole('menuitem', { name: 'Payment' });

        //Account Settings Fields
        this.editContactInfoButton = this.page.getByTestId('account-card-contact').getByTestId('edit-contact-setting');
        this.contactFirstName = this.page.getByTestId('account-card-firstName');
        this.contactLastName = this.page.getByTestId('account-card-lastName');
        this.contactEmail = this.page.getByTestId('account-card-email');
        this.contactPhone = this.page.getByTestId('account-card-phone');
        this.contactSaveButton = this.page.getByTestId('save-changes');
        this.contactCancelButton = this.page.getByTestId('cancel-changes');
        this.birthdayDatePicker = this.page.getByTestId('birthday-date-picker');
        this.contactCards = this.page.getByTestId('account-card-contact')

        //Address fields
        this.shippingFirstName = this.page.getByTestId('address-field-first-name');
        this.shippingLastName = this.page.getByTestId('address-field-last-name');
        this.addressLine1 = this.page.getByTestId('address.addressLine1');
        this.addressLine2 = this.page.getByTestId('addressLine2');
        this.city = this.page.getByTestId('address-field-city');
        this.state = this.page.getByTestId('autocomplete-field-div');
        this.zip = this.page.getByTestId('address-field-postalCode');
        this.phoneNumber = this.page.getByTestId('address-telephone');
        this.defaultAddress = this.page.getByTestId('address-default')
        this.USState = this.page.getByRole('option').locator('div').first()
        this.addressSaveButton = this.page.getByTestId('address-save');
        this.savedAddressLine1 = this.page.getByTestId('addresslist-row-1')
        this.savedCityStateZipCode = this.page.getByTestId('addresslist-row-2')
        this.savedPhoneNumber = this.page.getByTestId('addresslist-item-phone')


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
        await this.USState.click();
        await this.zip.fill(zip);
        await this.phoneNumber.fill(phoneNumber);
        // Use force: true to bypass the ripple effect overlay
        await this.defaultAddress.check({ force: true });
        await this.addressSaveButton.click();
    }

    async verifyAddressSaved(addressLine1: string, cityStateZipcode: string){
        await expect(this.savedAddressLine1).toHaveText(addressLine1);
        await expect(this.savedCityStateZipCode).toContainText(cityStateZipcode);
    }

    async editContactInfo(firstName: string, lastName: string, email: string, phone: string){
        await this.editContactInfoButton.click();
        await this.contactFirstName.fill(firstName);
        await this.contactLastName.fill(lastName);
        await this.contactEmail.fill(email);
        await this.contactPhone.fill(phone);
        await this.contactSaveButton.click();
        logTestAccount(email);

    }

    async verifyContactInfoSaved(firstName: string, lastName: string){
        await expect(this.contactCards.getByText(firstName)).toBeVisible();
        await expect(this.contactCards.getByText(lastName)).toBeVisible();
        // TODO: Need better locators to do email and phone checks 
        // await expect(this.contactEmail).toHaveText(email);
    }
}
