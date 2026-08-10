import { defineBddConfig } from 'playwright-bdd';

export const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: 'stepDefinitions/**/*.js',
  outputDir: '.features-gen'
});
