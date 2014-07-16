define ['app'], (app) ->

  app.config ['$routeProvider', ($routeProvider) ->
    $routeProvider.when '/',
      templateUrl: 'templates/home.html'
      controller: 'HomeController'

    $routeProvider.otherwise
      redirectTo: '/'
  ]
