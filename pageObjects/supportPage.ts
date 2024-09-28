import { Locator, Page } from "@playwright/test";


export class SupportPage {
    private page: Page;
    readonly problemLoginBtn: Locator;
    readonly fullName: Locator;
    readonly email: Locator;
    readonly company: Locator;
    readonly phone: Locator;
    readonly msg: Locator;
    readonly submit: Locator;


    constructor(page: Page) {

        this.page = page;
        this.problemLoginBtn = this.page.getByRole('button', { name: ' Problems during login? ' });
        this.fullName = this.page.getByPlaceholder('Your full name...');
        this.company = this.page.getByPlaceholder('Your company name...');
        this.phone = this.page.getByPlaceholder('Your phone number...');
        this.email = this.page.getByPlaceholder('Your email address...');
        this.msg = this.page.getByPlaceholder('Your message...');
        this.submit = this.page.locator("//span[normalize-space()='Submit']");
    }

    public async clickProbLoginBtn() {
        await this.problemLoginBtn.click()
    }
    public async fillName(name: string) {
        await this.fullName.fill(name);
    }
    public async fillCompanyName(companyName: string) {
        await this.company.fill(companyName);
    }
    public async fillPhone(phoneNum: string) {
        await this.phone.fill(phoneNum);
    }
    public async fillEmail(eml: string) {
        await this.email.fill(eml);
    }
    public async fillMsg(message: string) {
        await this.msg.fill(message);
    }
    public async clickSubmitBtn() {
        await this.submit.click();
    }

}