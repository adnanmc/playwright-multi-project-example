// project1/smoke/googleSmokeTest.spec.ts
import { test, expect } from '@playwright/test';
import { GooglePage } from '../pom/googlePage';

test('Google smoke test', async ({ page }) => {
    const googlePage = new GooglePage(page);
    await googlePage.navigateToGoogle();
    // Add assertions here to check if Google homepage loads correctly
});
