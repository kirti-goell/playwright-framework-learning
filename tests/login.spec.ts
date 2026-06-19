import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

test('should login successfully with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(inventoryPage.productsTitle).toBeVisible();

    await inventoryPage.addProductToCart('sauce-labs-backpack');

    await expect(inventoryPage.shoppingCartBadge).toHaveText('1');
});

test('should show error for invalid username', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        'kirti',
        'secret_sauce'
    );

    await expect(loginPage.errormsg).toBeVisible();
    await expect(loginPage.errormsg).toContainText('Epic sadface');
});