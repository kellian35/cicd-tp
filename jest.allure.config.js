const os = require('os');

module.exports = {
  testEnvironment: "allure-jest/node",
  testEnvironmentOptions: {
    environmentInfo: {
      os_platform: os.platform(),
      os_release: os.release(),
      os_version: os.version(),
      node_version: process.version,
    },
  },
  reporters: [
    "default",
    ["allure-jest", {
      resultsDir: "allure-results"
    }]
  ]
};
