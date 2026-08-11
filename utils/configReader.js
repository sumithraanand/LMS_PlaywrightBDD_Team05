import fs from 'fs';
import path from 'path';

const configPath = path.resolve(process.cwd(), 'config.json');

const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export default config;
