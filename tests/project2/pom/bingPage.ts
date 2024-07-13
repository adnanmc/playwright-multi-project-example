// project1/pom/bingPage.ts
import { Page } from 'playwright';

export class BingPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToBing() {
        await this.page.goto('https://www.bing.com');
        await this.page.waitForTimeout(5000);
    }
}
