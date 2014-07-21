(function() {
  define(['angular', 'app'], function(angular, app) {
    return app.config([
      '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $routeProvider.when('/', {
          templateUrl: '../templates/login.html'
        });
        $routeProvider.when('/login', {
          templateUrl: '../templates/login.html',
          controller: function() {
            return console.log('logging in');
          }
        });
        $routeProvider.when('/sign-in', {
          templateUrl: '../templates/sign-in.html'
        });
        return $routeProvider.otherwise({
          redirectTo: '/'
        });
      }
    ]);
  });

}).call(this);
