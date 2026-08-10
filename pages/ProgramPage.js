import { expect } from '@playwright/test';

export class ProgramPage {
  constructor(page) {
    this.page = page;
    this.programMenu = this.page.getByText('Program', { exact: true }).first();
    this.addProgramMenu = this.page.getByText('Add New Program', { exact: true });
    this.heading = page.getByText('Manage Program', { exact: true });
    this.search = page.locator('#filterGlobal');
    this.table = page.locator('p-table').first();
    this.emptyMessage = this.table.locator('tbody tr.p-datatable-emptymessage, tbody td:has-text("No records found")');
    this.rows = this.table.locator('tbody > tr').filter({hasNot: page.getByText(/no records found|no program found/i),});
    this.headerCheckbox = this.table.locator('thead p-tableheadercheckbox');
    this.rowCheckboxes = this.table.locator('tbody p-tablecheckbox');
    this.sortIcons = this.table.locator('th p-sorticon');
    this.multiDelete = page.locator('mat-card-title button.p-button-danger').first();
    this.dialog = page.getByRole('dialog', { name: 'Program Details' });
    this.nameInput = page.locator('#programName');
    this.descriptionInput = page.locator('#programDescription');
    this.activeStatus = this.dialog.locator('p-radiobutton').nth(0);
    this.inactiveStatus = this.dialog.locator('p-radiobutton').nth(1);
    this.saveButton = page.locator('#saveProgram');
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
    this.dialogCloseButton = this.dialog.locator('.p-dialog-header-close, button').filter({ has: page.locator('.pi-times') }).first();
    this.confirmDialog = page.locator('[role="alertdialog"], .p-confirm-dialog').filter({ hasText: /confirm|delete/i }).first();
    this.confirmYesButton = this.confirmDialog.getByRole('button', { name: 'Yes', exact: true });
    this.confirmNoButton = this.confirmDialog.getByRole('button', { name: 'No', exact: true });
    this.confirmCloseButton = this.confirmDialog.locator('.p-dialog-header-close, button').filter({ has: page.locator('.pi-times') }).first();
    this.toast = page.locator('.p-toast-message');
    this.footer = page.getByText(/In total there are \d+ programs\./i);
    this.entryText = page.getByText(/Showing \d+ to \d+ of \d+ entries/i);
    this.zeroEntries = page.getByText(/Showing 0 to 0 of 0 entries/i);
    this.nameRequired = page.getByText('Program name is required.');
    this.statusRequired = page.getByText('Status is required.');
    this.nameFormatError = page.getByText(/start with an alphabet.*min 4 char/i);
  }

  async open() {
    const currentUrl = this.page.url();
    const programPageIsOpen = currentUrl.includes('/program');

    if (programPageIsOpen === false) {
      await this.programMenu.waitFor({ state: 'visible' });
      await this.programMenu.click();
    }

    await expect(this.page).toHaveURL(/\/program/);
    await expect(this.heading).toBeVisible();
  }

  async openAddDialog() {
    const addProgramIsVisible = await this.addProgramMenu.isVisible();

    if (addProgramIsVisible === false) {
      await this.programMenu.click();
    }

    await this.addProgramMenu.waitFor({ state: 'visible' });
    await this.addProgramMenu.click();
    await expect(this.dialog).toBeVisible();
  }

  async expectPageElement(element) {
    const elements = {
      'Add New Program submenu': this.addProgramMenu,
      'Manage Program heading': this.heading,
      'Search box': this.search,
      'Program Details dialog': this.dialog,
    };
    if (!elements[element]) {
      throw new Error('Program page element is not available');
    }
    await expect(elements[element]).toBeVisible();
  }

  async isHeadingLeftAligned() {
    const headingBox = await this.heading.boundingBox();
    const cardBox = await this.page.locator('mat-card').first().boundingBox();
    return Boolean(headingBox && cardBox && headingBox.x - cardBox.x < 60);
  }

  async expectColumnHeaders(headers) {
    for (const header of headers) {
      await expect(this.table.locator('th').filter({ hasText: header }).first()).toBeVisible();
    }
  }

