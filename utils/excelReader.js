import XLSX from 'xlsx';
import path from 'path';

export function getTestData(testCaseType) {

    const filePath = path.resolve(
        process.cwd(),
        'testdata',
        'TestData.xlsx' 
    );

    console.log(filePath);
    const workbook = XLSX.readFile(filePath);
  
    const sheet = workbook.Sheets['Login'];

    if (!sheet) {
        throw new Error('Excel sheet "Login" was not found.');
    }

    const data = XLSX.utils.sheet_to_json(sheet);

    const testData = data.find(
        row => row.testCaseType?.trim() === testCaseType.trim()
    );

    if (!testData) {
        throw new Error(
            `Test data not found for test case: ${testCaseType}`
        );
    }

    return testData;
}