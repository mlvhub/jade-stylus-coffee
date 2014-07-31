(function() {
  define(['angular', 'angularRoute'], function(angular, ngRoute) {
    var routes;
    console.log('ROUTES ARE BEING EFFING LOADED!!! 1');
    routes = angular.module('app.routes', ['ngRoute']);
    return routes.config([
      '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        var template;
        template = function(fileName) {
          return '../templates/' + fileName + '.html';
        };
        console.log('ROUTES ARE BEING EFFING LOADED!!! !!!2');
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
        $routeProvider.otherwise({
          redirectTo: '/'
        });
        return $locationProvider.html5Mode(true);
      }
    ]);
  });

}).call(this);
