module.exports = {
  output: "./allure-report",
  plugins: [
    "summary"
  ],
  categories: [
    {
      name: "Product defects",
      matchedStatuses: ["failed"],
      messageRegex: ".*AssertionError.*"
    },
    {
      name: "Test defects",
      matchedStatuses: ["broken"],
      messageRegex: ".*Exception.*"
    }
  ]
};
