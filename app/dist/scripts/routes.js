(function() {
  define(['angular', 'app'], function(angular, app) {
    console.log(app);
    return app.config([
      '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
          templateUrl: 'templates/login.html',
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
