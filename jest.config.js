const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['<rootDir>/src/test.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/'
  }),
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './test-results/reports/xml-reports/jest',
        outputName: new Date().getTime() + '.xml',
        classNameTemplate: '{classname}',
        titleTemplate: '{title}',
      },
    ],
  ]
};
