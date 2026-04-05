import {test,expect }from "@playwright/test"
import LoginPage from "../pages/LoginPage";

test.describe('@Login Login Page Tests',()=>{

    let  loginPage:any
    test.beforeEach(async ({page})=>{
        loginPage= new LoginPage(page);

    })

    test('@Login Sucessfull login with valid credintials',async({page})=>{
       
      await loginPage.navigateToLoginPage();
      await loginPage.enterUserName('standard_user');
      await loginPage.enterPassword('secret_sauce');
      await loginPage.clickLoginButton();
    
      await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
      console.log("=== Test PASSED: Successfully logged in and redirected to inventory page ===");

    });


    test('@Login Session persists across page refresh',async ({page})=>
{
        await test.step('Login with valid credentials', async () => {
                console.log("=== Test: Session persists across page refresh ===");
                await loginPage.loginValidCredintials('standard_user','secret_sauce');
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                console.log("Logged in successfully");
        });

        await test.step('Refresh the page', async () => {
                await page.reload();
                console.log("Page refreshed");
        });

        await test.step('Verify session persists after refresh', async () => {
                await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                console.log("=== Test PASSED: Session persists after page refresh ===");
        });
})

    test('@Login Successful login with problem_user', async ({page}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.enterUserName('problem_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLoginButton();
        
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        console.log("=== Test PASSED: Successfully logged in with problem_user ===");
    });

    test('@Login Successful login with performance_glitch_user', async ({page}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.enterUserName('performance_glitch_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLoginButton();
        
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        console.log("=== Test PASSED: Successfully logged in with performance_glitch_user ===");
    });

    test('@Login Failed login with invalid username', async ({page}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.enterUserName('invalid_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLoginButton();
        
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
        console.log("=== Test PASSED: Correct error message for invalid username ===");
    });

    test('@Login Failed login with invalid password', async ({page}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.enterUserName('standard_user');
        await loginPage.enterPassword('wrong_password');
        await loginPage.clickLoginButton();
        
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username and password do not match any user in this service');
        console.log("=== Test PASSED: Correct error message for invalid password ===");
    });

    test('@Login Failed login with empty username', async ({page}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.enterUserName('');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLoginButton();
        
        await expect(page.locator('[data-test="error"]')).toContainText('TestgEpic sadface: Username is required');
        console.log("=== Test PASSED: Correct error message for empty username ===");
    });

    test('@Login Failed login with empty password', async ({page}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.enterUserName('standard_user');
        await loginPage.enterPassword('');
        await loginPage.clickLoginButton();
        
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Password is required');
        console.log("=== Test PASSED: Correct error message for empty password ===");
    });

    test('@Login Failed login with both fields empty', async ({page}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.enterUserName('');
        await loginPage.enterPassword('');
        await loginPage.clickLoginButton();
        
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Username is required');
        console.log("=== Test PASSED: Correct error message for both fields empty ===");
    });

    test('@Login Failed login with locked_out_user', async ({page}) => {
        await loginPage.navigateToLoginPage();
        await loginPage.enterUserName('locked_out_user');
        await loginPage.enterPassword('secret_sauce');
        await loginPage.clickLoginButton();
        
        await expect(page.locator('[data-test="error"]')).toContainText('Epic sadface: Sorry, this user has been locked out.');
        console.log("=== Test PASSED: Correct error message for locked out user ===");
    });

    

});
