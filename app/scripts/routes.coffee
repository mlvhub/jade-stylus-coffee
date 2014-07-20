define ['angular', 'app'], (angular, app) ->

  console.log app
  app.config ['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) ->
    $locationProvider.html5Mode true

    $routeProvider.when '/',
      templateUrl: 'templates/login.html'
      controller: 'HomeController'

    $routeProvider.when '/login',
      templateUrl: 'templates/login.html'
      controller: 'HomeController'

    $routeProvider.when '/sign-in',
      templateUrl: 'templates/sign-in.html'
      controller: 'HomeController'

    $routeProvider.otherwise redirectTo: '/'
  ]
