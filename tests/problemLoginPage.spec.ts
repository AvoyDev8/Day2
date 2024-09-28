import { test, expect, Page } from "@playwright/test"
import { SupportPage } from "../pageObjects/supportPage"
import { generateRandomString} from "../genericMethod/randomText"
const data = require("../jsonData/login.json")


test.describe('Problem login page test', () => {

    let supportPage: SupportPage;

    test.beforeEach(async ({ page }) => {
        await page.goto("https://cqc-fe-uat.cqportal.com/frontend-app/login/cqcuatqa");
        supportPage = new SupportPage(page);
    })
    test('should click on the problem login btn', async ({ page }) => {
        await supportPage.clickProbLoginBtn();
        expect(await page.isVisible('//h4[@class="head-title"]')).toBe(true);

        await supportPage.fillName(data.name);
        expect(await supportPage.fullName.inputValue()).toBe(data.name);

        await supportPage.fillCompanyName(data.company);

        await supportPage.fillPhone(data.phone);

        await supportPage.fillEmail(generateRandomString(7)+data.email);

        await supportPage.fillMsg(data.msg);

        await supportPage.clickSubmitBtn();
    })
})