import {test,expect} from '@playwright/test';

test('Valid Login Page', async ({page})=>{

    // step1 : open login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect (page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

    // step2 : enter usename
    await page.getByLabel('username').fill('student');

    // step3 : enter password
    await page.getByLabel('password').fill('Password123');

    // step4 : click on submit button
    await page.getByRole('button', {name:'Submit'}).click();

    // step5 : verify that user is logged in successfully
    await expect (page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
});

test('InValid Login Page', async ({page})=>{

    // step1 : open login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect (page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

    // step2 : enter usename
    await page.getByLabel('username').fill('abc');

    // step3 : enter password
    await page.getByLabel('password').fill('Password123');

    // step4 : click on submit button
    await page.getByRole('button', {name:'Submit'}).click();

    // step5 : verify that user is logged in successfully
    await expect (page.locator('#error')).toBeVisible();
});

test('Test Login Page', async ({page})=>{

    // step1 : open login page
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await expect (page).toHaveURL('https://practicetestautomation.com/practice-test-login/');

    // step2 : enter usename
    await page.getByLabel('username').fill('abc');

    // step3 : enter password
    await page.getByLabel('password').fill('Password123');

    // step4 : click on submit button
    await page.getByRole('button', {name:'Submit'}).click();

    // step5 : verify that user is logged in successfully
    await expect (page.getByText('Congratulations student. You successfully logged in!')).toBeVisible();
});


