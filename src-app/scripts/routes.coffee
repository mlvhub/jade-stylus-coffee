define ['angular', 'angular-route'], (angular, ngRoute) ->

  routes = angular.module 'routes', ['ngRoute']
  routes.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
    $locationProvider.html5Mode true

    template = (fileName) -> '../templates/' + fileName + '.html'

    $routeProvider.when '/',
      templateUrl: template('login')

    $routeProvider.when '/login',
      templateUrl: template('login')
      controller: ->
        console.log 'logging in'

    $routeProvider.when '/sign-in',
      templateUrl: template('sign-in')

    $routeProvider.otherwise redirectTo: '/'
  ]
