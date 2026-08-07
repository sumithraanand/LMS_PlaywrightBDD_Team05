import XLSX from "xlsx";
import fs from "fs";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path: path.resolve(process.cwd(), ".env"),
});

class ExcelReader {

    constructor() {
        this.filePath = process.env.EXCEL_PATH;

        if (!this.filePath) {
            throw new Error("EXCEL_PATH is not configured in the .env file.");
        }

        if (!fs.existsSync(this.filePath)) {
            throw new Error(`Excel file not found: ${this.filePath}`);
        }

        // Read workbook only once
        this.workbook = XLSX.readFile(this.filePath);
    }

    // Returns all rows from a sheet
    getSheetData(sheetName) {

        const sheet = this.workbook.Sheets[sheetName];

        if (!sheet) {
            throw new Error(`Sheet "${sheetName}" not found.`);
        }

        return XLSX.utils.sheet_to_json(sheet);
    }

    // Returns a single row by TestCaseID
    getRowByTestCase(sheetName, TestScenarioID) {

        const data = this.getSheetData(sheetName);

        return data.find(
            row =>
                row.TestCaseID?.trim().toLowerCase() ===
                testCaseID.trim().toLowerCase()
        );
    }

}

export default ExcelReader;