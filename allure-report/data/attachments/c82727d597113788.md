# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shoppingcartTest.spec.ts >> @ShoppingCart Shopping Cart Tests >> @ShoppingCart Negative: Attempt to remove product not in cart
- Location: src\tests\shoppingcartTest.spec.ts:195:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: 2
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - generic [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e11]: Swag Labs
        - generic [ref=e14]: "2"
      - generic [ref=e15]:
        - generic [ref=e16]: Products
        - generic [ref=e18] [cursor=pointer]:
          - generic [ref=e19]: Name (A to Z)
          - combobox [ref=e20]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - generic [ref=e24]:
      - generic [ref=e25]:
        - link "Sauce Labs Backpack" [ref=e27] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Backpack" [ref=e28]
        - generic [ref=e29]:
          - generic [ref=e30]:
            - link "Sauce Labs Backpack" [ref=e31] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e32]: Sauce Labs Backpack
            - generic [ref=e33]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
          - generic [ref=e34]:
            - generic [ref=e35]: $29.99
            - button "Remove" [ref=e36] [cursor=pointer]
      - generic [ref=e37]:
        - link "Sauce Labs Bike Light" [ref=e39] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bike Light" [ref=e40]
        - generic [ref=e41]:
          - generic [ref=e42]:
            - link "Sauce Labs Bike Light" [ref=e43] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e44]: Sauce Labs Bike Light
            - generic [ref=e45]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
          - generic [ref=e46]:
            - generic [ref=e47]: $9.99
            - button "Remove" [ref=e48] [cursor=pointer]
      - generic [ref=e49]:
        - link "Sauce Labs Bolt T-Shirt" [ref=e51] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Bolt T-Shirt" [ref=e52]
        - generic [ref=e53]:
          - generic [ref=e54]:
            - link "Sauce Labs Bolt T-Shirt" [ref=e55] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e56]: Sauce Labs Bolt T-Shirt
            - generic [ref=e57]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
          - generic [ref=e58]:
            - generic [ref=e59]: $15.99
            - button "Add to cart" [ref=e60] [cursor=pointer]
      - generic [ref=e61]:
        - link "Sauce Labs Fleece Jacket" [ref=e63] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Fleece Jacket" [ref=e64]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - link "Sauce Labs Fleece Jacket" [ref=e67] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e68]: Sauce Labs Fleece Jacket
            - generic [ref=e69]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
          - generic [ref=e70]:
            - generic [ref=e71]: $49.99
            - button "Add to cart" [ref=e72] [cursor=pointer]
      - generic [ref=e73]:
        - link "Sauce Labs Onesie" [ref=e75] [cursor=pointer]:
          - /url: "#"
          - img "Sauce Labs Onesie" [ref=e76]
        - generic [ref=e77]:
          - generic [ref=e78]:
            - link "Sauce Labs Onesie" [ref=e79] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e80]: Sauce Labs Onesie
            - generic [ref=e81]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
          - generic [ref=e82]:
            - generic [ref=e83]: $7.99
            - button "Add to cart" [ref=e84] [cursor=pointer]
      - generic [ref=e85]:
        - link "Test.allTheThings() T-Shirt (Red)" [ref=e87] [cursor=pointer]:
          - /url: "#"
          - img "Test.allTheThings() T-Shirt (Red)" [ref=e88]
        - generic [ref=e89]:
          - generic [ref=e90]:
            - link "Test.allTheThings() T-Shirt (Red)" [ref=e91] [cursor=pointer]:
              - /url: "#"
              - generic [ref=e92]: Test.allTheThings() T-Shirt (Red)
            - generic [ref=e93]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
          - generic [ref=e94]:
            - generic [ref=e95]: $15.99
            - button "Add to cart" [ref=e96] [cursor=pointer]
  - contentinfo [ref=e97]:
    - list [ref=e98]:
      - listitem [ref=e99]:
        - link "Twitter" [ref=e100] [cursor=pointer]:
          - /url: https://twitter.com/saucelabs
      - listitem [ref=e101]:
        - link "Facebook" [ref=e102] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e103]:
        - link "LinkedIn" [ref=e104] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e105]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  108 |         isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(productName);
  109 |         expect(isRemoveVisible).toBeFalsy();
  110 |         
  111 |         console.log(`=== Test PASSED: Button correctly changed from "Remove" back to "Add to cart" ===`);
  112 |     });
  113 | 
  114 |     test('@ShoppingCart Cart persists after page refresh', async ({ page }) => {
  115 |         const productName = 'Sauce Labs Backpack';
  116 |         
  117 |         // Add product to cart
  118 |         await productPage.getProductInToCartByName(productName);
  119 |         const cartCountBefore = await productPage.getCartItemCount();
  120 |         expect(cartCountBefore).toBeGreaterThan(0);
  121 |         
  122 |         // Refresh page
  123 |         await page.reload();
  124 |         
  125 |         // Verify product is still in cart
  126 |         const cartCountAfter = await productPage.getCartItemCount();
  127 |         expect(cartCountAfter).toBe(cartCountBefore);
  128 |         const isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(productName);
  129 |         expect(isRemoveVisible).toBeTruthy();
  130 |         
  131 |         console.log(`=== Test PASSED: Cart persisted correctly after page refresh ===`);
  132 |     });
  133 | 
  134 |     // ========== EDGE CASE TEST SCENARIOS ==========
  135 | 
  136 |     test('@ShoppingCart Edge Case: Add same product twice', async ({ page }) => {
  137 |         const productName = 'Sauce Labs Backpack';
  138 |         
  139 |         // Try to add the same product again
  140 |         await productPage.getProductInToCartByName(productName);
  141 |         const cartCountAfterFirst = await productPage.getCartItemCount();
  142 |         expect(cartCountAfterFirst).toBe(1);
  143 |         
  144 |         // Button should be "Remove", clicking again should remove it
  145 |         const isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(productName);
  146 |         expect(isRemoveVisible).toBeTruthy();
  147 |         
  148 |         console.log(`=== Test PASSED: Edge case - same product cannot be added twice (system prevents duplicate addition) ===`);
  149 |     });
  150 | 
  151 |     test('@ShoppingCart Edge Case: Add product when cart already has maximum items', async ({ page }) => {
  152 |         // Add multiple products
  153 |         const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light', 'Sauce Labs Bolt T-Shirt', 'Sauce Labs Fleece Jacket', 'Sauce Labs Onesie'];
  154 |         
  155 |         for (const product of products) {
  156 |             await productPage.getProductInToCartByName(product);
  157 |         }
  158 |         
  159 |         const cartCount = await productPage.getCartItemCount();
  160 |         expect(cartCount).toBe(5);
  161 |         
  162 |         // Verify all products are in cart
  163 |         for (const product of products) {
  164 |             const isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(product);
  165 |             expect(isRemoveVisible).toBeTruthy();
  166 |         }
  167 |         
  168 |         console.log(`=== Test PASSED: All 5 products added to cart successfully ===`);
  169 |     });
  170 | 
  171 |     test('@ShoppingCart Edge Case: Empty cart by removing all products', async ({ page }) => {
  172 |         const products = ['Sauce Labs Backpack', 'Sauce Labs Bike Light'];
  173 |         
  174 |         // Add products
  175 |         for (const product of products) {
  176 |             await productPage.getProductInToCartByName(product);
  177 |         }
  178 |         
  179 |         let cartCount = await productPage.getCartItemCount();
  180 |         expect(cartCount).toBe(2);
  181 |         
  182 |         // Remove all products
  183 |         for (const product of products) {
  184 |             await productPage.clickRemoveButtonForProduct(product);
  185 |         }
  186 |         
  187 |         cartCount = await productPage.getCartItemCount();
  188 |         expect(cartCount).toBe(0);
  189 |         
  190 |         console.log(`=== Test PASSED: Cart successfully emptied by removing all products ===`);
  191 |     });
  192 | 
  193 |     // ========== NEGATIVE TEST SCENARIOS ==========
  194 | 
  195 |     test('@ShoppingCart Negative: Attempt to remove product not in cart', async ({ page }) => {
  196 |         const productInCart = 'Sauce Labs Backpack';
  197 |         const productNotInCart = 'Sauce Labs Bike Light';
  198 |         
  199 |         // Add one product
  200 |         await productPage.getProductInToCartByName(productInCart);
  201 |         const cartCountBefore = await productPage.getCartItemCount();
  202 |         
  203 |         // Try to remove product that was never added
  204 |         await productPage.clickRemoveButtonForProduct(productNotInCart);
  205 |         const cartCountAfter = await productPage.getCartItemCount();
  206 |         
  207 |         // Cart count should remain the same (no product was removed)
> 208 |         expect(cartCountAfter).toBe(cartCountBefore);
      |                                ^ Error: expect(received).toBe(expected) // Object.is equality
  209 |         
  210 |         console.log(`=== Test PASSED: System handled removal of non-existent product correctly ===`);
  211 |     });
  212 | 
  213 |     test('@ShoppingCart Negative: Verify button state for non-existent product', async ({ page }) => {
  214 |         const nonExistentProduct = 'Non Existent Product XYZ';
  215 |         
  216 |         // Verify remove button is not visible for non-existent product
  217 |         const isRemoveVisible = await productPage.isRemoveButtonVisibleForProduct(nonExistentProduct);
  218 |         expect(isRemoveVisible).toBeFalsy();
  219 |         
  220 |         console.log(`=== Test PASSED: Remove button correctly not visible for non-existent product ===`);
  221 |     });
  222 | 
  223 |     test('@ShoppingCart Negative: Add and immediately remove product before page refresh', async ({ page }) => {
  224 |         const productName = 'Sauce Labs Backpack';
  225 |         
  226 |         const initialCount = await productPage.getCartItemCount();
  227 |         
  228 |         // Add product
  229 |         await productPage.getProductInToCartByName(productName);
  230 |         let currentCount = await productPage.getCartItemCount();
  231 |         expect(currentCount).toBe(initialCount + 1);
  232 |         
  233 |         // Immediately remove product
  234 |         await productPage.clickRemoveButtonForProduct(productName);
  235 |         currentCount = await productPage.getCartItemCount();
  236 |         expect(currentCount).toBe(initialCount);
  237 |         
  238 |         console.log(`=== Test PASSED: Product successfully added and removed in sequence ===`);
  239 |     });
  240 | 
  241 |     test('@ShoppingCart Negative: Verify cart item count does not exceed product inventory', async ({ page }) => {
  242 |         // Get total products available
  243 |         const totalProducts = await page.locator('.inventory_item').count();
  244 |         
  245 |         // Attempt to add all products (or max 10 for safety)
  246 |         const productsToAdd = Math.min(totalProducts, 10);
  247 |         const productNames: string[] = [];
  248 |         
  249 |         for (let i = 0; i < productsToAdd; i++) {
  250 |             const name = await page.locator('.inventory_item_name').nth(i).textContent();
  251 |             if (name) {
  252 |                 productNames.push(name.trim());
  253 |                 await productPage.getProductInToCartByName(name.trim());
  254 |             }
  255 |         }
  256 |         
  257 |         const cartCount = await productPage.getCartItemCount();
  258 |         expect(cartCount).toBeLessThanOrEqual(totalProducts);
  259 |         expect(cartCount).toBe(productNames.length);
  260 |         
  261 |         console.log(`=== Test PASSED: Cart item count (${cartCount}) does not exceed total inventory (${totalProducts}) ===`);
  262 |     });
  263 | 
  264 |     });
  265 | 
  266 | 
  267 | 
```