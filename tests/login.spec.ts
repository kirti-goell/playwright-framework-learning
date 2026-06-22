import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

test('should login successfully with valid credentials', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login(
        'standard_user',
        'secret_sauce'
    );

    await expect(inventoryPage.productsTitle).toBeVisible();

    await inventoryPage.addProductToCart('sauce-labs-backpack');
    await inventoryPage.addProductToCart('sauce-labs-bike-light');
    await inventoryPage.addProductToCart('sauce-labs-fleece-jacket');

    await expect(inventoryPage.shoppingCartBadge).toHaveText('3');

    await inventoryPage.navigateToCartPage(

    );
    await expect(cartPage.cartTitle).toBeVisible();

    await expect((cartPage.cartItems).filter({ hasText: 'Sauce Labs Backpack' })).toBeVisible();

    await cartPage.removeProductFromCart('sauce-labs-backpack');

    await expect(
        cartPage.cartItems.filter({
            hasText: 'Sauce Labs Backpack'
        })
    ).toHaveCount(0);

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