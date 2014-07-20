define ['app'], (app) ->

  app.config ['$routeProvider', ($routeProvider) ->
    $routeProvider.when '/',
      templateUrl: 'index.html'
      controller: 'HomeController'

    $routeProvider.when '/login',
      templateUrl: 'templates/login.html'
      controller: 'HomeController'

    $routeProvider.when '/sign-in',
      templateUrl: 'templates/sign-in.html'
      controller: 'HomeController'

    $routeProvider.otherwise
      redirectTo: '/'
  ]
