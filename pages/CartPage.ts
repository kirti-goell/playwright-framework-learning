import {Page,Locator, expect} from '@playwright/test';

export class CartPage{
    readonly page : Page;

    readonly cartTitle : Locator;
    readonly continueShoppingButton : Locator;
    readonly checkoutButton : Locator;
    readonly cartItems : Locator;


    constructor(page : Page){
        this.page = page;

        this.cartTitle = page.locator('[data-test="title"]');
        this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.cartItems = page.locator('.inventory_item_name')
    }

    async cartItemsCount(){
        return await this.cartItems.count();
    }

    async removeProductFromCart(productName : string){
        const removeButton = this.page.locator(`[data-test="remove-${productName}"]`);
        await removeButton.click();
    }

    async continueShopping(){
        await this.continueShoppingButton.click();
    }

    async checkout(){
        await this.checkoutButton.click();
    }


};