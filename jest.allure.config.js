const os = require('os');

module.exports = {
  testEnvironment: "node",
  reporters: [
    "default",
    ["allure-jest", {
      resultsDir: "allure-results"
    }]
  ],
  testEnvironmentOptions: {
    environmentInfo: {
      os_platform: os.platform(),
      os_release: os.release(),
      os_version: os.version(),
      node_version: process.version,
    },
  }
};
