import { Page } from '@playwright/test';

export default class ProductPage {

    constructor(private page: Page) {

    }   

    private readonly productCard = ('.inventory_item');
    private readonly productName = ('.inventory_item_name');
    private readonly addToCartButton = ('button');
    private readonly cartLink = ('.shopping_cart_link');


    async getProductInToCartByName(productName: string) {
        const productsCount = await this.page.locator(this.productCard).count();
       
        for (let i = 0; i < productsCount; i++) {
            const name = await this.page.locator(this.productName).nth(i).textContent();
            if (name?.trim() === productName) {
                await this.page.locator(this.productCard).nth(i).locator('button').click();
                console.log(`Added product "${productName}" to cart`);
                break;
            }


}
}

    async  isRemoveButtonVisibleForProduct(productName: string) {
        const productsCount = await this.page.locator(this.productCard).count();
        for (let i = 0; i < productsCount; i++) {
            const name = await this.page.locator(this.productName).nth(i).textContent();
            if (name?.trim() === productName) {
                const isVisible = await this.page.locator(this.productCard).nth(i).locator('button').textContent();
                return isVisible?.trim() === 'Remove';
            }
        }
        return false;
    }

    async getCartItemCount() {
        const cartCountText = await this.page.locator(this.cartLink).textContent();
        const countMatch = cartCountText?.match(/\d+/);
        return countMatch ? parseInt(countMatch[0], 10) : 0;
    }

    async clickRemoveButtonForProduct(productName: string) {
        const productsCount = await this.page.locator(this.productCard).count();
        for (let i = 0; i < productsCount; i++) {
            const name = await this.page.locator(this.productName).nth(i).textContent();
            if (name?.trim() === productName) {
                await this.page.locator(this.productCard).nth(i).locator('button').click();
                console.log(`Removed product "${productName}" from cart`);
                break;
            }
        }
    }
}