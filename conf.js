exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['ALL_Selenium/Wait.js'],
  multiCapabilities: [{
    //browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
}