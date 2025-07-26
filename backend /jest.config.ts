import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/services', '<rootDir>/routes', '<rootDir>/utils','<rootDir>/test'], // 
  moduleFileExtensions: ['ts', 'js', 'json'],
//   testMatch: ['**/__tests__/**/*.test.ts'], // Match test files in __tests__ folders
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};

export default config;


