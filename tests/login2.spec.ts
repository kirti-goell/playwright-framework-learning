import {test,expect} from '@playwright/test';

test('Valid Login' , async ({page})=>{

    // step1 : open login page
    await page.goto('https://the-internet.herokuapp.com/login');
    await expect (page).toHaveURL('https://the-internet.herokuapp.com/login');

    // step2 : enter valid username
    await page.getByLabel('username').fill('tomsmith');

    // step3 : enter valid password
    await page.getByLabel('password').fill('SuperSecretPassword!');

    // step4 : press login button
    await page.getByRole('button',{name:'Login'}).click();

    // step5 : verify success msg
    await expect (page.getByText('You logged into a secure area!')).toBeVisible();

    // step5 : logout button is visible, verify
    await expect (page.getByRole('link',{name:'Logout'})).toBeVisible(); // logout is not button , its link so

    // step7 : click logout button
    await page.getByRole('link',{name:'Logout'}).click();

    //step8: now you are on login screen , verify
    await expect (page.getByRole('button',{name:'Login'})).toBeVisible();

    // step9: After logout, verify URL too
    await expect (page).toHaveURL('https://the-internet.herokuapp.com/login');

});

test('Invalid Username',async ({page})=>{

    // step1 : open login page
    await page.goto('https://the-internet.herokuapp.com/login');

    // step2 : verify page
    await expect (page).toHaveURL('https://the-internet.herokuapp.com/login');

    // step3 : enter invalid username
    await page.getByLabel('username').fill('abc');

    // step3 : enter valid password
    await page.getByLabel('password').fill('SuperSecretPassword!');

    // step4 : press login button
    await page.getByRole('button',{name:'Login'}).click();

    // step5 : verify error msg 
    // await expect (page.getByText('Your username is invalid!')).toBeVisible();
    //When a unique ID is available, prefer locator('#id') with toContainText() over getByText() for error message verification.
    await expect (page.locator('#flash-messages')).toContainText('Your username is invalid!');

    // step6 : verify ,you should be on the same page
    await expect (page).toHaveURL('https://the-internet.herokuapp.com/login');

    // step7 : logout button should not visible
    await expect(page.getByRole('link', { name: 'Logout' })).not.toBeVisible();

});
