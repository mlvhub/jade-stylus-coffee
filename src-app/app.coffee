define [
  'angular',
  'config/routes',
  'Todo/module'
], (angular, routes) ->
  console.log('app')
  angular.module 'app', [
    'app.routes',
    'todo'
  ]
