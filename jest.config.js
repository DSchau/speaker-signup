module.exports = {
  globals: {
    graphql: () => true,
  },
  moduleNameMapper: {
    '\\.(css)$': '<rootDir>/__mocks__/style-mock.js',
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  testPathIgnorePatterns: ['/node_modules/', '/.cache/'],
};
