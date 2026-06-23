import { test, expect } from '../fixtures/myFixtures';

test(
    'should login successfully with valid credentials',

    async ({
        page,
        loginPage,
        inventoryPage,
        cartPage
    }) => {

        await page.goto('https://www.saucedemo.com/');

        await loginPage.login(
            'standard_user',
            'secret_sauce'
        );

        await expect(
            inventoryPage.productsTitle
        ).toBeVisible();

        await inventoryPage.addProductToCart(
            'sauce-labs-backpack'
        );

        await inventoryPage.addProductToCart(
            'sauce-labs-bike-light'
        );

        await inventoryPage.addProductToCart(
            'sauce-labs-fleece-jacket'
        );

        await expect(
            inventoryPage.shoppingCartBadge
        ).toHaveText('3');

        await inventoryPage.navigateToCartPage();

        await expect(
            cartPage.cartTitle
        ).toBeVisible();

        await expect(
            cartPage.cartItems.filter({
                hasText: 'Sauce Labs Backpack'
            })
        ).toBeVisible();

        await cartPage.removeProductFromCart(
            'sauce-labs-backpack'
        );

        await expect(
            cartPage.cartItems.filter({
                hasText: 'Sauce Labs Backpack'
            })
        ).toHaveCount(0);

    }
);