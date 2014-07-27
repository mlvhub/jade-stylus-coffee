(function() {
  define(['angular', 'angular-route'], function(angular, ngRoute) {
    var routes;
    routes = angular.module('routes', ['ngRoute']);
    return routes.config([
      '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        var template;
        $locationProvider.html5Mode(true);
        template = function(fileName) {
          return '../templates/' + fileName + '.html';
        };
        $routeProvider.when('/', {
          templateUrl: template('login')
        });
        $routeProvider.when('/login', {
          templateUrl: template('login'),
          controller: function() {
            return console.log('logging in');
          }
        });
        $routeProvider.when('/sign-in', {
          templateUrl: template('sign-in')
        });
        return $routeProvider.otherwise({
          redirectTo: '/'
        });
      }
    ]);
  });

}).call(this);
