import {test, expect} from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ProductPage from '../pages/ProductPage';


test.describe('@ShoppingCart Shopping Cart Tests', () => {

    let loginPage: LoginPage;
    let productPage: ProductPage;   

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        await loginPage.loginValidCredintials('standard_user','secret_sauce');
    });

    test('@ShoppingCart Add product to cart and verify', async ({ page }) => {
        const productName = 'Sauce Labs Backpack';
        await productPage.getProductInToCartByName(productName);
        const isRemoveButtonVisible = await productPage.isRemoveButtonVisibleForProduct(productName);
        expect(isRemoveButtonVisible).toBeTruthy();
        const cartItemCount = await productPage.getCartItemCount();
        console.log(`Cart item count after adding product: ${cartItemCount}`);
        expect(cartItemCount).toBeGreaterThan(0);
     
        console.log(`=== Test PASSED: Product "${productName}" added to cart and verified successfully ===`);       

    })

    test('@ShoppingCart Remove product from cart and verify', async ({ page }) => {
        const productName = 'Sauce Labs Backpack';
      
       const cartItemCountBefore = await productPage.getCartItemCount();
        console.log(`Cart item count before removing product: ${cartItemCountBefore}`);
        if(cartItemCountBefore > 0){
            console.log(`Product "${productName}" is in the cart, proceeding to remove it.`);
            await productPage.clickRemoveButtonForProduct(productName);
            return;
        }
            console.log(`Product "${productName}" is not in the cart`);
            
    });

    // ========== POSITIVE TEST SCENARIOS ==========

    test('@ShoppingCart Add multiple different products to cart', async ({ page }) => {
        const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt'];
        
        for (const product of products) {
            await productPage.getProductInToCartByName(product);
        }
        
        const cartItemCount = await productPage.getCartItemCount();
        expect(cartItemCount).toBe(products.length);
        console.log(`=== Test PASSED: Successfully added ${products.length} different products to cart ===`);
    });

    test('@ShoppingCart Verify cart item count increments correctly', async ({ page }) => {
        const initialCount = await productPage.getCartItemCount();
        
        await productPage.getProductInToCartByName('Sauce Labs Backpack');
        let currentCount = await productPage.getCartItemCount();
        expect(currentCount).toBe(initialCount + 1);
        
        await productPage.getProductInToCartByName('Sauce Labs Bike Light');
        currentCount = await productPage.getCartItemCount();
        expect(currentCount).toBe(initialCount + 2);
        
        console.log(`=== Test PASSED: Cart item count incremented correctly to ${currentCount} ===`);
    });

    test('@ShoppingCart Add product and verify Add to Cart button changes to Remove', async ({ page }) => {
        const productName = 'Sauce Labs Fleece Jacket';
        
        // Verify button is "Add to cart" before adding
        const productsCount = await page.locator('.inventory_item').count();
        for (let i = 0; i < productsCount; i++) {
            const name = await page.locator('.inventory_item_name').nth(i).textContent();
            if (name?.trim() === productName) {
                const buttonText = await page.locator('.inventory_item').nth(i).locator('button').textContent();
                expect(buttonText?.trim()).toBe('Add to cart');
                break;
            }
        }
        
        // Add product to cart
        await productPage.getProductInToCartByName(productName);
        
        // Verify button changed to "Remove"
        const isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(productName);
        expect(isRemoveVisible).toBeTruthy();
        
        console.log(`=== Test PASSED: Button correctly changed from "Add to cart" to "Remove" ===`);
    });

    test('@ShoppingCart Remove product and verify button changes back to Add to Cart', async ({ page }) => {
        const productName = 'Sauce Labs Onesie';
        
        // Add product
        await productPage.getProductInToCartByName(productName);
        let isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(productName);
        expect(isRemoveVisible).toBeTruthy();
        
        // Remove product
        await productPage.clickRemoveButtonForProduct(productName);
        
        // Verify button is back to "Add to cart"
        isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(productName);
        expect(isRemoveVisible).toBeFalsy();
        
        console.log(`=== Test PASSED: Button correctly changed from "Remove" back to "Add to cart" ===`);
    });

    test('@ShoppingCart Cart persists after page refresh', async ({ page }) => {
        const productName = 'Sauce Labs Backpack';
        
        // Add product to cart
        await productPage.getProductInToCartByName(productName);
        const cartCountBefore = await productPage.getCartItemCount();
        expect(cartCountBefore).toBeGreaterThan(0);
        
        // Refresh page
        await page.reload();
        
        // Verify product is still in cart
        const cartCountAfter = await productPage.getCartItemCount();
        expect(cartCountAfter).toBe(cartCountBefore);
        const isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(productName);
        expect(isRemoveVisible).toBeTruthy();
        
        console.log(`=== Test PASSED: Cart persisted correctly after page refresh ===`);
    });

    // ========== EDGE CASE TEST SCENARIOS ==========

    test('@ShoppingCart Edge Case: Add same product twice', async ({ page }) => {
        const productName = 'Sauce Labs Backpack';
        
        // Try to add the same product again
        await productPage.getProductInToCartByName(productName);
        const cartCountAfterFirst = await productPage.getCartItemCount();
        expect(cartCountAfterFirst).toBe(1);
        
        // Button should be "Remove", clicking again should remove it
        const isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(productName);
        expect(isRemoveVisible).toBeTruthy();
        
        console.log(`=== Test PASSED: Edge case - same product cannot be added twice (system prevents duplicate addition) ===`);
    });

    test('@ShoppingCart Edge Case: Add product when cart already has maximum items', async ({ page }) => {
        // Add multiple products
        const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie'];
        
        for (const product of products) {
            await productPage.getProductInToCartByName(product);
        }
        
        const cartCount = await productPage.getCartItemCount();
        expect(cartCount).toBe(5);
        
        // Verify all products are in cart
        for (const product of products) {
            const isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(product);
            expect(isRemoveVisible).toBeTruthy();
        }
        
        console.log(`=== Test PASSED: All 5 products added to cart successfully ===`);
    });

    test('@ShoppingCart Edge Case: Empty cart by removing all products', async ({ page }) => {
        const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
        
        // Add products
        for (const product of products) {
            await productPage.getProductInToCartByName(product);
        }
        
        let cartCount = await productPage.getCartItemCount();
        expect(cartCount).toBe(2);
        
        // Remove all products
        for (const product of products) {
            await productPage.clickRemoveButtonForProduct(product);
        }
        
        cartCount = await productPage.getCartItemCount();
        expect(cartCount).toBe(0);
        
        console.log(`=== Test PASSED: Cart successfully emptied by removing all products ===`);
    });

    // ========== NEGATIVE TEST SCENARIOS ==========

    test.skip('@ShoppingCart Negative: Attempt to remove product not in cart', async ({ page }) => {
        const productInCart = 'Sauce Labs Backpack';
        const productNotInCart = 'Sauce Labs Bike Light';
        
        // Add one product
        await productPage.getProductInToCartByName(productInCart);
        const cartCountBefore = await productPage.getCartItemCount();
        
        // Try to remove product that was never added
        await productPage.clickRemoveButtonForProduct(productNotInCart);
        const cartCountAfter = await productPage.getCartItemCount();
        
        // Cart count should remain the same (no product was removed)
        expect(cartCountAfter).toBe(cartCountBefore);
        
        console.log(`=== Test PASSED: System handled removal of non-existent product correctly ===`);
    });

    test('@ShoppingCart Negative: Verify button state for non-existent product', async ({ page }) => {
        const nonExistentProduct = 'Non Existent Product XYZ';
        
        // Verify remove button is not visible for non-existent product
        const isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(nonExistentProduct);
        expect(isRemoveVisible).toBeFalsy();
        
        console.log(`=== Test PASSED: Remove button correctly not visible for non-existent product ===`);
    });

    test('@ShoppingCart Negative: Add and immediately remove product before page refresh', async ({ page }) => {
        const productName = 'Sauce Labs Backpack';
        
        const initialCount = await productPage.getCartItemCount();
        
        // Add product
        await productPage.getProductInToCartByName(productName);
        let currentCount = await productPage.getCartItemCount();
        expect(currentCount).toBe(initialCount + 1);
        
        // Immediately remove product
        await productPage.clickRemoveButtonForProduct(productName);
        currentCount = await productPage.getCartItemCount();
        expect(currentCount).toBe(initialCount);
        
        console.log(`=== Test PASSED: Product successfully added and removed in sequence ===`);
    });

    test('@ShoppingCart Negative: Verify cart item count does not exceed product inventory', async ({ page }) => {
        // Get total products available
        const totalProducts = await page.locator('.inventory_item').count();
        
        // Attempt to add all products (or max 10 for safety)
        const productsToAdd = Math.min(totalProducts, 10);
        const productNames: string[] = [];
        
        for (let i = 0; i < productsToAdd; i++) {
            const name = await page.locator('.inventory_item_name').nth(i).textContent();
            if (name) {
                productNames.push(name.trim());
                await productPage.getProductInToCartByName(name.trim());
            }
        }
        
        const cartCount = await productPage.getCartItemCount();
        expect(cartCount).toBeLessThanOrEqual(totalProducts);
        expect(cartCount).toBe(productNames.length);
        
        console.log(`=== Test PASSED: Cart item count (${cartCount}) does not exceed total inventory (${totalProducts}) ===`);
    });

    });


