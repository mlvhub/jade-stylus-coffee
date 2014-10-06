define ['angular', 'angularRoute'], (angular, ngRoute) ->
  console.log('routes')

  routes = angular.module 'app.routes', ['ngRoute']
  routes.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->

    template = (fileName) -> '../' + fileName + '.html'

    $routeProvider.when '/todos',
      templateUrl: template('Todo/index')
      controller: 'TodoCtrl'

    $routeProvider.otherwise redirectTo: '/todos'

    $locationProvider.html5Mode true
  ]
