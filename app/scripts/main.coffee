require.config
  baseUrl: '../../dist/scripts'

  paths:
    'lodash': '../bower_components/lodash/dist/lodash.min'
    'angular': '../bower_components/angular/angular.min'
    'angular-route': '../bower_components/angular-route/angular-route.min'

  shim:
    'angular': exports: 'angular'
    'angular-route': ['angular']

  priority: ['angular']

require [
  'angular',
  'app',
  'routes'
], (angular, app, routes) ->
  angular.element(document).ready ->
    angular.bootstrap(document, [app.name])
