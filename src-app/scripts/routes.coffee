define ['angular', 'angularRoute'], (angular, ngRoute) ->

  console.log 'ROUTES ARE BEING EFFING LOADED!!! 1'
  routes = angular.module 'app.routes', ['ngRoute']
  routes.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->

    template = (fileName) -> '../templates/' + fileName + '.html'
    console.log 'ROUTES ARE BEING EFFING LOADED!!! !!!2'

    $routeProvider.when '/',
      templateUrl: template('login')

    $routeProvider.when '/login',
      templateUrl: template('login')
      controller: ->
        console.log 'logging in'

    $routeProvider.when '/sign-in',
      templateUrl: template('sign-in')

    $routeProvider.otherwise redirectTo: '/'

    $locationProvider.html5Mode true
  ]
