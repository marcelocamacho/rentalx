
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig')
//import {pathsToModuleNameMapper} from 'ts-jest/utils';
//import {compilerOptions} from 'tsconfig.json'
module.exports = {
  bail: true,
  clearMocks: true,
  coverageProvider: "v8",
  preset: "ts-jest",
  testMatch: [
    "**/*.spec.ts"
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/src" }),

};
