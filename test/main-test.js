(function() {
  var file, tests;

  tests = [];

  for (file in window.__karma__.files) {
    console.log(file);
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }

  requirejs.config({
    baseUrl: '/base/app/scripts',
    paths: {
      angular: '../bower_components/angular/angular.min',
      angularMocks: '../bower_components/angular-mocks/angular-mocks',
      angularRoute: '../bower_components/angular-route/angular-route.min',
      lodash: '../bower_components/lodash/dist/lodash.min'
    },
    shim: {
      'lodash': {
        exports: '_'
      },
      angular: {
        exports: 'angular'
      },
      angularRoute: ['angular'],
      angularMocks: {
        deps: ['angular'],
        exports: 'angular.mock'
      }
    },
    deps: tests,
    callback: window.__karma__.start
  });

}).call(this);
