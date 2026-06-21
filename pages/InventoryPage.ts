import { Page, Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    readonly productsTitle: Locator;
    readonly shoppingCartBadge: Locator;
    readonly shoppingCartLink : Locator;

    constructor(page: Page) {
        this.page = page;

        this.productsTitle = page.locator('[data-test="title"]');
        this.shoppingCartBadge = page.locator('[data-test="shopping-cart-badge"]');
        this.shoppingCartLink = page.locator('[data-test="shopping-cart-link"]');
    }

    async addProductToCart(productName: string) {
        const addButton = this.page.locator(`[data-test="add-to-cart-${productName}"]`);
        await addButton.click();
    }

    async getCartCount() {
        return await this.shoppingCartBadge.textContent();
    }

    async navigateToCartPage(){
        await this.shoppingCartLink.click();
    }
}   