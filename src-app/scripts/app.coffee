define [
  'angular',
  'routes',
  'todo/module'
], (angular, routes) ->
  angular.module 'app', [
    'app.routes',
    'todo'
  ]
