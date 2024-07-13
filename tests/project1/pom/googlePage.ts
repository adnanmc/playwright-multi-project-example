// project1/pom/googlePage.ts
import { Page } from 'playwright';

export class GooglePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToGoogle() {
        await this.page.goto('https://www.google.com');
        await this.page.waitForTimeout(5000);
    }
}
