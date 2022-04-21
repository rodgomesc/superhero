const {defaults} = require('jest-config');

module.exports = {
  preset: 'react-native',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  testMatch: ['<rootDir>/**/*tests.{ts,tsx}'],
  transformIgnorePatterns: [
    '/node_modules/(?!(@react-native|react-native)).*/',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
};
