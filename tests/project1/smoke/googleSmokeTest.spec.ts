// project1/smoke/googleSmokeTest.spec.ts
import { test, expect } from '@playwright/test';
import { GooglePage } from '../pom/googlePage';

test('Google smoke test', async ({ page }, testInfo) => {
    const googlePage = new GooglePage(page);
    await googlePage.navigateToGoogle();
    console.log(testInfo.project.metadata.env);
    // Add assertions here to check if Google homepage loads correctly
});
