// project2/smoke/bingSmokeTest.spec.ts
import { test, expect } from '@playwright/test';
import { BingPage } from '../pom/bingPage';

test('Bing smoke test', async ({ page }) => {
    const googlePage = new BingPage(page);
    await googlePage.navigateToBing();
    // Add assertions here to check if Bing homepage loads correctly
});
