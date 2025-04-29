import { Page, expect } from '@playwright/test';

export class HomePage {
    private readonly page: Page;
    private readonly signInButton;
    private readonly createAccountButton;
    firstNameInput: any;
    lastNameInput: any;
    emailInput: any;
    passwordInput: any;
    passwordConfirmationInput: any;
    submitButton: any;

    constructor(page: Page) {
        this.page = page;
        this.signInButton = this.page.getByTestId('menu-user-btn-signin');
        this.createAccountButton = this.page.getByTestId('btn-create-account');
        this.firstNameInput = this.page.getByTestId('reg-first-name');
        this.lastNameInput = this.page.getByTestId('reg-last-name');
        this.emailInput = this.page.getByTestId('reg-email');
        this.passwordInput = this.page.getByTestId('reg-password');
        this.passwordConfirmationInput = this.page.getByTestId('reg-password-confirmation');
        this.submitButton = this.page.getByTestId('reg-submit');
    }

    async goto(){
        await this.page.goto('/');
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    async clickCreateAccountButton() {
        await this.createAccountButton.click();
    }

    async fillOutNewAccountForm(firstName: string, lastName: string, email: string, password: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.passwordConfirmationInput.fill(password);
        await this.submitButton.click();
    }

    async fillOutExistingAccountForm(email: string, password: string) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.submitButton.click();
    }
}
