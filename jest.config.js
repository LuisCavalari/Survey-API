// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  roots: ['<rootDir>/__test__'],

  collectCoverageFrom: ['<rootDir>/__test__/**/*.ts'],

  coverageDirectory: 'coverage',

  testEnvironment: 'node',

  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}