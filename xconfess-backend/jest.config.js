module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  setupFiles: ['<rootDir>/jest.setup.ts'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        diagnostics: false,
      },
    ],
  },
  testMatch: ['<rootDir>/src/**/*.spec.ts', '<rootDir>/test/**/*.spec.ts'],
  testPathIgnorePatterns: [
    '/node_modules/',
    '<rootDir>/xconfess-backend/',
    '<rootDir>/e2e/',
  ],
  watchPathIgnorePatterns: ['<rootDir>/xconfess-backend/'],
  modulePathIgnorePatterns: ['<rootDir>/xconfess-backend/'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@nestjs/bull$': '@nestjs/bullmq',
    '^bull$': 'bullmq',
    '^bcrypt$': 'bcryptjs',
    '^@faker-js/faker$': '<rootDir>/test/utils/faker-stub.ts',
    '^@faker-js/faker/\\.$': '<rootDir>/test/utils/faker-stub.ts',
    // ansi-styles v6+ is ESM-only; Jest (CJS) cannot parse `export`.
    // Point to a CJS shim that provides the minimal surface packages need.
    '^ansi-styles$': '<rootDir>/test/utils/ansi-styles-shim.js',
  },
};
