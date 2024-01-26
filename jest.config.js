/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  rootDir: "./",
  coverageDirectory: "<rootDir>/coverage",
  collectCoverageFrom: [
    "<rootDir>/src/**/*.ts",
    "!<rootDir>/src/**/constant.ts",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules"],
  coverageReporters: ["json", "html"],
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  moduleNameMapper: {
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@features$": "<rootDir>/src/features/index.ts",
  },
  moduleDirectories: ["node_modules", "src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverage: true,
  coverageReporters: ["json", "lcov", "text", "clover"],
  coverageDirectory: "coverage",
};
