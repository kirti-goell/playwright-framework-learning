import {test,expect} from '@playwright/test';
// array of objects
const users = [
    {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    {
        username: 'problem_user',
        password: 'secret_sauce'
    },
    {
        username: 'error_user',
        password: 'secret_sauce'
    }
];

for(const user of users){
    test(`Login with ${user.username}`,async({page})=>{

        await page.goto('https://www.saucedemo.com');
        await expect (page).toHaveURL('https://www.saucedemo.com');

        await page.locator('#user-name')
            .fill(user.username);

        await page.locator('#password')
            .fill(user.password);

        await page.locator('#login-button')
            .click();
        await expect (page.locator('[data-test="title"]')).toBeVisible();

    });
}