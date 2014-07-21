define ['angular', 'app'], (angular, app) ->

  app.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
    $locationProvider.html5Mode true

    $routeProvider.when '/',
      templateUrl: '../templates/login.html'

    $routeProvider.when '/login',
      templateUrl: '../templates/login.html'
      controller: ->
        console.log 'logging in'

    $routeProvider.when '/sign-in',
      templateUrl: '../templates/sign-in.html'

    $routeProvider.otherwise redirectTo: '/'
  ]
