// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      // require('karma-chrome-launcher'),
      require('karma-phantomjs-launcher'), //This one is for jenkins
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-junit-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true,
      combineBrowserReports: true
    },
    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']
    },
    reporters: ['progress', 'kjhtml', 'dots', 'junit', 'coverage'], //'dots', 'junit', 'coverage'
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    //browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    singleRun: true, //Was true for jenkins
    junitReporter: {
      outputFile: 'test-results.xml',
      suite: ''
    }
  });
};
