(function() {
  require.config({
    baseUrl: '../scripts',
    paths: {
      lodash: '../bower_components/lodash/dist/lodash.min',
      angular: '../bower_components/angular/angular.min',
      angularRoute: '../bower_components/angular-route/angular-route.min'
    },
    shim: {
      'lodash': {
        exports: '_'
      },
      angular: {
        exports: 'angular'
      },
      angularRoute: ['angular']
    },
    priority: ['angular']
  });

  require(['angular', 'app', 'routes'], function(angular, app, routes) {
    return angular.element(document).ready(function() {
      return angular.bootstrap(document, [app.name]);
    });
  });

}).call(this);
