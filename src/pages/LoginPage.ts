import {Page} from "@playwright/test";
export default class LoginPage{

    private readonly userNameInput=('#user-name');
    private readonly passwordInput=('#password');
    private readonly loginButton=('#login-button');
    private readonly errorMessage=  ('[data-test="error"]');
    private readonly appLogo=  ('.login_logo');

    constructor(private page:Page){

    }

    async navigateToLoginPage(){
        await this.page.goto("/");
    }

    async enterUserName(username:string){

        await this.page.locator(this.userNameInput).fill(username);

    }

    async enterPassword(password:string){

        await this.page.locator(this.passwordInput).fill(password);

    }

    async loginValidCredintials(username:string,password:string){
        
           await this.navigateToLoginPage();
           await this.enterUserName(username);
           await this.enterPassword(password);
           await this.clickLoginButton();

    }

     async clickLoginButton(){
        console.log("=== Starting login process ===");
        await this.page
        .locator(this.loginButton)
        .click()
        .catch((error) =>{
            console.error(`Error clicking on login button :${error}`)
            throw error; //rethrow error if needed 
        });

        await this.page.waitForLoadState('networkidle');
        console.log("Page loaded successfully after login");
    }

        async getErrorMessage(){
        return await this.page.locator(this.errorMessage).textContent();
    }

    async isAppLogoVisible(){
        return await this.page.locator(this.appLogo).isVisible();
    }
     



}