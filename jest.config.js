export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  global:{window:{location:{}}},
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  moduleFileExtensions: ['ts', 'tsx', 'js'],
};
