import { Page, Locator } from '@playwright/test';


export class LoginPage { //Creates a Page Object class for the Login Page. Later we'll store locators and methods inside it.

    readonly page: Page; // page variable hai uska Type Page hai (tab) and it will store page ka link

    readonly username: Locator; // locator isliye kyunki hum username locator se find krengy
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly errormsg: Locator;

    // why readonly : Matlab once value assign ho gayi, accidentally change nahi kar sakte.

    constructor(page: Page) { // Constructor ek special method hai jo automatically run hota hai jab class ka object create hota hai.
        this.page = page;

        this.username = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errormsg = page.locator('[data-test="error"]');
    }

    async login(username: string, password: string) {

        await this.username.fill(username);
        await this.password.fill(password);
        await this.loginButton.click();
    }

}