(function() {
  require.config({
    baseUrl: 'dist/scripts',
    paths: {
      'lodash': '../../bower_components/lodash/dist/lodash.min',
      'angular': '../../bower_components/angular/angular.min',
      'angular-route': '../../bower_components/angular-route/angular-route.min',
      'domReady': '../../bower_components/requirejs-domready/domReady'
    },
    shim: {
      'angular': {
        exports: 'angular',
        deps: ['domReady!']
      },
      'angular-route': {
        deps: ['angular']
      }
    }
  });

  define(['require', 'angular', 'app', 'routes'], function(require, angular) {
    return require(['domReady!'], function(document) {
      return angular.bootstrap(document, ['app']);
    });
  });

}).call(this);
