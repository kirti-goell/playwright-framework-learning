
// Rename Playwright's original test to base
import { test as base, expect } from '@playwright/test'; // playwright/test ye node modules / playwright / test
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';



type MyFixtures = {
    loginPage: LoginPage;  //loginPage fixture will store an object of LoginPage class
    inventoryPage: InventoryPage;
    cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({ // Take existing Playwright test and add more fixtures to it.

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await use(loginPage);
    },

    inventoryPage: async ({ page }, use) => {

        const inventoryPage = new InventoryPage(page);

        await use(inventoryPage);
    },

    cartPage: async ({ page }, use) => {

        const cartPage = new CartPage(page);

        await use(cartPage);
    }

});

export { expect }; // bcs in test file login fixture we are importing expect  too
