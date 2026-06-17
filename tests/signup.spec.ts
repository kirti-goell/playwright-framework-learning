import { test, expect } from '@playwright/test';

test('Valid User Signup and Account Creation', async ({ page }) => {

    // ======================
    // STEP 1: OPEN SITE
    // ======================
    await page.goto('https://automationexercise.com/login');

    await expect(page).toHaveURL('https://automationexercise.com/login');

    // ======================
    // STEP 2: SIGNUP
    // ======================
    await page.locator('[data-qa="signup-name"]').fill('kirti goel');

    const mail = `kirti${Date.now()}@test.com`;

    await page.locator('[data-qa="signup-email"]').fill(mail);

    await page.getByRole('button', { name: 'Signup' }).click();

    // ======================
    // STEP 3: VERIFY NAVIGATION
    // ======================
    await expect(
        page.getByText('ENTER ACCOUNT INFORMATION')
    ).toBeVisible();

    // ======================
    // STEP 4: TITLE + PASSWORD
    // ======================
    await page.getByLabel('Mr.').check();

    await page.locator('#password').fill('1234@Kg');

    // ======================
    // STEP 5: DOB
    // ======================
    await page.locator('#days').selectOption('2');
    await page.locator('#months').selectOption('2');
    await page.locator('#years').selectOption('2005');

    // ======================
    // STEP 6: CHECKBOXES
    // ======================
    await page.locator('#newsletter').check();

    await page.locator('#optin').check();

    await expect(page.locator('#newsletter')).toBeChecked();
    await expect(page.locator('#optin')).toBeChecked();

    // ======================
    // STEP 7: ADDRESS INFO
    // ======================
    await page.locator('[data-qa="first_name"]').fill('kirti');

    await page.locator('[data-qa="last_name"]').fill('goel');

    await page.locator('[data-qa="company"]').fill('Appreciate');

    await page.locator('[data-qa="address"]').fill('Paonta Sahib, HP');

    await page.locator('[data-qa="address2"]').fill('Noida, UP');

    await page.locator('#country').selectOption('India');

    await page.locator('[data-qa="state"]').fill('Himachal Pradesh');

    await page.locator('[data-qa="city"]').fill('Paonta Sahib');

    await page.locator('[data-qa="zipcode"]').fill('173021');

    await page.locator('[data-qa="mobile_number"]').fill('9999900000');

    // ======================
    // STEP 8: CREATE ACCOUNT
    // ======================
    await page.getByRole('button', { name: 'Create Account' }).click();

    // ======================
    // STEP 9: VERIFY SUCCESS
    // ======================
    await expect(
        page.getByText('ACCOUNT CREATED!')
    ).toBeVisible();

    await page.getByRole('link', { name: 'Continue' }).click();

});