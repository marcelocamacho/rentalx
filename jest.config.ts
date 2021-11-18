//const { pathsToModuleNameMapper } = require('ts-jest')
//const { compilerOptions } = require('./tsconfig')
import {pathsToModuleNameMapper} from 'ts-jest/utils';
import {compilerOptions} from './tsconfig.json'
>>>>>>> 1da3800d7cb65ad4848b8938918bc12f45fa2697:jest.config.ts
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
