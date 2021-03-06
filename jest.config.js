// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {

  roots: ['<rootDir>/__test__'],

  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**'],
  coverageDirectory: 'coverage',

  testEnvironment: 'node',

  preset: '@shelf/jest-mongodb',

  transform: {
    '.+\\.ts$': 'ts-jest'
  }

}
