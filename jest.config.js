module.exports = {
    reporters: [
      'default',
      ['allure-jest', { outputDirectory: 'allure-results' }]
    ]
  };