module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "@exmpl/(.*)": "<rootDir>/src/$1"
  },
  clearMocks: true,
  "reporters": [
    "default",
    ["./node_modules/jest-html-reporter", {
      "pageTitle": "Jest Test Report",
      "includeFailureMsg": true,
      "reportSuiteAsScenarios": true,
      "launchReport": true,
      "includeConsoleLog": true,
      "verbose": false
    }]
  ],
};


