(function() {
  define(['angular', 'angularRoute'], function(angular, ngRoute) {
    var routes;
    routes = angular.module('app.routes', ['ngRoute']);
    return routes.config([
      '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        var template;
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
        $routeProvider.when('/todos', {
          templateUrl: template('todo/index'),
          controller: 'TodoCtrl'
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
        $routeProvider.otherwise({
          redirectTo: '/'
        });
        return $locationProvider.html5Mode(true);
      }
    ]);
  });

}).call(this);
