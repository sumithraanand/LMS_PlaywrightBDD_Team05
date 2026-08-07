import { expect } from "@playwright/test";

export class HomePage {
    constructor(page) {
        this.page = page;

        // Header
        this.lmsTitle = page.locator("mat-toolbar span").first();
        this.navigationItems = page.locator("mat-toolbar button");
        this.welcomeMessage = page.locator("div.top strong");
        // Dashboard Cards
        this.userCountCard = page.locator('div.value[routerlink="/user"]');
        this.staffCountCard = page.locator('div.value', { hasText: 'Staff' });
        this.batchCountCard = page.locator('div.value[routerlink="/batch"]');
        this.programCountCard = page.locator('div.value[routerlink="/program"]');
        this.manageUserHeading = page.getByText('Manage User', { exact: true });
        this.manageProgramHeading = page.getByText('Manage Program', { exact: true });
        this.manageBatchHeading = page.getByText('Manage Batch', { exact: true });
        // Dashboard
        this.barChart = page.locator('canvas[basechart]').first();

        // Staff Table
        this.staffTable = page.locator('mat-table');
        this.staffTableHeaders = page.locator('mat-header-cell');
     }
       //Header Methods
       // Page Verification
       async verifyHomePageLoaded() {
       await expect(this.lmsTitle).toBeVisible();
       }
       // LMS Title
       async verifyLMSTitle() {
          await expect(this.lmsTitle).toHaveText("LMS - Learning Management System");
          console.log(await this.lmsTitle.textContent());
        }
       async verifyLMSTitlePosition() {
          const box = await this.lmsTitle.boundingBox();
          expect(box.x).toBeLessThan(200);
        }
       // Navigation Bar
    
       async verifyNavigationText() {
          await expect(this.navigationItems).toContainText([
            "Home",
            "Program",
            "Batch",
            "Logout"
          ]);
         }

        async verifyNavigationBarPosition() {
            const box = await this.navigationItems.first().boundingBox();
            expect(box.x).toBeGreaterThan(700);
        }

        async verifyNavigationItem(index, expectedText) {
           await expect(this.navigationItems.nth(index)).toHaveText(expectedText);
        }

       // Welcome Message

        async verifyWelcomeMessage() {
            await expect(this.welcomeMessage).toBeVisible();
            await expect(this.welcomeMessage).toContainText("Welcome");
        }
       // Dashboard cards Verification methods

       async verifyUserCountCard() {
          await expect(this.userCountCard).toBeVisible();
          await expect(this.userCountCard).toContainText('User');
        }
        async verifyManageUserPage() {
            await expect(this.manageUserHeading).toBeVisible();
        }
       async verifyStaffCountCard() {
          await expect(this.staffCountCard).toBeVisible();
          await expect(this.staffCountCard).toContainText('Staff');
        }
        async verifyStaffCardNotClickable() {
           await expect(this.staffCountCard).not.toHaveAttribute('routerlink');
        }
        async verifyBatchCountCard() {
           await expect(this.batchCountCard).toBeVisible();
           await expect(this.batchCountCard).toContainText('Batches');
       }
       async verifyManageBatchPage() {
          await expect(this.manageBatchHeading).toBeVisible();
       }
       async verifyProgramCountCard() {
          await expect(this.programCountCard).toBeVisible();
          await expect(this.programCountCard).toContainText('Programs');
       }
       async verifyManageProgramPage() {
          await expect(this.manageProgramHeading).toBeVisible();
       }
       // Navigation methods
       async clickUserCountCard() {
          await this.userCountCard.click();
       }

       async clickProgramCountCard() {
          await this.programCountCard.click();
        }

       async clickBatchCountCard() {
          await this.batchCountCard.click();
        }
    
       async verifyBarChart() {
          await expect(this.barChart).toBeVisible();
       }

       // Staff table methods verification
       async verifyStaffTable() {
          await expect(this.staffTable).toBeVisible();
       }

       async verifyStaffTableHeaders() {
          await expect(this.staffTableHeaders).toContainText([
          '#',
          'First Name',
          'Last Name',
          'Phone'
         ]);
        }

}






