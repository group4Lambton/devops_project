module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: [],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    moduleFileExtensions: ['js', 'jsx'],
  },
  transformIgnorePatterns: ['/node_modules/(?!@firebase|firebase)'],
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
};
