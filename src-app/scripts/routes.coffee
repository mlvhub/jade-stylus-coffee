define ['angular', 'angularRoute'], (angular, ngRoute) ->

  routes = angular.module 'app.routes', ['ngRoute']
  routes.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->

    template = (fileName) -> '../templates/' + fileName + '.html'

    $routeProvider.when '/',
      templateUrl: template('login')

    $routeProvider.when '/login',
      templateUrl: template('login')
      controller: ->
        console.log 'logging in'

    $routeProvider.when '/sign-in',
      templateUrl: template('sign-in')

    $routeProvider.when '/todos',
      templateUrl: template('todo/index')
      controller: 'TodoCtrl'
      controllerAs: 'Todo'

    $routeProvider.when '/login',
      templateUrl: template('login')
      controller: ->
        console.log 'logging in'

    $routeProvider.when '/sign-in',
      templateUrl: template('sign-in')

    $routeProvider.otherwise redirectTo: '/'

    $routeProvider.otherwise redirectTo: '/'

    $locationProvider.html5Mode true
  ]
