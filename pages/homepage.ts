import { Page, expect, Locator } from '@playwright/test';

export class HomePage {
    private readonly page: Page;
    private readonly signInButton: Locator;
    private readonly createAccountButton: Locator;
    firstNameInput: Locator;
    lastNameInput: Locator;
    emailInput: Locator;
    emailLogin: Locator;
    passwordInput: Locator;
    passwordConfirmationInput: Locator;
    submitButton: Locator;
    passwordLogin: Locator;
    submitLogin: Locator;


    constructor(page: Page) {
        this.page = page;
        this.signInButton = this.page.getByTestId('menu-user-btn-signin');
        this.createAccountButton = this.page.getByTestId('btn-create-account');
        this.firstNameInput = this.page.getByTestId('reg-first-name');
        this.lastNameInput = this.page.getByTestId('reg-last-name');
        this.emailInput = this.page.getByTestId('reg-email');
        this.passwordInput = this.page.getByTestId('reg-password').getByText('Password', { exact: true });
        this.passwordConfirmationInput = this.page.getByTestId('reg-password-confirmation').getByText('Confirm Password', { exact: true });
        this.submitButton = this.page.getByTestId('reg-submit');
        this.emailLogin = this.page.getByTestId('auth-email');
        this.passwordLogin = this.page.getByTestId('form-auth').getByText('Password', { exact: true });
        this.submitLogin = this.page.getByTestId('auth-submit');
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

    async loginToAccount(email: string, password: string) {
        await this.emailLogin.fill(email);
        await this.passwordLogin.fill(password);
        await this.submitLogin.click();
    }
}
