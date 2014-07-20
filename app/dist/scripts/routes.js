(function() {
  define(['app'], function(app) {
    return app.config([
      '$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
          templateUrl: 'index.html',
          controller: 'HomeController'
        });
        $routeProvider.when('/login', {
          templateUrl: 'templates/login.html',
          controller: 'HomeController'
        });
        $routeProvider.when('/sign-in', {
          templateUrl: 'templates/sign-in.html',
          controller: 'HomeController'
        });
        return $routeProvider.otherwise({
          redirectTo: '/'
        });
      }
    ]);
  });

}).call(this);
