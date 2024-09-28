import {Locator, Page} from "@playwright/test"

export class LoginPage{

    readonly samlBtn:Locator = this.page.getByRole("button",{name:' saml '});
    readonly b2cBtn:Locator = this.page.getByRole("button",{name:' b2c '});
    readonly problemLoginBtn:Locator = this.page.getByRole('button', { name: ' Problems during login? ' });
    readonly email = this.page.getByPlaceholder('User Email Address');
    readonly continueBtn:Locator = this.page.getByRole("button",{name:'Continue'});

    constructor(private page:Page){}

    public async clickSamlBtn(){
        this.samlBtn.click();
    }
    public async clickB2cBtn(){
        this.b2cBtn.click();
    }
    public async clickPrblmBtn(){
        this.problemLoginBtn.click();
    }
    public async inputEmail(eml:string){
        this.email.fill(eml);
    }
}