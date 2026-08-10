import XLSX from 'xlsx';

export function readSheet(filePath, sheetName = 'Program') {
  const workbook = XLSX.readFile(filePath);
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) throw new Error(`Worksheet '${sheetName}' was not found in ${filePath}`);
  return XLSX.utils.sheet_to_json(sheet, { defval: '' });
}

export function rowByKey(filePath, key) {
  const row = readSheet(filePath).find(item => item.Key === key);
  if (!row) throw new Error(`Test-data key '${key}' was not found.`);
  return row;
}