  async expectAllRowsUnchecked() {
    const count = await this.rowCheckboxes.count();
    for (let index = 0; index < count; index += 1) {
      await expect(this.rowCheckboxes.nth(index).locator('input')).not.toBeChecked();
    }
  }

  async expectRowActions() {
    const count = await this.rows.count();
    for (let index = 0; index < count; index += 1) {
      await expect(this.rows.nth(index).locator('#editProgram')).toBeVisible();
      await expect(this.rows.nth(index).locator('#deleteProgram')).toBeVisible();
    }
  }

  async expectPagination() {
    await expect(this.entryText).toBeVisible();
    for (const button of this.paginationButtons()) {
      await expect(button).toBeVisible();
    }
  }

  async expectDialogElement(element) {
    const elements = {
      'dialog title': this.dialog.getByText('Program Details', { exact: true }),
      'Name field': this.nameInput,
      'Description field': this.descriptionInput,
    };
    if (element === 'mandatory indicators') {
      await this.expectMandatoryIndicators();
      return;
    }
    if (element === 'Status radio buttons') {
      await expect(this.activeStatus).toBeVisible();
      await expect(this.inactiveStatus).toBeVisible();
      return;
    }
    if (!elements[element]) {
      throw new Error('Program dialog element is not available');
    }
    await expect(elements[element]).toBeVisible();
  }

  async expectMandatoryIndicators() {
    const requiredMarks = this.dialog.getByText('*', { exact: true });
    await expect(requiredMarks).toHaveCount(2);
  }

  async fillProgramForm(data) {
    const suppliedName =
      data.name ?? data.ProgramName ?? data.programName ?? data.Name;
    const suppliedDescription =
      data.description ??
      data.Description ??
      data.ProgramDescription ??
      data.programDescription;
    const suppliedStatus =
      data.status ?? data.Status ?? data.ProgramStatus ?? data.programStatus;

    if (suppliedName !== undefined && suppliedName !== null) {
      await this.nameInput.fill(String(suppliedName).trim());
    }

    if (suppliedDescription !== undefined && suppliedDescription !== null) {
      await this.descriptionInput.fill(String(suppliedDescription).trim());
    }

    if (suppliedStatus !== undefined && suppliedStatus !== null) {
      const status = String(suppliedStatus).trim().toLowerCase();
      if (status === 'inactive') {
        await this.inactiveStatus.click();
      } else {
        await this.activeStatus.click();
      }
    }

    return (await this.nameInput.inputValue()).trim();
  }

  async fillProgram(data) {
    return this.fillProgramForm(data);
  }
  
  async save() {
    await this.saveButton.click();
  }

  async saveProgram() {
    const responsePromise = this.page.waitForResponse(
      response =>
        response.url().includes('/api/saveprogram') &&
        response.request().method() === 'POST',
      { timeout: 15000 }
    );

    await this.saveButton.click();
    const response = await responsePromise;

    if (!response.ok()) {
      const responseBody = await response.text().catch(() => '');
      throw new Error(
        `Save Program failed: ${response.status()} ${response.statusText()} ${responseBody}`.trim()
      );
    }

    await expect(this.dialog).toBeHidden({ timeout: 10000 });
  }
  async cancel() { await this.cancelButton.click(); }
  async closeDialog() { await this.dialogCloseButton.click(); }
  async closeConfirmation() { await this.confirmCloseButton.click(); }

  async searchFor(value) {
    await this.search.fill(String(value ?? ''));
    await expect(this.search).toHaveValue(String(value ?? ''));
  }

  async expectMatchingSearchResults(query) {
    await expect(this.rows.first()).toBeVisible({ timeout: 15000 });
    const rowTexts = await this.rows.allTextContents();
    expect(rowTexts.length).toBeGreaterThan(0);
    for (const text of rowTexts) {
      expect(text.toLowerCase()).toContain(String(query).toLowerCase());
    }
  }

  async expectZeroResults() {
    await expect.poll(
      async () => this.rows.count(),
      {
        message: 'Expected the filtered Program table to contain zero records',
        timeout: 10000,
      }
    ).toBe(0);

    const emptyState = this.page.getByText(
      /no records found|no program found|showing 0 to 0 of 0 entries/i
    ).first();
    await expect(emptyState).toBeVisible({ timeout: 10000 });
  }

