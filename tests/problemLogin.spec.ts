import {test,expect} from "@playwright/test"

test("verify the problem page login",async({page})=>{
    await page.goto("https://cqc-fe-uat.cqportal.com/frontend-app/login/cqcuatqa");
    await page.getByRole('button',{name: ' Problems during login? '}).click();
    await page.getByPlaceholder('Your full name...').fill('Test akr');
    await page.getByPlaceholder('Your company name...').fill('uipl');
    await page.getByPlaceholder('Your phone number...').fill('4567895869');
    await page.getByPlaceholder('Your email address...').fill('test@gg.com');
    await page.getByPlaceholder('Your message...').fill('my test desc',{timeout:4000});
    await page.locator("//span[normalize-space()='Submit']").click();
    await page.waitForTimeout(5000);
})