  rowByName(name) {
    return this.rows.filter({
      has: this.page.getByRole('gridcell', {
        name: String(name).trim(),
        exact: true,
      }),
    }).first();
  }

  async hasRowNamed(name) {
    return this.rowByName(name).isVisible().catch(() => false);
  }

  async clickEdit(name) {
    await this.closeOverlay();
    const row = this.rowByName(name);
    await expect(row).toBeVisible({ timeout: 10000 });
    await row.locator('#editProgram').click();

  await expect(this.dialog).toBeVisible();
}

 async clickDelete(programName) {
  await this.closeOverlay();

  const row = this.rowByName(programName);
  await expect(row).toBeVisible({ timeout: 10000 });

  await row.locator('#deleteProgram').click();
  await expect(this.confirmDialog).toBeVisible({ timeout: 10000 });
}

  async selectFirstRows(count) {
  await this.closeOverlay();

  const available = await this.rowCheckboxes.count();
  expect(available).toBeGreaterThanOrEqual(count);

  for (let index = 0; index < count; index += 1) {
    await this.rowCheckboxes.nth(index).click();
  }
}
 async expectRowData(data) {
  const row = this.rowByName(data.ProgramName);

  await expect(row).toBeVisible();

  if (data.Description) {
    await expect(row).toContainText(data.Description);
  }

  if (data.Status) {
    await expect(row).toContainText(data.Status);
  }
}

  async expectSelectedRows(count) {
    for (let index = 0; index < count; index += 1) {
      await expect(this.rowCheckboxes.nth(index).locator('input')).toBeChecked();
    }
  }

  async sort(columnText, direction) {
  await this.page.keyboard.press('Escape');

  const header = this.table.locator('th').filter({
    hasText: columnText
  });

  await header.click();

  if (direction === 'descending') {
    await header.click();
  }
}
  async columnValues(index) {
    const values = await this.rows.locator(`td:nth-child(${index})`).allTextContents();
    return values.map(value => value.trim()).filter(Boolean);
  }

  async visibleRowValues() {
    return this.rows.locator('td').allTextContents();
  }

async closeOverlay() {
  const overlay = this.page.locator('.cdk-overlay-backdrop.cdk-overlay-backdrop-showing' );

  if (await overlay.isVisible().catch(() => false)) {
    await overlay.click();
    await expect(overlay).toBeHidden({ timeout: 5000 });
  }
}
paginationButtons() {
  return [
    this.page.locator('.p-paginator-first'),
    this.page.locator('.p-paginator-prev'),
    this.page.locator('.p-paginator-next'),
    this.page.locator('.p-paginator-last')
  ];
}

async goToPage(action) {
  await this.closeOverlay();

  const buttons = {
    first: this.page.locator('.p-paginator-first'),
    previous: this.page.locator('.p-paginator-prev'),
    next: this.page.locator('.p-paginator-next'),
    last: this.page.locator('.p-paginator-last')
  };

  const button = buttons[action];

  if (!button) {
    throw new Error('Program page action is not available');
  }

  await expect(button).toBeVisible();
  await expect(button).toBeEnabled();
  await button.click();
}
async expectAllPaginationButtonsDisabled() {
  for (const button of this.paginationButtons()) {
    await expect(button).toBeDisabled();
  }}

async expectToast(expectedMessage = /Successful|Created|Updated|Deleted/i) {
  await expect(this.toast).toBeVisible({ timeout: 10000 });

  const message = await this.toast.textContent();

  if (/Failed|Bad Request/i.test(message ?? '')) {
    throw new Error(`Program operation failed: ${message}`);
  }

  const normalizedMessage = String(message ?? '')
    .replace(/Programs\b/gi, 'Program')
    .replace(/\s+/g, ' ')
    .trim();

  expect(normalizedMessage).toMatch(expectedMessage);
}

async confirmDelete() {
  await this.confirmYesButton.click();
}

async cancelDelete() {
  await this.confirmNoButton.click();
}
}